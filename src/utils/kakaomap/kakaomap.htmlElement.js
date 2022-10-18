export const getIw = (hosp, hover) => {
  const { yadmNm, addr, XPos, YPos } = hosp;

  let nm = document.createElement("div")
  nm.textContent = `병원명 : ${yadmNm}`

  let ad = document.createElement("div")
  ad.textContent = `주소 : ${addr}`

  let pos = document.createElement("div")
  pos.textContent = `X : ${XPos}, Y : ${YPos}`
  pos.style.fontSize = .85 + 'em';
  pos.style.color = 'gray';

  let iwContent = document.createElement("div");
  iwContent.style.fontSize = .8 + 'rem';
  iwContent.style.display = 'inline-block';
  iwContent.style.whiteSpace = 'nowrap';
  iwContent.style.padding = 2 + 'px';
  iwContent.style.border = `${1}px solid rgba(255,0,0,.9)`;
  iwContent.style.backgroundColor = 'rgba(255,255,255,.7)';

  if (!hover) {
    iwContent.append(
      nm, ad, pos
    );

    return iwContent;
  }
  let iwHoverContent = document.createElement("div");
  iwHoverContent.style.fontSize = .5 + 'rem';
  iwHoverContent.style.display = 'inline-block';
  iwHoverContent.style.whiteSpace = 'nowrap';
  iwHoverContent.style.backgroundColor = 'rgba(0,0,0,0)';

  iwHoverContent.append(
    nm, ad, pos
  )

  return iwHoverContent;
}
