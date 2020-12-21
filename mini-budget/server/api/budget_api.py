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


