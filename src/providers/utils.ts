import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  Loading,
  LoadingController,
  LoadingOptions,
  ToastController,
  ToastOptions
} from "ionic-angular";

@Injectable()
export class UtilsProvider {
  loader: Loading;
  constructor(
    public toastCtrl: ToastController,
    public translate: TranslateService,
    public loadingCtrl: LoadingController
  ) {}

  // simple wrapper for ionic toast to allow text translation
  async presentToast(config: ToastOptions, timeout?: number) {
    config.message = await this.translateText(config.message);
    if (timeout) {
      await _wait(timeout);
    }
    this.toastCtrl.create(config).present();
  }

  async presentLoader(config: LoadingOptions) {
    config.content = await this.translateText(config.content);
    if (this.loader) {
      await this.loader.dismiss();
    }
    this.loader = this.loadingCtrl.create(config);
    await this.loader.present();
  }

  async dismissLoader() {
    if (this.loader) {
      await this.loader.dismiss();
    }
  }

  // use translate service to translate strings that will be displayed
  // outside of html templates (where pipe method used instead)
  async translateText(text: string) {
    const translation = await this.translate.get(text).toPromise();
    console.log("translated text", translation);
    return translation;
  }
}
const _wait = ms => new Promise((r, j) => setTimeout(r, ms));
