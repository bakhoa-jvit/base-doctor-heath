<script setup lang="ts">

</script>

<template>
    <div class="mission-modal mission-modal--hidden">
        <div class="mission-modal__overlay"></div>
        <div class="mission-modal__content">
            <button class="mission-modal__close-button">&times;</button>

            <div class="mission-card__details">
                <h4 class="mission-card__subtitle">寝る2時間前スマホOFF宣言</h4>
                <img src="/images/mission/modal_pic_01.jpg" alt="" class="mission-card__image">
                <p class="mission-card__description">今夜、寝る30分前までにスマホやPC、テレビなどの画面を見るのをやめてみよう。</p>
            </div>

            <p class="mission-modal__description">
                寝る30分前にスマホを見ないようにすると、脳がリラックスして寝つきが良くなり、睡眠の質が向上します。メラトニンの分泌も整い、朝の目覚めがスッキリしやすくなります。
            </p>

            <button class="mission-modal__button" onclick="location.href='/'">このミッションに挑戦する</button>

            <div class="mission-separator">
                <span class="mission-separator__text">ミッション内容</span>
                <ul class="mission-list">
                    <li class="mission-list__item">
                        <span class="mission-list__icon"></span>
                        <span class="mission-list__text">就寝1時間前にスマホを別室に置く</span>
                    </li>
                    <li class="mission-list__item">
                        <span class="mission-list__icon"></span>
                        <span class="mission-list__text">夜21時以降は通知をオフにする</span>
                    </li>
                    <li class="mission-list__item">
                        <span class="mission-list__icon"></span>
                        <span class="mission-list__text">SNSや動画視聴アプリをタイマーで制限</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
@import '~/assets/template/css/timeline.css';
</style>