WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.editor:search-ms-edge', location = 'tinymce3/plugins/searchreplace/search-ms-edge.js' */
define("confluence-editor/tinymce3/plugins/searchreplace/search-ms-edge",[],function(){function j(a){var c=[];if(a.nodeType===Node.TEXT_NODE)c.push(a);else for(var a=a.childNodes,b=0,d=a.length;b<d;++b)c.push.apply(c,j(a[b]));return c}function n(a){return a.nodeValue.toLowerCase()}return{search:function(a,c,b,d,f){var k=a.getSel(),d=j(d),c=c.replace(/\s/g,"").toLowerCase(),e=d.map(n).join(""),a=a.getRng();a.endContainer.nodeValue&&(a=e.indexOf(a.endContainer.nodeValue.toLowerCase())+a.endOffset,b=
b!==a&&-1!==b?a:b);var a=c,h=f?e.lastIndexOf(a,b-1):e.indexOf(a,b+1);0>h&&!f?h=e.indexOf(a):0===h&&(0===b&&f)&&(h=e.lastIndexOf(a));f=h;if(0>f)return[!1,f];a:{for(var g,i,l,m,b=e=0;b<d.length;b++)if(d[b].nodeType===Node.TEXT_NODE&&(a=f+c.length,!i&&d[b].length+e>=a&&(i=d[b],m=a-e),!g&&d[b].length+e>f&&(g=d[b],l=f-e),e+=d[b].length),g&&i){c={startNode:g,startIndex:l,endNode:i,endIndex:m};break a}c=void 0}g=document.createRange();g.setStart(c.startNode,c.startIndex);g.setEnd(c.endNode,c.endIndex);k.removeAllRanges();
k.addRange(g);g.startContainer.parentNode.scrollIntoView();return[!0,f]}}});
}catch(e){WRMCB(e)};