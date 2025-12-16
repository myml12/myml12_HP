import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import primeIcon from '../assets/瞬間素因数分解.png'

function PrimeFactorizationPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
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
              <img src={primeIcon} alt="瞬間素因数分解" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
              <div>
                <h1 className="hero-title">瞬間素因数分解</h1>
                <p className="hero-subtitle">Prime Factorization</p>
              </div>
            </div>
          </div>
          <p className="hero-description">
            最大11桁対応の高速素因数分解アルゴリズム。数学的な課題を効率的に解決するツールとして開発。複雑な数値計算を瞬時に処理し、指数表記で結果を表示します。
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              機能を見る
            </a>
            <a href="#tech" className="btn btn-outline">
              技術詳細
            </a>
            <a href="https://apps.apple.com/jp/app/%E7%9E%AC%E9%96%93%E7%B4%A0%E5%9B%A0%E6%95%B0%E5%88%86%E8%A7%A3-prime-factorization/id6478605149" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
            <p className="section-subtitle">高速で正確な素因数分解</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>高速アルゴリズム</h3>
              <p>最大11桁の数値を瞬時に素因数分解。効率的なアルゴリズムにより、複雑な計算も高速に処理します。</p>
            </div>

            <div className="feature-card">
              <h3>指数表記表示</h3>
              <p>結果を指数表記で表示。同じ素因数をまとめて見やすく表現し、数学的な理解を助けます。</p>
            </div>

            <div className="feature-card">
              <h3>シンプルなUI</h3>
              <p>直感的なインターフェースで、誰でも簡単に素因数分解を実行できます。</p>
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
              <p>効率的な素因数分解アルゴリズムの実装</p>
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
                数学的な課題を効率的に解決するツールとして開発しました。素因数分解は数学の基礎でありながら、大きな数値の処理には時間がかかります。このアプリは、その課題を技術で解決し、誰でも簡単に素因数分解を実行できるようにすることを目指しています。
              </p>
              <p>
                アルゴリズムの最適化に注力し、最大11桁の数値でも瞬時に結果を表示できるよう実装しました。また、結果を指数表記で表示することで、数学的な理解を深められるよう配慮しています。
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

export default PrimeFactorizationPage

