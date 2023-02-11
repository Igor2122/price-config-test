const throttle = (fn, delay = 300) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      fn.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, delay);
    }
  };
};

const dosmth = (name = "mike") => {
  console.log(name, ": ===:name");
};

const throttled = throttle(dosmth, 2000);

throttled('very')

setTimeout(() => throttled("first"), 1200);
setTimeout(() => throttled("john"), 1800);
setTimeout(() => throttled("reem"), 2000);
setTimeout(() => throttled("archie"), 2400);
setTimeout(() => throttled("barchi"), 4200);
