import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { IonicPageModule } from "ionic-angular";
import { YoutubePlayerModule } from "ngx-youtube-player";
import { ResourcesPage } from "./resources";

@NgModule({
  declarations: [ResourcesPage],
  imports: [
    IonicPageModule.forChild(ResourcesPage),
    TranslateModule.forChild(),
    YoutubePlayerModule
  ],
  exports: [ResourcesPage]
})
export class ResourcesPageModule {}
