"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8087],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50358:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(67294),a=t(52263);const o="authorByline_VoxI",s="authorLabel_a70t",i="authorProfileImage_URwT";const l=function(e){let{frontMatter:r}=e;const{siteConfig:t}=(0,a.Z)(),l=t.customFields.authors;return n.createElement(n.Fragment,null,r.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),r.authors.map((e=>n.createElement("div",{key:e,className:o},n.createElement("img",{className:i,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),n.createElement("div",null,n.createElement("div",{className:s},"Author:"),n.createElement("div",null,n.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),n.createElement("hr",null)))}},8798:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905)),o=t(50358);const s={id:"index-terraform",title:"How to Deploy and Manage Redis Database on AWS Using Terraform",sidebar_label:"Deploy and Manage Redis Database on AWS using Terraform",slug:"/create/aws/terraform",authors:["ajeet","rahul"]},i=void 0,l={unversionedId:"create/aws/terraform/index-terraform",id:"create/aws/terraform/index-terraform",title:"How to Deploy and Manage Redis Database on AWS Using Terraform",description:"terraform",source:"@site/docs/create/aws/terraform/index-terraform.mdx",sourceDirName:"create/aws/terraform",slug:"/create/aws/terraform",permalink:"/create/aws/terraform",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/aws/terraform/index-terraform.mdx",tags:[],version:"current",lastUpdatedAt:1667851300,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"index-terraform",title:"How to Deploy and Manage Redis Database on AWS Using Terraform",sidebar_label:"Deploy and Manage Redis Database on AWS using Terraform",slug:"/create/aws/terraform",authors:["ajeet","rahul"]},sidebar:"docs",previous:{title:"Building a Slack Bot using AWS S3 and RediSearch from scratch",permalink:"/create/aws/slackbot"},next:{title:"Building a Real-Time Bidding Platform using NodeJS, AWS Lambda and Redis",permalink:"/create/aws/bidding-on-aws"}},d={},u=[{value:"What is Terraform?",id:"what-is-terraform",level:3},{value:"Capabilities of Terraform",id:"capabilities-of-terraform",level:3},{value:"The HashiCorp Terraform Redis Enterprise Cloud provider",id:"the-hashicorp-terraform-redis-enterprise-cloud-provider",level:3},{value:"Providers",id:"providers",level:3},{value:"Resources",id:"resources",level:3},{value:"Data sources",id:"data-sources",level:3},{value:"Configure Redis Enterprise Cloud programmatic access",id:"configure-redis-enterprise-cloud-programmatic-access",level:3},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Step 1: Install Terraform on MacOS",id:"step-1-install-terraform-on-macos",level:3},{value:"Step 2: Sign up for a free Redis Enterprise Cloud account",id:"step-2-sign-up-for-a-free-redis-enterprise-cloud-account",level:3},{value:"Step 3: Enable Redis Enterprise Cloud API",id:"step-3-enable-redis-enterprise-cloud-api",level:3},{value:"Step 4: Create a main.tf file",id:"step-4-create-a-maintf-file",level:3},{value:"Step 5: Create an execution plan",id:"step-5-create-an-execution-plan",level:3},{value:"Step 6: Execute the action",id:"step-6-execute-the-action",level:3},{value:"Step 7: Verify the database",id:"step-7-verify-the-database",level:3},{value:"Step 8: Cleanup",id:"step-8-cleanup",level:3},{value:"Further References:",id:"further-references",level:3}],c={toc:u};function p(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{frontMatter:s,mdxType:"Authors"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"terraform",src:t(64937).Z,width:"1428",height:"836"})),(0,a.kt)("p",null,"Development teams today are embracing more and more DevOps principles, such as continuous integration and continuous delivery (CI/CD). Therefore, the need to manage infrastructure-as-code (IaC) has become an essential capability for any cloud service. IaC tools allow you to manage infrastructure with configuration files rather than through a graphical user interface. IaC allows you to build, change, and manage your infrastructure in a safe, consistent, and repeatable way by defining resource configurations that you can version, reuse, and share.\nA leading tool in the IaC is HashiCorp Terraform, which supports the major cloud providers and services with its providers and modules cloud infrastructure automation ecosystem for provisioning, compliance, and management of any cloud, infrastructure, and service."),(0,a.kt)("h3",{id:"what-is-terraform"},"What is Terraform?"),(0,a.kt)("p",null,"Terraform is an open source IaC software tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files, which can then be shared amongst team members, treated as code, edited, reviewed, and versioned. It enables you to safely and predictably create, change, and improve infrastructure."),(0,a.kt)("h3",{id:"capabilities-of-terraform"},"Capabilities of Terraform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Terraform is not just a configuration management tool. It also focuses on the higher-level abstraction of the data center and associated services, while allowing you to use configuration management tools on individual systems."),(0,a.kt)("li",{parentName:"ul"},"It supports multiple cloud providers, such as AWS, GCP, Azure, DigitalOcean, etc."),(0,a.kt)("li",{parentName:"ul"},"It provides a single unified syntax, instead of requiring operators to use independent and non-interoperable tools for each platform and service."),(0,a.kt)("li",{parentName:"ul"},"Manages both existing service providers and custom in-house solutions."),(0,a.kt)("li",{parentName:"ul"},"Terraform is easily portable to any other provider."),(0,a.kt)("li",{parentName:"ul"},"Provides immutable infrastructure where configuration changes smoothly."),(0,a.kt)("li",{parentName:"ul"},"Supports client-only architecture, so no need for additional configuration management on a server."),(0,a.kt)("li",{parentName:"ul"},"Terraform is very flexible, using a plugin-based model to support providers and provisioners, giving it the ability to support almost any service that exposes APIs."),(0,a.kt)("li",{parentName:"ul"},"It is not intended to give low-level programmatic access to providers, but instead provides a high-level syntax for describing how cloud resources and services should be created, provisioned, and combined."),(0,a.kt)("li",{parentName:"ul"},"It provides a simple, unified syntax, allowing almost any resource to be managed without learning new tooling.")),(0,a.kt)("h3",{id:"the-hashicorp-terraform-redis-enterprise-cloud-provider"},"The HashiCorp Terraform Redis Enterprise Cloud provider"),(0,a.kt)("p",null,"Redis has developed a Terraform provider for Redis Enterprise Cloud. The HashiCorp Terraform Redis Enterprise Cloud provider allows customers to deploy and manage Redis Enterprise Cloud subscriptions, databases, and network peering easily as code, on any cloud provider. It is a plugin for Terraform that allows Redis Enterprise Cloud Flexible customers to manage the full life cycle of their subscriptions and related Redis databases.\nThe Redis Enterprise Cloud provider is used to interact with the resources supported by Redis Enterprise Cloud. The provider needs to be configured with the proper credentials before it can be used. Use the navigation to the left to read about the available provider resources and data sources."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rediscloud",src:t(78611).Z,width:"1282",height:"1226"})),(0,a.kt)("p",null,"Before we jump into the implementation, let us take a moment to better understand the Terraform configuration. A Terraform configuration is a complete document in the Terraform language that tells Terraform how to manage a given collection of infrastructure. A configuration can consist of multiple files and directories. Terraform is broken down into three main components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Providers"),(0,a.kt)("li",{parentName:"ul"},"Data sources"),(0,a.kt)("li",{parentName:"ul"},"Resources")),(0,a.kt)("h3",{id:"providers"},"Providers"),(0,a.kt)("p",null,"A provider is the first resource that will need to be defined in any project under the Terraform configuration file. The provider gives you access to the API you will be interacting with to create resources. Once the provider has been configured and authenticated, a vast amount of resources are now available to be created. Terraform has more than 100+ cloud providers it serves.\nA provider defines resources and data for a particular infrastructure, such as AWS. As shown below, the terraform block {} contains terraform settings, including the required providers Terraform will use to provision your infrastructure (for example, rediscloud provider)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' terraform {\n required_providers {\n  rediscloud = {\n    source = "RedisLabs/rediscloud"\n    version = "0.2.2"\n  }\n }\n }\n')),(0,a.kt)("p",null,"The provider {} block configures the specific provider. In the below example, it is AWS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' cloud_provider {\n\n   provider = "AWS"\n   cloud_account_id = 1\n   region {\n     region = "us-east-1"\n     networking_deployment_cidr = "10.0.0.0/24"\n     preferred_availability_zones = ["us-east-1a"]\n   }\n }\n')),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("p",null,"Resources are the most important element in the Terraform language. This is where you describe the piece of infrastructure to be created, and this can range from a compute instance to defining specific permissions and much more."),(0,a.kt)("p",null,"As shown below, the resource {} block is used to define components of your infrastructure. A resource might be a physical or virtual component, such as EC2, or it could be a logical component, such as a Heroku application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' resource "random_password" "passwords" {\n count = 2\n length = 20\n upper = true\n lower = true\n number = true\n}\n')),(0,a.kt)("p",null,"The resource {} block has two strings before the block: resource types and resource names. The prefix of the type maps to the name of the provider. For example, the resource type \u201crandom_password\u201d and the resource name \u201cpasswords\u201d form a unique identifier of the resource. Terraform uses this ID to identify the resource."),(0,a.kt)("h3",{id:"data-sources"},"Data sources"),(0,a.kt)("p",null,"Data sources allow Terraform to use information defined outside of Terraform, defined by another separate Terraform configuration, or modified by functions. Each provider may offer data sources alongside its set of resource types. A data source is accessed via a special kind of resource known as a data resource, declared using a data block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' data "rediscloud_payment_method" "card" {\n card_type = "Visa"\n last_four_numbers = "XXXX"\n }\n')),(0,a.kt)("p",null,'A data block requests that Terraform read from a given data source ("rediscloud_payment_method") and export the result under the given local name ("card"). The name is used to refer to this resource from elsewhere in the same Terraform module, but has no significance outside of the scope of a module.\nWithin the block body (between { and }) are query constraints defined by the data source. Most arguments in this section depend on the data source, and indeed in this example card_type and last_four_numbers are all arguments defined specifically for the rediscloud_payment_method data source.'),(0,a.kt)("h3",{id:"configure-redis-enterprise-cloud-programmatic-access"},"Configure Redis Enterprise Cloud programmatic access"),(0,a.kt)("p",null,"In order to set up authentication with the Redis Enterprise Cloud provider, a programmatic API key must be generated for Redis Enterprise Cloud. The Redis Enterprise Cloud documentation contains the most up-to-date instructions for creating and managing your key(s) and IP access."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Flexible and Annual Redis Enterprise Cloud subscriptions can leverage a RESTful API that permits operations against a variety of resources, including servers, services, and related infrastructure. The REST API is not supported for Fixed or Free subscriptions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' provider "rediscloud" { } # Example resource configuration\n resource "rediscloud_subscription" "example" { # ... }\n')),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install Terraform on MacOS."),(0,a.kt)("li",{parentName:"ul"},"Create a free Redis Enterprise Cloud account."),(0,a.kt)("li",{parentName:"ul"},"Create your first subscription."),(0,a.kt)("li",{parentName:"ul"},"Enable API")),(0,a.kt)("h3",{id:"step-1-install-terraform-on-macos"},"Step 1: Install Terraform on MacOS"),(0,a.kt)("p",null,"Use Homebrew to install Terraform on MacOS as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," brew install terraform\n")),(0,a.kt)("h3",{id:"step-2-sign-up-for-a-free-redis-enterprise-cloud-account"},"Step 2: Sign up for a free Redis Enterprise Cloud account"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.redis.com/create/aws/redis-on-aws"},"Follow this tutorial")," to sign up for free Redis Enterprise Cloud account."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Redis Cloud",src:t(61460).Z,width:"1350",height:"950"})),(0,a.kt)("h3",{id:"step-3-enable-redis-enterprise-cloud-api"},"Step 3: Enable Redis Enterprise Cloud API"),(0,a.kt)("p",null,"If you have a Flexible (or Annual) Redis Enterprise Cloud subscription, you can use a REST API to manage your subscription programmatically. The Redis Cloud REST API is available only to Flexible or Annual subscriptions. It is not supported for Fixed or Free subscriptions."),(0,a.kt)("p",null,"For security reasons, the Redis Cloud API is disabled by default. To enable the API:\nSign in to your Redis Cloud subscription as an account owner.\nFrom the menu, choose Access Management."),(0,a.kt)("p",null,"When the Access Management screen appears, select the API Keys tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Terraform",src:t(67863).Z,width:"1318",height:"694"})),(0,a.kt)("p",null,"If a Copy button appears to the right of the API account key, the API is enabled. This button copies the account key to the clipboard."),(0,a.kt)("p",null,"If you see an Enable API button, select it to enable the API and generate your API account key."),(0,a.kt)("p",null,"To authenticate REST API calls, you need to combine the API account key with an API user key to make API calls."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Terraform",src:t(67340).Z,width:"1408",height:"790"})),(0,a.kt)("h3",{id:"step-4-create-a-maintf-file"},"Step 4: Create a main.tf file"),(0,a.kt)("p",null,"It\u2019s time to create an empty \u201cmain.tf\u201d file and start adding the provider, resource and data sources as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' terraform {\n required_providers {\n   rediscloud = {\n     source = "RedisLabs/rediscloud"\n     version = "0.2.2"\n   }\n  }\n }\n# Provide your credit card details\ndata "rediscloud_payment_method" "card" {\ncard_type = "Visa"\nlast_four_numbers = "XXXX"\n}\n# Generates a random password for the database\nresource "random_password" "passwords" {\ncount = 2\nlength = 20\nupper = true\nlower = true\nnumber = true\nspecial = false\n}\nresource "rediscloud_subscription" "rahul-test-terraform" {\nname = "rahul-test-terraform"\npayment_method_id = data.rediscloud_payment_method.card.id\nmemory_storage = "ram"\ncloud_provider {\n\n  provider = "AWS"\n  cloud_account_id = 1\n  region {\n    region = "us-east-1"\n    networking_deployment_cidr = "10.0.0.0/24"\n    preferred_availability_zones = ["us-east-1a"]\n  }\n}\ndatabase {\n  name = "db-json"\n  protocol = "redis"\n  memory_limit_in_gb = 1\n  replication = true\n  data_persistence = "aof-every-1-second"\n  module {\n      name = "RedisJSON"\n  }\n  throughput_measurement_by = "operations-per-second"\n  throughput_measurement_value = 10000\n  password = random_password.passwords[1].result\n}\n}\n')),(0,a.kt)("h3",{id:"step-5-create-an-execution-plan"},"Step 5: Create an execution plan"),(0,a.kt)("p",null,"The Terraform plan command creates an execution plan, which lets you preview the changes that Terraform plans to make to your infrastructure. By default, when Terraform creates a plan, it reads the current state of any already existing remote objects to make sure that Terraform state is up to date. It then compares the current configuration to the prior state and then proposes a set of change actions that should make the remote object match the configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' % terraform plan\n\n\nTerraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:\n + create\n\nTerraform will perform the following actions:\n\n # random_password.passwords[0] will be created\n + resource "random_password" "passwords" {\n   + id     = (known after apply)\n   + length   = 20\n   + lower    = true\n   + min_lower  = 0\n   + min_numeric = 0\n   + min_special = 0\n   + min_upper  = 0\n   + number   = true\n   + result   = (sensitive value)\n   + special   = false\n   + upper    = true\n  }\n\n # random_password.passwords[1] will be created\n + resource "random_password" "passwords" {\n   + id     = (known after apply)\n   + length   = 20\n   + lower    = true\n   + min_lower  = 0\n   + min_numeric = 0\n   + min_special = 0\n   + min_upper  = 0\n   + number   = true\n   + result   = (sensitive value)\n   + special   = false\n   + upper    = true\n  }\n\n # rediscloud_subscription.rahul-test-terraform will be created\n + resource "rediscloud_subscription" "rahul-test-terraform" {\n   + id              = (known after apply)\n   + memory_storage        = "ram"\n   + name             = "rahul-test-terraform"\n   + payment_method_id       = "XXXX"\n   + persistent_storage_encryption = true\n\n   + cloud_provider {\n     + cloud_account_id = "1"\n     + provider     = "AWS"\n\n     + region {\n       + multiple_availability_zones = false\n       + networking_deployment_cidr  = "10.0.0.0/24"\n       + networks           = (known after apply)\n       + preferred_availability_zones = [\n         + "us-east-1a",\n        ]\n       + region            = "us-east-1"\n      }\n    }\n\n   + database {\n     # At least one attribute in this block is (or was) sensitive,\n     # so its contents will not be displayed.\n    }\n  }\n\nPlan: 3 to add, 0 to change, 0 to destroy.\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nNote: You didn\'t use the -out option to save this plan, so Terraform can\'t guarantee to take exactly these actions if you run "terraform apply" now.\n')),(0,a.kt)("h3",{id:"step-6-execute-the-action"},"Step 6: Execute the action"),(0,a.kt)("p",null,"The Terraform apply command executes the actions proposed in a Terraform plan."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' terraform apply\n\n\nTerraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:\n + create\n\nTerraform will perform the following actions:\n\n # random_password.passwords[0] will be created\n + resource "random_password" "passwords" {\n   + id     = (known after apply)\n   + length   = 20\n   + lower    = true\n   + min_lower  = 0\n   + min_numeric = 0\n   + min_special = 0\n   + min_upper  = 0\n   + number   = true\n   + result   = (sensitive value)\n   + special   = false\n   + upper    = true\n  }\n\n # random_password.passwords[1] will be created\n + resource "random_password" "passwords" {\n   + id     = (known after apply)\n   + length   = 20\n   + lower    = true\n   + min_lower  = 0\n   + min_numeric = 0\n   + min_special = 0\n   + min_upper  = 0\n   + number   = true\n   + result   = (sensitive value)\n   + special   = false\n   + upper    = true\n  }\n\n # rediscloud_subscription.rahul-test-terraform will be created\n + resource "rediscloud_subscription" "rahul-test-terraform" {\n   + id              = (known after apply)\n   + memory_storage        = "ram"\n   + name             = "rahul-test-terraform"\n   + payment_method_id       = "XXXX"\n   + persistent_storage_encryption = true\n\n   + cloud_provider {\n     + cloud_account_id = "1"\n     + provider     = "AWS"\n\n     + region {\n       + multiple_availability_zones = false\n       + networking_deployment_cidr  = "10.0.0.0/24"\n       + networks           = (known after apply)\n       + preferred_availability_zones = [\n         + "us-east-1a",\n        ]\n       + region            = "us-east-1"\n      }\n    }\n\n   + database {\n     # At least one attribute in this block is (or was) sensitive,\n     # so its contents will not be displayed.\n    }\n  }\n\nPlan: 3 to add, 0 to change, 0 to destroy.\n\nDo you want to perform these actions?\n Terraform will perform the actions described above.\n Only \'yes\' will be accepted to approve.\n\n Enter a value: yes\n\nrandom_password.passwords[0]: Creating...\nrandom_password.passwords[1]: Creating...\nrandom_password.passwords[1]: Creation complete after 0s [id=none]\nrandom_password.passwords[0]: Creation complete after 0s [id=none]\nrediscloud_subscription.rahul-test-terraform: Creating...\nrediscloud_subscription.rahul-test-terraform: Still creating... [10s elapsed]\nrediscloud_subscription.rahul-test-terraform: Still creating... [20s elapsed]\nrediscloud_subscription.rahul-test-terraform: Creation complete after 8m32s [id=1649277]\n\nApply complete! Resources: 3 added, 0 changed, 0 destroyed.\n')),(0,a.kt)("h3",{id:"step-7-verify-the-database"},"Step 7: Verify the database"),(0,a.kt)("p",null,"You can now verify the new database created under Subscription named \u201cdb-json.\u201d"),(0,a.kt)("p",null,"Deploy a Redis Database with RedisJSON modules on AWS using Terraform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'terraform {\nrequired_providers {\n  rediscloud = {\n    source = "RedisLabs/rediscloud"\n    version = "0.2.2"\n  }\n}\n}\n# Provide your credit card details\ndata "rediscloud_payment_method" "card" {\ncard_type = "Visa"\nlast_four_numbers = "XXXX"\n}\n# Generates a random password for the database\nresource "random_password" "passwords" {\ncount = 2\nlength = 20\nupper = true\nlower = true\nnumber = true\nspecial = false\n}\nresource "rediscloud_subscription" "rahul-test-terraform" {\nname = "rahul-test-terraform"\npayment_method_id = data.rediscloud_payment_method.card.id\nmemory_storage = "ram"\ncloud_provider {\n\n  provider = "AWS"\n  cloud_account_id = 1\n  region {\n    region = "us-east-1"\n    networking_deployment_cidr = "10.0.0.0/24"\n    preferred_availability_zones = ["us-east-1a"]\n  }\n}\ndatabase {\n  name = "db-json"\n  protocol = "redis"\n  memory_limit_in_gb = 1\n  replication = true\n  data_persistence = "aof-every-1-second"\n  module {\n      name = "RedisJSON"\n  }\n  throughput_measurement_by = "operations-per-second"\n  throughput_measurement_value = 10000\n  password = random_password.passwords[1].result\n}\n}\n')),(0,a.kt)("h3",{id:"step-8-cleanup"},"Step 8: Cleanup"),(0,a.kt)("p",null,"The Terraform destroy command is a convenient way to destroy all remote objects managed by a particular Terraform configuration. While you will typically not want to destroy long-lived objects in a production environment, Terraform is sometimes used to manage ephemeral infrastructure for development purposes, in which case you can use terraform destroy\u2019 to conveniently clean up all of those temporary objects once you are finished with your work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'% terraform destroy\nrandom_password.passwords[0]: Refreshing state... [id=none]\nrandom_password.passwords[1]: Refreshing state... [id=none]\nrediscloud_subscription.rahul-test-terraform: Refreshing state... [id=1649277]\n\nTerraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:\n  - destroy\n\nTerraform will perform the following actions:\n\n  # random_password.passwords[0] will be destroyed\n  - resource "random_password" "passwords" {\n      - id          = "none" -> null\n      - length      = 20 -> null\n      - lower       = true -> null\n      - min_lower   = 0 -> null\n      - min_numeric = 0 -> null\n      - min_special = 0 -> null\n      - min_upper   = 0 -> null\n      - number      = true -> null\n      - result      = (sensitive value)\n      - special     = false -> null\n      - upper       = true -> null\n    }\n\n  # random_password.passwords[1] will be destroyed\n  - resource "random_password" "passwords" {\n      - id          = "none" -> null\n      - length      = 20 -> null\n      - lower       = true -> null\n      - min_lower   = 0 -> null\n      - min_numeric = 0 -> null\n      - min_special = 0 -> null\n      - min_upper   = 0 -> null\n      - number      = true -> null\n      - result      = (sensitive value)\n      - special     = false -> null\n      - upper       = true -> null\n    }\n\n  # rediscloud_subscription.rahul-test-terraform will be destroyed\n  - resource "rediscloud_subscription" "rahul-test-terraform" {\n      - id                            = "1649277" -> null\n      - memory_storage                = "ram" -> null\n      - name                          = "rahul-test-terraform" -> null\n      - payment_method_id             = "XXXX" -> null\n      - persistent_storage_encryption = true -> null\n\n      - cloud_provider {\n          - cloud_account_id = "1" -> null\n          - provider         = "AWS" -> null\n\n          - region {\n              - multiple_availability_zones  = false -> null\n              - networking_deployment_cidr   = "10.0.0.0/24" -> null\n              - networks                     = [\n                  - {\n                      - networking_deployment_cidr = "10.0.0.0/24"\n                      - networking_subnet_id       = "subnet-0055e8e3ee3ea796e"\n                      - networking_vpc_id          = ""\n                    },\n                ] -> null\n              - preferred_availability_zones = [\n                  - "us-east-1a",\n                ] -> null\n              - region                       = "us-east-1" -> null\n            }\n        }\n\n      - database {\n          # At least one attribute in this block is (or was) sensitive,\n          # so its contents will not be displayed.\n        }\n    }\n\nPlan: 0 to add, 0 to change, 3 to destroy.\n\nDo you really want to destroy all resources?\n  Terraform will destroy all your managed infrastructure, as shown above.\n  There is no undo. Only \'yes\' will be accepted to confirm.\n\n  Enter a value: yes\n\nrediscloud_subscription.rahul-test-terraform: Destroying... [id=1649277]\n\u2026\nrediscloud_subscription.rahul-test-terraform: Destruction complete after 1m34s\nrandom_password.passwords[0]: Destroying... [id=none]\nrandom_password.passwords[1]: Destroying... [id=none]\nrandom_password.passwords[0]: Destruction complete after 0s\nrandom_password.passwords[1]: Destruction complete after 0s\n\nDestroy complete! Resources: 3 destroyed.\n')),(0,a.kt)("h3",{id:"further-references"},"Further References:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.com/blog/provision-manage-redis-enterprise-cloud-hashicorp-terraform/"},"Provision and Manage Redis Enterprise Cloud Anywhere with HashiCorp Terraform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/RedisLabs/rediscloud/latest"},"The HashiCorp Terraform Redis Enterprise Cloud provider")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.redis.com/create/azure/terraform-simple"},"Azure Cache for Redis Enterprise using Terraform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.redis.com/create/azure/terraform-private-endpoint"},"Azure Cache for Redis Enterprise using Terraform with Private Link"))))}p.isMDXComponent=!0},67863:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/accessmanagement-ce4d070c0da6ff7d6b772f754c4def33.png"},67340:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/accessmanagement1-26d59fb1f277d9f389fc10975f175ca8.png"},64937:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/terraform_arch-b47d156b140fe463b960341f245bd92e.png"},78611:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/terraform_rediscloud-a3fde74f3ee29cfe711dcaaa7cb9b783.png"},61460:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/tryfree-ff92078df0256461ff88ef3ac72cbb1d.png"}}]);