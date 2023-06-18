import { Component } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
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
