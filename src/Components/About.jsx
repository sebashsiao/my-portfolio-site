/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/markus-spiske.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
"I am passionate about solving problems by leveraging machine learning\
algorithms to integrate to AI systems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "ML Algorithms",
  "Data Analysis",
  "UX/UI Design",
  "Cloud Computing",
  "Software Ingeneering",
  "Neural Networks",
  "Deep Learning",
  "NLP",
];

const header = "Domain Expertise and Skills";

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = `\"I am an innovative Artificial Intelligence and Data Science professional, holding a rich 
background in project management and a passion for product design. Poised to excel in the IT industry, 
I'm targeting roles where I can leverage my versatile expertise to foster product innovation and success.

What sets me apart is my dual strength in analytical rigor and creative problem-solving, combined with 
extensive international experience. My multilingual proficiency enhances my ability to engage with diverse, 
global teams, fostering collaboration, and driving impactful outcomes.

During my tenure with various international entities, I have successfully coordinated complex projects 
and spearheaded quality management, delivering excellence under stringent timelines. My proactive approach 
resulted in the seamless integration of project management software, boosting operation efficiency and 
contributing to the successful execution of multiple projects.

I'm eager to contribute to a team that values innovation and dynamism in the AI and product management 
space. I welcome introductions and would greatly appreciate any advice or insights you can share to help me 
further my career aspirations.\"`.split("\n\n").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
));

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#282828",
          // backgroundColor: {image},
          WebkitTextFillColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h3>{header}</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
