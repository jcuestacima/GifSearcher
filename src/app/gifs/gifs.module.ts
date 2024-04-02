import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsService } from './services/gifs.service';



@NgModule({
  declarations: [HomeComponent, SearchBoxComponent, CardListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  providers:[GifsService]
})
export class GifsModule { }
