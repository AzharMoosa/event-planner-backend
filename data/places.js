const places = [
  {
    name: "The Clermont, Charing Cross",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1666&photoreference=Aap_uECdK0HqHHwcv1ziLqH8OHOHZbsYg6usJTNEPetrGtxH0OaatdS-A1_N0Q_JV0RYsH6tINBZPvABvtMedYQjsB8hon3kCdyrZEWAkya5HW1yDddMXi9QAfdjYVl1z2yGC81gz92hNTUmsLxEq7oG11xTQTLp7DQxLoSh4isaRQEQPahU&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Strand",
      postalCode: "WC2N 5HX",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.theclermont.co.uk/charing-cross?utm_source=google&utm_medium=organic&utm_campaign=gmb_website_click",
  },
  {
    name: "Premier Inn London Leicester Square hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4288&photoreference=Aap_uEAICAvU_jWQDFseus6fbbZejJtfatwVxMCWLZ22m7mdLiynnNHQjtDczgJE_1viQP29RUgSfzqVUdu_Kg85qcw2hlKPNVztxov2QsUfhz7_WYF7cwRloMpbFo05TIgJSNamijAWgieWjkU5Q3zydi1e1AwfmLCqWEPST3oBmsGw7wha&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Queens House, 1 Leicester Square",
      postalCode: "WC2H 7BP",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-leicester-square.html?cid=GLBC_LONLEI",
  },
  {
    name: "Covent Garden Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=8688&photoreference=Aap_uEALollbBME4AVhXfVcpD_fpALfgoAiwADsKWY865ry4FE48t147nin-4IYQeP1CLmrVOpuOG21mwWwOs43y7a3Q-DraJpEFJaO_1J7dqiqIovpVQheO59NAtUiKL_uZb994SE39w6sxgTYYENZmwW-CVcgVKg3NGOM10qB5ffsT4b88&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "10 Monmouth St",
      postalCode: "WC2H 9HB",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.firmdalehotels.com/",
  },
  {
    name: "Premier Inn London County Hall hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1500&photoreference=Aap_uEByDaMVCyFavCm0EIRawba7YHuDURnw8OwEubtAa1j5pLV1ucxO-IifRkCzYNJsEAKd7tSaliXxTSLk2pOlp1U6emJjshy4YUsebsFixmOeechEiSFWxFR5JWLrFil3yKvlT0EfEW5HVi0KTqZmQtyByIo1UW-lsHZHcS61rnRWjSNU&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "County Hall, Belvedere Rd",
      postalCode: "SE1 7PB",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.3,
    info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-county-hall.html?cid=GLBC_LONCOU",
  },
  {
    name: "Charlotte Street Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2001&photoreference=Aap_uEDA6xbqPLKeK2dl8bd-vOSGFsjL_tYdTlwDVKkVvSe5G6lYDQaqK7ZFiWHTrA9wN_gwRCf27-lCqtL3qyUj2uQUKJz7zF2o88cUsyXhqTVuQCjq76M8HdU9DDNHq5lFVqGMtHdZei33OW668fS8QvGafpO_jcErY2b1_cn9LrIBmn6o&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "15-17 Charlotte St",
      postalCode: "W1T 1RJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.firmdalehotels.com/hotels/london/charlotte-street-hotel",
  },
  {
    name: "The Athenaeum Hotel & Residences",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5000&photoreference=Aap_uECBxt7cPALxNPyxMWXTJl5qXMNWO-2BZBxScOshLw_88ENekCDmpcVxwzItnTbmKyrt3vLDZCJVbcWosyLtIRZil9Q2txFxjQmGy1UmtC2SAK53scl-bt0BALCkJCaDH7xYTk9s5ms-o2yAiYgeu_mpD4APp9VIrBC53U3lU5Go6qlV&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "116 Piccadilly",
      postalCode: "W1J 7BJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "spa",
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.athenaeumhotel.com/",
  },
  {
    name: "NYX Hotel London Holborn by Leonardo Hotels",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3877&photoreference=Aap_uEBm8Xcpd3ha854y_bVkWkNMnPGo87TTW7jxx0xInMow1RlpqY19rxwsmztxYGc1mOY8ZiVdpBtV_TdLvzB-2YbWbpo1c2InLhbtL-Flmc66bjOsEkX1C7Av6NLRaWBO99dBjxtwO3g9fNrT1VjElQpQlLh0hz3b7ewZ007BwJCoyVYE&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "50 - 60 Southampton Row",
      postalCode: "WC1B 4AR",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "https://www.jurysinns.com/hotels/london/nyx-london-holborn/?utm_source=google&utm_medium=local",
  },
  {
    name: "Hotel Novotel London Waterloo",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference=Aap_uEC7IYtcsCfb9AMN-sYawljdtfos0kHjsZxigEa2LLEDYGlpY5xxdz4yhw00iSIdXH5xVgC9GGHRgaz4Q3AT9rWmsU7CPv223fOIewrHn8V0z9nwcVqe5z2BhUxrSgIQA3-OxgdwAP46zC00iP36AeK6R11f5hz_tvxLgRsb7bBDXUPC&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "113 Lambeth Rd",
      postalCode: "SE1 7LS",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=1785&merchantid=seo-maps-GB-1785&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTMwMTE3MDItNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl",
  },
  {
    name: "London Hilton on Park Lane",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4102&photoreference=Aap_uECvsIj1_ZGGOkLNRGC_wt5JKxMiuQzD333gggxE4FgpKf-uPxxIJwl8Gzdlkb5YxVk3a9yBaVffvuqpbIhRf1FC7jpeXtINUBYsA3jItNV9ORZpHW5Uq39h_LMrmWcksj9tbioVpDwCo66toI4kJxM2NQTIe_krxrBxEWskYufFfmp7&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "22 Park Ln",
      postalCode: "W1K 1BE",
      city: "London",
      country: "UK",
    },
    keywords: [
      "spa",
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.hilton.com/en/hotels/lonhitw-london-hilton-on-park-lane/?WT.mc_id=zELWAKN0EMEA1HI2DMH3LocalSearch4DGGenericx6LONHITW",
  },
  {
    name: "Premier Inn London Blackfriars (Fleet Street) hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4288&photoreference=Aap_uEBgEo3Glg9V025eZMVOZcddGVcuJhmSnVThndq7vlXW4JTkLNbDTdpW1898i-fqNaIfkdR0rPimEbeRQUmTaHMVVSSHp2WM7q0Gwcbm4r6XZWPgCuBDx5x0RdR4cK8hsx3UjAuEwFfKYWTqbdHpPCfIrKnR31aqlKvhWYhxJfxDfP1q&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "1-2 Dorset Rise",
      postalCode: "EC4Y 8EN",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-blackfriars-fleet-street.html?cid=GLBC_LONBLA",
  },
  {
    name: "The Clermont, Victoria",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=12000&photoreference=Aap_uEBHpeYiEtDwWyWW_obVeXJfWB2hJyi4AtTaFBIxVrpMLXJVhHEuyD_1ZL9INcVWEVe2hNc3DkwgO0EDBC2UQPP_VHbo4sRozNFoOWfEDktcsTFy192_SfZXOFDvN7par7xAL3Ot-E5B6Wm-naYmR4LRaZub2u8Xz5MYmQ8Jvt6hKQKi&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "101 Buckingham Palace Rd",
      postalCode: "SW1W 0SJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "https://www.theclermont.co.uk/victoria",
  },
  {
    name: "Premier Inn London Waterloo (Westminster Bridge) hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5263&photoreference=Aap_uECtDQmNrYyY6F9ITlV7Ibc3owXlTP65xjPinEVoffwX580fVHRwlxFu1PnEhYSD0akDIuhABaFcrunK08HuNaAXHGoy1XDHmCg4dc6m4sNKPaboMwvtQOFrEJqaPmCyQ0uipPbgXeXE_TliLUIrABZyTpN2M6a-g34_xcZ9BDrwAxt8&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "85 York Rd",
      postalCode: "SE1 7NJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-waterloo-westminster-bridge.html?cid=GLBC_LONWAT",
  },
  {
    name: "Holiday Inn London - Bloomsbury, an IHG Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uECw_0czcPnzELYg8YOqsYXfBRTLoFBRTsuykTcOhO7XywFqymdeATE6AATZ9XDj611gB1jQsNJuumKZPQWniylJq-hkm6K0Wjw7dAJKS31op67ER7ZMoZXB_ssnthWENMrKfMPWSMynLMfxL3r7oipD3CwpAMbegW6NpMEf6C8BG8Ts&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Coram St",
      postalCode: "WC1N 1HT",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "https://www.ihg.com/holidayinn/hotels/gb/en/london/lonbl/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-GB-_-LONBL",
  },
  {
    name: "Premier Inn London Victoria hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=Aap_uEDDmG9bFZeFpKJNqPhMcbSpCmql2hdEFNtdN4qJUTjRULEtePAAvNg6JDax2sfaH9nNPTRzMHXxY8MLto0cNKJCndqhcM--Al7NE1dPmtSs3Gs74pKNjvwRg55TYw7KTQkxDjDNvFSdWt9z1MjNFhr7JcYKD6bF8rehAfMShG31gvhm&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Off 55, Eccleston Square, 55 Gillingham St, Pimlico",
      postalCode: "SW1V 1PS",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-victoria.html?cid=GLBC_LKEBAR",
  },
  {
    name: "St. James's Hotel and Club - Mayfair London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3991&photoreference=Aap_uEDuFg3JI8UYPzVDWDep8NkSElfhI7zwlci5VX69jsIhQ2Ell01klOnhRXtI4TQkuQTFxldGUz8HAikh1YRdCG7n8KI7OThBRlooLGXjNa7O2OsxZ6Taulzi4dTrk_g2vBgTloECW105_QDcnJ-Euzn4kf2epJRLZffCnoGguxD3lX6a&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "7-8 Park Pl, St. James's",
      postalCode: "SW1A 1LS",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.stjameshotelandclub.com/en/?utm_source=mybusiness&utm_medium=organic",
  },
  {
    name: "Hotel Sofitel London St James",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6000&photoreference=Aap_uECt_BpLyykzNPHaPPPZwDUmoHhyUVuQe1Br7n-XGAtvNSAqdt-ZGkSG1jcH5Tvnc3pwqvfu9gkwsBSLkTAvufMfFjWEBHSL08uuzulC1aP-Se0lOVtfBLoByr6oUVTsHILmPZx_LEiSjf7zFOWcwVRIbVF9X0hCbUqdtmCDEKyGE9pm&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "6 Waterloo Pl, St. James's",
      postalCode: "SW1Y 4AN",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=3144&merchantid=seo-maps-GB-3144&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTMwMTE3MjAtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl",
  },
  {
    name: "Dean Street Townhouse",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3000&photoreference=Aap_uEA3Q-dNjYUUHW4seb4KBOQY7KYxf6JbhDml8BAk8jqYZtccZl1R4DAvcKD_ATSGJfZiaerua_RNB9EHcneMQ4amc1s96P6GX8W_qZtFsvhQoiH1jLQpDBMktcgpvJUXZ-069oNBjMxXUcbpSIglS0btHibjfRmfNBafbin9UKzjsrWf&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "69-71 Dean St",
      postalCode: "W1D 3SE",
      city: "London",
      country: "UK",
    },
    keywords: ["restaurant", "food", "point_of_interest", "establishment"],
    rating: 4.4,
    info: "http://www.deanstreettownhouse.com/?utm_source=google&utm_medium=organic&utm_campaign=googlemybusiness",
  },
  {
    name: "Karma Sanctum Soho London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=692&photoreference=Aap_uEDq1rBDwSG3RUNlVHimPRhhKyq8ZNJ-4qf8BCqvt0kjpfdTHwYgGsUPv0p2AOOdCjZc2Jr5vyy8J1asKOr9jednMUvnAquHfq3SDLXxtf6rMWubvieqO-_ki6eOFX9GgHYPzsRhw61ygff_HrxwvH4Efi-tpLPpdA4zVhOksDfz6tg9&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "20 Warwick St",
      postalCode: "W1B 5NF",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "https://sanctumsoho.com/",
  },
  {
    name: "The Mad Hatter Hotel, Southwark",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1500&photoreference=Aap_uEBGK98v4aM59cPVTCfSMj3HPzVe5-tAxZYsJuxcebm8hxCs_75otuXrSIhqCWi6I8sF1XlZ0GabsYWS4Q_c-DJRXi7V1TpzRVeuhlfK5oLuGSyB-vWT5SASLW5AmOMCtycgYOdKKk28Onvv33m7IBZnJ-rYAk1-dDKypAi9l9b_7bds&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "3-7 Stamford St",
      postalCode: "SE1 9NY",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "https://www.madhatterhotel.co.uk/?utm_source=googlemybusiness&utm_medium=organic&utm_campaign=yext&utm_content=H002&y_source=1_MTIyMzcxMTgtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl",
  },
  {
    name: "Holiday Inn London - Regent's Park, an IHG Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=640&photoreference=Aap_uECtAl6EE-cSJjahIudSSUhmgIaUEaHzkgG7cCyEiKDOo1htyX1wD1k43uSImPDcy4s22S0Z3_kSHOA05bGMacgfFvUiQXACsHLHFoYtW0Q8uBCSv8FV8-bTx7AiYy-yk5Wy3Owuu0Dw4Td2x_CzzZ0cLIrjzoOjHTPoSQ5S57tGEq8_&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Carburton St",
      postalCode: "W1W 5EE",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "https://www.ihg.com/holidayinn/hotels/gb/en/london/lonrp/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-GB-_-LONRP",
  },
  {
    name: "All Star Lanes Holborn",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEBs67iHGNRPtxCLwYRHfm7zu0auMnfss6NmB0R8Nz93ZTPy_d4ACvdGAEZFfbUxHvMVOW9NBu9JdACnaqwxq2_7nADLSQb1uPAueSias_TSmG_D7ENiZpTpBAjv3RSCqACQiL-dJiYn1SMnhU5sF1gEPiCiUNjTblv2Y60zTFUhVZeX&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Victoria House, Bloomsbury Pl",
      postalCode: "WC1B 4DA",
      city: "London",
      country: "UK",
    },
    keywords: [
      "bowling_alley",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "http://www.allstarlanes.co.uk/",
  },
  {
    name: "Bloomsbury Lanes",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4272&photoreference=Aap_uECHqxIOWo1Hp57B_Wf4NICpBWw-ffyW5eC8jCUcgVBG89Kkc3mpNJalAfz-xLlIVGPKmxFQq4pHTv9JWfy2LDWxon5Rj3vDC-ytieSsekcVV6iurGTf27qjqICvN4oIPOa8uiVWJ8-2tw5R-XSi9gV_DnLHKzLNQnOKwACF5rnU3-4X&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Tavistock Hotel, Bedford Way",
      postalCode: "WC1H 9EU",
      city: "London",
      country: "UK",
    },
    keywords: [
      "bowling_alley",
      "night_club",
      "bar",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "https://bloomsburybowling.com/",
  },
  {
    name: "Namco Funscape",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=560&photoreference=Aap_uEARD__WQ1eyPTP8VXrKKjDHIhEf41Ao6jaTj8yBeN8tjSLPKwM2p_qRYtx32Hv740wvBaf0adfJX6prkuQYnMSI0kZPjTWzNSkqhYW_2vKzz82uFQTroLczct5DFySANSte5impmzDvuYAW-xKku3aH7YD0XC-WcQKpWVKHdaieml-U&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "County Hall Westminster Bridge Road, Riverside Buildings",
      postalCode: "SE1 7PB",
      city: "London",
      country: "UK",
    },
    keywords: [
      "bowling_alley",
      "night_club",
      "tourist_attraction",
      "cafe",
      "bar",
      "food",
      "point_of_interest",
      "store",
      "establishment",
    ],
    rating: 4.1,
    info: "http://namcofunscape.com/",
  },
  {
    name: "Kingpin Suite",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4928&photoreference=Aap_uEAmeM6Syooeq0bmcqv7bc8DknMnpIlQdNnVPV_igLPJ5Oy4szq2tXIsw4e3UBHrfaETOAswjnXICLq6poHZzej53xI3p6n3IJ0j-s_6-kANibz5OTABwLosLgi0eRnn_0OUCIHQSIvNFa-jf4cjZfnmlqktXMKqMFSQAOkXVxpy946u&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "55 Tavistock Square Tavistock, Hotel",
      postalCode: "WC1H 9EU",
      city: "London",
      country: "UK",
    },
    keywords: ["bowling_alley", "bar", "point_of_interest", "establishment"],
    rating: 4.2,
    info: "http://www.thekingpinsuite.co.uk/",
  },
  {
    name: "The Croc Bowling Alley",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3264&photoreference=Aap_uEDHqRJfAcTMZhuf1KGXNHrlC6bhvZAlF2dybKgsF_d1_5lTCHs37odPlfFSOsAJe3aatjXqczA6n0JwPwFgoFXeqSip_eDGoOGmtqxhr3v7LOAb5kkFWcE4N5IaMnwvnjvn5eo73KwUQsDh_Td02XaaNIS3uyS2aAGRGqvUi_hwHv6X&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "1 Ham Yard",
      postalCode: "W1D 7HY",
      city: "London",
      country: "UK",
    },
    keywords: ["bowling_alley", "point_of_interest", "establishment"],
    rating: 4.4,
    info: "https://www.firmdalehotels.com/hotels/london/ham-yard-hotel/the-croc-bowling-alley/",
  },
  {
    name: "The Clermont, Charing Cross",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1666&photoreference=Aap_uEBJiitFj8cYlPXAZwon5JeW4wQWyGqRX52s0y0quBoUhqvV01CBnauWmQbJAtgidX1-EVv51IIAgFWvSPsHNkHzfW3BnfxyqYFr573NeQDpaWv-8P5ojItrYjQR_cANczImcamWoXtBDeDiAX-yKuG_OCW9sx4URV-eZe062OXrKnRn&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Strand",
      postalCode: "WC2N 5HX",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.theclermont.co.uk/charing-cross?utm_source=google&utm_medium=organic&utm_campaign=gmb_website_click",
  },
  {
    name: "One Aldwych Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=707&photoreference=Aap_uEDXJbQGPKXsEFJt_eRr9rNqD-akd4IyNF6rwOh0gwmO0a8R3b4Tnpw4WKOVwHHel731EdyaIdg6zFZ2WGgGhLllqHPR0BX2GAf1Nie4SHGVUoYYOJ7G6N5lKQmo1WoTj87CUnFFw1yNPQHO_L66wlH12p0K6tze7i5aDayyrlg1iOgW&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "1 Aldwych",
      postalCode: "WC2B 4BZ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "cafe",
      "spa",
      "lodging",
      "bar",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://www.onealdwych.com/?utm_source=mybusiness&utm_medium=organic",
  },
  {
    name: "Courthouse Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=990&photoreference=Aap_uEAd-q7oPadtxzxL0Z4PXdMbvrwMUgYnFTIELEl1LQiIzOX4-mhwJFf6b40nN4fTdPlbTtsRI-gqgI_kLGkiZXJgtUTv-SfNL5DNzim4RV1n4d_r4pw0FBP1iT8l49VNbvw-yM6MDr7nASKdcigPzBDg5qMHfWULSkd3l4lFYKtDeUK4&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "19 - 21 Great Marlborough St",
      postalCode: "W1F 7HL",
      city: "London",
      country: "UK",
    },
    keywords: ["spa", "lodging", "bar", "point_of_interest", "establishment"],
    rating: 3.8,
    info: "http://www.courthouse-hotel.com/",
  },
  {
    name: "Charlotte Street Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2001&photoreference=Aap_uECcMu4T_1v5L8OSoCwdk10nDjlYYbpcozulz16q9vpwMkv_-r_licW17RK90BZA1fgF0_WLZZ8aCJaMlqpSX1cDtquaOE60fF_Yseq9NgNjSEq5mA11WabMdkZiA7fhFrfD1nBgixql1wdHyZ1vNyISE18_yJygQhZ_7JzLeg4QjAI4&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "15-17 Charlotte St",
      postalCode: "W1T 1RJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.firmdalehotels.com/hotels/london/charlotte-street-hotel",
  },
  {
    name: "The Athenaeum Hotel & Residences",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5000&photoreference=Aap_uEB9FwN9rAltq8CBTuR6ntLkZhyGWVAiSHB0hM-dswPyNi9yju6t0hVcvlG7HPP_noPC5iaKqWG8tkmp_caEUsCAd_WUAZW_JFvXNl8wRA0JExjV2f-Lqxfqg2z83Z_5Legvn17ZAQNaJZ7g33fp8f1gLi6hl5-pGnhq7qMj2JZDjjlV&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "116 Piccadilly",
      postalCode: "W1J 7BJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "spa",
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.athenaeumhotel.com/",
  },
  {
    name: "NYX Hotel London Holborn by Leonardo Hotels",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3877&photoreference=Aap_uEAQ6dmobTk0AsfPTAKTeqX0OnyBUCoXHVXjBAcPS7rUIiABY4UgmAMVRRR2PM0I8fnaY2nHMPK6RT3BnqrsWWulGXTSpEdJ1gd-7WWFD04ieMvcQMYPDutkT_9b_Hip99E8QS05EjoA0SB3Ek8-LFhtffZymCbnTItJOIX8M6Nv5Qeh&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "50 - 60 Southampton Row",
      postalCode: "WC1B 4AR",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "https://www.jurysinns.com/hotels/london/nyx-london-holborn/?utm_source=google&utm_medium=local",
  },
  {
    name: "The Clermont, Victoria",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=12000&photoreference=Aap_uEDkNUNRG5b46vFhXuaEDCDEyL5Vdi1O7nIGfntH_nzeFgD0uGlbMZlFkpzJMrjGmWp19Db6n96bYKBF9-SWbf7KZVheEbvSu-N8SAh5NkdhHkKw7ht3QoD-nrgzdcNJL2Mj2u12JZTwfdSNTH9Y0l986WJ9W8Zg3JlzsifwtphrFUO0&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "101 Buckingham Palace Rd",
      postalCode: "SW1W 0SJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "https://www.theclermont.co.uk/victoria",
  },
  {
    name: "Berkshire Lounge Bar",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2050&photoreference=Aap_uEDzpDZf7fZ-lvIYf9CrJyDvhGI6WwIoy4Ixi-K9sGlV8J_nCZvpyFDucmI5fYrEBAxSZFuCnidRjCRtqJ7MBMrCgWTZr0i0w5NKjgSqO-ytCAlOxZDTbBZFK84ji4YSJuiG4ll4DOhpRO0cnwdDw-6RrKara3Zu8IK6b9Fpe22oJ5g-&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "350 Oxford St",
      postalCode: "W1C 1BY",
      city: "London",
      country: "UK",
    },
    keywords: ["bar", "point_of_interest", "establishment"],
    rating: 4,
    info: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-edwardian-london-berkshire/restaurant-bar/berkshire-lounge?cid=a:se+b:gmb+c:emea+i:local+e:ehl+d:ujieres+t:fnb+h:GBBERKSH",
  },
  {
    name: "Holiday Inn London - Bloomsbury, an IHG Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uECxFiHkkuR4xlBgDzLZWmuhml2RTrVu0AfF4gvMJOaQf3fwjJruQwboiAz-L-93TyeAXhE8HSADLUGV6ZwB5c0optiZzxa85rwsfZBdeONsHOcs82sXnf9nSor-ObmscmLU9r-cnRlCi-IM2rvYWq6H4slebKQonb87ksnQs2P4ap74&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Coram St",
      postalCode: "WC1N 1HT",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "https://www.ihg.com/holidayinn/hotels/gb/en/london/lonbl/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-GB-_-LONBL",
  },
  {
    name: "Karma Sanctum Soho London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=692&photoreference=Aap_uEDzDtz6MUEgW7CoKvRzxptHcWQNGj_3avpOTl1RpRQxuAFr1HSUACmecm8qQweryLtCrbdJAxBkkXCYnPYZY0YKlkTbCxW7QLaUfLrWRWHl0qbNzoMFmDLHnjGrklQwQPab2NKRItqOVVoWA_uFeCTSfdicONxSlnvMxovniwjxA-w6&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "20 Warwick St",
      postalCode: "W1B 5NF",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "https://sanctumsoho.com/",
  },
  {
    name: "The Mad Hatter Hotel, Southwark",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1500&photoreference=Aap_uEBgTE9bbdZC8cVCss4ZWjPTI_IWOLV6PHwyEVgQjkZ0qWELMsP0n52ErEMI0EP5sN9RyQCjfPUbz4ZTxUn8ksLHZ5eCCo2WquBHeuV1qRgoaqrhghV5Lzblat9TpTcx6AOCHvj6T5zajEiLLSBS0NYiFb7kVnVPcsmhYZwrzKNyUBSv&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "3-7 Stamford St",
      postalCode: "SE1 9NY",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "https://www.madhatterhotel.co.uk/?utm_source=googlemybusiness&utm_medium=organic&utm_campaign=yext&utm_content=H002&y_source=1_MTIyMzcxMTgtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl",
  },
  {
    name: "Grange White Hall Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5616&photoreference=Aap_uEA2tEKZdW5NQ_pxa9wWs1BVfuFG3wXp86UFXms-uu5WBDCDyD9dKU0q4kG-3lL6-doe7VZJn6fO6I7DYOZm-49UB18rslAdCvLmp9c5YurcwNBDHrZjzvO0FnXPlCL_o0HaRTKRjE8g2NiEi5SxnwXF1ZTV_KVr75hOgjX6F9ysAp2e&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "2-5 Montague St",
      postalCode: "WC1B 5BU",
      city: "London",
      country: "UK",
    },
    keywords: ["lodging", "bar", "point_of_interest", "establishment"],
    rating: 3.7,
    info: "http://www.grangehotels.com/hotels-london/grange-white-hall/about-this-hotel/",
  },
  {
    name: "Holiday Inn London - Regent's Park, an IHG Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=640&photoreference=Aap_uECv-crPBxEFAGW4BQenyi7kLnSNP2Vczi6jl9pMpckhzjdJjXOMdhV6aMoS1vz0G86s6Dbb_T5gf-WJtFSj_7QSfk65gBTYgFkJNHCSFDmRr2Gc11S_ADt4lTFmpqAHFq-Kmy1ZonN-32T2h_yJKasT6LfgWrW2MM3RZWNtO6iYWXJl&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Carburton St",
      postalCode: "W1W 5EE",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "https://www.ihg.com/holidayinn/hotels/gb/en/london/lonrp/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-GB-_-LONRP",
  },
  {
    name: "The Wellington Hotel, Waterloo",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1920&photoreference=Aap_uED-azwL-yyMHD5ZdNS3Cit5MLhgkTcgA05rYmUsuYBK2rBLt6Ue6if_PovGOfO04AZgbSDlAvCy2aAYP2k5DwN1q_6tKv6z4h-rk_cNWLphRJ14XhW0ROslMfVOsyj2UjQlSaTb0TCnOIiO_x-cAWh3m7hIoQxKDu7uLbQkPnKSBHQE&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "81-83 Waterloo Rd",
      postalCode: "SE1 8UD",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 3.9,
    info: "https://www.wellingtonhotelwaterloo.co.uk/?utm_source=googlemybusiness&utm_medium=organic&utm_campaign=yext&utm_content=P159&y_source=1_MTIyMzcwOTEtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl",
  },
  {
    name: "The Z Hotel Victoria",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4288&photoreference=Aap_uEAgBl-gr8ea9-o8kjg7GnScFLr2eZakVk2ht8JTGDR7SMLeEg0HOAQcsRii07U_GRoLmKGpFYNooPB6RvyS-nR66cmR8cwTk_9fiEPSWBo_rI6P80q9OQNJvu1yC5vlrZhoQj6af6V9tpMXiGfb94xsu3FQiov-pPE0xAVitEckjZEr&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "5 Lower Belgrave St",
      postalCode: "SW1W 0NR",
      city: "London",
      country: "UK",
    },
    keywords: ["lodging", "bar", "point_of_interest", "establishment"],
    rating: 4.1,
    info: "https://www.thezhotels.com/hotels/victoria",
  },
  {
    name: "The Grand at Trafalgar Square",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1698&photoreference=Aap_uEA1BzCCnMJTl-7O8k8_CnFAQgGbklSOVgZcecmeSL15y5PGjB5pNUI2_caYz1WQahHLpCnMoRTVZ2O55En3pP1tflvrrHXUKAmr2Hqbl3VtoNTncD3boiz0U2FuH-5BL8t2_dkBQHcRI-kDcKV9Ahvb5750i-2oDwbXv2gxkRFx9KOF&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "8 Northumberland Ave",
      postalCode: "WC2N 5BY",
      city: "London",
      country: "UK",
    },
    keywords: ["lodging", "bar", "point_of_interest", "establishment"],
    rating: 4.2,
    info: "http://www.thegrandattrafalgarsquare.com/",
  },
  {
    name: "The Rubens at the Palace",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=Aap_uEBAIf7Q5anGC_a9EViUGh2i7PhAgSTRl5fm-W-aKeo7vZTDND3_9jLwctEyKuEQK-XapcMsk57VdENMp0toIswpv96IXzOY-tSyegPxooZfKAAWhx3llC4aAGJOTBXw8qGgO6hmGnkUPLSbdrmOtbAi_6Ii3UllCXlIVVmfrUHhbV-G&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "39 Buckingham Palace Rd",
      postalCode: "SW1W 0PS",
      city: "London",
      country: "UK",
    },
    keywords: [
      "cafe",
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.rubenshotel.com/?utm_source=google&utm_medium=local&utm_campaign=hotel",
  },
  {
    name: "The Steam Engine, Waterloo (PUBLOVE)",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEAdCr5unNI2932ocpzmOlkc3YS_lgONj01mBhgHhukkdhrbXe6Kxow_8cUVXftOMXY0J1t661nan1VI0GjvJS-0qTo_XFp86xxDoNBoEXhQ17Kbv-XCpQX3T-Crb1Ex8ZHREdXK9TDwQbyRIKOjxvCP510VRPwrlwS4bM4j06RCW7wE&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "41- 42 Cosser St",
      postalCode: "SE1 7BU",
      city: "London",
      country: "UK",
    },
    keywords: ["lodging", "bar", "point_of_interest", "establishment"],
    rating: 4.1,
    info: "http://www.publove.co.uk/",
  },
  {
    name: "Park Plaza London Riverbank",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1136&photoreference=Aap_uEDBeHLFhK3Nxp06nZijkArrNSiD_eAajPj0BbMayED-RnpeAgX-0tT_OV-_R92Lz5ljqHPnBNCPpmkUcAasPc2-r18iMwdc1-7Rx8VB0Vjh3GgVUX0wWHiwIIxooSrvwDs1_k0FB01of5H1rpGYwc8_5YhTuAfgj5VZlY6n7BmJmA0J&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "18 Albert Embankment",
      postalCode: "SE1 7TJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "lodging",
      "bar",
      "restaurant",
      "food",
      "gym",
      "health",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.3,
    info: "https://www.radissonhotels.com/en-us/hotels/park-plaza-london-riverbank?cid=b:gmb+c:emea+e:pph+d:cese+f:en-US+h:PPRL",
  },
  {
    name: "Langham Court Hotel - Gem Hotels",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=828&photoreference=Aap_uECqRM5jdwnl7moprWUg6Dr89ZGD0_jTsTruDzdaMG7u_3ly0paEmu78zdWtEQ4jn4nE6AxcNuFEVEswL1t22ktXyLaAkJMKK0dN2aZJ-yjajgpmwrOknpTM0bnUEux_p0DOA0PtK5o_D0PtMwm0jy2cwE5pgt1V_hvklbZ25v1jjvD7&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "31-35 Langham St",
      postalCode: "W1W 6BU",
      city: "London",
      country: "UK",
    },
    keywords: [
      "lodging",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 3.7,
    info: "https://www.gemhotels.com/hotels-london/langham-court-hotel",
  },
  {
    name: "Howard Griffin Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1198&photoreference=Aap_uEA6brp0rlixp966sRmIihOdTXPWH7_CWqlgmMq2rVBPa6rvjBohoVhxGjSqy8eqAN7d45Nk5mbmMSOTbCCtBKpRdevY58fAQsfU1Q37siLj2ywHR8-kTsvMlpGb0GaVW0daX2BmgE2MGByfJ519yRSS_8x_Yw6_71G1war-GmYumGg4&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Mayfair",
      postalCode: "W1K 3QD",
      city: "London",
      country: "UK",
    },
    keywords: ["art_gallery", "point_of_interest", "establishment"],
    rating: 4.8,
    info: "http://howardgriffingallery.com/",
  },
  {
    name: "The National Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uECVBUDs9Izca6h5ZvYl9NqAyruwJ0p1s2qkjkhlxIe9yQieyg0OdYLUbWKCZSJp2z2_c8jKvqMGYszddGwFtxoJQdvmbUZFg_73gm-ZeueUwdc1M6XTtHfAxf4-OvqmyEdmT0DtPTQSDTPycgp_H1bV9PTg6BT1QgfJPNjovjQ1g5mW&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Trafalgar Square",
      postalCode: "WC2N 5DN",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.7,
    info: "https://www.nationalgallery.org.uk/",
  },
  {
    name: "Institute of Contemporary Arts",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4640&photoreference=Aap_uEAmlRQCJeyeY3WLWg-kGlRWqLvTciBJS2cvIV--SOrlawVOrPq_8h70d-SuoEwRH4TUEgwUPCFnSsGfwsWaL8xJd6oLF-fbHJCoqfTMtj-nVCXwNB5aZou3jjWoKOS3cGvRQImeCbrMv7eTMntnnb6vpENTbRcYVx4rg597WA3fKp0W&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "The Mall, St. James's",
      postalCode: "SW1Y 5AH",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "movie_theater",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.ica.art/",
  },
  {
    name: "The Photographers' Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3000&photoreference=Aap_uEBlU_qL2wncifkzS25JRT8KPbT2_-LWWQRianKW4oFFdl4drcXfOWLhVg-Xsr-GtSz-o9wI1y5IuD7YAh0P-JTZ0DJKK4yL-xh02EdY9zsA6sc23FR5HGyT3yImcG9nHxQq9EHiHgdNP_bfTrnMQBM55yDc_Oh3-iGSkYF564SRFiVH&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "16-18 Ramillies St",
      postalCode: "W1F 7LW",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "http://www.tpg.org.uk/",
  },
  {
    name: "National Portrait Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEAz5A1IHvP5nQ_EqOaavDhAvTKhAEetqrxBZzNSCmyUnaGVhFv-BqrbwVZPoODGMjuLrOLR2H-Eo9Ma7LeHhnfL9r0fG1ZBZGs_9zCqlGnUqrOtEc3oj-O1KtRWWvpmh8oPOV0N0fN_TA3ZPHq38gnzdEWuQ3u8vjV1e8Lg_Fr3hMk2&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "St. Martin's Pl",
      postalCode: "WC2H 0HE",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://www.npg.org.uk/",
  },
  {
    name: "Hayward Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=Aap_uECH1fJfHtI_i-K7vAGF_-mUjMHEhNkYpnpYS5vm06jdRcNRnDl1vBIWUamMKzb7vxUhN5y6nl5XnSKsAkXB39Cuhp3B4EvP_D1kQ4FrjaP4Cf_j5u7JQj8NWlXAwSEjCFzeEaH4WncapFU2fIR9sdF55qOVG8zepfPDowKO_xOO_IU&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Hayward Gallery, Southbank Centre, Belvedere Rd",
      postalCode: "SE1 8XX",
      city: "London",
      country: "UK",
    },
    keywords: ["art_gallery", "point_of_interest", "establishment"],
    rating: 4.6,
    info: "http://www.southbankcentre.co.uk/venues/hayward-gallery",
  },
  {
    name: "Royal Academy of Arts",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference=Aap_uEBqtsoLJDZTy6vx7n6hREm_pZYjvYuAZgQ28cXPXlpx9dMf09pXRHtxEFz82nJLn1D_zwZKgsFb5v0hhOJnDjTcSc8cZtldcO_W-HK_VbCSJgaRZPnKYhPnIunc5DbaLs0POouD4rWDGBJWL_RWnZHMxWcWMoxE63TdIKTJx8CqOFfu&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Burlington House, Piccadilly",
      postalCode: "W1J 0BD",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.royalacademy.org.uk/",
  },
  {
    name: "Tate Britain",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=12000&photoreference=Aap_uEBj2432qNIPXuUHABxST74i8uxVEDyeG3mWohuV76es-wFch9IC8fXRIhITZy6EzeG9ZK9-i7Q2tm81f6L7LxNGn8Kn9leMVGalUCRZQiNz8DifrL-FhCJ0MQZagzwnl5kg3Y1k2X1-_mRPhcRJw9mLkzNvLfCXVPcNpbkAGUBUkZ1B&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Millbank",
      postalCode: "SW1P 4RG",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://www.tate.org.uk/visit/tate-britain",
  },
  {
    name: "Tate Modern",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1960&photoreference=Aap_uECsgRtU2kIBEPsoJrGG6qs8cN8SSUnJ13xyu97CINORquwZXh3rdr2A3VJHKc1WSjVIpO4aBzfAZgmDbD3Vxydas4Pf-TG_M_fWGFCsrlw5-bB6vXDsQYbfljUTO7_jPjPC1IFG_0_Bwh3JcZErjK39RtjI8KwPny-2AXsA3lED09bK&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Bankside",
      postalCode: "SE1 9TG",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "point_of_interest",
      "store",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.tate.org.uk/visit/tate-modern",
  },
  {
    name: "Maison Bertaux",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=750&photoreference=Aap_uEAS8JqlvpJSUExuYx75iI_oH2qIoLH5IwAEvvIPSP-5127vxl47oOx3-GW7MnhkPY4w-FizJ_I4hG7dXveIw_RcnTBxnL1oPuPAcBEBKyjJeI_oFAxSJ1tkYdiFWz8-ziSTbDL4uyvK8DkQddT5TvQKawPQzYwJS0BFuQmOBuYoYKxd&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "28 Greek St",
      postalCode: "W1D 5DQ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "bakery",
      "cafe",
      "food",
      "point_of_interest",
      "store",
      "establishment",
    ],
    rating: 4.4,
    info: "http://www.maisonbertaux.com/",
  },
  {
    name: "The Poetry Café..",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uECvR1f947YqqG0UFbEhdeZafCLmaAv6CGG1Bm0pxuZW6Qbij3A3yc0pqndBt45iNALMBwDaulYV5Cf-Aj9DgRHtDUPhh4EMnzgI2GCFjrdKV35bUdf9r0D_-vyOYKN8Li2ne5HWioRg-aZe2MyAX0KjTnUXPC5kZxEXsIeKtXy9H3af&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "22 Betterton St",
      postalCode: "WC2H 9BX",
      city: "London",
      country: "UK",
    },
    keywords: [
      "cafe",
      "art_gallery",
      "food",
      "point_of_interest",
      "store",
      "establishment",
    ],
    rating: 4.5,
    info: "http://www.poetrysociety.org.uk/poetry-cafe/",
  },
  {
    name: "IMAGE",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1536&photoreference=Aap_uEBwQ_r6IrwK-4CLYE0zbOthSWJ-4Y5m4Y3y6WZR6Eu8p45UTEvRwJhkk6-yci34F5rIg164K5I6BUnMNftbQKodhe7fi66XAr3EfwvKUavZ9xqqz_eiqapzf04-TRxDprYoFCJINLRpmR74AtEC36d-X_6MpR19CUAXZD56VkxzlA84&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "24-25 Foley St",
      postalCode: "W1W 6DS",
      city: "London",
      country: "UK",
    },
    keywords: ["art_gallery", "point_of_interest", "establishment"],
    rating: 5,
    info: "http://www.imageblackandwhite.com/",
  },
  {
    name: "Frith Street Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3264&photoreference=Aap_uEDFjmAgrPEtNQ46c-z5axgMHn5yfd6xBvJjyRNY6NAE58hYHB8tNvmBaOr4nQejWj7p0b6cvPoZ8tvbgV-nxlU31tDAdeX6ryjD7L57PXMjmRgHIEPqABv7AM-0Z0tRqyi46xqhbT0qtfsH1Hxa2Sq1FkPVHLUT0jAZ8kIWUqW8L9lB&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "17-18 Golden Square",
      postalCode: "W1F 9JJ",
      city: "London",
      country: "UK",
    },
    keywords: ["art_gallery", "point_of_interest", "establishment"],
    rating: 4.2,
    info: "http://www.frithstreetgallery.com/",
  },
  {
    name: "The Horse Hospital",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1556&photoreference=Aap_uEBjsv8DSYE9ZYsbhjsby-9-7gAEVTigjhyAUCStV59p4pM9BG4JzfCPgZG-HaI9Nd_ZqrQP9uPuVaIV3-UnPYaiSSslqaQyWjKWSOW6aO-PJDz7XOp-78yFo7cY6ZQXraKdfeDke0J6nzTh-p765Zfpe7kIQomi8lHIeihN_6qtB_Ks&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Colonnade",
      postalCode: "WC1N 1JD",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "movie_theater",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "http://www.thehorsehospital.com/",
  },
  {
    name: "Halcyon Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1599&photoreference=Aap_uEBDHcQnpP2kyK-LDtVTrEMdBQjvRYlSnhIkDt3iRN73avCRVlZ13E_RvHugiwFCjUeskKhJXQ_5tHzR1K_FWjWeQw-iSbPPwhcGdKhSdcz6ny2Usip79qrtirhEU18ojBHtuSWn_bAJ2TMCpqkwbtWM4nADYSOahmrNWnJgcORwF9Xi&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "144-146 New Bond St",
      postalCode: "W1S 2PF",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.7,
    info: "http://www.halcyongallery.com/",
  },
  {
    name: "Daniel Crouch Rare Books",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1914&photoreference=Aap_uEDp44MvAtXN1oEHELcE8fHs3RVJkaM_6L_R5hdU8eLKd2nVozhZ9jYNmq_vkVlKbHpiuc__HQObHhkj3_ynqogoIsH-ZAd55d1T1Krc0ZYutzlwrqVsuv6Q4883A3M0-C68530rLEvYAYt76DV0lVKvhJy9UEdHQcHr8X1Ln7TwPJgY&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "4 Bury St, St. James's",
      postalCode: "SW1Y 6AB",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "book_store",
      "home_goods_store",
      "point_of_interest",
      "store",
      "establishment",
    ],
    rating: 5,
    info: "http://www.crouchrarebooks.com/",
  },
  {
    name: "The Queen's Gallery, Buckingham Palace",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=7726&photoreference=Aap_uEBrCZpdEJ80hGKExlaEuEWCDWn13GFiR5clbhqfIS5EemQrsxV8VrWNRMPTclYErx9ibM7f_n4fyHvTLNSB8phsqFm63tFg_ybg0qoalbAHEO9K9F2JfEPYtXuLJK-R2J2Bs56u55oqZ6cX3CRcfRh0qZ7684e_CRRTqsUuRfOwMeGq&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Buckingham Palace",
      postalCode: "SW1A 1AA",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.rct.uk/visit/the-queens-gallery-buckingham-palace",
  },
  {
    name: "Two Temple Place",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uECaqtZZGIlNGWBuIswjRnslrWX3G7aQSkY5-b0q-UkN0QULWjn9BRt3qB9D7Az1nyHrXECQpsqYPeceyKpOTbHzBMB7AOOT5FY7eiAHc-6_w-zMZ6arEEiIqzRYBhSi9D0gC6KYRlCKK4Q7xJXVo__g1cr5lbvx4sqZMVxExNodNepM&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "2 Temple Pl, Temple",
      postalCode: "WC2R 3BD",
      city: "London",
      country: "UK",
    },
    keywords: [
      "art_gallery",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://twotempleplace.org/",
  },
  {
    name: "Brunei Gallery SOAS",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uECEOMYxXqsI6StTBseeH0on3W8oWmx19fT0FeQK67PRmEBOXeRTe0R96ZK1DQZk2BdBLmEngqVFdJ-ytn5RMv2vi9NkoS8aXNUD0AbL7TyD2Vp0_Zj1gzpRBPMQmBE6orRip1D2zvjv0H0XigrkLenBANMGxplHDXKbbF3oAGGLjdZI&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "SOAS, University of London Thornhaugh Street, Russell Square",
      postalCode: "WC1H 0XG",
      city: "London",
      country: "UK",
    },
    keywords: ["art_gallery", "museum", "point_of_interest", "establishment"],
    rating: 4.4,
    info: "https://www.soas.ac.uk/gallery/",
  },
  {
    name: "John Martin Gallery",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5008&photoreference=Aap_uED1H9V9HgS692-rcmTksP0HitNS9bFqHtGgtg3ZadVzaLFLo4sZtSowtORF7CbhJt8penZ0wUe-zvvk58clCtO6q7H5MBXacRj1QEmmzKOcrMsqemBaTq7PZBklTVDnteu7JovXvmSpAmysk0M55WZMdA3inGagaGmRw0nM8nRtNzGk&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "First Floor, 38 Albemarle St",
      postalCode: "W1S 4JG",
      city: "London",
      country: "UK",
    },
    keywords: ["art_gallery", "point_of_interest", "establishment"],
    rating: 4.8,
    info: "http://www.jmlondon.com/",
  },
  {
    name: "EXTREME",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=Aap_uECjd0AEFbVChUe4BH5LYLbb4666nA616QPqPWRCj27YfaG959unC5oX9Kw8nwanUBE0pDwA6YeDP0rD94kpXotHG-9gDmnPKi9bXjVRr3AKKRVbTrKNuCHGn6Bl9BY85QpUCfFO6gaR0FWwsvuKOrgU0qDNw2d1PNtKU8v6xc36AiL2&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "30 Stamford St",
      postalCode: "SE1 9LS",
      city: "London",
      country: "UK",
    },
    keywords: [
      "amusement_park",
      "general_contractor",
      "point_of_interest",
      "establishment",
    ],
    rating: 5,
    info: "http://www.extremesportscompany.com/",
  },
  {
    name: "Park Plaza London Riverbank",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1136&photoreference=Aap_uECA61jn3l5F10qNIRy6Xb0CCPEqIkC7Lg-LH9A1DMjZMy4IjHn7mCAjCJP-faLgrp8647H3EoqgKQwhIX6ts9nKR9ylmBkFmXYm5TsyT9tOdu7N2ndT09mYN7UwumZVILDh36YvGQK1OQ3i3aIc1xZ0mWbDTWIwcEJT9bzp87iGQ9II&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "18 Albert Embankment",
      postalCode: "SE1 7TJ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "lodging",
      "bar",
      "restaurant",
      "food",
      "gym",
      "health",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.3,
    info: "https://www.radissonhotels.com/en-us/hotels/park-plaza-london-riverbank?cid=b:gmb+c:emea+e:pph+d:cese+f:en-US+h:PPRL",
  },
  {
    name: "Heaven",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEBMjS_gfxdYG5vAaNlu2l_og4wGL6VC4DUyGoXBRTc_WxCEJ8vu4w693E8bIF5anlTRVGGvxFENpuu-S7vIsi1GXuW-dsLJPFpPmptb1KispRfj34nJmzQ4t1FgCX_1zG1hRL1Xg39h4du0NoxOrjsVmXXltFnLiQkR19I0Y7FPFWMD&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "9, The Arches, Villiers St",
      postalCode: "WC2N 6NG",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "point_of_interest", "establishment"],
    rating: 3.6,
    info: "http://heavennightclub-london.com/",
  },
  {
    name: "Tattershall Castle",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5467&photoreference=Aap_uEDRVhls4QlFWhiLzy3N8JonB-V85FEA6lZISmF9IvFDeUffKe4JkscR4KZO-2dbBbgzltM9daMXwZv_ZU3VUMMCtAm95ZyTsM4pdsdY1QwalWl8GRVFt90owtnYCuNGFB5ZodG-nkQgahv2Mwegaqd-f7cyvvjs9Cu-UxGpXJXJDCl2&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Victoria Embankment",
      postalCode: "SW1A 2HR",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "https://www.thetattershallcastle.co.uk/home?utm_source=google&utm_medium=local_seo_gmb&utm_content=website",
  },
  {
    name: "Long Bar",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uEAzfyrUQ0YEmO9vruypXkWinnca4ltyyw7IYvF0Sy8azxbwId-fhpoCmMZUuaMLNNIl0AIiF4x7zeo6gsvReyItlIKSIdiJnh-BOKHLAiJUUaorBYWsrYdvStJgQZtr1KStgG-k0_y3_46tiM2-8NSjiloK9XZ_BlejIBg34YOt_tqL&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "50 Berners St",
      postalCode: "W1T 3NG",
      city: "London",
      country: "UK",
    },
    keywords: [
      "bar",
      "night_club",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "https://www.sbe.com/hotels/originals/sanderson/nightlife/long-bar?utm_source=google-gmb&utm_medium=organic&utm_campaign=gmb",
  },
  {
    name: "Ronnie Scott's",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5520&photoreference=Aap_uEAciNvW5ytXhf1EdSmnuKvrMnIw5UfG-CTCK3X5CUXeNJK9qxuHRhAen9l4mbP_QihzG97UEs-nGTRhvjVXXLXpmyGheDRQA-n4xvTHDzR2cCxUf8l8St2hWScnigRm2iDfDWnxo57StQF0gFOpxwdhmyKCKBJyfQbwv1sx3HrcNdy8&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "47 Frith St",
      postalCode: "W1D 4HT",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "bar", "point_of_interest", "establishment"],
    rating: 4.6,
    info: "http://www.ronniescotts.co.uk/",
  },
  {
    name: "The Penthouse London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1536&photoreference=Aap_uEBQZDQocRt2quE0QykzX4HL5PweYvSloQlgVh3z8aIC8gl7X5NocXfdZunFq1UMNxAbZ1Zy69uWhKVvFTh8REXDF2wxLMNy3hrj8TzJkPSt6lvvfKfuHswezQnOFi0MQFqtOwBWnKINCWPzmXDL-l1012YDYhDelJOgaeafZyKVYf0&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "1 Leicester Square",
      postalCode: "WC2H 7NA",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "point_of_interest", "establishment"],
    rating: 2.9,
    info: "undefined",
  },
  {
    name: "The Social",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEDvcGAjxzWQANTlxmfn0S3uTiVAYITZXwQgFvPkIpaSHS1e34wpt5scpUI-yWorlZ6ew7egOnxu49Wt0p_n6MTycakEmpXv2f20RZg6Xd-nfwsaNauwzqMbFJkxyezxufijmmSTGuecXUgQqPL8VZNUzUSZ-7s_dp-FSRNuYa8AJnIU&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "5 Little Portland St",
      postalCode: "W1W 7JD",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.3,
    info: "http://www.thesocial.com/",
  },
  {
    name: "The Loop Bar",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4256&photoreference=Aap_uEC9YWNH5vDIFyJ97mz6ufvtySKacVG6KbXiofnBuqgus5zmWqyChKs2e8rnbEugMAzVScCG-XP7tR50c_ZxsWTUkTkOheRXQdRfdadWuIiZnRUViNBHb5kB5iM3RAmQM7CmlVQZ6NFqvq9_DmdA_FRYJJw0TIyShWN4SCTbNUFtJOJd&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "19 Dering St",
      postalCode: "W1S 1AH",
      city: "London",
      country: "UK",
    },
    keywords: [
      "bar",
      "night_club",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 3.7,
    info: "https://www.theloopbar.co.uk/#utm_source=google&utm_medium=local_seo_gmb&utm_content=website?utm_source=google&utm_medium=local_seo_gmb&utm_content=website",
  },
  {
    name: "Rumba",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uEAMcqh0UNxt5iYDXpkKsWDnKov6jfM6xiaqyzdmLUd61tIg9nBgu7PnakwWSk0jx_863ZxnKNTFIdLhVg8r4mJeU4RXsx9KPJ0FJXFSdbTzydcalHHmFuAUGypZjqCKSKjacDNg3Xzivjq_zlbBmo-qPI2HjyQiICUL-tNQ-u5t1bYs&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "36 Shaftesbury Ave",
      postalCode: "W1D 7EP",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "bar", "point_of_interest", "establishment"],
    rating: 3,
    info: "http://www.barrumbadisco.co.uk/",
  },
  {
    name: "Circus",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEC04dpFn-4ovCipMmfXZyREYaP9xyEZADdbFtqWQz2HpOd5zYIbQ38a3JiLx9NfluB-werGSt3K3bHXXmK4pEHDEqF_hL7tnzage917mjA_aiM71kVm8LALCYOKlYhNKT_bD9udHBG7YqZ2bqqmiFHc-nMSBIgWeUhkyMN0swmhcXV6&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "27-29 Endell St",
      postalCode: "WC2H 9BA",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.2,
    info: "http://www.circus-london.co.uk/",
  },
  {
    name: "The Windmill International",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3222&photoreference=Aap_uEBwHUZ-HIdc4SPNGcir2d4KZ9REiVzcfuatFEtb-8sijN0EydE-D6MKwfigYCDZbK7C_ZwDTNR_iyVXf9ZEwzqTogpoPP7DpucA2t5aNulkI4NUHUs-i5OKhJf7xIPc1K7-YeFGNZNoDhXG0bItDbXUJH5_zP6m3SIxVsSjlFd6A5Ky&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "17-19 Great Windmill St",
      postalCode: "W1D 7JZ",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "point_of_interest", "establishment"],
    rating: 3.3,
    info: "http://www.windmillinternational.com/",
  },
  {
    name: "Cirque Le Soir",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1120&photoreference=Aap_uEAATP2Ix3geCqgfHjduZ0J4pdZ377ywEEOjIyOQ1CgGNz9jqrhLdbPe3OP9csyXOQGlz7lmtxsjD3RAZ-x1px6qujlgAzVLM3oP4Sj8Hze6M8LpwgXN6GnxN-SRfoD6l_ck1nkX0GD-4ED6euWSpZtFQLOXOsQLoYc-Hsq6KK3lMYw&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "15-21 Ganton St, Carnaby",
      postalCode: "W1F 9BN",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "point_of_interest", "establishment"],
    rating: 2.7,
    info: "https://www.cirquelesoir.com/",
  },
  {
    name: "Zoo Bar & Club",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=512&photoreference=Aap_uEDk8peF7-jdpxuDp5jdzFlxzXB7TB6vSsNMJjnFa1jGkNhQ-vZY33Mtri1dxaL4bovAY2yHzEcJxV0YK1G-9yQehncBxt1gXhPXliHiquA4u2zg7fR3eOYCiLzYNNYKmhENK9b2c9AEoZxkhEUAee0-DahyTxvT91wbvMEJcWXFe4o&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Leicester, Square, 13-17 Bear St",
      postalCode: "WC2H 7AQ",
      city: "London",
      country: "UK",
    },
    keywords: ["bar", "night_club", "point_of_interest", "establishment"],
    rating: 3.6,
    info: "http://www.zoobar.co.uk/",
  },
  {
    name: "Platinum Lace | The Best Gentlemen's Club & Strip Club in London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEA2StSomzSkcjX-D60KGycNECaJTJKsrZKyfC8BO77_atw5hH0pr64WEYDBZNBt1AyAZKejTKVlKj04TD2phHeieIRLLgMUuUeaKPM4TwSTt5tkX7oNmeUqQgvPEOWSOI-lu6ztxWfI6hqqn29qoKiSJGU3Kl38XNgF5h3nJvRYn473&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "13 Coventry St",
      postalCode: "W1D 7DH",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "point_of_interest", "establishment"],
    rating: 4.4,
    info: "http://www.platinumlace.co.uk/london-coventry-st",
  },
  {
    name: "Salsa! Soho",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2980&photoreference=Aap_uEDEWtu0H48c9D5OatP3wSZJBB3_hXHCiiihuMeWZ6aB9K132Vefntn6j84Ky1mlB26SDjkp-0VgnMxIabNZIFA9C-fFOCAVJOYTnWegX-AMW0m-u3jjUCcp3yyRmcy7d4sb2H37qkBV_vfV7HybgsTvPtyQ4chG-63A6HoYhNEFnSXB&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "96 Charing Cross Rd",
      postalCode: "WC2H 0JG",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "bar", "point_of_interest", "establishment"],
    rating: 3.7,
    info: "https://www.bar-salsa.com/soho/?utm_source=google&utm_medium=local_seo_gmb&utm_content=website",
  },
  {
    name: "Slug & Lettuce Leicester Square",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3992&photoreference=Aap_uED5sS7PeZIsNSN5ELcj1T_hSz-WkRZOHP9dEfxIMLLClRetqUrwjAZzwYa-0GEDl6dRvoUpLG-vaopM933mr8K1VcQ-zT6vqZgSIwR4ClTQqsiQ5f8NsPELsZdAdBBEQLt_UlyZVZi70LzSjjFM6tX1qvgaXB2jqnrb7XOrTLHqWA4D&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "5 Lisle St",
      postalCode: "WC2H 7BF",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 3.7,
    info: "https://www.slugandlettuce.co.uk/leicestersquare/?utm_source=google&utm_medium=local_seo_gmb&utm_content=website",
  },
  {
    name: "Ain't Nothin But The Blues Bar",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uECrEO-QHrkmwxrC7VIBzcTCxnXAIiRIhsKxpc9oXPCYg4v5wWdlPM9u0M6NW8XiDBYo3L7IhDSMtKGK5LEr_R5aLlPr2npdYDHqQ3f3vianzdhjoLofnNUKVrj0uLP_FqhuKt19K9WJaCfl27S2nMP68Oe5GrJF8c54cotk8hx_bvVr&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "20 Kingly St, Carnaby",
      postalCode: "W1B 5PZ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "bar",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "http://www.aintnothinbut.co.uk/",
  },
  {
    name: "Piccadilly Institute",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uEArH4Eqkydk6KsXmokMmWhvuJrmgFek6VXCreOk4Us3ifQbiIJwkva8f7K0kz4-tW8dbzmLaVfdjDfhxFR2SSIX1dTeh2s-3bCgaTpESh4YhbTveM4CewpF8ASdrfwoVS9iXlFRR66pvBThnLxo2katnUyyXr-mFfKJ5jcmHnL9lFyd&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "The London Pavillion, 1 Piccadilly Circus",
      postalCode: "W1J 0DA",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "bar", "point_of_interest", "establishment"],
    rating: 2.6,
    info: "http://www.piccadillyinstitute.co.uk/",
  },
  {
    name: "Chinawhite",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2988&photoreference=Aap_uEAySNMKJxE1jBtT12Cv3mg8THwhkOb3-o9sfIsbIQqLMEoqHnY4z3V7PTB5UKjqye2dqRhBUpcJ7VcZA4cb9z6UqM1FXCn6FXG95Mt49Q7YyManCKh7mMfkmGuDoEeoCP1e2LuoeRnKjrPE00nesSyKwx0nYyE_y5qXMWoygak9Vwu_&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "4 Winsley St",
      postalCode: "W1W 8HF",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "bar", "point_of_interest", "establishment"],
    rating: 2.8,
    info: "https://bbcnewslives.com/",
  },
  {
    name: "Jazz After Dark Ltd",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1920&photoreference=Aap_uEAD4j07bRHAuewzLdEinsUXmyEH06lgV1hounYt79ghmE3pxrjmbagFAfYjZOu7qif4enzVskChoQOeyeK-V037kyRRDhNe2rg2iGJVNdfw5BtjLa5kjrUMTC8d5KEVSMlPFx9tLKAs7lpcWoFtZSVeeqzDn_Xgpby2Im3p79Cft-h_&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "9 Greek St",
      postalCode: "W1D 4DQ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "night_club",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 3.9,
    info: "http://www.jazzafterdark.co.uk/",
  },
  {
    name: "Cardinal Place",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5312&photoreference=Aap_uEArnYF7_W0T35o50dkGimssNjuRaMjFmbxirfqYYV5VV3qnPtz4kOd-1V-H88uS22C7ejvzX8Ht5TU5-Jc2mzVcx-jaG2uAEEJMqbMrs5tgdvBl2zrSLKmEibvoy0GYOMGy28elrkagaVqKfS-OLRZVCn4zuPrFTBzEnFBwyfOENegQ&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Victoria St",
      postalCode: "SW1E 5JD",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.2,
    info: "http://www.createvictoria.com/",
  },
  {
    name: "Burlington Arcade",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6936&photoreference=Aap_uEBTaStnLjItY9idOWYDbklO6GtQFY2NInksQgLoxEeFXy3pJ-d7wdLdhAJn6oIPNltbuVFJXma4g634XB6zHMaZ8x74OMm9luWenbg2Bn5iuXBbiv1Cu3qV3QCyytpDl9PtrjiBqfKrjG4MuRKJN7k8EVhol7NYUukAW9FyoRMxFFXg&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "51 Piccadilly",
      postalCode: "W1J 0QJ",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.5,
    info: "http://www.burlingtonarcade.com/",
  },
  {
    name: "The Brunswick Centre",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference=Aap_uECYcKEQfJgMwtXs4OgoXciUtEKQuzGFDhJAhH2R1AwTGnkBpCnVckQkviULfBhgQfhyyzuXZlNYbP6XOJUhLUNKBxAISvEya8-LZnWn01j5CbYeYJZpUIDVmJvec4lk27FDp-vrmkpF8AWz2I4Ys1rt5Mw-uY3LNWsC9pk8eGicg3h1&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Bernard St",
      postalCode: "WC1N 1BS",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.2,
    info: "http://www.brunswick.co.uk/",
  },
  {
    name: "The Plaza",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6000&photoreference=Aap_uEBchP-K3SkISnUkoF1CAv2NkJZS_11whnNhgvohl_q_juIl4qSuoes3bVyq9-VMWMWWo_VkprxEDMscd2zMeX8SVib_aeyfAmRRl_s4eTlnuCQb7_nVvLUpMTGmYdW5kYL7Ug7uvjpdn1ieGrK0iEXQ_J4eujLjsoXgcOet4HHMuSTH&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "120 Oxford St",
      postalCode: "W1D 1LT",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 3.5,
    info: "undefined",
  },
  {
    name: "West One",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4608&photoreference=Aap_uECRK0a1u3KGD-Ai_gr9yblF_NktmE9jr2O0ZNnVu_iB618Hy-31ciL1vwxAILgtUPq_kyx3D8lR8iOM9qDsF1w7CscVZ_NinlSqyM-0dKf-GDG0TjmEqD5XI72bez-Z91h31ZEJWce9udDW9AjbL9EVro6MUIjPoAgYej2K2s-CLW12&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "75 Davies St",
      postalCode: "W1K 5JN",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.1,
    info: "http://www.west1shopping.co.uk/",
  },
  {
    name: "ロイヤル・オペラ・アーケード",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4608&photoreference=Aap_uECeEZFOjPTheRySkL1JmdQWpwS0cJLde-j4l7JGsqwsOKXW0qf5XY2E82SKL8DqhV9717jDJNrGPBYQ3RpXOgAfMGWAMLLdHKlP5LVgIZZJMwjPkFGOzs8KhJGjKf295qWFeSLMkh2LW5Uu84aQ1i3pHYcwes_w5ajkXf572RSLE0E&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "30 Royal Opera Arcade, St. James's",
      postalCode: "SW1Y 4UY",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.4,
    info: "undefined",
  },
  {
    name: "Covent Garden",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uED6Vr-pO5fjsDijhQ9QC9rl8G6lliwLpVIGfx52I2Uz4PKWp96-5ZnbWazdbqGZ8RMaN_0QO558KMw9skc-u-8lwqWpxYgzJDzY-sZtCFPpN_O1OqKApHZfl0o0UTJHbCjWfJfLbFFQyAAs7xsyh80Xs5zjzlDOovT1HFNrAdNPlxjv&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "14 James St",
      postalCode: "WC2E 8BU",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.6,
    info: "https://www.coventgarden.london/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
  },
  {
    name: "Princes Arcade",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3200&photoreference=Aap_uEA1CMSJC_v9XIvIU90kDJsodyUDdj28IlJGM5c_zDsmofkKjq0mcn1fqYyoeLn9BeJc5qUMXg-KOYRi_0vMRVy6_N47Vz7DMNROg3AMz0BKRzFEn9Y5dd4ozdD5j9qTNpsUo_i1FlFu8UZfnznMK3qGpNRSZOYlEGQhEiR88KlNjWhN&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "196 Piccadilly, St. James's",
      postalCode: "W1J 9DY",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.1,
    info: "undefined",
  },
  {
    name: "Seven Dials",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEDr-ZGt09cykTLJ50fNvQMydQ3cnuiYwvaXE2T6T4dnELldCQZW099q1dQIg3ypTNQLgyTZkl96KR1g9mn-AUoKK8o5qrabRELLzAAOF7zI09zWug4i1sP-FVjiaZQ9VrPz89FRfKOOdMK84UlwAAU4Fy5eGqx5R-ivFa35XbOpvqgE&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "45 Seven Dials",
      postalCode: "WC2H 9HD",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.4,
    info: "https://www.sevendials.co.uk/",
  },
  {
    name: "Piccadilly Arcade",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5120&photoreference=Aap_uEChrAcfGLtwkyT9qU7_cny0A600-0SwmjONr5AlpqZLAj9llbSeu6QK3nehRfBTvf_pbvmg865fMH3EJWeDpEshYscajDKUQgKrA6_m-xaB_qvCrTEp8MhqIYizdJnzgY-zf50-IIXtYg8IxQCHmi5PycjLmr1ycrcEKxzpIdGX2omL&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Piccadilly Arcade, St. James's",
      postalCode: "SW1Y 6NH",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.5,
    info: "http://www.piccadilly-arcade.com/",
  },
  {
    name: "Covent Garden",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3264&photoreference=Aap_uEDZpCBrAPWwwa7eVgMPnXrB0C43Z5_S2nuFbTXVuQyUtEfzaY42eimwW0YENP_fyaHOOknBahEC4pZBL7NVeaXfbmD8OopFbJGcqLEAc93hkVvhkdU2d0WFEXth-cHDITek3Nvy7r1b5_YzqNpuCMWBN74Z2sao7GagYlsg6nOhhoRY&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Neal's Yard",
      postalCode: "WC2H 9AP",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.6,
    info: "undefined",
  },
  {
    name: "Covent garden",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5184&photoreference=Aap_uEBUcQmlPIOtevn25e3mtBipacYtp8ilDJtv-nud-b4m1XyTxanUY8h3DRylpSyqZYn4112I_8Qzj3UnmhmolNSsKo-OPsNl_NAdV7ON-30evVXguoHbwWzD0jIrs4SglVoNI0ghB6mqTuRYeFLJw_zkpnZNzW-QR68ZucTTm9eP--A5&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "ME London",
      postalCode: "WC2R 1HA",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 3,
    info: "https://www.coventgarden.london/",
  },
];
export default places;
