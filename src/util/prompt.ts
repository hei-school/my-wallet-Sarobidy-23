import * as readline from "readline";

const interfaces = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const record = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    interfaces.question(question, (response: string) => {
      resolve(response);
    });
  });
};

export const closeRecord = () => {
  interfaces.close();
};
