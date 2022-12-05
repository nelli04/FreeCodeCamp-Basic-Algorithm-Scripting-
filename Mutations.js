function mutation(arr) {
    const arrs = arr[1].toLowerCase();
    const tests = arr[0].toLowerCase();
    for (let i = 0; i < arrs.length; i++) {
      if (tests.indexOf(arrs[i]) < 0) return false
    }
    return true;
  }
  
  mutation(["hello", "hey"]);