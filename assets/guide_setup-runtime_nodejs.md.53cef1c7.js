import{_ as s,c as e,o as n,a as o}from"./app.8d5c3eda.js";const a="/Shmily/assets/open_cmd.2cbc2792.png",_=JSON.parse('{"title":"开始 Nodejs 项目","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 安装 nodejs","slug":"_1-安装-nodejs","link":"#_1-安装-nodejs","children":[]},{"level":2,"title":"2. 安装项目依赖","slug":"_2-安装项目依赖","link":"#_2-安装项目依赖","children":[]},{"level":2,"title":"3. 启动程序","slug":"_3-启动程序","link":"#_3-启动程序","children":[]}],"relativePath":"guide/setup-runtime/nodejs.md","lastUpdated":1674539649000}'),l={name:"guide/setup-runtime/nodejs.md"},p=o('<h1 id="开始-nodejs-项目" tabindex="-1">开始 Nodejs 项目 <a class="header-anchor" href="#开始-nodejs-项目" aria-hidden="true">#</a></h1><h2 id="_1-安装-nodejs" tabindex="-1">1. 安装 nodejs <a class="header-anchor" href="#_1-安装-nodejs" aria-hidden="true">#</a></h2><ul><li>查看 <code>package.json</code> 中 <code>engines</code> 字段获取项目所需 <code>nodejs</code> 版本</li><li>从 <code>https://nodejs.org/dist/</code> 下载相应版本的 <code>nodejs</code><ul><li>如果没有 <code>engines</code> 字段，从官网 <code>https://nodejs.org/</code> 下载 <code>LTS</code> 版本</li></ul></li><li>安装过程，选项全部默认</li></ul><h2 id="_2-安装项目依赖" tabindex="-1">2. 安装项目依赖 <a class="header-anchor" href="#_2-安装项目依赖" aria-hidden="true">#</a></h2><ul><li>命令行打开项目目录 <ul><li>Windows 用户在地址栏输入 cmd 回车即可打开当前目录命令行 <img src="'+a+`" alt="open cmd"></li></ul></li><li>执行命令安装依赖<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="_3-启动程序" tabindex="-1">3. 启动程序 <a class="header-anchor" href="#_3-启动程序" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>nodejs 项目启动方式并不唯一, 下面为常用的 nodejs 项目启动方式, 仅供参考</p></div><ul><li><p>按照项目说明启动程序</p></li><li><p>若项目无说明, 从 <code>package.json</code> 文件中的 <code>scripts</code> 字段获取执行脚本名称, 通过 <code>npm run {script}</code> 启动程序</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>若 <code>script</code> 中有多个脚本名称(如上图), 一般来说，<code>build</code> 代表生产(正式)，<code>dev</code> 代表测试, 执行 <code>npm run build</code> 即可</p></div></li><li><p>若项目 <code>package.json</code> 中没有 <code>script</code> 字段, 则大多数情况下, 使用 <code>node index.js</code> 直接启动程序</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>index.js 是大部分 nodejs 项目的默认入口文件</p></div></li></ul>`,8),c=[p];function t(d,i,r,D,u,F){return n(),e("div",null,c)}const h=s(l,[["render",t]]);export{_ as __pageData,h as default};
