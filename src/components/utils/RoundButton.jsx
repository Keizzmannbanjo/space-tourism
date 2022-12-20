import styled from "styled-components";

function RoundHomeButton() {
  return (
    <Oval>
      <h4 style={{ color: "black" }}>EXPLORE</h4>
    </Oval>
  );
}

// const OvalWrapper = styled.div`
// width: 400px;
// height:400px;
// border-radius: 50%;
// display:flex;
// justify-content: center;
// align-items: center;
// `;

const Oval = styled.div`
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: rgb(225, 225, 225);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    box-shadow: 2px 3px 0px 2rem #979797;
    cursor: pointer;
  }
`;

export default RoundHomeButton;
