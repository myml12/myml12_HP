import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import primeIcon from '../assets/瞬間素因数分解.png'
import SiteFooter from '../components/SiteFooter'

function PrimeFactorizationPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="app prime-factorization-page">
      <Link to="/" className="back-button">
        <span>←</span>
        戻る
      </Link>

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
            数を入力するだけで高速に素因数分解。最大約20桁まで対応し、結果は 2<sup>2</sup> × 3 のような指数表記でも表示が可能です。
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              機能を見る
            </a>
            <a href="#algorithm" className="btn btn-outline">
              処理の流れ
            </a>
            <a href="https://apps.apple.com/jp/app/%E7%9E%AC%E9%96%93%E7%B4%A0%E5%9B%A0%E6%95%B0%E5%88%86%E8%A7%A3-prime-factorization/id6478605149" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              App Store
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">主な機能</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>すぐに結果が出る</h3>
              <p>入力した数を、その場で素因数に分解します。</p>
            </div>

            <div className="feature-card">
              <h3>最大約20桁</h3>
              <p>手計算では大変な大きな整数にも対応します。</p>
            </div>

            <div className="feature-card">
              <h3>指数表記</h3>
              <p>同じ素数をまとめて、見やすく表示します。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="algorithm" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">処理の流れ</h2>
            <p className="section-subtitle">
              試割り・Miller–Rabin・Pollard&apos;s rho の3つを組み合わせ、入力から分解完了まで自動で進みます
            </p>
          </div>

          <div className="algo-flow-panel">
            <div className="algo-flow algo-flow--hero" aria-label="素因数分解の処理フロー">
              <div className="algo-flow-node algo-flow-node--start">
                <span className="algo-flow-step">START</span>
                入力した数
              </div>

              <div className="algo-flow-arrow" aria-hidden="true">↓</div>

              <div className="algo-flow-node algo-flow-node--accent">
                <span className="algo-flow-badge">試割り</span>
                2〜47 の小さい素数で割る
              </div>

              <div className="algo-flow-arrow" aria-hidden="true">↓</div>

              <div className="algo-flow-node algo-flow-node--decision">
                まだ 1 より大きい数が残っている？
              </div>

              <div className="algo-flow-branch algo-flow-branch--hero">
                <div className="algo-flow-branch-col">
                  <span className="algo-flow-branch-label">いいえ</span>
                  <div className="algo-flow-node algo-flow-node--end">
                    <span className="algo-flow-step">END</span>
                    分解完了
                  </div>
                </div>

                <div className="algo-flow-branch-col algo-flow-branch-col--wide">
                  <span className="algo-flow-branch-label">はい</span>

                  <div className="algo-flow-node algo-flow-node--accent algo-flow-node--decision">
                    <span className="algo-flow-badge">Miller–Rabin</span>
                    残りは素数？
                  </div>

                  <div className="algo-flow-subbranch algo-flow-subbranch--hero">
                    <div className="algo-flow-branch-col">
                      <span className="algo-flow-branch-label">素数</span>
                      <div className="algo-flow-node">答えにその数を入れる</div>
                    </div>

                    <div className="algo-flow-branch-col">
                      <span className="algo-flow-branch-label">まだ割れる</span>
                      <div className="algo-flow-node algo-flow-node--accent">
                        <span className="algo-flow-badge">Pollard&apos;s rho</span>
                        因数を1つ見つける
                      </div>
                      <div className="algo-flow-arrow algo-flow-arrow--sm" aria-hidden="true">↓</div>
                      <div className="algo-flow-node">因数と残りの数に分ける</div>
                      <div className="algo-flow-arrow algo-flow-arrow--sm" aria-hidden="true">↓</div>
                      <div className="algo-flow-node algo-flow-node--loop">
                        それぞれに同じ処理を繰り返す
                      </div>
                      <p className="algo-flow-loop-note">↺ 試割りへ戻る</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="algo-legend-grid">
            <div className="algo-legend-card">
              <h3>試割り</h3>
              <p>よく出る小さい素数を先に処理。学校でやる「順に割る」の部分です。</p>
            </div>
            <div className="algo-legend-card">
              <h3>Miller–Rabin</h3>
              <p>残りが素数かどうかを判定。素数ならそこで確定します。</p>
            </div>
            <div className="algo-legend-card">
              <h3>Pollard&apos;s rho</h3>
              <p>まだ割れる数から因数を1つ取り出し、分けた両方をまた分解します。</p>
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

export default PrimeFactorizationPage
