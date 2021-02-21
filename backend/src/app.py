from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def Main():
    return render_template("index.html")


app.run(port = 8080, debug = True)