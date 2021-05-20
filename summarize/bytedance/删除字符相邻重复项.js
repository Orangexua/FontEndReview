var removeDuplicates = function(S) {
    let stack = [S[0]]
    for (let i = 1; i < S.length; i++) {
      if (S[i] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        stack.push(S[i])
      }
    }
    return stack.join('')
  };