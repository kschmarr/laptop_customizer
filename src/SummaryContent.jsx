import React, { Component } from "react";

class SummaryContent extends Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(selected).map(key => (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key} </div>
        <div className="summary__option__value">{selected[key].name}</div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(selected[key].cost)}
        </div>
      </div>
    ));
    return <>{summary}</>;
  }
}

export default SummaryContent;
