import '@/styles/globals.css'
import '../styles/main.css'
import Layout from '@/components/layouts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}
