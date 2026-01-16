// Meta Pixel initialization and tracking utilities

interface FbqFunction {
  (action: 'init', pixelId: string): void;
  (action: 'track', event: string, params?: Record<string, unknown>): void;
  callMethod?: (...args: unknown[]) => void;
  push: FbqFunction;
  loaded: boolean;
  version: string;
  queue: unknown[][];
}

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

const META_PIXEL_ID = '1454266366056635';

/**
 * Initialize Meta Pixel (Facebook Pixel)
 * This function loads the Facebook Pixel script and initializes tracking
 */
export function initMetaPixel(): void {
  if (window.fbq && window.fbq.loaded) {
    return;
  }

  const fbq = function (
    ...args: unknown[]
  ): void {
    const fbqInstance = fbq as FbqFunction;
    if (fbqInstance.callMethod) {
      fbqInstance.callMethod.apply(fbqInstance, args);
    } else {
      fbqInstance.queue.push(args);
    }
  } as FbqFunction;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  window.fbq = fbq;
  if (!window._fbq) {
    window._fbq = fbq;
  }
  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  
  script.onerror = () => {
    console.warn(
      'Meta Pixel script failed to load. This may be due to an ad blocker or privacy extension.\n' +
      'To test tracking, please disable ad blockers (e.g., Brave Shields) for localhost.'
    );
  };
  
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }
}

/**
 * Track a custom event with Meta Pixel
 * @param eventName - The name of the event to track
 * @param params - Optional parameters for the event
 */
export function trackMetaPixelEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (window.fbq && window.fbq.loaded) {
    window.fbq('track', eventName, params);
  }
}
