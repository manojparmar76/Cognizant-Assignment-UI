import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { DataService } from './../../service/data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  private file: File;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  public changeFile(files: FileList) {
    if (files && files.length > 0) {
      const file = files.item(0);
      if (_.endsWith(file.name, 'csv')) {
        this.file = file;
      } else {
        alert(`Please select only CSV file`);
      }
    } else {
      alert(`Please select a file`);
    }
  }

  public uploadFile() {
    if (this.file) {
      this.dataService.resetCsvData();
      const reader: FileReader = new FileReader();
      reader.readAsText(this.file);
      reader.onload = (e) => {
        const csvFile: any = reader.result;
        const csvRows = csvFile.split(/\r\n|\n/);
        const headers = csvRows[0].split(',');
        if (csvRows.length > 0) {
          for (let i = 1; i < csvRows.length; i++) {
            const csvData: Array<any> = csvRows[i].split(',');
            if (csvData.length === headers.length) {
              const data: any = {};
              data.firstName = csvData[0].replace(/\W/g, '');
              data.lastName = csvData[1].replace(/\W/g, '');
              data.issueCount = csvData[2];
              data.dateOfBirth = this.formatDate(new Date(csvData[3]));
              this.dataService.addCsvData(data);
            }
          }
        }
        alert(`Data processed successfully`);
      };
    } else {
      alert(`Please select a valid file`);
    }
  }

  public formatDate(date: Date) {
    if (date.toString() !== 'Invalid Date') {
      const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    } else {
      return 'Invalid Date';
    }
  }

}
