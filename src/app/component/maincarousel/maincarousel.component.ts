import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-maincarousel',
  templateUrl: './maincarousel.component.html',
  styleUrls: ['./maincarousel.component.css']
})
export class MaincarouselComponent implements OnInit {

  @Input() images: carouselImage[]=[]
  selectedIndex=0;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
