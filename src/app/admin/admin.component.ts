import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService} from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
providers: [MemberService]
})
export class AdminComponent implements OnInit {

  submitForm(newImageURL: string, newName: string, newRole: string, newAvailability: string, newPreference: string) {
    var newMember: Member = new Member(newImageURL, newName, newRole, newAvailability, newPreference);
    this.memberService.addMember(newMember);
  }

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

}
