(this.webpackJsonpContentfulBlog=this.webpackJsonpContentfulBlog||[]).push([[0],{181:function(t,e){},183:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),c=n(57),o=n.n(c),r=n(11),i=n(14),l=n(16),d=n(15),j=(n(67),n(24)),h=n(3),p=n(12),u=n(22),b=n(23),m=n.n(b),f=n(1),O=function(t){var e=Object(h.f)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"blogpost-preview",children:[Object(f.jsx)("h2",{children:t.title}),Object(f.jsx)(u,{source:t.content.split(" ").splice(0,36).join(" ").concat("...")}),Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("div",{className:"",children:Object(f.jsx)(p.b,{className:"button",to:Object(j.a)({pathname:"".concat(e.url,"/").concat(t.path)},t),children:"Read More"})}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)("p",{className:"",children:m()(t.date).calendar(null,{sameDay:"[Today]",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"MMM Do YYYY"})})})]})]})})},g=n(62),x=function t(){Object(r.a)(this,t)};x.client=g.a({space:"pw1wgczsxbbk",accessToken:"Aup43k9HRjzACAEq5nVJY2iffgM_TZAX9YXJUgtEjR8"}),x.fetchAllBlogPosts=function(){return x.client.getEntries({content_type:"blogpost",order:"-sys.createdAt"})},x.fetchPostByPathName=function(t){return x.client.getEntries({content_type:"blogpost","fields.path[in]":t})};var y=x,v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={posts:[]},t.setPosts=function(e){t.setState({posts:e.items})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){y.fetchAllBlogPosts().then(this.setPosts)}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(p.b,{to:"home",children:"Go to home"}),Object(f.jsx)("h1",{children:"Blog"}),this.state.posts.map((function(t,e){var n=t.fields;return Object(f.jsx)(O,Object(j.a)({},n),e)}))]})}}]),n}(a.a.Component),P=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={date:"",title:"",featuredImage:"",content:""},t.setPost=function(e){e&&e.items.length&&t.setState({date:e.items[0].fields.date,title:e.items[0].fields.title,featuredImage:e.items[0].fields.featuredImage,content:e.items[0].fields.content})},t.isBlogPostInProps=function(){return t.props&&t.props.location&&t.props.location.date&&t.props.location.title&&t.props.location.featuredImage&&t.props.location.content},t.renderBlogPost=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p.b,{to:"/blog",children:"Back to Blog"}),Object(f.jsx)("p",{children:m()(t.state.date).calendar(null,{sameDay:"[Today]",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"MMM Do YYYY"})}),t.state.featuredImage&&Object(f.jsx)("img",{src:"http:"+t.state.featuredImage.fields.file.url+"?w=300&h=300",alt:t.state.title,title:t.state.title}),Object(f.jsx)("h1",{children:t.state.title}),Object(f.jsx)(u,{source:t.state.content})]})},t.render=function(){return t.renderBlogPost()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.isBlogPostInProps()?this.setState({date:this.props.location.date,title:this.props.location.title,featuredImage:this.props.location.featuredImage,content:this.props.location.content}):y.fetchPostByPathName(this.props.match.params.blogPost).then((function(e){return t.setPost(e)}))}}]),n}(a.a.Component),k=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Welcome Home!"}),Object(f.jsx)(p.b,{to:"blog",children:"Go to blog"}),Object(f.jsx)("div",{className:"podcast-player",children:Object(f.jsx)("iframe",{src:"https://open.spotify.com/embed/show/0FX2hELh5i2jYqGmBJkRhg?theme=0",width:"100%",height:"232",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})}),Object(f.jsxs)("div",{className:"podcast-links",children:[Object(f.jsx)("a",{className:"button",target:"_blank",href:"https://open.spotify.com/show/0FX2hELh5i2jYqGmBJkRhg?si=QZUE2RljRCyCd7-6f9mmkw&dl_branch=1",children:"Spotify"}),Object(f.jsx)("a",{className:"button",target:"_blank",href:"https://podcasts.apple.com/ca/podcast/ready-for-launch/id1561648024",children:"Apple Podcasts"})]})]})}}]),n}(a.a.PureComponent),B=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(p.a,{children:Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{path:"/blog",exact:!0,component:v}),Object(f.jsx)(h.a,{path:"/blog/:blogPost",component:P}),Object(f.jsx)(h.a,{path:"",component:k})]})})})}}]),n}(a.a.PureComponent);o.a.render(Object(f.jsx)(B,{}),document.getElementById("root"))},38:function(t,e){},67:function(t,e,n){}},[[183,1,2]]]);
//# sourceMappingURL=main.b810ea80.chunk.js.map