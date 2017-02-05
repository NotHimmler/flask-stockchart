from flask import Flask, request, render_template, send_from_directory
import importlib
import json
gf = importlib.import_module("google_finance")

__app__ = Flask(__name__)

@__app__.route("/")
def server():
    return render_template('index.html')

@__app__.route("/get_data/", defaults={'path':''})
@__app__.route("/get_data/<path:path>")
def get_data(path):
    data_exists = gf.get_historical_data(path)
    
    if(data_exists):
        gf.json_from_csv(path)
        return send_from_directory('./static/json','{0}.json'.format(path))
    else:
        return json.dumps(False)
    
if __name__ == "__main__":
    __app__.run(debug=True)
