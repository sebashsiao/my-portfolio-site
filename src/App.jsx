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
  name: "Sebastian Hsiao",
  title: "AI/ML Specialist",
  email: "sebashsiao@gmail.com",
  gitHub: "sebashsiao",
  instagram: "@teo_sb_",
  linkedIn: "sebashsiao",
  medium: "",
  twitter: "sebashsiao",
  youTube: "Code",
  bio: "I am an innovative Artificial Intelligence and Data Science professional, holding a rich \
  background in project management and a passion for product design. Poised to excel in the IT industry, \
  I'm targeting roles where I can leverage my versatile expertise to foster product innovation and success. \
  n\What sets me apart is my dual strength in analytical rigor and creative problem-solving, combined with \
  extensive international experience. My multilingual proficiency enhances my ability to engage with diverse, \
  global teams, fostering collaboration, and driving impactful outcomes. \
  \nDuring my tenure with various international entities, I have successfully coordinated complex projects \
  and spearheaded quality management, delivering excellence under stringent timelines. My proactive approach \
  resulted in the seamless integration of project management software, boosting operation efficiency and \
  contributing to the successful execution of multiple projects.\
  \nI'm eager to contribute to a team that values innovation and dynamism in the AI and product management space. I welcome introductions and would greatly appreciate any advice or insights you can share to help me further my career aspirations.",
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
