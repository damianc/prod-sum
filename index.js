(function () {
  Math.sum = (
    args,
    mapper = x=>x
  ) => {
    return args.reduce((acc,curr) => {
      return acc + mapper(curr);
    }, 0);
  };
	
  Math.prod = (
    args,
    mapper = x=>x
  ) => {
    return args.reduce((acc,curr) => {
      return acc * mapper(curr);
    }, 1);
  };
})()
