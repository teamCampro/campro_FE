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
      },
      backgroundColor: {
        'black-50': 'rgba(0, 0, 0, 0.50)',
        'white-100': 'rgba(255, 255, 255, 1)',
      },
      colors: {
        primary100: '#4F9E4F',
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
      gridTemplateColumns: {
        '1-col-288': 'repeat(1,minmax(288px,1fr))',
        '2-col-184': 'repeat(2,minmax(184px,1fr))',
        '2-col-340': 'repeat(2,minmax(340px,340px))',
        '3-col-184': 'repeat(3,minmax(184px,1fr))',
        '3-col-340': 'repeat(3,minmax(340px,340px))',
        '4-col-340': 'repeat(4,minmax(340px,340px))',
        '5-col-340': 'repeat(5,minmax(340px,340px))',
        'auto-fill-min-340': 'repeat(auto-fill, minmax(340px, 1fr))',
      },
      width: {
        custom: 'calc(100vh * 0.84)',
      },
      maxWidth: {
        custom: '100vw',
      },
    },
    screens: {
      mobileMin: '320px',
      mobile: {
        min: '320px',
        max: '767px',
      },
      tabletMin: '768px',
      mobile411: { min: '320px', max: '411px' },
      mobile725: { min: '412px', max: '725px' },
      mobileMiddle: { min: '345px', max: '767px' },
      tablet: {
        min: '768px',
        max: '1199px',
      },
      mobile767: { min: '726px', max: '767px' },
      tablet1002: { min: '768px', max: '1002px' },
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
      '1': '1 1 0%',
      '110': '1.10 1.10 0%',
      '134': '1.34 1.34 0%',
      '123': '1.23 1.23 0%',
      '222': '2.22 2.22 0%',
      '105': '1.05 1.05 0%',
    },
    flexGrow: {
      '0': '0',
      '1': '1',
      '3': '3',
      '7': '7',
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.font-h1': {
          fontSize: pxToRem(48),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.48),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-h3': {
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
        '.font-title2-semibold': {
          fontSize: pxToRem(22),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.22),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-title2-bold': {
          fontSize: pxToRem(24),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.48),
          fontWeight: '700',
          fontFamily: 'Pretendard',
        },
        '.font-title3-bold': {
          fontSize: pxToRem(20),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.2),
          fontWeight: '700',
          fontFamily: 'Pretendard',
        },
        '.font-title3-semibold': {
          fontSize: pxToRem(20),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.2),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-body1': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
          fontFamily: 'Pretendard',
        },
        '.font-body1-medium': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-body2': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
          fontFamily: 'Pretendard',
        },
        '.font-body2-semibold': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
          fontWeight: '600',
          fontFamily: 'Pretendard',
        },
        '.font-caption1': {
          fontSize: pxToRem(14),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.14),
          fontFamily: 'Pretendard',
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
          fontSize: pxToRem(140),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.2',
          letterSpacing: pxToRem(7),
        },
        '.font-sign-subTitle1': {
          color: 'var(--naver-text, #FFF)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(32),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: pxToRem(1.6),
        },
        '.font-sign-subTitle2': {
          color: '#3BA53B',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(32),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: pxToRem(1.6),
        },
        '.font-sign-title-tablet': {
          color: 'var(--naver-text, #FFF)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(100),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: 'pxToRem(2)',
        },
        '.font-sign-subTitle1-tablet': {
          color: 'var(--naver-text, #FFF)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(23),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: 'pxToRem(1)',
        },
        '.font-sign-subTitle2-tablet': {
          color: 'var(--naver-text, #3BA53B)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(23),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: 'pxToRem(1)',
        },
        '.font-sign-title-mobile': {
          color: 'var(--naver-text, #fff)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(52),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: pxToRem(1),
        },
        '.font-sign-subTitle1-mobile': {
          color: 'var(--naver-text, #FFF)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(12),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: pxToRem(1),
        },
        '.font-sign-subTitle2-mobile': {
          color: 'var(--naver-text, #3BA53B)',
          textAlign: 'center',
          fontFamily: 'Preahvihear',
          fontSize: pxToRem(12),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: pxToRem(1),
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
