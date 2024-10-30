// formulaire-etudiant.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulaire-etudiant',
  templateUrl: './formulaire-etudiant.component.html',
  styleUrls: ['./formulaire-etudiant.component.css']
})
export class FormulaireEtudiantComponent implements OnInit {
  @Output() formData = new EventEmitter();

  establishment: string = '';
  fullName: string = '';
  registrationNumber: string = '';
  bankDetails: string = '';
  blobUrl: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        this.blobUrl = URL.createObjectURL(file); // Create a temporary Blob URL
    }
}




  saveinfo() {
    const data = {
        establishment: this.establishment,
        fullName: this.fullName,
        registrationNumber: this.registrationNumber,
        bankDetails: this.bankDetails,
        blobUrl: this.blobUrl
    };
    this.formData.emit(data);
}

}
