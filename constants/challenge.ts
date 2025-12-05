export enum ChallengeTab {
    GENERAL = 'general',
    SLEEP_QUALITY = 'sleep-quality-improvement',
    FATIGUE = 'fatigue-improvement',
    METABOLISM = 'metabolism-improvement',
    INTESTINAL_ENVIRONMENT = 'intestinal-environment-improvement',
}

export const ChallengeTabLabelMap: Record<ChallengeTab, string> = {
    [ChallengeTab.GENERAL]: '総合',
    [ChallengeTab.SLEEP_QUALITY]: '睡眠改善',
    [ChallengeTab.FATIGUE]: '疲労改善',
    [ChallengeTab.METABOLISM]: '代謝改善',
    [ChallengeTab.INTESTINAL_ENVIRONMENT]: '便通改善',
};