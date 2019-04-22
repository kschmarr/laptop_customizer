import React, { Component } from "react";
import FeaturesSection from "./FeaturesSection";
import Summary from "./Summary";

class Main extends Component {
  render() {
    const { selected } = this.props;
    return (
      <main>
        <FeaturesSection
          features={this.props.features}
          selected={selected}
          updateFeature={this.props.updateFeature}
        />
        <Summary selected={selected} />
      </main>
    );
  }
}

export default Main;
