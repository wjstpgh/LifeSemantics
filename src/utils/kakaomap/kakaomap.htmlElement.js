export const getIw = (hosp, hover) => {
  const { yadmNm, addr, XPos, YPos } = hosp;

  let iwContent = document.createElement("div");
  iwContent.style.fontSize = .8 + 'rem';
  iwContent.style.display = 'inline-block';
  iwContent.style.whiteSpace = 'nowrap';
  iwContent.style.padding = 2 + 'px';
  iwContent.style.border = `${1}px solid rgba(255,0,0,.9)`;
  iwContent.style.backgroundColor = 'rgba(255,255,255,.7)';

  let nm = document.createElement("div")
  nm.textContent = `병원명 : ${yadmNm}`

  let ad = document.createElement("div")
  ad.textContent = `주소 : ${addr}`

  let pos = document.createElement("div")
  pos.textContent = `X : ${XPos}, Y : ${YPos}`
  pos.style.fontSize = .85 + 'em';
  pos.style.color = 'gray';

  let btn = document.createElement("button")
  btn.textContent = '저장'
  btn.style.border = 'none';
  btn.style.borderRadius = 2 + 'px';
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';
  btn.style.float = 'right';
  btn.style.padding = `${2}px ${4}px`;
  btn.style.cursor = 'pointer';
  // btn.onclick = pick;

  if (!hover) {
    iwContent.append(
      nm, ad, pos, btn
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
