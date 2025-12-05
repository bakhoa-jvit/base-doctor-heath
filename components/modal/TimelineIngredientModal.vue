<script setup lang="ts">

</script>

<template>
    <div class="ingredient-modal ingredient-modal--hidden">
        <div class="ingredient-modal__overlay"></div>
        <div class="ingredient-modal__content">
            <button class="ingredient-modal__close-button">&times;</button>

            <div class="ingredient-modal__header">
                <img src="/images/timeline/modal_img_01.jpg" alt="" class="ingredient-modal__image">
                <p class="ingredient-modal__subtitle">脳の興奮を抑え、ストレス緩和に働く。<br>入眠・中途覚醒の改善にも。</p>
                <h2 class="ingredient-modal__title">GABA(γ-アミノ酪酸)</h2>
                <img src="/images/timeline/icon_modal_heart.svg" alt="" class="nav__icon">
                <p class="ingredient-modal__description">
                    GABAは、仕事や日々の生活で感じる一時的なストレスや疲労感をやわらげ、気持ちをリラックスさせてくれる成分です。穏やかな気分をサポートすることで、質の良い睡眠の手助けにもなると言われています。
                </p>
            </div>

            <div class="ingredient-modal__section">
                <h3 class="ingredient-modal__section-title">GABAを多く含む食材</h3>
                <dl class="food-list">
                    <dt class="food-list__term">【野菜・果物】</dt>
                    <dd class="food-list__description">トマト(特にトマト缶詰)、かぼちゃ、なす、メロン、じゃがいも</dd>
                    <dt class="food-list__term">【発酵食品】</dt>
                    <dd class="food-list__description">漬物（たくあん、キムチ、奈良漬けなど）、納豆</dd>
                    <dt class="food-list__term">【穀物・その他】</dt>
                    <dd class="food-list__description">発芽玄米、ココア、チョコレート</dd>
                </dl>
            </div>
            <div class="ingredient-modal__section">
                <h3 class="ingredient-modal__section-title">アレルゲン</h3>
                <p>メロン、大豆</p>
                <p class="ingredient-modal__note">
                    これらの食品を日常の食事に取り入れることで、GABAを摂取することができます。ただし、漬物などは塩分が多い場合もあるため、摂りすぎには注意が必要です。
                </p>
            </div>

            <div class="ingredient-separator">
                <span class="ingredient-separator__text">栄養素をサプリで補う</span>
                <ul class="ingredient-list">
                    <li class="ingredient-list__item">
                        <span class="ingredient-list__icon"></span>
                        <span class="ingredient-list__text">
                            サプリを検索
                            <span class="ingredient-list__arrow">></span>
                        </span>
                    </li>
                    <li class="ingredient-list__item">
                        <span class="ingredient-list__icon"></span>
                        <span class="ingredient-list__text">
                            この栄養素について専門家に相談する
                            <span class="ingredient-list__arrow">></span>
                        </span>
                    </li>
                    <li class="ingredient-list__item">
                        <span class="ingredient-list__icon"></span>
                        <span class="ingredient-list__text">
                            この栄養素についてAIに相談する
                            <span class="ingredient-list__arrow">></span>
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style lang="css" scoped>
@import '~/assets/template/css/timeline.css';
</style>