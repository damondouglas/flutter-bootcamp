define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/londonappbrewery_flutter_bootcamp/pages/quiz/service', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, material, animation, service, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__flat_button = material.src__material__flat_button;
  const src__material__dialog = material.src__material__dialog;
  const src__material__icons = material.src__material__icons;
  const src__widgets__safe_area = animation.src__widgets__safe_area;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__icon = animation.src__widgets__icon;
  const pages__quiz__service = service.pages__quiz__service;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const pages__quiz__quiz = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let boolTo_Score = () => (boolTo_Score = dart.constFn(dart.fnType(pages__quiz__quiz._Score, [core.bool])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(src__material__dialog.AlertDialog, [src__widgets__framework.BuildContext])))();
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
  pages__quiz__quiz.Quizzler = class Quizzler extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.grey.shade900, body: new src__widgets__safe_area.SafeArea.new({child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 10.0}), child: new pages__quiz__quiz.QuizPage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 18, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 16, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 11, name: "padding"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 13, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 7, name: "backgroundColor"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__quiz__quiz.Quizzler.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__quiz__quiz.Quizzler.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__quiz__quiz.Quizzler.prototype;
  dart.addTypeTests(pages__quiz__quiz.Quizzler);
  dart.setMethodSignature(pages__quiz__quiz.Quizzler, () => ({
    __proto__: dart.getMethods(pages__quiz__quiz.Quizzler.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__quiz__quiz.Quizzler, "package:londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart");
  pages__quiz__quiz.QuizPage = class QuizPage extends src__widgets__framework.StatefulWidget {
    createState() {
      return new pages__quiz__quiz._QuizPageState.new();
    }
  };
  (pages__quiz__quiz.QuizPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__quiz__quiz.QuizPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__quiz__quiz.QuizPage.prototype;
  dart.addTypeTests(pages__quiz__quiz.QuizPage);
  dart.setMethodSignature(pages__quiz__quiz.QuizPage, () => ({
    __proto__: dart.getMethods(pages__quiz__quiz.QuizPage.__proto__),
    createState: dart.fnType(pages__quiz__quiz._QuizPageState, [])
  }));
  dart.setLibraryUri(pages__quiz__quiz.QuizPage, "package:londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart");
  const _bank = dart.privateName(pages__quiz__quiz, "_bank");
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
  const _showDialog = dart.privateName(pages__quiz__quiz, "_showDialog");
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
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  pages__quiz__quiz._QuizPageState = class _QuizPageState extends src__widgets__framework.State$(pages__quiz__quiz.QuizPage) {
    build(context) {
      return new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 5, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.all(10.0), child: new src__widgets__basic.Center.new({child: dart.test(this[_bank].isFinished) ? new src__widgets__text.Text.new("", {$creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 21, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 26, name: "data"})))], src__widgets__widget_inspector._Location))})))}) : this[_bank].current.display(context), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 18, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 13, name: "padding"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 9, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 11, name: "flex"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.all(15.0), child: new src__material__flat_button.FlatButton.new({textColor: src__material__colors.Colors.white, color: src__material__colors.Colors.green, child: new src__widgets__text.Text.new("True", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 22, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 17, name: "data"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                  this.setState(dart.fn(() => {
                    this[_bank].answer(true);
                    this[_bank].moveNext();
                    this[_showDialog](context);
                  }, VoidToNull()));
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 15, name: "textColor"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 15, name: "color"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 15, name: "child"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 18, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 13, name: "padding"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 9, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.all(15.0), child: new src__material__flat_button.FlatButton.new({color: src__material__colors.Colors.red, child: new src__widgets__text.Text.new("False", {style: new src__painting__text_style.TextStyle.new({fontSize: 20.0, color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 22, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 17, name: "data"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                  this.setState(dart.fn(() => {
                    this[_bank].answer(false);
                    this[_bank].moveNext();
                    this[_showDialog](context);
                  }, VoidToNull()));
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 15, name: "color"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 15, name: "child"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 18, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 13, name: "padding"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 9, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Row.new({children: this[_bank].scores[$map](pages__quiz__quiz._Score, dart.fn(score => new pages__quiz__quiz._Score.new(score, {$creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 53, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 60, name: "correct"})))], src__widgets__widget_inspector._Location))})))}), boolTo_Score()))[$toList](), $creationLocationd_0dea112b090073317d4: const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 9, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$63 || (const$63 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$68 || (const$68 = dart.constList([const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 7, name: "mainAxisAlignment"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 7, name: "crossAxisAlignment"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_showDialog](context) {
      if (dart.test(this[_bank].isFinished)) {
        src__material__dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new src__material__dialog.AlertDialog.new({backgroundColor: src__material__colors.Colors.yellow, title: new src__widgets__text.Text.new("Finished!", {textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 22, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$72 || (const$72 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 17, name: "data"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 17, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), content: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceAround, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new pages__quiz__quiz._Score.new(true, {$creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 25, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 32, name: "correct"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(dart.str(this[_bank].correct), {$creationLocationd_0dea112b090073317d4: const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 25, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$78 || (const$78 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 53, name: "data"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 28, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$81 || (const$81 = dart.constList([const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 19, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new pages__quiz__quiz._Score.new(false, {$creationLocationd_0dea112b090073317d4: const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 130, column: 25, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$87 || (const$87 = dart.constList([const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 130, column: 32, name: "correct"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(dart.str(this[_bank].wrong), {$creationLocationd_0dea112b090073317d4: const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 25, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$90 || (const$90 = dart.constList([const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 51, name: "data"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 28, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$93 || (const$93 = dart.constList([const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 19, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$96 || (const$96 = dart.constList([const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 24, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$100 || (const$100 = dart.constList([const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 17, name: "mainAxisAlignment"}))), const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), actions: JSArrayOfWidget().of([new src__material__flat_button.FlatButton.new({onPressed: dart.fn(() => {
                  this.setState(dart.fn(() => {
                    this[_bank].reset();
                    src__widgets__navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()));
                }, VoidToNull()), child: new src__widgets__text.Text.new("RESET", {$creationLocationd_0dea112b090073317d4: const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 26, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$103 || (const$103 = dart.constList([const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 31, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 17, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$107 || (const$107 = dart.constList([const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 19, name: "onPressed"}))), const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 20, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$113 || (const$113 = dart.constList([const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 15, name: "backgroundColor"}))), const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 15, name: "title"}))), const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 15, name: "content"}))), const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 15, name: "actions"})))], src__widgets__widget_inspector._Location))})))}), BuildContextToAlertDialog())});
      }
    }
  };
  (pages__quiz__quiz._QuizPageState.new = function() {
    this[_bank] = new pages__quiz__service.Bank.new();
    pages__quiz__quiz._QuizPageState.__proto__.new.call(this);
    this[_bank].reset();
    this[_bank].moveNext();
  }).prototype = pages__quiz__quiz._QuizPageState.prototype;
  dart.addTypeTests(pages__quiz__quiz._QuizPageState);
  dart.setMethodSignature(pages__quiz__quiz._QuizPageState, () => ({
    __proto__: dart.getMethods(pages__quiz__quiz._QuizPageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_showDialog]: dart.fnType(dart.void, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__quiz__quiz._QuizPageState, "package:londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart");
  dart.setFieldSignature(pages__quiz__quiz._QuizPageState, () => ({
    __proto__: dart.getFields(pages__quiz__quiz._QuizPageState.__proto__),
    [_bank]: dart.fieldType(pages__quiz__service.Bank)
  }));
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  pages__quiz__quiz._Score = class _Score extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__icon.Icon.new(dart.test(this.correct) ? src__material__icons.Icons.check : src__material__icons.Icons.close, {color: dart.test(this.correct) ? src__material__colors.Colors.green : src__material__colors.Colors.red, $creationLocationd_0dea112b090073317d4: const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 159, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart", parameterLocations: const$117 || (const$117 = dart.constList([const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 160, column: 15, name: "icon"}))), const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 7, name: "color"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__quiz__quiz._Score.new = function(correct, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.correct = correct;
    pages__quiz__quiz._Score.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__quiz__quiz._Score.prototype;
  dart.addTypeTests(pages__quiz__quiz._Score);
  dart.setMethodSignature(pages__quiz__quiz._Score, () => ({
    __proto__: dart.getMethods(pages__quiz__quiz._Score.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__quiz__quiz._Score, "package:londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart");
  dart.setFieldSignature(pages__quiz__quiz._Score, () => ({
    __proto__: dart.getFields(pages__quiz__quiz._Score.__proto__),
    correct: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz", {
    "package:londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart": pages__quiz__quiz
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,4DACmB,AAAK,kDACvB,iDACG,8CACe,iEAAsB,eACnC;IAIf;;;;;;EACF;;;;;;;;;AAIkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,wDACgC,yEACE,2DACrB,sBAChB,4CACQ,UACC,8CACe,8CAAI,cACjB,qDACO,AAAM,0BACZ,gCAAK,keACA,AAAM,AAAQ,4BAAQ,OAAO,spDAI9C,6CACS,8CACe,8CAAI,cACjB,0DACa,2CACJ,2CACP,gCACL,gBACO,oDACS,8CACJ,6mBAGH;kBAET,cAAS;oBACF,AAAM,mBAAO;oBACb,AAAM;oBACX,kBAAY,OAAO;;07DAM7B,6CACS,8CACe,8CAAI,cACjB,sDACS,yCACP,gCACL,iBACO,uDACK,aACI,2oBAGP;kBAET,cAAS;oBACF,AAAM,mBAAO;oBACb,AAAM;oBACX,kBAAY,OAAO;;wzDAM7B,2CAEW,AAAM,AAAO,AAAmC,mDAA/B,QAAM,SAAU,iCAAO,KAAK;IAI9D;kBAE8B;AAC5B,oBAAS,AAAM;QACb,yDACa,OAAO,WACP,QAAc,WACd,4DACmB,4CACjB,gCACL,yBACqB,goBAEd,oDAC8B,8DACnB,sBAChB,kDACS,2CACa,sBAChB,iCAAO,weACP,gCAA4B,SAAf,AAAM,w7CAIzB,kDACS,2CACa,sBAChB,iCAAO,yeACP,gCAA0B,SAAb,AAAM,kjEAMZ,sBACf,0DACa;kBACT,cAAS;oBACF,AAAM;oBACD,AAAY,qCAAT,OAAO;;yCAGjB,gCAAK;;IAM5B;;;IAxHI,cAAQ;AALZ;IACO,AAAM;IACN,AAAM;EACb;;;;;;;;;;;;;;;;;UAiI0B;AACxB,YAAO,2CACL,gBAAgB,mCAAc,oDACvB,gBAAiB,qCAAe;IAE3C;;2CARY;;;AAAZ;;EAAoB","file":"quiz.ddc.js"}');
  // Exports:
  return {
    pages__quiz__quiz: pages__quiz__quiz
  };
});

//# sourceMappingURL=quiz.ddc.js.map
