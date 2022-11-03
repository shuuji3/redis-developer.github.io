"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||n;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const n={id:"index-azure-cache-terraform-private",title:"Azure Cache for Redis Enterprise using Terraform with Private Link",sidebar_label:"Azure Cache for Redis Enterprise using Terraform with Private Link",slug:"/operate/provisioning/azure-cache-terraform-private"},o=void 0,s={unversionedId:"operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private",id:"operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private",title:"Azure Cache for Redis Enterprise using Terraform with Private Link",description:"Azure Private Link for Azure Cache for Redis provides private connectivity from a virtual network to your cache instance. This means that you can now use Azure Private Link to connect to an Azure Cache for Redis instance from your virtual network via a private endpoint, which is assigned a private IP address in a subnet within the virtual network. It simplifies the network architecture and secures the connection between endpoints in Azure by eliminating data exposure to the public internet. Private Link carries traffic privately, reducing your exposure to threats and helps you meet compliance standards.",source:"@site/docs/operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private.mdx",sourceDirName:"operate/provisioning/azure-cache-terraform-private",slug:"/operate/provisioning/azure-cache-terraform-private",permalink:"/operate/provisioning/azure-cache-terraform-private",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-azure-cache-terraform-private",title:"Azure Cache for Redis Enterprise using Terraform with Private Link",sidebar_label:"Azure Cache for Redis Enterprise using Terraform with Private Link",slug:"/operate/provisioning/azure-cache-terraform-private"},sidebar:"docs",previous:{title:"Azure Cache for Redis Enterprise using Terraform",permalink:"/operate/provisioning/azure-cache-terraform"},next:{title:"Overview",permalink:"/operate/redis-at-scale"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1. Getting Started",id:"step-1-getting-started",level:3},{value:"Step 2: Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3: Initialize the repository",id:"step-3-initialize-the-repository",level:3},{value:"Step 4: Modify the variables (optional)",id:"step-4-modify-the-variables-optional",level:3},{value:"Step 5: Verify the plan",id:"step-5-verify-the-plan",level:3},{value:"Step 6: Apply the plan",id:"step-6-apply-the-plan",level:3},{value:"Step 7: Connect using generated output",id:"step-7-connect-using-generated-output",level:3},{value:"Resources",id:"resources",level:3},{value:"1. How to use Redis Cache for Redis like a Pro",id:"1-how-to-use-redis-cache-for-redis-like-a-pro",level:5},{value:"2. Do More with Azure Cache for Redis, Enterprise Tiers",id:"2-do-more-with-azure-cache-for-redis-enterprise-tiers",level:5},{value:"References",id:"references",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Azure Private Link for Azure Cache for Redis provides private connectivity from a virtual network to your cache instance. This means that you can now use Azure Private Link to connect to an Azure Cache for Redis instance from your virtual network via a private endpoint, which is assigned a private IP address in a subnet within the virtual network. It simplifies the network architecture and secures the connection between endpoints in Azure by eliminating data exposure to the public internet. Private Link carries traffic privately, reducing your exposure to threats and helps you meet compliance standards."),(0,i.kt)("p",null,"Azure Resource Manager (a.k.a AzureRM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You can use management features, like access control, locks, and tags, to secure and organize your resources after deployment. The \"azurerm_redis_enterprise_cluster\" is a resource that manages a Redis Enterprise cluster. This is a template to get started with the 'azurerm_redis_enterprise_cluster' resource available in the 'azurerm' provider with Terraform."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://terraform.io"},"Terraform")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI"))),(0,i.kt)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),(0,i.kt)("p",null,"Login in to Azure using the Azure CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"az login\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Login with a Service Principal will also work")),(0,i.kt)("p",null,"Login using an Azure Service Principal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"az login --service-principal --username APP_ID --tenant TENANT_ID --password [password || /path/to/cert]\n")),(0,i.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2: Clone the repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redis-developer/acre-terraform\n")),(0,i.kt)("h3",{id:"step-3-initialize-the-repository"},"Step 3: Initialize the repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd acre-terraform\nterraform init\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The output should include: ",(0,i.kt)("inlineCode",{parentName:"p"},"Terraform has been successfully initialized"))),(0,i.kt)("h3",{id:"step-4-modify-the-variables-optional"},"Step 4: Modify the variables (optional)"),(0,i.kt)("p",null,"The default variables are setup to deploy the smallest 'E10' instance into the 'East US' region.\nChanges can be made by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"variables.tf")," file."),(0,i.kt)("h3",{id:"step-5-verify-the-plan"},"Step 5: Verify the plan"),(0,i.kt)("p",null,"The 'plan' output will show you everything being created by the template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The output should include: ",(0,i.kt)("inlineCode",{parentName:"p"},"Plan: 18 to add, 0 to change, 0 to destroy."))),(0,i.kt)("h3",{id:"step-6-apply-the-plan"},"Step 6: Apply the plan"),(0,i.kt)("p",null,"When the plan looks good, 'apply' the template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The output should include: ",(0,i.kt)("inlineCode",{parentName:"p"},"Apply complete! Resources: 18 added, 0 changed, 0 destroyed."))),(0,i.kt)("h3",{id:"step-7-connect-using-generated-output"},"Step 7: Connect using generated output"),(0,i.kt)("p",null,"The access key is sensitive, so viewing the outputs must be requested specifically.\nThe output is also in JSON format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform output redisgeek_config\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"hostname" = "redisgeek-8jy4.eastus.redisenterprise.cache.azure.net"\n"access_key" = "DQYABC3uRMXXXXXXXXXXXXXXXXTRkfgOXXXPjs82Y="\n"port" = "10000"\n}\n')),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("h5",{id:"1-how-to-use-redis-cache-for-redis-like-a-pro"},"1. How to use Redis Cache for Redis like a Pro"),(0,i.kt)("div",{class:"text--center"},(0,i.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/eThj-jwViZw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h5",{id:"2-do-more-with-azure-cache-for-redis-enterprise-tiers"},"2. Do More with Azure Cache for Redis, Enterprise Tiers"),(0,i.kt)("div",{class:"text--center"},(0,i.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/t6XQHsKFMKQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/garantiadata.redis_enterprise_1sp_public_preview?ocid=redisga_redislabs_cloudpartner_cta1"},"Azure Cache for Redis Enterprise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RWGGx3"},"Accelerate Modern Application Delivery with Redis Enterprise on Microsoft Azure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/develop/dotnet/"},".Net and Redis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis-enterprise"},"Quickstart: Create a Redis Enterprise cache"))))}u.isMDXComponent=!0}}]);