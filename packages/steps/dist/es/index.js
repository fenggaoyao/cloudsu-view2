var e={name:"LgSteps",props:{count:{type:Number,default:3},active:{type:Number,default:0},activeColor:{type:String,default:"red"},defaultColor:{type:String,default:"green"}},methods:{handle(){this.$emit("activeClick")}}};function t(e,t,n,s,o,i,a,d,r,l){"boolean"!=typeof a&&(r=d,d=a,a=!1);const c="function"==typeof n?n.options:n;let p;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),s&&(c._scopeId=s),i?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=p):t&&(p=a?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),p)if(c.functional){const e=c.render;c.render=function(t,n){return p.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,p):[p]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return(e,t)=>function(e,t){const s=n?t.media||"default":e,a=i[s]||(i[s]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",t.media&&a.element.setAttribute("media",t.media),void 0===o&&(o=document.head||document.getElementsByTagName("head")[0]),o.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(n),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const e=a.ids.size-1,t=document.createTextNode(n),s=a.element.childNodes;s[e]&&a.element.removeChild(s[e]),s.length?a.element.insertBefore(t,s[e]):a.element.appendChild(t)}}}(e,t)}let o;const i={};const a=t({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lg-steps"},[n("div",{staticClass:"lg-steps-line"}),e._v(" "),e._l(e.count,(function(t){return n("div",{key:t,staticClass:"lg-step",style:{color:e.active>=t?e.activeColor:e.defaultColor},on:{click:e.handle}},[e._v("\n    "+e._s(t)+"\n  ")])})),e._v(" "),n("span",[e._v("steps测试")])],2)},staticRenderFns:[]},(function(e){e&&e("data-v-555a1a9c_0",{source:".lg-steps[data-v-555a1a9c]{position:relative;display:flex;justify-content:space-between}.lg-steps-line[data-v-555a1a9c]{position:absolute;height:2px;top:50%;left:24px;right:24px;transform:translateY(-50%);z-index:1;background:#dfe7ef}.lg-step[data-v-555a1a9c]{border:2px solid;border-radius:50%;height:32px;width:32px;display:flex;justify-content:center;align-items:center;font-weight:700;z-index:2;background-color:#fff;box-sizing:border-box}",map:void 0,media:void 0})}),e,"data-v-555a1a9c",false,undefined,!1,s,void 0,void 0);a.install=e=>{e.component(a.name,a)};export default a;
