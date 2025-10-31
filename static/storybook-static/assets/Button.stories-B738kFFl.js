import{c as e,r as t}from"./iframe-Qo8R4zdB.js";import{t as n}from"./jsx-runtime-Rj3MkSdk.js";import"./constants-B9FzSSCD.js";import{t as ee}from"./IconLoading-D9uOCIHD.js";import{t as te}from"./cn-rn2WGb-U.js";import{t as r}from"./IconDelete-VfDyVe16.js";import{t as i}from"./IconPlus-CbOWYpLc.js";var a=e(t()),o={"btn-base":`_btn-base_1gqlt_8`,"btn-default":`_btn-default_1gqlt_50`,"btn-dashed":`_btn-dashed_1gqlt_66`,"btn-primary":`_btn-primary_1gqlt_83`,"btn-text":`_btn-text_1gqlt_108`,"btn-link":`_btn-link_1gqlt_124`,"btn-size-small":`_btn-size-small_1gqlt_139`,"btn-size-middle":`_btn-size-middle_1gqlt_147`,"btn-size-large":`_btn-size-large_1gqlt_155`,"btn-shape-default":`_btn-shape-default_1gqlt_164`,"btn-shape-round":`_btn-shape-round_1gqlt_169`,"btn-shape-circle":`_btn-shape-circle_1gqlt_174`,"btn-only-icon":`_btn-only-icon_1gqlt_180`,"btn-danger":`_btn-danger_1gqlt_206`,"btn-ghost":`_btn-ghost_1gqlt_264`,"btn-loading":`_btn-loading_1gqlt_301`,"btn-block":`_btn-block_1gqlt_346`},s=e(n()),c=(0,a.forwardRef)(({type:e=`default`,size:t=`middle`,shape:n=`default`,danger:r=!1,ghost:i=!1,loading:a=!1,disabled:c=!1,children:l,onClick:u,icon:d,iconPosition:f=`start`,block:p=!1,className:m,...h},g)=>{let _=!l&&d,v=e===`text`||e===`link`,y=e=>{if(a||c){e.preventDefault();return}u?.(e)},b=te(o[`btn-base`],{[o[`btn-default`]]:e===`default`,[o[`btn-primary`]]:e===`primary`,[o[`btn-dashed`]]:e===`dashed`,[o[`btn-text`]]:e===`text`,[o[`btn-link`]]:e===`link`},{[o[`btn-size-small`]]:t===`small`,[o[`btn-size-middle`]]:t===`middle`,[o[`btn-size-large`]]:t===`large`},{[o[`btn-shape-default`]]:!v&&n===`default`,[o[`btn-shape-round`]]:!v&&n===`round`,[o[`btn-shape-circle`]]:!v&&n===`circle`},_&&o[`btn-only-icon`],r&&o[`btn-danger`],i&&!v&&o[`btn-ghost`],p&&!v&&o[`btn-block`],a&&o[`btn-loading`],m),x=a?(0,s.jsx)(ee,{}):d;return(0,s.jsx)(`button`,{ref:g,type:`button`,className:b,disabled:c,onClick:y,...h,children:f===`start`?(0,s.jsxs)(s.Fragment,{children:[x,l]}):(0,s.jsxs)(s.Fragment,{children:[l,x]})})});c.displayName=`Button`,c.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{type:{required:!1,tsType:{name:`union`,raw:`'primary' | 'default' | 'dashed' | 'text' | 'link'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'default'`},{name:`literal`,value:`'dashed'`},{name:`literal`,value:`'text'`},{name:`literal`,value:`'link'`}]},description:`按钮类型`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'middle' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'middle'`},{name:`literal`,value:`'large'`}]},description:`按钮尺寸, 默认 middle`,defaultValue:{value:`'middle'`,computed:!1}},shape:{required:!1,tsType:{name:`union`,raw:`'default' | 'circle' | 'round'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'circle'`},{name:`literal`,value:`'round'`}]},description:`按钮形状, 默认 default`,defaultValue:{value:`'default'`,computed:!1}},danger:{required:!1,tsType:{name:`boolean`},description:`危险按钮`,defaultValue:{value:`false`,computed:!1}},ghost:{required:!1,tsType:{name:`boolean`},description:`幽灵按钮`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`加载状态`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`禁用状态`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`按钮内容`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`点击事件`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`按钮图标`},iconPosition:{required:!1,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:`图标位置`,defaultValue:{value:`'start'`,computed:!1}},block:{required:!1,tsType:{name:`boolean`},description:`按钮宽度`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]};var l={title:`Components/Button`,component:c,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`primary`,`default`,`dashed`,`text`,`link`]},size:{control:`select`,options:[`small`,`middle`,`large`]},shape:{control:`select`,options:[`default`,`circle`,`round`]},danger:{control:`boolean`},ghost:{control:`boolean`},loading:{control:`boolean`},disabled:{control:`boolean`},block:{control:`boolean`},iconPosition:{control:`select`,options:[`start`,`end`]}}};const u={args:{type:`primary`,children:`Primary Button`,size:`middle`}},d={args:{type:`primary`,children:`Primary Button`,size:`middle`,loading:!0}},f={args:{type:`primary`,children:`Primary Button`,size:`middle`,icon:(0,s.jsx)(i,{})}},p={args:{type:`primary`,children:`Primary Button`,size:`middle`,icon:(0,s.jsx)(i,{}),loading:!0}},m={args:{type:`primary`,size:`middle`,icon:(0,s.jsx)(i,{}),"aria-label":`Primary Icon Only`}},h={args:{type:`primary`,children:`Primary Button`,size:`middle`,disabled:!0,icon:(0,s.jsx)(i,{})}},g={args:{type:`primary`,children:`Primary Button`,size:`middle`,danger:!0,icon:(0,s.jsx)(r,{})}},_={args:{type:`primary`,children:`Primary Button`,size:`middle`,ghost:!0,icon:(0,s.jsx)(i,{})}},v={args:{children:`Button`,type:`default`}},y={args:{children:`Button`,type:`default`,loading:!0}},b={args:{children:`Button`,type:`default`,icon:(0,s.jsx)(i,{})}},x={args:{children:`Button`,type:`default`,icon:(0,s.jsx)(i,{}),loading:!0}},S={args:{type:`default`,icon:(0,s.jsx)(i,{}),"aria-label":`Default Icon Only`}},C={args:{children:`Button`,type:`default`,disabled:!0,icon:(0,s.jsx)(i,{})}},w={args:{children:`Button`,type:`default`,danger:!0,icon:(0,s.jsx)(r,{})}},T={args:{children:`Button`,type:`default`,ghost:!0,icon:(0,s.jsx)(i,{})},render:e=>(0,s.jsx)(`div`,{className:`bg-[#bec8c8] p-4`,children:(0,s.jsx)(c,{...e})})},E={args:{type:`dashed`,children:`Dashed Button`}},D={args:{type:`dashed`,children:`Dashed Button`,loading:!0}},O={args:{type:`dashed`,children:`Dashed Button`,icon:(0,s.jsx)(i,{})}},k={args:{type:`dashed`,children:`Dashed Button`,icon:(0,s.jsx)(i,{}),loading:!0}},A={args:{type:`dashed`,icon:(0,s.jsx)(i,{}),"aria-label":`Dashed Icon Only`}},j={args:{type:`dashed`,children:`Dashed Button`,disabled:!0,icon:(0,s.jsx)(i,{})}},M={args:{type:`dashed`,children:`Dashed Button`,danger:!0,icon:(0,s.jsx)(r,{})}},N={args:{children:`Dashed Button`,type:`dashed`,ghost:!0,icon:(0,s.jsx)(i,{})},render:e=>(0,s.jsx)(`div`,{className:`bg-[#bec8c8] p-4`,children:(0,s.jsx)(c,{...e})})},P={args:{type:`text`,children:`Text Button`}},F={args:{type:`text`,children:`Text Button`,loading:!0}},I={args:{type:`text`,children:`Text Button`,icon:(0,s.jsx)(i,{})}},L={args:{type:`text`,children:`Text Button`,icon:(0,s.jsx)(i,{}),loading:!0}},R={args:{type:`text`,icon:(0,s.jsx)(i,{}),"aria-label":`Text Icon Only`}},z={args:{type:`text`,children:`Text Button`,disabled:!0,icon:(0,s.jsx)(i,{})}},B={args:{type:`text`,children:`Text Button`,danger:!0,icon:(0,s.jsx)(r,{})}},V={args:{type:`link`,children:`Link Button`}},H={args:{type:`link`,children:`Link Button`,loading:!0}},U={args:{type:`link`,children:`Link Button`,icon:(0,s.jsx)(i,{})}},W={args:{type:`link`,children:`Link Button`,icon:(0,s.jsx)(i,{}),loading:!0}},G={args:{type:`link`,icon:(0,s.jsx)(i,{}),"aria-label":`Link Icon Only`}},K={args:{type:`link`,children:`Link Button`,disabled:!0,icon:(0,s.jsx)(i,{})}},q={args:{type:`link`,children:`Link Button`,danger:!0,icon:(0,s.jsx)(r,{})}},J={args:{type:`primary`,children:`Icon at End`,icon:(0,s.jsx)(i,{}),iconPosition:`end`}},Y={args:{type:`default`,children:`Icon at Start`,icon:(0,s.jsx)(i,{}),iconPosition:`start`}},X={args:{type:`primary`,children:`Block Primary Button`,block:!0}},Z={args:{type:`default`,children:`Block Default Button`,block:!0}},Q={args:{type:`text`,children:`Block Text Button (block ignored)`,block:!0}},$={args:{type:`link`,children:`Block Link Button (block ignored)`,block:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    loading: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    icon: <IconPlus />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    icon: <IconPlus />,
    loading: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'middle',
    icon: <IconPlus />,
    'aria-label': 'Primary Icon Only'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    disabled: true,
    icon: <IconPlus />
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    danger: true,
    icon: <IconDelete />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    ghost: true,
    icon: <IconPlus />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    type: 'default'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    type: 'default',
    loading: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    type: 'default',
    icon: <IconPlus />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    type: 'default',
    icon: <IconPlus />,
    loading: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    icon: <IconPlus />,
    'aria-label': 'Default Icon Only'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    type: 'default',
    disabled: true,
    icon: <IconPlus />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    type: 'default',
    danger: true,
    icon: <IconDelete />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    type: 'default',
    ghost: true,
    icon: <IconPlus />
  },
  render: args => <div className="bg-[#bec8c8] p-4">
      <Button {...args} />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Dashed Button'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    loading: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    icon: <IconPlus />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    icon: <IconPlus />,
    loading: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    icon: <IconPlus />,
    'aria-label': 'Dashed Icon Only'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    disabled: true,
    icon: <IconPlus />
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    danger: true,
    icon: <IconDelete />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Dashed Button',
    type: 'dashed',
    ghost: true,
    icon: <IconPlus />
  },
  render: args => <div className="bg-[#bec8c8] p-4">
      <Button {...args} />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text Button'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text Button',
    loading: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text Button',
    icon: <IconPlus />
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text Button',
    icon: <IconPlus />,
    loading: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    icon: <IconPlus />,
    'aria-label': 'Text Icon Only'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text Button',
    disabled: true,
    icon: <IconPlus />
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text Button',
    danger: true,
    icon: <IconDelete />
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link Button'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link Button',
    loading: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link Button',
    icon: <IconPlus />
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link Button',
    icon: <IconPlus />,
    loading: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    icon: <IconPlus />,
    'aria-label': 'Link Icon Only'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link Button',
    disabled: true,
    icon: <IconPlus />
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link Button',
    danger: true,
    icon: <IconDelete />
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Icon at End',
    icon: <IconPlus />,
    iconPosition: 'end'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    children: 'Icon at Start',
    icon: <IconPlus />,
    iconPosition: 'start'
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Block Primary Button',
    block: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    children: 'Block Default Button',
    block: true
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Block Text Button (block ignored)',
    block: true
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Block Link Button (block ignored)',
    block: true
  }
}`,...$.parameters?.docs?.source}}};const ne=`Primary.PrimaryLoading.PrimaryIcon.PrimaryIconLoading.PrimaryIconOnly.PrimaryDisabled.PrimaryDanger.PrimaryGhost.Default.DefaultLoading.DefaultIcon.DefaultIconLoading.DefaultIconOnly.DefaultDisabled.DefaultDanger.DefaultGhost.Dashed.DashedLoading.DashedIcon.DashedIconLoading.DashedIconOnly.DashedDisabled.DashedDanger.DashedGhost.Text.TextLoading.TextIcon.TextIconLoading.TextIconOnly.TextDisabled.TextDanger.Link.LinkLoading.LinkIcon.LinkIconLoading.LinkIconOnly.LinkDisabled.LinkDanger.IconPositionEnd.IconPositionStart.BlockPrimary.BlockDefault.BlockText.BlockLink`.split(`.`);export{Z as BlockDefault,$ as BlockLink,X as BlockPrimary,Q as BlockText,E as Dashed,M as DashedDanger,j as DashedDisabled,N as DashedGhost,O as DashedIcon,k as DashedIconLoading,A as DashedIconOnly,D as DashedLoading,v as Default,w as DefaultDanger,C as DefaultDisabled,T as DefaultGhost,b as DefaultIcon,x as DefaultIconLoading,S as DefaultIconOnly,y as DefaultLoading,J as IconPositionEnd,Y as IconPositionStart,V as Link,q as LinkDanger,K as LinkDisabled,U as LinkIcon,W as LinkIconLoading,G as LinkIconOnly,H as LinkLoading,u as Primary,g as PrimaryDanger,h as PrimaryDisabled,_ as PrimaryGhost,f as PrimaryIcon,p as PrimaryIconLoading,m as PrimaryIconOnly,d as PrimaryLoading,P as Text,B as TextDanger,z as TextDisabled,I as TextIcon,L as TextIconLoading,R as TextIconOnly,F as TextLoading,ne as __namedExportsOrder,l as default};