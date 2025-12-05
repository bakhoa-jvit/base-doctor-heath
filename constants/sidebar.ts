import type { SidebarItem } from '~/types/sidebar'

export const NAV_ITEMS: SidebarItem[] = [
    { path: '/', label: 'ホーム', icon: '/images/icon_home.svg' },
    { path: '/todo', label: 'やること', icon: '/images/icon_todo.svg' },
    { path: '/challenge', label: 'チャレンジ', icon: '/images/icon_challenge.svg' },
    { path: '/recipe_all', label: 'レシピ', icon: '/images/icon_recipe.svg' },
    { path: '/mission', label: 'ミッション', icon: '/images/icon_mission.svg' },
    { path: '/supply', label: 'サプリ', icon: '/images/icon_supply.svg' },
]

export const FOOTER_ITEMS: SidebarItem[] = [
    { label: '設定', icon: '/images/icon_settings.svg', action: 'settings' },
    { label: 'ログアウト', icon: '/images/icon_logout.svg', action: 'logout' },
]