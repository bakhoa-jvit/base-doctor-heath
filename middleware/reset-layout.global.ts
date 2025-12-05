export default defineNuxtRouteMiddleware(() => {
    const { resetLayoutConfig } = useLayoutConfig();
    resetLayoutConfig();
});