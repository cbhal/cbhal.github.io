import Step from "../components/Step";
import React from "react";
import CuteGirl from "../public/q-o_CXp0_400x400.png";
import "../styles/Ririka.css";

const Ririka = () => {
  const [start, setStart] = React.useState(true);
  const [step2, setStep2] = React.useState(false);
  const [step3, setStep3] = React.useState(false);
  const [step4, setStep4] = React.useState(false);
  const [step5, setStep5] = React.useState(false);
  const [step6, setStep6] = React.useState(false);
  const [step7, setStep7] = React.useState(false);
  const [step8, setStep8] = React.useState(false);
  const [step9, setStep9] = React.useState(false);
  const [last1, setLast1] = React.useState(false);
  const [last2, setLast2] = React.useState(false);
  const [last3, setLast3] = React.useState(false);
  const [last4, setLast4] = React.useState(false);
  const [last5, setLast5] = React.useState(false);
  const [last6, setLast6] = React.useState(false);
  const [end, setEnd] = React.useState(false);

  const handleReset = () => {
    setEnd(!end);
    setStart(!start);
    setLast1(false);
    setLast2(false);
    setLast3(false);
    setLast4(false);
    setLast5(false);
    setLast6(false);
  };

  const handleYes1 = () => {
    setStep2(!step2);
    setStart(!start);
  };

  const handleYes2 = () => {
    setStep2(!step2);
    setStep3(!step3);
  };
  const handleYes3 = () => {
    setStep3(!step3);
    setLast1(!last1);
    setEnd(!end);
  };
  const handleYes4 = () => {
    setStep4(!step4);
    setStep5(!step5);
  };
  const handleYes5 = () => {
    setStep5(!step5);
    setStep6(!step6);
  };
  const handleYes6 = () => {
    setStep6(!step6);
    setLast2(!last2);
    setEnd(!end);
  };
  const handleYes7 = () => {
    setStep7(!step7);
    setStep8(!step8);
  };
  const handleYes8 = () => {
    setStep8(!step8);
    setStep9(!step9);
  };
  const handleYes9 = () => {
    setStep9(!step9);
    setLast3(!last3);
    setEnd(!end);
  };
  const handleNo1 = () => {
    setStep4(!step4);
    setStart(!start);
  };
  const handleNo2 = () => {
    setStep5(!step5);
    setStep2(!step2);
  };
  const handleNo3 = () => {
    setStep3(!step3);
    setStep6(!step6);
  };
  const handleNo4 = () => {
    setStep4(!step4);
    setStep7(!step7);
  };
  const handleNo5 = () => {
    setStep5(!step5);
    setStep8(!step8);
  };
  const handleNo6 = () => {
    setStep9(!step9);
    setStep6(!step6);
  };
  const handleNo7 = () => {
    setStep7(!step7);
    setLast4(!last4);
    setEnd(!end);
  };
  const handleNo8 = () => {
    setLast5(!last5);
    setStep8(!step8);
    setEnd(!end);
  };
  const handleNo9 = () => {
    setStep9(!step9);
    setLast6(!last6);
    setEnd(!end);
  };

  return (
    <>
      <Step init={start} ifNo={handleNo1} ifYes={handleYes1}>I like Vtubers</Step>
      <Step init={step2} ifNo={handleNo2} ifYes={handleYes2}>I want healing in my life</Step>
      <Step init={step3} ifNo={handleNo3} ifYes={handleYes3}>I despair the reality</Step>
      <Step init={last1}>
        You are looking for salvation<br/>
        Recommended for you:
        <h2>Ichijou Ririka</h2>
      </Step>
      <Step init={step4} ifNo={handleNo4} ifYes={handleYes4}>
        I'm more of an indoor person than an outdoor person
      </Step>
      <Step init={step5} ifNo={handleNo5} ifYes={handleYes5}>I want to participate in a Death Game</Step>
      <Step init={step6} ifNo={handleNo6} ifYes={handleYes6}>I yearn for the mastermind</Step>
      <Step init={last2}>
        You want to fall to the dark side<br/>
        Recommended for you:
        <h2>Ichijou Ririka</h2>
      </Step>
      <Step init={step7} ifNo={handleNo7} ifYes={handleYes7}>I want 5000 trillion yen</Step>
      <Step init={step8} ifNo={handleNo8} ifYes={handleYes8}>I need some alone time</Step>
      <Step init={step9} ifNo={handleNo9} ifYes={handleYes9}>I have sleepless nights</Step>
      <Step init={last3}>
        You want to feel warmth<br/>
        Recommended for you:
        <h2>Ichijou Ririka</h2>
      </Step>
      <Step init={last4}>
        You have a sharp sensibility<br/>
        Recommended for you:
        <h2>Ichijou Ririka</h2>
      </Step>
      <Step init={last5}>
        If you want to have fun together<br/>
        Recommended for you:
        <h2>Ichijou Ririka</h2>
      </Step>
      <Step init={last6}>
        You have a heart of stone<br/>
        Recommended for you:
        <h2>Ichijou Ririka</h2>
      </Step>
      {end && (
        <div>
          <img src={CuteGirl} alt="Very pretty girl" />
          <h1>Ichijou Ririka</h1>
          <h3>Cute! Positive! Genius!</h3>
          <h3>Debut on 9/9, 21:00 JST @ <a href="https://youtube.com/@IchijouRirika">Ririka's YT Channel!</a></h3>
          <button onClick={handleReset} style={{backgroundColor:"white"}}>Start again</button>
        </div>
      )}
    </>
  );
};

export default Ririka;
