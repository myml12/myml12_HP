import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const faviconPath = path.join(rootDir, 'public', 'favicon.svg')
const outputPath = path.join(rootDir, 'public', 'og-image.svg')

function prefixSvgIds(svgContent, prefix) {
  return svgContent
    .replace(/\bid="([^"]+)"/g, (_, id) => `id="${prefix}-${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${prefix}-${id})`)
    .replace(/href="#([^"]+)"/g, (_, id) => `href="#${prefix}-${id}"`)
}

function extractInnerSvg(svgRaw) {
  const viewBoxMatch = svgRaw.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 576 576'
  const inner = svgRaw
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim()
  return { viewBox, inner }
}

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const faviconRaw = await readFile(faviconPath, 'utf8')
  const { viewBox, inner } = extractInnerSvg(faviconRaw)
  const imageHrefMatch = inner.match(/<image[^>]+href="([^"]+)"/)
  let iconInner = inner

  if (imageHrefMatch) {
    const iconRef = imageHrefMatch[1]
    const localIconPath = iconRef.startsWith('/')
      ? path.join(rootDir, 'public', iconRef.slice(1))
      : path.join(path.dirname(faviconPath), iconRef)
    const hasReferencedFile = await fileExists(localIconPath)

    if (!hasReferencedFile) {
      // Fallback icon if favicon.svg depends on an unavailable raster file.
      iconInner = `
        <rect width="576" height="576" rx="120" fill="#0B1120"/>
        <rect x="10" y="10" width="556" height="556" rx="110" stroke="#7DD3FC" stroke-opacity="0.85" stroke-width="20"/>
        <text x="288" y="330" text-anchor="middle" fill="#E2E8F0" font-family="Inter, 'Noto Sans JP', sans-serif" font-size="180" font-weight="700">YM</text>
      `.trim()
      console.warn(`Referenced icon file is missing: ${path.relative(rootDir, localIconPath)}. Using fallback icon.`)
    } else {
      const fileExt = path.extname(localIconPath).toLowerCase()
      const mimeType =
        fileExt === '.png'
          ? 'image/png'
          : fileExt === '.jpg' || fileExt === '.jpeg'
            ? 'image/jpeg'
            : fileExt === '.webp'
              ? 'image/webp'
              : fileExt === '.svg'
                ? 'image/svg+xml'
                : null

      if (mimeType) {
        const raw = await readFile(localIconPath)
        const base64 = raw.toString('base64')
        const dataUri = `data:${mimeType};base64,${base64}`
        iconInner = iconInner.replace(
          /(<image[^>]+href=")([^"]+)(")/,
          `$1${dataUri}$3`
        )
      }
    }
  }

  const safeInner = prefixSvgIds(iconInner, 'ogicon')

  const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0F172A"/>
      <stop offset="1" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#22D3EE" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#3B82F6" stop-opacity="0.24"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1020" cy="90" r="220" fill="#38BDF8" fill-opacity="0.12"/>
  <circle cx="180" cy="550" r="180" fill="#22D3EE" fill-opacity="0.10"/>
  <rect x="70" y="70" width="1060" height="490" rx="30" fill="url(#accent)" stroke="#67E8F9" stroke-opacity="0.4"/>

  <rect x="120" y="170" width="220" height="220" rx="44" fill="#0B1120" stroke="#7DD3FC" stroke-opacity="0.85"/>
  <svg x="148" y="198" width="164" height="164" viewBox="${viewBox}">
    ${safeInner}
  </svg>

  <text x="380" y="240" fill="#E2E8F0" font-family="Inter, 'Noto Sans JP', sans-serif" font-size="34" font-weight="500" letter-spacing="2">PORTFOLIO</text>
  <text x="380" y="330" fill="white" font-family="Inter, 'Noto Sans JP', sans-serif" font-size="78" font-weight="700">Yusuke Mizuno</text>
  <text x="380" y="400" fill="#BFDBFE" font-family="Inter, 'Noto Sans JP', sans-serif" font-size="38" font-weight="500">iOS and Web Developer</text>
  <text x="380" y="455" fill="#E0F2FE" font-family="Inter, 'Noto Sans JP', sans-serif" font-size="28" font-weight="500">Projects / Metrics / Awards</text>
</svg>
`

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, ogSvg, 'utf8')
  console.log(`Generated: ${path.relative(rootDir, outputPath)}`)
}

main().catch((error) => {
  console.error('Failed to generate OGP image:', error)
  process.exit(1)
})
