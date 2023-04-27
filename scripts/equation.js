
var equationData = [
  {
    id: "equationWithBorder",
    title: "Equation with border",
    annotation: "equationWithBorder",
    menuId: "equation",
    toolTip: "Equation with border",
  },
  {
    id: "equationWithNoBorder",
    title: "Equation with no border",
    annotation: "equationWithNoBorder",
    menuId: "equation",
    toolTip: "Equation with border",
    type: "Text",
  }
]

function getEquations() {
  return equationData.map((shape) => drawShape(shape))
}