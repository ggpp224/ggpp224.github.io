webpackJsonp([14],{3:function(e,t,n){e.exports=n(2)(148)},4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(8),l=o(c);t.default=l.default},5:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),i=o(a),u=n(6),h=n(7),d=o(h),p=n(13),f=o(p),b=n(4),y=o(b),k=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.code,o=e.component,c=e.layoutSideBySide,l=this.context.muiTheme.rawTheme.palette,s=l.canvasColor,r={root:{backgroundColor:s,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:c?"45%":null,float:c?"right":null}},a=o?(0,u.parse)(n):{};return i.default.createElement(y.default,{style:r.root},i.default.createElement(d.default,{title:this.props.title,description:this.props.description||a.description},n),i.default.createElement(f.default,{style:r.exampleBlock},t))}}]),t}(a.Component);k.propTypes={children:a.PropTypes.node,code:a.PropTypes.string.isRequired,component:a.PropTypes.bool,description:a.PropTypes.string,layoutSideBySide:a.PropTypes.bool,title:a.PropTypes.string},k.defaultProps={component:!0},k.contextTypes={muiTheme:a.PropTypes.object},t.default=k},6:function(e,t,n){e.exports=n(2)(118)},7:function(e,t,n){e.exports=n(2)(321)},14:function(e,t,n){e.exports=n(2)(323)},29:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n=t.muiTheme.baseTheme;return{root:{position:"relative",cursor:e.disabled?"default":"pointer",overflow:"visible",display:"table",height:"auto",width:"100%"},input:{position:"absolute",cursor:e.disabled?"default":"pointer",pointerEvents:"all",opacity:0,width:"100%",height:"100%",zIndex:2,left:0,boxSizing:"border-box",padding:0,margin:0},controls:{display:"flex",width:"100%",height:"100%"},label:{float:"left",position:"relative",display:"block",width:"calc(100% - 60px)",lineHeight:(0,O.px2rem)("48px"),color:n.palette.textColor,fontFamily:n.fontFamily},wrap:{transition:m.default.easeOut(),float:"left",position:"relative",display:"block",flexShrink:0,width:(0,O.px2rem)(2*(60-n.spacing.desktopGutterLess)),marginRight:"right"===e.labelPosition?n.spacing.desktopGutterLess:0,marginLeft:"left"===e.labelPosition?n.spacing.desktopGutterLess:0},ripple:{color:e.rippleColor||n.palette.primary1Color,height:"200%",width:"200%",top:"-"+(0,O.px2rem)(24),left:"-"+(0,O.px2rem)(24)}}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),d=o(h),p=n(34),f=o(p),b=n(38),y=o(b),k=n(12),m=o(k),v=n(33),x=o(v),T=n(30),w=o(T),P=n(8),S=o(P),g=n(18),C=o(g),O=n(24),E=function(e){function t(){var e,n,o,c;l(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={isKeyboardFocused:!1},o.handleChange=function(e){o.tabPressed=!1,o.setState({isKeyboardFocused:!1});var t=o.refs.checkbox.checked;!o.props.hasOwnProperty("checked")&&o.props.onParentShouldUpdate&&o.props.onParentShouldUpdate(t),o.props.onSwitch&&o.props.onSwitch(e,t)},o.handleKeyDown=function(e){var t=(0,y.default)(e);"tab"===t&&(o.tabPressed=!0),o.state.isKeyboardFocused&&"space"===t&&o.handleChange(e)},o.handleKeyUp=function(e){o.state.isKeyboardFocused&&"space"===(0,y.default)(e)&&o.handleChange(e)},o.handleMouseDown=function(e){0===e.button&&o.refs.touchRipple.start(e)},o.handleMouseUp=function(){o.refs.touchRipple.end()},o.handleMouseLeave=function(){o.refs.touchRipple.end()},o.handleTouchStart=function(e){o.refs.touchRipple.start(e)},o.handleTouchEnd=function(){o.refs.touchRipple.end()},o.handleBlur=function(e){o.setState({isKeyboardFocused:!1}),o.props.onBlur&&o.props.onBlur(e)},o.handleFocus=function(e){setTimeout(function(){o.tabPressed&&o.setState({isKeyboardFocused:!0})},150),o.props.onFocus&&o.props.onFocus(e)},c=n,s(o,c)}return r(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.refs.checkbox;this.props.switched&&e.checked===this.props.switched||!this.props.onParentShouldUpdate||this.props.onParentShouldUpdate(e.checked)}},{key:"componentWillReceiveProps",value:function(e){var t=e.hasOwnProperty("checked"),n=e.hasOwnProperty("toggled"),o=e.hasOwnProperty("defaultChecked")&&e.defaultChecked!==this.props.defaultChecked;if(t||n||o){var c=e.checked||e.toggled||e.defaultChecked||!1;this.setState({switched:c}),this.props.onParentShouldUpdate&&c!==this.props.switched&&this.props.onParentShouldUpdate(c)}}},{key:"isSwitched",value:function(){return this.refs.checkbox.checked}},{key:"setSwitched",value:function(e){this.props.hasOwnProperty("checked")&&this.props.checked!==!1?(0,C.default)(!1,"Cannot call set method while checked is defined as a property."):(this.props.onParentShouldUpdate&&this.props.onParentShouldUpdate(e),this.refs.checkbox.checked=e)}},{key:"getValue",value:function(){return this.refs.checkbox.value}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.value,o=e.iconStyle,l=e.inputStyle,s=(e.inputType,e.label),r=e.labelStyle,u=e.labelPosition,h=(e.onSwitch,e.onBlur,e.onFocus,e.onMouseUp,e.onMouseDown,e.onMouseLeave,e.onTouchStart,e.onTouchEnd,e.onParentShouldUpdate,e.disabled),p=e.disableTouchRipple,b=e.disableFocusRipple,y=e.className,k=(e.rippleColor,e.rippleStyle),m=e.style,v=(e.switched,e.switchElement),T=e.thumbStyle,P=e.trackStyle,g=c(e,["name","value","iconStyle","inputStyle","inputType","label","labelStyle","labelPosition","onSwitch","onBlur","onFocus","onMouseUp","onMouseDown","onMouseLeave","onTouchStart","onTouchEnd","onParentShouldUpdate","disabled","disableTouchRipple","disableFocusRipple","className","rippleColor","rippleStyle","style","switched","switchElement","thumbStyle","trackStyle"]),C=this.context.muiTheme.prepareStyles,E=a(this.props,this.context),_=Object.assign(E.wrap,o),M=Object.assign(E.ripple,k);T&&(_.marginLeft=(0,O.px2rem)(_.marginLeft/2),_.marginRight=(0,O.px2rem)(_.marginRight/2));var R=s&&d.default.createElement("label",{style:C(Object.assign(E.label,r))},s),I=!h&&!p,D=!h&&!b,U=d.default.createElement(w.default,{ref:"touchRipple",key:"touchRipple",style:M,color:M.color,muiTheme:this.context.muiTheme,centerRipple:!0}),L=d.default.createElement(x.default,{key:"focusRipple",innerStyle:M,color:M.color,muiTheme:this.context.muiTheme,show:this.state.isKeyboardFocused}),F=[I?U:null,D?L:null],W=d.default.createElement(j,i({},g,{ref:"checkbox",style:C(Object.assign(E.input,l)),showTouchRipple:I,name:t,value:n,disabled:h,onBlur:this.handleBlur,onFocus:this.handleFocus,onChange:this.handleChange,onMouseUp:I&&this.handleMouseUp,onMouseDown:I&&this.handleMouseDown,onMouseLeave:I&&this.handleMouseLeave,onTouchStart:I&&this.handleTouchStart,onTouchEnd:I&&this.handleTouchEnd})),B=T?d.default.createElement("div",{style:C(_)},d.default.createElement("div",{style:C(Object.assign({},P))}),d.default.createElement(S.default,{style:T,zDepth:1,circle:!0}," ",F," ")):d.default.createElement("div",{style:C(_)},v,F),z="right"===u?d.default.createElement("div",{style:E.controls},B,R):d.default.createElement("div",{style:E.controls},R,B);return d.default.createElement("div",{ref:"root",className:y,style:C(Object.assign(E.root,m))},d.default.createElement(f.default,{target:"window",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}),W,z)}}]),t}(h.Component);E.propTypes={checked:h.PropTypes.bool,className:h.PropTypes.string,defaultChecked:h.PropTypes.bool,disableFocusRipple:h.PropTypes.bool,disableTouchRipple:h.PropTypes.bool,disabled:h.PropTypes.bool,iconStyle:h.PropTypes.object,inputStyle:h.PropTypes.object,inputType:h.PropTypes.string.isRequired,label:h.PropTypes.node,labelPosition:h.PropTypes.oneOf(["left","right"]),labelStyle:h.PropTypes.object,name:h.PropTypes.string,onBlur:h.PropTypes.func,onFocus:h.PropTypes.func,onMouseDown:h.PropTypes.func,onMouseLeave:h.PropTypes.func,onMouseUp:h.PropTypes.func,onParentShouldUpdate:h.PropTypes.func,onSwitch:h.PropTypes.func,onTouchEnd:h.PropTypes.func,onTouchStart:h.PropTypes.func,rippleColor:h.PropTypes.string,rippleStyle:h.PropTypes.object,style:h.PropTypes.object,switchElement:h.PropTypes.element.isRequired,switched:h.PropTypes.bool.isRequired,thumbStyle:h.PropTypes.object,trackStyle:h.PropTypes.object,value:h.PropTypes.any},E.contextTypes={muiTheme:h.PropTypes.object.isRequired};var j=function(e){function t(e,n){l(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.checked=!1,o.onTouchTap=function(e){var t=o.props,n=t.disabled,c=t.onChange;n||(o.checked=!o.checked,c(e))},e.hasOwnProperty("defaultChecked")&&(o.checked=e.defaultChecked),o}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=(e.checked,e.defaultChecked,e.disabled),o=(e.onChange,e.onMouseDown),l=e.onMouseLeave,s=e.onMouseUp,r=e.onTouchStart,a=e.onTouchEnd,u=e.showTouchRipple,h=e.value,p=c(e,["style","checked","defaultChecked","disabled","onChange","onMouseDown","onMouseLeave","onMouseUp","onTouchStart","onTouchEnd","showTouchRipple","value"]);return this.value=h,d.default.createElement("div",i({},p,{style:t,disabled:n,value:h,onTouchTap:this.onTouchTap,onMouseUp:u&&s,onMouseDown:u&&o,onMouseLeave:u&&l,onTouchStart:u&&r,onTouchEnd:u&&a}))}}]),t}(h.Component);j.propTypes={checked:h.PropTypes.bool,defaultChecked:h.PropTypes.bool,onMouseDown:h.PropTypes.func,onMouseLeave:h.PropTypes.func,onMouseUp:h.PropTypes.func,onTouchEnd:h.PropTypes.func,onTouchStart:h.PropTypes.func,style:h.PropTypes.object},t.default=E},30:function(e,t,n){e.exports=n(2)(341)},33:function(e,t,n){e.exports=n(2)(337)},55:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(60),l=o(c);t.default=l.default},60:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n=t.muiTheme.checkbox,o="0.64rem";return{icon:{height:o,width:o},check:{position:"absolute",opacity:0,transform:"scale(0)",transitionOrigin:"50% 50%",transition:y.default.easeOut("450ms","opacity","0ms")+", "+y.default.easeOut("0ms","transform","450ms"),fill:n.checkedColor},box:{position:"absolute",opacity:1,fill:n.boxColor,transition:y.default.easeOut("2s",null,"200ms")},checkWhenSwitched:{opacity:1,transform:"scale(1)",transition:y.default.easeOut("0ms","opacity","0ms")+", "+y.default.easeOut("800ms","transform","0ms")},boxWhenSwitched:{transition:y.default.easeOut("100ms",null,"0ms"),fill:n.checkedColor},checkWhenDisabled:{fill:n.disabledColor},boxWhenDisabled:{fill:e.checked?"transparent":n.disabledColor},label:{lineHeight:o,color:e.disabled?n.labelDisabledColor:n.labelColor}}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(1),d=o(h),p=n(29),f=o(p),b=n(12),y=o(b),k=n(62),m=o(k),v=n(63),x=o(v),T=n(50),w=o(T),P=function(e){function t(){var e,n,o,c;l(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={switched:!1},o.handleCheck=function(e,t){o.props.onCheck&&o.props.onCheck(e,t)},o.handleStateChange=function(e){o.setState({switched:e})},c=n,s(o,c)}return r(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.checked,n=e.defaultChecked,o=e.valueLink;(t||n||o&&o.value)&&this.setState({switched:!0})}},{key:"componentWillReceiveProps",value:function(e){this.setState({switched:this.props.checked!==e.checked?e.checked:this.state.switched})}},{key:"isChecked",value:function(){return this.refs.enhancedSwitch.isSwitched()}},{key:"setChecked",value:function(e){this.refs.enhancedSwitch.setSwitched(e)}},{key:"render",value:function(){var e=this.props,t=e.iconStyle,n=(e.onCheck,e.checkedIcon),o=e.uncheckedIcon,l=e.unCheckedIcon,s=c(e,["iconStyle","onCheck","checkedIcon","uncheckedIcon","unCheckedIcon"]),r=a(this.props,this.context),u=Object.assign(r.box,this.state.switched&&r.boxWhenSwitched,t,this.props.disabled&&r.boxWhenDisabled),h=Object.assign(r.check,this.state.switched&&r.checkWhenSwitched,t,this.props.disabled&&r.checkWhenDisabled),p=n?d.default.cloneElement(n,{style:Object.assign(h,n.props.style)}):d.default.createElement(x.default,{style:h}),b=l||o?d.default.cloneElement(l||o,{style:Object.assign(u,(l||o).props.style)}):d.default.createElement(m.default,{style:u}),y=d.default.createElement("div",null,b,p),k=this.state.switched?h.fill:u.fill,v=Object.assign(r.icon,t),T=Object.assign(r.label,this.props.labelStyle),w={ref:"enhancedSwitch",inputType:"checkbox",switched:this.state.switched,switchElement:y,rippleColor:k,iconStyle:v,onSwitch:this.handleCheck,labelStyle:T,onParentShouldUpdate:this.handleStateChange,defaultSwitched:this.props.defaultChecked,labelPosition:this.props.labelPosition};return d.default.createElement(f.default,i({},s,w))}}]),t}(d.default.Component);P.propTypes={checked:d.default.PropTypes.bool,checkedIcon:d.default.PropTypes.element,defaultChecked:d.default.PropTypes.bool,disabled:d.default.PropTypes.bool,iconStyle:d.default.PropTypes.object,inputStyle:d.default.PropTypes.object,labelPosition:d.default.PropTypes.oneOf(["left","right"]),labelStyle:d.default.PropTypes.object,onCheck:d.default.PropTypes.func,style:d.default.PropTypes.object,unCheckedIcon:(0,w.default)(d.default.PropTypes.element,"Use uncheckedIcon instead."),uncheckedIcon:d.default.PropTypes.element,valueLink:d.default.PropTypes.object},P.defaultProps={defaultChecked:!1,labelPosition:"right",disabled:!1},P.contextTypes={muiTheme:d.default.PropTypes.object.isRequired},t.default=P},62:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=o(c),s=n(10),r=o(s),a=n(11),i=o(a),u=function(e){return l.default.createElement(i.default,e,l.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))};u=(0,r.default)(u),u.displayName="ToggleCheckBoxOutlineBlank",t.default=u},63:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=o(c),s=n(10),r=o(s),a=n(11),i=o(a),u=function(e){return l.default.createElement(i.default,e,l.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))};u=(0,r.default)(u),u.displayName="ToggleCheckBox",t.default=u},135:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=o(c),s=n(10),r=o(s),a=n(11),i=o(a),u=function(e){return l.default.createElement(i.default,e,l.default.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}))};u=(0,r.default)(u),u.displayName="ActionFavoriteBorder",u.muiName="SvgIcon",t.default=u},136:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=o(c),s=n(10),r=o(s),a=n(11),i=o(a),u=function(e){return l.default.createElement(i.default,e,l.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}))};u=(0,r.default)(u),u.displayName="ActionFavorite",u.muiName="SvgIcon",t.default=u},259:function(e,t){e.exports='import React from \'react\';\nimport Checkbox from \'chanjet-ui/lib/Checkbox\';\nimport ActionFavorite from \'chanjet-ui/lib/svg-icons/action/favorite\';\nimport ActionFavoriteBorder from \'chanjet-ui/lib/svg-icons/action/favorite-border\';\n\nconst styles = {\n  block: {\n    maxWidth: 250,\n  },\n  checkbox: {\n    marginBottom: 16,\n  },\n};\n\nclass CheckboxExampleSimple extends React.Component{\n\n    constructor(props, context){\n        super(props, context);\n        this.state = {checked: true};\n\n        this.timer = setInterval(()=>{\n            this.setState({checked: !this.state.checked});\n        }, 2000);\n    }\n\n    render(){\n        return (\n            <div>\n                <Checkbox\n                    label="Checked by default"\n                    defaultChecked={this.state.checked}\n                    style={styles.checkbox}\n                />\n                <Checkbox\n                    label="Simple"\n                    style={styles.checkbox}\n                />\n                <Checkbox\n                    label="Checked by default"\n                    defaultChecked={true}\n                    style={styles.checkbox}\n                />\n                <Checkbox\n                    checkedIcon={<ActionFavorite />}\n                    uncheckedIcon={<ActionFavoriteBorder />}\n                    label="Custom icon"\n                    style={styles.checkbox}\n                />\n                <Checkbox\n                    label="Disabled unchecked"\n                    disabled={true}\n                    style={styles.checkbox}\n                />\n                <Checkbox\n                    label="Disabled checked"\n                    checked={true}\n                    disabled={true}\n                    style={styles.checkbox}\n                />\n                <Checkbox\n                    label="Label on the left"\n                    labelPosition="left"\n                    style={styles.checkbox}\n                />\n            </div>\n\n        );\n    }\n\n    componentWillUnmount(){\n        clearInterval(this.timer);\n    }\n\n\n\n}\n\n\nexport default CheckboxExampleSimple;\n'},260:function(e,t){e.exports="## Checkbox\n\nA [checkbox](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox)\nis used to verify which options you want selected from a group.\n\n### Examples\n"},347:function(e,t){e.exports="import React from 'react';\nimport EnhancedSwitch from '../internal/EnhancedSwitch';\nimport transitions from '../styles/transitions';\nimport CheckboxOutline from '../svg-icons/toggle/check-box-outline-blank';\nimport CheckboxChecked from '../svg-icons/toggle/check-box';\nimport deprecated from '../utils/deprecatedPropType';\n\nfunction getStyles(props, context) {\n  const {checkbox} = context.muiTheme;\n  const checkboxSize = '0.64rem';//24;\n\n  return {\n    icon: {\n      height: checkboxSize,\n      width: checkboxSize,\n    },\n    check: {\n      position: 'absolute',\n      opacity: 0,\n      transform: 'scale(0)',\n      transitionOrigin: '50% 50%',\n      transition: `${transitions.easeOut('450ms', 'opacity', '0ms')}, ${\n          transitions.easeOut('0ms', 'transform', '450ms')\n        }`,\n      fill: checkbox.checkedColor,\n    },\n    box: {\n      position: 'absolute',\n      opacity: 1,\n      fill: checkbox.boxColor,\n      transition: transitions.easeOut('2s', null, '200ms'),\n    },\n    checkWhenSwitched: {\n      opacity: 1,\n      transform: 'scale(1)',\n      transition: `${transitions.easeOut('0ms', 'opacity', '0ms')}, ${\n          transitions.easeOut('800ms', 'transform', '0ms')\n        }`,\n    },\n    boxWhenSwitched: {\n      transition: transitions.easeOut('100ms', null, '0ms'),\n      fill: checkbox.checkedColor,\n    },\n    checkWhenDisabled: {\n      fill: checkbox.disabledColor,\n    },\n    boxWhenDisabled: {\n      fill: props.checked ? 'transparent' : checkbox.disabledColor,\n    },\n    label: {\n      lineHeight: checkboxSize,\n      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor,\n    },\n  };\n}\n\nclass Checkbox extends React.Component {\n  static propTypes = {\n    /**\n     * Checkbox is checked if true.\n     */\n    checked: React.PropTypes.bool,\n\n    /**\n     * The SvgIcon to use for the checked state.\n     * This is useful to create icon toggles.\n     */\n    checkedIcon: React.PropTypes.element,\n\n    /**\n     * The default state of our checkbox component.\n     */\n    defaultChecked: React.PropTypes.bool,\n\n    /**\n     * Disabled if true.\n     */\n    disabled: React.PropTypes.bool,\n\n    /**\n     * Overrides the inline-styles of the icon element.\n     */\n    iconStyle: React.PropTypes.object,\n\n    /**\n     * Overrides the inline-styles of the input element.\n     */\n    inputStyle: React.PropTypes.object,\n\n    /**\n     * Where the label will be placed next to the checkbox.\n     */\n    labelPosition: React.PropTypes.oneOf(['left', 'right']),\n\n    /**\n     * Overrides the inline-styles of the Checkbox element label.\n     */\n    labelStyle: React.PropTypes.object,\n\n    /**\n     * Callback function that is fired when the checkbox is checked.\n     *\n     * @param {object} event `change` event targeting the underlying checkbox `input`.\n     * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.\n     */\n    onCheck: React.PropTypes.func,\n\n    /**\n     * Override the inline-styles of the root element.\n     */\n    style: React.PropTypes.object,\n\n    /**\n     * The SvgIcon to use for the unchecked state.\n     * This is useful to create icon toggles.\n     */\n    unCheckedIcon: deprecated(React.PropTypes.element,\n      'Use uncheckedIcon instead.'),\n\n    /**\n     * The SvgIcon to use for the unchecked state.\n     * This is useful to create icon toggles.\n     */\n    uncheckedIcon: React.PropTypes.element,\n\n    /**\n     * ValueLink for when using controlled checkbox.\n     */\n    valueLink: React.PropTypes.object,\n  };\n\n  static defaultProps = {\n    defaultChecked: false,\n    labelPosition: 'right',\n    disabled: false,\n  };\n\n  static contextTypes = {\n    muiTheme: React.PropTypes.object.isRequired,\n  };\n\n  state = {switched: false};\n\n  componentWillMount() {\n    const {checked, defaultChecked, valueLink} = this.props;\n\n    if (checked || defaultChecked || (valueLink && valueLink.value)) {\n      this.setState({switched: true});\n    }\n  }\n\n  componentWillReceiveProps(nextProps) {\n    this.setState({\n      switched: this.props.checked !== nextProps.checked ?\n        nextProps.checked :\n        this.state.switched,\n    });\n  }\n\n  isChecked() {\n    return this.refs.enhancedSwitch.isSwitched();\n  }\n\n  setChecked(newCheckedValue) {\n    this.refs.enhancedSwitch.setSwitched(newCheckedValue);\n  }\n\n  handleCheck = (event, isInputChecked) => {\n    if (this.props.onCheck) this.props.onCheck(event, isInputChecked);\n  };\n\n  handleStateChange = (newSwitched) => {\n    this.setState({switched: newSwitched});\n  };\n\n  render() {\n    const {\n      iconStyle,\n      onCheck, // eslint-disable-line no-unused-vars\n      checkedIcon,\n      uncheckedIcon,\n      unCheckedIcon,\n      ...other,\n    } = this.props;\n    const styles = getStyles(this.props, this.context);\n    const boxStyles =\n      Object.assign(\n        styles.box,\n        this.state.switched && styles.boxWhenSwitched,\n        iconStyle,\n        this.props.disabled && styles.boxWhenDisabled);\n    const checkStyles =\n      Object.assign(\n        styles.check,\n        this.state.switched && styles.checkWhenSwitched,\n        iconStyle,\n        this.props.disabled && styles.checkWhenDisabled);\n\n    const checkedElement = checkedIcon ? React.cloneElement(checkedIcon, {\n      style: Object.assign(checkStyles, checkedIcon.props.style),\n    }) : React.createElement(CheckboxChecked, {\n      style: checkStyles,\n    });\n\n    const unCheckedElement = (unCheckedIcon || uncheckedIcon) ? React.cloneElement((unCheckedIcon || uncheckedIcon), {\n      style: Object.assign(boxStyles, (unCheckedIcon || uncheckedIcon).props.style),\n    }) : React.createElement(CheckboxOutline, {\n      style: boxStyles,\n    });\n\n    const checkboxElement = (\n      <div>\n        {unCheckedElement}\n        {checkedElement}\n      </div>\n    );\n\n    const rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;\n    const mergedIconStyle = Object.assign(styles.icon, iconStyle);\n\n    const labelStyle = Object.assign(\n      styles.label,\n      this.props.labelStyle\n    );\n\n    const enhancedSwitchProps = {\n      ref: 'enhancedSwitch',\n      inputType: 'checkbox',\n      switched: this.state.switched,\n      switchElement: checkboxElement,\n      rippleColor: rippleColor,\n      iconStyle: mergedIconStyle,\n      onSwitch: this.handleCheck,\n      labelStyle: labelStyle,\n      onParentShouldUpdate: this.handleStateChange,\n      defaultSwitched: this.props.defaultChecked,\n      labelPosition: this.props.labelPosition,\n    };\n\n    return (\n      <EnhancedSwitch\n        {...other}\n        {...enhancedSwitchProps}\n      />\n    );\n  }\n}\n\nexport default Checkbox;\n"},587:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),i=o(a),u=n(55),h=o(u),d=n(136),p=o(d),f=n(135),b=o(f),y={block:{maxWidth:250},checkbox:{marginBottom:16}},k=function(e){function t(e,n){c(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.state={checked:!0},o.timer=setInterval(function(){o.setState({checked:!o.state.checked})},2e3),o}return s(t,e),r(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(h.default,{label:"Checked by default",defaultChecked:this.state.checked,style:y.checkbox}),i.default.createElement(h.default,{label:"Simple",style:y.checkbox}),i.default.createElement(h.default,{label:"Checked by default",defaultChecked:!0,style:y.checkbox}),i.default.createElement(h.default,{checkedIcon:i.default.createElement(p.default,null),uncheckedIcon:i.default.createElement(b.default,null),label:"Custom icon",style:y.checkbox}),i.default.createElement(h.default,{label:"Disabled unchecked",disabled:!0,style:y.checkbox}),i.default.createElement(h.default,{label:"Disabled checked",checked:!0,disabled:!0,style:y.checkbox}),i.default.createElement(h.default,{label:"Label on the left",labelPosition:"left",style:y.checkbox}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}}]),t}(i.default.Component);t.default=k},588:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=o(c),s=n(16),r=o(s),a=n(5),i=o(a),u=n(14),h=o(u),d=n(3),p=o(d),f=n(260),b=o(f),y=n(347),k=o(y),m=n(587),v=o(m),x=n(259),T=o(x),w="The second example is selected by default using the `defaultChecked` property. The third example is disabled using the `disabled` property. The fourth example uses custom icons through the `checkedIcon` and `uncheckedIcon` properties. The final example uses the `labelPosition` property to position the label on the left. ",P=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{render:function(e){return"Checkbox - "+e}}),l.default.createElement(p.default,{text:b.default}),l.default.createElement(i.default,{title:"Examples",description:w,code:T.default},l.default.createElement(v.default,null)),l.default.createElement(h.default,{code:k.default}))};t.default=P}});