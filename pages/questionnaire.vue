<!-- pages/questionare.vue -->
<template>
    <div class="main-area">
        <main class="main-content">

            <div class="card questionnaire">
                <div class="questionnaire__header">
                    <span class="questionnaire__title"><img src="/images/questionnaire/icon_questionnaire.svg" alt=""
                            class="nav__icon">初回アンケート</span>
                    <span class="questionnaire__meta">あなたが送信 1時間前</span>
                    <button class="questionnaire__options"><img src="/images/icon_three_dot.svg" alt=""
                            class="nav__icon"></button>
                </div>
                <div class="questionnaire__banner">
                    <img src="/images/questionnaire/illust_questionnaire.svg" alt="">
                </div>
                <div class="questionnaire__body">
                    <p class="questionnaire__intro">
                        加藤 佳子 さん<br>
                        ようこそ、Health Picksへ。<br>
                        まずはあなたの状態を知るために、体調・睡眠・ストレス・食事に関する質問にお答えください。
                    </p>

                    <form class="form">
                        <h3 class="form__title">体調</h3>
                        <fieldset class="form__group">
                            <legend class="form__legend">最近、朝起きたときに疲れが残っていると感じることはありますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="condition"
                                        value="1">ほぼ毎日</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="2"
                                        checked>ときどき</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="3"
                                        checked>ほとんどない</label>
                            </div>
                        </fieldset>

                        <fieldset class="form__group">
                            <legend class="form__legend">ぼんやりしたり、集中力が続かないと感じることがありますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="focus" value="1">よくある</label>
                                <label class="form__radio-label"><input type="radio" name="focus" value="2"
                                        checked>たまにある</label>
                                <label class="form__radio-label"><input type="radio" name="focus" value="3"
                                        checked>ない</label>
                            </div>
                        </fieldset>

                        <fieldset class="form__group">
                            <legend class="form__legend">季節の変わり目に体調を崩しやすいと感じますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="sleep" value="1">はい</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="2"
                                        checked>いいえ</label>
                            </div>
                        </fieldset>
                    </form>

                    <form class="form">
                        <h3 class="form__title">睡眠</h3>
                        <fieldset class="form__group">
                            <legend class="form__legend">最近、夜しっかり眠れていますか？<br>（途中で目が覚める、入眠に時間がかかるなど）</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="condition"
                                        value="1">よく眠れている</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="2"
                                        checked>あまり眠れていない</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="3"
                                        checked>眠れないことが多い</label>
                            </div>
                        </fieldset>

                        <fieldset class="form__group">
                            <legend class="form__legend">起床時にスッキリ目覚められますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="sleep" value="1">はい</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="2"
                                        checked>まあまあ</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="3"
                                        checked>ぐったりしている</label>
                            </div>
                        </fieldset>
                    </form>

                    <form class="form">
                        <h3 class="form__title">ストレス</h3>
                        <fieldset class="form__group">
                            <legend class="form__legend">日常生活の中でイライラや緊張を感じやすいですか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="condition"
                                        value="1">ほぼ毎日</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="2"
                                        checked>週に数回</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="3"
                                        checked>ほとんどない</label>
                            </div>
                        </fieldset>

                        <fieldset class="form__group">
                            <legend class="form__legend">気分が落ち込む、理由もなく不安になることはありますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="sleep" value="1">よくある</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="2"
                                        checked>たまにある</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="3"
                                        checked>ない</label>
                            </div>
                        </fieldset>
                    </form>

                    <form class="form">
                        <h3 class="form__title">食事</h3>
                        <fieldset class="form__group">
                            <legend class="form__legend">１週間にどれくらい外食またはコンビニ食をとっていますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="condition"
                                        value="1">週5回以上</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="2"
                                        checked>週2〜4回</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="3"
                                        checked>週1回以下</label>
                            </div>
                        </fieldset>

                        <fieldset class="form__group">
                            <legend class="form__legend">食後に「もたれ」や「胃の重さ」を感じることはありますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="focus" value="1">よくある</label>
                                <label class="form__radio-label"><input type="radio" name="focus" value="2"
                                        checked>時々ある</label>
                                <label class="form__radio-label"><input type="radio" name="focus" value="3"
                                        checked>ほとんどない</label>
                            </div>
                        </fieldset>

                        <fieldset class="form__group">
                            <legend class="form__legend">朝食をとる習慣はありますか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="sleep"
                                        value="1">毎日食べる</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="2"
                                        checked>時々食べる</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="3"
                                        checked>食べない</label>
                            </div>
                        </fieldset>
                    </form>

                    <form class="form">
                        <h3 class="form__title">運動</h3>
                        <fieldset class="form__group">
                            <legend class="form__legend">週にどのくらい体を動かしていますか？<br>（ウォーキング・筋トレなど）</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="condition"
                                        value="1">週3回以上</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="2"
                                        checked>週1〜2回</label>
                                <label class="form__radio-label"><input type="radio" name="condition" value="3"
                                        checked>ほとんどしない</label>
                            </div>
                        </fieldset>

                        <fieldset class="form__group">
                            <legend class="form__legend">１日の中で３０分以上歩くことが多いですか？</legend>
                            <div class="form__radio-group">
                                <label class="form__radio-label"><input type="radio" name="sleep" value="1">はい</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="2"
                                        checked>時々</label>
                                <label class="form__radio-label"><input type="radio" name="sleep" value="3"
                                        checked>ほとんど</label>
                            </div>
                        </fieldset>
                    </form>

                    <form class="form form__last">
                        <div class="form__actions">
                            <button type="button" class="btn btn--primary open-modal-button">入力内容の確認</button>
                            <button type="button" class="btn btn--secondary">キャンセル</button>
                        </div>
                    </form>

                </div>
            </div>
        </main>
    </div>
    <QuestionnaireModal />
</template>


<script setup lang="ts">
import SbrQuestionnaire from '~/components/sidebar-right/SbrQuestionnaire.vue';
import QuestionnaireModal from '~/components/modal/QuestionnaireModal.vue';

const { setLayoutConfig } = useLayoutConfig();
setLayoutConfig({
    rightSidebar: SbrQuestionnaire,
});

// Import questionnaire.js
onMounted(() => {
    import('~/assets/template/js/questionnaire.js');
});
</script>

<style lang="css" scoped>
@import '~/assets/template/css/questionnaire.css';
</style>