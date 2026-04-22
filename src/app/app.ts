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
      this.countnum--;

 this.yournum=0;
   }
  




reset():void
{
  
  this.countnum=0;
   this.yournum=0;

  
}


add():void
{
  this.countnum++;
     this.yournum=0;

  
}


contructor():void{



      
    this.countnum=this.yournum;
    this.yournum;

}

}
