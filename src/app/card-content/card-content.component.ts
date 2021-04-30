import { Component, Input } from "@angular/core";
import { CardTemplateBaseComponent } from "../card-template.component";

@Component({
  selector: "my-card-content",
  templateUrl: "./card-content.component.html",
  styleUrls: ["./card-content.component.css"]
})
export class CardContentComponent extends CardTemplateBaseComponent {
  @Input() data: any;
}
