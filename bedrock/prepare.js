const bedrock = global.bedrock;
const by = global.by;

bedrock.on('init', function() {
  // locate stackable trigger elements
  by.addLocator('trigger', function(model, parent) {
    const using = parent || document;
    return using.querySelectorAll("[stackable-trigger^='" + model + "']");
  });

  // locate br-headline menu trigger elements
  by.addLocator('brHeadlineMenu', function(title, parent) {
    const using = parent || document;
    return using.querySelectorAll(
      "br-headline[br-title^='" + title + "'] [stackable-trigger='menu']");
  });

  // locate the top-level action menu
  by.addLocator('brActionMenu', function() {
    return document.querySelectorAll('dialog[stackable="menu"]');
  });

  // locate menu items with the given text
  by.addLocator('menuItem', function(value, parent) {
    value = value.trim();
    const using = parent || document;
    const items = using.querySelectorAll('.stackable-menu > li > a');
    return Array.prototype.filter.call(items, function(item) {
      return item.textContent.trim() === value;
    });
  });
});
