import styled,{css} from 'styled-components';

const openColor='rgba(90, 90, 90, .2)';
const closeColor='rgba(0, 0, 0, .9)'

const isOpenStyles=css`
  width: 350px;
  height: 95vh;
  overflow: auto;
  background-color: ${openColor};
`;

export const FloatBarContainer = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  overflow: hidden;
  background-color: ${closeColor};
  border-radius: 10px;
  position: absolute;
  bottom: 2.5vh;
  right: .5vw;
  transition: 500ms ease all;
  z-index: 9;

  ${({isOpen})=> isOpen && isOpenStyles}
`;