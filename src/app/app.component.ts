import {Component} from '@angular/core';
import {CreateTagModel, FirstTagModel, SecondTagModel} from './create-tag.model';


/*const DataTag: FirstTagModel [] = [
 { id: 25,
  name: 'mot',
  description: 'table',
  secondTags: []}
];*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'modal';
    tagCreated: CreateTagModel = {
      nomDuTag: '',
      description: '',
      isPrimaryTag: true,
      idFirstTag: 0
  };

}


