import{_ as a,B as i,c as l,a2 as t,G as o,o as s}from"./chunks/framework.BCQzPhDi.js";const f=JSON.parse('{"title":"入门","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ready.md","filePath":"guide/ready.md","lastUpdated":1726653000000}'),m={name:"guide/ready.md"};function n(c,e,d,p,h,u){const r=i("ZoomImg");return s(),l("div",null,[e[0]||(e[0]=t('<h1 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to &quot;入门&quot;">​</a></h1><h2 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h2><p>使用本模板前，需要在本地依次安装好 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js</a>, <a href="https://pnpm.io/zh/" target="_blank" rel="noreferrer">pnpm</a>, <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a> 和 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a>。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Node.js 需要使用 16+ 版本，建议为 18+ 版本。</p></div><p>然后在 Visual Studio Code 里安装好以下扩展：</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">Vue-Official</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noreferrer">TypeScript Vue Plugin</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noreferrer">EditorConfig for VS Code</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noreferrer">Stylelint</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">Prettier - Code formatter</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">Tailwind CSS IntelliSense</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noreferrer">DotENV</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml" target="_blank" rel="noreferrer">YAML</a></li></ul><p>在 Visual Studio Code 里打开源码的文件夹，右下角会自动提示需要安装的依赖，直接点击安装即可。</p>',7)),o(r,{src:"/vscode.png"}),e[1]||(e[1]=t('<div class="tip custom-block"><p class="custom-block-title">建议</p><p>以下则是建议安装的扩展，安装它们将在一定程度上提升开发效率。</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans" target="_blank" rel="noreferrer">Chinese (Simplified) Language Pack for Visual Studio Code</a> 中文语言包</li><li><a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense" target="_blank" rel="noreferrer">Npm Intellisense</a> 自动完成 npm 模块名</li><li><a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noreferrer">Path Intellisense</a> 自动完成文件名</li><li><a href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight" target="_blank" rel="noreferrer">Color Highlight</a> 在代码中高亮颜色</li><li><a href="https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag" target="_blank" rel="noreferrer">Highlight Matching Tag</a> 高亮显示匹配的标签</li><li><a href="https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview" target="_blank" rel="noreferrer">Image preview</a> 图片预览</li><li><a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank" rel="noreferrer">indent-rainbow</a> 彩虹缩进提示</li><li><a href="https://marketplace.visualstudio.com/items?itemName=UvDream.git-commit-lint-vscode" target="_blank" rel="noreferrer">git-commit-lint-vscode</a> 代码提交规范</li><li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag" target="_blank" rel="noreferrer">Auto Rename Tag</a> 自动重命名标签</li><li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" target="_blank" rel="noreferrer">Auto Close Tag</a> 自动关闭标签</li></ul></div><p>除此之外，还需要准备好开发使用的浏览器，推荐使用 <a href="https://www.google.cn/chrome/" target="_blank" rel="noreferrer">Chrome</a> ，并且在 Chrome 里安装好 <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noreferrer">Vue.js devtools 扩展</a>，安装 Vue 官方提供的调试工具在一定程度上可以提升解决 bug 的效率，当然这个扩展开启后，可能在开发环境操作会有些许卡顿，建议不需要时候可以将扩展禁用。</p><p>不过由于安装 Vue.js devtools 需要访问 Chrome 应用商店，如果在大陆地区访问，需要自行准备相关<strong>可访问外网</strong>的工具。如果不具备该条件，也可访问 <a href="https://devtools.vuejs.org/" target="_blank" rel="noreferrer">Vue.js devtools 官网</a> 了解本地构建或者下载支持 Edge/Firefox 的 Vue.js devtools 。</p>',3))])}const k=a(m,[["render",n]]);export{f as __pageData,k as default};