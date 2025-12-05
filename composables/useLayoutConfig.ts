// composables/useLayoutConfig.ts
import type { Component } from 'vue';
import { shallowRef, type Ref } from 'vue';

interface LayoutConfig {
    showSidebar: boolean;
    showNotification: boolean;
}

// Separate ref for component (cannot be serialized in useState)
// Use shallowRef to avoid deep reactivity and allow component instances
const rightSidebarRef = shallowRef<Component | null>(null);

export const useLayoutConfig = () => {
    // Use useState only for serializable values
    const config = useState<LayoutConfig>('layoutConfig', () => ({
        showSidebar: true,
        showNotification: false
    }));

    const setLayoutConfig = (newConfig: Partial<LayoutConfig & { rightSidebar?: Component | null }>) => {
        // Separate component from serializable config
        const { rightSidebar, ...serializableConfig } = newConfig;

        // Update serializable config
        if (Object.keys(serializableConfig).length > 0) {
            config.value = { ...config.value, ...serializableConfig };
        }

        // Update component ref separately
        if (rightSidebar !== undefined) {
            rightSidebarRef.value = rightSidebar || null;
        }
    };

    const resetLayoutConfig = () => {
        config.value = {
            showSidebar: true,
            showNotification: false
        };
        rightSidebarRef.value = null;
    };

    return {
        config,
        rightSidebar: rightSidebarRef as Ref<Component | null>,
        setLayoutConfig,
        resetLayoutConfig
    };
};