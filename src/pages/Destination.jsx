import backgroundImg from "../assets/destination/background-destination-desktop.jpg";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import moonImg from "../assets/destination/image-moon.webp";

function Destination() {
  return (
    <Wrapper>
      <Navbar />
      <MainContainer>
        <div>
          <h5>
            <span>01</span> Pick Your Destination
          </h5>
          <ImageContainer>
            <img src={moonImg} alt="" />
          </ImageContainer>
        </div>
        <DestinationFactContainer>
          <DestinationNav>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </DestinationNav>
          <div>
            <h1>Moon</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
            <div>
              <div>
                <p>Avg. Distance</p>
                <h4>384,400km</h4>
              </div>
              <div>
                <p>Est. Travel Time</p>
                <h4>3 Days</h4>
              </div>
            </div>
          </div>
        </DestinationFactContainer>
      </MainContainer>
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
  min-height: 100vh;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0rem;
  display: flex;
  justify-content: space-around;

  > div {
    width: 45%;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const DestinationFactContainer = styled.div`
  margin-top: 6rem;
`;

const DestinationNav = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    margin-right: 1rem;
    font-size: 25px;
    color: var(--color-light);
    border-bottom: 2px solid transparent;
    cursor: pointer;
    padding:5px;
  }

  li:hover {
    border-bottom: 2px solid var(--color-light);
  }
`;

export default Destination;
