import{_ as i,c as s,a2 as a,o as e}from"./chunks/framework.CBK1W4-V.js";const y=JSON.parse('{"title":"路由","description":"","frontmatter":{},"headers":[],"relativePath":"admin/router.md","filePath":"admin/router.md","lastUpdated":1726653000000}'),n={name:"admin/router.md"};function l(h,t,r,k,d,p){return e(),s("div",null,t[0]||(t[0]=[a(`<h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h1><p>使用<code>vite-plugin-pages</code>,以文件系统为基础生成路由。</p><h2 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置&quot;">​</a></h2><p>路由相关的配置存放在<code>/src/router</code>文件夹中，在<code>/src/router/routers.ts</code>中能清晰的看到，路由表由<code>静态路由</code>和<code>文件系统路由</code>组成：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> RouteRecordRaw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vue-router</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setupLayouts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">virtual:meta-layouts</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> generatedRoutes</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">virtual:generated-pages</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> staticRouter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@/router/staticRouter</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> routes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">RouteRecordRaw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[] =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> setupLayouts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">	generatedRoutes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">filter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">		return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">?.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">enabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">?.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">constant</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">?.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">layout</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	})</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">staticRouter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">routes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span></span></code></pre></div><p>而静态路由存放在<code>/src/router/staticRouter.ts</code>中，方便实现针对 route 对象的特殊需求，灵活处理。</p><h2 id="导航配置" tabindex="-1">导航配置 <a class="header-anchor" href="#导航配置" aria-label="Permalink to &quot;导航配置&quot;">​</a></h2><p>除了路由的基本配置外，框架还提供了针对导航的自定义配置，这些配置都存放在 meta 对象里。</p><h3 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">/</td><td style="text-align:center;">菜单标题</td></tr></tbody></table><h3 id="icon" tabindex="-1">icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;icon&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">/</td><td style="text-align:center;">菜单图标</td></tr></tbody></table><h3 id="activemenu" tabindex="-1">activeMenu <a class="header-anchor" href="#activemenu" aria-label="Permalink to &quot;activeMenu&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">/</td><td style="text-align:center;">当前路由为详情页时，需要高亮的菜单</td></tr></tbody></table><h3 id="islink" tabindex="-1">isLink <a class="header-anchor" href="#islink" aria-label="Permalink to &quot;isLink&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">/</td><td style="text-align:center;">是否外链</td></tr></tbody></table><h3 id="ishide" tabindex="-1">isHide <a class="header-anchor" href="#ishide" aria-label="Permalink to &quot;isHide&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">/</td><td style="text-align:center;">是否隐藏</td></tr></tbody></table><h3 id="isfull" tabindex="-1">isFull <a class="header-anchor" href="#isfull" aria-label="Permalink to &quot;isFull&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">/</td><td style="text-align:center;">是否全屏(示例：数据大屏页面)</td></tr></tbody></table><h3 id="isaffix" tabindex="-1">isAffix <a class="header-anchor" href="#isaffix" aria-label="Permalink to &quot;isAffix&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">/</td><td style="text-align:center;">是否固定在 tabs nav</td></tr></tbody></table><h3 id="iskeepalive" tabindex="-1">isKeepAlive <a class="header-anchor" href="#iskeepalive" aria-label="Permalink to &quot;isKeepAlive&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">/</td><td style="text-align:center;">是否缓存</td></tr></tbody></table><h2 id="路由守卫" tabindex="-1">路由守卫 <a class="header-anchor" href="#路由守卫" aria-label="Permalink to &quot;路由守卫&quot;">​</a></h2><p>存放在<code>/src/router/index.ts</code>当中，可以针对路由进行配置。</p>`,26)]))}const g=i(n,[["render",l]]);export{y as __pageData,g as default};
