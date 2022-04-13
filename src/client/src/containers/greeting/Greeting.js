import React, { useState, memo, useRef, useEffect } from 'react';
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
// import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import lottielaptop from './laptop-lottie.json'
// import Lottie from 'react-lottie-player'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  //          LAZY LOADING
  // useEffect(() => {
  //   setTimeout(() => {
  //     import('./26514-check-success-animation.json').then(setAnimationData);
  //   }, 1000);
  // }, []);


  return (
    <Fade bottom duration={2000} distance="40px">

      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.accentColor }}>Jano Roze</h1><br></br>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
              
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">



{/* LAZY LOADING */}

{/*

{animationData ? <Lottie
          play
          loop
          animationData={animationData}
          style={{ width: 150, height: 150, marginBottom: 10 }}
        />: null} 
 */}




{/* REGULAR LOADING */}

          <Player
    autoplay
    speed={0.9}
    src={lottielaptop}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
          </div>
        </div>
      </div>
    </Fade>
  );
}
