import"./preload-helper-Dr7BywEQ.js";import{c as e}from"./iframe-B0TnRHFa.js";import{t}from"./jsx-runtime-CtC5pr0z.js";import{n}from"./lib-BQ-EvdYh.js";import"./dist-DvaCCGKm.js";import"./components-C4aSlgn-.js";import"./react-dom-CkgK8hj9.js";import{c as r,l as i}from"./blocks-NeciXJxI.js";var a=e(t()),o=`/**
 * BrowserAct UI 主题变量
 *
 * 使用方式：
 * 在你的 Next.js 项目的全局 CSS 中导入：
 *
 * \`\`\`css
 * @import 'tailwindcss';
 * @import 'browseract-ui/theme';
 * \`\`\`
 */

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);

  --color-fill-1: var(--fill-1);
  --color-fill-2: var(--fill-2);
  --color-fill-3: var(--fill-3);
  --color-fill-4: var(--fill-4);

  --color-link: var(--link);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-foreground-2: var(--foreground-2);
  --color-foreground-3: var(--foreground-3);
  --color-foreground-4: var(--foreground-4);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);

  --color-border: var(--border);
  --color-divider: var(--divider);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --fill-1: oklch(0 0 0 / 0.15);
  --fill-2: oklch(0 0 0 / 0.06);
  --fill-3: oklch(0 0 0 / 0.04);
  --fill-4: oklch(0 0 0 / 0.02);

  --link: oklch(0.5987 0.219351 259.0395);

  --radius: 0.625rem;

  --background: oklch(1 0 0);
  --foreground: oklch(0 0 0 / 0.88);
  --foreground-2: oklch(0 0 0 / 0.65);
  --foreground-3: oklch(0 0 0 / 0.45);
  --foreground-4: oklch(0 0 0 / 0.25);

  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);

  --popover: oklch(1 0 0);
  --popover-foreground: var(--foreground);

  --primary: oklch(0.2274 0.0252 280.77);
  --primary-foreground: oklch(0.7906 0.2039 151.68);
  --secondary: oklch(0.9674 0.0013 286.37);
  --secondary-foreground: oklch(0.2046 0 0);
  --muted: oklch(0.9702 0 0);
  --muted-foreground: oklch(0.5555 0 0);
  --accent: oklch(0.9702 0 0);
  --accent-foreground: oklch(0.2046 0 0);

  --destructive: oklch(0.5771 0.2152 27.33);

  --border: oklch(0.9197 0.004 286.32);
  --divider: oklch(0.9551 0 0);
  --input: oklch(0.9219 0 0);
  --ring: oklch(0.709 0 0);

  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);

  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    border-color: var(--border);
    outline-color: color-mix(in oklab, var(--ring) 50%, transparent);
  }
  body {
    background-color: var(--background);
    color: var(--foreground);
  }

  /* tailwind v4 需要手动设置 cursor: pointer */
  button:not([disabled]),
  [role='button']:not([disabled]) {
    cursor: pointer;
  }
}
`;function s(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{title:`Theme System`}),`
`,(0,a.jsx)(t.h1,{id:`主题系统`,children:`主题系统`}),`
`,(0,a.jsx)(t.p,{children:`BrowserAct UI 基于 Tailwind CSS v4 和 CSS 变量构建，提供灵活的主题定制能力。`}),`
`,(0,a.jsx)(t.h2,{id:`-安装配置`,children:`📦 安装配置`}),`
`,(0,a.jsx)(t.h3,{id:`1-导入主题样式`,children:`1. 导入主题样式`}),`
`,(0,a.jsxs)(t.p,{children:[`在你的 Next.js 项目的全局 CSS 文件（如 `,(0,a.jsx)(t.code,{children:`app/globals.css`}),`）中导入：`]}),`
`,(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:`language-css`,children:`@import 'tailwindcss';
@import 'tw-animate-css'; /* 可选：如果需要动画支持 */
@import 'browseract-ui/theme.css';
`})}),`
`,(0,a.jsx)(t.h3,{id:`2-配置暗色模式`,children:`2. 配置暗色模式`}),`
`,(0,a.jsxs)(t.p,{children:[`主题默认支持暗色模式，通过 `,(0,a.jsx)(t.code,{children:`.dark`}),` 类名切换：`]}),`
`,(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:`language-tsx`,children:`// 在根元素上添加 dark 类
<html className={isDark ? 'dark' : ''}>
  <body>{children}</body>
</html>
`})}),`
`,(0,a.jsx)(t.h2,{id:`-主题变量`,children:`🎨 主题变量`}),`
`,(0,a.jsx)(t.h3,{id:`基础颜色`,children:`基础颜色`}),`
`,(0,a.jsx)(t.p,{children:`主题使用 OKLCH 色彩空间，提供更好的色彩感知和过渡效果。`}),`
`,(0,a.jsx)(t.h4,{id:`背景与前景色`,children:`背景与前景色`}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--background`}),`: 页面背景色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--foreground`}),`: 主要文本色（88% 不透明度）`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--foreground-2`}),`: 次要文本色（65% 不透明度）`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--foreground-3`}),`: 三级文本色（45% 不透明度）`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--foreground-4`}),`: 四级文本色（25% 不透明度）`]}),`
`]}),`
`,(0,a.jsx)(t.h4,{id:`语义颜色`,children:`语义颜色`}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--primary`}),` / `,(0,a.jsx)(t.code,{children:`--primary-foreground`}),`: 主色调`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--secondary`}),` / `,(0,a.jsx)(t.code,{children:`--secondary-foreground`}),`: 次要色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--muted`}),` / `,(0,a.jsx)(t.code,{children:`--muted-foreground`}),`: 柔和色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--accent`}),` / `,(0,a.jsx)(t.code,{children:`--accent-foreground`}),`: 强调色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--destructive`}),`: 危险/删除操作色`]}),`
`]}),`
`,(0,a.jsx)(t.h4,{id:`功能颜色`,children:`功能颜色`}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--link`}),`: 链接色（默认：#1677ff）`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--border`}),`: 边框色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--divider`}),`: 分割线色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--input`}),`: 输入框边框色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--ring`}),`: 聚焦环色`]}),`
`]}),`
`,(0,a.jsx)(t.h4,{id:`填充色`,children:`填充色`}),`
`,(0,a.jsx)(t.p,{children:`用于背景、卡片等元素的半透明填充：`}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--fill-1`}),`: 15% 不透明度`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--fill-2`}),`: 6% 不透明度`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--fill-3`}),`: 4% 不透明度`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--fill-4`}),`: 2% 不透明度`]}),`
`]}),`
`,(0,a.jsx)(t.h3,{id:`圆角`,children:`圆角`}),`
`,(0,a.jsxs)(t.p,{children:[`主题提供基于 `,(0,a.jsx)(t.code,{children:`--radius`}),` 的响应式圆角系统：`]}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--radius-sm`}),`: 减 4px`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--radius-md`}),`: 减 2px`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--radius-lg`}),`: 基准值（默认 0.625rem）`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--radius-xl`}),`: 加 4px`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--radius-2xl`}),`: 加 8px`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--radius-3xl`}),`: 加 12px`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--radius-4xl`}),`: 加 16px`]}),`
`]}),`
`,(0,a.jsx)(t.h3,{id:`图表颜色`,children:`图表颜色`}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--chart-1`}),` 到 `,(0,a.jsx)(t.code,{children:`--chart-5`}),`: 预设的图表配色方案`]}),`
`]}),`
`,(0,a.jsx)(t.h3,{id:`侧边栏`,children:`侧边栏`}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--sidebar`}),`: 侧边栏背景`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--sidebar-foreground`}),`: 侧边栏文本`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--sidebar-primary`}),` / `,(0,a.jsx)(t.code,{children:`--sidebar-primary-foreground`}),`: 侧边栏主要按钮`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--sidebar-accent`}),` / `,(0,a.jsx)(t.code,{children:`--sidebar-accent-foreground`}),`: 侧边栏强调`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--sidebar-border`}),`: 侧边栏边框`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:`--sidebar-ring`}),`: 侧边栏聚焦环`]}),`
`]}),`
`,(0,a.jsx)(t.h2,{id:`️-自定义主题`,children:`🛠️ 自定义主题`}),`
`,(0,a.jsx)(t.h3,{id:`方法一覆盖-css-变量`,children:`方法一：覆盖 CSS 变量`}),`
`,(0,a.jsx)(t.p,{children:`在你的全局 CSS 中覆盖变量值：`}),`
`,(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:`language-css`,children:`:root {
  /* 修改基础圆角 */
  --radius: 0.5rem;

  /* 修改主色调 */
  --primary: oklch(0.6 0.25 250);
  --primary-foreground: oklch(1 0 0);

  /* 修改链接色 */
  --link: oklch(0.55 0.25 260);
}

.dark {
  /* 暗色模式下的自定义 */
  --primary: oklch(0.8 0.2 250);
}
`})}),`
`,(0,a.jsx)(t.h3,{id:`方法二使用-tailwind-工具类`,children:`方法二：使用 Tailwind 工具类`}),`
`,(0,a.jsx)(t.p,{children:`所有颜色变量都映射到了 Tailwind 的颜色系统：`}),`
`,(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:`language-tsx`,children:`<div className="bg-primary text-primary-foreground">
  主色调背景
</div>

<div className="bg-fill-1 text-foreground-2">
  半透明背景 + 次要文本
</div>

<button className="rounded-lg border-border hover:bg-accent">
  使用主题变量的按钮
</button>
`})}),`
`,(0,a.jsx)(t.h2,{id:`-完整主题代码`,children:`📝 完整主题代码`}),`
`,(0,a.jsx)(i,{language:`css`,code:o,dark:!0}),`
`,(0,a.jsx)(t.h2,{id:`-最佳实践`,children:`💡 最佳实践`}),`
`,(0,a.jsxs)(t.ol,{children:[`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:`使用语义化变量`}),`：优先使用 `,(0,a.jsx)(t.code,{children:`--primary`}),`、`,(0,a.jsx)(t.code,{children:`--muted`}),` 等语义化变量，而不是直接使用具体颜色值`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:`保持一致性`}),`：在整个应用中统一使用主题变量，避免硬编码颜色`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:`测试暗色模式`}),`：确保自定义颜色在亮/暗模式下都有良好的对比度`]}),`
`,(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:`使用 OKLCH`}),`：自定义颜色时推荐使用 OKLCH 格式，获得更好的色彩过渡效果`]}),`
`]}),`
`,(0,a.jsx)(t.h2,{id:`-示例创建自定义主题`,children:`🎯 示例：创建自定义主题`}),`
`,(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:`language-css`,children:`/* app/globals.css */
@import 'tailwindcss';
@import 'browseract-ui/theme.css';

/* 自定义品牌主题 */
:root {
  /* 使用品牌色作为主色调 */
  --primary: oklch(0.55 0.22 260); /* 紫色系 */
  --primary-foreground: oklch(1 0 0);

  /* 调整圆角更圆润 */
  --radius: 1rem;

  /* 自定义链接色 */
  --link: oklch(0.5 0.25 265);
}

.dark {
  --primary: oklch(0.75 0.2 260);
  --background: oklch(0.12 0 0); /* 更深的背景 */
}
`})}),`
`,(0,a.jsx)(t.h2,{id:`-相关资源`,children:`🔗 相关资源`}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:`https://tailwindcss.com/docs`,rel:`nofollow`,children:`Tailwind CSS v4 文档`})}),`
`,(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:`https://oklch.com/`,rel:`nofollow`,children:`OKLCH 颜色空间`})}),`
`,(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:`https://ui.shadcn.com/themes`,rel:`nofollow`,children:`shadcn/ui 主题`})}),`
`]})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}export{c as default};