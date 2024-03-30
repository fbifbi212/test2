import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {}
  loadItems() {
    this.dataService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
  ngOnInit(): void {
    this.loadItems();
  }

  deleteItem(id: number) {
    this.dataService.deleteArac(id).subscribe(
      (data) => {
        console.log('Silme başarılı: ', data);
        this.loadItems();
      },
      (error) => {
        console.log('Silme iptal edildi: ', error);
      }
    );
  }
}
