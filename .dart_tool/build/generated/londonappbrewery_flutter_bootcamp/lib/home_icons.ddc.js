define(['dart_sdk', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__icon_data = animation.src__widgets__icon_data;
  const home_icons = Object.create(dart.library);
  home_icons.Home = class Home extends core.Object {};
  (home_icons.Home.__ = function() {
    ;
  }).prototype = home_icons.Home.prototype;
  dart.addTypeTests(home_icons.Home);
  dart.setLibraryUri(home_icons.Home, "package:londonappbrewery_flutter_bootcamp/home_icons.dart");
  dart.defineLazy(home_icons.Home, {
    /*home_icons.Home._kFontFam*/get _kFontFam() {
      return "Home";
    },
    /*home_icons.Home.github_circled*/get github_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61595, {fontFamily: home_icons.Home._kFontFam}));
    }
  });
  dart.trackLibraries("packages/londonappbrewery_flutter_bootcamp/home_icons", {
    "package:londonappbrewery_flutter_bootcamp/home_icons.dart": home_icons
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/londonappbrewery_flutter_bootcamp/home_icons.dart"],"names":[],"mappings":";;;;;;;;;;EAsBU;;;;MAEK,yBAAS;YAAG;;MAEH,8BAAc;YAChC,qDAAS,oBAAoB","file":"home_icons.ddc.js"}');
  // Exports:
  return {
    home_icons: home_icons
  };
});

//# sourceMappingURL=home_icons.ddc.js.map
