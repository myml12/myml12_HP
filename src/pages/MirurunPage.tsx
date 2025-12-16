import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import mirurunIcon from '../assets/mirurun.png'

function MirurunPage(): React.JSX.Element {
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
              <img src={mirurunIcon} alt="みるるん" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
              <div>
                <h1 className="hero-title">みるるん</h1>
                <p className="hero-subtitle">Mirurun</p>
              </div>
            </div>
          </div>
          <p className="hero-description">
            動画自動検知ブラウザアプリ。ウェブページ上の動画をリール形式で快適に視聴できる体験を提供。通常のブラウジング機能に加え、ページ内の動画リンクを自動検知し、リールのように連続再生できます。
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              機能を見る
            </a>
            <a href="#tech" className="btn btn-outline">
              技術詳細
            </a>
            <a href="https://apps.apple.com/jp/app/mirurun-%E3%81%BF%E3%82%8B%E3%82%8B%E3%82%93/id6751216709" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
            <p className="section-subtitle">ブラウジングと動画体験をひとつにした革新的なアプリ</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h4>スマートブラウジング</h4>
              <p>通常のウェブブラウザーとして利用可能。ページ内の動画リンクを自動で検知・収集します。</p>
            </div>

            <div className="feature-card">
              <h4>動画自動検知</h4>
              <p>ページ内の動画リンク（.mp4, .m4v, .mov等）を自動検知し、Videoタブにまとめて表示します。</p>
            </div>

            <div className="feature-card">
              <h4>リール形式再生</h4>
              <p>横スワイプでサクサク切り替え。途切れない動画体験を提供します。</p>
            </div>

            <div className="feature-card">
              <h4>ブックマーク機能</h4>
              <p>ワンタップで保存できるブックマーク。お気に入りのページを素早く再訪できます。</p>
            </div>

            <div className="feature-card">
              <h4>ホーム画面</h4>
              <p>保存したブックマークを整理・管理。いつでもすぐアクセス可能です。</p>
            </div>

            <div className="feature-card">
              <h4>プライバシー重視</h4>
              <p>個人情報の収集は一切行わず、すべてのデータはローカルで管理されます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="howto" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">使い方（3ステップ）</h2>
            <p className="section-subtitle">簡単な操作で動画をリール形式で楽しめます</p>
          </div>

          <div className="features-grid">
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1</div>
              <h4>アクセスする</h4>
              <p>「みるるん」を起動し、いつものようにサイトを閲覧します。動画リンクは自動で検知され、内部キューに追加されます。</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2</div>
              <h4>Videoタブを開く</h4>
              <p>動画リンクのあるページに来たら、下部の<strong>Video</strong>タブをタップ。表示可能な動画があれば、動画が再生されます！</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3</div>
              <h4>横にスワイプ</h4>
              <p>1本見終わったら、そのまま<em>横にスワイプ</em>。次の動画へスムーズに切り替わり、快適な連続視聴ができます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section">
        <div className="container">
          <div className="info-card" style={{ textAlign: 'center' }}>
            <h3>サンプル動画でテスト</h3>
            <p className="lead" style={{ marginBottom: '2rem' }}>以下のURLはフリーで利用できるサンプルです。すでにこのサイトを「みるるん」で見ているなら、Videoタブではすでに動画が再生できます！</p>

            <div className="features-grid" style={{ marginBottom: '2rem' }}>
              <div className="feature-card">
                <h5>ForBiggerBlazes.mp4</h5>
                <a href="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>動画を開く</a>
              </div>
              <div className="feature-card">
                <h5>ForBiggerFun.mp4</h5>
                <a href="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>動画を開く</a>
              </div>
              <div className="feature-card">
                <h5>WeAreGoingOnBullrun.mp4</h5>
                <a href="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>動画を開く</a>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>提供元: Google (GTV sample videos bucket)</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">よくある質問</h2>
            <p className="section-subtitle">みるるんについてのよくある質問にお答えします</p>
          </div>

          <div className="info-card">
            <h4>どのような動画が検知されますか？</h4>
            <p>HTTP/HTTPS経由の一般的な <code>.mp4,.m4v,.mov,.avi,.wmv,.flv,.webm,.mkv</code> などの動画リンクに対応。埋め込みタイプでも、直リンクが取得できる場合は検知されます。</p>

            <h4 style={{ marginTop: '2rem' }}>ブックマークはどうやって追加しますか？</h4>
            <p>右下の <strong>★マークのボタン</strong> から一覧表示できます。ページタイトルやURLで整理され、いつでもすぐアクセス可能です。また長押しで削除も可能です！</p>

            <h4 style={{ marginTop: '2rem' }}>ブックマークはどこから見られますか？</h4>
            <p>左下の <strong>家マークのボタン</strong> から一覧表示できます。ページタイトルやURLで整理され、いつでもすぐアクセス可能です。また長押しで削除も可能です！</p>

            <h4 style={{ marginTop: '2rem' }}>プライバシーは大丈夫ですか？</h4>
            <p>「みるるん」は、ユーザーのプライバシーを最優先に考えて設計されています。個人情報の収集・保存は一切行わず、すべてのデータはローカルで管理されます。</p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <h3>プライバシーポリシー</h3>
            <p>「みるるん」は、ユーザーのプライバシーを最優先に考えて設計されています。</p>

            <h4 style={{ marginTop: '2rem' }}>データ収集について</h4>
            <p><strong>当アプリケーションは一切の個人情報やユーザーデータを収集しません。</strong></p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>🔒 個人情報の収集・保存は行いません</li>
              <li>📊 利用統計や行動データの収集は行いません</li>
              <li>🌐 ブラウジング履歴の外部送信は行いません</li>
              <li>📱 デバイス情報の収集は行いません</li>
              <li>🍪 追跡用のクッキーは使用しません</li>
            </ul>

            <h4 style={{ marginTop: '2rem' }}>データの取り扱い</h4>
            <p>ブックマークや設定情報は、お使いのデバイス内にのみ保存され、外部に送信されることはありません。すべてのデータはローカルで管理され、ユーザーが完全にコントロールできます。</p>

            <h4 style={{ marginTop: '2rem' }}>外部サービスとの連携</h4>
            <p>当アプリケーションは、ユーザーの同意なしに外部サービスとデータを共有することはありません。動画の再生は、ユーザーがアクセスしたウェブサイトのコンテンツを表示するのみです。</p>

            <p style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '0.9rem' }}>最終更新: 2025年 8月</p>
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
              <h3>AVKit</h3>
              <p>動画再生機能の実装</p>
            </div>

            <div className="info-card">
              <h3>WebKit</h3>
              <p>埋め込みブラウザによるWebページの表示と解析</p>
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
                ブラウジングと動画体験を統合することを目指して開発しました。ウェブページを閲覧している際、動画リンクを見つけると別のアプリを開く必要があり、体験が途切れてしまうことがあります。このアプリは、その課題を技術で解決し、通常のブラウジング機能に加えて、動画をリール形式で快適に視聴できる体験を提供することを目指しています。
              </p>
              <p>
                動画リンクの自動検知機能により、ユーザーが手動で動画を探す必要をなくしました。また、リール形式の再生により、SNSのような快適な操作感を実現しています。ブックマーク機能も追加し、お気に入りのページを素早く再訪できるようにしています。
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
            <p className="lead">ご意見・ご要望・不具合報告などは、以下のフォームからお気軽にお寄せください</p>

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

export default MirurunPage

