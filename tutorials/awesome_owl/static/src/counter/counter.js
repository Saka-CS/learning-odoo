import { useState, Component } from "@odoo/owl";

export class Counter extends Component {
  static template = "awesome_owl.counter";
  static props = {
    onChange: { type: Function, optional: true },
  };

  setup() {
    this.state = useState({ counter: 0 });
  }

  increment() {
    this.state.counter++;
    this.props.onChange?.();
  }
}
