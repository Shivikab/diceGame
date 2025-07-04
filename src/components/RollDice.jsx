import styled from "styled-components";

const RollDice = ({rollDice , currentDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick ={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click On The Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;

    img{
      height: 130px; 
      width: 130px;
      object-fit: contain;
      /* cursor: pointer;  */
    }

    .dice{
      cursor: pointer;
    }
    p{
      font-size: 24px;
    }
`;