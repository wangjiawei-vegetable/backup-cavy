import{B as e,E as a,r as l,o as t,e as r,g as o,h as d,w as n,i as s,F as i,l as u,c,t as p,f as b,C as m,p as f,j as g}from"./vendor.6c36e4e7.js";import{R as S,h,c as v}from"./index.236993a1.js";import{_ as w}from"./index.93837071.js";const C={name:"restoreTable",setup(){const l=e([]),t=a({jobState:"",dataSourceId:"",page:1,size:10}),r=e([]),o=e([]),d=e(0),n=e(!1),s=()=>{S(t).then((e=>{"0"===e.code?(i(),r.value=e.result.records,d.value=e.result.total||50):m.error("获取恢复任务列表失败"+e.message)}))};s();const i=()=>{v().then((e=>{"0"===e.code?l.value=e.result:(console.log("获取所有数据源列表失败"),m.error("获取所有数据源列表失败:"+e.message))}))};return{dataSources:l,query:t,tableData:r,jobRecordData:o,pageTotal:d,viewVisible:n,handleSearch:()=>{t.page_num=1,s()},handlePageChange:e=>{t.page=e,s()},handleView:(e,a)=>{h(a.id).then((e=>{"0"===e.code?o.value=e.result:m.error("获取恢复任务详情失败"+e.message)})),n.value=!0},filterState:(e,a)=>a.jobState===e,getStateTag:e=>"NORMAL"===e?"info":"RUNNING"===e?"warning":"SUCCESS"===e?"success":"FAIL"===e?"danger":""}}},y={class:"crumbs"},N=(e=>(f("data-v-a8911fac"),e=e(),g(),e))((()=>o("i",{class:"el-icon-lx-cascades"},null,-1))),_={class:"container"},j={class:"handle-box"},I={class:"pagination"},x={style:{height:"500px","white-space":"pre-line",overflow:"auto"}};var V=w(C,[["render",function(e,a,m,f,g,S){const h=l("el-breadcrumb-item"),v=l("el-breadcrumb"),w=l("el-option"),C=l("el-select"),V=l("el-button"),T=l("el-table-column"),U=l("el-tag"),R=l("el-table"),k=l("el-pagination"),A=l("el-popover"),L=l("el-drawer");return t(),r("div",null,[o("div",y,[d(v,{separator:"/"},{default:n((()=>[d(h,null,{default:n((()=>[N,s("恢复记录 ")])),_:1})])),_:1})]),o("div",_,[o("div",j,[d(C,{modelValue:f.query.dataSourceId,"onUpdate:modelValue":a[0]||(a[0]=e=>f.query.dataSourceId=e),placeholder:"数据源",filterable:"",clearable:"",class:"handle-input mr10"},{default:n((()=>[(t(!0),r(i,null,u(f.dataSources,(e=>(t(),c(w,{key:e.id,label:e.sourceName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),d(C,{modelValue:f.query.jobState,"onUpdate:modelValue":a[1]||(a[1]=e=>f.query.jobState=e),placeholder:"任务状态",filterable:"",clearable:"",class:"handle-input mr10"},{default:n((()=>[d(w,{key:"NORMAL",label:"正常",value:"NORMAL"}),d(w,{key:"RUNNING",label:"运行中",value:"RUNNING"}),d(w,{key:"SUCCESS",label:"成功",value:"SUCCESS"}),d(w,{key:"FAIL",label:"失败",value:"FAIL"})])),_:1},8,["modelValue"]),d(V,{type:"primary",icon:"el-icon-search",onClick:f.handleSearch},{default:n((()=>[s("搜索")])),_:1},8,["onClick"])]),d(R,{data:f.tableData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:n((()=>[d(T,{prop:"id",label:"ID",align:"center"}),d(T,{prop:"dataSourceName",label:"数据源名称"}),d(T,{prop:"jobState",label:"任务状态",filters:[{text:"正常",value:"NORMAL"},{text:"运行中",value:"RUNNING"},{text:"成功",value:"SUCCESS"},{text:"失败",value:"FAIL"}],"filter-method":f.filterState,"filter-placement":"bottom-end"},{default:n((e=>[d(U,{type:f.getStateTag(e.row.jobState)},{default:n((()=>[s(p(e.row.jobState),1)])),_:2},1032,["type"])])),_:1},8,["filter-method"]),d(T,{prop:"startTime",label:"开始时间"}),d(T,{prop:"endTime",label:"结束时间"}),d(T,{label:"操作",align:"center"},{default:n((e=>[d(V,{icon:"el-icon-view",size:"small",onClick:a=>f.handleView(e.$index,e.row)},null,8,["onClick"])])),_:1})])),_:1},8,["data"]),o("div",I,[d(k,{background:"",layout:"total, prev, pager, next","current-page":f.query.page,"page-size":f.query.size,total:f.pageTotal,onCurrentChange:f.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"])])]),b(" 恢复记录 "),d(L,{size:"50%",modelValue:f.viewVisible,"onUpdate:modelValue":a[2]||(a[2]=e=>f.viewVisible=e),title:"恢复记录"},{default:n((()=>[d(R,{data:f.jobRecordData,border:"",ref:"multipleTable","header-cell-class-name":"table-header"},{default:n((()=>[d(T,{label:"ID",prop:"id"}),d(T,{label:"数据库",prop:"dataBase"}),d(T,{label:"表",prop:"tableName"}),d(T,{label:"恢复结果",prop:"jobState",filters:[{text:"成功",value:"SUCCESS"},{text:"失败",value:"FAIL"}],"filter-method":f.filterState,"filter-placement":"bottom-end"},{default:n((e=>[d(U,{type:f.getStateTag(e.row.jobState)},{default:n((()=>[s(p(e.row.jobState),1)])),_:2},1032,["type"])])),_:1},8,["filter-method"]),d(T,{label:"开始时间","min-width":"100",prop:"startTime"}),d(T,{label:"结束时间","min-width":"100",prop:"endTime"}),d(T,{label:"查看日志",align:"center"},{default:n((e=>[d(A,{placement:"left",width:500},{reference:n((()=>[d(V,{slot:"reference",icon:"el-icon-view"})])),default:n((()=>[o("div",x,p(e.row.log),1)])),_:2},1024)])),_:1})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-a8911fac"]]);export{V as default};
