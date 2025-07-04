import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState, useRef } from "react";
import { Button , OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score , setScore] = useState(0);
  const [selectedNumber , setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [error , setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const rulesRef = useRef(null);

  // rndm no. gnrte krne ka fn hai ye 
  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
  };

  const rollDice = () => {
    if(!selectedNumber){
      setError("You've not selected any number!!");
      return;
    }
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber == randomNumber){
      setScore (prev=>prev+randomNumber);
    }else{
      setScore(prev=>prev-2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector 
                        error = {error}
                        setError={setError}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice currentDice={currentDice}
                rollDice={rollDice} />
      <div className = "btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
          onClick={() => {
            setShowRules((prev) => {
              const nextValue = !prev;
              if (!prev) {
                setTimeout(() => {
                  rulesRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
              return nextValue;
            });
          }}
        >
        {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && (
        <div ref={rulesRef}>
          <Rules />
        </div>
      )}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 20px;
  .top_section {
    display: flex;
    gap: 300px;
    align-items: end;
    justify-content: space-around;
  }
  .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

