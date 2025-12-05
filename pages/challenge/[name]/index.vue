<!-- pages/challenge/[name]/index.vue -->
<template>
    <div class="main-area">
        <main class="article-content">
            <div class="article__title-group">
                <NuxtLink to="/challenge">
                    <img src="/images/challenge_detail/icon_arrow_orange.svg" alt="" class="nav__icon">
                    <img src="/images/home/pic_mission_icon_01.jpg" alt="" class="article__icon">
                    <div class="article__title-group__inner">
                        <div class="article__title-group__header">
                            <h3 class="article__title">睡眠の質 改善チャレンジ</h3>
                        </div>
                        <div class="article__level">チャレンジレベル <span class="article__level__star">★★★☆☆</span></div>
                    </div>
                </NuxtLink>
            </div>

            <div>
                <h4>{{ challengeName }}</h4>
            </div>

            <figure class="article-content__figure">
                <img src="/images/challenge_detail/pic_01.jpg" alt="">
            </figure>
            <p>夜、布団に入ってもなかなか眠れない…そんな経験はありませんか？実はあなたの日々の習慣に答えがあったのです。</p>
            <h2 class="article-content__subtitle">寝る前の光が、脳を「昼間モード」に強制再起動していた！</h2>
            <p>私たちの脳には、地球の自転と共に刻まれた「体内時計」が備わっています。</p>
            <p>朝日を浴びると「活動モード」のスイッチがオンになり、夜、周りが暗くなると、脳から睡眠を促すホルモン「メラトニン」が分泌され、自然と「おやすみモード」に切り替わります。</p>
            <p>このメラトニンこそが、質の高い睡眠への鍵を握る大切な物質です。</p>
            <p>ところが、夜にスマートフォンやPC、テレビなどの画面から発せられる強いブルーライトを浴びると、大変なことが起こります。</p>
            <h2 class="article-content__subtitle">ブルーライトを「昼の太陽光だ！」と勘違いしてしまう</h2>
            <p>その結果、「まだ昼間か！」と、活動モードを継続しよう！と、本来なら分泌されるはずの睡眠ホルモン・メラトニンの分泌に急ブレーキをかけてしまいます。</p>
            <p>これが、寝る前にスマホを見ると目が冴えてしまう、最大の原因です。</p>
        </main>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'challenge',
});

const route = useRoute();
const challengeName = route.params.name;
</script>

<style lang="css" scoped>
@import '~/assets/template/css/challenge_detail.css';
</style>