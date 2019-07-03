import 'package:flutter_web/material.dart';
import 'package:random_string/random_string.dart' as random_string;

class DicePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.red,
      appBar: AppBar(
        title: Text('Dicee'),
        backgroundColor: Colors.red,
        actions: <Widget>[
          FlatButton(
            textColor: Colors.white,
            child: Text('HOME'),
            onPressed: () => Navigator.pushNamed(context, '/'),
          ),
        ],
      ),
      body: Dicee(),
    );
  }
}

class Dicee extends StatefulWidget {
  @override
  _DiceeState createState() => _DiceeState();
}

class _DiceeState extends State<Dicee> {
  int dice1 = random_string.randomBetween(1, 6);
  int dice2 = random_string.randomBetween(1, 6);

  rollDice() {
    setState(() {
      this.dice1 = random_string.randomBetween(1, 6);
      this.dice2 = random_string.randomBetween(1, 6);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: <Widget>[
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: FlatButton(
                child: Image.asset('images/dice${dice1}.png'),
                onPressed: rollDice,
              ),
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: FlatButton(
                child: Image.asset('images/dice${dice2}.png'),
                onPressed: rollDice,
              ),
            ),
          )
        ],
      ),
    );
  }
}
