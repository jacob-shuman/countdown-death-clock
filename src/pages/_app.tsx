import type { AppProps } from 'next/app';
import withTwindApp from '@twind/next/app';
import twindConfig from '../../twind.config';
import '@fontsource/oswald';
import NextHead from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Countdown" />
        <meta
          name="description"
          content="Death clock based on the movie 2019 movie Countdown"
        />
        <link rel="shortcut icon" href="/countdown.svg" />

        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Countdown" />

        <link rel="mask-icon" href="/countdown.svg" color="#5bbad5" />

        <link rel="apple-touch-icon" sizes="180x180" href="/countdown.png" />

        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />

        <title>Countdown</title>

        {/*
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
         
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        
        <link rel="shortcut icon" href="/favicon.ico" /> */}

        {/* <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        /> 
        
        apple splash screen images

        <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />

        */}
      </NextHead>

      <Component {...pageProps} />
    </>
  );
}
export default withTwindApp(twindConfig, App);
