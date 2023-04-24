// Close context menu on mouse click
document.querySelector("body").onmousedown = (e) => {
  let menu = document.getElementById("active-context-menu");
  let subList = document.getElementById("subListDiagram");
  if (menu && menu != e.target && !menu.contains(e.target)) {
    closeContextMenu();
  }

  if (subList && subList != e.target && !subList.contains(e.target)) {
    closeSubListMenu();
  }
};

// prevent default behavious when right clicked
document.querySelector("body").oncontextmenu = (e) => {
  if (
    document.querySelector("#comm-model-list ul").contains(e.target) ||
    document.querySelector("#theory-model-list ul").contains(e.target)
  ) {
    e.preventDefault();
  }
};

// Add interactive buttons to show or hide list
addInitialArrowEvent();

function addInitialArrowEvent() {
  let arrow = document.querySelectorAll(".list-arrow");
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].onclick = () => {
      let nested = arrow[i].parentElement.nextElementSibling;
      if (nested.style.display === "none") {
        nested.style.display = "block";
        arrow[i].classList.add("list-open");
      } else if (nested.style.display === "block") {
        nested.style.display = "none";
        arrow[i].classList.remove("list-open");
      } else {
        nested.style.display = "block";
        arrow[i].classList.add("list-open");
      }
    };
  }
  return;
}

// List of model pages
let modelPages = [];

// Add the models to the empty list of pages
function getModelData() {
  let models = document.querySelectorAll(".model-button");
  for (let i = 0; i < models.length; i++) {
    // On click on model button open model
    models[i].onclick = () => {
      openModelPage(models[i].id);
    };

    // On right click open context menu for sub model
    models[i].parentElement.oncontextmenu = (e) => {
      if (openContextMenu(e, models[i].id) != -1) {
        document.getElementById("model-container").style.overflow = "hidden";
        models[i].parentElement.classList.toggle("has-open-context-menu");
      }
    };

    // push each models to the model list
    let modelPage = {
      id: models[i].id,
      title: models[i].querySelector("span").innerText,
      diagram: JSON.parse(
        document.getElementById("diagram").ej2_instances[0].saveDiagram()
      ),
    };
    modelPages.push(modelPage);
  }
  // Dont know why returned
  // return modelPages;
}

// Open model pages
function openModelPage(id) {
  // If the model is already opened only change the page
  if (document.getElementById(id + "-button")) {
    changeModelPage(id);
    return;
  }

  // Adding button to the page list at the top of the diagram
  let pageList = document.getElementById("pageOptionList");
  let button = document.createElement("span");
  button.classList.add("page-tab");
  button.setAttribute("width", "32px");
  button.id = id + "-button";
  let buttonText = document.createElement("span");
  buttonText.classList.add("button-text");
  buttonText.innerHTML = modelPages.find((x) => x.id === id).title;
  // On click on the button change page
  buttonText.onclick = () => {
    changeModelPage(id);
  };
  button.appendChild(buttonText);

  // Adding cross to close the model
  let cross = document.createElement("span");
  cross.classList.add("button-cross");
  // On click close the model
  cross.onclick = () => {
    closeModelPage(id);
  };
  button.appendChild(cross);
  pageList.appendChild(button);

  // Save current model and change to next
  changeModelPage(id);
}

// Save the diagram of model
function saveModelPage(modelId) {
  let index = modelPages.findIndex((x) => x.id === modelId);
  let diagramData = JSON.parse(
    document.getElementById("diagram").ej2_instances[0].saveDiagram()
  );
  modelPages[index].diagram = diagramData;
}

// Save the current model and change to next model
function changeModelPage(modelId) {
  let pageList = document.getElementById("pageOptionList");
  let activePage = pageList.querySelector(".active-model-page");

  // Get active page and make it passive
  if (activePage) {
    activePage.classList.toggle("active-model-page");
    let activeButtonId = activePage.id.toString().replace("-button", "");
    saveModelPage(activeButtonId);
  }
  // Get the button and make it active
  let newButton = pageList.querySelector(`#${modelId}-button`);
  newButton.classList.toggle("active-model-page");

  // Search for the diagram of the page and load the diagram
  let diagramData = modelPages.find((x) => x.id === modelId).diagram;
  let diagramElement = document.getElementById("diagram").ej2_instances[0];
  diagramElement.clear();
  if (diagramData === "") {
    diagramData = JSON.parse(diagramElement.saveDiagram());
  }
  diagramElement.isLoading = true;
  diagramElement.loadDiagram(JSON.stringify(diagramData));
  diagramElement.clearSelection();
  diagramElement.isLoading = false;
}

// Save and close model
function closeModelPage(modelId) {
  let pageOptionList = document.getElementById("pageOptionList");

  if (!pageOptionList.querySelector("#" + modelId + "-button")) {
    return;
  }

  // check if the model is last in the list
  if (pageOptionList.childNodes.length <= 1) {
    alert("Cannot Close!! \n At least one page needs to be open");
  }
  // if the model to be closed is active
  let button = document.getElementById(modelId + "-button");
  let nextPage = button.previousElementSibling;
  if (!nextPage) {
    nextPage = button.nextElementSibling;
  }

  if (button.classList.contains("active-model-page")) {
    changeModelPage(nextPage.id.replace("-button", ""));
  } else {
    saveModelPage(modelId);
  }
  button.remove();
}

// function to return context menu item
function getContextMenuItem(modelId) {
  let contextMenuList = [
    {
      id: "main-project-model-comm",
      list: [
        {id: "sub-function-comm", title: "Sub Function"},
        {id: "sub-project-model-comm", title: "Sub Project Model"},
        "sep",
        {id: "group-project-model-comm", title: "Group Project Model"},
        {id: "team-project-model-comm", title: "Team Project Model"},
        "sep",
      ],
    },
    {
      id: "problem-statement-comm",
      list: [
        {id: "sub-problem-statement-comm", title: "Sub Problem Statement"},
        "sep",
        {id: "my-problem-statement-comm", title: "My Problem Statement"},
        {
          id: "employee-problem-statement-comm",
          title: "Employee Problem Statement",
        },
        {
          id: "personal-problem-statement-comm",
          title: "Personal Problem Statement",
        },
        "sep",
        {
          id: "group-problem-statement-comm",
          title: "Group Problem Statement",
        },
        {id: "team-problem-statement-comm", title: "Team Problem Statement"},
        "sep",
      ],
    },
    {
      id: "people-work-together-comm",
      list: [
        {id: "group-working-together-comm", title: "Group Working Together"},
        {
          id: "employees-working-together-comm",
          title: "Employees Working Together",
        },
        {id: "team-working-together-comm", title: "Team Working Together"},
        "sep",
      ],
    },
    {
      id: "operating-principle-comm",
      list: [
        {
          id: "group-operating-principle-comm",
          title: "Group Operating Principle",
        },
        {
          id: "team-operating-principle-comm",
          title: "Team Operating Principle",
        },
        "sep",
        {
          id: "employees-operating-principle-comm",
          title: "Employees Operating Principle",
        },
        {
          id: "everybody-operating-principle-comm",
          title: "Everybody Operating Principle",
        },
        "sep",
      ],
    },
    {
      id: "what-we-do-model-comm",
      list: [
        {id: "what-i-do-model-comm", title: "What I Do Model"},
        {id: "what-employee-does-comm", title: "What Employee Does"},
        {id: "what-team-does-comm", title: "What Team Does"},
        "sep",
      ],
    },
    {
      id: "error-give-rise-to-problem-comm",
      list: [
        {id: "my-error-gives-rise-comm", title: "My Error Give Rise"},
        {
          id: "personal-error-gives-rise-comm",
          title: "Personal Error Gives Rise",
        },
        {
          id: "employee-error-gives-rise-comm",
          title: "Employee Error Gives Rise",
        },
        "sep",
      ],
    },
    {
      id: "other-model-comm",
      list: [],
    },
    {
      id: "group-of-people-defined-comm",
      list: [{id: "team-defined", title: "Team Defined"}, "sep"],
    },
    {
      id: "group-of-people-function-comm",
      list: [{id: "team-function", title: "Team Function"}, "sep"],
    },
    {
      id: "graphical-change-comm",
      list: [
        {id: "group-graphical-change-comm", title: "Group Graphical Change"},
        {id: "team-graphical-change-comm", title: "Team Graphical Change"},
        "sep",
        {
          id: "employee-graphical-change-comm",
          title: "Employee Graphical Change",
        },
        {id: "my-graphical-change-comm", title: "My Graphical Change"},
        "sep",
      ],
    },
    {
      id: "tabulated-change-comm",
      list: [
        {id: "group-tabulated-change-comm", title: "Group Tabulated Change"},
        {id: "team-tabulated-change-comm", title: "Team Tabulated Change"},
        "sep",
        {
          id: "employee-tabulated-change-comm",
          title: "Employee Tabulated Change",
        },
        {id: "my-tabulated-change-comm", title: "My Tabulated Change"},
        "sep",
      ],
    },
    {
      id: "project-timeline-comm",
      list: [
        {
          id: "part-of-project-timeline-comm",
          title: "Part of Project Timeline",
        },
        {id: "phase-timeline-comm", title: "Phase Timeline"},
        "sep",
      ],
    },
    {
      id: "project-schedule-comm",
      list: [
        {
          id: "part-of-project-schedule-comm",
          title: "Part of Project Schedule",
        },
        {id: "phase-schedule-comm", title: "Phase Schedule"},
        "sep",
      ],
    },
    {
      id: "people-schedule-comm",
      list: [
        {id: "group-schedule-comm", title: "Group Schedule"},
        {id: "team-schedule-comm", title: "Team Schedule"},
        "sep",
        {id: "employee-schedule-comm", title: "Employee Schedule"},
        {id: "my-schedule-comm", title: "My Schedule"},
        "sep",
      ],
    },
    {
      id: "graphical-project-status-comm",
      list: [
        {id: "part-of-project-status-comm", title: "Part of Project Status"},
        {id: "phase-status-comm", title: "Phase Status"},
        "sep",
      ],
    },
    {
      id: "entity-support-model-comm",
      list: [
        {
          id: "part-of-entity-support-model-comm",
          title: "Part of Entity Support Model",
        },
        "sep",
      ],
    },
    {
      id: "error-accumulator-comm",
      list: [
        {
          id: "group-error-accumulator-comm",
          title: "Group Error Accumulator",
        },
        {id: "team-error-accumulator-comm", title: "Team Error Accumulator"},
        "sep",
        {
          id: "employee-error-accumulator-comm",
          title: "Employee Error Accumulator",
        },
        {id: "my-error-accumulator-comm", title: "My Error Accumulator"},
        "sep",
      ],
    },
    {
      id: "sum-of-compensator-comm",
      list: [
        {
          id: "group-sum-of-compensator-comm",
          title: "Group Sum of Compensator",
        },
        {
          id: "team-sum-of-compensator-comm",
          title: "Team Sum of Compensator",
        },
        "sep",
        {
          id: "employee-sum-of-compensator-comm",
          title: "Employee Sum of Compensator",
        },
        {id: "my-sum-of-compensator-comm", title: "My Sum of Compensator"},
        "sep",
      ],
    },
    {
      id: "list-of-feedback-comm",
      list: [
        {id: "group-list-of-analysis-comm", title: "Group List of Analysis"},
        {id: "team-list-of-analysis-comm", title: "Team List of Analysis"},
        "sep",
        {
          id: "employee-list-of-analysis-comm",
          title: "Employee List of Analysis",
        },
        {id: "my-list-of-analysis-comm", title: "My List of Analysis"},
        "sep",
      ],
    },
    {
      id: "total-analysis-comm",
      list: [
        {
          id: "part-of-project-total-analysis-comm",
          title: "Part of Project Total Analysis",
        },
        {id: "phase-total-analysis-comm", title: "Phase Total Analysis"},
        "sep",
      ],
    },
    {
      id: "problem-report-comm",
      list: [
        {id: "group-problem-report-comm", title: "Group Problem Report"},
        {id: "team-problem-report-comm", title: "Team Problem Report"},
        "sep",
        {
          id: "employee-problem-report-comm",
          title: "Employee Problem Report",
        },
        {id: "my-problem-report-comm", title: "My Problem Report"},
        "sep",
      ],
    },
    {
      id: "entity-produced-and-function-comm",
      list: [
        {
          id: "part-of-project-entity-produced-and-function-comm",
          title: "Part of Project Entity Produced and Function",
        },
        {
          id: "phase-entity-produced-and-function-comm",
          title: "Phase Entity Produced and Function",
        },
        "sep",
      ],
    },
    {
      id: "function-status-comm",
      list: [
        {id: "group-function-status-comm", title: "Group Function Status"},
        {id: "team-function-status-comm", title: "Team Function Status"},
        "sep",
        {
          id: "employee-function-status-comm",
          title: "Employee Function Status",
        },
        {id: "my-function-status-comm", title: "My Function Status"},
        {
          id: "everybody-function-status-comm",
          title: "Everybody Function Status",
        },
        "sep",
      ],
    },
    {
      id: "list-of-test-result-comm",
      list: [
        {
          id: "part-of-project-list-of-test-result-comm",
          title: "Part of Project List of Test Result",
        },
        {
          id: "phase-list-of-test-result-comm",
          title: "Phase List of Test Result",
        },
        "sep",
      ],
    },
    {
      id: "list-of-entity-usage-comm",
      list: [
        {
          id: "part-of-project-list-of-entity-used-comm",
          title: "Part of Project List of Entity Used",
        },
        {
          id: "phase-list-of-entity-used-comm",
          title: "Phase List of Entity Used",
        },
        {id: "list-of-entity-used-comm", title: "List of Entity Used"},
        "sep",
      ],
    },
    {
      id: "actual-entity-used-by-people-comm",
      list: [
        {
          id: "actual-entity-used-by-me-comm",
          title: "Actual Entity Used by Me",
        },
        {
          id: "actual-entity-used-by-employee-comm",
          title: "Actual Entity Used by Employee",
        },
        "sep",
        {
          id: "actual-entity-used-by-group-comm",
          title: "Actual Entity Used by Group",
        },
        {
          id: "actual-entity-used-by-team-comm",
          title: "Actual Entity Used by Team",
        },
        "sep",
      ],
    },
    {
      id: "function-of-entity-used-comm",
      list: [
        {
          id: "function-entity-used-by-me-comm",
          title: "Function Entity Used by Me",
        },
        {
          id: "function-entity-used-by-employee-comm",
          title: "Function Entity Used by Employee",
        },
        "sep",
        {
          id: "function-entity-used-by-group-comm",
          title: "Function Entity Used by Group",
        },
        {
          id: "function-entity-used-by-team-comm",
          title: "Function Entity Used by Team",
        },
        "sep",
      ],
    },
    {
      id: "area-of-operation-comm",
      list: [
        {
          id: "group-area-of-operation-comm",
          title: "Group Area of Operation",
        },
        {id: "team-area-of-operation-comm", title: "Team Area of Operation"},
        "sep",
        {
          id: "employee-area-of-operation-comm",
          title: "Employee Area of Operation",
        },
        {id: "my-area-of-operation-comm", title: "My Area of Operation"},
        "sep",
      ],
    },
    {
      id: "site-of-operation-comm",
      list: [
        {
          id: "group-site-of-operation-comm",
          title: "Group Site of Operation",
        },
        {id: "team-site-of-operation-comm", title: "Team Site of Operation"},
        "sep",
        {
          id: "employee-site-of-operation-comm",
          title: "Employee Site of Operation",
        },
        {id: "my-site-of-operation-comm", title: "My Site of Operation"},
        "sep",
      ],
      // Theory list
    },
    {
      id: "main-theory-application-model-th",
      list: [
        {
          id: "sub-theory-application-model-th",
          title: "Sub Theory Application Model",
        },
        {
          id: "theory-application-model-th",
          title: "Theory Application Model",
        },
        {
          id: "main-theory-application-model-th",
          title: "Main Theory Application Model",
        },
        "sep",
      ],
    },
    {
      id: "system-apply-theory-circular-th",
      list: [
        {
          id: "group-of-system-apply-theory-circular-th",
          title: "Group of System Apply Theory Circular",
        },
        {
          id: "system-apply-theory-circular-1-th",
          title: "System Apply Theory Circular",
        },
        "sep",
      ],
    },
    {
      id: "function-in-functional-system-th",
      list: [
        {
          id: "my-function-in-functional-system-th",
          title: "My Function in Functional System",
        },
        {
          id: "system-function-in-functional-system-th",
          title: "System Function in Functional System",
        },
        "sep",
      ],
    },
    {
      id: "other-theory-model-th",
      list: ["sep"],
    },
    {
      id: "parts-of-function-to-function-th",
      list: [
        {
          id: "parts-of-function-to-function-1-th",
          title: "Parts of Function to Function",
        },
        {
          id: "parts-of-function-to-method",
          title: "Parts of Function to Method",
        },
        "sep",
      ],
    },
    {
      id: "part-of-instrument-to-instrument-th",
      list: [
        {
          id: "part-of-instrument-to-instrument-1-th",
          title: "Part of Instrument to Instrument",
        },
        "sep",
      ],
    },
    {
      id: "natural-or-input-element-usage-th",
      list: [
        {id: "natural-element-th", title: "Natural Element"},
        {id: "input-element-th", title: "Input Element"},
        "sep",
      ],
    },
    {
      id: "list-of-identified-theorems-th",
      list: [
        {
          id: "list-of-identified-theorems-1-th",
          title: "List of Identified Thorems",
        },
        "sep",
      ],
    },
    {
      id: "list-of-applied-theorems-th",
      list: [
        {
          id: "list-of-applied-theorems-th",
          title: "List of Applied Theorems",
        },
        "sep",
      ],
    },
    {
      id: "instrument-or-method-produced-th",
      list: [
        {id: "instrument-produced-th", title: "Instrument Produced"},
        {id: "method-produced-th", title: "Method Produced"},
        "sep",
      ],
    },
    {
      id: "function-produced-from-theory-application-th",
      list: [
        {
          id: "function-produced-from-theory-application-1-th",
          title: "Function Produced From Theory Application",
        },
        "sep",
      ],
    },
    {
      id: "other-support-model-th",
      list: [
        {id: "other-support-model-1-th", title: "Other Support Model"},
        "sep",
      ],
    },
    {
      id: "system-understanding-theory-th",
      list: [
        {
          id: "system-understanding-theory-1-th",
          title: "System Understanding Theory",
        },
        {id: "my-understanding-theory=th", title: "My Understanding Theory"},
        "sep",
      ],
    },
    {
      id: "function-on-theory-scale-th",
      list: [
        {
          id: "my-function-on-theory-scale-th",
          title: "My Function on Theory Scale",
        },
        {
          id: "group-function-on-theory-scale-th",
          title: "Group Function on Theory Scale",
        },
        {
          id: "function-on-theory-scale-th",
          title: "Function on Theory Scale",
        },
        "sep",
      ],
    },
    {
      id: "functional-stability-th",
      list: [
        {id: "functional-stability-1-th", title: " Functional Stability"},
        {
          id: "group-functional-stability-th",
          title: "Group Functional Stability",
        },
        "sep",
      ],
    },
    {
      id: "project-direction-and-destination-th",
      list: [
        {
          id: "project-direction-and-destination-1-th",
          title: "Project Direction And Destination",
        },
        {
          id: "phase-direction-and-destination-th",
          title: "Phase Direction and Destination",
        },
        {
          id: "part-of-project-direction-and-destination-th",
          title: "Part of Project Direction and Destination",
        },
        "sep",
        {id: "my-direction-th", title: "My Direction"},
        {id: "my-destination-th", title: "My Destination"},
        {
          id: "my-direction-and-destination-th",
          title: "My Direction and Destination",
        },
        "sep",
        {id: "system-direction-th", title: "System Direction"},
        {id: "system-destination-th", title: "System Destination"},
        {
          id: "system-direction-and-destination-th",
          title: "System Direction and Destination",
        },
        "sep",
      ],
    },
    {
      id: "problem-development-and-identification-th",
      list: [
        {
          id: "problem-development-and-identification-1-th",
          title: "Problem Development and Identification",
        },
        "sep",
      ],
    },
    {
      id: "philosophy-inheritance-chart-th",
      list: [
        {
          id: "philosophy-inheritance-chart-1-th",
          title: "Philosophy Inheritance Chart",
        },
        "sep",
      ],
    },
    {
      id: "other-stability-model-th",
      list: [
        {id: "other-stability-model-1-th", title: "Other Stability Model"},
        "sep",
      ],
    },
  ];
  let item = contextMenuList.find((x) => x.id === modelId);
  if (item) {
    return item.list;
  } else {
    return [];
  }
}

// Open a model context menue where clicked
function openContextMenu(e, modelId) {
  // If context menu already open close it and
  if (document.getElementById("active-context-menu")) closeContextMenu();

  // Get the context menu list
  let data = getContextMenuItem(modelId);
  if (data.length <= 0) {
    return -1;
  }
  // Create the contextmenu
  let list = document.createElement("ul");
  list.id = "active-context-menu";
  let xpos =
    e.clientX >= window.visualViewport.width - 250
      ? e.clientX - 250
      : e.clientX;
  let ypos =
    e.clientY >= window.visualViewport.height - 250
      ? e.clientY - 250
      : e.clientY;
  list.classList.add("context-menu");
  list.style.width = "250px";
  list.style.position = "fixed";
  list.style.top = `${ypos}px`;
  list.style.left = `${xpos}px`;
  list.style.backgroundColor = "white";
  list.style.border = "black solid 1px";

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.classList.add("context-list");
    if (data[i] != "sep") {
      li.innerHTML = data[i].title;
      li.id = data[i].id + "-listItem";
      li.onclick = (e) => {
        closeContextMenu();
        createSubModel(modelId, data[i]);
      };
    }
    if (data[i] === "sep") {
      li.style.height = "1px";
      li.style.borderTop = "1px solid grey";
      li.style.marginLeft = "20px";
      li.style.padding = "0";
    }
    list.appendChild(li);
  }

  let other = document.createElement("li");
  other.classList.add("context-list");
  other.id = modelId + "other";
  other.onclick = (e) => {
    closeContextMenu();
    otherSubModel(modelId);
  };
  other.innerHTML = "Other";
  list.appendChild(other);
  let body = document.querySelector("body");
  body.appendChild(list);
}

// Close model function
function closeContextMenu() {
  document
    .querySelector(".has-open-context-menu")
    .classList.toggle("has-open-context-menu");
  document.getElementById("model-container").style.overflowY = "scroll";
  document.getElementById("active-context-menu").remove();
}

// Create Sub model
function createSubModel(modelId, subModel) {
  if (document.getElementById(subModel.id)) return;
  let arrow = document.getElementById(modelId).previousElementSibling;
  if (!arrow.classList.contains("list-arrow")) {
    addArrowEvent(arrow);
    arrow.classList.add("list-arrow", "list-open");
  }
  let ul = arrow.parentElement.nextElementSibling;
  ul.style.display = "block";
  let li = createSubModelListItem(subModel);
  ul.appendChild(li);
  if (!modelPages.find((x) => x.id === subModel.id)) {
    let model = {
      id: subModel.id,
      title: subModel.title,
      diagram: "",
    };
    modelPages.push(model);
  }
  openModelPage(subModel.id);
}

// This creates list item of the sub model
function createSubModelListItem(model) {
  let li = document.createElement("li");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  span2.onclick = (e) => {
    openModelPage(model.id);
  };
  let span3 = document.createElement("span");
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("list-icon");
  let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", "#people");
  svg.appendChild(use);
  span3.innerHTML = model.title;
  span2.appendChild(svg);
  span2.appendChild(span3);
  span2.classList.add("model-button");
  span2.id = model.id;
  li.appendChild(span1);
  li.appendChild(span2);

  li.oncontextmenu = (e) => {
    e.preventDefault();
    document.getElementById("model-container").style.overflow = "hidden";
    li.classList.add("has-open-context-menu");
    openSubMenuContext(e, model.id);
  };
  return li;
}

// This function removes sub model from the list after saving
function removeSubmodel(subModelId) {
  let model = document.getElementById(subModelId);
  let parent = model.parentElement;
  let list = parent.parentElement;
  let arrow = list.previousElementSibling.querySelector("span");
  let pageOpen = document.getElementById(subModelId + "-button");
  if (pageOpen) {
    closeModelPage(subModelId);
  }
  parent.remove();
  if (!list.hasChildNodes()) {
    arrow.className = "";
    removeArrowEvent(arrow);
    list.style.display = "none";
  }
}

function addArrowEvent(arrow) {
  arrow.onclick = (e) => {
    let nested = arrow.parentElement.nextElementSibling;
    if (nested.style.display === "none") {
      nested.style.display = "block";
      arrow.classList.add("list-open");
    } else if (nested.style.display === "block") {
      nested.style.display = "none";
      arrow.classList.remove("list-open");
    } else {
      nested.style.display = "block";
      arrow.classList.add("list-open");
    }
  };
}

function removeArrowEvent(arrow) {
  arrow.onclick = null;
}

function openSubMenuContext(e, modelId) {
  if (document.getElementById("active-context-menu")) {
    closeContextMenu();
  }
  let list = document.createElement("ul");
  list.id = "active-context-menu";
  let xpos =
    e.clientX >= window.visualViewport.width - 200
      ? e.clientX - 200
      : e.clientX;
  let ypos =
    e.clientY >= window.visualViewport.height - 200
      ? e.clientY - 200
      : e.clientY;
  list.classList.add("context-menu");
  list.style.width = "200px";
  list.style.position = "fixed";
  list.style.top = `${ypos}px`;
  list.style.left = `${xpos}px`;
  list.style.backgroundColor = "white";
  list.style.border = "black solid 1px";
  let li = document.createElement("li");
  li.classList.add("context-list");
  li.innerHTML = "Close Model";
  li.onclick = (e) => {
    closeContextMenu();
    document.getElementById("model-container").style.overflow = "hidden";
    closeModelPage(modelId);
  };
  list.append(li);
  li = document.createElement("li");
  li.classList.add("context-list");
  li.innerHTML = "Remove Model";
  li.onclick = (e) => {
    closeContextMenu();
    removeSubmodel(modelId);
  };
  list.append(li);
  document.querySelector("body").append(list);
}

// !----------------------------------Other function how pop up input  ----------------------------------------------------------! //

function otherSubModel(modelId) {
  let element = document.querySelector(".activeCustomDialog");
  if (element != null) {
    closeDialog();
  }
  let form = document.createElement("form");
  form.classList.add("activeCustomDialog");
  let label = document.createElement("label");
  let input = document.createElement("input");
  let title = document.createElement("div");
  let titlespan = document.createElement("span");
  let crossspan = document.createElement("span");
  let submit = document.createElement("input");

  titlespan.innerHTML = "Add Model";
  titlespan.classList.add("title-text");
  crossspan.innerHTML = "X";
  crossspan.classList.add("cross-button");
  crossspan.onclick = () => {
    closeDialog();
  };
  title.appendChild(titlespan);
  title.appendChild(crossspan);
  title.classList.add("dialog-title");

  label.setAttribute("for", "ModelName");
  label.classList.add("other-label");
  label.innerHTML = "Model Name";
  input.setAttribute("type", "text");
  input.setAttribute("name", "ModelName");
  input.classList.add("other-input");
  input.id = "model-name-other";
  submit.type = "submit";
  submit.value = "Add";
  submit.classList.add("btn", "btn-sm", "custom-btn");
  form.setAttribute("action", "javascript:void(0);");
  form.onsubmit = () => {
    let input = document.getElementById("model-name-other").value.trim();
    let id = input.toLowerCase().split(" ").join("-");
    let elm = document.getElementById(id);
    if (input.length < 1 || elm != null) {
      return;
    }
    let data = {
      id: id,
      title: input,
    };
    createSubModel(modelId, data);
    closeForm();
  };
  form.appendChild(title);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submit);
  form.id = modelId + "-form";
  form.classList.add("other-form");

  let body = document.querySelector("body");
  body.appendChild(form);
  // get data for the data list
  // createsubmodel with data
}

function openCommTab() {
  let pageList = document.getElementById("pageOptionList").children;
  if (pageList.length != 0) {
    for (let i = 0; i < pageList.length; i++) {
      theoryPages.push(pageList[i].id.toString().replace("-button", ""));
    }
  }
  if (commPages.length === 0) {
    openModelPage("main-project-model-comm");
  } else {
    for (let i = 0; i < commPages.length; i++) {
      openModelPage(commPages[i]);
    }
    commPages = [];
  }

  for (let i = 0; i < theoryPages.length; i++) {
    openModelPage(theoryPages[i]);
    closeModelPage(theoryPages[i]);
  }
}

function openTheoryTab() {
  let pageList = document.getElementById("pageOptionList").children;
  if (pageList.length != 0) {
    for (let i = 0; i < pageList.length; i++) {
      commPages.push(pageList[i].id.toString().replace("-button", ""));
    }
  }
  if (theoryPages.length === 0) {
    openModelPage("main-theory-application-model-th");
  } else {
    for (let i = 0; i < theoryPages.length; i++) {
      openModelPage(theoryPages[i]);
    }
    theoryPages = [];
  }

  for (let i = 0; i < commPages.length; i++) {
    openModelPage(commPages[i]);
    closeModelPage(commPages[i]);
  }
}

function showTooltipNodes() {
  console.log("showTooltipNodes", diagram.nodes);
}

function showHideDialog() {
  let dialog = openDialog("Show Hide Model");
  let container = document.createElement("div");
  container.classList.add("dialog-container", "border", "rounded");
  let modelList;
  if (currentDomain === 0) {
    modelList = document.getElementById("comm-model-list").cloneNode(true);
  } else {
    modelList = document.getElementById("theory-model-list").cloneNode(true);
  }

  let allListItem = modelList.querySelectorAll("li");
  for (let i = 0; i < allListItem.length; i++) {
    let span = document.createElement("span");
    span.style.width = "100%";
    span.style.display = "flex";
    span.style.justifyContent = "flex-end";
    span.style.paddingRight = "20px";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = allListItem[i].querySelector(".model-button").id;
    checkbox.name = "models[]";
    if (allListItem[i].style.display === "none") {
      if (allListItem[i].firstElementChild.classList.contains("list-arrow")) {
        allListItem[i].nextElementSibling.style.display = "block";
      }
      allListItem[i].style.display = "flex";
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
    span.append(checkbox);
    allListItem[i].append(span);
  }
  let div = document.createElement("div");
  container.append(modelList);
  let submitButton = document.createElement("button");
  submitButton.classList.add("btn", "btn-primary", "btn-sm");
  submitButton.type = "button";
  submitButton.style.marginTop = "5px";
  submitButton.style.display = "inline-block";
  submitButton.style.fontSize = "12px";
  submitButton.style.paddingTop = "2px";
  submitButton.style.paddingButtom = "2px";
  let cancelButton = submitButton.cloneNode();
  cancelButton.classList.toggle("btn-primary");
  cancelButton.classList.add("btn-danger");
  cancelButton.innerHTML = "Cancel";
  submitButton.innerHTML = "Apply";
  submitButton.style.marginLeft = "5px";
  cancelButton.style.marginLeft = "calc(100% - 120px)";
  submitButton.onclick = () => {
    applyHiddenOrShow();
  };
  cancelButton.onclick = () => {
    closeDialog();
  };
  div.style.paddingBottom = "5px";
  div.classList.add("px-2");
  div.appendChild(container);
  div.appendChild(cancelButton);
  div.appendChild(submitButton);
  dialog.append(div);
  dialog.style.marginTop = "-200px";
  document.getElementsByTagName("body")[0].append(dialog);
  addInitialArrowEvent();
}

function openDialog(name) {
  if (document.getElementById("activeDialog") != null) {
    closeDialog();
  }

  let dialog = document.createElement("div");
  dialog.id = "activeDialog";
  dialog.classList.add("activeCustomDialog");
  let title = document.createElement("div");
  title.classList.add("dialog-title");

  let titleSpan = document.createElement("span");
  titleSpan.classList.add("title-text");
  titleSpan.innerHTML = name;

  let cross = document.createElement("span");
  cross.classList.add("cross-button");
  cross.innerHTML = "X";

  cross.onclick = () => {
    closeDialog();
  };

  title.append(titleSpan, cross);
  dialog.append(title);
  dialog.style.border = "1px solid black";
  dialog.style.boxShadow = "-1px 1px grey";
  return dialog;
}

function openDialog1(name) {
  if (document.getElementById("activeDialog") != null) {
    closeDialog();
  }

  let dialog = document.createElement("div");
  dialog.id = "activeDialog";
  dialog.classList.add("activeCustomDialog");

  let title = document.createElement("div");


  let titleSpan = document.createElement("span");
  titleSpan.classList.add("title-text");
  titleSpan.innerHTML = name;

  let cross = document.createElement("span");
  cross.classList.add("cross-button");
  cross.innerHTML = "X";
  cross.style.backgroundColor = "white";

  cross.onclick = () => {
    closeDialog();
  };

  title.append(titleSpan, cross);
  dialog.append(title);
  dialog.style.border = "1px solid black";
  dialog.style.boxShadow = "-1px 1px grey";
  return dialog;
}

function closeDialog() {
  document.querySelector(".activeCustomDialog").remove();
}

function applyHiddenOrShow() {
  let list = document.querySelectorAll('input[name="models[]"]');
  closeDialog();
  for (let i = 0; i < list.length; i++) {
    if (list[i].checked) {
      let elm = document.getElementById(list[i].value);
      elm.parentElement.style.display = "flex";
      if (elm.previousElementSibling.classList.contains("list-arrow"))
        elm.previousElementSibling.classList.add("list-open");
      elm.parentElement.nextElementSibling.style.display = "block";
    } else {
      elm = document.getElementById(list[i].value);
      elm.parentElement.style.display = "none";
      if (elm.previousElementSibling.classList.contains("list-arrow")) {
        elm.previousElementSibling.classList.add("list-open");
        elm.parentElement.nextElementSibling.style.display = "none";
      }
    }
  }
}

function VerticalDialog() {
  let dialoggp = openDialog1('Entity Has Mutiple Entities');

  let div = document.createElement('div');

  let im1 = document.createElement('img');
  im1.src = 'icons/font/image/mt.png';
  im1.style.width = '50px';
  im1.style.height = '50px';
  im1.style.marginLeft = "5px";
  im1.style.marginTop = "5px";
  im1.opacity = 0.7;

  let lb0 = document.createElement('label');
  lb0.innerHTML = 'About Entity';
  lb0.style.marginLeft = "10px";
  lb0.style.marginTop = "5px";
  lb0.style.width = "100px";
  lb0.style.color = "Blue";


  let lb1 = document.createElement('label');
  lb1.innerHTML = 'Number of Entity';
  lb1.style.marginLeft = "5px";
  lb1.style.width = "150px";

  let el2 = document.createElement('input');
  el2.type = "number";
  el2.step = "1";
  el2.value = "2";
  el2.min = "2";
//el2.max="10";
  el2.style.marginLeft = "50px";
  el2.style.marginTop = "5px";
  el2.style.width = "100px";


  let AButton = document.createElement('button');

  AButton.innerHTML = "Apply";
  AButton.style.marginLeft = "calc(100% - 180px)";
  AButton.style.marginBottom = "5px";
  AButton.style.width = "80px";
  AButton.style.color = "Blue";
  AButton.style.backgroundColor = "#B0E0E6";
  AButton.onclick = () => {
    ChangeData2(el2.value);
    closeDialog();
    vcheck = 1;
  };

  let CButton = document.createElement('button');
  CButton.innerHTML = "Cancel";
  CButton.style.marginLeft = "5px";
  CButton.style.width = "80px";
  CButton.style.color = "Blue";
  CButton.style.backgroundColor = "#B0E0E6";
  CButton.onclick = () => {
    closeDialog();
    vcheck = 1;
  };


  let xd = document.createElement('br');
  let xd1 = document.createElement('br');


  div.style.paddingBottom = "5px";


  div.appendChild(lb1);

  div.appendChild(el2);


  div.appendChild(xd1);


  div.style.border = "0.1px solid black";
  div.style.boxShadow = "-1px 1px grey";
  div.style.marginTop = '10px';
  div.style.marginLeft = '10px';
  div.style.marginRight = '10px';
  div.style.marginBottom = '10px';
  div.style.backgroundColor = "#B0E0E6";

  let diva = document.createElement('div');
  diva.appendChild(im1);
  diva.appendChild(lb0);
  diva.appendChild(xd);

  diva.appendChild(div);

  diva.style.border = "0.1px solid black";
  diva.style.boxShadow = "-1px 1px grey";
  diva.style.marginTop = '5px';
  diva.style.marginLeft = '5px';
  diva.style.marginRight = '5px';
  diva.style.marginBottom = '5px';
  diva.style.backgroundColor = "#4682B4";


  dialoggp.append(diva);
  dialoggp.appendChild(AButton);
  dialoggp.appendChild(CButton);
  dialoggp.style.marginTop = '-200px';
  dialoggp.style.border = "0.1px solid black";
  dialoggp.style.boxShadow = "-1px 1px grey";


  document.getElementsByTagName('body')[0].append(dialoggp);
  addInitialArrowEvent();

}

function ChangeData2(x1) {


  x1 = parseInt(x1) - 2;


  let fxPorts = [];


  for (let i = 0; i < x1; i++) {
    let stam = {
      id: 'Lefttg',
      offset: {
        x: 0.5, y: 0.5
      },
      visibility: ej.diagrams.PortVisibility.Visible,
      shape: 'Circle',
      width: 4,
      height: 4
    };
    stam.id = 'Left' + (i + 1).toString();
    stam.offset.x = 0.5;
    stam.offset.y = (i + 1) / (x1 + 1);
    fxPorts[i] = stam;
  }


  fxPorts[x1] = {
    id: 'x11',
    offset: {
      x: 0.5, y: 0
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'Circle',
    width: 4,
    height: 4
  };


  fxPorts[x1 + 1] = {
    id: 'x12',
    offset: {
      x: 0.5, y: 1
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'Circle',
    width: 4,
    height: 4
  };


//ham nay de lay ma, luon luon su dung ham nay
//dia1=JSON.stringify(diagramData);


//diagramData.nodes[diagramData.nodes.length-1].ports=fxPorts;


  let truyNode = diagram.getObject(diagram.nodes[diagram.nodes.length - 1].id);
  diagram.removePorts(truyNode, truyNode.ports);
  diagram.dataBind();

  for (let i = 0; i < (x1 + 2); i++) {
    diagram.addPorts(truyNode, [fxPorts[i]]);
  }
//truyNode.ports=fxPorts;


  diagram.dataBind();


//let diagramElement = document.getElementById('diagram').ej2_instances[0];
  //  diagramElement.clear();
  // if (diagramData === '') {
  //     diagramData = JSON.parse(diagramElement.saveDiagram());
  // }
  // diagramElement.isLoading = true;
  // diagramElement.loadDiagram(JSON.stringify(diagramData));
  // diagramElement.clearSelection();
  // diagramElement.isLoading = false;

}


function HorizontalDialog() {
  let dialoggp = openDialog1('Entity Has Mutiple Entities');

  let div = document.createElement('div');

  let im1 = document.createElement('img');
  im1.src = 'icons/font/image/mt.png';
  im1.style.width = '50px';
  im1.style.height = '50px';
  im1.style.marginLeft = "5px";
  im1.style.marginTop = "5px";
  im1.opacity = 0.7;

  let lb0 = document.createElement('label');
  lb0.innerHTML = 'About Entity';
  lb0.style.marginLeft = "10px";
  lb0.style.marginTop = "5px";
  lb0.style.width = "100px";
  lb0.style.color = "Blue";


  let lb1 = document.createElement('label');
  lb1.innerHTML = 'Number of Entity';
  lb1.style.marginLeft = "5px";
  lb1.style.width = "150px";

  let el2 = document.createElement('input');
  el2.type = "number";
  el2.step = "1";
  el2.value = "2";
  el2.min = "2";
//el2.max="10";
  el2.style.marginLeft = "50px";
  el2.style.marginTop = "5px";
  el2.style.width = "100px";


  let AButton = document.createElement('button');

  AButton.innerHTML = "Apply";
  AButton.style.marginLeft = "calc(100% - 180px)";
  AButton.style.marginBottom = "5px";
  AButton.style.width = "80px";
  AButton.style.color = "Blue";
  AButton.style.backgroundColor = "#B0E0E6";
  AButton.onclick = () => {
    ChangeData3(el2.value);
    closeDialog();
    vcheck = 1;
  };

  let CButton = document.createElement('button');
  CButton.innerHTML = "Cancel";
  CButton.style.marginLeft = "5px";
  CButton.style.width = "80px";
  CButton.style.color = "Blue";
  CButton.style.backgroundColor = "#B0E0E6";
  CButton.onclick = () => {
    closeDialog();
    vcheck = 1;
  };


  let xd = document.createElement('br');
  let xd1 = document.createElement('br');


  div.style.paddingBottom = "5px";


  div.appendChild(lb1);

  div.appendChild(el2);


  div.appendChild(xd1);


  div.style.border = "0.1px solid black";
  div.style.boxShadow = "-1px 1px grey";
  div.style.marginTop = '10px';
  div.style.marginLeft = '10px';
  div.style.marginRight = '10px';
  div.style.marginBottom = '10px';
  div.style.backgroundColor = "#B0E0E6";

  let diva = document.createElement('div');
  diva.appendChild(im1);
  diva.appendChild(lb0);
  diva.appendChild(xd);

  diva.appendChild(div);

  diva.style.border = "0.1px solid black";
  diva.style.boxShadow = "-1px 1px grey";
  diva.style.marginTop = '5px';
  diva.style.marginLeft = '5px';
  diva.style.marginRight = '5px';
  diva.style.marginBottom = '5px';
  diva.style.backgroundColor = "#4682B4";


  dialoggp.append(diva);
  dialoggp.appendChild(AButton);
  dialoggp.appendChild(CButton);
  dialoggp.style.marginTop = '-200px';
  dialoggp.style.border = "0.1px solid black";
  dialoggp.style.boxShadow = "-1px 1px grey";


  document.getElementsByTagName('body')[0].append(dialoggp);
  addInitialArrowEvent();

}

function ChangeData3(x1) {


//let diagramData= JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());


  x1 = parseInt(x1) - 2;


  let fxPorts = [];


  for (let i = 0; i < x1; i++) {
    let stam = {
      id: 'Lefttg',
      offset: {
        x: 0.5, y: 0.5
      },
      visibility: 1,
      shape: 'Circle',
      width: 4,
      height: 4
    };
    stam.id = 'Left' + (i + 1).toString();
    stam.offset.x = (i + 1) / (x1 + 1);
    stam.offset.y = 0.5;
    fxPorts[i] = stam;
  }


  fxPorts[x1] = {
    id: 'x11',
    offset: {
      x: 0, y: 0.5
    },
    visibility: 1,
    shape: 'Circle',
    width: 4,
    height: 4
  };


  fxPorts[x1 + 1] = {
    id: 'x12',
    offset: {
      x: 1, y: 0.5
    },
    visibility: 1,
    shape: 'Circle',
    width: 4,
    height: 4
  };


//ham nay de lay ma, luon luon su dung ham nay
//dia1=JSON.stringify(diagramData);


//diagramData.nodes[diagramData.nodes.length-1].ports=fxPorts;


  let truyNode = diagram.getObject(diagram.nodes[diagram.nodes.length - 1].id);
  diagram.removePorts(truyNode, truyNode.ports);
  diagram.dataBind();

  for (let i = 0; i < (x1 + 2); i++) {
    diagram.addPorts(truyNode, [fxPorts[i]]);
  }
//truyNode.ports=fxPorts;


  diagram.dataBind();


//let diagramElement = document.getElementById('diagram').ej2_instances[0];
  //  diagramElement.clear();
  // if (diagramData === '') {
  //     diagramData = JSON.parse(diagramElement.saveDiagram());
  // }
  // diagramElement.isLoading = true;
  // diagramElement.loadDiagram(JSON.stringify(diagramData));
  // diagramElement.clearSelection();
  // diagramElement.isLoading = false;

}


function GroupOfItemDialog(cs) {
  let dialoggp = openDialog1('Group Property');

  let div = document.createElement('div');

  let im1 = document.createElement('img');
  im1.src = 'icons/font/image/optionmix1.png';
  im1.style.width = '50px';
  im1.style.height = '50px';
  im1.style.marginLeft = "5px";
  im1.style.marginTop = "5px";
  im1.opacity = 0.7;


  let lb0 = document.createElement('label');
  lb0.innerHTML = 'Input Property';
  lb0.style.marginLeft = "10px";
  lb0.style.marginTop = "5px";
  lb0.style.width = "150px";
  lb0.style.color = "Blue";

  let lb1 = document.createElement('label');
  lb1.innerHTML = 'Number of Input';
  lb1.style.marginLeft = "5px";
  lb1.style.width = "150px";

  let el2 = document.createElement('input');
  el2.type = "number";
  el2.step = "1";
  el2.value = "2";
  el2.min = "2";
//el2.max="10";
  el2.style.marginLeft = "50px";
  el2.style.marginTop = "5px";
  el2.style.width = "100px";


  let AButton = document.createElement('button');

  AButton.innerHTML = "Apply";
  AButton.style.marginLeft = "calc(100% - 180px)";
  AButton.style.marginBottom = "5px";
  AButton.style.width = "80px";
  AButton.style.color = "Blue";
  AButton.style.backgroundColor = "#B0E0E6";
  AButton.onclick = () => {
    ChangeData1(el2.value, cs);
    closeDialog();
    vcheck = 1;
  };

  let CButton = document.createElement('button');
  CButton.innerHTML = "Cancel";
  CButton.style.marginLeft = "5px";
  CButton.style.width = "80px";
  CButton.style.color = "Blue";
  CButton.style.backgroundColor = "#B0E0E6";
  CButton.onclick = () => {
    closeDialog();
    vcheck = 1;
  };


  let xd = document.createElement('br');

  let xd1 = document.createElement('br');


  div.style.paddingBottom = "5px";


  div.appendChild(lb1);

  div.appendChild(el2);


  div.appendChild(xd);


  div.style.border = "1px solid black";
  div.style.boxShadow = "-1px 1px grey";
  div.style.marginTop = '10px';
  div.style.marginLeft = '10px';
  div.style.marginRight = '10px';
  div.style.marginBottom = '10px';
  div.style.backgroundColor = "#B0E0E6";

  let diva = document.createElement('div');

  diva.appendChild(im1);

  diva.appendChild(lb0);

  diva.appendChild(xd1);

  diva.appendChild(div);


  diva.style.border = "1px solid black";
  diva.style.boxShadow = "-1px 1px grey";
  diva.style.marginTop = '5px';
  diva.style.marginLeft = '5px';
  diva.style.marginRight = '5px';
  diva.style.marginBottom = '5px';
  diva.style.backgroundColor = "#4682B4";


  dialoggp.append(diva);
  dialoggp.appendChild(AButton);
  dialoggp.appendChild(CButton);
  dialoggp.style.marginTop = '-200px';
  dialoggp.style.border = "1px solid black";
  dialoggp.style.boxShadow = "-1px 1px grey";


  document.getElementsByTagName('body')[0].append(dialoggp);
  addInitialArrowEvent();

}

function ChangeData1(x1, cs) {


//let diagramData= JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());


//diagramData.nodes[diagramData.nodes.length-1].annotations[0].content=x4;


  x1 = parseInt(x1);

  let fxPorts = [];


  for (let i = 0; i < x1; i++) {
    let stam = {
      id: 'Lefttg',
      offset: {
        x: 0, y: 0.5
      },
      visibility: ej.diagrams.PortVisibility.Visible,
      shape: 'Circle',
      width: 2,
      height: 2
    };
    stam.id = 'Left' + (i + 1).toString();
    stam.offset.x = 0;
    stam.offset.y = (i + 1) / (x1 + 1);
    fxPorts[i] = stam;
  }

  fxPorts[x1] = {
    id: 'RightMidlle',
    offset: {
      x: 1, y: 0.5
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'Circle',
    width: 2,
    height: 2
  };

  fxPorts[x1 + 1] = {
    id: 'BottomMidlle',
    offset: {
      x: 0.5, y: 0
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'Circle',
    width: 2,
    height: 2
  };

  fxPorts[x1 + 2] = {
    id: 'TopMidlle',
    offset: {
      x: 0.5, y: 1
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'Circle',
    width: 2,
    height: 2
  };


  let segx5 = 75;
  if (x1 > 3) {
    segx5 = (x1 + 1) * 20;
  }


//ham nay de lay ma, luon luon su dung ham nay
//dia1=JSON.stringify(diagramData);


  let segsum = "<g transform=\"translate(2, 2)\"><rect vector-effect=\"non-scaling-stroke\" height=\"" + segx5.toString() + "\" width=\"50\" stroke=\"black\" stroke-width=\"1\" fill=\"transparent\"></rect><foreignObject class=\"symbol-text-container\" x=\"6.25\" width=\"37.5\" height=\"" + segx5.toString() + "\" visibility=\"hidden\"><div style=\"height:100px\" class=\"flex-container\"><div width=\"37.5\" class=\"symbol-text-element\">Group</div></div></foreignObject></g>";


//diagramData.nodes[diagramData.nodes.length-1].shape.content=segsum;
//diagramData.nodes[diagramData.nodes.length-1].height=segx5;
//diagramData.nodes[diagramData.nodes.length-1].width=50;
//diagramData.nodes[diagramData.nodes.length-1].ports=fxPorts;


  let truyNode = diagram.getObject(diagram.nodes[diagram.nodes.length - 1].id);
  truyNode.shape.content = segsum;
  truyNode.height = segx5;
  truyNode.width = 50;
  diagram.dataBind();

  diagram.removePorts(truyNode, truyNode.ports);


  diagram.dataBind();

  if (cs == 0) {
    for (let i = 0; i < (x1 + 1); i++) {
      diagram.addPorts(truyNode, [fxPorts[i]]);
    }
  }

  if (cs == 1) {
    for (let i = 0; i < (x1 + 3); i++) {
      diagram.addPorts(truyNode, [fxPorts[i]]);
    }
  }
//truyNode.ports=fxPorts;


  diagram.dataBind();

//let diagramElement = document.getElementById('diagram').ej2_instances[0];
  //diagramElement.clear();
  //if (diagramData === '') {
  //  diagramData = JSON.parse(diagramElement.saveDiagram());
  //}
  //diagramElement.isLoading = true;
  //diagramElement.loadDiagram(JSON.stringify(diagramData));
  //diagramElement.clearSelection();
  //diagramElement.isLoading = false;

}

function GroupOfPeopleDialog() {
  let dialoggp = openDialog1('Group Of People');

  let div = document.createElement('div');

  let label = document.createElement('label');
  label.innerHTML = 'Options';
  label.style.marginLeft = "5px";
  label.style.width = "100px";


  let lb = document.createElement('label');
  lb.innerHTML = 'Format';
  lb.style.marginLeft = "5px";
  lb.style.width = "100px";


  let lb1 = document.createElement('label');
  lb1.innerHTML = 'Start Number';
  lb1.style.marginLeft = "5px";
  lb1.style.width = "100px";

  let lb2 = document.createElement('label');
  lb2.innerHTML = 'Group Name';
  lb2.style.marginLeft = "5px";
  lb2.style.width = "100px";


  let lb3 = document.createElement('label');
  lb3.innerHTML = 'Has Frame';
  lb3.style.marginLeft = "5px";


  let el = document.createElement('select');
  let label1 = document.createTextNode('Option 1');
  let opt1 = document.createElement('option');
  opt1.value = 'Option 1';
  opt1.appendChild(label1);
  let label2 = document.createTextNode('Option 2');
  let opt2 = document.createElement('option');
  opt2.value = 'Option 2';
  opt2.appendChild(label2);
  let label3 = document.createTextNode('Option 3');
  let opt3 = document.createElement('option');
  opt3.value = 'Option 3';
  opt3.appendChild(label3);
  let label4 = document.createTextNode('Option 4');
  let opt4 = document.createElement('option');
  opt4.value = 'Option 4';
  opt4.appendChild(label4);
  el.appendChild(opt1);
  el.appendChild(opt2);
  el.appendChild(opt3);
  el.appendChild(opt4);
  el.style.marginLeft = "50px";
  el.style.width = "150px";
//el.onchange = () => {
//if(el.value=='Option 3')
//{
//nhap4.value='G1';
//el2.min="3";
//el2.max="3";
//el2.value="3";
//}
//if(el.value=='Option 4')
//{
//nhap4.value='G4';
//el2.min="3";
//el2.max="3";
//el1.value='P';
//AButton.onclick();
//}	
  //};


  let el1 = document.createElement('select');
  let label11 = document.createTextNode('Person');
  let opt11 = document.createElement('option');
  opt11.value = 'Person';
  opt11.appendChild(label11);
  let label12 = document.createTextNode('P');
  let opt12 = document.createElement('option');
  opt12.value = 'P';
  opt12.appendChild(label12);
  el1.appendChild(opt11);
  el1.appendChild(opt12);
  el1.style.marginLeft = "50px";
  el1.style.marginTop = "5px";
  el1.style.width = "150px";


  let el2 = document.createElement('input');
  el2.type = "number";
  el2.step = "1";
  el2.value = "1";
  el2.min = "1";
  el2.max = "10";
  el2.style.marginLeft = "50px";
  el2.style.marginTop = "5px";
  el2.style.width = "150px";


  let nhap4 = document.createElement('input');
  nhap4.type = "text"
  nhap4.value = "Group Name"
  nhap4.style.marginLeft = "50px";
  nhap4.style.marginTop = "5px";
  nhap4.style.width = "150px";


  let ckb5 = document.createElement('input');
  ckb5.type = "checkbox"
  ckb5.style.marginLeft = "20px";
  ckb5.style.marginTop = "5px";
  ckb5.checked = true;

  let AButton = document.createElement('button');

  AButton.innerHTML = "Apply";
  AButton.style.marginLeft = "calc(100% - 180px)";
  AButton.style.marginBottom = "5px";
  AButton.style.width = "80px";
  AButton.onclick = () => {
    ChangeDataF(el.value, el1.value, el2.value, nhap4.value, ckb5.checked);
    closeDialog();
    vcheck = 1;
  };

  let CButton = document.createElement('button');
  CButton.innerHTML = "Cancel";
  CButton.style.marginLeft = "5px";
  CButton.style.width = "80px";
  CButton.onclick = () => {
    closeDialog();
    vcheck = 1;
  };


  let xd = document.createElement('br');
  let xd1 = document.createElement('br');
  let xd2 = document.createElement('br');
  let xd3 = document.createElement('br');
  let xd4 = document.createElement('br');


  div.style.paddingBottom = "5px";

  div.appendChild(label);

  div.appendChild(el);


  div.appendChild(xd);


  div.appendChild(lb);

  div.appendChild(el1);


  div.appendChild(xd1);


  div.appendChild(lb1);

  div.appendChild(el2);


  div.appendChild(xd2);


  div.appendChild(lb2);
  div.appendChild(nhap4);

  div.appendChild(xd3);

  div.appendChild(ckb5);
  div.appendChild(lb3);

  div.appendChild(xd4);


  div.style.border = "1px solid black";
  div.style.boxShadow = "-1px 1px grey";
  div.style.marginTop = '10px';
  div.style.marginLeft = '10px';
  div.style.marginRight = '10px';
  div.style.marginBottom = '10px';
  div.style.backgroundColor = "#B0E0E6";

  let diva = document.createElement('div');

  diva.appendChild(div);
  diva.appendChild(AButton);
  diva.appendChild(CButton);
  diva.style.border = "1px solid black";
  diva.style.boxShadow = "-1px 1px grey";
  diva.style.marginTop = '5px';
  diva.style.marginLeft = '5px';
  diva.style.marginRight = '5px';
  diva.style.marginBottom = '5px';
  diva.style.backgroundColor = "#4682B4";


  dialoggp.append(diva);
  dialoggp.style.marginTop = '-200px';
  dialoggp.style.border = "1px solid black";
  dialoggp.style.boxShadow = "-1px 1px grey";


  document.getElementsByTagName('body')[0].append(dialoggp);
  addInitialArrowEvent();

}

function ChangeDataF(x1, x2, x3, x4, x5) {


//let diagramData= JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());


//diagramData.nodes[diagramData.nodes.length-1].annotations[0].content=x4;


  let truyNode = diagram.getObject(diagram.nodes[diagram.nodes.length - 1].id);
  truyNode.annotations[0].content = x4;
  diagram.dataBind();

  if (x1 == "Option 1") {
    let segx5 = "1";

    if (x5 === false) {
      segx5 = "0";
    }

    if (x5 === true) {
      segx5 = "1";
    }


//ham nay de lay ma, luon luon su dung ham nay
//dia1=JSON.stringify(diagramData);


    let segsum = "<g transform=\"translate(2, 2)\"><rect vector-effect=\"non-scaling-stroke\" height=\"40\" width=\"120\" stroke=\"black\" fill=\"transparent\" stroke-width=\"" + segx5 + "\"></rect><circle vector-effect=\"non-scaling-stroke\" cx=\"11\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"9.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"13.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"11.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18\"></path><circle vector-effect=\"non-scaling-stroke\" cx=\"41\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"39.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"43.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"41.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 41 13.5 L 41 19.5 L 34 29.5 M 41 19.5 L 48 29.5 M 33 18 L 49 18\"></path><circle vector-effect=\"non-scaling-stroke\" cx=\"101\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"99.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"103.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"101.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 101 13.5 L 101 19.5 L 94 29.5 M 101 19.5 L 108 29.5 M 93 18 L 109 18\"></path><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"62\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"72\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"82\" cy=\"17.5\" r=\"1.5\"></circle><foreignObject class=\"symbol-text-container\" x=\"2\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " " + x3 + "</i></div></div></div></foreignObject><foreignObject class=\"symbol-text-container\" x=\"32\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " " + (parseFloat(x3) + 1).toString() + "</i></div></div></div></foreignObject><foreignObject class=\"symbol-text-container\" x=\"92\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " N" + "</i></div></div></div></foreignObject></g>";

//diagramData.nodes[diagramData.nodes.length-1].shape.content=segsum;

    truyNode.shape.content = segsum;
    truyNode.height = 100;
    truyNode.width = 295;
    diagram.dataBind();
  }

  if (x1 == "Option 2") {
    let segx5 = "1";

    if (x5 === false) {
      segx5 = "0";
    }

    if (x5 === true) {
      segx5 = "1";
    }


//ham nay de lay ma, luon luon su dung ham nay
//dia1=JSON.stringify(diagramData);


    let segsum = "<g transform=\"translate(2, 2)\"><rect vector-effect=\"non-scaling-stroke\" height=\"40\" width=\"90\" stroke=\"black\" fill=\"transparent\" stroke-width=\"" + segx5 + "\"></rect><circle vector-effect=\"non-scaling-stroke\" cx=\"11\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"9.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"13.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"11.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18\"></path><circle vector-effect=\"non-scaling-stroke\" cx=\"71\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"69.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"73.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"71.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 71 13.5 L 71 19.5 L 64 29.5 M 71 19.5 L 78 29.5 M 63 18 L 79 18\"></path><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"32\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"42\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"52\" cy=\"17.5\" r=\"1.5\"></circle><foreignObject class=\"symbol-text-container\" x=\"2\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " " + x3 + "</i></div></div></div></foreignObject><foreignObject class=\"symbol-text-container\" x=\"62\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " N" + "</i></div></div></div></foreignObject></g>";

//diagramData.nodes[diagramData.nodes.length-1].shape.content=segsum;
//diagramData.nodes[diagramData.nodes.length-1].height=100;
//diagramData.nodes[diagramData.nodes.length-1].width=225;


    truyNode.shape.content = segsum;
    truyNode.height = 100;
    truyNode.width = 225;
    diagram.dataBind();
  }


  if (x1 == "Option 3") {
    let segx5 = "1";

    if (x5 === false) {
      segx5 = "0";
    }

    if (x5 === true) {
      segx5 = "1";
    }


//ham nay de lay ma, luon luon su dung ham nay
//dia1=JSON.stringify(diagramData);


    let segsum = "<g transform=\"translate(2, 2)\"><rect vector-effect=\"non-scaling-stroke\" height=\"40\" width=\"90\" stroke=\"black\" fill=\"transparent\" stroke-width=\"" + segx5 + "\"></rect><circle vector-effect=\"non-scaling-stroke\" cx=\"11\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"9.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"13.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"11.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18\"></path><circle vector-effect=\"non-scaling-stroke\" cx=\"41\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"39.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"43.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"41.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 41 13.5 L 41 19.5 L 34 29.5 M 41 19.5 L 48 29.5 M 33 18 L 49 18\"></path><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"62\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"72\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"82\" cy=\"17.5\" r=\"1.5\"></circle><foreignObject class=\"symbol-text-container\" x=\"2\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " " + x3 + "</i></div></div></div></foreignObject><foreignObject class=\"symbol-text-container\" x=\"32\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " " + (parseFloat(x3) + 1).toString() + "</i></div></div></div></foreignObject></g>";

//diagramData.nodes[diagramData.nodes.length-1].shape.content=segsum;
//diagramData.nodes[diagramData.nodes.length-1].height=100;
//diagramData.nodes[diagramData.nodes.length-1].width=225;

    truyNode.shape.content = segsum;
    truyNode.height = 100;
    truyNode.width = 225;
    diagram.dataBind();
  }


  if (x1 == "Option 4") {
    let segx5 = "1";

    if (x5 === false) {
      segx5 = "0";
    }

    if (x5 === true) {
      segx5 = "1";
    }


//ham nay de lay ma, luon luon su dung ham nay
//dia1=JSON.stringify(diagramData);


    let segsum = "<g transform=\"translate(2, 2)\"><rect vector-effect=\"non-scaling-stroke\" height=\"40\" width=\"180\" stroke=\"black\" fill=\"transparent\" stroke-width=\"" + segx5 + "\"></rect><circle vector-effect=\"non-scaling-stroke\" cx=\"11\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"9.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"13.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"11.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18\"></path><circle vector-effect=\"non-scaling-stroke\" cx=\"71\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"69.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"73.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"71.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 71 13.5 L 71 19.5 L 64 29.5 M 71 19.5 L 78 29.5 M 63 18 L 79 18\"></path><circle vector-effect=\"non-scaling-stroke\" cx=\"101\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"99.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"103.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"101.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 101 13.5 L 101 19.5 L 94 29.5 M 101 19.5 L 108 29.5 M 93 18 L 109 18\"></path><circle vector-effect=\"non-scaling-stroke\" cx=\"161\" cy=\"7.5\" r=\"6\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"159.0\" cy=\"6\" r=\"1\" fill=\"black\"></circle><circle vector-effect=\"non-scaling-stroke\" cx=\"163.0\" cy=\"6\" r=\"1.0\" fill=\"black\"></circle><ellipse vector-effect=\"non-scaling-stroke\" cx=\"161.0\" cy=\"11.5\" rx=\"2.0\" ry=\"0.75\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\"></ellipse><path vector-effect=\"non-scaling-stroke\" fill=\"transparent\" stroke=\"black\" stroke-width=\"1\" d=\"M 161 13.5 L 161 19.5 L 154 29.5 M 161 19.5 L 168 29.5 M 153 18 L 169 18\"></path><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"32\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"42\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"52\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"122\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"132\" cy=\"17.5\" r=\"1.5\"></circle><circle vector-effect=\"non-scaling-stroke\" fill=\"black\" cx=\"142\" cy=\"17.5\" r=\"1.5\"></circle><foreignObject class=\"symbol-text-container\" x=\"2\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " " + x3 + "</i></div></div></div></foreignObject><foreignObject class=\"symbol-text-container\" x=\"59\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " N" + "</i></div></div></div></foreignObject><foreignObject class=\"symbol-text-container\" x=\"90\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + "N+1" + "</i></div></div></div></foreignObject><foreignObject class=\"symbol-text-container\" x=\"152\" y=\"30\" width=\"25\" height=\"10\" visibility=\"show\"><div class=\"flex-container\"><div class=\"symbol-text-element\"><div style=\"font-size:5px;font-weight:100\"><i>" + x2 + " M" + "</i></div></div></div></foreignObject></g>";

//diagramData.nodes[diagramData.nodes.length-1].shape.content=segsum;
//diagramData.nodes[diagramData.nodes.length-1].height=100;
//diagramData.nodes[diagramData.nodes.length-1].width=450;

    truyNode.shape.content = segsum;
    truyNode.height = 100;
    truyNode.width = 450;
    diagram.dataBind();
  }


//let diagramElement = document.getElementById('diagram').ej2_instances[0];
  //  diagramElement.clear();
  //if (diagramData === '') {
  //  diagramData = JSON.parse(diagramElement.saveDiagram());
  //}
  //diagramElement.isLoading = true;
  //diagramElement.loadDiagram(JSON.stringify(diagramData));
  //diagramElement.clearSelection();
  //diagramElement.isLoading = false;

}