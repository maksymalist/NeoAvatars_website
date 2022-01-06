import "../styles/globals.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div style={{ height: "100px", backgroundColor: "transparent" }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
