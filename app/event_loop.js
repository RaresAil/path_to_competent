const pendingTimers = []; // e.g. setTimeout(...)
const pendingOSTasks = []; // e.g. server.listen(...)
const pendingOperations = []; // e.g. fs module

/**
 * file.run(); // index.js
 */

function shouldContinue() {
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

while (shouldContinue()) {
  /**
   * 1. checks the pendingTimers
   *
   * 2. checks for pending os tasks & pending operations
   *
   * 3. Pause, continue when:
   * - a new pendingOSTask is done
   * - a new pendingOperation is done
   * - a timer is about to complete
   *
   * 4. Look at any pendingTimers. Call any setImmediate
   *
   * 5. close any 'close' events.
   */
}

/**
setImmediate(() => {
  console.log('test', 3)
});

setTimeout(() => {
  console.log('test', 2)
}, 0)

console.log('test', 1)

-- The output will be:
  - 1
  - 2
  - 3
*/
