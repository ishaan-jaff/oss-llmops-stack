import "../src/style.css";
import "../src/overrides.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Remove the top-level PostHog initialization since we'll do it in the useEffect hook

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize PostHog
    if (typeof window !== "undefined") {
      posthog.init("phc_ul4oKZkeeW7thZpBTLok0Wp2VsxK3OHU3eSWyWnD2rL", {
        api_host: "https://ph.oss-llmops-stack.com",
        ui_host: "https://eu.posthog.com",
        // Enable debug mode in development
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") posthog.debug();
        },
        autocapture: false,
        enable_heatmaps: false,
        disable_surveys: true,
      });
    }

    // Track page views
    const handleRouteChange = () => {
      posthog.capture("$pageview");
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <PostHogProvider client={posthog}>
      <Component {...pageProps} />
    </PostHogProvider>
  );
}
