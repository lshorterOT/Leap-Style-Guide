WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:officeconnector-editor-resources', location = 'javascript/property-panel.js' */
(function(){AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("office-connector-download-file-button",function(n,h){var c=AJS.$(h).attr("data-macro-parameters");var l=c.split("|");var d={};var j;for(j=0;j<l.length;j++){var p=l[j];var g=p.split("=");if(g.length>1){d[g[0]]=g[1]}}var b=AJS.Meta.get("page-id");var q=AJS.Meta.get("content-type");if(!d.space){d.space=AJS.Meta.get("space-key")}addToUrlIfDefined=function(i,r,e){if(i&&r){if(e.charAt(e.length-1)!="?"){e+="&"}e=e+i+"="+encodeURI(r)}return e};var m=AJS.Meta.get("context-path");var f="/plugins/servlet/oc/getattachment?";var a=m+f;a=addToUrlIfDefined("title",d.page,a);a=addToUrlIfDefined("date",d.date,a);a=addToUrlIfDefined("space",d.space,a);a=addToUrlIfDefined("filename",d.name,a);a=addToUrlIfDefined("contextid",b,a);a=addToUrlIfDefined("contexttype",q,a);var o=(AJS.$.browser&&AJS.$.browser.msie)?"_blank":"download-office-attachment";var k=window.open(a,o)})})();
}catch(e){WRMCB(e)};