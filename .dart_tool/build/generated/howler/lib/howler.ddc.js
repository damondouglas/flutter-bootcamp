define(['dart_sdk', 'packages/swiss_knife/src/utils'], function(dart_sdk, utils) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const web_audio = dart_sdk.web_audio;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const src__howler_base = Object.create(dart.library);
  const howler = Object.create(dart.library);
  const $contains = dartx.contains;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $close = dartx.close;
  const $replaceAll = dartx.replaceAll;
  const $isEmpty = dartx.isEmpty;
  const $toLowerCase = dartx.toLowerCase;
  const $addEventListener = dartx.addEventListener;
  const $setAttribute = dartx.setAttribute;
  const $connectNode = dartx.connectNode;
  const $resume = dartx.resume;
  const $onEnded = dartx.onEnded;
  const $removeEventListener = dartx.removeEventListener;
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  const $play = dartx.play;
  const $console = dartx.console;
  const $add = dartx.add;
  const $suspend = dartx.suspend;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $toString = dartx.toString;
  const $_equals = dartx._equals;
  const $entries = dartx.entries;
  const $_set = dartx._set;
  const $map = dartx.map;
  const $location = dartx.location;
  const $substring = dartx.substring;
  const $abs = dartx.abs;
  const $truncate = dartx.truncate;
  const $isNaN = dartx.isNaN;
  const $isInfinite = dartx.isInfinite;
  const $round = dartx.round;
  const $indexOf = dartx.indexOf;
  const $removeAt = dartx.removeAt;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  const $buffer = dartx.buffer;
  const $response = dartx.response;
  const $decodeAudioData = dartx.decodeAudioData;
  const $floor = dartx.floor;
  const $createGain = dartx.createGain;
  const $ceilToDouble = dartx.ceilToDouble;
  let IdentityMapOfString$bool = () => (IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))();
  let JSArrayOfHowl = () => (JSArrayOfHowl = dart.constFn(_interceptors.JSArray$(src__howler_base.Howl)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfString$_HowlSpriteParams = () => (IdentityMapOfString$_HowlSpriteParams = dart.constFn(_js_helper.IdentityMap$(core.String, src__howler_base._HowlSpriteParams)))();
  let LinkedMapOf_HowlSrc$AudioBuffer = () => (LinkedMapOf_HowlSrc$AudioBuffer = dart.constFn(_js_helper.LinkedMap$(src__howler_base._HowlSrc, web_audio.AudioBuffer)))();
  let JSArrayOfSound = () => (JSArrayOfSound = dart.constFn(_interceptors.JSArray$(src__howler_base.Sound)))();
  let IdentityMapOfint$dynamic = () => (IdentityMapOfint$dynamic = dart.constFn(_js_helper.IdentityMap$(core.int, dart.dynamic)))();
  let JSArrayOf_HowlCall = () => (JSArrayOf_HowlCall = dart.constFn(_interceptors.JSArray$(src__howler_base._HowlCall)))();
  let JSArrayOf_HowlEventListenerWrapper = () => (JSArrayOf_HowlEventListenerWrapper = dart.constFn(_interceptors.JSArray$(src__howler_base._HowlEventListenerWrapper)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SoundToint = () => (SoundToint = dart.constFn(dart.fnType(core.int, [src__howler_base.Sound])))();
  let HowlAndStringAndint__ToNull = () => (HowlAndStringAndint__ToNull = dart.constFn(dart.fnType(core.Null, [src__howler_base.Howl, core.String, core.int, core.String])))();
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  let TimerToNull = () => (TimerToNull = dart.constFn(dart.fnType(core.Null, [async.Timer])))();
  let HttpRequestToNull = () => (HttpRequestToNull = dart.constFn(dart.fnType(core.Null, [html.HttpRequest])))();
  let AudioBufferToNull = () => (AudioBufferToNull = dart.constFn(dart.fnType(core.Null, [web_audio.AudioBuffer])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  const _counter = dart.privateName(src__howler_base, "_counter");
  const _html5AudioPool = dart.privateName(src__howler_base, "_html5AudioPool");
  const _codecs = dart.privateName(src__howler_base, "_codecs");
  const _howls = dart.privateName(src__howler_base, "_howls");
  const _muted = dart.privateName(src__howler_base, "_muted");
  const _volume = dart.privateName(src__howler_base, "_volume");
  const _canPlayEvent = dart.privateName(src__howler_base, "_canPlayEvent");
  const _navigator = dart.privateName(src__howler_base, "_navigator");
  const _ios = dart.privateName(src__howler_base, "_ios");
  const _audioUnlocked = dart.privateName(src__howler_base, "_audioUnlocked");
  const _mobileUnloaded = dart.privateName(src__howler_base, "_mobileUnloaded");
  const _scratchBuffer = dart.privateName(src__howler_base, "_scratchBuffer");
  const _suspendTimer = dart.privateName(src__howler_base, "_suspendTimer");
  const _resumeAfterSuspend = dart.privateName(src__howler_base, "_resumeAfterSuspend");
  const _calcIsIOS = dart.privateName(src__howler_base, "_calcIsIOS");
  const _setup = dart.privateName(src__howler_base, "_setup");
  const _webAudio = dart.privateName(src__howler_base, "_webAudio");
  const _getSoundIds = dart.privateName(src__howler_base, "_getSoundIds");
  const _soundById = dart.privateName(src__howler_base, "_soundById");
  const _node = dart.privateName(src__howler_base, "_node");
  const _autoSuspend = dart.privateName(src__howler_base, "_autoSuspend");
  const _setupCodecs = dart.privateName(src__howler_base, "_setupCodecs");
  const _unlock = dart.privateName(src__howler_base, "_unlock");
  const _unlockAudio = dart.privateName(src__howler_base, "_unlockAudio");
  const _releaseHtml5Audio = dart.privateName(src__howler_base, "_releaseHtml5Audio");
  const _unlocked = dart.privateName(src__howler_base, "_unlocked");
  const _autoResume = dart.privateName(src__howler_base, "_autoResume");
  const _emit = dart.privateName(src__howler_base, "_emit");
  const _obtainHtml5Audio = dart.privateName(src__howler_base, "_obtainHtml5Audio");
  const _sounds = dart.privateName(src__howler_base, "_sounds");
  const _paused = dart.privateName(src__howler_base, "_paused");
  src__howler_base._HowlerGlobal = class _HowlerGlobal extends core.Object {
    get userAgent() {
      return this[_navigator] != null ? this[_navigator].userAgent : "";
    }
    get isIOS() {
      return this[_ios];
    }
    [_calcIsIOS]() {
      return this[_navigator].vendor[$contains]("Apple") && dart.test(core.RegExp.new("iP(?:hone|ad|od)").hasMatch(this[_navigator].platform));
    }
    volume(vol) {
      if (vol === void 0) vol = null;
      if (this.ctx == null) {
        src__howler_base._setupAudioContext();
      }
      if (vol != null && dart.notNull(vol) >= 0 && dart.notNull(vol) <= 1) {
        this[_volume] = vol;
        if (dart.test(this[_muted])) {
          return this[_volume];
        }
        if (dart.test(this.usingWebAudio)) {
          this.masterGain.gain.setValueAtTime(vol, src__howler_base.Howler.ctx.currentTime);
        }
        for (let i = 0; i < dart.notNull(this[_howls][$length]); i = i + 1) {
          if (!dart.test(this[_howls][$_get](i)[_webAudio])) {
            let ids = this[_howls][$_get](i)[_getSoundIds]();
            for (let j = 0; j < dart.notNull(ids[$length]); j = j + 1) {
              let sound = this[_howls][$_get](i)[_soundById](ids[$_get](j));
              if (sound != null && sound[_node] != null) {
                sound[_node].audio.volume = dart.notNull(sound[_volume]) * dart.notNull(vol);
              }
            }
          }
        }
      }
      return this[_volume];
    }
    mute(muted) {
      if (this.ctx == null) {
        src__howler_base._setupAudioContext();
      }
      this[_muted] = muted;
      if (dart.test(this.usingWebAudio)) {
        this.masterGain.gain.setValueAtTime(dart.test(muted) ? 0 : this[_volume], src__howler_base.Howler.ctx.currentTime);
      }
      for (let i = 0; i < dart.notNull(this[_howls][$length]); i = i + 1) {
        if (!dart.test(this[_howls][$_get](i)[_webAudio])) {
          let ids = this[_howls][$_get](i)[_getSoundIds]();
          for (let j = 0; j < dart.notNull(ids[$length]); j = j + 1) {
            let sound = this[_howls][$_get](i)[_soundById](ids[$_get](j));
            if (sound != null && sound[_node] != null) {
              sound[_node].audio.muted = dart.test(muted) ? true : sound[_muted];
            }
          }
        }
      }
      return this;
    }
    unload() {
      for (let i = dart.notNull(this[_howls][$length]) - 1; i >= 0; i = i - 1) {
        this[_howls][$_get](i).unload();
      }
      if (dart.test(this.usingWebAudio) && this.ctx != null && dart.bind(this.ctx, $close) !== null) {
        this.ctx[$close]();
        this.ctx = null;
        src__howler_base._setupAudioContext();
      }
      return this;
    }
    codecs(ext) {
      ext = ext[$replaceAll](core.RegExp.new("^x-"), "");
      return this[_codecs][$_get](ext);
    }
    [_setup]() {
      this.state = this.ctx != null ? this.ctx.state : null;
      if (this.state == null) this.state = "suspended";
      this[_autoSuspend]();
      if (!dart.test(this.usingWebAudio)) {
        try {
          html.AudioElement.new();
        } catch (e$) {
          let e = dart.getThrown(e$);
          this.noAudio = true;
          core.print("** NO AUDIO AVAILABLE!");
        }
      }
      try {
        let test = html.AudioElement.new();
        if (dart.test(test.muted)) {
          this.noAudio = true;
        }
      } catch (e$0) {
        let e = dart.getThrown(e$0);
      }
      if (!dart.test(this.noAudio)) {
        this[_setupCodecs]();
      }
      return this;
    }
    [_setupCodecs]() {
      let audioTest = null;
      try {
        audioTest = html.AudioElement.new();
      } catch (e) {
        let err = dart.getThrown(e);
        return this;
      }
      if (audioTest == null) return this;
      let mpegTest = src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/mpeg;");
      this[_codecs] = new (IdentityMapOfString$bool()).from(["mp3", dart.test(mpegTest) || dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/mp3;")), "mpeg", mpegTest, "opus", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/ogg; codecs=\"opus\""), "ogg", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/ogg; codecs=\"vorbis\""), "oga", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/ogg; codecs=\"vorbis\""), "wav", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/wav; codecs=\"1\""), "aac", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/aac;"), "caf", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/x-caf;"), "m4a", dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/x-m4a;")) || dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/m4a;")) || dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/aac;")), "mp4", dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/x-mp4;")) || dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/mp4;")) || dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/aac;")), "weba", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/webm; codecs=\"vorbis\""), "webm", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/webm; codecs=\"vorbis\""), "dolby", src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/mp4; codecs=\"ec-3\""), "flac", dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/x-flac;")) || dart.test(src__howler_base._HowlerGlobal.canPlayType(audioTest, "audio/flac;"))]);
      return this;
    }
    static canPlayType(audioTest, type) {
      let canPlayType = audioTest.canPlayType("audio/mp3;");
      if (canPlayType == null || canPlayType[$isEmpty]) return false;
      canPlayType = canPlayType[$toLowerCase]();
      return canPlayType !== "no";
    }
    [_unlockAudio]() {
      let shouldUnlock = core.RegExp.new("iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome|Safari", {caseSensitive: false}).hasMatch(this.userAgent);
      if (dart.test(this[_audioUnlocked]) || this.ctx != null || !dart.test(shouldUnlock)) return this;
      this[_audioUnlocked] = false;
      this.autoUnlock = false;
      if (!dart.test(this[_mobileUnloaded]) && this.ctx.sampleRate !== 44100) {
        this[_mobileUnloaded] = true;
        this.unload();
      }
      this[_scratchBuffer] = this.ctx.createBuffer(1, 1, 22050);
      html.document[$addEventListener]("touchstart", dart.bind(this, _unlock), true);
      html.document[$addEventListener]("touchend", dart.bind(this, _unlock), true);
      html.document[$addEventListener]("click", dart.bind(this, _unlock), true);
      return this;
    }
    [_unlock](e) {
      for (let i = 0; i < dart.notNull(this.html5PoolSize); i = i + 1) {
        let audioNode = html.AudioElement.new();
        audioNode[$setAttribute]("_unlocked", "true");
        this[_releaseHtml5Audio](audioNode);
      }
      for (let i = 0; i < dart.notNull(this[_howls][$length]); i = i + 1) {
        if (!dart.test(this[_howls][$_get](i)[_webAudio])) {
          let ids = this[_howls][$_get](i)[_getSoundIds]();
          for (let j = 0; j < dart.notNull(ids[$length]); j = j + 1) {
            let sound = this[_howls][$_get](i)[_soundById](ids[$_get](j));
            if (sound != null && sound[_node] != null && !dart.test(sound[_node][_unlocked])) {
              sound[_node][_unlocked] = true;
              sound[_node].audio.load();
            }
          }
        }
      }
      this[_autoResume]();
      let source = this.ctx.createBufferSource();
      source.buffer = this[_scratchBuffer];
      source[$connectNode](this.ctx.destination);
      source.start(0);
      this.ctx[$resume]();
      source[$onEnded].listen(dart.fn(e => {
        source.disconnect(0);
        this[_audioUnlocked] = true;
        html.document[$removeEventListener]("touchstart", dart.bind(this, _unlock), true);
        html.document[$removeEventListener]("touchend", dart.bind(this, _unlock), true);
        html.document[$removeEventListener]("click", dart.bind(this, _unlock), true);
        for (let i = 0; i < dart.notNull(this[_howls][$length]); i = i + 1) {
          this[_howls][$_get](i)[_emit]("unlock");
        }
      }, EventToNull()));
    }
    [_obtainHtml5Audio]() {
      if (dart.test(this[_html5AudioPool][$isNotEmpty])) {
        return html.AudioElement._check(this[_html5AudioPool][$removeLast]());
      }
      let testPlay = html.AudioElement.new()[$play]();
      if (testPlay != null) {
        testPlay.catchError(dart.fn(_ => {
          html.window[$console].warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
        }, dynamicToNull()));
      }
      return html.AudioElement.new();
    }
    [_releaseHtml5Audio](audio) {
      if (dart.dtest(dart.dload(audio, _unlocked))) {
        this[_html5AudioPool][$add](audio);
      }
      return this;
    }
    [_autoSuspend]() {
      if (!dart.test(this.autoSuspend) || this.ctx == null || !dart.test(src__howler_base.Howler.usingWebAudio)) {
        return this;
      }
      for (let i = 0; i < dart.notNull(this[_howls][$length]); i = i + 1) {
        if (dart.test(this[_howls][$_get](i)[_webAudio])) {
          for (let j = 0; j < dart.notNull(this[_howls][$_get](i)[_sounds][$length]); j = j + 1) {
            if (!dart.test(this[_howls][$_get](i)[_sounds][$_get](j)[_paused])) {
              return this;
            }
          }
        }
      }
      if (this[_suspendTimer] != null) {
        this[_suspendTimer].cancel();
        this[_suspendTimer] = null;
      }
      this[_suspendTimer] = async.Timer.new(new core.Duration.new({seconds: 30}), dart.fn(() => {
        if (!dart.test(this.autoSuspend)) return;
        this[_suspendTimer] = null;
        this.state = "suspending";
        this.ctx[$suspend]().then(dart.dynamic, dart.fn(_ => {
          this.state = "suspended";
          if (dart.test(this[_resumeAfterSuspend])) {
            this[_resumeAfterSuspend] = false;
            this[_autoResume]();
          }
        }, dynamicToNull()));
      }, VoidToNull()));
      return this;
    }
    [_autoResume]() {
      if (this.ctx == null || !dart.test(src__howler_base.Howler.usingWebAudio)) {
        return this;
      }
      if (this.state === "running" && this[_suspendTimer] != null) {
        this[_suspendTimer].cancel();
        this[_suspendTimer] = null;
      } else if (this.state === "suspended") {
        this.ctx[$resume]().then(dart.dynamic, dart.fn(_ => {
          this.state = "running";
          for (let i = 0; i < dart.notNull(this[_howls][$length]); i = i + 1) {
            this[_howls][$_get](i)[_emit]("resume");
          }
        }, dynamicToNull()));
        if (this[_suspendTimer] != null) {
          this[_suspendTimer].cancel();
          this[_suspendTimer] = null;
        }
      } else if (this.state === "suspending") {
        this[_resumeAfterSuspend] = true;
      }
      return this;
    }
  };
  (src__howler_base._HowlerGlobal.new = function() {
    this[_counter] = 1000;
    this[_html5AudioPool] = [];
    this.html5PoolSize = 10;
    this[_codecs] = new (IdentityMapOfString$bool()).new();
    this[_howls] = JSArrayOfHowl().of([]);
    this[_muted] = false;
    this[_volume] = 1.0;
    this[_canPlayEvent] = "canplaythrough";
    this.masterGain = null;
    this.noAudio = false;
    this.usingWebAudio = true;
    this.autoSuspend = true;
    this.ctx = null;
    this.state = null;
    this.autoUnlock = true;
    this[_navigator] = null;
    this[_ios] = null;
    this[_audioUnlocked] = false;
    this[_mobileUnloaded] = false;
    this[_scratchBuffer] = null;
    this[_suspendTimer] = null;
    this[_resumeAfterSuspend] = false;
    this[_navigator] = html.window.navigator;
    this[_ios] = this[_calcIsIOS]();
    this[_setup]();
  }).prototype = src__howler_base._HowlerGlobal.prototype;
  dart.addTypeTests(src__howler_base._HowlerGlobal);
  dart.setMethodSignature(src__howler_base._HowlerGlobal, () => ({
    __proto__: dart.getMethods(src__howler_base._HowlerGlobal.__proto__),
    [_calcIsIOS]: dart.fnType(core.bool, []),
    volume: dart.fnType(core.double, [], [core.double]),
    mute: dart.fnType(src__howler_base._HowlerGlobal, [core.bool]),
    unload: dart.fnType(src__howler_base._HowlerGlobal, []),
    codecs: dart.fnType(core.bool, [core.String]),
    [_setup]: dart.fnType(src__howler_base._HowlerGlobal, []),
    [_setupCodecs]: dart.fnType(src__howler_base._HowlerGlobal, []),
    [_unlockAudio]: dart.fnType(src__howler_base._HowlerGlobal, []),
    [_unlock]: dart.fnType(dart.void, [dart.dynamic]),
    [_obtainHtml5Audio]: dart.fnType(html.AudioElement, []),
    [_releaseHtml5Audio]: dart.fnType(src__howler_base._HowlerGlobal, [dart.dynamic]),
    [_autoSuspend]: dart.fnType(src__howler_base._HowlerGlobal, []),
    [_autoResume]: dart.fnType(src__howler_base._HowlerGlobal, [])
  }));
  dart.setGetterSignature(src__howler_base._HowlerGlobal, () => ({
    __proto__: dart.getGetters(src__howler_base._HowlerGlobal.__proto__),
    userAgent: core.String,
    isIOS: core.bool
  }));
  dart.setLibraryUri(src__howler_base._HowlerGlobal, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base._HowlerGlobal, () => ({
    __proto__: dart.getFields(src__howler_base._HowlerGlobal.__proto__),
    [_counter]: dart.fieldType(core.int),
    [_html5AudioPool]: dart.fieldType(core.List),
    html5PoolSize: dart.fieldType(core.int),
    [_codecs]: dart.fieldType(core.Map$(core.String, core.bool)),
    [_howls]: dart.fieldType(core.List$(src__howler_base.Howl)),
    [_muted]: dart.fieldType(core.bool),
    [_volume]: dart.fieldType(core.double),
    [_canPlayEvent]: dart.fieldType(core.String),
    masterGain: dart.fieldType(web_audio.GainNode),
    noAudio: dart.fieldType(core.bool),
    usingWebAudio: dart.fieldType(core.bool),
    autoSuspend: dart.fieldType(core.bool),
    ctx: dart.fieldType(web_audio.AudioContext),
    state: dart.fieldType(core.String),
    autoUnlock: dart.fieldType(core.bool),
    [_navigator]: dart.fieldType(html.Navigator),
    [_ios]: dart.fieldType(core.bool),
    [_audioUnlocked]: dart.fieldType(core.bool),
    [_mobileUnloaded]: dart.fieldType(core.bool),
    [_scratchBuffer]: dart.fieldType(web_audio.AudioBuffer),
    [_suspendTimer]: dart.fieldType(async.Timer),
    [_resumeAfterSuspend]: dart.fieldType(core.bool)
  }));
  src__howler_base._HowlEventListenerWrapper = class _HowlEventListenerWrapper extends core.Object {};
  (src__howler_base._HowlEventListenerWrapper.new = function(func, id, once) {
    if (id === void 0) id = null;
    if (once === void 0) once = false;
    this.function = func;
    this.id = id;
    this.once = once;
    ;
  }).prototype = src__howler_base._HowlEventListenerWrapper.prototype;
  dart.addTypeTests(src__howler_base._HowlEventListenerWrapper);
  dart.setLibraryUri(src__howler_base._HowlEventListenerWrapper, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base._HowlEventListenerWrapper, () => ({
    __proto__: dart.getFields(src__howler_base._HowlEventListenerWrapper.__proto__),
    id: dart.finalFieldType(core.int),
    function: dart.finalFieldType(dart.fnType(dart.dynamic, [src__howler_base.Howl, core.String, core.int, core.String])),
    once: dart.finalFieldType(core.bool)
  }));
  const _hashcode = dart.privateName(src__howler_base, "_hashcode");
  const _srcs$ = dart.privateName(src__howler_base, "_srcs");
  src__howler_base._HowlSrc = class _HowlSrc extends core.Object {
    get length() {
      return this[_srcs$][$length];
    }
    _get(index) {
      return this[_srcs$][$_get](index);
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || src__howler_base._HowlSrc.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.test(src__utils.isEquivalentList(this[_srcs$], other[_srcs$]));
    }
    get hashCode() {
      if (this[_hashcode] == null) {
        let h = 0;
        for (let s of this[_srcs$]) {
          h = h * 31 + dart.hashCode(s);
        }
        this[_hashcode] = h;
      }
      return this[_hashcode];
    }
    toString() {
      return dart.toString(this[_srcs$]);
    }
  };
  (src__howler_base._HowlSrc.value = function(src) {
    this[_hashcode] = null;
    this[_srcs$] = null;
    this[_srcs$] = JSArrayOfString().of([src]);
  }).prototype = src__howler_base._HowlSrc.prototype;
  (src__howler_base._HowlSrc.list = function(_srcs) {
    this[_hashcode] = null;
    this[_srcs$] = _srcs;
    if (this[_srcs$] == null) this[_srcs$] = JSArrayOfString().of([]);
  }).prototype = src__howler_base._HowlSrc.prototype;
  dart.addTypeTests(src__howler_base._HowlSrc);
  dart.setMethodSignature(src__howler_base._HowlSrc, () => ({
    __proto__: dart.getMethods(src__howler_base._HowlSrc.__proto__),
    _get: dart.fnType(core.String, [core.int]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__howler_base._HowlSrc, () => ({
    __proto__: dart.getGetters(src__howler_base._HowlSrc.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(src__howler_base._HowlSrc, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base._HowlSrc, () => ({
    __proto__: dart.getFields(src__howler_base._HowlSrc.__proto__),
    [_srcs$]: dart.fieldType(core.List$(core.String)),
    [_hashcode]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(src__howler_base._HowlSrc, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__howler_base._HowlSrc, ['hashCode']);
  src__howler_base._HowlSpriteParams = class _HowlSpriteParams extends core.Object {
    static toMapOfSpritesParams(map) {
      let sprites = new (IdentityMapOfString$_HowlSpriteParams()).new();
      for (let entry of map[$entries]) {
        let key = entry.key;
        let spriteParams = new src__howler_base._HowlSpriteParams.list(entry.value);
        sprites[$_set](key, spriteParams);
      }
      return sprites;
    }
  };
  (src__howler_base._HowlSpriteParams.new = function(from, to, loop) {
    if (loop === void 0) loop = false;
    this.from = from;
    this.to = to;
    this.loop = loop;
    ;
  }).prototype = src__howler_base._HowlSpriteParams.prototype;
  (src__howler_base._HowlSpriteParams.list = function(params) {
    this.loop = null;
    this.to = null;
    this.from = null;
    this.from = core.int.parse(dart.toString(params[$_get](0)));
    this.to = core.int.parse(dart.toString(params[$_get](1)));
    if (dart.notNull(params[$length]) <= 2) {
      this.loop = false;
    } else {
      let loopStr = dart.toString(params[$_get](2))[$toLowerCase]();
      this.loop = loopStr === "true" || loopStr === "1";
    }
  }).prototype = src__howler_base._HowlSpriteParams.prototype;
  dart.addTypeTests(src__howler_base._HowlSpriteParams);
  dart.setLibraryUri(src__howler_base._HowlSpriteParams, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base._HowlSpriteParams, () => ({
    __proto__: dart.getFields(src__howler_base._HowlSpriteParams.__proto__),
    from: dart.fieldType(core.int),
    to: dart.fieldType(core.int),
    loop: dart.fieldType(core.bool)
  }));
  src__howler_base._HowlCall = class _HowlCall extends core.Object {};
  (src__howler_base._HowlCall.new = function(event, action) {
    this.event = event;
    this.action = action;
    ;
  }).prototype = src__howler_base._HowlCall.prototype;
  dart.addTypeTests(src__howler_base._HowlCall);
  dart.setLibraryUri(src__howler_base._HowlCall, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base._HowlCall, () => ({
    __proto__: dart.getFields(src__howler_base._HowlCall.__proto__),
    event: dart.finalFieldType(core.String),
    action: dart.finalFieldType(core.Function)
  }));
  const _autoplay = dart.privateName(src__howler_base, "_autoplay");
  const _format = dart.privateName(src__howler_base, "_format");
  const _html5 = dart.privateName(src__howler_base, "_html5");
  const _loop = dart.privateName(src__howler_base, "_loop");
  const _pool = dart.privateName(src__howler_base, "_pool");
  const _preload = dart.privateName(src__howler_base, "_preload");
  const _rate = dart.privateName(src__howler_base, "_rate");
  const _sprite = dart.privateName(src__howler_base, "_sprite");
  const _src = dart.privateName(src__howler_base, "_src");
  const _xhrWithCredentials = dart.privateName(src__howler_base, "_xhrWithCredentials");
  const _duration = dart.privateName(src__howler_base, "_duration");
  const _state = dart.privateName(src__howler_base, "_state");
  const _endTimers = dart.privateName(src__howler_base, "_endTimers");
  const _queue = dart.privateName(src__howler_base, "_queue");
  const _playLock = dart.privateName(src__howler_base, "_playLock");
  const _onend = dart.privateName(src__howler_base, "_onend");
  const _onfade = dart.privateName(src__howler_base, "_onfade");
  const _onload = dart.privateName(src__howler_base, "_onload");
  const _onloaderror = dart.privateName(src__howler_base, "_onloaderror");
  const _onplayerror = dart.privateName(src__howler_base, "_onplayerror");
  const _onpause = dart.privateName(src__howler_base, "_onpause");
  const _onplay = dart.privateName(src__howler_base, "_onplay");
  const _onstop = dart.privateName(src__howler_base, "_onstop");
  const _onmute = dart.privateName(src__howler_base, "_onmute");
  const _onvolume = dart.privateName(src__howler_base, "_onvolume");
  const _onrate = dart.privateName(src__howler_base, "_onrate");
  const _onseek = dart.privateName(src__howler_base, "_onseek");
  const _onunlock = dart.privateName(src__howler_base, "_onunlock");
  const _onresume = dart.privateName(src__howler_base, "_onresume");
  const _cache = dart.privateName(src__howler_base, "_cache");
  const _getEventListeners = dart.privateName(src__howler_base, "_getEventListeners");
  const _id = dart.privateName(src__howler_base, "_id");
  const _loadBuffer = dart.privateName(src__howler_base, "_loadBuffer");
  const _ended = dart.privateName(src__howler_base, "_ended");
  const _inactiveSound = dart.privateName(src__howler_base, "_inactiveSound");
  const _loadQueue = dart.privateName(src__howler_base, "_loadQueue");
  const _seek = dart.privateName(src__howler_base, "_seek");
  const _start = dart.privateName(src__howler_base, "_start");
  const _stop = dart.privateName(src__howler_base, "_stop");
  const _refreshBuffer = dart.privateName(src__howler_base, "_refreshBuffer");
  const _playStart = dart.privateName(src__howler_base, "_playStart");
  const _clearTimer = dart.privateName(src__howler_base, "_clearTimer");
  const _rateSeek = dart.privateName(src__howler_base, "_rateSeek");
  const _stopFade = dart.privateName(src__howler_base, "_stopFade");
  const _cleanBuffer = dart.privateName(src__howler_base, "_cleanBuffer");
  const _interval = dart.privateName(src__howler_base, "_interval");
  const _startFadeInterval = dart.privateName(src__howler_base, "_startFadeInterval");
  const _fadeTo = dart.privateName(src__howler_base, "_fadeTo");
  const _errorFn = dart.privateName(src__howler_base, "_errorFn");
  const _loadFn = dart.privateName(src__howler_base, "_loadFn");
  const _loadSound = dart.privateName(src__howler_base, "_loadSound");
  const _decodeAudioData = dart.privateName(src__howler_base, "_decodeAudioData");
  const _drain = dart.privateName(src__howler_base, "_drain");
  const _panner = dart.privateName(src__howler_base, "_panner");
  src__howler_base.Howl = class Howl extends core.Object {
    [_getEventListeners](eventType) {
      switch (eventType) {
        case "end":
        {
          return this[_onend];
        }
        case "fade":
        {
          return this[_onfade];
        }
        case "load":
        {
          return this[_onload];
        }
        case "loaderror":
        {
          return this[_onloaderror];
        }
        case "playerror":
        {
          return this[_onplayerror];
        }
        case "pause":
        {
          return this[_onpause];
        }
        case "play":
        {
          return this[_onplay];
        }
        case "stop":
        {
          return this[_onstop];
        }
        case "mute":
        {
          return this[_onmute];
        }
        case "volume":
        {
          return this[_onvolume];
        }
        case "rate":
        {
          return this[_onrate];
        }
        case "seek":
        {
          return this[_onseek];
        }
        case "unlock":
        {
          return this[_onunlock];
        }
        case "resume":
        {
          return this[_onresume];
        }
        default:
        {
          return null;
        }
      }
    }
    get soundIDs() {
      return ListOfint().from(this[_sounds][$map](dart.dynamic, dart.fn(s => s[_id], SoundToint())));
    }
    toString() {
      return "Howl{ playing: " + dart.str(this.playing()) + ", src: " + dart.str(this[_src]) + ", sounds: " + dart.str(this[_sounds]) + "}";
    }
    load() {
      let url = null;
      if (dart.test(src__howler_base.Howler.noAudio)) {
        this[_emit]("loaderror", null, "No audio support.");
        return this;
      }
      for (let i = 0; i < dart.notNull(this[_src].length); i = i + 1) {
        let ext = null;
        let src = null;
        if (this[_format] != null && i < dart.notNull(this[_format][$length]) && this[_format][$_get](i) != null) {
          ext = this[_format][$_get](i);
        } else {
          src = this[_src]._get(i);
          if (src == null) {
            this[_emit]("loaderror", null, "Non-string found in selected audio sources - ignoring.");
            continue;
          }
          let match = core.RegExp.new("^data:audio/([^;,]+);", {caseSensitive: false}).firstMatch(src);
          ext = match != null ? match.group(1) : null;
          if (ext == null || ext[$isEmpty]) {
            let url = src__utils.split(src, "?", 1)[$_get](0);
            let match = core.RegExp.new("\\.([^.]+)$").firstMatch(url);
            ext = match != null ? match.group(1) : null;
          }
          if (ext != null) {
            ext = ext[$toLowerCase]();
          }
        }
        if (ext == null) {
          html.window[$console].warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
        }
        if (ext != null && dart.test(src__howler_base.Howler.codecs(ext))) {
          url = this[_src]._get(i);
          break;
        }
      }
      if (url == null) {
        this[_emit]("loaderror", null, "No codec support for selected audio sources.");
        return this;
      }
      this[_src] = new src__howler_base._HowlSrc.value(url);
      this[_state] = "loading";
      if (html.window[$location].protocol === "https:" && url[$substring](0, 5) === "http:") {
        this[_html5] = true;
        this[_webAudio] = false;
      }
      new src__howler_base.Sound.new(this);
      if (dart.test(this[_webAudio])) {
        this[_loadBuffer]();
      }
      return this;
    }
    play(sprite, internal) {
      if (sprite === void 0) sprite = null;
      if (internal === void 0) internal = false;
      let id = null;
      if (sprite == null) {
        sprite = "__default";
        if (!dart.test(this[_playLock])) {
          let num = 0;
          for (let i = 0; i < dart.notNull(this[_sounds][$length]); i = i + 1) {
            if (dart.test(this[_sounds][$_get](i)[_paused]) && !dart.test(this[_sounds][$_get](i)[_ended])) {
              num = num + 1;
              id = this[_sounds][$_get](i)[_id];
            }
          }
          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      } else if (core.int.is(sprite)) {
        id = core.int._check(sprite);
        sprite = null;
      } else if (typeof sprite == 'string' && this[_state] === "loaded" && this[_sprite][$_get](sprite) == null) {
        return null;
      }
      let sound = id != null ? this[_soundById](id) : this[_inactiveSound]();
      if (sound == null) {
        return null;
      }
      if (id != null && sprite == null) {
        sprite = sound[_sprite];
        if (sprite == null) sprite = "__default";
      }
      if (this[_state] !== "loaded") {
        sound[_sprite] = core.String._check(sprite);
        sound[_ended] = false;
        let soundId = sound[_id];
        this[_queue][$add](new src__howler_base._HowlCall.new("play", dart.fn(() => {
          this.play(soundId);
        }, VoidToNull())));
        return soundId;
      }
      if (id != null && !dart.test(sound[_paused])) {
        if (!dart.test(internal)) {
          this[_loadQueue]("play");
        }
        return sound[_id];
      }
      if (dart.test(this[_webAudio])) {
        src__howler_base.Howler[_autoResume]();
      }
      let seek = src__utils.Math.max(0, dart.notNull(sound[_seek]) > 0 ? sound[_seek] : dart.notNull(this[_sprite][$_get](sprite).from) / 1000);
      let duration = src__utils.Math.max(0, (dart.notNull(this[_sprite][$_get](sprite).from) + dart.notNull(this[_sprite][$_get](sprite).to)) / 1000 - dart.notNull(seek));
      let timeout = (dart.notNull(duration) * 1000 / sound[_rate][$abs]())[$truncate]();
      let start = dart.notNull(this[_sprite][$_get](sprite).from) / 1000;
      let stop = (dart.notNull(this[_sprite][$_get](sprite).from) + dart.notNull(this[_sprite][$_get](sprite).to)) / 1000;
      let loop = sound[_loop];
      if (!dart.test(loop)) {
        let spriteConf = this[_sprite][$_get](sprite);
        loop = spriteConf.loop;
      }
      sound[_sprite] = core.String._check(sprite);
      sound[_ended] = false;
      let setParams = dart.fn(() => {
        sound[_paused] = false;
        sound[_seek] = seek;
        sound[_start] = start;
        sound[_stop] = stop;
        sound[_loop] = loop;
      }, VoidToNull());
      if (dart.notNull(seek) >= stop) {
        this[_ended](sound);
        return null;
      }
      let node = sound[_node];
      if (dart.test(this[_webAudio])) {
        let playWebAudio = dart.fn((h, t, id, m) => {
          this[_playLock] = false;
          setParams();
          this[_refreshBuffer](sound);
          let vol = dart.test(sound[_muted]) || dart.test(this[_muted]) ? 0 : sound[_volume];
          node.gainNode.gain.setValueAtTime(vol, src__howler_base.Howler.ctx.currentTime);
          sound[_playStart] = src__howler_base.Howler.ctx.currentTime;
          dart.test(sound[_loop]) ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          if (timeout > 0 && timeout < 100000000) {
            this[_endTimers][$_set](sound[_id], async.Timer.new(new core.Duration.new({milliseconds: timeout}), dart.fn(() => {
              this[_ended](sound);
            }, VoidToNull())));
          }
          if (!dart.test(internal)) {
            async.Timer.new(core.Duration.zero, dart.fn(() => {
              this[_emit]("play", sound[_id]);
              this[_loadQueue]();
            }, VoidToNull()));
          }
        }, HowlAndStringAndint__ToNull());
        if (src__howler_base.Howler.state === "running") {
          playWebAudio(this, "play", sound[_id], null);
        } else {
          this[_playLock] = true;
          this.once("resume", playWebAudio, null);
          this[_clearTimer](sound[_id]);
        }
      } else {
        let playHtml5 = dart.fn(() => {
          node.audio.currentTime = seek;
          node.audio.muted = dart.test(sound[_muted]) || dart.test(this[_muted]) || dart.test(src__howler_base.Howler[_muted]) || dart.test(node.audio.muted);
          node.audio.volume = dart.notNull(sound[_volume]) * dart.notNull(src__howler_base.Howler.volume());
          node.audio.playbackRate = sound[_rate];
          try {
            let play = node.audio[$play]();
            if (play != null) {
              this[_playLock] = true;
              setParams();
              play.then(dart.dynamic, dart.fn(_ => {
                this[_playLock] = false;
                node[_unlocked] = true;
                if (!dart.test(internal)) {
                  this[_emit]("play", sound[_id]);
                  this[_loadQueue]();
                }
              }, dynamicToNull())).catchError(dart.fn(() => {
                this[_playLock] = false;
                this[_emit]("playerror", sound[_id], "Playback was unable to start. This is most commonly an issue " + "on mobile devices and Chrome where playback was not within a user interaction.");
                sound[_ended] = true;
                sound[_paused] = true;
              }, VoidToNull()));
            } else if (!dart.test(internal)) {
              this[_playLock] = false;
              setParams();
              this[_emit]("play", sound[_id]);
              this[_loadQueue]();
            }
            node.audio.playbackRate = sound[_rate];
            if (dart.test(node.audio.paused)) {
              this[_emit]("playerror", sound[_id], "Playback was unable to start. This is most commonly an issue " + "on mobile devices and Chrome where playback was not within a user interaction.");
              return;
            }
            if (!dart.equals(sprite, "__default") || dart.test(sound[_loop])) {
              this[_endTimers][$_set](sound[_id], async.Timer.new(new core.Duration.new({milliseconds: timeout}), dart.fn(() => {
                this[_ended](sound);
              }, VoidToNull())));
            } else {
              this[_endTimers][$_set](sound[_id], dart.fn(e => {
                this[_ended](sound);
                this[_clearTimer](sound[_id]);
              }, dynamicToNull()));
              node.eventTarget[$addEventListener]("ended", EventTodynamic()._check(this[_endTimers][$_get](sound[_id])), false);
            }
          } catch (e) {
            let err = dart.getThrown(e);
            this[_emit]("playerror", sound[_id], core.String._check(err));
          }
        }, VoidToNull());
        if (dart.notNull(node.audio.readyState) >= 3) {
          playHtml5();
        } else {
          this[_playLock] = true;
          this[_clearTimer](sound[_id]);
          let listener = dart.fn(e => {
            playHtml5();
            this[_clearTimer](sound[_id]);
          }, EventToNull());
          node.eventTarget[$addEventListener](src__howler_base.Howler[_canPlayEvent], listener, false);
        }
      }
      return sound[_id];
    }
    pause(id, internal) {
      if (internal === void 0) internal = false;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        this[_queue][$add](new src__howler_base._HowlCall.new("pause", dart.fn(() => {
          this.pause(id);
        }, VoidToNull())));
        return this;
      }
      let ids = this[_getSoundIds](id);
      for (let i = 0; i < dart.notNull(ids[$length]); i = i + 1) {
        let id2 = ids[$_get](i);
        this[_clearTimer](id2);
        let sound = this[_soundById](id2);
        if (sound != null && !dart.test(sound[_paused])) {
          sound[_seek] = this.getSeek(id2);
          sound[_rateSeek] = 0.0;
          sound[_paused] = true;
          this[_stopFade](id2);
          if (sound[_node] != null) {
            if (dart.test(this[_webAudio])) {
              if (sound[_node].bufferSource == null) {
                continue;
              }
              sound[_node].bufferSource.stop(0);
              this[_cleanBuffer](sound[_node]);
            } else if (!sound[_node].audio.duration[$isNaN] || sound[_node].audio.duration[$isInfinite]) {
              sound[_node].audio.pause();
            }
          }
        }
        if (!dart.test(internal)) {
          this[_emit]("pause", sound != null ? sound[_id] : null);
        }
      }
      return this;
    }
    stopAll() {
      this.stopIDs(this.soundIDs);
      return this;
    }
    stopIDs(ids) {
      for (let id of ids) {
        this.stop(id);
      }
      return this;
    }
    stop(id, internal) {
      if (internal === void 0) internal = false;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        this[_queue][$add](new src__howler_base._HowlCall.new("stop", dart.fn(() => {
          this.stop(id);
        }, VoidToNull())));
        return this;
      }
      let ids = this[_getSoundIds](id);
      for (let i = 0; i < dart.notNull(ids[$length]); i = i + 1) {
        this[_clearTimer](ids[$_get](i));
        let sound = this[_soundById](ids[$_get](i));
        if (sound != null) {
          sound[_seek] = sound[_start];
          sound[_rateSeek] = 0.0;
          sound[_paused] = true;
          sound[_ended] = true;
          this[_stopFade](ids[$_get](i));
          if (sound[_node] != null) {
            if (dart.test(this[_webAudio])) {
              if (sound[_node].bufferSource != null) {
                sound[_node].bufferSource.stop(0);
                this[_cleanBuffer](sound[_node]);
              }
            } else if (!sound[_node].audio.duration[$isNaN] || sound[_node].audio.duration[$isInfinite]) {
              sound[_node].audio.currentTime = sound[_start];
              sound[_node].audio.pause();
            }
          }
          if (!dart.test(internal)) {
            this[_emit]("stop", sound[_id]);
          }
        }
      }
      return this;
    }
    mute(muted, id) {
      if (id === void 0) id = null;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        this[_queue][$add](new src__howler_base._HowlCall.new("mute", dart.fn(() => {
          this.mute(muted, id);
        }, VoidToNull())));
        return this;
      }
      if (id == null) {
        if (muted != null) {
          this[_muted] = muted;
        } else {
          return this;
        }
      }
      let ids = this[_getSoundIds](id);
      for (let i = 0; i < dart.notNull(ids[$length]); i = i + 1) {
        let sound = this[_soundById](ids[$_get](i));
        if (sound != null) {
          sound[_muted] = muted;
          if (sound[_interval] != null) {
            this[_stopFade](sound[_id]);
          }
          if (dart.test(this[_webAudio]) && sound[_node] != null) {
            sound[_node].gainNode.gain.setValueAtTime(dart.test(muted) ? 0 : sound[_volume], src__howler_base.Howler.ctx.currentTime);
          } else if (sound[_node] != null) {
            sound[_node].audio.muted = dart.test(src__howler_base.Howler[_muted]) ? true : muted;
          }
          this[_emit]("mute", sound[_id]);
        }
      }
      return this;
    }
    getVolume(id) {
      if (id === void 0) id = null;
      if (id == null) {
        return this[_volume];
      } else {
        let sound = this[_soundById](id);
        return sound != null ? sound[_volume] : 0.0;
      }
    }
    setVolume(vol, id, internal) {
      if (id === void 0) id = null;
      if (internal === void 0) internal = false;
      if (vol == null || dart.notNull(vol) < 0 || dart.notNull(vol) > 1) return this;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        this[_queue][$add](new src__howler_base._HowlCall.new("volume", dart.fn(() => {
          this.setVolume(vol, id);
        }, VoidToNull())));
        return this;
      }
      if (id == null) {
        this[_volume] = vol;
      }
      let ids = this[_getSoundIds](id);
      for (let i = 0; i < dart.notNull(ids[$length]); i = i + 1) {
        let id2 = ids[$_get](i);
        let sound = this[_soundById](id2);
        if (sound != null) {
          sound[_volume] = vol;
          if (!dart.test(internal)) {
            this[_stopFade](id2);
          }
          if (dart.test(this[_webAudio]) && sound[_node] != null && !dart.test(sound[_muted])) {
            sound[_node].gainNode.gain.setValueAtTime(vol, src__howler_base.Howler.ctx.currentTime);
          } else if (sound[_node] != null && !dart.test(sound[_muted])) {
            sound[_node].audio.volume = dart.notNull(vol) * dart.notNull(src__howler_base.Howler.volume());
          }
          this[_emit]("volume", sound[_id]);
        }
      }
      return this;
    }
    fade(from, to, len, id) {
      if (id === void 0) id = null;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        this[_queue][$add](new src__howler_base._HowlCall.new("fade", dart.fn(() => {
          this.fade(from, to, len, id);
        }, VoidToNull())));
        return this;
      }
      this.setVolume(from, id);
      let ids = this[_getSoundIds](id);
      for (let i = 0; i < dart.notNull(ids[$length]); i = i + 1) {
        let sound = this[_soundById](ids[$_get](i));
        if (sound != null) {
          if (id == null) {
            this[_stopFade](ids[$_get](i));
          }
          if (dart.test(this[_webAudio]) && !dart.test(sound[_muted])) {
            let currentTime = src__howler_base.Howler.ctx.currentTime;
            let end = dart.notNull(currentTime) + dart.notNull(len) / 1000;
            sound[_volume] = from;
            sound[_node].gainNode.gain.setValueAtTime(from, currentTime);
            sound[_node].gainNode.gain.linearRampToValueAtTime(to, end);
          }
          this[_startFadeInterval](sound, from, to, len, ids[$_get](i), id == null);
        }
      }
      return this;
    }
    [_startFadeInterval](sound, from, to, len, id, isGroup) {
      let vol = from;
      let diff = dart.notNull(to) - dart.notNull(from);
      let steps = (diff / 0.01)[$abs]();
      let stepLen = dart.asInt(src__utils.Math.max(4, steps > 0 ? (dart.notNull(len) / steps)[$truncate]() : len));
      let lastTick = new core.DateTime.now().millisecondsSinceEpoch;
      sound[_fadeTo] = to;
      sound[_interval] = async.Timer.periodic(new core.Duration.new({milliseconds: stepLen}), dart.fn(t => {
        let now = new core.DateTime.now().millisecondsSinceEpoch;
        let tick = (dart.notNull(now) - dart.notNull(lastTick)) / dart.notNull(len);
        lastTick = now;
        vol = dart.notNull(vol) + diff * tick;
        vol = src__utils.Math.max(0, vol);
        vol = src__utils.Math.min(1, vol);
        vol = (dart.notNull(vol) * 100)[$round]() / 100;
        if (dart.test(this[_webAudio])) {
          sound[_volume] = vol;
        } else {
          this.setVolume(vol, sound[_id], true);
        }
        if (dart.dtest(isGroup)) {
          this[_volume] = vol;
        }
        if (dart.notNull(to) < dart.notNull(from) && dart.notNull(vol) <= dart.notNull(to) || dart.notNull(to) > dart.notNull(from) && dart.notNull(vol) >= dart.notNull(to)) {
          if (sound[_interval] != null) {
            sound[_interval].cancel();
            sound[_interval] = null;
          }
          sound[_fadeTo] = null;
          this.setVolume(to, sound[_id]);
          this[_emit]("fade", sound[_id]);
        }
      }, TimerToNull()));
    }
    [_stopFade](id) {
      let sound = this[_soundById](id);
      if (sound != null && sound[_interval] != null) {
        if (dart.test(this[_webAudio])) {
          sound[_node].gainNode.gain.cancelScheduledValues(src__howler_base.Howler.ctx.currentTime);
        }
        sound[_interval].cancel();
        sound[_interval] = null;
        this.setVolume(sound[_fadeTo], id);
        sound[_fadeTo] = null;
        this[_emit]("fade", id);
      }
    }
    getLoop(id) {
      if (id === void 0) id = null;
      if (id == null) {
        return this[_loop];
      } else {
        let sound = this[_soundById](id);
        return sound != null ? sound[_loop] : false;
      }
    }
    setLoop(loop, id) {
      if (id === void 0) id = null;
      if (id == null) {
        this[_loop] = loop;
      }
      let ids = this[_getSoundIds](id);
      for (let i = 0; i < dart.notNull(ids[$length]); i = i + 1) {
        let sound = this[_soundById](ids[$_get](i));
        if (sound != null) {
          sound[_loop] = loop;
          if (dart.test(this[_webAudio]) && sound[_node] != null && sound[_node].bufferSource != null) {
            sound[_node].bufferSource.loop = loop;
            if (dart.test(loop)) {
              sound[_node].bufferSource.loopStart = sound[_start];
              sound[_node].bufferSource.loopEnd = sound[_stop];
            }
          }
        }
      }
      return this;
    }
    getRate(id) {
      if (id === void 0) id = null;
      if (id == null) {
        id = this[_sounds][$_get](0)[_id];
      } else {
        let sound = this[_soundById](id);
        return sound != null ? sound[_rate] : this[_rate];
      }
    }
    setRate(rate, id) {
      if (id === void 0) id = null;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        this[_queue][$add](new src__howler_base._HowlCall.new("rate", dart.fn(() => {
          this.setRate(rate, id);
        }, VoidToNull())));
        return this;
      }
      if (id == null) {
        this[_rate] = rate;
      }
      let ids = this[_getSoundIds](id);
      for (let i = 0; i < dart.notNull(ids[$length]); i = i + 1) {
        let id2 = ids[$_get](i);
        let sound = this[_soundById](id2);
        if (sound != null) {
          if (dart.test(this.playing(id2))) {
            sound[_rateSeek] = this.getSeek(id2);
            sound[_playStart] = dart.test(this[_webAudio]) ? src__howler_base.Howler.ctx.currentTime : sound[_playStart];
          }
          sound[_rate] = rate;
          if (dart.test(this[_webAudio]) && sound[_node] != null && sound[_node].bufferSource != null) {
            sound[_node].bufferSource.playbackRate.setValueAtTime(rate, src__howler_base.Howler.ctx.currentTime);
          } else if (sound[_node] != null) {
            sound[_node].audio.playbackRate = rate;
          }
          let seek = this.getSeek(id2);
          let duration = (dart.notNull(this[_sprite][$_get](sound[_sprite]).from) + dart.notNull(this[_sprite][$_get](sound[_sprite]).to)) / 1000 - dart.notNull(seek);
          let timeout = (duration * 1000 / sound[_rate][$abs]())[$truncate]();
          if (this[_endTimers][$_get](id2) != null || !dart.test(sound[_paused])) {
            this[_clearTimer](id2);
            async.Timer.new(new core.Duration.new({milliseconds: timeout}), dart.fn(() => {
              this[_ended](sound);
            }, VoidToNull()));
          }
          this[_emit]("rate", sound[_id]);
        }
      }
      return this;
    }
    getSeek(id) {
      if (id === void 0) id = null;
      if (id == null) {
        id = this[_sounds][$_get](0)[_id];
      }
      if (id == null) return null;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        return null;
      }
      let sound = this[_soundById](id);
      if (sound != null) {
        if (dart.test(this[_webAudio])) {
          let realTime = dart.test(this.playing(id)) ? dart.notNull(src__howler_base.Howler.ctx.currentTime) - dart.notNull(sound[_playStart]) : 0.0;
          let rateSeek = sound[_rateSeek] != null && dart.notNull(sound[_rateSeek]) > 0 ? dart.notNull(sound[_rateSeek]) - dart.notNull(sound[_seek]) : 0.0;
          return dart.notNull(sound[_seek]) + (rateSeek + realTime * sound[_rate][$abs]());
        } else {
          return sound[_node].audio.currentTime;
        }
      }
    }
    setSeek(seek, id) {
      if (id === void 0) id = null;
      if (id == null) {
        id = this[_sounds][$_get](0)[_id];
      }
      if (id == null) return this;
      if (this[_state] !== "loaded" || dart.test(this[_playLock])) {
        this[_queue][$add](new src__howler_base._HowlCall.new("seek", dart.fn(() => {
          this.setSeek(seek, id);
        }, VoidToNull())));
        return this;
      }
      let sound = this[_soundById](id);
      if (sound != null) {
        let playing = this.playing(id);
        if (dart.test(playing)) {
          this.pause(id, true);
        }
        sound[_seek] = seek;
        sound[_ended] = false;
        this[_clearTimer](id);
        if (!dart.test(this[_webAudio]) && sound[_node] != null && !sound[_node].audio.duration[$isNaN]) {
          sound[_node].audio.currentTime = seek;
        }
        let seekAndEmit = dart.fn(() => {
          this[_emit]("seek", id);
          if (dart.test(playing)) {
            this.play(id, true);
          }
        }, VoidToNull());
        if (dart.test(playing) && !dart.test(this[_webAudio])) {
          async.Timer.periodic(core.Duration.zero, dart.fn(t => {
            if (!dart.test(this[_playLock])) {
              seekAndEmit();
              t.cancel();
            }
          }, TimerToNull()));
        } else {
          seekAndEmit();
        }
      }
      return this;
    }
    playing(id) {
      if (id === void 0) id = null;
      if (id != null) {
        let sound = this[_soundById](id);
        return sound != null ? !dart.test(sound[_paused]) : false;
      }
      for (let i = 0; i < dart.notNull(this[_sounds][$length]); i = i + 1) {
        if (!dart.test(this[_sounds][$_get](i)[_paused])) {
          return true;
        }
      }
      return false;
    }
    duration(id) {
      if (id === void 0) id = null;
      if (id == null) {
        return this[_duration];
      }
      let sound = this[_soundById](id);
      if (sound != null) {
        return dart.notNull(this[_sprite][$_get](sound[_sprite]).to) / 1000;
      } else {
        return this[_duration];
      }
    }
    state() {
      return this[_state];
    }
    unload() {
      let sss = this[_sounds];
      for (let i = 0; i < dart.notNull(sss[$length]); i = i + 1) {
        let sound = sss[$_get](i);
        if (!dart.test(sound[_paused])) {
          this.stop(sound[_id]);
        }
        if (!dart.test(this[_webAudio])) {
          sound[_node].eventTarget[$removeEventListener]("error", sound[_errorFn], false);
          sound[_node].eventTarget[$removeEventListener](src__howler_base.Howler[_canPlayEvent], sound[_loadFn], false);
          src__howler_base.Howler[_releaseHtml5Audio](sound[_node]);
        }
        sss[$_get](i)[_node] = null;
        this[_clearTimer](sound[_id]);
      }
      let index = src__howler_base.Howler[_howls][$indexOf](this);
      if (dart.notNull(index) >= 0) {
        src__howler_base.Howler[_howls][$removeAt](index);
      }
      let remCache = true;
      for (let i = 0; i < dart.notNull(src__howler_base.Howler[_howls][$length]); i = i + 1) {
        if (dart.equals(src__howler_base.Howler[_howls][$_get](i)[_src], this[_src])) {
          remCache = false;
          break;
        }
      }
      if (remCache) {
        this[_cache][$remove](this[_src]);
      }
      src__howler_base.Howler.noAudio = false;
      this[_state] = "unloaded";
      this[_sounds] = JSArrayOfSound().of([]);
      return null;
    }
    on(eventType, func, id, once) {
      if (once === void 0) once = false;
      let events = this[_getEventListeners](eventType);
      let listener = new src__howler_base._HowlEventListenerWrapper.new(func, id, once);
      events[$add](listener);
      return this;
    }
    off(eventType, id, func) {
      if (id === void 0) id = null;
      if (func === void 0) func = null;
      let events = this[_getEventListeners](eventType);
      let i = 0;
      if (id != null) {
        for (let t4 = i = 0; i < dart.notNull(events[$length]); i = i + 1) {
          let isId = id == events[$_get](i).id;
          if (isId && (func == null || dart.equals(func, events[$_get](i).function))) {
            events[$removeAt](i);
            break;
          }
        }
      } else {
        events[$clear]();
      }
      return this;
    }
    offAll() {
      this[_onend][$clear]();
      this[_onfade][$clear]();
      this[_onload][$clear]();
      this[_onloaderror][$clear]();
      this[_onplayerror][$clear]();
      this[_onpause][$clear]();
      this[_onplay][$clear]();
      this[_onstop][$clear]();
      this[_onmute][$clear]();
      this[_onvolume][$clear]();
      this[_onrate][$clear]();
      this[_onseek][$clear]();
      this[_onunlock][$clear]();
      this[_onresume][$clear]();
    }
    once(event, func, id) {
      this.on(event, func, id, true);
      return this;
    }
    [_loadBuffer]() {
      let url = this[_src]._get(0);
      let audioBuffer = this[_cache][$_get](url);
      if (audioBuffer != null) {
        this[_duration] = audioBuffer.duration;
        this[_loadSound](audioBuffer);
        return;
      }
      if (dart.test(core.RegExp.new("^data:[^;]+;base64,").hasMatch(url))) {
        let base64Data = src__utils.split(url, ",", 1)[$_get](1);
        let dataView = convert.base64.decode(base64Data);
        this[_decodeAudioData](dataView[$buffer]);
      } else {
        html.HttpRequest.request(url, {method: "GET", withCredentials: this[_xhrWithCredentials], responseType: "arraybuffer"}).then(dart.dynamic, dart.fn(xhr => {
          let code = xhr.status;
          if (dart.notNull(code) < 200 || dart.notNull(code) >= 400) {
            this[_emit]("loaderror", null, "Failed loading audio file with status: " + dart.str(code));
            return;
          }
          this[_decodeAudioData](typed_data.ByteBuffer._check(xhr[$response]));
        }, HttpRequestToNull()), {onError: dart.fn(() => {
            if (dart.test(this[_webAudio])) {
              this[_html5] = true;
              this[_webAudio] = false;
              this[_sounds] = JSArrayOfSound().of([]);
              this[_cache][$remove](url);
              this.load();
            }
          }, VoidToNull())});
      }
    }
    [_decodeAudioData](arraybuffer) {
      let error = dart.fn(() => {
        this[_emit]("loaderror", null, "Decoding audio data failed.");
      }, VoidToNull());
      src__howler_base.Howler.ctx[$decodeAudioData](arraybuffer).then(dart.dynamic, dart.fn(buffer => {
        if (buffer != null && dart.notNull(this[_sounds][$length]) > 0) {
          this[_cache][$_set](this[_src], buffer);
          this[_loadSound](buffer);
        } else {
          error();
        }
      }, AudioBufferToNull()), {onError: error});
    }
    [_loadSound](buffer) {
      if (buffer != null && (this[_duration] == null || this[_duration] === 0)) {
        this[_duration] = buffer.duration;
      }
      if (this[_sprite][$length] === 0) {
        this[_sprite] = new (IdentityMapOfString$_HowlSpriteParams()).from(["__default", new src__howler_base._HowlSpriteParams.new(0, (dart.notNull(this[_duration]) * 1000)[$floor]())]);
      }
      if (this[_state] !== "loaded") {
        this[_state] = "loaded";
        this[_emit]("load");
        this[_loadQueue]();
      }
    }
    [_emit](eventType, id, msg) {
      if (id === void 0) id = null;
      if (msg === void 0) msg = null;
      let events = this[_getEventListeners](eventType);
      let offEvents = null;
      for (let i = dart.notNull(events[$length]) - 1; i >= 0; i = i - 1) {
        let evt = events[$_get](i);
        if (evt.id == null || evt.id == id || eventType === "load") {
          async.Timer.new(core.Duration.zero, dart.fn(() => {
            evt.function(this, eventType, id, msg);
          }, VoidToNull()));
          if (dart.test(evt.once)) {
            if (offEvents == null) offEvents = JSArrayOf_HowlEventListenerWrapper().of([]);
            offEvents[$add](evt);
          }
        }
      }
      if (offEvents != null) {
        for (let evt of offEvents) {
          this.off(eventType, evt.id, evt.function);
        }
      }
      this[_loadQueue](eventType);
    }
    [_loadQueue](event) {
      if (event === void 0) event = null;
      if (dart.notNull(this[_queue][$length]) > 0) {
        let task = this[_queue][$_get](0);
        if (event == null) {
          dart.dsend(task, 'action', []);
        } else if (task.event == event) {
          this[_queue][$removeAt](0);
          this[_loadQueue]();
        }
      }
    }
    [_ended](sound) {
      let sprite = sound[_sprite];
      if (!dart.test(this[_webAudio]) && sound[_node] != null && !dart.test(sound[_node].audio.paused) && !dart.test(sound[_node].audio.ended) && dart.notNull(sound[_node].audio.currentTime) < dart.notNull(sound[_stop])) {
        async.Timer.new(new core.Duration.new({milliseconds: 100}), dart.fn(() => {
          this[_ended](sound);
        }, VoidToNull()));
        return;
      }
      let loop = dart.test(sound[_loop]) || dart.test(this[_sprite][$_get](sprite).loop);
      this[_emit]("end", sound[_id]);
      if (!dart.test(this[_webAudio]) && loop) {
        this.stop(sound[_id], true).play(sound[_id]);
      }
      if (dart.test(this[_webAudio]) && loop) {
        this[_emit]("play", sound[_id]);
        sound[_seek] = sound[_start];
        sound[_rateSeek] = 0.0;
        sound[_playStart] = src__howler_base.Howler.ctx.currentTime;
        let timeout = ((dart.notNull(sound[_stop]) - dart.notNull(sound[_start])) * 1000 / sound[_rate][$abs]())[$truncate]();
        this[_endTimers][$_set](sound[_id], async.Timer.new(new core.Duration.new({milliseconds: timeout}), dart.fn(() => {
          this[_ended](sound);
        }, VoidToNull())));
      }
      if (dart.test(this[_webAudio]) && !loop) {
        sound[_paused] = true;
        sound[_ended] = true;
        sound[_seek] = sound[_start];
        sound[_rateSeek] = 0.0;
        this[_clearTimer](sound[_id]);
        this[_cleanBuffer](sound[_node]);
        src__howler_base.Howler[_autoSuspend]();
      }
      if (!dart.test(this[_webAudio]) && !loop) {
        this.stop(sound[_id], true);
      }
    }
    [_clearTimer](id) {
      let endTimer = this[_endTimers][$_get](id);
      if (endTimer != null) {
        if (async.Timer.is(endTimer)) {
          endTimer.cancel();
        } else {
          let sound = this[_soundById](core.int._check(id));
          if (sound != null && sound[_node] != null) {
            sound[_node].eventTarget[$removeEventListener]("ended", EventTodynamic()._check(endTimer), false);
          }
        }
        this[_endTimers][$remove](id);
      }
    }
    [_soundById](id) {
      for (let i = 0; i < dart.notNull(this[_sounds][$length]); i = i + 1) {
        let sound = this[_sounds][$_get](i);
        if (sound[_id] == id) return sound;
      }
      return null;
    }
    [_inactiveSound]() {
      this[_drain]();
      for (let i = 0; i < dart.notNull(this[_sounds][$length]); i = i + 1) {
        let sound = this[_sounds][$_get](i);
        if (dart.test(sound[_ended])) {
          return sound.reset();
        }
      }
      return new src__howler_base.Sound.new(this);
    }
    [_drain]() {
      let limit = this[_pool];
      let cnt = 0;
      if (dart.notNull(this[_sounds][$length]) < dart.notNull(limit)) {
        return;
      }
      for (let i = 0; i < dart.notNull(this[_sounds][$length]); i = i + 1) {
        if (dart.test(this[_sounds][$_get](i)[_ended])) {
          cnt = cnt + 1;
        }
      }
      for (let i = dart.notNull(this[_sounds][$length]) - 1; i >= 0; i = i - 1) {
        if (cnt <= dart.notNull(limit)) return;
        let sound = this[_sounds][$_get](i);
        if (dart.test(sound[_ended])) {
          if (dart.test(this[_webAudio]) && sound[_node] != null) {
            sound[_node].bufferSource.disconnect(0);
          }
          this[_sounds][$removeAt](i);
          cnt = cnt - 1;
        }
      }
    }
    [_getSoundIds](id) {
      if (id === void 0) id = null;
      if (id == null) {
        let ids = JSArrayOfint().of([]);
        for (let i = 0; i < dart.notNull(this[_sounds][$length]); i = i + 1) {
          ids[$add](this[_sounds][$_get](i)[_id]);
        }
        return ids;
      } else {
        return JSArrayOfint().of([id]);
      }
    }
    [_refreshBuffer](sound) {
      sound[_node].bufferSource = src__howler_base.Howler.ctx.createBufferSource();
      sound[_node].bufferSource.buffer = this[_cache][$_get](this[_src]);
      if (sound[_panner] != null) {
        sound[_node].bufferSource[$connectNode](sound[_panner]);
      } else {
        sound[_node].bufferSource[$connectNode](sound[_node].gainNode);
      }
      sound[_node].bufferSource.loop = sound[_loop];
      if (dart.test(sound[_loop])) {
        sound[_node].bufferSource.loopStart = sound[_start];
        sound[_node].bufferSource.loopEnd = sound[_stop];
      }
      sound[_node].bufferSource.playbackRate.setValueAtTime(sound[_rate], src__howler_base.Howler.ctx.currentTime);
    }
    [_cleanBuffer](node) {
      if (src__howler_base.Howler[_scratchBuffer] != null && node.bufferSource != null) {
        node.bufferSource.disconnect(0);
        if (dart.test(src__howler_base.Howler.isIOS)) {
          try {
            node.bufferSource.buffer = src__howler_base.Howler[_scratchBuffer];
          } catch (e$) {
            let e = dart.getThrown(e$);
          }
        }
      }
      node.bufferSource = null;
    }
  };
  (src__howler_base.Howl.new = function(opts) {
    let src = opts && 'src' in opts ? opts.src : null;
    let autoplay = opts && 'autoplay' in opts ? opts.autoplay : false;
    let format = opts && 'format' in opts ? opts.format : null;
    let html5 = opts && 'html5' in opts ? opts.html5 : false;
    let mute = opts && 'mute' in opts ? opts.mute : false;
    let loop = opts && 'loop' in opts ? opts.loop : false;
    let pool = opts && 'pool' in opts ? opts.pool : 5;
    let preload = opts && 'preload' in opts ? opts.preload : true;
    let rate = opts && 'rate' in opts ? opts.rate : 1.0;
    let sprite = opts && 'sprite' in opts ? opts.sprite : null;
    let volume = opts && 'volume' in opts ? opts.volume : 1.0;
    let xhrWithCredentials = opts && 'xhrWithCredentials' in opts ? opts.xhrWithCredentials : false;
    let onend = opts && 'onend' in opts ? opts.onend : null;
    let onfade = opts && 'onfade' in opts ? opts.onfade : null;
    let onload = opts && 'onload' in opts ? opts.onload : null;
    let onloaderror = opts && 'onloaderror' in opts ? opts.onloaderror : null;
    let onplayerror = opts && 'onplayerror' in opts ? opts.onplayerror : null;
    let onpause = opts && 'onpause' in opts ? opts.onpause : null;
    let onplay = opts && 'onplay' in opts ? opts.onplay : null;
    let onstop = opts && 'onstop' in opts ? opts.onstop : null;
    let onmute = opts && 'onmute' in opts ? opts.onmute : null;
    let onvolume = opts && 'onvolume' in opts ? opts.onvolume : null;
    let onrate = opts && 'onrate' in opts ? opts.onrate : null;
    let onseek = opts && 'onseek' in opts ? opts.onseek : null;
    let onunlock = opts && 'onunlock' in opts ? opts.onunlock : null;
    let onresume = opts && 'onresume' in opts ? opts.onresume : null;
    this[_autoplay] = null;
    this[_format] = null;
    this[_html5] = null;
    this[_muted] = null;
    this[_loop] = null;
    this[_pool] = null;
    this[_preload] = null;
    this[_rate] = null;
    this[_sprite] = null;
    this[_src] = null;
    this[_volume] = null;
    this[_xhrWithCredentials] = null;
    this[_duration] = null;
    this[_state] = null;
    this[_sounds] = null;
    this[_endTimers] = null;
    this[_queue] = null;
    this[_playLock] = null;
    this[_onend] = null;
    this[_onfade] = null;
    this[_onload] = null;
    this[_onloaderror] = null;
    this[_onplayerror] = null;
    this[_onpause] = null;
    this[_onplay] = null;
    this[_onstop] = null;
    this[_onmute] = null;
    this[_onvolume] = null;
    this[_onrate] = null;
    this[_onseek] = null;
    this[_onunlock] = null;
    this[_onresume] = null;
    this[_webAudio] = null;
    this[_cache] = new (LinkedMapOf_HowlSrc$AudioBuffer()).new();
    if (src == null || dart.test(src[$isEmpty])) {
      html.window[$console].error("An array of source files must be passed with any new Howl.");
      return;
    }
    if (src__howler_base.Howler.ctx == null) {
      src__howler_base._setupAudioContext();
    }
    this[_autoplay] = autoplay;
    this[_format] = format != null ? format : JSArrayOfString().of([]);
    this[_html5] = html5;
    this[_muted] = mute;
    this[_loop] = loop;
    this[_pool] = pool;
    this[_preload] = preload;
    this[_rate] = rate;
    this[_sprite] = sprite != null ? src__howler_base._HowlSpriteParams.toMapOfSpritesParams(sprite) : new (IdentityMapOfString$_HowlSpriteParams()).new();
    this[_src] = new src__howler_base._HowlSrc.list(src);
    this[_volume] = volume;
    this[_xhrWithCredentials] = xhrWithCredentials;
    this[_duration] = 0.0;
    this[_state] = "unloaded";
    this[_sounds] = JSArrayOfSound().of([]);
    this[_endTimers] = new (IdentityMapOfint$dynamic()).new();
    this[_queue] = JSArrayOf_HowlCall().of([]);
    this[_playLock] = false;
    this[_onend] = onend != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onend)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onfade] = onfade != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onfade)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onload] = onload != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onload)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onloaderror] = onloaderror != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onloaderror)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onplayerror] = onplayerror != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onplayerror)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onpause] = onpause != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onpause)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onplay] = onplay != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onplay)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onstop] = onstop != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onstop)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onmute] = onmute != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onmute)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onvolume] = onvolume != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onvolume)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onrate] = onrate != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onrate)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onseek] = onseek != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onseek)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onunlock] = onunlock != null ? JSArrayOf_HowlEventListenerWrapper().of([new src__howler_base._HowlEventListenerWrapper.new(onunlock)]) : JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_onresume] = JSArrayOf_HowlEventListenerWrapper().of([]);
    this[_webAudio] = dart.test(src__howler_base.Howler.usingWebAudio) && !dart.test(this[_html5]);
    if (src__howler_base.Howler.ctx != null && dart.test(src__howler_base.Howler.autoUnlock)) {
      src__howler_base.Howler[_unlockAudio]();
    }
    src__howler_base.Howler[_howls][$add](this);
    if (dart.test(this[_autoplay])) {
      this[_queue][$add](new src__howler_base._HowlCall.new("play", dart.fn(() => {
        this.play();
      }, VoidToNull())));
    }
    if (dart.test(this[_preload])) {
      this.load();
    }
  }).prototype = src__howler_base.Howl.prototype;
  dart.addTypeTests(src__howler_base.Howl);
  dart.setMethodSignature(src__howler_base.Howl, () => ({
    __proto__: dart.getMethods(src__howler_base.Howl.__proto__),
    [_getEventListeners]: dart.fnType(core.List$(src__howler_base._HowlEventListenerWrapper), [core.String]),
    load: dart.fnType(src__howler_base.Howl, []),
    play: dart.fnType(core.int, [], [dart.dynamic, core.bool]),
    pause: dart.fnType(src__howler_base.Howl, [core.int], [core.bool]),
    stopAll: dart.fnType(src__howler_base.Howl, []),
    stopIDs: dart.fnType(src__howler_base.Howl, [core.List$(core.int)]),
    stop: dart.fnType(src__howler_base.Howl, [core.int], [core.bool]),
    mute: dart.fnType(src__howler_base.Howl, [core.bool], [core.int]),
    getVolume: dart.fnType(core.double, [], [core.int]),
    setVolume: dart.fnType(src__howler_base.Howl, [core.double], [core.int, core.bool]),
    fade: dart.fnType(src__howler_base.Howl, [core.double, core.double, core.int], [core.int]),
    [_startFadeInterval]: dart.fnType(dart.void, [src__howler_base.Sound, core.double, core.double, core.int, dart.dynamic, dart.dynamic]),
    [_stopFade]: dart.fnType(dart.void, [core.int]),
    getLoop: dart.fnType(core.bool, [], [core.int]),
    setLoop: dart.fnType(src__howler_base.Howl, [core.bool], [core.int]),
    getRate: dart.fnType(core.double, [], [core.int]),
    setRate: dart.fnType(src__howler_base.Howl, [core.double], [core.int]),
    getSeek: dart.fnType(core.double, [], [core.int]),
    setSeek: dart.fnType(src__howler_base.Howl, [core.double], [core.int]),
    playing: dart.fnType(core.bool, [], [core.int]),
    duration: dart.fnType(core.double, [], [core.int]),
    state: dart.fnType(core.String, []),
    unload: dart.fnType(dart.void, []),
    on: dart.fnType(src__howler_base.Howl, [core.String, dart.fnType(dart.dynamic, [src__howler_base.Howl, core.String, core.int, core.String]), core.int], [core.bool]),
    off: dart.fnType(src__howler_base.Howl, [core.String], [core.int, dart.fnType(dart.dynamic, [src__howler_base.Howl, core.String, core.int, core.String])]),
    offAll: dart.fnType(src__howler_base.Howl, []),
    once: dart.fnType(src__howler_base.Howl, [core.String, dart.fnType(dart.dynamic, [src__howler_base.Howl, core.String, core.int, core.String]), core.int]),
    [_loadBuffer]: dart.fnType(dart.void, []),
    [_decodeAudioData]: dart.fnType(dart.void, [typed_data.ByteBuffer]),
    [_loadSound]: dart.fnType(dart.void, [web_audio.AudioBuffer]),
    [_emit]: dart.fnType(dart.void, [core.String], [core.int, core.String]),
    [_loadQueue]: dart.fnType(dart.void, [], [core.String]),
    [_ended]: dart.fnType(dart.void, [src__howler_base.Sound]),
    [_clearTimer]: dart.fnType(dart.void, [dart.dynamic]),
    [_soundById]: dart.fnType(src__howler_base.Sound, [core.int]),
    [_inactiveSound]: dart.fnType(src__howler_base.Sound, []),
    [_drain]: dart.fnType(dart.void, []),
    [_getSoundIds]: dart.fnType(core.List$(core.int), [], [core.int]),
    [_refreshBuffer]: dart.fnType(dart.void, [src__howler_base.Sound]),
    [_cleanBuffer]: dart.fnType(dart.void, [src__howler_base._HowlAudioNode])
  }));
  dart.setGetterSignature(src__howler_base.Howl, () => ({
    __proto__: dart.getGetters(src__howler_base.Howl.__proto__),
    soundIDs: core.List$(core.int)
  }));
  dart.setLibraryUri(src__howler_base.Howl, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base.Howl, () => ({
    __proto__: dart.getFields(src__howler_base.Howl.__proto__),
    [_autoplay]: dart.fieldType(core.bool),
    [_format]: dart.fieldType(core.List$(core.String)),
    [_html5]: dart.fieldType(core.bool),
    [_muted]: dart.fieldType(core.bool),
    [_loop]: dart.fieldType(core.bool),
    [_pool]: dart.fieldType(core.int),
    [_preload]: dart.fieldType(core.bool),
    [_rate]: dart.fieldType(core.double),
    [_sprite]: dart.fieldType(core.Map$(core.String, src__howler_base._HowlSpriteParams)),
    [_src]: dart.fieldType(src__howler_base._HowlSrc),
    [_volume]: dart.fieldType(core.double),
    [_xhrWithCredentials]: dart.fieldType(core.bool),
    [_duration]: dart.fieldType(core.double),
    [_state]: dart.fieldType(core.String),
    [_sounds]: dart.fieldType(core.List$(src__howler_base.Sound)),
    [_endTimers]: dart.fieldType(core.Map$(core.int, dart.dynamic)),
    [_queue]: dart.fieldType(core.List$(src__howler_base._HowlCall)),
    [_playLock]: dart.fieldType(core.bool),
    [_onend]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onfade]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onload]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onloaderror]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onplayerror]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onpause]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onplay]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onstop]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onmute]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onvolume]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onrate]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onseek]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onunlock]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_onresume]: dart.fieldType(core.List$(src__howler_base._HowlEventListenerWrapper)),
    [_webAudio]: dart.fieldType(core.bool),
    [_cache]: dart.finalFieldType(core.Map$(src__howler_base._HowlSrc, web_audio.AudioBuffer))
  }));
  dart.defineExtensionMethods(src__howler_base.Howl, ['toString']);
  src__howler_base._HowlAudioNode = class _HowlAudioNode extends core.Object {
    get eventTarget() {
      return this.gainNode != null ? this.gainNode : this.audio;
    }
  };
  (src__howler_base._HowlAudioNode.audio = function(audio) {
    this.bufferSource = null;
    this[_unlocked] = null;
    this.gainNode = null;
    this.audio = audio;
    ;
  }).prototype = src__howler_base._HowlAudioNode.prototype;
  (src__howler_base._HowlAudioNode.gain = function(gainNode) {
    this.bufferSource = null;
    this[_unlocked] = null;
    this.audio = null;
    this.gainNode = gainNode;
    ;
  }).prototype = src__howler_base._HowlAudioNode.prototype;
  dart.addTypeTests(src__howler_base._HowlAudioNode);
  dart.setGetterSignature(src__howler_base._HowlAudioNode, () => ({
    __proto__: dart.getGetters(src__howler_base._HowlAudioNode.__proto__),
    eventTarget: html.EventTarget
  }));
  dart.setLibraryUri(src__howler_base._HowlAudioNode, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base._HowlAudioNode, () => ({
    __proto__: dart.getFields(src__howler_base._HowlAudioNode.__proto__),
    audio: dart.fieldType(html.AudioElement),
    gainNode: dart.fieldType(web_audio.GainNode),
    bufferSource: dart.fieldType(web_audio.AudioBufferSourceNode),
    [_unlocked]: dart.fieldType(core.bool)
  }));
  const _parent$ = dart.privateName(src__howler_base, "_parent");
  const _errorListener = dart.privateName(src__howler_base, "_errorListener");
  const _loadListener = dart.privateName(src__howler_base, "_loadListener");
  src__howler_base.Sound = class Sound extends core.Object {
    create() {
      let parent = this[_parent$];
      let volume = dart.test(src__howler_base.Howler[_muted]) || dart.test(this[_muted]) || dart.test(this[_parent$][_muted]) ? 0 : this[_volume];
      if (dart.test(parent[_webAudio])) {
        this[_node] = new src__howler_base._HowlAudioNode.gain(src__howler_base.Howler.ctx[$createGain]());
        this[_node].gainNode.gain.setValueAtTime(volume, src__howler_base.Howler.ctx.currentTime);
        this[_node].gainNode[$connectNode](src__howler_base.Howler.masterGain);
      } else {
        this[_node] = new src__howler_base._HowlAudioNode.audio(src__howler_base.Howler[_obtainHtml5Audio]());
        this[_errorFn] = dart.bind(this, _errorListener);
        this[_node].audio[$addEventListener]("error", this[_errorFn], false);
        this[_loadFn] = dart.bind(this, _loadListener);
        this[_node].audio[$addEventListener](src__howler_base.Howler[_canPlayEvent], this[_loadFn], false);
        this[_node].audio.src = parent[_src]._get(0);
        this[_node].audio.preload = "auto";
        this[_node].audio.volume = dart.notNull(volume) * dart.notNull(src__howler_base.Howler.volume());
        this[_node].audio.load();
      }
      return this;
    }
    reset() {
      let t6;
      let parent = this[_parent$];
      this[_muted] = parent[_muted];
      this[_loop] = parent[_loop];
      this[_volume] = parent[_volume];
      this[_rate] = parent[_rate];
      this[_seek] = 0.0;
      this[_rateSeek] = 0.0;
      this[_paused] = true;
      this[_ended] = true;
      this[_sprite] = "__default";
      this[_id] = (t6 = src__howler_base.Howler, t6[_counter] = dart.notNull(t6[_counter]) + 1);
      return this;
    }
    [_errorListener](_) {
      this[_parent$][_emit]("loaderror", this[_id], core.String._check(this[_node].audio.error != null ? this[_node].audio.error.code : "0"));
      this[_node].eventTarget[$removeEventListener]("error", this[_errorFn], false);
    }
    [_loadListener](_) {
      let parent = this[_parent$];
      parent[_duration] = (dart.notNull(this[_node].audio.duration) * 10 / 10)[$ceilToDouble]();
      if (parent[_sprite][$length] === 0) {
        parent[_sprite] = new (IdentityMapOfString$_HowlSpriteParams()).from(["__default", new src__howler_base._HowlSpriteParams.new(0, (dart.notNull(parent[_duration]) * 1000)[$floor]())]);
      }
      if (parent[_state] !== "loaded") {
        parent[_state] = "loaded";
        parent[_emit]("load");
        parent[_loadQueue]();
      }
      this[_node].eventTarget[$removeEventListener](src__howler_base.Howler[_canPlayEvent], this[_loadFn], false);
    }
    get parent() {
      return this[_parent$];
    }
    toString() {
      return "Sound{id: " + dart.str(this[_id]) + ", sprite: " + dart.str(this[_sprite]) + ", volume: " + dart.str(this[_volume]) + ", paused: " + dart.str(this[_paused]) + ", loop: " + dart.str(this[_loop]) + ", muted: " + dart.str(this[_muted]) + "}";
    }
    get start() {
      return this[_start];
    }
    get stop() {
      return this[_stop];
    }
    get volume() {
      return this[_volume];
    }
    get paused() {
      return this[_paused];
    }
    get ended() {
      return this[_ended];
    }
    get id() {
      return this[_id];
    }
    get sprite() {
      return this[_sprite];
    }
    get rate() {
      return this[_rate];
    }
    get loop() {
      return this[_loop];
    }
    get muted() {
      return this[_muted];
    }
    get playStart() {
      return this[_playStart];
    }
  };
  (src__howler_base.Sound.new = function(_parent) {
    let t6;
    this[_start] = 0.0;
    this[_stop] = 0.0;
    this[_volume] = null;
    this[_paused] = null;
    this[_ended] = null;
    this[_id] = null;
    this[_sprite] = null;
    this[_seek] = null;
    this[_rateSeek] = null;
    this[_rate] = null;
    this[_loop] = null;
    this[_muted] = null;
    this[_node] = null;
    this[_panner] = null;
    this[_interval] = null;
    this[_fadeTo] = null;
    this[_playStart] = null;
    this[_loadFn] = null;
    this[_errorFn] = null;
    this[_parent$] = _parent;
    let parent = this[_parent$];
    this[_muted] = parent[_muted];
    this[_loop] = parent[_loop];
    this[_volume] = parent[_volume];
    this[_rate] = parent[_rate];
    this[_seek] = 0.0;
    this[_paused] = true;
    this[_ended] = true;
    this[_sprite] = "__default";
    this[_id] = (t6 = src__howler_base.Howler, t6[_counter] = dart.notNull(t6[_counter]) + 1);
    parent[_sounds][$add](this);
    this.create();
  }).prototype = src__howler_base.Sound.prototype;
  dart.addTypeTests(src__howler_base.Sound);
  dart.setMethodSignature(src__howler_base.Sound, () => ({
    __proto__: dart.getMethods(src__howler_base.Sound.__proto__),
    create: dart.fnType(src__howler_base.Sound, []),
    reset: dart.fnType(src__howler_base.Sound, []),
    [_errorListener]: dart.fnType(dart.void, [dart.dynamic]),
    [_loadListener]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__howler_base.Sound, () => ({
    __proto__: dart.getGetters(src__howler_base.Sound.__proto__),
    parent: src__howler_base.Howl,
    start: core.double,
    stop: core.double,
    volume: core.double,
    paused: core.bool,
    ended: core.bool,
    id: core.int,
    sprite: core.String,
    rate: core.double,
    loop: core.bool,
    muted: core.bool,
    playStart: core.double
  }));
  dart.setLibraryUri(src__howler_base.Sound, "package:howler/src/howler_base.dart");
  dart.setFieldSignature(src__howler_base.Sound, () => ({
    __proto__: dart.getFields(src__howler_base.Sound.__proto__),
    [_parent$]: dart.finalFieldType(src__howler_base.Howl),
    [_start]: dart.fieldType(core.double),
    [_stop]: dart.fieldType(core.double),
    [_volume]: dart.fieldType(core.double),
    [_paused]: dart.fieldType(core.bool),
    [_ended]: dart.fieldType(core.bool),
    [_id]: dart.fieldType(core.int),
    [_sprite]: dart.fieldType(core.String),
    [_seek]: dart.fieldType(core.double),
    [_rateSeek]: dart.fieldType(core.double),
    [_rate]: dart.fieldType(core.double),
    [_loop]: dart.fieldType(core.bool),
    [_muted]: dart.fieldType(core.bool),
    [_node]: dart.fieldType(src__howler_base._HowlAudioNode),
    [_panner]: dart.fieldType(web_audio.AudioNode),
    [_interval]: dart.fieldType(async.Timer),
    [_fadeTo]: dart.fieldType(core.double),
    [_playStart]: dart.fieldType(core.double),
    [_loadFn]: dart.fieldType(dart.fnType(dart.dynamic, [html.Event])),
    [_errorFn]: dart.fieldType(dart.fnType(dart.dynamic, [html.Event]))
  }));
  dart.defineExtensionMethods(src__howler_base.Sound, ['toString']);
  src__howler_base._setupAudioContext = function() {
    if (!dart.test(src__howler_base.Howler.usingWebAudio)) return;
    try {
      src__howler_base.Howler.ctx = web_audio.AudioContext.new();
    } catch (e$) {
      let e = dart.getThrown(e$);
      src__howler_base.Howler.usingWebAudio = false;
    }
    if (src__howler_base.Howler.ctx == null) {
      src__howler_base.Howler.usingWebAudio = false;
    }
    if (dart.test(src__howler_base.Howler.usingWebAudio)) {
      src__howler_base.Howler.masterGain = src__howler_base.Howler.ctx[$createGain]();
      src__howler_base.Howler.masterGain.gain.setValueAtTime(dart.test(src__howler_base.Howler[_muted]) ? 0 : 1, src__howler_base.Howler.ctx.currentTime);
      src__howler_base.Howler.masterGain[$connectNode](src__howler_base.Howler.ctx.destination);
    }
    src__howler_base.Howler[_setup]();
  };
  dart.defineLazy(src__howler_base, {
    /*src__howler_base.Howler*/get Howler() {
      return new src__howler_base._HowlerGlobal.new();
    }
  });
  dart.trackLibraries("packages/howler/howler", {
    "package:howler/src/howler_base.dart": src__howler_base,
    "package:howler/howler.dart": howler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/howler/src/howler_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8C0B,YAAA,AAAmB,qBAAL,OAAO,AAAW,6BAAY;IAAG;;AAGrD;IAAK;;AAYrB,YAAO,AAAW,AAAO,AAAkB,oCAAT,sBAAgB,AAA4B,gBAArB,6BAA8B,AAAW;IACpG;WAKsB;;AAIpB,UAAU,AAAI,YAAG;QACf;;AAGF,UAAI,GAAG,IAAI,QAAY,aAAJ,GAAG,KAAI,KAAS,aAAJ,GAAG,KAAI;QAC/B,gBAAU,GAAG;AAGlB,sBAAS;AACP,gBAAY;;AAId,sBAAS;UACF,AAAW,AAAK,oCAAe,GAAG,EAAE,AAAO,AAAI;;AAItD,iBAAS,IAAE,GAAG,AAAC,CAAA,gBAAM,AAAO,wBAAQ,IAAA,AAAC,CAAA;AACnC,yBAAU,AAAM,AAAI,oBAAH,CAAC;AAEZ,sBAAW,AAAM,AAAI,oBAAH,CAAC;AAGvB,qBAAS,IAAE,GAAG,AAAC,CAAA,gBAAC,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACrB,0BAAa,AAAM,AAAI,oBAAH,CAAC,cAAa,AAAG,GAAA,QAAC,CAAC;AAE7C,kBAAI,KAAK,IAAI,QAAQ,AAAM,KAAD,WAAU;gBAClC,AAAM,AAAM,AAAM,KAAb,uBAAoC,aAAd,AAAM,KAAD,0BAAW,GAAG;;;;;;AAOxD,YAAY;IACd;SAIwB;AAItB,UAAU,AAAI,YAAG;QACf;;MAGG,eAAS,KAAK;AAGnB,oBAAS;QACF,AAAW,AAAK,8CAAe,KAAK,IAAG,IAAS,eAAS,AAAO,AAAI;;AAI3E,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAM,AAAO,wBAAQ,IAAA,AAAC,CAAA;AACnC,uBAAU,AAAM,AAAI,oBAAH,CAAC;AAEZ,oBAAW,AAAM,AAAI,oBAAH,CAAC;AAGvB,mBAAS,IAAE,GAAG,AAAC,CAAA,gBAAC,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACrB,wBAAa,AAAM,AAAI,oBAAH,CAAC,cAAa,AAAG,GAAA,QAAC,CAAC;AAE7C,gBAAI,KAAK,IAAI,QAAQ,AAAM,KAAD,WAAU;cAClC,AAAM,AAAM,AAAM,KAAb,gCAAsB,KAAK,IAAI,OAAO,AAAM,KAAD;;;;;AAMxD,YAAO;IACT;;AAOE,eAAS,IAAoB,aAAb,AAAO,yBAAO,GAAG,AAAC,CAAA,IAAE,GAAG,IAAA,AAAC,CAAA;QACjC,AAAM,AAAI,oBAAH,CAAC;;AAIf,oBAAU,uBAAsB,YAAO,QAAiB,UAAJ,sBAAa;QAC1D,AAAI;QACJ,WAAM;QACX;;AAGF,YAAO;IACT;WAKmB;MACjB,MAAM,AAAI,GAAD,cAAiB,gBAAO,QAAQ;AACzC,YAAY,AAAO,sBAAC,GAAG;IACzB;;MASO,aAAa,AAAY,YAAL,OAAY,AAAI,iBAAQ;AACjD,UAAS,AAAM,cAAG,MAAW,aAAQ;MAGhC;AAGL,qBAAU;;UAGF;;cAEA;UACC,eAAU;UACf,WAAM;;;;AAMJ,mBAAW;AACf,sBAAI,AAAK,IAAD;UACD,eAAU;;;YAEV;;AAGT,qBAAU;QACH;;AAGP,YAAO;IACT;;AAOe,sBAAY;;QAIvB,YAAgB;;YAEX;AACL,cAAO;;AAGT,UAAK,AAAU,SAAD,IAAI,MAAO,MAAO;AAE3B,qBAAW,2CAAY,SAAS,EAAE;MAElC,gBAAU,uCACb,OAAiB,UAAT,QAAQ,eAAI,2CAAY,SAAS,EAAC,gBAC1C,QAAQ,QAAQ,EAChB,QAAQ,2CAAY,SAAS,EAAE,+BAC/B,OAAO,2CAAY,SAAS,EAAE,iCAC9B,OAAO,2CAAY,SAAS,EAAE,iCAC9B,OAAO,2CAAY,SAAS,EAAE,4BAC9B,OAAO,2CAAY,SAAS,EAAE,eAC9B,OAAO,2CAAY,SAAS,EAAE,iBAC9B,OAAsF,UAA/E,2CAAY,SAAS,EAAE,8BAAmB,2CAAY,SAAS,EAAE,4BAAiB,2CAAY,SAAS,EAAE,gBAChH,OAAsF,UAA/E,2CAAY,SAAS,EAAE,8BAAmB,2CAAY,SAAS,EAAE,4BAAiB,2CAAY,SAAS,EAAE,gBAChH,QAAQ,2CAAY,SAAS,EAAE,kCAC/B,QAAQ,2CAAY,SAAS,EAAE,kCAC/B,SAAS,2CAAY,SAAS,EAAE,+BAChC,QAAgD,UAAxC,2CAAY,SAAS,EAAE,+BAAoB,2CAAY,SAAS,EAAC;AAG3E,YAAO;IACT;uBAEqC,WAAkB;AACjD,wBAAc,AAAU,SAAD,aAAa;AACxC,UAAI,AAAY,WAAD,IAAI,QAAQ,AAAY,WAAD,YAAU,MAAO;MACvD,cAAc,AAAY,WAAD;AACzB,YAAO,YAAW,KAAI;IACxB;;AAiBM,yBAAmB,AAAiG,gBAA1F,oFAAmF,iBAAsB;AAEvI,oBAAS,yBAAuB,YAAO,mBAAS,YAAY,GAAE,MAAO;MAEhE,uBAAiB;MACjB,kBAAa;AAKlB,qBAAU,0BAAwB,AAAI,wBAAc;QAC7C,wBAAkB;QAClB;;MAKF,uBAAsB,AAAI,sBAAa,GAAG,GAAG;MAGlD,AAAS,iCAAiB,wBAAc,gBAAS;MACjD,AAAS,iCAAiB,sBAAY,gBAAS;MAC/C,AAAS,iCAAiB,mBAAS,gBAAS;AAE5C,YAAO;IACT;cAMa;AASX,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAQ,qBAAe,IAAA,AAAC,CAAA;AACnC,wBAAgB;QAIpB,AAAU,SAAD,gBAAc,aAAa;QAG/B,yBAAmB,SAAS;;AAInC,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAQ,AAAO,wBAAQ,IAAA,AAAC,CAAA;AACvC,uBAAU,AAAM,AAAI,oBAAH,CAAC;AAEZ,oBAAW,AAAM,AAAI,oBAAH,CAAC;AAGvB,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACzB,wBAAa,AAAM,AAAI,oBAAH,CAAC,cAAa,AAAG,GAAA,QAAC,CAAC;AAE7C,gBAAI,KAAK,IAAI,QAAQ,AAAM,KAAD,WAAU,mBAAS,AAAM,AAAM,KAAP;cAChD,AAAM,AAAM,KAAP,qBAAmB;cACxB,AAAM,AAAM,AAAM,KAAb;;;;;MAOR;AAGD,mBAAc,AAAI;MACtB,AAAO,MAAD,UAAe;MACrB,AAAO,MAAD,eAAkB,AAAI;MAG5B,AAAO,MAAD,OAAO;MAGR,AAAI;MAIT,AAAO,AAAQ,MAAT,kBAAgB,QAAC;QACrB,AAAO,MAAD,YAAY;QAGb,uBAAiB;QAGtB,AAAS,oCAAoB,wBAAc,gBAAS;QACpD,AAAS,oCAAoB,sBAAY,gBAAS;QAClD,AAAS,oCAAoB,mBAAS,gBAAS;AAG/C,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAQ,AAAO,wBAAQ,IAAA,AAAC,CAAA;UAClC,AAAM,AAAI,oBAAH,CAAC,SAAQ;;;IAI3B;;AAUE,oBAAU,AAAgB;AACxB,wCAAY,AAAgB;;AAI1B,qBAAe,AAAe;AAElC,UAAI,QAAQ,IAAI;QACd,AAAS,QAAD,YAAY,QAAC;UACnB,AAAO,AAAQ,2BAAM;;;AAIzB,YAAW;IACb;yBAKiC;AAI/B,qBAAU,WAAN,KAAK;QACF,AAAgB,4BAAI,KAAK;;AAGhC,YAAO;IACT;;AAWE,qBAAU,qBAAoB,AAAI,YAAG,mBAAS,AAAO;AACnD,cAAO;;AAIT,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAM,AAAO,wBAAQ,IAAA,AAAC,CAAA;AACnC,sBAAS,AAAM,AAAI,oBAAH,CAAC;AACf,mBAAS,IAAE,GAAG,AAAC,CAAA,gBAAM,AAAM,AAAI,AAAQ,oBAAX,CAAC,sBAAkB,IAAA,AAAC,CAAA;AAC9C,2BAAU,AAAM,AAAI,AAAO,AAAI,oBAAd,CAAC,kBAAU,CAAC;AAC3B,oBAAO;;;;;AAMf,UAAS,uBAAiB;QACnB,AAAc;QACd,sBAAgB;;MAIlB,sBAAoB,gBAAU,gCAAkB,MAAK;AACxD,uBAAU,mBAAa;QAElB,sBAAgB;QAChB,aAAQ;QAER,AAAI,AAAU,wCAAK,QAAC;UAClB,aAAQ;AAEb,wBAAU;YACH,4BAAsB;YACtB;;;;AAKX,YAAO;IACT;;AAQE,UAAS,AAAI,YAAG,mBAAS,AAAO;AAC9B,cAAO;;AAGT,UAAU,AAAM,eAAG,aAAkB,uBAAiB;QAC/C,AAAc;QACd,sBAAgB;YAElB,KAAS,AAAM,eAAG;QAChB,AAAI,AAAS,uCAAK,QAAC;UACjB,aAAQ;AAGb,mBAAS,IAAE,GAAG,AAAE,CAAD,gBAAQ,AAAO,wBAAQ,IAAA,AAAC,CAAA;YAChC,AAAM,AAAI,oBAAH,CAAC,SAAQ;;;AAIzB,YAAS,uBAAiB;UACnB,AAAc;UACd,sBAAgB;;YAIpB,KAAS,AAAM,eAAG;QAChB,4BAAsB;;AAG7B,YAAO;IACT;;;IAheI,iBAAW;IAGV,wBAAkB;IACnB,qBAAgB;IAGH,gBAAU;IAChB,eAAS;IACf,eAAS;IACP,gBAAU;IACV,sBAAgB;IAEd;IACJ,eAAU;IACV,qBAAgB;IAChB,mBAAc;IACN;IACN;IAGF,kBAAa;IAER;IAIL;IAqNA,uBAAiB;IACjB,wBAAkB;IACX;IA0JN;IACD,4BAAsB;IA9WpB,mBAAa,AAAO;IAEpB,aAAO;IAGP;EACP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6DAwc+B,MAAgB,IAAS;;gCAAO;IAAhC;IAAgB;IAAS;;EAAe;;;;;;;;;;;;;AAcrD,YAAA,AAAM;IAAO;SAER;AAAU,YAAA,AAAK,qBAAC,KAAK;IAAE;;UAGtB;AACpB,YAAA,AAAU,AAAa,UAAP,KAAK,IACX,6BAAN,KAAK,KACW,YAAZ,oBAAqB,iBAAN,KAAK,gBACpB,4BAAkB,cAAQ,AAAM,KAAD;IAAS;;AAMlD,UAAI,AAAU,mBAAG;AACX,gBAAI;AACR,iBAAS,IAAK;UACZ,IAAI,AAAE,AAAK,CAAN,GAAG,KAAO,cAAF,CAAC;;QAEhB,kBAAY,CAAC;;AAGf,YAAO;IACT;;AAIE,YAAa,eAAN;IACT;;8CArCsB;IAmBlB;;IAlBG,eAAQ,sBAAC,GAAG;EACnB;6CAEmB;IAef;IAfe;AACjB,QAAS,AAAM,gBAAG,MAAW,eAAQ;EACvC;;;;;;;;;;;;;;;;;;;;;gCAwD4E;AAC3C,oBAAU;AAEzC,eAAS,QAAS,AAAI,IAAD;AACZ,kBAAM,AAAM,KAAD;AACd,2BAAmB,4CAAwB,AAAM,KAAD;QACpD,AAAO,OAAA,QAAC,GAAG,EAAI,YAAY;;AAG7B,YAAO,QAAO;IAChB;;qDAzBuB,MAAW,IAAW;gCAAO;IAA7B;IAAW;IAAW;;EAAe;sDAEhC;;;;IACrB,YAAW,eAAiB,cAAV,AAAM,MAAA,QAAC;IACzB,UAAS,eAAiB,cAAV,AAAM,MAAA,QAAC;AAE5B,QAAmB,aAAd,AAAO,MAAD,cAAW;MACf,YAAO;;AAGL,oBAAoB,AAAW,cAArB,AAAM,MAAA,QAAC;MACnB,YAAO,AAAQ,AAAU,OAAX,KAAI,UAAU,AAAQ,OAAD,KAAI;;EAEhD;;;;;;;;;;6CAmBe,OAAY;IAAZ;IAAY;;EAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yBA0CwB;AACxD,cAAO,SAAS;YACT;;AAAO,gBAAO;;YACd;;AAAQ,gBAAO;;YACf;;AAAQ,gBAAO;;YACf;;AAAa,gBAAO;;YACpB;;AAAa,gBAAO;;YACpB;;AAAS,gBAAO;;YAChB;;AAAQ,gBAAO;;YACf;;AAAQ,gBAAO;;YACf;;AAAQ,gBAAO;;YACf;;AAAU,gBAAO;;YACjB;;AAAQ,gBAAO;;YACf;;AAAQ,gBAAO;;YACf;;AAAU,gBAAO;;YACjB;;AAAU,gBAAO;;;;AACb,gBAAO;;;IAEpB;;AA+G0B,YAAI,kBAAW,AAAQ,kCAAI,QAAC,KAAM,AAAE,CAAD;IAAQ;;AAInE,YAAO,AAAmE,8BAA3C,kBAAW,qBAAQ,cAAI,wBAAW,iBAAO;IAC1E;;AAMS,gBAAM;AAGb,oBAAI,AAAO;QACJ,YAAM,aAAa,MAAM;AAC9B,cAAO;;eAIA,IAAE,GAAG,AAAC,CAAA,gBAAM,AAAK,oBAAQ,IAAA,AAAC,CAAA;AAC1B;AAAM;AAEb,YAAS,iBAAW,QAAQ,AAAE,CAAD,gBAAQ,AAAQ,2BAAe,AAAO,qBAAC,CAAC,KAAK;UAExE,MAAW,AAAO,qBAAC,CAAC;;UAIpB,MAAW,AAAI,gBAAC,CAAC;AACjB,cAAI,AAAI,GAAD,IAAI;YACJ,YAAM,aAAa,MAAM;AAC9B;;AAGE,sBAAY,AAAuD,gBAAhD,yCAAyC,mBAAkB,GAAG;UACrF,MAAM,AAAc,KAAT,IAAI,OAAO,AAAM,KAAD,OAAO,KAAK;AAEvC,cAAK,AAAI,GAAD,IAAI,QAAQ,AAAI,GAAD;AACjB,sBAAM,AAAkB,iBAAZ,GAAG,EAAE,KAAK,UAAG;AACzB,wBAAY,AAAsB,gBAAf,0BAA0B,GAAG;YACpD,MAAM,AAAc,KAAT,IAAI,OAAO,AAAM,KAAD,OAAO,KAAK;;AAGzC,cAAI,GAAG,IAAI;YACT,MAAM,AAAI,GAAD;;;AAKb,YAAI,AAAI,GAAD,IAAI;UACT,AAAO,AAAQ,2BAAK;;AAItB,YAAI,GAAG,IAAI,kBAAQ,AAAO,+BAAO,GAAG;UAClC,MAAW,AAAI,gBAAC,CAAC;AACjB;;;AAIJ,UAAK,AAAI,GAAD,IAAI;QACL,YAAM,aAAa,MAAM;AAC9B,cAAO;;MAGJ,aAAW,oCAAe,GAAG;MAC7B,eAAS;AAId,UAAI,AAAO,AAAS,AAAS,oCAAG,YAAY,AAAI,AAAgB,GAAjB,aAAW,GAAG,OAAM;QAC5D,eAAS;QACT,kBAAY;;MAIf,+BAAM;AAGV,oBAAS;QACP;;AAGF,YAAO;IACT;SAOkB,QAAa;;0CAAW;AAEpC,eAAK;AAET,UAAI,AAAO,MAAD,IAAI;QAEZ,SAAS;AAIT,uBAAU;AACJ,oBAAM;AACV,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAQ,AAAQ,yBAAQ,IAAA,AAAC,CAAA;AACxC,0BAAS,AAAO,AAAI,qBAAH,CAAC,0BAAmB,AAAO,AAAI,qBAAH,CAAC;cAC5C,MAAA,AAAG,GAAA;cACH,KAAU,AAAO,AAAI,qBAAH,CAAC;;;AAIvB,cAAI,AAAI,GAAD,KAAI;YACT,SAAS;;YAGT,KAAK;;;YAKN,KAAW,YAAP,MAAM;aACb,gBAAK,MAAM;QACX,SAAS;YAEN,KAAW,OAAP,MAAM,gBAAmB,AAAO,iBAAG,YAAiB,AAAO,AAAS,qBAAR,MAAM,KAAK;AAE9E,cAAO;;AAKH,kBAAQ,AAAW,EAAT,IAAI,OAAY,iBAAW,EAAE,IAAS;AAGtD,UAAK,AAAM,KAAD,IAAI;AACZ,cAAO;;AAIT,UAAI,EAAE,IAAI,QAAQ,AAAO,MAAD,IAAI;QAC1B,SAAS,AAAM,KAAD;AACd,YAAI,AAAO,MAAD,IAAI,MAAM,SAAS;;AAM/B,UAAS,iBAAU;QAEjB,AAAM,KAAD,YAAC,mBAAU,MAAM;QAGtB,AAAM,KAAD,WAAU;AAGX,sBAAU,AAAM,KAAD;QAEd,AAAO,mBACJ,mCAAU,QAAQ;UACf,UAAK,OAAO;;AAIvB,cAAO,QAAO;;AAIhB,UAAI,EAAE,IAAI,mBAAS,AAAM,KAAD;AAEtB,uBAAK,QAAQ;UACN,iBAAW;;AAGlB,cAAO,AAAM,MAAD;;AAId,oBAAS;QACP,AAAO;;AAIF,iBAAY,oBAAI,GAAe,aAAZ,AAAM,KAAD,WAAS,IAAI,AAAM,KAAD,UAAmC,aAArB,AAAO,AAAS,qBAAR,MAAM,UAAS;AAC/E,qBAAgB,oBAAI,GAA0D,AAAQ,CAAnC,aAArB,AAAO,AAAS,qBAAR,MAAM,uBAAc,AAAO,AAAS,qBAAR,MAAM,SAAQ,oBAAQ,IAAI;AAC/F,oBAA4B,CAAR,aAAT,QAAQ,IAAG,OAAS,AAAM,AAAM,KAAP;AAEjC,kBAAkC,aAArB,AAAO,AAAS,qBAAR,MAAM,UAAS;AACpC,iBAA6D,CAA3B,aAArB,AAAO,AAAS,qBAAR,MAAM,uBAAc,AAAO,AAAS,qBAAR,MAAM,SAAQ;AAEjE,iBAAO,AAAM,KAAD;AACjB,qBAAK,IAAI;AACH,yBAAkB,AAAO,qBAAC,MAAM;QACpC,OAAO,AAAW,UAAD;;MAGnB,AAAM,KAAD,YAAC,mBAAU,MAAM;MAItB,AAAM,KAAD,WAAU;AAGX,sBAAY;QACd,AAAM,KAAD,YAAW;QAChB,AAAM,KAAD,UAAS,IAAI;QAClB,AAAM,KAAD,WAAU,KAAK;QACpB,AAAM,KAAD,UAAS,IAAI;QAClB,AAAM,KAAD,UAAS,IAAI;;AAIpB,UAAS,aAAL,IAAI,KAAI,IAAI;QACT,aAAO,KAAK;AACjB,cAAO;;AAIM,iBAAO,AAAM,KAAD;AAE3B,oBAAS;AAEW,2BAAe,SAAC,GAAE,GAAE,IAAG;UAClC,kBAAY;UACjB,AAAS,SAAA;UACJ,qBAAe,KAAK;AAGrB,oBAAoB,UAAb,AAAM,KAAD,uBAAgB,gBAAU,IAAI,AAAM,KAAD;UACnD,AAAK,AAAS,AAAK,IAAf,8BAA8B,GAAG,EAAE,AAAO,AAAI;UAClD,AAAM,KAAD,eAAc,AAAO,AAAI;oBAE9B,AAAM,KAAD,WAAS,AAAK,AAAa,IAAd,oBAAoB,GAAG,IAAI,EAAE,SAAS,AAAK,AAAa,IAAd,oBAAoB,GAAG,IAAI,EAAE,QAAQ;AAGjG,cAAI,AAAQ,OAAD,GAAG,KAAK,AAAQ,OAAD,GAAG;YACtB,AAAU,wBAAC,AAAM,KAAD,OAAY,gBAAU,qCAAuB,OAAO,IAAG;cACrE,aAAO,KAAK;;;AAIrB,yBAAM,QAAQ;YACR,gBAAe,oBAAM;cAClB,YAAM,QAAQ,AAAM,KAAD;cACnB;;;;AAKX,YAAI,AAAO,AAAM,kCAAG;UAClB,AAAY,YAAA,CAAC,MAAM,QAAQ,AAAM,KAAD,OAAM;;UAGjC,kBAAY;UAGZ,UAAK,UAAU,YAAY,EAAE;UAG7B,kBAAY,AAAM,KAAD;;;AAKpB,wBAAY;UACd,AAAK,AAAM,IAAP,qBAAqB,IAAI;UAC7B,AAAK,AAAM,IAAP,eAA4D,UAA7C,AAAM,KAAD,uBAAgB,2BAAU,AAAO,8CAAU,AAAK,AAAM,IAAP;UACvE,AAAK,AAAM,IAAP,gBAA8B,aAAd,AAAM,KAAD,0BAAW,AAAO;UAC3C,AAAK,AAAM,IAAP,sBAAsB,AAAM,KAAD;;AAIzB,uBAAO,AAAK,AAAM,IAAP;AAEf,gBAAK,IAAI,IAAI;cAEN,kBAAY;cAGjB,AAAS,SAAA;cAGT,AAAK,AASH,IATE,oBAAM,QAAC;gBACJ,kBAAY;gBACjB,AAAK,IAAD,cAAa;AAEjB,+BAAM,QAAQ;kBACP,YAAM,QAAQ,AAAM,KAAD;kBACnB;;8CAGI;gBACN,kBAAY;gBACZ,YAAM,aAAa,AAAM,KAAD,OAAM,AAAgE,kEAC/F;gBAGJ,AAAM,KAAD,WAAU;gBACf,AAAM,KAAD,YAAW;;kBAGf,gBAAM,QAAQ;cACZ,kBAAY;cACjB,AAAS,SAAA;cACJ,YAAM,QAAQ,AAAM,KAAD;cACnB;;YAIP,AAAK,AAAM,IAAP,sBAAsB,AAAM,KAAD;AAG/B,0BAAK,AAAK,AAAM,IAAP;cACF,YAAM,aAAa,AAAM,KAAD,OAAM,AAAgE,kEAC/F;AACJ;;AAIF,6BAAI,MAAM,EAAI,0BAAe,AAAM,KAAD;cAC3B,AAAU,wBAAC,AAAM,KAAD,OAAY,gBAAU,qCAAuB,OAAO,IAAI;gBACtE,aAAO,KAAK;;;cAId,AAAU,wBAAC,AAAM,KAAD,OAAQ,QAAC;gBAEvB,aAAO,KAAK;gBAGZ,kBAAY,AAAM,KAAD;;cAGxB,AAAK,AAAY,IAAb,gCAA8B,iCAAc,AAAU,wBAAC,AAAM,KAAD,SAAO;;;gBAGpE;YACA,YAAM,aAAa,AAAM,KAAD,0BAAM,GAAG;;;AAM1C,YAA0B,aAAtB,AAAK,AAAM,IAAP,sBAAqB;UAC3B,AAAS,SAAA;;UAGJ,kBAAY;UAGZ,kBAAY,AAAM,KAAD;AAER,yBAAW,QAAC;YAExB,AAAS,SAAA;YAGJ,kBAAY,AAAM,KAAD;;UAGxB,AAAK,AAAY,IAAb,gCAA8B,AAAO,wCAAe,QAAQ,EAAE;;;AAItE,YAAO,AAAM,MAAD;IACd;UAMe,IAAU;0CAAW;AAIlC,UAAS,iBAAU,sBAAiB;QAC7B,AAAO,mBACJ,mCAAU,SAAS;UAChB,WAAM,EAAE;;AAInB,cAAO;;AAIL,gBAAW,mBAAa,EAAE;AAE9B,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAC,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACvB,kBAAM,AAAG,GAAA,QAAC,CAAC;QACV,kBAAY,GAAG;AAGhB,oBAAa,iBAAW,GAAG;AAE/B,YAAI,KAAK,IAAI,mBAAS,AAAM,KAAD;UAEzB,AAAM,KAAD,UAAc,aAAQ,GAAG;UAC9B,AAAM,KAAD,cAAa;UAClB,AAAM,KAAD,YAAW;UAGX,gBAAU,GAAG;AAElB,cAAI,AAAM,KAAD,WAAU;AACjB,0BAAS;AAEP,kBAAK,AAAM,AAAM,AAAa,KAApB,wBAAuB;AAC/B;;cAGF,AAAM,AAAM,AAAa,KAApB,0BAAyB;cAGzB,mBAAa,AAAM,KAAD;kBAEpB,MAAM,AAAM,AAAM,AAAM,AAAS,KAAtB,kCAA+B,AAAM,AAAM,AAAM,AAAS,KAAtB;cAClD,AAAM,AAAM,AAAM,KAAb;;;;AAMX,uBAAM,QAAQ;UACP,YAAM,SAAS,AAAc,KAAT,IAAI,OAAO,AAAM,KAAD,QAAO;;;AAIpD,YAAO;IACT;;MAGE,aAAc;AACd,YAAO;IACT;YAEuB;AACrB,eAAS,KAAM,IAAG;QAChB,UAAK,EAAE;;AAET,YAAO;IACT;SAMc,IAAU;0CAAW;AAIjC,UAAS,iBAAU,sBAAiB;QAC7B,AAAO,mBACJ,mCAAU,QAAQ;UACf,UAAK,EAAE;;AAIlB,cAAO;;AAIL,gBAAW,mBAAa,EAAE;AAE9B,eAAS,IAAE,GAAI,AAAC,CAAA,gBAAC,AAAI,GAAD,YAAU,IAAA,AAAC,CAAA;QAExB,kBAAY,AAAG,GAAA,QAAC,CAAC;AAGlB,oBAAa,iBAAW,AAAG,GAAA,QAAC,CAAC;AAEjC,YAAI,KAAK,IAAI;UAEX,AAAM,KAAD,UAAS,AAAM,KAAD;UACnB,AAAM,KAAD,cAAa;UAClB,AAAM,KAAD,YAAW;UAChB,AAAM,KAAD,WAAU;UAGV,gBAAU,AAAG,GAAA,QAAC,CAAC;AAEpB,cAAI,AAAM,KAAD,WAAU;AACjB,0BAAS;AAEP,kBAAK,AAAM,AAAM,KAAP,wBAAuB;gBAC/B,AAAM,AAAM,AAAa,KAApB,0BAAyB;gBAGzB,mBAAa,AAAM,KAAD;;kBAGtB,MAAM,AAAM,AAAM,AAAM,AAAS,KAAtB,kCAA+B,AAAM,AAAM,AAAM,AAAS,KAAtB;cAClD,AAAM,AAAM,AAAM,KAAb,4BAA2B,AAAM,KAAD;cACrC,AAAM,AAAM,AAAM,KAAb;;;AAIT,yBAAM,QAAQ;YACP,YAAM,QAAQ,AAAM,KAAD;;;;AAK9B,YAAO;IACT;SAOe,OAAY;;AAIzB,UAAU,iBAAU,sBAAgB;QAC7B,AAAO,mBACJ,mCAAU,QAAQ;UACf,UAAK,KAAK,EAAE,EAAE;;AAIzB,cAAO;;AAIT,UAAI,AAAG,EAAD,IAAI;AACR,YAAI,KAAK,IAAI;UACN,eAAS,KAAK;;AAGnB,gBAAO;;;AAKD,gBAAW,mBAAa,EAAE;AAEpC,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAC,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AAEvB,oBAAa,iBAAW,AAAG,GAAA,QAAC,CAAC;AAEjC,YAAI,KAAK,IAAI;UACX,AAAM,KAAD,WAAU,KAAK;AAGpB,cAAK,AAAM,KAAD,eAAc;YACjB,gBAAU,AAAM,KAAD;;AAGtB,wBAAS,oBAAa,AAAM,KAAD,WAAU;YACnC,AAAM,AAAM,AAAS,AAAK,KAArB,+CAAoC,KAAK,IAAG,IAAI,AAAM,KAAD,WAAU,AAAO,AAAI;gBAE5E,KAAI,AAAM,KAAD,WAAU;YACtB,AAAM,AAAM,AAAM,KAAb,gCAAqB,AAAO,mCAAS,OAAO,KAAK;;UAGnD,YAAM,QAAQ,AAAM,KAAD;;;AAI5B,YAAO;IACT;cAMsB;;AAEpB,UAAI,AAAG,EAAD,IAAI;AAER,cAAY;;AAGN,oBAAa,iBAAW,EAAE;AAChC,cAAO,AAAc,MAAT,IAAI,OAAO,AAAM,KAAD,YAAW;;IAE3C;cASsB,KAAU,IAAS;;0CAAW;AAClD,UAAI,AAAI,GAAD,IAAI,QAAY,aAAJ,GAAG,IAAG,KAAS,aAAJ,GAAG,IAAG,GAAG,MAAO;AAG9C,UAAU,iBAAU,sBAAgB;QAC7B,AAAO,mBACJ,mCAAU,UAAU;UACjB,eAAU,GAAG,EAAE,EAAE;;AAI5B,cAAO;;AAIT,UAAI,AAAG,EAAD,IAAI;QACH,gBAAU,GAAG;;AAIV,gBAAW,mBAAa,EAAE;AAEpC,eAAS,IAAE,GAAG,AAAE,CAAD,gBAAG,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACzB,kBAAM,AAAG,GAAA,QAAC,CAAC;AACT,oBAAa,iBAAY,GAAG;AAElC,YAAI,KAAK,IAAI;UACX,AAAM,KAAD,YAAW,GAAG;AAGnB,yBAAM,QAAQ;YACP,gBAAU,GAAG;;AAGpB,wBAAS,oBAAa,AAAM,KAAD,WAAU,mBAAS,AAAM,KAAD;YACjD,AAAM,AAAM,AAAS,AAAK,KAArB,qCAAoC,GAAG,EAAE,AAAO,AAAI;gBAEtD,KAAI,AAAM,KAAD,WAAU,mBAAS,AAAM,KAAD;YACpC,AAAM,AAAM,AAAM,KAAb,uBAA0B,aAAJ,GAAG,iBAAG,AAAO;;UAGrC,YAAM,UAAU,AAAM,KAAD;;;AAI9B,YAAO;IACT;SASiB,MAAa,IAAQ,KAAU;;AAI9C,UAAS,iBAAU,sBAAiB;QAC7B,AAAO,mBACJ,mCAAU,QAAQ;UACf,UAAK,IAAI,EAAE,EAAE,EAAE,GAAG,EAAE,EAAE;;AAIjC,cAAO;;MAIJ,eAAU,IAAI,EAAE,EAAE;AAGb,gBAAW,mBAAa,EAAE;AAEpC,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAC,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AAErB,oBAAa,iBAAW,AAAG,GAAA,QAAC,CAAC;AAGnC,YAAI,KAAK,IAAI;AAEX,cAAI,AAAG,EAAD,IAAI;YACH,gBAAU,AAAG,GAAA,QAAC,CAAC;;AAItB,wBAAS,+BAAc,AAAM,KAAD;AACtB,8BAAc,AAAO,AAAI;AACzB,sBAAkB,aAAZ,WAAW,IAAQ,aAAJ,GAAG,IAAG;YAC/B,AAAM,KAAD,YAAW,IAAI;YACpB,AAAM,AAAM,AAAS,AAAK,KAArB,qCAAoC,IAAI,EAAE,WAAW;YAC1D,AAAM,AAAM,AAAS,AAAK,KAArB,8CAA6C,EAAE,EAAE,GAAG;;UAGtD,yBAAmB,KAAK,EAAE,IAAI,EAAE,EAAE,EAAE,GAAG,EAAE,AAAG,GAAA,QAAC,CAAC,GAAG,AAAG,EAAD,IAAI;;;AAIhE,YAAO;IACT;yBAU8B,OAAc,MAAa,IAAQ,KAAK,IAAI;AAGjE,gBAAM,IAAI;AACV,iBAAU,aAAH,EAAE,iBAAG,IAAI;AAChB,kBAAsB,CAAb,AAAK,IAAD,GAAG;AACnB,+BAAe,oBAAI,GAAI,AAAM,KAAD,GAAG,IAAS,cAAJ,GAAG,IAAI,KAAK,iBAAG,GAAG;AACtD,qBAAoB,AAAM;MAG9B,AAAM,KAAD,YAAW,EAAE;MAIlB,AAAM,KAAD,cAAiB,qBAAmB,qCAAuB,OAAO,IAAG,QAAC;AAGrE,kBAAe,AAAM;AAErB,mBAAwB,CAAZ,aAAJ,GAAG,iBAAG,QAAQ,kBAAI,GAAG;QACjC,WAAW,GAAG;QACd,MAAI,aAAJ,GAAG,IAAI,AAAK,IAAD,GAAG,IAAI;QAGlB,MAAW,oBAAI,GAAG,GAAG;QACrB,MAAW,oBAAI,GAAG,GAAG;QAGrB,MAAkB,AAAQ,CAAf,aAAJ,GAAG,IAAG,iBAAe;AAG5B,sBAAS;UACP,AAAM,KAAD,YAAW,GAAG;;UAGd,eAAU,GAAG,EAAE,AAAM,KAAD,OAAM;;AAIjC,uBAAI,OAAO;UACJ,gBAAU,GAAG;;AAIpB,YAAS,aAAH,EAAE,iBAAG,IAAI,KAAQ,aAAJ,GAAG,kBAAI,EAAE,KAAS,aAAH,EAAE,iBAAG,IAAI,KAAQ,aAAJ,GAAG,kBAAI,EAAE;AAEtD,cAAI,AAAM,KAAD,eAAc;YACrB,AAAM,AAAU,KAAX;YACL,AAAM,KAAD,cAAa;;UAGpB,AAAM,KAAD,YAAW;UAEX,eAAU,EAAE,EAAE,AAAM,KAAD;UACnB,YAAM,QAAQ,AAAM,KAAD;;;IAK9B;gBAMmB;AACX,kBAAa,iBAAW,EAAE;AAEhC,UAAI,KAAK,IAAI,QAAQ,AAAM,KAAD,eAAc;AACtC,sBAAS;UACP,AAAM,AAAM,AAAS,AAAK,KAArB,4CAA2C,AAAO,AAAI;;QAG7D,AAAM,AAAU,KAAX;QACL,AAAM,KAAD,cAAa;QAEb,eAAU,AAAM,KAAD,WAAU,EAAE;QAChC,AAAM,KAAD,YAAW;QAEX,YAAM,QAAQ,EAAE;;IAEzB;YAOkB;;AAEhB,UAAI,AAAG,EAAD,IAAI;AAER,cAAY;;AAGN,oBAAa,iBAAW,EAAE;AAChC,cAAO,AAAc,MAAT,IAAI,OAAO,AAAM,KAAD,UAAS;;IAEzC;YAOkB,MAAW;;AAC3B,UAAI,AAAG,EAAD,IAAI;QACH,cAAQ,IAAI;;AAIf,gBAAW,mBAAa,EAAE;AAE9B,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAC,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACrB,oBAAa,iBAAW,AAAG,GAAA,QAAC,CAAC;AAEnC,YAAI,KAAK,IAAI;UACX,AAAM,KAAD,UAAS,IAAI;AAElB,wBAAS,oBAAa,AAAM,KAAD,WAAU,QAAQ,AAAM,AAAM,KAAP,wBAAuB;YACvE,AAAM,AAAM,AAAa,KAApB,4BAA2B,IAAI;AAEpC,0BAAI,IAAI;cACN,AAAM,AAAM,AAAa,KAApB,iCAAgC,AAAM,KAAD;cAC1C,AAAM,AAAM,AAAa,KAApB,+BAA8B,AAAM,KAAD;;;;;AAMhD,YAAO;IACT;YAOoB;;AAElB,UAAI,AAAG,EAAD,IAAI;QAER,KAAU,AAAO,AAAI,qBAAH;;AAGZ,oBAAa,iBAAW,EAAE;AAChC,cAAO,AAAc,MAAT,IAAI,OAAO,AAAM,KAAD,UAAc;;IAE9C;YAOoB,MAAW;;AAE7B,UAAS,iBAAU,sBAAiB;QAC7B,AAAO,mBACJ,mCAAU,QAAQ;UACf,aAAQ,IAAI,EAAE,EAAE;;AAI3B,cAAO;;AAIT,UAAI,AAAG,EAAD,IAAI;QACH,cAAQ,IAAI;;AAIT,gBAAW,mBAAa,EAAE;AAEpC,eAAS,IAAE,GAAG,AAAE,CAAD,gBAAG,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACzB,kBAAM,AAAG,GAAA,QAAC,CAAC;AACT,oBAAa,iBAAW,GAAG;AAEjC,YAAI,KAAK,IAAI;AAGX,wBAAS,aAAQ,GAAG;YAClB,AAAM,KAAD,cAAkB,aAAQ,GAAG;YAClC,AAAM,KAAD,yBAAmB,mBAAY,AAAO,AAAI,0CAAc,AAAM,KAAD;;UAEpE,AAAM,KAAD,UAAS,IAAI;AAGlB,wBAAS,oBAAa,AAAM,KAAD,WAAU,QAAQ,AAAM,AAAM,KAAP,wBAAuB;YACvE,AAAM,AAAM,AAAa,AAAa,KAAjC,iDAAgD,IAAI,EAAE,AAAO,AAAI;gBAEnE,KAAI,AAAM,KAAD,WAAU;YACtB,AAAM,AAAM,AAAM,KAAb,6BAA4B,IAAI;;AAIhC,qBAAY,aAAQ,GAAG;AACvB,yBAAgF,AAAQ,CAA1C,aAA5B,AAAO,AAAgB,qBAAf,AAAM,KAAD,gCAAsB,AAAO,AAAgB,qBAAf,AAAM,KAAD,kBAAgB,oBAAQ,IAAI;AACjG,wBAA4B,CAAjB,AAAS,QAAD,GAAG,OAAS,AAAM,AAAM,KAAP;AAGxC,cAAU,AAAU,wBAAC,GAAG,KAAK,mBAAS,AAAM,KAAD;YACpC,kBAAY,GAAG;YAEhB,gBAAW,qCAAuB,OAAO,IAAG;cACzC,aAAO,KAAK;;;UAIhB,YAAM,QAAQ,AAAM,KAAD;;;AAI5B,YAAO;IACT;YAOoB;;AAElB,UAAI,AAAG,EAAD,IAAI;QAER,KAAU,AAAO,AAAI,qBAAH;;AAIpB,UAAI,AAAG,EAAD,IAAI,MAAM,MAAO;AAGvB,UAAS,iBAAU,sBAAiB;AAClC,cAAO;;AAIL,kBAAa,iBAAW,EAAE;AAE9B,UAAI,KAAK,IAAI;AACX,sBAAS;AACA,mCAAgB,aAAQ,EAAE,KAA2B,aAAvB,AAAO,AAAI,wDAAc,AAAM,KAAD,gBAAc;AAC1E,yBAAW,AAAM,AAAkB,KAAnB,eAAc,QAAwB,aAAhB,AAAM,KAAD,eAAa,IAAoB,aAAhB,AAAM,KAAD,4BAAa,AAAM,KAAD,WAAS;AACnG,gBAAmB,cAAZ,AAAM,KAAD,YAAU,AAAS,QAAD,GAAG,AAAS,QAAD,GAAG,AAAM,AAAM,KAAP;;AAGjD,gBAAO,AAAM,AAAM,AAAM,MAAb;;;IAGlB;YAOoB,MAAW;;AAE7B,UAAI,AAAG,EAAD,IAAI;QACR,KAAU,AAAO,AAAI,qBAAH;;AAIpB,UAAI,AAAG,EAAD,IAAI,MAAM,MAAO;AAGvB,UAAS,iBAAU,sBAAiB;QAC7B,AAAO,mBACJ,mCAAU,QAAQ;UACf,aAAQ,IAAI,EAAE,EAAE;;AAI3B,cAAO;;AAIH,kBAAa,iBAAW,EAAE;AAEhC,UAAI,KAAK,IAAI;AAEP,sBAAe,aAAQ,EAAE;AAC7B,sBAAI,OAAO;UACJ,WAAM,EAAE,EAAE;;QAIjB,AAAM,KAAD,UAAS,IAAI;QAClB,AAAM,KAAD,WAAU;QACV,kBAAY,EAAE;AAGnB,uBAAW,oBAAa,AAAM,KAAD,WAAU,SAAS,AAAM,AAAM,AAAM,AAAS,KAAtB;UACnD,AAAM,AAAM,AAAM,KAAb,4BAA2B,IAAI;;AAIlC,0BAAc;UACX,YAAM,QAAQ,EAAE;AAGrB,wBAAI,OAAO;YACJ,UAAK,EAAE,EAAE;;;AAKlB,sBAAI,OAAO,gBAAU;UAEf,qBAAwB,oBAAM,QAAC;AACjC,2BAAU;cACR,AAAW,WAAA;cACX,AAAE,CAAD;;;;UAML,AAAW,WAAA;;;AAKf,YAAO;IACT;YAMkB;;AAEhB,UAAI,EAAE,IAAI;AACF,oBAAa,iBAAW,EAAE;AAChC,cAAO,AAAc,MAAT,IAAI,OAAO,WAAC,AAAM,KAAD,aAAW;;AAI1C,eAAS,IAAE,GAAG,AAAE,CAAD,gBAAQ,AAAQ,yBAAQ,IAAA,AAAC,CAAA;AACtC,uBAAU,AAAO,AAAI,qBAAH,CAAC;AACjB,gBAAO;;;AAIX,YAAO;IACT;aAMqB;;AACnB,UAAI,AAAG,EAAD,IAAI;AACR,cAAY;;AAIR,kBAAa,iBAAW,EAAE;AAEhC,UAAI,KAAK,IAAI;AACX,cAAsC,cAA1B,AAAO,AAAgB,qBAAf,AAAM,KAAD,iBAAe;;AAGxC,cAAY;;IAEhB;;AAME,YAAY;IACd;;AAOc,gBAAW;AAEvB,eAAS,IAAE,GAAG,AAAE,CAAD,gBAAG,AAAI,GAAD,YAAS,IAAA,AAAC,CAAA;AACzB,oBAAQ,AAAG,GAAA,QAAC,CAAC;AAEjB,uBAAK,AAAM,KAAD;UACH,UAAK,AAAM,KAAD;;AAIjB,uBAAU;UAUR,AAAM,AAAM,AAAY,KAAnB,0CAAuC,SAAS,AAAM,KAAD,YAAW;UACrE,AAAM,AAAM,AAAY,KAAnB,0CAAuC,AAAO,wCAAe,AAAM,KAAD,WAAU;UAGjF,AAAO,4CAAmB,AAAM,KAAD;;QAIjC,AAAG,AAAI,GAAJ,QAAC,CAAC,WAAU;QAGV,kBAAY,AAAM,KAAD;;AAIpB,kBAAQ,AAAO,AAAO,0CAAQ;AAClC,UAAU,aAAN,KAAK,KAAI;QACX,AAAO,AAAO,2CAAS,KAAK;;AAI1B,qBAAW;eAEN,IAAE,GAAG,AAAC,CAAA,gBAAC,AAAO,AAAO,2CAAQ,IAAA,AAAC,CAAA;AACrC,YAA2B,YAAtB,AAAO,AAAM,AAAI,uCAAH,CAAC,SAAe;UACjC,WAAW;AACX;;;AAIJ,UAAK,QAAQ;QACX,AAAO,sBAAY;;MAIrB,AAAO,kCAAU;MAGZ,eAAS;MACT,gBAAU;AAEf,YAAO;IACT;OASe,WAA6B,MAAc,IAAU;kCAAO;AAErE,mBAAc,yBAAmB,SAAS;AAC1C,qBAAe,mDAA0B,IAAQ,EAAE,EAAE,EAAE,IAAI;MAC/D,AAAO,MAAD,OAAK,QAAQ;AACnB,YAAO;IACT;QAOgB,WAAgB,IAAsB;;;AAChD,mBAAc,yBAAmB,SAAS;AAC1C,cAAI;AAER,UAAI,EAAE,IAAI;sBAEH,IAAE,GAAG,AAAE,CAAD,gBAAG,AAAO,MAAD,YAAS,IAAA,AAAC,CAAA;AACxB,qBAAQ,AAAG,EAAD,IAAI,AAAM,AAAI,MAAJ,QAAC,CAAC;AAE1B,cAAK,IAAI,KAAK,AAAS,IAAD,IAAI,QAAiB,YAAT,IAAQ,EAAI,AAAM,AAAI,MAAJ,QAAC,CAAC;YACpD,AAAO,MAAD,YAAU,CAAC;AACjB;;;;QAMJ,AAAO,MAAD;;AAGR,YAAO;IACT;;MAGE,AAAO;MACP,AAAQ;MACR,AAAQ;MACR,AAAa;MACb,AAAa;MACb,AAAS;MACT,AAAQ;MACR,AAAQ;MACR,AAAQ;MACR,AAAU;MACV,AAAQ;MACR,AAAQ;MACR,AAAU;MACV,AAAU;IACZ;SAQiB,OAAyB,MAAc;MACjD,QAAG,KAAK,EAAE,IAAQ,EAAE,EAAE,EAAE;AAC7B,YAAO;IACT;;AAOS,gBAAW,AAAI,gBAAC;AAGnB,wBAAc,AAAM,oBAAC,GAAG;AAE5B,UAAK,WAAW,IAAI;QAEb,kBAAY,AAAY,WAAD;QAG5B,iBAAW,WAAW;AAEtB;;AAGF,oBAAS,AAA+B,gBAAxB,gCAAiC,GAAG;AAE9C,yBAAa,AAAgB,iBAAV,GAAG,EAAC,KAAI,UAAG;AACxB,uBAAW,AAAO,sBAAO,UAAU;QAC7C,uBAAiB,AAAS,QAAD;;QAIb,AAIV,yBAJkB,GAAG,WACb,wBACS,yCACH,mCACR,QAAC;AAEH,qBAAO,AAAI,GAAD;AACd,cAAS,aAAL,IAAI,IAAG,OAAa,aAAL,IAAI,KAAI;YACpB,YAAM,aAAa,MAAM,AAA8C,qDAAL,IAAI;AAC3E;;UAGF,oDAAiB,AAAI,GAAD;2CACV;AAEV,0BAAS;cACF,eAAS;cACT,kBAAY;cACZ,gBAAU;cACf,AAAO,sBAAO,GAAG;cACZ;;;;IAKb;uBAMiC;AAE3B,kBAAQ;QACL,YAAM,aAAa,MAAM;;MAMhC,AAAO,AAAI,AAA6B,8CAAb,WAAW,qBAAQ,QAAC;AAC7C,YAAI,MAAM,IAAI,QAA4B,aAAf,AAAQ,0BAAS;UAC1C,AAAM,oBAAM,YAAQ,MAAM;UAC1B,iBAAW,MAAM;;UAGjB,AAAK,KAAA;;yCAGM,KAAK;IACtB;iBAM4B;AAE1B,UAAI,MAAM,IAAI,SAAc,AAAU,mBAAG,QAAa,AAAU,oBAAG;QAC5D,kBAAY,AAAO,MAAD;;AAIzB,UAAU,AAAQ,AAAO,2BAAG;QACrB,gBAAU,oDAAC,aAAiB,2CAAkB,GAA2B,CAAR,aAAV,mBAAY;;AAI1E,UAAS,iBAAU;QACZ,eAAS;QACT,YAAM;QACN;;IAET;YAQkB,WAAgB,IAAW;;;AACX,mBAAS,yBAAmB,SAAS;AACrC;AAGhC,eAAS,IAAiB,aAAb,AAAO,MAAD,aAAQ,GAAI,AAAE,CAAD,IAAI,GAAI,IAAA,AAAC,CAAA;AACb,kBAAM,AAAM,MAAA,QAAC,CAAC;AAGxC,YAAK,AAAI,AAAG,GAAJ,OAAO,QAAQ,AAAI,AAAG,GAAJ,OAAO,EAAE,IAAI,AAAU,SAAD,KAAI;UAC9C,gBAAe,oBAAM;YACvB,AAAI,GAAD,UAAU,MAAM,SAAS,EAAE,EAAE,EAAE,GAAG;;AAIvC,wBAAI,AAAI,GAAD;AACL,gBAAI,AAAU,SAAD,IAAI,MAAM,YAAY;YACnC,AAAU,SAAD,OAAK,GAAG;;;;AAKvB,UAAI,SAAS,IAAI;AACf,iBAAS,MAAO,UAAS;UAClB,SAAI,SAAS,EAAE,AAAI,GAAD,KAAK,AAAI,GAAD;;;MAK9B,iBAAW,SAAS;IAC3B;iBAMwB;;AACtB,UAAuB,aAAd,AAAO,yBAAS;AACb,mBAAY,AAAM,oBAAC;AAG7B,YAAI,AAAM,KAAD,IAAI;UACN,WAAL,IAAI;cAGD,KAAI,AAAK,AAAM,IAAP,UAAU,KAAK;UACrB,AAAO,wBAAS;UAChB;;;IAGX;aAMkB;AACZ,mBAAS,AAAM,KAAD;AAKlB,qBAAU,oBAAa,AAAM,KAAD,WAAU,mBAAS,AAAM,AAAM,AAAM,KAAb,oCAAwB,AAAM,AAAM,AAAM,KAAb,wBAAoD,aAA9B,AAAM,AAAM,AAAM,KAAb,0CAA2B,AAAM,KAAD;QACtI,gBAAU,qCAAwB,OAAM;UACrC,aAAO,KAAK;;AAGnB;;AAIE,iBAAmB,UAAZ,AAAM,KAAD,sBAAe,AAAO,AAAS,qBAAR,MAAM;MAGxC,YAAM,OAAO,AAAM,KAAD;AAGvB,qBAAU,oBAAa,IAAI;QACpB,AAAsB,UAAjB,AAAM,KAAD,OAAM,WAAW,AAAM,KAAD;;AAIvC,oBAAS,oBAAa,IAAI;QACnB,YAAM,QAAQ,AAAM,KAAD;QACxB,AAAM,KAAD,UAAS,AAAM,KAAD;QACnB,AAAM,KAAD,cAAa;QAClB,AAAM,KAAD,eAAc,AAAO,AAAI;AAE1B,sBAAgD,CAAR,CAAhB,aAAZ,AAAM,KAAD,wBAAS,AAAM,KAAD,aAAW,OAAS,AAAM,AAAM,KAAP;QAEvD,AAAU,wBAAC,AAAM,KAAD,OAAY,gBAAU,qCAAuB,OAAO,IAAG;UACrE,aAAO,KAAK;;;AAKrB,oBAAS,qBAAc,IAAI;QACzB,AAAM,KAAD,YAAW;QAChB,AAAM,KAAD,WAAU;QACf,AAAM,KAAD,UAAS,AAAM,KAAD;QACnB,AAAM,KAAD,cAAa;QACb,kBAAY,AAAM,KAAD;QAGjB,mBAAa,AAAM,KAAD;QAGvB,AAAO;;AAIT,qBAAU,qBAAc,IAAI;QACrB,UAAK,AAAM,KAAD,OAAM;;IAEzB;kBAKiB;AACX,qBAAgB,AAAU,wBAAC,EAAE;AAEjC,UAAK,QAAQ,IAAI;AAEf,YAAc,eAAT,QAAQ;UACX,AAAS,QAAD;;AAGF,sBAAa,iCAAW,EAAE;AAChC,cAAI,KAAK,IAAI,QAAQ,AAAM,KAAD,WAAU;YAClC,AAAM,AAAM,AAAY,KAAnB,0CAAuC,iCAAS,QAAQ,GAAE;;;QAI9D,AAAW,0BAAO,EAAE;;IAE7B;iBAKqB;AAEnB,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAM,AAAQ,yBAAQ,IAAA,AAAC,CAAA;AAC9B,oBAAa,AAAO,qBAAC,CAAC;AAC5B,YAAI,AAAM,AAAI,KAAL,SAAQ,EAAE,EAAE,MAAO,MAAK;;AAGnC,YAAO;IACT;;MAMO;AAGL,eAAS,IAAE,GAAG,AAAE,CAAD,gBAAQ,AAAQ,yBAAQ,IAAA,AAAC,CAAA;AAClC,oBAAa,AAAO,qBAAC,CAAC;AAE1B,sBAAI,AAAM,KAAD;AACP,gBAAO,AAAM,MAAD;;;AAKhB,YAAW,gCAAM;IACnB;;AAKM,kBAAa;AACb,gBAAM;AAGV,UAAwB,aAAf,AAAQ,uCAAS,KAAK;AAC7B;;AAIF,eAAS,IAAE,GAAG,AAAC,CAAA,gBAAM,AAAQ,yBAAQ,IAAA,AAAC,CAAA;AACpC,sBAAS,AAAO,AAAI,qBAAH,CAAC;UAChB,MAAA,AAAG,GAAA;;;AAKP,eAAS,IAAsB,aAAf,AAAQ,0BAAS,GAAG,AAAC,CAAA,IAAE,GAAG,IAAA,AAAC,CAAA;AACzC,YAAI,AAAI,GAAD,iBAAI,KAAK,GAAE;AAEd,oBAAa,AAAO,qBAAC,CAAC;AAE1B,sBAAI,AAAM,KAAD;AAEP,wBAAS,oBAAa,AAAM,KAAD,WAAU;YACnC,AAAM,AAAM,AAAa,KAApB,gCAA+B;;UAIjC,AAAQ,yBAAS,CAAC;UACvB,MAAA,AAAG,GAAA;;;IAGT;mBAM4B;;AAC1B,UAAI,AAAG,EAAD,IAAI;AACE,kBAAM;AAEhB,iBAAS,IAAE,GAAG,AAAE,CAAD,gBAAQ,AAAQ,yBAAQ,IAAA,AAAC,CAAA;UACtC,AAAI,GAAD,OAAW,AAAO,AAAI,qBAAH,CAAC;;AAGzB,cAAO,IAAG;;AAGV,cAAO,oBAAC,EAAE;;IAEd;qBAM0B;MAExB,AAAM,AAAM,KAAP,uBAAsB,AAAO,AAAI;MACtC,AAAM,AAAM,AAAa,KAApB,8BAA6B,AAAM,oBAAM;AAG9C,UAAK,AAAM,KAAD,aAAY;QACpB,AAAM,AAAM,AAAa,KAApB,mCAAgC,AAAM,KAAD;;QAG1C,AAAM,AAAM,AAAa,KAApB,mCAAgC,AAAM,AAAM,KAAP;;MAI5C,AAAM,AAAM,AAAa,KAApB,4BAA2B,AAAM,KAAD;AACrC,oBAAK,AAAM,KAAD;QACR,AAAM,AAAM,AAAa,KAApB,iCAAgC,AAAM,KAAD;QAC1C,AAAM,AAAM,AAAa,KAApB,+BAA8B,AAAM,KAAD;;MAE1C,AAAM,AAAM,AAAa,AAAa,KAAjC,iDAAgD,AAAM,KAAD,SAAQ,AAAO,AAAI;IAC/E;mBAMiC;AAC/B,UAAI,AAAO,2CAAkB,QAAQ,AAAK,IAAD,iBAAiB;QAExD,AAAK,AAAa,IAAd,yBAAyB;AAE7B,sBAAK,AAAO;;YACJ,AAAK,AAAa,IAAd,uBAAuB,AAAO;;gBAAwB;;;;MAGpE,AAAK,IAAD,gBAAgB;IACtB;;;QA5pDe;QACR,wDAAU;QACF;QACR,+CAAO;QACP,4CAAM;QACN,4CAAM;QACP,4CAAM;QACL,qDAAS;QACP,4CAAM;QACI;QACV,kDAAQ;QACV,sFAAoB;QAEP;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IArFf;IACQ;IACR;IACA;IACA;IACD;IACC;IACE;IACuB;IACrB;IACF;IACF;IAEE;IACA;IACK;IACK;IACD;IACX;IAG2B;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAsB3B;IAwyC2B,eAAS;AAvwCvC,QAAI,AAAI,GAAD,IAAI,kBAAQ,AAAI,GAAD;MACpB,AAAO,AAAQ,4BAAM;AACrB;;AAMF,QAAK,AAAO,AAAI,+BAAG;MACjB;;IAIG,kBAAY,QAAQ;IACpB,gBAAU,AAAe,MAAT,IAAI,OAAO,MAAM,GAAG;IACpC,eAAS,KAAK;IACd,eAAS,IAAI;IACb,cAAQ,IAAI;IACZ,cAAQ,IAAI;IACZ,iBAAW,OAAO;IAClB,cAAQ,IAAI;IACZ,gBAAU,AAAe,MAAT,IAAI,OAAyB,wDAAqB,MAAM,IAAI;IAC5E,aAAW,mCAAc,GAAG;IAC5B,gBAAU,MAAM;IAChB,4BAAsB,kBAAkB;IAGxC,kBAAY;IACZ,eAAS;IACT,gBAAU;IACV,mBAAa;IACb,eAAS;IACT,kBAAY;IAGZ,eAAS,AAAc,KAAT,IAAI,OAAO,yCAAK,mDAA0B,KAAK,MAAK;IAClE,gBAAU,AAAe,MAAT,IAAI,OAAO,yCAAK,mDAA0B,MAAM,MAAK;IACrE,gBAAU,AAAe,MAAT,IAAI,OAAO,yCAAK,mDAA0B,MAAM,MAAK;IACrE,qBAAe,AAAoB,WAAT,IAAI,OAAO,yCAAK,mDAA0B,WAAW,MAAK;IACpF,qBAAe,AAAoB,WAAT,IAAI,OAAO,yCAAK,mDAA0B,WAAW,MAAK;IACpF,iBAAW,AAAgB,OAAT,IAAI,OAAO,yCAAK,mDAA0B,OAAO,MAAK;IACxE,gBAAU,AAAe,MAAT,IAAI,OAAO,yCAAK,mDAA0B,MAAM,MAAK;IACrE,gBAAU,AAAe,MAAT,IAAI,OAAO,yCAAK,mDAA0B,MAAM,MAAK;IACrE,gBAAU,AAAe,MAAT,IAAI,OAAO,yCAAK,mDAA0B,MAAM,MAAK;IACrE,kBAAY,AAAiB,QAAT,IAAI,OAAO,yCAAK,mDAA0B,QAAQ,MAAK;IAC3E,gBAAU,AAAe,MAAT,IAAI,OAAO,yCAAK,mDAA0B,MAAM,MAAK;IACrE,gBAAU,AAAe,MAAT,IAAI,OAAO,yCAAK,mDAA0B,MAAM,MAAK;IACrE,kBAAY,AAAiB,QAAT,IAAI,OAAO,yCAAK,mDAA0B,QAAQ,MAAK;IAC3E,kBAAY;IAGZ,kBAAiC,UAArB,AAAO,qDAAuB;AAG/C,QAAK,AAAO,+BAAO,kBAAQ,AAAO;MAChC,AAAO;;IAIT,AAAO,AAAO,sCAAI;AAGlB,kBAAS;MACF,AAAO,mBACJ,mCAAU,QAAQ;QACf;;;AAMb,kBAAS;MACF;;EAET;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgkD+B,YAAA,AAAiB,kBAAL,OAAO,gBAAW;IAAM;;oDAEzC;IALJ;IACjB;;IAIqB;;EAAO;mDACR;IANH;IACjB;;IAKoB;;EAAU;;;;;;;;;;;;;;;;;;;AAmE7B,mBAAc;AACd,mBAAuC,UAA7B,AAAO,8CAAe,2BAAe,AAAQ,0BAAU,IAAS;AAE9E,oBAAI,AAAO,MAAD;QAEH,cAAY,yCAAqB,AAAO,AAAI;QAE5C,AAAM,AAAS,AAAK,yCAAe,MAAM,EAAE,AAAO,AAAI;QAEtD,AAAM,AAAS,mCAAY,AAAO;;QAIlC,cAAY,0CAAsB,AAAO;QAGzC,2BAAgB;QAChB,AAAM,AAAM,qCAAiB,SAAc,gBAAU;QAGrD,0BAAe;QACf,AAAM,AAAM,qCAAiB,AAAO,wCAAoB,eAAS;QAGjE,AAAM,AAAM,wBAAM,AAAO,AAAI,MAAL,YAAM;QAC9B,AAAM,AAAM,4BAAU;QACtB,AAAM,AAAM,2BAAgB,aAAP,MAAM,iBAAG,AAAO;QAGrC,AAAM,AAAM;;AAGnB,YAAO;IACT;;;AAOM,mBAAc;MAGb,eAAS,AAAO,MAAD;MACf,cAAQ,AAAO,MAAD;MACd,gBAAU,AAAO,MAAD;MAChB,cAAQ,AAAO,MAAD;MACd,cAAQ;MACR,kBAAY;MACZ,gBAAU;MACV,eAAS;MACT,gBAAU;MAGV,kBAAQ,yBAAO,eAAT,aAAS,gBAAT;AAEX,YAAO;IACT;qBAGoB;MAIb,AAAQ,sBAAM,aAAkB,8BAAU,AAAM,AAAM,AAAc,2BAAL,OAAY,AAAM,AAAM,AAAM,+BAAO;MAGpG,AAAM,AAAY,8CAAoB,SAAc,gBAAU;IACrE;oBAImB;AAEb,mBAAc;MAGlB,AAAO,MAAD,cAAqD,CAAZ,AAAM,aAA3B,AAAM,AAAM,8BAAW,KAAM;AAGvD,UAAK,AAAO,AAAQ,AAAO,MAAhB,uBAAmB;QAC5B,AAAO,MAAD,YAAW,oDAAC,aAAiB,2CAAmB,GAA6B,CAAR,aAAjB,AAAO,MAAD,eAAa;;AAG/E,UAAI,AAAO,MAAD,aAAW;QACnB,AAAO,MAAD,WAAU;QAChB,AAAO,MAAD,QAAO;QACb,AAAO,MAAD;;MAIH,AAAM,AAAY,8CAAoB,AAAO,wCAAoB,eAAS;IACjF;;AAGmB;IAAO;;AAIxB,YAAO,AAAqG,yBAAzF,aAAG,wBAAW,iBAAO,wBAAW,iBAAO,wBAAW,iBAAO,sBAAS,eAAK,uBAAU,gBAAM;IAC5G;;AAEoB;IAAM;;AACP;IAAK;;AACH;IAAO;;AACT;IAAO;;AACR;IAAM;;AACV;IAAG;;AACI;IAAO;;AACT;IAAK;;AACP;IAAK;;AACJ;IAAM;;AACA;IAAU;;yCA7IvB;;IA9BJ,eAAS;IACT,cAAQ;IAER;IAEF;IACA;IACD;IACG;IACA;IACA;IACA;IAEF;IAEA;IAEU;IAEL;IAEJ;IAEC;IAEA;IAEO;IACA;IAEH;AAEL,iBAAc;IAGb,eAAS,AAAO,MAAD;IACf,cAAQ,AAAO,MAAD;IACd,gBAAU,AAAO,MAAD;IAChB,cAAQ,AAAO,MAAD;IACd,cAAQ;IACR,gBAAU;IACV,eAAS;IACT,gBAAU;IAGV,kBAAQ,yBAAO,eAAT,aAAS,gBAAT;IAGX,AAAO,AAAQ,MAAT,gBAAa;IAGd;EACP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+HA,mBAAK,AAAO,wCAAe;;MAIzB,AAAO,8BAAU;;UAEZ;MACL,AAAO,wCAAgB;;AAIzB,QAAI,AAAO,AAAI,+BAAG;MAChB,AAAO,wCAAgB;;AAIzB,kBAAK,AAAO;MACV,AAAO,qCAAa,AAAO,AAAI;MAC/B,AAAO,AAAW,AAAK,iEAAe,AAAO,mCAAS,IAAI,GAAG,AAAO,AAAI;MACxE,AAAO,AAAW,iDAAY,AAAO,AAAI;;IAI3C,AAAO;EACT;;MA7hEoB,uBAAM;YAAO","file":"howler.ddc.js"}');
  // Exports:
  return {
    src__howler_base: src__howler_base,
    howler: howler
  };
});

//# sourceMappingURL=howler.ddc.js.map
