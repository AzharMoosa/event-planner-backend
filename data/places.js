const places = [{
              name: "The Clermont, Charing Cross",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1666&photoreference=Aap_uECdiMr-uzXceVe6G58Jr2QphAbmnZOyLW5Vq8Y0JRt2V-ZpewPblCrBQ_l9YgWafpOhEko1ZtlM9Wzqe3-kaAXGsoFPMr-TuHN3XnfFHD-ypuPTD-pcxxLQ3oZ83ebDb0iMAy1pM8Nq6ivdrX7c8mmx0RmiP-2TzFDAVtuXW3ApwvLr&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "Strand",
                postalCode: "WC2N 5HX",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.5,
              info: "https://www.theclermont.co.uk/charing-cross?utm_source=google&utm_medium=organic&utm_campaign=gmb_website_click",
            },{
              name: "Premier Inn London Leicester Square hotel",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4288&photoreference=Aap_uEBLvhZ3Wq2HCPkKnJuU0XHMp0gbt56WKULRyi6JDXWASFTfOCzr3WkobGqOSVPLe8JSOrbK1ziAB2cq0V1iw39n0hoipiti9Ek1DAKxIb-Ip_bOUTBkczAErh7H7EA5QWic-ovZdTDI4gMme4rqLtZ9j7O8MkvDK2-wcq13-h3UqZBL&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "Queens House, 1 Leicester Square",
                postalCode: "WC2H 7BP",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','restaurant','food','point_of_interest','establishment'],
              rating: 4.2,
              info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-leicester-square.html?cid=GLBC_LONLEI",
            },{
              name: "Covent Garden Hotel",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=8688&photoreference=Aap_uECXmnxX3d9LTCqAcE9hhUxhNga2VJVoie5gNWAgqAiPnoZU1WPxoRTQRBguWY1beHlZ2WAUIr1xqYfaBLIeM-IHSGM_Xwdq5Bf4r32FtMwxobP530oJMP4FT0P2-kX31go9tEdpK_EwdGo1BeE7fwwdCB2O3GkhMQbSaZH0YfhykBg0&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "10 Monmouth St",
                postalCode: "WC2H 9HB",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','restaurant','food','point_of_interest','establishment'],
              rating: 4.5,
              info: "https://www.firmdalehotels.com/",
            },{
              name: "Premier Inn London County Hall hotel",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1500&photoreference=Aap_uEA3pftkn81GP4YEFIa3hvki5i1hQzdIhjexILjd666I9gyf-aS68wJ7BMXqqKVXaIJboHx-n8elm1iAf54eUYUhYeV_zus4pKw2KDMnn1_k9dbRlSdmpUpC5LPx2uzdpfnTqAScZqnBAJEq1iMrQbqghanU2gE6RGfXvRy9ckND-Qj8&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "County Hall, Belvedere Rd",
                postalCode: "SE1 7PB",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','restaurant','food','point_of_interest','establishment'],
              rating: 4.3,
              info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-county-hall.html?cid=GLBC_LONCOU",
            },{
              name: "Hotel Sofitel London St James",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6000&photoreference=Aap_uEB1AAxoC8MF6Ip8gkVfZ8qXM1eXFZaD2rwWGqMjC9G9hDMQyEdxWuuXuSY_CTlXBXxIs1QUMwtfnTqfP617ZWph7n0xBFWbnjIQ-jCugdR-FA_KFWIeFZI6cALyzExIsILt3b3l8i858L3Yy1vMzPqWnx6q2nDthlekPu8Re_04ju0W&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "6 Waterloo Pl, St. James's",
                postalCode: "SW1Y 4AN",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','restaurant','food','point_of_interest','establishment'],
              rating: 4.6,
              info: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=3144&merchantid=seo-maps-GB-3144&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTMwMTE3MjAtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl",
            },{
              name: "Dean Street Townhouse",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3000&photoreference=Aap_uEDjeXzPGWREu6zazVNfTwqMrlI4NYvUhDD6iby1Bvv5xTkMQHxFol0tre_6K7dpWKUi23JUFEUDhDn6C-UAjn3FSzhQ7O2TPT12gS7kJJioPTpIk-6Jt8NFqbdpcfLJTxSgDYdk7prJdrYgbyjB0pujvd4ogGSLVif6LelOGDxnnHbe&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "69-71 Dean St",
                postalCode: "W1D 3SE",
                city: "London",
                country: "UK"
              },
              keywords: ['restaurant','food','point_of_interest','establishment'],
              rating: 4.4,
              info: "http://www.deanstreettownhouse.com/?utm_source=google&utm_medium=organic&utm_campaign=googlemybusiness",
            },{
              name: "St. James's Hotel and Club - Mayfair London",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3991&photoreference=Aap_uECgKfLSfCQmRBXnTF0oD_WRbXH1AgsSn_ZEzlZaVHVezeR5f7n_-2EIa_mZDdlyvMRM16hjuhrLGB0EJHdbPP8jwsXm6fJN--MeevGnkmDFRXm--yxzpjqYro6_je4d1ua3z9dQRY0SYDI45_P0xKt_ZtQB8POrf0qZEGYpHIl5LVfh&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "7-8 Park Pl, St. James's",
                postalCode: "SW1A 1LS",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','restaurant','food','point_of_interest','establishment'],
              rating: 4.4,
              info: "https://www.stjameshotelandclub.com/en/?utm_source=mybusiness&utm_medium=organic",
            },{
              name: "Karma Sanctum Soho London",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uED8VGOorZ2QRSfJNA2TCyx5Zp3Av4DQMdSr2yqY17wnBibQiIwvqRt8xw2iRjtjOSWf50Xs4HcmXMC_k8FvGR0Sq0R2Yy7kg0VmUs4N7SHl_wiHfY1_oc7ddsGBd_XUyK_OaamRlk-owXHtiDKYQ8MhGTycLGwm-xfEyqyCXTyu2f4G&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "20 Warwick St",
                postalCode: "W1B 5NF",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.1,
              info: "https://sanctumsoho.com/",
            },{
              name: "Premier Inn London Waterloo (Westminster Bridge) hotel",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5263&photoreference=Aap_uEAgD7jpGEeCDPFmJbLo2Wyyy3nOYU5ygTRqy7yI9WMKs-QzfDDORWitw6R9kT5uPSbNkpu9sIAbNTPmz9c2tBGhTGNOCneUx8CSLamX_mFW3pgPC73MhTo5K_JV62vfJJk2vrXMSx9lzqe71AwwDAMfFCastbooo4ILbBxrVOI7phSL&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "85 York Rd",
                postalCode: "SE1 7NJ",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','restaurant','food','point_of_interest','establishment'],
              rating: 4.1,
              info: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-waterloo-westminster-bridge.html?cid=GLBC_LONWAT",
            },{
              name: "Thistle Piccadilly Hotel",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3888&photoreference=Aap_uECmk8abgIzMxV05adIVV9kWNWCMFwebYMr8ysmQ5vrgLGjwxaJB9eLgPre6gaSfyoBZHV7saaBTpjE7JV89TxW7EODI3ota8jnou43DS6K2jpwK0Q5RXTtHd5eoY7-z7ZyiWTsGokNOQyH-GAYapyX7U8LtZGSEB22GjXKGDU4WHuJG&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "Coventry St",
                postalCode: "W1D 6BZ",
                city: "London",
                country: "UK"
              },
              keywords: ['lodging','bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.4,
              info: "https://www.thistle.com/en/hotels/london/piccadilly.html?utm_source=google&utm_medium=organic&utm_campaign=gmb_website_click",
            },{
              name: "The Ivy",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4928&photoreference=Aap_uEA3b0FqEeXnRQIPue0XJsevdfMdCLskCinWuj2nhHUXbNSJpT5reV5lGv2aEcj6ubJE6Kh3_TaNw4WAFR_goK8RRMFD-1H4ezHrrDv1Chj7ewm296SXYpg8XhsXKGBUP3Y9EJEGSuzB9mWogiTLSrMVa10OGJkiWJLBnbemvaBFqlDo&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "1-5 West St",
                postalCode: "WC2H 9NQ",
                city: "London",
                country: "UK"
              },
              keywords: ['cafe','bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.5,
              info: "https://the-ivy.co.uk/?utm_source=GMBListing&utm_medium=google-business-listing&utm_campaign=WebsiteHomepageLink",
            },{
              name: "Boyds Grill & Wine Bar",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2560&photoreference=Aap_uECYqSH7bjGG5xTNzQPNIIe2QbQhlZ8VZoGFNwdrqV6W3G2TBSNjAigLAYr3DdcpTRTjFtEjoB7fiF6x-DlME5TvQATzFvzvbGWPlv5XR4iSZ-4FxoYPKyzJARMRWR7LGcIJgkLcXB1Oes7hMuZwOvNvrRia7cUP7O0RbPq-o08t17Ea&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "8 Northumberland Ave",
                postalCode: "WC2N 5BY",
                city: "London",
                country: "UK"
              },
              keywords: ['bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.2,
              info: "http://www.boydsgrillandwinebar.co.uk/",
            },{
              name: "Wong Kei",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4752&photoreference=Aap_uECju8m-98vONWRp9gYTafi-qtKehOr_iAGF91ZvgAjvESNpbq_YAlLKsAWEcF9jgPcrb0Bk0tsYFkZzBNVSNBVihlbg2eF6FqM_16Z00YzweB65yjMz2QNWNpruQxNuf0hwIY68JO2JkZ5zA62F-cgRbcSKmUqN7l6ZK0EsNnJU_LT2&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "41-43 Wardour St",
                postalCode: "W1D 6PY",
                city: "London",
                country: "UK"
              },
              keywords: ['restaurant','food','point_of_interest','establishment'],
              rating: 3.6,
              info: "undefined",
            },{
              name: "Tattershall Castle",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5467&photoreference=Aap_uEBpNb_a06pHtK4kMHSRbdYUPT201KZY0ZN5ALYD_hNAsL0ktflWegMwQ5ca3Oq_edV2cd06wCLC_zeMgEqRawjCQU-Ks4g8iMrhkCn4AgwRgfkKp7U0QJ9CL5XfpjHe6z75CaJjUNBMPT3Fet8Q45wOUdLwwNcQOe960kp7aFlyA-mv&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "Victoria Embankment",
                postalCode: "SW1A 2HR",
                city: "London",
                country: "UK"
              },
              keywords: ['night_club','bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.2,
              info: "https://www.thetattershallcastle.co.uk/home?utm_source=google&utm_medium=local_seo_gmb&utm_content=website",
            },{
              name: "Savini | Criterion",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEDthgWvKO3y6w2mUF7KOMaWXZwVtNbr2i_YNtIIwpCzHExWyLJJIPcWqvixyp4s68BIN1bPNidzLxYSea7UsZ7xvxig4YDrbZK6Zxa8jpHxHG1bFobJ4U0nKKDVWXzhaEGg82MRmx9ZiSMvqIo3TNJ--EnvItxbUJHav7r-UbEW442c&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "224 Piccadilly, St. James's",
                postalCode: "W1J 9HP",
                city: "London",
                country: "UK"
              },
              keywords: ['bar','restaurant','food','point_of_interest','establishment'],
              rating: 4,
              info: "http://www.criterionrestaurant.com/",
            },{
              name: "Rainforest Cafe",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=Aap_uEBpcdPEzK6BrehFUbM0jC8dv5iPI1eeWSD5HT-4dWqwADy_wGb_abtGSG3s9l4SbvbusDvHA1Y-Uu1UxDrsxHj0_YIU_g_BHj5Pb6Pmb02YHjDabMbkvOKv9i8CcM11OidUM6maotnacBzAXLnAiBAjrmx9MIc85z49NUkjRWs1YHvg&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "20-24 Shaftesbury Ave",
                postalCode: "W1D 7EU",
                city: "London",
                country: "UK"
              },
              keywords: ['restaurant','food','point_of_interest','establishment'],
              rating: 3.7,
              info: "http://www.therainforestcafe.co.uk/",
            },{
              name: "Simpson's in the Strand",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2048&photoreference=Aap_uEAzE7bJyWZk61kJDn6xZi983Qa5rvCUxU9oqXOgByPlwOQL5BvYCMFn6EJwsHWldsb5lmV8ZL5ouqwkMNpIpBA6KBKTx_0Num-Vza-o8Xefq-h2Z4vpkY8NUC2EHKoBmCcmhQowHxdSolPmFEH8SqZ3ylh0X_tzvjYKAJ-Sa8Cti-oZ&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "100 Strand",
                postalCode: "WC2R 0EW",
                city: "London",
                country: "UK"
              },
              keywords: ['bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.6,
              info: "http://www.simpsonsinthestrand.co.uk/",
            },{
              name: "Belgo Centraal",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=6144&photoreference=Aap_uEAFnMru8HlzMS3x3YwQOjMT0WBebzpU4gmBQiiigKFRM3EEUIJ1nI1s9qlOtoVEZec94GTDcvmC1OhC0O9oy8ZdDp986VT9_TrybyfQOZDKfrExLH1x2m0ydGXnmgsE73IYj_eAocUiL2mPCdStFW4I2WCVsOnv9hnjqpY5USEW0HBT&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "50 Earlham St",
                postalCode: "WC2H 9LJ",
                city: "London",
                country: "UK"
              },
              keywords: ['restaurant','bar','food','point_of_interest','establishment'],
              rating: 4.1,
              info: "undefined",
            },{
              name: "Hawksmoor Seven Dials",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=Aap_uEDuvHEIZPAU4dF46E3Bhd4MvJCUqGO1c37bIEjma82siFy4s4hltOLOmqhHnKa65UxJkxirFZzIdkL4pA4Y9ml-d7hPhP1_PLbL99szmFPlLUY1zmtwRqzLwIleHxn8XmpvqJKhYDvIaLMNOTRFdhvzcobLZO0qeKda_jxvBGKcm8lX&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "11 Langley St",
                postalCode: "WC2H 9JG",
                city: "London",
                country: "UK"
              },
              keywords: ['bar','restaurant','food','point_of_interest','establishment'],
              rating: 4.6,
              info: "https://thehawksmoor.com/locations/seven-dials/",
            },{
              name: "Veeraswamy",
              image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&photoreference=Aap_uEA8wDLkNdmBQ4vL2_ZIffdYLzP-z706vM6dAmaOXb-MthMjvfZZ4yc5tscvTXjjpF4wnWyx2PaXpWk2k0tSauqG-konmq6HqkOfMrR6_ijvO27CoL0A7RmiQj9e7UCIH3badePVY96A2hY_OkqaZoTaM9tBfF009MXi8F9kD0_sc-8n&key=AIzaSyBHL273BGBeOnlPc_2IF7Pb2WSpnkr_UTY",
              location: {
                address: "Victory House, 99-101 Regent St",
                postalCode: "W1B 4RS",
                city: "London",
                country: "UK"
              },
              keywords: ['restaurant','food','point_of_interest','establishment'],
              rating: 4.2,
              info: "http://www.veeraswamy.com/",
            },]; export default places;