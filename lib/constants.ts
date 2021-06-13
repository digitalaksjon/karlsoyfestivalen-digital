export const SITE_URL = 'https:/karlsoyfestivalen-digital.vercel.app';
export const SITE_ORIGIN = process.env.SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'karlsoyfestivalen';
export const BRAND_NAME = 'Karlsøyfestivalen 2021';
export const SITE_NAME_MULTILINE = ['Karlsøyfestivalen', 'Conf'];
export const SITE_NAME = 'Karlsøyfestivalen Digital';
export const META_DESCRIPTION =
  'Karlsøyfestivalen er en global digital festival med mening!';
export const SITE_DESCRIPTION =
  'Velkommen tilbake til Karlsøya!';
export const DATE = '5. - 8. august 2021';
export const SHORT_DATE = '5. - 8. august';
export const FULL_DATE = 'Aug 3rd 12am CET (GMT+1)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';


export const IG_USERNAME = "karlsoyfestivalen"
export const IG_PASSWORD = "R3cl41m"


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
    name: 'Storscena',
    route: '/stage/storscena'
  },
  {
    name: 'Galleriet',
    route: '/stage/galleriet'
  },
  {
    name: 'Barnelavvoen',
    route: '/stage/barnelavvoen'
  },
  {
    name: 'Program',
    route: '/program'
  },
  {
    name: 'Artister',
    route: '/artist'
  },
  {
    name: 'Frivillig',
    route: '/frivillig'
  },
  {
    name: 'Om oss',
    route: '/samarbeid'
  }
];

export type TicketGenerationState = 'default' | 'loading';
