import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import fastPdfIcon from '../assets/FAST_PDF.png'
import SiteFooter from '../components/SiteFooter'

function FastPdfPrivacyPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="app">
      <Link to="/fast-pdf" className="back-button">
        <span>←</span>
        FAST PDF に戻る
      </Link>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img src={fastPdfIcon} alt="FAST PDF" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
              <div>
                <h1 className="hero-title">プライバシーポリシー</h1>
                <p className="hero-subtitle">FAST PDF — Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="info-card">
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              本プライバシーポリシー（以下、「本ポリシー」）は、MINAMO Studio（以下、「当事業者」）が提供する「FAST PDF」アプリケーション（以下、「本アプリ」）において、利用者の個人情報およびデータの取り扱いについて定めるものです。本アプリを利用することにより、本ポリシーに同意したものとみなされます。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第1条（基本方針）</h3>
            <p>
              本アプリは、PDFの読み込み・編集・結合をデバイス上で行うユーティリティアプリです。利用者のプライバシーを尊重し、個人情報の収集を最小限に抑える設計としています。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第2条（収集する情報）</h3>
            <p>本アプリは、以下の情報を当事業者のサーバー等に送信・収集することはありません。</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>氏名、メールアドレス、電話番号等の個人を特定できる情報</li>
              <li>利用者が読み込んだPDFファイルの内容</li>
              <li>注釈・編集内容などのPDFに対する操作データ</li>
              <li>位置情報、連絡先、カメラ・マイク等のデバイスデータ</li>
              <li>利用統計や行動データ</li>
            </ul>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第3条（データの保存と管理）</h3>
            <p>
              本アプリで取り扱うPDFファイルおよび編集内容は、利用者のデバイス内（ファイルアプリ等）に保存されます。これらのデータは利用者自身が管理し、当事業者が閲覧・保存することはありません。
            </p>
            <p style={{ marginTop: '1rem' }}>
              アプリ内の設定や編集状態など、アプリの動作に必要な情報もデバイス内にのみ保持されます。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第4条（外部サービスとの連携）</h3>
            <p>
              本アプリは、利用者が共有・保存機能を使用した場合に限り、iOSの標準機能（共有シート等）を通じて他のアプリやサービスへデータを送ることがあります。この操作は利用者自身の意思に基づいて行われるものであり、当事業者が自動的にデータを外部へ送信することはありません。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第5条（第三者提供）</h3>
            <p>
              当事業者は、法令に基づく場合を除き、利用者の個人情報等を第三者に提供することはありません。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第6条（お子様の利用）</h3>
            <p>
              本アプリは、13歳未満の方を対象としたサービスではありません。13歳未満の方が本アプリを利用する場合は、保護者の同意のもとでご利用ください。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第7条（プライバシーポリシーの変更）</h3>
            <p>
              本ポリシーは、必要に応じて変更することがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じるものとします。
            </p>

            <h3 style={{ color: 'var(--accent-primary)', marginTop: '2rem', marginBottom: '1rem' }}>第8条（お問い合わせ）</h3>
            <p>本ポリシーに関するお問い合わせは、下記の連絡先までお願いします。</p>

            <p style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '0.9rem' }}>最終更新: 2026年 6月</p>
          </div>
        </div>
      </section>

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
      <SiteFooter />
    </div>
  )
}

export default FastPdfPrivacyPage
