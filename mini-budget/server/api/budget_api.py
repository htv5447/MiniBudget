from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json
from .db_utils import *


class GetItems(Resource):
    def get(self):
        result = exec_get_all("SELECT * FROM budget")
        data = []
        for i in result:
            data.append({"id" : i[0], "items" : i[1], "price" : i[2]})
        return data


class AddItem(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('item')
        parser.add_argument('price')
        args = parser.parse_args()
        exec_commit("INSERT INTO budget(items,price) VALUES(%s,%s)",[str(args['item']),str(args['price'])])