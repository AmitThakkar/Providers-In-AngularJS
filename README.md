Providers In AngularJS
======================

This repository is for exploring all the Providers in AngularJS.

While working on **AngularJS**, many of us get confused about the **AngularJS** **Providers** and wonder what are these **Providers**? What is the difference among them? Why should we use these **Providers**? Which **Provider** should be used when? In this blog we will cover all these questions and also get to know about all the **providers**.

> What are **Providers** ?

All the big applications are built using small components/modules. And when we are building **AngularJS** application then **Providers** play a very essential role. **Providers** are injectors, so we can inject **providers** to other modules/component. **Providers** get injected by name and are initialized whenever other module requests/requires them. There are 5 different types of **providers** in **AngularJS**.

1. constant
2. value
3. [service](https://amitthakkar.github.io/Service-In-AngularJS/)
4. factory
5. provider

> What is difference among them?

**1. Constant:** **Constant** can be defined with `module.constant()` api. This api takes two arguments: 1. name for the constant and 2. value for the constant. Lets see the code:

```JavaScript
providerTestModule.constant("ConstantPrimitiveTest", "I am Constant, My value can't be changed.");
providerTestModule.constant("ConstantObjectTest", {name: "Amit Thakkar", age: 23});
```

**NOTE: As names says, value of constant can't be change.**

**2. Value:** Value can be defined with `module.value()` api. This api also takes two arguments: 1. name for the value and 2. value for the value. Lets see the code:

```JavaScript
providerTestModule.value("ValueTest", "I am Value, Which can be modify.");
```

**NOTE: We can change the value of the value provider with the help of module.decorator() api.**

**3. [Service](https://amitthakkar.github.io/Service-In-AngularJS/):** We can define **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** with `module.service()` api. This api also takes two arguments: 1. name for the **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** and 2. [**Constructor function**](https://amitthakkar.github.io/Constructor-Pattern/) for the initializing the **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)**. Lets see the code:

```JavaScript
providerTestModule.service("ServiceTest", function () {
    this.getName = function () {
        return "I am Service Test";
    };
});
```

**NOTE: Whatever function we are passing as a second argument, will be treated as a class**.

Whenever first time this **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** will be requested/required, that **function** will be called with **new** keyword as `new Function()`, and resultant object of **new**([**Constructor function**](https://amitthakkar.github.io/Constructor-Pattern/)), will be injected as **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** there and the returned resultant object will also be stored by the **AngularJS** for future request. So on the second and future request for this same **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)**, that same object will be returned(this time [**Constructor function**](https://amitthakkar.github.io/Constructor-Pattern/) will not be called with **new** keyword). In-fact that [**Constructor function**](https://amitthakkar.github.io/Constructor-Pattern/) will be called only once as it is **Singleton**.

**AngularJS** stores all the **Providers** with itself, whenever we request/require any **Provider**, **AngularJS** checks first into its storage, if requested/required **Provider** is found in the storage then it will be returned from there otherwise **AngularJS** will initialize that **Provider**, and inject it to requested place and store with itself for future request.

**NOTE**: You can checkout [Service In AngularJS](https://amitthakkar.github.io/Service-In-AngularJS/) blog for more details. There I have described [Services](https://amitthakkar.github.io/Service-In-AngularJS/) in more detail(How to use [Services](https://amitthakkar.github.io/Constructor-Pattern/)? How to inject [Services](https://amitthakkar.github.io/Constructor-Pattern/)? etc.).

**4. Factory:** We can define **Factory** with `module.factory()` api. This api also takes two arguments: 1. name for the **Factory** and 2. **function** for initializing the **Factory**. Lets see the code:

```JavaScript
providerTestModule.factory("FactoryTest", function () {
    return {
        getName: function () {
            return "I am Factory Test";
            return "I am Factory Test";
        }
    }
});
```

**NOTE: Whatever function(which we are passing as a second argument) will return, will be injected as Factory**.

**Factory** is very similar to **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)**. The one known difference between **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** and **Factory** is that **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** **function** is treated as [**Constructor function**](https://amitthakkar.github.io/Constructor-Pattern/) while **Factory** **function** is treated as normal **function**.

**5. Provider:** We can define **Provider** with `module.provider()` api. This api also takes two arguments: 1. name for the **Provider** and 2. **function** for initializing the **Provider**. Let's see the code:

```JavaScript
providerTestModule.provider("ProviderTest", function () {
    var host, uri;
    this.setHost = function (h) {
        host = h;
    };
    this.setURI = function (u) {
        uri = u;
    };
    this.$get = function () {
        return {
            getName: function () {
                return "I am Provider Test! My host value: " + host + " and URI value: " + uri;
            }
        }
    };
});
```

**NOTE: Whatever we are returning from that $get function/method, will be injected as Provider.**

All the **Providers**( **Constant**, **Value**, **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** and **Factory**) are syntactic sugar on top of this. But this is the only one **Provider** which can be access before initializing. We can provide/set custom configuration to provider with the help of module.config() api before initializing the **Provider**. e.g.

```JavaScript
providerTestModule.config(["ProviderTestProvider", function (ProviderTestProvider) {
    ProviderTestProvider.setHost("https://amitthakkar.github.io");
    ProviderTestProvider.setURI("blog");
}]);
```

**NOTE:** In module.config() api, **Provider** will be postfix with **Provider**. e.g. `ProviderTest` will be referred as `ProviderTestProvider`.

> Why should we use these **Providers**?

Because all **Providers** are Singleton. And all the **Providers** get lazy initialized whenever they get request first time( **Providers** get loaded on-demand only). Actually all the **AngularJS Providers** implement **Singleton** and **Dependency Injection/DI** design patterns, which help us to write good, loosely coupled code.

> When should we use which **Provider**?

**Constant**, **Value** are self explanatory. **Provider** is the only **Provider** which can be customized before initializing so we can use **Provider** to expose something(any module, any api handler etc). Whereas **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** and **Factory** are generally used to put our logic, interact with Server API etc.

**NOTE :** Its an just convention that we should **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)** where we are playing with single instance, while **Factory** should be use where we are playing with multiple instances, although whatever we are doing with **[Service](https://amitthakkar.github.io/Service-In-AngularJS/)**, can be done with **Factory** and vice-versa.

Follow Me
---
[Github](https://github.com/AmitThakkar)

[Twitter](https://twitter.com/amit_thakkar01)

[LinkedIn](https://in.linkedin.com/in/amitthakkar01)

[More Blogs By Me](http://amitthakkar.github.io/)