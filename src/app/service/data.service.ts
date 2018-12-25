import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private csvData: Array<any> = [];

  public getCsvData() {
    return this.csvData;
  }

  public addCsvData(data: any) {
    this.csvData.push(data);
  }

  public resetCsvData() {
    this.csvData = [];
  }
}
