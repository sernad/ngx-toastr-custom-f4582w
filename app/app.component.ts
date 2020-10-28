import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  toastRef;

  constructor(
    private toastr: ToastrService){

  }

  showToast=()=>{
    this.toastRef = this.toastr.show("Testxx",null,{
      // disableTimeOut: true,
      tapToDismiss: true,
      toastClass: "toast border-red",
      closeButton: true,
      positionClass:'bottom-left'
    });
  }

  removeToast = () =>{
    this.toastr.clear(this.toastRef.ToastId);
  }
}
