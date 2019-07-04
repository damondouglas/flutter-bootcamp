define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/random_string/random_string'], function(dart_sdk, material, ui, animation, random_string) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__flat_button = material.src__material__flat_button;
  const ui$ = ui.ui;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__safe_area = animation.src__widgets__safe_area;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__image = animation.src__widgets__image;
  const random_string$ = random_string.random_string;
  const pages__magicball__magicball = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
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
  pages__magicball__magicball.BallPage = class BallPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({backgroundColor: new ui$.Color.new(4278207655), title: new src__widgets__text.Text.new("Ask Me Anything", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 16, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 15, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 9, name: "backgroundColor"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 9, name: "title"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__safe_area.SafeArea.new({child: new pages__magicball__magicball.Ball.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 16, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 13, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 7, name: "appBar"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__magicball__magicball.BallPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__magicball__magicball.BallPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__magicball__magicball.BallPage.prototype;
  dart.addTypeTests(pages__magicball__magicball.BallPage);
  dart.setMethodSignature(pages__magicball__magicball.BallPage, () => ({
    __proto__: dart.getMethods(pages__magicball__magicball.BallPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__magicball__magicball.BallPage, "package:londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart");
  pages__magicball__magicball.Ball = class Ball extends src__widgets__framework.StatefulWidget {
    createState() {
      return new pages__magicball__magicball._BallState.new();
    }
  };
  (pages__magicball__magicball.Ball.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__magicball__magicball.Ball.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__magicball__magicball.Ball.prototype;
  dart.addTypeTests(pages__magicball__magicball.Ball);
  dart.setMethodSignature(pages__magicball__magicball.Ball, () => ({
    __proto__: dart.getMethods(pages__magicball__magicball.Ball.__proto__),
    createState: dart.fnType(pages__magicball__magicball._BallState, [])
  }));
  dart.setLibraryUri(pages__magicball__magicball.Ball, "package:londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart");
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
  pages__magicball__magicball._BallState = class _BallState extends src__widgets__framework.State$(pages__magicball__magicball.Ball) {
    ballClicked() {
      this.setState(dart.fn(() => {
        this.ball = random_string$.randomBetween(pages__magicball__magicball._BallState._min, pages__magicball__magicball._BallState._max);
      }, VoidToNull()));
    }
    build(context) {
      return new src__widgets__container.Container.new({color: new ui$.Color.new(4278294011), child: new src__widgets__basic.Center.new({child: new src__material__flat_button.FlatButton.new({child: new src__widgets__image.Image.asset("images/magicball/ball" + dart.str(this.ball) + ".png", {$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 24, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 64, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
              this.ballClicked();
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 16, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 11, name: "child"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 11, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 14, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "color"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__magicball__magicball._BallState.new = function() {
    this.ball = random_string$.randomBetween(pages__magicball__magicball._BallState._min, pages__magicball__magicball._BallState._max);
    pages__magicball__magicball._BallState.__proto__.new.call(this);
    ;
  }).prototype = pages__magicball__magicball._BallState.prototype;
  dart.addTypeTests(pages__magicball__magicball._BallState);
  dart.setMethodSignature(pages__magicball__magicball._BallState, () => ({
    __proto__: dart.getMethods(pages__magicball__magicball._BallState.__proto__),
    ballClicked: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__magicball__magicball._BallState, "package:londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart");
  dart.setFieldSignature(pages__magicball__magicball._BallState, () => ({
    __proto__: dart.getFields(pages__magicball__magicball._BallState.__proto__),
    ball: dart.fieldType(core.int)
  }));
  dart.defineLazy(pages__magicball__magicball._BallState, {
    /*pages__magicball__magicball._BallState._min*/get _min() {
      return 1;
    },
    /*pages__magicball__magicball._BallState._max*/get _max() {
      return 5;
    }
  });
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball", {
    "package:londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart": pages__magicball__magicball
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/magicball/magicball.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,mDACG,wDACW,kBAAM,oBAChB,gCAAK,2lCAER,iDACG;IAGb;;;;;;EACF;;;;;;;;;AAI8B;IAAY;;;;;;EAC1C;;;;;;;;;;;;;;;;;;;;;;;MAQI,cAAS;QACF,YAAO,6BAA4B,6CAAM;;IAElD;UAG0B;AACxB,YAAO,mDACE,kBAAM,oBACN,2CACE,sDACQ,oCAAM,AAAkC,mCAAV,aAAK,0fACrC;cACJ;;IAKf;;;IArBI,YAAO,6BAA4B,6CAAM;;;EAsB/C;;;;;;;;;;;;;MAxBe,2CAAI;YAAG;;MACP,2CAAI;YAAG","file":"magicball.ddc.js"}');
  // Exports:
  return {
    pages__magicball__magicball: pages__magicball__magicball
  };
});

//# sourceMappingURL=magicball.ddc.js.map
