import{c as r,m as a,j as e}from"./index-CFql9Dtu.js";import{d as t}from"./styled-CEm8g-ZS.js";import{C as o}from"./Card-BJfvwGIH.js";import{u as i}from"./i18n-Dx6h7Z1a.js";import"./vendor-_g6xLlVr.js";const p=t.div`
  position: fixed;
  right: ${r=>r.$isVisible?"0":"-100%"};
  top: calc(var(--nav-safe-top) + var(--panel-gap-y));
  height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  width: min(600px, calc(100% - var(--panel-gap-x)));
  background: rgba(27, 61, 80, 0.25);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 900;
  padding: clamp(16px, 3vw, 28px);
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: -10px 0 60px rgba(0, 0, 0, 0.6);

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
    height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  `}

  ${a.mobile`
    width: 100%;
    top: calc(var(--nav-safe-top) + var(--panel-gap-y));
    height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
    padding: clamp(12px, 5vw, 24px);
    border-left: none;
  `}
`,s=t.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(16px, 3vw, 30px);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,c=a=>{const t=r.c(44),{isVisible:c,direction:l}=a,d=void 0===l?"right":l,{t:n}=i();let x,b,h,v,j,g,m,f,w,u,k,y,$,z,V,C,q,A;return t[0]!==n?(x=n("projects.title"),t[0]=n,t[1]=x):x=t[1],t[2]!==x?(b=e.jsx(s,{children:x}),t[2]=x,t[3]=b):b=t[3],t[4]!==n?(h=n("projects.project1.title"),t[4]=n,t[5]=h):h=t[5],t[6]!==h?(v=e.jsx("h3",{children:h}),t[6]=h,t[7]=v):v=t[7],t[8]!==n?(j=n("projects.project1.description"),t[8]=n,t[9]=j):j=t[9],t[10]!==j?(g=e.jsx("p",{children:j}),t[10]=j,t[11]=g):g=t[11],t[12]!==v||t[13]!==g?(m=e.jsxs(o,{children:[v,g]}),t[12]=v,t[13]=g,t[14]=m):m=t[14],t[15]!==n?(f=n("projects.project2.title"),t[15]=n,t[16]=f):f=t[16],t[17]!==f?(w=e.jsx("h3",{children:f}),t[17]=f,t[18]=w):w=t[18],t[19]!==n?(u=n("projects.project2.description"),t[19]=n,t[20]=u):u=t[20],t[21]!==u?(k=e.jsx("p",{children:u}),t[21]=u,t[22]=k):k=t[22],t[23]!==w||t[24]!==k?(y=e.jsxs(o,{children:[w,k]}),t[23]=w,t[24]=k,t[25]=y):y=t[25],t[26]!==n?($=n("projects.project3.title"),t[26]=n,t[27]=$):$=t[27],t[28]!==$?(z=e.jsx("h3",{children:$}),t[28]=$,t[29]=z):z=t[29],t[30]!==n?(V=n("projects.project3.description"),t[30]=n,t[31]=V):V=t[31],t[32]!==V?(C=e.jsx("p",{children:V}),t[32]=V,t[33]=C):C=t[33],t[34]!==z||t[35]!==C?(q=e.jsxs(o,{children:[z,C]}),t[34]=z,t[35]=C,t[36]=q):q=t[36],t[37]!==d||t[38]!==c||t[39]!==y||t[40]!==q||t[41]!==b||t[42]!==m?(A=e.jsxs(p,{$isVisible:c,$direction:d,children:[b,m,y,q]}),t[37]=d,t[38]=c,t[39]=y,t[40]=q,t[41]=b,t[42]=m,t[43]=A):A=t[43],A};export{c as default};
