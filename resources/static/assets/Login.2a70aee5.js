import{d as e,E as a,B as s,u as o,r,o as l,e as t,g as c,h as n,w as d,ac as u,i as p,f as m,C as i,p as g,j as f}from"./vendor.6c36e4e7.js";import{C as w,i as h,j as v}from"./index.236993a1.js";import{_}from"./index.93837071.js";const C={setup(){const r=e();localStorage.getItem("token"),w().then((e=>{console.log("checkToken: "+e),0===e.Code&&r.push("/")}));let l=0;const t=a({account:"",password:""}),c=s(null);return o().commit("clearTags"),{param:t,rules:{account:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},login:c,submitForm:()=>{var e={account:t.account,code:t.password};v(e).then((e=>{if(0!==e.Code)return i.error("登录失败"),!1;i.success("登录成功"),localStorage.setItem("token",e.Data),localStorage.setItem("ms_username",t.account),r.push("/")}))},sendCode:()=>{l++,l>=5&&(l=-100,i.success("验证码发送中..."),h().then((e=>{if(0!==e.Code)return i.error("验证码发送失败"),!1;i.success("验证码发送成功")}))),console.log("点击次数："+l)}}}},b={class:"login-wrap"},k={class:"ms-login"},V=(e=>(g("data-v-26084dc2"),e=e(),f(),e))((()=>c("div",{class:"ms-title"},"cavy",-1))),j={class:"login-btn"};var y=_(C,[["render",function(e,a,s,o,i,g){const f=r("el-button"),w=r("el-input"),h=r("el-form-item"),v=r("el-form");return l(),t("div",b,[c("div",k,[V,n(v,{model:o.param,rules:o.rules,ref:"login","label-width":"0px",class:"ms-content"},{default:d((()=>[n(h,{prop:"username"},{default:d((()=>[n(w,{modelValue:o.param.account,"onUpdate:modelValue":a[0]||(a[0]=e=>o.param.account=e),placeholder:"account"},{prepend:d((()=>[n(f,{icon:"el-icon-user"})])),_:1},8,["modelValue"])])),_:1}),n(h,{prop:"password"},{default:d((()=>[n(w,{type:"password",placeholder:"password",modelValue:o.param.password,"onUpdate:modelValue":a[2]||(a[2]=e=>o.param.password=e),onKeyup:a[3]||(a[3]=u((e=>o.submitForm()),["enter"]))},{prepend:d((()=>[n(f,{icon:"el-icon-lock",onClick:a[1]||(a[1]=e=>o.sendCode())})])),_:1},8,["modelValue"])])),_:1}),c("div",j,[n(f,{type:"primary",onClick:a[4]||(a[4]=e=>o.submitForm())},{default:d((()=>[p("登录")])),_:1})]),m('                <p class="login-tips">Tips : 用户名和密码随便填。</p>')])),_:1},8,["model","rules"])])])}],["__scopeId","data-v-26084dc2"]]);export{y as default};
