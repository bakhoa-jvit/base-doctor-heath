<!-- layouts/default.vue -->
<template>
    <div class="content-container">
        <Sidebar />

        <ChallengeHeaderNav />

        <slot />

        <SbrChallengeDetail />
    </div>
</template>

<script setup lang="ts">
import ChallengeHeaderNav from '~/components/ChallengeHeaderNav.vue';
import SbrChallengeDetail from '~/components/sidebar-right/SbrChallengeDetail.vue';
</script>

<style lang="css" scoped></style>