import { Component } from '@angular/core';
import { FriendservisService } from '../friendservis.service';

@Component({
  selector: 'app-friedbox',
  templateUrl: './friedbox.component.html',
  styleUrls: ['./friedbox.component.scss']
})
export class FriedboxComponent {
  constructor(public fs:FriendservisService) { }
}
