function fibonacciSequence(n) {
    const sequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  
    return sequence;
  }

  const n = 10;
  const fibonacciNumbers = fibonacciSequence(n);
  
  console.log(`Fibonacci sequence up to ${n} numbers:`, fibonacciNumbers);