import styled from "styled-components";

export const PickContainer = styled.div`
  line-height: 1.2rem;
  padding: 10px 10px;
  background-color: whitesmoke;

  span {
    display: block;
  }

  p {
    margin: 0;
    font-size: .9rem;
  }
`;

export const GraySpan = styled.span`
  font-size: .8rem;
  color: gray;
  padding: 0 2px;
`;

export const Del=styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
`;