interface Window {
  // HubSpot
  _hsq?: Array<unknown>
  // Google Gtag
  gtag?: {
    (type: 'event', event: string, payload: unknown): void
  }
}

// defined in webpack by Gatsby plugin
declare const __SENTRY_DSN__: string | undefined
declare const __SENTRY_RELEASE__: string | undefined

// defined in webpack by gatsby-node.js
declare const __SENTRY_ENVIRONMENT__: string | undefined
