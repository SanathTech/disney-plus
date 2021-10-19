(this["webpackJsonpdisney-plus"]=this["webpackJsonpdisney-plus"]||[]).push([[0],{65:function(n,e,i){},68:function(n,e,i){},90:function(n,e,i){"use strict";i.r(e);var t,s,r,a,o,c,d,l,p,x,b,g,j,m,h,u,O,f,y,v,w,k,z,I,S,D,L,C,E,P,A,R,T,N,G,M,U,Y,X,B,H,W,F,J,K=i(7),V=i.n(K),q=i(43),Q=i.n(q),Z=(i(65),i(28)),$=i(17),_=i(11),nn=i(12),en=i(4),tn=nn.a.section(t||(t=Object(_.a)(["\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    height: 100vh;\n"]))),sn=nn.a.div(s||(s=Object(_.a)(["\n    margin-bottom: 10vw;\n    width: 100%;\n    position: relative;\n    min-height: 100vh;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 80px 40px;\n    height: 100%;\n"]))),rn=nn.a.div(r||(r=Object(_.a)(['\n    height: 100%;\n    background-position: top;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url("/disney-plus/images/login-background.jpg");\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: -1;\n']))),an=nn.a.div(a||(a=Object(_.a)(["\n    max-width: 600px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),on=nn.a.img(o||(o=Object(_.a)(["\n    margin-bottom: 12px;\n    max-width: 600px;\n    min-height: 1px;\n    display: block;\n    width: 100%;\n"]))),cn=nn.a.a(c||(c=Object(_.a)(["\n    color: #f9f9f9;\n    background-color: #0063e5;\n    margin-bottom: 12px;\n    width: 100%;\n    letter-spacing: 1px;\n    font-size: 18px;\n    padding: 16.5px 0;\n    border: 1px solid transparent;\n    border-radius: 4px;\n\n    &:hover {\n        background-color: #0483ee;\n    }\n"]))),dn=nn.a.p(d||(d=Object(_.a)(["\n    color: hsla(0,0%,95.3%,1);\n    font-size: 11px;\n    margin: 0 0 24px;\n    line-height: 1.5;\n    letter-spacing: 1px;\n"]))),ln=nn.a.img(l||(l=Object(_.a)(["\n    max-width: 600px;\n    margin-bottom: 20px;\n    display: inline-block;\n    vertical-align: bottom;\n    width: 100%;\n"]))),pn=function(n){return Object(en.jsx)(tn,{children:Object(en.jsxs)(sn,{children:[Object(en.jsxs)(an,{children:[Object(en.jsx)(on,{src:"/disney-plus/images/cta-logo-one.svg",alt:""}),Object(en.jsx)(cn,{children:"SIGN UP NOW"}),Object(en.jsx)(dn,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(en.jsx)(ln,{src:"/disney-plus/images/cta-logo-two.png",alt:""})]}),Object(en.jsx)(rn,{})]})})},xn=(i(68),i(0)),bn=i.n(xn),gn=i(2),jn=i(15),mn=i(57),hn=i(30),un=i(41),On=i(60),fn=Object(mn.a)({apiKey:"AIzaSyA6t4REjRCtKNbqlGYOyYa3Vfb4jhc_kjU",authDomain:"disney-plus-e1f60.firebaseapp.com",projectId:"disney-plus-e1f60",storageBucket:"disney-plus-e1f60.appspot.com",messagingSenderId:"372343511349",appId:"1:372343511349:web:d659f427f5fe9c5b00947c",measurementId:"G-RZC8WP3LYQ"}),yn=Object(hn.d)(),vn=Object(un.b)(),wn=new un.a,kn=(Object(On.a)(fn),yn),zn=i(19),In=i(37),Sn=Object(In.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),Dn=Sn.actions,Ln=Dn.setUserLoginDetails,Cn=Dn.setSignOutState,En=function(n){return n.user.name},Pn=function(n){return n.user.photo},An=Sn.reducer,Rn=nn.a.nav(p||(p=Object(_.a)(["\n    background-color: ",";\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 72px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 39px;\n    letter-spacing: 16px;\n    transition: all 0.2s ease-in-out 0s;\n    will-change: background-color, height;\n    z-index: 3;\n\n    &::after {\n        background: linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.03) 15%,rgba(0,0,0,0.125) 30%,rgba(0,0,0,0.25) 46%,rgba(0,0,0,0.4) 61%,rgba(0,0,0,0.553) 75%,rgba(0,0,0,0.694) 88%,rgba(0,0,0,0.8));\n        content: '';\n        height: 170px;\n        left: 0px;\n        position: absolute;\n        right: 0px;\n        top: 0px;\n        transition: height 300ms ease 0s;\n        z-index: -1;\n        will-change: height;\n        pointer-events: none;\n        display: block;\n    }\n    \n    \n"])),(function(n){return n.scrolled?"rgb(9, 11, 19)":"transparent"})),Tn=nn.a.a(x||(x=Object(_.a)(["\n    padding: 0;\n    width: 73px;\n    max-height: 70px;\n    font-size: 0;\n    display: inline-block;\n\n    img {\n        display: block;\n        width: 100%;\n    }\n"]))),Nn=nn.a.div(b||(b=Object(_.a)(['\n    align-items: center;\n    display: flex;\n    flex-flow: row nowrap;\n    height: 100%;\n    justify-content: flex-end;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    margin-right: auto;\n    margin-left: 40px;\n\n    a {\n        display: flex;\n        align-items: center;\n        padding: 0 15px;\n\n        img {\n            height: 20px;\n            min-width: 20px;\n            width: 20px;\n            z-index: auto;\n        }\n\n        span {\n            color: rgb(249, 249, 249);\n            font-size: 13px;\n            letter-spacing: 1.42px;\n            line-height: 1.08;\n            padding: 2px 0 2px 10px;\n            white-space: nowrap;\n            position: relative;\n\n            &:before {\n                background-color: rgb(249, 249, 249);\n                border-radius: 0 0 4px 4px;\n                bottom: -6px;\n                content: "";\n                height: 2px;\n                opacity: 0;\n                position: absolute;\n                right: 0;\n                left: 0;\n                transform-origin: left center;\n                transform: scaleX(0);\n                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n                visibility: hidden;\n                width: auto;\n            }\n        }\n\n        &:hover {\n            span:before {\n                transform: scaleX(1);\n                visibility: visible;\n                opacity: 1 !important;\n            }\n        }\n    }\n\n    @media (max-width: 1007px) {\n        display: none;\n    }\n']))),Gn=nn.a.div(g||(g=Object(_.a)(["\n    align-items: center;\n    display: flex;\n    flex-flow: row nowrap;\n    height: 100%;\n    justify-content: flex-end;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    margin-right: auto;\n    margin-left: 35px;\n\n    a {\n        display: flex;\n        align-items: center;\n        padding: 0 12px;\n\n        img {\n            height: 24px;\n            min-width: 24px;\n            width: 24px;\n            z-index: auto;\n        }\n\n        &:hover {\n            span:before {\n                transform: scaleX(1);\n                visibility: visible;\n                opacity: 1 !important;\n            }\n        }\n    }\n\n    @media (min-width: 1008px) {\n        display: none;\n    }\n\n    @media (max-width: 768px) {\n        display: none;\n    }\n"]))),Mn=nn.a.div(j||(j=Object(_.a)(["\n    background-color: rgba(0, 0, 0, 0.6);\n    padding: 8px 16px;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    border: 1px solid #f9f9f9;\n    border-radius: 4px;\n    transition: all 0.2s ease 0s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #f9f9f9;\n        color: #000;\n        border-color: transparent;\n    }\n"]))),Un=nn.a.img(m||(m=Object(_.a)(["\n    height: 100%;\n    border-radius: 50%;\n"]))),Yn=nn.a.div(h||(h=Object(_.a)(["\n    position: absolute;\n    top: 48px;\n    right: 0;\n    background: rgb(19,19,19);\n    border: 1px solid rgba(151, 151, 151, 0.34);\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n    padding: 10px;\n    font-size: 12px;\n    letter-spacing: 3px;\n    width: 100px;\n    opacity: 0;\n"]))),Xn=nn.a.div(u||(u=Object(_.a)(["\n    position: relative;\n    height: 48px;\n    width: 48px;\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        "," {\n            opacity: 1;\n            transition-duration: 1s;\n        }\n    }\n"])),Yn),Bn=function(n){var e=Object(zn.b)(),i=Object($.f)(),t=Object(zn.c)(En),s=Object(zn.c)(Pn),r=Object(K.useState)(!1),a=Object(jn.a)(r,2),o=a[0],c=a[1];Object(K.useEffect)((function(){vn.onAuthStateChanged(function(){var n=Object(gn.a)(bn.a.mark((function n(e){return bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(l(e),i.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]);window.addEventListener("scroll",(function(){window.scrollY>=72?c(!0):c(!1)}));var d=function(){t?vn.signOut().then((function(){e(Cn()),i.push("/")})).catch((function(n){return alert(n.message)})):Object(un.c)(vn,wn).then((function(n){console.log(n),l(n.user)})).catch((function(n){alert(n.message)}))},l=function(n){e(Ln({name:n.displayName,email:n.email,photo:n.photoURL}))};return Object(en.jsxs)(Rn,{scrolled:o,children:[Object(en.jsx)(Tn,{children:Object(en.jsx)("img",{src:"/disney-plus/images/logo.svg"})}),t?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsxs)(Nn,{children:[Object(en.jsxs)("a",{href:"/disney-plus/home",children:[Object(en.jsx)("img",{src:"/disney-plus/images/home-icon.svg"}),Object(en.jsx)("span",{children:"HOME"})]}),Object(en.jsxs)("a",{href:"/disney-plus/home",children:[Object(en.jsx)("img",{src:"/disney-plus/images/search-icon.svg"}),Object(en.jsx)("span",{children:"SEARCH"})]}),Object(en.jsxs)("a",{href:"/disney-plus/home",children:[Object(en.jsx)("img",{src:"/disney-plus/images/watchlist-icon.svg"}),Object(en.jsx)("span",{children:"WATCHLIST"})]}),Object(en.jsxs)("a",{href:"/disney-plus/home",children:[Object(en.jsx)("img",{src:"/disney-plus/images/original-icon.svg"}),Object(en.jsx)("span",{children:"ORIGINALS"})]}),Object(en.jsxs)("a",{href:"/disney-plus/home",children:[Object(en.jsx)("img",{src:"/disney-plus/images/movie-icon.svg"}),Object(en.jsx)("span",{children:"MOVIES"})]}),Object(en.jsxs)("a",{href:"/disney-plus/home",children:[Object(en.jsx)("img",{src:"/disney-plus/images/series-icon.svg"}),Object(en.jsx)("span",{children:"SERIES"})]})]}),Object(en.jsxs)(Gn,{children:[Object(en.jsx)("a",{href:"/disney-plus/home",children:Object(en.jsx)("img",{src:"/disney-plus/images/home-icon.svg"})}),Object(en.jsx)("a",{href:"/disney-plus/home",children:Object(en.jsx)("img",{src:"/disney-plus/images/search-icon.svg"})}),Object(en.jsx)("a",{href:"/disney-plus/home",children:Object(en.jsx)("img",{src:"/disney-plus/images/watchlist-icon.svg"})}),Object(en.jsx)("a",{href:"/disney-plus/home",children:Object(en.jsx)("img",{src:"/disney-plus/images/dots-icon.svg"})})]}),Object(en.jsxs)(Xn,{children:[Object(en.jsx)(Un,{src:s,alt:t}),Object(en.jsx)(Yn,{children:Object(en.jsx)("span",{onClick:d,children:"Sign out"})})]})]}):Object(en.jsx)(Mn,{onClick:d,children:"Log in"})]})},Hn=i(32),Wn=i(18),Fn=(i(73),i(74),i(59)),Jn=i.n(Fn),Kn=Object(nn.a)(Jn.a)(O||(O=Object(_.a)(["\n    margin-top: 20px;\n\n    & > button {\n        opacity: 0;\n        height: 100%;\n        width: 5vw;\n        z-index: 1;\n\n        &:hover {\n            opacity: 1;\n            transition: opacity 0.2s ease 0s;\n        }\n    }\n\n    ul li button {\n        &:before {\n            font-size: 10px;\n            opacity: 1;\n            color: rgb(150, 158, 171);\n            @media (max-width: 768px) {\n                display: none;\n            }\n        }\n    }\n\n    li.slick-active button:before {\n        color: white;\n        @media (max-width: 768px) {\n            display: none;\n        }\n    }\n\n    .slick-list {\n        overflow: initial;\n    }\n\n    .slick-prev {\n        left: -5%;\n    }\n\n    .slick-next {\n        right: -5%;\n    }\n\n    .slick-dots {\n        bottom: 20px;\n        display: block;\n        margin: 0px;\n        padding: 0px;\n        position: absolute;\n        right: 25px;\n        text-align: right;\n        pointer-events: none;\n        width: 100%;\n    }\n\n    .slick-dots li {\n        margin: 0;\n    }\n"]))),Vn=nn.a.div(f||(f=Object(_.a)(["\n    border-radius: 4px;\n    cursor: pointer;\n    position: relative;\n    padding: 0;\n\n    a {\n        border-radius: 4px;\n        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n        cursor: pointer;\n        display: block;\n        position: relative;\n        margin: 10px;\n        text-decoration: none;\n        border: 4px solid transparent;\n\n        div {\n            height: 0;\n            width: 100%;\n            background-position: right;\n            background-size: cover;\n            background-repeat: no-repeat;\n            padding-top: 25.6%;\n            border-radius: 4px;\n            display: block;\n            z-index: -1;\n        }\n\n        img {\n            inset: 0px;\n            position: absolute;\n            height: 100%;\n        }\n\n        &:hover {\n            border: 4px solid rgba(249, 249, 249, 0.8);\n        }\n\n        #american-dad {\n            background-image: url('/disney-plus/images/slider-american-dad.jfif');\n        }\n\n        #among {\n            background-image: url('/disney-plus/images/slider-among.jfif');\n        }\n        #among-logo {\n            padding: 5%;            \n        }\n\n        #black-widow {\n            background-image: url('/disney-plus/images/slider-black-widow.jfif');\n        }\n        #black-widow-logo {\n            padding: 5%;\n        }\n\n        #criminal-minds {\n            background-image: url('/disney-plus/images/slider-criminal-minds.jfif');\n        }\n\n        #family-guy {\n            background-image: url('/disney-plus/images/slider-family-guy.jfif');\n        }\n\n        #free-guy {\n            background-image: url('/disney-plus/images/slider-free-guy.jfif');\n        }\n\n        #just-beyond {\n            background-image: url('/disney-plus/images/slider-just-beyond.jfif');\n        }\n\n        #muppets {\n            background-image: url('/disney-plus/images/slider-muppets.jfif');\n        }\n        \n        #my-name {\n            background-image: url('/disney-plus/images/slider-my-name.jfif');\n        }\n\n        #only-murders {\n            background-image: url('/disney-plus/images/slider-only-murders.jfif');\n        }\n        #only-murders-logo {\n            padding: 5%;\n        }\n\n        #simpsons {\n            background-image: url('/disney-plus/images/slider-simpsons.jfif');\n        }\n        \n        #star-wars {\n            background-image: url('/disney-plus/images/slider-star-wars.jfif');\n        }\n\n        #what-if {\n            background-image: url('/disney-plus/images/slider-what-if.jfif');\n        }\n        #what-if-logo {\n            padding: 5%;\n        }\n    }\n"]))),qn=function(n){return Object(en.jsxs)(Kn,Object(Hn.a)(Object(Hn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"american-dad",children:Object(en.jsx)("img",{id:"american-dad-logo",src:"/disney-plus/images/slider-american-dad-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"among",children:Object(en.jsx)("img",{id:"among-logo",src:"/disney-plus/images/slider-among-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"black-widow",children:Object(en.jsx)("img",{id:"black-widow-logo",src:"/disney-plus/images/slider-black-widow-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"criminal-minds",children:Object(en.jsx)("img",{id:"criminal-minds-logo",src:"/disney-plus/images/slider-criminal-minds-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"family-guy",children:Object(en.jsx)("img",{id:"family-guy-logo",src:"/disney-plus/images/slider-family-guy-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"free-guy",children:Object(en.jsx)("img",{id:"free-guy-logo",src:"/disney-plus/images/slider-free-guy-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"just-beyond",children:Object(en.jsx)("img",{id:"just-beyond-logo",src:"/disney-plus/images/slider-just-beyond-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"muppets",children:Object(en.jsx)("img",{id:"muppets-logo",src:"/disney-plus/images/slider-muppets-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"my-name",children:Object(en.jsx)("img",{id:"my-name-logo",src:"/disney-plus/images/slider-my-name-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"only-murders",children:Object(en.jsx)("img",{id:"only-murders-logo",src:"/disney-plus/images/slider-only-murders-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"simpsons",children:Object(en.jsx)("img",{id:"simpsons-logo",src:"/disney-plus/images/slider-simpsons-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"star-wars",children:Object(en.jsx)("img",{id:"star-wars-logo",src:"/disney-plus/images/slider-star-wars-logo.png"})})})}),Object(en.jsx)(Vn,{children:Object(en.jsx)("a",{children:Object(en.jsx)("div",{id:"what-if",children:Object(en.jsx)("img",{id:"what-if-logo",src:"/disney-plus/images/slider-what-if-logo.png"})})})})]}))},Qn=Object(In.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),Zn=Qn.actions.setMovies,$n=function(n){return n.movie.recommend},_n=function(n){return n.movie.newDisney},ne=function(n){return n.movie.original},ee=function(n){return n.movie.trending},ie=Qn.reducer,te=nn.a.div(y||(y=Object(_.a)(["\n    padding: 10px 10px 0 10px;\n"]))),se=nn.a.div(v||(v=Object(_.a)(["\n    display: grid;\n    grid-gap: 25px;\n    gap: 25px; grid-template-columns: repeat(4, minmax(0, 1fr));\n\n    @media (max-width: 768px) {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n"]))),re=nn.a.div(w||(w=Object(_.a)(["\n    padding-top: 56.25%;\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n                rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n        inset: 0px;\n        display: block;\n        height: 100%;\n        object-fit: cover;\n        opacity: 1;\n        position: absolute;\n        transition: opacity 500ms ease-in-out 0s;\n        width: 100%;\n        z-index: 1;\n        top: 0;\n    }\n\n    &:hover {\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n    }\n"]))),ae=function(n){var e=Object(zn.c)(_n);return Object(en.jsxs)(te,{children:[Object(en.jsx)("h4",{children:"New to Disney+"}),Object(en.jsx)(se,{children:e&&e.map((function(n,e){return Object(en.jsx)(re,{children:Object(en.jsx)(Z.b,{to:"/movies/"+n.title.replace(/\s+/g,"-").toLowerCase()+"/"+n.id,children:Object(en.jsx)("img",{src:n.cardImg,alt:n.title})})},e)}))})]})},oe=nn.a.div(k||(k=Object(_.a)(["\n    padding: 10px 10px 0 10px;\n"]))),ce=nn.a.div(z||(z=Object(_.a)(["\n    display: grid;\n    grid-gap: 25px;\n    gap: 25px; grid-template-columns: repeat(4, minmax(0, 1fr));\n\n    @media (max-width: 768px) {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n"]))),de=nn.a.div(I||(I=Object(_.a)(["\n    padding-top: 56.25%;\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n                rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n        inset: 0px;\n        display: block;\n        height: 100%;\n        object-fit: cover;\n        opacity: 1;\n        position: absolute;\n        transition: opacity 500ms ease-in-out 0s;\n        width: 100%;\n        z-index: 1;\n        top: 0;\n    }\n\n    &:hover {\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n    }\n"]))),le=function(n){var e=Object(zn.c)(ne);return Object(en.jsxs)(oe,{children:[Object(en.jsx)("h4",{children:"Originals"}),Object(en.jsx)(ce,{children:e&&e.map((function(n,e){return Object(en.jsx)(de,{children:Object(en.jsx)(Z.b,{to:"/movies/"+n.title.replace(/\s+/g,"-").toLowerCase()+"/"+n.id,children:Object(en.jsx)("img",{src:n.cardImg,alt:n.title})})},e)}))})]})},pe=nn.a.div(S||(S=Object(_.a)(["\n    padding: 10px 10px 0 10px;\n"]))),xe=nn.a.div(D||(D=Object(_.a)(["\n    display: grid;\n    grid-gap: 25px;\n    gap: 25px; grid-template-columns: repeat(4, minmax(0, 1fr));\n\n    @media (max-width: 768px) {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n"]))),be=nn.a.div(L||(L=Object(_.a)(["\n    padding-top: 56.25%;\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n                rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n        inset: 0px;\n        display: block;\n        height: 100%;\n        object-fit: cover;\n        opacity: 1;\n        position: absolute;\n        transition: opacity 500ms ease-in-out 0s;\n        width: 100%;\n        z-index: 1;\n        top: 0;\n    }\n\n    &:hover {\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n    }\n"]))),ge=function(n){var e=Object(zn.c)($n);return Object(en.jsxs)(pe,{children:[Object(en.jsx)("h4",{children:"Recommended For You"}),Object(en.jsx)(xe,{children:e&&e.map((function(n,e){return Object(en.jsx)(be,{children:Object(en.jsx)(Z.b,{to:"/movies/"+n.title.replace(/\s+/g,"-").toLowerCase()+"/"+n.id,children:Object(en.jsx)("img",{src:n.cardImg,alt:n.title})})},e)}))})]})},je=nn.a.div(C||(C=Object(_.a)(["\n    padding: 10px 10px 0 10px;\n"]))),me=nn.a.div(E||(E=Object(_.a)(["\n    display: grid;\n    grid-gap: 25px;\n    gap: 25px; grid-template-columns: repeat(4, minmax(0, 1fr));\n\n    @media (max-width: 768px) {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n"]))),he=nn.a.div(P||(P=Object(_.a)(["\n    padding-top: 56.25%;\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n                rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n        inset: 0px;\n        display: block;\n        height: 100%;\n        object-fit: cover;\n        opacity: 1;\n        position: absolute;\n        transition: opacity 500ms ease-in-out 0s;\n        width: 100%;\n        z-index: 1;\n        top: 0;\n    }\n\n    &:hover {\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n    }\n"]))),ue=function(n){var e=Object(zn.c)(ee);return Object(en.jsxs)(je,{children:[Object(en.jsx)("h4",{children:"Trending"}),Object(en.jsx)(me,{children:e&&e.map((function(n,e){return Object(en.jsx)(he,{children:Object(en.jsx)(Z.b,{to:"/movies/"+n.title.replace(/\s+/g,"-").toLowerCase()+"/"+n.id,children:Object(en.jsx)("img",{src:n.cardImg,alt:n.title})})},e)}))})]})},Oe=nn.a.div(A||(A=Object(_.a)(["\n    padding: 20px 10px 0px;\n    display: grid;\n    grid-gap: 25px;\n    gap: 25px;\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n    @media (max-width: 768px) {\n        grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n"]))),fe=nn.a.div(R||(R=Object(_.a)(["\n    padding-top: 56.25%;\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,\n                rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n        inset: 0px;\n        display: block;\n        height: 100%;\n        object-fit: cover;\n        opacity: 1;\n        position: absolute;\n        transition: opacity 500ms ease-in-out 0s;\n        width: 100%;\n        z-index: 1;\n        top: 0;\n    }\n\n    video {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        position: absolute;\n        top: 0px;\n        opacity: 0;\n        z-index: 0;\n    }\n\n    &:hover {\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n\n        video {\n            opacity: 1;\n        }\n    }\n"]))),ye=function(n){return Object(en.jsxs)(Oe,{children:[Object(en.jsxs)(fe,{children:[Object(en.jsx)("img",{src:"/disney-plus/images/viewers-disney.png",alt:""}),Object(en.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:Object(en.jsx)("source",{src:"/disney-plus/videos/disney.mp4",type:"video/mp4"})})]}),Object(en.jsxs)(fe,{children:[Object(en.jsx)("img",{src:"/disney-plus/images/viewers-pixar.png",alt:""}),Object(en.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:Object(en.jsx)("source",{src:"/disney-plus/videos/pixar.mp4",type:"video/mp4"})})]}),Object(en.jsxs)(fe,{children:[Object(en.jsx)("img",{src:"/disney-plus/images/viewers-marvel.png",alt:""}),Object(en.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:Object(en.jsx)("source",{src:"/disney-plus/videos/marvel.mp4",type:"video/mp4"})})]}),Object(en.jsxs)(fe,{children:[Object(en.jsx)("img",{src:"/disney-plus/images/viewers-starwars.png",alt:""}),Object(en.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:Object(en.jsx)("source",{src:"/disney-plus/videos/star-wars.mp4",type:"video/mp4"})})]}),Object(en.jsxs)(fe,{children:[Object(en.jsx)("img",{src:"/disney-plus/images/viewers-national.png",alt:""}),Object(en.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:Object(en.jsx)("source",{src:"/disney-plus/videos/national-geographic.mp4",type:"video/mp4"})})]}),Object(en.jsxs)(fe,{children:[Object(en.jsx)("img",{src:"/disney-plus/images/viewers-star.png",alt:""}),Object(en.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:Object(en.jsx)("source",{src:"/disney-plus/videos/star.mp4",type:"video/mp4"})})]})]})},ve=nn.a.main(T||(T=Object(_.a)(["\n    position: relative;\n    min-height: calc(100vh - 250px);\n    overflow-x: hidden;\n    display: block;\n    padding: 72px calc(3.5vw + 15px);\n\n    &:after {\n        background: url('/disney-plus/images/home-background.png') center center / cover no-repeat fixed;\n        content: '';\n        position: absolute;\n        inset: 0;\n        opacity: 1;\n        z-index: -1;\n    }\n    \n"]))),we=function(n){var e=Object(zn.b)(),i=Object(zn.c)(En),t=[],s=[],r=[],a=[];return Object(K.useEffect)((function(){Object(hn.e)(Object(hn.a)(kn,"movies"),(function(n){n.docs.map((function(n){switch(n.data().type){case"recommend":t=[].concat(Object(Wn.a)(t),[Object(Hn.a)({id:n.id},n.data())]);break;case"new":s=[].concat(Object(Wn.a)(s),[Object(Hn.a)({id:n.id},n.data())]);break;case"original":r=[].concat(Object(Wn.a)(r),[Object(Hn.a)({id:n.id},n.data())]);break;case"trending":a=[].concat(Object(Wn.a)(a),[Object(Hn.a)({id:n.id},n.data())])}})),e(Zn({recommend:t,newDisney:s,original:r,trending:a}))}))}),[i]),Object(en.jsxs)(ve,{children:[Object(en.jsx)(qn,{}),Object(en.jsx)(ye,{}),Object(en.jsx)(ge,{}),Object(en.jsx)(ae,{}),Object(en.jsx)(le,{}),Object(en.jsx)(ue,{})]})},ke=nn.a.div(N||(N=Object(_.a)(["\n    position: relative;\n    min-height: calc(100vh-250px);\n    overflow-x: hidden;\n    display: block;\n    top: 50px;\n    padding: 0 calc(3.5vw + 25px);\n"]))),ze=nn.a.div(G||(G=Object(_.a)(["\n    left: 0;\n    opacity: 1;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: -1;\n    img {\n        width: 100%;\n    }\n\n    div {\n        inset: 0px;\n        position: absolute;\n        background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));\n    }\n"]))),Ie=nn.a.div(M||(M=Object(_.a)(["\n    align-items: flex-end;\n    display: flex;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    margin: 0px auto;\n    height: 30vw;\n    min-height: 170px;\n    padding-bottom: 24px;\n    width: 100%;\n\n    img {\n        max-width: 600px;\n        min-width: 200px;\n        width: 35vw;\n    }\n"]))),Se=nn.a.div(U||(U=Object(_.a)(["\n    max-width: 874px;\n"]))),De=nn.a.div(Y||(Y=Object(_.a)(["\n    align-items: center;\n    display: flex;\n    flex-flow: row nowrap;\n    margin: 24px 0px 18px 0;\n    min-height: 56px;\n"]))),Le=nn.a.button(X||(X=Object(_.a)(["\n    font-size: 15px;\n    font-weight: 600;\n    margin: 0 22px 0 0;\n    padding: 0 21px;\n    height: 56px;\n    border-radius: 4px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    letter-spacing: 1.8px;\n    text-align: center;\n    text-transform: uppercase;\n    background: rgb(249, 249, 249);\n    border: none;\n    color: rgb(0, 0, 0);\n\n    img {\n        width: 36px;\n        margin-right: 11px;\n    }\n\n    span {\n        margin-bottom: 3px;\n    }\n\n    &:hover {\n        background: rgb(198, 198, 198);\n    }\n\n    @media (max-width: 768px) {\n        height: 45px;\n        padding: 0 12px;\n        font-size: 12px;\n        margin: 0 10px 0 0;\n\n        img {\n            width: 25px;\n        }\n    }\n"]))),Ce=Object(nn.a)(Le)(B||(B=Object(_.a)(["\n    background: rgba(0, 0, 0, 0.5);\n    border: 1px solid rgb(249, 249, 249);\n    color: rgb(249, 249, 249);\n\n    &:hover {\n        background: rgb(249, 249, 249, 0.4);\n        border: 1px solid transparent;\n        color: rgba(0, 0, 0)\n    }\n"]))),Ee=nn.a.div(H||(H=Object(_.a)(["\n    margin-right: 16px;\n    height: 44px;\n    width: 44px;\n    min-width: 44px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0);\n    border-radius: 50%;\n    border: 2px solid white;\n    cursor: pointer;\n\n    span {\n        background-color: rgb(249, 249, 249);\n\n        &:first-child {\n            height: 2px;\n            transform: translate(1px, 0) rotate(0deg);\n            width: 16px;\n        }\n\n        &:nth-child(2){\n            height: 16px;\n            transform: translateX(-8px) rotate(0deg);\n            width: 2px;\n        }\n    }\n\n    &:hover {\n        background: rgb(249, 249, 249);\n        span {\n            background-color: rgb(0, 0, 0);\n        }\n    }\n"]))),Pe=nn.a.div(W||(W=Object(_.a)(["\n    margin-right: 16px;\n    height: 44px;\n    width: 44px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0);\n    border-radius: 50%;\n    border: 2px solid white;\n    cursor: pointer;\n\n    div {\n        height: 40px;\n        width: 40px;\n        overflow: hidden;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n    }\n\n    #black {\n        display: none;\n    }\n\n    &:hover {\n        background: rgb(249, 249, 249);\n\n        #white {\n            display: none;\n        }\n\n        #black {\n            display: block;\n        }\n    }\n"]))),Ae=nn.a.div(F||(F=Object(_.a)(["\n    color: rgb(249, 249, 249);\n    font-size: 12px;\n    font-weight: 400;\n    min-height: 20px;\n\n    @media (max-width: 768px) {\n        font-size: 12px;\n    }\n"]))),Re=nn.a.div(J||(J=Object(_.a)(["\n    line-height: 1.9;\n    font-size: 18px;\n    font-weight: 400;\n    padding: 0;\n    color: rgb(249, 249, 249);\n\n    @media (max-width: 768px) {\n        font-size: 14px;\n    }\n"]))),Te=function(n){var e=Object($.g)().id,i=Object(K.useState)({}),t=Object(jn.a)(i,2),s=t[0],r=t[1];return Object(K.useEffect)((function(){Object(hn.c)(Object(hn.b)(Object(hn.a)(kn,"movies"),e)).then((function(n){n.exists?r(n.data()):console.log("no such document")})).catch((function(n){console.log("Error getting documents",n)}))}),[e]),Object(en.jsxs)(ke,{children:[Object(en.jsxs)(ze,{children:[Object(en.jsx)("img",{src:s.backgroundImg,alt:s.title}),Object(en.jsx)("div",{})]}),Object(en.jsx)(Ie,{children:Object(en.jsx)("img",{src:s.titleImg,alt:s.title})}),Object(en.jsxs)(Se,{children:[Object(en.jsx)(Ae,{children:s.subTitle}),Object(en.jsxs)(De,{children:[Object(en.jsxs)(Le,{children:[Object(en.jsx)("img",{src:"/disney-plus/images/play-icon-black.png",alt:""}),Object(en.jsx)("span",{children:"Play"})]}),Object(en.jsx)(Ce,{children:Object(en.jsx)("span",{children:"Trailer"})}),Object(en.jsxs)(Ee,{children:[Object(en.jsx)("span",{}),Object(en.jsx)("span",{})]}),Object(en.jsx)(Pe,{children:Object(en.jsxs)("div",{children:[Object(en.jsx)("img",{id:"white",src:"/disney-plus/images/group-icon-white.svg",alt:""}),Object(en.jsx)("img",{id:"black",src:"/disney-plus/images/group-icon-black.svg",alt:""})]})})]}),Object(en.jsx)(Re,{children:s.description})]})]})};var Ne=function(){return Object(en.jsx)("div",{className:"App",children:Object(en.jsxs)(Z.a,{basename:"/disney-plus",children:[Object(en.jsx)(Bn,{}),Object(en.jsxs)($.c,{children:[Object(en.jsx)($.a,{exact:!0,path:"/",children:Object(en.jsx)(pn,{})}),Object(en.jsx)($.a,{path:"/home",children:Object(en.jsx)(we,{})}),Object(en.jsx)($.a,{path:"/movies/:title/:id",children:Object(en.jsx)(Te,{})}),Object(en.jsx)($.a,{path:"/*",children:Object(en.jsx)(we,{})})]})]})})},Ge=Object(In.a)({reducer:{user:An,movie:ie},middleware:function(n){return n({serializableCheck:!1})}});Q.a.render(Object(en.jsx)(V.a.StrictMode,{children:Object(en.jsx)(zn.a,{store:Ge,children:Object(en.jsx)(Ne,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.dede79a9.chunk.js.map