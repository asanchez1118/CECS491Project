from flask import Flask, jsonify, request
import pandas as pd
import os
from sklearn.externals import joblib

app = Flask(__name__)

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        d = request.get_json()
        df = pd.DataFrame(data = d)
        classifier = joblib.load("./Model.pkl")
        return jsonify(classifier.predict(df).tolist())


if __name__ == '__main__':
    app.run(debug = True)