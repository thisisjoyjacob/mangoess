import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ignore errors
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXX"  // <-- Replace with your AdSense client ID
      data-ad-slot="YYYYYYYYYYYY"              // <-- Replace with your AdSense slot ID
      data-ad-format="auto"
    ></ins>
  );
};

export default AdBanner;
