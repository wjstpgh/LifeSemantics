import { FloatBarContainer } from './floatbar.styles';
import React, { useState } from "react";
import HospPick from '../hosp-pick/hosp-pick.component';
import { useSelector } from 'react-redux';
import { selectHosppick } from '../../store/hosppick/hosppick.selector';

const FloatBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hosppick = useSelector(selectHosppick);

  const onClickHandler = () => {
    setIsOpen(isOpen ? false : true);
  }

  return (
    <FloatBarContainer
      onClick={onClickHandler}
      isOpen={isOpen}>
      {isOpen ? (
        hosppick.map((hosp) => <HospPick key={hosp.id} hosp={hosp} />)
      ) : (
        <></>
      )}
    </FloatBarContainer>
  );
}

export default FloatBar;