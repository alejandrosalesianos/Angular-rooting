import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*Query Params

    this.route.queryParams.
    subscribe(params => {
      console.log(params);
    })*/

    let i = 0;
    i++
    console.log(i);
    let id = this.route.snapshot.paramMap.get('Id');
    console.log(id);

  }

}
