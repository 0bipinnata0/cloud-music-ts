import styled from "styled-components";

const Marquee = styled.div`
  width: 100%;
  height: 35px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  & > * {
    position: absolute;
    animation: marquee 10s linear infinite;
  }
  @keyframes marquee {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }
  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export default Marquee;
