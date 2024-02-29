const MS = class MS {
  constructor(target, mode) {
    this.target = target;
    this.mode = mode !== null ? mode : 'ascending'; // descending
  }
  random() {
    this.target = [];
    const num = Math.random(0, 10) * 10;
    for (let g = 0; g < num; ++ g)
      this.target.push(Math.random(0, 10) * 10);
  }
  merge (arr1, arr2) {
    const result = [];
    while(arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] > arr2[0]) {
        result.push(arr2.shift());
        continue;
      }
      result.push(arr1.shift());
    }
    while(arr1.length > 0) result.push(arr1.shift());
    while(arr2.length > 0) result.push(arr2.shift());
    return result;
  }
  split(arr) {
    if (arr.length < 2) return arr;
    const half = Math.ceil(arr.length / 2);
    const left = arr.slice(0, half);
    const right = arr.slice(half);
    return this.merge(this.split(left), this.split(right));
  }
  boot() {
    this.target = this.split(this.target);
    if (this.mode === 'descending') {
      let isEven = false;
      if (this.target.length % 2 === 0) isEven = true;
      let half = Math.floor(this.target.length / 2);
      if (isEven) half -= 1;

      let mm = null;
      for (let g = 0; g <= half; ++ g) {
        mm = this.target[g];
        this.target[g] = this.target[this.target.length - 1 - g];
        this.target[this.target.length - 1 - g] = mm;
      }
    }
    return this.target;
  }
}

const ms = new MS();
// ms.mode = 'descending';
ms.random();
console.log(ms.target);
console.log(ms.boot());