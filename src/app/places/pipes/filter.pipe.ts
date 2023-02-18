import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allplaces:[],serachkey:string,propname:string):any[] {
    if(!allplaces||serachkey==""||propname==""){
      return allplaces;
    }
    const result:any=[];
    allplaces.forEach((place:any)=>{
      if(place[propname].trim().toLowerCase().includes(serachkey.toLowerCase())){

        result.push(place);
      }
    })
    return result;
  }

}
