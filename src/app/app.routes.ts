import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { Exercise4Component } from './exercise4/exercise4.component';
import { Exercise5Component } from './exercise5/exercise5.component';
import { Exercise6Component } from './exercise6/exercise6.component';
import { Exercise7Component } from './exercise7/exercise7.component';
import { Exercise8Component } from './exercise8/exercise8.component';
import { Exercise9Component } from './exercise9/exercise9.component';
import { Exercise10Component } from './exercise10/exercise10.component';
import { Exercise11Component } from './exercise11/exercise11.component';
import { FirstComponent } from './exercise11/first/first.component';
import { SecondComponent } from './exercise11/second/second.component';
import { Exercise12Component } from './exercise12/exercise12.component';
import { ThirdComponent } from './exercise12/third/third.component';
import { FourthComponent } from './exercise12/fourth/fourth.component';
import { Exercise13Component } from './exercise13/exercise13.component';
import { FifthComponent } from './exercise13/fifth/fifth.component';
import { SixthComponent } from './exercise13/sixth/sixth.component';
import { Exercise14Component } from './exercise14/exercise14.component';
import { SeventhComponent } from './exercise14/seventh/seventh.component';
import { EighthComponent } from './exercise14/eighth/eighth.component';
import { Exercise15Component } from './exercise15/exercise15.component';
import { Exercise16Component } from './exercise16/exercise16.component';
import { Exercise17Component } from './exercise17/exercise17.component';
import { Exercise18Component } from './exercise18/exercise18.component';
import { Exercise19Component } from './exercise19/exercise19.component';
import { Exercise20Component } from './exercise20/exercise20.component';
import { Exercise21Component } from './exercise21/exercise21.component';
import { Exercise22Component } from './exercise22/exercise22.component';
import { Exercise23Component } from './exercise23/exercise23.component';
import { Exercise24Component } from './exercise24/exercise24.component';
import { Exercise25Component } from './exercise25/exercise25.component';
import { Exercise26Component } from './exercise26/exercise26.component';
import { Screen1Component } from './exercise26/screen1/screen1.component';
import { Screen2Component } from './exercise26/screen2/screen2.component';
import { Screen3Component } from './exercise26/screen3/screen3.component';
import { Exercise27Component } from './exercise27/exercise27.component';
import { Exercise28Component } from './exercise28/exercise28.component';
import { Exercise29Component } from './exercise29/exercise29.component';
import { Exercise30Component } from './exercise30/exercise30.component';
import { Exercise31Component } from './exercise31/exercise31.component';
import { Exercise32Component } from './exercise32/exercise32.component';
import { Exercise33Component } from './exercise33/exercise33.component';
import { Exercise34Component } from './exercise34/exercise34.component';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: Exercise2Component },
  { path: 'exercise3', component: Exercise3Component },
  { path: 'exercise4', component: Exercise4Component },
  { path: 'exercise5', component: Exercise5Component },
  { path: 'exercise6', component: Exercise6Component },
  { path: 'exercise7', component: Exercise7Component },
  { path: 'exercise8', component: Exercise8Component },
  { path: 'exercise9', component: Exercise9Component },
  { path: 'exercise10', component: Exercise10Component },
  { path: 'exercise11', component: Exercise11Component,
    children:[
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent }
    ]
  },
  { path: 'exercise12', component: Exercise12Component,
    children:[
      { path: 'third', component: ThirdComponent },
      { path: 'fourth', component: FourthComponent }
    ]
  },
  { path: 'exercise13', component: Exercise13Component,
    children:[
      { path: '', redirectTo: 'fifth', pathMatch: 'full' },
      { path: 'fifth', component: FifthComponent },
      { path: 'sixth', component: SixthComponent }
    ]
  },
  { path: 'exercise14', component: Exercise14Component,
    children:[
      { path: 'seventh', component: SeventhComponent },
      { path: 'eighth', component: EighthComponent }
    ]
  },
  { path: 'exercise15', component: Exercise15Component },
  { path: 'exercise16', component: Exercise16Component },
  { path: 'exercise17', component: Exercise17Component },
  { path: 'exercise18', component: Exercise18Component },
  { path: 'exercise19', component: Exercise19Component },
  { path: 'exercise20', component: Exercise20Component },
  { path: 'exercise21', component: Exercise21Component },
  { path: 'exercise22', component: Exercise22Component },
  { path: 'exercise23', component: Exercise23Component },
  { path: 'exercise24', component: Exercise24Component },
  { path: 'exercise25', component: Exercise25Component },
  { path: 'exercise26', component: Exercise26Component,
    children:[
      { path: 'screen1', component: Screen1Component },
      { path: 'screen2', component: Screen2Component },
      { path: 'screen3', component: Screen3Component }
    ]
  },
  { path: 'exercise27', component: Exercise27Component },
  { path: 'exercise28', component: Exercise28Component },
  { path: 'exercise29', component: Exercise29Component },
  { path: 'exercise30', component: Exercise30Component },
  { path: 'exercise31', component: Exercise31Component },
  { path: 'exercise32', component: Exercise32Component },
  { path: 'exercise33', component: Exercise33Component },
  { path: 'exercise34', component: Exercise34Component }
]
