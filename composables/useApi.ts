// composables/useApi.ts
import { useRuntimeConfig } from '#imports'

export const useApi = () => {
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBaseUrl;

    const apiFetch = async <T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> => {
        const xsrfToken = useCookie('XSRF-TOKEN', { readonly: true }).value;

        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...(xsrfToken ? { 'X-XSRF-TOKEN': xsrfToken } : {}),
            ...options.headers,
        }

        const url = `${apiBase}/${endpoint}`;

        const response = await fetch(url, {
            ...options,
            headers,
            credentials: 'include',
        })

        if (!response.ok) {
            const err = await response.json().catch(() => ({}))
            throw new Error(err.message || `HTTP ${response.status}`)
        }

        return response.json()
    }

    return { apiFetch }
}