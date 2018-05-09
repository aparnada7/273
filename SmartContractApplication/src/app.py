from flask import Flask, render_template, request
import jsonify

app = Flask(__name__)


@app.route("/")
def loadIndex():
    return render_template("index.html")


@app.route("/login")
def login():
    return render_template("index.html")


@app.route("/register")
def registerUser():
    return render_template("register.html")


@app.route("/homepage", methods=['POST'])
def homepage():
    print("redirecting")
    return render_template("homepage.html")


@app.route("/userclaim")
def buy():
    return render_template("userclaim.html")


if __name__ == '__main__':
    app.run(port=3002, debug=True)
