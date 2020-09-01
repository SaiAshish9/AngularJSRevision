import { NgModule, Component, OnInit } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRoute,
  Router,
  Params,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  template: `
  <button class="btn btn-primary" (click)="submit()">Home</button>`,
})
class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  paramsSubscription: Subscription;

  ngOnInit(): void {
    // this.paramsSubscription = this.route.params.subscribe((params: Params) => {
    //   console.log(+params['id']);
    // });
    console.log(this.route.snapshot);
  }

  //  this.route.params.subscribe((params:Params) => {
  //  this.user.id = params['id']
  //  })

  submit() {
    this.router.navigate(['test/1/2'], {
      queryParams: { page: 2, name: 'new' },
      fragment: 'loading',
    });

    //  this.router.navigate(['servers'], {
    //  relativeTo: this.route
    //  })
  }
}

@Component({
  selector: 'test',
  template: `
    <div>
      <h1>Test</h1>
    </div>
  `,
})
class TestComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(
      this.route.snapshot.params,
      this.route.snapshot.paramMap.get('id'),
      this.route.snapshot.paramMap.get('username'),
      this.route.snapshot.queryParamMap.get('page'),
      this.route.snapshot.fragment
    );
  }
}

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: HomeComponent,
      },
    ],
  },
  // {
  //   path: 'home/:id',
  //   component: HomeComponent,
  //   // children: [
  //   //   {
  //   //     path: ':id',
  //   //     component: HomeComponent,
  //   //   },
  //   // ],
  // },
  {
    path: 'test',
    component: TestComponent,
    children: [
      {
        path: ':id/:name',
        component: TestComponent,
      },
    ],
  },
];

// {path:'followers',component:Component}

// '**'->NOt Found
// represents remaining routes
// should be at last remaining routes
// <router-outlet></router-outlet>
// routerLink="/routers"
// routerLinkActive="active current" css class of selected links
// SinglePageApplications a single page is downloaded from server and as user
// moves from one page to another only content of current page is downloaded

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
