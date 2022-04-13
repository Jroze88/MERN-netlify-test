import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import lottieRobo from './robo.json'

function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
               <Player
    autoplay
    loop
    src={lottieRobo}
    style={{maxWidth: '480px'}}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.accentColor  }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      {/* <Footer theme={props.theme} onToggle={props.onToggle} /> */}
    </div>
  );
}

export default Experience;