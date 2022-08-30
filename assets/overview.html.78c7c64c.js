import{_ as c,r as u,o as l,c as p,a as o,b as e,w as s,d as n,e as a}from"./app.6946ebe0.js";const i={},d=o("h1",{id:"\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F","aria-hidden":"true"},"#"),n(" \u914D\u7F6E\u6587\u4EF6\u683C\u5F0F")],-1),r={class:"custom-container tip"},_=o("p",{class:"custom-container-title"},"TIP",-1),q=n("\u60A8\u53EF\u4EE5\u5728 "),h=n("\u8FD9\u91CC"),b=n(" \u67E5\u770B V4 \u7248\u672C\u7684\u914D\u7F6E\u6587\u4EF6\u6587\u6863\u3002"),k=a(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5728 V5 \u7248\u672C\u4E2D\uFF0C\u5F15\u5165\u4E86\u65B0\u7684\u914D\u7F6E\u683C\u5F0F\u3002\u6B64\u914D\u7F6E\u683C\u5F0F\u65E8\u5728\u66FF\u6362\u8FC7\u53BB\u7248\u672C\u7684\u914D\u7F6E\u683C\u5F0F\u3002\u76EE\u524D\u6B64\u683C\u5F0F\u4ECD\u5904\u4E8E\u8349\u6848\u9636\u6BB5\uFF0C\u53EF\u80FD\u4F1A\u88AB\u968F\u65F6\u66F4\u6539\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6267\u884C <code>./v2ray run -c $configure_file_name -f jsonv5</code> \u547D\u4EE4\u4EE5\u8FD0\u884C\u60A8\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>log</code>: <a href="#logobject">LogObject</a></p></blockquote><p>\u65E5\u5FD7\u8BBE\u7F6E\uFF0C\u8BBE\u7F6E V2Ray \u65E5\u5FD7\u8BB0\u5F55\u7684</p><p>\u82E5\u672A\u8BBE\u7F6E\u6B64\u9879\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002</p>`,7),v=o("code",null,"dns",-1),g=n(": "),m=n("DnsObject"),f=o("p",null,"\u5185\u7F6E\u7684 DNS \u5BA2\u6237\u7AEF\uFF0C\u7528\u4E8E\u8BBE\u7F6E DNS \u89E3\u6790\u3002",-1),j=o("p",null,"\u82E5\u672A\u8BBE\u7F6E\u6B64\u9879\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528\u672C\u673A\u7684 DNS \u8BBE\u7F6E\u3002",-1),y=o("code",null,"routing",-1),O=n(": "),x=n("RoutingObject"),N=o("p",null,"\u8DEF\u7531\u529F\u80FD\u3002",-1),V=o("p",null,"\u82E5\u672A\u8BBE\u7F6E\u6B64\u9879\uFF0C\u5219\u6240\u6709\u6D41\u91CF\u90FD\u4F1A\u88AB\u8F6C\u53D1\u5230\u7B2C\u4E00\u4E2A\u51FA\u7AD9\u3002",-1),L=o("code",null,"inbounds",-1),S=n(": [ "),R=n("InboundObject"),w=n(" ]"),D=o("p",null,"\u5165\u7AD9\u8BBE\u7F6E\u3002",-1),I=o("code",null,"outbounds",-1),C=n(": [ "),T=n("OutboundObject"),W=n(" ]"),E=o("p",null,"\u51FA\u7AD9\u8BBE\u7F6E\u3002",-1),B=o("code",null,"services",-1),P=n(": [ "),F=n("ServiceObject"),J=n(" ]"),$=a(`<p>\u8F85\u52A9\u670D\u52A1\uFF0C\u914D\u7F6E\u9644\u52A0\u7EC4\u4EF6\u7684\u529F\u80FD\u3002</p><p>\u4F7F\u7528\u8F6F\u4EF6\u7684\u57FA\u672C\u529F\u80FD\u4E0D\u9700\u8981\u914D\u7F6E\u6B64\u9879\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6B64\u9879\u4EE5\u4F7F\u7528\u9AD8\u7EA7\u529F\u80FD\u3002</p><h2 id="logobject" tabindex="-1"><a class="header-anchor" href="#logobject" aria-hidden="true">#</a> LogObject</h2><p><code>LogObject</code> \u662F\u914D\u7F6E\u6587\u4EF6\u4E2D <code>log</code> \u5B57\u6BB5\u6240\u4F7F\u7528\u7684 JSON \u5B57\u6BB5\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>access</code>: LogSpecObject</p></blockquote><p>\u8BBF\u95EE\u65E5\u5FD7\u8BBE\u7F6E\u3002</p><blockquote><p><code>error</code>: LogSpecObject</p></blockquote><p>\u9519\u8BEF\u65E5\u5FD7\u8BBE\u7F6E\u3002</p><h2 id="logspecobject" tabindex="-1"><a class="header-anchor" href="#logspecobject" aria-hidden="true">#</a> LogSpecObject</h2><blockquote><p><code>Type</code>: &quot;None&quot; | &quot;Console&quot; | &quot;File&quot;</p></blockquote><ul><li><code>&quot;None&quot;</code>\uFF1A\u65E5\u5FD7\u5C06\u88AB\u4E22\u5F03\u3002</li><li><code>&quot;Console&quot;</code>\uFF1A\u65E5\u5FD7\u5C06\u88AB\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002</li><li><code>&quot;File&quot;</code>\uFF1A\u65E5\u5FD7\u5C06\u88AB\u8F93\u51FA\u5230\u4E00\u4E2A\u6587\u4EF6\u3002</li></ul><blockquote><p><code>Path</code>: string</p></blockquote><p>\u65E5\u5FD7\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5176\u503C\u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C \u4F8B\u5982 <code>&quot;/tmp/v2ray/_error.log&quot;</code> (Linux) \u6216 <code>&quot;C:\\\\Temp\\\\v2ray\\\\_error.log&quot;</code> (Windows)\u3002</p><blockquote><p><code>Level</code>: &quot;Debug&quot; | &quot;Info&quot; | &quot;Warning&quot; | &quot;Error&quot; | &quot;None&quot;</p></blockquote><p>\u65E5\u5FD7\u7B49\u7EA7\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>&quot;Warning&quot;</code>\u3002</p><ul><li><code>&quot;Debug&quot;</code>\uFF1A\u8BE6\u7EC6\u7684\u8C03\u8BD5\u6027\u4FE1\u606F\u3002\u540C\u65F6\u5305\u542B\u6240\u6709 <code>&quot;Info&quot;</code> \u5185\u5BB9</li><li><code>&quot;Info&quot;</code>\uFF1AV2Ray \u5728\u8FD0\u884C\u65F6\u7684\u72B6\u6001\uFF0C\u4E0D\u5F71\u54CD\u6B63\u5E38\u4F7F\u7528\u3002\u540C\u65F6\u5305\u542B\u6240\u6709 <code>&quot;Warning&quot;</code> \u5185\u5BB9\u3002</li><li><code>&quot;Warning&quot;</code>\uFF1AV2Ray \u53EF\u80FD\u9047\u5230\u4E86\u4E00\u4E9B\u95EE\u9898\uFF0C\u901A\u5E38\u662F\u5916\u90E8\u95EE\u9898\uFF0C\u4E0D\u5F71\u54CD V2Ray \u7684\u6B63\u5E38\u8FD0\u884C\uFF0C\u4F46\u6709\u53EF\u80FD\u5F71\u54CD\u7528\u6237\u7684\u4F53\u9A8C\u3002\u540C\u65F6\u5305\u542B\u6240\u6709 <code>&quot;Error&quot;</code> \u5185\u5BB9\u3002</li><li><code>&quot;Error&quot;</code>\uFF1AV2Ray \u9047\u5230\u4E86\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\u7684\u95EE\u9898\uFF0C\u9700\u8981\u7ACB\u5373\u89E3\u51B3\u3002</li><li><code>&quot;None&quot;</code>\uFF1A\u4E0D\u8BB0\u5F55\u4EFB\u4F55\u5185\u5BB9\u3002</li></ul>`,17);function z(A,G){const t=u("RouterLink");return l(),p("div",null,[d,o("div",r,[_,o("p",null,[q,e(t,{to:"/config/overview.html"},{default:s(()=>[h]),_:1}),b])]),k,o("blockquote",null,[o("p",null,[v,g,e(t,{to:"/v5/config/dns.html"},{default:s(()=>[m]),_:1})])]),f,j,o("blockquote",null,[o("p",null,[y,O,e(t,{to:"/v5/config/router.html"},{default:s(()=>[x]),_:1})])]),N,V,o("blockquote",null,[o("p",null,[L,S,e(t,{to:"/v5/config/inbound.html"},{default:s(()=>[R]),_:1}),w])]),D,o("blockquote",null,[o("p",null,[I,C,e(t,{to:"/v5/config/outbound.html"},{default:s(()=>[T]),_:1}),W])]),E,o("blockquote",null,[o("p",null,[B,P,e(t,{to:"/v5/config/service.html"},{default:s(()=>[F]),_:1}),J])]),$])}const K=c(i,[["render",z],["__file","overview.html.vue"]]);export{K as default};
