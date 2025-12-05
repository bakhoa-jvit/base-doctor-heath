<template>
    <div class="main-area">
        <div class="article__title-group">
            <a href="challenge.html">
                <img src="/images/home/pic_mission_icon_01.jpg" alt="" class="article__icon">
                <div class="article__title-group__inner">
                    <div class="article__title-group__header">
                        <h3 class="article__title">睡眠の質 改善チャレンジ</h3>
                    </div>
                    <div class="article__level">チャレンジレベル <span class="article__level__star">★★★☆☆</span></div>
                </div>
            </a>
        </div>

        <main class="main-content timeline__service-card">
            <div class="card timeline">
                <div class="timeline__header">
                    <span class="timeline__title"><img src="/images/timeline/icon_team.svg" alt=""
                            class="nav__icon">専門家相談</span>
                    <span class="timeline__meta">あなたが更新 1時間前</span>
                </div>
                <div class="timeline__body">
                    <img src="/images/timeline/timeline_service_card_01.svg" alt="">
                </div>
            </div>

            <div class="card timeline">
                <div class="timeline__header">
                    <span class="timeline__title"><img src="/images/timeline/icon_orange.svg" alt=""
                            class="nav__icon">睡眠改善ミニミッション</span>
                    <span class="timeline__meta">1時間前</span>

                </div>
                <div class="timeline__body">
                    <img src="/images/timeline/timeline_service_card_02.svg" alt="">
                </div>
            </div>

            <div class="card timeline">
                <div class="timeline__header">
                    <span class="timeline__title"><img src="/images/timeline/icon_device.svg" alt=""
                            class="nav__icon">睡眠改善コンテンツ</span>
                    <span class="timeline__meta">あなたが更新 1時間前</span>
                </div>
                <div class="timeline__body">
                    <img src="/images/timeline/timeline_service_card_03.svg" alt="">
                </div>
            </div>

            <div class="card timeline">
                <div class="timeline__header">
                    <span class="timeline__title"><img src="/images/timeline/icon_orange.svg" alt=""
                            class="nav__icon">睡眠改善チェック</span>
                    <span class="timeline__meta">1時間前</span>

                </div>
                <div class="timeline__body">
                    <img src="/images/timeline/timeline_service_card_04.svg" alt="">
                </div>
            </div>


        </main>
    </div>
</template>


<script setup lang="ts">
definePageMeta({
    layout: 'challenge',
});
</script>

<style lang="css" scoped>
@import '~/assets/template/css/timeline.css';
</style>