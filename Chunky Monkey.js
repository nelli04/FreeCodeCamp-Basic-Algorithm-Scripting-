function chunkArrayInGroups(arr, size) {
    const arrs = [];
    for (let i = 0; i < arr.length; i += size) {
      arrs.push(arr.slice(i, i + size));
    }
    return arrs;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);