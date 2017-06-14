WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:upload-progress-dialog', location = 'js/upload-progress-dialog.js' */
define("confluence-drag-and-drop/upload-progress-dialog",["ajs","plupload","jquery","document","confluence/templates"],function(d,g,b,j,h){var i=function(a){var c=this,e={header:"Attach files",width:600,height:400};this._options=b.extend({},e,a);this.id="drag-and-drop-progress-dialog";this._dialog=new d.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",h.DragAndDrop.uploadFileStatusContainer()).addButton("Done",
function(){c.hide();c.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=this.find(".all-file-uploads-complete");b(j).keydown(function(a){if(27===a.which)return c._$closeButton.prop("disabled")||(c.hide(),c.clearRenderOutput()),d.stopEvent(a)});this._$container=this.find("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=!0;this.hasErrorMessage=!1};i.prototype={show:function(){this._hidden&&
(this._dialog.show(),this._hidden=!1,b.each(this.onShowListeners,function(a,b){b()}));this.hideCloseButton()},hide:function(){this._hidden||(this._dialog.hide(),this._hidden=!0)},isVisible:function(){return!this._hidden},_getProgressElementId:function(a){return"file-"+a+"-progress"},render:function(a){this._workIdsOfFilesInProgress.push(a.workId);var c=this._getProgressElementId(a.workId);this._$container.append(h.DragAndDrop.fileStatus({filename:a.file.name,progressElementId:c,workId:a.workId,showCancel:a.status==
g.QUEUED}));d.progressBars.update("#"+c,0);a.status==g.QUEUED?b("#file-upload-cancel-"+a.workId).click(function(c){return function(d){b.each(c,function(b,c){c(d,a)})}}(this.cancelListeners)):this.renderError(a.workId,a.errorMessage)},renderError:function(a,c){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=b("#file-status-block-"+a),f=d.escapeEntities(e.attr("data-filename"));e.html(aui.message.warning({content:c,titleContent:f}));this.hasErrorMessage=
!0},renderInfo:function(a,c){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=b("#file-status-block-"+a),f=d.escapeEntities(e.attr("data-filename"));e.html(aui.message.info({content:c,titleContent:f}));this.hasErrorMessage=!0},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(a,c,e){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var f=d.DragAndDropUtils.niceSize(c),
g=b("#file-"+a+"-uploaded");g.length?g.text(f):b("#file-upload-progress-text-"+a).html(h.DragAndDrop.uploadFileStatusProgressMessage({fileId:a,uploadedSizeNice:f,totalSizeNice:d.DragAndDropUtils.niceSize(e)}));d.progressBars.update("#"+this._getProgressElementId(a),c/e)},renderComplete:function(a){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);b("#cancel-or-success-placeholder-"+a).html(h.DragAndDrop.uploadFileStatusSuccessIcon())},renderCancelled:function(a){if(-1==
b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);d.progressBars.setIndeterminate("#"+this._getProgressElementId(a));b("#file-upload-progress-text-"+a).html("Cancelled.");b("#cancel-or-success-placeholder-"+a).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[];this.hasErrorMessage=!1},hideCloseButton:function(){this._$closeButton.hide()},showCloseButton:function(){this._$closeButton.show()},
find:function(a){return this._dialog.getCurPanel().page.body.parent().find(a)}};return i});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/upload-progress-dialog","AJS.DragAndDropProgressDialog");
}catch(e){WRMCB(e)};