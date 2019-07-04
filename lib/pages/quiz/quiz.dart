import 'package:flutter_web/cupertino.dart';
import 'package:flutter_web/material.dart';
import 'service.dart';

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade900,
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 10.0),
          child: QuizPage(),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  _QuizPageState() {
    this._bank.reset();
    this._bank.moveNext();
  }

  var _bank = Bank();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: this._bank.isFinished
                  ? Text('')
                  : this._bank.current.display(context),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                //The user picked true.
                setState(() {
                  this._bank.answer(true);
                  this._bank.moveNext();
                  _showDialog(context);
                });
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                //The user picked false.
                setState(() {
                  this._bank.answer(false);
                  this._bank.moveNext();
                  _showDialog(context);
                });
              },
            ),
          ),
        ),
        Row(
          children:
              this._bank.scores.map((bool score) => _Score(score)).toList(),
        ),
      ],
    );
  }

  void _showDialog(BuildContext context) {
    if (this._bank.isFinished) {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              backgroundColor: Colors.yellow,
              title: Text(
                'Finished!',
                textAlign: TextAlign.center,
              ),
              content: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  Container(
                    child: Row(
                      children: <Widget>[
                        _Score(true),
                        Text('${this._bank.correct}'),
                      ],
                    ),
                  ),
                  Container(
                    child: Row(
                      children: <Widget>[
                        _Score(false),
                        Text('${this._bank.wrong}'),
                      ],
                    ),
                  ),
                ],
              ),
              actions: <Widget>[
                FlatButton(
                  onPressed: () {
                    setState(() {
                      this._bank.reset();
                      Navigator.of(context).pop();
                    });
                  },
                  child: Text('RESET'),
                ),
              ],
            );
          });
    }
  }
}

class _Score extends StatelessWidget {
  _Score(this.correct);
  final bool correct;
  @override
  Widget build(BuildContext context) {
    return Icon(
      correct ? Icons.check : Icons.close,
      color: correct ? Colors.green : Colors.red,
    );
  }
}
