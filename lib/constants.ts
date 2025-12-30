/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: 'Blog Buster',
  description: 'Create one template, add your data, and generate thousands of SEO pages automatically to capture inbound leads at scale.',
  url: 'https://blogbuster.com',
  ogImage: '/images/og-image.png',
  links: {
    twitter: 'https://twitter.com/blogbuster',
    github: 'https://github.com/blogbuster',
  },
} as const;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const THEME_COLORS = {
  primary: {
    start: '#5048E5',
    end: '#8B63E9',
  },
  greyBlue: 'rgba(100, 149, 237)',
  purple: 'rgba(139, 99, 233)',
  indigo: 'rgba(80, 72, 229)',
} as const;
