(this.webpackJsonpdynamic_table=this.webpackJsonpdynamic_table||[]).push([[0],{10:function(e,t,n){e.exports={form_wrapper:"InputForm_form_wrapper__3lg1v",input_label:"InputForm_input_label__6U3Uv"}},11:function(e,t,n){e.exports={table:"Table_table__3cVv6",cell:"Table_cell__38xeP"}},17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),l=n.n(c),r=(n(22),n(5)),u=(n(29),n(15)),i=n(16),d=n(1),m={data:[{id:1,name:"\u041a\u0435\u0439\u0441",occupation:"\u0445\u0430\u043a\u0435\u0440",sex:"\u043c\u0443\u0436\u0447\u0438\u043d\u0430",addiction:"\u0430\u043c\u0444\u0435\u0442\u0430\u043c\u0438\u043d"},{id:2,name:"\u041c\u043e\u043b\u043b\u0438",occupation:"\u0443\u043b\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u043c\u0443\u0440\u0430\u0439",sex:"\u0436\u0435\u043d\u0449\u0438\u043d\u0430",addiction:""},{id:3,name:"\u041a\u043e\u0440\u0442\u043e",occupation:"\u043e\u0442\u0441\u0442\u0430\u0432\u043d\u043e\u0439 \u0432\u043e\u0435\u043d\u043d\u044b\u0439",sex:"\u043c\u0443\u0436\u0447\u0438\u043d\u0430",addiction:""},{id:4,name:"\u0424\u043b\u0438\u043d\u043d",occupation:"\u0442\u043e\u0440\u0433\u043e\u0432\u0435\u0446",sex:"\u043c\u0443\u0436\u0447\u0438\u043d\u0430",addiction:"\u043d\u0438\u043a\u043e\u0442\u0438\u043d"}],idCount:4,columns:[{field:"name",text:"\u0418\u043c\u044f"},{field:"occupation",text:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439"},{field:"sex",text:"\u041f\u043e\u043b"},{field:"addiction",text:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c"}]},s=n(14),f=n(10),p=n.n(f),E=function(e){var t=e.columns,n=e.addRow;return o.a.createElement("form",{onSubmit:function(e){var a,o={},c=Object(s.a)(t);try{for(c.s();!(a=c.n()).done;){var l=a.value;o[l.field]=e.target[l.field].value}}catch(r){c.e(r)}finally{c.f()}e.preventDefault(),n(o),e.target=null},className:p.a.form_wrapper},t.map((function(e){return o.a.createElement("label",{key:e.field,className:p.a.input_label},e.text,o.a.createElement("input",{name:e.field})," ")})),o.a.createElement("button",null," Ok "))},b=n(11),w=n.n(b),v=function(e){var t=e.columns;return o.a.createElement("thead",null,o.a.createElement("tr",null,t.map((function(e){return o.a.createElement(R,{key:e.field,value:e.text})}))))},_=function(e){var t=e.rows,n=e.columns,a=e.deleteRow,c=n.map((function(e){return e.field}));return o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement(O,{key:e.id,row:e,columns:c,deleteRow:a})})))},O=function(e){var t=e.row,n=e.columns,a=e.deleteRow;return o.a.createElement("tr",null,n.map((function(e){return o.a.createElement(R,{key:e,value:t[e]})})),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){a(t.id)}},"-")))},R=function(e){var t=e.value;return o.a.createElement("td",{className:w.a.cell}," ",t," ")},h=function(e){var t=e.data,n=e.columns,a=e.deleteRow;return o.a.createElement("table",{className:w.a.table},o.a.createElement(v,{columns:n}),o.a.createElement(_,{columns:n,rows:t,deleteRow:a}))},x=Object(r.b)((function(e){return{data:e.data,columns:e.columns}}),{deleteRow:function(e){return{type:"DELETE_ROW",id:e}},addRow:function(e){return{type:"ADD_ROW",row:e}}})((function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],l=n[1];return o.a.createElement("div",null,o.a.createElement(h,{data:e.data,columns:e.columns,deleteRow:e.deleteRow}),o.a.createElement("button",{onClick:function(){l(!c)}}," ",c?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"," "),c&&o.a.createElement(E,{columns:e.columns,addRow:e.addRow}))})),y=(0,n(7).createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ROW":return Object(d.a)(Object(d.a)({},e),{},{idCount:e.idCount+1,data:[].concat(Object(i.a)(e.data),[Object(d.a)(Object(d.a)({},t.row),{},{id:e.idCount+1})])});case"DELETE_ROW":return Object(d.a)(Object(d.a)({},e),{},{data:e.data.filter((function(e){return t.id!==e.id}))});default:return e}}));var j=function(){return o.a.createElement(r.a,{store:y},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.d15a0a7a.chunk.js.map