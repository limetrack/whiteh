// scroll bar
import "simplebar/src/simplebar.css";

import { useEffect, useState } from "react";
// next
import Head from "next/head";
// theme
import ThemeConfig from "src/theme";
// contexts
import { SettingsProvider } from "src/contexts/SettingsContext";
// components
// import Settings from "src/components/settings";
import RtlLayout from "src/components/RtlLayout";
import TopProgressBar from "src/components/TopProgressBar";
import ThemePrimaryColor from "src/components/ThemePrimaryColor";
// ----------------------------------------------------------------------
import { useRouter } from 'next/router';
import LoadingScreen from "src/components/LoadingScreen";

export default function MyApp({ Component, pageProps }) {
  const [pageLoading, setPageLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <SettingsProvider>
        <ThemeConfig>
          <ThemePrimaryColor>
            <RtlLayout>
              {/* <Settings /> */}
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
              </Head>
              <TopProgressBar />
              {pageLoading && (
                <LoadingScreen {...pageProps} />
              )}
              {!pageLoading && (
                <Component {...pageProps} />
              )}
            </RtlLayout>
          </ThemePrimaryColor>
        </ThemeConfig>
      </SettingsProvider>
    </>
  );
}
