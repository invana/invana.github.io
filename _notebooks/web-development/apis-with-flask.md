---
layout: classroom
title:  "APIs with Flask!"
date:   2017-12-31 01:10:52 +0530
categories: learn
tag: Web Development
software: Flask
curated_by: [rrmerugu]
logo: http://flask.pocoo.org/static/logo/flask.png
toc: true
---

## Hello world Example

Flask is a damn good micro-framework to write RESTful APIs in Python. You can
write single API per application or n number of APIs per application, gives
more flexibility and options.


```python
# requirements.txt

Flask==0.12.2
Flask-RESTful==0.3.6
flask-cors==3.0.3
```


```python
# run.py
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)

api = Api(app)
CORS(app)

class HelloWorld(Resource):
    def get(self):
        message_text = request.args.get("message_text")
        return {"message": message_text }

api.add_resource(HelloWorld, '/')

if __name__ == "__main__":
    run = app.run(debug=True)
```

Now you should be able to access the API over `http://localhost:5000`. You can test
the API with `curl -X GET http://localhost:5000`


## GET API with Flask

## POST API with Flask

## Writing automation Tests
