import './jasmine.ts';
import 'zone.js';
import 'zone.js/testing';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/jasmine.js';

// import 'zone.js/dist/async-test';
// import 'zone.js/dist/fake-async-test';
// import 'zone.js/dist/long-stack-trace-zone';
// import 'zone.js/dist/proxy.js';
// import 'zone.js/dist/sync-test';

// import 'zone.js/dist/jasmine-patch';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import './app/shared/store/auth.actions.spec.ts';

declare global {
  interface Window {
    jasmineRef: any;
    jasmine: any;
  }
}

(function bootstrap() {
  if (window.jasmineRef) {
    location.reload();

    return;
  }

  // window.onload(new Event('anything'));
  window.jasmineRef = jasmine.getEnv();

  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
})();
