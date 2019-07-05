define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/londonappbrewery_flutter_bootcamp/home_icons'], function(dart_sdk, material, animation, animation$, home_icons) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__icon_button = material.src__material__icon_button;
  const src__material__colors = material.src__material__colors;
  const src__material__flat_button = material.src__material__flat_button;
  const src__widgets__icon_theme_data = animation.src__widgets__icon_theme_data;
  const src__widgets__text = animation$.src__widgets__text;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const src__widgets__icon = animation$.src__widgets__icon;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__rendering__flex = animation$.src__rendering__flex;
  const src__widgets__navigator = animation$.src__widgets__navigator;
  const home_icons$ = home_icons.home_icons;
  const pages__home = Object.create(dart.library);
  const $open = dartx.open;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
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
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  pages__home.Home = class Home extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({iconTheme: new src__widgets__icon_theme_data.IconThemeData.new(), title: new src__widgets__text.Text.new("London App Brewery Flutter Bootcamp Challenges", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 16, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), actions: JSArrayOfWidget().of([new src__material__icon_button.IconButton.new({onPressed: dart.fn(() => {
                let url = "https://github.com/damondouglas/londonappbrewery-flutter-bootcamp";
                html.window[$open](url, "GitHub");
              }, VoidToNull()), icon: new src__widgets__icon.Icon.new(home_icons$.Home.github_circled, {$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 19, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 35, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), color: src__material__colors.Colors.white, $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 13, name: "onPressed"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, name: "icon"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 13, name: "color"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 15, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 9, name: "iconTheme"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 9, name: "title"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 9, name: "actions"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("1. Flutter Layouts Challenge", {$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/flutter-layouts-challenge");
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 13, name: "child"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 13, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("2. Dicee App", {$creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/dicee");
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 13, name: "child"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("3. Magic 8 Ball", {$creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/magicball");
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "child"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 13, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("4. Xylophone", {$creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/xylophone");
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 13, name: "child"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 13, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__flat_button.FlatButton.new({child: new src__widgets__text.Text.new("5. Quizzler", {$creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/quiz");
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 13, name: "child"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 13, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 13, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 9, name: "crossAxisAlignment"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 7, name: "appBar"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__home.Home.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__home.Home.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__home.Home.prototype;
  dart.addTypeTests(pages__home.Home);
  dart.setMethodSignature(pages__home.Home, () => ({
    __proto__: dart.getMethods(pages__home.Home.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__home.Home, "package:londonappbrewery_flutter_bootcamp/pages/home.dart");
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/pages/home", {
    "package:londonappbrewery_flutter_bootcamp/pages/home.dart": pages__home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,mDACG,kDACK,8DACJ,gCAAK,2gBACK,sBACf,0DACa;AACL,0BACA;gBACJ,AAAO,mBAAK,GAAG,EAAE;sCAEb,gCAAgB,0fACR,+8CAId,wDACmC,yDACrB,sBAChB,sDACS,gCAAK,mgBACD;gBACC,yDAAU,OAAO,EAAE;0nBAGjC,sDACS,gCAAK,mfACD;gBACC,yDAAU,OAAO,EAAE;0nBAGjC,sDACS,gCAAK,sfACD;gBACC,yDAAU,OAAO,EAAE;0nBAGjC,sDACS,gCAAK,mfACD;gBACC,yDAAU,OAAO,EAAE;0nBAGjC,sDACS,gCAAK,kfACD;gBACC,yDAAU,OAAO,EAAE;;IAMzC;;;;;;EACF","file":"home.ddc.js"}');
  // Exports:
  return {
    pages__home: pages__home
  };
});

//# sourceMappingURL=home.ddc.js.map
