import { useEffect } from "react";

const Hotjar = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Replace 'YOUR_HOTJAR_ID' with your actual Hotjar Site ID
      const hotjarId = "3721239";

      // Initialize Hotjar with your Site ID
      (function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: hotjarId, hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

      // Hotjar trigger code here (optional)
      // You can use Hotjar's recording, feedback, and survey widgets here.

      // Example of adding a Hotjar trigger to a specific element
      // h.hj('trigger', 'custom_trigger_name');
    }
  }, []);

  return null;
};

export default Hotjar;
