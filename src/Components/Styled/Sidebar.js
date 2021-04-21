import React from "react"
import styled from "styled-components"

const AnimatedDiv = styled.div`
  background: ${({ background }) => background || `white`};
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  white-space: nowrap;
  text-transform: uppercase;
  font-family: MontserratSubrayada-Regular;
  font-weight: bold;
  font-size: ${({ fontsize }) => fontsize || `10rem`};
  margin-top: ${({ margintop }) => margintop || `0px`};
  background-color: var(--color-1);
  background-image: linear-gradient(
      30deg,
      #87315f 12%,
      transparent 12.5%,
      #d49696eb 87%,
      #87315f 87.5%,
      #87315f
    ),
    linear-gradient(
      150deg,
      #87315f 12%,
      transparent 12.5%,
      transparent 87%,
      #87315f 87.5%,
      #87315f
    ),
    linear-gradient(
      30deg,
      #87315f 12%,
      transparent 12.5%,
      transparent 87%,
      #87315f 87.5%,
      #87315f
    ),
    linear-gradient(
      150deg,
      #87315f 12%,
      #fbc04f 12.5%,
      transparent 87%,
      #87315f 87.5%,
      #87315f
    ),
    linear-gradient(
      60deg,
      #87315f77 25%,
      transparent 25.5%,
      transparent 75%,
      #87315f77 75%,
      #87315f77
    ),
    linear-gradient(
      60deg,
      #87315f77 25%,
      #fbc04f 25.5%,
      transparent 75%,
      #87315f77 75%,
      #87315f77
    );
  background-size: 56px 98px;
  background-position: 0 0, 0 0, 28px 49px, 28px 49px, 0 0, 28px 49px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

const Sidebar = ({ background, width, height, fontsize, margintop, text }) => {
  return (
    <AnimatedDiv
      background={background}
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

export default Sidebar
