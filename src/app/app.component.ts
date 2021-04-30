import {
  AfterViewInit,
ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { CardContentComponent } from "./card-content/card-content.component";
import { CardContentComponent2 } from "./card-content2/card-content2.component";
import { CardTemplateBaseComponent } from "./card-template.component";
import { LoaderDirective } from "./loader.directive";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(LoaderDirective, { static: true })
  loaderDirective: LoaderDirective;
  @ViewChild("container", { read: ViewContainerRef })
  private container: ViewContainerRef;

  readonly templateMapper = {
    ZU: CardContentComponent,
    MI: CardContentComponent2
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdRef:ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const manaCode = "MI";
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.getComponentForCardType(manaCode)
    );
    const viewContainerRef = this.container;
    console.log(this.container);
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CardTemplateBaseComponent>componentRef.instance).data = "Content";
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {}

  private getComponentForCardType(cardType) {
    return this.templateMapper[cardType];
  }
}
