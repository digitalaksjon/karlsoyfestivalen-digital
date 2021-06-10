export const SITE_URL = 'https:/karlsoyfestivalen-digital.vercel.app';
export const SITE_ORIGIN = process.env.SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'karlsoyfestivalen';
export const BRAND_NAME = 'Karlsøyfestivalen 2021';
export const SITE_NAME_MULTILINE = ['Karlsøyfestivalen', 'Conf'];
export const SITE_NAME = 'Karlsøyfestivalen Digital';
export const META_DESCRIPTION =
  'This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = '3. - 8. august 2021';
export const SHORT_DATE = '3. - 8. august';
export const FULL_DATE = 'Aug 3rd 12am CET (GMT+1)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/digitalaksjon/karlsoyfestivalen-digital';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Festivalplassen',
    route: '/stage/festivalplassen'
  },
  {
    name: 'Storscena',
    route: '/stage/storscena'
  },
  {
    name: 'Lillescena',
    route: '/stage/lillescena'
  },
  {
    name: 'Barnelavvoen',
    route: '/stage/barnelavvoen'
  },
  {
    name: 'Sendeplan',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
