import{c as e,r as t}from"./iframe-b-eWXmfm.js";import{t as n}from"./jsx-runtime-D47hJbtN.js";var r=e(t());async function i(e){try{if(typeof navigator<`u`&&navigator?.clipboard?.writeText)return await navigator.clipboard.writeText(e),{success:!0};if(typeof document<`u`)return a(e);throw Error(`Copy functionality is not supported in current environment`)}catch(e){return{success:!1,error:e instanceof Error?e:Error(String(e))}}}function a(e){let t=null;try{if(t=document.createElement(`textarea`),t.value=e,t.style.position=`fixed`,t.style.left=`-9999px`,t.style.top=`-9999px`,t.style.opacity=`0`,t.setAttribute(`readonly`,``),document.body.appendChild(t),/ipad|iphone|ipod/.test(navigator.userAgent.toLowerCase())){let n=document.createRange();n.selectNodeContents(t);let r=window.getSelection();r?.removeAllRanges(),r?.addRange(n),t.setSelectionRange(0,e.length)}else t.select();if(!document.execCommand(`copy`))throw Error(`execCommand failed to execute`);return{success:!0}}catch(e){return{success:!1,error:e instanceof Error?e:Error(String(e))}}finally{t&&t.parentNode&&t.parentNode.removeChild(t)}}var o=e(n()),s={title:`Utils/copyText`,tags:[`autodocs`],parameters:{docs:{description:{component:`复制文本到剪贴板，支持现代和传统浏览器。`}}}};function c(){let[e,t]=(0,r.useState)(null),n=async e=>{t(await i(e)),setTimeout(()=>t(null),3e3)};return(0,o.jsxs)(`div`,{className:`space-y-4`,children:[(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,o.jsx)(`button`,{onClick:()=>n(`Hello, World!`),className:`rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600`,children:`复制 "Hello, World!"`}),(0,o.jsx)(`button`,{onClick:()=>n(`这是中文文本 👋`),className:`rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600`,children:`复制中文文本`}),(0,o.jsx)(`button`,{onClick:()=>n(`https://www.browseract.com`),className:`rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600`,children:`复制链接`})]}),e&&(0,o.jsxs)(`div`,{className:`rounded p-4 ${e.success?`border border-green-200 bg-green-50 text-green-800`:`border border-red-200 bg-red-50 text-red-800`}`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(`span`,{className:`text-lg`,children:e.success?`✅`:`❌`}),(0,o.jsx)(`span`,{className:`font-semibold`,children:e.success?`复制成功！`:`复制失败`})]}),e.error&&(0,o.jsxs)(`div`,{className:`mt-2 text-sm`,children:[`错误: `,e.error.message]})]}),(0,o.jsxs)(`div`,{className:`mt-6 rounded bg-gray-50 p-4`,children:[(0,o.jsx)(`h4`,{className:`mb-2 font-semibold`,children:`代码示例：`}),(0,o.jsx)(`pre`,{className:`overflow-x-auto text-sm`,children:(0,o.jsx)(`code`,{children:`import { copyText } from 'browseract-ui/client';

const result = await copyText('Hello, World!');

if (result.success) {
  console.log('复制成功');
} else {
  console.error('复制失败:', result.error);
}`})})]})]})}const l={render:()=>(0,o.jsx)(c,{})};function u(){let[e,t]=(0,r.useState)(`Hello, BrowserAct!`),[n,a]=(0,r.useState)(null);return(0,o.jsxs)(`div`,{className:`space-y-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`label`,{className:`mb-2 block text-sm font-medium`,children:`输入要复制的文本：`}),(0,o.jsx)(`textarea`,{value:e,onChange:e=>t(e.target.value),className:`resize-vertical min-h-[100px] w-full rounded border p-3`,placeholder:`输入任意文本...`})]}),(0,o.jsx)(`button`,{onClick:async()=>{a(await i(e)),setTimeout(()=>a(null),3e3)},className:`rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600`,children:`复制文本`}),n&&(0,o.jsx)(`div`,{className:`rounded p-4 ${n.success?`border border-green-200 bg-green-50 text-green-800`:`border border-red-200 bg-red-50 text-red-800`}`,children:n.success?`✅ 复制成功！`:`❌ 复制失败: ${n.error?.message}`})]})}const d={render:()=>(0,o.jsx)(u,{})};function f(){let[e,t]=(0,r.useState)(!1),n=`https://www.browseract.com/share/12345`;return(0,o.jsxs)(`div`,{className:`space-y-6`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h3`,{className:`mb-3 text-lg font-semibold`,children:`ShareButton 组件`}),(0,o.jsxs)(`div`,{className:`rounded border bg-gray-50 p-6`,children:[(0,o.jsxs)(`p`,{className:`mb-4 text-sm text-gray-600`,children:[`链接: `,n]}),(0,o.jsx)(`button`,{onClick:async()=>{(await i(n)).success&&(t(!0),setTimeout(()=>t(!1),2e3))},className:`rounded px-6 py-3 font-medium transition-colors ${e?`bg-green-500 text-white`:`bg-blue-500 text-white hover:bg-blue-600`}`,children:e?`已复制 ✓`:`分享链接`})]})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h4`,{className:`mb-2 font-semibold`,children:`完整代码：`}),(0,o.jsx)(`pre`,{className:`overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100`,children:(0,o.jsx)(`code`,{children:`'use client';

import { useState } from 'react';
import { copyText } from 'browseract-ui/client';

export function ShareButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const result = await copyText(url);
    
    if (result.success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className={copied ? 'bg-green-500' : 'bg-blue-500'}
    >
      {copied ? '已复制 ✓' : '分享链接'}
    </button>
  );
}`})})]})]})}const p={render:()=>(0,o.jsx)(f,{})},m={render:()=>(0,o.jsxs)(`div`,{className:`prose prose-sm max-w-none`,children:[(0,o.jsx)(`h3`,{children:`函数签名`}),(0,o.jsx)(`pre`,{className:`rounded bg-gray-100 p-3`,children:(0,o.jsx)(`code`,{children:`async function copyText(text: string): Promise<CopyResult>`})}),(0,o.jsx)(`h3`,{className:`mt-4`,children:`参数`}),(0,o.jsxs)(`table`,{className:`min-w-full border`,children:[(0,o.jsx)(`thead`,{className:`bg-gray-50`,children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{className:`border px-3 py-2 text-left`,children:`参数`}),(0,o.jsx)(`th`,{className:`border px-3 py-2 text-left`,children:`类型`}),(0,o.jsx)(`th`,{className:`border px-3 py-2 text-left`,children:`说明`})]})}),(0,o.jsx)(`tbody`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{className:`border px-3 py-2 font-mono`,children:`text`}),(0,o.jsx)(`td`,{className:`border px-3 py-2 font-mono`,children:`string`}),(0,o.jsx)(`td`,{className:`border px-3 py-2`,children:`要复制的文本内容`})]})})]}),(0,o.jsx)(`h3`,{className:`mt-4`,children:`返回值`}),(0,o.jsx)(`p`,{children:(0,o.jsx)(`code`,{children:`Promise<CopyResult>`})}),(0,o.jsx)(`pre`,{className:`rounded bg-gray-100 p-3`,children:(0,o.jsx)(`code`,{children:`interface CopyResult {
  success: boolean;  // 是否成功
  error?: Error;     // 错误信息（失败时）
}`})}),(0,o.jsx)(`h3`,{className:`mt-4`,children:`浏览器兼容性`}),(0,o.jsxs)(`div`,{className:`rounded border border-blue-200 bg-blue-50 p-4`,children:[(0,o.jsx)(`p`,{children:(0,o.jsx)(`strong`,{children:`现代浏览器（Clipboard API）:`})}),(0,o.jsxs)(`ul`,{children:[(0,o.jsx)(`li`,{children:`Chrome 63+`}),(0,o.jsx)(`li`,{children:`Firefox 53+`}),(0,o.jsx)(`li`,{children:`Safari 13.1+`}),(0,o.jsx)(`li`,{children:`Edge 79+`})]}),(0,o.jsx)(`p`,{className:`mt-2`,children:(0,o.jsx)(`strong`,{children:`旧版浏览器（execCommand 降级）:`})}),(0,o.jsxs)(`ul`,{children:[(0,o.jsx)(`li`,{children:`IE 9+`}),(0,o.jsx)(`li`,{children:`Safari 10+`}),(0,o.jsx)(`li`,{children:`所有支持 execCommand 的浏览器`})]})]}),(0,o.jsx)(`h3`,{className:`mt-4`,children:`注意事项`}),(0,o.jsx)(`div`,{className:`rounded border border-yellow-200 bg-yellow-50 p-4`,children:(0,o.jsxs)(`ul`,{children:[(0,o.jsxs)(`li`,{children:[`⚠️ `,(0,o.jsx)(`strong`,{children:`HTTPS:`}),` Clipboard API 只在 HTTPS 或 localhost 下可用`]}),(0,o.jsxs)(`li`,{children:[`⚠️ `,(0,o.jsx)(`strong`,{children:`权限:`}),` 某些浏览器可能需要用户授权`]}),(0,o.jsxs)(`li`,{children:[`⚠️ `,(0,o.jsx)(`strong`,{children:`交互:`}),` 建议在用户交互事件中调用`]}),(0,o.jsxs)(`li`,{children:[`⚠️ `,(0,o.jsx)(`strong`,{children:`Next.js:`}),` 必须在 Client Component 中使用`]})]})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <BasicUsageDemo />
}`,...l.parameters?.docs?.source},description:{story:`## 基础用法

点击按钮复制预设文本到剪贴板。`,...l.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <CustomTextDemo />
}`,...d.parameters?.docs?.source},description:{story:`## 自定义文本

输入任意文本并复制。`,...d.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <RealWorldExampleDemo />
}`,...p.parameters?.docs?.source},description:{story:`## 实际应用示例

在 React 组件中的完整使用示例。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="prose prose-sm max-w-none">
      <h3>函数签名</h3>
      <pre className="rounded bg-gray-100 p-3">
        <code>{\`async function copyText(text: string): Promise<CopyResult>\`}</code>
      </pre>

      <h3 className="mt-4">参数</h3>
      <table className="min-w-full border">
        <thead className="bg-gray-50">
          <tr>
            <th className="border px-3 py-2 text-left">参数</th>
            <th className="border px-3 py-2 text-left">类型</th>
            <th className="border px-3 py-2 text-left">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-2 font-mono">text</td>
            <td className="border px-3 py-2 font-mono">string</td>
            <td className="border px-3 py-2">要复制的文本内容</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-4">返回值</h3>
      <p>
        <code>Promise&lt;CopyResult&gt;</code>
      </p>
      <pre className="rounded bg-gray-100 p-3">
        <code>{\`interface CopyResult {
  success: boolean;  // 是否成功
  error?: Error;     // 错误信息（失败时）
}\`}</code>
      </pre>

      <h3 className="mt-4">浏览器兼容性</h3>
      <div className="rounded border border-blue-200 bg-blue-50 p-4">
        <p>
          <strong>现代浏览器（Clipboard API）:</strong>
        </p>
        <ul>
          <li>Chrome 63+</li>
          <li>Firefox 53+</li>
          <li>Safari 13.1+</li>
          <li>Edge 79+</li>
        </ul>
        <p className="mt-2">
          <strong>旧版浏览器（execCommand 降级）:</strong>
        </p>
        <ul>
          <li>IE 9+</li>
          <li>Safari 10+</li>
          <li>所有支持 execCommand 的浏览器</li>
        </ul>
      </div>

      <h3 className="mt-4">注意事项</h3>
      <div className="rounded border border-yellow-200 bg-yellow-50 p-4">
        <ul>
          <li>
            ⚠️ <strong>HTTPS:</strong> Clipboard API 只在 HTTPS 或 localhost
            下可用
          </li>
          <li>
            ⚠️ <strong>权限:</strong> 某些浏览器可能需要用户授权
          </li>
          <li>
            ⚠️ <strong>交互:</strong> 建议在用户交互事件中调用
          </li>
          <li>
            ⚠️ <strong>Next.js:</strong> 必须在 Client Component 中使用
          </li>
        </ul>
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`## API 参考`,...m.parameters?.docs?.description}}};const h=[`BasicUsage`,`CustomText`,`RealWorldExample`,`APIReference`];export{m as APIReference,l as BasicUsage,d as CustomText,p as RealWorldExample,h as __namedExportsOrder,s as default};