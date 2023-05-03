import{r as e,h as l,g as a}from"./p-67f293f3.js";const s=class{constructor(l){e(this,l)}connectedCallback(){this.data=[{Volume:{gallon:{scale:3.785411784,symbol:"",name:"US Gal"},quarts:{scale:.946352946,symbol:"",name:"US Quart"},pint:{scale:.473176473,symbol:"",name:"US Pint"},"fl oz":{scale:.0295735295625,symbol:"",name:"US Oz"},l:{scale:1,symbol:"",name:"Liters"},ml:{scale:.001,symbol:"",name:"Milliliter"}},Mass:{kg:{scale:1,symbol:"",name:"Kilogram"},g:{scale:.001,symbol:"",name:"Gram"},mg:{scale:1e-6,symbol:"",name:"Milligram"},lb:{scale:.45359237,symbol:"",name:"Pound"},oz:{scale:.028349523125,symbol:"",name:"Ounce"}},Length:{m:{scale:1,symbol:"m",name:"Meters"},cm:{scale:.01,symbol:"cm",name:"Centimeters"},mm:{scale:.001,symbol:"mm",name:"Millimeters"},miles:{scale:1609.344,symbol:"mi",name:"Miles"},yds:{scale:.9144,symbol:"yds",name:"Yards"},ft:{scale:.3048006096012192,symbol:"ft",name:"Feet"},inch:{scale:.0254,symbol:"in",name:"Inches"}}}]}handleOpen(e){try{e.target.parentNode.querySelector("#modal").querySelector(".modal-footer").querySelectorAll("input").forEach((e=>{e.value=""}))}catch(e){console.log("not found")}e.target.parentNode.parentNode.querySelector("#modal").classList.add("modal","active"),e.target.parentNode.parentNode.querySelector("#overlay").classList.add("active"),e.target.parentNode.parentNode.querySelector("#overlay").addEventListener("click",(e=>{e.target.classList.remove("active"),e.target.parentNode.querySelector("#modal").classList.remove("active")}))}handleInputChange(e,l){this.replace(e.target.id,e.target.value,l,e)}handleFocusChange(e){e.target.value=""}ConvertCompute(e,l,a){function s(e){return!isNaN(parseFloat(e))&&isFinite(e)}return s(e.scale)?l*=e.scale:l=e.scale(l),s(a.scale)?l/=a.scale:l=a.scaleFrom(l),s(l)?parseFloat(l.toFixed(3)):"Invalid"}replace(e,l,a,s){s.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll("input").forEach((s=>{s.id!=e?(s.value=this.ConvertCompute(this.data[0][a][e],l,this.data[0][a][s.id]),s.style.color="#2196F3"):s.style.color="#2196F3"}))}render(){let e,a=e=>{this.current=e.target.textContent,this.filtered={Volume:{gallon:{scale:3.785411784,symbol:"",name:"US Gal"},quarts:{scale:.946352946,symbol:"",name:"US Quart"},pint:{scale:.473176473,symbol:"",name:"US Pint"},"fl oz":{scale:.0295735295625,symbol:"",name:"US Oz"},l:{scale:1,symbol:"",name:"Liters"},ml:{scale:.001,symbol:"",name:"Milliliter"}},Mass:{kg:{scale:1,symbol:"",name:"Kilogram"},g:{scale:.001,symbol:"",name:"Gram"},mg:{scale:1e-6,symbol:"",name:"Milligram"},lb:{scale:.45359237,symbol:"",name:"Pound"},oz:{scale:.028349523125,symbol:"",name:"Ounce"}},Length:{m:{scale:1,symbol:"m",name:"Meters"},cm:{scale:.01,symbol:"cm",name:"Centimeters"},mm:{scale:.001,symbol:"mm",name:"Millimeters"},miles:{scale:1609.344,symbol:"mi",name:"Miles"},yds:{scale:.9144,symbol:"yds",name:"Yards"},ft:{scale:.3048006096012192,symbol:"ft",name:"Feet"},inch:{scale:.0254,symbol:"in",name:"Inches"}}}[this.current];let l=e.target.parentNode.parentNode.querySelector(".modal-footer").querySelectorAll("input");for(let e=0;e<l.length;e++)l[e].value=""};return this.filtered&&(e=Object.keys(this.filtered).map((e=>l("table",null,l("tr",null,l("td",null,l("strong",null,e)),l("div",{class:"data_input"},l("th",null,l("input",{onInput:e=>{this.handleInputChange(e,this.current)},onFocus:e=>{this.handleFocusChange(e)},autocomplete:"off",id:e})))))))),this.filtered||(e=Object.keys(this.data[0].Length).map((e=>l("table",null,l("tr",null,l("td",null,l("strong",null,e)),l("div",{class:"data_input"},l("th",null,l("input",{onInput:e=>{this.handleInputChange(e,"Length")},onFocus:e=>{this.handleFocusChange(e)},autocomplete:"off",id:e})))))))),l("div",null,l("h1",{onClick:this.handleOpen},"UOM"),l("div",{id:"modal",class:"modal"},l("div",{class:"modal-header"},l("h3",{class:"table_b w3-panel w3-card-4",onMouseEnter:e=>a(e)},"Length"),l("h3",{class:"table_b w3-panel w3-card-4",onMouseEnter:e=>a(e)},"Mass"),l("h3",{class:"table_b w3-panel w3-card-4",onMouseEnter:e=>a(e)},"Volume")),l("div",{class:"modal-footer"},e)),l("div",{id:"overlay"}))}get myElement(){return a(this)}};s.style='@import url("https://www.w3schools.com/w3css/4/w3.css");*,*::after,*::before{box-sizing:border-box}.modal{position:fixed;height:420px;top:50%;left:50%;transform:translate(-50%, -50%) scale(0);transition:300ms ease-in-out;border-radius:25px;z-index:99999;background-color:rgb(255, 255, 255);width:410px;max-width:80%}.modal.active{transform:translate(-50%, -50%) scale(1)}.modal-header{padding:9px 15px;display:flex;justify-content:space-evenly;align-items:center}.modal-footer{padding:10px;display:flex;flex-direction:row;justify-content:space-around;align-items:center;flex-wrap:wrap}.modal-footer td{font-size:19px;padding:5px 18px}#overlay{position:fixed;opacity:0;transition:100ms ease-in-out;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, .5);pointer-events:none}#overlay.active{opacity:1;pointer-events:all}.data_input input{display:table-cell;vertical-align:middle;outline:0;border:0;border-bottom:0.1px solid rgb(0, 0, 0);font-weight:normal;font-size:22px;text-align:center}.data_input input:focus{border-bottom:1px solid#2196F3}';export{s as base_uom2}