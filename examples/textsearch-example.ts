// tslint:disable: no-console
/// <reference path="../src/@types/index.d.ts" />

import Places from "../dist/google";
import { performSearch } from "./utils";

try {
  const apiKey = process.env.PLACES_API_KEY;
  if (!apiKey) {
    throw new Error("Missing PLACES_API_KEY env variable");
  }

  Places.apiKey = apiKey;

  async function run() {
    try {

      const response: GooglePlaceTextSearchResponse = await performSearch('Text Search', Places.textsearch, {
        query: 'Sydney Austrailia'
      });

      console.log('Example Text Results', response.results[0]);

    } catch (error) {
      console.log("Error", error);
    }
  }

  run();
} catch (error) {
  if (error.message === "Missing PLACES_API_KEY env variable") {
    console.log(error.message);
    console.log("\tTo run the example:");
    console.log("\tPLACES_API_KEY=<your_key_here> node places-example.js");
  } else {
    console.log(error);
  }
}
