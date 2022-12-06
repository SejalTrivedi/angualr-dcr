import { Component, OnInit } from '@angular/core';
import dataSource from '../../../assets/data/data.json';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  columns = ['id', 'model', 'ram', 'hdd', 'location', 'price'];
  data: any = [];
  pageSize = 20;
  totalData = 0;

  ngOnInit() {
    this.totalData = dataSource.length;
    this.fetchInitialData();
  }

  fetchInitialData() {
    this.data = dataSource.slice(0, this.pageSize);
  }
  applyFilter(filter: any) {
    this.data = [];
    if (filter.location) {
      this.data = this.data.length ? this.data.filter((i: any) => i.Location == filter.location) : dataSource.filter((i: any) => i.Location == filter.location);
    }
    if (filter.ram) {
      this.data = this.data.length ? this.data.filter((i: any) => filter.ram.includes(i.RAM.split('DD')[0])) : dataSource.filter((i: any) => filter.ram.includes(i.RAM.split('DD')[0]));
    }
    if (filter.hdd) {
      this.data = this.data.length ? this.data.filter((i: any) => i.HDD.includes(filter.hdd)) : dataSource.filter((i: any) => i.HDD.includes(filter.hdd));
    }
    if (filter.storage) {
      this.data = this.data.length ? this.data.filter((i: any) => i.HDD.split('x')[1].includes(filter.storage)) : dataSource.filter((i: any) => i.HDD.split('x')[1].includes(filter.storage));
    }
  }

  pageChanged(pageData: any) {
    let startIndex = this.pageSize*pageData.pageIndex;
    this.data = dataSource.slice(startIndex, startIndex+this.pageSize);
  }
}
