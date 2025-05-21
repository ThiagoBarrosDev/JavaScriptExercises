export function processRequests(requests: string[]): string[] {
  // ...existing code...
  const history: { [domain: string]: number[] } = {}; // domain -> timestamps of allowed requests
  const results: string[] = [];

  for (let i = 0; i < requests.length; i++) {
    const domain = requests[i];
    if (!history[domain]) {
      history[domain] = [];
    }
    // Remove timestamps older than i-29 seconds
    while (history[domain].length && history[domain][0] < i - 29) {
      history[domain].shift();
    }
    // Count allowed requests in the last 5 seconds
    const count5 = history[domain].filter((time) => time >= i - 4).length;
    const count30 = history[domain].length;

    if (count5 < 2 && count30 < 5) {
      history[domain].push(i);
      results.push("{status: 200, message: ok}");
    } else {
      results.push("{status:429, message: too many requests}");
    }
  }
  return results;
}

// Example usage:
const exampleRequests: string[] = [
  "www.xyz.com",
  "222.abc.com",
  "www.xyz.com",
  "www.pqr.com",
  "www.abc.com",
  "www.xyz.com",
  "www.xyz.com",
  "www.abc.com",
  "www.xyz.com",
];
console.log(processRequests(exampleRequests));

// Step-by-step instructions to run your code:
// 1. Install ts-node (npm install -g ts-node)
// 2. Navigate to the directory containing the file (e.g., cd /Users/thiagobarros)
// 3. Run the file using:
// ts-node teste.ts
