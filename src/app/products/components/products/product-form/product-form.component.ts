import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/products/models/product-domain';
import * as fromRoot from '../../../../reducers';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  @Input() product!: Product;

  _pending = false

  get pending(){
    return this._pending;
  }
  @Input()
  set pending(isPending: boolean) {
    this._pending = isPending
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  @Input() error = '';

  @Output() submitted = new EventEmitter<Product>();

  form: FormGroup = this.fb.group({
    name: ['',[]],
    serialNumber: ['', []],
    price: ['', []]
  });

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl
  }
  get serialNumber(): FormControl {
    return this.form.get('serialNumber') as FormControl
  }
  get priceControl(): FormControl {
    return this.form.get('price') as FormControl
  }

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>){
  }

  submit(){
    if(this.form.valid){
      this.submitted.emit(this.form.value as Product)
    }
  }

}
