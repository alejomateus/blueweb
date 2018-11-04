import { Component, OnInit } from '@angular/core';
import {TeamService} from './../team.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
	team: any[]=[]
  constructor( private _servicio: TeamService) {
  	this.team=_servicio.team;
  }

  ngOnInit() {
  }

}
