import React, { Component } from "react";
import FeatureListItem from "./FeatureListItem";

class FeaturesContent extends Component {
  render() {
    const features = Object.keys(this.props.features).map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass =
          item.name === this.props.selected[key].name
            ? "feature__selected"
            : "";
        const featureClass = "feature__option " + selectedClass;
        return (
          <FeatureListItem
            item={item}
            featureClass={featureClass}
            index={index}
            key={index}
            parentKey={key}
            updateFeature={this.props.updateFeature}
          />
        );
      });

      return (
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">{options}</ul>
        </div>
      );
    });
    return <div>{features}</div>;
  }
}

export default FeaturesContent;
