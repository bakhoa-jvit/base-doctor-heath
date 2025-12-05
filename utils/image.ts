export const FALLBACK_IMAGE = '/assets/images/no-image.png'

export const handleImageError = (event: Event, fallback = FALLBACK_IMAGE) => {
    const img = event.target as HTMLImageElement
    if (img && img.src !== fallback) {
        img.src = fallback
    }
}