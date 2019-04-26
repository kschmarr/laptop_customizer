import React, { Component } from "react";
import FeaturesTitle from "./FeaturesTitle";
import FeaturesContent from "./FeaturesContent";

class FeaturesSection extends Component {
  render() {
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
