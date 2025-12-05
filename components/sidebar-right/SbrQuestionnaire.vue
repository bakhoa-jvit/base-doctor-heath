<script setup lang="ts">

</script>

<template>
    <aside class="sidebar sidebar--right">
        <div class="card team-card">
            <div class="team-card__avatars">
                <img src="/images/pic_team_avatar_01.jpg" alt="Team member 1" class="team-card__avatar">
                <img src="/images/pic_team_avatar_02.jpg" alt="Team member 2" class="team-card__avatar">
            </div>
            <p class="team-card__title">
                <a href="">マイ管理栄養士チーム</a>
                <img src="/images/icon_arrow_white.svg" alt="" class="nav__icon">
            </p>
        </div>
        <div class="actions">
            <button class="action-btn" onclick="location.href='URL'">
                <img src="/images/icon_chat.svg" alt="" class="nav__icon">
                <span class="action-btn__text">チャット</span>
            </button>
            <button class="action-btn" onclick="location.href='URL'">
                <img src="/images/icon_request.svg" alt="" class="nav__icon">
                <span class="action-btn__text">リクエスト</span>
            </button>
        </div>
    </aside>
</template>

<style lang="css" scoped>
@import '~/assets/template/css/questionnaire.css';
</style>