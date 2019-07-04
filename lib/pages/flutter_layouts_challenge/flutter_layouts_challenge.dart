import 'package:flutter_web/material.dart';

class FlutterLayoutsChallange extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.teal,
        title: Text('Flutter Layouts Challenge'),
      ),
      backgroundColor: Colors.teal,
      body: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Container(
            color: Colors.red,
            width: 100,
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                color: Colors.yellow,
                height: 100,
                width: 100,
              ),
              Opacity(
                opacity: 0.3,
                child: Container(
                  color: Colors.yellow,
                  height: 100,
                  width: 100,
                ),
              ),
            ],
          ),
          Container(
            color: Colors.blue,
            width: 100,
          ),
        ],
      ),
    );
  }
}
