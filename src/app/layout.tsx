import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css'; 
import 'mantine-react-table/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Layout from '@/components/layout/main/Layout';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Layout>
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
