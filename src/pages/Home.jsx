import styled from "styled-components";
import Navbar from "../components/Navbar";
import RoundButton from "../components/utils/RoundButton";

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
        <RoundButton />
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
`;

const ContentWrapper = styled.div`
  width: 1110px;
  margin: 251px auto 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TextWrapper = styled.div`
  width: 450px;
  height: 382px;
`;

export default Home;
