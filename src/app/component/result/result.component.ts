import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'issueCount', 'dateOfBirth'];
  dataSource: MatTableDataSource<any>;
  isDataAvailable: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) {
    const csvData = this.dataService.getCsvData();
    this.dataSource = new MatTableDataSource(csvData);
    if (csvData && csvData.length > 0) {
      this.isDataAvailable = true;
    } else {
      this.isDataAvailable = false;
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
