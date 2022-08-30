import{_ as e,r as t,o as p,c,a as s,b as a,d as n,e as u}from"./app.6946ebe0.js";const r={},l=s("h1",{id:"socks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#socks","aria-hidden":"true"},"#"),n(" Socks")],-1),i=s("ul",null,[s("li",null,[n("\u540D\u79F0\uFF1A"),s("code",null,"socks")]),s("li",null,"\u7C7B\u578B\uFF1A\u5165\u7AD9 / \u51FA\u7AD9")],-1),d=n("\u6807\u51C6 Socks \u534F\u8BAE\u5B9E\u73B0\uFF0C\u517C\u5BB9 "),k={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},b=n("Socks 4"),v=n("\u3001Socks 4a \u548C "),q={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},m=n("Socks 5"),h=n("\u3002"),g=s("p",null,[n("Socks \u7684\u914D\u7F6E\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C"),s("code",null,"InboundConfigurationObject"),n(" \u548C "),s("code",null,"OutboundConfigurationObject"),n("\uFF0C\u5206\u522B\u5BF9\u5E94\u5165\u7AD9\u548C\u51FA\u7AD9\u534F\u8BAE\u914D\u7F6E\u4E2D\u7684 "),s("code",null,"settings"),n(" \u9879\u3002")],-1),_={class:"custom-container warning"},j=s("p",{class:"custom-container-title"},"WARNING",-1),f=s("p",null,"\u5982\u679C\u4F60\u5C06 Socks5 \u4EE3\u7406\u5728\u4E0D\u5B89\u5168\u7684\u7F51\u7EDC\u73AF\u5883\u4E2D\u5206\u4EAB\u7ED9\u5176\u4ED6\u4EBA\u4F7F\u7528\uFF0C\u5EFA\u8BAE\u642D\u914D\u9632\u706B\u5899\u4F7F\u7528\u3002",-1),y=n("Rfc: "),S={href:"https://github.com/v2fly/v2fly-github-io/issues/104",target:"_blank",rel:"noopener noreferrer"},O=n("SOCKS 5 \u7684\u8BA4\u8BC1\u5728\u4F7F\u7528 UDP \u65F6\u53EF\u88AB\u7ED5\u8FC7"),x=u(`<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\uFF1A\u867D\u7136 Socks Outbound \u53EF\u4EE5\u4F5C\u4E3A\u5BF9\u5916\u8BBF\u95EE\u7684\u914D\u7F6E\uFF0C\u4F46 Socks \u534F\u8BAE\u6CA1\u6709\u5BF9\u4F20\u8F93\u52A0\u5BC6\uFF0C\u4E0D\u9002\u5B9C\u7ECF\u516C\u7F51\u4E2D\u4F20\u8F93\u3002</p><p>Socks Outbound \u66F4\u6709\u610F\u4E49\u7684\u7528\u6CD5\u662F\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u53EA\u80FD\u4F7F\u7528 Socks Proxy \u5BF9\u5916\u8BBF\u95EE\u5185\u90E8\u7F51\u7EDC\u4E2D\uFF0C\u4F5C\u4E3A\u4E3A\u5176\u4ED6\u534F\u8BAE\u8FDE\u63A5\u4EE3\u7406\u670D\u52A1\u5668\u7684\u524D\u7F6E\u4EE3\u7406\u4F7F\u7528\uFF08\u89C1 <code>OutboundObject</code> \u7684 <code>ProxySettingsObject</code>\uFF09\u3002</p><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>Socks \u670D\u52A1\u5668\u5217\u8868\uFF0C\u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u670D\u52A1\u5668\u914D\u7F6E\u3002</p><blockquote><p><code>version</code>: &quot;5&quot; | &quot;4a&quot; | &quot;4&quot;</p></blockquote><p>Socks \u534F\u8BAE\u7248\u672C\u3002 (v4.42.2+)</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
    <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>\u670D\u52A1\u5668\u5730\u5740\u3002</p><blockquote><p><code>port</code>: number</p></blockquote><p>\u670D\u52A1\u5668\u7AEF\u53E3</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>\u7528\u6237\u5217\u8868\uFF0C\u5176\u4E2D\u6BCF\u4E00\u9879\u4E00\u4E2A\u7528\u6237\u914D\u7F6E\u3002\u5F53\u5217\u8868\u4E0D\u4E3A\u7A7A\u65F6\uFF0CSocks \u5BA2\u6237\u7AEF\u4F1A\u4F7F\u7528\u6B64\u7528\u6237\u4FE1\u606F\u8FDB\u884C\u8BA4\u8BC1\uFF1B\u5982\u672A\u6307\u5B9A\uFF0C\u5219\u4E0D\u8FDB\u884C\u8BA4\u8BC1\u3002</p><h3 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>\u7528\u6237\u540D</p><blockquote><p><code>pass</code>: string</p></blockquote><p>\u5BC6\u7801</p><blockquote><p><code>level</code>: number</p></blockquote><p>\u7528\u6237\u7B49\u7EA7</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><p>\u5E94\u8BE5\u6CE8\u610F\uFF0C\u867D\u7136 socks inbound \u53EF\u4EE5\u516C\u5171\u670D\u52A1\u7AEF\u53E3\uFF0C\u4F46 socks \u534F\u8BAE\u6CA1\u6709\u5BF9\u4F20\u8F93\u52A0\u5BC6\uFF0C\u4E0D\u9002\u5B9C\u7ECF\u516C\u7F51\u4E2D\u4F20\u8F93\u3002socks inbound \u66F4\u6709\u610F\u4E49\u7684\u7528\u6CD5\u662F\u5728\u5C40\u57DF\u7F51\u6216\u672C\u673A\u73AF\u5883\u4E0B\uFF0C\u4E3A\u5176\u4ED6\u7A0B\u5E8F\u63D0\u4F9B\u672C\u5730\u670D\u52A1\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;auth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;noauth&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>auth</code>: &quot;noauth&quot; | &quot;password&quot;</p></blockquote><p>Socks \u534F\u8BAE\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u652F\u6301 <code>&quot;noauth&quot;</code> \u533F\u540D\u65B9\u5F0F\u548C <code>&quot;password&quot;</code> \u7528\u6237\u5BC6\u7801\u65B9\u5F0F\u3002\u9ED8\u8BA4\u503C\u4E3A <code>&quot;noauth&quot;</code>\u3002</p><blockquote><p><code>accounts</code>: [ <a href="#accountobject">AccountObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u4E3A\u4E00\u4E2A\u7528\u6237\u5E10\u53F7\u3002\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002\u6B64\u9009\u9879\u4EC5\u5F53 <code>auth</code> \u4E3A <code>password</code> \u65F6\u6709\u6548\u3002</p><blockquote><p><code>udp</code>: true | false</p></blockquote><p>\u662F\u5426\u5F00\u542F UDP \u534F\u8BAE\u7684\u652F\u6301\u3002\u9ED8\u8BA4\u503C\u4E3A <code>false</code>\u3002</p><blockquote><p><code>ip</code>: address</p></blockquote><p>SOCKS5 \u901A\u8FC7 <code>UDP ASSOCIATE</code> \u547D\u4EE4\u5EFA\u7ACB UDP \u4F1A\u8BDD\u3002\u670D\u52A1\u7AEF\u5728\u5BF9\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u8BE5\u547D\u4EE4\u7684\u56DE\u590D\u4E2D\uFF0C\u6307\u5B9A\u5BA2\u6237\u7AEF\u53D1\u5305\u7684\u76EE\u6807\u5730\u5740\u3002</p><ul><li>v4.34.0+: \u9ED8\u8BA4\u503C\u4E3A\u7A7A\uFF0C\u6B64\u65F6\u5BF9\u4E8E\u901A\u8FC7\u672C\u5730\u56DE\u73AF IPv4/IPv6 \u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\uFF0C\u56DE\u590D\u5BF9\u5E94\u7684\u56DE\u73AF IPv4/IPv6 \u5730\u5740\uFF1B\u5BF9\u4E8E\u975E\u672C\u673A\u7684\u5BA2\u6237\u7AEF\uFF0C\u56DE\u590D\u5F53\u524D\u5165\u7AD9\u7684\u76D1\u542C\u5730\u5740\u3002</li><li>v4.33.0 \u53CA\u66F4\u65E9\u7248\u672C: \u9ED8\u8BA4\u503C <code>127.0.0.1</code>\u3002</li></ul><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6B64\u9879\u4F7F V2Ray \u56FA\u5B9A\u56DE\u590D\u4F60\u914D\u7F6E\u7684\u5730\u5740\u3002\u5982\u679C\u4F60\u4E0D\u77E5\u9053\u6B64\u9879\u7684\u4F5C\u7528\uFF0C\u7559\u7A7A\u5373\u53EF\u3002</p><blockquote><p><code>userLevel</code>: number</p></blockquote><p>\u7528\u6237\u7B49\u7EA7\uFF0C\u6240\u6709\u8FDE\u63A5\u4F7F\u7528\u8FD9\u4E00\u7B49\u7EA7\u3002</p><h3 id="accountobject" tabindex="-1"><a class="header-anchor" href="#accountobject" aria-hidden="true">#</a> AccountObject</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>\u7528\u6237\u540D</p><blockquote><p><code>pass</code>: string</p></blockquote><p>\u5BC6\u7801</p>`,45);function C(I,P){const o=t("ExternalLinkIcon");return p(),c("div",null,[l,i,s("p",null,[d,s("a",k,[b,a(o)]),v,s("a",q,[m,a(o)]),h]),g,s("div",_,[j,f,s("p",null,[y,s("a",S,[O,a(o)])])]),x])}const N=e(r,[["render",C],["__file","socks.html.vue"]]);export{N as default};
