import { dispatch } from "@angular-redux/store";
import { Injectable } from "@angular/core";
import { FluxStandardAction } from "flux-standard-action";
import { ISite } from "../models/models";

type StandardAction = FluxStandardAction<any, null>;

@Injectable()
export class ClimateToolActions {
  static readonly SELECT_SITE = "SELECT_SITE";

  @dispatch()
  selectSite = (site: ISite): StandardAction => ({
    type: ClimateToolActions.SELECT_SITE,
    meta: null,
    payload: site
  });
}