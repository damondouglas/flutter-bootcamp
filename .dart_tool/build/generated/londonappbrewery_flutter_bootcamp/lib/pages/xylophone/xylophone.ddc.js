define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/howler/howler'], function(dart_sdk, animation, material, ui, howler) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__safe_area = animation.src__widgets__safe_area;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__flat_button = material.src__material__flat_button;
  const ui$ = ui.ui;
  const src__howler_base = howler.src__howler_base;
  const pages__xylophone__xylophone = Object.create(dart.library);
  const $_get = dartx._get;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let intToPad = () => (intToPad = dart.constFn(dart.fnType(pages__xylophone__xylophone.Pad, [core.int])))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui$.Color)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let const$;
  let const$0;
  pages__xylophone__xylophone.XylophonePage = class XylophonePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new pages__xylophone__xylophone.Xylophone.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__xylophone__xylophone.XylophonePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__xylophone__xylophone.XylophonePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__xylophone__xylophone.XylophonePage.prototype;
  dart.addTypeTests(pages__xylophone__xylophone.XylophonePage);
  dart.setMethodSignature(pages__xylophone__xylophone.XylophonePage, () => ({
    __proto__: dart.getMethods(pages__xylophone__xylophone.XylophonePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__xylophone__xylophone.XylophonePage, "package:londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart");
  pages__xylophone__xylophone.Xylophone = class Xylophone extends src__widgets__framework.StatefulWidget {
    createState() {
      return new pages__xylophone__xylophone._XylophoneState.new();
    }
  };
  (pages__xylophone__xylophone.Xylophone.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__xylophone__xylophone.Xylophone.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__xylophone__xylophone.Xylophone.prototype;
  dart.addTypeTests(pages__xylophone__xylophone.Xylophone);
  dart.setMethodSignature(pages__xylophone__xylophone.Xylophone, () => ({
    __proto__: dart.getMethods(pages__xylophone__xylophone.Xylophone.__proto__),
    createState: dart.fnType(pages__xylophone__xylophone._XylophoneState, [])
  }));
  dart.setLibraryUri(pages__xylophone__xylophone.Xylophone, "package:londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart");
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
  pages__xylophone__xylophone._XylophoneState = class _XylophoneState extends src__widgets__framework.State$(pages__xylophone__xylophone.Xylophone) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.black, body: new src__widgets__safe_area.SafeArea.new({child: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: ListOfWidget().generate(7, dart.fn(index => new pages__xylophone__xylophone.Pad.new(dart.notNull(index) + 1, {$creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 57, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 67, name: "index"})))], src__widgets__widget_inspector._Location))})))}), intToPad())), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 16, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 11, name: "crossAxisAlignment"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "backgroundColor"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__xylophone__xylophone._XylophoneState.new = function() {
    pages__xylophone__xylophone._XylophoneState.__proto__.new.call(this);
    ;
  }).prototype = pages__xylophone__xylophone._XylophoneState.prototype;
  dart.addTypeTests(pages__xylophone__xylophone._XylophoneState);
  dart.setMethodSignature(pages__xylophone__xylophone._XylophoneState, () => ({
    __proto__: dart.getMethods(pages__xylophone__xylophone._XylophoneState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__xylophone__xylophone._XylophoneState, "package:londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart");
  const _padColors = dart.privateName(pages__xylophone__xylophone, "_padColors");
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  pages__xylophone__xylophone.Pad = class Pad extends src__widgets__framework.StatelessWidget {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    build(context) {
      return new src__widgets__basic.Expanded.new({child: new src__material__flat_button.FlatButton.new({color: this[_padColors][$_get](dart.notNull(this.index) - 1), onPressed: dart.fn(() => {
            let player = new src__howler_base.Howl.new({src: JSArrayOfString().of(["assets/sounds/xylophone/note" + dart.str(this.index) + ".wav"])});
            player.play();
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 14, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 9, name: "color"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 9, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__xylophone__xylophone.Pad.new = function(index, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_padColors] = JSArrayOfColor().of([src__material__colors.Colors.red, src__material__colors.Colors.orange, src__material__colors.Colors.yellow, src__material__colors.Colors.green, src__material__colors.Colors.teal, src__material__colors.Colors.blue, src__material__colors.Colors.purple]);
    this[index$] = index;
    pages__xylophone__xylophone.Pad.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__xylophone__xylophone.Pad.prototype;
  dart.addTypeTests(pages__xylophone__xylophone.Pad);
  const index$ = Symbol("Pad.index");
  dart.setMethodSignature(pages__xylophone__xylophone.Pad, () => ({
    __proto__: dart.getMethods(pages__xylophone__xylophone.Pad.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__xylophone__xylophone.Pad, "package:londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart");
  dart.setFieldSignature(pages__xylophone__xylophone.Pad, () => ({
    __proto__: dart.getFields(pages__xylophone__xylophone.Pad.__proto__),
    [_padColors]: dart.finalFieldType(core.List$(ui$.Color)),
    index: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone", {
    "package:londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart": pages__xylophone__xylophone
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/xylophone/xylophone.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO;IACT;;;;;;EACF;;;;;;;;;AAImC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,4DACmB,0CAClB,iDACG,wDACkC,2DAC/B,wBAAwB,GAAG,QAAC,SAAU,wCAAU,aAAN,KAAK,IAAG;IAIlE;;;;;EACF;;;;;;;;;;;;;;;;IAcY;;;;;;UAEgB;AACxB,YAAO,8CACE,sDACE,AAAU,wBAAO,aAAN,cAAQ,eACf;AACH,yBAAS,oCAAU,sBAAC,AAAwC,0CAAV,cAAK;YAC7D,AAAO,MAAD;;IAId;;kDAbS;;IAVH,mBAAoB,qBACjB,kCACA,qCACA,qCACA,oCACA,mCACA,mCACA;IAGA;AAAT;;EAAe","file":"xylophone.ddc.js"}');
  // Exports:
  return {
    pages__xylophone__xylophone: pages__xylophone__xylophone
  };
});

//# sourceMappingURL=xylophone.ddc.js.map
