const SS = class SS {
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
  boot() {
    let e = 0;
    const tmp = {
      idx: null,
      value: null,
    };
    while (e < this.target.length) {
      tmp.idx = null;
      tmp.value = null;
      for (let g = e; g < this.target.length; ++ g) {
        if (tmp.value === null) {
          tmp.idx = g;
          tmp.value = this.target[g];
        }
        if (this.target[g] < tmp.value) {
          tmp.idx = g;
          tmp.value = this.target[g];
        }
      }
      const c = this.target[e];
      this.target[e] = tmp.value;
      this.target[tmp.idx] = c;
      e += 1;
    }

    if (this.mode === 'descending') {
      const tmp = [];
      while (this.target.length > 0) 
        tmp.push(this.target.pop());
      this.target = tmp;
    }

    return this.target
  }
}

const ss = new SS();
ss.random();
console.log(ss.target);
console.log(ss.boot());
