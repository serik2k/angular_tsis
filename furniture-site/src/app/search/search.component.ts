// import { Component, OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';




// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   standalone: true,
//   imports: [RouterModule, FormsModule ], 
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {

//   searchTerm: string = ''; 

//   constructor(private route: ActivatedRoute, private router: Router) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       if (params['searchTerm']) {
//         this.searchTerm = params['searchTerm'];
//       }
//     });
//   }

//   search(): void {
//     if (this.searchTerm) {
//       this.router.navigateByUrl('/search/' + this.searchTerm);
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FurnService } from '../services/furn/furn.service'; // Ensure this import is correct
import { Furn } from '../shared/Furn'; // Ensure this import is correct

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  styleUrls: ['./search.component.css'],
  imports: [FormsModule, CommonModule],
})
export class SearchComponent implements OnInit {
  searchTerm: string = ''; 
  furns: Furn[] = []; // Array to hold search results

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private furnService: FurnService // Inject the FurnService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        this.searchFurns(); // Call the search method when params change
      }
    });
  }

  search(): void {
    if (this.searchTerm) {
      console.log(`Searching for: ${this.searchTerm}`);
      this.router.navigate(['/search', this.searchTerm]); // Navigate to the search route
    }
  }

  searchFurns(): void {
    this.furns = this.furnService.getAllFurnBySearchTerm(this.searchTerm);
    console.log(`Furns found: ${this.furns.length}`); // Log how many results are found
  }
}

