import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { SiOpenstreetmap } from "react-icons/si"
import { GiWorld } from "react-icons/gi"
import styled from "styled-components"
import { DatePicker } from "../Styled"
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

const LinkDiv = styled.div`
  background: var(--color-5);
  height: 100vh;
  width: 60px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  text-align: center;
`

const LinkLabel = styled.h1`
  width: 120px;
  position: absolute;
  top: -5px;
  left: 60px;
  margin: 0px;
  font-size: 18px;
  background: var(--color-5);
  padding: 10px;
  border-radius: 0px 3px 3px 0px;
  display: none;
  color: var(--color-1);
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
  background: var(--color-1);
  z-index: -1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(60px)" : "translateX(-100%)")};
  color: var(--color-5);
`

const InnerSlideDiv = styled.div`
  width: 100%;
  height: 93%;
  padding: 0px;
`

const FilterDiv = styled.div`
  width: 100%;
  height: 100px;
  overflow: scroll;
  padding: 0px 20px;
  text-align: left;
  font-family: "Quicksand";
  font-size: 14px;

  input#limit{
    width: 40px;
  }

  input{
    width: 76px;
    text-align: center;
    border: 1px solid var(--color-5); 
    background: none;
    color: var(--color-5); 
    margin-bottom: 10px;
    margin: 4px;
  }

  p{
    font-size: 16px;
    margin: 6px 0px;
  }


`

const Events = styled.div`
  width: 100%;
  height: 86%;
  overflow: scroll;
  padding: 0px;
`

const Event = styled.div`
  width: 100%;
  background: var(--color-1);
  border-top: 2px solid var(--color-2);
  padding: 20px;
  text-align: left;

  a {
    color: var(--color-5);
    font-weight: bold;
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 0px;
    font-size: 0.9rem;
    color: white;
  }
`

const Title = styled.h1`
  font-size: 20px;
  color: var(--color-5);
`

const Sidebar = ({
  id,
  events,
  limit,
  setLimit,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [infoLink, setInfoLink] = useState(false)
  const [dataLink, setDataLink] = useState(false)

  useEffect(() => {
    setTitle("Information")
    if (infoLink || dataLink) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [infoLink])

  useEffect(() => {
    setTitle("World Data")
    if (infoLink || dataLink) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [dataLink])

  return (
    <SidebarDiv>
      <LinkDiv>
        <Link to="/">
          <Image src={Logo} alt="Eature Logo" />
        </Link>
        <IconLinks onClick={() => setInfoLink(!infoLink)}>
          <SiOpenstreetmap style={iconStyles} />
          <LinkLabel open={open}>Information</LinkLabel>
        </IconLinks>
        <IconLinks onClick={() => setDataLink(!dataLink)}>
          <GiWorld style={iconStyles} />
          <LinkLabel open={open}>World Data</LinkLabel>
        </IconLinks>
      </LinkDiv>
      <SlideDiv open={open}>
        <Title>{title}</Title>
        {title === "Information" ? (
          <div>Coming Soon</div>
        ) : (
          <InnerSlideDiv className="Events-List">
            <FilterDiv>
              <p>Filter By</p>
              {"Limit of  "}
              <input
                id="limit"
                type="text"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              />
              <br/>
               {"Date from "} <DatePicker date={startDate} setDate={setStartDate} /> {" to "}
                <DatePicker date={endDate} setDate={setEndDate} />
            </FilterDiv>
            <Events>
              {events &&
                events.map((event, i) => (
                  <Event type={event.categories[0].title}>
                    <a
                      href={event.sources[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {event.title}
                    </a>
                    <p>Type: {event.categories[0].title}</p>
                    <p>Date: {event.geometry[0].date}</p>
                    {event.geometry[0].magnitudeValue ? (
                      <p>
                        Magnitude: {event.geometry[0].magnitudeValue}{" "}
                        {event.geometry[0].magnitudeUnit}
                      </p>
                    ) : (
                      ""
                    )}
                  </Event>
                ))}
            </Events>
          </InnerSlideDiv>
        )}
      </SlideDiv>
    </SidebarDiv>
  )
}

export default Sidebar
