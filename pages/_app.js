import ContextWrapper from "../context/ContextWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/slider.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}
