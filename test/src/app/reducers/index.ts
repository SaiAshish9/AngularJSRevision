import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { loadingReducer } from './loading.reducer';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [StoreModule.forRoot({ ui: simpleReducer, load: loadingReducer })],
  exports: [StoreModule],
})
export class StateManagementModule {}
