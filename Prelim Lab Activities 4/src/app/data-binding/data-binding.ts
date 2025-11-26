import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  //Interpolation
  studentName = "Kyle Tristan B. Lising";
  score = 95;

  //Property Binding
  imageUrl = "https://picsum.photos/200";
  isDisabled = true;

  // Attribute Binding
  colSpanValue = 3;

  //Class Binding
  isPassing = true;

  //Style Binding
  boxColor = "Purple";
  boxSize = "150px";
}
