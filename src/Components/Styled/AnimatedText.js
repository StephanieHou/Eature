import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const AnimatedDiv = styled.div`
  background: ${({ background }) => background || `white`};
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  white-space: nowrap;
  text-transform: uppercase;
  font-family: Baumans;
  font-weight: bold;
  font-size: ${({ fontsize }) => fontsize || `10rem`};
  margin-top: ${({ margintop }) => margintop || `0px`};
  background-color: var(--color-1);
  background-image: ${({ backgroundImg }) =>
    "url(" + backgroundImg + ")" || ``};
  background-size: 100%;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  white-space: pre-line;
`

const AnimatedText = ({
  background,
  backgroundImg,
  width,
  height,
  fontsize,
  margintop,
  text,
}) => {
  return (
    <AnimatedDiv
      background={background}
      backgroundImg={backgroundImg}
      width={width}
      height={height}
      fontsize={fontsize}
      margintop={margintop}
    >
      {" "}
      {text}{" "}
    </AnimatedDiv>
  )
}

AnimatedText.propTypes = {
  background: PropTypes.any,
  backgroundImg: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
  fontsize: PropTypes.any,
  margintop: PropTypes.any,
  text: PropTypes.string,
}

export default AnimatedText
