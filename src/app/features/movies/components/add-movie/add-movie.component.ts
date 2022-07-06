import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  registerForm: any = FormGroup;
  submitted = false;
  message = '';
  constructor() { }

  ngOnInit(): void {
  }

}
