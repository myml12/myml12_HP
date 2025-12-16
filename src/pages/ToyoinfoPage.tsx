import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import toyoinfoIcon from '../assets/toyoinfo.png'

function ToyoinfoPage(): React.JSX.Element {
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
              <img src={toyoinfoIcon} alt="Toyoinfo" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
              <div>
                <h1 className="hero-title">Toyoinfo</h1>
                <p className="hero-subtitle">東洋大学専用学習支援アプリ</p>
              </div>
            </div>
          </div>
          <p className="hero-description">
            東洋大学専用の学習支援アプリ。学生生活の効率化を目的に、時間割と課題管理を統合。Toyonet - ACEとの自動連携により、日常的な学習管理を自動化します。
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              機能を見る
            </a>
            <a href="#tech" className="btn btn-outline">
              技術詳細
            </a>
            <a href="https://apps.apple.com/jp/app/toyoinfo/id6739492265" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
            <p className="section-subtitle">学生生活を効率化する統合機能</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>時間割管理</h3>
              <p>Toyonet - ACEから自動的に時間割を取得し、見やすい形式で表示。教室情報も自動取得します。</p>
            </div>

            <div className="feature-card">
              <h3>課題管理</h3>
              <p>未提出課題を自動的に取得し、通知設定により提出期限をリマインド。課題画面から直接提出可能。</p>
            </div>

            <div className="feature-card">
              <h3>自動データ取得</h3>
              <p>アプリ起動時に自動的にデータを更新。手動での更新も可能で、常に最新の情報を提供します。</p>
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
              <h3>WebKit</h3>
              <p>埋め込みブラウザによるWebページの表示と操作</p>
            </div>

            <div className="info-card">
              <h3>Web Scraping</h3>
              <p>HTML解析による自動データ取得</p>
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
                学生生活の効率化を目的に開発しました。大学の学習管理システムは便利ですが、複数の画面を行き来する必要があり、日常的な管理には手間がかかります。このアプリは、その課題を技術で解決し、時間割と課題管理を一つのアプリに統合することで、学生生活をより効率的にすることを目指しています。
              </p>
              <p>
                Web Scraping技術を活用し、Toyonet - ACEから自動的にデータを取得することで、ユーザーが手動で情報を確認する必要をなくしました。また、通知機能により、提出期限を忘れることなく課題に取り組めるよう配慮しています。
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

export default ToyoinfoPage

