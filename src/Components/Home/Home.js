import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Main, AnimatedText, Navbar, Button, Footer } from "../Styled"
import AnimatedBg from "../../Images/MovingEarth.gif"

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  width: 100%;
  padding: 10px 10%;
  padding-bottom: 100px;
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
`

const Section = styled.div`
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  background: ${({ background }) => background || `white`};
  padding: ${({ padding }) => padding || `10px 10%`};
  display: ${({ display }) => display || `flex`};
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
  border-radius: 5px;
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
              <p>Image</p>
            </MiddleImg>
            <div>
              <MiddleHeader>
                Explore <br /> Natural Events
              </MiddleHeader>
              <MiddleText>
                The way we like to love our lives are all different. Why not
                budget our expenses differently as well? With Mavy, you can
                personalize how you want your expenses to be categories and pull
                unique metrics made for you.
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
