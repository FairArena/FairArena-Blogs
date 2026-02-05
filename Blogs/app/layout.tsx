import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './global.css';
import Script from 'next/script';
import Image from 'next/image';

const font = Outfit({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.fairarena.app'),
  title: {
    template: '%s | FairArena Blog',
    default: 'FairArena Engineering Blog',
  },
  description:
    'Technical insights, manufacturing updates, and engineering deep dives from the team building FairArena.',
  openGraph: {
    url: 'https://blog.fairarena.app',
    siteName: 'FairArena Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin',
        width: 1200,
        height: 630,
        alt: 'FairArena Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FairArena Engineering Blog',
    description: 'Technical insights from the team building FairArena.',
    images: [
      'https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin',
    ],
    creator: '@FairArena',
  },
  icons: {
    icon: 'https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin',
    shortcut:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin',
    apple:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <HomeLayout
            githubUrl="https://github.com/FairArena"
            nav={{
              title: (
                <div className="flex items-center gap-2">
                  <Image
                    src="https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin"
                    alt="FairArena"
                    width={55}
                    height={55}
                    className="object-contain dark:invert-0 invert"
                  />
                </div>
              ),
            }}
            links={[
              {
                text: 'Blog',
                url: '/',
                active: 'nested-url',
              },
              {
                text: 'Docs',
                url: 'https://docs.fairarena.app',
              },
            ]}
          >
            {children}
          </HomeLayout>
        </RootProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R5HZ5FL5CN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R5HZ5FL5CN');
          `}
        </Script>
      </body>
    </html>
  );
}
