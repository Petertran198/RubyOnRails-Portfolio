/*! 345-34-RELEASE 2019-02-10 */

!function(t){t.TRC=t.TRC||{};var e=function(t){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return e.join("&")},i=function(){return!0},n=function(t,i,n,r){var o=t+"/"+encodeURIComponent(n||TRC.publisherId)+"/log/3"+"/"+i;return r&&(o+="?"+e(r)),o},r=function(e,n){var r,o=new(t.XDomainRequest||t.XMLHttpRequest);return o.open(e,n),o.onload=i,o.onerror=i,o.ontimeout=i,o.onprogress=i,o.withCredentials=!0,o};TRC.TRCLogger={post:function(t,i,o,s){var a=n(t,i,s),c=r("POST",a);c.setRequestHeader&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(e(o))},get:function(t,e,i,o){var s=n(t,e,o,i),a;r("GET",s).send()}}}(window),function(win,doc){win._tfa=win._tfa||[],function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}t.prototype=window.Event.prototype,window.CustomEvent=t}(),win._tfa.eventUtils=win._tfa.eventUtils||{},win._tfa.eventUtils.dispatchEvent=win._tfa.eventUtils.dispatchEvent||function(t,e){"function"==typeof CustomEvent&&document.dispatchEvent(new CustomEvent(t,{detail:e||{}}))},win.TRC=win.TRC||{},TRC.useStorageDetection=TRC.useStorageDetection||!0,TRC.text=TRC.text||{},TRC.text.lsplit=TRC.text.lsplit||function(t,e,i){var n=t.split(e);return n.slice(0,i-1).concat(n.length>=i?n.slice(i-1).join(e):[])},TRC.util=TRC.util||{},TRC.util.jsonParseWithNative=TRC.util.jsonParseWithNative||function(t){try{return JSON.parse(t)}catch(e){return TRC.util.jsonParseWithEval(t)}},TRC.util.jsonParseWithEval=TRC.util.jsonParseWithEval||function(text){try{return eval("("+String(text)+")")}catch(t){throw new Error("JSON parse error - invalid input!")}},TRC.util.safeAddParam=TRC.util.safeAddParam||function(t,e,i){var n,r;i&&e&&t&&(n=encodeURIComponent(t),r=encodeURIComponent(e),i.push(n+"="+r))},win.TRCImpl=win.TRCImpl||{},TRCImpl.global=TRCImpl.global||{},win.__trcError=win.__trcError||function t(){},win.__trcJSONify=win.__trcJSONify||function(t){if(window.JSON&&window.JSON.stringify&&window.TRCImpl&&window.TRCImpl.global["use-native-json-stringify"])return window.JSON.stringify(t);function e(t){return'"'+t.replace(/[\s\S]/g,function(t){switch(t){case'"':return'\\"';case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r"}return t})+'"'}function i(t){for(var e=[],i=0;i<t.length;i++)e[i]=__trcJSONify(t[i]);return e}function n(t){var i=[];for(var n in t)t.hasOwnProperty(n)&&i.push(e(n)+":"+__trcJSONify(t[n]));return i}return t instanceof Array?"["+i(t).join(",")+"]":t instanceof Object?"{"+n(t).join(",")+"}":null===t?"null":"string"==typeof t?e(t):void 0===t?"undefined":t.toString()}}(window,document),function(t,e){var i="taboola global",n="trctestcookie";function r(){for(var t="trc_cookie_storage",e=new Object,i=document.cookie.split(/;\s+/),n=0;n<i.length;n++){var r=TRC.text.lsplit(i[n],"=",2),o=unescape(r[0]),s=unescape(r[1]);if(o==t){for(var a=s.split("|"),c=0;c<a.length;c++){var r=a[c].split("=");e[unescape(r[0])]=unescape(r[1])}break}}function u(){var i=new Array,n,r;for(var o in e)e.hasOwnProperty(o)&&null!=e[o]&&(i[i.length]=escape(o)+"="+escape(e[o]));n=i.length>0?1:-1,r=new Date((new Date).getTime()+365*n*864e5),document.cookie=t+"="+escape(i.join("|"))+";path=/;expires="+r.toUTCString()}return this.getValue=function(t){return e.hasOwnProperty(t)?e[t]:null},this.setValue=function(t,i){e[t]=i,u()},this.removeKey=function(t){delete e[t],u()},this}function o(t){var e=t||{};return this.getValue=function(t){return e[t]?e[t]:null},this.setValue=function(t,i){e[t]=i},this.removeKey=function(t){delete e[t]},this.getData=function(){return e},this}function s(e){return this.getValue=function(i){return t[e+"Storage"].getItem(i)},this.setValue=function(i,n){try{t[e+"Storage"].setItem(i,n)}catch(t){}},this.removeKey=function(i){try{t[e+"Storage"].removeItem(i)}catch(t){}},this}function a(e){var i=t[e+"Storage"],n=(new Date).getTime()+"",r="_taboolaStorageDetection";try{if(i.setItem(r,n),i.getItem(r)==n)return i.removeItem(r),i}catch(t){}return null}function c(e){try{if(t.localStorage instanceof Storage&&TRC.useStorageDetection&&a(e))return new s(e)}catch(t){return null}}var u=function e(){return this.state={},this.getLocalStorageImplementation=function(e,i){if(null!=this.state.privateStorageImpl&&"strict-w3c-storage"!=e)return this.state.privateStorageImpl;var n=t.TRCImpl?t.TRCImpl.global:{};switch(e=e||(n["local-storage-usage"]?n["local-storage-usage"]:"prefer-w3c-storage")){case"strict-w3c-storage":return c("session"===i?"session":"local");case"prefer-w3c-storage":var s=c("local");if(s)return this.state.privateStorageImpl=s;case"prefer-cookies":try{if(this.canWriteCookies())return this.state.privateStorageImpl=new r}catch(t){}default:return this.state.privateStorageImpl=new o}},this.getFirstPartyCookie=function(){if(this.state.firstPartyCookie)return this.state.firstPartyCookie;var t=this.getLocalStorageImplementation();if(t instanceof r||t instanceof o)return this.state.firstPartyCookie=t;try{if(this.canWriteCookies())return this.state.firstPartyCookie=new r}catch(t){}return this.state.firstPartyCookie=new o},this.canWriteCookies=function(){var t;return document.cookie=n+"=ok",t=-1!==document.cookie.indexOf(n),document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t},this.getDummyStorage=function(t){return new o(t)},this.getValue=function(t){return this.getPublisherValue(i,t)},this.storePublisherValue=function(t,e,i){var n;this.isNotAllowedToWriteValue(e,i)||(n=this.buildKeyWithPublisher(t,e),this.getLocalStorageImplementation().setValue(n,i),this.addKeyToStoredKeysList(n))},this.isNotAllowedToWriteValue=function(t,e){return null==e||void 0==e||TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(t)},this.buildKeyWithPublisher=function(t,e){return t+":"+e},this.getPublisherValue=function(t,e){return TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(e)?null:this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(t,e))},this.addKeyToStoredKeysList=function(t){var e=this.getStoredKeysList();-1===e.indexOf(t)&&(e.push(t),this.setStoredKeysList(e))},this.getStoredKeysList=function(){var t=this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(i,"local-storage-keys")),e;try{e=TRC.util.jsonParseWithNative(t)||[]}catch(t){e=[],__trcError("Could not parse local storage keys",t)}return e},this.setStoredKeysList=function(t){var e;try{e=__trcJSONify(t),this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(i,"local-storage-keys"),e)}catch(t){return void __trcError("Could not stringify local storage keys",t)}},this.isAllowedKeyWhenDoNotTrack=function(e){var i,n=(t.TRCImpl&&t.TRCImpl.global||{})["dnt-allowed-keys"]||["session-id","trc_css-isolation"],r;return null!==e&&void 0!==e&&(r=e.split(":")[1]||e,-1!==n.indexOf(r))},this.storeUserId=function(t){this.isNotAllowedToWriteValue("user-id",t)||this.storePublisherValue(i,"user-id",t)},this.getUserIdFirstPartyCookie=function(){return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(i,"user-id"))},this.getSessionDataFirstPartyCookie=function(){var t=this.getStoredKeysList();for(key in t)if(t[key].includes("session-data"))return TRC.tfaPageManager.getLocalStorageImplementation().getValue(t[key])},this.initState=function(){void 0===this.state&&(this.state={}),this.state.privateStorageImpl=null},this.initState(),this};TRC.tfaPageManager=TRC.tfaPageManager||new u}(window,document),function(t,e){var i=TRC.pageManager||TRC.tfaPageManager;function n(t,e,i){var n,r;i&&e&&t&&(n=encodeURIComponent(t),r=encodeURIComponent(e),i.push(n+"="+r))}function r(t,e){t&&e&&(e[t]=!0)}function o(t,e,i){for(var n={},o=0;o<arguments.length;o++)r(arguments[o],n);return Object.keys(n).length>1}TRC.tfaUserId={initialized:!1,userId:null,getUserId:function(){return this.userId},sendUserIdsToTrc:function(t,e,i){var n,r=[];if(o(t,e,i))return TRC.util.safeAddParam("uiref",t,r),TRC.util.safeAddParam("uils",e,r),TRC.util.safeAddParam("uifpc",i,r),(n=new Image).src="//trc.taboola.com/sg/taboola-tfa/1/um/?"+r.join("&"),n},readAndStoreUserId:function(){var t=this.extractUserIdFromReferrer(),e=i.getValue("user-id"),n=i.getUserIdFirstPartyCookie();t&&(this.sendUserIdsToTrc(t,e,n),i.storeUserId(t),n&&i.getFirstPartyCookie().setValue("taboola global:user-id",t)),this.userId=t||e||n},extractUserIdFromReferrer:function(){var t=this.getReferrer();if(t&&t.indexOf("taboola")>-1)return this.getParameterByName("ui",t)},getReferrer:function(){return e.referrer},getParameterByName:function(t,e){if(!e||!t)return null;t=t.replace(/[\[\]]/g,"\\$&");var i,n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},init:function(){this.initialized||(this.readAndStoreUserId(),this.initialized=!0)}},TRC.tfaUserId.init()}(window,document),function(){var t=window.TRC||{},e="_tfa",i,n,r,o=6*60*60*1e3,s="eng_mt",a=17;function c(t,e,i){var n=t&&t.sessionStartTime?t.sessionStartTime+this.getSessionDuration()-e:this.getSessionDuration();n<0&&(n=0),setTimeout(function(){i()},n)}function u(t){return t.ver&&t.ver===this.getDataVersion()}function l(t){return Date.now()-t.sessionStartTime>this.getSessionDuration()}var d=function t(){this.state={}};d.prototype={constructor:d,init:function t(e){var i=Date.now(),n=this.getSessionDataFromStorage();if(this.getIsLocalStorageAvailable())return c.call(this,n,i,e),n&&n.sessionStartTime?this.state=n:(this.state={ver:a,sessionStartTime:i,scrollDepth:0,sessionDepth:[],timeOnSite:0,lastVisibleStartTime:i,numOfTimesMetricsSent:0},this.persistMetricsData()),this},resetStorageMetricData:function e(){var i=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage");this.state={},i.setValue(s,"")},getSessionDataFromState:function t(){return this.state},getSessionDataFromStorage:function e(){var i,n,o;if(i=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),r=!!i,o=(n=i&&i.getValue(s))&&t.util.jsonParseWithNative&&t.util.jsonParseWithNative(n)){if(u.call(this,o)&&!l.call(this,o))return o;this.resetStorageMetricData()}},persistMetricsData:function e(){var i=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),n=this.state;i&&window.__trcJSONify&&i.setValue(s,window.__trcJSONify(n))},persistSpecificMetricsData:function e(i,n){var r=t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),o;r&&window.__trcJSONify&&i&&(o=this.getSessionDataFromStorage())&&(o[i]=n,r.setValue(s,window.__trcJSONify(o)))},updateMetricState:function t(e,i){var n=this.state;e&&(n[e]=i)},getSessionDuration:function t(){return o},getSessionStartTime:function t(){return this.state.sessionStartTime},getScrollDepth:function t(){return this.state.scrollDepth},getTimeOnSite:function t(){return this.state.timeOnSite},getLastVisibleStartTime:function t(){return this.state.lastVisibleStartTime},getNumOfTimesMetricsSent:function t(){return this.state.numOfTimesMetricsSent},getDataVersion:function(){return a},getIsLocalStorageAvailable:function(){return r}},(n=(i=window[e]=window[e]||[]).TEM=i.TEM||{}).ESU=n.ESU||new d}(),function(){var t="_tfa",e;function i(t,e){this.storageUtils.updateMetricState(t,e),this.storageUtils.persistSpecificMetricsData(t,e)}var n=function t(){};n.prototype={constructor:n,init:function t(e){this.storageUtils=e||{},this.initMetricData(this.storageUtils),this.initVisibilityListener()},initMetricData:function t(e){this.timeOnSite=e.getTimeOnSite()||0,this.lastVisibleStartTime=e.getLastVisibleStartTime()||Date.now()},initVisibilityListener:function t(){this.setVisibilityProperties(),document.addEventListener(this.visibilityChangeEventName,this.handleVisibilityChange.bind(this),!1)},setVisibilityProperties:function t(){void 0!==document.hidden?(this.hiddenProp="hidden",this.visibilityChangeEventName="visibilitychange"):void 0!==document.msHidden?(this.hiddenProp="msHidden",this.visibilityChangeEventName="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hiddenProp="webkitHidden",this.visibilityChangeEventName="webkitvisibilitychange")},calcTimeOnSite:function t(){return this.timeOnSite+(Date.now()-this.lastVisibleStartTime)},handleVisibilityChange:function t(){document[this.hiddenProp]?(this.timeOnSite=this.calcTimeOnSite(),i.call(this,"timeOnSite",this.timeOnSite)):(this.lastVisibleStartTime=Date.now(),i.call(this,"lastVisibleStartTime",this.lastVisibleStartTime))},getTimeOnSite:function t(){return this.calcTimeOnSite()}},(e=window[t]=window[t]||[]).TEM=e.TEM||{},e.TEM.TOS=e.TEM.TOS||new n}(document),function(){var t="_tfa",e,i=!1,n;function r(){return void 0==document.body||void 0==document.documentElement?0:(i=!0,Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight))}function o(t,e){this.storageUtils.updateMetricState(t,e),this.storageUtils.persistSpecificMetricsData(t,e)}function s(t,e){var i;return function(){var n=this,r=arguments;clearTimeout(i),i=setTimeout(function(){t.apply(n,r)},e)}}var a=function t(){};a.prototype={constructor:a,init:function t(e){this.storageUtils=e||{},this.maxScrollPercentage=this.storageUtils.getScrollDepth()||0,this.initEventListeners(),this.updateMeasurements(),this.calcMaxScrollPercentage()},getScrollDepth:function t(){return i||this.calcMaxScrollPercentage(),this.maxScrollPercentage},initEventListeners:function t(){window.addEventListener("resize",s(this.onResize.bind(this),100)),window.addEventListener("scroll",s(this.onScroll.bind(this),50))},onResize:function t(){this.updateMeasurements()},onScroll:function t(){this.calcMaxScrollPercentage()},updateMeasurements:function t(){this.winHeight=window.innerHeight,this.docHeight=r()},calcMaxScrollPercentage:function t(){var e=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,n;i||this.updateMeasurements(),(n=0==this.docHeight?0:Math.floor((e+this.winHeight)/this.docHeight*100))>this.maxScrollPercentage&&(this.maxScrollPercentage=n,o.call(this,"scrollDepth",this.maxScrollPercentage))}},(n=(e=window[t]=window[t]||[]).TEM=e.TEM||{}).SCD=n.SCD||new a}(),function(){var t,e,i=window["_tfa"].TEM,n=function(){};n.prototype={constructor:n,init:function(t,e){this.storageUtils=t,this.refreshFromStorage(),document.addEventListener(e,this.handleUnipTfaPush.bind(this))},getKey:function(){return"ssd"},setState:function(t){this.visitedUrls={};for(var e=0;e<t.length;e++)this.visitedUrls[t[e]]=!0},getState:function(){return this.visitedUrls?Object.keys(this.visitedUrls):[]},getMetric:function(){return this.getState().length},persistState:function(){var t="sessionDepth",e=this.getState();this.storageUtils.updateMetricState(t,e),this.storageUtils.persistSpecificMetricsData(t,e)},refreshFromStorage:function(){var t=this.storageUtils.getSessionDataFromStorage(),e;t||(t=this.storageUtils.getSessionDataFromState()),(e=t["sessionDepth"])||(e=[]),this.setState(e)},handleUnipTfaPush:function(t){var e=t.detail.command,i;"event"===e.notify&&"page_view"===e.name&&(i=window.location.href,this.visitedUrls[i]||(this.visitedUrls[i]=!0,this.persistState()))}},i.SSD=i.SSD||new n}(),function(){var t="_tfa",e=window[t]=window[t]||[],i,n=e.TEM=e.TEM||{},r=n.ESU||{},o=n.SCD||{},s=n.SSD||{},a=n.TOS||{},c=1500,u="numOfTimesMetricsSent",l="pre_d_eng_tb",d={SESSION_END:"SESSION_END"},f,h;function g(t,e){var i=a.getTimeOnSite(),n=o.getScrollDepth(),c=s.getMetric();return{notify:"event",name:l,tos:i,scd:n,ssd:c,est:r.getSessionStartTime(),ver:r.getDataVersion(),isls:r.getIsLocalStorageAvailable(),src:t,invt:e}}function m(t,e){var n=g(t,e);i.pageViewAccountIds?p(i.pageViewAccountIds,n):S(n)}function p(t,e){var i=Object.keys(t);i.length>0?i.forEach(function(i){e.id=t[i],S(e)}):S(e)}function S(t){i.push(t)}function v(){clearTimeout(h),n.sendMetrics("se"),r.resetStorageMetricData()}function T(t){var e=r.getSessionDataFromStorage(),i,o;(isNaN(f)||f<0)&&(f=0),(o=e&&e.numOfTimesMetricsSent!==f)?(f=e.numOfTimesMetricsSent,r.updateMetricState(u,f)):(i=++f,r.updateMetricState(u,i),r.persistSpecificMetricsData(u,i),n.sendMetrics("i",t)),w()}function w(){var t=c*Math.pow(2,f);h=setTimeout(function(){T(t)},t)}function y(){f=r.getNumOfTimesMetricsSent()||0,w()}function I(){y()}function C(){n.initialized||(i=e.TUP||{},n.initialized=!0,n.ESU.init(v),n.ESU.getIsLocalStorageAvailable()&&(a.init(r),o.init(r),s.init(r,i.EVENTS.UNIP_TFA_PUSH),n.initSendMetricsTriggers()))}n.init=n.init||C,n.onSessionEndTrigger=n.onSessionEndTrigger||v,n.sendMetrics=n.sendMetrics||m,n.initSendMetricsTriggers=n.initSendMetricsTriggers||I,n.EVENTS=n.EVENTS||d}(),function(){var t=TRC.tfaPageManager||{},e="_tfa",i=window[e]=window[e]||[],n={event:I,subscription:M},r=/(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/,o=["notify","id"],s={name:"en",url:"item-url"},a="script[src$='tfa.js']",c=-1,u={defaultProtocol:"https:",host:"trc.taboola.com",httpMethod:"get",loggerEventName:"unip",logToConsole:!0},l={EMPTY_COMMAND:"EMPTY_COMMAND",MISSING_NOTIFY:"MISSING_NOTIFY",INVALID_NOTIFY:"INVALID_NOTIFY",MISSING_NAME:"MISSING_NAME",INVALID_ID:"INVALID_ID"},d={UNIP_TFA_PUSH:"UNIP_TFA_PUSH",TFA_VALIDATION_ERROR:"TFA_VALIDATION_ERROR"},f={page_view:P};function h(){var t=R();t.initialized&&t.domAccountId&&setTimeout(function(){for(var t=R().asyncQueue;t.length;)N(t.shift())},0)}function g(){var t=m(),e;if(t&&(e=t.src.replace(r,"$3")))return/^\d+$/.test(e)?parseInt(e,10):(D("Value '"+e+"' is invalid for 'id' param in script source url '"+t.src+"'. Only numeric values are allowed."),c)}function m(){for(var t=document.querySelectorAll(a),e,i=0;i<t.length;i++)if((e=t[i]).src.indexOf("/unip/")>0)return e}function p(){var t;return(new Date).getTime()}function S(t){t["ce"]="subscr"}function v(e){var i=t.getSessionDataFirstPartyCookie();void 0!==i&&i&&(e["sd"]=i)}function T(t){try{TRC.tfaUserId.getUserId()&&(t["ui"]=TRC.tfaUserId.getUserId())}catch(e){D("Error while trying to add user-id param, params="+JSON.stringify(t),e)}}function w(t){var e={},i=!1,n;for(var r in t.tim=p(),t)t.hasOwnProperty(r)&&o.indexOf(r)<0&&(e[n=s.hasOwnProperty(r)?s[r]:r]=t[r],i=!0);return T(e),i&&e}function y(t,e){var i=(window.location.protocol||u.defaultProtocol)+"//"+u.host;try{TRC.TRCLogger[u.httpMethod](i,u.loggerEventName,e,t)}catch(i){D("Error while trying to send to server event with id '"+t+"' and params '"+JSON.stringify(e)+"'.",i)}}function I(t){var e=R(),i=t&&t.id||e.domAccountId,n,r;i?i!==c&&(n=w(t),i=parseInt(i,10),r=C(n),f[r]&&f[r](n,i),y(i,n)):e.asyncQueue.push(t)}function C(t){return t[s.name]}function b(t,e){void 0!==t["sourceurl"]&&t["sourceurl"]&&(e["surl"]=t["sourceurl"])}function M(t){var e=R(),i=t&&t.id||e.domAccountId;if(i){if(i!==c){var n=w(t);S(n),v(n),b(t,n),y(parseInt(i,10),n)}}else e.asyncQueue.push(t)}function P(t,e){var i=R();e&&i.pageViewAccountIds&&(i.pageViewAccountIds[e]=parseInt(e,10))}function O(t){return t?t.notify?n.hasOwnProperty(t.notify)?t.name?!(t.hasOwnProperty("id")&&!/^\d+$/.test(t.id))||(E(l.INVALID_ID,t,"Value '"+t.id+"' is invalid for 'id' field in command '"+JSON.stringify(t)+"'. Only numeric values are allowed."),!1):(E(l.MISSING_NAME,t,"Mandatory 'name' field is missing in command '"+JSON.stringify(t)+"'."),!1):(E(l.INVALID_NOTIFY,t,"Value '"+t.notify+"' is invalid for 'notify' field in command '"+JSON.stringify(t)+"'."),!1):(E(l.MISSING_NOTIFY,t,"Mandatory 'notify' field is missing in command '"+JSON.stringify(t)+"'."),!1):(E(l.EMPTY_COMMAND,t,"Command is '"+t+"'."),!1)}function R(){return window&&window[e]&&window[e].TUP||{}}function N(t){var e=R();if(O(t))try{n[t.notify](t),i.eventUtils.dispatchEvent(d.UNIP_TFA_PUSH,{accountId:e.domAccountId,command:t})}catch(e){D("An error occurred while handling command '"+JSON.stringify(t)+"'.",e)}}function E(t,e,n){var r=R();i.eventUtils.dispatchEvent(d.TFA_VALIDATION_ERROR,{accountId:r.domAccountId,errorCode:t,command:e}),D(n)}function D(t,e){u.logToConsole&&_(t,e)}function _(t,e){e?console.log("Taboola Pixel: "+t,e):console.log("Taboola Pixel: "+t)}function U(){var t=i.TUP=i.TUP||{},e=i.TEM||{};t.domAccountId=t.domAccountId||g(),window.TRC=window.TRC||{},t.initialized||(t.push=i.TUP.push||N,t.initialized=!0,t.asyncQueue=[],t.EVENTS=d,t.pageViewAccountIds={},e&&e.init&&e.init()),h()}U()}(),function(t,e){var i="_tfa",n={orderid:"orderid",currency:"currency",revenue:"revenue",quantity:"quantity",name:"name",attributionGroup:"attributionGroup"},r={type:"marking-type"},o=(t.location.protocol.match(/http/)?t.location.protocol:"http:")+"//trc.taboola.com/{$publishreId}log/3/{$logType}?",s=/(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,a="unip/",c=[],u=[],l="http:";function d(t){var e;switch(t.notify){case"action":e=c;break;case"mark":e=u;break;case"event":case"subscription":e=queue.TUP;break;default:return}e&&e.push(t)}function f(){return TRC&&TRC.tfaUserId&&TRC.tfaUserId.getUserId()?"&ui="+encodeURIComponent(TRC.tfaUserId.getUserId()):""}function h(){var t,e,i=y();if(i)for(t=0,e=c.length;t<e;t++)p(m(o,{$publishreId:i?i+"/":"",$logType:"action"})+"tim="+escape(v())+"&item-url="+escape(S())+I(n,c.shift())+T()+f())}function g(){var t,e,i=y();if(i)for(t=0,e=u.length;t<e;t++)p(m(o,{$publishreId:i?i+"/":"",$logType:"mark"})+"tim="+escape(v())+"&item-url="+escape(S())+I(r,u.shift())+T()+f())}function m(t,e){return t.replace(/\{([^{}]*)\}/g,function(t,i){var n=e[i];return"string"==typeof n||"number"==typeof n?n:t})}function p(t){var e;(new Image).src=t}function S(){return t.location.href}function v(){var t=new Date,e=t.getHours(),i=t.getMinutes(),n=t.getSeconds()+t.getMilliseconds()/1e3;return(e<10?"0":"")+e+":"+(i<10?"0":"")+i+":"+(n<10?"0":"")+n.toFixed(3)}function T(){var i=t.location.search,n=e.referrer.match(/(\?\S+)$/g),r="";return r=w(i.replace(/^\?/,"").split(/&/))+(n?w(n[0].replace(/^\?/,"").split(/&/)):"")}function w(t){var e="",i,n,r="trc_";for(i=0,n=t.length;i<n;i++)0==t[i].indexOf(r)&&(e=e+"&"+t[i]);return e}function y(){var t=document.getElementsByTagName("script"),e,i,n="",r;for(e=0,i=t.length;e<i;e++)if(n=(r=t[e].src).replace(s,"$3"),t[e].src&&n!==t[e].src&&n.indexOf(a)<0)return n;return n}function I(t,e){var i,n="";for(i in t)void 0!==e[i]&&(n+="&"+t[i]+"="+e[i]);return n}function C(t){for(var e=0;e<arguments.length;e++)(t=arguments[e])instanceof Object&&d(t);return b(),arguments.length}function b(){h(),g()}function M(){for(;queue.length;)C(queue.shift())}function P(){queue=t[i]=t[i]||[],queue.registered||(queue.push=C,queue.registered=!0,M())}P()}(window,document);