import { PickContainer, GraySpan, Del } from './hosp-pick.styles';
import React, { memo } from 'react';
import { removeHosp } from '../../store/hosppick/hosppick.actions';
import { selectHosppick } from '../../store/hosppick/hosppick.selector';
import { useDispatch, useSelector } from 'react-redux';

const HospPick = memo(({ hosp }) => {
  const { yadmNm, addr, XPos, YPos } = hosp;
  const dispatch = useDispatch();
  const hosppick = useSelector(selectHosppick);

  const onClickHandler = () => {
    dispatch(removeHosp(hosppick, hosp));
  }

  return (
    <PickContainer>
      <Del onClick={onClickHandler}>&#10005;</Del>
      <p>
        <span>병원이름 : {yadmNm}</span>
        <GraySpan>X : {XPos}, Y : {YPos}</GraySpan>
        <span>주소 : {addr}</span>
      </p>
    </PickContainer>
  );
})

export default HospPick;