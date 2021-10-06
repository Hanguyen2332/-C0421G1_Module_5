import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VocabularyListComponent} from "./exercise_1_dictionary/vocabulary-list/vocabulary-list.component";
import {VocabularyViewComponent} from "./exercise_1_dictionary/vocabulary-view/vocabulary-view.component";


const routes:Routes = [
  {path:'', component: VocabularyListComponent,
  children : [
    {path: 'vocabulary/view/:id', component: VocabularyViewComponent}
  ]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class VocabularyModuleModule { }
