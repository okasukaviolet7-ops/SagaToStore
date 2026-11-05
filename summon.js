window.SummonSystem={
 roll(){let r=Math.random()*100;return r<2?"Mythic":r<10?"Legendary":r<30?"Epic":r<60?"Rare":"Common"},
 run(count){const cost=count===10?900:100;let state=Game.state;if(state.gems<cost){Game.toast("Not enough gems for this summon.");return}state.gems-=cost;let results=[];
 for(let i=0;i<count;i++){let rarity=this.roll(),pool=CARDS.filter(c=>c.rarity===rarity);let card=pool[Math.floor(Math.random()*pool.length)];let duplicate=state.owned.includes(card.id);if(!duplicate)state.owned.push(card.id);else state.gems+=({Common:10,Rare:20,Epic:40,Legendary:90,Mythic:160}[rarity]);results.push({...card,duplicate})}
 state.history=[...results.map(c=>({name:c.name,rarity:c.rarity,time:new Date().toLocaleString()})),...state.history].slice(0,30);Game.persist();AstraAudio.play(results.some(c=>["Mythic","Legendary"].includes(c.rarity))?"rare":"summon");Game.showSummonResults(results);Game.renderTop();Game.renderHistory();return results
 }
};