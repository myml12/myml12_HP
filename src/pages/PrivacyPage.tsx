import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function PrivacyPage(): React.JSX.Element {
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
            <div className="app-icon">
              🛡️
            </div>
            <div>
              <h1 className="hero-title">プライバシーポリシー</h1>
              <p className="hero-subtitle">Privacy Policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              本プライバシーポリシー（以下、「本ポリシー」）は、個人が提供する「リズマップ」アプリケーション（以下、「本アプリ」）において、利用者の個人情報の取り扱いについて定めるものです。本アプリを利用することにより、本ポリシーに同意したものとみなされます。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第1条（個人情報の収集方法）</h3>
            <p>本アプリは、利用者が入力した情報、及び利用状況に関する情報を収集する場合があります。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第2条（個人情報の利用目的）</h3>
            <p>収集した個人情報は、以下の目的で利用します。</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>本アプリの提供および運営のため</li>
              <li>利用者からのお問い合わせに回答するため</li>
              <li>利用状況の分析やサービス向上のため</li>
            </ul>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第3条（個人情報の第三者提供）</h3>
            <p>当社は、次に掲げる場合を除いて、個人情報を第三者に提供することはありません。</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>利用者の同意がある場合</li>
              <li>法令に基づく場合</li>
            </ul>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第4条（個人情報の管理）</h3>
            <p>収集した個人情報は、適切な方法で管理し、漏洩、紛失、改ざん等の防止に努めます。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第5条（個人情報の開示、訂正、削除）</h3>
            <p>利用者は、自己の個人情報について、開示、訂正、削除を求めることができます。これらの請求があった場合、速やかに対応します。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第6条（位置情報の利用）</h3>
            <p>本アプリは、利用者の位置情報を要求しますが、これらの情報は利用者の利便性向上のためにのみ使用されます。</p>
            <p>本アプリの提供者は、位置情報を閲覧することはありません。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第7条（プライバシーポリシーの変更）</h3>
            <p>本ポリシーは、必要に応じて変更することがあります。変更後のポリシーは、本アプリ上に表示した時点から効力を生じるものとします。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第8条（お問い合わせ）</h3>
            <p>本ポリシーに関するお問い合わせは、下記の連絡先までお願いします。</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>お問い合わせ</h2>
            <p className="lead">本ポリシーに関するご質問がございましたら、お気軽にお問い合わせください</p>

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

export default PrivacyPage

