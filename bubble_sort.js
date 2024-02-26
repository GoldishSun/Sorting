const BS = class BS {
  constructor(target) {
    this.target = [target];
    this.mode = 'ascending'; // descending
  }
  random() {
    this.target = [];
    const num = Math.random(0, 1000) * 1000;
    for (let g = 0; g < num; ++ g) {
      this.target.push(Math.random(0, 1000) * 1000);
    }
  }
  boot() {
    let e = this.target.length - 1;
    while (e > 0) {
      for (let g = 0; g < e; ++ g) {
        if (g + 1 > e) break;
        if (this.target[g] > this.target[g + 1]) {
          const tmp = this.target[g + 1];
          this.target[g + 1] = this.target[g];
          this.target[g] = tmp;
        }
      }
      e -= 1;
    }
    if (this.mode === 'descending') {
      const tmp = [];
      while(this.target.length > 0)
        tmp.push(this.target.pop());
      this.target = tmp;
    }
    return this.target;
  }
  init(target) {
    this.target = target
  }
}

const bs = new BS();
bs.random();
console.log(bs.boot());