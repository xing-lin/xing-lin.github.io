import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-CQovhTru.js";import{n as t}from"./lib-DTsIiF0a.js";import"./dist-DJis8AQR.js";import"./components-DSmytwf4.js";import{t as n}from"./jsx-runtime-Dcu3LAxN.js";import"./react-dom-BSEuHqR6.js";import{l as r,n as i,u as a}from"./blocks-CYoPisyO.js";import"./constants-B9FzSSCD.js";import"./IconSync-DdGLIHFI.js";import{r as o}from"./IconSync.stories-Be9ZFBH0.js";var s=e(n()),c=`@layer _animations {
  /* 旋转动画，用于 loading 旋转图标 */
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
}
`;function l(e){let n={h1:`h1`,h2:`h2`,...t(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`STYLES/Animations`}),`
`,(0,s.jsx)(n.h1,{id:`animations`,children:`Animations`}),`
`,(0,s.jsx)(n.h2,{id:`_spinner-旋转`,children:`._spinner 旋转`}),`
`,(0,s.jsx)(i,{of:o,sourceState:`shown`,withToolbar:`true`}),`
`,(0,s.jsx)(a,{type:`code`,language:`css`,code:c})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}export{u as default};