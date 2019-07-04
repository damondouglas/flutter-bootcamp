define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const random_string = Object.create(dart.library);
  const $toInt = dartx.toInt;
  const $codeUnits = dartx.codeUnits;
  const $shuffle = dartx.shuffle;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  random_string.Provider = class Provider extends core.Object {};
  (random_string.Provider.new = function() {
    ;
  }).prototype = random_string.Provider.prototype;
  dart.addTypeTests(random_string.Provider);
  dart.setLibraryUri(random_string.Provider, "package:random_string/random_string.dart");
  const Object_Provider$ = class Object_Provider extends core.Object {};
  (Object_Provider$.new = function() {
  }).prototype = Object_Provider$.prototype;
  dart.applyMixin(Object_Provider$, random_string.Provider);
  random_string.DefaultProvider = class DefaultProvider extends Object_Provider$ {
    nextDouble() {
      return random_string._internal.nextDouble();
    }
  };
  (random_string.DefaultProvider.new = function() {
    ;
  }).prototype = random_string.DefaultProvider.prototype;
  dart.addTypeTests(random_string.DefaultProvider);
  dart.setMethodSignature(random_string.DefaultProvider, () => ({
    __proto__: dart.getMethods(random_string.DefaultProvider.__proto__),
    nextDouble: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(random_string.DefaultProvider, "package:random_string/random_string.dart");
  const Object_Provider$$ = class Object_Provider extends core.Object {};
  (Object_Provider$$.new = function() {
  }).prototype = Object_Provider$$.prototype;
  dart.applyMixin(Object_Provider$$, random_string.Provider);
  random_string.CoreProvider = class CoreProvider extends Object_Provider$$ {
    get random() {
      return this[random$];
    }
    set random(value) {
      this[random$] = value;
    }
    nextDouble() {
      return this.random.nextDouble();
    }
  };
  (random_string.CoreProvider.from = function(random) {
    this[random$] = random;
    ;
  }).prototype = random_string.CoreProvider.prototype;
  dart.addTypeTests(random_string.CoreProvider);
  const random$ = Symbol("CoreProvider.random");
  dart.setMethodSignature(random_string.CoreProvider, () => ({
    __proto__: dart.getMethods(random_string.CoreProvider.__proto__),
    nextDouble: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(random_string.CoreProvider, "package:random_string/random_string.dart");
  dart.setFieldSignature(random_string.CoreProvider, () => ({
    __proto__: dart.getFields(random_string.CoreProvider.__proto__),
    random: dart.fieldType(math.Random)
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  random_string.randomBetween = function(from, to, opts) {
    let provider = opts && 'provider' in opts ? opts.provider : const$ || (const$ = dart.const(new random_string.DefaultProvider.new()));
    if (dart.notNull(from) > dart.notNull(to)) dart.throw(core.Exception.new(dart.str(from) + " cannot be > " + dart.str(to)));
    let randomDouble = provider.nextDouble();
    if (dart.notNull(randomDouble) < 0) randomDouble = dart.notNull(randomDouble) * -1;
    if (dart.notNull(randomDouble) > 1) randomDouble = 1 / dart.notNull(randomDouble);
    return ((dart.notNull(to) - dart.notNull(from)) * dart.notNull(provider.nextDouble()))[$toInt]() + dart.notNull(from);
  };
  random_string.randomString = function(length, opts) {
    let from = opts && 'from' in opts ? opts.from : random_string.ASCII_START;
    let to = opts && 'to' in opts ? opts.to : random_string.ASCII_END;
    let provider = opts && 'provider' in opts ? opts.provider : const$0 || (const$0 = dart.const(new random_string.DefaultProvider.new()));
    return core.String.fromCharCodes(ListOfint().generate(length, dart.fn(index => random_string.randomBetween(from, to, {provider: provider}), intToint())));
  };
  random_string.randomNumeric = function(length, opts) {
    let provider = opts && 'provider' in opts ? opts.provider : const$1 || (const$1 = dart.const(new random_string.DefaultProvider.new()));
    return random_string.randomString(length, {from: random_string.NUMERIC_START, to: random_string.NUMERIC_END, provider: provider});
  };
  random_string.randomAlpha = function(length, opts) {
    let provider = opts && 'provider' in opts ? opts.provider : const$2 || (const$2 = dart.const(new random_string.DefaultProvider.new()));
    let lowerAlphaLength = random_string.randomBetween(0, length, {provider: provider});
    let upperAlphaLength = dart.notNull(length) - dart.notNull(lowerAlphaLength);
    let lowerAlpha = random_string.randomString(lowerAlphaLength, {from: random_string.LOWER_ALPHA_START, to: random_string.LOWER_ALPHA_END, provider: provider});
    let upperAlpha = random_string.randomString(upperAlphaLength, {from: random_string.UPPER_ALPHA_START, to: random_string.UPPER_ALPHA_END, provider: provider});
    return random_string.randomMerge(lowerAlpha, upperAlpha);
  };
  random_string.randomAlphaNumeric = function(length, opts) {
    let provider = opts && 'provider' in opts ? opts.provider : const$3 || (const$3 = dart.const(new random_string.DefaultProvider.new()));
    let alphaLength = random_string.randomBetween(0, length, {provider: provider});
    let numericLength = dart.notNull(length) - dart.notNull(alphaLength);
    let alpha = random_string.randomAlpha(alphaLength, {provider: provider});
    let numeric = random_string.randomNumeric(numericLength, {provider: provider});
    return random_string.randomMerge(alpha, numeric);
  };
  random_string.randomMerge = function(a, b) {
    let mergedCodeUnits = ListOfint().from((dart.str(a) + dart.str(b))[$codeUnits]);
    mergedCodeUnits[$shuffle]();
    return core.String.fromCharCodes(mergedCodeUnits);
  };
  dart.defineLazy(random_string, {
    /*random_string.ASCII_START*/get ASCII_START() {
      return 33;
    },
    /*random_string.ASCII_END*/get ASCII_END() {
      return 126;
    },
    /*random_string.NUMERIC_START*/get NUMERIC_START() {
      return 48;
    },
    /*random_string.NUMERIC_END*/get NUMERIC_END() {
      return 57;
    },
    /*random_string.LOWER_ALPHA_START*/get LOWER_ALPHA_START() {
      return 97;
    },
    /*random_string.LOWER_ALPHA_END*/get LOWER_ALPHA_END() {
      return 122;
    },
    /*random_string.UPPER_ALPHA_START*/get UPPER_ALPHA_START() {
      return 65;
    },
    /*random_string.UPPER_ALPHA_END*/get UPPER_ALPHA_END() {
      return 90;
    },
    /*random_string._internal*/get _internal() {
      return math.Random.new();
    }
  });
  dart.trackLibraries("packages/random_string/random_string", {
    "package:random_string/random_string.dart": random_string
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/random_string/random_string.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;EAsBA;;;;;;;;;AAIyB,YAAA,AAAU;IAAY;;;;EADtB;;;;;;;;;;;;IAKhB;;;;;;;AAEgB,YAAA,AAAO;IAAY;;;IADnB;;EAAO;;;;;;;;;;;;;;;;;yCAKV,MAAU;QAAc,wDAAiB;AAC7D,QAAS,aAAL,IAAI,iBAAG,EAAE,GAAE,WAAU,mBAAiC,SAArB,IAAI,+BAAc,EAAE;AAClD,uBAAe,AAAS,QAAD;AAC9B,QAAiB,aAAb,YAAY,IAAG,GAAG,eAAa,aAAb,YAAY,IAAI,CAAC;AACvC,QAAiB,aAAb,YAAY,IAAG,GAAG,eAAe,AAAC,iBAAC,YAAY;AACnD,UAA6C,AAAQ,EAAjC,CAAR,aAAH,EAAE,iBAAG,IAAI,kBAAI,AAAS,QAAD,yCAAyB,IAAI;EAC7D;wCAKwB;QAAa,4CAAO;QAAiB,sCAAK;QAAoB,wDAAiB;AACrG,UAAW,2BACH,qBAAc,MAAM,EAAE,QAAC,SAAU,4BAAc,IAAI,EAAE,EAAE,aAAY,QAAQ;EACrF;yCAGyB;QAAkB,wDAAiB;AACxD,sCAAa,MAAM,SAAQ,iCAAmB,qCAAuB,QAAQ;EAAC;uCAG3D;QAAkB,wDAAiB;AACpD,2BAAmB,4BAAc,GAAG,MAAM,aAAY,QAAQ;AAC9D,2BAA0B,aAAP,MAAM,iBAAG,gBAAgB;AAC5C,qBAAa,2BAAa,gBAAgB,SACpC,qCAAuB,yCAA2B,QAAQ;AAChE,qBAAa,2BAAa,gBAAgB,SACpC,qCAAuB,yCAA2B,QAAQ;AACpE,UAAO,2BAAY,UAAU,EAAE,UAAU;EAC3C;8CAG8B;QAAkB,wDAAiB;AAC3D,sBAAc,4BAAc,GAAG,MAAM,aAAY,QAAQ;AACzD,wBAAuB,aAAP,MAAM,iBAAG,WAAW;AACpC,gBAAQ,0BAAY,WAAW,aAAY,QAAQ;AACnD,kBAAU,4BAAc,aAAa,aAAY,QAAQ;AAC7D,UAAO,2BAAY,KAAK,EAAE,OAAO;EACnC;uCAG0B,GAAU;AACxB,0BAAsB,iBAAiB,CAAD,SAAJ,CAAC,aAAC,CAAC;IAC/C,AAAgB,eAAD;AACf,UAAW,2BAAqB,eAAe;EACjD;;MAxEM,yBAAW;YAAG;;MACd,uBAAS;YAAG;;MACZ,2BAAa;YAAG;;MAChB,yBAAW;YAAG;;MACd,+BAAiB;YAAG;;MACpB,6BAAe;YAAG;;MAClB,+BAAiB;YAAG;;MACpB,6BAAe;YAAG;;MAElB,uBAAS;YAAG","file":"random_string.ddc.js"}');
  // Exports:
  return {
    random_string: random_string
  };
});

//# sourceMappingURL=random_string.ddc.js.map
