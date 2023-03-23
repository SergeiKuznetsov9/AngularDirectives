import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MyColorDirective } from './directives/my-color.directive';
import { MouseEnterEventDirective } from './directives/mouse-enter-event.directive';
import { WithGetDataDirective } from './directives/with-get-data.directive';
import { WithParamsDirective } from './directives/with-params.directive';
import { ConfirmButtonDirective } from './directives/confirm-button.directive';
import { MyCoordinatesDirective } from './directives/my-coordinates.directive';
import { ButtonClickingStyleDirective } from './directives/button-clicking-style.directive';
import { MyDelayDirective } from './directives/my-delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MyColorDirective,
    MouseEnterEventDirective,
    WithGetDataDirective,
    WithParamsDirective,
    ConfirmButtonDirective,
    MyCoordinatesDirective,
    ButtonClickingStyleDirective,
    MyDelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
