'use strict';

const lernaSandboxPackageA = require('../lib');

describe('@koba04/lerna-sandbox-package-a', () => {
    it('should return a', () => {
      expect(lernaSandboxPackageA()).toBe('a');
    });
});
