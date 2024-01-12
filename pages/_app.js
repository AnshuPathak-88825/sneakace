import Layout from "../components/Layout";
import "../styles/globals.css";
import { ToastContainer } from './NextTostify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </AuthContextProvider>
  );
}
