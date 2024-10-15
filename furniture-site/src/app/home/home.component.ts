import { Component, OnInit } from '@angular/core';
import { FurnService } from '../services/furn/furn.service';
import { Furn } from '../shared/Furn';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';
import { SearchComponent } from '../search/search.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports:[TagsComponent, SearchComponent, NotFoundComponent, CommonModule, StarRatingComponent, RouterModule ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  furn: Furn[] = [];
food: any;
  constructor(private furnService: FurnService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.furn = this.furnService.getAllFurnBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.furn = this.furnService.getAllFurnByTag(params['tag']);
      else
        this.furn = this.furnService.getAll();
    })
  }

}
