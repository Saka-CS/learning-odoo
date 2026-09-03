import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
  static template = "awesome_owl.todo_list";

  static components = { TodoItem };

  static props = {
    todo: {
      type: Array,
      element: {
        type: Object,
        shape: { id: Number, description: String, isCompleted: Boolean },
      },
    },
  };
}
