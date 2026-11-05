(() => {
 const KEY="sagatoLab_v1";
 const defaults={name:"Researcher",completed:[],scores:[],visits:0};
 function read(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch(e){return {...defaults}}}
 function write(data){localStorage.setItem(KEY,JSON.stringify(data))}
 window.LabStore={
  get:read,
  setName(name){let d=read();d.name=name;write(d)},
  complete(id){let d=read();if(!d.completed.includes(id))d.completed.push(id);write(d)},
  score(id,value){let d=read();d.scores.push({id,value,date:new Date().toISOString()});write(d)},
  visit(){let d=read();d.visits++;write(d)},
  reset(){localStorage.removeItem(KEY)}
 };
})();