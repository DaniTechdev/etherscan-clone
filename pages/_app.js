import "../styles/globals.css";

//INTERNAL IMPORT
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;
