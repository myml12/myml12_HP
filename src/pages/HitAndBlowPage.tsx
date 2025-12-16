import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import hitAndBlowIcon from '../assets/hit_and_blow_analyze.png'

function HitAndBlowPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="app">
      <Link to="/" className="back-button">
        <span>←</span>
        戻る
      </Link>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img src={hitAndBlowIcon} alt="Hit and Blow 解析" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
              <div>
                <h1 className="hero-title">Hit and Blow 解析</h1>
                <p className="hero-subtitle">Hit and Blow Analyze</p>
              </div>
            </div>
          </div>
          <p className="hero-description">
            最適解アルゴリズムによるパズルゲーム解析。論理的思考を支援するツールとして実装。数字当てゲーム「Hit and Blow」の最適な解答を導き出します。
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              機能を見る
            </a>
            <a href="#tech" className="btn btn-outline">
              技術詳細
            </a>
            <a href="https://apps.apple.com/jp/app/hit-and-blow-analyze-%E8%A7%A3%E6%9E%90/id6477672076" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              App Store
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">主な機能</h2>
            <p className="section-subtitle">論理的思考を支援する解析ツール</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>最適解アルゴリズム</h3>
              <p>効率的なアルゴリズムにより、可能な解答候補を絞り込み、最適な解答を導き出します。</p>
            </div>

            <div className="feature-card">
              <h3>3桁・4桁対応</h3>
              <p>3桁と4桁の両方のモードに対応。様々な難易度のパズルを解析できます。</p>
            </div>

            <div className="feature-card">
              <h3>直感的な操作</h3>
              <p>シンプルなインターフェースで、誰でも簡単にパズルを解析できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">技術スタック</h2>
            <p className="section-subtitle">モダンなiOS開発技術</p>
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
              <h3>アルゴリズム</h3>
              <p>最適解を導き出す効率的なアルゴリズムの実装</p>
            </div>

            <div className="info-card">
              <h3>GoogleMobileAds</h3>
              <p>広告収益モデルによる持続可能なサービス運営</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">制作の思い</h2>
          </div>
          <div className="about-content">
            <div className="about-column">
              <p>
                論理的思考を支援するツールとして開発しました。Hit and Blowは単純なルールながら、最適な解答を見つけるには論理的思考が必要です。このアプリは、その思考プロセスを支援し、パズルを楽しみながら論理的思考力を養えるようにすることを目指しています。
              </p>
              <p>
                アルゴリズムの最適化に注力し、可能な解答候補を効率的に絞り込むことで、最適な解答を素早く導き出せるよう実装しました。また、3桁と4桁の両方のモードに対応することで、様々な難易度のパズルに対応できるようにしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  )
}

export default HitAndBlowPage

