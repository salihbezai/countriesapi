(this.webpackJsonpcountries_api=this.webpackJsonpcountries_api||[]).push([[0],{36:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var c,o,r,i,s,a,d,b=t(0),l=t(15),j=t.n(l),p=t(6),u=(t(36),t(7)),x=p.b.nav(c||(c=Object(u.a)(["\n    background-color: ",";\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    height: 66px;\n    padding: 0 58px;\n    h1{\n\n    }\n    button {\n        border: none;\n        background-color: #fff;\n        cursor: pointer;\n        display:flex;\n        align-items:center;\n        span{\n            padding-left: 3px;\n        }\n    }\n"])),(function(n){return n.theme.backgroundColors.header})),h=t(29),f=t.n(h),O=p.b.div(o||(o=Object(u.a)(["\n    padding: 0px 63px;\n"]))),g=p.b.div(r||(r=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin:36px 0px;\n    input {\n    border-radius: 5px;\n    border: 1px solid transparent;\n    height: 35px;\n    width: 357px;\n    padding: 5px 46px;\n    box-shadow: 0px 0px 4px black;\n    }\n    select {\n        border-radius: 5px;\n        height: 35px;\n        width: 135px;\n        cursor: pointer;\n        border: 1px solid transparent;\n        box-shadow: 0px 0px 2px black;\n    }\n    select:focus{\n        outline: none;\n    }\n    input:focus{\n        outline: none;\n    }\n    i {\n        position: absolute;\n        left: 77px;\n        color:grey;\n    }\n"]))),m=p.b.div(i||(i=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    gap: 15px;\n"]))),v=t(2),y=function(){return Object(v.jsxs)(x,{children:[Object(v.jsx)("h1",{children:"Where in the world"}),Object(v.jsxs)("button",{children:[Object(v.jsx)(f.a,{}),Object(v.jsx)("span",{children:"Dark Mode"})]})]})},w=t(8),k=p.b.div(s||(s=Object(u.a)(["\n    height: 100%;\n    background-color: ",";\n    width: 100%;\n    h3 {\n        padding: 10px 10px;\n    }\n    "])),(function(n){return n.theme.backgroundColors.box})),C=p.b.div(a||(a=Object(u.a)(["\n    padding: 10px 10px;\n    div{\n        padding: 3px 0px;\n    }\n"]))),S=function(n){var e=n.country;return Object(v.jsxs)(k,{children:[Object(v.jsx)("img",{src:e.flag,width:"100%",height:"165px"}),Object(v.jsx)("h3",{children:e.name}),Object(v.jsxs)(C,{children:[Object(v.jsxs)("div",{children:["Population: ",e.population]}),Object(v.jsxs)("div",{children:["Region: ",e.region]}),Object(v.jsxs)("div",{children:["Capital: ",e.capital]})]})]})},E=function(n){var e=n.data;return Object(v.jsx)(m,{children:e.length?e.map((function(n,e){return Object(v.jsx)(S,{country:n},e)})):Object(v.jsx)("p",{children:"Loading ..."})})},A=t(18),L={fetchCountries:function(){return function(n,e){fetch("https://restcountries.com/v2/all").then((function(n){return n.json()})).then((function(e){n({type:"getCountries",payload:e})})).catch((function(n){console.log(n)}))}}},R=Object(A.b)((function(n){return{countries:n.countries.countries}}),L)((function(n){var e=n.countries,t=Object(b.useState)(e||[]),c=Object(w.a)(t,2),o=(c[0],c[1]),r=Object(b.useState)(""),i=Object(w.a)(r,2),s=i[0],a=i[1],d=Object(b.useState)([{name:"salih"},{name:"samir"},{name:"safir"}]),l=Object(w.a)(d,2),j=l[0],p=l[1];Object(b.useEffect)((function(){n.fetchCountries()}),[]),Object(b.useEffect)((function(){o(e)}),[e]);return Object(v.jsxs)(O,{children:[Object(v.jsxs)(g,{children:[Object(v.jsx)("input",{type:"text",placeholder:"Search for Country...",onChange:function(n){a(n.target.value);var e=j.filter((function(n){return-1!==n.name.toLowerCase().indexOf(s.toLowerCase())}));console.log(e),p(e),o(e),console.log(s)}}),Object(v.jsx)("i",{class:"fa fa-search icon"}),Object(v.jsxs)("select",{children:[Object(v.jsx)("option",{selected:!0,disabled:!0,children:"Filter by Region"}),Object(v.jsx)("option",{children:"Africa"}),Object(v.jsx)("option",{children:"Europe"}),Object(v.jsx)("option",{children:"Asia"}),Object(v.jsx)("option",{children:"Americas"}),Object(v.jsx)("option",{children:"Oceania"})]})]}),Object(v.jsx)(E,{data:j})]})})),D=p.b.div(d||(d=Object(u.a)(["\n    background-color: ",";\n"])),(function(n){return n.theme.backgroundColors.body})),J=function(){return Object(v.jsx)(p.a,{theme:{backgroundColors:{header:"#fff",body:"hsl(0, 0%, 98%)",box:"#fff"}},children:Object(v.jsxs)(D,{children:[Object(v.jsx)(y,{}),Object(v.jsx)(R,{})]})})},M=t(13),W=t(24),_=t(30),B=t(25),F={countries:[]},I=(W.a,Object(M.combineReducers)({countries:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;return"getCountries"===e.type?Object(B.a)(Object(B.a)({},n),{},{countries:e.payload}):n}})),P=Object(M.createStore)(I,{},Object(_.composeWithDevTools)(Object(M.applyMiddleware)(W.a)));j.a.render(Object(v.jsx)(A.a,{store:P,children:Object(v.jsx)(J,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c4cc0066.chunk.js.map