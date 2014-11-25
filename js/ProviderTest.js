/**
 * Created by Amit Thakkar on 17/11/14.
 */

// Defining A test Module with name providerTest
var providerTestModule = angular.module("providersTest", []);

/*
 * Defining A test Constant with name ConstantTest
 * module.constant() api takes two arguments,
 * 1. Name for the constant
 * 2. value for that constant. If value is primitive then it can not be modify,
 * If value is object then reference can not be modify, we can add/remove/update
 * properties to that object.
 * */
providerTestModule.constant("ConstantPrimitiveTest", "I am Constant, My value can't be change.");
providerTestModule.constant("ConstantObjectTest", {name: "Amit Thakkar", age: 23});

/*
 * Defining A test Value with name ValueTest
 * module.value() api also takes two arguments,
 * 1. Name for the value
 * 2. value for that value.
 * */
providerTestModule.value("ValueTest", "I am Value, Which can be modify.");

/*
 * Defining A test Service with name ServiceTest
 * module.service() api also takes two arguments,
 * 1. Name for Service which will be use to inject this service.
 * 2. Constructor function, Which will be called with new keyword as
 * 'new ProvidedFunctionAsSecondArgument()', and whatever it returns,
 * will be injected as this service.
 * */
providerTestModule.service("ServiceTest", function () {
    this.getName = function () {
        return "I am Service Test";
    };
});

/*
 * Defining A test Factory with name FactoryTest
 * module.factory() api takes two arguments,
 * 1. Name for Factory which will be use to inject this factory.
 * 2. function, Which will be called and what ever it returns will
 * be injected as this factory.
 * */
providerTestModule.factory("FactoryTest", function () {
    return {
        getName: function () {
            return "I am Factory Test";
        }
    }
});

/*
 * Defining A test Provider with name ProviderTest
 * module.provider() api also takes two arguments,
 * 1. Name for Provider which will be use to inject this provider.
 * 2. Constructor function, Which will be called with new keyword as
 * 'new ProvidedFunctionAsSecondArgument()', and whatever it returns,
 * $get method will be call on that and whatever that $get method
 * will return will be injected as this provider.
 * */
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

// Provider Have one advantage that we can configure Providers before injecting.
providerTestModule.config(["ProviderTestProvider", function (ProviderTestProvider) {
    ProviderTestProvider.setHost("www.codechutney.in/");
    ProviderTestProvider.setURI("blog");
}]);

// Injecting all providers to TestController.
providerTestModule.controller("TestController", ["ProviderTest", "ServiceTest", "FactoryTest", "ConstantPrimitiveTest",
    "ConstantObjectTest", "ConstantFunctionTest",
    function (ProviderTest, ServiceTest, FactoryTest, ConstantPrimitiveTest, ConstantObjectTest, ConstantFunctionTest) {
        console.log(arguments);
    }
]);