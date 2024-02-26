const IS = class IS {
  constructor(target, mode) {
    this.target = target;
    this.mode = mode != null ? mode : 'ascending'; // descending
  }
  random() {
    this.target = [];
    const num = Math.random(0, 10) * 10;
    for (let g = 0; g < num; ++ g)
      this.target.push(Math.random(0, 10) * 10);
  }
  boot() {
    let e = 1;
    while (e < this.target.length) {
      for (let g = e; g > 0; -- g) {
        if (this.target[g] >= this.target[g - 1]) break;
        const tmp = this.target[g - 1];
        this.target[g - 1] = this.target[g];
        this.target[g] = tmp;
      }
      e += 1;
    }
    if (mode === 'descending') {
      const tmp = [];
      while (this.target.length > 0) 
        tmp.push(this.target.pop());
      this.target = tmp;
    }
    return this.target;
  }
}

const is = new IS();
is.random();
console.log(is.target);
console.log(is.boot());