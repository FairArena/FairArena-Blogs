import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './global.css';

const font = Outfit({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.fair.sakshamg.me'),
  title: {
    template: '%s | FairArena Blog',
    default: 'FairArena Engineering Blog',
  },
  description:
    'Technical insights, manufacturing updates, and engineering deep dives from the team building FairArena.',
  openGraph: {
    url: 'https://blog.fair.sakshamg.me',
    siteName: 'FairArena Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
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
    images: ['https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png'],
    creator: '@FairArena',
  },
  icons: {
    icon: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
    shortcut: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
    apple: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
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
                  <img
                    src="https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png"
                    alt="FairArena"
                    className="w-8 h-8 object-contain dark:invert-0 invert"
                  />
                  <span className="font-bold">FairArena</span>
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
                url: 'https://docs.fair.sakshamg.me',
              },
            ]}
          >
            {children}
          </HomeLayout>
        </RootProvider>
      </body>
    </html>
  );
}
