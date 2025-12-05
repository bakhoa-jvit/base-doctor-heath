<!-- pages/index.vue -->
<template>
    <div class="main-area">
        <main class="main-content">
            <section class="mission-card">
                <header class="mission-card__header">
                    <h4>選択したチャレンジ</h4>
                    <a href="mission.html">ミッション一覧 ></a>
                </header>
                <div class="mission-card__title-group">
                    <img src="/images/home/pic_mission_icon_01.jpg" alt="" class="mission-card__icon">
                    <div class="mission-card__title-group__inner">
                        <div class="mission-card__title-group__header">
                            <h3 class="mission-card__title">睡眠の質 改善チャレンジ</h3>
                            <a href="challenge.html">他のチャレンジを見る ></a>
                        </div>
                        <div class="mission-card__level">チャレンジレベル <span class="mission-card__level__star">★★★☆☆</span>
                        </div>
                    </div>
                </div>
                <div class="mission-card__body">
                    <div class="mission-card__recipe">
                        <img src="/images/home/pic_mission_card_01.jpg" alt="" class="mission-card__image">
                        <h4 class="mission-card__subtitle">夜を取り戻す、スマホ断ちレシピ</h4>
                        <p class="mission-card__description">
                            「しっかり寝たはずなのに、なぜか疲れが取れない…。」そんなお悩み、ありませんか？その原因は、あなたが寝る前に見ているスマートフォンのブルーライト…</p>
                        <NuxtLink to="/challenge/sleep-quality-improvement/timeline-list/timeline-detail"
                            class="mission-card__button">健康レシピを見る</NuxtLink>
                    </div>
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">寝る2時間前スマホOFF宣言</h4>
                        <img src="/images/home/pic_mission_card_02.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
                        <div class="mission-card__achievement">
                            <p>今日も達成した</p>
                            <label class="mission-card__toggle"><input type="checkbox" /></label>
                        </div>
                    </div>
                    <div class="mission-card__progress">
                        <img src="/images/home/img_progress_01.svg" alt="" class="mission-card__progress-image">
                    </div>
                </div>
            </section>

            <section class="mission-card">
                <header class="mission-card__header">
                    <h4>選択したチャレンジ</h4>
                    <a href="mission.html">ミッション一覧 ></a>
                </header>
                <div class="mission-card__title-group">
                    <img src="/images/home/pic_mission_icon_02.jpg" alt="" class="mission-card__icon">
                    <div class="mission-card__title-group__inner">
                        <div class="mission-card__title-group__header">
                            <h3 class="mission-card__title">睡眠の質 改善チャレンジ</h3>
                            <a href="challenge.html">他のチャレンジを見る ></a>
                        </div>
                        <div class="mission-card__level">チャレンジレベル <span class="mission-card__level__star">★★★☆☆</span>
                        </div>
                    </div>
                </div>
                <div class="mission-card__body">
                    <div class="mission-card__recipe">
                        <img src="/images/home/pic_mission_card_03.jpg" alt="" class="mission-card__image">
                        <h4 class="mission-card__subtitle">疲れ知らずのカラダをつくるレシピ</h4>
                        <p class="mission-card__description">
                            最近、朝起きても疲れが取れていない、日中に集中力が続かない、夜になるとぐったり……そんな状態が当たり前になっていませんか？</p>
                        <NuxtLink to="/challenge/fatigue-improvement/timeline-list/timeline-detail"
                            class="mission-card__button">健康レシピを見る</NuxtLink>
                    </div>
                    <div class="mission-card__details">
                        <h4 class="mission-card__subtitle">疲れに負けない「筋肉装備」⋯</h4>
                        <img src="/images/home/pic_mission_card_04.jpg" alt="" class="mission-card__image">
                        <p class="mission-card__description">疲れ知らずのカラダは、あなたのパフォーマンスも気分も、そして人生の質さえも変えて⋯</p>
                        <div class="mission-card__achievement">
                            <p>今日も達成した</p>
                            <label class="mission-card__toggle"><input type="checkbox" /></label>
                        </div>
                    </div>
                    <div class="mission-card__progress">
                        <img src="/images/home/img_progress_02.svg" alt="" class="mission-card__progress-image">
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup lang="ts">
import SbrHome from '~/components/sidebar-right/SbrHome.vue';

const { setLayoutConfig } = useLayoutConfig();
setLayoutConfig({
    showNotification: true,
    rightSidebar: SbrHome,
});
</script>
<style scoped>
@import '@/assets/template/css/home.css';
</style>