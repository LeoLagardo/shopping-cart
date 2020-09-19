import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() DarkMode: EventEmitter<any> = new EventEmitter();

  category: string;
  darkmode = false;

  constructor(public shareService: ShareService) { }

  ngOnInit(): void {
    this.shareService.currentCategory.subscribe( category => this.category = category);
  }

  changeCategory(category: string){
    this.shareService.changeCategory(category);
  }

  toggleDarkMode(){
    this.darkmode = !this.darkmode;
    this.DarkMode.emit();
  }


}
