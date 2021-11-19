import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio";
import { Services } from "./Pages/Services";
import { Team } from "./Pages/Team";

function App() {
  return (
    <>
      {/* =======================================================
        * Template Name: Suveesoft - v1
        * Author: suhasnidgundi
        * License: https://suveesoft.in/
      ========================================================  */}

      <Header/>
      <Home/>
      <main id="main">
        <About/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Contact/>
      </main>
      <Footer/>      

    </>
  );
}

export default App;
