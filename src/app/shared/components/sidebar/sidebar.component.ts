import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardListComponent } from '../../../gifs/components/card-list/card-list.component';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  reloadGifs(tag: string): void{
    this.gifsService.searchTag(tag);
  }
}
