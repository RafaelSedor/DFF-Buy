import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-main-purchase',
  standalone: true,
  imports: [],
  templateUrl: './main-purchase.component.html',
  styleUrl: './main-purchase.component.css',
  host: {'some-binding': 'some-value'}
})
export class MainPurchaseComponent implements AfterViewInit {
  @ViewChild('fixedActionBtn') fixedActionBtn?: ElementRef;

  ngAfterViewInit() {
    if (this.fixedActionBtn && this.fixedActionBtn.nativeElement) {
      document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('.fixed-action-btn');
        let instances = M.FloatingActionButton.init(elems, {
          toolbarEnabled: true
        });
      });
           
    }
  }
}
