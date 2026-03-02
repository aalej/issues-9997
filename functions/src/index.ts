// functions/index.ts
import { beforeUserSignedIn } from "firebase-functions/v2/identity";

export const beforeSignIn = beforeUserSignedIn(
  { region: "asia-northeast1" },
  (event) => {
    // any handler
    console.log("--- beforeUserSignedIn", event);
  },
);
