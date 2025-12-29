import{c as e,r as t}from"./iframe-B0TnRHFa.js";import{t as n}from"./jsx-runtime-CtC5pr0z.js";import"./react-dom-CkgK8hj9.js";import{t as r}from"./utils-CXMkBYrU.js";import{n as i}from"./dist-4tL7MVWp.js";import"./dist-DWhLi_a-.js";import{i as a,o,r as s,s as c,t as l}from"./dist-DbvAhjf5.js";import{n as u,t as d}from"./label-s-Ww26cL.js";import{t as f}from"./dist-BCuvGU4t.js";var p=e(t(),1),m=e(n(),1),h=`Checkbox`,[g,_]=c(h),[v,y]=g(h);function b(e){let{__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:o,form:s,name:c,onCheckedChange:l,required:u,value:d=`on`,internal_do_not_use_render:f}=e,[g,_]=a({prop:n,defaultProp:i??!1,onChange:l,caller:h}),[y,b]=p.useState(null),[x,S]=p.useState(null),C=p.useRef(!1),w=y?!!s||!!y.closest(`form`):!0,T={checked:g,disabled:o,setChecked:_,control:y,setControl:b,name:c,form:s,value:d,hasConsumerStoppedPropagationRef:C,required:u,defaultChecked:O(i)?!1:i,isFormControl:w,bubbleInput:x,setBubbleInput:S};return(0,m.jsx)(v,{scope:t,...T,children:ee(f)?f(T):r})}var x=`CheckboxTrigger`,S=p.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:n,...r},a)=>{let{control:s,value:c,disabled:u,checked:d,required:f,setControl:h,setChecked:g,hasConsumerStoppedPropagationRef:_,isFormControl:v,bubbleInput:b}=y(x,e),S=i(a,h),C=p.useRef(d);return p.useEffect(()=>{let e=s?.form;if(e){let t=()=>g(C.current);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[s,g]),(0,m.jsx)(l.button,{type:`button`,role:`checkbox`,"aria-checked":O(d)?`mixed`:d,"aria-required":f,"data-state":k(d),"data-disabled":u?``:void 0,disabled:u,value:c,...r,ref:S,onKeyDown:o(t,e=>{e.key===`Enter`&&e.preventDefault()}),onClick:o(n,e=>{g(e=>O(e)?!0:!e),b&&v&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())})})});S.displayName=x;var C=p.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,m.jsx)(b,{__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S,{...d,ref:t,__scopeCheckbox:n}),e&&(0,m.jsx)(D,{__scopeCheckbox:n})]})})});C.displayName=h;var w=`CheckboxIndicator`,T=p.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:r,...i}=e,a=y(w,n);return(0,m.jsx)(f,{present:r||O(a.checked)||a.checked===!0,children:(0,m.jsx)(l.span,{"data-state":k(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{pointerEvents:`none`,...e.style}})})});T.displayName=w;var E=`CheckboxBubbleInput`,D=p.forwardRef(({__scopeCheckbox:e,...t},n)=>{let{control:r,hasConsumerStoppedPropagationRef:a,checked:o,defaultChecked:c,required:d,disabled:f,name:h,value:g,form:_,bubbleInput:v,setBubbleInput:b}=y(E,e),x=i(n,b),S=u(o),C=s(r);p.useEffect(()=>{let e=v;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=!a.current;if(S!==o&&n){let t=new Event(`click`,{bubbles:r});e.indeterminate=O(o),n.call(e,O(o)?!1:o),e.dispatchEvent(t)}},[v,S,o,a]);let w=p.useRef(O(o)?!1:o);return(0,m.jsx)(l.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:c??w.current,required:d,disabled:f,name:h,value:g,form:_,...t,tabIndex:-1,ref:x,style:{...t.style,...C,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})});D.displayName=E;function ee(e){return typeof e==`function`}function O(e){return e===`indeterminate`}function k(e){return O(e)?`indeterminate`:e?`checked`:`unchecked`}
/**
* @license lucide-react v0.562.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var te=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),A=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),j=e=>{let t=A(e);return t.charAt(0).toUpperCase()+t.slice(1)},M=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),N=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},P={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},F=(0,p.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,p.createElement)(`svg`,{ref:c,...P,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:M(`lucide`,i),...!a&&!N(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,p.createElement)(e,t)),...Array.isArray(a)?a:[a]])),I=(e,t)=>{let n=(0,p.forwardRef)(({className:n,...r},i)=>(0,p.createElement)(F,{ref:i,iconNode:t,className:M(`lucide-${te(j(e))}`,`lucide-${e}`,n),...r}));return n.displayName=j(e),n},L=I(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ne=I(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]);function R({className:e,...t}){return(0,m.jsx)(C,{"data-slot":`checkbox`,className:r(`peer group border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=indeterminate]:text-foreground size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,e),...t,children:(0,m.jsxs)(T,{"data-slot":`checkbox-indicator`,className:`grid place-content-center text-current transition-none`,children:[(0,m.jsx)(ne,{className:`hidden size-2.5 group-data-[state=indeterminate]:block`}),(0,m.jsx)(L,{className:`hidden size-3.5 group-data-[state=checked]:block`})]})})}R.__docgenInfo={description:``,methods:[],displayName:`Checkbox`};function z({className:e,children:t,id:n,containerClassName:i,...a}){let o=(0,p.useId)(),s=n??(t?o:void 0),c=(0,m.jsx)(R,{id:s,className:e,...a});return t?(0,m.jsxs)(`div`,{className:r(`flex items-center gap-2`,i),children:[c,(0,m.jsx)(d,{htmlFor:s,className:`cursor-pointer`,children:t})]}):c}z.__docgenInfo={description:`Checkbox 组件

基于 shadcn/ui Checkbox 组件，提供复选框功能。

@example
\`\`\`tsx
// 基础用法
<Checkbox />

// 受控组件
const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onCheckedChange={setChecked} />

// 带 children
<Checkbox id="terms">接受条款</Checkbox>

// 禁用状态
<Checkbox disabled />
<Checkbox checked disabled />
\`\`\``,methods:[],displayName:`Checkbox`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`子元素（标签内容）
如果提供了 children，会自动用 Label 组件包裹`},containerClassName:{required:!1,tsType:{name:`string`},description:`容器类名
用于自定义包裹 checkbox 和 label 的容器样式`}}};var re={title:`Components/Client/Checkbox`,component:z,tags:[`autodocs`],argTypes:{checked:{control:`select`,options:[!1,!0,`indeterminate`],description:`选中状态：false（未选中）、true（选中）、indeterminate（半选）`},disabled:{control:`boolean`,description:`是否禁用`},required:{control:`boolean`,description:`是否必填`},children:{control:`text`,description:`子元素（标签内容），如果提供了会自动用 Label 组件包裹`},onCheckedChange:{action:`checked-change`,description:`值变化时的回调函数`}}};const B={args:{}},V={args:{checked:!0}},H={args:{children:`接受服务条款`}},U={args:{checked:!0,children:`我已阅读并同意`}},W={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,m.jsx)(z,{checked:`indeterminate`,children:`半选状态`}),(0,m.jsx)(z,{checked:`indeterminate`,disabled:!0,children:`半选状态（禁用）`})]})},G={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,m.jsx)(z,{disabled:!0,children:`禁用（未选中）`}),(0,m.jsx)(z,{checked:!0,disabled:!0,children:`禁用（已选中）`}),(0,m.jsx)(z,{checked:`indeterminate`,disabled:!0,children:`禁用（半选）`})]})},K={render:()=>{let[e,t]=p.useState(!1);return(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsxs)(z,{checked:e,onCheckedChange:e=>t(e),children:[`受控复选框（当前状态: `,(()=>e===`indeterminate`?`半选`:e?`选中`:`未选中`)(),`）`]}),(0,m.jsxs)(`div`,{className:`flex gap-2`,children:[(0,m.jsx)(`button`,{type:`button`,onClick:()=>t(!1),className:`bg-muted rounded-md px-3 py-1 text-sm`,children:`设为未选中`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>t(`indeterminate`),className:`bg-muted rounded-md px-3 py-1 text-sm`,children:`设为半选`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>t(!0),className:`bg-muted rounded-md px-3 py-1 text-sm`,children:`设为选中`})]}),(0,m.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`点击复选框或按钮查看状态变化`})]})}},q={render:()=>{let[e,t]=p.useState(!1);return(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsx)(z,{checked:e,onCheckedChange:e=>t(e),children:`点击我切换状态`}),(0,m.jsx)(`div`,{className:`space-y-2`,children:(0,m.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`当前状态: `,(()=>e===`indeterminate`?`➖ 半选`:e?`✅ 已选中`:`❌ 未选中`)()]})})]})}},J={render:()=>{let[e,t]=p.useState({apple:!1,banana:!1,orange:!1,grape:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))},r=Object.values(e).filter(Boolean).length,i=Object.keys(e).length,a=r===i,o=r>0&&r<i,s=a?!0:o?`indeterminate`:!1;return(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsxs)(`div`,{className:`space-y-3`,children:[(0,m.jsx)(z,{checked:s,onCheckedChange:e=>{let n=e===!0;t({apple:n,banana:n,orange:n,grape:n})},children:a?`取消全选`:o?`全选（部分已选）`:`全选`}),(0,m.jsxs)(`div`,{className:`ml-6 flex flex-col gap-2 border-l-2 pl-4`,children:[(0,m.jsx)(z,{checked:e.apple,onCheckedChange:n(`apple`),children:`苹果`}),(0,m.jsx)(z,{checked:e.banana,onCheckedChange:n(`banana`),children:`香蕉`}),(0,m.jsx)(z,{checked:e.orange,onCheckedChange:n(`orange`),children:`橙子`}),(0,m.jsx)(z,{checked:e.grape,onCheckedChange:n(`grape`),children:`葡萄`})]})]}),(0,m.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`已选择 `,r,` / `,i,` 项`,o&&`（部分选中）`]})]})}},Y={render:()=>{let[e,t]=p.useState({terms:!1,privacy:!1,newsletter:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))},r=e.terms&&e.privacy;return(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsxs)(`form`,{className:`space-y-4`,onSubmit:e=>{e.preventDefault(),alert(`表单提交成功！`)},children:[(0,m.jsxs)(`div`,{className:`space-y-3`,children:[(0,m.jsxs)(z,{id:`terms`,checked:e.terms,onCheckedChange:n(`terms`),required:!0,children:[`我已阅读并接受`,` `,(0,m.jsx)(`a`,{href:`#`,className:`text-primary underline`,onClick:e=>e.preventDefault(),children:`服务条款`})]}),(0,m.jsxs)(z,{id:`privacy`,checked:e.privacy,onCheckedChange:n(`privacy`),required:!0,children:[`我已阅读并同意`,` `,(0,m.jsx)(`a`,{href:`#`,className:`text-primary underline`,onClick:e=>e.preventDefault(),children:`隐私政策`})]}),(0,m.jsx)(z,{id:`newsletter`,checked:e.newsletter,onCheckedChange:n(`newsletter`),children:`订阅邮件通知（可选）`})]}),(0,m.jsx)(`button`,{type:`submit`,disabled:!r,className:`bg-primary text-primary-foreground rounded-md px-4 py-2 disabled:opacity-50`,children:`提交`})]}),(0,m.jsxs)(`div`,{className:`bg-muted rounded-md p-3 text-sm`,children:[(0,m.jsx)(`p`,{className:`font-medium`,children:`表单状态：`}),(0,m.jsxs)(`ul`,{className:`mt-1 list-inside list-disc space-y-1`,children:[(0,m.jsxs)(`li`,{children:[`服务条款: `,e.terms?`✅`:`❌`]}),(0,m.jsxs)(`li`,{children:[`隐私政策: `,e.privacy?`✅`:`❌`]}),(0,m.jsxs)(`li`,{children:[`邮件通知: `,e.newsletter?`✅`:`❌`]}),(0,m.jsxs)(`li`,{children:[`可提交: `,r?`✅`:`❌`]})]})]})]})}},X={render:()=>(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsxs)(z,{required:!0,children:[`必选项 `,(0,m.jsx)(`span`,{className:`text-destructive`,children:`*`})]}),(0,m.jsx)(z,{children:`可选项`})]})},Z={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,m.jsx)(z,{className:`size-3`,children:`小尺寸 (12px)`}),(0,m.jsx)(z,{className:`size-4`,children:`默认尺寸 (16px)`}),(0,m.jsx)(z,{className:`size-5`,children:`大尺寸 (20px)`})]})},Q={render:()=>(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsx)(z,{children:(0,m.jsxs)(`div`,{className:`space-y-1`,children:[(0,m.jsx)(`div`,{className:`font-medium`,children:`高级功能`}),(0,m.jsx)(`div`,{className:`text-muted-foreground text-sm`,children:`启用后将获得更多高级功能`})]})}),(0,m.jsx)(z,{children:(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,m.jsx)(`span`,{className:`font-medium`,children:`通知设置`}),(0,m.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:`(推荐)`})]})})]})},$={render:()=>(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsx)(z,{"aria-invalid":!0,className:`aria-invalid:border-destructive`,children:`带有错误状态的复选框`}),(0,m.jsx)(`p`,{className:`text-destructive text-sm`,children:`请至少选择一个选项`})]})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...B.parameters?.docs?.source},description:{story:`## 默认复选框`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...V.parameters?.docs?.source},description:{story:`## 选中状态`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    children: '接受服务条款'
  }
}`,...H.parameters?.docs?.source},description:{story:`## 带标签`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    children: '我已阅读并同意'
  }
}`,...U.parameters?.docs?.source},description:{story:`## 选中状态（带标签）`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox checked="indeterminate">半选状态</Checkbox>
      <Checkbox checked="indeterminate" disabled>
        半选状态（禁用）
      </Checkbox>
    </div>
}`,...W.parameters?.docs?.source},description:{story:`## 半选状态（Indeterminate）`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox disabled>禁用（未选中）</Checkbox>
      <Checkbox checked disabled>
        禁用（已选中）
      </Checkbox>
      <Checkbox checked="indeterminate" disabled>
        禁用（半选）
      </Checkbox>
    </div>
}`,...G.parameters?.docs?.source},description:{story:`## 禁用状态`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(false);
    const getStatusText = () => {
      if (checked === 'indeterminate') return '半选';
      return checked ? '选中' : '未选中';
    };
    return <div className="space-y-4">
        <Checkbox checked={checked} onCheckedChange={value => setChecked(value)}>
          受控复选框（当前状态: {getStatusText()}）
        </Checkbox>
        <div className="flex gap-2">
          <button type="button" onClick={() => setChecked(false)} className="bg-muted rounded-md px-3 py-1 text-sm">
            设为未选中
          </button>
          <button type="button" onClick={() => setChecked('indeterminate')} className="bg-muted rounded-md px-3 py-1 text-sm">
            设为半选
          </button>
          <button type="button" onClick={() => setChecked(true)} className="bg-muted rounded-md px-3 py-1 text-sm">
            设为选中
          </button>
        </div>
        <p className="text-muted-foreground text-sm">
          点击复选框或按钮查看状态变化
        </p>
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:`## 受控组件`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(false);
    const getStatusEmoji = () => {
      if (checked === 'indeterminate') return '➖ 半选';
      return checked ? '✅ 已选中' : '❌ 未选中';
    };
    return <div className="space-y-4">
        <Checkbox checked={checked} onCheckedChange={value => setChecked(value)}>
          点击我切换状态
        </Checkbox>
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">
            当前状态: {getStatusEmoji()}
          </p>
        </div>
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:`## 交互式示例`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = React.useState({
      apple: false,
      banana: false,
      orange: false,
      grape: false
    });
    const handleChange = (key: keyof typeof items) => (checked: boolean) => {
      setItems(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    const selectedCount = Object.values(items).filter(Boolean).length;
    const totalCount = Object.keys(items).length;
    const allSelected = selectedCount === totalCount;
    const someSelected = selectedCount > 0 && selectedCount < totalCount;

    // 计算全选 checkbox 的状态
    const selectAllChecked: boolean | 'indeterminate' = allSelected ? true : someSelected ? 'indeterminate' : false;
    const handleSelectAll = (checked: boolean | 'indeterminate') => {
      const isChecked = checked === true;
      setItems({
        apple: isChecked,
        banana: isChecked,
        orange: isChecked,
        grape: isChecked
      });
    };
    return <div className="space-y-4">
        <div className="space-y-3">
          <Checkbox checked={selectAllChecked} onCheckedChange={handleSelectAll}>
            {allSelected ? '取消全选' : someSelected ? '全选（部分已选）' : '全选'}
          </Checkbox>
          <div className="ml-6 flex flex-col gap-2 border-l-2 pl-4">
            <Checkbox checked={items.apple} onCheckedChange={handleChange('apple')}>
              苹果
            </Checkbox>
            <Checkbox checked={items.banana} onCheckedChange={handleChange('banana')}>
              香蕉
            </Checkbox>
            <Checkbox checked={items.orange} onCheckedChange={handleChange('orange')}>
              橙子
            </Checkbox>
            <Checkbox checked={items.grape} onCheckedChange={handleChange('grape')}>
              葡萄
            </Checkbox>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          已选择 {selectedCount} / {totalCount} 项
          {someSelected && '（部分选中）'}
        </p>
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`## 多选列表`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = React.useState({
      terms: false,
      privacy: false,
      newsletter: false
    });
    const handleChange = (key: keyof typeof formData) => (checked: boolean) => {
      setFormData(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    const canSubmit = formData.terms && formData.privacy;
    return <div className="space-y-4">
        <form className="space-y-4" onSubmit={e => {
        e.preventDefault();
        alert('表单提交成功！');
      }}>
          <div className="space-y-3">
            <Checkbox id="terms" checked={formData.terms} onCheckedChange={handleChange('terms')} required>
              我已阅读并接受{' '}
              <a href="#" className="text-primary underline" onClick={e => e.preventDefault()}>
                服务条款
              </a>
            </Checkbox>
            <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={handleChange('privacy')} required>
              我已阅读并同意{' '}
              <a href="#" className="text-primary underline" onClick={e => e.preventDefault()}>
                隐私政策
              </a>
            </Checkbox>
            <Checkbox id="newsletter" checked={formData.newsletter} onCheckedChange={handleChange('newsletter')}>
              订阅邮件通知（可选）
            </Checkbox>
          </div>
          <button type="submit" disabled={!canSubmit} className="bg-primary text-primary-foreground rounded-md px-4 py-2 disabled:opacity-50">
            提交
          </button>
        </form>
        <div className="bg-muted rounded-md p-3 text-sm">
          <p className="font-medium">表单状态：</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>服务条款: {formData.terms ? '✅' : '❌'}</li>
            <li>隐私政策: {formData.privacy ? '✅' : '❌'}</li>
            <li>邮件通知: {formData.newsletter ? '✅' : '❌'}</li>
            <li>可提交: {canSubmit ? '✅' : '❌'}</li>
          </ul>
        </div>
      </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`## 表单示例`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox required>
        必选项 <span className="text-destructive">*</span>
      </Checkbox>
      <Checkbox>可选项</Checkbox>
    </div>
}`,...X.parameters?.docs?.source},description:{story:`## 必填项`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox className="size-3">小尺寸 (12px)</Checkbox>
      <Checkbox className="size-4">默认尺寸 (16px)</Checkbox>
      <Checkbox className="size-5">大尺寸 (20px)</Checkbox>
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`## 不同尺寸`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox>
        <div className="space-y-1">
          <div className="font-medium">高级功能</div>
          <div className="text-muted-foreground text-sm">
            启用后将获得更多高级功能
          </div>
        </div>
      </Checkbox>
      <Checkbox>
        <div className="flex items-center gap-2">
          <span className="font-medium">通知设置</span>
          <span className="text-muted-foreground text-sm">(推荐)</span>
        </div>
      </Checkbox>
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`## 复杂标签内容`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox aria-invalid className="aria-invalid:border-destructive">
        带有错误状态的复选框
      </Checkbox>
      <p className="text-destructive text-sm">请至少选择一个选项</p>
    </div>
}`,...$.parameters?.docs?.source},description:{story:`## 错误状态`,...$.parameters?.docs?.description}}};const ie=[`Default`,`Checked`,`WithLabel`,`CheckedWithLabel`,`Indeterminate`,`Disabled`,`Controlled`,`Interactive`,`Multiple`,`FormExample`,`Required`,`Sizes`,`ComplexLabel`,`ErrorState`];export{V as Checked,U as CheckedWithLabel,Q as ComplexLabel,K as Controlled,B as Default,G as Disabled,$ as ErrorState,Y as FormExample,W as Indeterminate,q as Interactive,J as Multiple,X as Required,Z as Sizes,H as WithLabel,ie as __namedExportsOrder,re as default};