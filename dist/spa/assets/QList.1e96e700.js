import{c as o,a as n}from"./use-router-link.2c7f4719.js";import{u as d,a as i}from"./use-dark.798459ce.js";import{c as l,h as u,g as c}from"./index.c5bdb514.js";var q=o({name:"QList",props:{...d,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=c(),r=i(e,t.proxy.$q),s=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>u(e.tag,{class:s.value},n(a.default))}});export{q as Q};
