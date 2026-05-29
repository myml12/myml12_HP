import React from 'react'
import minamoChar from '../assets/MINAMO_Studio_char.png'

/** 素材サイズ 1141×119（横長ロゴ） */
const CHAR_WIDTH = 1141
const CHAR_HEIGHT = 119

export type MinamoBrandCharVariant = 'hero' | 'footer'

type MinamoBrandCharProps = {
  variant: MinamoBrandCharVariant
  className?: string
}

function MinamoBrandChar({ variant, className }: MinamoBrandCharProps): React.JSX.Element {
  const classes = ['minamo-brand-char', `minamo-brand-char--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <img
      src={minamoChar}
      alt="MINAMO Studio"
      className={classes}
      width={CHAR_WIDTH}
      height={CHAR_HEIGHT}
      decoding="async"
    />
  )
}

export default MinamoBrandChar
