import { NgRedux } from "@angular-redux/store";
import { Component, Input } from "@angular/core";
import { Events } from "ionic-angular";
import { AppState } from "../../../../reducers/reducers";
import { BudgetToolActions } from "../../budget-tool.actions";
import { IBudgetCard, IBudgetPeriodData } from "../../budget-tool.models";

@Component({
  selector: "budget-cell",
  templateUrl: "budget-cell.html"
})
export class BudgetCellComponent {
  @Input("periodIndex") periodIndex: number;
  @Input("rowLabel") rowLabel: string;
  @Input("type") type: string;
  @Input("typeLabel") typeLabel: string;
  cellData: IBudgetCard[];
  constructor(
    private NgRedux: NgRedux<AppState>,
    private actions: BudgetToolActions,
    private events: Events
  ) {}
  ngOnInit() {
    this._addDataSubscriber();
***REMOVED***

  // bind to budget data entry for specific row index and type (e.g. time period 2 activities)
  // data received converted to array for display
  // *** note, this subscriber only seems to fire once (assumed bug) - leaving for initial load but also added event listener
  _addDataSubscriber() {
    this.NgRedux.select([
      "budget",
      "active",
      "data",
      this.periodIndex,
      this.type
    ]).subscribe(data => this.setCellData(data));
    this.events.subscribe(
      `periodUpdated:${this.periodIndex}-${this.type}`,
      cards => this.setCellData(cards)
    );
***REMOVED***
  setCellData(data: IBudgetPeriodData) {
    if (data) {
      console.log("data update", this.periodIndex, this.type);
      const cards = Object.values(data);
      if (cards.length > 0) {
        this.cellData = cards;
    ***REMOVED*** else {
        // empty should be treated as null (cell has been entered but no data selected)
        this.cellData = null;
    ***REMOVED***
  ***REMOVED***
***REMOVED***

  editCell() {
    this.actions.setBudgetView({
      component: "cell-edit",
      title: `${this.rowLabel} ${this.typeLabel}`,
      meta: {
        type: this.type,
        periodIndex: this.periodIndex
    ***REMOVED***
  ***REMOVED***);
***REMOVED***
}
