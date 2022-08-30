import{_ as e,o,c,e as t}from"./app.6946ebe0.js";const d={},a=t('<h1 id="policy" tabindex="-1"><a class="header-anchor" href="#policy" aria-hidden="true">#</a> Policy</h1><ul><li>Name: <code>policy</code></li><li>Type: Service</li><li>ID: <code>service.policy</code></li></ul><h3 id="policy-1" tabindex="-1"><a class="header-anchor" href="#policy-1" aria-hidden="true">#</a> Policy</h3><blockquote><p><code>system</code>: <a href="#SystemPolicyObject">SystemPolicyObject</a></p></blockquote><p>The system level policies that determine the global level policies applied everywhere.</p><blockquote><p><code>level</code>: map of <a href="#PolicyObject">PolicyObject</a></p></blockquote><p>The level based policy.</p><h3 id="systempolicyobject" tabindex="-1"><a class="header-anchor" href="#systempolicyobject" aria-hidden="true">#</a> SystemPolicyObject</h3><blockquote><p><code>stats</code>: <a href="#StatsObject">StatsObject</a></p></blockquote><p>The stats settings.</p><h3 id="statsobject" tabindex="-1"><a class="header-anchor" href="#statsobject" aria-hidden="true">#</a> StatsObject</h3><blockquote><p><code>inboundUplink</code>: bool</p></blockquote><p>Whether the upload data count from inbound should be recorded.</p><blockquote><p><code>inboundDownlink</code>: bool</p></blockquote><p>Whether the download data count from inbound should be recorded.</p><blockquote><p><code>outboundUplink</code>: bool</p></blockquote><p>Whether the upload data count from outbound should be recorded.</p><blockquote><p><code>outboundDownlink</code>: bool</p></blockquote><p>Whether the download data count from outbound should be recorded.</p><h3 id="policyobject" tabindex="-1"><a class="header-anchor" href="#policyobject" aria-hidden="true">#</a> PolicyObject</h3><blockquote><p><code>timeout</code>: <a href="#TimeoutPolicyObject">TimeoutPolicyObject</a></p></blockquote><blockquote><p><code>stats</code>: <a href="#PolicyStatsObject">PolicyStatsObject</a></p></blockquote><blockquote><p><code>buffer</code>: <a href="#BufferPolicyObject">BufferPolicyObject</a></p></blockquote><h3 id="timeoutpolicyobject" tabindex="-1"><a class="header-anchor" href="#timeoutpolicyobject" aria-hidden="true">#</a> TimeoutPolicyObject</h3><blockquote><p><code>handshake</code>: <a href="#SecondObject">SecondObject</a></p></blockquote><blockquote><p><code>connectionIdle</code>: <a href="#SecondObject">SecondObject</a></p></blockquote><blockquote><p><code>uplinkOnly</code>: <a href="#SecondObject">SecondObject</a></p></blockquote><blockquote><p><code>downlinkOnly</code>: <a href="#SecondObject">SecondObject</a></p></blockquote><h3 id="secondobject" tabindex="-1"><a class="header-anchor" href="#secondobject" aria-hidden="true">#</a> SecondObject</h3><blockquote><p><code>value</code>: number</p></blockquote><p>The time in second.</p><h3 id="policystatsobject" tabindex="-1"><a class="header-anchor" href="#policystatsobject" aria-hidden="true">#</a> PolicyStatsObject</h3><blockquote><p><code>userUplink</code>: bool</p></blockquote><p>Whether the user upload data count should be recorded.</p><blockquote><p><code>userDownlink</code>: bool</p></blockquote><p>Whether the user download data count should be recorded.</p><h3 id="bufferpolicyobject" tabindex="-1"><a class="header-anchor" href="#bufferpolicyobject" aria-hidden="true">#</a> BufferPolicyObject</h3><blockquote><p><code>connection</code>: number</p></blockquote><p>Buffer size per connection, in bytes. -1 for unlimited buffer.</p>',39),l=[a];function i(b,r){return o(),c("div",null,l)}const h=e(d,[["render",i],["__file","policy.html.vue"]]);export{h as default};
