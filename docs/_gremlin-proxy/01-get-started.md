---
layout: doc-gremlin-proxy
title:  1. Get Started
permalink: /docs/:collection/:title:output_ext
---


Proxy layer for Apache TinkerPop's Gremlin Server to support their authentication
 abilities from web browsers enabling CORS.

This project let's you connect to your favorite Gremlin Server using connection 
strings from the web browsers. This service doesn't add any layer of security, 
it just avoids the CORS issue. You can extend this service to add your own authentication 
or event logging.

![Overview Diagram](https://raw.githubusercontent.com/invanalabs/gremlin-proxy/develop/diagram.png "Overview Diagram")


## 1.1. Requirements

- Any database that supports Apache Tinkerpop 3.4.x 
- docker to run gremlin-proxy as a service.
  
## 1.2 Running 

You need to provide GREMLIN_HOST as environment variable, where GREMLIN_HOST is the gremlin host
you want to connect to. 

{% highlight shell  %}
docker run -p 9600:9600 -e GREMLIN_HOST=http://127.0.0.1:8182 -d --name gremlin-proxy invanalabs/gremlin-proxy 
{% endhighlight %}

This will start a proxy server at `yourIPorDNS:9600`.
  

## 1.3 License

This tool is distributed under open source 
[Apache License 2.0](https://github.com/invanalabs/gremlin-proxy/blob/master/LICENSE). 




