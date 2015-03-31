# bedrock-angular-ui

A [bedrock][] [AngularJS][] module that provides various UI components.

Uses features from [bedrock-angular][].

## Setup

```
bower install bedrock-angular-ui
```

Installation of the module followed by a restart of your [bedrock][] server
is sufficient to make the module available to your application.

To manually add **bedrock-angular-ui** as a dependency:

```js
angular.module('myapp', ['bedrock.ui']);
```

## Directives

### br-action-menu

Show an action menu. Provides standard `stackables` wrapper around `<ul>` menu
items. Useful in headlines and tables of resources.

```html
<table class="table table-condensed" ng-show="model.items.length > 0">
  <thead>
    <tr>
      <th>Name</th>
      <th class="br-action">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="item in model.items | orderBy:'label'"
      <!-- Name -->
      <td>
        <a href="{{item.id}}">{{item.label}}</a>
      </td>
      <!-- Action -->
      <td class="br-action">
        <br-action-menu>
          <ul class="dropdown-menu stackable-menu">
            <!-- Edit -->
            <li>
              <a class="stackable-cancel" ng-click="model.editItem(item)">
                <i class="fa fa-pencil"></i> Edit
              </a>
            </li>
            <!-- Set as default -->
            <li>
              <a class="stackable-cancel" ng-click="model.setDefault(item.id)">
                <i class="fa fa-star"></i> Set as default
              </a>
            </li>
            <!-- Remove -->
            <li class="divider"></li>
            <li class="alert-danger">
              <a class="stackable-cancel" ng-click="model.removeItem(item)">
                <i class="fa fa-times"></i> Remove
              </a>
            </li>
          </ul>
        </br-action-menu>
      </td>
    </tr>
  </tbody>
</table>
```

### br-error

Show details of an error.

```html
<!-- error details -->
<div ng-show="model.error">
  <h3 class="headline">Error Details</h3>
  <div br-error-view="model.error"></div>
</div>

```

### br-headline

Show a standard section headline. Useful for a common look and feel. Supports
having a menu for section specific actions.

```html
<div class="row">
  <div class="section col-md-12">
    <br-headline br-title="Items" br-loading="model.state.items.loading">
      <ul class="stackable-menu dropdown-menu">
        <li>
          <a class="stackable-cancel" ng-click="modals.showAddItem=true"><i class="fa fa-plus"></i> Add Item</a>
        </li>
      </ul>
    </br-headline>
    <div ng-show="!model.state.items.loading && items.length == 0">
      <p class="text-center">You have no items for this identity.</p>
      <button type="button"
        class="btn btn-success pull-right"
        ng-click="modals.showAddItem=true"><i class="fa fa-plus"></i> Add Item</button>
    </div>
    <div ...>...</div>
  </div>
</div>

<div class="row">
  <div class="section col-md-12">
    <br-headline br-title="Recent Items" br-loading="model.state.recent.loading"
      br-options="{menu: false}"></br-headline>
    <div ng-show="!model.state.items.loading && recent.length == 0">
      <p class="text-center">You have no recent items for this identity.</p>
    </div>
    <div ...>...</div>
  </div>
</div>
```

### br-slug-in

Automatically create slug data from a model property.

```html
<br-input br-model="model.resource.sysSlug"
  ng-model="model.resource.sysSlug"
  br-slug-in="model.resource.label"
  br-options="{
    name: 'sysSlug', label: 'Short Name',
    placeholder: 'my-short-name', disabled: {{model.loading}},
    autocomplete: 'off', maxlength: '32',
    columns: {
      label: 'col-md-2',
      input: 'col-md-8',
      help: 'col-md-offset-2 col-md-8'
    }
  }">
  Enter a short name for this resource. An example would be "my-short-name",
  or "myshortname".
</br-input>
```

### br-tabs

Wrapper around a number of `br-tabs-pane` components.

```html
<div br-tabs>
  ...
</div>
```

### br-tabs-pane

Wrapper around content for a tab used with a `br-tabs` component.

```html
<div br-tabs-pane br-title="My Tab" br-tab-id="my-tab"
  br-tab-pane-index="1">
  <div ng-include="'my-tab.html'"></div>
</div>
```

### br-tooltip

Show a tooltip.

```html
<i class="icon fa fa-pencil"
  br-tooltip="Edit this item."
  br-options="{placement: 'bottom'}"></i>
```

Options:
- **placement**: See [UI Bootstrap][] tooltip docs.
- **trigger**: See [UI Bootstrap][] tooltip docs.

### placeholder

Polyfill for `placeholder` attribute.

## Filters

### slug

Convert a string to a "slug". Repeated whitespace and `-` in a string are
replaced with a single `-`. The string is also lowercased. Useful for URL
friendly ids.

```html
{{accountName | slug}}
```

```js
var slugified = $filter('slug')(scope.input);
```

```
{{'My name' | slug}} => 'my-name'
{{'My   Name' | slug}} => 'my-name'
{{'My - Name' | slug}} => 'my-name'
{{'My --- Name' | slug}} => 'my-name'
```

[bedrock]: https://github.com/digitalbazaar/bedrock
[bedrock-angular]: https://github.com/digitalbazaar/bedrock-angular
[bedrock-angular-alert]: https://github.com/digitalbazaar/bedrock-angular-alert
[bedrock-angular-resource]: https://github.com/digitalbazaar/bedrock-angular-resource
[AngularJS]: https://github.com/angular/angular.js
[UI Bootstrap]: https://angular-ui.github.io/bootstrap/
