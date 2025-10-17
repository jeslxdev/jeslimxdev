import{j as t}from"./index-CFql9Dtu.js";import{r as o}from"./i18n-Dx6h7Z1a.js";import{d as e}from"./styled-CEm8g-ZS.js";import"./vendor-_g6xLlVr.js";const r=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(135deg, #1B3D50 0%, #3d3a3a 50%, #1B3D50 100%);
  pointer-events: none;
`,n=e.canvas`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.7;
`,a=()=>{const e=o.useRef(null);return o.useEffect(()=>{const t=e.current;if(!t)return;const o=t.getContext("2d");if(!o)return;let r;const n=[];let a=0;const i=["rgba(120, 140, 160, ","rgba(100, 120, 140, ","rgba(80, 100, 120, ","rgba(140, 150, 160, ","rgba(90, 110, 130, "],l=[";",":","<?php","?>","$","->","::","=>","echo","return","function","class","if","else","foreach","try","catch","new","public","private","protected","static"],h=()=>l[Math.floor(Math.random()*l.length)],d=()=>{t.width=window.innerWidth,t.height=window.innerHeight};d(),window.addEventListener("resize",d);const s=window.innerWidth<=768?25:50;for(let e=0;e<s;e++){const o=i[Math.floor(Math.random()*i.length)];n.push({x:Math.random()*t.width,y:Math.random()*t.height,speed:1.5*Math.random()+.5,text:h(),opacity:.6*Math.random()+.4,color:o,size:6*Math.random()+14,changeInterval:Math.floor(20*Math.random())+10,lastChange:0})}const c=()=>{a++;window.innerWidth<=768&&a%2!=0||(o.fillStyle="rgba(1, 4, 9, 0.2)",o.fillRect(0,0,t.width,t.height),n.forEach(e=>{a-e.lastChange>=e.changeInterval&&(e.text=h(),e.lastChange=a),e.y-=e.speed,e.y<-30&&(e.y=t.height+30,e.x=Math.random()*t.width,e.color=i[Math.floor(Math.random()*i.length)],e.text=h());const r=window.innerWidth<=768;if(o.font=`bold ${e.size}px "Courier New", monospace`,r?(o.fillStyle=e.color+e.opacity+")",o.fillText(e.text,e.x,e.y)):(o.shadowBlur=15,o.shadowColor=e.color+"0.5)",o.fillStyle=e.color+e.opacity+")",o.fillText(e.text,e.x,e.y),o.shadowBlur=8,o.shadowColor=e.color+"0.8)",o.fillStyle=e.color+Math.min(e.opacity+.2,1)+")",o.fillText(e.text,e.x,e.y)),o.shadowBlur=0,!r){const t=8*e.text.length;o.beginPath(),o.arc(e.x+t,e.y-10,2,0,2*Math.PI),o.fillStyle=e.color+Math.min(e.opacity+.3,1)+")",o.shadowBlur=10,o.shadowColor=e.color+"0.6)",o.fill(),o.shadowBlur=0,Math.random()<.005&&(o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(e.x,e.y-30),o.strokeStyle=e.color+"0.2)",o.lineWidth=1,o.shadowBlur=5,o.shadowColor=e.color+"0.4)",o.stroke(),o.shadowBlur=0)}})),r=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",d),cancelAnimationFrame(r)}},[]),t.jsx(r,{children:t.jsx(n,{ref:e})})};export{a as default};
