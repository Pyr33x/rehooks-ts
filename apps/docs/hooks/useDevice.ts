import { useEffect, useState } from "react";

interface DeviceDetect {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  DesktopView: () => boolean;
  MobileView: () => boolean;
  TabletView: () => boolean;
}

export function useDevice(): DeviceDetect {
  const [deviceType, setDeviceType] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/tablet/i.test(userAgent)) {
      setDeviceType("tablet");
    } else if (/mobile/i.test(userAgent)) {
      setDeviceType("mobile");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  const isMobile = deviceType === "mobile";
  const isDesktop = deviceType === "desktop";
  const isTablet = deviceType === "tablet";

  const DesktopView = () => isDesktop;
  const MobileView = () => isMobile;
  const TabletView = () => isTablet;

  return {
    isMobile,
    isDesktop,
    isTablet,
    DesktopView,
    MobileView,
    TabletView,
  };
}
