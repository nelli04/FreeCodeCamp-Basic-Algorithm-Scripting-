function factorialize(num) {
    let nums = 1;
    for (let i =2; i <= num; i++) {
      nums *= i;
    }
    return nums;
  }
  
  factorialize(5);