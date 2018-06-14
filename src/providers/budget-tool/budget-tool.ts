import { Injectable } from "@angular/core";
import { StorageProvider } from "../storage/storage";

@Injectable()
export class BudgetToolProvider {
  allData: any;
  budget: any;

  constructor(public storagePrvdr: StorageProvider) {
    console.log("Hello BudgetToolProvider Provider");
    this.allData = allData;
    //load saved cards
    this.storagePrvdr.loadUser().then(user => {
      console.log("user loaded", user);
      this.loadSavedCards();
    });
  }

  loadSavedCards() {
    this.storagePrvdr.getAll("budgetCards").then((cards: any) => {
      console.log("loading saved cards", cards);
      for (let card of cards) {
        console.log("adding type", card.Types);
        card.userGenerated = true;
        this.allData[card.Types].push(card);
      }
      console.log("all data", this.allData);
    });
  }
  loadSampleBudget() {
    return sampleBudget;
  }
}

var sampleBudget = {
  title: "My First Budget",
  archived: false,
  periods: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    starting: "Mon",
    scale: "days",
    total: "6"
  },
  description: "description here",
  enterprise: "livestock",
  scale: "small",
  created: "2017-10-18T09:37:03.311Z",
  id: "-KwipyhEIqwRLbyU3sjF",
  data: [
    {
      label: "Mon",
      index: 0,
      activities: [],
      inputs: [],
      outputs: [],
      familyLabour: {
        people: 0,
        days: 0
      },
      balance: {
        inputs: {
          total: 0,
          dots: []
        },
        outputs: [
          {
            ID: "crop",
            Image: "assets/img/budget/output/crop.png",
            Name: "crop",
            Type: "output",
            consumed: 0,
            cost: "50",
            quantity: "5"
          }
        ],
        consumed: {
          total: 0,
          dots: []
        },
        monthly: {
          total: 0,
          dots: []
        },
        running: {
          total: 0,
          dots: []
        }
      }
    },
    {
      label: "Tue",
      index: 1,
      activities: [],
      inputs: [],
      outputs: [],
      familyLabour: {
        people: 0,
        days: 0
      },
      balance: {
        inputs: {
          total: 0,
          dots: []
        },
        outputs: {
          total: 0,
          dots: []
        },
        consumed: {
          total: 0,
          dots: []
        },
        monthly: {
          total: 0,
          dots: []
        },
        running: {
          total: 0,
          dots: []
        }
      }
    },
    {
      label: "Wed",
      index: 2,
      activities: [],
      inputs: [],
      outputs: [],
      familyLabour: {
        people: 0,
        days: 0
      },
      balance: {
        inputs: {
          total: 0,
          dots: []
        },
        outputs: {
          total: 0,
          dots: []
        },
        consumed: {
          total: 0,
          dots: []
        },
        monthly: {
          total: 0,
          dots: []
        },
        running: {
          total: 0,
          dots: []
        }
      }
    },
    {
      label: "Thur",
      index: 3,
      activities: [],
      inputs: [],
      outputs: [],
      familyLabour: {
        people: 0,
        days: 0
      },
      balance: {
        inputs: {
          total: 0,
          dots: []
        },
        outputs: {
          total: 0,
          dots: []
        },
        consumed: {
          total: 0,
          dots: []
        },
        monthly: {
          total: 0,
          dots: []
        },
        running: {
          total: 0,
          dots: []
        }
      }
    },
    {
      label: "Fri",
      index: 4,
      activities: [],
      inputs: [],
      outputs: [],
      familyLabour: {
        people: 0,
        days: 0
      },
      balance: {
        inputs: {
          total: 0,
          dots: []
        },
        outputs: {
          total: 0,
          dots: []
        },
        consumed: {
          total: 0,
          dots: []
        },
        monthly: {
          total: 0,
          dots: []
        },
        running: {
          total: 0,
          dots: []
        }
      }
    },
    {
      label: "Sat",
      index: 5,
      activities: [],
      inputs: [],
      outputs: [],
      familyLabour: {
        people: 0,
        days: 0
      },
      balance: {
        inputs: {
          total: 0,
          dots: []
        },
        outputs: {
          total: 0,
          dots: []
        },
        consumed: {
          total: 0,
          dots: []
        },
        monthly: {
          total: 0,
          dots: []
        },
        running: {
          total: 0,
          dots: []
        }
      }
    }
  ]
};

var allData = {
  activities: [
    {
      Type: "activity",
      Name: "apply fertiliser",
      Image: "assets/img/budget/activity/apply-fertiliser.png",
      ID: "apply-fertiliser"
    },
    {
      Type: "activity",
      Name: "apply pesticide",
      Image: "assets/img/budget/activity/apply-pesticide.png",
      ID: "apply-pesticide"
    },
    {
      Type: "activity",
      Name: "bagging",
      Image: "assets/img/budget/activity/bagging.png",
      ID: "bagging"
    },
    {
      Type: "activity",
      Name: "compost manure making",
      Image: "assets/img/budget/activity/compost-manure-making.png",
      ID: "compost-manure-making"
    },
    {
      Type: "activity",
      Name: "harvesting",
      Image: "assets/img/budget/activity/harvesting.png",
      ID: "harvesting"
    },
    {
      Type: "activity",
      Name: "land clearing",
      Image: "assets/img/budget/activity/land-clearing.png",
      ID: "land-clearing"
    },
    {
      Type: "activity",
      Name: "marketing and selling",
      Image: "assets/img/budget/activity/marketing-and-selling.png",
      ID: "marketing-and-selling"
    },
    {
      Type: "activity",
      Name: "mulching",
      Image: "assets/img/budget/activity/mulching.png",
      ID: "mulching"
    },
    {
      Type: "activity",
      Name: "ploughing",
      Image: "assets/img/budget/activity/ploughing.png",
      ID: "ploughing"
    },
    {
      Type: "activity",
      Name: "shelling",
      Image: "assets/img/budget/activity/shelling.png",
      ID: "shelling"
    },
    {
      Type: "activity",
      Name: "sowing",
      Image: "assets/img/budget/activity/sowing.png",
      ID: "sowing"
    },
    {
      Type: "activity",
      Name: "storagePrvdr",
      Image: "assets/img/budget/activity/storage.png",
      ID: "storagePrvdr"
    },
    {
      Type: "activity",
      Name: "threshing",
      Image: "assets/img/budget/activity/threshing.png",
      ID: "threshing"
    },
    {
      Type: "activity",
      Name: "transport",
      Image: "assets/img/budget/activity/transport.png",
      ID: "transport"
    },
    {
      Type: "activity",
      Name: "watering",
      Image: "assets/img/budget/activity/watering.png",
      ID: "watering"
    },
    {
      Type: "activity",
      Name: "weeding",
      Image: "assets/img/budget/activity/weeding.png",
      ID: "weeding"
    }
  ],
  inputs: [
    {
      Type: "input",
      Name: "bags",
      Image: "assets/img/budget/input/bags.png",
      ID: "bags"
    },
    {
      Type: "input",
      Name: "chemicals",
      Image: "assets/img/budget/input/chemicals.png",
      ID: "chemicals"
    },
    {
      Type: "input",
      Name: "fertiliser",
      Image: "assets/img/budget/input/fertiliser.png",
      ID: "fertiliser"
    },
    {
      Type: "input",
      Name: "hire ox cart",
      Image: "assets/img/budget/input/hire-ox-cart.png",
      ID: "hire-ox-cart"
    },
    {
      Type: "input",
      Name: "labour - paid",
      Image: "assets/img/budget/input/labour---paid.png",
      ID: "labour---paid"
    },
    {
      Type: "input",
      Name: "manure sacks",
      Image: "assets/img/budget/input/manure-sacks.png",
      ID: "manure-sacks"
    },
    {
      Type: "input",
      Name: "manure wheelbarrows",
      Image: "assets/img/budget/input/manure-wheelbarrows.png",
      ID: "manure-wheelbarrows"
    },
    {
      Type: "input",
      Name: "pot for storagePrvdr",
      Image: "assets/img/budget/input/pot-for-storage.png",
      ID: "pot-for-storagePrvdr"
    },
    {
      Type: "input",
      Name: "protective equipment",
      Image: "assets/img/budget/input/protective-equipment.png",
      ID: "protective-equipment"
    },
    {
      Type: "input",
      Name: "seeds",
      Image: "assets/img/budget/input/seeds.png",
      ID: "seeds"
    },
    {
      Type: "input",
      Name: "sheller hire",
      Image: "assets/img/budget/input/sheller-hire.png",
      ID: "sheller-hire"
    },
    {
      Type: "input",
      Name: "tools",
      Image: "assets/img/budget/input/tools.png",
      ID: "tools"
    },
    {
      Type: "input",
      Name: "tractor hire",
      Image: "assets/img/budget/input/tractor-hire.png",
      ID: "tractor-hire"
    },
    {
      Type: "input",
      Name: "transportation hire",
      Image: "assets/img/budget/input/transportation-hire.png",
      ID: "transportation-hire"
    },
    {
      Type: "input",
      Name: "wood",
      Image: "assets/img/budget/input/wood.png",
      ID: "wood"
    }
  ],
  outputs: [
    {
      Type: "output",
      Name: "crop",
      Image: "assets/img/budget/output/crop.png",
      ID: "crop",
      consumed: 0
    },
    {
      Type: "output",
      Name: "manure for compost",
      Image: "assets/img/budget/output/manure-for-compost.png",
      ID: "manure-for-compost",
      consumed: 0
    },
    {
      Type: "output",
      Name: "money",
      Image: "assets/img/budget/output/money.png",
      ID: "money",
      consumed: 0
    },
    {
      Type: "output",
      Name: "wood",
      Image: "assets/img/budget/output/wood.png",
      ID: "wood",
      consumed: 0
    }
  ]
};
