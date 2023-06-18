import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  imageURL;

  displayImage(event){
    if(event.target.files){
      var fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);

      fileReader.onload = (event: any) => {
        this.imageURL = event.target.result;
      }
    }
  }
}
