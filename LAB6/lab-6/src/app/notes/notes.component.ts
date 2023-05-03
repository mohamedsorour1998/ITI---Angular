import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { restrictedNameValidator } from '../validators/restricted-name.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  notesForm: FormGroup;
  products = ['product1', 'product2', 'product3'];
  comments: FormControl[] = [];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          restrictedNameValidator(['admin', 'administrator']),
        ],
      ],
      product: [this.products[0], Validators.required],
      hasDiscount: [false],
      discount: null,
      comment: [''],
    });
  }
  toggleDiscount() {
    const hasDiscount = this.notesForm.controls.hasDiscount.value;
    if (hasDiscount) {
      this.notesForm.addControl('discount', new FormControl(null, Validators.required));
    } else {
      this.notesForm.removeControl('discount');
    }
  }
  addComment() {
    const newCommentControl = new FormControl('');
    this.comments.push(newCommentControl);
  }
  onSubmit() {
    if (this.notesForm.valid) {
      console.log('Form Submitted', this.notesForm.value);
      // Perform submission logic here.
    }
  }
}
