(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=(a(17),a(3)),i=a(4),l=a(6),u=a(5),h=a(8),m=(a(11),a(10)),p=a(12),d=a.n(p),g=a(1),j=function(){return Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)(d.a,{type:"TailSpin",color:"#303f9f",height:80,width:80})})},b=document.querySelector("#modal-root"),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).keyDownHandler=function(t){"Escape"===t.code&&e.props.onClose()},e.OnOverlayHandler=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDownHandler)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.OnOverlayHandler,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.maxImage,alt:""})})}),b)}}]),a}(n.Component),f=O,v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("li",{className:"ImageGalleryItem",id:this.props.id,children:Object(g.jsx)("img",{src:this.props.src,alt:this.props.alt,className:"ImageGalleryItem-image",onClick:this.props.showImageFunc})})}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("button",{type:"button",onClick:this.props.onClick,className:"Button",children:"Load more"})}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageValue:[],error:null,status:"idle",page:1,perPage:12,showModal:!1,totalHits:null},e.handleClick=function(){e.setState((function(){return{page:e.state.page+1}}))},e.scrollForImages=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.imageValue!==e.imageValue&&this.setState({imageValue:[]}),t.imageValue.length!==this.state.imageValue.length&&0!==t.imageValue.length&&this.scrollForImages(),e.imageValue!==this.props.imageValue||t.page!==this.state.page){this.setState({status:"pending"}),fetch("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal","&q=").concat(this.props.imageValue,"&page=").concat(this.state.page,"&per_page=12&key=").concat("23070790-299ad5e8dfdc75cc527267990")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(a.props.imageValue,"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")))})).then((function(e){if(0===e.hits.length)return h.b.error("\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(a.props.imageValue));a.setState((function(t){return{imageValue:[].concat(Object(m.a)(t.imageValue),Object(m.a)(e.hits)),page:a.state.page=1,status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})}))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.imageValue,n=t.status;return Object(g.jsxs)("div",{children:["idle"===n&&Object(g.jsx)("div",{className:"idleDiv",children:"Enter name value"}),Object(g.jsxs)("ul",{className:"ImageGallery",children:[a.map((function(t){var a=t.id,n=t.webformatURL,r=t.tags,c=t.largeImageURL;return Object(g.jsx)(v,{src:n,alt:r,className:"ImageGalleryItem-image",showImageFunc:e.props.showImageFunc(c)},a)})),this.state.showModal&&Object(g.jsx)(f,{})]}),"rejected"===n&&Object(g.jsxs)("h1",{children:["\u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043c\u0435\u043d\u0438 \u043d\u0435\u0442 ",this.props.imageValue]}),"pending"===n?Object(g.jsx)(j,{}):a.length>0&&this.state.page!==Math.ceil(this.state.totalHits/12)&&Object(g.jsx)(y,{onClick:this.handleClick})]})}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageValue:""},e.handleValueChange=function(t){e.setState({imageValue:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.imageValue.trim())return Object(h.b)("Enter value");e.props.onSubmit(e.state.imageValue),e.setState({imageValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{onChange:this.handleValueChange,value:this.state.imageValue,className:"SearchForm-input",type:"text",placeholder:"Search images and photos"})]})})})}}]),a}(n.Component),V=w,k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageValue:[],openModal:!1,isLoading:!1,pixaBayImages:[]},e.maxImage="",e.newElementHight=0,e.handleFormSubmit=function(t){e.setState({imageValue:t,page:1,pixaBayImages:[]})},e.closeModal=function(){e.fullImageURL="",e.setState({openModal:!1})},e.showImageFunc=function(t){return function(){e.maxImage=t,e.setState({openModal:!0})}},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(V,{onSubmit:this.handleFormSubmit}),Object(g.jsx)(x,{imageValue:this.state.imageValue,showImageFunc:this.showImageFunc}),this.state.openModal&&Object(g.jsx)(f,{maxImage:this.maxImage,onClose:this.closeModal}),Object(g.jsx)(h.a,{})]})}}]),a}(n.Component);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0399973b.chunk.js.map