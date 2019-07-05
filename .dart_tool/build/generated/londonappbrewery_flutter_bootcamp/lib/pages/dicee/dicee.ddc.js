define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/random_string/random_string'], function(dart_sdk, material, animation, random_string) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__flat_button = material.src__material__flat_button;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__image = animation.src__widgets__image;
  const random_string$ = random_string.random_string;
  const pages__dicee__dicee = Object.create(dart.library);
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
  pages__dicee__dicee.DicePage = class DicePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.red, appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Dicee", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 16, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), backgroundColor: src__material__colors.Colors.red, $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 15, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 9, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 9, name: "backgroundColor"})))], src__widgets__widget_inspector._Location))})))}), body: new pages__dicee__dicee.Dicee.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 13, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 7, name: "backgroundColor"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 7, name: "appBar"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__dicee__dicee.DicePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__dicee__dicee.DicePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__dicee__dicee.DicePage.prototype;
  dart.addTypeTests(pages__dicee__dicee.DicePage);
  dart.setMethodSignature(pages__dicee__dicee.DicePage, () => ({
    __proto__: dart.getMethods(pages__dicee__dicee.DicePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__dicee__dicee.DicePage, "package:londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart");
  pages__dicee__dicee.Dicee = class Dicee extends src__widgets__framework.StatefulWidget {
    createState() {
      return new pages__dicee__dicee._DiceeState.new();
    }
  };
  (pages__dicee__dicee.Dicee.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__dicee__dicee.Dicee.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__dicee__dicee.Dicee.prototype;
  dart.addTypeTests(pages__dicee__dicee.Dicee);
  dart.setMethodSignature(pages__dicee__dicee.Dicee, () => ({
    __proto__: dart.getMethods(pages__dicee__dicee.Dicee.__proto__),
    createState: dart.fnType(pages__dicee__dicee._DiceeState, [])
  }));
  dart.setLibraryUri(pages__dicee__dicee.Dicee, "package:londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart");
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
  pages__dicee__dicee._DiceeState = class _DiceeState extends src__widgets__framework.State$(pages__dicee__dicee.Dicee) {
    rollDice() {
      this.setState(dart.fn(() => {
        this.dice1 = random_string$.randomBetween(1, 6);
        this.dice2 = random_string$.randomBetween(1, 6);
      }, VoidToNull()));
    }
    build(context) {
      return new src__widgets__basic.Center.new({child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Padding.new({padding: const$13 || (const$13 = dart.const(new src__painting__edge_insets.EdgeInsets.all(16.0))), child: new src__material__flat_button.FlatButton.new({child: new src__widgets__image.Image.asset("images/dicee/dice" + dart.str(this.dice1) + ".png", {$creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 30, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 67, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.bind(this, 'rollDice'), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 22, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 17, name: "child"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 15, name: "padding"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Padding.new({padding: const$28 || (const$28 = dart.const(new src__painting__edge_insets.EdgeInsets.all(16.0))), child: new src__material__flat_button.FlatButton.new({child: new src__widgets__image.Image.asset("images/dicee/dice" + dart.str(this.dice2) + ".png", {$creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 30, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 67, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.bind(this, 'rollDice'), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 22, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 17, name: "child"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 15, name: "padding"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 11, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 14, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__dicee__dicee._DiceeState.new = function() {
    this.dice1 = random_string$.randomBetween(1, 6);
    this.dice2 = random_string$.randomBetween(1, 6);
    pages__dicee__dicee._DiceeState.__proto__.new.call(this);
    ;
  }).prototype = pages__dicee__dicee._DiceeState.prototype;
  dart.addTypeTests(pages__dicee__dicee._DiceeState);
  dart.setMethodSignature(pages__dicee__dicee._DiceeState, () => ({
    __proto__: dart.getMethods(pages__dicee__dicee._DiceeState.__proto__),
    rollDice: dart.fnType(dart.dynamic, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__dicee__dicee._DiceeState, "package:londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart");
  dart.setFieldSignature(pages__dicee__dicee._DiceeState, () => ({
    __proto__: dart.getFields(pages__dicee__dicee._DiceeState.__proto__),
    dice1: dart.fieldType(core.int),
    dice2: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee", {
    "package:londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart": pages__dicee__dicee
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/dicee/dicee.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,4DACmB,0CAChB,8CACC,gCAAK,ifACY,ooBAEpB;IAEV;;;;;;EACF;;;;;;;;;AAI+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAOI,cAAS;QACF,aAAQ,6BAA4B,GAAG;QACvC,aAAQ,6BAA4B,GAAG;;IAEhD;UAG0B;AACxB,YAAO,4CACE,2CACa,sBAChB,6CACS,8CACU,iFAAe,gBACvB,sDACQ,oCAAM,AAA+B,+BAAX,cAAM,4fAClC,krDAIjB,6CACS,8CACU,iFAAe,gBACvB,sDACQ,oCAAM,AAA+B,+BAAX,cAAM,4fAClC;IAOzB;;;IApCI,aAAQ,6BAA4B,GAAG;IACvC,aAAQ,6BAA4B,GAAG;;;EAoC7C","file":"dicee.ddc.js"}');
  // Exports:
  return {
    pages__dicee__dicee: pages__dicee__dicee
  };
});

//# sourceMappingURL=dicee.ddc.js.map
