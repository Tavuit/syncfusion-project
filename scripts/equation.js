var equationData = [
  {
    id: "equationWithBorder",
    title: "Equation with border",
    annotation: `
      <div class="input-wrapper">
          <math-field style=";border: unset;background: transparent;" id="mathquill-mathquill-input-border"></math-field>
      </div>`,
    menuId: "equation",
    toolTip: "Equation with border",
    type: "EquationWithBorder",
  },
  {
    id: "equationWithNoBorder",
    title: "Equation with no border",
    annotation: `
      <div class="input-wrapper">
          <math-field style=";border: unset;background: transparent;" id="mathquill-mathquill-input-border"></math-field>
      </div>`,
    menuId: "equation",
    toolTip: "Equation with border",
    type: "EquationWithNoBorder",
  }
]

function getEquations(type) {
  return equationData.map(shape => {
    shape['id'] = shape['id'] + type
    return shape
  }).map((shape) => drawShape(shape))
}


function isSelected() {
  if (diagram.selectedItems.nodes.length > 0) {
    return true
  }
  alert("No node is currently selected");
  return false
}

function isEquationBox() {
  if (!isSelected()) return null
  var SALT = "_html_element"
  var selectedItemDivID = diagram.selectedItems.wrapper.children[0].id;
  var $wrapper = document.getElementById(`${selectedItemDivID + SALT}`)
  let mqInput = $wrapper.querySelectorAll("#mathquill-mathquill-input-border")[0]
  if (!mqInput) {
    alert("Selected node must be equation box")
    return null
  }
  return mqInput
}


function getEquationBox() {
  let equationBox = isEquationBox()
  if (!equationBox) return null
  return equationBox
}


function handleEquation(operator) {
  if (!getEquationBox()) return
  let mqInput = getEquationBox()
  mqInput.executeCommand(['insert', operator]);
}
