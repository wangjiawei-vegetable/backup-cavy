import{B as e,r as a,o as l,e as t,g as s,h as r,w as o,i as p,p as c,j as n}from"./vendor.6c36e4e7.js";import{_ as u}from"./cropper.3a444628.js";import{_ as i,a as d}from"./index.a811416a.js";const m={name:"upload",components:{VueCropper:u},setup(){const a=e(""),l=e(d),t=e(!1),s=e(null);return{cropper:s,imgSrc:a,cropImg:l,dialogVisible:t,setImage:e=>{const l=e.target.files[0];if(!l.type.includes("image/"))return;const r=new FileReader;r.onload=e=>{t.value=!0,a.value=e.target.result,s.value&&s.value.replace(e.target.result)},r.readAsDataURL(l)},cropImage:()=>{l.value=s.value.getCroppedCanvas().toDataURL()},cancelCrop:()=>{t.value=!1,l.value=d}}}},v=e=>(c("data-v-0ecd383b"),e=e(),n(),e),g={class:"crumbs"},_=v((()=>s("i",{class:"el-icon-lx-calendar"},null,-1))),f={class:"container"},b=v((()=>s("div",{class:"content-title"},"支持拖拽",-1))),j=v((()=>s("div",{class:"plugins-tips"},[p(" Element UI自带上传组件。 访问地址： "),s("a",{href:"http://element.eleme.io/#/zh-CN/component/upload",target:"_blank"},"Element UI Upload")],-1))),h=v((()=>s("i",{class:"el-icon-upload"},null,-1))),I=v((()=>s("div",{class:"el-upload__text"},[p(" 将文件拖到此处，或 "),s("em",null,"点击上传")],-1))),C=v((()=>s("div",{class:"el-upload__tip"},"只能上传 jpg/png 文件，且不超过 500kb",-1))),U=v((()=>s("div",{class:"content-title"},"支持裁剪",-1))),k=v((()=>s("div",{class:"plugins-tips"},[p(" vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。 访问地址： "),s("a",{href:"https://github.com/Agontuk/vue-cropperjs",target:"_blank"},"vue-cropperjs")],-1)));var x=i(m,[["render",function(e,c,n,u,i,d){const m=a("el-breadcrumb-item"),v=a("el-breadcrumb"),x=a("el-upload");return l(),t("div",null,[s("div",g,[r(v,{separator:"/"},{default:o((()=>[r(m,null,{default:o((()=>[_,p(" 表单 ")])),_:1}),r(m,null,{default:o((()=>[p("图片上传")])),_:1})])),_:1})]),s("div",f,[b,j,r(x,{class:"upload-demo",drag:"",action:"http://jsonplaceholder.typicode.com/api/posts/",multiple:""},{tip:o((()=>[C])),default:o((()=>[h,I])),_:1}),U,k])])}],["__scopeId","data-v-0ecd383b"]]);export{x as default};
