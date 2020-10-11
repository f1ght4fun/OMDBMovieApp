import { discardPeriodicTasks, flushMicrotasks, tick } from '@angular/core/testing';

export const fakeAsyncFinalizer = () => {
  tick();
  flushMicrotasks();
  discardPeriodicTasks();
};
