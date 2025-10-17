import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-C0Y03HFg.js";import{n as t}from"./lib-f7HR_U8Y.js";import"./dist-BfQRW_hf.js";import"./components-DY6v2W1d.js";import{t as n}from"./jsx-runtime-B2wsdUJ8.js";import"./react-dom-qaNN2vVO.js";import{l as r,n as i,u as a}from"./blocks-toiDd70L.js";import"./constants-CePA40cO.js";import"./IconDuoAgent-DapKdwhu.js";import{r as o}from"./IconDuoAgent.stories-Cc7N7VP9.js";var s=e(n()),c=`@layer _utilities {
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
}
`;function l(e){let n={h1:`h1`,h2:`h2`,...t(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`STYLES/Utilities`}),`
`,(0,s.jsx)(n.h1,{id:`utilities`,children:`Utilities`}),`
`,(0,s.jsx)(n.h2,{id:`_icon-hover-duo-color-双色图标悬浮`,children:`._icon-hover-duo-color 双色图标悬浮`}),`
`,(0,s.jsx)(i,{of:o,sourceState:`shown`,withToolbar:`true`}),`
`,(0,s.jsx)(a,{type:`code`,language:`css`,code:c})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}export{u as default};