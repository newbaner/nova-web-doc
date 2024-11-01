import{_ as n,c as i,a2 as a,o as p}from"./chunks/framework.CBK1W4-V.js";const g=JSON.parse('{"title":"项目结构","description":"","frontmatter":{},"headers":[],"relativePath":"admin/structure.md","filePath":"admin/structure.md","lastUpdated":1726653000000}'),l={name:"admin/structure.md"};function e(t,s,h,k,r,c){return p(),i("div",null,s[0]||(s[0]=[a(`<h1 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h1><p>一个 Admin 工程，默认包含如下目录及文件：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── nginx</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       ├── dev.conf</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       ├── test.conf</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       ├── prod.conf</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       └── run.sh</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── plop-templates plop模板</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       ├── component 组件</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       ├── page 页面</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       └── store 状态</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── public</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       ├── index.html</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│       └── config.js 注入式配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── src 源文件</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── api 接口</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── example.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── assets  静态资源</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── example.png</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── components 全局组件</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── example.vue</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── config 环境配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── modules 各环境变量配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── constants 公共常量</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── common.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── directives 自定义指令</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── modules</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── hooks</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── i18n 国际化</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── modules</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── layouts 布局组件</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── components</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── index.vue</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── menu 菜单路由映射</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── modules</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── pages 页面</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── example</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── router 路由</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── index.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── routers.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── staticRouter.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── store 状态管理</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── interface</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── modules</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── styles 样式</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── index.scss</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── types 类型维护</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── auto-imports.d.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── components.d.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── env.d.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── global.d.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── table.d.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── utils 工具</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── axios.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── color.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── index.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── mittBus.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   ├── nprogress.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   │   └── piniaPersist.ts</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   ├── main.ts 程序入口</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">│   └── App.vue 页面挂载入口</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── plopfile.js plop配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── .prettierrc.js prettier配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── .gitignore</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── .eslintignore</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── .eslintrc.js eslint配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── .editorconfig</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── Dockerfile</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── README.md</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── package.json</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── tsconfig.json ts配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">├── uno.config.ts unocss配置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">└── vite.config.ts vite配置</span></span></code></pre></div>`,3)]))}const y=n(l,[["render",e]]);export{g as __pageData,y as default};
