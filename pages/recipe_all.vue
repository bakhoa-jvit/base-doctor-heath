<!-- pages/recipe.vue -->
<template>
    <div class="main-area">
        <main class="main-content">
            <section class="content-section">
                <h2 class="content-section__title">マイレシピ</h2>
                <div class="content-section__wrapper">
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_my_01.svg" alt="" class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_my_02.svg" alt="" class="content-section__thumb__image">
                    </div>
                </div>
            </section>

            <section class="content-section">
                <h2 class="content-section__title">マイミニミッション</h2>
                <div class="content-section__wrapper">
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_mini_01.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_mini_02.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_mini_03.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_mini_04.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                </div>
            </section>

            <section class="content-section">
                <h2 class="content-section__title">全レシピ一覧</h2>
                <div class="content-section__wrapper">
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_list_01.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_list_02.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_list_03.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                </div>
                <div class="content-section__wrapper">
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_list_04.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_list_05.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                    <div class="content-section__thumb">
                        <img src="/images/recipe_all/recipe_all_list_06.svg" alt=""
                            class="content-section__thumb__image">
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import SbrRecipe from '~/components/sidebar-right/SbrRecipe.vue';
const { setLayoutConfig } = useLayoutConfig();
setLayoutConfig({
    rightSidebar: SbrRecipe,
});
</script>

<style lang="css" scoped>
@import '~/assets/template/css/recipe_all.css';
</style>