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

        <main class="main-content">
            <div class="card timeline timeline--top">
                <div class="timeline__body">
                    <img src="/images/timeline/timeline_top_img_01.jpg" alt="" class="mb20">
                    <div class="timeline__body__inner">
                        <div class="timeline__body__inner__left">
                            <a href=""><img src="/images/timeline/timeline_top_img_02.svg" alt=""></a>
                        </div>
                        <div class="timeline__body__inner__right">
                            <img src="/images/timeline/timeline_top_img_03.svg" alt="" class="mb20">
                            <img src="/images/timeline/timeline_top_img_04.svg" alt="" class="mb20">
                            <img src="/images/timeline/timeline_top_img_btn_more.svg" alt=""
                                class="open-modal-button moreBtn">
                        </div>
                    </div>
                </div>
            </div>

            <div class="timeline__thumb">
                <div class="timeline__thumb__inner">
                    <a href=""><img src="/images/timeline/timeline_top_thumb_01.svg" alt=""></a>
                    <img src="/images/timeline/timeline_top_thumb_02.svg" alt="">
                    <img src="/images/timeline/timeline_top_thumb_03.svg" alt="">
                    <img src="/images/timeline/timeline_top_thumb_04.svg" alt="">
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