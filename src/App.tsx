import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ChuinfoPage from './pages/ChuinfoPage'
import RhythMapPage from './pages/RhythMapPage'
import CheckNextClassPage from './pages/CheckNextClassPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import PrimeFactorizationPage from './pages/PrimeFactorizationPage'
import HitAndBlowPage from './pages/HitAndBlowPage'
import ToyoinfoPage from './pages/ToyoinfoPage'
import MirurunPage from './pages/MirurunPage'
import rhythmapIcon from './assets/リズマップ.png'
import chuinfoIcon from './assets/Chuinfo.png'
import tsugidokoIcon from './assets/ツギドコ.png'
import primeIcon from './assets/瞬間素因数分解.png'
import toyoinfoIcon from './assets/toyoinfo.png'
import mirurunIcon from './assets/mirurun.png'
import hitAndBlowIcon from './assets/hit_and_blow_analyze.png'

function HomePage(): React.JSX.Element {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e: MouseEvent) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      })
    })
  }, [])

  return (
    <>
      <div className="app">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Yusuke Mizuno</h1>
            <div className="hero-social">
              <a href="https://github.com/myml12" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" />
                  </svg>
                </div>
                <span className="social-text">myml12</span>
              </a>
              <a href="https://x.com/myml_now" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
                  </svg>
                </div>
                <span className="social-text">@myml_now</span>
              </a>
              <a href="https://zenn.dev/myml12" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Zenn">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.877 0C5.42 0 .163 5.257.163 11.714c0 5.13 3.274 9.505 7.877 11.134-.108-.949-.199-2.403.041-3.434.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.487.535 6.458 0 11.714-5.257 11.714-11.714C23.592 5.257 18.335.001 11.877.001z" fill="currentColor" />
                  </svg>
                </div>
                <span className="social-text">Zenn</span>
              </a>
            </div>
            <p className="hero-subtitle">iOS & Web Developer</p>
            <p className="hero-description">
              ユーザーの課題解決とビジネス価値創出を両立するアプリ開発。技術力とマネタイズ戦略を兼ね備えた開発者として、持続可能なサービス運営を実践しています。
            </p>
            <div className="hero-buttons">
              <a href="#featured" className="btn btn-primary">主要プロジェクト</a>
              <a href="#about" className="btn btn-outline">詳細情報</a>
            </div>
          </div>
        </section>

        {/* Featured Apps Section */}
        <section id="featured" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                日常的な課題に寄り添い、技術で解決する。<br />
                学生生活からエンターテイメントまで、幅広い分野で価値を提供しています。
              </p>
            </div>

            <div className="featured-grid">
              {/* リズマップ */}
              <div className="featured-card">
                <div className="featured-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={rhythmapIcon} alt="RhythMap" style={{ width: '60px', height: '60px', borderRadius: '12px' }} />
                    <div>
                      <h3>RhythMap</h3>
                      <p className="featured-category">音ゲー店舗検索アプリ</p>
                    </div>
                  </div>
                  <div className="featured-stats">
                    <div className="stat-item">
                      <div className="stat-value">4.8K</div>
                      <div className="stat-label">DL</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">2K</div>
                      <div className="stat-label">MAU</div>
                    </div>
                  </div>
                </div>

                <p className="featured-description">
                  全国のゲームセンターにおけるAC音楽ゲーム情報を提供するアプリ。2024年5月にiOS版、6月にWeb版をリリースし、現在まで継続的な運営・メンテナンスを実施。現在地検索、店名検索、機種別台数絞り込み、便利情報の全文検索を実現。サービス開始前は台数情報がローカルな情報に限られていた課題を解決し、誰でも気軽に筐体配置や台数情報にアクセスできる環境を構築。AppStoreカテゴリ別ランキング（ナビゲーション）で最高4位を獲得。X（旧Twitter）を活用した情報提供募集により2000人以上から情報提供を受け、国内のみならず海外からの情報提供も受け付けるなど、サービスの範囲を拡大しています。
                </p>

                <div className="featured-features">
                  <div className="feature-row">
                    <span className="feature-label">主要機能</span>
                    <div className="feature-tags">
                      <span>店舗マップ</span>
                      <span>全文検索</span>
                      <span>設置台数検索</span>
                      <span>Pro版</span>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">技術スタック</span>
                    <div className="tech-tags">
                      <span>Swift</span>
                      <span>SwiftUI</span>
                      <span>MapKit</span>
                      <span>Firebase</span>
                      <span>StoreKit</span>
                      <span>GoogleMobileAds</span>
                      <span>UserDefaults</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <Link to="/rhythmap" className="btn btn-primary" style={{ flex: 1 }}>詳細を見る</Link>
                  <a href="https://apps.apple.com/jp/app/%E3%83%AA%E3%82%BA%E3%83%9E%E3%83%83%E3%83%97-%E9%9F%B3%E3%82%B2%E3%83%BC%E6%83%85%E5%A0%B1%E3%82%A2%E3%83%97%E3%83%AA/id6502974735" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>App Store</a>
                </div>
              </div>

              {/* Chuinfo */}
              <div className="featured-card">
                <div className="featured-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={chuinfoIcon} alt="Chuinfo" style={{ width: '60px', height: '60px', borderRadius: '12px' }} />
                    <div>
                      <h3>Chuinfo</h3>
                      <p className="featured-category">大学統合情報管理アプリ</p>
                    </div>
                  </div>
                  <div className="featured-stats">
                    <div className="stat-item">
                      <div className="stat-value">900</div>
                      <div className="stat-label">DL</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">600</div>
                      <div className="stat-label">MAU</div>
                    </div>
                  </div>
                </div>

                <p className="featured-description">
                  中央大学の学生生活を効率化するための統合情報管理アプリ。manabaとCplusとの自動連携により、課題管理や時間割情報を一元管理し、学生が日々直面する情報アクセスの煩雑さを解決しました。時間割画面からコースTOPやレポート提出画面への直接遷移、未提出課題の一覧表示とフィルタリング機能、NFC機能による友だちとの時間割共有など、学生生活に密着した機能を実装。WidgetKitを活用したホーム画面ウィジェットにより、時間割や次の教室情報をアプリを開かずに確認できる環境を構築。SwiftSoupによるWebスクレイピング技術を用いて、大学の公式システムと自動連携し、手動操作の手間を大幅に削減。
                </p>

                <div className="featured-features">
                  <div className="feature-row">
                    <span className="feature-label">主要機能</span>
                    <div className="feature-tags">
                      <span>時間割管理</span>
                      <span>課題管理</span>
                      <span>NFC共有</span>
                      <span>ウィジェット</span>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">技術スタック</span>
                    <div className="tech-tags">
                      <span>Swift</span>
                      <span>SwiftUI</span>
                      <span>SwiftSoup</span>
                      <span>WebKit</span>
                      <span>Firebase</span>
                      <span>Firestore</span>
                      <span>Firebase Analytics</span>
                      <span>CoreNFC</span>
                      <span>WidgetKit</span>
                      <span>UserDefaults</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <Link to="/chuinfo" className="btn btn-primary" style={{ flex: 1 }}>詳細を見る</Link>
                  <a href="https://apps.apple.com/jp/app/chuinfo-%E4%B8%AD%E5%A4%AE%E5%A4%A7%E7%94%9F%E5%90%91%E3%81%91%E9%9D%9E%E5%85%AC%E5%BC%8F%E3%82%A2%E3%83%97%E3%83%AA/id6670358906" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>App Store</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Other Projects</h2>
            </div>

            <div className="other-projects-grid">
              <div className="other-project-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img src={primeIcon} alt="瞬間素因数分解" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
                  <h4>瞬間素因数分解</h4>
                </div>
                <p>最大11桁対応の高速素因数分解アルゴリズム。数学的な課題を効率的に解決するツールとして開発。</p>
                <div className="tech-tags-small">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                  <span>アルゴリズム</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link to="/prime-factorization" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>詳細を見る</Link>
                  <a href="https://apps.apple.com/jp/app/%E7%9E%AC%E9%96%93%E7%B4%A0%E5%9B%A0%E6%95%B0%E5%88%86%E8%A7%A3-prime-factorization/id6478605149" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>App Store</a>
                </div>
              </div>

              <div className="other-project-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img src={hitAndBlowIcon} alt="Hit and Blow 解析" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
                  <h4>Hit and Blow 解析</h4>
                </div>
                <p>最適解アルゴリズムによるパズルゲーム解析。論理的思考を支援するツールとして実装。</p>
                <div className="tech-tags-small">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                  <span>アルゴリズム</span>
                  <span>GoogleMobileAds</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link to="/hit-and-blow" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>詳細を見る</Link>
                  <a href="https://apps.apple.com/jp/app/hit-and-blow-analyze-%E8%A7%A3%E6%9E%90/id6477672076" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>App Store</a>
                </div>
              </div>

              <div className="other-project-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img src={toyoinfoIcon} alt="Toyoinfo" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
                  <h4>Toyoinfo</h4>
                </div>
                <p>東洋大学専用学習支援アプリ。学生生活の効率化を目的に、時間割と課題管理を統合。</p>
                <div className="tech-tags-small">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                  <span>WebKit</span>
                  <span>Web Scraping</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link to="/toyoinfo" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>詳細を見る</Link>
                  <a href="https://apps.apple.com/jp/app/toyoinfo/id6739492265" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>App Store</a>
                </div>
              </div>

              <div className="other-project-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img src={mirurunIcon} alt="みるるん" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
                  <h4>みるるん</h4>
                </div>
                <p>動画自動検知ブラウザアプリ。ウェブページ上の動画をリール形式で快適に視聴できる体験を提供。</p>
                <div className="tech-tags-small">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                  <span>AVKit</span>
                  <span>WebKit</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link to="/mirurun" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>詳細を見る</Link>
                  <a href="https://apps.apple.com/jp/app/mirurun-%E3%81%BF%E3%82%8B%E3%82%8B%E3%82%93/id6751216709" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>App Store</a>
                </div>
              </div>

              <div className="other-project-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img src={tsugidokoIcon} alt="ツギドコ" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
                  <h4>ツギドコ</h4>
                </div>
                <p>iOSウィジェット教室案内アプリ。次の教室を瞬時に確認できるよう、WidgetKitを活用した実用的なツール。</p>
                <div className="tech-tags-small">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                  <span>WidgetKit</span>
                  <span>UserDefaults</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link to="/checknextclass" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>詳細を見る</Link>
                  <a href="https://apps.apple.com/jp/app/%E3%83%84%E3%82%AE%E3%83%89%E3%82%B3-%E6%95%99%E5%AE%A4%E3%82%92%E7%9E%AC%E6%99%82%E3%81%AB%E7%A2%BA%E8%AA%8D/id6499110752" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>App Store</a>
                </div>
              </div>

              <div className="other-project-card">
                <h4>無線局情報検索</h4>
                <p>アマチュア無線愛好家のための検索ツール。総務省の無線局情報APIと連携し、コールサイン・免許人名称・地域から詳細情報を検索可能。JCC（全国地方公共団体コード）データの処理と地域検索機能の実装により、都道府県・市区町村単位での柔軟な検索を実現。</p>
                <div className="tech-tags-small">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>Firebase</span>
                  <span>Cloud Functions</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <a href="https://hamradio-search.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>詳細を見る</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electronics Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Electronics Projects</h2>
              <p className="section-subtitle">
                ソフトウェアだけでなく、ハードウェアにも挑戦。電子工作を通じて、技術の幅を広げています。
              </p>
            </div>

            <div className="featured-grid">
              <div className="featured-card">
                <div className="featured-header">
                  <div>
                    <h3>ルービックキューブ全自動ソルブマシン</h3>
                    <p className="featured-category">電子工作プロジェクト</p>
                  </div>
                </div>

                <p className="featured-description">
                  大学祭で展示した、ルービックキューブを物理的に解くマシン。ステッピングモーターによる正確な面回転制御と、iOSアプリによる色認識機能を実装。Arduino、ESP32、Firebaseを組み合わせた無線制御システムを構築しました。
                </p>

                <div className="featured-features">
                  <div className="feature-row">
                    <span className="feature-label">主要機能</span>
                    <div className="feature-tags">
                      <span>ステッピングモーター制御</span>
                      <span>色認識（OpenCV）</span>
                      <span>無線制御</span>
                      <span>自動解法</span>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">技術スタック</span>
                    <div className="tech-tags">
                      <span>Arduino</span>
                      <span>ESP32</span>
                      <span>Swift</span>
                      <span>SwiftUI</span>
                      <span>OpenCV</span>
                      <span>Firebase</span>
                      <span>Python</span>
                      <span>kociemba</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <a href="https://zenn.dev/myml12/articles/2193ba5fffbc1e" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1 }}>記事を読む</a>
                  <a href="https://github.com/myml12/CubeSolver" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>GitHub</a>
                </div>
              </div>

              <div className="featured-card">
                <div className="featured-header">
                  <div>
                    <h3>鍵の施錠状態モニターシステム</h3>
                    <p className="featured-category">IoTプロジェクト</p>
                  </div>
                </div>

                <p className="featured-description">
                  サークル室の鍵の施錠状態をWebアプリでリアルタイムに確認できるIoTシステム。加速度センサーによる状態検知と、Firebase Realtime Databaseを活用したリアルタイム同期を実装。日常的な課題を技術で解決する実用的なプロジェクトです。
                </p>

                <div className="featured-features">
                  <div className="feature-row">
                    <span className="feature-label">主要機能</span>
                    <div className="feature-tags">
                      <span>加速度センサー</span>
                      <span>リアルタイム監視</span>
                      <span>Webアプリ連携</span>
                      <span>誤検知防止</span>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">技術スタック</span>
                    <div className="tech-tags">
                      <span>ESP32S3</span>
                      <span>Arduino</span>
                      <span>Firebase</span>
                      <span>Realtime Database</span>
                      <span>Next.js</span>
                      <span>JavaScript</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <a href="https://zenn.dev/myml12/articles/5842f31ae24b59" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1 }}>記事を読む</a>
                  <a href="https://github.com/myml12/key_sensor" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Key Metrics</h2>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">8.1K</div>
                <div className="metric-label">総ダウンロード数</div>
                <div className="metric-note">App Store</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">4.7</div>
                <div className="metric-label">平均評価</div>
                <div className="metric-note">App Store</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">2K</div>
                <div className="metric-label">MAU</div>
                <div className="metric-note">RhythMap</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">4位</div>
                <div className="metric-label">AppStore 最高ランキング</div>
                <div className="metric-note">RhythMap（ナビゲーションカテゴリ）</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About</h2>
              <p className="section-subtitle">
                ソフトウェアとハードウェアの両面からアプローチし、<br />
                より包括的なソリューションを提供しています
              </p>
            </div>

            <div className="about-content">
              <div className="about-column">
                <h3>開発理念</h3>
                <p>ユーザーの日常的な課題を解決し、生活をより便利で楽しいものにすることを目指しています。ソフトウェアとハードウェアの両面からアプローチすることで、単なるアプリ開発の枠を超えた、より包括的なソリューションを提供しています。学生生活やエンターテイメント分野でのソリューション提供に注力し、技術の力で社会に価値を提供しています。また、持続可能なビジネスモデルの構築を通じて、長期的にユーザーに価値を提供し続けることを重視しています。</p>
              </div>
              <div className="about-column">
                <h3>技術スタック</h3>
                <p><strong>iOS開発：</strong>Swift/SwiftUIによるネイティブアプリ開発。MapKitによる地図表示、WidgetKitによるホーム画面・ロック画面ウィジェット実装、WebKitによる埋め込みブラウザ、SwiftSoupによるWebスクレイピング、CoreNFCによるNFC通信、AVKitによる動画再生、StoreKitによるサブスクリプション課金システムなど、iOSの各種フレームワークを活用した実装経験があります。</p>
                <p style={{ marginTop: '1rem' }}><strong>バックエンド・データベース：</strong>Firebase（Firestore、Firebase Analytics、Firebase Realtime Database）を活用したサーバーレスアーキテクチャ。FirestoreによるNoSQLデータベース設計、Firebase Realtime Databaseによるリアルタイム同期など、スケーラブルなバックエンド構築を実現しています。</p>
                <p style={{ marginTop: '1rem' }}><strong>Web開発：</strong>React、Vite、Next.js、TypeScriptによるモダンなフロントエンド開発。HTML5/CSS3/JavaScriptによる従来型Web開発、外部APIとの連携によるデータ取得、CSVデータ処理による地域検索機能の実装など、多様なWeb技術を活用しています。</p>
                <p style={{ marginTop: '1rem' }}><strong>ハードウェア開発：</strong>Arduino、ESP32/ESP32S3による組み込みシステム開発。ステッピングモーター制御、加速度センサーによる状態検知、Firebase Realtime Databaseとの無線通信、OpenCVを活用した画像認識など、物理デバイスとクラウドサービスを連携させたIoTシステムの構築経験があります。</p>
              </div>
            </div>

            {/* Business Section */}
            <div className="business-section">
              <h3>ビジネス面での取り組み</h3>
              <p className="business-intro">
                単なるアプリ開発者としてだけでなく、持続可能なサービス運営のためのマネタイズ戦略も実践しています。
              </p>

              <div className="business-grid">
                <div className="business-card">
                  <h4>有料サブスクリプション</h4>
                  <p>RhythMapのPro版として有料サブスクリプション（3ヶ月/6ヶ月/1年プラン）を提供。StoreKitを活用した課金システムを実装し、継続的なサービス運営を実現しています。</p>
                </div>

                <div className="business-card">
                  <h4>広告収益モデル</h4>
                  <p>Google AdMob、A8.net、楽天アフィリエイトなど、複数の広告配信ツールを活用。無料ユーザーにも価値を提供しながら、適切な収益化を実現しています。</p>
                </div>

                <div className="business-card">
                  <h4>運営コストの管理</h4>
                  <p>App Store登録料、サーバー維持費、データ集計・チェック作業など、サービス継続のためのコストを適切に管理し、持続可能な運営を実現しています。</p>
                </div>

                <div className="business-card">
                  <h4>ユーザー分析とデータ活用</h4>
                  <p>Firebase Analyticsを活用したユーザー行動分析により、機能改善やマネタイズ戦略の最適化を継続的に実施。収集されたデータをもとに、プライバシーに配慮しながらサービス改善を進めています。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-card">
              <h2>Contact</h2>
              <p className="lead">ご質問やご相談がございましたら、お気軽にお問い合わせください</p>

              <div className="contact-info">
                <div className="contact-item">
                  <div>
                    <h5>Email</h5>
                    <p>jl1dma59@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <h5>X (Twitter)</h5>
                    <p>@myml_now</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:jl1dma59@gmail.com" className="btn btn-primary">メールで連絡</a>
                <a href="https://x.com/myml_now" target="_blank" rel="noopener noreferrer" className="btn btn-outline">X (Twitter)</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chuinfo" element={<ChuinfoPage />} />
      <Route path="/rhythmap" element={<RhythMapPage />} />
      <Route path="/checknextclass" element={<CheckNextClassPage />} />
      <Route path="/prime-factorization" element={<PrimeFactorizationPage />} />
      <Route path="/hit-and-blow" element={<HitAndBlowPage />} />
      <Route path="/toyoinfo" element={<ToyoinfoPage />} />
      <Route path="/mirurun" element={<MirurunPage />} />
      <Route path="/kiyaku.html" element={<TermsPage />} />
      <Route path="/privacy-policy.html" element={<PrivacyPage />} />
    </Routes>
  )
}

export default App
