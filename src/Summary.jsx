import React, { Component } from "react";
import Total from "./Total";
import SummaryTitle from "./SummaryTitle";
import SummaryContent from "./SummaryContent";

class Summary extends Component {
  render() {
    const { selected } = this.props;

    return (
      <section className="main__summary">
        <SummaryTitle />
        <SummaryContent selected={selected} />
        <Total selected={this.props.selected} />
      </section>
    );
  }
}

export default Summary;
