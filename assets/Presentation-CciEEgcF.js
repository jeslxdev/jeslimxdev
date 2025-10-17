import{c as r,m as a,j as e}from"./index-CFql9Dtu.js";import{d as i}from"./styled-CEm8g-ZS.js";import{C as o}from"./Card-BJfvwGIH.js";import{u as t}from"./i18n-Dx6h7Z1a.js";import"./vendor-_g6xLlVr.js";const s=i.div`
  position: fixed;
  left: ${r=>r.$isVisible?"0":"-100%"};
  top: calc(var(--nav-safe-top) + var(--panel-gap-y));
  height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  width: min(600px, calc(100% - var(--panel-gap-x)));
  background: rgba(27, 61, 80, 0.25); /* softer opacity */
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 900;
  padding: clamp(16px, 3vw, 28px);
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 10px 0 60px rgba(0, 0, 0, 0.6);

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
    width: calc(100% - var(--panel-gap-x));
    padding: clamp(14px, 3vw, 24px);
  `}

  ${a.mobile`
    width: 100%;
    top: calc(var(--nav-safe-top) + var(--panel-gap-y));
    height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
    padding: clamp(12px, 5vw, 24px);
    border-right: none;
  `}
`,n=i.h2`
  color: #f5f5f5;
  font-size: 2rem;
  margin-bottom: 30px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  ${a.mobile`
    font-size: 1.5rem;
  `}
`,p=i.div`
  color: rgba(245, 245, 245, 0.95);
  line-height: 1.7;
  font-size: 1rem;

  ${a.mobile`
    font-size: 0.95rem;
    line-height: 1.6;
  `}
`,l=a=>{const i=r.c(25),{isVisible:l,direction:d}=a,c=void 0===d?"left":d,{t:b}=t();let x,h,g,v,f,m,j,u,w,k;return i[0]!==b?(x=b("presentation.title"),i[0]=b,i[1]=x):x=i[1],i[2]!==x?(h=e.jsx(n,{children:x}),i[2]=x,i[3]=h):h=i[3],i[4]!==b?(g=b("presentation.intro"),i[4]=b,i[5]=g):g=i[5],i[6]!==g?(v=e.jsx(o,{children:e.jsx("p",{children:g})}),i[6]=g,i[7]=v):v=i[7],i[8]!==b?(f=b("presentation.experience"),i[8]=b,i[9]=f):f=i[9],i[10]!==f?(m=e.jsx(o,{children:e.jsx("p",{children:f})}),i[10]=f,i[11]=m):m=i[11],i[12]!==b?(j=b("presentation.passion"),i[12]=b,i[13]=j):j=i[13],i[14]!==j?(u=e.jsx(o,{children:e.jsx("p",{children:j})}),i[14]=j,i[15]=u):u=i[15],i[16]!==v||i[17]!==m||i[18]!==u?(w=e.jsxs(p,{children:[v,m,u]}),i[16]=v,i[17]=m,i[18]=u,i[19]=w):w=i[19],i[20]!==c||i[21]!==l||i[22]!==w||i[23]!==h?(k=e.jsxs(s,{$isVisible:l,$direction:c,children:[h,w]}),i[20]=c,i[21]=l,i[22]=w,i[23]=h,i[24]=k):k=i[24],k};export{l as default};
