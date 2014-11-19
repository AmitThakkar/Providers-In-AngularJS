Provider-vs-Service-vs-Factory
==============================

This repository explains difference among AngularJS Provider, Service and Factory.

When we are working on **AngularJS**, then many of us got confuse about the **AngularJS** **Providers**( **Service, Factory and Provider**). And think that What are these **Providers**( **Service, Factory and Provider**)? What is difference among them? Why should we use **Providers**? When should we use which **Provider**? In this blog we will cover all these questions.

Question: What are these **Providers**( **Service, Factory and Provider**)?
Answer: **Providers**

Question: What is difference among them?
Answer: 

Question: Why should we use **Providers**? 
Answer: Because all **Providers** are (Singleton)[http://codechutney.in/blog/nodejs/singleton-pattern-with-javascript/]. And all the **Providers** get lazy initialized whenever they get required( **Providers** get loaded on-demand only). Actually all the **AngularJS Providers** implement **Singleton** and **Dependency Injection/DI** design patterns, which help us to write good code.

Question: When should we use which **Provider**?
Answer: 