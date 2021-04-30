import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CardComponent } from "./card/card.component";
import { CardContentComponent } from "./card-content/card-content.component";
import { LoaderDirective } from "./loader.directive";
import { CardTemplateBaseComponent } from "./card-template.component";
import { CardContentComponent2 } from "./card-content2/card-content2.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CardComponent,
    CardContentComponent,
    LoaderDirective,
    CardTemplateBaseComponent,
    CardContentComponent2
  ],
  entryComponents: [CardContentComponent, CardContentComponent2],
  bootstrap: [AppComponent]
})
export class AppModule {}
