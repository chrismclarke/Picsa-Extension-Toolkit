import { IData } from "../models/models";

/* 
data in this file is saved locally for retrieval (via storage provider), and the keys
are used to automatically sync data from the live db (via firebase provider)

*/

const forms = [];

const resources = [
  {
    _key: "4I4F36gD0MUef26HfPZG",
    name: "Picsa Manual",
    filename: "picsa-field-manual.pdf",
    type: "pdf",
    image: "assets/resources/picsa-field-manual-cover.png",
    weblink:
      "https://firebasestorage.googleapis.com/v0/b/extension-toolkit.appspot.com/o/Resources%2Fpicsa-field-manual.pdf?alt=media&token=c394b68a-3f67-4494-8620-c35d65151c45"
  },
  {
    _key: "9Pkro1VYBUlwuNg5oHok0",
    name: "Crop Information - Chileka",
    filename: "crop-info-sheet-chileka.pdf",
    type: "pdf",
    image: "assets/resources/crop-info-sheet-chileka-cover.png",
    weblink:
      "https://firebasestorage.googleapis.com/v0/b/extension-toolkit.appspot.com/o/Resources%2Fcrop-info-sheet-chileka.pdf?alt=media&token=cb8a6243-1d37-43f6-a97c-a0a7bc0f11f2"
  },
  {
    _key: "6VjjF3yZJejFigwDIPr8",
    name: "Potential Training Schedule",
    filename: "potential-PICSA-training-schedule.pdf",
    type: "pdf",
    image: "assets/resources/potential-PICSA-training-schedule-cover.png",
    weblink:
      "https://firebasestorage.googleapis.com/v0/b/extension-toolkit.appspot.com/o/Resources%2Fpotential-PICSA-training-schedule.pdf?alt=media&token=618737d1-949b-467a-9f28-1dcc35ce3c8c"
  },
  {
    _key: "AJ8B7Ka0EaTaeWdzChac",
    name: "Seasonal Forecast Blantyre",
    filename: "seasonal-forecast-blantyre.pdf",
    type: "pdf",
    image: "assets/resources/seasonal-forecast-blantyre-cover.png",
    weblink:
      "https://firebasestorage.googleapis.com/v0/b/extension-toolkit.appspot.com/o/Resources%2Fseasonal-forecast-blantyre.pdf?alt=media&token=6ba42494-4c23-409f-ac55-f2fa8b3043ea"
  }
];

const whatsappGroups = [];

// make available as single export so keys can all be taken in one go
// update version number to automatically override old data if this file has been updated in line with live db
// (don't want to automatically pull current version number as then this will override data that is on live db but not downloaded prior to release)
const data: IData = {
  _version: 4010,
  forms: forms,
  resources: resources,
  whatsappGroups: whatsappGroups
};
export default data;
