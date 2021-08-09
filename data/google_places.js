import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import colors from "colors";
import human from "humanparser";

dotenv.config({ path: "../.env" });

const API_KEY = process.env.GOOGLE_PLACES_API;

async function fetchPlaces() {
  try {
    let pageToken = "";
    let URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.507351,-0.127758&radius=1000&types=restaurant&key=${API_KEY}&pagetoken=`;
    let results = [];

    for (let i = 0; i < 5; i++) {
      const API_URL = URL + pageToken;
      const { data } = await axios.get(API_URL);
      if (data == null) {
        break;
      }
      results = [...results, ...data.results];
      if (data.next_page_token == null) {
        break;
      }
      pageToken = data.next_page_token;
    }

    return results;
  } catch (err) {
    console.error(err);
  }
}

async function writeToFile(results) {
  const FILE_DESTINATION = `places.js`;

  fs.writeFileSync(FILE_DESTINATION, `const places = [`);
  for (let i = 0; i < results.length; i++) {
    const place = results[i];
    const placeID = place.place_id;
    const width = place.photos[0].width;
    const ref = place.photos[0].photo_reference;
    const imageURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&photoreference=${ref}&key=${API_KEY}`;
    const placeURL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=formatted_address,website&key=${API_KEY}`;
    const { data } = await axios.get(placeURL);
    const formattedAddress = data.result.formatted_address;
    const {
      address,
      city,
      state: country,
    } = human.parseAddress(formattedAddress);
    const postCodeCity = city.split(" ");

    fs.appendFileSync(
      FILE_DESTINATION,
      `{
              name: "${place.name}",
              image: "${imageURL}",
              description: "${place.name
                .replace("\n", " ")
                .replace("-", "- ")
                .replace(/(<([^>]+)>)/gi, "")
                .replace(/([^a-z0-9 ._-]+)/gi, "")}",
              location: {
                address: "${address}",
                postalCode: "${postCodeCity[1]} ${postCodeCity[2]}",
                city: "${postCodeCity[0]}",
                country: "${country}"
              },
              keywords: [${place.types.map((type) => `'${type}'`)}],
              rating: ${place.rating},
              info: "${data.result.website}",
            },`
    );
  }
  fs.appendFileSync(FILE_DESTINATION, `]; export default places;`);
}

async function getPlaceData() {
  const results = await fetchPlaces();
  await writeToFile(results);
  console.log("Success".green);
}

getPlaceData();
