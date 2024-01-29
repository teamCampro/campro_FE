import type { Metadata } from 'next';
import ReactQueryProviders from './_utils/ReactQueryProviders';
import ReduxProvider from './_utils/ReduxProvider';
import './globals.css';
import './_styles/datePicker.css';

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
            {children}
            <div id='modal' />
          </body>
        </ReactQueryProviders>
      </ReduxProvider>
    </html>
  );
}
