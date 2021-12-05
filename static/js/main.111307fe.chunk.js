(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,a,t){e.exports=t(32)},23:function(e,a,t){},24:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(15),c=t.n(o),r=(t(23),t(7));t(24);var s=function(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),":",e.alert.msg,n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})))},i=t(9);function m(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(i.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:function(){e.togglemode(null)}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Default switch checkbox input")))))}function d(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"black"}},e.heading," "),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{className:"form-label"}),n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){console.log("on Change"),c(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#13466e",color:"dark"===e.mode?"white":"black"},id:"exampleFormControlTextarea1",rows:"8"})),n.a.createElement("button",{disabled:0===o.length,type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("uppercase clicked"+o);var a=o.toUpperCase();c(a),e.showAlert("Converted to upper Case","success")}}," Convert To UpperCase  "),n.a.createElement("button",{disabled:0===o.length,type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("lowercase");var a=o.toLowerCase();c(a),e.showAlert("Converted to lower Case","success")}},"Convert To LowerCase"),n.a.createElement("button",{disabled:0===o.length,type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){for(var a="",t=o.length-1;t>=0;t--)a+=o[t];c(a),e.showAlert("Reverse String","success")}}," Reverse String  "),n.a.createElement("button",{disabled:0===o.length,type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var a=document.getElementById("exampleFormControlTextarea1");a.select(),navigator.clipboard.writeText(a.value),document.getSelection().removeAllRanges(),e.showAlert("Copied to Clipboard","success")}}," Copy Text  ")),n.a.createElement("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null,"Your Text Summary"),n.a.createElement("p",null,o.split(/\s+/).filter((function(e){return 0!==e.length})).length," Words , ",o.length," characters ,"," ",.008*o.split(" ").filter((function(e){return 0!==e.length})).length," Mintues"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:" Enter Text Above")))}function u(e){var a={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"},t=Object(l.useState)("Enable Dark Mode"),o=Object(r.a)(t,2);o[0],o[1];return n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h2",null,"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null,"Analyze your Text "))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"Text Utillis give you a way to analyze your text quickly and efficiently. Be it  Word count, character count , calculate time."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null,"Free To Use"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"Browser Compatibility"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}m.defaultProps={title:"Title",aboutText:"About"};var b=t(2);var h=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),h=Object(r.a)(c,2),p=h[0],g=h[1],v=function(e,a){g({msg:e,type:a}),setTimeout((function(){g(null)}),1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(m,{title:"Text Utillis",mode:t,togglemode:function(e){document.body.classList.remove("bg-light"),document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-primary"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-success"),console.log(e),document.body.classList.add("bg-"+e),"light"===t?(o("dark"),document.body.style.backgroundColor="#042743",v("Dark mode enabled","success")):(o("light"),document.body.style.backgroundColor="white",v("Dark mode enabled","success"))}}),n.a.createElement(s,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(b.c,null,n.a.createElement(b.a,{path:"/about"},n.a.createElement(u,{mode:t})),n.a.createElement(b.a,{path:"/"},n.a.createElement(d,{showAlert:v,heading:"Enter Text Below",mode:t}))))))},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)}))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.111307fe.chunk.js.map