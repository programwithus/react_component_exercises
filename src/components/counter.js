import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  styles = { fontSize: 20, fontWeight: "bold" };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no messages!</p>;
    return (
      <ul>
        {this.state.tags.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getColorofBadge()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-md">Increment</button>
        <div>{this.renderTags()}</div>
      </div>
    );
  }

  getColorofBadge() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
}

export default Counter;
