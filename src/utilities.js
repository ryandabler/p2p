export function getLastURLSegment(url) {
    const segments = url.split("/");
    return segments[segments.length - 1];
}