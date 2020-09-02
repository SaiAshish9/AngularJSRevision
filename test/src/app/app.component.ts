import { Component, OnInit } from '@angular/core';
import { FavChangedEvent } from './favorite/favorite.component';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingState } from './reducers/loading.reducer';
import { map } from 'rxjs/operators';

export interface State {
  message: string;
  loading: LoadingState;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test';
  post = {
    title: 'Title',
    isFavorite: true,
  };
  message: Observable<string>;
  count = 0;

  constructor(private http: HttpClient, private store: Store<State>) {
    this.message = this.store.select('message');
    console.log(this.store.subscribe((state) => console.log(state)));
  }

  setA() {
    this.store.dispatch({ type: 'A', payload: this.count });
    this.count++;
  }

  ngOnInit(): void {
    // this.http.get('http://localhost:8080/hellobean').subscribe((data) => {
    //   console.log(data);
    // });
  }

  onFavChange(eventArgs: FavChangedEvent) {
    console.log('Fav Change:', eventArgs);
  }
}
