import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  countnum:number=0;




min():void
{
   if(this.countnum===0)
  {
    return;
  }
      this.countnum--;


   }




reset():void
{
  
  this.countnum=0;
  
}


add():void
{
  this.countnum++;
}

}
