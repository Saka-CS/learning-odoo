import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";

export class Playground extends Component {
  static template = "awesome_owl.playground";

  static components = { Counter, Card };

  setup() {
    this.state = useState({ sum: 0 });
  }

  html1 = "<h1>Some Content 1</h1>";
  html2 = markup("<h1>Some Content 2</h1>");

  onChange() {
    this.state.sum++;
  }
}
