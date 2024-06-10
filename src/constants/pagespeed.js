export const PAGESPEED_URL = 'https://pagespeed.web.dev/'
export const PAGESPEED_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?category=accessibility&category=performance&category=best-practices&category=seo'
export const PAGESPEED_API = PAGESPEED_BASE + '&url=' + process.env.NEXT_PUBLIC_SITE_URL

