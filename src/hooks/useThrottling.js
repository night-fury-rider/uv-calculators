const useThrottling = (callback, limit) => {
  let isEnabled = true;

  return function () {
    let context = this;
    let arg = arguments;

    if (isEnabled) {
      isEnabled = false;
      setTimeout(() => {
        callback.apply(context, arg);
        isEnabled = true;
      }, limit);
    }
  };
};

export default useThrottling;
