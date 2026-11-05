window.DeckSystem={
 get(){return JSON.parse(localStorage.getItem("astra-deck")||"[]")},
 save(ids){localStorage.setItem("astra-deck",JSON.stringify(ids.slice(0,5)))},
 add(id){let d=this.get();if(d.length>=5)return false;if(d.includes(id))return false;d.push(id);this.save(d);return true},
 remove(id){this.save(this.get().filter(x=>x!==id))},
 clear(){this.save([])}
};