import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = []; 

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                price: 99.99,
                imageUrl: '/assets/images/forms.png',
                code: 'XPS+1',
                duration: 120,
                rating: 4.5,
                realeseDate: 'August, 22, 2022'
            },
            {
                id: 1,
                name: 'Angular: HTTP',
                price: 99.99,
                imageUrl: '/assets/images/http.png',
                code: 'XPS+2',
                duration: 112,
                rating: 4,
                realeseDate: 'October, 10, 2022'
            }
        ]
    }

}