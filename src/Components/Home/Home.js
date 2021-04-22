import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Main, AnimatedText, Navbar, Button, Footer } from "../Styled"
import AnimatedBg from "../../Images/MovingEarth.gif"
import EarthImg from "../../Images/RotatingEarthTwo.gif"

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  width: 100%;
  padding: 10px 10%;
  padding-bottom: 100px;
  height: 90vh;
  min-height: 700px;
`

const AnimatedTextDiv = styled.div`
  padding: 10px 0px;
`

const HeaderText = styled.p`
  font-size: 2.2vw;
  color: var(--color-1);
  padding: 10px 0px;
  margin: 0px;
  font-weight: bold;

  @media only screen and (max-width: 1100px) {
    font-size: 3.2vw;
  }

  @media only screen and (max-width: 940px) {
    font-size: 3.6vw;
  }

  @media only screen and (max-width: 790px) {
    font-size: 4.2vw;
  }

  @media only screen and (max-width: 590px) {
    font-size: 4.6vw;
  }

  @media only screen and (max-width: 450px) {
    font-size: 5vw;
  }

  @media only screen and (max-width: 390px) {
    font-size: 6vw;
  }
`

const Section = styled.div`
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  background: ${({ background }) => background || `white`};
  padding: ${({ padding }) => padding || `10px 10%`};
  display: ${({ display }) => display || `flex`};

  @media only screen and (max-width: 900px) {
    padding: 10px 5%;
  }
`;

const Middle = styled.div`
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  background: ${({ background }) => background || `transparent`};
  padding: ${({ padding }) => padding || `0px`};
  display: ${({ display }) => display || `grid`};
  grid-auto-flow: column;
  grid-template-columns: 50% 50%;
  column-gap: 1rem;
  align-items: center;

  @media only screen and (max-width: 690px) {
    grid-auto-flow: row;
    grid-template-columns: none;
    text-align: center;
  }
`;

const MiddleHeader = styled.h1`
  color: var(--color-5);
  margin: 0px;
`;

const MiddleText = styled.p`
  color: white;
  font-size: 18px;
`;

const MiddleImg = styled.div`
  background: var(--color-5);
  height: 300px;
  text-align: center;
  width: 300px;
  margin: 0 auto;
  border-radius: 143px;
  padding: 5px;

  img{
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: 250px;
    width: 250px;
  }
`;

const Home = () => {
  return (
    <Main className="Home">
      <Navbar />
      <Container className="Home-Wrapper">
        <Header>
          <AnimatedTextDiv>
            <AnimatedText
              backgroundImg={AnimatedBg}
              fontsize={"11vw"}
              lgfontsize={"12vw"}
              text={"Trace The \nEarth's Events "}
            />
          </AnimatedTextDiv>
          <HeaderText>
            Eature combines Google Maps with EONET to show you all of
            nature&apos;s phenomenons
          </HeaderText>
          <Link to="/map">
            <Button>Start Eature &gt;</Button>
          </Link>
        </Header>
        <Section
          background="var(--color-1)"
          width="100%"
          height="80vh"
          padding="10px 15%"
        >
          <Middle>
            <MiddleImg>
              <img src={EarthImg} alt="Rotating Earth"/>
            </MiddleImg>
            <div>
              <MiddleHeader>
                Explore <br /> Natural Events
              </MiddleHeader>
              <MiddleText>
               Avalanches, earthquakes, wildfires, hurricanes, and volcanoes are only a 
               few of the natural phenomenons that occur on Earth. Eature's goal is to 
               show comprehensive data on the occurances of these natural events in a simplistic map ui.
              </MiddleText>
            </div>
          </Middle>
        </Section>
      </Container>
      <Footer />
    </Main>
  )
}

export default Home
