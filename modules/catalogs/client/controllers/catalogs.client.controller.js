(function () {
  'use strict';

  // Catalogs controller
  angular
    .module('catalogs')
    .controller('CatalogsController', CatalogsController);

  CatalogsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'catalogResolve'];

  function CatalogsController ($scope, $state, $window, Authentication, catalog) {
    var vm = this;

    vm.authentication = Authentication;
    vm.catalog = catalog;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Catalog
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.catalog.$remove($state.go('catalogs.list'));
      }
    }

    // Save Catalog
    function save(isValid) {
      console.log(111, vm.catalog);
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.catalogForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.catalog._id) {
        vm.catalog.$update(successCallback, errorCallback);
      } else {
        vm.catalog.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        console.log(1111, res);
        // $state.go('catalogs.view', {
        //   catalogId: res.data._id
        // });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
