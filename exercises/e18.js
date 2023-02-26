import { data } from "../data/data";
import { maxBy } from "./e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const dCts = {};
  data.asteroids.forEach(a => dCts[a.discoveryYear] = (dCts[a.discoveryYear] || 0) + 1);
  return Number(maxBy(Object.entries(dCts), entry => entry[1])[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
