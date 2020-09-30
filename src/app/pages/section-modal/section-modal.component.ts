import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, AbstractControl, FormGroup } from '@angular/forms';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-section-modal',
  templateUrl: './section-modal.component.html',
  styleUrls: ['./section-modal.component.scss']
})
export class SectionModalComponent implements OnInit {
  public sectionForm: FormGroup
  public idSchedule: AbstractControl
  public descSection: AbstractControl
  public idsc: String
  public nameSection: AbstractControl
  public showSpiner = false;

  constructor(public modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    public sectionService: SectionService,
    public navParams: NavParams) { 
    //section form
    this.sectionForm = this.formBuilder.group({
      idSchedule: [''],
      descSection: [''],
      nameSection: ['']
    })
    this.idSchedule = this.sectionForm.controls['idSchedule']
    this.nameSection = this.sectionForm.controls['nameSection']
    this.descSection = this.sectionForm.controls['descSection']
  }

  ngOnInit() {
    this.idsc = this.navParams.get('id')
  }

  registerSection() {
    this.showSpiner = true
    this.sectionForm.value.idSchedule = this.idsc
    this.sectionService.registerSection(this.sectionForm.value).subscribe((resp) => {
      if (resp) {
        this.modalCtrl.dismiss({'dismissed': true});
        this.showSpiner = false
      }
    })
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
