import{_ as a,r as i,o as s,c as l,b as t,a as e,w as d,d as o}from"./app.6946ebe0.js";const c={},u=e("h1",{id:"working-mechanism",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#working-mechanism","aria-hidden":"true"},"#"),o(" Working Mechanism")],-1),h=e("h2",{id:"single-server-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#single-server-mode","aria-hidden":"true"},"#"),o(" Single server mode")],-1),f=e("p",null,"Like other network proxy tools, you need a server configured with V2Ray, and then install and configure the V2Ray client on your device, and then you can smoothly access the Internet.",-1),p=e("p",null,"A V2Ray server can simultaneously support multiple devices to access using different proxy protocols. At the same time, after reasonable configuration, V2Ray can identify and distinguish between the traffic that needs a proxy and the traffic that does not require a proxy. Directly connected traffic does not require detours.",-1),m=e("h2",{id:"bridge-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bridge-mode","aria-hidden":"true"},"#"),o(" Bridge mode")],-1),_=e("p",null,"If you don't want to configure routing on every device, you can also set up a transit server to receive all the traffic sent by the client, and then forward the judgment in the server.",-1),g=e("h2",{id:"working-principle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#working-principle","aria-hidden":"true"},"#"),o(" working principle")],-1),b=e("p",null,"Before configuring V2Ray, let\u2019s take a look at the working principle of V2Ray. The following is a schematic diagram of the internal structure of a single V2Ray process. Multiple V2Rays are independent of each other and do not affect each other.",-1),w=e("ul",null,[e("li",null,[o("You need to configure at least one inbound protocol (Inbound) and one outbound protocol (Outbound) to work properly. "),e("ul",null,[e("li",null,[o("The inbound protocol is responsible for communicating with the client (such as a browser): "),e("ul",null,[e("li",null,"Inbound protocols can usually configure user authentication, such as ID and password;"),e("li",null,"After the inbound protocol receives the data, it will be handed over to the Dispatcher for distribution;")])]),e("li",null,"The outbound protocol is responsible for sending data to the server, such as V2Ray on another host.")])]),e("li",null,[o("When there are multiple outbound protocols, routing can be configured to specify that a certain type of traffic is sent by a certain outbound protocol. "),e("ul",null,[e("li",null,"When necessary, the router will query the DNS for more information to make a judgment.")])])],-1),B=o("The specific configuration format is detailed in "),A=o("Chapter 2"),y=o(".");function E(v,k){const n=i("Mermaid"),r=i("RouterLink");return s(),l("div",null,[u,h,f,t(n,{id:"mermaid_1a962853",graph:"graph%20LR%3B%0AA(PC)%20-.-%20B(Firewall)%3B%0AB%20-.-%3E%20C(off-wall%20website)%3B%0AA%20--%3E%20D(V2Ray%2FVPS)%3B%0AD%20--%3E%20C%3B%0AA%20--%3E%20E(in-wall%20website)%3B%0A"}),p,m,_,t(n,{id:"mermaid_382ee14e",graph:"graph%20LR%3B%0AA(PC)%20-.-%3E%20B(Firewall)%3B%0AB%20-.-%3E%20C(off-wall%20website)%3B%0AA%20--%3E%20D(VPS%20in%20the%20wall)%3B%0AD%20--%3E%20E(VPS%20outside%20the%20wall)%3B%0AE%20--%3E%20C%3B%0AD%20--%3E%20F(in-wall%20website)%3B%0A"}),g,b,t(n,{id:"mermaid_382ee16a",graph:"graph%20LR%3B%0AA1(inbound)%20--%3E%20D(Dispatcher%20%2F%20Router%20%2F%20DNS)%3B%0AA2(inbound)%20--%3E%20D%3B%0AA3(inbound)%20--%3E%20D%3B%0AA4(inbound)%20--%3E%20D%3B%0AD%20--%3E%20B1(outbound)%3B%0AD%20--%3E%20B2(outbound)%3B%0AD%20--%3E%20B3(outbound)%3B%0AD%20--%3E%20B4(outbound)%3B%0A"}),w,e("p",null,[B,t(r,{to:"/en_US/config/overview.html"},{default:d(()=>[A]),_:1}),y])])}const R=a(c,[["render",E],["__file","workflow.html.vue"]]);export{R as default};
