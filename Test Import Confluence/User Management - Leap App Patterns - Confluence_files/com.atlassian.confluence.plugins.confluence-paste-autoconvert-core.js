WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-core', location = 'js/autoconvert/tinymce-autoconvert.js' */
define("confluence-paste/autoconvert/tinymce-autoconvert",["tinymce","ajs","jquery","document","confluence/api/constants"],function(k,h,e,n,o){function l(a){for(var d=l.options,a=d.parser[d.strictMode?"strict":"loose"].exec(a),c={},b=14;b--;)c[d.key[b]]=a[b]||"";c[d.q.name]={};c[d.key[12]].replace(d.q.parser,function(a,b,e){b&&(c[d.q.name][b]=e)});return c}var f=function(a){a.onUndo.add(this.cleanLinks);this.editor=a;this.weightedHandlers=[];this.handlers=[]};f.prototype={addHandler:function(a,d){this.weightedHandlers.push({handler:a,
weight:d||0});this.weightedHandlers.sort(function(a,b){return a.weight-b.weight});this.handlers=[];for(var c=this.weightedHandlers.length,b=0;b<c;b++)this.handlers.push(this.weightedHandlers[b].handler)},cleanLinks:function(a){e("a.atlassian-autoconvert",a.getDoc()).removeClass("atlassian-autoconvert");return!0},callHandlers:function(a){function d(a){if(a&&(1!==a.length||!a.attr("href")))return b(a);if(a)j=a,g=0,m=l(j.attr("href")),c(i.handlers[g],m,j);else if(g++,g<i.handlers.length)c(i.handlers[g],
m,j);else return b(j)}function c(a,b,c){var e=d,f;f=setTimeout(function(){h.log("Autoconvert: Callback #"+g+" failed to call continuation in time. If there is no subsequent log, the handler is improperly implemented and should be uninstalled.");e=function(){h.log("Autoconvert: Callback #"+g+" did eventualy return. Probably a slow async call.")};d()},k.plugins.Autoconvert.callbackTimeout);a(b,c,function(){var a=g;clearTimeout(f);e.apply(i,arguments);e=function(){h.log("Autoconvert: Callback #"+a+" called the continuation multiple times.")}})}
function b(a){i.editor.undoManager.beforeChange();var b=i.editor.selection,c=i.editor.selection.getBookmark();f.replaceWith(a);b.moveToBookmark(c);i.editor.undoManager.add()}var g=0,i=this,f=e(a),j=e(a).clone(),a=j.attr("href"),m=l(a.replace(/^(.*?\/\/[^/]*?\/.*?)(@)/,"$1%40"));0!==this.handlers.length&&c(this.handlers[0],m,j)}};f.callbackTimeout=5E3;f.convertMacroToDom=function(a,d,c){a={macro:a,contentId:h.Meta.get("content-id")};e.ajax({type:"POST",contentType:"application/json; charset=utf-8",
url:o.CONTEXT_PATH+"/rest/tinymce/1/macro/placeholder",data:e.toJSON(a),dataType:"text",success:d,error:c,timeout:45E3})};f.convertMacroToDomViaWikiText=function(a,d,c){var b=["{",a.name],g=!0;a.defaultParameterValue&&(b.push(":",a.defaultParameterValue),g=!1);for(var i in a.params)g?(b.push(":"),g=!1):b.push("|"),b.push(i,"=",a.params[i]);b.push("}");f.getHtmlFromWikiMarkup(b.join(""),function(a){d(e(a)[0])},function(){c()})};f.getHtmlFromWikiMarkup=function(a,d,c){a={wiki:a,entityId:h.Meta.get("content-id"),
spaceKey:h.Meta.get("space-key")};e.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:o.CONTEXT_PATH+"/rest/tinymce/1/wikixhtmlconverter",data:e.toJSON(a),dataType:"text",success:d,error:c,timeout:45E3})};l.options={strictMode:!1,key:"source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};return{autoConverter:f,plugin:{init:function(a){function d(b,d,f){b=e(f.node).children("a");1===b.length&&("A"===b[0].tagName&&b.text()===b.attr("href"))&&(b.attr("class","atlassian-autoconvert"),setTimeout(function(){var b=e("a.atlassian-autoconvert",e(a.selection.getNode().ownerDocument)).removeClass("atlassian-autoconvert");
c.callHandlers(b)},0))}var c=new f(a);k.plugins.Autoconvert.autoConvert=c;a.onInit.add(function(){e(n).bind("postPaste",d);a.addCommand("addAutoconverter",function(a,d){c.addHandler(d)})});a.onRemove.add(function(){e(n).unbind("postPaste",d)})},getInfo:function(){return{longname:"Atlassian Autoconvert",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/tinymce-autoconvert",function(k){var h=require("tinymce");h.plugins.Autoconvert=k.autoConverter;h.create("tinymce.plugins.AutoconvertPlugin",k.plugin);h.PluginManager.add("autoconvert",h.plugins.AutoconvertPlugin)});
}catch(e){WRMCB(e)};