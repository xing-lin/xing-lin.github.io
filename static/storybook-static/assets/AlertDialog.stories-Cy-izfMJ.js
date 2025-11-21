import{c as e,r as t}from"./iframe-C3iK-aao.js";import{t as n}from"./jsx-runtime-DxsknXZO.js";import"./react-dom-DLNoUicP.js";import{c as r,u as i}from"./dist-Dh6tYfAV.js";import{r as a,t as o}from"./utils-DAJVqWxS.js";import"./dist-CfISR-4r.js";import{a as s,c,d as l,i as u,l as ee,n as d,o as te,r as ne,s as re,t as f,u as ie}from"./BaseDialog-siSFbJPH.js";import"./cn-B4YSGFpg.js";import"./constants-R_yowVgy.js";import"./IconLoading-qakP1IbK.js";import"./Button-De7d6rO-.js";import"./IconCheckCircleFilled-CCvCjqAA.js";import"./IconInfoCircleFilled-DVmfXNwf.js";import"./IconExclamationCircleFilled-CCIHJS7E.js";import"./IconCloseCircleFilled-DeRX2qzp.js";import"./StatusIcon-yEQFMrU5.js";var p=e(t(),1),m=e(n(),1),ae=Symbol(`radix.slottable`);function oe(e){let t=({children:e})=>(0,m.jsx)(m.Fragment,{children:e});return t.displayName=`${e}.Slottable`,t.__radixId=ae,t}var h=`AlertDialog`,[se,ce]=i(h,[l]),g=l(),_=e=>{let{__scopeAlertDialog:t,...n}=e,r=g(t);return(0,m.jsx)(re,{...r,...n,modal:!0})};_.displayName=h;var le=`AlertDialogTrigger`,v=p.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=g(n);return(0,m.jsx)(ee,{...i,...r,ref:t})});v.displayName=le;var ue=`AlertDialogPortal`,y=e=>{let{__scopeAlertDialog:t,...n}=e,r=g(t);return(0,m.jsx)(te,{...r,...n})};y.displayName=ue;var de=`AlertDialogOverlay`,b=p.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=g(n);return(0,m.jsx)(s,{...i,...r,ref:t})});b.displayName=de;var x=`AlertDialogContent`,[fe,S]=se(x),pe=oe(`AlertDialogContent`),C=p.forwardRef((e,t)=>{let{__scopeAlertDialog:n,children:i,...o}=e,s=g(n),c=p.useRef(null),l=a(t,c),u=p.useRef(null);return(0,m.jsx)(ie,{contentName:x,titleName:w,docsSlug:`alert-dialog`,children:(0,m.jsx)(fe,{scope:n,cancelRef:u,children:(0,m.jsxs)(ne,{role:`alertdialog`,...s,...o,ref:l,onOpenAutoFocus:r(o.onOpenAutoFocus,e=>{e.preventDefault(),u.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,m.jsx)(pe,{children:i}),(0,m.jsx)(he,{contentRef:c})]})})})});C.displayName=x;var w=`AlertDialogTitle`,T=p.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=g(n);return(0,m.jsx)(c,{...i,...r,ref:t})});T.displayName=w;var E=`AlertDialogDescription`,D=p.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=g(n);return(0,m.jsx)(u,{...i,...r,ref:t})});D.displayName=E;var me=`AlertDialogAction`,O=p.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=g(n);return(0,m.jsx)(d,{...i,...r,ref:t})});O.displayName=me;var k=`AlertDialogCancel`,A=p.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:i}=S(k,n),o=g(n),s=a(t,i);return(0,m.jsx)(d,{...o,...r,ref:s})});A.displayName=k;var he=({contentRef:e})=>{let t=`\`${x}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${x}\` by passing a \`${E}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${x}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return p.useEffect(()=>{document.getElementById(e.current?.getAttribute(`aria-describedby`))||console.warn(t)},[t,e]),null},ge=_,_e=v,ve=y,ye=b,be=C,xe=O,Se=A,j=T,Ce=D;function M({...e}){return(0,m.jsx)(ge,{"data-slot":`alert-dialog`,...e})}function N({...e}){return(0,m.jsx)(_e,{"data-slot":`alert-dialog-trigger`,...e})}function P({...e}){return(0,m.jsx)(ve,{"data-slot":`alert-dialog-portal`,...e})}function F({className:e,...t}){return(0,m.jsx)(ye,{"data-slot":`alert-dialog-overlay`,className:o(`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50`,e),...t})}function I({className:e,...t}){return(0,m.jsxs)(P,{children:[(0,m.jsx)(F,{}),(0,m.jsx)(be,{"data-slot":`alert-dialog-content`,className:o(`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg`,e),...t})]})}function L({className:e,...t}){return(0,m.jsx)(`div`,{"data-slot":`alert-dialog-header`,className:o(`flex flex-col gap-2 text-center sm:text-left`,e),...t})}function R({className:e,...t}){return(0,m.jsx)(`div`,{"data-slot":`alert-dialog-footer`,className:o(`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,e),...t})}function z({className:e,...t}){return(0,m.jsx)(j,{"data-slot":`alert-dialog-title`,className:o(`text-lg font-semibold`,e),...t})}function B({className:e,...t}){return(0,m.jsx)(Ce,{"data-slot":`alert-dialog-description`,className:o(`text-muted-foreground text-sm`,e),...t})}function V({className:e,...t}){return(0,m.jsx)(xe,{className:o(e),...t})}function H({className:e,...t}){return(0,m.jsx)(Se,{className:o(e),...t})}M.__docgenInfo={description:``,methods:[],displayName:`AlertDialog`},P.__docgenInfo={description:``,methods:[],displayName:`AlertDialogPortal`},F.__docgenInfo={description:``,methods:[],displayName:`AlertDialogOverlay`},N.__docgenInfo={description:``,methods:[],displayName:`AlertDialogTrigger`},I.__docgenInfo={description:``,methods:[],displayName:`AlertDialogContent`},L.__docgenInfo={description:``,methods:[],displayName:`AlertDialogHeader`},R.__docgenInfo={description:``,methods:[],displayName:`AlertDialogFooter`},z.__docgenInfo={description:``,methods:[],displayName:`AlertDialogTitle`},B.__docgenInfo={description:``,methods:[],displayName:`AlertDialogDescription`},V.__docgenInfo={description:``,methods:[],displayName:`AlertDialogAction`},H.__docgenInfo={description:``,methods:[],displayName:`AlertDialogCancel`};function U({confirmButtonProps:e,cancelButtonProps:t,onlyConfirmButton:n=!1,width:r=600,status:i=`default`,...a}){return(0,m.jsx)(f,{...a,confirmButtonProps:e,cancelButtonProps:t,onlyConfirmButton:n,width:r,status:i,type:`alert-dialog`,primitives:{Root:M,Trigger:N,Content:I,Header:L,Footer:R,Title:z,Description:B,Action:V,Cancel:H}})}U.__docgenInfo={description:``,methods:[],displayName:`AlertDialog`,props:{confirmButtonProps:{required:!1,tsType:{name:`ButtonProps`},description:``},cancelButtonProps:{required:!1,tsType:{name:`ButtonProps`},description:``},onlyConfirmButton:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},width:{defaultValue:{value:`600`,computed:!1},required:!1},status:{defaultValue:{value:`'default'`,computed:!1},required:!1}}};var we={title:`Components/AlertDialog`,component:U,tags:[`autodocs`],argTypes:{open:{control:`boolean`},status:{control:`select`,options:[`default`,`success`,`warning`,`error`,`info`]}}};const W={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Delete Account`}),title:`Are you absolutely sure?`,description:`This action cannot be undone. This will permanently delete your account and remove your data from our servers.`,children:(0,m.jsx)(`div`,{children:(0,m.jsx)(`p`,{children:`Additional content can be placed here if needed.`})})}},G={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Open Alert`}),title:`Workflow as MCP Tool Configuration`,description:`This is the description of the alert dialog, it can provide more context.`,children:`This is the content of the alert dialog.`,footerDivider:!0,confirmButtonProps:{type:`primary`,children:`Confirm`},cancelButtonProps:{type:`default`,children:`Cancel`}}},K={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Warning Action`}),title:`Warning: Irreversible Action`,description:`Please be careful with this action. It may have unintended consequences.`,children:`Additional warning details can be displayed here.`,status:`warning`}},q={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Error Action`}),title:`Error Occurred`,description:`An error has occurred and requires your attention.`,children:`Error details and potential solutions.`,status:`error`}},J={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Success Action`}),title:`Operation Successful`,description:`Your action has been completed successfully.`,children:`Success details and next steps.`,status:`success`}},Y={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Info Action`}),title:`Information`,description:`Here is some important information for you.`,children:`Additional information content.`,status:`info`}},X={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Open Long Content Alert`}),title:`Terms and Conditions`,description:`Please read through the following terms and conditions carefully.`,children:(0,m.jsx)(`div`,{children:Array.from({length:30},(e,t)=>(0,m.jsxs)(`p`,{children:[`This is line `,t+1,` of the content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`]},t))})}},Z={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Open Custom Footer Alert`}),title:`Custom Footer Example`,description:`This alert dialog has a custom footer.`,children:`You can provide your own footer component.`,footer:(0,m.jsxs)(`div`,{className:`flex w-full justify-between`,children:[(0,m.jsx)(`button`,{className:`px-4 py-2 text-sm`,children:`Learn More`}),(0,m.jsxs)(`div`,{className:`flex gap-2`,children:[(0,m.jsx)(`button`,{className:`rounded bg-gray-200 px-4 py-2 text-sm`,children:`Cancel`}),(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-sm`,children:`Confirm`})]})]})}},Q={args:{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Show Important Message`}),title:`Important Information`,description:`This alert dialog only has a confirm button to acknowledge.`,children:`You must acknowledge this information before proceeding.`,onlyConfirmButton:!0}},$={render:()=>(0,m.jsx)(f,{trigger:(0,m.jsx)(`button`,{className:`bg-primary rounded px-4 py-2 text-black`,children:`Test Coverage`}),title:`Edge Case Test`,description:`Testing defensive code for missing Action component`,type:`alert-dialog`,onlyConfirmButton:!1,primitives:{Root:M,Trigger:N,Content:I,Header:L,Footer:R,Title:z,Description:B,Cancel:H},children:`This tests the defensive null return in BaseDialog.`})};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Delete Account
      </button>,
    title: 'Are you absolutely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    children: <div>
        <p>Additional content can be placed here if needed.</p>
      </div>
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Open Alert
      </button>,
    title: 'Workflow as MCP Tool Configuration',
    description: 'This is the description of the alert dialog, it can provide more context.',
    children: 'This is the content of the alert dialog.',
    footerDivider: true,
    confirmButtonProps: {
      type: 'primary',
      children: 'Confirm'
    },
    cancelButtonProps: {
      type: 'default',
      children: 'Cancel'
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Warning Action
      </button>,
    title: 'Warning: Irreversible Action',
    description: 'Please be careful with this action. It may have unintended consequences.',
    children: 'Additional warning details can be displayed here.',
    status: 'warning'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Error Action
      </button>,
    title: 'Error Occurred',
    description: 'An error has occurred and requires your attention.',
    children: 'Error details and potential solutions.',
    status: 'error'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Success Action
      </button>,
    title: 'Operation Successful',
    description: 'Your action has been completed successfully.',
    children: 'Success details and next steps.',
    status: 'success'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Info Action
      </button>,
    title: 'Information',
    description: 'Here is some important information for you.',
    children: 'Additional information content.',
    status: 'info'
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Open Long Content Alert
      </button>,
    title: 'Terms and Conditions',
    description: 'Please read through the following terms and conditions carefully.',
    children: <div>
        {Array.from({
        length: 30
      }, (_, i) => <p key={i}>
            This is line {i + 1} of the content. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>)}
      </div>
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Open Custom Footer Alert
      </button>,
    title: 'Custom Footer Example',
    description: 'This alert dialog has a custom footer.',
    children: 'You can provide your own footer component.',
    footer: <div className="flex w-full justify-between">
        <button className="px-4 py-2 text-sm">Learn More</button>
        <div className="flex gap-2">
          <button className="rounded bg-gray-200 px-4 py-2 text-sm">
            Cancel
          </button>
          <button className="bg-primary rounded px-4 py-2 text-sm">
            Confirm
          </button>
        </div>
      </div>
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="bg-primary rounded px-4 py-2 text-black">
        Show Important Message
      </button>,
    title: 'Important Information',
    description: 'This alert dialog only has a confirm button to acknowledge.',
    children: 'You must acknowledge this information before proceeding.',
    onlyConfirmButton: true
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 故意构造一个缺少 Action 的 primitives 来测试防御性代码
    const incompletePrimitives = {
      Root: AlertDialogUI,
      Trigger: AlertDialogTriggerUI,
      Content: AlertDialogContentUI,
      Header: AlertDialogHeaderUI,
      Footer: AlertDialogFooterUI,
      Title: AlertDialogTitleUI,
      Description: AlertDialogDescriptionUI,
      Cancel: AlertDialogCancelUI
      // 故意不传 Action 来触发防御性的 null 分支 (BaseDialog.tsx line 271)
    };
    return <BaseDialogComponent trigger={<button className="bg-primary rounded px-4 py-2 text-black">
            Test Coverage
          </button>} title="Edge Case Test" description="Testing defensive code for missing Action component" type="alert-dialog" onlyConfirmButton={false}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    primitives={incompletePrimitives as any}>
        This tests the defensive null return in BaseDialog.
      </BaseDialogComponent>;
  }
}`,...$.parameters?.docs?.source},description:{story:`边界测试：用于覆盖防御性代码
这个测试直接使用 BaseDialogComponent，故意缺少 Action 组件
在正常使用中不应该发生，但为了 100% 测试覆盖率`,...$.parameters?.docs?.description}}};const Te=[`Default`,`FooterDivider`,`StatusWarning`,`StatusError`,`StatusSuccess`,`StatusInfo`,`LongContent`,`CustomFooter`,`OnlyConfirmButton`,`EdgeCaseMissingAction`];export{Z as CustomFooter,W as Default,$ as EdgeCaseMissingAction,G as FooterDivider,X as LongContent,Q as OnlyConfirmButton,q as StatusError,Y as StatusInfo,J as StatusSuccess,K as StatusWarning,Te as __namedExportsOrder,we as default};