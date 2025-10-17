import{c as e,m as i,j as r}from"./index-AsXsGJ90.js";import{d as t}from"./styled-CEm8g-ZS.js";import{C as o}from"./Card-CcG1VEup.js";import{u as a}from"./i18n-Dx6h7Z1a.js";import"./vendor-_g6xLlVr.js";const n=t.div`
  position: fixed;
  top: calc(50% + (var(--nav-safe-top) / 2) - 40px); /* Centralized, respecting navbar */
  left: 50%;
  transform: translate(-50%, -50%) scale(${e=>e.$isVisible?"1":"0.8"});
  opacity: ${e=>e.$isVisible?"1":"0"};
  width: 85%;
  max-width: 750px;
  height: auto;
  max-height: calc(70vh);
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

  ${i.tablet`
    padding: 30px;
    max-width: 85%;
    max-height: 70vh;
    width: 90%;
  `}

  ${i.mobile`
    padding: clamp(12px, 4vw, 20px); /* Compact for mobile */
    width: 92%;
    max-width: 95%;
    top: calc(50% + (var(--nav-safe-top) / 2) - 30px);
    max-height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  `}
`,p=t.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(16px, 3vw, 30px);
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,s=t.div`
  margin-bottom: 30px;
  padding: clamp(16px, 3vw, 25px);
  background: rgba(61, 58, 58, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #f5f5f5;
    margin: 0 0 20px 0;
    font-size: clamp(1rem, 3vw, 1.2rem);
    text-align: center;
  }

  ${i.tablet`
    padding: 20px;
    margin-bottom: 25px;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 18px;
    }
  `}

  ${i.mobile`
    padding: 18px;
    margin-bottom: 20px;

    h3 {
      font-size: 1rem;
      margin-bottom: 15px;
    }
  `}
`,l=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }

  ${i.mobile`
    gap: 8px;
  `}
`,m=t.div`
  color: rgba(245, 245, 245, 0.95);
  line-height: 1.75;
  font-size: clamp(0.95rem, 2.5vw, 1.05rem);

  p {
    margin-bottom: 18px;
  }

  h3 {
    color: #f5f5f5;
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: clamp(1rem, 3vw, 1.2rem);
    padding-left: 12px;
    border-left: 3px solid rgba(255, 255, 255, 0.3);
  }

  ${i.tablet`
    font-size: 1rem;
    line-height: 1.7;

    p {
      margin-bottom: 15px;
    }
    
    h3 {
      font-size: 1.15rem;
      margin-top: 20px;
      margin-bottom: 12px;
    }
  `}

  ${i.mobile`
    font-size: 0.95rem;
    line-height: 1.6;

    p {
      margin-bottom: 12px;
    }
    
    h3 {
      font-size: 1.05rem;
      margin-top: 18px;
      margin-bottom: 10px;
      padding-left: 10px;
      border-left-width: 2px;
    }
  `}
`,d=i=>{const t=e.c(30),{isVisible:d,direction:x}=i,c=void 0===x?"top":x,{t:b}=a();let g,h,f,v,w,j,u,$,y,z,k,_,V,C;return t[0]!==b?(g=b("company.title"),t[0]=b,t[1]=g):g=t[1],t[2]!==g?(h=r.jsx(p,{children:g}),t[2]=g,t[3]=h):h=t[3],t[4]!==b?(f=b("company.technologies"),t[4]=b,t[5]=f):f=t[5],t[6]!==f?(v=r.jsx("h3",{children:f}),t[6]=f,t[7]=v):v=t[7],t[8]===Symbol.for("react.memo_cache_sentinel")?(w=r.jsx(l,{children:r.jsx("img",{src:"https://skillicons.dev/icons?i=js,ts,react,nextjs,nodejs,nestjs,php,mysql,github,notion&perline=5",alt:"Technologies"})}),t[8]=w):w=t[8],t[9]!==v?(j=r.jsxs(s,{children:[v,w]}),t[9]=v,t[10]=j):j=t[10],t[11]===Symbol.for("react.memo_cache_sentinel")?(u=r.jsx("h3",{children:"🏢 Builders"}),t[11]=u):u=t[11],t[12]!==b?($=b("company.builders"),t[12]=b,t[13]=$):$=t[13],t[14]!==$?(y=r.jsxs(o,{children:[u,r.jsx("p",{children:$})]}),t[14]=$,t[15]=y):y=t[15],t[16]===Symbol.for("react.memo_cache_sentinel")?(z=r.jsx("h3",{children:"🌍 EXTDS - Portugal / Bélgica"}),t[16]=z):z=t[16],t[17]!==b?(k=b("company.extds"),t[17]=b,t[18]=k):k=t[18],t[19]!==k?(_=r.jsxs(o,{children:[z,r.jsx("p",{children:k})]}),t[19]=k,t[20]=_):_=t[20],t[21]!==y||t[22]!==_?(V=r.jsxs(m,{children:[y,_]}),t[21]=y,t[22]=_,t[23]=V):V=t[23],t[24]!==c||t[25]!==d||t[26]!==V||t[27]!==h||t[28]!==j?(C=r.jsxs(n,{$isVisible:d,$direction:c,children:[h,j,V]}),t[24]=c,t[25]=d,t[26]=V,t[27]=h,t[28]=j,t[29]=C):C=t[29],C};export{d as default};
