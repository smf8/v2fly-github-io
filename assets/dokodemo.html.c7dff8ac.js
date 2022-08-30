import{_ as t,r as o,o as p,c as r,a as e,b as l,w as i,e as s,d as a}from"./app.6946ebe0.js";const c={},d=s(`<h1 id="dokodemo-door" tabindex="-1"><a class="header-anchor" href="#dokodemo-door" aria-hidden="true">#</a> Dokodemo-door</h1><ul><li>Name: <code>dokodemo-door</code></li><li>Type: Inbound Protocol</li></ul><p>Dokodemo door is an inbound data protocol. It can listen to a local port and send all data entering this port to a port of the designated server, so as to achieve the effect of port mapping.</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;followRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>Forward traffic to this address. It can be an IP address, like <code>&quot;1.2.3.4&quot;</code>, or a domain name, like <code>&quot;v2ray.com&quot;</code>. String type.</p><p>When <code>followRedirect</code> (see below) is <code>true</code>, <code>address</code> can be empty.</p><blockquote><p><code>port</code>: number</p></blockquote><p>Forward traffic to the specified port of the destination address, range [1, 65535], numeric type. Required parameters.</p><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>The type of network protocol that can be received. For example, when it is specified as <code>&quot;tcp&quot;</code>, any gate will only receive TCP traffic. The default value is <code>&quot;tcp&quot;</code>.</p><blockquote><p><code>timeout</code>: number</p></blockquote><p>The time limit for inbound data (seconds), the default value is 300.</p><p>After V2Ray 3.1 is equivalent to the <code>connIdle</code> strategy corresponding to the user level</p><blockquote><p><code>followRedirect</code>: true | false</p></blockquote>`,16),u=a("When the value is "),m=e("code",null,"true",-1),b=a(", dokodemo-door will recognize the data forwarded by iptables and forward it to the corresponding destination address. For details, see the "),v=e("code",null,"tproxy",-1),k=a(" setting in "),h=a("Transport Configuration"),R=a("."),f=s(`<blockquote><p><code>userLevel</code>: number</p></blockquote><p>User level, all connections will use this user level.</p><h2 id="transparent-proxy-configuration-example" tabindex="-1"><a class="header-anchor" href="#transparent-proxy-configuration-example" aria-hidden="true">#</a> Transparent proxy configuration example</h2><p>Add a dokodemo-door inbound protocol in V2Ray:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token property">&quot;followRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure iptables:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Create new chain</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-N</span> V2RAY
iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-N</span> V2RAY
iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-N</span> V2RAY_MARK

<span class="token comment"># Ignore your V2Ray server&#39;s addresses</span>
<span class="token comment"># It&#39;s very IMPORTANT, just be careful.</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">123.123</span>.123.123 <span class="token parameter variable">-j</span> RETURN

<span class="token comment"># Ignore LANs and any other addresses you&#39;d like to bypass the proxy</span>
<span class="token comment"># See Wikipedia and RFC5735 for full list of reserved networks.</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">0.0</span>.0.0/8 <span class="token parameter variable">-j</span> RETURN
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">10.0</span>.0.0/8 <span class="token parameter variable">-j</span> RETURN
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">127.0</span>.0.0/8 <span class="token parameter variable">-j</span> RETURN
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">169.254</span>.0.0/16 <span class="token parameter variable">-j</span> RETURN
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">172.16</span>.0.0/12 <span class="token parameter variable">-j</span> RETURN
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">192.168</span>.0.0/16 <span class="token parameter variable">-j</span> RETURN
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">224.0</span>.0.0/4 <span class="token parameter variable">-j</span> RETURN
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-d</span> <span class="token number">240.0</span>.0.0/4 <span class="token parameter variable">-j</span> RETURN

<span class="token comment"># Anything else should be redirected to Dokodemo-door&#39;s local port</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-j</span> REDIRECT --to-ports <span class="token number">12345</span>

<span class="token comment"># Add any UDP rules</span>
<span class="token function">ip</span> route <span class="token function">add</span> <span class="token builtin class-name">local</span> default dev lo table <span class="token number">100</span>
<span class="token function">ip</span> rule <span class="token function">add</span> fwmark <span class="token number">1</span> lookup <span class="token number">100</span>
iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-A</span> V2RAY <span class="token parameter variable">-p</span> udp <span class="token parameter variable">--dport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> TPROXY --on-port <span class="token number">12345</span> --tproxy-mark 0x01/0x01
iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-A</span> V2RAY_MARK <span class="token parameter variable">-p</span> udp <span class="token parameter variable">--dport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> MARK --set-mark <span class="token number">1</span>

<span class="token comment"># Apply the rules</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-j</span> V2RAY
iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-j</span> V2RAY
iptables <span class="token parameter variable">-t</span> mangle <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-j</span> V2RAY_MARK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function q(g,A){const n=o("RouterLink");return p(),r("div",null,[d,e("p",null,[u,m,b,v,k,l(n,{to:"/en_US/config/transport.html"},{default:i(()=>[h]),_:1}),R]),f])}const y=t(c,[["render",q],["__file","dokodemo.html.vue"]]);export{y as default};
