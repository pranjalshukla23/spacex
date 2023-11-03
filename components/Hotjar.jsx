import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const HotjarIntegration = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Replace 'YOUR_HOTJAR_ID' with your actual Hotjar Site ID
      const hotjarId = "3721239";
      const hotjarVersion = "6";

      Hotjar.init(hotjarId, hotjarVersion);

      // Initializing with `debug` option:
      Hotjar.init(hotjarId, hotjarVersion, {
        debug: true,
      });
    }
  }, []);

  return null;
};

export default HotjarIntegration;
