import 'package:flutter_web/material.dart';

final _questionBank = <Questionable>[
  TextQuestion('Some cats are actually allergic to humans', true),
  TextQuestion('You can lead a cow down stairs but not up stairs.', false),
  TextQuestion(
      'Approximately one quarter of human bones are in the feet.', true),
  TextQuestion('A slug\'s blood is green.', true),
  TextQuestion('Buzz Aldrin\'s mother\'s maiden name was \"Moon\".', true),
  TextQuestion('It is illegal to pee in the Ocean in Portugal.', true),
  TextQuestion(
      'No piece of square dry paper can be folded in half more than 7 times.',
      false),
  TextQuestion(
      'In London, UK, if you happen to die in the House of Parliament, you are technically entitled to a state funeral, because the building is considered too sacred a place.',
      true),
  TextQuestion(
      'The loudest sound produced by any animal is 188 decibels. That animal is the African Elephant.',
      false),
  TextQuestion(
      'The total surface area of two human lungs is approximately 70 square metres.',
      true),
  TextQuestion('Google was originally called \"Backrub\".', true),
  TextQuestion(
      'Chocolate affects a dog\'s heart and nervous system; a few ounces are enough to kill a small dog.',
      true),
  TextQuestion(
      'In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.',
      true),
];

abstract class Questionable {
  Widget display(BuildContext context);
  bool isCorrect(bool answer);
}

class TextQuestion with Questionable {
  TextQuestion(this._content, this._answer);
  final String _content;
  final bool _answer;

  Widget display(BuildContext context) {
    return Text(
      this._content,
      textAlign: TextAlign.center,
      style: TextStyle(
        fontSize: 25.0,
        color: Colors.white,
      ),
    );
  }

  bool isCorrect(bool answer) => _answer == answer;
}

class Bank with Iterator {
  Questionable current;

  void answer(bool candidate) {
    if (current != null) {
      scores.add(current.isCorrect(candidate));
    }
  }

  void reset() {
    this._questions.clear();
    this._questions.addAll(_questionBank);
    this._questions.shuffle();
    this.scores.clear();
    this.moveNext();
  }

  List<bool> scores = [];

  bool get isFinished => this._questions.isEmpty;

  int get total => _questionBank.length;

  int get correct => this.scores.where((bool score) => score == true).length;

  int get wrong => this.scores.where((bool score) => score == false).length;

  int get remaining => this.total - this.scores.length;

  List<Questionable> _questions = [];

  @override
  bool moveNext() {
    bool hasNext = this._questions.isNotEmpty;
    if (this._questions.isNotEmpty) {
      this.current = this._questions.removeLast();
    }

    return hasNext;
  }
}
