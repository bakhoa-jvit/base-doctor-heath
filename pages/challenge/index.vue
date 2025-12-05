<!-- pages/challenge/index.vue -->
<template>
    <div class="main-area">
        <main class="main-content">
            <section class="content-section">
                <h2 class="content-section__title">マイチャレンジ</h2>
                <div class="challenge-thumb__wrapper">
                    <NuxtLink :to="`/challenge/${ChallengeTab.SLEEP_QUALITY}`" class="challenge-thumb">
                        <h3 class="challenge-thumb__title">睡眠の質 改善チャレンジ</h3>
                        <img src="/images/questionnaire/pic_modal_01.jpg" alt="" class="challenge-thumb__image">
                    </NuxtLink>

                    <NuxtLink :to="`/challenge/${ChallengeTab.FATIGUE}`" class="challenge-thumb">
                        <h3 class="challenge-thumb__title">疲労 改善チャレンジ</h3>
                        <img src="/images/questionnaire/pic_modal_02.jpg" alt="" class="challenge-thumb__image">
                    </NuxtLink>

                    <NuxtLink :to="`/challenge/${ChallengeTab.METABOLISM}`" class="challenge-thumb">
                        <h3 class="challenge-thumb__title">代謝 改善チャレンジ</h3>
                        <img src="/images/questionnaire/pic_modal_03.jpg" alt="" class="challenge-thumb__image">
                    </NuxtLink>

                    <NuxtLink :to="`/challenge/${ChallengeTab.INTESTINAL_ENVIRONMENT}`" class="challenge-thumb">
                        <h3 class="challenge-thumb__title">腸内環境 改善チャレンジ</h3>
                        <img src="/images/questionnaire/pic_modal_04.jpg" alt="" class="challenge-thumb__image">
                    </NuxtLink>
                </div>
            </section>

            <section class="content-section">
                <h2 class="content-section__title">全てのチャレンジ一覧</h2>
                <div class="challenge-card">
                    <img src="/images/questionnaire/pic_modal_01.jpg" alt="" class="challenge-card__image">
                    <div class="challenge-card__body">
                        <h3 class="challenge-card__title">睡眠の質 改善チャレンジ</h3>
                        <p class="challenge-card__level">チャレンジレベル <span class="challenge-card__level__star">★★★★☆</span>
                        </p>
                        <p class="challenge-card__description">
                            質の高い睡眠は、心身の健康に不可欠です。日中の疲労回復はもちろん、ストレス軽減、免疫力向上、記憶の定着を促します。結果的に集中力や判断力が高まり、仕事や学習の効率を向上させ、生活全体の質を高めるための重要な鍵となります。
                        </p>
                        <button class="challenge-card__button">このチャレンジを選ぶ</button>
                    </div>
                </div>

                <div class="challenge-card">
                    <img src="/images/questionnaire/pic_modal_02.jpg" alt="" class="challenge-card__image">
                    <div class="challenge-card__body">
                        <h3 class="challenge-card__title">疲労 改善チャレンジ</h3>
                        <p class="challenge-card__level">チャレンジレベル <span class="challenge-card__level__star">★★☆☆☆</span>
                        </p>
                        <p class="challenge-card__description">
                            体の疲労改善は、日々の活力を保ち最高の能力を発揮するために不可欠です。疲労の蓄積は、集中力や免疫力の低下、さらには怪我のリスクを高めます。放置すれば慢性疲労に繋がりかねません。心身の健康と生活の質を守るため、こまめなケアが重要です。
                        </p>
                        <button class="challenge-card__button">このチャレンジを選ぶ</button>
                    </div>
                </div>

                <div class="challenge-card">
                    <img src="/images/questionnaire/pic_modal_03.jpg" alt="" class="challenge-card__image">
                    <div class="challenge-card__body">
                        <h3 class="challenge-card__title">カラダの代謝 改善チャレンジ</h3>
                        <p class="challenge-card__level">チャレンジレベル <span class="challenge-card__level__star">★★★★★</span>
                        </p>
                        <p class="challenge-card__description">
                            代謝を改善しエネルギー消費を高めることは、太りにくく痩せやすい体を作る基本です。血行が促進され、冷えやむくみ、肩こりを解消。老廃物の排出も促され、肌の健康や疲労回復にも繋がります。健康的な毎日を送る上で非常に重要です。
                        </p>
                        <button class="challenge-card__button">このチャレンジを選ぶ</button>
                    </div>
                </div>

                <div class="challenge-card">
                    <img src="/images/questionnaire/pic_modal_04.jpg" alt="" class="challenge-card__image">
                    <div class="challenge-card__body">
                        <h3 class="challenge-card__title">腸内環境 改善チャレンジ</h3>
                        <p class="challenge-card__level">チャレンジレベル <span class="challenge-card__level__star">★★★☆☆</span>
                        </p>
                        <p class="challenge-card__description">
                            便通改善は、お腹の不快感を解消するだけではありません。腸内環境を整えることで、老廃物や有害物質の排出を促進し、肌荒れの改善に繋がります。また、栄養の吸収を助けて免疫力を高めるなど、心身全体の健康を支えるための重要な生活習慣です。
                        </p>
                        <button class="challenge-card__button">このチャレンジを選ぶ</button>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup lang="ts">
import SbrChallenge from '~/components/sidebar-right/SbrChallenge.vue';
import { ChallengeTab } from '~/constants';

const { setLayoutConfig } = useLayoutConfig();
setLayoutConfig({
    showNotification: false,
    rightSidebar: SbrChallenge,
});
</script>

<style lang="css" scoped>
@import '~/assets/template/css/challenge.css';
</style>