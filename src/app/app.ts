import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  countnum:number=0;
  yournum:number=0;




min():void
{
   if(this.countnum===0)
  {
    return;
  }
  if(this.countnum>=1000)
  {
    return;
  }
      this.countnum--;
      this.yournum--;
     
;
   }
  




reset():void
{
  
  this.countnum=0;
  this.yournum=0;

  
}


add():void
{
if(this.countnum>=1000)
  {
    return;
  }
  
  
  this.countnum++;
  this.yournum++;;

  
}
check()
{
   if(this.yournum>1000){
    this.yournum=1000;
   }
}



}
