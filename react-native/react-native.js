import { program } from "commander";

console.log("React Native 🎉");

program
  .description('Perform React Native and Expo setup and redundant tasks without your pants falling down!')
  .command("eslint", "Configure ESLint", { executableFile: "eslint.js" })
  .command("prettier", "Configure Prettier", { executableFile: "prettier.js" });

program.parse();
