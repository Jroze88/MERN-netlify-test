import React, { useState, memo, useRef, useEffect } from 'react';
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import lottieArrow from './arrow.json'
import { render } from 'react-dom';

function Home(props) {

  const [renderTime, setRenderTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderTime(true)
    }, 7000);
  }, []);
  


  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
 {renderTime && <Player
    autoplay
    loop={true}
    speed={0.8}
    src={lottieArrow}
    style ={{ position: "absolute", bottom: 0, right: 0, height: '10vh', width: '10vw'}}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>}
      <Skills theme={props.theme} />
      {/* <Footer theme={props.theme} /> */}
    </div>
  );
}

export default Home;
