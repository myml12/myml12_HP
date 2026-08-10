import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import chuinfoIcon from '../assets/Chuinfo.png'
import './ChuinfoAdvertisingPage.css'

const CONTACT_URL = 'mailto:jl1dma59@gmail.com?subject=Chuinfo%E5%BA%83%E5%91%8A%E6%8E%B2%E8%BC%89%E3%81%AE%E7%9B%B8%E8%AB%87'

function ChuinfoAdvertisingPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'Chuinfo 広告掲載のご案内 | 中央大学生へ届く広告'
    if (description) {
      description.content = '4,000人以上が利用、月間アクティブユーザー3,000人以上の中央大学生向けアプリ「Chuinfo」への広告掲載をご案内します。'
    }

    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.content = previousDescription
    }
  }, [])

  return (
    <div className="chuinfo-ad-page">
      <header className="chuinfo-ad-nav">
        <Link to="/" className="chuinfo-ad-nav__back">MINAMO Studio</Link>
        <a href="#contact" className="chuinfo-ad-nav__cta">掲載を相談する</a>
      </header>

      <main>
        <section className="chuinfo-ad-hero">
          <div className="chuinfo-ad-hero__glow" aria-hidden="true" />
          <div className="chuinfo-ad-shell chuinfo-ad-hero__grid">
            <div className="chuinfo-ad-hero__copy">
              <p className="chuinfo-ad-eyebrow">CHUINFO ADVERTISING</p>
              <div className="chuinfo-ad-brand">
                <img src={chuinfoIcon} alt="Chuinfo" />
                <span>中央大学生向けアプリ</span>
              </div>
              <h1>中央大学生に、<br /><em>まっすぐ届く。</em></h1>
              <p className="chuinfo-ad-hero__lead">
                時間割や課題を確認する学生生活の導線に、あなたのサービスやイベントを届けませんか。
                Chuinfoでは、学生に役立つ情報の広告掲載を受け付けています。
              </p>
              <div className="chuinfo-ad-actions">
                <a href={CONTACT_URL} className="chuinfo-ad-button chuinfo-ad-button--primary">
                  掲載について相談する
                </a>
                <a href="#details" className="chuinfo-ad-button chuinfo-ad-button--secondary">掲載内容を見る</a>
              </div>
              <p className="chuinfo-ad-note">料金・掲載期間は内容に応じて個別にご案内します。</p>
            </div>

            <div className="chuinfo-ad-hero__visual">
              <div className="chuinfo-ad-banner-frame">
                <img src="/chuinfo-advertising/chuinfo-ad-pr.png" alt="Chuinfo広告掲載受付中。4,000人以上が利用、アクティブユーザー3,000人以上" />
              </div>
              <p>実際のアプリ内広告に使える3:1クリエイティブ</p>
            </div>
          </div>
        </section>

        <section className="chuinfo-ad-proof" aria-label="Chuinfoの利用実績">
          <div className="chuinfo-ad-shell chuinfo-ad-proof__grid">
            <div className="chuinfo-ad-proof__item">
              <strong>4,000<span>+</span></strong>
              <p>利用者</p>
            </div>
            <div className="chuinfo-ad-proof__item">
              <strong>3,000<span>+</span></strong>
              <p>月間アクティブユーザー</p>
            </div>
            <div className="chuinfo-ad-proof__item chuinfo-ad-proof__item--copy">
              <strong>中央大学生</strong>
              <p>対象が明確な学生向けメディア</p>
            </div>
          </div>
          <p className="chuinfo-ad-proof__source">※利用実績はChuinfo運営による集計値です。</p>
        </section>

        <section id="details" className="chuinfo-ad-section">
          <div className="chuinfo-ad-shell">
            <div className="chuinfo-ad-section__heading">
              <p className="chuinfo-ad-eyebrow">WHY CHUINFO</p>
              <h2>学生の「確認する時間」に<br />自然なかたちで届きます。</h2>
              <p>情報を探しているタイミングで表示されるため、中央大学生向けの告知と相性のよい広告枠です。</p>
            </div>

            <div className="chuinfo-ad-benefits">
              <article>
                <span>01</span>
                <h3>届けたい相手が明確</h3>
                <p>中央大学生が中心のアプリだから、学生向けサービスやキャンパス周辺の告知を無駄なく届けられます。</p>
              </article>
              <article>
                <span>02</span>
                <h3>学生生活の導線に掲載</h3>
                <p>時間割・課題・大学システムを確認する流れの中に、視認性の高いピックアップカードとして掲載します。</p>
              </article>
              <article>
                <span>03</span>
                <h3>期間を指定して運用</h3>
                <p>新歓、イベント、キャンペーンなどに合わせて掲載期間を設定できます。リンク先も自由に指定可能です。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="chuinfo-ad-section chuinfo-ad-section--tint">
          <div className="chuinfo-ad-shell chuinfo-ad-fit">
            <div className="chuinfo-ad-fit__copy">
              <p className="chuinfo-ad-eyebrow">BEST FIT</p>
              <h2>こんな告知におすすめです。</h2>
              <p>学生にとって有益で、安心して案内できる内容を中心に掲載しています。</p>
            </div>
            <div className="chuinfo-ad-fit__list">
              <div><strong>サークル・学生団体</strong><span>新歓、説明会、学園祭、メンバー募集</span></div>
              <div><strong>学生向けサービス</strong><span>学習、キャリア、住まい、生活支援</span></div>
              <div><strong>店舗・イベント</strong><span>キャンパス周辺店舗、期間限定企画、学生特典</span></div>
              <div><strong>採用・インターン</strong><span>大学生向けの募集、説明会、キャリアイベント</span></div>
            </div>
          </div>
        </section>

        <section className="chuinfo-ad-section">
          <div className="chuinfo-ad-shell chuinfo-ad-format">
            <div className="chuinfo-ad-format__preview">
              <p className="chuinfo-ad-format__label">アプリ内の掲載イメージ</p>
              <div className="chuinfo-ad-card">
                <div className="chuinfo-ad-card__image">
                  <img src="/chuinfo-advertising/chuinfo-ad-pr.png" alt="広告掲載イメージ" />
                  <span>PR</span>
                </div>
                <div className="chuinfo-ad-card__body">
                  <strong>広告タイトル</strong>
                  <p>サービスやイベントの魅力を短く紹介します。</p>
                  <span>詳しく見る →</span>
                </div>
              </div>
            </div>
            <div className="chuinfo-ad-format__copy">
              <p className="chuinfo-ad-eyebrow">FORMAT</p>
              <h2>画像とリンクで、<br />シンプルに伝える。</h2>
              <ul>
                <li><strong>画像</strong><span>3:1または2:1のバナー画像</span></li>
                <li><strong>テキスト</strong><span>タイトルと補足文</span></li>
                <li><strong>リンク</strong><span>Webサイト、SNS、申込フォームなど</span></li>
                <li><strong>掲載期間</strong><span>開始日時・終了日時を指定可能</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="chuinfo-ad-section chuinfo-ad-section--dark">
          <div className="chuinfo-ad-shell">
            <div className="chuinfo-ad-section__heading chuinfo-ad-section__heading--light">
              <p className="chuinfo-ad-eyebrow">HOW IT WORKS</p>
              <h2>掲載までの流れ</h2>
            </div>
            <ol className="chuinfo-ad-steps">
              <li><span>1</span><div><strong>問い合わせ</strong><p>告知したい内容と希望時期をお知らせください。</p></div></li>
              <li><span>2</span><div><strong>内容・期間をご案内</strong><p>掲載可否、期間、料金、必要素材をご案内します。</p></div></li>
              <li><span>3</span><div><strong>素材を入稿</strong><p>画像、タイトル、説明文、リンク先をご用意ください。</p></div></li>
              <li><span>4</span><div><strong>掲載開始</strong><p>内容を確認後、指定した期間にChuinfoへ掲載します。</p></div></li>
            </ol>
          </div>
        </section>

        <section id="contact" className="chuinfo-ad-contact">
          <div className="chuinfo-ad-shell chuinfo-ad-contact__card">
            <div>
              <p className="chuinfo-ad-eyebrow">CONTACT</p>
              <h2>中央大学生へ届けたい情報を、<br />まずはお聞かせください。</h2>
              <p>内容が固まっていない段階でも大丈夫です。掲載方法や期間を個別にご案内します。</p>
            </div>
            <a href={CONTACT_URL} className="chuinfo-ad-button chuinfo-ad-button--line">
              メールで掲載について相談する
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ChuinfoAdvertisingPage
