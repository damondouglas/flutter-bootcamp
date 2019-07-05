define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material'], function(dart_sdk, animation, ui, animation$, material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const ui$ = ui.ui;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__material__colors = material.src__material__colors;
  const pages__quiz__service = Object.create(dart.library);
  const $add = dartx.add;
  const $clear = dartx.clear;
  const $addAll = dartx.addAll;
  const $shuffle = dartx.shuffle;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $where = dartx.where;
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  let JSArrayOfbool = () => (JSArrayOfbool = dart.constFn(_interceptors.JSArray$(core.bool)))();
  let JSArrayOfQuestionable = () => (JSArrayOfQuestionable = dart.constFn(_interceptors.JSArray$(pages__quiz__service.Questionable)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  pages__quiz__service.Questionable = class Questionable extends core.Object {};
  (pages__quiz__service.Questionable.new = function() {
    ;
  }).prototype = pages__quiz__service.Questionable.prototype;
  dart.addTypeTests(pages__quiz__service.Questionable);
  dart.setLibraryUri(pages__quiz__service.Questionable, "package:londonappbrewery_flutter_bootcamp/pages/quiz/service.dart");
  const _content$ = dart.privateName(pages__quiz__service, "_content");
  const _answer$ = dart.privateName(pages__quiz__service, "_answer");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  const Object_Questionable$ = class Object_Questionable extends core.Object {};
  (Object_Questionable$.new = function() {
  }).prototype = Object_Questionable$.prototype;
  dart.applyMixin(Object_Questionable$, pages__quiz__service.Questionable);
  pages__quiz__service.TextQuestion = class TextQuestion extends Object_Questionable$ {
    display(context) {
      return new src__widgets__text.Text.new(this[_content$], {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({fontSize: 25.0, color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 12, file: "org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/service.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 12, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 7, name: "textAlign"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 7, name: "style"})))], src__widgets__widget_inspector._Location))})))});
    }
    isCorrect(answer) {
      return dart.equals(this[_answer$], answer);
    }
  };
  (pages__quiz__service.TextQuestion.new = function(_content, _answer) {
    this[_content$] = _content;
    this[_answer$] = _answer;
    ;
  }).prototype = pages__quiz__service.TextQuestion.prototype;
  dart.addTypeTests(pages__quiz__service.TextQuestion);
  dart.setMethodSignature(pages__quiz__service.TextQuestion, () => ({
    __proto__: dart.getMethods(pages__quiz__service.TextQuestion.__proto__),
    display: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    isCorrect: dart.fnType(core.bool, [core.bool])
  }));
  dart.setLibraryUri(pages__quiz__service.TextQuestion, "package:londonappbrewery_flutter_bootcamp/pages/quiz/service.dart");
  dart.setFieldSignature(pages__quiz__service.TextQuestion, () => ({
    __proto__: dart.getFields(pages__quiz__service.TextQuestion.__proto__),
    [_content$]: dart.finalFieldType(core.String),
    [_answer$]: dart.finalFieldType(core.bool)
  }));
  const _questions = dart.privateName(pages__quiz__service, "_questions");
  const Object_Iterator$ = class Object_Iterator extends core.Object {};
  (Object_Iterator$.new = function() {
  }).prototype = Object_Iterator$.prototype;
  dart.applyMixin(Object_Iterator$, core.Iterator);
  pages__quiz__service.Bank = class Bank extends Object_Iterator$ {
    get current() {
      return this[current];
    }
    set current(value) {
      this[current] = value;
    }
    get scores() {
      return this[scores];
    }
    set scores(value) {
      this[scores] = value;
    }
    answer(candidate) {
      if (this.current != null) {
        this.scores[$add](this.current.isCorrect(candidate));
      }
    }
    reset() {
      this[_questions][$clear]();
      this[_questions][$addAll](pages__quiz__service._questionBank);
      this[_questions][$shuffle]();
      this.scores[$clear]();
      this.moveNext();
    }
    get isFinished() {
      return this[_questions][$isEmpty];
    }
    get total() {
      return pages__quiz__service._questionBank[$length];
    }
    get correct() {
      return this.scores[$where](dart.fn(score => dart.equals(score, true), boolTobool()))[$length];
    }
    get wrong() {
      return this.scores[$where](dart.fn(score => dart.equals(score, false), boolTobool()))[$length];
    }
    get remaining() {
      return dart.notNull(this.total) - dart.notNull(this.scores[$length]);
    }
    moveNext() {
      let hasNext = this[_questions][$isNotEmpty];
      if (dart.test(this[_questions][$isNotEmpty])) {
        this.current = this[_questions][$removeLast]();
      }
      return hasNext;
    }
  };
  (pages__quiz__service.Bank.new = function() {
    this[current] = null;
    this[scores] = JSArrayOfbool().of([]);
    this[_questions] = JSArrayOfQuestionable().of([]);
    ;
  }).prototype = pages__quiz__service.Bank.prototype;
  dart.addTypeTests(pages__quiz__service.Bank);
  const current = Symbol("Bank.current");
  const scores = Symbol("Bank.scores");
  dart.setMethodSignature(pages__quiz__service.Bank, () => ({
    __proto__: dart.getMethods(pages__quiz__service.Bank.__proto__),
    answer: dart.fnType(dart.void, [core.bool]),
    reset: dart.fnType(dart.void, []),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(pages__quiz__service.Bank, () => ({
    __proto__: dart.getGetters(pages__quiz__service.Bank.__proto__),
    isFinished: core.bool,
    total: core.int,
    correct: core.int,
    wrong: core.int,
    remaining: core.int
  }));
  dart.setLibraryUri(pages__quiz__service.Bank, "package:londonappbrewery_flutter_bootcamp/pages/quiz/service.dart");
  dart.setFieldSignature(pages__quiz__service.Bank, () => ({
    __proto__: dart.getFields(pages__quiz__service.Bank.__proto__),
    current: dart.fieldType(pages__quiz__service.Questionable),
    scores: dart.fieldType(core.List$(core.bool)),
    [_questions]: dart.fieldType(core.List$(pages__quiz__service.Questionable))
  }));
  dart.defineLazy(pages__quiz__service, {
    /*pages__quiz__service._questionBank*/get _questionBank() {
      return JSArrayOfQuestionable().of([new pages__quiz__service.TextQuestion.new("Some cats are actually allergic to humans", true), new pages__quiz__service.TextQuestion.new("You can lead a cow down stairs but not up stairs.", false), new pages__quiz__service.TextQuestion.new("Approximately one quarter of human bones are in the feet.", true), new pages__quiz__service.TextQuestion.new("A slug's blood is green.", true), new pages__quiz__service.TextQuestion.new("Buzz Aldrin's mother's maiden name was \"Moon\".", true), new pages__quiz__service.TextQuestion.new("It is illegal to pee in the Ocean in Portugal.", true), new pages__quiz__service.TextQuestion.new("No piece of square dry paper can be folded in half more than 7 times.", false), new pages__quiz__service.TextQuestion.new("In London, UK, if you happen to die in the House of Parliament, you are technically entitled to a state funeral, because the building is considered too sacred a place.", true), new pages__quiz__service.TextQuestion.new("The loudest sound produced by any animal is 188 decibels. That animal is the African Elephant.", false), new pages__quiz__service.TextQuestion.new("The total surface area of two human lungs is approximately 70 square metres.", true), new pages__quiz__service.TextQuestion.new("Google was originally called \"Backrub\".", true), new pages__quiz__service.TextQuestion.new("Chocolate affects a dog's heart and nervous system; a few ounces are enough to kill a small dog.", true), new pages__quiz__service.TextQuestion.new("In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.", true)]);
    }
  });
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/pages/quiz/service", {
    "package:londonappbrewery_flutter_bootcamp/pages/quiz/service.dart": pages__quiz__service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/pages/quiz/service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkCA;;;;;;;;;;;;;;;YAO8B;AAC1B,YAAO,iCACA,6BACgB,6BACd,uDACK,aACI;IAGpB;cAEoB;AAAW,YAAQ,aAAR,gBAAW,MAAM;;;oDAf9B,UAAe;IAAf;IAAe;;EAAQ;;;;;;;;;;;;;;;;;;;IAmB5B;;;;;;IAgBF;;;;;;WAdM;AACf,UAAI,gBAAW;QACb,AAAO,kBAAI,AAAQ,uBAAU,SAAS;;IAE1C;;MAGO,AAAW;MACX,AAAW,0BAAO;MAClB,AAAW;MACX,AAAO;MACP;IACP;;AAIuB,YAAK,AAAW;IAAO;;AAE7B,YAAA,AAAc;IAAM;;AAElB,YAAK,AAAO,AAAqC,qBAA/B,QAAM,SAAgB,YAAN,KAAK,EAAI;IAAY;;AAEzD,YAAK,AAAO,AAAsC,qBAAhC,QAAM,SAAgB,YAAN,KAAK,EAAI;IAAa;;AAEpD,YAAW,cAAN,2BAAa,AAAO;IAAM;;AAM7C,oBAAe,AAAW;AAC/B,oBAAS,AAAW;QACb,eAAe,AAAW;;AAGjC,YAAO,QAAO;IAChB;;;IAtCa;IAgBF,eAAS;IAYD,mBAAa;;EAWlC;;;;;;;;;;;;;;;;;;;;;;;;;;MA7FM,kCAAa;YAAiB,6BAClC,0CAAa,6CAA6C,OAC1D,0CAAa,qDAAqD,QAClE,0CACI,6DAA6D,OACjE,0CAAa,4BAA6B,OAC1C,0CAAa,oDAAsD,OACnE,0CAAa,kDAAkD,OAC/D,0CACI,yEACA,QACJ,0CACI,2KACA,OACJ,0CACI,kGACA,QACJ,0CACI,gFACA,OACJ,0CAAa,6CAA6C,OAC1D,0CACI,oGACA,OACJ,0CACI,gHACA","file":"service.ddc.js"}');
  // Exports:
  return {
    pages__quiz__service: pages__quiz__service
  };
});

//# sourceMappingURL=service.ddc.js.map
