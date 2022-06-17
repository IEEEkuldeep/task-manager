import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskDetails: string = "";
  selectedStatus = "";
  status = ["NotStarted", "InProgress", "Completed"];

  task: any = [];

  addTask() {
    this.task.push({
      id: this.task.length,
      details: this.taskDetails,
      status: this.selectedStatus,
    });
  }

  deleteTask(Id: string) {
    this.task.splice(Id, 1);
  }
  clearForm() {
    // this.taskDetails = "";
  }

}