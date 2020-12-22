import 'package:flutter/material.dart';
import 'login_page.dart';
import 'signup.dart';
import 'package:animated_text_kit/animated_text_kit.dart';

class Home extends StatelessWidget {
  @override
  Widget build(context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("Service App"),
          backgroundColor: Colors.blue,
          centerTitle: true),
      body: Column(
        children: <Widget>[
          Padding(padding: EdgeInsetsDirectional.only(top: 30)),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                "Create",
                style: TextStyle(
                    fontSize: 45,
                    color: Colors.blue,
                    fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 100,
                width: 200,
                child: RotateAnimatedTextKit(
                  text: ["Listings", "Services", " Requests"],
                  transitionHeight: 100,
                  textStyle: TextStyle(
                      fontStyle: FontStyle.italic,
                      fontFamily: "Horizon",
                      fontSize: 45,
                      color: Colors.blue,
                      fontWeight: FontWeight.bold),
                  repeatForever: true,
                  textAlign: TextAlign.start,
                ),
              ),
            ],
          ),
          new Padding(
            padding: const EdgeInsets.all(40.0),
          ),
          Center(
            child: ButtonTheme(
              height: 60,
              minWidth: 125,
              child: RaisedButton(
                elevation: 5.0,
                color: Colors.white,
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => LoginScreen()));
                },
                child: Text(
                  'Log In',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    fontFamily: 'san-serif',
                    color: Colors.lightBlue,
                  ),
                ),
              ),
            ),
          ),
          Center(
            heightFactor: 1.5,
            child: ButtonTheme(
              height: 60,
              minWidth: 125,
              child: RaisedButton(
                  elevation: 5.0,
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => SignUp()));
                  },
                  child: Text(
                    'Sign up',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      fontFamily: 'san-serif',
                      color: Colors.white,
                    ),
                  ),
                  color: Colors.lightBlue),
            ),
          ),
        ],
      ),
    );
  }
}
