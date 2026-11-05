window.LabSim = (() => {
 let raf=null, running=false, elapsed=0, last=0, samples=[];
 const $=id=>document.getElementById(id);
 function chart(canvasId, data, xLabel, yLabel, color="#4de1e5"){
  const c=$(canvasId); if(!c)return; const ctx=c.getContext("2d"),w=c.width=c.clientWidth*2,h=c.height=c.clientHeight*2;
  ctx.clearRect(0,0,w,h);ctx.strokeStyle="#294257";ctx.lineWidth=1;
  for(let i=0;i<5;i++){let y=20+i*(h-45)/4;ctx.beginPath();ctx.moveTo(42,y);ctx.lineTo(w-10,y);ctx.stroke()}
  if(data.length<1)return;let maxX=Math.max(1,...data.map(p=>p.x)),maxY=Math.max(1,...data.map(p=>p.y));
  ctx.strokeStyle=color;ctx.lineWidth=3;ctx.beginPath();
  data.forEach((p,i)=>{let x=42+p.x/maxX*(w-58),y=h-25-p.y/maxY*(h-45);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
  ctx.fillStyle="#8ca4bb";ctx.font="20px monospace";ctx.fillText(yLabel,8,18);ctx.fillText(xLabel,w-65,h-5);
 }
 function drawMotion(position,maxPosition,mode){
  const c=$("motionCanvas");if(!c)return;const ctx=c.getContext("2d"),w=c.width=c.clientWidth*2,h=c.height=c.clientHeight*2;
  ctx.clearRect(0,0,w,h);let y=h*.62;ctx.strokeStyle="#56758b";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(25,y+22);ctx.lineTo(w-25,y+22);ctx.stroke();
  for(let i=0;i<11;i++){let x=25+i*(w-50)/10;ctx.strokeStyle="#456176";ctx.beginPath();ctx.moveTo(x,y+18);ctx.lineTo(x,y+27);ctx.stroke()}
  const x=35+Math.max(0,Math.min(1,position/Math.max(1,maxPosition)))*(w-110);
  ctx.fillStyle="#4de1e5";ctx.shadowColor="#4de1e5";ctx.shadowBlur=22;ctx.beginPath();ctx.roundRect(x-25,y-26,50,27,8);ctx.fill();ctx.shadowBlur=0;
  ctx.fillStyle="#c9e5f2";ctx.font="20px monospace";ctx.fillText(mode==="glb"?"CONSTANT V":"ACCELERATED",30,35);
  ctx.fillStyle="#7996ab";ctx.font="17px monospace";ctx.fillText("0 m",24,y+55);ctx.fillText(maxPosition.toFixed(0)+" m",w-90,y+55);
 }
 function initMotion(mode){
  stop();elapsed=0;samples=[];let speed=$("speed"),acc=$("accel"),time=$("duration"),pos=$("startPos");
  const initial=Number(speed?.value||2),a=mode==="glbb"?Number(acc?.value||1):0,tmax=Number(time?.value||10),x0=Number(pos?.value||0);
  const state=t=>({t,x:x0+initial*t+.5*a*t*t,v:initial+a*t,a});
  const update=()=>{
   const s=state(elapsed);$("mTime").textContent=elapsed.toFixed(1)+" s";$("mPos").textContent=s.x.toFixed(2)+" m";$("mVel").textContent=s.v.toFixed(2)+" m/s";$("mAcc").textContent=s.a.toFixed(2)+" m/s²";
   drawMotion(s.x,state(tmax).x,mode);chart("positionChart",samples.map(p=>({x:p.t,y:p.x})),"t","x");chart("velocityChart",samples.map(p=>({x:p.t,y:p.v})),"t","v","#a78bfa");
  };
  function capture(){let s=state(elapsed);if(!samples.length||elapsed-samples[samples.length-1].t>=.45){samples.push(s);if(samples.length>60)samples.shift();renderTable()}update()}
  function renderTable(){let body=$("observationRows");if(!body)return;body.innerHTML=samples.slice(-8).map(s=>`<tr><td>${s.t.toFixed(1)}</td><td>${s.x.toFixed(2)}</td><td>${s.v.toFixed(2)}</td><td>${s.a.toFixed(2)}</td></tr>`).join("")}
  function frame(ts){if(!running)return;if(!last)last=ts;let dt=Math.min((ts-last)/1000,.05);last=ts;elapsed=Math.min(tmax,elapsed+dt);capture();if(elapsed>=tmax){running=false;return}raf=requestAnimationFrame(frame)}
  $("startSim")?.addEventListener("click",()=>{if(running)return;running=true;last=0;raf=requestAnimationFrame(frame)});
  $("pauseSim")?.addEventListener("click",()=>{running=false;cancelAnimationFrame(raf)});
  $("resetSim")?.addEventListener("click",()=>{running=false;cancelAnimationFrame(raf);elapsed=0;samples=[];capture();});
  $("stepSim")?.addEventListener("click",()=>{running=false;elapsed=Math.min(tmax,elapsed+.5);capture()});
  [speed,acc,time,pos].filter(Boolean).forEach(el=>el.addEventListener("input",()=>{if(!running){elapsed=0;samples=[];capture()}}));
  capture();
 }
 function stop(){running=false;if(raf)cancelAnimationFrame(raf);raf=null;last=0}
 function initPhoto(){
  const ids=["light","co2","temp","water"],out=["lightVal","co2Val","tempVal","waterVal"];
  function calc(){let l=+$("light").value,c=+$("co2").value,t=+$("temp").value,w=+$("water").value;
   out.forEach((id,i)=>$(id).textContent=[l+" %",c+" ppm",t+" °C",w+" %"][i]);
   // Simplified educational response curve; not a universal measured biological law.
   let light=l/(l+28),carbon=c/(c+350),thermal=Math.exp(-Math.pow((t-28)/17,2)),waterFactor=w/100;
   let rate=20*light*carbon*thermal*waterFactor;
   $("photoRate").textContent=rate.toFixed(2)+" unit";chart("photoChart",Array.from({length:11},(_,i)=>({x:i*10,y:20*(i*10/(i*10+28))*carbon*thermal*waterFactor})),"light","rate");
   $("photoExplanation").textContent=rate<3?"Laju model rendah: salah satu faktor pembatas masih kuat.":rate<9?"Laju model sedang: peningkatan faktor pembatas dapat menaikkan laju.":"Laju model relatif tinggi pada kondisi yang dipilih.";
  }
  ids.forEach(id=>$(id).addEventListener("input",calc));calc();
 }
 function initPH(){
  const samples={lemon:{name:"Jus lemon (model)",ph:2.5},coffee:{name:"Kopi (model)",ph:5},water:{name:"Air murni (ideal)",ph:7},soap:{name:"Larutan sabun (model)",ph:10},bicarb:{name:"Larutan soda kue (model)",ph:8.3}};
  function update(){let s=samples[$("phSample").value],p=s.ph; $("phName").textContent=s.name;$("phValue").textContent=p.toFixed(1);$("phMarker").style.left=(p/14*100)+"%";$("phClass").textContent=p<7?"ASAM":p>7?"BASA":"NETRAL";
   let hue= Math.max(0,Math.min(280, p*20));$("phColor").style.background=`hsl(${hue},68%,65%)`;$("phColor").textContent="INDIKATOR VIRTUAL";
   $("phExplain").textContent=p<7?"Sampel memiliki pH di bawah 7 sehingga dikategorikan asam.":p>7?"Sampel memiliki pH di atas 7 sehingga dikategorikan basa.":"Pada kondisi ideal, pH 7 bersifat netral.";
  }
  $("phSample").addEventListener("change",update);$("measurePH").addEventListener("click",()=>{update();window.showToast("Pengukuran virtual berhasil dicatat.")});update();
 }
 function initCell(){
  document.querySelectorAll(".organelle").forEach(el=>el.addEventListener("click",()=>{let i=+el.dataset.org;let d=LAB_DATA.organelles[i];$("orgName").textContent=d[0];$("orgDesc").textContent=d[1];document.querySelectorAll(".organelle").forEach(x=>x.style.opacity=".55");el.style.opacity="1"}));
 }
 function initNewton(){
  const ids=["mass","force","friction"];function update(){let m=+$("mass").value,F=+$("force").value,mu=+$("friction").value,N=m*9.8,fr=mu*N,net=Math.max(0,F-fr),a=net/m;
   $("massVal").textContent=m+" kg";$("forceVal").textContent=F+" N";$("frictionVal").textContent=mu.toFixed(2);$("netForce").textContent=net.toFixed(2)+" N";$("newtonAcc").textContent=a.toFixed(2)+" m/s²";$("newtonExplain").textContent=F<=fr?"Gaya tarik belum melampaui gaya gesek maksimum model; balok tetap diam.":"Balok bergerak searah gaya resultan. Model memakai gesekan kinetik sederhana μN.";
   let c=$("newtonCanvas"),ctx=c.getContext("2d"),w=c.width=c.clientWidth*2,h=c.height=c.clientHeight*2;ctx.clearRect(0,0,w,h);ctx.strokeStyle="#68869b";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(20,h*.72);ctx.lineTo(w-20,h*.72);ctx.stroke();ctx.fillStyle="#4de1e5";ctx.fillRect(w*.42,h*.45,100,65);ctx.fillStyle="#eaf4ff";ctx.font="20px monospace";ctx.fillText("m = "+m+" kg",w*.42,h*.4);ctx.strokeStyle="#a78bfa";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(w*.42+100,h*.56);ctx.lineTo(w*.42+100+Math.min(130,F*1.8),h*.56);ctx.stroke();ctx.fillText("F →",w*.42+110+Math.min(130,F*1.8),h*.56);
  }ids.forEach(id=>$(id).addEventListener("input",update));update();
 }
 return {initMotion,initPhoto,initPH,initCell,initNewton,stop,chart};
})();