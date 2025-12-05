<template>
    <aside class="sidebar sidebar--left">
        <!-- Profile Section -->
        <div class="profile">
            <img src="/images/pic_avatar.jpg" :alt="profileName" class="profile__avatar">
            <h2 class="profile__name">{{ profileName }}</h2>
            <p class="profile__id">社員No: {{ employeeId }}</p>
        </div>

        <!-- Navigation Menu -->
        <nav class="nav">
            <ul class="nav__list">
                <li v-for="item in NAV_ITEMS" :key="item.path" class="nav__item"
                    :class="{ 'nav__item--active': isActive(item.path ?? '') }">
                    <NuxtLink :to="item.path" class="nav__link">
                        <img :src="item.icon" :alt="item.label" class="nav__icon">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <!-- Footer Section -->
        <div class="sidebar__footer">
            <ul class="nav__list">
                <li v-for="item in FOOTER_ITEMS" :key="item.label" class="nav__item">
                    <a :href="item.path ?? ''" class="nav__link" @click.prevent="handleFooterClick(item.action ?? '')">
                        <img :src="item.icon" :alt="item.label" class="nav__icon">
                        {{ item.label }}
                    </a>
                </li>
            </ul>

            <!-- Support Info -->
            <div class="support-info">
                <p class="support-info__title">サポート窓口</p>
                <a :href="`mailto:${supportEmail}`" class="support-info__email">
                    <img src="/images/icon_support.svg" alt="サポート" class="nav__icon">
                    {{ supportEmail }}
                </a>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { NAV_ITEMS, FOOTER_ITEMS } from '~/constants';
const route = useRoute();
const router = useRouter();

// Profile Data
const profileName = ref('加藤 佳子');
const employeeId = ref('100128');
const supportEmail = ref('support@healthpicks.com');

// Check if current route is active
const isActive = (path: string) => {
    if (path === '/') {
        return route.path === '/';
    }
    return route.path === path || route.path.startsWith(path + '/');
}

// Handle footer item clicks
const handleFooterClick = (action: string) => {
    if (action === 'settings') {
        router.push('/settings')
    } else if (action === 'logout') {
        // Handle logout logic
        router.push('/login')
        // You can add your logout logic here
        // For example: await logout()
        // router.push('/login')
    }
}
</script>

<style scoped>
/* Add your CSS styles here or import from external file */
/* You can keep the original CSS from common.css and home.css */
</style>