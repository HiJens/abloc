import '../styles/_index.scss';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination'

import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  });

  return <Component {...pageProps} />
}

export default MyApp;
