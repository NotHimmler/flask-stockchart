from flask import Flask, request, render_template, send_from_directory
import importlib
gf = importlib.import_module("google_finance")

__app__ = Flask(__name__)

@__app__.route("/")
def server():
    return render_template('index.html')

@__app__.route("/get_data/", defaults={'path':''})
@__app__.route("/get_data/<path:path>")
def get_data(path):
    gf.get_historical_data(path)
    gf.json_from_csv(path)
    return send_from_directory('./static/json','{0}.json'.format(path))

if __name__ == "__main__":
    __app__.run(debug=True)
