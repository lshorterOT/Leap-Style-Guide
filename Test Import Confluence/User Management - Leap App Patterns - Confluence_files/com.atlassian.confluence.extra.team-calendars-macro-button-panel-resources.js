WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:macro-button-panel-resources', location = 'com/atlassian/confluence/extra/calendar3/js/calendar-macro-button-panel.js' */
(function(a){AJS.bind("init.rte",function(){var b={initViewButtons:function(){a.each(b.getButtonIdToViewMap(),function(d,c){AJS.Confluence.PropertyPanel.Macro.registerButtonHandler(d,function(g,f){var h=a(f);AJS.Rte.getEditor().selection.select(h[0]);AJS.Rte.BookmarkManager.storeBookmark();tinymce.confluence.MacroUtils.insertMacro({contentId:Confluence.Editor.getContentId(),macro:{name:b.getMacroName(h),params:a.extend(b.parseMacroParams(h),{defaultView:c}),defaultParameterValue:"",body:""}})})})},initAddButton:function(){AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("add-subcalendar",function(d,c){var f=a(c);Confluence.TeamCalendars.Dialogs.getAddDialogForMacro({name:b.getMacroName(f),params:b.parseMacroParams(f),defaultParameterValue:"",body:""})})},parseMacroParams:function(f){var c=f.attr("data-macro-parameters")||"",d=c.split("|"),e={};if(d){a.each(d,function(h,g){var i=g.split("=",2);if(i.length>0){e[i[0]]=i.length>1?i[1]:""}})}return e},getMacroName:function(c){return c.attr("data-macro-name")},getButtonIdToViewMap:function(){return{"calendar-view-month":"month","calendar-view-week":"week","calendar-view-list":"list","calendar-view-upcoming":"upcoming","calendar-view-timeline":"timeline"}},initViewButtonHighlight:function(){AJS.bind("created.property-panel",function(d,c){var f=b.parseMacroParams(a(c.anchor))["defaultView"]||"month";if(f==="upcoming"){f="list"}a(".macro-property-panel-calendar-view-"+f,c.panel).addClass("selected")})}};b.initViewButtons();b.initAddButton();b.initViewButtonHighlight()})})(jQuery);
}catch(e){WRMCB(e)};