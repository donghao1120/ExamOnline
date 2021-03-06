(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5816f890"],{"268f":function(e,t,a){e.exports=a("fde4")},"32a6":function(e,t,a){var i=a("241e"),l=a("c3a1");a("ce7e")("keys",function(){return function(e){return l(i(e))}})},3475:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 试卷中心")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"筛选类别"},model:{value:e.select_cate,callback:function(t){e.select_cate=t},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:"Java",value:"Java"}}),a("el-option",{key:"2",attrs:{label:"Maven",value:"Maven"}}),a("el-option",{key:"3",attrs:{label:"Vue",value:"Vue"}}),a("el-option",{key:"2",attrs:{label:"C++",value:"C++"}}),a("el-option",{key:"2",attrs:{label:"Linux",value:"Linux"}})],1),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"难度"},model:{value:e.select_type,callback:function(t){e.select_type=t},expression:"select_type"}},[a("el-option",{key:"1",attrs:{label:"简单",value:"简单"}}),a("el-option",{key:"2",attrs:{label:"中等",value:"中等"}}),a("el-option",{key:"2",attrs:{label:"困难",value:"困难"}})],1),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),e._v("   \n            "),a("router-link",{attrs:{to:"/addPaper"}},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"}},[e._v("生成新试卷")])],1)],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","row-class-name":e.tableRowClassName,"default-sort":{prop:"paperCreateDate",order:"descending"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"paperId",label:"试卷编号",width:"120"}}),a("el-table-column",{attrs:{prop:"paperName",label:"试卷标题"}}),a("el-table-column",{attrs:{prop:"type.typeName",label:"试卷类别",width:"120"}}),a("el-table-column",{attrs:{prop:"difficulty",label:"试卷难度",width:"120"}}),a("el-table-column",{attrs:{prop:"paperCreateDate",label:"创建日期",width:"120",sortable:""}}),a("el-table-column",{attrs:{prop:"company.companyName",label:"所属公司",width:"120"}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"handle-box",attrs:{align:"left"}},[a("br"),a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:e.delAll}},[e._v("批量删除")])],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","page-size":e.pageInfo.pageSize,"current-page":e.pageInfo.startPage,layout:"prev, pager, next",total:e.paperList.total},on:{"update:currentPage":function(t){e.$set(e.pageInfo,"startPage",t)},"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"60%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("div",{staticClass:"edit"},[a("el-form",{ref:"form",attrs:{model:e.EditForm,inline:"true"}},[a("el-form-item",{attrs:{label:"试卷标题"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",autosize:"autosize"},model:{value:e.editForm.paperName,callback:function(t){e.$set(e.editForm,"paperName",t)},expression:"editForm.paperName"}})],1),a("el-form-item",{attrs:{label:"试卷类别"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.typeName,callback:function(t){e.$set(e.editForm,"typeName",t)},expression:"editForm.typeName"}},e._l(e.paperTypeList,function(e){return a("el-option",{key:e.typeId,attrs:{label:e.typeName,value:e.typeId}})}),1)],1),a("el-form-item",{attrs:{label:"试卷难度"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.paperDifficulty,callback:function(t){e.$set(e.editForm,"paperDifficulty",t)},expression:"editForm.paperDifficulty"}},[a("el-option",{key:"1",attrs:{label:"简单",value:"1"}}),a("el-option",{key:"2",attrs:{label:"中等",value:"2"}}),a("el-option",{key:"3",attrs:{label:"困难",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{model:{value:e.editForm.status,callback:function(t){e.$set(e.editForm,"status",t)},expression:"editForm.status"}})],1)],1)],1),a("div",{staticClass:"questions-body"},[this.paperQuestions.singleList.length>0?a("div",{staticClass:"single-questions"},[a("h4",[e._v("单选题")]),e._l(this.paperQuestions.singleList,function(t,i){return a("div",[a("h5",{staticClass:"question-title"},[e._v(e._s(i+1)+"."+e._s(t.questionText))]),a("el-radio-group",{attrs:{disabled:""}},e._l(e.splitOption(t.questionOption),function(t){return a("div",{staticClass:"mb-2"},[a("el-radio",{attrs:{label:3}},[e._v(e._s(t))])],1)}),0)],1)})],2):e._e(),this.paperQuestions.multipleList.length>0?a("div",{staticClass:"multiple-questions"},[a("h4",[e._v("多选题")]),e._l(this.paperQuestions.multipleList,function(t,i){return a("div",[a("h5",{staticClass:"question-title"},[e._v(e._s(e.paperQuestions.singleList.length+i+1)+"."+e._s(t.questionText))]),a("el-checkbox-group",{attrs:{disabled:""}},e._l(e.splitOption(t.questionOption),function(e){return a("div",[a("el-checkbox",{attrs:{label:e}})],1)}),0)],1)})],2):e._e(),this.paperQuestions.judgementList.length>0?a("div",{staticClass:"judgement-questions"},[a("h4",[e._v("判断题")]),e._l(this.paperQuestions.judgementList,function(t,i){return a("div",[a("h5",{staticClass:"judgement-title"},[e._v(e._s(e.paperQuestions.singleList.length+e.paperQuestions.multipleList.length+i+1)+"."+e._s(t.questionText))]),a("el-radio-group",{attrs:{disabled:""},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[a("el-radio",[e._v("正确")]),a("el-radio",[e._v("错误")])],1)],1)})],2):e._e(),this.paperQuestions.fillInList.length>0?a("div",{staticClass:"fillIn-questions"},[a("h4",[e._v("填空题")]),e._l(this.paperQuestions.fillInList,function(t,i){return a("div",[a("h5",{staticClass:"fillIn-title"},[e._v(e._s(e.paperQuestions.singleList.length+e.paperQuestions.judgementList.length+e.paperQuestions.multipleList.length+i+1)+"."+e._s(t.questionText))]),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入答案",disabled:""},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)})],2):e._e(),this.paperQuestions.subjectiveList.length>0?a("div",{staticClass:"Subjective-questions"},[a("h4",[e._v("主观题")]),e._l(this.paperQuestions.subjectiveList,function(t,i){return a("div",[a("h5",{staticClass:"Subjective-title"},[e._v(e._s(e.paperQuestions.singleList.length+e.paperQuestions.judgementList.length+e.paperQuestions.fillInList.length+e.paperQuestions.multipleList.length+i+1)+"."+e._s(t.questionText))]),a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",placeholder:"请输入答案",rows:"4",disabled:""}})],1)})],2):e._e()]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},l=[],s=a("f499"),n=a.n(s),r=(a("7f7f"),a("5d73")),o=a.n(r),p=(a("28a5"),a("cebc")),c=a("2f62"),u={name:"SearchPaper",data:function(){return{del_row:{},tableData:[],multipleSelection:[],del_list:[],is_search:!1,editVisible:!1,delVisible:!1,addVisible:!1,editForm:{paperId:"",paperName:"",paperTypeId:0,companyId:0,paperDifficulty:0,typeName:"",paperStatus:1},radio2:"",form:{paperId:"",paperName:"",paperTypeId:0,companyId:0,paperDifficulty:0},idx:-1,pageInfo:{startPage:1,pageSize:5}}},mounted:function(){this.getData(),this.loadBanksAndPaperType()},created:function(){},computed:Object(p["a"])({},Object(c["d"])(["paperList","paperTypeList","paperQuestions"])),methods:Object(p["a"])({},Object(c["b"])(["loadPaperList","loadBanksAndPaperType","updatePaperInfo","loadPaperDetail","delPapers"]),{splitOption:function(e){return e.split(";")},tableDataFilter:function(){var e=!0,t=!1,a=void 0;try{for(var i,l=o()(this.tableData);!(e=(i=l.next()).done);e=!0){var s=i.value;1===s.paperDifficulty&&(s.difficulty="简单"),2===s.paperDifficulty&&(s.difficulty="中等"),3===s.paperDifficulty&&(s.difficulty="困难")}}catch(n){t=!0,a=n}finally{try{e||null==l.return||l.return()}finally{if(t)throw a}}},handleCurrentChange:function(e){this.pageInfo.startPage=e,this.getData()},getData:function(){var e=this;this.loadPaperList(this.pageInfo).then(function(t){if(t){e.tableData.length=0,e.tableData=e.paperList.list;for(var a=0;a<e.tableData.length;a++)0===e.tableData[a].paperStatus&&(e.tableData[a].status="冻结"),1===e.tableData[a].paperStatus&&(e.tableData[a].status="正常");e.tableDataFilter(),console.log(e.tableData)}})},search:function(){this.is_search=!0},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.editForm={paperId:t.paperId,paperName:t.paperName,paperTypeId:t.paperTypeId+"",companyId:t.companyId,paperDifficulty:t.paperDifficulty+"",typeName:t.type.typeName,paperStatus:t.paperStatus,status:1===t.paperStatus},this.editVisible=!0,this.loadPaperDetail(t.paperId)},handleDelete:function(e,t){this.delVisible=!0,this.del_row=t},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){var e=this;this.editForm.status?this.editForm.paperStatus=1:this.editForm.paperStatus=0,this.updatePaperInfo(this.editForm).then(function(t){t?(e.$Message.success("修改成功"),e.editVisible=!1,e.getData()):e.$Message.error("修改失败")})},deleteRow:function(){var e=this;this.del_list.length=0,this.del_list.push(this.del_row.paperId),this.delPapers(n()(this.del_list)).then(function(t){t?(e.getData(),e.$Message.success("试卷删除成功")):e.$Message.error("试卷删除失败")}),this.delVisible=!1}})},d=u,f=(a("a3ee"),a("2877")),b=Object(f["a"])(d,i,l,!1,null,"2417079f",null);b.options.__file="SearchPaper.vue";t["default"]=b.exports},"454f":function(e,t,a){a("46a7");var i=a("584a").Object;e.exports=function(e,t,a){return i.defineProperty(e,t,a)}},"469f":function(e,t,a){a("6c1c"),a("1654"),e.exports=a("7d7b")},"46a7":function(e,t,a){var i=a("63b6");i(i.S+i.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"5ad4":function(e,t,a){},"5d73":function(e,t,a){e.exports=a("469f")},"7d7b":function(e,t,a){var i=a("e4ae"),l=a("7cd6");e.exports=a("584a").getIterator=function(e){var t=l(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},"85f2":function(e,t,a){e.exports=a("454f")},"8aae":function(e,t,a){a("32a6"),e.exports=a("584a").Object.keys},a21f:function(e,t,a){var i=a("584a"),l=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},a3ee:function(e,t,a){"use strict";var i=a("5ad4"),l=a.n(i);l.a},a4bb:function(e,t,a){e.exports=a("8aae")},bf90:function(e,t,a){var i=a("36c3"),l=a("bf0b").f;a("ce7e")("getOwnPropertyDescriptor",function(){return function(e,t){return l(i(e),t)}})},ce7e:function(e,t,a){var i=a("63b6"),l=a("584a"),s=a("294c");e.exports=function(e,t){var a=(l.Object||{})[e]||Object[e],n={};n[e]=t(a),i(i.S+i.F*s(function(){a(1)}),"Object",n)}},cebc:function(e,t,a){"use strict";var i=a("268f"),l=a.n(i),s=a("e265"),n=a.n(s),r=a("a4bb"),o=a.n(r),p=a("85f2"),c=a.n(p);function u(e,t,a){return t in e?c()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=o()(a);"function"===typeof n.a&&(i=i.concat(n()(a).filter(function(e){return l()(a,e).enumerable}))),i.forEach(function(t){u(e,t,a[t])})}return e}a.d(t,"a",function(){return d})},e265:function(e,t,a){e.exports=a("ed33")},ed33:function(e,t,a){a("014b"),e.exports=a("584a").Object.getOwnPropertySymbols},f499:function(e,t,a){e.exports=a("a21f")},fde4:function(e,t,a){a("bf90");var i=a("584a").Object;e.exports=function(e,t){return i.getOwnPropertyDescriptor(e,t)}}}]);