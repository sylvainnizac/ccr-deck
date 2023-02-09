import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Action } from 'src/app/interfaces/action';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent implements OnInit {

  action: Action

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    return this.modalCtrl.dismiss(null, 'close');
  }

}
