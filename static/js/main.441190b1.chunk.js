(this.webpackJsonpsatenvironment=this.webpackJsonpsatenvironment||[]).push([[0],{118:function(e,t,n){},127:function(e,t,n){},1772:function(e,t,n){},183:function(e,t,n){e.exports=n(1844)},1844:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),o=n.n(r),i=(n(188),n(25)),c=(n(118),n(1856)),s=n(1846),u=n(1847),m=n(51),d=(n(159),function(e){var t=e.length,n=e.toggle$,l=Object(m.b)("timeLeft",1e3*t),r=Object(i.a)(l,2),o=r[0],c=r[1],s=Object(m.b)("timeVerbosity",!1),u=Object(i.a)(s,2);u[0],u[1];Object(a.useEffect)((function(){o<=0&&c(1e3*t)}),[o,t]);var d=Object(a.useRef)();n.useSubscription((function(){d.current.isPaused()?(sessionStorage.setItem("timerActive","true"),d.current.start()):(sessionStorage.setItem("timerActive","false"),d.current.pause())}))}),h=c.a.Header,E=function(e){var t=e.toggle$,n=e.time,a=e.setCurrentSection;return l.a.createElement(h,{style:{position:"fixed",zIndex:1,width:"100%"}},l.a.createElement(s.a,{gutter:16},l.a.createElement(u.a,{span:6},l.a.createElement("h1",{style:{color:"white"}},"Exam Simulator")),l.a.createElement(u.a,{span:6,offset:12},l.a.createElement(d,{length:n,toggle$:t,setCurrentSection:a}))))},f=(n(127),function(e){var t=e.letter,n=e.isSelected,a=e.number;return l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"question-".concat(a),value:t,id:a,className:"bubble ".concat(n?"selected":"")}),l.a.createElement("span",null,t))}),b=function(e){var t=e.number,n=Object(a.useState)(null),r=Object(i.a)(n,2),o=r[0],c=r[1];return l.a.createElement("div",{onChange:function(e){return function(e){console.log("".concat(t,". ").concat(e.target.value)),c(e.target.value)}(e)}},l.a.createElement("span",{className:"question-number"},t,"."),["A","B","C","D"].map((function(e){return l.a.createElement(f,{letter:e,key:e,isSelected:o===e,number:t})})))},g=n(1860),y=n(1855),p=n(1854),w=function(e){var t=e.toggle$,n=Object(a.useState)(),r=Object(i.a)(n,2),o=r[0],c=r[1];return l.a.createElement(g.a,{offsetBottom:10,style:{textAlign:"right",marginRight:5}},l.a.createElement(y.a,{className:"timer-menu ".concat(o?"active":"not-active"),size:40,icon:l.a.createElement(p.a,null),onClick:function(){return t.emit(),void c("true"===sessionStorage.getItem("timerActive"))}}))},v=c.a.Content,S=function(e){for(var t=e.number,n=e.toggle$,a=[],r=1;r<=t;r++)a.push(r);return l.a.createElement("div",null,l.a.createElement(v,{style:{padding:"0 50px",marginTop:64}},l.a.createElement("div",{className:"content"},a.map((function(e){return l.a.createElement(b,{number:e,key:e})})))),l.a.createElement(w,{toggle$:n}))},T=(n(215),n(163)),O=n.n(T),k=function(){var e=JSON.parse(sessionStorage.getItem("sectionData")).sections,t=Object(m.b)("currentSection",0),n=Object(i.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(e[r].num_questions),u=Object(i.a)(s,2),d=u[0],h=(u[1],Object(a.useState)(O.a.duration(e[r].time,"minutes").asSeconds())),f=Object(i.a)(h,2),b=f[0],g=(f[1],Object(m.a)());return l.a.createElement(c.a,null,l.a.createElement(E,{toggle$:g,setCurrentSection:o,time:b}),l.a.createElement(S,{number:d,toggle$:g}))},x=n(1852),I=n(1857),j=n(1861),C=n(1858),A=n(61),M=n(1853),N=n(41),W=n(1848),R=n(82),L=x.a.Paragraph,q=x.a.Text,B=function(){return l.a.createElement(R.a,{title:"Added!",color:"#52c41a"},l.a.createElement(N.CheckCircleTwoTone,{twoToneColor:"#52c41a"}))},V=function(){return l.a.createElement(R.a,{title:"In development!",color:"#eab832"},l.a.createElement(N.MinusCircleTwoTone,{twoToneColor:"#eab832"}))},Y=function(){return l.a.createElement(R.a,{title:"I can't add this :(",color:"#f52b2b"},l.a.createElement(N.CloseCircleTwoTone,{twoToneColor:"#f52b2b"}))},$=function(){return l.a.createElement(L,null,l.a.createElement(q,{strong:!0,style:{fontSize:16}},"What Exam Simulator does feature:"),l.a.createElement("br",null),l.a.createElement(B,null)," Multiple Choice Questions ",l.a.createElement("br",null),l.a.createElement(B,null)," Timer ",l.a.createElement("br",null),l.a.createElement(B,null)," Ability to Stop or Start Timer ",l.a.createElement("br",null),l.a.createElement(B,null)," Clean User Interface ",l.a.createElement("br",null),l.a.createElement(B,null)," Ability to create your own Exams ",l.a.createElement("br",null),l.a.createElement(V,null)," Free Answer Questions ",l.a.createElement("br",null),l.a.createElement(V,null)," Save your answers as a ",l.a.createElement("code",null,".csv"),", ",l.a.createElement("code",null,".txt"),", or ",l.a.createElement("code",null,".json")," file ",l.a.createElement("br",null),l.a.createElement(V,null)," Timing statistics ",l.a.createElement("br",null),l.a.createElement(W.a,null),l.a.createElement(q,{strong:!0,style:{fontSize:16}},"What Exam Simulator doesn't feature:"),l.a.createElement("br",null),l.a.createElement(Y,null)," Saving exams where you left off ",l.a.createElement("br",null),l.a.createElement(Y,null)," Exam grading ",l.a.createElement("br",null),l.a.createElement(Y,null)," Sharing exam results on social media ",l.a.createElement("br",null),l.a.createElement(Y,null)," Accounts to save your previous exams ",l.a.createElement("br",null))},H=x.a.Paragraph,P=x.a.Text,U=function(){return l.a.createElement(H,null,l.a.createElement(P,null,"Hey there! Welcome to Exam Simulator!"),l.a.createElement(W.a,{orientation:"left"},"What is Exam Simulator?"),l.a.createElement(P,null,"You might be wondering what this is. Exam Simulator at its core was designed for taking the SAT test. I needed to take practice exams so that I can improve my score, but the issue is that if I were to just use a PDF practice test I found online, I would be needing to write on a piece of paper all my answers to",l.a.createElement(R.a,{title:"Excluding a few math questions..."},l.a.createElement("strong",null," MULTIPLE CHOICE QUESTIONS")),". This would mean that I would use my entire keyboard to write 4 letters. I didn't like this idea, so I decided to create an alternative, which is what you're on right now!"),l.a.createElement(W.a,{orientation:"left"},"What does Exam Simulator do?"),l.a.createElement(P,null,"This entire site is dedicated to simulating an",l.a.createElement(R.a,{title:"Shocking isn't it?"}," Exam"),'. But instead of making this project tunnel visioned, I\'ve decided to make this more usable. This means that I have made it so that you can customize your own Exam on this test to your liking. In a minute you will be creating an exam that you will take shortly after. You get to make your own "Sections" with a variable amount of questions and timings (like the 4 sections on the SAT).',l.a.createElement("strong",null," Because I don't want to pay for hosting costs, this project is purely front-ended, meaning that there are no accounts or logins. There is no way to come back to a test when you close the tab. I have taken precautions against these such events, but don't expect to revisit the same test if you accidentally close the site.")),l.a.createElement(W.a,{orientation:"left"},"Conclusion"),l.a.createElement(P,null,"I hope that you can use this tool effectively and that you will be able to improve your scores using this tool. The full feature list of what this tool offers and doesn't offer is shown below, and I will try to implement more features."),l.a.createElement($,null),l.a.createElement(W.a,null),l.a.createElement(P,null,"Last thing, this entire project is open sourced and available on GitHub. Check it out there!"))},z=(n(1772),x.a.Title),D=function(){return l.a.createElement(I.a.Ribbon,{text:"ALPHA",style:{marginRight:"43%",marginBottom:"10px"},placement:"end",color:"red"},"Exam Simulator")},F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(j.a,{message:l.a.createElement(z,{level:3},"Alpha Release"),description:"Not all functionality shown below is implemented. This is a proof of concept release. Use with caution!",type:"error",closable:!0,showIcon:!0,style:{textAlign:"left"}}))},G=function(e){var t=e.setView,n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],c=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{icon:l.a.createElement(N.FormOutlined,null),title:l.a.createElement(D,null),subTitle:"An easy way for you to take a timed multiple choice exam.",extra:[l.a.createElement(A.a,{type:"dashed",onClick:function(){return c(!0)}},"Learn More"),l.a.createElement(A.a,{type:"primary",onClick:function(){return t("setup")}},"Get Started"),l.a.createElement("br",null),l.a.createElement(F,null)]},l.a.createElement(M.a,{title:"Learning More...",centered:!0,visible:o,onOk:function(){return c(!1)},onCancel:function(){return c(!1)},okText:"Sounds good!",cancelText:"Ok..."},l.a.createElement(U,null)),l.a.createElement("div",null,l.a.createElement($,null))))},_=n(1850),K=n(116),Q=n(1851),J=n(1849),X=n(1859),Z=x.a.Paragraph,ee=x.a.Text,te=function(){return l.a.createElement("div",null,l.a.createElement(Z,null,l.a.createElement("strong",null,"DO NOT EXIT THIS WEBSITE WHEN YOU TAKE YOUR TEST!"),l.a.createElement("br",null),l.a.createElement(ee,null,"This includes:",l.a.createElement("ul",null,l.a.createElement("li",null,"Closing the tab"),l.a.createElement("li",null,"Closing your browser"),l.a.createElement("li",null,"Refreshing the page"),l.a.createElement("li",null,'Clicking the "back" button'),l.a.createElement("li",null,"Anything else that involves closing this page!"))),l.a.createElement("strong",null,"DOING SO MAY RESULT IN YOUR TEST NOT GETTING SAVED CORRECTLY!")),l.a.createElement(W.a,{orientation:"center"},"Why shouldn't I?"),l.a.createElement(Z,{ellipsis:{rows:2,expandable:!0,symbol:"more"}},l.a.createElement(ee,null,"Exam Simulator is completely built on the front end. This design choice has some drawbacks but some benefits as well."),l.a.createElement(W.a,{orientation:"left"},'What is the "front end"?'),l.a.createElement(ee,null,'You\'re very familiar with the "front end". A front end is essentially what you see. For example, the front end of YouTube is the site where you can see all the videos to your hearts content. All the things that you see when you go to www.youtube.com is the front end. In a nutshell, the front end is just a pretty face to a server, or the back end.'),l.a.createElement(W.a,{orientation:"left"},"What's the difference between the front and back end?"),l.a.createElement(ee,null,"There are many differences. It's like saying what's the difference between a diamond ring and the diamond industry? The front end is like the diamond ring, its the finished product that the user (you) will see. What goes behind it in the diamond industry you likely won't see at all. Same situation here. The front end is what you see and interact with but the backend is what you don't see. The backend does all the heavy lifting, and saves important information like usernames and passwords."),l.a.createElement(W.a,{orientation:"left"},"Why did you make this front end only?"),l.a.createElement(ee,null,"This choice of making the Exam Simulator project purely front end is so that I won't have to pay for deployment costs. This project is hosted on GitHub pages, which is free, but difficult to implement a backend in, so I omitted it.")))},ne=function(e){var t=e.setView,n=Object(a.useState)(0),r=Object(i.a)(n,2),o=r[0],c=r[1],s=Object(m.b)("sectionData",null),u=Object(i.a)(s,2),d=(u[0],u[1]),h=Object(a.useState)({}),E=Object(i.a)(h,2),f=E[0],b=E[1],g=Object(a.useState)({}),y=Object(i.a)(g,2),p=y[0],w=y[1],v=Object(a.useState)(!1),S=Object(i.a)(v,2),T=S[0],O=S[1],k=function(e){w(Object(K.a)({},function(e){if(e<1)return{validateStatus:"error",errorMsg:"Choose greater than 1 question!"}}(e.target.value),{num:e}))},x=function(e){b(Object(K.a)({},function(e){if(e<1)return{validateStatus:"error",errorMsg:"Choose a time greater than 1 minute!"}}(e.target.value),{num:e}))};return l.a.createElement(Q.a,{name:"dynamic_form_nest_item",onFinish:function(e){console.log("Received values of form:",e),d(e)},autoComplete:"off"},l.a.createElement(Q.a.List,{name:"sections"},(function(e,t){var n=t.add,a=t.remove;return l.a.createElement("div",null,e.map((function(e){return l.a.createElement(J.a,{key:"section-".concat(e.key),align:"start",style:{width:"100%"}},l.a.createElement("h2",null,"Section ".concat(e.key+1),":"),l.a.createElement(Q.a.Item,Object.assign({},e,{name:[e.name,"num_questions"],fieldKey:[e.fieldKey,"num_questions"],rules:[{required:!0,message:"Missing number of questions."}],validateStatus:p.validateStatus,help:p.errorMsg}),l.a.createElement(X.a,{addonBefore:"Number of Questions",type:"number",onChange:k})),l.a.createElement(Q.a.Item,Object.assign({},e,{name:[e.name,"time"],fieldKey:[e.fieldKey,"time"],rules:[{required:!0,message:"Missing time for this section."}],validateStatus:f.validateStatus,help:f.errorMsg}),l.a.createElement(X.a,{addonBefore:"Time",type:"number",addonAfter:"minutes",onChange:x})),l.a.createElement(N.MinusCircleOutlined,{onClick:function(){c(o-1),a(e.name)},style:{marginTop:"6px",fontSize:"20px",color:"red"}}))})),l.a.createElement(Q.a.Item,null,l.a.createElement(A.a,{type:"dashed",onClick:function(){c(o+1),n()},block:!0},l.a.createElement(N.PlusOutlined,null)," Add Section")))})),l.a.createElement(M.a,{title:"One last thing...",centered:!0,visible:T,onOk:function(){setInterval((function(){return t("exam")}),100)},onCancel:function(){return O(!1)},okText:"Got it!",cancelText:"Take me back!"},l.a.createElement(te,null)),l.a.createElement(Q.a.Item,null,l.a.createElement(A.a,{type:"primary",htmlType:"submit",disabled:!(o>=1),style:{marginLeft:"44%"},onClick:function(){return O(!0)}},"Let's get started! ",l.a.createElement(N.RightOutlined,null))))},ae=function(e){var t=e.setView,n=l.a.createElement(N.SettingOutlined,{style:{fontSize:64},spin:!0});return l.a.createElement(C.a,{icon:l.a.createElement(_.a,{indicator:n}),title:"Setup an Exam",subTitle:"It's as easy as adding a section!"},l.a.createElement(ne,{setView:t}))},le=c.a.Content,re=function(e){var t=e.view,n=e.setView;return l.a.createElement(le,null,"info"===t&&l.a.createElement(G,{setView:n}),"setup"===t&&l.a.createElement(ae,{setView:n}),"exam"===t&&l.a.createElement(k,null))};var oe=function(){var e=Object(a.useState)("info"),t=Object(i.a)(e,2),n=t[0],r=t[1];return l.a.createElement(re,{view:n,setView:r})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(1843);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},188:function(e,t,n){},215:function(e,t,n){}},[[183,1,2]]]);
//# sourceMappingURL=main.441190b1.chunk.js.map