(window.webpackJsonp=window.webpackJsonp||[]).push([["intercom-app"],{"./src/udemy/js/intercom/app.js":function(e,n,a){"use strict";a.r(n),a.d(n,"appModule",function(){return m}),a.d(n,"default",function(){return g});var r=a("./node_modules/angular/angular.js"),t=a.n(r),u=a("./node_modules/angular-intercom/angular-intercom.js"),o=a.n(u),s=a("./src/udemy/js/eu-cookie-message/eu-cookie-message.mobx-store.js"),c=a("./src/udemy/js/utils/ud-config.js"),i=a("./src/udemy/js/utils/ud-me.js"),d=a("./src/udemy/js/utils/ud-render-angular-apps.js"),l=a("./src/udemy/js/utils/ud-request.js"),p={};i.a.id&&Object.assign(p,{email:i.a.email,name:i.a.title,created_at:i.a.created,user_id:i.a.id}),l.a.extraIntercomData&&(Object.assign(p,l.a.extraIntercomData),p.hide_default_launcher=Object(s.b)()||p.hide_default_launcher);var m=t.a.module("intercom/app",[o.a.name]).config(["$intercomProvider",function(e){c.a.features.intercom_chat&&e.asyncLoading(!0).appID(c.a.third_party.intercom.app_id)}]).run(["$intercom",function(e){c.a.features.intercom_chat&&e.boot(p)}]);function g(e,n){Object(d.a)(e,".ud-angular--intercom--app",m,n)}},"./src/udemy/js/utils/ud-render-angular-apps.js":function(e,n,a){"use strict";a.d(n,"a",function(){return o});var r=a("./node_modules/angular/angular.js"),c=a.n(r),t=a("./node_modules/jquery/dist/jquery.js-exposed"),i=a.n(t),u={_udRenderAngularApps:function(e,n,s,a){var r=i()(e);if(!n.match(/^\.ud-angular--[\w-]+--[\w-]+$/))throw new Error("cssSelector should follow the pattern\n            '.ud-angular--{app-name}--{module-name}': received '".concat(n,"'"));var t=r.filter(n).add(r.find(n)).filter(function(e,n){var a=i()(n),r=a.parents('[class^="ud-angular--"], [class*=" ud-angular--"]');return 0===r.length||!!a.hasClass("ud-render-angular-apps--ignore-parents")});0<t.length&&(s=s.run(["$rootScope",function(e){Object.assign(e,a)}]),t.each(function(e,n){var a=i()(n);if(a.hasClass("ud-render-angular-apps--ignore-parents")){var r=["$provide",function(e){e.value("$rootElement",a)}],t=c.a.injector(["ng",r,s.name],!0),u=t.get("$rootScope").$new(!0);t.get("$compile")(n)(u),a.on("remove",function(){u.$destroy()})}else{var o=c.a.bootstrap(n,[s.name],{strictDi:!0});o.invoke(["$rootScope",function(e){a.on("remove",function(){e.$destroy()})}])}}))}};function o(){return u._udRenderAngularApps.apply(u,arguments)}}}]);
//# sourceMappingURL=intercom-app.f28425a696c4e71cd96a.js.map