import{Q as n}from"./QInput.77e0d0f3.js";import{a as f,Q as _}from"./QBtn.c47aa8c6.js";import{Q as b}from"./QForm.caedaad4.js";import{ai as v,r as l,k as u,l as x,d as s,m,q as a,b as y,x as p,aj as h,t as k}from"./index.c5bdb514.js";import"./use-dark.798459ce.js";import"./use-router-link.2c7f4719.js";import"./focus-manager.32f8d49a.js";import"./use-form.003d2a08.js";const V={class:"flex fullscreen column justify-center items-center"},g=p("div",{class:"text-weight-bolder text-h6 text-grey q-my-md"},"Kirish",-1),Q={class:"text-center"},w={__name:"register",setup(d){v();const r=l(""),i=l("");let e=l(!0);const c=()=>{location.replace("/admin")};return(B,t)=>(u(),x("div",V,[g,s(b,{onSubmit:h(c,["prevent"]),class:"q-gutter-md"},{default:m(()=>[s(n,{filled:"",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),label:"Phone",mask:"(##) ### - ## - ##",hint:"PS: (00) 000 - 05 - 00"},null,8,["modelValue"]),s(n,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=o=>i.value=o),filled:"",type:a(e)?"password":"text",hint:"Sizga berilgan parolni kiriting"},{append:m(()=>[s(f,{name:a(e)?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=o=>y(e)?e.value=!a(e):e=!a(e))},null,8,["name"])]),_:1},8,["modelValue","type"]),p("div",Q,[s(_,{type:"submit",label:"Kirish",color:"primary"})])]),_:1},8,["onSubmit"])]))}},K={__name:"Packer",setup(d){return(r,i)=>(u(),k(w))}};export{K as default};
