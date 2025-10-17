import{c as e,m as a,j as i}from"./index-CFql9Dtu.js";import{d as r}from"./styled-CEm8g-ZS.js";import{C as o}from"./Card-BJfvwGIH.js";import{u as t}from"./i18n-Dx6h7Z1a.js";import"./vendor-_g6xLlVr.js";const n=r.div`
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
`,s=r.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(16px, 3vw, 30px);
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,l=r.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;

  ${a.mobile`
    gap: 15px;
    margin-top: 15px;
  `}
`,c=r(o).attrs({as:"a"})`
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
`,m=a=>{const r=e.c(31),{isVisible:o,direction:m}=a,p=void 0===m?"bottom":m,{t:d}=t();let x,h,b,f,g,v,j,w,u,k,_,y,$,z,N,S;return r[0]!==d?(x=d("contact.title"),r[0]=d,r[1]=x):x=r[1],r[2]!==x?(h=i.jsx(s,{children:x}),r[2]=x,r[3]=h):h=r[3],r[4]===Symbol.for("react.memo_cache_sentinel")?(b=i.jsx("span",{className:"icon",children:"💼"}),r[4]=b):b=r[4],r[5]===Symbol.for("react.memo_cache_sentinel")?(f=i.jsx("h3",{children:"LinkedIn"}),r[5]=f):f=r[5],r[6]!==d?(g=d("contact.linkedin"),r[6]=d,r[7]=g):g=r[7],r[8]!==g?(v=i.jsxs(c,{href:"https://www.linkedin.com/in/joao-emanuel-752778174/",target:"_blank",rel:"noopener noreferrer",children:[b,i.jsxs("div",{className:"info",children:[f,i.jsx("p",{children:g})]})]}),r[8]=g,r[9]=v):v=r[9],r[10]===Symbol.for("react.memo_cache_sentinel")?(j=i.jsx("span",{className:"icon",children:"📧"}),r[10]=j):j=r[10],r[11]===Symbol.for("react.memo_cache_sentinel")?(w=i.jsx("h3",{children:"Email"}),r[11]=w):w=r[11],r[12]!==d?(u=d("contact.email"),r[12]=d,r[13]=u):u=r[13],r[14]!==u?(k=i.jsxs(c,{href:"mailto:joaoemanuel@example.com",children:[j,i.jsxs("div",{className:"info",children:[w,i.jsx("p",{children:u})]})]}),r[14]=u,r[15]=k):k=r[15],r[16]===Symbol.for("react.memo_cache_sentinel")?(_=i.jsx("span",{className:"icon",children:"💻"}),r[16]=_):_=r[16],r[17]===Symbol.for("react.memo_cache_sentinel")?(y=i.jsx("h3",{children:"GitHub"}),r[17]=y):y=r[17],r[18]!==d?($=d("contact.github"),r[18]=d,r[19]=$):$=r[19],r[20]!==$?(z=i.jsxs(c,{href:"https://github.com/jeslxdev",target:"_blank",rel:"noopener noreferrer",children:[_,i.jsxs("div",{className:"info",children:[y,i.jsx("p",{children:$})]})]}),r[20]=$,r[21]=z):z=r[21],r[22]!==k||r[23]!==z||r[24]!==v?(N=i.jsxs(l,{children:[v,k,z]}),r[22]=k,r[23]=z,r[24]=v,r[25]=N):N=r[25],r[26]!==p||r[27]!==o||r[28]!==N||r[29]!==h?(S=i.jsxs(n,{$isVisible:o,$direction:p,children:[h,N]}),r[26]=p,r[27]=o,r[28]=N,r[29]=h,r[30]=S):S=r[30],S};export{m as default};
