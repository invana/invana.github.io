---
layout: guide-detail
title:  3. Connecting
---

We ship this tool as docker builds, so you can deploy 
 your own version of the tool pulling the  images from docker hub.
  Alrternatively, feel free to create your own distribution of 
`Dockerfile`(demonstrated in 2.4)

### 3.1 Gremlin Server with No authentication enabled 
{% highlight shell  %}
1. http://localhost:8182/gremlin  connect over http
2. ws://localhost:8182/gremlin - connect over ws 
{% endhighlight %}


### 3.2 Gremlin Server with authentication enabled

Even though Gremlin server is available in `http://` protocol, it doesn't support 
Cross-origin resource sharing (CORS), which means all your database queries over http requests
are denied by your Gremlin server. This happens when both graph-explorer and your
gremlin server are not on same domain, which is how we generally host both the apps
(in separate domains) .


{% highlight shell  %}
1. http://user:password@awesome-proxy-domain.local/gremlin  -   Basic Authentication
2. http://access-or-session-token@awesome-proxy-domain.local/gremlin - Token Based Authentication
3. http://awesome-proxy-domain.local/gremlin - No Authentication
{% endhighlight %}
 


