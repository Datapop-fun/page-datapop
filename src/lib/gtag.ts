// src/lib/gtag.ts
export const GA_TRACKING_ID = 'G-4ST40NQSSK'

export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}
