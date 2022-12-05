function bouncer(arr) {
    let bouncers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) bouncers.push(arr[i]);
    }
    return bouncers;
  }
  
  bouncer([7, "ate", "", false, 9]);