import "./App.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import ShowTimer from "./ShowTimer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [mintues, setMintues] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerID, setTimerId] = useState(0);

  const handleStart = () => {
    if (hours < 0 || mintues < 0 || seconds <= 0) {
      alert("Invalid input......");
    } else {
      setIsStart(true);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerID);
  };

  const handleResume = () => {
    setIsPaused(false);
    startTimer(seconds, mintues, hours, timerID);
  };

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
  };

  const resetTimer = () => {
    setHours(0);
    setMintues(0);
    setSeconds(0);
    clearInterval(timerID);
  };

  const startTimer = (sec, mint, hour, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && mint > 0) {
      setMintues((m) => m - 1);
      setSeconds(59);
    } else {
      setHours((h) => h - 1);
      setMintues(59);
      setSeconds(59);
    }
    if (sec === 0 && mint === 0 && hour === 0) {
      handleReset()
      alert("Timer Comppleted");
      return;
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        startTimer(seconds, mintues, hours, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, mintues, seconds]);

  return (
    <div>
      <div className="flex justify-center items-center m-8">
        <h1 className="font-bold text-center text-2xl">Countdown timer</h1>
      </div>
      {!isStart ? (
        <Timer
          handleStart={handleStart}
          setHours={setHours}
          setMintues={setMintues}
          setSeconds={setSeconds}
        />
      ) : (
        <ShowTimer
          hours={hours}
          mintues={mintues}
          seconds={seconds}
          handlePause={handlePause}
          handleReset={handleReset}
          handleResume={handleResume}
          isPaused={isPaused}
        />
      )}
    </div>
  );
}

export default App;
