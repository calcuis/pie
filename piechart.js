class Line extends react.exports.Component {
  render() {
    return /* @__PURE__ */ jsx(Plot, {
      data: [{
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov"],
        values: [250, 200, 300, 450, 500],
        textinfo: "precent+value",
        type: "pie"
      }],
      layout: {
        width: 800,
        height: 600,
        title: "Monthly revenue"
      }
    });
  }
}