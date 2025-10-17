import{c as e,m as a,j as r}from"./index-AsXsGJ90.js";import{d as i}from"./styled-CEm8g-ZS.js";import{C as t}from"./Card-CcG1VEup.js";import{u as o}from"./i18n-Dx6h7Z1a.js";import"./vendor-_g6xLlVr.js";const n=i.div`
  position: fixed;
  top: calc(50% + (var(--nav-safe-top) / 2) - 40px); /* Centralized, respecting navbar */
  left: 50%;
  transform: translate(-50%, -50%) scale(${e=>e.$isVisible?"1":"0.8"});
  opacity: ${e=>e.$isVisible?"1":"0"};
  width: 85%;
  max-width: 700px;
  height: auto;
  max-height: 70vh;
  background: rgba(27, 61, 80, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 900;
  padding: clamp(16px, 3vw, 28px);
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  pointer-events: ${e=>e.$isVisible?"auto":"none"};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(61, 58, 58, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(245, 245, 245, 0.3);
    border-radius: 10px;

    &:hover {
      background: rgba(245, 245, 245, 0.5);
    }
  }

  ${a.tablet`
    padding: 30px;
    max-width: 85%;
    max-height: 70vh;
    width: 90%;
  `}

  ${a.mobile`
    padding: clamp(12px, 4vw, 20px);
    width: 92%;
    max-width: 95%;
  max-height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  top: calc(50% + (var(--nav-safe-top) / 2) - 30px);
  `}
`,s=i.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(16px, 3vw, 30px);
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,l=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;

  ${a.mobile`
    gap: 15px;
    margin-top: 15px;
  `}
`,c=i(t).attrs({as:"a"})`
  display: flex;
  align-items: center;
  gap: clamp(12px, 2.5vw, 20px);
  text-decoration: none;
  color: #f5f5f5;

  .icon {
    font-size: clamp(1.4rem, 5vw, 2rem);
    min-width: clamp(28px, 6vw, 40px);
    text-align: center;
  }

  .info {
    flex: 1;
    h3 {
      font-size: clamp(1rem, 3.2vw, 1.15rem);
      margin: 0 0 clamp(4px, 1.2vw, 8px) 0;
    }
    p {
      font-size: clamp(0.85rem, 2.6vw, 0.95rem);
    }
  }
`,p=a=>{const i=e.c(24),{isVisible:t,direction:p}=a,m=void 0===p?"bottom":p,{t:d}=o();let x,h,b,f,g,v,w,j,u,k,$,y;return i[0]!==d?(x=d("contact.title"),i[0]=d,i[1]=x):x=i[1],i[2]!==x?(h=r.jsx(s,{children:x}),i[2]=x,i[3]=h):h=i[3],i[4]===Symbol.for("react.memo_cache_sentinel")?(b=r.jsx("span",{className:"icon",children:"💼"}),i[4]=b):b=i[4],i[5]===Symbol.for("react.memo_cache_sentinel")?(f=r.jsx("h3",{children:"LinkedIn"}),i[5]=f):f=i[5],i[6]!==d?(g=d("contact.linkedin"),i[6]=d,i[7]=g):g=i[7],i[8]!==g?(v=r.jsxs(c,{href:"https://www.linkedin.com/in/joao-emanuel-752778174/",target:"_blank",rel:"noopener noreferrer",children:[b,r.jsxs("div",{className:"info",children:[f,r.jsx("p",{children:g})]})]}),i[8]=g,i[9]=v):v=i[9],i[10]===Symbol.for("react.memo_cache_sentinel")?(w=r.jsx("span",{className:"icon",children:"💻"}),i[10]=w):w=i[10],i[11]===Symbol.for("react.memo_cache_sentinel")?(j=r.jsx("h3",{children:"GitHub"}),i[11]=j):j=i[11],i[12]!==d?(u=d("contact.github"),i[12]=d,i[13]=u):u=i[13],i[14]!==u?(k=r.jsxs(c,{href:"https://github.com/jeslxdev",target:"_blank",rel:"noopener noreferrer",children:[w,r.jsxs("div",{className:"info",children:[j,r.jsx("p",{children:u})]})]}),i[14]=u,i[15]=k):k=i[15],i[16]!==k||i[17]!==v?($=r.jsxs(l,{children:[v,k]}),i[16]=k,i[17]=v,i[18]=$):$=i[18],i[19]!==m||i[20]!==t||i[21]!==$||i[22]!==h?(y=r.jsxs(n,{$isVisible:t,$direction:m,children:[h,$]}),i[19]=m,i[20]=t,i[21]=$,i[22]=h,i[23]=y):y=i[23],y};export{p as default};
