import { Container } from "./style";
import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./../../baseUI/header/index";
const Album = () => {
  const [showStatus, setShowStatus] = useState(true);
  const handleBack = () => {
    setShowStatus(false);
  };
  const navigate = useNavigate();

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => navigate(-1)}
    >
      <Container>
        <Header handleClick={handleBack}>返回</Header>
      </Container>
    </CSSTransition>
  );
};

export default React.memo(Album);
