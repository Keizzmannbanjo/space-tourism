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
          <DestinationFacts>
            <DestinationName>Moon</DestinationName>
            <Details>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.While
              you’re there, take in some history by visiting the Luna2 and
              Apollo 11 landing sites.
            </Details>
            <hr />
            <MoreDetailsContainer>
              <div>
                <p>Avg. Distance</p>
                <h4>384,400km</h4>
              </div>
              <div>
                <p>Est. Travel Time</p>
                <h4>3 Days</h4>
              </div>
            </MoreDetailsContainer>
          </DestinationFacts>
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
  padding-bottom: 1rem;
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
    padding: 5px;
  }

  li:hover {
    border-bottom: 2px solid var(--color-light);
  }
`;

const DestinationName = styled.h2`
  text-transform: uppercase;
  margin: 2rem 0rem 0.9rem;
`;

const Details = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const DestinationFacts = styled.div`
  hr {
    margin: 3.5rem 0 2rem;
    border-color: var(--color-grey);
    border-width: 2px;
  }
`;

const MoreDetailsContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;

  h4 {
    margin: 1rem 0;
  }
`;

export default Destination;
