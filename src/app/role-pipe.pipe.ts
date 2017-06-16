import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'rolePipe',
  pure: false
})
export class RolePipePipe implements PipeTransform {

  transform(input: Member[], desiredRole) {
      var output: Member[] = [];
      if(desiredRole === "masterMembers"){
        for (var i =0; i < input.length; i++){
          if (input[i].role === "Campaign-Master") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredRole === "mageMembers"){
        for (var i =0; i < input.length; i++){
          if (input[i].role === "Mage") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredRole === "warriorMembers") {
        for (var i =0; i < input.length; i++){
          if (input[i].role === "Warrior") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredRole === "rogueMembers") {
        for (var i =0; i < input.length; i++){
          if (input[i].role === "Rogue") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredRole === "priestMembers") {
        for (var i =0; i < input.length; i++){
          if (input[i].role === "Priest") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }
