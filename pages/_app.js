import "../styles/globals.css";

//INTERNAL IMPORT
import { EtherProvider } from "../Context/Ether";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const MyApp = ({ Component, pageProps }) => {
  return (
    <EtherProvider>
      <div className="position">
        <NavBar />

        <Component {...pageProps} />

        <Footer />
      </div>
    </EtherProvider>
  );
};

export default MyApp;
