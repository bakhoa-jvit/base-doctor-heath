<template>
    <div class="main-area timeline__list">
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
            <div>
                <h3 class="timeline__list__title">レシピ一覧</h3>
                <div class="timeline__body">
                    <NuxtLink :to="`${route.path}/timeline-detail`"><img src="/images/timeline/timeline_list_01.svg"
                            alt="" class="mb20"></NuxtLink>
                    <NuxtLink :to="`${route.path}/timeline-detail`"><img src="/images/timeline/timeline_list_02.svg"
                            alt="" class="mb20"></NuxtLink>
                    <NuxtLink :to="`${route.path}/timeline-detail`"><img src="/images/timeline/timeline_list_03.svg"
                            alt="" class="mb20"></NuxtLink>
                </div>
            </div>
        </main>

        <h3 class="timeline__list__thumb__title">ミニミッション一覧</h3>
        <div class="timeline__list__thumb">
            <img src="/images/timeline/timeline_list_thumb_01.svg" alt="">
            <img src="/images/timeline/timeline_list_thumb_02.svg" alt="">
            <img src="/images/timeline/timeline_list_thumb_03.svg" alt="">
            <img src="/images/timeline/timeline_list_thumb_04.svg" alt="">
            <img src="/images/timeline/timeline_list_thumb_01.svg" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'challenge',
});

const route = useRoute();

</script>

<style lang="css" scoped>
@import '~/assets/template/css/timeline.css';
</style>