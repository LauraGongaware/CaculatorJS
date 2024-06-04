#!/usr/bin/env node
/** Main entrypoint for calculator CLI. */

import {
  add,
  subtract,
  multiply,
  divide,
  square,
  cube,
  power,
  mod,
} from './src/arithmetic.js';
import prompts from 'prompts';

const OPERATORS = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  mod: mod,
  pow: power,
  square: square,
  cube: cube,
};

/** Run the calculator REPL. */
async function main() {
  while (true) {
    const userInput = await prompts({
      type: 'text',
      name: 'equation',
      message: 'Enter your equation (or "q" to quit)',
    });

    try {
      const tokens = userInput.equation.split(' ');

      if (tokens.includes('q')) {
        console.log('Exiting...');
        break;
      } else if (tokens.length < 2) {
        console.log('Invalid input. Please enter an equation or "q" to quit.');
        continue;
      }

      const [operator, ...rawNums] = tokens;

      const nums = [];
      for (const n of rawNums) {
        nums.push(Number(n));
      }
      // or:
      // const nums = rawNums.map(Number);

      if (nums.includes(NaN)) {
        console.log('One of your numbers is invalid. Try again.');
        continue;
      }

      const opFn = OPERATORS[operator];

      if (opFn === undefined) {
        console.log('Invalid operator. Try again.');
        continue;
      }

      const result = opFn(...nums);
      if (isNaN(result)) {
        console.log(
          "Syntax error. Check that you've entered your equation correctly and try again.",
        );
        continue;
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log('Restarting due to a fatal error...');
      continue;
    }
  }
}

// Call the main function
await main();
