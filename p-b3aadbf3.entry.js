import{r as s,h as l}from"./p-67f293f3.js";const t=class{constructor(l){s(this,l),this.stri_avail=!1}handleClick(s){const l={milliliter:"ml",ml:"ml",litre:"l",litres:"l",l:"l",lts:"l","fluid ounce":"fl oz","fl oz":"fl oz",pint:"pint",gallon:"gallon",gl:"gallon",quarts:"quarts",qt:"quarts",kilogram:"kg",kg:"kg",kgs:"kg",gram:"g",g:"g",gms:"g",pound:"lb",lbs:"lb",lb:"lb",oz:"oz",ounce:"oz",meters:"m",m:"m",meter:"m",centimeters:"cm",centimeter:"cm",cm:"cm",cms:"cm",millimeters:"mm",mm:"mm",millimeter:"mm",miles:"miles",mile:"miles",yards:"yds",yds:"yds",feet:"ft",ft:"ft",fts:"ft",inches:"inch",inch:"inch",in:"inch",ins:"inch"},t=[{Volume:{gallon:{scale:3.785411784,symbol:"",name:"US Gal"},quarts:{scale:.946352946,symbol:"",name:"US Quart"},pint:{scale:.473176473,symbol:"",name:"US Pint"},"fl oz":{scale:.0295735295625,symbol:"",name:"US Oz"},l:{scale:1,symbol:"",name:"Liters"},ml:{scale:.001,symbol:"",name:"Milliliter"}},Mass:{kg:{scale:1,symbol:"",name:"Kilogram"},g:{scale:.001,symbol:"",name:"Gram"},mg:{scale:1e-6,symbol:"",name:"Milligram"},lb:{scale:.45359237,symbol:"",name:"Pound"},oz:{scale:.028349523125,symbol:"",name:"Ounce"}},Length:{m:{scale:1,symbol:"m",name:"Meters"},cm:{scale:.01,symbol:"cm",name:"Centimeters"},mm:{scale:.001,symbol:"mm",name:"Millimeters"},miles:{scale:1609.344,symbol:"mi",name:"Miles"},yds:{scale:.9144,symbol:"yds",name:"Yards"},ft:{scale:.3048006096012192,symbol:"ft",name:"Feet"},inch:{scale:.0254,symbol:"in",name:"Inches"}}}];let e=s=>{let e,i,m;console.clear();try{var n=new RegExp("(\\d*?[*+-/Xx]?\\d*?[*+-/Xx]?\\d*?[*+-/Xx]?\\d+(?:\\.\\d+)?)\\s?("+Object.keys(l).join("|")+")\\b","i");i=s.match(n),i&&(m=i[1],e=l[i[2].toLowerCase()]);var a="ml,l,pint,fl oz,gallon,pint".split(","),o="kg,g,lb,oz".split(","),c="m,cm,mm,miles,yds,ft,inch".split(",");function r(s){return a.includes(s)?"Volume":o.includes(s)?"Mass":c.includes(s)?"Length":"not configured"}return this.dict=t,this.base_unit=e,this.base_value=m,this.main_unit=r(e),this.filtered_main=Object.entries(t[0][this.main_unit])?Object.entries(t[0][this.main_unit]):"null",{unit:e,value:m,"sub-data":r(e),filtered:Object.entries(t[0][this.main_unit])?Object.entries(t[0][this.main_unit]):"null"}}catch(s){console.log("errrrrrr")}};this.xpostion=s.clientX,this.ypostion=s.clientY,0!=window.getSelection().toString().length?(this.base_string=window.getSelection().toString(),e(this.base_string),e(this.base_string)?(this.stri_avail=!0,this.unit=e(this.base_string).unit,this.value=e(this.base_string).value,/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.value)&&(console.log(this.value.split(/[&\/\\#,+()$~%.'":*?xX<>{}]/g)),this.value=this.value.split(/[&\/\\#,+()$~%.'":*?xX<>{}]/g))):console.log("error in convert")):0==window.getSelection().toString().length&&(this.stri_avail=!1,this.unit=null,this.value=0)}ConvertCompute(s,l,t){function e(s){return!isNaN(parseFloat(s))&&isFinite(s)}return e(s.scale)?l*=s.scale:l=s.scale(l),e(t.scale)?l/=t.scale:l=t.scaleFrom(l),e(l)?parseFloat(l.toFixed(3)):"Enter a Number"}render(){let s;const t={position:"fixed",left:this.xpostion+"px",top:this.ypostion+"px",zIndex:"99999999",shadow:"0 4px 8px 0 rgba(0,0,0,0.2)",background:"white"};if(this.filtered_main){console.log("test2",Object.values(this.filtered_main[1])[0]);try{s=this.filtered_main.map(((s,t)=>l("tbody",null,l("tr",null,l("th",null,Object.values(this.filtered_main[t])[0]),l("td",null,this.ConvertCompute(this.dict[0][this.main_unit][this.unit],this.value,this.dict[0][this.main_unit][s[0]]))))))}catch(s){console.log("error in sten")}}let e=this.stri_avail;return console.log("sssss",e,this.unit,this.value),l("div",null,l("h1",null,"base  22 lbs"),l("h1",null,"base  2 gms"),l("h1",null,"base  200ml"),l("h1",null,"base  22*34*10 cm"),e?l("table",{class:"table_b w3-panel w3-card-4",id:"final_query",style:t},s):null)}};t.style='@import url("https://www.w3schools.com/w3css/4/w3.css");.table_b th,td{padding:2rem;text-align:center}.table_b td{color:#0b80ce}.table_b{width:200px}';export{t as base_uom}