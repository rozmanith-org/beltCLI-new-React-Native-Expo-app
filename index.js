import { Option, program } from "commander";

program
  .name("suspenders")
  .description(
    "Perform project setup and redundant tasks without your pants falling down!"
  )
  .command(
    "react-native <subcommand> [options]",
    "Perform a React Native task",
    { executableFile: "react-native/react-native.js" }
  )
  .alias("rn")
  .alias("expo")
  .showHelpAfterError()
  .parse();
