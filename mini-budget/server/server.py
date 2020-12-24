from flask import Flask
from flask_restful import Resource, Api


from api.db_utils import *
from api.budget_api import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router


api.add_resource(GetItems,'/items')
api.add_resource(AddItem,'/item/')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('schema.sql');
    print("Starting flask");
    app.run(debug=True), #starts Flask



    