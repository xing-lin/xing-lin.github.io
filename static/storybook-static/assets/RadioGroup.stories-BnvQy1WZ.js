import{c as e,r as t}from"./iframe-BbrHDe9F.js";import{t as n}from"./jsx-runtime-DDt_xLpd.js";import"./react-dom-DU5sz807.js";import{t as r}from"./utils-CXMkBYrU.js";import{n as i,t as a}from"./dist-CSmC5ZJN.js";import"./dist-CLTQJFBi.js";import{i as o,o as s,r as c,s as l,t as u}from"./dist-CChaMjSn.js";import{n as d,t as f}from"./label-bMOlWDiX.js";import{t as p}from"./dist-DhNtmY5R.js";import{t as m}from"./createLucideIcon-DCDSYe7K.js";import{n as h,t as g}from"./dist-OmyyXh49.js";var _=m(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),v=e(t(),1),y=e(n(),1);function b(e){let t=ee(e),n=v.forwardRef((e,n)=>{let{children:r,...i}=e,a=v.Children.toArray(r),o=a.find(S);if(o){let e=o.props.children,r=a.map(t=>t===o?v.Children.count(e)>1?v.Children.only(null):v.isValidElement(e)?e.props.children:null:t);return(0,y.jsx)(t,{...i,ref:n,children:v.isValidElement(e)?v.cloneElement(e,void 0,r):null})}return(0,y.jsx)(t,{...i,ref:n,children:r})});return n.displayName=`${e}.Slot`,n}function ee(e){let t=v.forwardRef((e,t)=>{let{children:n,...r}=e;if(v.isValidElement(n)){let e=w(n),i=C(r,n.props);return n.type!==v.Fragment&&(i.ref=t?a(t,e):e),v.cloneElement(n,i)}return v.Children.count(n)>1?v.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var x=Symbol(`radix.slottable`);function S(e){return v.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===x}function C(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function w(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function T(e){let t=e+`CollectionProvider`,[n,r]=l(t),[a,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:n}=e,r=v.useRef(null),i=v.useRef(new Map).current;return(0,y.jsx)(a,{scope:t,itemMap:i,collectionRef:r,children:n})};s.displayName=t;let c=e+`CollectionSlot`,u=b(c),d=v.forwardRef((e,t)=>{let{scope:n,children:r}=e;return(0,y.jsx)(u,{ref:i(t,o(c,n).collectionRef),children:r})});d.displayName=c;let f=e+`CollectionItemSlot`,p=`data-radix-collection-item`,m=b(f),h=v.forwardRef((e,t)=>{let{scope:n,children:r,...a}=e,s=v.useRef(null),c=i(t,s),l=o(f,n);return v.useEffect(()=>(l.itemMap.set(s,{ref:s,...a}),()=>void l.itemMap.delete(s))),(0,y.jsx)(m,{[p]:``,ref:c,children:r})});h.displayName=f;function g(t){let n=o(e+`CollectionConsumer`,t);return v.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return[{Provider:s,Slot:d,ItemSlot:h},g,r]}var te=v.createContext(void 0);function ne(e){let t=v.useContext(te);return e||t||`ltr`}var E=`rovingFocusGroup.onEntryFocus`,re={bubbles:!1,cancelable:!0},D=`RovingFocusGroup`,[O,ie,ae]=T(D),[k,oe]=l(D,[ae]),[se,ce]=k(D),A=v.forwardRef((e,t)=>(0,y.jsx)(O.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,y.jsx)(O.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,y.jsx)(le,{...e,ref:t})})}));A.displayName=D;var le=v.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:c,currentTabStopId:l,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:f,onEntryFocus:p,preventScrollOnEntryFocus:m=!1,...h}=e,_=v.useRef(null),b=i(t,_),ee=ne(c),[x,S]=o({prop:l,defaultProp:d??null,onChange:f,caller:D}),[C,w]=v.useState(!1),T=g(p),te=ie(n),O=v.useRef(!1),[ae,k]=v.useState(0);return v.useEffect(()=>{let e=_.current;if(e)return e.addEventListener(E,T),()=>e.removeEventListener(E,T)},[T]),(0,y.jsx)(se,{scope:n,orientation:r,dir:ee,loop:a,currentTabStopId:x,onItemFocus:v.useCallback(e=>S(e),[S]),onItemShiftTab:v.useCallback(()=>w(!0),[]),onFocusableItemAdd:v.useCallback(()=>k(e=>e+1),[]),onFocusableItemRemove:v.useCallback(()=>k(e=>e-1),[]),children:(0,y.jsx)(u.div,{tabIndex:C||ae===0?-1:0,"data-orientation":r,...h,ref:b,style:{outline:`none`,...e.style},onMouseDown:s(e.onMouseDown,()=>{O.current=!0}),onFocus:s(e.onFocus,e=>{let t=!O.current;if(e.target===e.currentTarget&&t&&!C){let t=new CustomEvent(E,re);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=te().filter(e=>e.focusable);me([e.find(e=>e.active),e.find(e=>e.id===x),...e].filter(Boolean).map(e=>e.ref.current),m)}}O.current=!1}),onBlur:s(e.onBlur,()=>w(!1))})})}),j=`RovingFocusGroupItem`,ue=v.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:a,children:o,...c}=e,l=h(),d=a||l,f=ce(j,n),p=f.currentTabStopId===d,m=ie(n),{onFocusableItemAdd:g,onFocusableItemRemove:_,currentTabStopId:b}=f;return v.useEffect(()=>{if(r)return g(),()=>_()},[r,g,_]),(0,y.jsx)(O.ItemSlot,{scope:n,id:d,focusable:r,active:i,children:(0,y.jsx)(u.span,{tabIndex:p?0:-1,"data-orientation":f.orientation,...c,ref:t,onMouseDown:s(e.onMouseDown,e=>{r?f.onItemFocus(d):e.preventDefault()}),onFocus:s(e.onFocus,()=>f.onItemFocus(d)),onKeyDown:s(e.onKeyDown,e=>{if(e.key===`Tab`&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=pe(e,f.orientation,f.dir);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=m().filter(e=>e.focusable).map(e=>e.ref.current);if(t===`last`)n.reverse();else if(t===`prev`||t===`next`){t===`prev`&&n.reverse();let r=n.indexOf(e.currentTarget);n=f.loop?he(n,r+1):n.slice(r+1)}setTimeout(()=>me(n))}}),children:typeof o==`function`?o({isCurrentTabStop:p,hasTabStop:b!=null}):o})})});ue.displayName=j;var de={ArrowLeft:`prev`,ArrowUp:`prev`,ArrowRight:`next`,ArrowDown:`next`,PageUp:`first`,Home:`first`,PageDown:`last`,End:`last`};function fe(e,t){return t===`rtl`?e===`ArrowLeft`?`ArrowRight`:e===`ArrowRight`?`ArrowLeft`:e:e}function pe(e,t,n){let r=fe(e.key,n);if(!(t===`vertical`&&[`ArrowLeft`,`ArrowRight`].includes(r))&&!(t===`horizontal`&&[`ArrowUp`,`ArrowDown`].includes(r)))return de[r]}function me(e,t=!1){let n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function he(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var ge=A,_e=ue,M=`Radio`,[ve,N]=l(M),[ye,be]=ve(M),P=v.forwardRef((e,t)=>{let{__scopeRadio:n,name:r,checked:a=!1,required:o,disabled:c,value:l=`on`,onCheck:d,form:f,...p}=e,[m,h]=v.useState(null),g=i(t,e=>h(e)),_=v.useRef(!1),b=m?f||!!m.closest(`form`):!0;return(0,y.jsxs)(ye,{scope:n,checked:a,disabled:c,children:[(0,y.jsx)(u.button,{type:`button`,role:`radio`,"aria-checked":a,"data-state":R(a),"data-disabled":c?``:void 0,disabled:c,value:l,...p,ref:g,onClick:s(e.onClick,e=>{a||d?.(),b&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())})}),b&&(0,y.jsx)(L,{control:m,bubbles:!_.current,name:r,value:l,checked:a,required:o,disabled:c,form:f,style:{transform:`translateX(-100%)`}})]})});P.displayName=M;var F=`RadioIndicator`,I=v.forwardRef((e,t)=>{let{__scopeRadio:n,forceMount:r,...i}=e,a=be(F,n);return(0,y.jsx)(p,{present:r||a.checked,children:(0,y.jsx)(u.span,{"data-state":R(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})});I.displayName=F;var xe=`RadioBubbleInput`,L=v.forwardRef(({__scopeRadio:e,control:t,checked:n,bubbles:r=!0,...a},o)=>{let s=v.useRef(null),l=i(s,o),f=d(n),p=c(t);return v.useEffect(()=>{let e=s.current;if(!e)return;let t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,`checked`).set;if(f!==n&&i){let t=new Event(`click`,{bubbles:r});i.call(e,n),e.dispatchEvent(t)}},[f,n,r]),(0,y.jsx)(u.input,{type:`radio`,"aria-hidden":!0,defaultChecked:n,...a,tabIndex:-1,ref:l,style:{...a.style,...p,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0}})});L.displayName=xe;function R(e){return e?`checked`:`unchecked`}var Se=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],z=`RadioGroup`,[Ce,we]=l(z,[oe,N]),Te=oe(),Ee=N(),[De,Oe]=Ce(z),B=v.forwardRef((e,t)=>{let{__scopeRadioGroup:n,name:r,defaultValue:i,value:a,required:s=!1,disabled:c=!1,orientation:l,dir:d,loop:f=!0,onValueChange:p,...m}=e,h=Te(n),g=ne(d),[_,v]=o({prop:a,defaultProp:i??null,onChange:p,caller:z});return(0,y.jsx)(De,{scope:n,name:r,required:s,disabled:c,value:_,onValueChange:v,children:(0,y.jsx)(ge,{asChild:!0,...h,orientation:l,dir:g,loop:f,children:(0,y.jsx)(u.div,{role:`radiogroup`,"aria-required":s,"aria-orientation":l,"data-disabled":c?``:void 0,dir:g,...m,ref:t})})})});B.displayName=z;var ke=`RadioGroupItem`,Ae=v.forwardRef((e,t)=>{let{__scopeRadioGroup:n,disabled:r,...a}=e,o=Oe(ke,n),c=o.disabled||r,l=Te(n),u=Ee(n),d=v.useRef(null),f=i(t,d),p=o.value===a.value,m=v.useRef(!1);return v.useEffect(()=>{let e=e=>{Se.includes(e.key)&&(m.current=!0)},t=()=>m.current=!1;return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,y.jsx)(_e,{asChild:!0,...l,focusable:!c,active:p,children:(0,y.jsx)(P,{disabled:c,required:o.required,checked:p,...u,...a,name:o.name,ref:f,onCheck:()=>o.onValueChange(a.value),onKeyDown:s(e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:s(a.onFocus,()=>{m.current&&d.current?.click()})})})});Ae.displayName=ke;var je=`RadioGroupIndicator`,Me=v.forwardRef((e,t)=>{let{__scopeRadioGroup:n,...r}=e;return(0,y.jsx)(I,{...Ee(n),...r,ref:t})});Me.displayName=je;var Ne=B,Pe=Ae,Fe=Me;function Ie({className:e,...t}){return(0,y.jsx)(Ne,{"data-slot":`radio-group`,className:r(`grid gap-3`,e),...t})}function Le({className:e,...t}){return(0,y.jsx)(Pe,{"data-slot":`radio-group-item`,className:r(`border-input [data-state=checked]:bg-primary text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,e),...t,children:(0,y.jsx)(Fe,{"data-slot":`radio-group-indicator`,className:`relative flex items-center justify-center`,children:(0,y.jsx)(_,{className:`fill-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2`})})})}Ie.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`},Le.__docgenInfo={description:``,methods:[],displayName:`RadioGroupItem`};function V({options:e,orientation:t=`vertical`,className:n,itemClassName:i,labelClassName:a,descriptionClassName:o,...s}){let c=(0,v.useId)();return(0,y.jsx)(Ie,{className:r(t===`horizontal`?`flex flex-row gap-4`:`grid gap-3`,n),...s,children:e.map(e=>{let t=`${c}-${e.value}`,n=!!e.description;return(0,y.jsxs)(`div`,{className:r(`flex items-start gap-2`,n&&`items-start`,!n&&`items-center`,i),children:[(0,y.jsx)(Le,{value:e.value,id:t,disabled:e.disabled}),(0,y.jsx)(f,{htmlFor:t,className:r(`cursor-pointer`,e.disabled&&`cursor-not-allowed opacity-50`,a),children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{children:e.label}),e.description&&(0,y.jsx)(`span`,{className:r(`text-muted-foreground text-sm font-normal`,o),children:e.description})]})})]},e.value)})})}V.__docgenInfo={description:`RadioGroup 组件

基于 shadcn/ui RadioGroup 组件，提供数据驱动的使用方式。
用户只需提供选项数据，组件会自动渲染完整的 RadioGroup UI。

@example
\`\`\`tsx
// 基础用法
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

<RadioGroup options={options} defaultValue="option1" />

// 受控模式
const [value, setValue] = useState('option1');
<RadioGroup
  options={options}
  value={value}
  onValueChange={setValue}
/>

// 带描述文本
const optionsWithDesc = [
  {
    value: 'basic',
    label: 'Basic Plan',
    description: 'Perfect for individuals'
  },
  {
    value: 'pro',
    label: 'Pro Plan',
    description: 'Best for professionals'
  },
];

<RadioGroup options={optionsWithDesc} />

// 水平布局
<RadioGroup options={options} orientation="horizontal" />

// 禁用某些选项
const optionsWithDisabled = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', disabled: true },
  { value: 'option3', label: 'Option 3' },
];

<RadioGroup options={optionsWithDisabled} />
\`\`\``,methods:[],displayName:`RadioGroup`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`RadioOption`}],raw:`RadioOption[]`},description:`选项列表`},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`布局方向
@default 'vertical'`,defaultValue:{value:`'vertical'`,computed:!1}},itemClassName:{required:!1,tsType:{name:`string`},description:`每个选项容器的自定义类名`},labelClassName:{required:!1,tsType:{name:`string`},description:`标签的自定义类名`},descriptionClassName:{required:!1,tsType:{name:`string`},description:`描述文本的自定义类名`}},composes:[`Omit`]};var Re={title:`Components/Client/RadioGroup`,component:V,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`布局方向`},disabled:{control:`boolean`,description:`是否禁用整个组件`}}},H=[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}];const U={args:{options:H,defaultValue:`option1`},render:e=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsx)(V,{...e})})},W={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-8 p-8`,children:[(0,y.jsxs)(`div`,{className:`space-y-3`,children:[(0,y.jsx)(`h3`,{className:`text-sm font-semibold text-gray-600`,children:`Vertical (Default)`}),(0,y.jsx)(V,{options:H,defaultValue:`option1`})]}),(0,y.jsxs)(`div`,{className:`space-y-3`,children:[(0,y.jsx)(`h3`,{className:`text-sm font-semibold text-gray-600`,children:`Horizontal`}),(0,y.jsx)(V,{options:H,orientation:`horizontal`,defaultValue:`option1`})]})]})},G={render:()=>(0,y.jsx)(`div`,{className:`w-full max-w-md p-8`,children:(0,y.jsx)(V,{options:[{value:`basic`,label:`Basic Plan`,description:`Perfect for individuals just getting started`},{value:`pro`,label:`Pro Plan`,description:`Best for professionals and small teams`},{value:`enterprise`,label:`Enterprise Plan`,description:`Advanced features for large organizations`}],defaultValue:`basic`})})},K={render:()=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsx)(V,{options:[{value:`option1`,label:`Available Option 1`},{value:`option2`,label:`Disabled Option 2`,disabled:!0},{value:`option3`,label:`Available Option 3`},{value:`option4`,label:`Disabled Option 4`,disabled:!0}],defaultValue:`option1`})})},q={render:()=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsx)(V,{options:H,defaultValue:`option1`,disabled:!0})})},J={render:function(){let[e,t]=(0,v.useState)(`option1`);return(0,y.jsxs)(`div`,{className:`flex flex-col gap-6 p-8`,children:[(0,y.jsx)(V,{options:H,value:e,onValueChange:t}),(0,y.jsxs)(`div`,{className:`rounded border border-gray-200 bg-gray-50 p-4`,children:[(0,y.jsx)(`p`,{className:`text-sm font-medium`,children:`Current value:`}),(0,y.jsx)(`p`,{className:`mt-1 font-mono text-sm text-blue-600`,children:e})]})]})}},Y={render:function(){let[e,t]=(0,v.useState)(`card`);return(0,y.jsxs)(`div`,{className:`w-full max-w-md space-y-6 p-8`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-lg font-semibold`,children:`Payment Method`}),(0,y.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Choose your preferred payment method`})]}),(0,y.jsx)(V,{options:[{value:`card`,label:`Credit Card`,description:`Pay with Visa, Mastercard, or American Express`},{value:`paypal`,label:`PayPal`,description:`Fast and secure payment with your PayPal account`},{value:`bank`,label:`Bank Transfer`,description:`Direct bank transfer (processing may take 2-3 days)`},{value:`crypto`,label:`Cryptocurrency`,description:`Pay with Bitcoin, Ethereum, or other cryptocurrencies`,disabled:!0}],value:e,onValueChange:t}),(0,y.jsxs)(`button`,{className:`w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600`,onClick:()=>alert(`Selected: ${e}`),children:[`Continue with `,e]})]})}},X={render:function(){let[e,t]=(0,v.useState)(`daily`);return(0,y.jsxs)(`div`,{className:`w-full max-w-md space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-lg font-semibold`,children:`Notification Frequency`}),(0,y.jsx)(`p`,{className:`mt-1 text-sm text-gray-500`,children:`Choose how often you want to receive notifications`})]}),(0,y.jsx)(V,{options:[{value:`realtime`,label:`Real-time`,description:`Get notified immediately as things happen`},{value:`daily`,label:`Daily Digest`,description:`Receive a summary once per day at 9:00 AM`},{value:`weekly`,label:`Weekly Summary`,description:`Get a weekly recap every Monday morning`},{value:`never`,label:`Never`,description:`Turn off all notifications`}],value:e,onValueChange:t}),(0,y.jsxs)(`div`,{className:`flex justify-end gap-2 border-t pt-4`,children:[(0,y.jsx)(`button`,{className:`rounded border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50`,children:`Cancel`}),(0,y.jsx)(`button`,{className:`rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600`,onClick:()=>alert(`Saved: ${e}`),children:`Save Changes`})]})]})}},Z={render:function(){let[e,t]=(0,v.useState)(`pro`);return(0,y.jsxs)(`div`,{className:`w-full max-w-md space-y-6 p-8`,children:[(0,y.jsxs)(`div`,{className:`text-center`,children:[(0,y.jsx)(`h2`,{className:`text-2xl font-bold`,children:`Choose Your Plan`}),(0,y.jsx)(`p`,{className:`mt-2 text-gray-600`,children:`Select the plan that works best for you`})]}),(0,y.jsx)(V,{options:[{value:`free`,label:(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`div`,{className:`font-semibold`,children:`Free`}),(0,y.jsx)(`div`,{className:`text-lg font-bold`,children:`$0/month`})]}),description:`Basic features for up to 5 projects`},{value:`pro`,label:(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`font-semibold`,children:[`Pro`,` `,(0,y.jsx)(`span`,{className:`ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700`,children:`Popular`})]}),(0,y.jsx)(`div`,{className:`text-lg font-bold`,children:`$29/month`})]}),description:`Advanced features for unlimited projects`},{value:`enterprise`,label:(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`div`,{className:`font-semibold`,children:`Enterprise`}),(0,y.jsx)(`div`,{className:`text-lg font-bold`,children:`Custom pricing`})]}),description:`Custom solutions with dedicated support`}],value:e,onValueChange:t}),(0,y.jsxs)(`button`,{className:`w-full rounded bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600`,onClick:()=>alert(`Selected plan: ${e}`),children:[`Continue with `,e.charAt(0).toUpperCase()+e.slice(1),` Plan`]})]})}},Q={render:()=>{let e=[{value:`red`,label:`Red Theme`},{value:`blue`,label:`Blue Theme`},{value:`green`,label:`Green Theme`}];return(0,y.jsxs)(`div`,{className:`flex flex-col gap-8 p-8`,children:[(0,y.jsxs)(`div`,{className:`space-y-3`,children:[(0,y.jsx)(`h3`,{className:`text-sm font-semibold text-gray-600`,children:`Custom Item Styling`}),(0,y.jsx)(V,{options:e,defaultValue:`red`,itemClassName:`rounded border border-gray-200 bg-gray-50 px-4 py-3 hover:bg-gray-100`})]}),(0,y.jsxs)(`div`,{className:`space-y-3`,children:[(0,y.jsx)(`h3`,{className:`text-sm font-semibold text-gray-600`,children:`Custom Label Styling`}),(0,y.jsx)(V,{options:e,defaultValue:`blue`,labelClassName:`font-semibold text-blue-600`})]})]})}},$={render:()=>(0,y.jsx)(`div`,{className:`w-full max-w-md p-8`,children:(0,y.jsx)(V,{options:[{value:`option1`,label:`Option with a very long label that might wrap to multiple lines`,description:`This is a description that is also quite long and provides additional context about this option that might span multiple lines in the UI`},{value:`option2`,label:`Another long option label`,description:`Another lengthy description to demonstrate how the component handles text wrapping`},{value:`option3`,label:`Short`,description:`Brief description`}],defaultValue:`option1`})})};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'option1'
  },
  render: args => <div className="p-8">
      <RadioGroup {...args} />
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 p-8">
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-600">
          Vertical (Default)
        </h3>
        <RadioGroup options={basicOptions} defaultValue="option1" />
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-600">Horizontal</h3>
        <RadioGroup options={basicOptions} orientation="horizontal" defaultValue="option1" />
      </div>
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options: RadioOption[] = [{
      value: 'basic',
      label: 'Basic Plan',
      description: 'Perfect for individuals just getting started'
    }, {
      value: 'pro',
      label: 'Pro Plan',
      description: 'Best for professionals and small teams'
    }, {
      value: 'enterprise',
      label: 'Enterprise Plan',
      description: 'Advanced features for large organizations'
    }];
    return <div className="w-full max-w-md p-8">
        <RadioGroup options={options} defaultValue="basic" />
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options: RadioOption[] = [{
      value: 'option1',
      label: 'Available Option 1'
    }, {
      value: 'option2',
      label: 'Disabled Option 2',
      disabled: true
    }, {
      value: 'option3',
      label: 'Available Option 3'
    }, {
      value: 'option4',
      label: 'Disabled Option 4',
      disabled: true
    }];
    return <div className="p-8">
        <RadioGroup options={options} defaultValue="option1" />
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <RadioGroup options={basicOptions} defaultValue="option1" disabled />
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function ControlledRadioGroup() {
    const [value, setValue] = useState('option1');
    return <div className="flex flex-col gap-6 p-8">
        <RadioGroup options={basicOptions} value={value} onValueChange={setValue} />

        <div className="rounded border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium">Current value:</p>
          <p className="mt-1 font-mono text-sm text-blue-600">{value}</p>
        </div>
      </div>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function PaymentMethodsExample() {
    const [method, setMethod] = useState('card');
    const options: RadioOption[] = [{
      value: 'card',
      label: 'Credit Card',
      description: 'Pay with Visa, Mastercard, or American Express'
    }, {
      value: 'paypal',
      label: 'PayPal',
      description: 'Fast and secure payment with your PayPal account'
    }, {
      value: 'bank',
      label: 'Bank Transfer',
      description: 'Direct bank transfer (processing may take 2-3 days)'
    }, {
      value: 'crypto',
      label: 'Cryptocurrency',
      description: 'Pay with Bitcoin, Ethereum, or other cryptocurrencies',
      disabled: true
    }];
    return <div className="w-full max-w-md space-y-6 p-8">
        <div>
          <h3 className="text-lg font-semibold">Payment Method</h3>
          <p className="text-sm text-gray-500">
            Choose your preferred payment method
          </p>
        </div>

        <RadioGroup options={options} value={method} onValueChange={setMethod} />

        <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" onClick={() => alert(\`Selected: \${method}\`)}>
          Continue with {method}
        </button>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function NotificationSettingsExample() {
    const [frequency, setFrequency] = useState('daily');
    const options: RadioOption[] = [{
      value: 'realtime',
      label: 'Real-time',
      description: 'Get notified immediately as things happen'
    }, {
      value: 'daily',
      label: 'Daily Digest',
      description: 'Receive a summary once per day at 9:00 AM'
    }, {
      value: 'weekly',
      label: 'Weekly Summary',
      description: 'Get a weekly recap every Monday morning'
    }, {
      value: 'never',
      label: 'Never',
      description: 'Turn off all notifications'
    }];
    return <div className="w-full max-w-md space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold">Notification Frequency</h3>
          <p className="mt-1 text-sm text-gray-500">
            Choose how often you want to receive notifications
          </p>
        </div>

        <RadioGroup options={options} value={frequency} onValueChange={setFrequency} />

        <div className="flex justify-end gap-2 border-t pt-4">
          <button className="rounded border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
            Cancel
          </button>
          <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600" onClick={() => alert(\`Saved: \${frequency}\`)}>
            Save Changes
          </button>
        </div>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function PlanSelectionExample() {
    const [plan, setPlan] = useState('pro');
    const options: RadioOption[] = [{
      value: 'free',
      label: <div>
            <div className="font-semibold">Free</div>
            <div className="text-lg font-bold">$0/month</div>
          </div>,
      description: 'Basic features for up to 5 projects'
    }, {
      value: 'pro',
      label: <div>
            <div className="font-semibold">
              Pro{' '}
              <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Popular
              </span>
            </div>
            <div className="text-lg font-bold">$29/month</div>
          </div>,
      description: 'Advanced features for unlimited projects'
    }, {
      value: 'enterprise',
      label: <div>
            <div className="font-semibold">Enterprise</div>
            <div className="text-lg font-bold">Custom pricing</div>
          </div>,
      description: 'Custom solutions with dedicated support'
    }];
    return <div className="w-full max-w-md space-y-6 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Choose Your Plan</h2>
          <p className="mt-2 text-gray-600">
            Select the plan that works best for you
          </p>
        </div>

        <RadioGroup options={options} value={plan} onValueChange={setPlan} />

        <button className="w-full rounded bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600" onClick={() => alert(\`Selected plan: \${plan}\`)}>
          Continue with {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
        </button>
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options: RadioOption[] = [{
      value: 'red',
      label: 'Red Theme'
    }, {
      value: 'blue',
      label: 'Blue Theme'
    }, {
      value: 'green',
      label: 'Green Theme'
    }];
    return <div className="flex flex-col gap-8 p-8">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-600">
            Custom Item Styling
          </h3>
          <RadioGroup options={options} defaultValue="red" itemClassName="rounded border border-gray-200 bg-gray-50 px-4 py-3 hover:bg-gray-100" />
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-600">
            Custom Label Styling
          </h3>
          <RadioGroup options={options} defaultValue="blue" labelClassName="font-semibold text-blue-600" />
        </div>
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options: RadioOption[] = [{
      value: 'option1',
      label: 'Option with a very long label that might wrap to multiple lines',
      description: 'This is a description that is also quite long and provides additional context about this option that might span multiple lines in the UI'
    }, {
      value: 'option2',
      label: 'Another long option label',
      description: 'Another lengthy description to demonstrate how the component handles text wrapping'
    }, {
      value: 'option3',
      label: 'Short',
      description: 'Brief description'
    }];
    return <div className="w-full max-w-md p-8">
        <RadioGroup options={options} defaultValue="option1" />
      </div>;
  }
}`,...$.parameters?.docs?.source}}};const ze=[`Default`,`Orientations`,`WithDescriptions`,`WithDisabledOptions`,`DisabledGroup`,`Controlled`,`PaymentMethods`,`NotificationSettings`,`PlanSelection`,`CustomStyling`,`LongOptions`];export{J as Controlled,Q as CustomStyling,U as Default,q as DisabledGroup,$ as LongOptions,X as NotificationSettings,W as Orientations,Y as PaymentMethods,Z as PlanSelection,G as WithDescriptions,K as WithDisabledOptions,ze as __namedExportsOrder,Re as default};