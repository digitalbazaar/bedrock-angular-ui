/*!
 * Tabs.
 *
 * Adapted from angular.js directive documentation.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author David I. Lehn
 */
import angular from 'angular';

export default {
  transclude: true,
  controller: Ctrl,
  templateUrl: 'bedrock-angular-ui/tabs-component.html'
};

/* @ngInject */
function Ctrl($scope) {
  const self = this;
  let panesMap;

  self.$onInit = function() {
    self.panes = $scope.panes = [];
    panesMap = {};
    panesMap.none = [];
  };

  self.select = $scope.select = function(pane) {
    if(typeof pane === 'number') {
      // select by index
      pane = pane[pane];
    }
    angular.forEach(self.panes, function(p) {
      if(typeof pane === 'string' && p.tabId === pane) {
        // select by tab ID
        pane = p;
      }
      p.selected = false;
    });
    if(typeof pane !== 'string') {
      pane.selected = true;
    }
  };

  self.addPane = function(pane, index) {
    // store pane order
    if(isNaN(parseInt(index, 10))) {
      panesMap.none.push(pane);
    } else {
      panesMap[index] = pane;
    }

    // rebuild panes
    self.panes.length = 0;
    Object.keys(panesMap).sort().forEach(function(key) {
      if(key === 'none') {
        self.panes.push.apply(self.panes, panesMap[key]);
      } else {
        self.panes.push(panesMap[key]);
      }
    });

    // select pane
    if(self.panes.length === 1 || index === 0) {
      $scope.select(pane);
    }
  };
}
