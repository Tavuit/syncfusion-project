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

function isEquationBox(id = null) {
  var selectedItemDivID;
  var SALT = "_html_element"
  if (!!id) {
    selectedItemDivID = id
  } else {
    if (!isSelected()) return null
    selectedItemDivID = diagram.selectedItems.wrapper.children[0].id;
    selectedItemDivID = selectedItemDivID + SALT
  }
  var $wrapper = document.getElementById(selectedItemDivID)
  let mqInput = $wrapper.querySelector("#mathquill-mathquill-input-border")
  if (!mqInput) {
    alert("Selected node must be equation box")
    return null
  }
  return [mqInput, selectedItemDivID]
}


function getEquationBox(id = null) {
  let equationBox = isEquationBox(id)
  if (!equationBox) return null
  return equationBox
}


function handleEquation(operator, style = null, id = null) {
  if (!getEquationBox(id)) return
  let [mqInput, ID] = getEquationBox(id)
  mqInput.executeCommand(['insert', operator]);
  if (style) {
    mqInput.executeCommand(["applyStyle", style])
  }
  mathVirtualKeyboard.hide();
  if (currentDomain == 1) {
    theoryEquation[ID] = mqInput.getValue()
  }
  if (currentDomain == 0) {
    commEquation[ID] = mqInput.getValue()
  }
  styleMathLive()
}

function styleMathLive() {
  let shaDowRoot = document.querySelector('math-field').shadowRoot
  if (!shaDowRoot.querySelector('style')) {
    let style = document.createElement("style");
    style.textContent = `
    @font-face {
      font-family: "nimbus_script-regular";
      src: url("../icons/font/Nimbus_Script-Regular.ttf") format("truetype"),
      url("../icons/font/Nimbus_Script-Regular.woff") format("woff"),
      url("../icons/font/Nimbus_Script-Regular.woff2") format("woff2")
    }
    
    .nimbusScript > .ML__mathit {
      font-family: "nimbus_script-regular" !important;
    }`;
    document.querySelector('math-field').shadowRoot.appendChild(style)
  }
  if (shaDowRoot.querySelector('div.ML__virtual-keyboard-toggle')) {
    shaDowRoot.querySelector('div.ML__virtual-keyboard-toggle').remove()
  }
}