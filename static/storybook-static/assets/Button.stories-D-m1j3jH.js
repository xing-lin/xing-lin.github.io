import{c as e,r as t}from"./iframe-b-eWXmfm.js";import{t as n}from"./jsx-runtime-D47hJbtN.js";import"./constants-DZPDQeDX.js";import"./utils-CXMkBYrU.js";import{t as r}from"./IconLoading-BEv0ztLP.js";import"./dist-0qattZ-u.js";import"./dist-RfjGpWzs.js";import{t as i}from"./button-CagMkQe0.js";var a=e(t()),o=e(n());function s({loading:e=!1,icon:t,iconPosition:n=`left`,disabled:a,children:s,...c}){let l=(0,o.jsx)(r,{}),u=r=>e?r===n?l:null:r===n?t:null;return(0,o.jsxs)(i,{disabled:a||e,loading:e,...c,children:[u(`left`),s,u(`right`)]})}s.__docgenInfo={description:`Button 组件

基于 shadcn/ui Button 组件，增加了 loading 状态和图标支持。

@example
\`\`\`tsx
// 基础用法
<Button>Click me</Button>

// 带 loading 状态
<Button loading>Loading...</Button>

// 带图标
<Button icon={<IconArrowRight />}>Next</Button>

// loading 时会替换图标
<Button icon={<IconArrowRight />} loading>
  Next
</Button>

// 图标在右侧
<Button icon={<IconDownload />} iconPosition="right">
  Download
</Button>
\`\`\``,methods:[],displayName:`Button`,props:{loading:{required:!1,tsType:{name:`boolean`},description:`是否显示加载状态
当为 true 时，按钮会显示加载图标并自动禁用
如果提供了 icon，loading 时会替换掉 icon`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`图标元素
可以是任何 React 元素，通常是图标组件或 SVG`},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`图标位置
@default 'left'`,defaultValue:{value:`'left'`,computed:!1}}},composes:[`Omit`]};var c={title:`Components/Client/Button`,component:s,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`destructive`,`outline`,`secondary`,`ghost`,`link`],description:`按钮的视觉样式变体`},size:{control:`select`,options:[`xs`,`sm`,`default`,`lg`,`icon`,`icon-sm`,`icon-lg`],description:`按钮的尺寸`},loading:{control:`boolean`,description:`是否显示加载状态`},disabled:{control:`boolean`,description:`是否禁用按钮`},iconPosition:{control:`select`,options:[`left`,`right`],description:`图标位置`}}};const l={args:{children:`Click me`}},u={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,o.jsx)(s,{variant:`default`,children:`Default`}),(0,o.jsx)(s,{variant:`destructive`,children:`Destructive`}),(0,o.jsx)(s,{variant:`outline`,children:`Outline`}),(0,o.jsx)(s,{variant:`secondary`,children:`Secondary`}),(0,o.jsx)(s,{variant:`ghost`,children:`Ghost`}),(0,o.jsx)(s,{variant:`link`,children:`Link`})]})},d={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,o.jsx)(s,{size:`xs`,children:`Extra Small`}),(0,o.jsx)(s,{size:`sm`,children:`Small`}),(0,o.jsx)(s,{size:`default`,children:`Default`}),(0,o.jsx)(s,{size:`lg`,children:`Large`})]})},f={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,o.jsx)(s,{loading:!0,children:`Loading...`}),(0,o.jsx)(s,{variant:`outline`,loading:!0,children:`Loading Outline`}),(0,o.jsx)(s,{variant:`destructive`,loading:!0,children:`Loading Destructive`}),(0,o.jsx)(s,{size:`lg`,loading:!0,children:`Large Loading`})]})},p={render:()=>{let[e,t]=a.useState(!1);return(0,o.jsxs)(`div`,{className:`space-y-4`,children:[(0,o.jsx)(s,{loading:e,onClick:()=>{t(!0),setTimeout(()=>{t(!1)},2e3)},children:e?`Submitting...`:`Submit`}),(0,o.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`点击按钮查看 loading 状态（2秒后自动恢复）`})]})}},m={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,o.jsx)(s,{disabled:!0,children:`Disabled`}),(0,o.jsx)(s,{variant:`outline`,disabled:!0,children:`Disabled Outline`}),(0,o.jsx)(s,{variant:`destructive`,disabled:!0,children:`Disabled Destructive`}),(0,o.jsx)(s,{loading:!0,disabled:!0,children:`Loading & Disabled`})]})},h={render:()=>{let e=(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,o.jsx)(`path`,{d:`M5 12h14`}),(0,o.jsx)(`path`,{d:`M12 5l7 7-7 7`})]});return(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,o.jsx)(s,{icon:e,children:`Next`}),(0,o.jsx)(s,{variant:`outline`,icon:(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M19 21l-7-7-7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z`})}),children:`Save`}),(0,o.jsx)(s,{icon:e,loading:!0,children:`Loading with Icon`})]})}},g={render:()=>{let e=(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,o.jsx)(`path`,{d:`M5 12h14`}),(0,o.jsx)(`path`,{d:`M12 5l7 7-7 7`})]}),t=(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,o.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,o.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,o.jsx)(`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`})]});return(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,o.jsx)(s,{icon:e,iconPosition:`left`,children:`Icon Left`}),(0,o.jsx)(s,{icon:t,iconPosition:`right`,children:`Icon Right`}),(0,o.jsx)(s,{icon:e,iconPosition:`left`,loading:!0,children:`Loading (Icon Left)`}),(0,o.jsx)(s,{icon:t,iconPosition:`right`,loading:!0,children:`Loading (Icon Right)`})]})}},_={render:()=>{let e=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z`})}),t=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z`})});return(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,o.jsx)(s,{size:`icon-sm`,icon:e}),(0,o.jsx)(s,{size:`icon`,icon:t}),(0,o.jsx)(s,{size:`icon-lg`,icon:(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z`})})}),(0,o.jsx)(s,{size:`icon`,icon:t,loading:!0})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me'
  }
}`,...l.parameters?.docs?.source},description:{story:`## 默认按钮`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...u.parameters?.docs?.source},description:{story:`## 不同变体`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`## 不同尺寸（包含 xs）`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button loading>Loading...</Button>
      <Button variant="outline" loading>
        Loading Outline
      </Button>
      <Button variant="destructive" loading>
        Loading Destructive
      </Button>
      <Button size="lg" loading>
        Large Loading
      </Button>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`## Loading 状态`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <div className="space-y-4">
        <Button loading={loading} onClick={handleClick}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
        <p className="text-muted-foreground text-sm">
          点击按钮查看 loading 状态（2秒后自动恢复）
        </p>
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`## 交互式 Loading`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
      <Button variant="destructive" disabled>
        Disabled Destructive
      </Button>
      <Button loading disabled>
        Loading & Disabled
      </Button>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`## 禁用状态`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ArrowRightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>;
    const SaveIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-7-7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>;
    return <div className="flex flex-wrap gap-4">
        <Button icon={ArrowRightIcon}>Next</Button>
        <Button variant="outline" icon={SaveIcon}>
          Save
        </Button>
        <Button icon={ArrowRightIcon} loading>
          Loading with Icon
        </Button>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`## 带图标`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ArrowRightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>;
    const DownloadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>;
    return <div className="flex flex-wrap gap-4">
        <Button icon={ArrowRightIcon} iconPosition="left">
          Icon Left
        </Button>
        <Button icon={DownloadIcon} iconPosition="right">
          Icon Right
        </Button>
        <Button icon={ArrowRightIcon} iconPosition="left" loading>
          Loading (Icon Left)
        </Button>
        <Button icon={DownloadIcon} iconPosition="right" loading>
          Loading (Icon Right)
        </Button>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`## 图标位置`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const HeartIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>;
    const HeartIcon20 = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>;
    const HeartIcon24 = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>;
    return <div className="flex flex-wrap gap-4">
        <Button size="icon-sm" icon={HeartIcon} />
        <Button size="icon" icon={HeartIcon20} />
        <Button size="icon-lg" icon={HeartIcon24} />
        <Button size="icon" icon={HeartIcon20} loading />
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`## 图标按钮`,..._.parameters?.docs?.description}}};const v=[`Default`,`Variants`,`Sizes`,`Loading`,`InteractiveLoading`,`Disabled`,`WithIcon`,`IconPosition`,`IconOnly`];export{l as Default,m as Disabled,_ as IconOnly,g as IconPosition,p as InteractiveLoading,f as Loading,d as Sizes,u as Variants,h as WithIcon,v as __namedExportsOrder,c as default};