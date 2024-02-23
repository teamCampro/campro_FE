import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
type AccType = Record<string, string>;

const range = (start: number, end: number): number[] => {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
};

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    fontSize: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        onboard: 'url(../../public/avifs/onbording.avif)',
        gradient:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.60) 75.9%)',
      },

      boxShadow: {
        categoryItem: '0px 4px 17px 0px rgba(0, 0, 0, 0.07)',
        searchBar: '0px 4px 23px 0px rgba(0, 0, 0, 0.07)',
        header: '0px 4px 16px 0px rgba(149, 149, 149, 0.12)',
        overView: '0px 0px 24px 0px rgba(0, 0, 0, 0.07)',
        overViewButton: '0px 2px 8px 0px rgba(0, 0, 0, 0.24)',
        reserve: '0px 2px 8px 0px rgba(0, 0, 0, 0.24)',
      },
      backgroundColor: {
        'black-50': 'rgba(0, 0, 0, 0.50)',
        'black-searchBar': 'rgba(0, 0, 0, 0.20)',
        'white-100': 'rgba(255, 255, 255, 1)',
      },
      colors: {
        primary100: '#3E874E',
        primary50: '#C4DBC4',
        emred: '#655DC6',
        error: '#DA1E28',
        second50: '#DFD5C2',
        second100: '#7D6F5A',
        white: '#FFFFFF',
        black: '#000000',
        gray100: '#F5F5F5',
        gray200: '#E8E8E8',
        gray300: '#DFDFDF',
        gray400: '#C8C8C8',
        gray500: '#949494',
        gray600: '#555555',
        gray700: '#383838',
        gray800: '#1F1F1F',
      },
      flexGrow: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      brightness: {},
      gridTemplateColumns: {
        '1-col-288': 'repeat(1,minmax(288px,1fr))',
        '2-col-184': 'repeat(2,minmax(184px,1fr))',
        '2-col-340': 'repeat(2,minmax(340px,1fr))',
        '3-col-184': 'repeat(3,minmax(184px,1fr))',
        '3-col-340': 'repeat(3,minmax(340px,1fr))',
        '4-col-340': 'repeat(4,minmax(340px,1fr))',
        '5-col-340': 'repeat(5,minmax(340px,1fr))',
        'auto-fill-min-340': 'repeat(auto-fill, minmax(340px, 1fr))',
        'auto-fit-min-340': 'repeat(auto-fit, minmax(340px, 1fr))',
      },
      width: {
        custom: 'calc(100vh * 0.84)',
      },
      maxWidth: {
        custom: '100vw',
      },
      aspectRatio: {
        '2/1': '2 / 1',
        '256/192': '256 / 192',
        '288/184': '288 / 184',
        '320/197': '320 / 197',
        '320/220': '320 / 220',
        '340/220': '340 / 220',
        '688/398': '688 / 398',
        '719/291': '719 / 291',
      },
    },
    screens: {
      mobileMin: '320px',
      mobile: {
        min: '320px',
        max: '767px',
      },
      tabletMin: '768px',
      tabletMiddleMin: '1080px',
      mobile344: { min: '320px', max: '344px' },
      mobile359: { min: '320px', max: '359px' },
      mobile411: { min: '320px', max: '411px' },
      mobile725: { min: '412px', max: '725px' },
      mobileMiddle: { min: '345px', max: '767px' },
      tablet: {
        min: '768px',
        max: '1199px',
      },
      mobile767: { min: '726px', max: '767px' },
      tablet1002: { min: '768px', max: '1002px' },
      tablet1079: { min: '768px', max: '1079px' },
      tablet1199: { min: '1003px', max: '1199px' },
      desktop: '1200px',
      wide: '1488px',
      desktop1440: '1440px',
      desktop1920: '1920px',
    },
    fontFamily: {
      pre: 'Pretendard',
    },
    flex: {
      '0': '1 0 0%',
      '1': '1 1 0%',
      '110': '1.10 1.10 0%',
      '134': '1.34 1.34 0%',
      '123': '1.23 1.23 0%',
      '222': '2.22 2.22 0%',
      '105': '1.05 1.05 0%',
      '580': '5.80 5.80 0%',
      '524': '5.24 5.24 0%',
    },
    flexGrow: {
      '0': '0',
      '1': '1',
      '3': '3',
      '7': '7',
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.font-h1-semibold': {
          fontSize: pxToRem(48),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.48),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-h2-semibold': {
          fontSize: pxToRem(32),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.32),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },

        '.font-h3-semibold': {
          fontSize: pxToRem(28),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.28),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-title1': {
          fontSize: pxToRem(24),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.24),
          fontFamily: 'Pretendard',
          fontWeight: '400',
        },
        '.font-title1-bold': {
          fontSize: pxToRem(24),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.24),
          fontWeight: '700',
          fontFamily: 'Pretendard',
        },
        '.font-title1-semibold': {
          fontSize: pxToRem(24),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.48),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-title2-bold': {
          fontSize: pxToRem(22),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.22),
          fontWeight: '700',
          fontFamily: 'Pretendard',
        },
        '.font-title2-semibold': {
          fontSize: pxToRem(22),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.22),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-title3-bold': {
          fontSize: pxToRem(20),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.2),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-title3-semibold': {
          fontSize: pxToRem(20),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.2),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-title3-medium': {
          fontSize: pxToRem(20),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.2),
          fontWeight: '500',
          fontFamily: 'Pretendard',
        },

        '.font-body1': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
          fontFamily: 'Pretendard',
          fontWeight: '400',
        },
        '.font-body1-semibold': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
          fontFamily: 'Pretendard',
          fontWeight: '600',
        },
        '.font-body1-bold': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
          fontFamily: 'Pretendard',
          fontWeight: '700',
        },
        '.font-body1-medium': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
          fontWeight: '500',
          fontFamily: 'Pretendard',
        },
        '.font-body2': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
          fontFamily: 'Pretendard',
          fontWeight: '400',
        },
        '.font-body2-medium': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
          fontFamily: 'Pretendard',
          fontWeight: '500',
        },
        '.font-body2-bold': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
          fontFamily: 'Pretendard',
          fontWeight: '700',
        },
        '.font-body2-semibold': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-caption1-medium': {
          fontSize: pxToRem(14),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.14),
          fontFamily: 'Pretendard',
          fontWeight: '500',
        },
        '.font-caption1-semibold': {
          fontSize: pxToRem(14),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.14),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-caption2': {
          fontSize: pxToRem(12),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.12),
          fontFamily: 'Pretendard',
          fontWeight: '400',
        },
        '.font-caption2-medium': {
          fontSize: pxToRem(12),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.12),
          fontFamily: 'Pretendard',
          fontWeight: '500',
        },
        '.font-caption2-semibold': {
          fontSize: pxToRem(12),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.12),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },

        '.font-sign-title': {
          color: 'var(--naver-text, #FFF)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(94),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.165',
          letterSpacing: pxToRem(4),
        },

        '.font-sign-title-tablet': {
          color: 'var(--naver-text, #FFF)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(94),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.165',
          letterSpacing: pxToRem(4),
        },

        '.font-sign-title-mobile': {
          color: 'var(--naver-text, #fff)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(42),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.165',
          letterSpacing: pxToRem(4),
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
