/* Storage strategy
Need offline-first approach and also potentially for users only ever offline.
Data to be updated online also has local copy in storage.data which provides initial population
*/

import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { DataActions } from "../actions/data.actions";
import storageData from "./storage.data";

@Injectable()
export class StorageProvider {
  constructor(public storage: Storage, private actions: DataActions) {}

  // automatically load all data from storage into redux, where not available load from file
  // if local data version > storage then override
  async dataInit() {
    const currentDataVersion = await this.storage.get("_version");
    console.log("current data version:", currentDataVersion);
    console.log("storage data version:", storageData._version);
    this.loadData();
***REMOVED***
  // attempt to load data from cache, if doesn't exist fallback to file
  async loadData() {
    for (const key of Object.keys(storageData)) {
      const data = await this.storage.get(key);
      if (data && data.length > 0) {
        this.actions.loadData({ [key]: data }, "storage");
    ***REMOVED*** else {
        this.actions.loadData({ [key]: storageData[key] }, "file");
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  // standard storage methods
  async get(storageKey: string) {
    return this.storage.get(storageKey);
***REMOVED***

  async set(storageKey: string, data: any) {
    return this.storage.set(storageKey, data);
***REMOVED***
}
