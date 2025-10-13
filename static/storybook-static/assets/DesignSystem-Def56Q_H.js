import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-CyDcZOy1.js";import{n as t}from"./lib-DOqGwExO.js";import"./dist-CD_tXwdz.js";import"./components-VW5Ed42i.js";import{t as n}from"./jsx-runtime-DiQi_cXu.js";import"./react-dom-DiwZ5HZs.js";import{c as r}from"./blocks-S4X3QPYk.js";var i=e(n());function a(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Design System`}),`
`,(0,i.jsx)(n.h1,{id:`design-system`,children:`Design System`}),`
`,(0,i.jsx)(n.h2,{id:`colors`,children:`Colors`}),`
`,(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:`language-css`,children:`:root {
  /* 双色图标填充色 -- 黑色 */
  --icon-fill-active-black: #1a1b28;
  /* 双色图标填充色 -- 绿色 */
  --icon-fill-active-green: #18c566;
}
`})}),`
`,(0,i.jsx)(n.h2,{id:`icons`,children:`Icons`}),`
`,(0,i.jsxs)(n.ul,{children:[`
`,(0,i.jsxs)(n.li,{children:[`Icon 作为图片展示，没有用 `,(0,i.jsx)(n.code,{children:`React.forwardRef`}),` 来传入 `,(0,i.jsx)(n.code,{children:`ref`}),`，`,(0,i.jsxs)(n.strong,{children:[`如果需要点击事件，需要用 `,(0,i.jsx)(n.code,{children:`<button>`}),` 包裹，语义化更好`]})]}),`
`,(0,i.jsxs)(n.li,{children:[`Icon 中的大小跟颜色，`,(0,i.jsx)(n.strong,{children:`可通过设置父级元素来传递`}),`
`,(0,i.jsxs)(n.ul,{children:[`
`,(0,i.jsxs)(n.li,{children:[`Icon 的宽和高可通过 `,(0,i.jsx)(n.code,{children:`font-size`}),` 来控制，宽和高默认值为 `,(0,i.jsx)(n.code,{children:`1em`})]}),`
`,(0,i.jsxs)(n.li,{children:[`Icon 的颜色可通过 `,(0,i.jsx)(n.code,{children:`color`}),` 来控制，`,(0,i.jsx)(n.code,{children:`active`}),` 状态的 `,(0,i.jsx)(n.code,{children:`color`}),` 已内置，使用`,(0,i.jsx)(n.code,{children:`:root`}),` 暴露的变量`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(n.li,{children:[`双色 Icon 目前是黑色 + 绿色，使用 `,(0,i.jsx)(n.code,{children:`:root`}),` 暴露的变量`,`
`,(0,i.jsxs)(n.ul,{children:[`
`,(0,i.jsxs)(n.li,{children:[`
`,(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:`data-hover: "black" | "green"`}),` 用于元素（父容器） hover 时改变颜色`]}),`
`]}),`
`,(0,i.jsxs)(n.li,{children:[`
`,(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:`data-render: "stroke" | "fill"`}),` 用于元素（父容器） hover 时使用正确填充类型`]}),`
`]}),`
`,(0,i.jsxs)(n.li,{children:[`
`,(0,i.jsx)(n.p,{children:`Demo:`}),`
`,(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:`language-css`,children:`.icon-btn-hover:hover [data-hover='green']:not([data-render='stroke']) {
  fill: var(--icon-fill-active-green);
}

.icon-btn-hover:hover [data-hover='black']:not([data-render='stroke']) {
  fill: var(--icon-fill-active-black);
}

.icon-btn-hover:hover [data-hover='green'][data-render='stroke'] {
  stroke: var(--icon-fill-active-green);
}

.icon-btn-hover:hover [data-hover='black'][data-render='stroke'] {
  stroke: var(--icon-fill-active-black);
}
`})}),`
`,(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:`language-tsx`,children:`<button className="icon-btn-hover">
  <IconMenuAgent {...args} />
</button>
`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(`br`,{}),`
`,(0,i.jsx)(`br`,{})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};