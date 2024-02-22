import type { Metadata } from 'next';
import ReactQueryProviders from './_utils/ReactQueryProviders';
import ReduxProvider from './_utils/ReduxProvider';
import './globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Script from 'next/script';
import './_styles/carousel.css';

export const metadata: Metadata = {
  title: 'CamPro',
  description: '캠핑 정보 공유',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='font-pre' suppressHydrationWarning={true}>
        <ReduxProvider>
          <ReactQueryProviders>
            <Script
              strategy='beforeInteractive'
              src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services,clusterer`}
            />
            {children}
            <div id='modal' />
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
