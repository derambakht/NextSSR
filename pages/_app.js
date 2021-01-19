import '../styles/globals.css'
import Link from 'next/link'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Head from 'next/head'

// yarn add nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
    <meta name='application-name' content='PWA App' />
<meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
<meta name='apple-mobile-web-app-title' content='PWA App' />
<meta name='description' content='Best PWA App in the world' />
<meta name='format-detection' content='telephone=no' />
<meta name='mobile-web-app-capable' content='yes' />
<meta name='msapplication-config' content='/public/icons/browserconfig.xml' />
<meta name='msapplication-TileColor' content='#2B5797' />
<meta name='msapplication-tap-highlight' content='no' />
<meta name='theme-color' content='#000000' />
          
<link rel='apple-touch-icon' sizes='180x180' href='/public/icons/apple-touch-icon.png' />
<link rel='icon' type='image/png' sizes='32x32' href='/public/icons/icon-32x32.png' />
<link rel='icon' type='image/png' sizes='16x16' href='/public/icons/icon-16x16.png' />
<link rel='manifest' href='/public/manifest.json' />
<link rel='mask-icon' href='/public/icons/safari-pinned-tab.svg' color='#5bbad5' />
<link rel='shortcut icon' href='/public/icons/icon.ico' />
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
     
<meta name='twitter:card' content='summary' />
<meta name='twitter:url' content='https://yourdomain.com' />
<meta name='twitter:title' content='PWA App' />
<meta name='twitter:description' content='Best PWA App in the world' />
<meta name='twitter:image' content='https://yourdomain.com/public/icons/android-chrome-192x192.png' />
<meta name='twitter:creator' content='@DavidWShadow' />
<meta property='og:type' content='website' />
<meta property='og:title' content='PWA App' />
<meta property='og:description' content='Best PWA App in the world' />
<meta property='og:site_name' content='PWA App' />
<meta property='og:url' content='https://yourdomain.com' />
<meta property='og:image' content='https://yourdomain.com/public/icons/apple-touch-icon.png' />
    </Head>
      <h1>Nextjs public SSR App</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts">Blog</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/categories">Categories</Link></li>
        <li><Link href="/categories-ssg">Categories with SSG</Link></li>
      </ul>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
