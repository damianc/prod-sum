# prod-sum

Getting a sum and a product.

- `Math.sum(numbers, mapper?)`
- `Math.prod(numbers, mapper?)`

```
Math.sum([1,2,3,4])
// 10

Math.prod([1,2,3,4])
// 24
```

```
// sum of squares

Math.sum([1,2,3,4], x=>x**2)
// 30
```

```
function hypot(...args) {
  return Math.sqrt(
    Math.sum(args, x => x**2)
  );
}

hypot(1,2,3,4)
// 5.47722558

Math.hypot(1,2,3,4)
// 5.47722558
```
