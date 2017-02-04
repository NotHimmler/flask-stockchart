from datetime import date, timedelta, datetime
import urllib.request
import csv
import calendar
import json

#Get CSV file from google finance, historical
#Parse CSV to JSON
#Save JSON for particular stock ticker

#Query string to get historical data
#Start and end dates in format Jan 00, 0000 - MMM DD, YYYY
__query_string__ = "https://www.google.com/finance/historical?q={0}&startdate={1}&enddate={2}&output=csv"
__month_names__ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]

#Gets historical data 1 year from today
def get_historical_data(ticker_query):
    try:
        urllib.request.urlretrieve(create_query_string(ticker_query), "./ticker-csv/{0}.csv".format(ticker_query))
        return True
    except urllib.error.HTTPError:
        print("There was an error")
        return False

def format_date_for_api_request(date):
    day = date.day
    month = date.month
    year = date.year

    monthName = __month_names__[month-1]

    if day < 10:
        return "{0}+0{1}%2C+{2}".format(monthName,day,year)
    else:
        return "{0}+{1}%2C+{2}".format(monthName,day,year)

def create_query_string(ticker):
    today = date.today()
    year_ago = today - timedelta(days=366)
    return __query_string__.format(ticker, format_date_for_api_request(year_ago),format_date_for_api_request(today))

#with open("./ticker-csv/GOOG.csv", newline="") as csvfile:
#    reader = csv.reader(csvfile)
#    for row in reader:
#        print(row)

def timestamp_from_api_date(date_string):
    date_from_string = datetime.strptime(date_string, "%d-%b-%y")
    return calendar.timegm(date_from_string.timetuple())
    
def json_from_csv(ticker):
    with open("./ticker-csv/{0}.csv".format(ticker), newline="") as csvfile:
        reader = csv.reader(csvfile)
        
        result = []
        i = 0
        
        for row in reader:
            if i == 0:
                i = i + 1
            else:
                result = [[timestamp_from_api_date(row[0])*1000,float(row[len(row)-2])]] + result
        
        with open('./static/json/{0}.json'.format(ticker), 'w') as outfile:
            json.dump(result, outfile, separators=(',',':'))
