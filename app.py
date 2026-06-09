from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods = ["GET", "POST"])
def WelcomePage():
    return render_template("WelcomePage.html")

@app.route("/PointsCalculator", methods = ["GET", "POST"])
def PointsCalculator():
    return render_template("PointsCalculator.html")

@app.route("/CourseMatcher", methods = ["GET", "POST"])
def CourseMatcher():
    return render_template("CourseMatcher.html")

if __name__ == "__main__":
    app.run()


