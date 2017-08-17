/*!
 * Tooltip directive.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory() {
  return {
    restrict: 'A',
    link: Link
  };

  function Link(scope, element, attrs) {
    let text;
    let options = {};

    attrs.$observe('brOptions', function(value) {
      options = value ? scope.$eval(value) : {};
      options.placement = options.placement || 'auto top';
      options.trigger = options.trigger || 'hover focus';
      if(text !== undefined) {
        update();
      }
    });

    attrs.$observe('brTooltip', function(value) {
      text = value || '';
      update();
    });

    function update() {
      // remove any old tooltip
      if(element.data('bs.tooltip')) {
        element.tooltip('hide');
        element.removeData('bs.tooltip');
      }
      if(text === '') {
        return;
      }
      // add new tooltip to appropriate container
      let container;
      if(element.closest('.btn-group').length ||
        element.closest('.input-group')) {
        container = 'body';
      } else {
        container = element.closest('.modal-body');
        if(!container.length) {
          container = 'body';
        }
      }
      element.tooltip({
        title: text,
        container: container,
        placement: options.placement,
        trigger: options.trigger
      });
    }
  }
}
