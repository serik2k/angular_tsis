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
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/furns/furn-1_1.jpg',
        tags: ['LivingRoom', 'Kitchen'],
      },
      {
        id: 2,
        name: 'Sofa',
        price: 20,
        deliveryTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/furns/furn-2_1.jpg',
        tags: ['LivingRoom', 'Bedroom'],
      },
      {
        id: 3,
        name: 'Table',
        price: 5,
        deliveryTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/furns/furn-3_1.jpg',
        tags: ['LivingRoom', 'Kitchen','Bedroom'],
      },
      {
        id: 4,
        name: 'CupBoard',
        price: 2,
        deliveryTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/furns/furn-4_1.jpg',
        tags: ['Kitchen'],
      },
      {
        id: 5,
        name: 'Bed',
        price: 11,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/furns/furn-5.jpg',
        tags: ['Bedroom'],
      },
      {
        id: 6,
        name: 'NightStand',
        price: 9,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/furns/furn-6.jpg',
        tags: ['Bedroom'],
      },
    ];
  }
}
