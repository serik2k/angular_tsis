import { Component, Input, OnInit } from '@angular/core';
import { FurnService } from '../services/furn/furn.service';
import { Tag } from '../shared/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  standalone: true,
  styleUrls: ['./tags.component.css'],
  imports: [CommonModule, NotFoundComponent, RouterModule]
})
export class TagsComponent implements OnInit {

  @Input()
  furnPageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[];

  constructor(private furnService: FurnService) { }

  ngOnInit(): void {

    if (!this.furnPageTags) {
      this.tags = this.furnService.getAllTags();
    }
  }
}