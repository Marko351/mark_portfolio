import '../styles/globals.css';
import Layout from '../components/Layout/index';
import { useEffect } from 'react';
import { loadCursor } from '../data/loadCursor';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      loadCursor();
    }, 3100);
  }, []);
  return (
    <Layout>
      <div class="cursor">
        <div class="cursor__ball cursor__ball--big ">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
          </svg>
        </div>

        <div class="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
          </svg>
        </div>
      </div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
