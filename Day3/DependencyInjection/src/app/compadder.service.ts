import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentFactory } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';
import { OtherFoodComponent } from './other-food/other-food.component';

@Injectable({
  providedIn: 'root'
})
export class CompadderService {// Component Adder

  factory: ComponentFactory<any>;
  viewRef: ViewContainerRef;
  constructor(private factResolver: ComponentFactoryResolver) { }

  setViewContainerRef(view: ViewContainerRef) {
    this.viewRef = view;
  }

  addComponent(type: string) {
    this.viewRef.clear();
    if (type === 'pizza') {
      this.factory = this.factResolver.resolveComponentFactory(PizzaComponent);
    } else if (type === 'pasta') {
      this.factory = this.factResolver.resolveComponentFactory(PastaComponent);
    } else {
      this.factory = this.factResolver.resolveComponentFactory(OtherFoodComponent);
    }
    this.viewRef.createComponent(this.factory);
  }
}
