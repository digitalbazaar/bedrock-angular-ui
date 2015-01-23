/*!
 * Error directive.
 *
 * Copyright (c) 2014-2015 Digital Bazaar, Inc. All rights reserved.
 *
 * @author David I. Lehn
 * @author Dave Longley
 */
define(['module'], function(module) {

'use strict';

var modulePath = module.uri.substr(0, module.uri.lastIndexOf('/')) + '/';

/* @ngInject */
function factory() {
  return {
    restrict: 'A',
    scope: {error: '=brErrorView'},
    templateUrl: modulePath + 'error-view.html',
    link: Link
  };
}

function Link(scope) {
  var model = scope.model = {};
  model.error = null;
  // guess at useful simple cause output
  model.cause = null;

  scope.$watch('error', function(error) {
    if(!error) {
      return;
    }
    model.error = error;

    // FIXME: improve this
    // use some heuristics to find a useful cause
    // find a jsonld cause
    if(error.name && error.name.indexOf('jsonld.') === 0) {
      model.cause = error;
      // dig down to lowest cause
      while(model.cause.details && model.cause.details.cause) {
        model.cause = model.cause.details.cause;
      }
    }
  });
}

return {brErrorView: factory};

});
