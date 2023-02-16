import ContextAPI from "@/context/form-context";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <ContextAPI>
      <Component {...pageProps} />
      <ToastContainer position="top-center" theme="colored" />
    </ContextAPI>
  );
}
