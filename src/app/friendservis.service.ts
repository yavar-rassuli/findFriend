import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FriendservisService {
  img =[];
  name=[];
  constructor() { }
  
  addFriend(img, name){
    this.img.push(img);
    this.name.push(name);

}
}


