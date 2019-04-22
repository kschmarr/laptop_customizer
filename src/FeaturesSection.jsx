import React, { Component } from "react";
import FeaturesTitle from "./FeaturesTitle";
import FeaturesContent from "./FeaturesContent";

class FeaturesSection extends Component {
  render() {
    const features = Object.keys(this.props.features).map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass =
          item.name === this.props.selected[key].name
            ? "feature__selected"
            : "";
        const featureClass = "feature__option " + selectedClass;
        return (
          <li key={index} className="feature__item">
            <div
              className={featureClass}
              onClick={e => this.props.updateFeature(key, item)}
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
      });

      return (
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">{options}</ul>
        </div>
      );
    });
    return (
      <section className="main__form">
        <FeaturesTitle />
        <FeaturesContent
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </section>
    );
  }
}

export default FeaturesSection;
