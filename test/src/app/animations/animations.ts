import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
export let fade = trigger('fade', [
  state('void', style({ backgroundColor: 'yellow', opacity: 0 })),
  // void -> * :enter
  // * -> boid :leave
  // void <=> *
  transition(':enter ,:leave', [
    // style({ opacity: 0
    //   // , backgroundColor: 'yellow'
    // }),
    animate(2000),
    // * -> default
    // undo all previous styles applied
    // ,style({ backgroundColor: '#fff', opacity: 1 })),
  ]),
]);

export let list = trigger('list', [
  state(
    'in',
    style({
      opacity: 1,
      'background-color': 'red',
      color: 'red',
      transform: 'translateX(-100px)',
    })
  ),
  transition('void => *', [
    animate(
      300,
      keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        style({
          opacity: 1,
          transform: 'translateX(0px)',
        }),
      ])
    ),
  ]),
  transition('* => void', [
    animate(
      300,
      style({
        transform: 'translateX(-100px)',
        opacity: 0,
      })
    ),
  ]),
]);

// group([animate(),animate()])

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-30px)' }),
    animate(500),
  ]),

  transition(':leave', [
    animate(
      '0.5s ease-out',
      keyframes([
        style({
          offset: 0.2,
          opacity: 1,
          transform: 'translateX(20px)',
        }),
      ])
    ),
  ]),
  //   duration delay
]);
// useAnimation
//  style({ transform: 'translateX(-100%)' })
