import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-CE-Yx-oU.js";import{n as t}from"./lib-DrZ882wA.js";import"./dist-CEbCxBYM.js";import"./components-BJszWO2M.js";import{t as n}from"./jsx-runtime-D3oPosb_.js";import"./react-dom-Bg-p8WSB.js";import{l as r,n as i,u as a}from"./blocks-B86lwJa3.js";import"./constants-R_yowVgy.js";import"./IconSync-C-Hlb5NH.js";import{r as o}from"./IconSync.stories-ceubeubw.js";var s=e(n()),c=`/* 旋转动画，用于 loading 旋转图标 */
._spinner {
  /*  name | duration | easing-function | iteration-count */
  animation: spinner var(--animation-spinner-duration) linear infinite;
  /* 以中心旋转 */
  transform-origin: center;
}

@keyframes spinner {
  100% {
    transform: rotate(360deg);
  }
}
`;function l(e){let n={h1:`h1`,h2:`h2`,...t(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Styles/Animations`}),`
`,(0,s.jsx)(n.h1,{id:`animations`,children:`Animations`}),`
`,(0,s.jsx)(n.h2,{id:`_spinner-旋转`,children:`._spinner 旋转`}),`
`,(0,s.jsx)(i,{of:o,sourceState:`shown`,withToolbar:`true`}),`
`,(0,s.jsx)(a,{type:`code`,language:`css`,code:c})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}export{u as default};