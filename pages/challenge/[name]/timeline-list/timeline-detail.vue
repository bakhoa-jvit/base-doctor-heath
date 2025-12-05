<template>
    <div class="main-area timeline__detail">
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
                <div class="timeline__detail__body">
                    <img src="/images/timeline/timeline_detail_01.svg" alt="">
                </div>

                <div class="timeline__detail__mini">
                    <h3 class="mb20"><img src="/images/timeline/timeline_detail_mini_title.svg" alt=""></h3>
                    <div class="timeline__detail__mini__thumb">
                        <img src="/images/timeline/timeline_detail_mini_01.svg" alt=""
                            class="open-modal-button-mission">
                        <img src="/images/timeline/timeline_detail_mini_02.svg" alt=""
                            class="open-modal-button-mission">
                        <img src="/images/timeline/timeline_detail_mini_03.svg" alt=""
                            class="open-modal-button-mission">
                    </div>
                </div>

                <div class="timeline__detail__nutrient">
                    <h3 class="mb20"><img src="/images/timeline/timeline_detail_nutrient_title.svg" alt=""></h3>
                    <div class="timeline__detail__nutrient__thumb">
                        <img src="/images/timeline/timeline_detail_nutrient_01.svg" alt=""
                            class="open-modal-button-ingredient">
                    </div>
                </div>

            </div>
        </main>
    </div>
    <MissionModal />
    <IngredientModal />
</template>

<script setup lang="ts">
import MissionModal from '~/components/modal/TimelineMissionModal.vue';
import IngredientModal from '~/components/modal/TimelineIngredientModal.vue';
definePageMeta({
    layout: 'challenge',
});

onMounted(() => {
    import('~/assets/template/js/timeline_mission_modal.js');
    import('~/assets/template/js/timeline_ingredient_modal.js');
});
</script>

<style lang="css" scoped>
@import '~/assets/template/css/timeline.css';
</style>