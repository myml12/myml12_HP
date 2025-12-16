import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import chuinfoIcon from '../assets/Chuinfo.png'

function ChuinfoPage(): React.JSX.Element {
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
                            <img src={chuinfoIcon} alt="Chuinfo" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
                            <div>
                                <h1 className="hero-title">Chuinfo</h1>
                                <p className="hero-subtitle">大学時間割・課題管理アプリ</p>
                            </div>
                        </div>
                    </div>
                    <p className="hero-description">
                        大学の時間割と課題管理を統合したアプリ。manabaとの連携により、自動的に課題情報を取得し、通知機能で提出期限を管理します。
                    </p>
                    <div className="hero-buttons">
                        <a href="#features" className="btn btn-primary">
                            機能を見る
                        </a>
                        <a href="#howto" className="btn btn-outline">
                            使い方
                        </a>
                        <a href="https://apps.apple.com/jp/app/chuinfo-%E4%B8%AD%E5%A4%AE%E5%A4%A7%E7%94%9F%E5%90%91%E3%81%91%E9%9D%9E%E5%85%AC%E5%BC%8F%E3%82%A2%E3%83%97%E3%83%AA/id6670358906" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            App Store
                        </a>
                    </div>
                </div>
            </section>

            {/* New Features Section */}
            <section id="new-features" className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">新機能</h2>
                        <p className="section-subtitle">Chuinfoの最新機能をご紹介します</p>
                    </div>

                    <div className="info-card">
                        <div className="alert" style={{ background: 'rgba(0, 255, 0, 0.1)', borderColor: '#00ff00' }}>
                            <h5>
                                時間割画面が進化しました！
                            </h5>
                            <p>科目名をタップすることで授業の様々な関連ページへの遷移が可能になりました！</p>
                        </div>

                        <div className="alert">
                            <h5>
                                CplusのPDFファイルが直接開けるようになりました！
                            </h5>
                            <p>大抵どのブラウザでもダウンロード処理が挟まって煩わしかったと思います。。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">主な機能</h2>
                        <p className="section-subtitle">学生生活を効率的にサポートする充実した機能</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📅</div>
                            <h4>時間割管理</h4>
                            <p>manabaから自動取得した時間割を表示。科目名をタップして授業の関連ページに直接遷移できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📋</div>
                            <h4>課題管理</h4>
                            <p>未提出課題を自動取得・表示。課題をタップして提出画面に直接遷移できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔔</div>
                            <h4>通知機能</h4>
                            <p>課題の提出期限を自動通知。設定画面で通知タイミングをカスタマイズできます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📍</div>
                            <h4>教室情報</h4>
                            <p>シラバスから教室情報を一斉取得。時間割画面で簡単に教室情報を確認できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h4>自動更新</h4>
                            <p>アプリ起動時にmanabaを開くことなく、自動的にデータを更新します。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📎</div>
                            <h4>ファイル提出</h4>
                            <p>アプリ内からファイルアプリを経由して、レポートを直接提出できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔗</div>
                            <h4>時間割画面の機能拡張</h4>
                            <p>時間割画面のセルをタップすることで、コースTOPやレポート画面、コースコンテンツなどのページに直接遷移できます。遷移先の項目は、設定画面よりカスタマイズできます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌐</div>
                            <h4>manaba・Cplus連携</h4>
                            <p>manabaおよびCplusのタブを開くと、自動的にログインされ表示されます。Cplusは仕様上読み込みに5秒程度かかります。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔍</div>
                            <h4>課題フィルタリング</h4>
                            <p>自分に関係のないアンケートなどの未提出課題は、manabaの未提出課題一覧のページで非表示のものを選択することができます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section id="howto" className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">使い方 / How to use</h2>
                        <p className="section-subtitle">簡単な設定で学生生活を効率化できます</p>
                    </div>

                    <div className="info-card">
                        <h3>
                            <span className="icon">1️⃣</span>
                            初期設定
                        </h3>
                        <p>通知を許可し、統合認証ID/パスワードでログインします。</p>

                        <h4>2️⃣ 自動データ取得</h4>
                        <p>自動的にmanabaからデータの取得がされ、時間割および未提出課題の取得、通知設定が行われます。時間割画面で、教室情報の取得ボタンを押すとシラバスから教室情報が一斉取得されます。</p>

                        <h4>3️⃣ カスタマイズ</h4>
                        <p>設定画面で通知のタイミングをカスタマイズすることができます。また未提出課題一覧のタブの右上ボタン「通知確認」より、現在登録されている通知を確認することができます。</p>

                        <h4>🔄 データ更新</h4>
                        <p>アプリの起動時にmanabaを開くことなく、自動的にデータの更新がなされます。また、時間割画面もしくは未提出課題リストの画面で下に引っ張って更新することでデータの再取得が可能です。なお、セッションの期限が切れた場合にはmanabaタブを開いてください。</p>

                        <h4>✓ 課題提出</h4>
                        <p>未提出課題画面では、課題をタップすることで提出画面に直接遷移することができます。小テストなども、スタート画面に遷移が可能です。レポート提出等は、アプリ内からファイルアプリを経由して直接の提出が可能です。</p>

                        <h4>🌐 manaba・Cplus連携</h4>
                        <p>manabaおよびCplusのタブを開くと、自動的にログインされ表示されます。Cplusは仕様上読み込みに5秒程度かかります。埋め込みブラウザの仕様上、一部リンクは機能しないことがあります。</p>

                        <h4>⚙️ 時間割画面の機能拡張</h4>
                        <p>時間割画面のセルをタップすることで、コースTOPやレポート画面、コースコンテンツなどのページに直接遷移できます。遷移先の項目は、設定画面よりカスタマイズできます。</p>

                        <h4>👁️ 課題フィルタリング</h4>
                        <p>自分に関係のないアンケートなどの未提出課題は、manabaの未提出課題一覧のページで非表示のものを選択することができるので気になる方はそこから非表示設定を行なってください。</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">ℹ️</span>
                            Chuinfoについて
                        </h3>
                        <p>本アプリは個人（学生）が運営するアプリであり、非公式なものです。</p>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">🛡️</span>
                            プライバシーポリシー
                        </h3>

                        <h4>利用者情報の取得</h4>
                        <p>本アプリはサービス改善・向上のため、パスワードを除く情報を収集することがあります。</p>

                        <h4>利用者情報の利用</h4>
                        <p>本アプリは利用者の情報をサービス改善・向上のみのために利用することがあります。</p>

                        <h4>利用者情報の第三者提供</h4>
                        <p>本アプリが利用者の個人情報等を第三者へ提供することはありません。</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-card">
                        <h2>お問い合わせ先</h2>
                        <p className="lead">ご不明な点や不具合、また追加して欲しい機能などございましたらお気軽にお問い合わせください</p>

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

export default ChuinfoPage

