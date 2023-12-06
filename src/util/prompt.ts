import * as readline from "readline";

const interfaces = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const record = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    interfaces.question(question, (response: string) => {
      interfaces.close();
      resolve(response);
    });
  });
};

export { record };
