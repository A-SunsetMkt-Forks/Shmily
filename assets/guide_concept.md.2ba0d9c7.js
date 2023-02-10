import{_ as e,c as a,o as l,a as s}from"./app.2f8d1b76.js";const C=JSON.parse('{"title":"理念","description":"","frontmatter":{},"headers":[{"level":3,"title":"why","slug":"why","link":"#why","children":[]},{"level":3,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":3,"title":"感想","slug":"感想","link":"#感想","children":[]}],"relativePath":"guide/concept.md","lastUpdated":1676009869000}'),n={name:"guide/concept.md"},t=s(`<h1 id="理念" tabindex="-1">理念 <a class="header-anchor" href="#理念" aria-hidden="true">#</a></h1><h3 id="why" tabindex="-1">why <a class="header-anchor" href="#why" aria-hidden="true">#</a></h3><p>现有的聊天记录导出归档项目主要分为以下几步, 以 Wechat 为例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">导出数据库 --&gt; 解密数据库 --&gt; 解密资源(图片等) --&gt; 生成 HTML (多为模板直出)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在此流程中有很多弊端</p><ul><li>全流程耦合 <ul><li>如果对产物不满意, 只能从头开始造轮子, 而不能从中间(如解密后的数据库)开始</li><li>只能拿到当前 HTML 所需导出的数据, 无法拿到数据库中完整的额外字段</li></ul></li><li>生成 HTML 结果 <ul><li>多数前端 HTML 无分页, 几百兆的 HTML 不可用</li><li>导出的归档数据无法查询, 筛选等. 失去了归档数据的意义</li><li>没有大数据的统计 数据未体现额外价值</li></ul></li><li>无法多项目如 QQ Wechat 按时间线合并查看</li></ul><hr><h3 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-hidden="true">#</a></h3><p>基于以上问题, 我提出以下架构进行 &quot;前后端&quot; &quot;功能化&quot; 拆分, 减少后人的 <strong>轮子</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">          |----------------------- Get -----------------------|------------------------ Show -------------------------|</span></span>
<span class="line"><span style="color:#A6ACCD;">          |------- ExportDB ------|----------- ToMsg ---------|------- ModifyServer ------|---------- Web ------------|</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Wechat:   导出数据库 -&gt; 解密数据库 -&gt; 解密资源(图片等)                       添加评论                  消息/评论 筛选查询</span></span>
<span class="line"><span style="color:#A6ACCD;">                                              \\                        /            \\            /</span></span>
<span class="line"><span style="color:#A6ACCD;">SMS:      导出数据   -&gt;                       导出为标准数据 -&gt; 合并处理-&gt;  -修改错误-  -&gt; 存档显示 -&gt;  时间线合并显示</span></span>
<span class="line"><span style="color:#A6ACCD;">                                              /                        \\            /            \\</span></span>
<span class="line"><span style="color:#A6ACCD;">MobileQQ: 导出数据库 -&gt;              解密资源(图片等)                       数据预处理                 大数据图表</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">更多来源...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>将过程分为 <code>Get</code>(后端采集) 和 <code>Show</code>(前端展示), 并细化为 4 个部分(库)</p><ul><li>Get <ul><li>ExportDB 从设备导出原始数据(库)并解密</li><li>ToMsg 从解密数据库导出为标准数据 <code>\${Shmily-Msg}</code>, 并解密资源(图片等) <ul><li>导出的数据为 json 格式, 并尽可能导出所有数据, 不管用没用</li></ul></li></ul></li><li>Show <ul><li>ModifyServer 用于手动修改 <em>数据文件</em> 和 <em>添加评论</em></li><li>Web 用于最终显示 <em>时间线</em> 和 <em>大数据图表</em></li></ul></li></ul><p>让过程变为 4 个部分后</p><ul><li><p>完全解耦, 便于各种二开造轮子,</p></li><li><p>展示部分脱离传统 HTML 模板, 使用现代 Web 框架后展示上有了更多可能性. 更多 <code>Show</code> 的问答参考 <a href="https://github.com/lqzhgood/Shmily-Show/blob/main/docs/Q_A.md" target="_blank" rel="noreferrer">Shmily-Show/docs/Q_A.md</a></p></li><li><p>各种各样的 Get 都可以融合在一个 Show 中时间线展示</p></li></ul><h3 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-hidden="true">#</a></h3><p>拆分后势必增加运行成本, 我希望通过批处理等脚本方式粘合各个库之间的运行, 尽量做到开箱即用. 也会完善文档让非程序员也能阅读明白, 如有不懂之处, 欢迎 Github 提 <a href="https://github.com/lqzhgood/Shmily/issues/new" target="_blank" rel="noreferrer">issues</a>.</p><h3 id="感想" tabindex="-1">感想 <a class="header-anchor" href="#感想" aria-hidden="true">#</a></h3><p>花了近 3 年用 JS 写了一大堆的 <a href="./use/get.html">Get</a>, 我发现还是原生语言开发最方便, 如 MobileQQ 中 <code>Java Serializable</code> 的<a href="https://github.com/ZhangJun2017/QQChatHistoryExporter/issues/4" target="_blank" rel="noreferrer">问题</a> 用 <code>JS</code> 太难了, 所以以后我还是希望由开源社区贡献与维护 <a href="./use/get.html">Get</a>, 我会尽力维护 <a href="https://github.com/lqzhgood/Shmily-Show" target="_blank" rel="noreferrer">Show</a> 部分.</p><blockquote><p>数据本身就归属用户, 不提供数据导出的都是耍流氓.</p></blockquote>`,19),o=[t];function i(p,r,c,h,d,u){return l(),a("div",null,o)}const A=e(n,[["render",i]]);export{C as __pageData,A as default};