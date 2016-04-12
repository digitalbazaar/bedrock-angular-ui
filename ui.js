/*!
 * UI Utility module.
 *
 * Copyright (c) 2012-2016 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([
  'angular',
  './action-menu-directive',
  './error-directive',
  './headline-component',
  './placeholder-directive',
  './slug-filter',
  './slug-in-directive',
  './tabs-directive',
  './tooltip-directive'
], function(
  angular,
  actionMenuDirective,
  errorDirective,
  headlineComponent,
  placeholderDirective,
  slugFilter,
  slugInDirective,
  tabsDirective,
  tooltipDirective) {

'use strict';

var module = angular.module('bedrock.ui', []);

// TODO: convert other deps into `register` format and use a loop
/*Array.prototype.slice.call(arguments, 1).forEach(function(dep) {
  dep(module);
});*/
headlineComponent(module);

module.directive(actionMenuDirective);
module.directive(errorDirective);
module.directive(placeholderDirective);
module.filter(slugFilter);
module.directive(slugInDirective);
module.directive(tabsDirective);
module.directive(tooltipDirective);

return module.name;

});
