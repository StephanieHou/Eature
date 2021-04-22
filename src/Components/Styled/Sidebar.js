import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaMapMarkedAlt } from "react-icons/fa"
import { SiOpenstreetmap } from "react-icons/si"
import { GiWorld } from "react-icons/gi"
import styled from "styled-components"
import Logo from "../../Images/Logo.png"

const SidebarDiv = styled.div`
  background: var(--color-5);
  height: 100vh;
  width: 60px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  text-align: center;
`

const Image = styled.img`
  width: 50px;
  margin: 20px 0px;
`

const LinkLabel = styled.h1`
  width: 120px;
  position: absolute;
  top: -5px;
  left: 60px;
  margin: 0px;
  font-size: ${({ open }) => (open ? "16px" : "18px")};
  background: ${({ open }) => (open ? "var(--color-1)" : "var(--color-5)")};
  padding: 10px;
  border-radius: ${({ open }) => (open ? "3px" : "0px 3px 3px 0px")};
  display: none;
  color: ${({ open }) => (open ? "var(--color-5)" : "var(--color-1)")};
`

const IconLinks = styled.div`
  width: 100%;
  margin-top: 20px;
  position: relative;
  &:hover ${LinkLabel} {
    display: block;
  }
`

const iconStyles = {
  color: "var(--color-1)",
  fontSize: "35px",
}

const SlideDiv = styled.div`
  width: 300px;
  position: absolute;
  height: 100%;
  top: 0px;
  background: var(--color-5);
  z-index: -1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`

const Title = styled.h1`
  font-size: 20px;
`

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState(false)
  const [data, setData] = useState(false)
  return (
    <SidebarDiv>
      <Link to="/">
        <Image src={Logo} alt="Eature Logo" />
      </Link>
      <IconLinks onClick={() => setOpen(!open)}>
        <SiOpenstreetmap style={iconStyles} />
        <LinkLabel open={open}>Information</LinkLabel>
      </IconLinks>
      <IconLinks onClick={() => setOpen(!open)}>
        <GiWorld style={iconStyles} />
        <LinkLabel open={open}>World Data</LinkLabel>
      </IconLinks>
      <SlideDiv open={open} setOpen={setOpen}>
        <Title>{info && !data ? "Information" : "World Data"}</Title>
      </SlideDiv>
    </SidebarDiv>
  )
}

export default Sidebar
