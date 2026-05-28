import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import rhythmapLogo from '../assets/Rhythmap_logo.png'
import SiteFooter from '../components/SiteFooter'

function RhythMapPage(): React.JSX.Element {
    const [showFullCredits, setShowFullCredits] = useState(false)

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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <img src={rhythmapLogo} alt="リズマップ" style={{ height: '80px', width: 'auto', maxWidth: '100%' }} />
                            <div>
                                <h1 className="hero-title">リズマップ</h1>
                                <p className="hero-subtitle">RhythMap</p>
                            </div>
                        </div>
                    </div>
                    <p className="hero-description">
                        全国のゲームセンターにおけるAC音楽ゲーム情報が分かるアプリ。2024年5月にiOS版、6月にWeb版をリリースし、現在まで継続的な運営・メンテナンスを実施しています。現在地を基にしたゲームセンター検索、店名検索や機種別台数の絞り込み検索、トイレ・喫煙所・駐車場の有無など便利情報の全文検索を実現。サービス開始前は各タイトルの稼働店舗は分かっても台数等の情報はローカルな情報を頼るほかありませんでしたが、本サービスにより筐体の配置や台数の情報に誰でも気軽にアクセスできるようになりました。
                    </p>
                    <div className="hero-buttons">
                        <a href="#features" className="btn btn-primary">
                            機能を見る
                        </a>
                        <a href="#pro" className="btn btn-outline">
                            Pro版について
                        </a>
                        <a href="https://apps.apple.com/jp/app/%E3%83%AA%E3%82%BA%E3%83%9E%E3%83%83%E3%83%97-%E9%9F%B3%E3%82%B2%E3%83%BC%E6%83%85%E5%A0%B1%E3%82%A2%E3%83%97%E3%83%AA/id6502974735" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
                        <p className="section-subtitle">音ゲー愛好家のための充実した機能を提供します</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🗺️</div>
                            <h4>現在地検索</h4>
                            <p>現在地を基にしたゲームセンター検索機能。MapKitによる直感的な地図表示で、近くの店舗を素早く見つけられます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔍</div>
                            <h4>店名・機種別検索</h4>
                            <p>店名検索や機種別台数の絞り込み検索が可能。Pro版では検索結果がハイライト表示されます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">ℹ️</div>
                            <h4>便利情報の全文検索</h4>
                            <p>トイレ、喫煙所、駐車場の有無など便利情報の全文検索に対応。筐体数、営業時間など、各店舗の詳細情報を確認できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h4>自動更新</h4>
                            <p>下に引っ張ることで最新のデータベース情報に更新。常に最新の情報を提供します。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🐦</div>
                            <h4>X投稿機能</h4>
                            <p>お立ち寄りの際はXにポストして音ゲー界を盛り上げましょう！</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💎</div>
                            <h4>Pro版機能</h4>
                            <p>広告非表示、検索制限解除、検索結果ハイライトなど、追加機能を提供します。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌐</div>
                            <h4>Web版</h4>
                            <p>2024年6月にWeb版をリリース。簡易的ではありますが、最低限の機能はプラットフォームに関係なく利用できるようにしました。ブラウザからも音ゲー店舗情報を確認できます。</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h4>情報提供フォーム</h4>
                            <p>店舗情報の追加・修正はアプリ内のフォームから簡単に行えます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">使い方 / How to use</h2>
                        <p className="section-subtitle">簡単3ステップで音ゲー店舗情報を確認できます</p>
                    </div>

                    <div className="info-card">
                        <p>マップ画面では情報を参照したいゲームセンターのピンをタップすることで情報を閲覧することができます。情報が表示されている画面はスクロールできます。さらに、twitter等と同じように下に引っ張ることで最新のデータベースの情報への更新が可能です。</p>
                        <p>さらに最下部に情報提供フォームへのリンクボタンが設置してありますので情報の追加等ございましたらそちらからお願い致します。</p>
                        <p>info画面では、情報ウィンドウの画面サイズの調整などを行うことができます。詳しくはアプリ内の説明をお読みください。</p>
                    </div>
                </div>
            </section>

            {/* Pro Version Section */}
            <section id="pro" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">リズマップPro</h2>
                        <p className="section-subtitle">より快適な音ゲー店舗検索体験を提供します</p>
                    </div>

                    <div className="info-card">
                        <div className="alert">
                            <h5>
                                Pro新機能登場！
                            </h5>
                            <p>Proプランでは、全文検索での検索結果のワードがハイライトされるようになり、マップの情報画面でもワードがハイライトされて情報が表示されます！</p>
                        </div>

                        <div className="features-grid" style={{ marginTop: '2rem' }}>
                            <div className="feature-card">
                                <div className="feature-icon">🔍</div>
                                <h5>全文検索ハイライト</h5>
                                <p>検索結果のワードがハイライト表示され、見つけたい情報を素早く確認できます。</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">❌</div>
                                <h5>広告完全非表示</h5>
                                <p>広告を完全に非表示にして、快適な閲覧体験を提供します。</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">∞</div>
                                <h5>検索制限解除</h5>
                                <p>検索ヒット店舗数の制限を解除し、より多くの店舗情報を検索できます。</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">✨</div>
                                <h5>マップハイライト</h5>
                                <p>マップ画面でも検索ワードがハイライト表示され、情報を素早く確認できます。</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', background: 'var(--bg-tertiary)', borderRadius: '20px', padding: '2rem', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>Pro版価格</h4>
                            <div className="features-grid">
                                <div className="feature-card" style={{ textAlign: 'center' }}>
                                    <h5>3ヶ月プラン</h5>
                                    <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-primary)', margin: '0.5rem 0' }}>¥250</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>月換算83円</p>
                                </div>
                                <div className="feature-card" style={{ textAlign: 'center' }}>
                                    <h5>6ヶ月プラン</h5>
                                    <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-primary)', margin: '0.5rem 0' }}>¥440</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>月換算78円</p>
                                </div>
                                <div className="feature-card" style={{ textAlign: 'center' }}>
                                    <h5>1年プラン</h5>
                                    <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-primary)', margin: '0.5rem 0' }}>¥840</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>月換算70円</p>
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-warning" style={{ marginTop: '2rem' }}>
                            <h6>
                                <span>ℹ️</span>
                                サービス継続について
                            </h6>
                            <p>今後サービスを継続していくにあたって、提供データの集計チェック作業やアプリの開発及びメンテナンス、さらにAppStoreへの登録料（¥12900/年 開発者が払っています…）やサーバーの維持費など、様々な時間と費用がかかります。継続的なご支援をいただけると幸いです。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Web Version Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="info-card" style={{ textAlign: 'center' }}>
                        <h3>
                            Web版 リリース
                        </h3>
                        <p className="lead" style={{ marginBottom: '2rem' }}>2024年6月にWeb版をリリースしました。簡易的ではありますが、最低限の機能はプラットフォームに関係なく利用できるようにしました。ブラウザからも音ゲー店舗情報を確認できます。</p>

                        <div className="alert" style={{ marginBottom: '2rem' }}>
                            <h5>
                                Web版の特徴
                            </h5>
                            <p>Web版をリリースしました。<a href="https://ryhthmap.web.app/RhythMap.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>こちら</a>からアクセスできます。<br />また、これに伴いWebからの情報提供も再開しました。ピンをタップすると提供フォームへのリンクボタンが出現します。</p>
                        </div>

                        <a href="https://ryhthmap.web.app/RhythMap.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Web版を開く
                        </a>
                    </div>
                </div>
            </section>

            {/* Achievement Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">実績・取り組み</h2>
                        <p className="section-subtitle">継続的な運営とコミュニティとの協力</p>
                    </div>

                    <div className="info-card">
                        <h3>AppStoreランキング</h3>
                        <p>リリース後、AppStoreのカテゴリ別ランキング（ナビゲーション）で最高4位を獲得しました。</p>

                        <h4 style={{ marginTop: '2rem' }}>マネタイズ戦略</h4>
                        <p>アフィリエイト広告や機能強化版のサブスクリプション（Pro版）を導入し、持続可能なサービス運営を実現しています。</p>

                        <h4 style={{ marginTop: '2rem' }}>コミュニティとの協力</h4>
                        <p>全国で数千店舗あるゲームセンターの情報提供の募集にはX（旧Twitter）を活用し、2000人以上の方から情報提供を受けました。募集時にはGoogleフォームと連携したWebサイトを作成し、効率的な方法で情報収集を実施。現在では日本国内に留まらず海外からの情報提供も受け付け、サービスの範囲を拡大しています。</p>
                    </div>
                </div>
            </section>

            {/* Update Information Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">🔄</span>
                            ver 1.0.7 更新情報
                        </h3>
                        <div className="alert">
                            <h5>
                                Xにポスト機能が搭載されました
                            </h5>
                            <p>お立ち寄りの際はぜひポストして音ゲー界を盛り上げましょう！！</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms and Privacy Section */}
            <section className="section">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">📋</span>
                            利用規約・プライバシーポリシー
                        </h3>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                            <Link to="/kiyaku.html" className="btn btn-outline">
                                <span>📋</span>
                                利用規約
                            </Link>
                            <Link to="/privacy-policy.html" className="btn btn-outline">
                                <span>🛡️</span>
                                プライバシーポリシー
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            情報提供について
                        </h3>
                        <p>リズマップは、コミュニティの皆様の情報提供によって成り立っています。X（旧Twitter）を活用した情報提供募集により、2000人以上の方から情報提供を受けました。募集時にはGoogleフォームと連携したWebサイトを作成し、効率的な方法で情報収集を実施しています。</p>

                        <h4>既存店舗の情報提供</h4>
                        <p>既にマップ上に存在する店舗については、情報表示画面の最下部に情報提供フォームへのボタンが設置してありますのでそちらをご利用ください。</p>

                        <h4>マップに存在しない店舗（新規店舗）の情報提供について</h4>
                        <p>新規店舗の情報提供は<a href="https://docs.google.com/forms/d/e/1FAIpQLSdxBy-yFj93jMKXHHwnvUI0C83bTvci-nRJA5k1V__NSBVilQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>こちら</a>からお願いします。現在では日本国内に留まらず海外からの情報提供も受け付けており、サービスの範囲を拡大しています。</p>

                        <h4>情報の修正について</h4>
                        <p>基本的な台数の修正や便利情報の追加に関してはアプリ内ボタンのフォームからお願いしていますが、便利情報欄の情報の重複・わかりにくい記載等により修正した方が良いと思われるものに関しては<a href="https://x.com/RhythMap" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>こちら（X(twitter)）</a>まで直接連絡をお願いします。</p>

                        <h4>表示形式について</h4>
                        <p>数だけの記載となっているものは、基本的に現行の最新モデルの稼働筐体の数となっております。</p>
                    </div>
                </div>
            </section>

            {/* Credits Section */}
            <section className="section">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">👥</span>
                            情報提供にご協力いただいた方々
                        </h3>
                        <p>リズマップは、コミュニティの皆様の情報提供によって成り立っています。</p>

                        <h4>主要な協力者</h4>
                        <div className="features-grid" style={{ marginTop: '1rem' }}>
                            <div className="feature-card">
                                <h6 style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.2rem' }}>#VMSearch 様（@VMS_sdvx）</h6>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.85' }}>ほぼ全てのSDVX設置店舗の情報を提供してくださいました。ありがとうございました。</p>
                            </div>
                            <div className="feature-card">
                                <h6 style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.2rem' }}>東工大音ゲーサークル BEATECH 様（@BEATECH_NEW）</h6>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.85' }}>代表のれみ(@Alc5_)さん、サークルへの情報拡散等ありがとうございました。</p>
                            </div>
                            <div className="feature-card">
                                <h6 style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.2rem' }}>関大音ゲーサークル KURO 様（@Kandai_otoge）</h6>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.85' }}>前代表のふみ(@FumicAcid)さん、サークルへの情報拡散等ありがとうございました。</p>
                            </div>
                            <div className="feature-card">
                                <h6 style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.2rem' }}>lilavia 様 (@lirmt)</h6>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.85' }}>個人的に集めてくださっていた大量の店舗データを提供していただきました。ありがとうございました。</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <p>以下、フォーム等から情報を下さった方（提供店舗数順/敬称略・随時更新致します）となっております。たくさんのご協力、本当にありがとうございました。今後も最新の情報を提供するため変更／修正等ございましたらアプリ内のリンクからぜひよろしくお願い致します。</p>

                            <button
                                onClick={() => setShowFullCredits(!showFullCredits)}
                                style={{
                                    marginTop: '1rem',
                                    padding: '0.75rem 1.5rem',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    fontWeight: '500',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <span>{showFullCredits ? '▼' : '▶'}</span>
                                {showFullCredits ? '詳細リストを閉じる' : '詳細リストを表示（600名以上）'}
                            </button>

                            {showFullCredits && (
                                <div style={{
                                    marginTop: '1.5rem',
                                    padding: '1.5rem',
                                    background: 'var(--bg-tertiary)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    maxHeight: '500px',
                                    overflowY: 'auto',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.4'
                                }}>
                                    <p style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                        {`@lmtak
@ckmht
@n7tke
@hinappu_
@nanaitikyu
@kazusanatu
@saa_monmon
@Amata_tac
@neidhardt_ornot
@Kaze3681
@YwVt2dN8nkcKzlf
saa_monmon
@F_Hirokin514
@Rusell_ONGEKI
@shige_musicgame
@raidenNO_39
@nekosuke3017
@yosimori567
@Alhmaisui
@suiso3925
@tamamo_tigers
@012i8xy765
natua_tcmm
@stn_chunithm
@monster9p
mikugo.395@gmail.com
@naminatu_maimai
@k_chihiro_3
@tyudon0924
@rilgrimear
二瓶智樹
@nA_Na1go
@nne914_Bot
@karend_fn
@Mega_Togepi
@duxx2300
@dot58207500
@whitefox_otoge
@popplio5747
@No_tesNo_game
rixiabusenluo9@gmail.com
karura147@yahoo.co.jp
@yotsuosi
@Hrpnt3
@hiyuni1009
@YGMS_yukkuri
@yotumeru1392
@NagatoChanP
@enjoyyyyyyyyy1
@ohagiuni150517
@MIRUMIRUM_2085
@garitonnohonaka
@ruteplus
@MiAMiA3399
1LOW@アマゾンの狂犬
@murakumo_DC
@Lef_PSn1227
@yutam1023
@c8ycu
@kogehaga
@gamingdeniki
@domqikt_78
@kurokka96
@kyukeityudatens
@ReplyTreeHFS
@Celestite_otoge
@yumesawaefu
@tomNyan_UwU
@Superman_0681
@yoshiii1006
@Doogie_OR
@oochan0427
@SR177cp
@suzuemu_3
@Ali_z_a_
backy8989@gmail.com
@periodtaisa893
dakuidangen@gmail.com
@ChiyaChiyaGreen
@konhiii___
@Az_ysk_242
@Tuc_5718
@lirmt
@sorari_music
@sus_otoge
@nisehari
@lighthigh57
＠daiaagaria
@HUMEN_100go
@tiffany_porz
@potechi3315
@huramu_0506
@of16bit
@reki_9511
@_sh1v9
@Link_st_mu
@ZERO_765
@SHIROkuro_77
@reiran_COREJP
@snowstorm_GRV20
@tabitabikaeru
@nsmr0604
@kenta_fc315
@organic_s56
shakenokirimi12
@sabanmisok
@YazakiRamune
@LePoNa Q9
@suki_music
@sunorapi
miku_dayo0401
@1wZge
@RakuC_
kirby82@ezweb.ne.jp
@NoahCantate
@4nomiya_kaguya
@mekausa
@ryu_taiko_s
@T_efu_1215
@syorabbitdragon
@mayumawoo
@s4k1__kk
はやと( @hytnano_39 )
@52nt14
@Wassy_Dreamer
@dictator_unyoon
@k4ch1_
@Niko_akitake123
@twlite_shinsen
@ponpomj
@G_O_N_2012
@meloon_owo_
@cxLX0ver
@zexion_tag
@hskwnotequalme
@Arisya517
@rirrikey
@iidx_tanoc
@Rbuti_narun
@Omochimochim0
@iceprachan
@P1iiii_oO_xxx
n.seiya1010@icloud.com
@k92588582
@x0llqx_
@radatetris
@garihos0
@Sumimaru_maimai
@PasutoSP
sudachitaiko
ern580619@gmail.com
@Kokky_rhythm
@nanairo_light
@siromel_lost
@_misonq_
@Touya_sinoalice
@soriothwomp
@wata25252
@Ataoka_tya
@skybell_SRSZ
@Phoenix_dor4gon
@Sumi____S
erutaiko0710
@sinbuns_0412
@ninjin_1257
@nagewa816
@V13PY
@ka7de2F29
@HaRuK4W4
@hokkyokuguma810
Twitter:@_bifura_
@aaaaawadonder
@latria2498
@Sycwasa
@atsuki_channel
nokoyu_PON
@Quildy0427
@amay173
detekonwa@softbank.ne.jp
tamamo_tigers
@Aina_Utaiteota
@ nanaitikyu
@Herta_March7th
@taku12340219
@torimomomusic
@isla4ever
よん@yon_maimai
@tiaramusicgame
@nico_and_hatena
@cnh652
@ringo1292
@rinngo1292
@kasusanatu
@Rist_nontext
kakawa_sdvx
@Munu_August
@haspa_1211
@himariri_3_
@aircon_otoge
@s_158
@H4nto_Trinity
@alone_alcan
@TERUSHIN__X
@4methyst____
@archa___m
@shogun_56562
@NaTaKa1538
tomomat09@gmail.com
@667022
@ha_s_1945
@Emu2M
@shuvi_ut_tuki
@eringiRa_osu
@sogakurooooooto
@Avalon8ship8
@yu2_mgamer
@hakururie
yoisaki.kanade.0210.nightcord@gmail.com、える(@lllll_prsk)
@suwaswan2152
@knnk_
@KyJuGOngs6332SP
@xi_IAx
@shisyamo810
@totkunn2000p
@tamitami_taha
@morifaaaaan
@Yourein1
@Isuka_125
@R3_12e
@Taka_KF_Rhythm
@gorokatipotato
@asker_0427
@eg_lil
@Hemlok_AI
@reloadedlylia
taiasobi3@gmail.com
@Tokky_raruko
@noi0606
@watamimimimi
@Cyber_midori
Maich02
@haluR0825
@yurei83139412
keitari0423@gmail.com
@fighter_236
@ruketa_02
mpyapupe86@ezweb.ne.jp
@kevin1006123
@uexwx
@TKG_UNKO
@E_yi_
@shao__g
@motoki_Na2mi
@Ray_mi7
@sayo_kiyomafu
iws0125.tt@gmail.com
@07773
@awe10001
@mikaninn
Xアカウント:はるちゃー(@haru2355)
mikan
Ryudora1215
@minttire25
@ToMoppoINo
@suki_music9
A_oryzae1
@QZkago
@ttr_tigasa
@potofu_day
@PZLpuzzle
@1wzge
yoshihiroyuyuko0806@gmail.com
anogunoyuuji@gmail.com
@にぬらの
@typeJ123
@kafu_GOD0102
@AJtsukky
@0eiju_keep1st
@nazonokusakirai
@TND3523
@Lo7migo
@INU4_4
@kiyurinaku_0809
@letam_nekoyama
メルアド: omochi.3fe@icloud.com Twitter: @OmOchi_O3FE
@Philip_RTA
@ba77D_gg3s
@Arataaa0313
@estelle__grace
@VqsPIFCsULs2s05
メルアド omochi.3fe@icloud.com Twitter OmOchi_O3FE
@kinotako0218
@Renkaxy
@paprika0141dayo
@Nekonotino
@noskey8241128
@Hkzkbtyit_0514
@ayt_sdgk
@kur_071
kk20010423
fu.chan.himajinn@gmail.com
@_haguRuma
harukutakagi85@gmail.com
fromraid
はやと ( @hytnano_39 )
@fromraid
@h45eh0g
＠YT12677930
@bathroom_DRYER
@koppebangdonder
@HAMATI0148
Pintaro115
@Harukun_13254
@autumn_SaKnA
@AmiparaSuzuka
@wrlfWoEYA3FtP2T
sorarina0000
@YOYOpizza25
@ayu_031030
stu00608
@K_Chihiro_3
oimo928
@ayaitigo
@mixim_testament
@takenokoctf0219
@eK3_amazemuts
@tapioka7269
@Sakura_oka9
@ffa_lo
@kuniny_
@YJsenpai1919810
@PC15388911
＠capu108
@talkov_ste3
＠nlbj14ngp9982kc
@tuba3220
@torituka0514
@oreitiruisyu
@socorahen_hito
@yaba1wayo
@chiyo_kieta
@inazumaaaa0425
@moamoa614
はやと ( @hytnano_39 )
@SHIBASUS4052
@mincho_0707
@mi4necha
@Usamin_parachan
＠periodtaisa893
@happaww
@munimuni_ai
@kanonnnonn_3939
aoiyasuda1993@icloud.com
@konaki_sub_new
@turareta_kuma
soka3rd
@Amamizu_Prastik
@Tinpo _Topo
@zerorinn_online
@aze_KEYCRASH
@zundamon_
73.tatsuki.55@gmail.com
@iwasan_seo32
@eK3_amazeMuts
@Potakun_cod
@3ch5_
@GUCHY_MZD
@jr_second_club
@S1st8
@noskey8241228
@nanahaku_7389
@kyouyaCat1021
@TD_zaka_46
@sorarina0000
madiwashi123@gmail.com
@ishiiLamires
@chi_0519_
@abaer2525
@rxy___b
@Thanks_followrs
@ClaPiece_TJiro
@oredayo_0811
@Tukimotiforuni
@MATTUN_04545
@iwaking0324
frst_knh
@shuta4168
@milk3mil
@Wamom_
@Merea_xFN
@yamayama31313
@nm41s
yamayama31313
@r_u_u_hrklove
@HayacanGP4
@4lxlruMA0wT0tdc
@yuchi2ndstory
@koukiyayoo
@Franku7_
@sanisani0321
@sakucha_risu
@bklacqlettohero
@milk2687030
@noconoconoah
@tararitaikoduel
@papparaparano1a
@curamupon_7713
@_2KANA_
@KaruGote_Game
@nqxux
@Groove_Revolver
P1iiii_xxx_oO
Amamizu_Prastik
@soka_02152205
@0925826Pawa
@Ha_seiran
@RaRiRu_2k
@W0nd3r_mania
@ sFDz3PCRJRxNbk9
@koinujou
@kairosu_24
@21_cheat
Alc5_
@mak38
@utuki0_0April
@ra_3t
@_se_m4
@wunaiya406
@CuLaclla
@Culaclla
@Microfiber_23
@Lemon_bikkii
ongeki0cnt0aze@gmail.com
skybell_SRSZ
＠senano112
@SAR0sa_5412
@0rrma
8i_t0
rilgrimear
@KpChiNo_kei
@Minato_256_
@isidai_0116
@bt_74n
@wakamee201
@izmister
@misty_wk
zakiren.astraea2@icloud.com
@twisted_reader
@otozatesu
@notdate2000001
@memutasooo
＠Hrpnt3
oreitiruisyu
@Raizin_Harurun
@25gabrel
@Iam_qiiii
@daiaagaria
elen.0210@icloud.com
@lllll_prsk
@noribennyasan
@ReNo_Yuuki_
konkuntv@gmail.com
@otozaresu
@ChevG74090
twitter:@PICOLASLADY
@Ka7de2F29
@fujisan_1028
TAKAZO_040404
Mappy__X
@nekonotuno
@kotanin0
@ayamafu_Holoxer
@kana071268
@Nhand03H
@MIKan_8902
@Tsukikage224
Twitter @_bifura_
@MemberKei
@killermatt9
yota516nagayasu@gmail.com
@inoheya_youtube
@shige_musicgamn
@tibetyan_
@asia_otoge
@maimainithm
@prsk_1412
@_Alix1a
@‪Sumimaru_maimai
@kudaken0
@astral_saba
@TAKAZO_040404
neidhardt_ornot
@winter09336187
1101yuuto@gmail.com
w_l_o_g_m
Quildy0427
@Regulass_
@ninjin_ymst
@okhg10294
＠sarayuu38
@SR_Zakoshi
@seto3E3
@donottrytoboxme
@super_s_kari
@XxButyoxX
@tohu438490
@Anata_tac
@nanase_kurumi11
@kawata_mik
@mxllo_y01
@akame_1005
@Kanu_YX1
＠ReplyTreeHFS
@aopennnn_taiko
@raimukun_mofu
yin200529@gmail.com
@yoshy999
@Castella_cream_
nagewa816
@raidennova1
@warabi6273449
fighter_236
namazip
@M4KkYRhy7hmG4me
@UNKONORYYYY
@botamochinemu
@nlbj14ngP9982Kc
Sycwasa
@naoha_708
@kyuri_0131
@co487000
@ancoooooo_prsk
suzuho9@gmail.com
@suis3925
@konhiii_
@SORIOthwomp
@Shirakamisaka
Rn9603_0w0
nigyupasi@gmail.com
@naritaka716
@s0_ra__
lllll_prsk
ycshenjp5220@gmail.com
@ yuta63572
@sytan5Mn0pJGz
@w_l_o_g_m
@nanasi36122
@ishirettu
@myogaYT
@taketo0218
@ROM86024789
@ita_twit
@frn_ktn
@yoshiii_1006
negoppi3@gmail.com`}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* System Development Credits Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">🛠️</span>
                            システム開発およびデザイン制作等にご協力いただいた方々
                        </h3>

                        <div style={{ marginTop: '1.5rem' }}>
                            <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>@ktgk_sdvx 様</strong><br />
                                    アプリのコードチェックなどiOS開発における多岐にわたるご指導をいただきました。非常に心強かったです。またアプリ内の機種別ピクトグラムの制作をしていただきました。
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>LINEオープンチャット Swift勉強部屋 様</strong><br />
                                    自力で解決できなかったエラーの対処法について多大なるご助力を賜り、誠にありがとうございました。開発中に何度も挫折しそうになりましたが、質問できる場があったことで大きな支えとなりました。質問に回答してくださった方々に心より感謝申し上げます。
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>アイコン／ロゴ制作：</strong>Arisa Mizoguchi
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>企画原案：</strong>Tomoki Nihei
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beta Test Team Section */}
            <section className="section">
                <div className="container">
                    <div className="info-card">
                        <h3>
                            <span className="icon">🧪</span>
                            βテストチームメンバーの方々
                        </h3>
                        <p>試作段階での情報の更新などに協力していただきました。ありがとうございました。</p>

                        <div style={{
                            marginTop: '1.5rem',
                            padding: '1.5rem',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '12px',
                            border: '1px solid var(--border-color)',
                            fontSize: '0.9rem',
                            lineHeight: '1.4'
                        }}>
                            <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                                {`@naritaka716
@Alc5_
@NagatoChanP
@Aspirin_tus
@GEN_03150417
@Ey__i
@ut1_72
@endo_mamoranai
@m1ffyz
@NakanoOoeno_OG`}
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
                        <p className="lead">ご不明な点や不具合、また追加して欲しい機能（台数での検索機能等に関しましては開発予定です）などございましたらお気軽にお問い合わせください</p>

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

export default RhythMapPage

