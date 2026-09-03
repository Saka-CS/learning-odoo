import { Component, markup, useState, useRef, onMounted } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";
import { TodoList } from "./todo/todo_list";
import { useAutoFocus } from "./utils";

export class Playground extends Component {
  static template = "awesome_owl.playground";

  static components = { Counter, Card, TodoList };

  setup() {
    this.state = useState({ sum: 0, todoList: [], listId: 1 });
    useAutoFocus("todoInput");
  }

  html1 = "<h1>Some Content 1</h1>";
  html2 = markup("<h1>Some Content 2</h1>");

  onChange() {
    this.state.sum++;
  }

  addTodo(env) {
    if (env.keyCode === 13 && env.target.value.trim().length !== 0) {
      this.state.todoList.push({
        id: this.state.listId,
        description: env.target.value,
        isCompleted: false,
      });
      this.state.listId++;
    }
  }
}
