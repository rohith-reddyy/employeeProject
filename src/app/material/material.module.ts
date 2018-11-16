import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule,MatButtonModule,MatDividerModule,MatCheckboxModule, MatGridListModule, MatListModule, MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  declarations: [],

})
export class MaterialModule { }
export const materialExports =
   [MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatAutocompleteModule]