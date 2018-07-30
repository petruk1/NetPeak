import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FeaturesComponent} from './features/features.component';
import {PressComponent} from './press/press.component';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {HighLights2Component} from './high-lights2/high-lights2.component';
import {VideoTourComponent} from './video-tour/video-tour.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {PricingTableComponent} from './pricing-table/pricing-table.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {TabComponent} from './high-lights/tab/tab.component';
import {HighLightsComponent} from './high-lights/high-lights.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    PressComponent,
    HighLightsComponent,
    GettingStartedComponent,
    HighLights2Component,
    VideoTourComponent,
    TestimonialsComponent,
    PricingTableComponent,
    ContactComponent,
    FooterComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
