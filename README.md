Providers In AngularJS
======================

This repository for explaining all the Provider in the AngularJS.

When we are working on **AngularJS**, then many of us get confuse about the **AngularJS** **Providers**. And think that What are these **Providers**? What is difference among them? Why should we use these **Providers**? When should we use which **Provider**? In this blog we will cover all these questions and we will get know about all the **providers**.

> Question: What are these **Providers** ?

Answer: All the big applications build using small-2 component/modules. And when we are making **AngularJS** application then **Providers** play a very essential role. **Providers** are injectors, so we can inject **providers** to other modules/component. **Providers** gets inject by name and initialized whenever other module request/require for them.

> Question: What is difference among them?

Answer: There are 6 below **providers** in **AngularJS**.

1. constant
2. value
3. service
4. factory
5. provider

**1. Constant:** **Constant** can be define with module.constant() api. This api takes two arguments: 1. name for the constant and 2. value for the constant. Lets see the code:

```JavaScript
providerTestModule.constant("ConstantPrimitiveTest", "I am Constant, My value can't be change.");
providerTestModule.constant("ConstantObjectTest", {name: "Amit Thakkar", age: 23});
```

**NOTE: As names says, value of constant can't be change.**

**2. Value:** Value can be define with module.value() api. This api also takes two arguments: 1. name for the value and 2. value for the value. Lets see the code:

```JavaScript
providerTestModule.value("ValueTest", "I am Value, Which can be modify.");
```

**NOTE: We can change the value of the value provider with the help of module.decorator() api.**

**3. Service:** We can define **Service** with module.service() api. This api also takes two arguments: 1. name for the **Service** and 2. [**Constructor function**](http://codechutney.in/blog/javascript/constructor-pattern/) for the initializing the **Service**. Lets see the code:

```JavaScript
providerTestModule.service("ServiceTest", function () {
    this.getName = function () {
        return "I am Service Test";
    };
});
```

**NOTE: Whatever function we are passing as a second argument, will be treat as a class**.
Whenever first time that **Service** will be request/required, that **function** will be call with **new** keyword as ```new Function()```, and resultant object of **new**([**Constructor function**](http://codechutney.in/blog/javascript/constructor-pattern/)), will be inject as **Service** there and return resultant object will be also store by the **AngularJS** for future request/require. So on the second and future request for this same **Service**, that same object will be return(this time [**Constructor function**](http://codechutney.in/blog/javascript/constructor-pattern/) will not be call with **new** keyword). In-fact that [**Constructor function**](http://codechutney.in/blog/javascript/constructor-pattern/) will calls only once as it is [**Singleton**](http://codechutney.in/blog/nodejs/singleton-pattern-with-javascript/).

**AngularJS** store all the **Providers** with itself, Whenever we request/required any **Provider**, **AngularJS** checks first into its storage, if request/required **Provider** found in the storage then it will be returned from there otherwise **AngularJS** initialized that **Provider**, and inject to requested place and store with itself for future request/require.

**3. Factory:** We can define **Factory** with module.factory() api. This api also takes two arguments: 1. name for the **Factory** and 2. **function** for the initializing the **Factory**. Lets see the code:

```JavaScript
providerTestModule.factory("FactoryTest", function () {
    return {
        getName: function () {
            return "I am Factory Test";
        }
    }
});
```



> Question: Why should we use these **Providers**?

Answer: Because all **Providers** are [Singleton](http://codechutney.in/blog/nodejs/singleton-pattern-with-javascript/). And all the **Providers** get lazy initialized whenever they get request/required first time( **Providers** get loaded on-demand only). Actually all the **AngularJS Providers** implement **Singleton** and **Dependency Injection/DI** design patterns, which help us to write good, loose couple code.

> Question: When should we use which **Provider**?

Answer: