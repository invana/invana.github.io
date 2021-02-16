---
layout: guide-detail
title:  2. How to install and setup Invana Studio
---

We ship this tool as docker builds, so you can deploy 
 your own version of the tool pulling the  images from docker hub.
  Alrternatively, feel free to create your own distribution of 
`Dockerfile`(demonstrated in 2.4)

### 2.1 Install using docker 

{% highlight shell  %}
docker run -p 8888:8888 -d --name graph-explorer invanalabs/graph-explorer
{% endhighlight %}
 
### 2.2 Install on Heroku 

Click [here](https://heroku.com/deploy?template=https://github.com/invanalabs/graph-explorer/tree/master)
to create an app of Graph Explorer on Heroku.

### 2.3 Install on Google Run

{% highlight shell  %}
gcloud run deploy --image invanalabs/graph-explorer --platform managed
{% endhighlight %}

Give appropriate choices when it prompts you for service name, region and make sure 
you **allow unauthenticated invocations**.

If you need  any further information, you can check on how to deploy on google run 
[here](https://cloud.google.com/run/docs/quickstarts/build-and-deploy?authuser=3&_ga=2.76313557.-1934094456.1587553907)


### 2.4 Build your own docker 
{% highlight shell  %}
git clone git@github.com:invanalabs/graph-explorer.git
cd graph-explorer
docker build . -t invana-graph-explorer 
docker run -p 8888:8888 -d invana-graph-explorer
{% endhighlight %}


