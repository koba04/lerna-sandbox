'use strict';

const lernaSandboxPackageB = require('../lib');

describe('@koba04/lerna-sandbox-package-b', () => {
    it('should return ab', () => {
      expect(lernaSandboxPackageB()).toBe('ab!');
    });
});
