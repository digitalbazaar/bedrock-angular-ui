/*!
 * UI Utility module.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
import angular from 'angular';
import ActionMenuDirective from './action-menu-directive.js';
import ErrorDirective from './error-directive.js';
import HeadlineComponent from './headline-component.js';
import PlaceholderDirective from './placeholder-directive.js';
import SlugFilter from './slug-filter.js';
import SlugInDirective from './slug-in-directive.js';
import TabsComponent from './tabs-component.js';
import TabsPaneDirective from './tabs-pane-directive.js';
import TooltipDirective from './tooltip-directive.js';

const module = angular.module('bedrock.ui', ['stackables']);

module.component('brHeadline', HeadlineComponent);
module.component('brTabs', TabsComponent);
module.directive('brActionMenu', ActionMenuDirective);
module.directive('brError', ErrorDirective);
// polyfills "placeholder" attribute -- intentionally no "br" prefix
module.directive('placeholder', PlaceholderDirective);
module.directive('brSlugIn', SlugInDirective);
module.directive('brTabsPane', TabsPaneDirective);
module.directive('brTooltip', TooltipDirective);
module.filter('slug', SlugFilter);
