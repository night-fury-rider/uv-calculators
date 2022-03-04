const useDebouncing = (callback, delay) => {
  let timer;
  return function (...arg) {
    let context = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, arg);
    }, delay);
  };
};

export default useDebouncing;
