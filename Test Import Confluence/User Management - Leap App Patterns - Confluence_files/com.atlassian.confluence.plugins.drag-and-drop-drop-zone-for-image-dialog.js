WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drop-zone-for-image-dialog', location = 'js/image-dialog-drop-zone.js' */
define("confluence-drag-and-drop/image-dialog-drop-zone","ajs confluence/legacy-editor-global-AVOID-IF-POSSIBLE jquery confluence-drag-and-drop/drag-and-drop-utils confluence/meta confluence/i18n".split(" "),function(b,h,c,d,i,e){return function(){if(i.get("remote-user")){var b=h.ImageDialog.findPanelComponentById("attachments");b?c(b).bind("afterThumbnail",function(b,f){if(!f.find(".image-dialog-drop-zone-container").length){var g=c("<li/>").addClass("attached-image"),a=c("<div/>").addClass("image-dialog-drop-zone-container image-container");
c("<div/>").addClass("drop-zone-image").attr("title",e.getText("dnd.drop.zone.text")).appendTo(a);c("<div/>").addClass("drop-zone-text").text(e.getText("dnd.drop.here")).appendTo(a);a.appendTo(g);f.prepend(g);if(!c.browser.msie){d.bindDragEnter(a[0],function(){a.addClass("drop-zone-on-hover")});d.bindDragOver(a[0],function(){a.addClass("drop-zone-on-hover")});d.bindDragLeave(a[0],function(){a.removeClass("drop-zone-on-hover")})}}}):console.log("Skipping image attachment drop-zone - no Image Dialog attachment panel")}else console.debug("Skipping image attachment drop-zone for anonymous user creating new content")}});
require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/image-dialog-drop-zone",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};