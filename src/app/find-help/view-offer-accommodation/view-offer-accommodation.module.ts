import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ViewOfferAccommodationComponent } from './view-offer-accommodation.component';
import { ReplyOfferModule } from '../reply-offer/reply-offer.module';
import { ViewOfferAccomodationModule } from './view-offer-accommodation.routing.module';

@NgModule({
  declarations: [ViewOfferAccommodationComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    ReplyOfferModule,
    ViewOfferAccomodationModule,
  ],
  exports: [ViewOfferAccommodationComponent],
})
export class ViewOfferAccommodationModule {}
