WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-callback.js' */
define("applinks/feature/oauth-callback",["applinks/lib/window","applinks/lib/lodash","applinks/common/preconditions"],function(c,a,d){function b(e){d.nonEmptyString(e,"url");this._url=e}b.prototype.source=function(e){d.hasValue(e,"source");this._source=e;return this};b.prototype.onSuccess=function(e){d.isFunction(e,"onSuccess");this._onSuccess=e;return this};b.prototype.onFailure=function(e){d.isFunction(e,"onFailure");this._onFailure=e;return this};b.prototype.success=function(){this.oauthWindow.close();if(this._onSuccess){this._onSuccess(this._source)}delete c.oauthCallback};b.prototype.failure=function(){this.oauthWindow.close();if(this._onFailure){this._onFailure(this._source)}delete c.oauthCallback};b.prototype.open=function(){c.oauthCallback=this;this.oauthWindow=c.open(this._url,"com_atlassian_applinks_authentication")};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-dance.js' */
define("applinks/feature/oauth-dance",["applinks/lib/console","applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/events","applinks/common/preconditions","applinks/feature/oauth-callback"],function(a,f,c,e,b,h,d){function g(j,i){this._scope=j||e.document;this._selector=i}g.prototype.onSuccess=function(i){h.isFunction(i,"onSuccess");this._onSuccess=i;return this};g.prototype.onFailure=function(i){h.isFunction(i,"onFailure");this._onFailure=i;return this};g.prototype.defaultSuccess=function(){return this.onSuccess(function(){e.location.reload()})};g.prototype.defaultFailure=function(){return this.onFailure(function(){return true})};g.prototype.initialize=function(){var i=this;if(this._selector){f(this._scope).on("click",this._selector,function(j){j.preventDefault();i._open(f(this))})}else{f(this._scope).on("click",function(j){j.preventDefault();i._open(f(this))})}};g.prototype.start=function(){var j=f(this._scope);var i=this._selector?j.find(this._selector):j;this._open(i)};g.prototype._open=function(i){if(i.length!==1){a.warn("Could not trigger OAuth dance, the source is not a single HTML element: "+i);return}var j=i.attr("data-authorisation-uri");if(j){this._onSuccess||this.defaultSuccess();this._onFailure||this.defaultFailure();new d(j).source(i).onSuccess(this._onSuccess).onFailure(this._onFailure).open()}else{a.warn("Could not trigger OAuth dance, data-authorisation-uri missing for: "+i)}};return g});
}catch(e){WRMCB(e)};