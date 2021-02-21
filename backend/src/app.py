# Import modules
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# Instance of the class Flask
app = Flask(__name__)

# Instance SQLAlchemy
db = SQLAlchemy(app)

# Route main
@app.route('/')
def Main():
    return render_template("index.html")

# Route for GET Article customer
@app.route('/api/posts/<int:id>', methods=["GET"])
def Article(id):
    return f"{id}"

# Route for GET all posts
@app.route('/api/posts', methods = ["GET"])
def Articles():
    return {"id": 1}

# Run server
app.run(port = 8080, debug = True)