// types/sidebar.ts
export interface SidebarItem {
    path?: string
    label: string
    icon: string
    action?: 'settings' | 'logout'
}