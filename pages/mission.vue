<!-- pages/mission.vue -->
<template>
    <div class="main-area">
        <main class="main-content">
            <section class="content-section">
                <h2 class="content-section__title">挑戦中のミッションカード一覧</h2>
                <div class="mission-grid mission-grid--horizontal">
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">寝る2時間前スマホOFF宣言</h4>
                        <img src="/images/mission/pic_01.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>

                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">布団に入る前に5分の深呼吸</h4>
                        <img src="/images/mission/pic_02.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="content-section__header">
                    <h2 class="content-section__title">ミッションカード一覧</h2>
                    <button class="filter-button">
                        <span class="filter-button__text">カテゴリで並べる</span>
                        <span class="filter-button__icon">+</span>
                    </button>
                </div>
                <h3 class="category-title">睡眠改善</h3>
                <div class="mission-grid">
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">朝、5分カーテンを開けよう</h4>
                        <img src="/images/mission/pic_03.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>

                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">一駅前から歩こう</h4>
                        <img src="/images/mission/pic_04.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">食事は寝る3時間前まで</h4>
                        <img src="/images/mission/pic_05.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">日光に浴びよう</h4>
                        <img src="/images/mission/pic_06.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">果糖を中心に摂ろう</h4>
                        <img src="/images/mission/pic_07.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">胃に負担が少ない食事</h4>
                        <img src="/images/mission/pic_08.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>挑戦する</p>
                            <label class="mission-card__toggle"><input type="checkbox"
                                    class="open-modal-button-mission" /></label>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import SbrMission from '~/components/sidebar-right/SbrMission.vue';
const { setLayoutConfig } = useLayoutConfig();
setLayoutConfig({
    showNotification: false,
    rightSidebar: SbrMission,
});
</script>

<style lang="css" scoped>
@import '~/assets/template/css/mission.css';
</style>