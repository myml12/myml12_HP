import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import fastPdfIcon from '../assets/FAST_PDF.png'
import SiteFooter from '../components/SiteFooter'

function FastPdfPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="app">
      <Link to="/" className="back-button">
        <span>←</span>
        戻る
      </Link>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img src={fastPdfIcon} alt="FAST PDF" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
              <div>
                <h1 className="hero-title">FAST PDF</h1>
                <p className="hero-subtitle">PDF Editor for iPhone & iPad</p>
              </div>
            </div>
          </div>
          <p className="hero-description">
            iPhone・iPadでPDFを読み込み、編集し、結合できるシンプルなPDF編集アプリです。資料の整理からメモ書きまで、日常のPDF作業をスムーズに行えます。
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              機能を見る
            </a>
            <a href="#tech" className="btn btn-outline">
              技術詳細
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">主な機能</h2>
            <p className="section-subtitle">読み込みから編集・結合まで、PDF作業をひとつのアプリで</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>PDFをすばやく読み込み</h3>
              <p>ファイルアプリから複数のPDFをまとめて追加。他のアプリの「FAST PDFで開く」から直接取り込み。iPadでは画面へのドラッグ＆ドロップにも対応。</p>
            </div>

            <div className="feature-card">
              <h3>複数PDFを1つに結合</h3>
              <p>リストの順番どおりに1つのPDFへ結合。出力ファイル名を自由に設定。結合後はプレビュー・共有・保存が可能。</p>
            </div>

            <div className="feature-card">
              <h3>ページ単位の編集</h3>
              <p>サムネイル一覧でページを確認。回転・削除・並べ替えに対応。並べ替え後も元のページ番号を表示。</p>
            </div>

            <div className="feature-card">
              <h3>手軽な注釈ツール</h3>
              <p>ハイライト（テキスト選択でマーカー）、ペン（手書きメモ・太さ4段階・色6色）、テキスト（追加・移動・サイズ変更）、消しゴム（不要な注釈を削除）。</p>
            </div>

            <div className="feature-card">
              <h3>快適な編集操作</h3>
              <p>元に戻す／やり直しに対応。1本指で描画・タップ、2本指で拡大縮小・移動。編集内容はファイルごとに保存。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">技術スタック</h2>
            <p className="section-subtitle">iOSネイティブによるPDF編集体験</p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Swift</h3>
              <p>型安全で高性能なプログラミング言語</p>
            </div>

            <div className="info-card">
              <h3>SwiftUI</h3>
              <p>宣言的UIフレームワークによるモダンなインターフェース</p>
            </div>

            <div className="info-card">
              <h3>PDFKit</h3>
              <p>PDFの読み込み・表示・編集・結合を実現</p>
            </div>

            <div className="info-card">
              <h3>UIKit</h3>
              <p>PDF注釈やジェスチャー操作などの高度な編集機能</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>お問い合わせ</h2>
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
      <SiteFooter />
    </div>
  )
}

export default FastPdfPage
