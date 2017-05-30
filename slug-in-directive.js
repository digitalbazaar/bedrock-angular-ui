/*!
 * Slug In directive.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
import angular from 'angular';

/* @ngInject */
export default function factory($filter, $parse) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var slug = $filter('slug');
      var set = $parse(attrs.ngModel).assign || angular.noop;

      // if slug-in attribute is set, use it to update ng-model
      scope.$watch(attrs.brSlugIn, function(value) {
        if(value === undefined) {
          return;
        }
        set(scope, slug(value));
      });

      var namespace = '.slugInDirective';
      scope.$on('$destroy', function() {
        element.off(namespace);
      });
      element.on('$destroy' + namespace, function() {
        element.off(namespace);
      });

      // replace with previous initial value on blur if value is blank
      var last = '';
      element.on('focus' + namespace, function() {
        last = ngModel.$modelValue;
      });
      element.on('blur' + namespace, function() {
        if(ngModel.$modelValue === '') {
          scope.$apply(function() {
            set(scope, last);
          });
        }
      });

      // ensure view is updated after any input event
      element.on(
        'propertychange' + namespace +
        ' change' + namespace +
        ' input' + namespace +
        ' keyup' + namespace +
        ' paste' + namespace,
        function() {
          if(ngModel.$viewValue !== element.val()) {
            ngModel.$setViewValue(element.val());
          }
        });

      // always display model value (override view value)
      ngModel.$render = function() {
        element.val(ngModel.$modelValue);
      };

      // convert view value into slug
      ngModel.$parsers.push(function(v) {
        var parsed = slug(v);
        // force view to match model
        if(parsed !== ngModel.$viewValue) {
          ngModel.$setViewValue(parsed);
          ngModel.$render();
        }
        return parsed;
      });
    }
  };
}
