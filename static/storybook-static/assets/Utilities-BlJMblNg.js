import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-DaCJkL1_.js";import{n as t}from"./lib-YcZb2VAG.js";import"./dist-CFGSP5nq.js";import"./components-DuHF7vKt.js";import{t as n}from"./jsx-runtime-dEleVA92.js";import"./react-dom-D8_QO-k6.js";import{l as r,n as i,u as a}from"./blocks-DHULdlxv.js";import"./constants-B9FzSSCD.js";import"./IconDuoAgent-Ddy2gPhW.js";import{r as o}from"./IconDuoAgent.stories-B2DrhrJb.js";var s=e(n()),c=`@layer _utilities {
  /* 双色图标，默认单色，悬浮时变双色 */
  ._icon-hover-duo-color:hover
    [data-hover='green']:not([data-render='stroke']) {
    fill: var(--icon-fill-active-green);
  }

  ._icon-hover-duo-color:hover
    [data-hover='black']:not([data-render='stroke']) {
    fill: var(--icon-fill-active-black);
  }

  ._icon-hover-duo-color:hover [data-hover='green'][data-render='stroke'] {
    stroke: var(--icon-fill-active-green);
  }

  ._icon-hover-duo-color:hover [data-hover='black'][data-render='stroke'] {
    stroke: var(--icon-fill-active-black);
  }

  /* 覆盖 tailwind 的文本大小 */
  .text-xs {
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
  }

  .text-sm {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
  }

  .text-base {
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
  }

  .text-lg {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-lg);
  }

  .text-xl {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
}
`;function l(e){let n={h1:`h1`,h2:`h2`,...t(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`STYLES/Utilities`}),`
`,(0,s.jsx)(n.h1,{id:`utilities`,children:`Utilities`}),`
`,(0,s.jsx)(n.h2,{id:`_icon-hover-duo-color-双色图标悬浮`,children:`._icon-hover-duo-color 双色图标悬浮`}),`
`,(0,s.jsx)(i,{of:o,sourceState:`shown`,withToolbar:`true`}),`
`,(0,s.jsx)(a,{type:`code`,language:`css`,code:c})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}export{u as default};