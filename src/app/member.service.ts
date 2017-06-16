import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  addMember(newMember: Member){
    this.members.push(newMember);
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string){
    return this.database.object('members/' + memberId);
  }

  deleteMember(localMemberToDelete) {
    var projectEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    projectEntryInFirebase.remove();
}

  updateMember(localUpdatedMember){
    var projectEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    projectEntryInFirebase.update({imageURL: localUpdatedMember.imageURL, name: localUpdatedMember.name, role: localUpdatedMember.role, availability: localUpdatedMember.availability, preference: localUpdatedMember.preference})
}

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

}
