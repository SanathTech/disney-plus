(this["webpackJsonpdisney-plus"]=this["webpackJsonpdisney-plus"]||[]).push([[0],{60:function(n,e,i){},63:function(n,e,i){},68:function(n,e,i){"use strict";i.r(e);var t,s,a,c,o,r,l,d,p,b,j,h,g,x=i(6),m=i.n(x),u=i(36),f=i.n(u),O=(i(60),i(44)),y=i(15),v=i(20),w=i(21),k=i(10),S=w.a.section(t||(t=Object(v.a)(["\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    height: 100vh;\n"]))),z=w.a.div(s||(s=Object(v.a)(["\n    margin-bottom: 10vw;\n    width: 100%;\n    position: relative;\n    min-height: 100vh;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 80px 40px;\n    height: 100%;\n"]))),I=w.a.div(a||(a=Object(v.a)(['\n    height: 100%;\n    background-position: top;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url("/disney-plus/images/login-background.jpg");\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: -1;\n']))),A=w.a.div(c||(c=Object(v.a)(["\n    max-width: 600px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),L=w.a.img(o||(o=Object(v.a)(["\n    margin-bottom: 12px;\n    max-width: 600px;\n    min-height: 1px;\n    display: block;\n    width: 100%;\n"]))),R=w.a.a(r||(r=Object(v.a)(["\n    color: #f9f9f9;\n    background-color: #0063e5;\n    margin-bottom: 12px;\n    width: 100%;\n    letter-spacing: 1px;\n    font-size: 18px;\n    padding: 16.5px 0;\n    border: 1px solid transparent;\n    border-radius: 4px;\n\n    &:hover {\n        background-color: #0483ee;\n    }\n"]))),D=w.a.p(l||(l=Object(v.a)(["\n    color: hsla(0,0%,95.3%,1);\n    font-size: 11px;\n    margin: 0 0 24px;\n    line-height: 1.5;\n    letter-spacing: 1px;\n"]))),E=w.a.img(d||(d=Object(v.a)(["\n    max-width: 600px;\n    margin-bottom: 20px;\n    display: inline-block;\n    vertical-align: bottom;\n    width: 100%;\n"]))),C=function(n){return Object(k.jsx)(S,{children:Object(k.jsxs)(z,{children:[Object(k.jsxs)(A,{children:[Object(k.jsx)(L,{src:"/disney-plus/images/cta-logo-one.svg",alt:""}),Object(k.jsx)(R,{children:"SIGN UP NOW"}),Object(k.jsx)(D,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(k.jsx)(E,{src:"/disney-plus/images/cta-logo-two.png",alt:""})]}),Object(k.jsx)(I,{})]})})},N=(i(63),i(52)),G=i(53),U=i(35),B=i(55),H=Object(N.a)({apiKey:"AIzaSyA6t4REjRCtKNbqlGYOyYa3Vfb4jhc_kjU",authDomain:"disney-plus-e1f60.firebaseapp.com",projectId:"disney-plus-e1f60",storageBucket:"disney-plus-e1f60.appspot.com",messagingSenderId:"372343511349",appId:"1:372343511349:web:d659f427f5fe9c5b00947c",measurementId:"G-RZC8WP3LYQ"}),M=(Object(G.a)(),Object(U.b)()),P=new U.a,T=(Object(B.a)(H),i(33)),W=i(39),Y=Object(W.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),J=Y.actions,K=J.setUserLoginDetails,V=(J.setSignOutState,function(n){return n.user.name}),X=function(n){return n.user.photo},q=Y.reducer,F=w.a.nav(p||(p=Object(v.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 70px;\n    background-color: #090b13;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 36px;\n    letter-spacing: 16px;\n    z-index: 3;\n"]))),Q=w.a.a(b||(b=Object(v.a)(["\n    padding: 0;\n    width: 80px;\n    margin-top: 4px;\n    max-height: 70px;\n    font-size: 0;\n    display: inline-block;\n\n    img {\n        display: block;\n        width: 100%;\n    }\n"]))),Z=w.a.div(j||(j=Object(v.a)(['\n    align-items: center;\n    display: flex;\n    flex-flow: row nowrap;\n    height: 100%;\n    justify-content: flex-end;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    margin-right: auto;\n    margin-left: 25px;\n\n    a {\n        display: flex;\n        align-items: center;\n        padding: 0 12px;\n\n        img {\n            height: 20px;\n            min-width: 20px;\n            width: 20px;\n            z-index: auto;\n        }\n\n        span {\n            color: rgb(249, 249, 249);\n            font-size: 15px;\n            letter-spacing: 1.42px;\n            line-height: 1.08;\n            padding: 2px 0 2px 5px;\n            white-space: nowrap;\n            position: relative;\n\n            &:before {\n                background-color: rgb(249, 249, 249);\n                border-radius: 0 0 4px 4px;\n                bottom: -6px;\n                content: "";\n                height: 2px;\n                opacity: 0;\n                position: absolute;\n                right: 0;\n                left: 0;\n                transform-origin: left center;\n                transform: scaleX(0);\n                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n                visibility: hidden;\n                width: auto;\n            }\n        }\n\n        &:hover {\n            span:before {\n                transform: scaleX(1);\n                visibility: visible;\n                opacity: 1 !important;\n            }\n        }\n    }\n\n    @media (max-width: 768px) {\n        display: none;\n    }\n']))),$=w.a.div(h||(h=Object(v.a)(["\n    background-color: rgba(0, 0, 0, 0.6);\n    padding: 8px 16px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    border: 1px solid #f9f9f9;\n    border-radius: 4px;\n    transition: all 0.2s ease 0s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #f9f9f9;\n        color: #000;\n        border-color: transparent;\n    }\n"]))),_=w.a.img(g||(g=Object(v.a)(["\n    height: 100%;\n"]))),nn=function(n){var e=Object(T.b)(),i=(Object(y.f)(),Object(T.c)(V)),t=Object(T.c)(X),s=function(n){e(K({name:n.displayName,email:n.email,photo:n.photoURL}))};return Object(k.jsxs)(F,{children:[Object(k.jsx)(Q,{children:Object(k.jsx)("img",{src:"/disney-plus/images/logo.svg"})}),i?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(Z,{children:[Object(k.jsxs)("a",{href:"/disney-plus/home",children:[Object(k.jsx)("img",{src:"/disney-plus/images/home-icon.svg"}),Object(k.jsx)("span",{children:"HOME"})]}),Object(k.jsxs)("a",{href:"/disney-plus/home",children:[Object(k.jsx)("img",{src:"/disney-plus/images/search-icon.svg"}),Object(k.jsx)("span",{children:"SEARCH"})]}),Object(k.jsxs)("a",{href:"/disney-plus/home",children:[Object(k.jsx)("img",{src:"/disney-plus/images/watchlist-icon.svg"}),Object(k.jsx)("span",{children:"WATCHLIST"})]}),Object(k.jsxs)("a",{href:"/disney-plus/home",children:[Object(k.jsx)("img",{src:"/disney-plus/images/original-icon.svg"}),Object(k.jsx)("span",{children:"ORIGINALS"})]}),Object(k.jsxs)("a",{href:"/disney-plus/home",children:[Object(k.jsx)("img",{src:"/disney-plus/images/movie-icon.svg"}),Object(k.jsx)("span",{children:"MOVIES"})]}),Object(k.jsxs)("a",{href:"/disney-plus/home",children:[Object(k.jsx)("img",{src:"/disney-plus/images/series-icon.svg"}),Object(k.jsx)("span",{children:"SERIES"})]})]}),Object(k.jsx)(_,{src:t,alt:i})]}):Object(k.jsx)($,{onClick:function(){Object(U.c)(M,P).then((function(n){console.log(n),s(n.user)})).catch((function(n){alert(n.message)}))},children:"Log in"})]})};var en=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(nn,{}),Object(k.jsx)(y.c,{children:Object(k.jsx)(y.a,{children:Object(k.jsx)(C,{})})})]})})},tn=Object(W.a)({reducer:{user:q},middleware:function(n){return n({serializableCheck:!1})}});f.a.render(Object(k.jsx)(m.a.StrictMode,{children:Object(k.jsx)(T.a,{store:tn,children:Object(k.jsx)(en,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.5b276e88.chunk.js.map