import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box
        }
        html,
        body {
          height: calc(100% + 1px)
        }

        body {
          font: 100% 'Arimo', sans-serif;
        }

        .filter-wrapper,
        .keyword-wrapper {
          display: flex;
          justify-content: center;
        }

        .filter-wrapper {
          min-height: 100%;
          flex-flow: column wrap;;
          position: relative
        }

        .keyword-wrapper {
          width: 100%;
          position: relative;
        }

        #keyword {
          border: 1px solid #ccc;
          padding: 10px;
          font: 1.5em 'Arimo', sans-serif;
          width: 50%;
          outline: none;
          transition: border 0.5s ease-in-out
        }

        #keyword:focus {
          border-color : rgba(81, 203, 238, 1);;
        }

        #keyword-button {
          position: absolute;
          right: 26%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.7em;
          color: #8DB9ED
        }

        #keyword-button:hover {
          color: #ccc
        }

        .filter-select {
          width: 50%;
          list-style: none;
          font-size: 1.1em;
          color: rgb(105, 105, 105);
          border: 1px solid #ccc;
          border-top: none;
          /*so things don't jump around*/
          position: absolute;
          left: 25%;
          top: calc(50% + 25px);
          max-height: calc(50% - 15px);
          overflow-y: auto;
          background: #fff
        }
        .filter-select-list img {
          margin-right: 30px;
        }

        .tags {
          font-size: 12px;
          font-style: italic;
          color: #c6c6c6;
          margin-right: 10px;
          position: relative;
          top: -10px;
        }
        .filter-select-list:hover .tags {
          color: #fff;
        }

        .filter-select-list {
          cursor: pointer;
          padding: 5px 10px;
        }

        .artist-name {
          display: inline-block;
          position: absolute;
        }

        .filter-select-list:hover {
          background:  #C0C0C0;
          color: #fff
        }

        .list-highlight,
        .list-highlight:hover {
          background: rgb(55, 55, 55);
          color: #fff
        }

        @media only screen and (max-width: 768px) {
          .filter-select,
          #keyword {
            width: 80%;
          }
          #keyword {
            font-size: 1.3em
          }
          .filter-select {
            font-size: 0.9em;
            left: 10%;
            top: calc(50% + 23px);
          }
          #keyword-button {
            right: 11%
          }
        }

        @media only screen and (max-width: 480px) {
          .filter-select,
          #keyword {
            width: 95%;
          }
          .filter-select {
            left: 2.5%;
          }
          #keyword-button {
            right: 3.5%
          }
        }
    `]
})

export class SearchComponent implements OnInit {
  constructor(
    private searchService: SearchService
  ) { }

  results: any[] = [];
  queryField: FormControl = new FormControl();
  debounceTime: number;

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.searchService.search(query))
      )
      // .subscribe(
      // (response) => {
      // this.results = response;
      // });
      .subscribe((response) => {
        console.log(response)
        this.results = response;
        // results = response;
      });
    // .subscribe(results => {
    //   console.log(results)
    //   this.results;
    // });
  }

}
