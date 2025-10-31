import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-Qo8R4zdB.js";import{n as t}from"./lib-BAe0M7Ea.js";import"./dist-lxHgk6Rr.js";import"./components-BtRP4igQ.js";import{t as n}from"./jsx-runtime-Rj3MkSdk.js";import"./react-dom-B3fnKAGo.js";import{l as r,n as i,u as a}from"./blocks-Cbc1KUF7.js";import"./constants-B9FzSSCD.js";import"./IconDuoAgent-C7pbwV53.js";import{r as o}from"./IconDuoAgent.stories-DzdmmpxU.js";var s=e(n()),c=`/* 双色图标，默认单色，悬浮时变双色 */
._icon-hover-duo-color:hover [data-hover='green']:not([data-render='stroke']) {
  fill: var(--icon-fill-active-green);
}

._icon-hover-duo-color:hover [data-hover='black']:not([data-render='stroke']) {
  fill: var(--icon-fill-active-black);
}

._icon-hover-duo-color:hover [data-hover='green'][data-render='stroke'] {
  stroke: var(--icon-fill-active-green);
}

._icon-hover-duo-color:hover [data-hover='black'][data-render='stroke'] {
  stroke: var(--icon-fill-active-black);
}

/* 覆盖 tailwind 的文本大小 */
._text-xs {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
}

._text-sm {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
}

._text-base {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}

._text-lg {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}

._text-xl {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-xl);
}
`;function l(e){let n={h1:`h1`,h2:`h2`,...t(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Styles/Utilities`}),`
`,(0,s.jsx)(n.h1,{id:`utilities`,children:`Utilities`}),`
`,(0,s.jsx)(n.h2,{id:`_icon-hover-duo-color-双色图标悬浮`,children:`._icon-hover-duo-color 双色图标悬浮`}),`
`,(0,s.jsx)(i,{of:o,sourceState:`shown`,withToolbar:`true`}),`
`,(0,s.jsx)(a,{type:`code`,language:`css`,code:c})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}export{u as default};