import{_ as c,r as l,o as p,c as u,a as n,b as t,w as e,e as a,d as o}from"./app.6946ebe0.js";const i={},d=a(`<h1 id="\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u683C\u5F0F</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>V2Ray \u7684\u914D\u7F6E\u6587\u4EF6\u5F62\u5F0F\u5982\u4E0B\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u901A\u7528\u4E00\u79CD\u5F62\u5F0F\uFF0C\u53EA\u662F\u5B9E\u9645\u7684\u914D\u7F6E\u4E0D\u4E00\u6837\u3002</p><p>\u5982\u679C\u4F60\u521A\u63A5\u89E6 V2Ray\uFF0C\u5E94\u5F53\u4ECE\u4E86\u89E3 Inbounds \u548C Outbounds \u5F00\u59CB\uFF0C\u53EA\u586B\u5FC5\u987B\u7684\u9009\u9879\u5373\u53EF\u542F\u52A8\u7A0B\u5E8F\u3002\u63A5\u4E0B\u6765\u5FAA\u5E8F\u6E10\u8FDB\u4E86\u89E3\u5176\u5B83\u7EC4\u4EF6\uFF0C\u4F60\u4F1A\u53D1\u73B0 V2Ray \u5E76\u4E0D\u96BE\u638C\u63E1\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reverse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fakedns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;browserForwarder&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;observatory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>log</code>: <a href="#logobject">LogObject</a></p></blockquote><p>\u65E5\u5FD7\u914D\u7F6E\uFF0C\u8868\u793A V2Ray \u5982\u4F55\u8F93\u51FA\u65E5\u5FD7\u3002</p>`,7),r=n("code",null,"api",-1),_=o(": "),k=o("ApiObject"),q=n("p",null,"\u8FDC\u7A0B\u63A7\u5236\u3002",-1),h=n("code",null,"dns",-1),b=o(": "),v=o("DnsObject"),g=n("p",null,"\u5185\u7F6E\u7684 DNS \u670D\u52A1\u5668\uFF0C\u82E5\u6B64\u9879\u4E0D\u5B58\u5728\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528\u672C\u673A\u7684 DNS \u8BBE\u7F6E\u3002",-1),m=n("code",null,"routing",-1),f=o(": "),y=o("RoutingObject"),j=n("p",null,"\u8DEF\u7531\u529F\u80FD\u3002",-1),w=n("code",null,"policy",-1),O=o(": "),R=o("PolicyObject"),V=n("p",null,"\u672C\u5730\u7B56\u7565\uFF0C\u53EF\u8FDB\u884C\u4E00\u4E9B\u6743\u9650\u76F8\u5173\u7684\u914D\u7F6E\u3002",-1),x=n("code",null,"inbounds",-1),L=o(": [ "),N=o("InboundObject"),D=o(" ]"),S=n("p",null,"\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5143\u7D20\u662F\u4E00\u4E2A\u5165\u7AD9\u8FDE\u63A5\u914D\u7F6E\u3002",-1),B=n("code",null,"outbounds",-1),C=o(": [ "),F=o("OutboundObject"),T=o(" ]"),I=n("p",null,"\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5143\u7D20\u662F\u4E00\u4E2A\u51FA\u7AD9\u8FDE\u63A5\u914D\u7F6E\u3002\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A\u4E3B\u51FA\u7AD9\u534F\u8BAE\u3002\u5F53\u8DEF\u7531\u5339\u914D\u4E0D\u5B58\u5728\u6216\u6CA1\u6709\u5339\u914D\u6210\u529F\u65F6\uFF0C\u6D41\u91CF\u7531\u4E3B\u51FA\u7AD9\u534F\u8BAE\u53D1\u51FA\u3002",-1),W=n("code",null,"transport",-1),A=o(": "),E=o("TransportObject"),P=n("p",null,"\u7528\u4E8E\u914D\u7F6E V2Ray \u5982\u4F55\u4E0E\u5176\u5B83\u670D\u52A1\u5668\u5EFA\u7ACB\u548C\u4F7F\u7528\u7F51\u7EDC\u8FDE\u63A5\u3002",-1),z=n("code",null,"stats",-1),G=o(": "),H=o("StatsObject"),J=n("p",null,"\u7EDF\u8BA1\u4FE1\u606F\u3002",-1),K=n("code",null,"reverse",-1),M=o(": "),Q=o("ReverseObject"),U=n("p",null,"\u53CD\u5411\u4EE3\u7406\u3002",-1),X=n("code",null,"fakedns",-1),Y=o(": [ "),Z=o("FakeDnsObject"),$=o(" ]"),nn=n("p",null,"\u865A\u62DF DNS \u670D\u52A1\u5668\u3002",-1),on=n("code",null,"browserForwarder",-1),sn=o(": "),tn=o("BrowserForwarderObject"),en=n("p",null,"\u6D4F\u89C8\u5668\u8F6C\u53D1\u6A21\u5757\u3002",-1),an=n("code",null,"observatory",-1),cn=o(": "),ln=o("ObservatoryObject"),pn=a(`<p>\u8FDE\u63A5\u89C2\u6D4B\u6A21\u5757\u3002</p><h2 id="logobject" tabindex="-1"><a class="header-anchor" href="#logobject" aria-hidden="true">#</a> LogObject</h2><p><code>LogObject</code> \u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6\u7684 <code>log</code> \u9879\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6587\u4EF6\u5730\u5740&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6587\u4EF6\u5730\u5740&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>access</code>: string</p></blockquote><p>\u8BBF\u95EE\u65E5\u5FD7\u7684\u6587\u4EF6\u5730\u5740\uFF0C\u5176\u503C\u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u6587\u4EF6\u5730\u5740\uFF0C\u5982<code>&quot;/var/log/v2ray/access.log&quot;</code>\uFF08Linux\uFF09\u6216\u8005<code>&quot;C:\\\\Temp\\\\v2ray\\\\_access.log&quot;</code>\uFF08Windows\uFF09\u3002\u5F53\u6B64\u9879\u4E0D\u6307\u5B9A\u6216\u4E3A\u7A7A\u503C\u65F6\uFF0C\u8868\u793A\u5C06\u65E5\u5FD7\u8F93\u51FA\u81F3 stdout\u3002V2Ray 4.20 \u52A0\u5165\u4E86\u7279\u6B8A\u503C<code>none</code>\uFF0C\u5373\u5173\u95ED access log\u3002</p><blockquote><p><code>error</code>: string</p></blockquote><p>\u9519\u8BEF\u65E5\u5FD7\u7684\u6587\u4EF6\u5730\u5740\uFF0C\u5176\u503C\u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u6587\u4EF6\u5730\u5740\uFF0C\u5982<code>&quot;/var/log/v2ray/error.log&quot;</code>\uFF08Linux\uFF09\u6216\u8005<code>&quot;C:\\\\Temp\\\\v2ray\\\\_error.log&quot;</code>\uFF08Windows\uFF09\u3002\u5F53\u6B64\u9879\u4E0D\u6307\u5B9A\u6216\u4E3A\u7A7A\u503C\u65F6\uFF0C\u8868\u793A\u5C06\u65E5\u5FD7\u8F93\u51FA\u81F3 stdout\u3002V2Ray 4.20 \u52A0\u5165\u4E86\u7279\u6B8A\u503C<code>none</code>\uFF0C\u5373\u5173\u95ED error log\uFF08\u8DDF<code>loglevel: &quot;none&quot;</code>\u7B49\u4EF7\uFF09\u3002</p><blockquote><p><code>loglevel</code>: &quot;debug&quot; | &quot;info&quot; | &quot;warning&quot; | &quot;error&quot; | &quot;none&quot;</p></blockquote><p>\u65E5\u5FD7\u7684\u7EA7\u522B\u3002\u9ED8\u8BA4\u503C\u4E3A <code>&quot;warning&quot;</code>\u3002</p><ul><li><code>&quot;debug&quot;</code>\uFF1A\u8BE6\u7EC6\u7684\u8C03\u8BD5\u6027\u4FE1\u606F\u3002\u540C\u65F6\u5305\u542B\u6240\u6709 <code>&quot;info&quot;</code> \u5185\u5BB9\u3002</li><li><code>&quot;info&quot;</code>\uFF1AV2Ray \u5728\u8FD0\u884C\u65F6\u7684\u72B6\u6001\uFF0C\u4E0D\u5F71\u54CD\u6B63\u5E38\u4F7F\u7528\u3002\u540C\u65F6\u5305\u542B\u6240\u6709 <code>&quot;warning&quot;</code> \u5185\u5BB9\u3002</li><li><code>&quot;warning&quot;</code>\uFF1AV2Ray \u9047\u5230\u4E86\u4E00\u4E9B\u95EE\u9898\uFF0C\u901A\u5E38\u662F\u5916\u90E8\u95EE\u9898\uFF0C\u4E0D\u5F71\u54CD V2Ray \u7684\u6B63\u5E38\u8FD0\u884C\uFF0C\u4F46\u6709\u53EF\u80FD\u5F71\u54CD\u7528\u6237\u7684\u4F53\u9A8C\u3002\u540C\u65F6\u5305\u542B\u6240\u6709 <code>&quot;error&quot;</code> \u5185\u5BB9\u3002</li><li><code>&quot;error&quot;</code>\uFF1AV2Ray \u9047\u5230\u4E86\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\u7684\u95EE\u9898\uFF0C\u9700\u8981\u7ACB\u5373\u89E3\u51B3\u3002</li><li><code>&quot;none&quot;</code>\uFF1A\u4E0D\u8BB0\u5F55\u4EFB\u4F55\u5185\u5BB9\u3002</li></ul>`,11);function un(dn,rn){const s=l("RouterLink");return p(),u("div",null,[d,n("blockquote",null,[n("p",null,[r,_,t(s,{to:"/config/api.html"},{default:e(()=>[k]),_:1})])]),q,n("blockquote",null,[n("p",null,[h,b,t(s,{to:"/config/dns.html"},{default:e(()=>[v]),_:1})])]),g,n("blockquote",null,[n("p",null,[m,f,t(s,{to:"/config/routing.html"},{default:e(()=>[y]),_:1})])]),j,n("blockquote",null,[n("p",null,[w,O,t(s,{to:"/config/policy.html"},{default:e(()=>[R]),_:1})])]),V,n("blockquote",null,[n("p",null,[x,L,t(s,{to:"/config/inbounds.html"},{default:e(()=>[N]),_:1}),D])]),S,n("blockquote",null,[n("p",null,[B,C,t(s,{to:"/config/outbounds.html"},{default:e(()=>[F]),_:1}),T])]),I,n("blockquote",null,[n("p",null,[W,A,t(s,{to:"/config/transport.html"},{default:e(()=>[E]),_:1})])]),P,n("blockquote",null,[n("p",null,[z,G,t(s,{to:"/config/stats.html"},{default:e(()=>[H]),_:1})])]),J,n("blockquote",null,[n("p",null,[K,M,t(s,{to:"/config/reverse.html"},{default:e(()=>[Q]),_:1})])]),U,n("blockquote",null,[n("p",null,[X,Y,t(s,{to:"/config/fakedns.html"},{default:e(()=>[Z]),_:1}),$])]),nn,n("blockquote",null,[n("p",null,[on,sn,t(s,{to:"/config/browserforwarder.html"},{default:e(()=>[tn]),_:1})])]),en,n("blockquote",null,[n("p",null,[an,cn,t(s,{to:"/config/observatory.html"},{default:e(()=>[ln]),_:1})])]),pn])}const kn=c(i,[["render",un],["__file","overview.html.vue"]]);export{kn as default};
