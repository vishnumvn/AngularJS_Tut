import { Component, OnInit } from '@angular/core';
import { ManageAPIService } from '../../Services/manage-api.service';
import {Medicine} from '../../models/medicine';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  searchCondition: '';

  medList: Medicine[];
  med: Medicine = {
    id: 0,
    name: '',
    category: '',
    mfgby: '',
    ratePerUnit: 0
    };
  constructor(private service: ManageAPIService) { }
  ngOnInit() {
    this.service.FindAll().subscribe(data => this.medList = data);
  }

  edit(val) {
    console.log('Edit - ' + val);
    // this.med = this.medList.filter(v => v.id === val.id)[0];
    this.med = val;
    console.log(val);
  }
  remove(val) {
    console.log('Delete - ' + val);
    this.medList = this.medList.filter(v => v.id !== val);
    this.service.remove(val).subscribe(data => console.log(data));
  }

  add(data) {
    this.medList.push(data);
    this.service.add(data).subscribe();
  }
}
