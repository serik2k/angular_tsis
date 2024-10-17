import { Injectable } from '@angular/core';
import { Furn } from '../../shared/Furn';
import { Tag } from '../../shared/Tag';
@Injectable({
  providedIn: 'root',
})
export class FurnService {
  constructor() { }

  getFurnById(id: number): Furn{
    return this.getAll().find(furn => furn.id == id)!;
  } 
  
  getAllFurnBySearchTerm(searchTerm:string) :Furn[]{
    return  this.getAll().filter(furn =>
      furn.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'LivingRoom', count: 3 },
      { name: 'Kitchen', count: 3 },
      { name: 'Bedroom', count: 4 },
    ];
  }

  getAllFurnByTag(tag: string): Furn[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(furn => furn.tags?.includes(tag));
  }

  getAll(): Furn[] {
    return [
      {
        id: 1,
        name: 'Chair',
        deliveryTime: '10-20',
        price: 140,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'images/furns/chair.png',
        tags: ['LivingRoom', 'Kitchen'],
      },
      {
        id: 2,
        name: 'Sofa',
        price: 205,
        deliveryTime: '20-30',
        favorite: true,
        origins: ['Persia', 'Middle East', 'China'],
        stars: 4.7,
        imageUrl: 'images/furns/sofa.avif',
        tags: ['LivingRoom', 'Bedroom'],
      },
      {
        id: 3,
        name: 'Table',
        price: 120,
        deliveryTime: '10-15',
        favorite: false,
        origins: ['Germany', 'US'],
        stars: 3.5,
        imageUrl: 'images/furns/table.png', // saved images in public, chanched path to images
        tags: ['LivingRoom', 'Kitchen','Bedroom'],
      },
      {
        id: 4,
        name: 'CupBoard',
        price: 310,
        deliveryTime: '15-20',
        favorite: true,
        origins: ['Belgium', 'France'],
        stars: 3.3,
        imageUrl: 'images/furns/cupboard.png',
        tags: ['Kitchen'],
      },
      {
        id: 5,
        name: 'Bed',
        price: 200,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        stars: 3.0,
        imageUrl: 'images/furns/bed.png',
        tags: ['Bedroom'],
      },
      {
        id: 6,
        name: 'NightStand',
        price: 70,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: 'images/furns/nightstand.png',
        tags: ['Bedroom'],
      },
    ];
  }
}
