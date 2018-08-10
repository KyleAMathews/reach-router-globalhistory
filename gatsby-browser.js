import { globalHistory } from "@reach/router/lib/history";

globalHistory.listen(() => {
  console.log(`history change`, globalHistory.location);
});
