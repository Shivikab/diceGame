import styled from "styled-components";
const NumberSelector = ({
    setError ,
    error, 
    selectedNumber,
    setSelectedNumber,
}) => {
  const arrNumber = [1,2,3,4,5,6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
    <p className = "error">{error}</p>
    <div className = "flex">
        {arrNumber.map((value,i) => (
            <Box 
            $isSelected={value == selectedNumber}
            key={i} 
            onClick = {() => numberSelectorHandler(value)}
            >
                {value}
            </Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 500;

}
.error{
    color: red;
    /* background-color: black; */
    /* border-radius: 15px; */
    /* border: solid 1px black; */
    font-size: 20px;
}
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 500;
    background-color: ${(props) => (props.$isSelected ? "black" : "white")};
    color: ${(props) => (props.$isSelected ? "white" : "black")};
    cursor: pointer;
`;