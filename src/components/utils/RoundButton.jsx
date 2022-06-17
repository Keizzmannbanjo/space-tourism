import styled from "styled-components";

function RoundButton() {
  return (
    <OvalWrapper className="oval-parent">
      <Oval>
        <h4 style={{ color: "black" }}>EXPLORE</h4>
      </Oval>
    </OvalWrapper>
  );
}

const OvalWrapper = styled.div`
width: 450px;
height:450px;
border:radius: 50%;
display:flex;
justify-content: center;
align-items: flex-end;
`;

const Oval = styled.div`
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: rgb(225, 225, 225);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover 
`;

export default RoundButton;
