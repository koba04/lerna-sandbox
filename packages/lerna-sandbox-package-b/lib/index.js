'use strict';

const lernaSandboxPackageA = require('@koba04/lerna-sandbox-package-a');

module.exports = lernaSandboxPackageB;

function lernaSandboxPackageB() {
  return lernaSandboxPackageA() + 'b';
}
