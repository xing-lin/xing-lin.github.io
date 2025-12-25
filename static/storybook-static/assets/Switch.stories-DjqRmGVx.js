import{c as e,r as t}from"./iframe-b-eWXmfm.js";import{t as n}from"./jsx-runtime-D47hJbtN.js";import"./react-dom-Czds2pmV.js";import{t as r}from"./utils-CXMkBYrU.js";import{n as i}from"./dist-0qattZ-u.js";import"./dist-RfjGpWzs.js";import{i as a,o,r as s,s as c,t as l}from"./dist-BcoZYS85.js";import{n as u,t as d}from"./label-DCKA_XsX.js";var f=e(t(),1),p=e(n(),1),m=`Switch`,[h,g]=c(m),[_,v]=h(m),y=f.forwardRef((e,t)=>{let{__scopeSwitch:n,name:r,checked:s,defaultChecked:c,required:u,disabled:d,value:h=`on`,onCheckedChange:g,form:v,...y}=e,[b,x]=f.useState(null),S=i(t,e=>x(e)),T=f.useRef(!1),E=b?v||!!b.closest(`form`):!0,[D,O]=a({prop:s,defaultProp:c??!1,onChange:g,caller:m});return(0,p.jsxs)(_,{scope:n,checked:D,disabled:d,children:[(0,p.jsx)(l.button,{type:`button`,role:`switch`,"aria-checked":D,"aria-required":u,"data-state":w(D),"data-disabled":d?``:void 0,disabled:d,value:h,...y,ref:S,onClick:o(e.onClick,e=>{O(e=>!e),E&&(T.current=e.isPropagationStopped(),T.current||e.stopPropagation())})}),E&&(0,p.jsx)(C,{control:b,bubbles:!T.current,name:r,value:h,checked:D,required:u,disabled:d,form:v,style:{transform:`translateX(-100%)`}})]})});y.displayName=m;var b=`SwitchThumb`,x=f.forwardRef((e,t)=>{let{__scopeSwitch:n,...r}=e,i=v(b,n);return(0,p.jsx)(l.span,{"data-state":w(i.checked),"data-disabled":i.disabled?``:void 0,...r,ref:t})});x.displayName=b;var S=`SwitchBubbleInput`,C=f.forwardRef(({__scopeSwitch:e,control:t,checked:n,bubbles:r=!0,...a},o)=>{let c=f.useRef(null),l=i(c,o),d=u(n),m=s(t);return f.useEffect(()=>{let e=c.current;if(!e)return;let t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,`checked`).set;if(d!==n&&i){let t=new Event(`click`,{bubbles:r});i.call(e,n),e.dispatchEvent(t)}},[d,n,r]),(0,p.jsx)(`input`,{type:`checkbox`,"aria-hidden":!0,defaultChecked:n,...a,tabIndex:-1,ref:l,style:{...a.style,...m,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0}})});C.displayName=S;function w(e){return e?`checked`:`unchecked`}var T=y,E=x;function D({className:e,...t}){return(0,p.jsx)(T,{"data-slot":`switch`,className:r(`peer data-[state=checked]:bg-primary-foreground data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,e),...t,children:(0,p.jsx)(E,{"data-slot":`switch-thumb`,className:r(`bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0`)})})}D.__docgenInfo={description:``,methods:[],displayName:`Switch`};function O({children:e,className:t,id:n,containerClassName:i,...a}){let o=f.useId(),s=n??(e?o:void 0),c=(0,p.jsx)(D,{id:s,className:t,...a});return e?(0,p.jsxs)(`div`,{className:r(`flex items-center gap-2`,i),children:[c,(0,p.jsx)(d,{htmlFor:s,className:`cursor-pointer`,children:e})]}):c}O.__docgenInfo={description:`Switch 组件

基于 shadcn/ui Switch 组件，提供简化的使用方式。

@example
\`\`\`tsx
// 基础用法（无标签）
<Switch />

// 带标签
<Switch>Enable notifications</Switch>

// 受控模式
const [enabled, setEnabled] = useState(false);
<Switch checked={enabled} onCheckedChange={setEnabled}>
  Airplane mode
</Switch>

// 禁用状态
<Switch disabled>Disabled option</Switch>

// 自定义容器样式
<Switch containerClassName="justify-between">
  Marketing emails
</Switch>
\`\`\``,methods:[],displayName:`Switch`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Switch 的标签内容
如果提供了 children，会使用 Label 包裹 Switch 和 children`},containerClassName:{required:!1,tsType:{name:`string`},description:`容器的自定义 className
只在有 children 时生效`}}};var k={title:`Components/Client/Switch`,component:O,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{checked:{control:`boolean`,description:`Switch 的选中状态`},disabled:{control:`boolean`,description:`是否禁用`},children:{control:`text`,description:`Switch 的标签内容`}}};const A={args:{children:`Enable notifications`},render:e=>(0,p.jsx)(`div`,{className:`flex items-center justify-center p-20`,children:(0,p.jsx)(O,{...e})})},j={render:()=>(0,p.jsxs)(`div`,{className:`flex items-center justify-center gap-8 p-20`,children:[(0,p.jsx)(O,{}),(0,p.jsx)(O,{defaultChecked:!0})]})},M={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col items-start gap-4 p-20`,children:[(0,p.jsx)(O,{children:`Airplane mode`}),(0,p.jsx)(O,{children:`Enable notifications`}),(0,p.jsx)(O,{children:`Marketing emails`}),(0,p.jsx)(O,{children:`Security alerts`})]})},N={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col items-start gap-4 p-20`,children:[(0,p.jsx)(O,{defaultChecked:!1,children:`Unchecked`}),(0,p.jsx)(O,{defaultChecked:!0,children:`Checked`})]})},P={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col items-start gap-4 p-20`,children:[(0,p.jsx)(O,{disabled:!0,children:`Disabled unchecked`}),(0,p.jsx)(O,{disabled:!0,defaultChecked:!0,children:`Disabled checked`})]})},F={render:function(){let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(!0),[i,a]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`flex flex-col gap-6 p-20`,children:[(0,p.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,p.jsx)(O,{checked:e,onCheckedChange:t,children:`Airplane mode`}),(0,p.jsx)(O,{checked:n,onCheckedChange:r,children:`Push notifications`}),(0,p.jsx)(O,{checked:i,onCheckedChange:a,children:`Marketing emails`})]}),(0,p.jsxs)(`div`,{className:`rounded border border-gray-200 bg-gray-50 p-4`,children:[(0,p.jsx)(`p`,{className:`text-sm font-medium`,children:`Current state:`}),(0,p.jsxs)(`ul`,{className:`mt-2 space-y-1 text-sm text-gray-600`,children:[(0,p.jsxs)(`li`,{children:[`Airplane mode: `,e?`✓ On`:`✗ Off`]}),(0,p.jsxs)(`li`,{children:[`Notifications: `,n?`✓ On`:`✗ Off`]}),(0,p.jsxs)(`li`,{children:[`Marketing: `,i?`✓ On`:`✗ Off`]})]})]})]})}},I={render:function(){let[e,t]=(0,f.useState)({marketing:!1,newsletter:!0,updates:!1,security:!0});return(0,p.jsx)(`div`,{className:`w-full max-w-md p-20`,children:(0,p.jsxs)(`form`,{onSubmit:t=>{t.preventDefault(),alert(JSON.stringify(e,null,2))},className:`space-y-6`,children:[(0,p.jsxs)(`div`,{className:`space-y-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-medium`,children:`Email Preferences`}),(0,p.jsxs)(`div`,{className:`space-y-3`,children:[(0,p.jsx)(O,{checked:e.marketing,onCheckedChange:e=>t(t=>({...t,marketing:e})),children:`Marketing emails`}),(0,p.jsx)(O,{checked:e.newsletter,onCheckedChange:e=>t(t=>({...t,newsletter:e})),children:`Weekly newsletter`}),(0,p.jsx)(O,{checked:e.updates,onCheckedChange:e=>t(t=>({...t,updates:e})),children:`Product updates`})]})]}),(0,p.jsxs)(`div`,{className:`space-y-4 border-t pt-4`,children:[(0,p.jsx)(`h3`,{className:`text-lg font-medium`,children:`Security`}),(0,p.jsx)(`div`,{className:`space-y-3`,children:(0,p.jsx)(O,{checked:e.security,onCheckedChange:e=>t(t=>({...t,security:e})),children:`Security alerts`})})]}),(0,p.jsx)(`button`,{type:`submit`,className:`w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600`,children:`Save Preferences`})]})})}},L={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-4 p-20`,children:[(0,p.jsx)(O,{className:`scale-125`,children:`Large switch`}),(0,p.jsx)(O,{className:`scale-75`,children:`Small switch`}),(0,p.jsx)(O,{containerClassName:`rounded border border-gray-200 bg-gray-50 p-3`,children:`Switch with custom container`}),(0,p.jsx)(O,{containerClassName:`justify-between rounded border border-blue-200 bg-blue-50 p-4`,children:`Switch aligned to opposite sides`})]})},R={render:()=>(0,p.jsxs)(`div`,{className:`flex w-96 flex-col gap-4 p-20`,children:[(0,p.jsx)(O,{children:`Enable two-factor authentication for enhanced security and account protection`}),(0,p.jsx)(O,{containerClassName:`items-start`,children:`Allow this application to send you notifications about important updates, security alerts, and promotional offers`})]})},z={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col items-start gap-4 p-20`,children:[(0,p.jsx)(O,{onCheckedChange:e=>{console.log(`Switch changed:`,e),alert(`Switch is now ${e?`ON`:`OFF`}`)},children:`Toggle me (check console)`}),(0,p.jsx)(O,{onCheckedChange:e=>{e&&alert(`Feature enabled!`)},children:`Enable feature (shows alert when turned on)`})]})},B={render:function(){let[e,t]=(0,f.useState)({darkMode:!1,autoSave:!0,notifications:!0,soundEffects:!1,animations:!0});return(0,p.jsx)(`div`,{className:`w-full max-w-lg p-20`,children:(0,p.jsxs)(`div`,{className:`rounded-lg border border-gray-200 bg-white shadow-sm`,children:[(0,p.jsx)(`div`,{className:`border-b border-gray-200 p-4`,children:(0,p.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Settings`})}),(0,p.jsxs)(`div`,{className:`divide-y divide-gray-200`,children:[(0,p.jsx)(`div`,{className:`p-4`,children:(0,p.jsx)(O,{checked:e.darkMode,onCheckedChange:e=>t(t=>({...t,darkMode:e})),containerClassName:`justify-between`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-medium`,children:`Dark mode`}),(0,p.jsx)(`div`,{className:`text-sm text-gray-500`,children:`Use dark theme across the app`})]})})}),(0,p.jsx)(`div`,{className:`p-4`,children:(0,p.jsx)(O,{checked:e.autoSave,onCheckedChange:e=>t(t=>({...t,autoSave:e})),containerClassName:`justify-between`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-medium`,children:`Auto-save`}),(0,p.jsx)(`div`,{className:`text-sm text-gray-500`,children:`Automatically save changes`})]})})}),(0,p.jsx)(`div`,{className:`p-4`,children:(0,p.jsx)(O,{checked:e.notifications,onCheckedChange:e=>t(t=>({...t,notifications:e})),containerClassName:`justify-between`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-medium`,children:`Notifications`}),(0,p.jsx)(`div`,{className:`text-sm text-gray-500`,children:`Receive push notifications`})]})})}),(0,p.jsx)(`div`,{className:`p-4`,children:(0,p.jsx)(O,{checked:e.soundEffects,onCheckedChange:e=>t(t=>({...t,soundEffects:e})),containerClassName:`justify-between`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-medium`,children:`Sound effects`}),(0,p.jsx)(`div`,{className:`text-sm text-gray-500`,children:`Play sounds for actions`})]})})}),(0,p.jsx)(`div`,{className:`p-4`,children:(0,p.jsx)(O,{checked:e.animations,onCheckedChange:e=>t(t=>({...t,animations:e})),containerClassName:`justify-between`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-medium`,children:`Animations`}),(0,p.jsx)(`div`,{className:`text-sm text-gray-500`,children:`Enable interface animations`})]})})})]})]})})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Enable notifications'
  },
  render: args => <div className="flex items-center justify-center p-20">
      <Switch {...args} />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 p-20">
      <Switch />
      <Switch defaultChecked />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-4 p-20">
      <Switch>Airplane mode</Switch>
      <Switch>Enable notifications</Switch>
      <Switch>Marketing emails</Switch>
      <Switch>Security alerts</Switch>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-4 p-20">
      <Switch defaultChecked={false}>Unchecked</Switch>
      <Switch defaultChecked={true}>Checked</Switch>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-4 p-20">
      <Switch disabled>Disabled unchecked</Switch>
      <Switch disabled defaultChecked>
        Disabled checked
      </Switch>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function ControlledSwitch() {
    const [airplaneMode, setAirplaneMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [marketing, setMarketing] = useState(false);
    return <div className="flex flex-col gap-6 p-20">
        <div className="flex flex-col gap-4">
          <Switch checked={airplaneMode} onCheckedChange={setAirplaneMode}>
            Airplane mode
          </Switch>
          <Switch checked={notifications} onCheckedChange={setNotifications}>
            Push notifications
          </Switch>
          <Switch checked={marketing} onCheckedChange={setMarketing}>
            Marketing emails
          </Switch>
        </div>

        <div className="rounded border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium">Current state:</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>Airplane mode: {airplaneMode ? '✓ On' : '✗ Off'}</li>
            <li>Notifications: {notifications ? '✓ On' : '✗ Off'}</li>
            <li>Marketing: {marketing ? '✓ On' : '✗ Off'}</li>
          </ul>
        </div>
      </div>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function FormExample() {
    const [formData, setFormData] = useState({
      marketing: false,
      newsletter: true,
      updates: false,
      security: true
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
    };
    return <div className="w-full max-w-md p-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Email Preferences</h3>
            <div className="space-y-3">
              <Switch checked={formData.marketing} onCheckedChange={checked => setFormData(prev => ({
              ...prev,
              marketing: checked
            }))}>
                Marketing emails
              </Switch>
              <Switch checked={formData.newsletter} onCheckedChange={checked => setFormData(prev => ({
              ...prev,
              newsletter: checked
            }))}>
                Weekly newsletter
              </Switch>
              <Switch checked={formData.updates} onCheckedChange={checked => setFormData(prev => ({
              ...prev,
              updates: checked
            }))}>
                Product updates
              </Switch>
            </div>
          </div>

          <div className="space-y-4 border-t pt-4">
            <h3 className="text-lg font-medium">Security</h3>
            <div className="space-y-3">
              <Switch checked={formData.security} onCheckedChange={checked => setFormData(prev => ({
              ...prev,
              security: checked
            }))}>
                Security alerts
              </Switch>
            </div>
          </div>

          <button type="submit" className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Save Preferences
          </button>
        </form>
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 p-20">
      <Switch className="scale-125">Large switch</Switch>
      <Switch className="scale-75">Small switch</Switch>
      <Switch containerClassName="rounded border border-gray-200 bg-gray-50 p-3">
        Switch with custom container
      </Switch>
      <Switch containerClassName="justify-between rounded border border-blue-200 bg-blue-50 p-4">
        Switch aligned to opposite sides
      </Switch>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4 p-20">
      <Switch>
        Enable two-factor authentication for enhanced security and account
        protection
      </Switch>
      <Switch containerClassName="items-start">
        Allow this application to send you notifications about important
        updates, security alerts, and promotional offers
      </Switch>
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleChange = (checked: boolean) => {
      console.log('Switch changed:', checked);
      alert(\`Switch is now \${checked ? 'ON' : 'OFF'}\`);
    };
    return <div className="flex flex-col items-start gap-4 p-20">
        <Switch onCheckedChange={handleChange}>
          Toggle me (check console)
        </Switch>
        <Switch onCheckedChange={checked => {
        if (checked) {
          alert('Feature enabled!');
        }
      }}>
          Enable feature (shows alert when turned on)
        </Switch>
      </div>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function SettingsPanel() {
    const [settings, setSettings] = useState({
      darkMode: false,
      autoSave: true,
      notifications: true,
      soundEffects: false,
      animations: true
    });
    return <div className="w-full max-w-lg p-20">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold">Settings</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-4">
              <Switch checked={settings.darkMode} onCheckedChange={checked => setSettings(prev => ({
              ...prev,
              darkMode: checked
            }))} containerClassName="justify-between">
                <div>
                  <div className="font-medium">Dark mode</div>
                  <div className="text-sm text-gray-500">
                    Use dark theme across the app
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch checked={settings.autoSave} onCheckedChange={checked => setSettings(prev => ({
              ...prev,
              autoSave: checked
            }))} containerClassName="justify-between">
                <div>
                  <div className="font-medium">Auto-save</div>
                  <div className="text-sm text-gray-500">
                    Automatically save changes
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch checked={settings.notifications} onCheckedChange={checked => setSettings(prev => ({
              ...prev,
              notifications: checked
            }))} containerClassName="justify-between">
                <div>
                  <div className="font-medium">Notifications</div>
                  <div className="text-sm text-gray-500">
                    Receive push notifications
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch checked={settings.soundEffects} onCheckedChange={checked => setSettings(prev => ({
              ...prev,
              soundEffects: checked
            }))} containerClassName="justify-between">
                <div>
                  <div className="font-medium">Sound effects</div>
                  <div className="text-sm text-gray-500">
                    Play sounds for actions
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch checked={settings.animations} onCheckedChange={checked => setSettings(prev => ({
              ...prev,
              animations: checked
            }))} containerClassName="justify-between">
                <div>
                  <div className="font-medium">Animations</div>
                  <div className="text-sm text-gray-500">
                    Enable interface animations
                  </div>
                </div>
              </Switch>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const V=[`Default`,`WithoutLabel`,`WithLabels`,`Checked`,`Disabled`,`Controlled`,`FormExample`,`CustomStyles`,`LongLabels`,`Interactive`,`SettingsPanel`];export{N as Checked,F as Controlled,L as CustomStyles,A as Default,P as Disabled,I as FormExample,z as Interactive,R as LongLabels,B as SettingsPanel,M as WithLabels,j as WithoutLabel,V as __namedExportsOrder,k as default};