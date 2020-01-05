import { Component, OnInit, DebugElement } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      subject: new FormControl(),
      content: new FormControl()
    });

  }

  ngOnInit() {
  }

  GetEmailString() {
    var returnString = "mailto:semicolongames@gmail.com?";
    var subject = this.userForm.controls.subject.value;
    var content = this.userForm.controls.content.value;

    if (subject) {
      returnString += "SUBJECT=" + subject;
    }
    if (content) {
      returnString += "&body=" + content;
    }

    return returnString;
  }
}
