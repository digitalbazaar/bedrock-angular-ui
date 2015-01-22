/*!
 * UI Utility module.
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([
  'angular',
  './action-menu-directive',
  './error-directive',
  './headline-directive',
  './placeholder-directive',
  './slug-filter',
  './slug-in-directive',
  './tabs-directive',
  './tooltip-directive'
], function(
  angular,
  actionMenuDirective,
  errorDirective,
  headlineDirective,
  placeholderDirective,
  slugFilter,
  slugInDirective,
  tabsDirective,
  tooltipDirective) {

'use strict';

var module = angular.module('bedrock.ui', []);

module.directive(actionMenuDirective);
module.directive(errorDirective);
module.directive(headlineDirective);
module.directive(placeholderDirective);
module.filter(slugFilter);
module.directive(slugInDirective);
module.directive(tabsDirective);
module.directive(tooltipDirective);

return module.name;

});
