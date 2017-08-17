/*
 * Bedrock Configuration.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 */
const path = require('path');

module.exports = function(bedrock) {
  if(bedrock.config.protractor) {
    const config = bedrock.config.protractor.config;
    // add protractor tests
    // config.suites['bedrock-angular-ui'] =
    //  path.join(__dirname, './tests/**/*.js');
    config.params.config.onPrepare.push(
      path.join(__dirname, './prepare'));
  }
};
