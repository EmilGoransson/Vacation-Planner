function resolvePromise(promiseToResolve, promiseState) {
  promiseState.promise = promiseToResolve;
  promiseState.data = null;
  promiseState.error = null;

  if (promiseToResolve === null) return "promise is null";

  function saveDataACB(result) {
    if (promiseState.promise !== promiseToResolve) return;
    /* TODO save result in promiseState, as before */
    promiseState.data = result;
  }

  function saveErrorACB(err) {
    /* TODO same check as above */
    if (promiseState.promise !== promiseToResolve) return;

    /* TODO save err in promiseState, as before */
    promiseState.error = err;
  }
  promiseToResolve.then(saveDataACB).catch(saveErrorACB);
}
export default resolvePromise;
