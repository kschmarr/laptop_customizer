import React, { Component } from "react";

class FeatureListItem extends Component {
  render() {
    const { index, featureClass, parentKey, item, updateFeature } = this.props;
    return (
      <li key={index} className="feature__item">
        <div
          className={featureClass}
          onClick={() => updateFeature(parentKey, item)}
        >
          {item.name}(
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(item.cost)}
          )
        </div>
      </li>
    );
  }
}

export default FeatureListItem;
