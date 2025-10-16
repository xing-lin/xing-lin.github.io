import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-BotLAijE.js";import{n as t}from"./lib-SGix61sF.js";import"./dist-CkV_NFcp.js";import"./components-CY8motSG.js";import{t as n}from"./jsx-runtime-CT_qHfZX.js";import"./react-dom-CioLpL4i.js";import{l as r,o as i,s as a}from"./blocks-9oz0mhmQ.js";import"./constants-CePA40cO.js";import{t as o}from"./IconCopy-Cn1fc7dz.js";import{t as s}from"./IconDecorHot-DiCUYu2Z.js";import{t as c}from"./IconDecorMake-hdNoFt_3.js";import{t as l}from"./IconDislike-DkNSoPnA.js";import{t as u}from"./IconLike-DGkOOy3N.js";import{t as d}from"./IconMenuAgent-Dt2L2dzP.js";import{t as f}from"./IconMenuCredential-DaFPIqvL.js";import{t as p}from"./IconMenuDashboard-B9lar8Mh.js";import{t as m}from"./IconMenuHome-DlOs_P1l.js";import{t as h}from"./IconMenuIntegration-B9F1BRW_.js";import{t as g}from"./IconMenuLog-326CmE6Q.js";import{t as _}from"./IconMenuPlan-C0y8vcdb.js";import{t as v}from"./IconMenuTemplate-CGv2kabT.js";import{t as y}from"./IconMenuWorkflow-DyAbhS3i.js";var b=e(n());function x(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{title:`Iconography`}),`
`,(0,b.jsx)(n.h1,{id:`iconography`,children:`ICONOGRAPHY`}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsxs)(n.h2,{id:`icons-菜单图标组件名前缀-icon-iconcopy-`,children:[`Icons 菜单图标，组件名前缀 Icon: `,(0,b.jsx)(n.code,{children:`<IconCopy />`})]}),`
`,(0,b.jsxs)(i,{children:[(0,b.jsx)(a,{name:`Copy`,children:(0,b.jsx)(o,{})}),(0,b.jsx)(a,{name:`Like`,children:(0,b.jsx)(u,{})}),(0,b.jsx)(a,{name:`Dislike`,children:(0,b.jsx)(l,{})})]}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsxs)(n.h2,{id:`decors-菜单图标组件名前缀-icondecor-icondecorhot-`,children:[`Decors 菜单图标，组件名前缀 IconDecor: `,(0,b.jsx)(n.code,{children:`<IconDecorHot />`})]}),`
`,(0,b.jsxs)(i,{children:[(0,b.jsx)(a,{name:`Make`,children:(0,b.jsx)(c,{})}),(0,b.jsx)(a,{name:`Hot`,children:(0,b.jsx)(s,{})})]}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsxs)(n.h2,{id:`menus-菜单图标组件名前缀-iconmenu-iconmenuagent-`,children:[`Menus 菜单图标，组件名前缀 IconMenu: `,(0,b.jsx)(n.code,{children:`<IconMenuAgent />`})]}),`
`,(0,b.jsxs)(i,{children:[(0,b.jsx)(a,{name:`Agent`,children:(0,b.jsx)(d,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Credential`,children:(0,b.jsx)(f,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Dashboard`,children:(0,b.jsx)(p,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Home`,children:(0,b.jsx)(m,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Integration`,children:(0,b.jsx)(h,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Log`,children:(0,b.jsx)(g,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Plan`,children:(0,b.jsx)(_,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Template`,children:(0,b.jsx)(v,{className:`_icon-hover-dual-color`})}),(0,b.jsx)(a,{name:`Workflow`,children:(0,b.jsx)(y,{className:`_icon-hover-dual-color`})})]}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(n.h2,{id:`注意事项`,children:`注意事项`}),`
`,(0,b.jsxs)(n.ol,{children:[`
`,(0,b.jsxs)(n.li,{children:[`
`,(0,b.jsxs)(n.p,{children:[`图标默认作为无语义的装饰性图标 `,(0,b.jsx)(n.code,{children:`aria-hidden="true"`}),` ，没有用 `,(0,b.jsx)(n.code,{children:`React.forwardRef`}),` 来传入 `,(0,b.jsx)(n.code,{children:`ref`}),`, 如果需要点击事件，需要用 `,(0,b.jsx)(n.code,{children:`<button>`}),` 包裹，如果不包含其他文本 button 要添加 `,(0,b.jsx)(n.code,{children:`aria-label`}),`。`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-tsx`,children:`// Good
<button
  type="button"
  aria-label="Copy"
  onClick={onClick}
>
  <IconCopy />
</button>

// Bad
<IconCopy onClick={onClick} />
`})}),`
`]}),`
`,(0,b.jsxs)(n.li,{children:[`
`,(0,b.jsxs)(n.p,{children:[`Icon 中的大小跟颜色，`,(0,b.jsx)(n.strong,{children:`可通过设置父级元素来传递`}),`, `,(0,b.jsx)(n.code,{children:`font-size`}),` 和 `,(0,b.jsx)(n.code,{children:`color`}),`。`]}),`
`]}),`
`,(0,b.jsxs)(n.li,{children:[`
`,(0,b.jsxs)(n.p,{children:[`双色 Icon 目前是黑色 + 绿色，hover 可添加 `,(0,b.jsx)(n.code,{children:`._icon-hover-dual-color`}),` 达到悬浮时改色的效果。`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-tsx`,children:`<button className="_icon-hover-dual-color">
  <IconMenuAgent {...args} />
</button>
`})}),`
`]}),`
`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{})})]})}function S(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(x,{...e})}):x(e)}export{S as default};