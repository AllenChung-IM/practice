import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-exercise33',
  imports: [
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './exercise33.component.html',
  styleUrl: './exercise33.component.scss'
})

export class Exercise33Component {
  displayedColumns: string[] = ['name', 'age', 'address', 'edit', 'delete'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // 新增
  addPeople() {

  }

  // 編輯
  edit(data: User) {
    console.log(data);
  }

  // 刪除
  delete(data: User) {
    console.log(data);
    if (confirm(`確定要刪除 ${data.name} 嗎？`)) {
      this.http.delete('http://localhost:3000/users/' + data['id']).subscribe(() => {
        this.getData();
      });
    }
  }
}
