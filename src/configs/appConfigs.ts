import { Roboto, Raleway, IBM_Plex_Sans } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'Karate | Best Karate Site.';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - Karate`;
export const SITE_DESCRIPTION_DEFAULT = 'You will Learn Karate From Here';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Roboto({
    weight: '400',
    subsets: ['latin']
});

export const raleway = Raleway({ subsets: ['latin'] });

export const ibmSans = IBM_Plex_Sans({
    weight: '700',
    subsets: ['latin']
});
