import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output('pageChange') pageChange: EventEmitter<any> = new EventEmitter();
  @Input('pageSize') pageSize: any;
  @Input('total') total: any;
  changePagination(event: any) {
    this.pageChange.emit(event);
  }
}
