/*!
 * A polyfill for placeholder.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      if(element.placeholder) {
        element.placeholder();
      }
    }
  };
}
