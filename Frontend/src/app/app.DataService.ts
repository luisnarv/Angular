import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sharedData: string = '';

  constructor() { }

  setData(data: string) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }
}
