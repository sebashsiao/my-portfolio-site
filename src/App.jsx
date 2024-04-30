/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Sebastian M. Hsiao",
  title: "AI/ML Specialist",
  email: "mattisiao@gmail.com",
  gitHub: "sebashsiao",
  instagram: "sebashsiao",
  linkedIn: "sebashsiao",
  medium: "sebashsiao",
  twitter: "sebashsiao",
  youTube: "sebashsiao",
  bio: "I am a passionate AI and ML Specialist with a strong background in programming \
  and data science. I am a self-starter, and I am always looking for new opportunities to learn and grow.",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      {/* <Home name={siteProps.name} title={siteProps.title} />  // This is the original code */}
      <Home name={<span style={{ color: "white" }}>{siteProps.name}</span>} title={<span style={{ color: "white" }}>{siteProps.title}</span>} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
