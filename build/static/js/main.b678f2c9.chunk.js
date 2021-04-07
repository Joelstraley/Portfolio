(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"name":"Helping Out","image":"../src/photos/Helping Out-adjusted.png","tech":"jQuery, Google APIs (Maps/Places/Geocoder), Semantic UI","description":"The user is asked to Donate Food, Blood or Time then inputs their zip code to get results for charities near them.","website":"https://joelstraley.github.io/Project-1-Helping-Out/","github":"https://github.com/Joelstraley/Project-1-Helping-Out"},{"id":2,"name":"Hashtag Goals","tech":"Node.js, Express, Sequelize, Passport, Bcrypt, Heroku","description":"The user creates an account then chooses a goal and how many times a week they can dedicate to achieving their goal. A calendar populates a series of minor milestones at their requested frequency.","website":"https://apple-tart-97413.herokuapp.com/","github":"https://github.com/jacquelinerodney/project2"},{"id":3,"name":"Eat A Burger","image":"src/photos/Burger App1.png","tech":"Node.js, Express, Handlebars, MySQL, Heroku","description":"The Eat a Burger app lets the user Eat/Uneat and Create a burger","website":"https://pacific-everglades-73896.herokuapp.com/","github":"https://github.com/Joelstraley/Burger"},{"id":4,"name":"Weather Dashboard","tech":"Ajax, OpenWeather API, jQuery, Bootstrap","description":"The Weather Dashboard utilizes the Openweather API to display specific weather information based on an city submitted into the Search input.","website":"https://joelstraley.github.io/Weather-Dashboard/","github":"https://github.com/Joelstraley/Weather-Dashboard"},{"id":5,"name":"Coding Quiz","tech":"Vanilla JavaScript, Bootstrap","description":"A timed quiz consisting of 5 questions, populated randomly, on the subject of JavaScript.","website":"https://joelstraley.github.io/Code-Quiz/","github":"https://github.com/Joelstraley/Code-Quiz"},{"id":6,"name":"Work Day Scheduler","tech":"Vanilla JavaScript, Days.js library","description":"9am - 5pm scheduler with blocks highlighted by past, present and future. A user\'s input information is saved in local storage.","website":"https://joelstraley.github.io/Work-Day-Scheduler/","github":"https://github.com/Joelstraley/Work-Day-Scheduler"}]')},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(16),n=a.n(i),r=(a(27),a(28),a(7)),o=a(2),l=a.p+"static/media/luca-bravo-g_LG9LGyTk8-unsplash.567ade97.jpg",h=a(0);var d=function(e){return Object(h.jsx)("div",{className:"backgroundimg text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var b=function(e){return Object(h.jsx)("div",{className:"container rounded",style:e.style,children:e.children})};var j=function(e){return Object(h.jsx)("div",{className:"row",children:e.children})};var u=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(h.jsx)("div",{className:t,children:e.children})};a(30);var m=function(e){return Object(h.jsx)("h1",{className:"title",children:e.children})},p=a.p+"static/media/about-me-headshot.0928a2e0.jpg";var x=function(){return Object(h.jsx)(d,{className:"row backgroundimg",src:l,children:Object(h.jsxs)(b,{style:{marginTop:100},children:[Object(h.jsx)(j,{children:Object(h.jsx)(u,{size:"md-12",children:Object(h.jsx)("div",{className:"headline",children:Object(h.jsx)(m,{children:"About Me"})})})}),Object(h.jsxs)(j,{children:[Object(h.jsx)(u,{size:"md-3",children:Object(h.jsx)("img",{src:p,alt:"Joel Straley Headshot",className:"img-fluid rounded headshot"})}),Object(h.jsx)(u,{size:"md-9",id:"about",children:Object(h.jsxs)("p",{children:["Joel Straley is currently enrolled in the Columbia Engineering Coding Bootcamp to become a Full Stack Web Developer. ",Object(h.jsx)("div",{className:"new-line"}),"His previous experience is in Operational Logistics. During the COVID-19 pandemic he worked with ","to build a dynamic logistical strategy to deliver 1,000 meals a day, six days a week to NYC residents in all 5 burroughs.",Object(h.jsx)("div",{className:"new-line"}),"Previously, he was a Vehicle Operations Specialist for Uber where he started as a Driver Support Representative. His focus was as a liaison between Uber, their 5 vehicle rental providers and the Taxi and Limousine Commission. This was vital in laying the logistical groundwork to help increase the availability of Wheelchair accessible commercial vehicles in NYC."]})})]})]})})},g=a(17),O=a(18),v=a(22),f=a(21);a(31);var y=function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{src:e.image,alt:e.name})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h2",{children:Object(h.jsx)("strong",{children:e.name})}),Object(h.jsx)("h6",{class:"tech",children:e.tech}),Object(h.jsx)("h6",{children:e.description}),Object(h.jsxs)("h6",{children:[Object(h.jsx)("i",{className:"fas fa-globe"}),Object(h.jsx)("a",{href:e.website,class:"extURL",children:"  Website   "}),Object(h.jsx)("i",{className:"fab fa-github fa-.5x"}),Object(h.jsx)("a",{href:e.github,class:"extURL",children:"  Github"})]})]})]})},N=a(14);var w=function(e){return Object(h.jsx)("main",Object(N.a)(Object(N.a)({className:"wrapper",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e),{},{children:e.children}))},k=a(19),S=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={projects:k},e}return Object(O.a)(a,[{key:"render",value:function(){return Object(h.jsx)(w,{children:Object(h.jsx)(b,{style:{marginTop:50},children:Object(h.jsxs)(j,{children:[Object(h.jsx)(m,{children:"Projects"}),this.state.projects.map((function(e){return Object(h.jsx)(u,{size:"md-6",children:Object(h.jsx)(y,{id:e.id,image:e.image,name:e.name,tech:e.tech,description:e.description,website:e.website,github:e.github})})}))]})})})}}]),a}(s.Component);var C=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(b,{children:Object(h.jsxs)(j,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(u,{size:"md-12",children:Object(h.jsx)("section",{children:Object(h.jsxs)("form",{children:[Object(h.jsx)("h2",{children:"Contact"}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{for:"Name",children:"Name"}),Object(h.jsx)("input",{className:"form-control",type:"text",placeholder:"Enter Name"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{for:"Email",children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(h.jsx)("small",{id:"emailHelp",className:"form-text text-dark",children:"I promise not to share your email with your enemies."})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{for:"Message",children:"Message"}),Object(h.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-dark",children:"Submit"})]})})})]})})})};a(32);var D=function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:[Object(h.jsx)(r.b,{className:"navbar-brand",id:"header",children:Object(h.jsx)("a",{href:"https://networthpost.org/net-worth/joel-straley-net-worth/",children:"Joel Straley"})}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link",children:"About"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/portfolio",className:"/portfolio"===window.location.pathname?"nav-link active":"nav-link",children:"Portfolio"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/contact",className:"/contact"===window.location.pathname?"nav-link active":"nav-link",children:"Contact"})})]})})]})};var I=function(){return Object(h.jsx)("footer",{children:Object(h.jsxs)("nav",{className:"navbar fixed-bottom navbar-dark",children:[Object(h.jsx)("a",{className:"navbar-brand",id:"footer",children:" \xa9 2021"}),Object(h.jsx)("button",{className:"btn btn-outline-primary",onClick:"swapStyleSheet('./assets/css/night.css')",children:Object(h.jsx)("i",{className:"fas fa-cloud-moon fa-1.5x moonsun"})}),Object(h.jsx)("button",{className:"btn btn-outline-primary",onClick:"swapStyleSheet('./assets/css/bright.css')",children:Object(h.jsx)("i",{className:"fas fa-cloud-sun fa-1.5x moonsun"})})]})})};a(38);var J=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(d,{className:"row backgroundimg",backgroundImage:l,children:Object(h.jsxs)(r.a,{basename:"".concat("/React-Portfolio","/"),children:[Object(h.jsx)(D,{}),Object(h.jsxs)(w,{children:[Object(h.jsx)(o.a,{exact:!0,path:["/","/about"],component:x}),Object(h.jsx)(o.a,{exact:!0,path:"/portfolio",component:S}),Object(h.jsx)(o.a,{exact:!0,path:"/contact",component:C})]}),Object(h.jsx)(I,{})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),z()}},[[39,1,2]]]);
//# sourceMappingURL=main.b678f2c9.chunk.js.map