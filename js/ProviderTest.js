/**
 * Created by Amit Thakkar on 17/11/14.
 */

// Defining A test Module with name providerTest
var providerTestModule = angular.module("providersTest", []);

/*
 * Defining A test Service with name ServiceTest
 * module.service() api also take two arguments,
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
 * module.factory() api take two arguments,
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
 * module.provider() api also take two arguments,
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
providerTestModule.controller("TestController", ["ProviderTest", "ServiceTest", "FactoryTest",
  function (ProviderTest, ServiceTest, FactoryTest) {
    console.log(arguments);
  }
]);