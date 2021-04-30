import { Component, Input } from "@angular/core";
import { CardTemplateBaseComponent } from "../card-template.component";

@Component({
  selector: "my-card-content2",
  templateUrl: "./card-content2.component.html",
  styleUrls: ["./card-content2.component.css"]
})
export class CardContentComponent2 extends CardTemplateBaseComponent {
  @Input() data: any;
}
