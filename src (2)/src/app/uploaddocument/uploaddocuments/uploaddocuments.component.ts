import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-uploaddocuments',
  templateUrl: './uploaddocuments.component.html',
  styleUrls: ['./uploaddocuments.component.css'],
})
export class UploaddocumentsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loc: Location,
    private routes: ActivatedRoute,
    private common: CommonService
  ) {}
  documentForm: FormGroup;

  doc = new Document();

  document_id: number;
  customer_id: number;
  address_proof: any;
  photo: any;
  signature: any;
  thumb: any;

  ngOnInit(): void {
    this.documentForm = this.fb.group({
      customer_id: [],
    });
    this.update();
  }
  update() {
    //   this.routes.paramMap.subscribe;
    //   {
    //     (param1) => {
    //       let id = parseInt(param1.get('eid'));
    //       this.documentForm.get('documentId').setValue(id);
    //     };
    //   }
  }
  onselectedAddressProof(event: any) {
    this.address_proof = event.target.files[0];
  }
  onselectedPhoto(event: any) {
    this.photo = event.target.files[0];
  }
  onselectedSign(event: any) {
    this.signature = event.target.files[0];
  }
  onselectedThumbPrint(event: any) {
    this.thumb = event.target.files[0];
  }
  saveFiles() {
    const document1 = JSON.stringify(this.documentForm.value);
    const form = new FormData();
    form.append('address_proof', this.address_proof);
    form.append('photo', this.photo);
    form.append('signature', this.signature);
    form.append('thumb', this.thumb);
    form.append('doc', document1);

    this.common.postDocument(form).subscribe();
    console.log('upload method');
    alert('upload successfully');
    window.location.reload();
  }
}
