export const trackEvent = (eventName: string, data?: Record<string, string>) => {
  // Lightweight analytics wrapper. 
  // Ready to be hooked into Vercel Analytics, PostHog, or Google Analytics.
  console.log(`[Analytics] ${eventName}`, data || {});
};
