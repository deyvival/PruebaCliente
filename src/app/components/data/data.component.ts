import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table'

export interface Clientes {
  shared: string;
  business: string;
  email: string;
  phone: string;
  dateadd: string
}

const ELEMENT_DATA: Clientes[] = [
  {shared: 'jgutierrez', business: 'Juliana Gutierrez', email: 'jgutierrez@gmail.com', phone: '3219876543', dateadd: '20/05/2020'},
  {shared: 'mmartinez', business: 'Manuel Martinez', email: 'mmartinez@gmail.com', phone: '3219876543', dateadd: '20/05/2020'},
  {shared: 'aruiz', business: 'Ana Ruiz', email: 'aruiz@gmail.com', phone: '3219876543', dateadd: '20/05/2020'},
  {shared: 'ogarcia', business: 'Oscar Garcia', email: 'ogarcia@gmail.com', phone: '3219876543', dateadd: '20/05/2020'},
  {shared: 'tramos', business: 'Tania Ramos', email: 'tramos@gmail.com', phone: '3219876543', dateadd: '20/05/2020'},
  {shared: 'cariza', business: 'Carlos Ariza', email: 'cariza@gmail.com', phone: '3219876543', dateadd: '20/05/2020'},
  {shared: 'rvillaneda', business: 'Rodrigo Villaneda', email: 'rvillaneda@gmail.com', phone: '3219876543', dateadd: '20/05/2020'},
  {shared: 'mfonseca', business: 'Mauricio Fonseca', email: 'mfonseca@gmail.com', phone: '3219876543', dateadd: '20/05/2020'}
];

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  displayedColumns: string[] = ['shared', 'business', 'email', 'phone', 'dateadd'];

  dataSource = [...ELEMENT_DATA];
  dataSourceF = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatTable) table!: MatTable<Clientes>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceF.filter = filterValue.trim().toLowerCase()!;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
