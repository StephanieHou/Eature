import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../Images/Logo.png"

const Container = styled.div`
  width: 100%;
  height: 80px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 13% 87%;
  align-items: center;
`

const LogoText = styled.h1`
  color: var(--color-1);
  font-size: 2rem;
  font-family: "Baumans";
`

const LogoDiv = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 70px 110px;
  align-items: center;
`

const Image = styled.img`
  height: 60px;
  padding-left: 20px;
`

const LinkDiv = styled.div`
  padding-right: 18px;
`

const LinkWrapper = styled.div`
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 50% 50%;
  display: grid;
  width: 300px;
  float: right;
  text-align: right;
`

export default function Navbar() {
  return (
    <Container className="Navbar">
      <Wrapper>
        <LogoDiv>
          <Link to="/">
            <Image src={Logo} alt="Eature Logo" />
          </Link>
          <LogoText>ature</LogoText>
        </LogoDiv>
        <LinkDiv>
          <LinkWrapper className="Auth-Links"></LinkWrapper>
        </LinkDiv>
      </Wrapper>
    </Container>
  )
}
