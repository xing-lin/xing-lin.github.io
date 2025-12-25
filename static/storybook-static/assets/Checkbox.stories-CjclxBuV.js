import{c as e,r as t}from"./iframe-C4E2ty-V.js";import{t as n}from"./jsx-runtime-H-nrTkmw.js";import{t as r}from"./react-dom-CGHJ-PdM.js";import{t as i}from"./utils-CXMkBYrU.js";import{i as a,n as o,r as s}from"./dist-C3eaDtvj.js";var c=e(t(),1),l=e(n(),1);function u(e,t=[]){let n=[];function r(t,r){let i=c.createContext(r),a=n.length;n=[...n,r];let o=t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,u=c.useMemo(()=>o,Object.values(o));return(0,l.jsx)(s.Provider,{value:u,children:r})};o.displayName=t+`Provider`;function s(n,o){let s=o?.[e]?.[a]||i,l=c.useContext(s);if(l)return l;if(r!==void 0)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}return[o,s]}let i=()=>{let t=n.map(e=>c.createContext(e));return function(n){let r=n?.[e]||t;return c.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return i.scopeName=e,[r,d(i,...t)]}function d(...e){let t=e[0];if(e.length===1)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}typeof window<`u`&&window.document&&window.document.createElement;function f(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}var p=globalThis?.document?c.useLayoutEffect:()=>{},m=c.useInsertionEffect||p;function h({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){let[i,a,o]=g({defaultProp:t,onChange:n}),s=e!==void 0,l=s?e:i;{let t=c.useRef(e!==void 0);c.useEffect(()=>{let e=t.current;if(e!==s){let t=e?`controlled`:`uncontrolled`,n=s?`controlled`:`uncontrolled`;console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}t.current=s},[s,r])}return[l,c.useCallback(t=>{if(s){let n=_(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}function g({defaultProp:e,onChange:t}){let[n,r]=c.useState(e),i=c.useRef(n),a=c.useRef(t);return m(()=>{a.current=t},[t]),c.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}function _(e){return typeof e==`function`}function v(e){let t=c.useRef({value:e,previous:e});return c.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function y(e){let[t,n]=c.useState(void 0);return p(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{if(!Array.isArray(t)||!t.length)return;let r=t[0],i,a;if(`borderBoxSize`in r){let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,a=t.blockSize}else i=e.offsetWidth,a=e.offsetHeight;n({width:i,height:a})});return t.observe(e,{box:`border-box`}),()=>t.unobserve(e)}else n(void 0)},[e]),t}function b(e,t){return c.useReducer((e,n)=>t[e][n]??e,e)}var x=e=>{let{present:t,children:n}=e,r=S(t),i=typeof n==`function`?n({present:r.isPresent}):c.Children.only(n),o=a(r.ref,ee(i));return typeof n==`function`||r.isPresent?c.cloneElement(i,{ref:o}):null};x.displayName=`Presence`;function S(e){let[t,n]=c.useState(),r=c.useRef(null),i=c.useRef(e),a=c.useRef(`none`),[o,s]=b(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return c.useEffect(()=>{let e=C(r.current);a.current=o===`mounted`?e:`none`},[o]),p(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,o=C(t);e?s(`MOUNT`):o===`none`||t?.display===`none`?s(`UNMOUNT`):s(n&&r!==o?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,s]),p(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=a=>{let o=C(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(s(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},c=e=>{e.target===t&&(a.current=C(r.current))};return t.addEventListener(`animationstart`,c),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,c),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}else s(`ANIMATION_END`)},[t,s]),{isPresent:[`mounted`,`unmountSuspended`].includes(o),ref:c.useCallback(e=>{r.current=e?getComputedStyle(e):null,n(e)},[])}}function C(e){return e?.animationName||`none`}function ee(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}r();function te(e){let t=ne(e),n=c.forwardRef((e,n)=>{let{children:r,...i}=e,a=c.Children.toArray(r),o=a.find(ie);if(o){let e=o.props.children,r=a.map(t=>t===o?c.Children.count(e)>1?c.Children.only(null):c.isValidElement(e)?e.props.children:null:t);return(0,l.jsx)(t,{...i,ref:n,children:c.isValidElement(e)?c.cloneElement(e,void 0,r):null})}return(0,l.jsx)(t,{...i,ref:n,children:r})});return n.displayName=`${e}.Slot`,n}function ne(e){let t=c.forwardRef((e,t)=>{let{children:n,...r}=e;if(c.isValidElement(n)){let e=oe(n),i=ae(r,n.props);return n.type!==c.Fragment&&(i.ref=t?s(t,e):e),c.cloneElement(n,i)}return c.Children.count(n)>1?c.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var re=Symbol(`radix.slottable`);function ie(e){return c.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===re}function ae(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function oe(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var w=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=te(`Primitive.${t}`),r=c.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,l.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),T=`Checkbox`,[se,ce]=u(T),[le,E]=se(T);function ue(e){let{__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:u,required:d,value:f=`on`,internal_do_not_use_render:p}=e,[m,g]=h({prop:n,defaultProp:i??!1,onChange:u,caller:T}),[_,v]=c.useState(null),[y,b]=c.useState(null),x=c.useRef(!1),S=_?!!o||!!_.closest(`form`):!0,C={checked:m,disabled:a,setChecked:g,control:_,setControl:v,name:s,form:o,value:f,hasConsumerStoppedPropagationRef:x,required:d,defaultChecked:P(i)?!1:i,isFormControl:S,bubbleInput:y,setBubbleInput:b};return(0,l.jsx)(le,{scope:t,...C,children:de(p)?p(C):r})}var D=`CheckboxTrigger`,O=c.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:n,...r},i)=>{let{control:o,value:s,disabled:u,checked:d,required:p,setControl:m,setChecked:h,hasConsumerStoppedPropagationRef:g,isFormControl:_,bubbleInput:v}=E(D,e),y=a(i,m),b=c.useRef(d);return c.useEffect(()=>{let e=o?.form;if(e){let t=()=>h(b.current);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[o,h]),(0,l.jsx)(w.button,{type:`button`,role:`checkbox`,"aria-checked":P(d)?`mixed`:d,"aria-required":p,"data-state":F(d),"data-disabled":u?``:void 0,disabled:u,value:s,...r,ref:y,onKeyDown:f(t,e=>{e.key===`Enter`&&e.preventDefault()}),onClick:f(n,e=>{h(e=>P(e)?!0:!e),v&&_&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})})});O.displayName=D;var k=c.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:u,form:d,...f}=e;return(0,l.jsx)(ue,{__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:u,name:r,form:d,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{...f,ref:t,__scopeCheckbox:n}),e&&(0,l.jsx)(N,{__scopeCheckbox:n})]})})});k.displayName=T;var A=`CheckboxIndicator`,j=c.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:r,...i}=e,a=E(A,n);return(0,l.jsx)(x,{present:r||P(a.checked)||a.checked===!0,children:(0,l.jsx)(w.span,{"data-state":F(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{pointerEvents:`none`,...e.style}})})});j.displayName=A;var M=`CheckboxBubbleInput`,N=c.forwardRef(({__scopeCheckbox:e,...t},n)=>{let{control:r,hasConsumerStoppedPropagationRef:i,checked:o,defaultChecked:s,required:u,disabled:d,name:f,value:p,form:m,bubbleInput:h,setBubbleInput:g}=E(M,e),_=a(n,g),b=v(o),x=y(r);c.useEffect(()=>{let e=h;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=!i.current;if(b!==o&&n){let t=new Event(`click`,{bubbles:r});e.indeterminate=P(o),n.call(e,P(o)?!1:o),e.dispatchEvent(t)}},[h,b,o,i]);let S=c.useRef(P(o)?!1:o);return(0,l.jsx)(w.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:s??S.current,required:u,disabled:d,name:f,value:p,form:m,...t,tabIndex:-1,ref:_,style:{...t.style,...x,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})});N.displayName=M;function de(e){return typeof e==`function`}function P(e){return e===`indeterminate`}function F(e){return P(e)?`indeterminate`:e?`checked`:`unchecked`}
/**
* @license lucide-react v0.562.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var fe=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),pe=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),I=e=>{let t=pe(e);return t.charAt(0).toUpperCase()+t.slice(1)},L=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),me=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},he={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ge=(0,c.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},l)=>(0,c.createElement)(`svg`,{ref:l,...he,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:L(`lucide`,i),...!a&&!me(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,c.createElement)(e,t)),...Array.isArray(a)?a:[a]])),R=(e,t)=>{let n=(0,c.forwardRef)(({className:n,...r},i)=>(0,c.createElement)(ge,{ref:i,iconNode:t,className:L(`lucide-${fe(I(e))}`,`lucide-${e}`,n),...r}));return n.displayName=I(e),n},_e=R(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ve=R(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]);function ye({className:e,...t}){return(0,l.jsx)(k,{"data-slot":`checkbox`,className:i(`peer group border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=indeterminate]:text-foreground size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,e),...t,children:(0,l.jsxs)(j,{"data-slot":`checkbox-indicator`,className:`grid place-content-center text-current transition-none`,children:[(0,l.jsx)(ve,{className:`hidden size-2.5 group-data-[state=indeterminate]:block`}),(0,l.jsx)(_e,{className:`hidden size-3.5 group-data-[state=checked]:block`})]})})}ye.__docgenInfo={description:``,methods:[],displayName:`Checkbox`},r();var be=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=o(`Primitive.${t}`),r=c.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,l.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),xe=`Label`,Se=c.forwardRef((e,t)=>(0,l.jsx)(be.label,{...e,ref:t,onMouseDown:t=>{t.target.closest(`button, input, select, textarea`)||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));Se.displayName=xe;var Ce=Se;function we({className:e,...t}){return(0,l.jsx)(Ce,{"data-slot":`label`,className:i(`flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`,e),...t})}we.__docgenInfo={description:``,methods:[],displayName:`Label`};function z({className:e,children:t,id:n,containerClassName:r,...a}){let o=c.useId(),s=n??(t?o:void 0),u=(0,l.jsx)(ye,{id:s,className:e,...a});return t?(0,l.jsxs)(`div`,{className:i(`flex items-center gap-2`,r),children:[u,(0,l.jsx)(we,{htmlFor:s,className:`cursor-pointer`,children:t})]}):u}z.__docgenInfo={description:`Checkbox 组件

基于 shadcn/ui Checkbox 组件，提供复选框功能。

@example
\`\`\`tsx
// 基础用法
<Checkbox />

// 受控组件
const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onCheckedChange={setChecked} />

// 带 children
<Checkbox id="terms">接受条款</Checkbox>

// 禁用状态
<Checkbox disabled />
<Checkbox checked disabled />
\`\`\``,methods:[],displayName:`Checkbox`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`子元素（标签内容）
如果提供了 children，会自动用 Label 组件包裹`},containerClassName:{required:!1,tsType:{name:`string`},description:`容器类名
用于自定义包裹 checkbox 和 label 的容器样式`}}};var Te={title:`Components/Client/Checkbox`,component:z,tags:[`autodocs`],argTypes:{checked:{control:`select`,options:[!1,!0,`indeterminate`],description:`选中状态：false（未选中）、true（选中）、indeterminate（半选）`},disabled:{control:`boolean`,description:`是否禁用`},required:{control:`boolean`,description:`是否必填`},children:{control:`text`,description:`子元素（标签内容），如果提供了会自动用 Label 组件包裹`},onCheckedChange:{action:`checked-change`,description:`值变化时的回调函数`}}};const B={args:{}},V={args:{checked:!0}},H={args:{children:`接受服务条款`}},U={args:{checked:!0,children:`我已阅读并同意`}},W={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(z,{checked:`indeterminate`,children:`半选状态`}),(0,l.jsx)(z,{checked:`indeterminate`,disabled:!0,children:`半选状态（禁用）`})]})},G={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(z,{disabled:!0,children:`禁用（未选中）`}),(0,l.jsx)(z,{checked:!0,disabled:!0,children:`禁用（已选中）`}),(0,l.jsx)(z,{checked:`indeterminate`,disabled:!0,children:`禁用（半选）`})]})},K={render:()=>{let[e,t]=c.useState(!1);return(0,l.jsxs)(`div`,{className:`space-y-4`,children:[(0,l.jsxs)(z,{checked:e,onCheckedChange:e=>t(e),children:[`受控复选框（当前状态: `,(()=>e===`indeterminate`?`半选`:e?`选中`:`未选中`)(),`）`]}),(0,l.jsxs)(`div`,{className:`flex gap-2`,children:[(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(!1),className:`bg-muted rounded-md px-3 py-1 text-sm`,children:`设为未选中`}),(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(`indeterminate`),className:`bg-muted rounded-md px-3 py-1 text-sm`,children:`设为半选`}),(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(!0),className:`bg-muted rounded-md px-3 py-1 text-sm`,children:`设为选中`})]}),(0,l.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`点击复选框或按钮查看状态变化`})]})}},q={render:()=>{let[e,t]=c.useState(!1);return(0,l.jsxs)(`div`,{className:`space-y-4`,children:[(0,l.jsx)(z,{checked:e,onCheckedChange:e=>t(e),children:`点击我切换状态`}),(0,l.jsx)(`div`,{className:`space-y-2`,children:(0,l.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`当前状态: `,(()=>e===`indeterminate`?`➖ 半选`:e?`✅ 已选中`:`❌ 未选中`)()]})})]})}},J={render:()=>{let[e,t]=c.useState({apple:!1,banana:!1,orange:!1,grape:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))},r=Object.values(e).filter(Boolean).length,i=Object.keys(e).length,a=r===i,o=r>0&&r<i,s=a?!0:o?`indeterminate`:!1;return(0,l.jsxs)(`div`,{className:`space-y-4`,children:[(0,l.jsxs)(`div`,{className:`space-y-3`,children:[(0,l.jsx)(z,{checked:s,onCheckedChange:e=>{let n=e===!0;t({apple:n,banana:n,orange:n,grape:n})},children:a?`取消全选`:o?`全选（部分已选）`:`全选`}),(0,l.jsxs)(`div`,{className:`ml-6 flex flex-col gap-2 border-l-2 pl-4`,children:[(0,l.jsx)(z,{checked:e.apple,onCheckedChange:n(`apple`),children:`苹果`}),(0,l.jsx)(z,{checked:e.banana,onCheckedChange:n(`banana`),children:`香蕉`}),(0,l.jsx)(z,{checked:e.orange,onCheckedChange:n(`orange`),children:`橙子`}),(0,l.jsx)(z,{checked:e.grape,onCheckedChange:n(`grape`),children:`葡萄`})]})]}),(0,l.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`已选择 `,r,` / `,i,` 项`,o&&`（部分选中）`]})]})}},Y={render:()=>{let[e,t]=c.useState({terms:!1,privacy:!1,newsletter:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))},r=e.terms&&e.privacy;return(0,l.jsxs)(`div`,{className:`space-y-4`,children:[(0,l.jsxs)(`form`,{className:`space-y-4`,onSubmit:e=>{e.preventDefault(),alert(`表单提交成功！`)},children:[(0,l.jsxs)(`div`,{className:`space-y-3`,children:[(0,l.jsxs)(z,{id:`terms`,checked:e.terms,onCheckedChange:n(`terms`),required:!0,children:[`我已阅读并接受`,` `,(0,l.jsx)(`a`,{href:`#`,className:`text-primary underline`,onClick:e=>e.preventDefault(),children:`服务条款`})]}),(0,l.jsxs)(z,{id:`privacy`,checked:e.privacy,onCheckedChange:n(`privacy`),required:!0,children:[`我已阅读并同意`,` `,(0,l.jsx)(`a`,{href:`#`,className:`text-primary underline`,onClick:e=>e.preventDefault(),children:`隐私政策`})]}),(0,l.jsx)(z,{id:`newsletter`,checked:e.newsletter,onCheckedChange:n(`newsletter`),children:`订阅邮件通知（可选）`})]}),(0,l.jsx)(`button`,{type:`submit`,disabled:!r,className:`bg-primary text-primary-foreground rounded-md px-4 py-2 disabled:opacity-50`,children:`提交`})]}),(0,l.jsxs)(`div`,{className:`bg-muted rounded-md p-3 text-sm`,children:[(0,l.jsx)(`p`,{className:`font-medium`,children:`表单状态：`}),(0,l.jsxs)(`ul`,{className:`mt-1 list-inside list-disc space-y-1`,children:[(0,l.jsxs)(`li`,{children:[`服务条款: `,e.terms?`✅`:`❌`]}),(0,l.jsxs)(`li`,{children:[`隐私政策: `,e.privacy?`✅`:`❌`]}),(0,l.jsxs)(`li`,{children:[`邮件通知: `,e.newsletter?`✅`:`❌`]}),(0,l.jsxs)(`li`,{children:[`可提交: `,r?`✅`:`❌`]})]})]})]})}},X={render:()=>(0,l.jsxs)(`div`,{className:`space-y-4`,children:[(0,l.jsxs)(z,{required:!0,children:[`必选项 `,(0,l.jsx)(`span`,{className:`text-destructive`,children:`*`})]}),(0,l.jsx)(z,{children:`可选项`})]})},Z={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(z,{className:`size-3`,children:`小尺寸 (12px)`}),(0,l.jsx)(z,{className:`size-4`,children:`默认尺寸 (16px)`}),(0,l.jsx)(z,{className:`size-5`,children:`大尺寸 (20px)`})]})},Q={render:()=>(0,l.jsxs)(`div`,{className:`space-y-4`,children:[(0,l.jsx)(z,{children:(0,l.jsxs)(`div`,{className:`space-y-1`,children:[(0,l.jsx)(`div`,{className:`font-medium`,children:`高级功能`}),(0,l.jsx)(`div`,{className:`text-muted-foreground text-sm`,children:`启用后将获得更多高级功能`})]})}),(0,l.jsx)(z,{children:(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:`通知设置`}),(0,l.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:`(推荐)`})]})})]})},$={render:()=>(0,l.jsxs)(`div`,{className:`space-y-4`,children:[(0,l.jsx)(z,{"aria-invalid":!0,className:`aria-invalid:border-destructive`,children:`带有错误状态的复选框`}),(0,l.jsx)(`p`,{className:`text-destructive text-sm`,children:`请至少选择一个选项`})]})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...B.parameters?.docs?.source},description:{story:`## 默认复选框`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...V.parameters?.docs?.source},description:{story:`## 选中状态`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    children: '接受服务条款'
  }
}`,...H.parameters?.docs?.source},description:{story:`## 带标签`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    children: '我已阅读并同意'
  }
}`,...U.parameters?.docs?.source},description:{story:`## 选中状态（带标签）`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox checked="indeterminate">半选状态</Checkbox>
      <Checkbox checked="indeterminate" disabled>
        半选状态（禁用）
      </Checkbox>
    </div>
}`,...W.parameters?.docs?.source},description:{story:`## 半选状态（Indeterminate）`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox disabled>禁用（未选中）</Checkbox>
      <Checkbox checked disabled>
        禁用（已选中）
      </Checkbox>
      <Checkbox checked="indeterminate" disabled>
        禁用（半选）
      </Checkbox>
    </div>
}`,...G.parameters?.docs?.source},description:{story:`## 禁用状态`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(false);
    const getStatusText = () => {
      if (checked === 'indeterminate') return '半选';
      return checked ? '选中' : '未选中';
    };
    return <div className="space-y-4">
        <Checkbox checked={checked} onCheckedChange={value => setChecked(value)}>
          受控复选框（当前状态: {getStatusText()}）
        </Checkbox>
        <div className="flex gap-2">
          <button type="button" onClick={() => setChecked(false)} className="bg-muted rounded-md px-3 py-1 text-sm">
            设为未选中
          </button>
          <button type="button" onClick={() => setChecked('indeterminate')} className="bg-muted rounded-md px-3 py-1 text-sm">
            设为半选
          </button>
          <button type="button" onClick={() => setChecked(true)} className="bg-muted rounded-md px-3 py-1 text-sm">
            设为选中
          </button>
        </div>
        <p className="text-muted-foreground text-sm">
          点击复选框或按钮查看状态变化
        </p>
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:`## 受控组件`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(false);
    const getStatusEmoji = () => {
      if (checked === 'indeterminate') return '➖ 半选';
      return checked ? '✅ 已选中' : '❌ 未选中';
    };
    return <div className="space-y-4">
        <Checkbox checked={checked} onCheckedChange={value => setChecked(value)}>
          点击我切换状态
        </Checkbox>
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">
            当前状态: {getStatusEmoji()}
          </p>
        </div>
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:`## 交互式示例`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = React.useState({
      apple: false,
      banana: false,
      orange: false,
      grape: false
    });
    const handleChange = (key: keyof typeof items) => (checked: boolean) => {
      setItems(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    const selectedCount = Object.values(items).filter(Boolean).length;
    const totalCount = Object.keys(items).length;
    const allSelected = selectedCount === totalCount;
    const someSelected = selectedCount > 0 && selectedCount < totalCount;

    // 计算全选 checkbox 的状态
    const selectAllChecked: boolean | 'indeterminate' = allSelected ? true : someSelected ? 'indeterminate' : false;
    const handleSelectAll = (checked: boolean | 'indeterminate') => {
      const isChecked = checked === true;
      setItems({
        apple: isChecked,
        banana: isChecked,
        orange: isChecked,
        grape: isChecked
      });
    };
    return <div className="space-y-4">
        <div className="space-y-3">
          <Checkbox checked={selectAllChecked} onCheckedChange={handleSelectAll}>
            {allSelected ? '取消全选' : someSelected ? '全选（部分已选）' : '全选'}
          </Checkbox>
          <div className="ml-6 flex flex-col gap-2 border-l-2 pl-4">
            <Checkbox checked={items.apple} onCheckedChange={handleChange('apple')}>
              苹果
            </Checkbox>
            <Checkbox checked={items.banana} onCheckedChange={handleChange('banana')}>
              香蕉
            </Checkbox>
            <Checkbox checked={items.orange} onCheckedChange={handleChange('orange')}>
              橙子
            </Checkbox>
            <Checkbox checked={items.grape} onCheckedChange={handleChange('grape')}>
              葡萄
            </Checkbox>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          已选择 {selectedCount} / {totalCount} 项
          {someSelected && '（部分选中）'}
        </p>
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`## 多选列表`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = React.useState({
      terms: false,
      privacy: false,
      newsletter: false
    });
    const handleChange = (key: keyof typeof formData) => (checked: boolean) => {
      setFormData(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    const canSubmit = formData.terms && formData.privacy;
    return <div className="space-y-4">
        <form className="space-y-4" onSubmit={e => {
        e.preventDefault();
        alert('表单提交成功！');
      }}>
          <div className="space-y-3">
            <Checkbox id="terms" checked={formData.terms} onCheckedChange={handleChange('terms')} required>
              我已阅读并接受{' '}
              <a href="#" className="text-primary underline" onClick={e => e.preventDefault()}>
                服务条款
              </a>
            </Checkbox>
            <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={handleChange('privacy')} required>
              我已阅读并同意{' '}
              <a href="#" className="text-primary underline" onClick={e => e.preventDefault()}>
                隐私政策
              </a>
            </Checkbox>
            <Checkbox id="newsletter" checked={formData.newsletter} onCheckedChange={handleChange('newsletter')}>
              订阅邮件通知（可选）
            </Checkbox>
          </div>
          <button type="submit" disabled={!canSubmit} className="bg-primary text-primary-foreground rounded-md px-4 py-2 disabled:opacity-50">
            提交
          </button>
        </form>
        <div className="bg-muted rounded-md p-3 text-sm">
          <p className="font-medium">表单状态：</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>服务条款: {formData.terms ? '✅' : '❌'}</li>
            <li>隐私政策: {formData.privacy ? '✅' : '❌'}</li>
            <li>邮件通知: {formData.newsletter ? '✅' : '❌'}</li>
            <li>可提交: {canSubmit ? '✅' : '❌'}</li>
          </ul>
        </div>
      </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`## 表单示例`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox required>
        必选项 <span className="text-destructive">*</span>
      </Checkbox>
      <Checkbox>可选项</Checkbox>
    </div>
}`,...X.parameters?.docs?.source},description:{story:`## 必填项`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox className="size-3">小尺寸 (12px)</Checkbox>
      <Checkbox className="size-4">默认尺寸 (16px)</Checkbox>
      <Checkbox className="size-5">大尺寸 (20px)</Checkbox>
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`## 不同尺寸`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox>
        <div className="space-y-1">
          <div className="font-medium">高级功能</div>
          <div className="text-muted-foreground text-sm">
            启用后将获得更多高级功能
          </div>
        </div>
      </Checkbox>
      <Checkbox>
        <div className="flex items-center gap-2">
          <span className="font-medium">通知设置</span>
          <span className="text-muted-foreground text-sm">(推荐)</span>
        </div>
      </Checkbox>
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`## 复杂标签内容`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox aria-invalid className="aria-invalid:border-destructive">
        带有错误状态的复选框
      </Checkbox>
      <p className="text-destructive text-sm">请至少选择一个选项</p>
    </div>
}`,...$.parameters?.docs?.source},description:{story:`## 错误状态`,...$.parameters?.docs?.description}}};const Ee=[`Default`,`Checked`,`WithLabel`,`CheckedWithLabel`,`Indeterminate`,`Disabled`,`Controlled`,`Interactive`,`Multiple`,`FormExample`,`Required`,`Sizes`,`ComplexLabel`,`ErrorState`];export{V as Checked,U as CheckedWithLabel,Q as ComplexLabel,K as Controlled,B as Default,G as Disabled,$ as ErrorState,Y as FormExample,W as Indeterminate,q as Interactive,J as Multiple,X as Required,Z as Sizes,H as WithLabel,Ee as __namedExportsOrder,Te as default};