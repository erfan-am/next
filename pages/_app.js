import { Provider } from "react-redux";
import { store } from "../confg/store";
import Layout from '../app/shared/Layout';
export default function app({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}
