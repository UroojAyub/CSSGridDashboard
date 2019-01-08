import { Component, OnInit, HostListener } from '@angular/core';

declare var $: any;

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.scss']
})

export class GalleryComponent implements OnInit {


  public imgs: Array<any>;
  public imgSelected: string;


  constructor() { }


  ngOnInit() {

    this.imgs = Array.from({ length: 50 }, () => (
      {
        classes: `item h${this.getRandomNumber(4)}  v${this.getRandomNumber(4)}`,
        src: `./assets/imgs/${this.getRandomNumber(12)}.jpg`
      }
    )).concat(Array.from({ length: 10 }, () => (
      {
        classes: `item h${this.getRandomNumber(4)}  v${this.getRandomNumber(4)}`,
        src: `./assets/imgs/${this.getRandomNumber(12)}.jpg`
      }
    )));

  }

  getRandomNumber(limit: number) {
    return Math.floor(Math.random() * limit) + 1
  }

  openImage(src: string) {
    this.imgSelected = src;
    $('#myModal').modal('show')
  }

}