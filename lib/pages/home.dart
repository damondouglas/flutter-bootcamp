import 'package:flutter_web/cupertino.dart';
import 'package:flutter_web/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
   return Scaffold(
     appBar: AppBar(
       iconTheme: IconThemeData(),
       title: Text('London App Brewery Flutter Bootcamp Challenges'),
     ),
     body: Column(
       crossAxisAlignment: CrossAxisAlignment.start,
       children: <Widget>[
         FlatButton(
           child: Text('1. Flutter Layouts Challenge'),
           onPressed: () {
            Navigator.pushNamed(context, '/flutter-layouts-challenge');
           },
         ),

         FlatButton(
           child: Text('2. Dicee App'),
           onPressed: () {
             Navigator.pushNamed(context, '/dicee');
           },
         ),
       ],
     ),
   );
  }
}
