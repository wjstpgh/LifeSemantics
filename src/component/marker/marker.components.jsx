import React from "react";

const Marker = (hosp) => {
  const { yadmNm, addr, XPos, YPos } = hosp;
  console.log(addr);
  return (
    <>
      {addr}
    </>
  );
}

export default Marker;