import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
	onSubmit = function(user){
		console.log(user);
	}
	

  constructor() { }

  ngOnInit() {
  }

}