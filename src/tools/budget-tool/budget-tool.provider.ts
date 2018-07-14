import { NgRedux, select } from "@angular-redux/store";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  FirestoreStorageProvider,
  StorageProvider,
  UserProvider
} from "../../providers/providers";
import { AppState } from "../../reducers/reducers";
import { BudgetToolActions } from "./budget-tool.actions";
import { IBudget, IBudgetCard } from "./budget-tool.models";
import { budgetMeta } from "./data";

@Injectable()
export class BudgetToolProvider {
  @select(["budget", "active"])
  budget$: Observable<IBudget>;
  constructor(
    public firestorePrvdr: FirestoreStorageProvider,
    public userPrvdr: UserProvider,
    private actions: BudgetToolActions,
    private storagePrvdr: StorageProvider,
    private ngRedux: NgRedux<AppState>
  ) {
    this.init();
    this.syncData();
    this.enableAutoSave();
***REMOVED***

  // automatically populate data from storage
  // if first load, populate storage with hardcoded data
  async init() {
    const budgetData = await this.storagePrvdr.storage.get("_budgetMeta");
    if (!budgetData) {
      await this.storagePrvdr.storage.set("_budgetMeta", budgetMeta);
      this.init();
  ***REMOVED*** else {
      this.actions.setBudgetMeta(budgetMeta);
  ***REMOVED***
***REMOVED***

  // automatically save any changes to the active budget
  enableAutoSave() {
    this.budget$.subscribe(budget => {
      if (budget && budget.title) {
        if (!budget._key) {
          budget._key = this.firestorePrvdr.db.createId();
      ***REMOVED***
        this.saveBudget(budget);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

  async saveBudget(budget: IBudget) {
    let savedBudgets = await this.userPrvdr.user.budgets;
    if (!savedBudgets) {
      savedBudgets = {***REMOVED***
  ***REMOVED***
    savedBudgets[budget._key] = budget;
    this.userPrvdr.updateUser("budgets", savedBudgets);
***REMOVED***

  // change single budget key/value
  patchBudget(key, val) {
    console.log("patching budget", key, val);
    setTimeout(() => {
      const budget = this.ngRedux.getState().budget.active;
      if (budget) {
        budget[key] = val;
        this.actions.setActiveBudget(budget);
    ***REMOVED***
  ***REMOVED***, 150);
***REMOVED***

  /*
      The methods below are used to keep firebase data sync'd locally when internet available
      They are the same as firebase and storage provider methods, but included again
      to retain tool independent use and subcollection paths
  */

  // watch afs data endpoints and reflect changes to redux and localstorage
  async syncData() {
    for (const endpoint of Object.keys(budgetMeta)) {
      const collection = this.firestorePrvdr.getCollection(
        `budgetTool/meta/${endpoint}`
      );
      collection.subscribe(data => {
        this.actions.setBudgetMeta({ [endpoint]: data });
        const meta = this.ngRedux.getState().budget.meta;
        meta[endpoint] = data;
        this.storagePrvdr.storage.set("_budgetMeta", meta);
    ***REMOVED***);
  ***REMOVED***
***REMOVED***

  // instead of usual sync from db to local, this can be used to populate the main db from local
  // NOTE, THIS OVERRIDES EXISTING DATA ON MATCH, ONLY USE IF YOU KNOW WHAT YOU ARE DOING
  async populateDB() {
    for (const endpoint of Object.keys(budgetMeta)) {
      const data: IBudgetCard[] = budgetMeta[endpoint];
      data.forEach(datum => {
        const docId = datum.id;
        this.firestorePrvdr.setDoc(
          `budgetTool/meta/${endpoint}/${docId}`,
          datum
        );
    ***REMOVED***);
  ***REMOVED***
***REMOVED***
}
