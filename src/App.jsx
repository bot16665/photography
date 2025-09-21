import React from "react";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx"; 
import Page3 from "./page3.jsx";
import Page4 from "./page4.jsx";
import Page5 from "./page5.jsx";
import Page6 from "./page6.jsx";
import Page7 from "./page7.jsx";
import Page8 from "./page8.jsx";
import Page9 from "./page9.jsx";
import Page10 from "./page10.jsx";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";



function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('./assets/bg.png')" }} // place your bg image in public folder
    >
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <Footer />
      <Navbar />
      

    </div>
  );
}

export default App;
