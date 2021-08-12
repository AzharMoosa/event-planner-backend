const places = [
  {
    name: "The Clermont, Charing Cross",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1666&photoreference=Aap_uECtIvqgL59cSk1gUH-rjVFQZFGbQAFfp1ga60k0BvsgEQk4zkfpHlGtj6VAdW-Ys7EE-1dRy1t8fOcKXU5r-Nf9gjVJ36f130P2d-SXNklLvCVvauQPkwG9-mZcP378bglDkYe_rtRGhafPTQFnqZBKayJbbUj8F5c624uiFDN9rBEl&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4288&photoreference=Aap_uEDEJ3VHvcAC2vXVZp6Kg9uxZ-ZBaBJrb7GjXJPBA_AQQXgi_6ZZS9Y3nPdmndNrWX3PXZedlM7fEZbhB6WzRaag6wWfoAqpYM581DotieIVNkK9lyNCmpTefhsu_XoWMAd0Pvbg2gQQP6fw1UCHfmlhQzT2EmpeXruVDZR_F1tI1Gam&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=8688&photoreference=Aap_uEDLJk4zo1A43gaMpq1wccIK8XdXepr9VFPgyQBkWRvPNFVg8m6BkOS9tTwVwxKd2verR8kCTtlPDLHNsOFgWOG_yKiMIkYuQORnr_xyHnhiWeRB2_3nzuqFCWxbDooZaSzZlGiYbSZhTTHDKEA5YBSOkBzVlLzAGI4wW8NkiPuNStqE&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Premier Inn London County Hall Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1500&photoreference=Aap_uEAh3mqswLnGaDneLx_1EsYJt_6B2n6IjKuFrtx1oVtfFRm-i0W3m5FrPi3DlD2SJo3ufLUZMbsYTvb6cz-kxHhg2Ib6yL7nFAADNYb6y_6byFcOnVNgx2uNUHQVKHCNwrJKniL1HUqjleUzYSx9dw8qagWCwftQkSDEopUY_cTe9gHz&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2001&photoreference=Aap_uEDrgr55OBMx01Gs3PrliiA-hL0FecEDYo8iZVmPHIfaAa9EIfZfV4Ww-_GtHfJnqmYSwMEFTNhyIcqR6uBuR0rUEc0ua5efDWUDCzSiP7i79TmfCwWOM3p6bbOecwu33yZLnuX3QVgkKXNJPV0JDd8wtHSEVJwj7pMWot6u_Kb0OjWj&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5000&photoreference=Aap_uEDIFAtFx9qkm6-Lf0TSCO6ioibgOSIRSTuXgAh-FnCplk5aJsknYMH6RQxpS0zA-2wWCP8E2PUsXpaLeVt-7EiEz05iaS9OmvvkTMO7NCxq_T87XelLgqlrno2C7UI89JKAjGe9THTVLmZEYAK70Y9Cfey_T4t9td17qowUEfRL_1AG&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3877&photoreference=Aap_uEDKqtswo9BvWYlHEyhVibI1itQIIIQ-O2b3Slhbjmj_zlQ6EXBzMcdRX0ZgBcQW0Q5F_ln6Ncq82C1uAeyIm2Uk5EVBM28jlzwEYyKxtvv-lBQOscVSQXx3cDxHS8iuDhQfQC49d_yskDIji5Wbb8CgxQeFWuhW9B9Pj3SiBOI_zh80&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference=Aap_uEAWuth2Gzr1mvrUGOZOy3I8SBiFlzHX5e2UUwXSwTPyX0KlD6kSiS1kPS8l0DOyPqP0IsU17gJvVIkRqKJQaKGxK8F7NftNmZ13KoOl2vmD3DJi4tXUpupcdhWBWZ7ixrHxICxwUHqOShkvlu4gtiRrRUU0-wECfiSGN8_ZG9C97U9k&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4102&photoreference=Aap_uEAbq7rf6uRecN-91ub5BigPQ15Y3Dx-1qoU_ugJOw64M7nAxcnWASDreQ9_tShyRgIlgRl4GxgzafX-v8-OMBnsCYPOUHL5jpTqh7Nd_Z5we0PVsECyLdVRLAmKwc4KPFy7I23k6Y_mreJnhnRu1LNzEXZAE8aSsnDg4c0FNySdUwo3&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4288&photoreference=Aap_uECMmI5XQl8uzGmVwbcUhdBooQG1P9vOLlhxNUEkDp7Y6dVUIJnE4UJGJ0Ri8FGApRZMKKPZwmYKRUoPCl-j5nylqhrWX_2pRk04pYQjcfT5ckgAAPZ5Fk2KK1_WNqqW_vYBX0Vfg8OPqF_mjxvKtsI4W3S6wr5pEvdo8oSCpGAV2XXO&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=12000&photoreference=Aap_uEBqZFqVw3Ddw8nYDQ8yX9xdhE829dkpCPXqa4ihfiT0oER4UpO1-Khh_LskSIvLzPnEH1VrlfHsVcH01Z4GsINv30KqyGdnyfKW2yRg78Svvs0ZsB-pvaHDQfl_6zKdLTfUQC0dlQLgBzCv4HVNqLkDQUb6ATIs8-oy8bGHcctIvA2X&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5263&photoreference=Aap_uEBzSPO1LsKUd85mCVoxWeiPhKnOuV89Blhu74AcZCkkrDLj76p4SW6VkNAhQIHuogAd6JKiFQkqz0dQ9wTgcxMPFlkcmnl3ge6MIfDXGFMm1aITR-C0e3za_VlKlPFKZveMBKllYyQJbs4NhxbMUHnMdBUP789kjSw-DZMsH9d007GV&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEAyfYNK5aWkj1E6_1trl7rq-OOv2ape7O7yE-pbUhLhPwiJRxOoXSWsPP7A1HM0GxewDtBBO_JRZYx8ivE-e2rEe1I--0sX5U1wfl4-xN8jxByqF_WhC8whBxhWODyYsJo-KVZe220kGF94TZ-5qKGo2JLjcq8U4kcaiDb1dBb3V4v_&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=Aap_uEBctyl59s_wd3YIkpTRly0K53fjKeIklllvo-ca6Rsyyqary2O8A5ys48kO3g_qghZE1RmBNFlB8vAjz4IcvLioQ5J_HFno7qoF3132sNX7jNBsYDvwCki4K9Me-ci0WIk7FzTld7-Vi-PCAh31_e5BZcFnslxA0l54FIDflLAHekV9&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3991&photoreference=Aap_uECEZcbmM8hNeJxdsjInAK-hs5o2y95cG44fPyTNBA3vyzlC-7pOSMNSp2PTqhzT3Ohph15iQVCd2HNXFpRsrF7EC8IHdblPM9YmZo60Mjp6KyE-FvTQXcY6qhiz1wwu-7V4fwA2pZm4edcUQI6wsKOKxd4MyFIj6cy5NEpkMeINhtHF&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6000&photoreference=Aap_uEApho-ptleSvWTwegRcIzquykF4dd4BMNTjybUGp8I1JFQsaZPnl24RVJvHSXMRiNXukAmtPN0xlmuCHQXJAnWm9UeAykGi1UdC7zqX6bv0vAX4DjHiPHrNskiYRQIQ0XzGb0f1LSpqoYGKf-vNWuBuUpNA2ZJcc6syO2kCI172_xcY&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3000&photoreference=Aap_uEBWoMLdtmSFoFsZmfAU3H8I8Kpibbhs3CN0507W5j_IPi3iY1Llq1eylSPr8oxH9eQ2jhXSidHH8UbVhLczK1PV3jY_yWHfawim8rqBNtQiPhFYaebJZAtjCXHKae22Us3AOEmhsmYUvdXFRmX73NqO_KUaKWQNMKoqGfRxKBxJ0ht7&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=692&photoreference=Aap_uEBdg9H6HgxsEqcA2DGi5Jo0wNVSXF5sBzMC0ZsjgKmJ73bZHRjIBoOPyWD8K8rPi-CXSsMsR6MI5T5fzTvtE_F5QIWpVN3N9zjlbY0l8HhtKy3qgUGYPi2iDkgqhSUy8dvcS122fLpu246rtsGNhnP61j2xnD-fWDGqO4mxodLUHVgx&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1500&photoreference=Aap_uECH4p_3ite_FGKdojzQJD3YPPZTKq3H7Qn9aC-7FjT9zKyVgr2c6kC4PL4SNEvM8jANuTofhpaXQYr9ahcjp9EezhAuuWC4jk2UtMmNhdOJaRFauS7kJkSBDptuFbhFdbXbyvopKFBUet3ZxATJIKZjExnpCkdtPSq7rMq8I4XorN0u&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=640&photoreference=Aap_uEDhxvzcGGkj6RmnAqd2CCv4A4nqHqa0rvReHnwDdi-jCup_B5x1HKYTyCmeUu8OjjKwdkv3LnnkSI7HJUzntITxOKnb_IsTlREknpB6Twl3JXtHOobcGVX1aEy35LdFXetX9gKe3aTxo5sgMwBtyGuZ1lAYvCZw8PHLeZpqRRQfla-o&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEDcts3-87j0hy2ONrrME4IMbMaXxs76laV-vcwebqT6Db9tOFfvd3w45Jy9E_0UpyqxByUp1ETOAVUEY6RT75HRKhUrONa4GGt5P757lRkrznyL-a6zvqvv76p6HEuxdz1cnEsY3LHoQxg1SDyu4_OoSK0VxKErmRw-ZVkqGcBs9hMj&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4272&photoreference=Aap_uEDxmedOx_jGik9IDJuhH-wHCdLyHITYyDVZd0_I0drL5mzkcChGa3UI3f6enUWWRv_Xk5kBpD1VM5nN8pYU_QVSWflm5djAGXTcAye6DNWdBvN3K6i_bvhJv2eJBjsYg3OAiCX8BBH13ysScYWHnW-S36WiiYG0q4YzAToSrcW0MqMf&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=560&photoreference=Aap_uEAKI-DOU8zqinHYKO5eZ_1wK3VMzlVfppBhLqiAtiNwaevloQ033jnruEQmX14NOK7eTB4s8Nd0yExbI5S8NWFk6aYT_lB1sLVrwj9fuE54588xZ3SdHltj1ywVV9K61blj6duJcs8jtd1Qk6Yu6zk3Hm779WYue2hDyAAeqoAuV6s3&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4928&photoreference=Aap_uEC6SftPChPen4HBcIQM37rwNaDdxArqsAjWy4HWQCIU-9eVWmmZGjrrqwUxEcCZutICV_nDWaRslRRVdEBvOZ2qRoArO04Dw2Rjx9cqGYDi1HRY3TCTZG5wbytRkU-Aa4F-NSSHBkItOkQSHZddEgtDoAU3SeKS6u1BIhMflj7pEh5p&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3264&photoreference=Aap_uEDsgJ3mEXup-jyLWcYiN-1pDcq4wyRgmvse4UAPVMQmnjuW4PAacakcWbTfCYyMTjd8BdbqbtoWiO2FCHenahkfMJluDS_QB1YV7XpjYPvdDDb_mRx02cuC2WgZHYc6sGd0lD8kOjB8sZXXr8qGB47ecgCR5OrGRHWsDMHc_A3woIsV&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "One Aldwych Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=707&photoreference=Aap_uEDsnZs-NPGg88qpGuhI8OBmfCFSEx5uJeDHirwMbIsspFnqKaFWOq3UfyUsUvXOcy72dGoG84N5egIm8DK8t3fWYhluHhT7ybXq_VnLAdCLiqa33mGXD6z1HYGpihsl1kKj-l_5ODrwplVZcuWyBm_MqWiyDFHhHNjTJkcGpW3jptyd&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=990&photoreference=Aap_uEBR2AsRNsi71n6VySVSmLkpmB31GkTFTGIw7D88S907JGwsiQggiqJAzvU5kegCedmNKjhhktyjQWs0WqFcJz6nXB9AS0iZHrCpfnPTLhsuWlHjwlxwYgyyFZwMtKbK4Q8zVuJTKsQmB_I1GSRJ2_yoT-_nR-L0HVAVBL1IX6HGIq1o&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Berkshire Lounge Bar",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2050&photoreference=Aap_uECwA1P-IxaEvVva_2_F5kZGDLg6RllRIoCBtX-tZAY6z9y9u9pOubIAQzpwn2T0nx5A2BHPWR1G4VoCjmF8d_PruyZlLNUlu9hWwU7SVfCjwmEK3Dv8UYMBRqu3sMhF4ZcEha4AgX07U5mNrY_YAIppkF15iEnIpHnNvbyeGS9He4J6&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Grange White Hall Hotel",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5616&photoreference=Aap_uEAG7o1bOvDnEZxIhghoEIWy4eVd3qitWowpKuTpPTOlzn3AHk2e1cryZvP96ONsI9i5o5otU9NTWJxXoRtwN4bAovhLXR4CD7jtmR8TCbWA7srivAUJdwIkAqAh3iW-dVZORcL6g08Lsn_HSt7T7OX3pzQbjA9_HTbzP93-JI-IuS7I&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "The Wellington Hotel, Waterloo",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1920&photoreference=Aap_uECcjSLIUBpPMhHciQRp5y1S3kL2QXtqA6vSYg4FOIn5bcuqAL-D9K5HGCx79VgkHZxAvmbrBy-c187QkRWlDp_8g8LdnMpdYianhm7bAgvwvsheiS8fU-IOFJuh7brvqBuSiFCly-A9VP6qt94UFeksuJR4m_gkn0igjyN-lFyrXr0g&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4288&photoreference=Aap_uEC8kgF9TcSrXqbvzwLiuc4IejxqvdS0TsSagfH1fMBbok9exZWru0FSgg5Z40aMGdNuXl5sOrfnLDg4RaFkd8mHOEMZtR1uBkMWZL-MEPDKrTDa_y1afzyHhBuFNiUYSmvsq4Dkhr0tZNQJfbajHBw6unuqubdZkRm1msWgl616b86j&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1698&photoreference=Aap_uEBA57PQssl9n4z3IBt-_t9ggX7Fq_Le7ttHI2oATHZ5hQRssv1-kMPURCYctmQ6bW4TARWntRyDbUANzB_RVfXGbUwX4_UK4xs7ZubioEUyuan_cFFuhi-4oFTYuxAjqCOcJcsZmXsLeG2-zwXRfIXv5eRz3mOcqoc5uol_g1wkkaCu&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=Aap_uEC53OvRwhfcFI0kTbrmA900oaqWI-teBpWTvejYNroaTQb90spt0JCrJPcVRTk7AXtaO-llZbXhVkQXD77mxNvNovCuSxxygOartdwbQxQcByTb0a4QckgdfZpKR7PkI1p6s_pbDjvTuHQumkBbj4kRTkGpjg_1LdRIMsUQfrrb_o1A&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEA0VCU57REMHBg7U1acC-9DyHX06vJfX0AApsr42z-b-K3t9TYerhij9md0CQhQq8jiLpUZsuLSAnWit7qLPtM8J06JSZGnSzbeqNYCjtsM6sYcvyz6aw7dBiSmmKH2_2B51JjvHQEUxvhIzJmoRTsxNBSev4figvXC8smSPS9i6nrG&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1136&photoreference=Aap_uECYhgzzVTXJMIGVy4GDDh7LgWnGsVa7xf8Ne6XXnSPTG9GQw1N9BSLitfri76SOwigcWtEJUUBR_FloitHkdpuoCZxYR5nUqhplVKI00QM6OWI50jHQRzhihra7cRCPoO2yCusaf7EGgtl2z1Rr2hzMm3snB2vhMoCMvZg8Qah_ZuU1&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=828&photoreference=Aap_uEBYA3tDFOm0Bwfv5t6PRf1UTSA_gE-KKdYH2pn1dnNJ7Y7lJimUmwlWSGp-JxuWw-F0vs5doaX2I6a-Rxp4gRVhYSuEvThv0eAZwRZMcVjBQChFD-tUG2-l4tR7kCHWQCWdjdBWsUeLU_RYBxfbZvlhCcWlzWJK4W2LC5Hnl-au_KGI&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1198&photoreference=Aap_uEAoULOMNZZtEg4RedOpm5V4mds-VdL5cDzyM9ceqvLnfPw_-eMJPpwY93rOk9ubrIiEYj7YcJoHasRJr9tg2359E1rqsvNLvp0PPkskZNm26eswlE7aeHDtPGL18fDeNzhDZWs7uADkPCxFWw6ulCTw9ZeF5BX__k17W18IrzfCv5_N&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEDVWS7EDZFcXExM_Hx_AtBTbOjX0u-s6Hf3vkP2wMdTycP2CB3zSxmVf-778X4PR_nobNqaoc-urH_YA3UCxCwDU6YlEGf5p1ICmkjcGGyuOi4peJwh0DwP2ycLqc_mcahASG8hUQbR0aRU5vcTIWxHztPWr0vKXRzr1edb9ObEKaDl&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4640&photoreference=Aap_uECGtCSkrXRPlTJYLUlVOJzDm01g_wD0l7f2wuAQATOhMXJbqZwY_auR0nMzMDVK2gjKtLMX7Dz1LVzz2ba1ncsXtNbNzeGGz_-yVTK0Igbbyie2Winze7cxFjsGmwo4GNgB1QVm73nH2s6IBIlJCHGHBhDTHnFT9a73tV7FxpgeQRjT&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3000&photoreference=Aap_uEBDrh_hP1EWqKiWqiFoX0B1DQMF5Y3nXESSbaOMcLHWhYUNLsRPkQTcxLIVCfFFQ1a3IpQtfrSrG-3BY1UNWb_aPXV5Gfs5-lx5viH55OA1fJCn3i9b6i9h78IvHWIQCEb5MCxFkv4MAoEsDxxyY5opx4J9celwJDQs9Gj2gjAMNsxz&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEDqRric_pnWxBguTgwHwPLr0ybpz7Xt6IYDBljdOz_QvaphcpHUgMTvn7L6z_fs3ZK-VPpbn_6sVQ129qcI8IlY8UoV3Dl4MLWvfigHbm3orZ1I66UovbEGPeDF8gfGXZzZtD5ge8M0V5UiYBdSSMvePir25BQr_Ccogj9KpzDfjnqr&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=Aap_uEAxZXGplhKi6IkCgnamzjQDeHiA8q_AjrhpafIgcezQJc3dmDhSv7zuUzExDxhjE5Gpk-m7i8_omDjBCbEnRC3Rl1D1DBSS5IHuj_3K1z_xW10TX7hE7qvWXrxgDjPDrusNYyj0ger2s59EjWX-M5mlq1c23avIfZL02bZ6YZ7c74E&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference=Aap_uEAYxce31TCqXlGWvyLq6bF00iLKSsC1m7dZoX4rNx7eQmhxKPB5qJcrbJhnqOdEwFoqm_JhreDa1jcyGByodvvpbPGAlEdlovWvxnIGoCJc4LvW57G7a7bix5Yr1_YkE-hVdUiLtCynlwkyn4z2v2u-TNjeKdRbnJUxekb_DkVL5015&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=12000&photoreference=Aap_uECZHDQt3LoY8pXVfDeRCFR3EIrOu8ufyshyYqlaLtWGvM_zgSrvCxS7Kib8riRHLHH-hBotB9GPGh0gxM2zplUhZt_3cYIXKdYeZGfmi6-2c_M3PE0UETirRkyM5wUq4isB6SS9_Gvioyy34beBV5GIn1VcoEBRaoCUvibC0NIfjcqk&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1960&photoreference=Aap_uEBJj6VkZExbxsoy4JU5jaYRYmGmHhvKQ-ToRIqlERsnMuGd_qCdPYpFGgE_L78lj57srnF5YNAjRJfAOnLRizPVVinEO2sGeqEbztqIh3MM5h55LWPrRv-26E37ch4url181DdliMQJWBnZYyRVmT8rglWQyYCuI8gnK8-GIiYifUKk&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=750&photoreference=Aap_uEAKv-4eb9r0bpKQEEgHZISMlDgbQJJQ-GbyA8UwiXoqqvwRM8oBtSDILpRwVtjqcj9PL6ddzwyoLH1l7zTiMA__zpeplhAoWI_picqQ3Sp2-n2DAMygcygWcq_X-olE74iVJpwplOnt78Kz4jhd6t-1UuXRSlfsNpzIydv9X35_BKe0&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEB_A2bGT89Gc8RKPjsRsghZo67zZg24VwSafZJvWGRz3FYPiQcUFc43KXt8BGMmAYeTcdstOTswKmq9elIkTxXOgYDCubRfzw6y3Njg4-Kh7LH_gqZTYX3U519E6PoyY9l74ntoTpqpzOT5zTmlJz08dUhjicCi8sTZMH3lGB8ATS53&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1536&photoreference=Aap_uECGl2Xm3hx5_35ZeHtkPNbBPULHpFYmZO-bYydfOgnc63EFQMiUbCs1wdxD5hIDgpALHP6haZ9_X2Cg3isYGfLCGlxDPrw8UzHhQujgky8sXnxlaA_QhyrWA8pE-VFGugiWAe8eWKoghh8P4H17gdye4oYgBz6Y9YSBuIKbw-rYfTtD&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3264&photoreference=Aap_uECEXA8RD5bVmMaO2DzbGL2WBzy7AawfAV-TWZAGHrcHlZbxQqO9fxSlYJbJmuGf12x7ZzX_abHUSf84VJdk5LXg6MFWO1bhBIa_DVAYEgMMRIWCn64KcZ_7aRZ-DpbII3Z8SX2UzhW8fRLy_Tc_Ow-UAJKUWBPiUuIb8JBBes-deEeg&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1556&photoreference=Aap_uEDX6TV7Iffxi4dXbOrYlnYE6CEzeWeHpuEok6bvCOiesgGjRl3V2NPericNx5hZnYaL5HwvdcM5rYuNqDIvsVmAAV5EGzOkHfx3yJpe5ht8cN17bO9Tc8A8cpF-NAqPftbd6GmlLB2HAaJzxLcn4POAUI3O3Uj6o3WgNGA__6ljtKDx&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1599&photoreference=Aap_uECnBLXZWhIEAYqtUSfXtHp0-Y9rV_UKoABr9PcCqk3IkUfeORHYzrZfmj6aA2s0lcYQKXou71vBtpGWXkx9eLTaCnrGTPuML_TCmWGmSJq-7sl0-sXjiC6hLW644IKVO0YGwaKQgLaICuS7D1vByZwkPpdlW7QzbbuOyX4cba8SZpXZ&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1914&photoreference=Aap_uECYATCmHC4pYQosLo1BoPF9BwyrXitc1xYDqKYtIacz8eK1KwGR1U_WPfkAX6pd6ny2eucxumw3B8bNMOsDSC0X2x8PA9IHW-6aPfL54shS0-cUQcm6G1NU-IYynJccCx7E5SGQutSG_meO02N0A7fgF-9vVBuJmxIrcTFfPXzI-9LS&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=7726&photoreference=Aap_uEBjp4qrYMj2-YHp0eS72uDO3rvS9rhg2gp4YqvN18iVmGpz1aH7pKlTZ4a2BI7x7fh2PbSdgy6yOlKm-Qz3NXsYG0TwaqJhUyhYxoTOhA2pI4Dly-L3K2CJiUTAEp97PmuVnczF0QcnVq2WQpBtMu-FY5TLPpzVwrrPUeH6Vb3c69Xz&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEARS6lZ6VsHxoOpgq8GG_QpABjFt6uT6AdyYlqUclnKui2hbMCxiGRymseXWaXulKlKCGXaBeZBbaysDIDWCDs64jCXl3Ttm2WT_r237EqwSCrrwJzUFOhgD8pcp6UqRKUIGQSH43cRmOLGaPNyASoDZGlGF7Zasng_aqFkxGSvbHCI&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEAG_jFskmLtwjhm_UxYiQfM68rZ2tcMvzRfDF6ch_u-sPhTTMtTck6jYH7A_P2kzQdHPXb2ykwAM8Ey65rd28mDSIqJXfeCvYe8---Xdl8pLMwnRgOn6itHgZ_1wPokjwEegQ2DVeFf5Ndb-Ka3lXYvkzk9pbBchGMy2KjXxTuKtqVO&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5008&photoreference=Aap_uEDTq_Bp8fQ4RNOP0gjYMm-xzaIz2F_WqHMvrV79bGXqi2SK9wOZHJi5-V9v_GF_LOxI82kuzefrgjqmzFCIT7MD95LI0mAYpDHDN2g2jqTaiHfCdsYOjbDxPbrJlbJQ0GoKo5vb2SLm-PG351fZ015UAtdUgy1yNy4IEO_b3ihsnamE&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=Aap_uECYnZUk5lIw6-TJGeS6xBTGwTgTmyLCYlmVg2nyqbbsUOqTzvPZCWfrFFpMUUKD0EChE41_IFPS5W8gJsIck6pyPzm_x5FBrsWwyMxSOpFDXWfwm_UonoJsn3FqIMbgc67RdlR8sNpOuUGPtTdtx-v_vsHgIR1epWFrkWY8KhLb9xyp&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Heaven",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEAZWYNPecviqNMQj4rrc4Z7lg7uuZmCf8NTfVJ0-3pj02NAf7dNNFrv6g7koo1fxVx4YePIYX8LXTheKIAnQ5CMZ6A2cr97KO1qwig4DjILT1XFnthX3M3nsalK2NPybd-WO3Mr8sMpqe8RXcqCj26JRivwx4OCLGHGD5Ld7rh_aS9l&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5467&photoreference=Aap_uED2zjwv4-4-His_WnTT1MlU1vd813YapvQGyVXyDfdUiDVr00Wd4OP2nxSpHG1KxO2mUq15sNgr6LE6wXXmXaUW-Wp2_gmMbUVDV4cvyWMvn27cRyLc3X-fd6CCFHsxlc6S7fPMylKP7IdSfQEy_SLIrNAYRDmT3YmTC1Yev5Ak9NM9&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uEBOwl8wbyt6Lw8ds3S93PJ79WkGsKPc2NwQijBwZHTxdT2E6gBfJ0qRvNH39ladXPpTqpjsLQ1e36bjQ9cLkaSiLiWKfD5LM9wBxc88kcgp-2ib8iNifqUw_m9l1sggOgGrW0CT4TMj76TLgbe3y4wOaewTSSVFOKRv9wKJ_quGcunp&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5520&photoreference=Aap_uEBhZAF_t3L71j2SNnxDw98mmEjqsN-IsRfs-eelWuhwprgnC5ND4_xzHqj-R0iuOIfbdpx23GOfsPifS6T0hRtk6tm2bHC0SvdjBm6UVFbqQj0x3TabvZeZ2YgBakHmyM789yXDEcrsuQuQDic8lOllEVxVlbynmPtBuPVcl8y8tfrG&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1536&photoreference=Aap_uECzZBcBeRecFHcrNGnsVt5-QCl4GnZ2xSrMAYRFBUwrlXVO586olGz-8Dx4wJDfn7HzRhz1V3S9u9Nq2mQKHuJDJDNxCW7ErR4EhVL-mezuNNwNzQ3B67E0WqpLGqqWAlQ7I1z-381WgNuYK9FGjenenqdcc3kbxalZCqPh1g-tnFU&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "1 Leicester Square",
      postalCode: "WC2H 7NA",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "point_of_interest", "establishment"],
    rating: 2.9,
    info: "N/A",
  },
  {
    name: "The Social",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uECDiy_nIaHgAqeJhZDWjs_vBo6tHUiyJqjkeoziABhny32sDZQgJkS8dycnzmJ8k51b9URMbN8H9OktqglFOfOF6IOD-G9SAxwGfC0srOtwcna6k7PXjaPBEKtx38XlvAk10kuEO61rcy_Uhz-yppdVZT_xIsgij8ghboWv3QPY0O_Y&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4256&photoreference=Aap_uEBU_lJR1hYS8WwVJm7CiRajBdxPiVW1KpiMH6N7q2jB-IS1ac3UU2AaX32GYV5p1bmVqDQqkxVqosaIccD7m_7BhFU-SOcGyEA-0xiDYGvDaU_iVVFJ_1aSRgSrRdIKdI9ZGHaLujchJ1S8iPzJobvJ1CtX7LgRxNj-X3FoS-k0LJk7&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uEBWuz0trqbI-vAwkppy8dYUj9ecoxFGAviIc8fvwZaqRPAcQjR-d0uwM-joYWe3T19TcW8GHKpo8YtdxSMeGHOVCTJXq0Mo9a4TVnpA3_WE8aRz7V5Xafe3xqFYkVWbVK9YmO0zPMSwJ-6tzqHDq-9czLzK5xHc6dyJ0MUTJxJqEYXL&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEAt1rvDfXDrL77Ld89lWxobkPvBhouAVY0Mm0SEOVkY8wavrksCztyYy81zLVVfs8rkNeVcs3d5tTaU-_4bLZi6HB_G02796cOqzp8TY7rM0yy-qk8vmoyzJDbxUiS6YPCyR8fexv4RplZA5_KSEf4Tw3SvkTD5zFPE8zpRmF28VpO4&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Cirque Le Soir",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1120&photoreference=Aap_uEDTeUWSd3Cg5zbHZxDLjRU0HDXNmOSeDbj0Ox19ixFoFlfSC_x__DK9HNXcyPyuZAuA5-aSaLLxZr9dRwI-FfkfLFs3uVwHTBwTOuoxrR24mPxJCDU6q-wde_m8PLwpE-YJKfsy3e3bWj9yY6NLtYxbDOOYUbBBlp6tZ4x0IX-tEDk&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=512&photoreference=Aap_uEDOALTXc5t5mTmHaMPQxDT20jRNmNSo8qhVPC4YS7JI1GxtBuWnmJMf5uqihG0vS30TfHljRgneY3MjFDiJUbekrVPYED8FtEZqdWnXH0rU4OovSCZgb3xygXxABRbFmy02OlhT8VHSt-Ugu5K1Qv8Z-I_vd_D5laNcWc2Uaymnsfk&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Salsa! Soho",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2980&photoreference=Aap_uECDB2zMy3ja9cSp1k8Bj5ndywjSZ4221luMDfmLeN487NbXBpsQjNwoUcri1aaGB_us2ULjQDCXa7wndBA-0LJzkNrRsu--lsfpahNlB0Gs9b1_ha08KrHMK1TCx__8jhzVJg-X4nUsEO9qtl6bEu8Q37G2c83pQ3WWSNWgfJ14hV04&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3992&photoreference=Aap_uEClORyH6pda_RPIF2OaJogtyXTJiQuwyC8AK3sTQxFJP36We-XrYk9LJBA6HfgTMm1GvZeA738q263nZ8K77gg1F9GXDCxgfzWplX2Ay4Z1H_12Cz7GapDfCH4XK2iHOZixOtZWW7uiO95X2VTMbZqLvwqgDBN9eBSILpGxPY5HQwXv&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEDELZQX1ybI36cZHZXm0zcT12PISjip7awo6SUNbCF7LJq50UcLGpLqXuoZFYi-RwL_FG4-a14BZt6pmCnJ2NbWLcU_MtJGJKmvZAgMzsMag2hCzVWf-oD9BTzl1o7Lu62_mVbTeZJ5Avzwj8ygGX1yXlJqcXBzYyNzHdaJowKHUGfo&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uED5KzXDi-yUjI7DkZzxLhaUPl4LTujcflt1f3zpbK4JjWf2OW9sX9gHYhzgScd77JXdMdNAgApUwDrQdDWBOMzGkG8wYB6udJyBuSOlutUkX0mH690lR05U9mRkfqQLM3Z4QfHYX0wMoJ6IP4Ri9Ozi9wTTNstkHjoRz41X_AM6OJdy&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2988&photoreference=Aap_uEDFsN28kpp5ddWtbbJDqQWrxooivkl_HGspLotgeQb6UlyQ58g6RaDvtiUR0Qd3WSTx9ToUMT6sl2hDRLMLKMbCqwm_mc1oVpBYfW3EWFYafTqAgT5Pd5elz38hu_uaDu93zg3HYfs1GHW5o6-cMcagXMd1V1wcoUbp4gwCXLnRc-QZ&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1920&photoreference=Aap_uEApL5o50TK1Kdu61ffUStWsnJMutrPLdB6AxtmnNyAXmUDQRZcFG9FUFk3uXJTXmO8l-_5PJLa7ImBjDxskTdSnXPzTgtHR78_9nj7T2SEJwoiT1vp9TVPc6g1JPUaj2XpvtGOx-EQzyK9Oisc-NOBZDI13XcXwp6SUjiCfl0PidGdG&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "The Mayfair Club",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uECQFuTJP9sJMYkMNaula5kaKEDyl77VYe5HyCkDBOocRRSm1Mcv0TW5ler49r8oiU4yWxrRwMAbWQBttGpzMpyflbTPn_NImt8WkSPSMlwQBs886HoETqWD1yScpkXRn6u1z-d4irQEAmr5FKli-fjux8V_HpkrLxjrSZmepe227SCm&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "49-50 Dover St",
      postalCode: "W1S 4NY",
      city: "London",
      country: "UK",
    },
    keywords: ["night_club", "point_of_interest", "establishment"],
    rating: 3.3,
    info: "N/A",
  },
  {
    name: "Cardinal Place",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5312&photoreference=Aap_uEDCX-Yi6oFmEdYZrqdOfZdfDC1yx4hZH0zmkX31wgLV5QZsbLhGZmeyoRe290Z27F8f5gqg6gQ2lWRt4pWgDI8sOQDPKQQehrWO4xL3uHywcPFvL7_41ivHeTDIUO1s1ZOKR4fJ7piGiA4CdHxDTS8sYlXxf1FcmSrdUumrF_k9_z1b&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6936&photoreference=Aap_uECIgvJaZflv_XTEy_SxgzkbviVG1foMa2x7mjWw4uzI54ljSmfEwEGC38wFRXHxgubOpF3qiHmlkTwC2aksyk-4eJAv9QUUFRdoiBdqh3HiEDllZSyCn6hJzPMOHvLdrNm82EmS3eLVxGJ1C5uOQWuO_o8B3PIHTmo15dkXV2Cfq_PB&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference=Aap_uECuHPJLT1PiRUQvTtsyBvHziyodjZ5Kl3gFSZpUtitIUMync7r0KmDiLEfCMLKW-hsEcdZfQiF7PI7xk_KaXRQY6cnYGxBz_3CTPEN7hY-mH69CXgfBirxH0BHCWMk8bt8XT8IqORRNPsObRWAH1oTdoUcJPoq9Wt_NmL8GtJFuKSag&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6000&photoreference=Aap_uECc4MSWAZ4kbtpPk0qhIop9rIgl60NWLwDevIN654-j_-gdz-TQNii0wK-s0BLQEawbamStHhxDfNwPstuqXF6ucCanJZJiMxLUZoxShSAmcgp28DeLDpsvzruFqt1IY2oPm4QOez-Z-H5sk910NMREddtxb3ZCllSRfhScpnV-O9Y7&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "120 Oxford St",
      postalCode: "W1D 1LT",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 3.5,
    info: "N/A",
  },
  {
    name: "West One",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4608&photoreference=Aap_uEDamLnA-yuJ6_bLzddQkbZMunwHuLI7MCLR_y0YRWeSBdoXTKvYUvvdw6E2p1YNq8drwdAcYJs2Cp4BocRpBlza-EmobWpkul13BmWRwgdUQv58fIbbsKD9qyapUrjMg8jFn0VQ8sikAlHRzZ5HNhWqsptijIwdcZGiG2nBm0bkqamG&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Covent Garden",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uEDC2wgKXMBND_N3v3cAlZisWoYLR7hFtTx-uhv9RoZLgEXH_6r9lSsG2uWxCPZf-9KfTQSGx3x7fyys2YHWUeb3fvP-YYSeSbMRvKpSqk4coJmJZXR1YaBPP3MWs8BdXYhQYztt2KkBJS6kAy8-5T0nBQ-X3MepICMeqqWgNHmRnLCK&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3200&photoreference=Aap_uEDa23LTa0OAkg8TcXKfnSlAaAJd4hkHSbl1I_QJog0coc1poPDGXl7CC93QZQnjr1KRJj-KlwMETo7wePH9BF9QRrvq6OYOCYD4dBjfxisGQWlx1xIKqu3RV25SGdEwOiEDX2TzsIOWpUWDWavGwNCctK9gzVXQbPjyYmWNhMCh9ucn&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "196 Piccadilly, St. James's",
      postalCode: "W1J 9DY",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.1,
    info: "N/A",
  },
  {
    name: "Seven Dials",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEARJ94j3gDhkqZSl-iNKGcbIQMxUSAt0H4a_zJEaAJqQeosUtkorGtPrNlVMs4NPvSRoqW1wufvp698gQ4Zhdvglgntnd575dn3Xhngh4zwuJcphvk1QhIPXUNUOTpBeI1qJgSkIAZX-jrxoHPP6LhiGqFdjZ8kcq7opCpjIj3YfSzC&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5120&photoreference=Aap_uEBdPB5Q4jJI8QOiRv6hSKufELlIlPp-GT_Kd-3q9XVG2GR1jPsv1SJbHIe8jLitvO7BUwGMlxitcMFF4Dje88aIz2ByA0Y6nn3EdKEuzHcLsuQXaSl4nKitD233uhpG6RKYkGmKWwnb6QA7ZUXz5tvctV-m_q0D60-wVRV_zxaQnwLf&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
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
    name: "Rathbone Square",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uECUYz90t2hp3tqHCFPJXN8wNrAP_GNeoBdMyInFUMbyuWExEzeVdR09OotneH2gP0IH3qo-W-IL29hmU3P49smy4oP-st0zP78YpVn11O04GUcTsdcBLlnL7dgsdXSiAwxWMc-ZoHlHxaDryyfanbtfGy6QMv7ZCGPHxVvyPtXTOQQy&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "1 Rathbone Square",
      postalCode: "W1T 1PB",
      city: "London",
      country: "UK",
    },
    keywords: [
      "shopping_mall",
      "park",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "http://rathbonesquare.com/retail/",
  },
  {
    name: "Oxo Tower Wharf",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4608&photoreference=Aap_uEArH0z9QluS_D7yzJ47OeDGD0Tv7uN7_mi6No02grUcuARc2d0OUH1ReB0DZ3ptMtfou4r5jOjw52oOpsL1XFP99kH1t48HRgm8icGs0kn76AaZAHZ2Ych9I_tm3u0hm1GigL7ag-VS8QqK0skAtfj65wqC76ZqkWTxiBwJeKaNc14p&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Barge House St",
      postalCode: "SE1 9PH",
      city: "London",
      country: "UK",
    },
    keywords: [
      "shopping_mall",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "http://www.oxotower.co.uk/",
  },
  {
    name: "Regent's Place",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2000&photoreference=Aap_uECZhf4B6XWLmqWmo7A6Q78FrcZKQf94EHofDytxn4y-CaK2HHlsYtjF_f0u5td93kGlDIaS6mfia05IAjtWupF3cSx22o6F801eQkrKvle70A7Px9jbuz27SU8qLw0jypzphm7m-0nabyL5C4Pdp8DWcroWoyeBpzSS3Ox6k8b1fwjd&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "80 Victoria St",
      postalCode: "SW1E 5JL",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 5,
    info: "N/A",
  },
  {
    name: "Victoria Place",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference=Aap_uEBAJQxj0NZMHDiH0uUkOFm2nTuTWDge7H1TLfwqjAxQmtM6KShUfJnFtDDcUouEVzv9Ao0b09pkwvxAxdyGQfBF7m0s_rTQ3QEA0T69M6QcqCTYRyKKupgFD5w1XX0_RrIbdm87B-ljSvCm8XqFTsjjpt1cSVM6gDiT4HQ3D_zkZqed&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "115 Buckingham Palace Rd",
      postalCode: "SW1W 9SJ",
      city: "London",
      country: "UK",
    },
    keywords: ["shopping_mall", "point_of_interest", "establishment"],
    rating: 4.1,
    info: "http://www.victoriaplace.co.uk/",
  },
  {
    name: "Old War Office Building",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2250&photoreference=Aap_uECp70MfALvdZUXQr8bN0nLZl1evQJPoviUdUs_0aaz1VsZy7n1SPxTqVH31YOM9I1GabizeflG2Q_UKjZG82CpD1ZlFrk8_82pJA0x3L9kint6ggnPL_otDrbDxtlvrOWyww8E0sdzhcnHQB0Wc_0jGu9Cje7Is4Br_oq-P6auKCbXV&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Whitehall",
      postalCode: "SW1A 2EU",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "premise",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "N/A",
  },
  {
    name: "Theatre Royal Drury Lane",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEBmoPCGAj7y8ShfgR48aU5IhUpR1MeNNXsd-wBOLQrg24yv-50e6PF0s_0wPHubeCZzBDGTo2MjY_C510LYLJWt_aGAaVqJfVjpPwK-piO5emoOlGd-eBlKI_SOsTlSN5hao7zo7GYzpDwHIaUGtNS5_-RMjR_4eq6804GrtMw2kn0_&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Catherine St",
      postalCode: "WC2B 5JF",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.6,
    info: "https://lwtheatres.co.uk/theatres/theatre-royal-drury-lane/",
  },
  {
    name: "The British Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3264&photoreference=Aap_uEDbOGSSs4bnQ53-NEK0he7etwyRBlzh4cLJok_Cxokw8HPjq-Y9eLplP_DVDwx5927Iv2LjbunjFj2pI2DueVplyUktCsLDNXYB4QhZKGA_ClIL92Tjj5vrs9WJdtA7Emjj3SnZ7JAKVP4Swa45zVihNFY92tP76RKVpi-cichEhquH&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Great Russell St",
      postalCode: "WC1B 3DG",
      city: "London",
      country: "UK",
    },
    keywords: [
      "museum",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.7,
    info: "https://www.britishmuseum.org/",
  },
  {
    name: "Churchill War Rooms",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEAzpLpAEotfHlq82_PJnQXhZi4a-JJk31s-rP_8j3kirBMbKgXmQh_6nrjcNK0Gu8dSd93rAsU9wGP42B1OjxjyuyAd9TFZd3UzchszFDJ3PQwM5qL-vMuhx2EN9Q7rwX3OPAnvOIhV2z8JhlZ4DSB0QwKHCzgk2sBqOTUEMCoHbCAC&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Clive Steps, King Charles St",
      postalCode: "SW1A 2AQ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "cafe",
      "museum",
      "food",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://www.iwm.org.uk/visits/churchill-war-rooms",
  },
  {
    name: "Statue of Oliver Cromwell, Westminster",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1816&photoreference=Aap_uEB0Ee8Y1t__xC66q72dYzcNC435ErU3ExrLkJcnu6_WoOgnKEJexrPFQMtHnqOsVmw8VNycahtg3C8rAwI-YKooQ5lApXuqrwHO_jsZca6kIyjNNGnrJZzkGtotjNwhdmDsn7mZjHziThdY9eJHyMr8NqvVDqIr38ljtMEH2LRlyhIm&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "2 St Margaret St",
      postalCode: "SW1P 3JX",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 3.8,
    info: "https://www.westminster.gov.uk/",
  },
  {
    name: "Flanders Fields Memorial Garden",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uECvlDZ4H6T4DBsmdB3YaF-1smpY6YX98C0S0B9fl9c6OEf65CKXlml40gEEQedjKhmCfkemLYn97N5D64XnqiAh2QIeNqnuJrG8bdzB0H-266tdVR9V_82ZTS2HLCBTCuId5jWH8pyj2thMKmRDsNuD1_2XxCJeNN75Ao-EfSI7071K&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Westminster",
      postalCode: "SW1H 9EX",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.6,
    info: "N/A",
  },
  {
    name: "SEA LIFE Centre London Aquarium",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEArTywKjH7xVkh6EVm2G1EBbxYezlkEtFRoWy64UJMXcDnd30WdHEgQcSSDtDqNZ11TMQvKxIRky__Gx4UaobT51hD3r3vBRVweAyKjQphN_VPV8Bj7trozyOXmVgkhZOaNfMLKNqpCQRCaoqyuckYodziSEPjk_dMOOCC7EIyBNh6m&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Riverside Building, County Hall, Westminster Bridge Rd",
      postalCode: "SE1 7PB",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.3,
    info: "http://www.visitsealife.com/London/",
  },
  {
    name: "lastminute.com London Eye",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2844&photoreference=Aap_uEDTWCwRyndEQLospSme5-PHg_RyBFoyKsTrlLbjYCsKhAY_dgXLPkCTwleQGlA1jeWeDZ-pfJmxw18nZO70VGh2nD5y-4_xy31wvrQQOUfpzdId6q6rW0w82Fwsiu03SfuPzvTqjBVyIYXfSALgUMnp5TP4du8EvB8aqEEP3IbBc-2o&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Riverside Building, County Hall",
      postalCode: "SE1 7PB",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.5,
    info: "https://www.londoneye.com/",
  },
  {
    name: "h Club London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uEDDuBSchjQBnRHCCNpqVlK8Ry6O2NJgEtaU6vt_85G_I1YZDmc8qsbuPqu7F9YWrg-EcyAziH-1_N35_J3wHm-DKLqNsI8-m99LtNxkh1XI-dD2bg_EVQ3OrSlnLntATHREdFhykKFnHadld3f63knToRMPRwLhI9GE0M9G-KYf7mcq&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "24 Endell St",
      postalCode: "WC2H 9HQ",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.5,
    info: "N/A",
  },
  {
    name: "Bomber Command Memorial",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=8883&photoreference=Aap_uEC_n6OyemVpSegeCIgrT14WfNacKL6mnO5XRHGyLmUopffWnbUZML-gRmcLeAiTuNJXzIJQ8Uwcu4Rmn1QUKgiIKCGmFyxyXROKfa5qQGnx_Xe5zkHp4rFawOaWLlLgMIBH-WbsJANV8pOp4C7X1TWpduZoJAlH5qEda_DuRqOcYSif&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Green Park along, Piccadilly",
      postalCode: "W1K 1QZ",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.7,
    info: "https://www.rafbf.org/bomber-command-memorial",
  },
  {
    name: "Liberty London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference=Aap_uEAGQAhwNnfXvm7dp_6-CjlJAI0pJC5lCltzF3w3W12Sw6_RRytUW644BdPp2lYCGlK0kpQp4CFRvBivr_qf3eUVavMkWAUQtSgsQWKSAf9nbj780Dka0PyAEkyNdbJI522MvcrnlRn1wD_sSkJ_pI7JzWVkeRgDE_WWMVGx5KB7CIBK&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Regent St, Carnaby",
      postalCode: "W1B 5AH",
      city: "London",
      country: "UK",
    },
    keywords: [
      "department_store",
      "beauty_salon",
      "hair_care",
      "tourist_attraction",
      "spa",
      "restaurant",
      "food",
      "health",
      "point_of_interest",
      "clothing_store",
      "store",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.libertylondon.com/",
  },
  {
    name: "Buckingham Palace",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=12000&photoreference=Aap_uEBts19ROFTm8PmJhM9OO3pzUjg4D4T1ZEPOs4nywtRXyablDhc33R0QmyQ6TB28kGhS7l_Aa7or1cVjglDnWo6NoRdNRUrXXCnkMIJa7sam8Rp5ShRA7UNwuZwBZK8bvMd1LG8cD-XdAEmVYmQDJyx4NIyFKlExYPgs_PHRCSf42j_C&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Buckingham Palace",
      postalCode: "SW1A 1AA",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "premise",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.royalcollection.org.uk/visit/the-state-rooms-buckingham-palace",
  },
  {
    name: "Westminster Abbey",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uEA-fKzAqyOcupCqu0iyf7YxssCXaEaigAX1CSYOuaSajKvCUK44wCT3o7bpurQ04MLa-UnbsYctVC2gmxul6RhwWFQDogEDD4t-abKWkqMeO5wBVlbkoEWSFLy_hOawzotP_lMGCXjZ_5gKqw6gW--GzQSlHJzWO5U1lQDApbvHeVBv&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "20 Deans Yd",
      postalCode: "SW1P 3PA",
      city: "London",
      country: "UK",
    },
    keywords: [
      "church",
      "tourist_attraction",
      "place_of_worship",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://www.westminster-abbey.org/",
  },
  {
    name: "Machine Gun Corps Memorial",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4777&photoreference=Aap_uEAwHyH0syEnGvvq09tibNSZprXT_0Lk7_XdTwSg1OneErMiO5YesiexoQifcQrknwFD6jqQ-SrPVzgV8eEVM7U_eP14tj2Pv0YcmZMgTPz3JKuiXgLP9fT2lHDXf2ajgovElqufU0B_09sAdoDoQMlYPtsFGvg9RAzMu2bLtuYzbNv6&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "4 Duke of Wellington Pl",
      postalCode: "SW1W 0QH",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.4,
    info: "https://www.english-heritage.org.uk/learn/story-of-england/20th-century/london-wwi-memorials/",
  },
  {
    name: "Big Ben",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=Aap_uEDUeh1N-kDI765kZLkhVD0D5wc6rW4qb8sYgF-iaAEIShefQ_tR-e4KCaB0RC3_llQzhvBOV1mmf0vQPKwJzpSCksG6FPaWw7TGxYWxkK1_S6TngBe8OwE-c_FftI2hqQ0gFWg27FXyExRpxVE5nw3CZao79ODtYCn-hajbe4asH526&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Big Ben",
      postalCode: "SW1A 0AA",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "premise",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "https://www.parliament.uk/bigben",
  },
  {
    name: "Somerset House",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEAPvF8kPO6UO-0bmmDA6kMK0E5-L6JXrw2g7Qj5r5tPmUC23oEjNcxmjt0JRr6PpgVFaXw1hPWOnKRrEjTMFZe30qHzaiPC34wF8-bBTcbM6ItV2iBrn2IK1bSq67stSTtiAQR00-n9GQ16dC804Rp1gBIXXT3hInrueKlBvITWjg9b&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Strand",
      postalCode: "WC2R 1LA",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "N/A",
  },
  {
    name: "The Dungeons London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&photoreference=Aap_uEBpIPyNT_DrEypst9Tp3_5mKctRuzrOAjEOCSCr4AIOscddxsNyPDIoSIP01PXyeJ_F06LJ8QDxHqLE0cHogJk4-9MqvjtN5I-6P3qvIwggU3e__JhLxjzyYT0tMCqjHYmkUxXf9L_GxBnzsQeeYbQHPM-oAriRHYjwM-rc9ONUEwpZ&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "The Queen's Walk",
      postalCode: "SE1 7PB",
      city: "London",
      country: "UK",
    },
    keywords: ["tourist_attraction", "point_of_interest", "establishment"],
    rating: 4.3,
    info: "https://www.thedungeons.com/london/en/",
  },
  {
    name: "Sir John Soane's Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5457&photoreference=Aap_uEBF4TJWYPkvvgCRXHYa3PCwPx1_qWdN_xhaI7zc1szgJBzcoYSv7YjX4OEcCWZTW1WnoWoP3slg7Rw7PUmqVUuEXZ5CjzE1jJmYWA3Vz_fmuqSC1JxeIHyIe3r1ul9ex1kHBBXti-KHb2nLeyJSgZa2surMQFAqtiLsf0gTCG0yuUel&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "13 Lincoln's Inn Fields",
      postalCode: "WC2A 3BP",
      city: "London",
      country: "UK",
    },
    keywords: [
      "museum",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://www.soane.org/",
  },
  {
    name: "Jewel Tower",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uEBbISjdLmSSCecNm69YUKIp4CqvtqBXa5TSccxcJYaOkZULZ4KskfIvhWLlSsw57aklC5GEAHHoe6BUlfT8JSQtcHmNty0F-KmcM-ObM4IDIGy899ejQvH_eZrRXF4Mw8rsnj0-XlBEyjbGuxZteIUT3xNTCAzHToBe5MRD9M44trxI&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Abingdon St",
      postalCode: "SW1P 3JX",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "http://www.english-heritage.org.uk/visit/places/jewel-tower/?utm_source=Google%20Business&utm_campaign=Local%20Listings&utm_medium=Google%20Business%20Profiles&utm_content=jewel%20tower",
  },
  {
    name: "Imperial War Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&photoreference=Aap_uECBWNim9Tt_a5R5h3nGe3epa0tNVUw1fKP5IE_GUwxWpRLBoswdY472KoMA05O8idm15qd5EHtkq5zfgD8Q7W3BAWVjBFifdE6NpC3grjjcS5VIhAsC12tEzwAT6AzC-zfhfq98Pd5IcCfR0eC7RUE-CNBggS3uHS-9Hc0k52xjzyZy&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Lambeth Rd",
      postalCode: "SE1 6HZ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.6,
    info: "https://www.iwm.org.uk/",
  },
  {
    name: "Benjamin Franklin House",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3120&photoreference=Aap_uEDrQQ5F7sjgCxARCXfTdewLgvzB1r4g4bcax8u7uj8ZQwRlTdRcl5mnfF9TDFvKC10lBlaU8TnRKycEd1ojevQjG9f6AgvyDWiagBPrXrS8Zk7nSPlDF2oSkD5zC5e5Rw_aNAbXDkvl7ijm-5XvY5OuHSnMw4GJoQkz9PeDIA8sIOM-&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "36 Craven St",
      postalCode: "WC2N 5NF",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.1,
    info: "http://www.benjaminfranklinhouse.org/",
  },
  {
    name: "Hunterian Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=640&photoreference=Aap_uECbXu042-ZmzCcgOT7Lve1BkTYPqxDJ_fGYjWWP3Vkn-LnxE7AAE1GS_n-uF9S6zXBckCnYbizLXE3sq-bRaarvxFw9TSOdNNT4s4SuVzsOuuvv7EE9foGjPN9yymPKARyX_TZSnjwC6gRyx5yiSjBrQ1giCRfPMUyAj51LIKGh8cTH&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address:
        "Royal College of Surgeons of 35-43 Lincoln's Inn Fields, Lincoln's Inn Fields",
      postalCode: "WC2A 3PE",
      city: "London",
      country: "UK",
    },
    keywords: ["museum", "point_of_interest", "establishment"],
    rating: 4.6,
    info: "http://www.hunterianmuseum.org/",
  },
  {
    name: "Grant Museum of Zoology",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5032&photoreference=Aap_uEA9f3yECS0Z1OF_PPTqR8h5SixNfIJoPHpCvH-sRMWwbaExzfaT4eJL81HVknyoWmvxuHk86v90C1wJ5B88zGeU4vz3MWnELyvFp7OxBla5ha1SkdO0lMJbav3Yssvcu7Of1yG8CROWJNiY_-vagKRniIFmG1fTyLvrWGDwzYXRXfJP&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Rockefeller Building, 21 University St",
      postalCode: "WC1E 6DE",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.7,
    info: "https://www.ucl.ac.uk/culture/grant-museum-zoology",
  },
  {
    name: "Camera Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=980&photoreference=Aap_uEDShisdEuiNcEUC9pEdQqwuBHoOhcPXFh58l53Ug6Bfdg3ML1Gr9PTo64adL0JHrbQYTI1NZFCF0KpjrmYH7jBSUbuwcAI3JCtPrwEdQrrMvzQ2HNv2G6c5LgVAvKOkzLO6OF2e4Cy1GjHUUqHo-ia2bNSYufeJm8_9rRs7-IK_xOdG&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "44 Museum St",
      postalCode: "WC1A 1LY",
      city: "London",
      country: "UK",
    },
    keywords: [
      "bakery",
      "tourist_attraction",
      "cafe",
      "museum",
      "electronics_store",
      "home_goods_store",
      "restaurant",
      "food",
      "point_of_interest",
      "store",
      "establishment",
    ],
    rating: 4.5,
    info: "https://www.cameramuseum.uk/",
  },
  {
    name: "The Cartoon Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3648&photoreference=Aap_uECKEWqG-RtvBStZEbufROQa5UTB_gW0CYU3Eutv5Z7RP37UwaPPdsfZ2IxzndU2jlKWUqyS3ZsiaDVcTDWrGIB3_6ISCBKnw3Iir7c5Aij6fd67JbBD0m8grJLS2jnX0wXZ5IrAF6rKXXb9em_xN7_j78U6tH6SbZDUPM6YC_iGGtBP&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "63 Wells St",
      postalCode: "W1A 3AE",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4,
    info: "http://cartoonmuseum.org/",
  },
  {
    name: "The Guards Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3456&photoreference=Aap_uEBmIUnwFai_daROIvQ8QNAn7xmIwr5Mt-LpTZn4WqDfOipCAXJGrtzJOfB1_THeENIeMeplWAhndO3VNs-l8SwM0W109dz0jekIajue9EEYh4VK9Ek_sI5T3g6PlCwUvvADdVC5AUKc1P97Hw1S16k7MnJ8sOuYz5ew8xmb8OpQjjJU&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "Wellington Barracks, Birdcage Walk",
      postalCode: "SW1E 6HQ",
      city: "London",
      country: "UK",
    },
    keywords: [
      "museum",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.3,
    info: "http://www.theguardsmuseum.com/",
  },
  {
    name: "Spencer House",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1439&photoreference=Aap_uED_VWB1-PW219qKpQCjKLmcyTgK08h7kXWjiZESIp8DVIEb-Cg8ifMWP1sq8UpMcqukyxQ06Zc4DBPqud-PmEV7CyuQsPbimpI2p8N4t_sK2XKR8NeJosilz-OaWnByZJLFdmLlnH1odP7oynutbVbXTcLpIiDSYhQsKv0H49RNLn5z&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "27 St James's Pl, St. James's",
      postalCode: "SW1A 1NR",
      city: "London",
      country: "UK",
    },
    keywords: [
      "tourist_attraction",
      "museum",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.5,
    info: "http://www.spencerhouse.co.uk/",
  },
  {
    name: "Handel & Hendrix in London",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2000&photoreference=Aap_uEAJOuzaQJIscuj_L6NqCYDBdbz1Gdv6-s6pykJ54AwAXBXyJuwmCQA2anazZ3AgOLWgFBsdxBGZNLicoRf0MarU9X5GXNcCxByQT_E1E-RWxg8KvXWYWm3BZc--9yGPjcYXkZS6hNxo4qhNxwGFplngt3zjKQLMTbZ5v0jNjZXgmMo7&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "25 Brook St",
      postalCode: "W1K 4HB",
      city: "London",
      country: "UK",
    },
    keywords: ["museum", "point_of_interest", "store", "establishment"],
    rating: 4.5,
    info: "https://handelhendrix.org/",
  },
  {
    name: "Florence Nightingale Museum",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3648&photoreference=Aap_uECEoJ7gHKF8BNQ1SYmQ7L7YfkQDwgpaV62L0-lSj80zFnoOVG5FgU-tIiCwdf5PA5ilZeRtboc2HVyhKwP35IkgpXp_pVpaYeC0mkeIgppRfGNJRTPYSqCXFJNoVrIFJdXOWpAUBqnqdSC2xSRZGO3l3u9lobs7mSzNckgNmbFlNFec&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "2 Lambeth Palace Rd",
      postalCode: "SE1 7EW",
      city: "London",
      country: "UK",
    },
    keywords: [
      "museum",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.3,
    info: "https://www.florence-nightingale.co.uk/",
  },
  {
    name: "Dr Johnson's House",
    image:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2260&photoreference=Aap_uEAUKdlazQYJpcE_KoYA9MuYjLohZegAH5CAwxFqOD9uhuxhFfc816UxtthImXMQp_gTvt7so2yh1QrN8M0uY9rvoeaOFUsf2WSXwQNM4xfu8ELAoAb8FJ5Giofz9ZjKE-fdcE2dKooeB3rzEL5VIfKrHZTiQExyXt44Wlhj60GO0hGA&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
    location: {
      address: "17 Gough Square",
      postalCode: "EC4A 3DE",
      city: "London",
      country: "UK",
    },
    keywords: [
      "museum",
      "tourist_attraction",
      "point_of_interest",
      "establishment",
    ],
    rating: 4.4,
    info: "http://www.drjohnsonshouse.org/",
  },
];
export default places;
