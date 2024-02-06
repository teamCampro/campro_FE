import type { Metadata } from 'next';
import ReactQueryProviders from './_utils/ReactQueryProviders';
import ReduxProvider from './_utils/ReduxProvider';
import './globals.css';
import './_styles/datePicker.css';
import Script from 'next/script';

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
      <ReduxProvider>
        <ReactQueryProviders>
          <body className='font-pre' suppressHydrationWarning={true}>
            <Script
              strategy='beforeInteractive'
              src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`}
            />
            {children}
            <div id='modal' />
          </body>
        </ReactQueryProviders>
      </ReduxProvider>
    </html>
  );
}
