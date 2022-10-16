import { FloatBarContainer } from './floatbar.styles';
import React, { useState } from "react";
import HospPick from '../hosp-pick/hosp-pick.component';

const FloatBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(isOpen ? false : true);
  }

  return (
    <FloatBarContainer
      onClick={onClickHandler}
      isOpen={isOpen}>
      {isOpen ? (
        // <HospPick />
        <></>
      ) : (
        <></>
      )}
    </FloatBarContainer>
  );
}

export default FloatBar;