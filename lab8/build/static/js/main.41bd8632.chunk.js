(this.webpackJsonplab8=this.webpackJsonplab8||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(7),o=n.n(s),a=(n(16),n(5)),d=n(8),r=n(9),l=n(11),j=n(10),u=(n(17),n.p+"static/media/edit.1bda04de.svg"),b=n(0),m=function(t,e){return Object(b.jsx)("button",{onClick:0,children:Object(b.jsx)("img",{src:u,alt:"edit icon"})})},p=function(t,e){return Object(b.jsxs)("div",{className:"todoitem",children:[Object(b.jsx)("div",{className:"input",children:Object(b.jsx)("input",{type:"checkbox",defaultChecked:t.completed,onChange:t.hchange})}),Object(b.jsx)("div",{className:"description",children:Object(b.jsx)("p",{style:!0===t.completed?{textDecorationLine:"line-through",color:"gray"}:{},children:t.description})}),Object(b.jsx)(m,{item:t,onEdit:e})]})},h=n(6),f=n.p+"static/media/add.c4fa83e1.svg",O=4,x=function(t){t.tasks;var e=t.onAddTask,n=Object(c.useState)(!1),i=Object(h.a)(n,2),s=i[0],o=i[1],a=Object(c.useState)(""),d=Object(h.a)(a,2),r=d[0],l=d[1],j=function(){o(!s),l("")};return Object(b.jsx)("div",{className:"task_form",children:s?Object(b.jsxs)("div",{className:"task_form_block",children:[Object(b.jsx)("input",{value:r,className:"field",type:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(t){return l(t.target.value)}}),Object(b.jsx)("button",{onClick:function(){var t={id:O++,description:r,completed:!1};e(t,O),j()},className:"button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(b.jsx)("button",{onClick:j,className:"button_gray",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}):Object(b.jsxs)("div",{onClick:j,className:"task_form_new",children:[Object(b.jsx)("img",{src:f,alt:"add icon"}),Object(b.jsx)("span",{children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})]})})},k=(n(19),[{id:0,description:"\u041f\u0440\u043e\u0441\u043d\u0443\u0442\u044c\u0441\u044f",completed:!1},{id:1,description:"\u0423\u043b\u044b\u0431\u043d\u0443\u0442\u044c\u0441\u044f",completed:!1},{id:2,description:"\u041f\u043e\u043a\u0443\u0448\u0430\u0442\u044c",completed:!1},{id:3,description:"\u0417\u0430\u0441\u043d\u0443\u0442\u044c",completed:!1}]),v=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).hchange=function(e){var n=t.state.tasks.map((function(t){return t.id})).indexOf(e);t.setState((function(t){var e=t.tasks;return console.log(e[n].completed),!1===e[n].completed&&(e[n].completed=!0),console.log(e[n].completed),e}))},t.onAddTask=function(e,n){t.setState((function(t){return t.tasks[n]=e,console.log("",t.tasks),t.tasks}))},t.onEdit=function(t){return console.log("hello",t),0},t.state={tasks:k},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state.tasks,n=e.filter((function(t){return!1===t.completed})),c=e.filter((function(t){return!0===t.completed})),i=[].concat(Object(a.a)(n),Object(a.a)(c)).map((function(e){return Object(b.jsx)(p,{description:e.description,completed:e.completed,hchange:function(){t.hchange(e.id)},onEdit:function(){t.onEdit(e.id)}},e.id)}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"Title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447:"}),Object(b.jsx)("div",{className:"main",children:Object(b.jsxs)("div",{className:"ContainerForList",children:[Object(b.jsx)("div",{className:"List",children:i}),Object(b.jsx)(x,{tasks:e,onAddTask:this.onAddTask})]})})]})}}]),n}(c.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),s(t),o(t)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.41bd8632.chunk.js.map