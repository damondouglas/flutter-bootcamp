import 'package:flutter_web/material.dart';
import 'pages/flutter_layouts_challenge/flutter_layouts_challenge.dart';
import 'pages/dicee/dicee.dart';
import 'pages/magicball/magicball.dart';
import 'pages/home.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      routes: {
        '/': (context) => Home(),
        '/flutter-layouts-challenge': (context) => FlutterLayoutsChallange(),
        '/dicee': (context) => DicePage(),
        '/magicball': (context) => BallPage(),
      },
      title: 'London Appbrewery Flutter Bootcamp',
    );
  }
}
