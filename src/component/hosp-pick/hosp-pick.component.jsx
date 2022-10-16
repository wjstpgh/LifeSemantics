import { PickContainer, GraySpan } from './hosp-pick.styles';
import React from 'react';

const HospPick = ({ hosp }) => {
  const { yadmNm, addr, XPos, YPos } = hosp;

  return (
    <PickContainer>
      <p>
        <span>병원이름 : {yadmNm}</span>
        <GraySpan>X : {XPos}, Y : {YPos}</GraySpan>
        <span>주소 : {addr}</span>
      </p>
    </PickContainer>
  );
}

export default HospPick;