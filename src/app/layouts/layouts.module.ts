import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalComponent } from './vertical/vertical.component';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, TopbarComponent, FooterComponent, VerticalComponent, DashboardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [LanguageService]
})
export class LayoutsModule { }
