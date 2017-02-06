from flask import Flask, request, render_template, send_from_directory
from flask_socketio import SocketIO, send, emit
import importlib
import json
config = importlib.import_module("flask-setup")
gf = importlib.import_module("google_finance")

__app__ = Flask(__name__)
__app__.config['SECRET KEY'] = config.secret
socketio = SocketIO(__app__)

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

tickers = []

@__app__.route("/get_tickers")
def get_tickers():
    return json.dumps(tickers)

@socketio.on('add')
def handle_add(add):
    if(gf.get_historical_data(add)):
        print("ticker added")
        global tickers
        tickers = [add] + tickers
        socketio.emit('added',add)

@socketio.on('remove')
def handle_remove(remove):
    try:
        index = tickers.remove(remove)
        socketio.emit("removed",remove)
    except ValueError:
        print("Tried to remove nonexistent value: {}".format(remove))

    
if __name__ == "__main__":
    socketio.run(__app__)
