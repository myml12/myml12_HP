import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function TermsPage(): React.JSX.Element {
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
              📋
            </div>
            <div>
              <h1 className="hero-title">利用規約</h1>
              <p className="hero-subtitle">Terms of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              本利用規約（以下、「本規約」）は、個人が提供する「リズマップ」アプリケーション（以下、「本アプリ」）の利用条件を定めるものです。本アプリを利用される前に、本規約をよくお読みください。本アプリを利用することにより、本規約に同意したものとみなされます。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第1条（適用）</h3>
            <p>本規約は、本アプリの利用に関わる一切の関係に適用されるものとします。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第2条（利用料金）</h3>
            <p>本アプリは、無料のLiteプランと有料（サブスクリプション）のProプランがございます。</p>
            <p>Proプランには、3ヶ月更新、6ヶ月更新、一年更新のプランがあり、それぞれ自動更新されます。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第3条（禁止事項）</h3>
            <p>利用者は、本アプリの利用に際して、以下の行為を行ってはならないものとします。</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本アプリの他の利用者または第三者の権利を侵害する行為</li>
              <li>その他、不適切と判断する行為</li>
            </ul>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第4条（情報の正確性）</h3>
            <p>1. 本アプリはユーザーが提供する情報に基づいて情報を提供しています。運営チームでできる限り精査等は行いますが、掲載される情報の正確性、完全性、最新性は保証されません。</p>
            <p>2. 本アプリで得た情報に誤りがあった場合、それによって生じた利用者の不利益、損害について、一切の責任を負いません。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第5条（免責事項）</h3>
            <p>1. 本アプリの提供、遅滞、変更、中断、中止、停止、または廃止に関連して利用者に生じた損害について、一切の責任を負いません。</p>
            <p>2. 本アプリの利用に関連して利用者に生じた損害について、一切の責任を負いません。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第6条（利用制限および利用停止）</h3>
            <p>以下の場合には、事前の通知なく、利用者に対して本アプリの利用を制限し、または利用を停止することができます。</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>本規約のいずれかの条項に違反した場合</li>
              <li>その他、本アプリの利用が適当でないと判断した場合</li>
            </ul>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第7条（変更）</h3>
            <p>本規約は、必要と判断した場合には、いつでも変更することができます。変更後の規約は、当サイトの更新時点から効力を生じるものとします。</p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第8条（準拠法および管轄）</h3>
            <p>本規約の解釈にあたっては、日本法を準拠法とします。本アプリに関連して生じた紛争については、提供者の住所地を管轄する裁判所を専属的合意管轄裁判所とします。</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>お問い合わせ</h2>
            <p className="lead">本規約に関するご質問がございましたら、お気軽にお問い合わせください</p>

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

export default TermsPage

