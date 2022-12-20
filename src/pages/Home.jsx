import styled from "styled-components";
import RoundHomeButton from "../components/utils/RoundButton";
import Navbar from "../components/Navbar";
import backgroundImg from "../assets/home/background-home-desktop.jpg";

function Home() {
  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>
        <TextWrapper>
          <h5>SO YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p style={{ lineHeight: "32px" }}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </TextWrapper>
        <RoundHomeButton />
      </ContentWrapper>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  background-image: url(${backgroundImg});
  padding-top: 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height:100vh;
`;




const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 3rem;
  padding-right: 5rem;
  padding-bottom: 4rem;
  height: 110vh;
`;

const TextWrapper = styled.div`
  width: 450px;
`;
export default Home;
