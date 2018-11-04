import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TeamService {
	team:any[]=[
		{
			name:"Alejandro",
			occupation:"Enginner",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione minima, autem praesentium fugiat molestiae, et dolore at fuga enim laborum, nemo sed exercitationem. Rerum recusandae commodi voluptatum, sit mollitia alias!"
		},
		{
			name:"Lorena",
			occupation:"Count",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione minima, autem praesentium fugiat molestiae, et dolore at fuga enim laborum, nemo sed exercitationem. Rerum recusandae commodi voluptatum, sit mollitia alias!"
		}
	]
	constructor() {
		console.log("Consuming services");
	}
	getTeam(){
		return this.team;
	}
	getOneteam(i){
		return this.team[i];
	}
}
