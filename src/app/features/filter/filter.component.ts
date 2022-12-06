import { Component, OnInit } from '@angular/core';
import dataSource from '../../../assets/data/data.json'
import { Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output('listEvent') listEvent: EventEmitter<any> = new EventEmitter();
  ramList = [
    {isSelected: false, value : '2GB'},
    {isSelected: false, value: '4GB'},
    {isSelected: false, value: '8GB'},
    {isSelected: false, value: '12GB'},
    {isSelected: false, value: '16GB'},
    {isSelected: false, value: '24GB'},
    {isSelected: false, value: '32GB'},
    {isSelected: false, value: '48GB'},
    {isSelected: false, value: '64GB'},
    {isSelected: false, value: '96GB'}
  ]
  hddList = ['SAS', 'SATA', 'SSD'];
  locationList: any = [];
  filterData: any = {};
  
  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    let location = dataSource.map((item: any) => {
      return item.Location
    });
    this.locationList = [...new Set(location)];
  }

  applyFilter(type: any = '') {
    if (type == 'checkbox') {
      // this.filterData.ram = this.ramList.map((i: any) => {
      //   if (i.isSelected) {
      //     return i.value
      //   }
      // });
      this.filterData.ram = []
      this.ramList.filter((i: any) => {
        if (i.isSelected) {
          this.filterData.ram.push(i.value)
        }
      })
    }
    this.listEvent.emit(this.filterData);
  }
}
