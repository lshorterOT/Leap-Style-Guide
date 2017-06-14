WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/date-autocomplete-help-dialog.js' */
AJS.toInit(function(){if(!(Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat)){return}Confluence.KeyboardShortcuts.Autoformat.push({action:"//",context:"autoformat.autocomplete",description:"Date"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/autocomplete-manager.js' */
(function(d){var f=window.Confluence||{};var e="confluence.date-autocomplete-manager.plugin";f.Editor=f.Editor||{};f.Editor.AutoComplete=f.Editor.AutoComplete||{};var b=f.InlineTasks.Util.KEY,a=f.InlineTasks.DateUtil,c=f.Editor.AutoComplete;c.SETTING_DEFAULT={leadingChar:"",isDataValid:function(g){return false},backWords:0,onBeforeDie:function(){},onAfterStart:function(){},onScroll:function(){}};c.Manager=function(g){this.ed=AJS.Rte.getEditor();this.settings=d.extend({},c.SETTING_DEFAULT,g);this.log=AJS.debug;this.control=null};c.Manager.prototype={start:function(g){AJS.trigger("synchrony.stop",{id:e});this.log("startAutoComplete - Started");var h=d.extend({},this.settings,g);this.control=f.Editor.Autocompleter.Control(this.ed,h);if(!this.control){return false}this.attachEventsToControl();h.onAfterStart&&h.onAfterStart({date:g.date,isTriggerFromOrphan:g.isTriggerFromOrphan?true:false});return true},attachEventsToControl:function(){var j=this,m=j.control,i=j.log,h=j.settings;if(typeof this.settings.onBeforeDie==="function"){var l=this.control.die;this.control.die=function(){j.settings.onBeforeDie.apply(j.control,arguments);if(j.dateInserted()){l.apply(j.control,[true]);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.killed"})}else{l.apply(j.control,arguments)}}}var g=_.bind(_.throttle(j.settings.onScroll,40),this);var k={onBeforeKey:function(n,o){if(n.keyCode!==b.ESCAPE&&n.keyCode!==b.ENTER){j.control&&j.control.getContainer().addClass("isDirty")}if(n.keyCode===b.DOWN||n.keyCode===b.UP||n.keyCode===b.ENTER){tinymce.dom.Event.cancel(n);return false}if(n.keyCode===b.ESCAPE||n.keyCode===b.TAB||n.keyCode===b.BACKSPACE&&!o){i("autoCompleteControl.onBeforeKey - killing autoCompleteControl");this.die(n.keyCode===b.BACKSPACE);return false}return true},onKeyPress:function(q,r){var o=AJS.$.browser.msie?q.keyCode:q.which;if(q.keyCode===b.ENTER){tinymce.dom.Event.cancel(q);return false}var p=String.fromCharCode(o),n=AJS.indexOf(this.settings.endChars,p);if(n>=0){i("autoCompleteControl.onKeyPress - caught autocomplete-closing char - character");m.die()}return true},onAfterKey:function(p,q){var o=d("#autocomplete-trigger",j.control.getContainer()),n=o.text();if(o.length>0&&n!==j.settings.leadingChar){i("after","dying because of: trigger text is modified");j.reset();return false}if(p.keyCode===b.ENTER){if(h.isDataValid(q)){m.update(q)}else{i("autoCompleteControl.onAfterKey - closing autocomplete due to invalid data - "+q);m.die(false)}return false}if(j.dateInserted()&&(q.length>10)&&(!a.parse(q,[a.PATTERN_INSERTING,a.PATTERN_INSERTING_ALTERNATE]))){j.reset();return false}if(p.keyCode===b.SPACE){j.reset();return false}return true},onDeath:function(){j.reset()},onScroll:function(){if(!j.isAlive()){return}g()}};d.extend(m,k)},isAlive:function(){return this.control&&!this.control.dying},reset:function(){if(!this.control){return}this.control.die();this.control=null;AJS.trigger("synchrony.start",{id:e})},dateInserted:function(g){if(g===true){return this.control.getContainer().addClass("hasDateInserted")}else{if(g===false){return this.control.getContainer().removeClass("hasDateInserted")}else{return this.control.getContainer().hasClass("hasDateInserted")}}},dirty:function(g){if(g===true){return this.control.getContainer().addClass("isDirty")}else{return this.control.getContainer().hasClass("isDirty")}},reattach:function(){var g=f.Editor.Autocompleter.Control.removeOrphanedControl();if(g&&g.leadingChar===this.settings.leadingChar){this.reset();return this.start({backWords:1,isTriggerFromOrphan:true})}return false}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/date-autocomplete.js' */
(function(h,e){var r="dateautocomplete",m="tinymce.plugins.DateAutocomplete",p="mceConfInsertDateAutocomplete",k="//";var q="confluence.date-autocomplete.plugin";var s=Confluence.InlineTasks.Util,n=s.NODE_TYPE,d=s.KEY,a=Confluence.InlineTasks.DateUtil,g=null,o=null,b=false,i=e.dom.TreeWalker;var j={initDateAutoCompleteObject:function(t){if(!Confluence.Editor.Autocompleter){Confluence.Editor.Autocompleter=e.confluence.Autocompleter}Confluence.Editor.Autocompleter.Settings[k]={ch:k,endChars:[],update:function(x,w){o.picker.die();var v=(w==a.PATTERN_INSERTING.toLowerCase())?moment():a.guessPartialDate(w,a.PATTERN_INSERTING);v&&a.insertDateIntoCurrentCursor(v,"<time>","",a.PATTERN_LOZENGE,"&nbsp;");if(o.dateInserted()){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.used"})}o.reset();t.undoManager.add();AJS.trigger("synchrony.start",{id:q})}};var u={leadingChar:k,isDataValid:function(v){return !o.dirty()||a.guessPartialDate(v,a.PATTERN_INSERTING)!=null},onBeforeDie:function(){o.picker&&o.picker.die();if(o.control){var v=h(o.control.getContainer());if(!o.dirty()){v.find("#autocomplete-search-text").remove()}}},onAfterStart:function(w){if(w&&w.date){j.fillPlaceholderDateAutoComplete(t,w.date,true);o.dirty(true);o.dateInserted(true)}else{if(w&&!w.isTriggerFromOrphan){j.fillPlaceholderDateAutoComplete(t,a.PATTERN_INSERTING.toLowerCase(),false);o.dateInserted(false)}}var v=o.control.text();var x=a.guessPartialDate(v,a.PATTERN_INSERTING)||moment();j.bindDatePickerToAutoComplete(x)},onScroll:function(){o.picker&&o.picker.placeDatePicker()}};o=new Confluence.Editor.AutoComplete.Manager(u)},activateDateAutocomplete:function(v,u){if(!o.isAlive()){var t=o.start(u);if(!t){g.execCommand("mceInsertContent",false,k,{skip_undo:true});return false}}},bindDatePickerToAutoComplete:function(w){var t=o.control&&o.control.getContainer();if(!t.length){return}t.addClass("date-autocomplete");t.find("#autocomplete-search-text span").addClass("inserting");var v=function(x){o.control.update(x.format(a.PATTERN_INSERTING))},u=j.isInsideTaskAndFirstTimeNode(t);o.picker=a.datepicker.create({$attachTo:t,$positionTo:t,startDate:w,onSelect:v,isSetDueDate:u})},fillPlaceholderDateAutoComplete:function(u,x,w){var t=o.control.getContainer().find("#autocomplete-search-text span");t.text(AJS.Rte.HIDDEN_CHAR+x);var v=u.dom.createRng();v.setStart(t[0].firstChild,1);v.setEnd(t[0].firstChild,x.length+1);w&&v.collapse(false);u.selection.setRng(v)},autocompleteDoubleSlash:function(y,x){var v=x.handlerManager,u=x.ed,w=x.createHandler;var t=w(/(?:\s|\xA0|^|\ufeff|\u200b)(\/)$/,function(){u.execCommand(p,false,{},{skip_undo:true})},true,"#autocomplete");v.registerHandler("/".charCodeAt(0),t)},registerTriggerDoubleSlash:function(t){t.addCommand(p,j.activateDateAutocomplete);AJS.bind("confluence.editor.registerHandlers",this.autocompleteDoubleSlash)},isTimeNode:function(t){return t&&t.nodeType===n.ELEMENT_NODE&&t.tagName.toLowerCase()==="time"},getTimeNodeAtCursor:function(t){if(!t){t=g}var u=t.selection.getNode();if(j.isTimeNode(u)){return u}u=t.selection.getStart();if(j.isTimeNode(u)){return u}u=t.selection.getEnd();if(j.isTimeNode(u)){return u}},makeTimeNodesUnEditable:function(t){t.each(function(){var u=h(this);if(h.trim(u.text())===""){u.remove()}e.isWebKit&&u.remove("br.Apple-interchange-newline");s.addContentEditableIfApplicable(this)})},wrapTimeNodesWithHiddenChar:function(t){t.each(function(){var u=h(this);if(!this.previousSibling||this.previousSibling.nodeType!==n.TEXT_NODE||this.previousSibling.nodeValue===""){u.before(AJS.Rte.HIDDEN_CHAR)}if(!this.nextSibling||this.nextSibling.nodeType!==n.TEXT_NODE||this.previousSibling.nodeValue===""){u.after(AJS.Rte.HIDDEN_CHAR)}})},putCursorAtEdge:function(u,w,t){t=!!t;if(t){if(!w.nextSibling||w.nextSibling.nodeType!==n.TEXT_NODE){h(w).after(u.dom.doc.createTextNode(""))}}else{if(!w.previousSibling||w.previousSibling.nodeType!==n.TEXT_NODE){h(w).before(u.dom.doc.createTextNode(""))}}var v=u.selection.dom.createRng();v.selectNode(t?w.nextSibling:w.previousSibling);v.collapse(t);u.selection.setRng(v)},findFirstTimeNodeInClosestBlock:function(u,z,w){var y=new i(z,u.getBody());var x=z,v=0;do{if(v==1&&j.isTimeNode(z)){return z}var t=w?z.previousSibling:z.nextSibling;if(z!==x&&t&&(u.dom.isBlock(z)||u.dom.isBlock(t))){v++}}while((z=w?y.next():y.prev())&&v<2)},findFirstTimeNodeNearby:function(t,x,u){var w=x;var v=new i(x,t.getBody());do{if(j.isTimeNode(x)){return x}if(t.dom.isBlock(x)||(x!==w&&x.nodeType===n.TEXT_NODE&&x.nodeValue!=="")){return}}while(x=u?v.next():v.prev())},convertInvalidTimeNodeToPlainText:function(t){t.each(function(){var w=h(this);var u=w.attr("datetime");var v=a.parse(u);if(!v){w.before(w.text());w.remove()}})},isInsideTaskAndFirstTimeNode:function(u){var t=h(u),v=t.closest("ul.inline-task-list > li[data-inline-task-id]");if(!v.length){return false}return v.find("time, span.date-autocomplete")[0]===t[0]}};var c={handleRemoveDateLozenge:function(u,A){var z=A.keyCode;if(z!==d.BACKSPACE&&z!==d.DELETE){return}var x=(z===d.DELETE),t=u.selection.getRng(true),v=t.startContainer,w=v;if(v.nodeType==n.TEXT_NODE&&(x?t.startOffset!=v.nodeValue.length:t.startOffset!=0)){return}if(v.nodeType===n.ELEMENT_NODE){if(x){w=(v.childNodes.length===t.startOffset)?v:v.childNodes.item(t.startOffset)}else{w=(t.startOffset===0)?v:v.childNodes.item(t.startOffset-1)}}var y=j.findFirstTimeNodeNearby(u,w,x);y&&u.dom.remove(y)},handleClickingDateLozenge:function(y,B){var v=h(B.target);if(!v.is("time")){return}AJS.trigger("synchrony.stop",{id:q});var t=(v.closest("li[data-inline-task-id]").length)?"task":"page";var w={mode:"editor",context:t};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:w});var E=v.closest("body");var A=function(){AJS.Rte.unbindScroll("date-lozenge-date-picker");z.die();AJS.trigger("synchrony.start",{id:q})};E.one("keydown click",A);var D=function(G){var H=G.format(a.PATTERN_INSIDE_TIME_ELE);var F=G.format(a.PATTERN_LOZENGE);if(H!==v.attr("datetime")){var I={context:t};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.changed",data:I})}v.attr("datetime",H);v.text(F);E.unbind("keydown click",A);AJS.trigger("synchrony.start",{id:q})};var u=a.parse(v.attr("datetime")),x=j.isInsideTaskAndFirstTimeNode(v),z=a.datepicker.create({$attachTo:v,$positionTo:v,startDate:u,onSelect:D,isSetDueDate:x});var C=_.bind(_.throttle(function(){if(z&&AJS.Rte.isAnyPartShown(v)){z.placeDatePicker()}else{A()}},40),this);AJS.Rte.bindScroll("date-lozenge-date-picker",C)},handleTypingDate:function(u,w){var v=w.keyCode;if(v===d.UP||v===d.DOWN||v===d.LEFT||v===d.RIGHT||v===d.HOME||v===d.END||v===d.PAGEDOWN||v===d.PAGEUP||w.metaKey||w.ctrlKey||w.altKey){return}if(o.control&&o.picker){var t=o.control.text();o.picker.setDate(t)}},handleOnLoadContent:function(t){var v=h(t.dom.doc),u=v.find("time");j.makeTimeNodesUnEditable(u);j.wrapTimeNodesWithHiddenChar(u)},handlePostPaste:function(u,t,v){j.convertInvalidTimeNodeToPlainText(h(v.node).find("time"))},handlePostPasteContent:function(v,t,w){var u=h(w.node).find("time");j.makeTimeNodesUnEditable(u)},handlePrePasteContent:function(u,t,v){if(j.getTimeNodeAtCursor(g)){v.content="";return false}},fixWhenUpDownNavOnList:function(u,A){var w=A.keyCode;if(w!==d.UP&&w!==d.DOWN){return}var t=u.selection.getRng(true),v=t.startContainer,x=v,y=w===d.DOWN;if(v.nodeType===n.ELEMENT_NODE){if(y){x=(v.childNodes.length===t.startOffset)?v:v.childNodes.item(t.startOffset)}else{x=(t.startOffset===0)?v:v.childNodes.item(t.startOffset-1)}}var z=j.findFirstTimeNodeInClosestBlock(u,x,y);if(z){j.wrapTimeNodesWithHiddenChar(h(z))}},preventCursorInsideDateLozenge:function(u,t,w){var v=(w.nodeType===n.TEXT_NODE)?w.parentNode:w;if(j.isTimeNode(v)){if(b||u.selection.getRng().startOffset>1){j.putCursorAtEdge(u,v,true)}else{j.putCursorAtEdge(u,v,false)}}},handleUndoRedo:function(){o&&o.reattach()}};var f={init:function(t){j.initDateAutoCompleteObject(t);j.registerTriggerDoubleSlash(t);g=t;t.onContextMenu.add(function(){o.reset()});t.onSetContent.add(c.handleOnLoadContent);t.onClick.add(c.handleClickingDateLozenge);t.onKeyUp.add(c.handleTypingDate);if(e.isWebKit){t.onKeyDown.add(c.fixWhenUpDownNavOnList);t.onInit.add(function(){h(document).bind("postPaste",c.handlePostPasteContent)});t.onRemove.add(function(){h(document).unbind("postPaste",c.handlePostPasteContent)})}t.onKeyUp.add(function(z,B){b=(B.keyCode===d.RIGHT);var y=z.selection.getRng(true);var x=y.commonAncestorContainer;var A=!!x&&x.data;if(!!A&&!AJS.$(x).closest("pre,.text-placeholder").length){var C=String.prototype.slice.apply(A,[-11]);if((B.keyCode>=48&&B.keyCode<=57)||(B.keyCode>=96&&B.keyCode<=105)){var u=/(^| )\d{2}[\/\-]\d{2}[\/\-]\d{4}$/;var w=String.prototype.slice.apply(A,[-10]);if(u.test(A)&&a.parse(w,[a.PATTERN_INSERTING,a.PATTERN_INSERTING_ALTERNATE])){var v=y.commonAncestorContainer;y.setStart(v,y.endOffset-w.length);z.undoManager.add();z.undoManager.beforeChange();z.selection.setRng(y);z.execCommand("mceConfInsertDateAutocomplete",false,{date:w},{skip_undo:true});AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.triggered"})}}}});if(e.isGecko){t.onKeyDown.add(c.handleRemoveDateLozenge);t.onInit.add(function(){h(document).bind("prePaste",c.handlePrePasteContent)});t.onRemove.add(function(){h(document).unbind("prePaste",c.handlePrePasteContent)})}if(e.isWebKit||e.isGecko){t.onNodeChange.add(c.preventCursorInsideDateLozenge)}t.onUndo.add(c.handleUndoRedo);t.onRedo.add(c.handleUndoRedo);t.onInit.add(function(){h(document).bind("postPaste",c.handlePostPaste)});t.onRemove.add(function(){h(document).unbind("postPaste",c.handlePostPaste);AJS.unbind("confluence.editor.registerHandlers",j.autocompleteDoubleSlash)});AJS.bind("editor.remote.change",function(){j.makeTimeNodesUnEditable(h(t.dom.doc).find("time"))})},getInfo:function(){return{longname:"Insert Date Autocomplete",author:"Atlassian",authorurl:"http://www.atlassian.com",version:e.majorVersion+"."+e.minorVersion}}};function l(){e.create(m,f);e.PluginManager.add(r,e.plugins.DateAutocomplete);AJS.Rte.BootstrapManager.addTinyMcePluginInit(function(t){t.plugins+=","+r})}l()})(AJS.$,tinymce);
}catch(e){WRMCB(e)};