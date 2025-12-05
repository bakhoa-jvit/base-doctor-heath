<script setup lang="ts">

</script>

<template>
    <div>
        <div class="notifications-content">
            <section class="hero-banner">
                <div class="hero-banner__text">
                    <h2>カラダに習慣<br>レシピで改善</h2>
                </div>
            </section>
            <section class="notifications-area">
                <div class="notifications-grid">
                    <div class="notification-card">
                        <header class="notification-card__header">
                            <h3 class="notification-card__title"><img src="/images/home/icon_bell.svg" alt=""
                                    class="nav__icon">お知らせ</h3>
                            <span class="notification-card__badge">1</span>
                        </header>
                        <ul class="notification-card__list">
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>キャンペーン
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">初回ご利用キャンペーンのお知らせが届きました。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="notification-card">
                        <header class="notification-card__header">
                            <h3 class="notification-card__title"><img src="/images/home/icon_chat.svg" alt=""
                                    class="nav__icon">チャット</h3>
                            <span class="notification-card__badge">2</span>
                        </header>
                        <ul class="notification-card__list">
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>チャット栄養相談
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">チャットが届きました。</p>
                                    <p class="notification-item__meta">田中 さやか</p>
                                </div>
                            </li>
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>チャット栄養相談
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">パーソナルアドバイスが届きました。</p>
                                    <p class="notification-item__meta">田中 絢子</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="notification-card">
                        <header class="notification-card__header">
                            <h3 class="notification-card__title"><img src="/images/home/icon_notifications.svg" alt=""
                                    class="nav__icon">通知
                            </h3>
                            <span class="notification-card__badge">2</span>
                        </header>
                        <ul class="notification-card__list">
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>ミッション通知
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">そろそろミッションのお時間です。</p>
                                    <p class="notification-item__meta">6/28 23:00に予約</p>
                                </div>
                            </li>
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>サプリタイマー
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">服用の時間です。</p>
                                    <p class="notification-item__meta">毎日 22:45に予約</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="notification-card">
                        <header class="notification-card__header">
                            <h3 class="notification-card__title"><img src="/images/home/icon_truck.svg" alt=""
                                    class="nav__icon">配送</h3>
                            <span class="notification-card__badge">2</span>
                        </header>
                        <ul class="notification-card__list">
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>〇〇〇〇〇〇〇〇
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">商品の配送が完了しました。</p>
                                    <p class="notification-item__meta">6/28 10:00発送分</p>
                                </div>
                            </li>
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>〇〇〇〇〇〇〇〇
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">商品が発送されました。</p>
                                    <p class="notification-item__meta">7/28 10:00発送分</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="notification-card">
                        <header class="notification-card__header">
                            <h3 class="notification-card__title"><img src="/images/home/icon_wallet.svg" alt=""
                                    class="nav__icon">お支払い</h3>
                            <span class="notification-card__badge">1</span>
                        </header>
                        <ul class="notification-card__list">
                            <li class="notification-item">
                                <div class="notification-item__header">
                                    <p><span
                                            class="notification-item__icon notification-item__icon--campaign"></span>〇〇〇〇〇〇〇〇
                                    </p>
                                    <span class="notification-item__time">1時間前</span>
                                </div>
                                <div class="notification-item__content">
                                    <p class="notification-item__text">請求が届きました。</p>
                                    <p class="notification-item__meta">オンライン診療費(6/28 10:00)</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="css" scoped>
@import '~/assets/template/css/home.css';
</style>