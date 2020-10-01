import { useWindowSize } from "./useWindowSize";

export function useDeviceType() {
    const {width} = useWindowSize()
    const isMobile = width <= 700;
    const isTablet = width <= 1000;
    const isDesktop = !isTablet;

    return {isMobile, isTablet, isDesktop}
}
