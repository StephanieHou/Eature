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

  @media only screen and (max-width: 1100px) {
    font-size: ${({ lgfontsize }) => lgfontsize || `10rem`};
  }

  @media only screen and (max-width: 940px) {
    font-size: ${({ lg2fontsize }) => lg2fontsize || `14vw`};
  }

  @media only screen and (max-width: 790px) {
    font-size: ${({ mdfontsize }) => mdfontsize || `16vw`};
  }

  @media only screen and (max-width: 590px) {
    font-size: ${({ smfontsize }) => smfontsize || `17.8vw`};
  }

  @media only screen and (max-width: 450px) {
    font-size: ${({ sm2fontsize }) => sm2fontsize || `20vw`};
  }

  @media only screen and (max-width: 390px) {
    font-size: ${({ sm2fontsize }) => sm2fontsize || `23vw`};
  }
`

const AnimatedText = ({
  background,
  backgroundImg,
  width,
  height,
  fontsize,
  lgfontsize,
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
      lgfontsize={lgfontsize}
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
