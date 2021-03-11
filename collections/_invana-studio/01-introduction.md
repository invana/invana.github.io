---
layout: doc-detail
title:  1. Introduction to Invana Studio
---

Graph Explorer is an open source, extendable data visualiser for 
Apache TinkerPop's Gremlin supported graph databases.

This project aims at being the interactive User Interface for Graphs, where 
user shall be able to make queries, visualise data, query more.

## 1.1 Features 

- Connect to any Apache TinkerPop enabled Graph Database.
- Connect via HTTP or WebSocket protocols.
- Connect to Basic and Token based Authentication gremlin server over http/s (you can use [gremlin-proxy](https://github.com/invanalabs/gremlin-proxy).
- Visualise data in Force Directed Graphs, Tables and JSON.
- Retain query history in your localstorage.
- Update colors of nodes and edges.


## 1.2 Requirements

- Any database that supports Apache Tinkerpop 3.4.x
- docker to run the application (optional, you can use the free cloud version from 
[here](http://graph-explorer.herokuapp.com){:target="_blank"} )  

  
> **Hint:** If you dont have any database preference to start with, 
> you can use any latest version of [JanusGraph](https://janusgraph.org){:target="_blank"}
> that is distributed with 
> Apache Tinkerpop 3.4.x. You can follow instructions to install JanusGraph from
> [here](https://docs.janusgraph.org/getting-started/installation/){:target="_blank"}.
 
## 1.3 License

This tool is distributed under open source 
[Apache License 2.0](https://github.com/invanalabs/graph-explorer/blob/master/LICENSE). 




