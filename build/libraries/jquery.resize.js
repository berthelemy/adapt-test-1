!function(){function e(e){e[u]||(e[u]=++m)}function n(){if((new Date).getTime()-z.lastEvent>1500)return o(),!0}function t(){if(!n()){var e=i("resize");if(0===e.length?(o(),v=500,l()):(o(),v=250,l()),e.length>0)for(var t=e,r=0;r<t.length;r++)a(t[r])}}function i(e){var n=[];switch(e){case"resize":for(var t in g)n.push(g[t])}return n}function r(e){return{uniqueMeasurementId:e.outerHeight()+","+e.outerWidth()}}function a(e){var n=r(e.$element);e._resizeData!==undefined&&e._resizeData===n.uniqueMeasurementId||(e._resizeData=n.uniqueMeasurementId,z.lastEvent=(new Date).getTime(),e.$element.trigger("resize"))}function f(){z.lastEvent=(new Date).getTime(),null!==z.interval&&o(),z.interval=setTimeout(t,v)}function l(){null!==z.interval&&o(),z.interval=setTimeout(t,v)}function o(){clearInterval(z.interval),z.interval=null}if(!$.fn.off.elementResizeOriginalOff){s=$.fn.on;$.fn.on=function(){return"resize"!==arguments[0]?$.fn.on.elementResizeOriginalOn.apply(this,_.toArray(arguments)):this[0]===window?$.fn.on.elementResizeOriginalOn.apply(this,_.toArray(arguments)):(h.call(this,(new Date).getTime()),$.fn.on.elementResizeOriginalOn.apply(this,_.toArray(arguments)))},$.fn.on.elementResizeOriginalOn=s;var s=$.fn.off;$.fn.off=function(){return"resize"!==arguments[0]?$.fn.off.elementResizeOriginalOff.apply(this,_.toArray(arguments)):this[0]===window?$.fn.off.elementResizeOriginalOff.apply(this,_.toArray(arguments)):(c.call(this,(new Date).getTime()),$.fn.off.elementResizeOriginalOff.apply(this,_.toArray(arguments)))},$.fn.off.elementResizeOriginalOff=s;var u=$.expando,m=0,g={},h=function(n){e(this);var t=$(this),i=r(t);g[n.guid+"-"+this[u]]={data:n,$element:t,_resizeData:i.uniqueMeasurementId}},c=function(e){try{delete g[e.guid+"-"+this[u]]}catch(n){}},v=250,z={lastEvent:0,interval:null};$("body").on("mousedown mouseup keyup keydown",f),$(window).on("resize",f)}}();