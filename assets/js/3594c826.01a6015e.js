"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[2546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,description:"Augmenting CNOE with terraform templates",title:"Templating of Terraform Modules"},o=void 0,s={unversionedId:"reference-implementation/integrations/generated/tf-templating",id:"reference-implementation/integrations/generated/tf-templating",title:"Templating of Terraform Modules",description:"Augmenting CNOE with terraform templates",source:"@site/docs/reference-implementation/integrations/generated/tf-templating.md",sourceDirName:"reference-implementation/integrations/generated",slug:"/reference-implementation/integrations/generated/tf-templating",permalink:"/docs/reference-implementation/integrations/generated/tf-templating",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/integrations/generated/tf-templating.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Augmenting CNOE with terraform templates",title:"Templating of Terraform Modules"},sidebar:"tutorialSidebar",previous:{title:"Templating of CRDs / XRDs",permalink:"/docs/reference-implementation/integrations/generated/crd-templating"},next:{title:"Verifications",permalink:"/docs/reference-implementation/integrations/verification"}},l={},p=[{value:"Template Generation",id:"template-generation",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The CNOE CLI supports integration of Terraform modules into the developer portal. "),(0,a.kt)("h2",{id:"template-generation"},"Template Generation"),(0,a.kt)("p",null,"To generate Backstage template input fields from Terraform modules, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"tf")," subcommand. Usage is shown below. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Generate backstage templates by walking the given input directory, find TF modules,then create output file per module.\nIf the templatePath and insertionPoint flags are set, generated objects are merged into the given template at given insertion point.\nOtherwise a yaml file with two keys are generated. The properties key contains the generated form input. The required key contains the TF variable names that do not have defaults.\n\nUsage:\n  cnoe template tf [flags]\n\nFlags:\n  -h, --help   help for tf\n\nGlobal Flags:\n  -c, --colllapse             if set to true, items are rendered and collapsed as drop down items in a single specified template\n      --depth uint32          depth from given directory to search for TF modules or CRDs (default 2)\n  -i, --inputDir string       input directory for CRDs and XRDs to be templatized\n  -p, --insertAt string       jq path within the template to insert backstage info (default ".spec.parameters[0]")\n  -o, --outputDir string      output directory for backstage templates to be stored in\n      --raww templatePath     prints the raw open API output without putting it into a template (ignoring templatePath and `insertAt`)\n  -t, --templatePath string   path to the template to be augmented with backstage info\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"We can run the command against one of modules within the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks"},"Data on EKS")," repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git /tmp/data-on-eks\n\ngit clone https://github.com/cnoe-io/reference-implementation-aws.git /tmp/ref-impl\n\ncnoe template tf \\\n  -i /tmp/data-on-eks/analytics/terraform/spark-k8s-operator \\\n  -t /tmp/ref-impl/examples/template-generation/data-on-eks.yaml \\\n  -p '.spec.parameters[0].properties.tfVars' \\\n  -o .\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," flag specifies input Terraform module directory. In this example, the content looks like this: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls /tmp/data-on-eks/analytics/terraform/spark-k8s-operator\nREADME.md              data.tf                karpenter-provisioners spark-team.tf\naddons.tf              examples               main.tf                variables.tf\namp.tf                 helm-values            outputs.tf             versions.tf\ncleanup.sh             install.sh             providers.tf           vpc.tf\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-t")," flag specifies the location of the partially configured template file. It may look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\nspec:\n  parameters:\n    - title: Terraform config options\n      properties:\n        tfVars: # this field is to be generated.\n          title: Terraform variables\n          type: object\n    - title: Configuration Options\n      properties:\n        name:\n          title: name of this entry\n          type: string\n        namespace:\n          title: namespace within the kubernetes cluster to deploy this\n          type: string\n          default: data-on-eks\n        adminRoleName: \n          title: Admin Role Name\n          description: Name of the role to give the administrative rights on the EKS cluster.\n          default: Admin\n          type: string\n        clusterName:\n          title: Cluster to run\n          description: The cluster to run this workflow in. \n          type: string\n          ui:field: KubernetesClusterPicker\n        repoUrl: # need a place to store this entity information.\n          title: Repository Location\n          type: string\n          ui:field: RepoUrlPicker\n          ui:options:\n            allowedHosts:\n              - github.com\n...\n")),(0,a.kt)("p",null,"This template contains input fields (",(0,a.kt)("inlineCode",{parentName:"p"},".spec.parameters[1]"),") that are common to all Data on EKS blueprints. For example, the name of the admin IAM role that will have Cluster Admin access is common to all EKS clusters. The only difference between templates are the terraform configuration options field. We will populate this field with variables from a terraform module."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," flag specifies where you want to insert input field within the given template. In this case, we want to insert it at ",(0,a.kt)("inlineCode",{parentName:"p"},".spec.parameters[0].properties.tfVars"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-o")," flag specifies the output directory. In this case, we want it to output it to the current directory."),(0,a.kt)("p",null,"Once the fields are generated and inserted, the template is ready to use. When rendered in Backstage, it should look something like this. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5416).Z,width:"3426",height:"2012"})),(0,a.kt)("p",null,"The diff between the original template and generated template should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'spec.parameters\n  - one list entry removed:\n    - title: "Terraform config options"\n    \u2502 properties:\n    \u2502 \u2502 tfVars:\n    \u2502 \u2502 \u2502 type: object\n    \u2502 \u2502 \u2502 title: "Terraform variables"\n\n  + one list entry added:\n    - properties:\n    \u2502 \u2502 tfVars:\n    \u2502 \u2502 \u2502 type: object\n    \u2502 \u2502 \u2502 title: "Terraform variables"\n    \u2502 \u2502 \u2502 properties:\n    \u2502 \u2502 \u2502 \u2502 name:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 \u2502 \u2502 \u2502 \u2502 default: spark-operator-doeks\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Name of the VPC and EKS Cluster"\n    \u2502 \u2502 \u2502 \u2502 eks_cluster_version:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 \u2502 \u2502 \u2502 \u2502 default: 1.26\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "EKS Cluster version"\n    \u2502 \u2502 \u2502 \u2502 enable_amazon_prometheus:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: boolean\n    \u2502 \u2502 \u2502 \u2502 \u2502 default: true\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Enable AWS Managed Prometheus service"\n    \u2502 \u2502 \u2502 \u2502 enable_vpc_endpoints:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: boolean\n    \u2502 \u2502 \u2502 \u2502 \u2502 default: false\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Enable VPC Endpoints"\n    \u2502 \u2502 \u2502 \u2502 enable_yunikorn:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: boolean\n    \u2502 \u2502 \u2502 \u2502 \u2502 default: true\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Enable Apache YuniKorn Scheduler"\n    \u2502 \u2502 \u2502 \u2502 region:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 \u2502 \u2502 \u2502 \u2502 default: us-west-2\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: Region\n    \u2502 \u2502 \u2502 \u2502 vpc_cidr:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 \u2502 \u2502 \u2502 \u2502 default: 10.1.0.0/16\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "VPC CIDR. This should be a valid private (RFC 1918) CIDR range"\n    \u2502 \u2502 \u2502 \u2502 eks_data_plane_subnet_secondary_cidr:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: array\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Secondary CIDR blocks. 32766 IPs per Subnet per Subnet/AZ for EKS Node and Pods"\n    \u2502 \u2502 \u2502 \u2502 \u2502 default:\n    \u2502 \u2502 \u2502 \u2502 \u2502 - 100.64.0.0/17\n    \u2502 \u2502 \u2502 \u2502 \u2502 - 100.64.128.0/17\n    \u2502 \u2502 \u2502 \u2502 \u2502 items:\n    \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 \u2502 \u2502 \u2502 private_subnets:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: array\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Private Subnets CIDRs. 254 IPs per Subnet/AZ for Private NAT + NLB + Airflow + EC2 Jumphost etc."\n    \u2502 \u2502 \u2502 \u2502 \u2502 default:\n    \u2502 \u2502 \u2502 \u2502 \u2502 - 10.1.1.0/24\n    \u2502 \u2502 \u2502 \u2502 \u2502 - 10.1.2.0/24\n    \u2502 \u2502 \u2502 \u2502 \u2502 items:\n    \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 \u2502 \u2502 \u2502 public_subnets:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: array\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Public Subnets CIDRs. 62 IPs per Subnet/AZ"\n    \u2502 \u2502 \u2502 \u2502 \u2502 default:\n    \u2502 \u2502 \u2502 \u2502 \u2502 - 10.1.0.0/26\n    \u2502 \u2502 \u2502 \u2502 \u2502 - 10.1.0.64/26\n    \u2502 \u2502 \u2502 \u2502 \u2502 items:\n    \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 \u2502 \u2502 \u2502 secondary_cidr_blocks:\n    \u2502 \u2502 \u2502 \u2502 \u2502 type: array\n    \u2502 \u2502 \u2502 \u2502 \u2502 description: "Secondary CIDR blocks to be attached to VPC"\n    \u2502 \u2502 \u2502 \u2502 \u2502 default:\n    \u2502 \u2502 \u2502 \u2502 \u2502 - 100.64.0.0/16\n    \u2502 \u2502 \u2502 \u2502 \u2502 items:\n    \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 type: string\n    \u2502 title: "Terraform config options"\n')))}c.isMDXComponent=!0},5416:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/backstage-tf-input-field-d33c7bee35e0fe18bad1f17a901937e7.png"}}]);