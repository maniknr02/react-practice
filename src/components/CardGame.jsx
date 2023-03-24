import React from "react";
import CardContainer from "./CardContainer";
import { useState } from "react";
import { ShowTime } from "./ShowTime";
import { ShowMoves } from "./ShowMoves";
var timer;
export const CardGame = () => {
  const getCurrentLeastTime = () => {
    if (localStorage.getItem("besttime")) {
      return JSON.parse(localStorage.getItem("besttime"));
    }
    return { min: 999, sec: 999 };
  };
  const getCurrentLeastMoves = () => {
    if (localStorage.getItem("bestmoves")) {
      return localStorage.getItem("bestmoves");
    }
    return 999;
  };
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [currleastTime, setleastTime] = useState(getCurrentLeastTime());
  const [moves, setMoves] = useState(0);
  const [gameState, setGamestate] = useState("");
  const [timerStarted, setTimerStarted] = useState(false);
  const [currLeastMoves, setLeastMoves] = useState(getCurrentLeastMoves());
  const increase = () => {
    setMoves(moves + 1);
  };
  const changeState = () => {
    setGamestate((state) => {
      return state === "" ? "blur" : "";
    });
  };
  const gameOver = () => {
    let endTime = time;
    stopTheTimer();
    checkScore(endTime);
  };
  const checkScore = (endTime) => {
    if (endTime.min <= currleastTime.min) {
      if (endTime.sec < currleastTime.sec) {
        localStorage.setItem("besttime", JSON.stringify(endTime));
        setleastTime(endTime);
      }
    }
    if (moves < currLeastMoves) {
      localStorage.setItem("bestmoves", JSON.stringify(moves));
      setLeastMoves(moves);
    }
  };
  const startTheTimer = () => {
    if (!timerStarted) {
      timer = setInterval(() => {
        setTime((oldTime) => {
          return {
            min: oldTime.sec + 1 < 60 ? oldTime.min : oldTime.min + 1,
            sec: oldTime.sec + 1 < 60 ? oldTime.sec + 1 : 0,
          };
        });
      }, 1000);
      setTimerStarted(true);
    }
  };
  const stopTheTimer = () => {
    setTimerStarted(false);
    clearInterval(timer);
    setMoves(0);
    setTime({ min: 0, sec: 0 });
  };
  return (
    <div>
      <div className={"main-container " + { gameState }}>
        <div>
          {
            <CardContainer
              start={startTheTimer}
              stop={stopTheTimer}
              increase={increase}
              gameOver={gameOver}
              change={changeState}
            />
          }
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div className="currScore">
            <div className="scoreTitle">YOUR SCORE</div>
            <ShowTime time={time} />
            <ShowMoves moves={moves} />
          </div>
          <div className="bestScore">
            <div className="scoreTitle">HIGH SCORE</div>
            <ShowTime time={currleastTime} />
            <ShowMoves moves={currLeastMoves} />
          </div>
        </div>
      </div>
    </div>
  );
};
