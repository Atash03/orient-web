export function extractImageSizeFromUrl(url: string): { width: number, height: number } | { fill: true } {
    const regex = /(\d+)x(\d+)px/i;
    const match = url.match(regex);

    if (match) {
        const width = parseInt(match[1], 10);
        const height = parseInt(match[2], 10);
        return { width, height };
    }

    return { fill: true };
}
