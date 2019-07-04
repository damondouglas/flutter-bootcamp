import 'package:flutter_web/material.dart';
import 'package:howler/howler.dart';

class XylophonePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Xylophone();
  }
}

class Xylophone extends StatefulWidget {
  @override
  _XylophoneState createState() => _XylophoneState();
}

class _XylophoneState extends State<Xylophone> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: List<Widget>.generate(7, (index) => Pad(index + 1)),
        ),
      ),
    );
  }
}

class Pad extends StatelessWidget {
  final _padColors = <Color>[
    Colors.red,
    Colors.orange,
    Colors.yellow,
    Colors.green,
    Colors.teal,
    Colors.blue,
    Colors.purple,
  ];

  Pad(this.index);
  final int index;
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: FlatButton(
        color: _padColors[index - 1],
        onPressed: () {
          final player = Howl(src: ['assets/sounds/xylophone/note$index.wav']);
          player.play();
        },
      ),
    );
  }
}
