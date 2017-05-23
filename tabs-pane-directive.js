/*!
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author David I. Lehn
 */
export default function factory() {
  return {
    require: '^brTabs',
    restrict: 'E',
    transclude: true,
    bindings: {
      title: '@brTitle',
      index: '=?brTabPaneIndex'
    },
    link: Link,
    templateUrl: 'bedrock-angular-ui/tabs-pane-directive.html'
  };
}

function Link(scope, element, attrs, tabsCtrl) {
  // FIXME: why is this doing element.attr() should it be using $observe?
  scope.title = scope.title || attrs.brTitle || element.attr('br-title');
  scope.tabId = scope.tabId || attrs.brTabId || element.attr('br-tab-id');
  tabsCtrl.addPane(scope, scope.index);

  // watch br-selected expression (on parent scope) for selection changes
  if(!attrs.brSelected) {
    return;
  }
  scope.$parent.$watch(attrs.brSelected, function(value) {
    if(value) {
      tabsCtrl.select(scope);
    } else {
      scope.selected = false;
    }
  });
}
