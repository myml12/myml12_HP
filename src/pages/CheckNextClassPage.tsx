import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import tsugidokoIcon from '../assets/ツギドコ.png'

function CheckNextClassPage(): React.JSX.Element {
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
                            <img src={tsugidokoIcon} alt="ツギドコ" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
                            <div>
                                <h1 className="hero-title">ツギドコ</h1>
                                <p className="hero-subtitle">CheckNextClass</p>
                            </div>
                        </div>
                    </div>
                    <p className="hero-description">
                        次の教室を瞬時に確認できるウィジェットアプリ。学生の日常的な移動をサポートし、ロック画面から簡単に次の授業の教室情報を確認できます。
                    </p>
                    <div className="hero-buttons">
                        <a href="#features" className="btn btn-primary">
                            機能を見る
                        </a>
                        <a href="#howto" className="btn btn-outline">
                            使い方
                        </a>
                        <a href="https://apps.apple.com/jp/app/%E3%83%84%E3%82%AE%E3%83%89%E3%82%B3-%E6%95%99%E5%AE%A4%E3%82%92%E7%9E%AC%E6%99%82%E3%81%AB%E7%A2%BA%E8%AA%8D/id6499110752" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
                        <p className="section-subtitle">学生生活を効率化するウィジェット機能</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h4>ロック画面ウィジェット</h4>
                            <p>ロック画面に直接表示されるウィジェットで、次の教室情報を瞬時に確認できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⚙️</div>
                            <h4>時限設定</h4>
                            <p>各時限の開始時刻を自由に設定。7限がない場合も柔軟に対応できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">✏️</div>
                            <h4>教室入力</h4>
                            <p>各時限に対応する教室を入力。授業名なども一緒に入力可能です。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📐</div>
                            <h4>サイズ調整</h4>
                            <p>1/2サイズと1/4サイズの2種類のウィジェットサイズを提供。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h4>自動更新</h4>
                            <p>授業開始時刻を過ぎると自動的に次の時限の情報が表示されます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">✓</div>
                            <h4>確認画面</h4>
                            <p>アプリ内で次の教室の確認が可能。ウィジェットの表示確認にも便利です。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section id="howto" className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">使い方 / How to use</h2>
                        <p className="section-subtitle">簡単3ステップでウィジェットを設定できます</p>
                    </div>

                    <div className="info-card">
                        <h3>
                            <span className="icon">1️⃣</span>
                            時限設定
                        </h3>
                        <p>最初に一番右の画面で各時限の開始時刻を設定してください。7限がない場合、6限より遅い時刻を設定していれば動作に影響しません。</p>

                        <h4>2️⃣ 教室入力</h4>
                        <p>真ん中の画面で各時限に対応する教室を入力してください。なお、教室だけでなく授業名などを一緒に入力してもそのまま表示することができます。ですが、長さによってはウィジェットに収まりきらない場合もありますのでその際は入力内容を簡潔にするか、ウィジェットのサイズを調整してください。ロック画面ウィジェットは1/2サイズと1/4サイズの2種類提供しています。</p>

                        <h4>3️⃣ ウィジェット配置</h4>
                        <p>ウィジェットをお好きな場所に配置してください。ロック画面への配置を推奨します。追加方法がわからない場合は各自お調べください。尚、本アプリがウィジェットの追加項目に表示されない場合は端末の再起動で改善するケースが報告されています。</p>

                        <h4>ℹ️ 確認画面</h4>
                        <p>一番左側の画面で次の教室の確認ができますが、実用上はウィジェットのみで確認することになるので、ウィジェットの表示が期待通り出ないときに確認する形になると思います。</p>
                    </div>
                </div>
            </section>

            {/* Widget Update Section */}
            <section className="section">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">🔄</span>
                            ウィジェット表示の更新タイミングについて
                        </h3>
                        <p>iOSの仕様上、更新タイミングは完全なものにはなっておりません。ユーザーの行動から自動的に学習するため、環境により更新タイミングは異なります。授業開始時刻を過ぎてしばらくしたら次の時限の情報が表示されます。</p>

                        <div className="alert">
                            <h5>
                                更新タイミングの調整
                            </h5>
                            <p>更新のタイミングを開始後もう少し経ってからにしたい場合は、開始時刻の設定を若干遅く変更することで実現できると思います。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troubleshooting Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">🔧</span>
                            ウィジェットの表示に不具合がある場合
                        </h3>

                        <h4>基本的な確認</h4>
                        <p>表示に不具合がある場合、アプリ内の表示とウィジェットの表示が一致しているか確認してください。</p>

                        <h4>一致している場合</h4>
                        <p>ご自身の入力と時限設定を今一度お確かめください。</p>

                        <h4>一致していない場合</h4>
                        <p>一度ウィジェットを削除して再度配置してみてください。通常15分程度の頻度でウィジェットは最新の状態に更新されますが、端末の使用状況によっては更新頻度が低くなることがあります。また端末の再起動で改善される場合もあります。</p>

                        <div className="alert alert-warning">
                            <h5>
                                <span>⚠️</span>
                                iOS16の不具合について
                            </h5>
                            <p>
                                現在、iOS16の一部端末においてロック画面ウィジェットおよびホーム画面ウィジェットが追加できない（追加項目に表示されない）不具合が確認されています。原因は解明中ですが、iOS17にアップデートしてお試しください。
                            </p>
                        </div>

                        <h4>更新頻度の向上</h4>
                        <p>iOSの仕様上、ユーザーに見られる頻度の多い場所に配置されたウィジェットは更新頻度が高くなり、ほとんど見られない場所に配置されたウィジェットは更新頻度が自動的に低くなるように学習するため、更新頻度が低いと感じる場合はなるべく表示する頻度の高い場所にウィジェットを配置してください。</p>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="section">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">🛡️</span>
                            プライバシーポリシー
                        </h3>

                        <h4>利用者情報の取得</h4>
                        <p>本アプリが利用者の個人情報を取得することはありません。</p>

                        <h4>利用者情報の利用</h4>
                        <p>本アプリが利用者の個人情報を利用することはありません。</p>

                        <h4>利用者情報の第三者提供</h4>
                        <p>本アプリが利用者の個人情報を第三者へ提供することはありません。</p>
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

export default CheckNextClassPage
