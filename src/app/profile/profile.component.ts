import { Component,Input } from '@angular/core';
import { FriendservisService } from '../friendservis.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
@Input() img="";
@Input() name="";
@Input() canFollow=true;

constructor(public fs:FriendservisService){

}
}
