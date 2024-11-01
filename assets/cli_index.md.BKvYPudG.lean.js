import{_ as a,c as n,a2 as i,o as e}from"./chunks/framework.CBK1W4-V.js";const v=JSON.parse('{"title":"命令行工具","description":"","frontmatter":{"title":"命令行工具"},"headers":[],"relativePath":"cli/index.md","filePath":"cli/index.md","lastUpdated":1726804348000}'),p={name:"cli/index.md"};function l(t,s,o,c,h,d){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="command-tool" tabindex="-1">脚手架 <a class="header-anchor" href="#command-tool" aria-label="Permalink to &quot;脚手架 {#command-tool}&quot;">​</a></h1><h2 id="create-app" tabindex="-1">create-app <a class="header-anchor" href="#create-app" aria-label="Permalink to &quot;create-app {#create-app}&quot;">​</a></h2><p>通过 <code>nova-cli create</code> 命令创建项目模板</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>可以在本机安装后使用：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-z5cKP" id="tab-ubDUAlD" checked><label for="tab-ubDUAlD">pnpm</label><input type="radio" name="group-z5cKP" id="tab-S9rDQ45"><label for="tab-S9rDQ45">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 全局安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nova-web-cli</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 全局安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> global</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nova-web-cli</span></span></code></pre></div></div></div><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nova-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my-project</span></span></code></pre></div><p>当前选择创建项目模版，如下：</p><p>前端模版 - PC 端 - nova-sub-pc (PC 端子应用模版) - nova-main-pc (PC 端主应用模版) - H5 端 - nova-h5 (H5 端模版) - 小程序端 - nova-uni-mp (小程序端模版) :::</p><h2 id="nova-cli" tabindex="-1">nova-cli <a class="header-anchor" href="#nova-cli" aria-label="Permalink to &quot;nova-cli {#nova-cli}&quot;">​</a></h2><p>需要在项目根目录执行 <code>nova-cli</code> 命令，输入<code>nova-cli -h</code> 则可以看到如下信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>Commands:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  create &lt;projectName&gt;  Create</span></span>
<span class="line"><span>  dev                   Local development</span></span>
<span class="line"><span>  preview               Local preview</span></span>
<span class="line"><span>  build                 Build compilation</span></span>
<span class="line"><span>  deploy                Uploading Deploy</span></span>
<span class="line"><span>  info                  Show  information</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For more info, run any command with the \`--help\` flag:</span></span>
<span class="line"><span>  $ nova-cli --help</span></span>
<span class="line"><span>  $ nova-cli create --help</span></span>
<span class="line"><span>  $ nova-cli dev --help</span></span>
<span class="line"><span>  $ nova-cli preview --help</span></span>
<span class="line"><span>  $ nova-cli build --help</span></span>
<span class="line"><span>  $ nova-cli deploy --help</span></span>
<span class="line"><span>  $ nova-cli info --help</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -h, --help     Display this message</span></span>
<span class="line"><span>  -v, --version  Display version number</span></span></code></pre></div><h3 id="dev" tabindex="-1">nova-cli dev <a class="header-anchor" href="#dev" aria-label="Permalink to &quot;nova-cli dev {#dev}&quot;">​</a></h3><p>启动本地开发服务器进行项目的开发调试。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ nova-cli dev [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  --mode &lt;mode&gt;  Set mode</span></span>
<span class="line"><span>  -h, --help     Display this message</span></span>
<span class="line"><span>  -v, --version  Display version number</span></span></code></pre></div><p>比如</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 开发环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nova-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --mode</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 产线环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nova-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --mode</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> prod</span></span></code></pre></div><h3 id="build" tabindex="-1">nova-cli build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;nova-cli build {#build}&quot;">​</a></h3><p>编译构建 web 产物。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ nova-cli build [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  --mode &lt;mode&gt;  Set mode</span></span>
<span class="line"><span>  -h, --help     Display this message</span></span>
<span class="line"><span>  -v, --version  Display version number</span></span></code></pre></div><p>比如</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 开发环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nova-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --mode</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 产线环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nova-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --mode</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> prod</span></span></code></pre></div><h3 id="preview" tabindex="-1">nova-cli preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;nova-cli preview {#preview}&quot;">​</a></h3><p>本地预览</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ nova-cli preview</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -h, --help     Display this message</span></span>
<span class="line"><span>  -v, --version  Display version number</span></span></code></pre></div><p>比如</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nova-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> preview</span></span></code></pre></div><h3 id="deploy" tabindex="-1">nova-cli deploy <a class="header-anchor" href="#deploy" aria-label="Permalink to &quot;nova-cli deploy {#deploy}&quot;">​</a></h3><p>部署</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ nova-cli deploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -h, --help     Display this message</span></span>
<span class="line"><span>  -v, --version  Display version number</span></span></code></pre></div><p>比如</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nova-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> deploy</span></span></code></pre></div><h3 id="help" tabindex="-1">nova-cli help <a class="header-anchor" href="#help" aria-label="Permalink to &quot;nova-cli help {#help}&quot;">​</a></h3><p>打印帮助文档。 比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>nova-cli --help</span></span></code></pre></div><h3 id="info" tabindex="-1">nova-cli info <a class="header-anchor" href="#info" aria-label="Permalink to &quot;nova-cli info {#info}&quot;">​</a></h3><p>打印当前项目的有用的环境信息，用来帮助定位问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ nova-cli info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -h, --help     Display this message</span></span>
<span class="line"><span>  -v, --version  Display version number</span></span></code></pre></div><p>比如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fes</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> info</span></span></code></pre></div>`,41)]))}const k=a(p,[["render",l]]);export{v as __pageData,k as default};
