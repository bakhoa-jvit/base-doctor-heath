<template>
    <aside class="sidebar sidebar--right">
        <div class="team-card">
            <a href="">
                <div class="team-card__avatars">
                    <img src="/images/pic_team_avatar_01.jpg" alt="Team member 1" class="team-card__avatar">
                    <span class="team-card__text">睡眠専門家相談</span>
                </div>
                <p class="team-card__title">
                    <img src="/images/icon_arrow_white.svg" alt="" class="nav__icon">
                </p>
            </a>
        </div>
        <div class="side-card">
            <img src="/images/timeline/side_mission_check.svg" alt="">
        </div>
        <div class="side-card" :class="{ 'side-card--active': activeCard === 'timeline-list' }"
            @click="handleCardClick('timeline-list', `${basePath}/timeline-list`)">
            <NuxtLink :to="`${basePath}/timeline-list`">
                <img class="side-card__image" src="/images/timeline/side_thumb_01.svg" alt="">
            </NuxtLink>
        </div>
        <div class="side-card" :class="{ 'side-card--active': activeCard === 'challenge-content' }"
            @click="handleCardClick('challenge-content', `${basePath}/challenge-content`)">
            <NuxtLink :to="`${basePath}/challenge-content`">
                <img class="side-card__image" src="/images/timeline/side_thumb_02.svg" alt="">
            </NuxtLink>
        </div>
        <div class="side-card" :class="{ 'side-card--active': activeCard === 'challenge-check' }"
            @click="handleCardClick('challenge-check', `${basePath}/challenge-check`)">
            <NuxtLink :to="`${basePath}/challenge-check`">
                <img class="side-card__image" src="/images/timeline/side_thumb_03.svg" alt="">
            </NuxtLink>
        </div>
    </aside>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

// Get base path (remove the last segment if it exists)
const basePath = computed(() => {
    const pathSegments = route.path.split('/').filter(Boolean);
    // Assuming structure is /challenge/{id}/...
    // Return /challenge/{id}
    if (pathSegments.length >= 2) {
        return `/${pathSegments[0]}/${pathSegments[1]}`;
    }
    return route.path;
});

// State to track active card
const activeCard = ref<string | null>(null);

// Handle card click
const handleCardClick = (cardId: string, path: string | null) => {
    // If clicking on already active card, do nothing
    if (activeCard.value === cardId) {
        return;
    }

    // Set active card
    activeCard.value = cardId;

    // Navigate if path is provided
    if (path) {
        router.push(path);
    }
};

// Set active card based on current route
watch(() => route.path, (newPath) => {
    if (newPath.includes('/timeline-list')) {
        activeCard.value = 'timeline-list';
    } else if (newPath.includes('/challenge-content')) {
        activeCard.value = 'challenge-content';
    } else if (newPath.includes('/challenge-check')) {
        activeCard.value = 'challenge-check';
    } else {
        // Reset active card when route doesn't match any card
        activeCard.value = null;
    }
}, { immediate: true });
</script>

<style lang="css" scoped>
@import '~/assets/template/css/challenge_detail.css';

.side-card__image {
    filter: brightness(1);
}

.side-card.side-card--active .side-card__image {
    filter: brightness(0.5);
}
</style>