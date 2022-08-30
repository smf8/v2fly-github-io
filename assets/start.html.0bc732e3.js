import{_ as c,r as e,o as i,c as l,a as s,b as a,w as o,d as n,e as u}from"./app.6946ebe0.js";const r={},d=s("h1",{id:"\u65B0\u624B\u4E0A\u8DEF",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B0\u624B\u4E0A\u8DEF","aria-hidden":"true"},"#"),n(" \u65B0\u624B\u4E0A\u8DEF")],-1),v=n("\u4E0B\u8F7D\u5E76\u5B89\u88C5"),k=n(" \u4E86 V2Ray \u4E4B\u540E\uFF0C\u4F60\u9700\u8981\u5BF9\u5B83\u8FDB\u884C\u4E00\u4E0B\u914D\u7F6E\u3002\u4E3A\u4E86\u6F14\u793A\uFF0C\u8FD9\u91CC\u53EA\u4ECB\u7ECD\u7B80\u5355\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u5982\u9700\u914D\u7F6E\u66F4\u590D\u6742\u7684\u529F\u80FD\uFF0C\u8BF7\u53C2\u8003\u540E\u7EED\u7684 "),m=n("\u914D\u7F6E\u6587\u6863"),b=n("\u3002"),q=u(`<h2 id="\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668" aria-hidden="true">#</a> \u670D\u52A1\u5668</h2><p>\u4F60\u9700\u8981\u4E00\u53F0\u9632\u706B\u5899\u5916\u7684\u670D\u52A1\u5668\uFF0C\u6765\u8FD0\u884C\u670D\u52A1\u5668\u7AEF\u7684 V2Ray\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// \u670D\u52A1\u5668\u76D1\u542C\u7AEF\u53E3</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u670D\u52A1\u5668\u7684\u914D\u7F6E\u4E2D\u9700\u8981\u786E\u4FDD <code>id</code> \u548C\u7AEF\u53E3\u4E0E\u5BA2\u6237\u7AEF\u4E00\u81F4\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FDE\u63A5\u4E86\u3002</p><h2 id="\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF</h2><p>\u5728\u4F60\u7684 PC\uFF08\u6216\u624B\u673A\uFF09\u4E2D\uFF0C\u9700\u8981\u7528\u4EE5\u4E0B\u914D\u7F6E\u8FD0\u884C V2Ray \uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span> <span class="token comment">// SOCKS \u4EE3\u7406\u7AEF\u53E3\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u9700\u914D\u7F6E\u4EE3\u7406\u5E76\u6307\u5411\u8FD9\u4E2A\u7AEF\u53E3</span>
            <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;server&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u670D\u52A1\u5668\u5730\u5740\uFF0C\u8BF7\u4FEE\u6539\u4E3A\u4F60\u81EA\u5DF1\u7684\u670D\u52A1\u5668 ip \u6216\u57DF\u540D</span>
                        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// \u670D\u52A1\u5668\u7AEF\u53E3</span>
                        <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IPOnDemand&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;geoip:private&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u914D\u7F6E\u552F\u4E00\u8981\u66F4\u6539\u7684\u5730\u65B9\u662F\u4F60\u7684\u670D\u52A1\u5668 IP\uFF0C\u914D\u7F6E\u4E2D\u5DF2\u6CE8\u660E\u3002\u4E0A\u8FF0\u914D\u7F6E\u4F1A\u628A\u9664\u5C40\u57DF\u7F51\uFF08\u6BD4\u5982\u8BBF\u95EE\u8DEF\u7531\u5668\uFF09\u4EE5\u5916\u7684\u6240\u6709\u6D41\u91CF\u8F6C\u53D1\u81F3\u4F60\u7684\u670D\u52A1\u5668\u3002</p><h2 id="\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a> \u8FD0\u884C</h2><ul><li>\u5728 Windows \u548C macOS \u4E2D\uFF0C\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u662F V2Ray \u540C\u76EE\u5F55\u4E0B\u7684 <code>config.json</code> \u6587\u4EF6\u3002\u76F4\u63A5\u8FD0\u884C <code>v2ray</code> \u6216 <code>v2ray.exe</code> \u5373\u53EF\u3002</li><li>\u5728 Linux \u4E2D\uFF0C\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u4F4D\u4E8E <code>/etc/v2ray/</code> \u6216 <code>/usr/local/etc/v2ray/</code> \u76EE\u5F55\u4E0B\u3002\u8FD0\u884C <code>v2ray --config=/etc/v2ray/config.json</code>\uFF0C\u6216\u4F7F\u7528 systemd \u7B49\u5DE5\u5177\u5C06 V2Ray \u4F5C\u4E3A\u670D\u52A1\u5728\u540E\u53F0\u8FD0\u884C\u3002</li></ul>`,10),h=n("\u66F4\u591A\u8BE6\u7EC6\u7684\u8BF4\u660E\u53EF\u4EE5\u53C2\u8003 "),y=n("\u914D\u7F6E\u6587\u6863"),_=n(" \u548C "),g={href:"https://guide.v2fly.org/",target:"_blank",rel:"noopener noreferrer"},f=n("\u65B0\u767D\u8BDD\u6587\u6307\u5357"),x=n("\u3002");function V(j,R){const t=e("RouterLink"),p=e("ExternalLinkIcon");return i(),l("div",null,[d,s("p",null,[a(t,{to:"/guide/install.html"},{default:o(()=>[v]),_:1}),k,a(t,{to:"/config/overview.html"},{default:o(()=>[m]),_:1}),b]),q,s("p",null,[h,a(t,{to:"/config/overview.html"},{default:o(()=>[y]),_:1}),_,s("a",g,[f,a(p)]),x])])}const L=c(r,[["render",V],["__file","start.html.vue"]]);export{L as default};
