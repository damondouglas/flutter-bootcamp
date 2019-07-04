define(['dart_sdk', 'packages/flutter_web/material', 'packages/londonappbrewery_flutter_bootcamp/pages/home', 'packages/flutter_web/animation', 'packages/londonappbrewery_flutter_bootcamp/pages/flutter_layouts_challenge/flutter_layouts_challenge', 'packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee', 'packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball', 'packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone', 'packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz'], function(dart_sdk, material, home, animation, flutter_layouts_challenge, dicee, magicball, xylophone, quiz) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const pages__home = home.pages__home;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__binding = animation.src__widgets__binding;
  const pages__flutter_layouts_challenge__flutter_layouts_challenge = flutter_layouts_challenge.pages__flutter_layouts_challenge__flutter_layouts_challenge;
  const pages__dicee__dicee = dicee.pages__dicee__dicee;
  const pages__magicball__magicball = magicball.pages__magicball__magicball;
  const pages__xylophone__xylophone = xylophone.pages__xylophone__xylophone;
  const pages__quiz__quiz = quiz.pages__quiz__quiz;
  const main = Object.create(dart.library);
  let BuildContextToHome = () => (BuildContextToHome = dart.constFn(dart.fnType(pages__home.Home, [src__widgets__framework.BuildContext])))();
  let BuildContextToFlutterLayoutsChallange = () => (BuildContextToFlutterLayoutsChallange = dart.constFn(dart.fnType(pages__flutter_layouts_challenge__flutter_layouts_challenge.FlutterLayoutsChallange, [src__widgets__framework.BuildContext])))();
  let BuildContextToDicePage = () => (BuildContextToDicePage = dart.constFn(dart.fnType(pages__dicee__dicee.DicePage, [src__widgets__framework.BuildContext])))();
  let BuildContextToBallPage = () => (BuildContextToBallPage = dart.constFn(dart.fnType(pages__magicball__magicball.BallPage, [src__widgets__framework.BuildContext])))();
  let BuildContextToXylophonePage = () => (BuildContextToXylophonePage = dart.constFn(dart.fnType(pages__xylophone__xylophone.XylophonePage, [src__widgets__framework.BuildContext])))();
  let BuildContextToQuizzler = () => (BuildContextToQuizzler = dart.constFn(dart.fnType(pages__quiz__quiz.Quizzler, [src__widgets__framework.BuildContext])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])))();
  let IdentityMapOfString$BuildContextToWidget = () => (IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, BuildContextToWidget())))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  main.MainApp = class MainApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, routes: new (IdentityMapOfString$BuildContextToWidget()).from(["/", dart.fn(context => new pages__home.Home.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 27, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToHome()), "/flutter-layouts-challenge", dart.fn(context => new pages__flutter_layouts_challenge__flutter_layouts_challenge.FlutterLayoutsChallange.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 52, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToFlutterLayoutsChallange()), "/dicee", dart.fn(context => new pages__dicee__dicee.DicePage.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 32, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToDicePage()), "/magicball", dart.fn(context => new pages__magicball__magicball.BallPage.new({$creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 36, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$5 || (const$5 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToBallPage()), "/xylophone", dart.fn(context => new pages__xylophone__xylophone.XylophonePage.new({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 36, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToXylophonePage()), "/quiz", dart.fn(context => new pages__quiz__quiz.Quizzler.new({$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 31, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToQuizzler())]), title: "London Appbrewery Flutter Bootcamp", $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "debugShowCheckedModeBanner"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "routes"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 7, name: "title"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MainApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MainApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MainApp.prototype;
  dart.addTypeTests(main.MainApp);
  dart.setMethodSignature(main.MainApp, () => ({
    __proto__: dart.getMethods(main.MainApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MainApp, "package:londonappbrewery_flutter_bootcamp/main.dart");
  let const$16;
  let const$17;
  main.main = function() {
    src__widgets__binding.runApp(new main.MainApp.new({$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 10, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart", parameterLocations: const$16 || (const$16 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/main", {
    "package:londonappbrewery_flutter_bootcamp/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAe4B;AACxB,YAAO,qEACuB,eACpB,uDACN,KAAK,QAAC,WAAY,iYAClB,8BAA8B,QAAC,WAAY,ydAC3C,UAAU,QAAC,WAAY,mZACvB,cAAc,QAAC,WAAY,2ZAC3B,cAAc,QAAC,WAAY,qaAC3B,SAAS,QAAC,WAAY,4ZAEjB;IAEX;;;;;;EACF;;;;;;;;;;IApBE,6BAAO;EACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
