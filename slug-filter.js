/*!
 * Slug filter.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
export default function factory() {
  return function(input) {
    // replace spaces with dashes, make lower case and URI encode
    if(input === undefined || input.length === 0) {
      input = '';
    }
    return encodeURIComponent(
      input.replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').toLowerCase());
  };
}
