import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carte-etudiant',
  templateUrl: './carte-etudiant.component.html',
  styleUrls: ['./carte-etudiant.component.css']
})
export class CarteEtudiantComponent implements OnInit {
  @Input() datacarte: any;
  safeImageUrl: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize the image URL when the component initializes
    if (this.datacarte.img) {
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.datacarte.img);
    }
  }

  ngOnChanges(): void {
    // Update the safeImageUrl whenever datacarte changes
    if (this.datacarte.img) {
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.datacarte.img);
    }
  }
}
