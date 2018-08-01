import { NgRedux, select } from "@angular-redux/store";
import { Component } from "@angular/core";
import { Events } from "ionic-angular";
import { Observable, Subscription } from "rxjs";
import { AppState } from "../../../../reducers/reducers";
import { BudgetToolActions } from "../../budget-tool.actions";
import {
  IBudget,
  IBudgetCard,
  IBudgetPeriodData,
  IBudgetViewMeta,
  ICustomBudgetCard
} from "../../budget-tool.models";

@Component({
  selector: "budget-card-list",
  templateUrl: "budget-card-list.html"
})
export class BudgetCardListComponent {
  @select(["budget", "view", "meta"])
  viewMeta$: Observable<IBudgetViewMeta>;
  cards: IBudgetCard[];
  cardSubscriber: Subscription;
  periodData: IBudgetPeriodData;
  type: string;

  constructor(
    private NgRedux: NgRedux<AppState>,
    private actions: BudgetToolActions,
    private events: Events
  ) {}
  ngOnInit() {
    this._addSubscribers();
  }
  ngOnDestroy() {
    this.cardSubscriber.unsubscribe();
  }

  // check if the given time period index exists on budget data and card type within period
  // if not intialise values
  _checkBudgetDataPath(periodIndex, type) {
    const budget: IBudget = this.NgRedux.getState().budget.active;
    if (!budget.data[periodIndex]) {
      budget.data[periodIndex] = {};
    }
    if (!budget.data[periodIndex][type]) {
      budget.data[periodIndex][type] = {};
    }
    this.actions.setActiveBudget(budget);
  }

  // every time view changed recalculate what should be shown
  // *** could be optimised better but multiple subscribers proves difficult
  _generateCardList(type: string, periodIndex: string) {
    this.type = type;
    try {
      const periodData = this.NgRedux.getState().budget.active.data[
        periodIndex
      ][type];
      this.updateCardList(periodData, type);
    } catch (error) {
      this.updateCardList({}, type);
      //no data for period, initialise default set
    }
  }

  // watch for updates to custom cards and add to list accordingly
  // triggered from events as the new card builder is launched as a model and doens't update state
  _addSubscribers() {
    this.events.subscribe("customCards:updated", () => {
      console.log("custom cards updated");
      this.updateCardList({}, this.type);
    });
    this.events.subscribe("load:budget", () => {
      this._generateCardList("enterprises", null);
    });
    // when view changes (e.g. activity list -> outputs list) want to check path exists to populate data
    // and update cards list
    // use events redux alone fails to trigger uipdate when period index changed
    // but type remains (e.g. activity 1 => activity 2)
    this.events.subscribe("cell:selected", meta => {
      this.cards = [];
      this._checkBudgetDataPath(meta.periodIndex, meta.type);
      // when type specified add subscriber to the list of cards (including updates to custom)
      // to generate list on update
      this.cardSubscriber = this.NgRedux.select([
        "budget",
        "meta",
        meta.type
      ]).subscribe(cards => {
        console.log("cards updated", cards);
        this._generateCardList(meta.type, meta.periodIndex);
      });
      // set view after path checked
      this.actions.setBudgetView({
        component: "cell-edit",
        title: meta.title,
        meta: {
          type: meta.type,
          periodIndex: meta.periodIndex
        }
      });
    });
  }

  // when the related budget period is updated want to filter all cards by type and update which
  // are already selected and any other meta data (e.g. input quantities)
  updateCardList(data, type) {
    if (data && type) {
      console.log("update card list", type);
      const allCards = this.NgRedux.getState().budget.meta;
      // replace consumed cards with outputs (allow full list in case of consumption before full output harvested)
      if (type == "produceConsumed") {
        type = "outputs";
      }
      // use timeout so that cards can be properly destroyed and not repopulated if same field selected in different time period
      setTimeout(() => {
        // update cards according to what is saved
        if (Object.keys(data).length == 0) {
          // when no data return full set
          this.cards = [...allCards[type]];
        } else {
          this.cards = allCards[type].map(c => {
            return data[c.id] ? data[c.id] : c;
          });
        }
      }, 100);
    }
  }
}
