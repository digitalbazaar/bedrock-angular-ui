/*!
 * Headline directive.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
export default {
  bindings: {
    title: '@brTitle',
    loading: '<?brLoading'
  },
  controller: Ctrl,
  transclude: true,
  templateUrl: 'bedrock-angular-ui/headline-component.html'
};

/* @ngInject */
function Ctrl($attrs, $scope) {
  var self = this;

  $attrs.brOptions = $attrs.brOptions || {};
  $attrs.$observe('brOptions', function(value) {
    self.options = $scope.$eval(value) || {};
    if(!('menu' in self.options)) {
      self.options.menu = true;
    }
  });
}
