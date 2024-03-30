import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormStep1Component {
  car: {
    aracAdi: any;
    model: any;
    boyaVarMi: boolean;
    degisenVarMi: boolean;
    email: any;
    telefon: any;
    adSoyad: any;
  } = {
    aracAdi: '',
    model: '',
    boyaVarMi: false,
    degisenVarMi: false,
    email: '',
    telefon: '',
    adSoyad: '',
  };
  currentStep: number = 1;
  teklif: string | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  nextStep() {
    this.currentStep++;
    if (this.currentStep === 3) {
      this.createEmployeee();
    }
  }
  createEmployeee() {
    console.log('Teklif oluşturuldu: ', this.car);
    this.http.post<any>('http://localhost:5214/api/arac', this.car).subscribe(
      (response) => {
        console.log('Post işlemi başarılı!', response);
      },
      (error) => {
        console.error('Post işlemi başarısız!', error);
      }
    );
    this.currentStep = 3;
    const randomTeklif = Math.random() * (1000000 - 50000) + 50000;
    // TL formatına uygun hale getirme
    const formattedTeklif = new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(randomTeklif);
    this.teklif = formattedTeklif;
  }
  createEmployee() {
    console.log('Teklif oluşturuldu: ', this.car);
    this.car = {
      aracAdi: '',
      model: '',
      boyaVarMi: false,
      degisenVarMi: false,
      email: '',
      telefon: '',
      adSoyad: '',
    };
    this.currentStep = 1;
  }
}
