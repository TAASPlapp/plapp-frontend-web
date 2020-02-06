import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {

  selectedFile: File;
  fileName: String = "";

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name
  }

  onUpload() {
    // upload code goes here
  }
  constructor() { }

  ngOnInit() {
  }

}
