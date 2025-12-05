<script setup lang="ts">
import { ChallengeTab, ChallengeTabLabelMap } from '~/constants';

const route = useRoute();

// Check if a tab is active based on current route
const isActiveTab = (tab: ChallengeTab): boolean => {
    return route.path.includes(tab);
};

// Get route for a tab
const getTabRoute = (tab: ChallengeTab): string => {
    return `/challenge/${tab}`;
};
</script>

<template>
    <header class="main-header">
        <div class="main-header__logo__area">
            <h1 class="main-header__logo"><img src="/images/logo.png" alt="Health Picks"></h1>
        </div>
        <div class="main-header__nav">
            <span v-for="tab in ChallengeTab" :key="tab" :class="{ 'main-header__nav__active': isActiveTab(tab) }">
                <NuxtLink :to="getTabRoute(tab)">{{ ChallengeTabLabelMap[tab] }}</NuxtLink>
            </span>
        </div>
    </header>
</template>

<style lang="css" scoped></style>