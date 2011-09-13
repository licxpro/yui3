YUI.add("widget-buttons",function(a){var i="boundingBox",h="visible",g="click",l="renderUI",f="bindUI",m="syncUI",k="button",d="buttonsChange",c=a.ClassNameManager.getClassName,b=a.Node.create,e=a.Lang;function j(n){a.after(this._renderUIButtons,this,l);a.after(this._bindUIButtons,this,f);a.after(this._syncUIButtons,this,m);}j.BUTTON_CLASS_NAMES={buttons:a.Widget.getClassName("buttons"),wrapper:a.Widget.getClassName(k,"wrapper"),button:c(k),content:c(k,"content"),icon:c(k,"icon")};j.ATTRS={buttons:{value:[{type:"close"}],validator:e.isArray}};j.DEFAULT_BUTTONS={"close":{section:a.WidgetStdMod.HEADER,value:'<span class="'+j.BUTTON_CLASS_NAMES.icon+'" />',classNames:c(k,"close"),action:function(n){n.preventDefault();this.hide();}}};j.TEMPLATES={wrapper:'<span class="'+j.BUTTON_CLASS_NAMES.wrapper+'"></span>',defaultTemplate:'<a href="{href}" class="'+j.BUTTON_CLASS_NAMES.button+'">'+'<span class="'+j.BUTTON_CLASS_NAMES.content+'">{value}</span></a>'};j.prototype={_hdBtnNode:null,_ftBtnNode:null,_buttonsArray:null,_uiHandlesButtons:null,_renderUIButtons:function(){this.get(i).addClass(j.BUTTON_CLASS_NAMES.buttons);this._buttonsArray=[];this._removeButtonNode(true,true);this._hdBtnNode=b(j.TEMPLATES.wrapper);this._ftBtnNode=b(j.TEMPLATES.wrapper);this._createButtons();},_bindUIButtons:function(){var n=this;this._uiHandlesButtons=[];a.each(this._buttonsArray,function(p){n._attachEventsToButton(p);});this.after(d,this._afterButtonsChange);},_syncUIButtons:function(){if(this._hdBtnNode.hasChildNodes()){this.setStdModContent(a.WidgetStdMod.HEADER,this._hdBtnNode,a.WidgetStdMod.AFTER);}if(this._ftBtnNode.hasChildNodes()){this.setStdModContent(a.WidgetStdMod.FOOTER,this._ftBtnNode,a.WidgetStdMod.AFTER);}},addButton:function(n){var o=this.get("buttons");o.push(n);this.set("buttons",o);},_createButtons:function(){var t=a.WidgetStdMod.HEADER,s=a.WidgetStdMod.FOOTER,q=j.TEMPLATES,p=j.DEFAULT_BUTTONS,n=this._hdBtnNode,r=this._ftBtnNode,o=this._buttonsArray;a.each(this.get("buttons"),function(u){var v,w,x;if(!e.isObject(u)){return;}if(u.type&&p[u.type]){u=p[u.type];}v=e.sub(q.defaultTemplate,{href:u.href||"#",value:u.value});w=b(v);x=a.Array(u.classNames);a.Array.each(x,w.addClass,w);o.push({node:w,cb:u.action});switch(u.section){case t:n.appendChild(w);break;case s:r.appendChild(w);break;default:}});return true;},_attachEventsToButton:function(n){this._uiHandlesButtons.push(n.node.after(g,n.cb,this));},_afterButtonsChange:function(n){this._detachEventsFromButtons();this._renderUIButtons();this._bindUIButtons();this._syncUIButtons();},_removeButtonNode:function(n,o){if(n&&this._hdBtnNode&&this._hdBtnNode.hasChildNodes()){this._hdBtnNode.remove();this._hdBtnNode=null;}if(o&&this._ftBtnNode&&this._ftBtnNode.hasChildNodes()){this._ftBtnNode.remove();this._ftBtnNode=null;}},_detachEventsFromButtons:function(){a.each(this._uiHandlesButtons,function(n){n.detach();});this._uiHandlesButtons=[];}};a.WidgetButtons=j;},"@VERSION@",{requires:["base-build","widget","widget-stdmod"]});