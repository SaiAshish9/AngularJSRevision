import { MaterialModule } from './material.module';
import { PrettyPrintPipe } from './json.pipe';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutesComponent } from './routes/routes.component';
import { AnimationsComponent } from './animations/animations.component';
import { AppUnlessDirective } from './app-unless.directive';
import { NgmaterialComponent } from './ngmaterial/ngmaterial.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {StateManagementModule} from './reducers/index';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    PrettyPrintPipe,
    FavoriteComponent,
    NgContentComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    PostsComponent,
    RoutesComponent,
    AnimationsComponent,
    AppUnlessDirective,
    NgmaterialComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StateManagementModule
  ],
  providers: [
    // CoursesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
