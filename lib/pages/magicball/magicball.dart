import 'package:flutter_web/material.dart';
import 'package:random_string/random_string.dart' as random_string;

class BallPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFF0044A7),
        title: Text('Ask Me Anything'),
      ),
      body: SafeArea(
        child: Ball(),
      ),
    );
  }
}

class Ball extends StatefulWidget {
  @override
  _BallState createState() => _BallState();
}

class _BallState extends State<Ball> {
  static final _min = 1;
  static final _max = 5;
  int ball = random_string.randomBetween(_min, _max);

  void ballClicked() {
    setState(() {
      this.ball = random_string.randomBetween(_min, _max);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Color(0xFF0195FB),
      child: Center(
        child: FlatButton(
          child: Image.asset('images/magicball/ball${ball}.png'),
          onPressed: () {
            this.ballClicked();
          },
        ),
      ),
    );
  }
}
