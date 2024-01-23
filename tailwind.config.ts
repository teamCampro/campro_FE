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
      },
      colors: {
        primary100: '#4F9E4F',
        primary50: '#C4DBC4',
        emred: '#655DC6',
        error: '#D45A25',
        gray50: '#FFFFFF',
        gray900: '#000000',
        gray100: '#F5F5F5',
        gray200: '#E8E8E8',
        gray300: '#DFDFDF',
        gray400: '#C8C8C8',
        gray500: '#949494',
        gray600: '#555555',
        gray700: '#383838',
        gra800: '#1F1F1F',
      },
    },
    screens: {
      mobile: { min: '320px', max: '767px' },
      tablet: { min: '768px', max: '1199px' },
      desktop: '1200px',
    },
    fontFamily: {
      pre: 'Pretendard',
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
        },
        '.font-h3': {
          fontSize: pxToRem(28),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.28),
          fontWeight: '600',
        },
        '.font-title2': {
          fontSize: pxToRem(24),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.24),
        },
        '.font-title2-bold': {
          fontSize: pxToRem(24),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.24),
          fontWeight: '700',
        },
        '.font-title2-semibold': {
          fontSize: pxToRem(24),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.48),
          fontWeight: '600',
        },
        '.font-title3-bold': {
          fontSize: pxToRem(20),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.2),
          fontWeight: '700',
        },
        '.font-title3-semibold': {
          fontSize: pxToRem(20),
          lineHeight: '1.6',
          letterSpacing: pxToRem(-0.2),
          fontWeight: '600',
        },
        '.font-body1': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
        },
        '.font-body1-medium': {
          fontSize: pxToRem(18),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.18),
          fontWeight: '600',
        },
        '.font-body2': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
        },
        '.font-body2-semibold': {
          fontSize: pxToRem(16),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.16),
          fontWeight: '600',
        },
        '.font-caption1': {
          fontSize: pxToRem(14),
          lineHeight: '1.4',
          letterSpacing: pxToRem(-0.14),
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
