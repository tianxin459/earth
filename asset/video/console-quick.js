// 🎮 网页自动化脚本 - 控制台快速版
// 复制以下代码到浏览器控制台并回车执行

(function(){
const actions=[{time:'00:01',type:'key',target:'A',desc:''},{time:'00:09',type:'click',selectors:[["div.sc-hARSoJ > button"],["xpath///*[@id=\"root\"]/div/div[2]/button"],["pierce/div.sc-hARSoJ > button"]],desc:'dashboard'},{time:'00:15',type:'key',target:'Q',desc:''},{time:'00:56',type:'key',target:'W',desc:''},{time:'01:43',type:'key',target:'F',desc:''},{time:'02:30',type:'click',selectors:[["aria/Expand AI Summary (A)"],["div.jVSNaJ > div:nth-of-type(1) button:nth-of-type(2)"],["xpath///*[@id=\"root\"]/div/div[1]/div[1]/div/button[2]"],["pierce/div.jVSNaJ > div:nth-of-type(1) button:nth-of-type(2)"]],desc:'机器人图标'}];

let running=false,index=0,start=0;

const timeMs=t=>parseInt(t.split(':')[0])*60000+parseInt(t.split(':')[1])*1000;

const findEl=selectors=>{
if(!selectors)return null;
for(const group of selectors){
if(!group[0])continue;
const s=group[0];
let el=null;
try{
if(s.startsWith('aria/')){
const txt=s.substring(5).replace(/[()]/g,'');
el=document.querySelector(`[aria-label*="${txt}"]`)||document.querySelector(`[title*="${txt}"]`)||document.evaluate(`//button[contains(text(),"${txt}")]`,document,null,9,null).singleNodeValue;
}else if(s.startsWith('xpath//')){
el=document.evaluate(s.substring(7),document,null,9,null).singleNodeValue;
}else if(s.startsWith('pierce/')){
el=document.querySelector(s.substring(7));
}else{
el=document.querySelector(s);
}
if(el&&el.offsetParent)return el;
}catch(e){}}
return null;
};

const execKey=key=>{
console.log(`🔤 按键: ${key}`);
const el=document.activeElement||document.body;
['keydown','keyup'].forEach(type=>{
const ev=new KeyboardEvent(type,{key,code:`Key${key}`,keyCode:key.charCodeAt(0),bubbles:true});
el.dispatchEvent(ev);document.dispatchEvent(ev);
});
};

const execClick=selectors=>{
console.log('🖱️ 点击...');
const el=findEl(selectors);
if(!el){console.error('❌ 元素未找到');return;}
el.scrollIntoView({behavior:'smooth',block:'center'});
setTimeout(()=>{
const style=el.style.cssText;
el.style.cssText+=';border:3px solid red!important;background:yellow!important;';
setTimeout(()=>el.style.cssText=style,300);
el.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
if(el.click)el.click();
console.log('✅ 点击完成');
},100);
};

const next=()=>{
if(!running||index>=actions.length){running=false;console.log('🎉 完成!');return;}
const action=actions[index];
const now=Date.now()-start;
const target=timeMs(action.time);
if(now>=target){
console.log(`[${action.time}] ${action.type==='key'?'按键:'+action.target:'点击'}${action.desc?' - '+action.desc:''}`);
action.type==='key'?execKey(action.target):execClick(action.selectors);
index++;
setTimeout(next,300);
}else{
setTimeout(next,Math.min(target-now,1000));
}
};

window.startAuto=()=>{
if(running)return console.log('⚠️ 已在运行');
console.log('🚀 开始自动化...');
running=true;index=0;start=Date.now();
next();
};

window.stopAuto=()=>{running=false;console.log('🛑 已停止');};

console.log('🎮 自动化脚本已加载!\n\n🚀 输入 startAuto() 开始\n🛑 输入 stopAuto() 停止\n\n操作列表:');
actions.forEach((a,i)=>console.log(`${i+1}. [${a.time}] ${a.type==='key'?'按键:'+a.target:'点击元素'}${a.desc?' - '+a.desc:''}`));
})();
