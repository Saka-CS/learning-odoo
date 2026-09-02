import { Component, useState } from "@odoo/owl";

class TodoItem extends Component {
  static templete = "awesome_owl.todo_item";

  static props = {
    todo: {
      type: Array,
      element: {
        type: Object,
        shape: { id: Number, description: String, isCompleted: Boolean },
      },
    },
  };

  setup() {
    this.state = useState([
      {
        id: 1,
        description: "buy milk",
        isCompleted: false,
      },
    ]);
  }
}
