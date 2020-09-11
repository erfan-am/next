import { Provider } from "react-redux";
import { store } from "../confg/store";

export default function app({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
