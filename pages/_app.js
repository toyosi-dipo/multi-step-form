import ContextAPI from "@/context/form-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ContextAPI>
      <Component {...pageProps} />
    </ContextAPI>
  );
}
