import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  images: any;

  constructor(public appService:AppService) { }

  ngOnInit(): void {
  }

  selectImage(event){
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;

      console.log(file)
      console.log(this.images)
    }
  }

  onSubmit(){
    const formData = new FormData()
    formData.append('file', this.images)
    this.appService.uploadImage(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
