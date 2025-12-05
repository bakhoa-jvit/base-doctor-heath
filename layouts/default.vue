<!-- layouts/default.vue -->
<template>
    <div class="content-container">
        <Sidebar v-if="config.showSidebar" />

        <Header />

        <Notification v-if="config.showNotification" />

        <slot />

        <ClientOnly>
            <component :is="rightSidebar" v-if="rightSidebar" />
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
const { config, rightSidebar } = useLayoutConfig();
</script>