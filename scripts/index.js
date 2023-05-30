let persons = getCommPerson();
let isLeftDrag = false;
let isRightDrag = false;
let communication = getCommunication();
let application = getCommApplication();
let commLink = getCommLink();
let analysis = getCommAnalysis();
let commSignal = getCommSignal();
let area = getCommAreAndLocation();
let others = getCommOthers();
let commlabel = getCommLabel();
let quickComm = getQuickComm();
let system = getThoerySystem();
let thoery = getTheory();
let fundamental = getThoeryFundamental();
let interface = getTheoryInterface();
let theorySignal = getTheorySignal();
let instrument = getTheoryInstrument();
let functions = getTheoryFunction();
let stability = getTheoryStability();
let thoerylabel = getTheoryLabel();
let quickTheory = getQuickTheory();
let operatorTheory = getOperatorTheory();
fetch("https://restcountries.com/v3.1/all")
  .then((a) => a.json())
  .then((r) => {
    localStorage.setItem(
      "location_country",
      JSON.stringify(
        r.map((a, index) => ({id: index + 1, name: a.name.common}))
      )
    );
  });
let allShapes = []
  .concat(persons)
  .concat(communication)
  .concat(application)
  .concat(commLink)
  .concat(analysis)
  .concat(commSignal)
  .concat(area)
  .concat(others)
  .concat(commlabel)
  .concat(system)
  .concat(thoery)
  .concat(fundamental)
  .concat(interface)
  .concat(theorySignal)
  .concat(instrument)
  .concat(functions)
  .concat(stability)
  .concat(thoerylabel)
  // .concat(getEquations('commPalette'))
  // .concat(getEquations('theoryPalette'));

allShapes = everyShape;

var text = JSON.stringify(allShapes);
var commPalette = new ej.diagrams.SymbolPalette({
  expandMode: "Single",
  palettes: [
    {
      id: "quickshapes",
      expanded: false,
      symbols: quickComm,
      title: "Quick Entities",
    },
    {
      id: "person",
      expanded: false,
      symbols: persons,
      title: "Person"
    },
    {
      id: "Communication",
      expanded: false,
      symbols: communication,
      title: "Communication",
    },
    {
      id: "Application",
      expanded: false,
      symbols: application,
      title: "Application",
    },
    {
      id: "CommmunicationLink",
      expanded: false,
      symbols: commLink,
      title: "Communication Link",
    },
    {
      id: "Analysis",
      expanded: false,
      symbols: analysis,
      title: "Analysis"
    },
    {
      id: "CommunicationSignal",
      expanded: false,
      symbols: commSignal,
      title: "Communication Signal",
    },
    {
      id: "AreaandLocation",
      expanded: false,
      symbols: area,
      title: "Area and Location",
    },
    {
      id: "OtherCommunicationElement",
      expanded: false,
      symbols: others,
      title: "Other Communication Element",
    },
    {
      id: "CommLabelPalette",
      expanded: false,
      symbols: commlabel,
      title: "Label",
    },
    {
      id: "EquationsCommPalette",
      expanded: false,
      symbols: getEquations('commPalette'),
      title: "Equations"
    }
  ],
  symbolHeight: 75,
  symbolWidth: 275,
  width: "100%",
  height: "100%",
  enableSearch: true,
  // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
  getSymbolInfo: (symbol) => {
    return {
      fit: true,
      tooltip:
        symbol.addInfo !== null && symbol.addInfo !== undefined
          ? symbol.addInfo[0].toolTip
          : symbol.id,
      description: {
        overflow: "Wrap",
        text:
          symbol.addInfo !== null && symbol.addInfo !== undefined
            ? symbol.addInfo[0].title
            : symbol.id,
        wrap: "WrapWithOverflow",
      },
    };
  },
  getNodeDefaults: function (symbol) {
    symbol.constraints =
      ej.diagrams.NodeConstraints.Default |
      ej.diagrams.NodeConstraints.AllowDrop;
  },
});

var theoryPalette = new ej.diagrams.SymbolPalette({
  expandMode: "Single",
  palettes: [
    {
      id: "quickshapestheory",
      expanded: false,
      symbols: quickTheory,
      title: "Quick Entities",
    },
    {id: "system", expanded: false, symbols: system, title: "System"},
    {id: "theory", expanded: false, symbols: thoery, title: "Theory"},
    {
      id: "fundamental",
      expanded: false,
      symbols: fundamental,
      title: "Fundamental",
    },
    {
      id: "interface",
      expanded: false,
      symbols: interface,
      title: "Interface",
    },
    {id: "signal", expanded: false, symbols: theorySignal, title: "Signal"},
    {
      id: "instrument",
      expanded: false,
      symbols: instrument,
      title: "Instrument",
    },
    {
      id: "functionpallete",
      expanded: false,
      symbols: functions,
      title: "Function",
    },
    {
      id: "stability",
      expanded: false,
      symbols: stability,
      title: "Stability",
    },
    {id: "label", expanded: false, symbols: thoerylabel, title: "Label"},
    {
      id: "operator",
      expanded: false,
      symbols: operatorTheory,
      title: "Operator",
    },
    {
      id: "EquationsTheoryPalette",
      expanded: false,
      symbols: getEquations('theoryPalette'),
      title: "Equations"
    }
  ],
  symbolHeight: 75,
  symbolWidth: 300,
  width: "100%",
  height: "100%",
  enableSearch: true,
  // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
  getSymbolInfo: (symbol) => {
    return {
      fit: true,
      tooltip:
        symbol.addInfo !== null && symbol.addInfo !== undefined
          ? symbol.addInfo[0].toolTip
          : symbol.id,
      description: {
        overflow: "Wrap",
        text:
          symbol.addInfo !== null && symbol.addInfo !== undefined
            ? symbol.addInfo[0].title
            : symbol.id,
        wrap: "WrapWithOverflow",
      },
    };
  },
  getNodeDefaults: function (symbol) {
    symbol.constraints =
      ej.diagrams.NodeConstraints.Default |
      ej.diagrams.NodeConstraints.AllowDrop;
  },
});

commPalette.appendTo("#symbol-palette-comm");
theoryPalette.appendTo("#symbol-palette-theory");

function switchToTheory() {
  if (currentDomain === 1) {
    return;
  }
  currentDomain = 1;
  let commPalette = document.getElementById("symbol-palette-comm");
  let commModel = document.getElementById("comm-model-list");
  let theoryPalette = document.getElementById("symbol-palette-theory");
  let theoryModel = document.getElementById("theory-model-list");
  commPalette.style.display = "none";
  commModel.style.display = "none";
  theoryPalette.style.display = "block";
  theoryModel.style.display = "block";
  document
    .getElementById("Ribbon_toTheoryDomain")
    .classList.add("disabled-custom");
  document
    .getElementById("Ribbon_communication")
    .classList.remove("disabled-custom");
  document
    .getElementById("Ribbon_insert_SpeakLogic_1")
    .classList.add("domain-theory");
  document
    .getElementById("Ribbon_insert_SpeakLogic_1")
    .classList.remove("domain-communication");
  openTheoryTab();
}

function switchToComm() {
  if (currentDomain === 0) {
    return;
  }
  currentDomain = 0;
  let commPalette = document.getElementById("symbol-palette-comm");
  let commModel = document.getElementById("comm-model-list");
  let theoryPalette = document.getElementById("symbol-palette-theory");
  let theoryModel = document.getElementById("theory-model-list");
  commPalette.style.display = "block";
  commModel.style.display = "block";
  theoryPalette.style.display = "none";
  theoryModel.style.display = "none";
  document
    .getElementById("Ribbon_toTheoryDomain")
    .classList.remove("disabled-custom");
  document
    .getElementById("Ribbon_communication")
    .classList.add("disabled-custom");
  document
    .getElementById("Ribbon_insert_SpeakLogic_1")
    .classList.remove("domain-theory");
  document
    .getElementById("Ribbon_insert_SpeakLogic_1")
    .classList.add("domain-communication");
  openCommTab();
}

let main = allShapes.find((a) => a.id === "mainArea");

ej.diagrams.Diagram.Inject(
  ej.diagrams.UndoRedo,
  ej.diagrams.DiagramContextMenu,
  ej.diagrams.Snapping
);
let currentItem = "";
let nodeAppendData = {
  // Position of the node
  offsetX: 250,
  offsetY: 450,
  // Size of the node
  width: 400,
  height: 400,
  // sets the type of the shape as image
  shape: {
    type: "Image",
    source: "",
  },
  //Customizes the appearances such as text, font, fill, and stroke.
  style: {
    fill: "none",
  },
};
$("#fileUploadToDiagrams").change(function () {
  const file = this.files[0];
  if (file) {
    let url = URL.createObjectURL(file);
    if (file.type.startsWith("image/")) {
      diagram.selectedItems.properties.nodes[0].shape = {
        type: "Image",
        source: url,
      };
    }

    if (file.type.startsWith("video/")) {
      let video = {...nodeAppendData};
      if (
        currentItem.toLowerCase().includes("add") ||
        currentItem.toLowerCase().startsWith("add")
      ) {
        video.shape = {
          type: "HTML",
          content: `<video width="400" height="278" controls>
                <source src="${url}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`,
        };
        video.width = 400;
        video.height = 278;
        let addEd = diagram.add(video);
        diagram.select([addEd]);
      } else {
        diagram.selectedItems.properties.nodes[0].shape = {
          type: "HTML",
          content: `<video width="400" height="278" controls>
                <source src="${url}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`,
        };
        diagram.selectedItems.properties.nodes[0].width = 400;
        diagram.selectedItems.properties.nodes[0].height = 278;
      }
    }

    if (file.type.startsWith("audio/")) {
      let audio = {...nodeAppendData};
      if (
        currentItem.toLowerCase().includes("add") ||
        currentItem.toLowerCase().startsWith("add")
      ) {
        audio.shape = {
          type: "HTML",
          content: `<audio controls width="400" height="50">
          <source src="${url}">
        Your browser does not support the audio element.
        </audio>`,
        };
        audio.width = 400;
        audio.height = 100;
        let addEd = diagram.add(audio);
        diagram.select([addEd]);
      } else {
        diagram.selectedItems.properties.nodes[0].shape = {
          type: "HTML",
          content: `<audio controls width="400" height="50">
                    <source src="${url}">
                  Your browser does not support the audio element.
                  </audio>`,
        };
        diagram.selectedItems.properties.nodes[0].width = 400;
        diagram.selectedItems.properties.nodes[0].height = 50;
      }
    }
    $("#fileUploadToDiagrams").val("");
  }
});
let grouped = 0;

function relatePersonOperatingPrinciple(id) {
  let idFind = "";
  let ellipseBasic = "ellipseBasic";
  if (id.includes("withoperatingprinciple")) {
    idFind = "operatingPrinciple";
  } else if (id.includes("withprinciplesaspect")) {
    idFind = "principleAspect";
  } else if (id.includes("withpersonaspect")) {
    idFind = "personAspect";
  } else if (id.includes("withmainsetofprinciple")) {
    idFind = "principle1";
  } else if (id.includes("withsubsetofprinciple")) {
    idFind = "principle2";
  } else if (id.includes("withtheory")) {
    idFind = "theory";
  } else if (id.includes("withutilizationtheory")) {
    idFind = "utilizationTheory";
  } else {
    idFind = "principle";
  }

  console.log(id, getItemById(ellipseBasic));
  const itemActive = diagram.selectedItems.properties.nodes[0];

  let findItem;

  if (id.includes("withperson")) {
    //can phai viet annotation o dang annotation:"",
    findItem = drawShape({
      id: "person",
      title: "person",
      annotation: "",
      menuId: "person",
      toolTip: "person",
      type: "Person",
    });
  }

  if (!(id.includes("withperson"))) {
    findItem = {...getItemById(idFind)};
    findItem.width = 150;
    findItem.height = 80;
  }

  const offerXNode = itemActive.offsetX - itemActive.width / 2 + 75;
  findItem.offsetX = offerXNode;
  findItem.offsetY = itemActive.offsetY + 300;

  findItem.id = findItem.id + randomId();
  drawPortCircle(findItem);
  const itemPrinciple = diagram.add(findItem);

  if (id.includes("withperson")) {
    itemPrinciple.annotations[0].content = "Person Name No Title";
    //itemPrinciple.annotations[1].content = "No Title";
  }

  if (id.includes("withentity")) {
    itemPrinciple.annotations[0].content = "Entity";
  }

  let findItem2 = {...getItemById(ellipseBasic)};

  findItem2.offsetX = itemActive.offsetX + 400;
  findItem2.offsetY = itemActive.offsetY + 150;
  findItem2.id = findItem2.id + randomId();
  drawPortCircle(findItem2);
  const itemellipseBasic = diagram.add(findItem2);

  if (id.includes("associate")) {
    itemellipseBasic.annotations[0].content = "Associate";
    diagram.dataBind();
  }
  let findItem3 = {...getItemById("itemHidden")};
  findItem3.offsetX = itemActive.offsetX + 600;
  findItem3.offsetY = itemActive.offsetY + 145;
  findItem3.id = findItem3.id + randomId();
  const itemHidden = diagram.add(findItem3);
  diagram.connectors = diagram.connectors.concat([
    {
      id: "connector" + randomId(),
      sourceID: itemActive.id,
      targetID: itemellipseBasic.id,
      type: "Orthogonal",
      segments: [
        {
          type: "Orthogonal",
          direction: "Right",
        },
      ],
      constraints:
        ej.diagrams.ConnectorConstraints.Default |
        ej.diagrams.ConnectorConstraints.DragSegmentThumb,
    },
    {
      id: "connector" + randomId(),
      sourceID: itemPrinciple.id,
      targetID: itemellipseBasic.id,
      type: "Orthogonal",
      segments: [
        {
          type: "Orthogonal",
          direction: "Right",
        },
      ],
      constraints:
        ej.diagrams.ConnectorConstraints.Default |
        ej.diagrams.ConnectorConstraints.DragSegmentThumb,
    },
    {
      id: "connector" + randomId(),
      sourceID: itemellipseBasic.id,
      targetID: itemHidden.id,
      type: "Orthogonal",
    },
  ]);
}

function mapOffsetXPrinciple(data) {
  return data.offsetX - data.width / 2 + 75;
}

function funAddPartToApplication(id) {

  const type = getTypeAddPartToApplication(id);
  const annotation = getAnnotationAddPartToApplication(id);
  const node = diagram.selectedItems.properties.nodes[0];
  let item = drawShape({
    id: "communicationFunctionGrouped" + randomId(),
    title: "Communication Function",
    annotation,
    menuId: "entity",
    toolTip: "What We Do as Entity",
    type,
  });
  item.offsetX = node.offsetX;
  item.offsetY = node.offsetY;
  diagram.add(item);
  diagram.remove(diagram.selectedItems.properties.nodes[0]);
}


//function funAddWordToDictionary(id) {

//  const type = getTypeAddPartToApplication(id);
// const annotation = ["Word1", "Dictionary"];
//  const node = diagram.selectedItems.properties.nodes[0];
// let item = drawShape1({
//   id: "communicationFunctionGrouped" + randomId(),
//   title: "Communication Function",
//   annotation,
//   menuId: "entity",
//   toolTip: "What We Do as Entity",
//   type,
//  });
// item.offsetX = node.offsetX;
// item.offsetY = node.offsetY;
//  diagram.add(item);
// diagram.remove(diagram.selectedItems.properties.nodes[0]);
//}

function funAddWordToDictionary(id) {
  const type = getTypeAddPartToApplication(id);
  const annotation = ["Word"];
  let nodexx = diagram.selectedItems.nodes[0];
  let nodex;
  if (nodexx.id.startsWith("group")) {
    nodex = diagram.getObject(nodexx.children[0]);
  }

  if (!nodexx.id.startsWith("group")) {
    nodex = nodexx;
  }
  let item = drawShape0({
    id: "wordCommunication" + randomId(),
    title: "Word Communication",
    annotation,
    menuId: "word",
    toolTip: "What We Do as Word",
    type: "",
  });
  let itemAdd = diagram.add(item);
  let grp = dropGrouped(itemAdd, nodex);
  diagram.dataBind();

//if (nodexx.id.startsWith("group")) {diagram.remove(nodex);}
  //diagram.dataBind();
}

function funAddEntityToCollection(id) {
  const type = getTypeAddPartToApplication(id);
  const annotation = ["Entity1", "Collection"];
  const node = diagram.selectedItems.properties.nodes[0];
  let item = drawShape1({
    id: "communicationFunctionGrouped" + randomId(),
    title: "Communication Function",
    annotation,
    menuId: "entity",
    toolTip: "What We Do as Entity",
    type,
  });
  item.offsetX = node.offsetX;
  item.offsetY = node.offsetY;
  diagram.add(item);
  diagram.remove(diagram.selectedItems.properties.nodes[0]);
}

function funCommunicationFunctionSub() {

  const node = diagram.selectedItems.properties.nodes[0];
  let item = drawShape({
    id: "communicationFunctionGrouped" + randomId(),
    title: "Communication Function",
    annotation: [
      "Communication Function",
      "Group 1",
      "Function 1",
      "Function 2",
      "Function 3",
    ],
    menuId: "entity",
    toolTip: "What We Do as Entity",
    type: "CommunicationGrouped2",
  });
  item.offsetX = node.offsetX;
  item.offsetY = node.offsetY;
  diagram.add(item);
  diagram.remove(diagram.selectedItems.properties.nodes[0]);
}

function sendSignal(node, type) {
  if (diagram.selectedItems.properties.nodes[0].outEdges[0]) {
    let connector = diagram.getObject(
      diagram.selectedItems.properties.nodes[0].outEdges[0]
    );
    let target = diagram.getObject(connector.properties.targetID);
    let source = diagram.getObject(connector.properties.sourceID);
    console.log(
      connector,
      target,
      source,
      diagram.selectedItems.properties.nodes[0]
    );
  }
}

function hideShowCover(idCheck) {
  idCheck.includes("showcover");
  if (idCheck.includes("hidecover")) {
    diagram.selectedItems.properties.nodes[0].style.opacity = 0.4;
  } else {
    diagram.selectedItems.properties.nodes[0].style.opacity = 1;
  }
  diagram.dataBind();
}

function coverPerson(node) {
  let findCover = {
    style: {
      fill: "green",
      strokeColor: "black",
    },
    addInfo: [
      {
        menuId: "cover",
        toolTip: "Cover person",
        title: "cover",
      },
    ],
    shape: {type: "Basic", shape: "Rectangle"},
    // Text(label) added to the node
  };
  findCover.id = "cover" + randomId();
  findCover.offsetX = diagram.selectedItems.properties.nodes[0].offsetX;
  findCover.offsetY = diagram.selectedItems.properties.nodes[0].offsetY;
  findCover.width = diagram.selectedItems.properties.nodes[0].width;
  findCover.height = diagram.selectedItems.properties.nodes[0].height;
  let addCover = diagram.add(findCover);
  addCover.zIndex += 10;
  diagram.dataBind();
  console.log(addCover, diagram.selectedItems.properties.nodes[0]);
}

function getAnnotationAddPartToApplication(id) {
  if (
    id === "applicationaddsubtoapplication" ||
    id === "functionxaddsubfunction"
  ) {
    return ["Sub Application 1", "Application"];
  }
  if (id === "commfunctionaddpartoffunction") {
    return ["Function 1", "Communication Function"];
  }
  if (id === "commresultaddparttoresult") {
    return ["Part1", "Communication Result"];
  }
  if (id === "commresultaddsubapplicationresult") {
    return ["Sub Application 1", "Communication Result"];
  }
  return ["Part1", "Application"];
}

function getTypeAddPartToApplication(id) {
  const listIdGroupSub = [
    "applicationaddsubtoapplication",
    "commfunctionaddpartoffunction",
    "commresultaddsubapplicationresult",
  ];
  if (listIdGroupSub.includes(id)) {
    return "groupApplicationSub";
  }
  return "groupApplicationPart";
}

//may dat let o day de lam gi?
//let pictureId = [
//"replaceGroupPeoplePicture",
//"replacePersonPicture",
//"communicationElementPicture",
//"entityElementPicture",
//"functionstatusElementPicture",
//"loadPicktureFromFile",
//"replaceCommunicationHolderPicture",
//];

function onDrogGroupsOfPeopleNode(args) {
  let groupParentNode = drawGroupOfPeople(args);
  setTimeout(() => {
    openModal(
      "Group of People",
      "dialogGroupofPeople",
      onClickApplyGroupOfPeople,
      groupParentNode
    );
    diagram.remove(args.target);
    diagram.dataBind();
  }, 100);
}

function labelProperty(args) {
  openModal("Label Property", "labeltocover", onClicklabelProperty);

//tao nghi ngo se phai dung cai nay
//document.getElementById("NegateText").checked = true;


  let mm = 0;
  if (args.element.id.startsWith("pointTo")) {
    mm = 1;
  }
  if (args.element.id.startsWith("giveRiseTo")) {
    mm = 1;
  }
  if (args.element.id.startsWith("relatedTo")) {
    mm = 1;
  }
  if (args.element.id.startsWith("by")) {
    mm = 1;
  }
  if (args.element.id.startsWith("depend")) {
    mm = 1;
  }
  if (args.element.id.startsWith("agree")) {
    mm = 1;
  }
  if (args.element.id.startsWith("have")) {
    mm = 1;
  }
  if (args.element.id.startsWith("Interact")) {
    mm = 1;
  }

  if (mm == 0) {
    document.getElementById("notNegateText").checked = true;
    document.getElementById("negateText").checked = undefined;
  }
  if (mm == 1) {
    document.getElementById("negateText").checked = true;
    document.getElementById("notNegateText").checked = undefined;
  }


  document
    .getElementById("checked-negate-text")
    .addEventListener("click", () => {

      document.getElementById("negateText").checked = true;
      document.getElementById("notNegateText").checked = undefined;
    });
  document
    .getElementById("checked-not-negate-text")
    .addEventListener("click", () => {
      document.getElementById("notNegateText").checked = true;
      document.getElementById("negateText").checked = undefined;
    });
  for (const i of listItem[
    idElementActive.slice(0, idElementActive.length - 5)
    ]) {
    document.getElementById("selected-label-text1").options.add(new Option(i));
    document
      .getElementById("selected-label-text2")
      .options.add(new Option("Not " + i));
  }

//document.getElementById("selected-label-text1").addEventListener("onchange", () => {

  //document.getElementById("selected-label-text2").value = document.getElementById("selected-label-text1").value;
  //  });
//document.getElementById("selected-label-text2").addEventListener("onchange", () => {

  //document.getElementById("selected-label-text1").value = document.getElementById("selected-label-text2").value;
  //  });

}

function onClicklabelProperty() {
  let item = diagram.selectedItems.properties.connectors[0];
  if (document.getElementById("notNegateText").checked) {

    item.annotations = [
      {
        template: `<div><div class="hr_nay" id="hr${randomId()}"></div></div>`,
        offset: 1,
        width: 40,
        height: 40,
      },
      {
        title:
          `Not ${item.title}`,
        content: document.getElementById("selected-label-text2").value,
        margin: {
          bottom: 10,
        }
      },];
  }
  if (document.getElementById("negateText").checked) {

    item.annotations = [
      {
        title:
          `${item.title}`,
        content: document.getElementById("selected-label-text1").value,
        margin: {
          bottom: 10,
        }
      },];
  }
  setTimeout(() => {
    diagram.dataBind();
    diagram.refresh();
  })

  hiddenModal();
}

listItem = {
  pointTo: [
    "Point To",
    "Define From",
    "Define By",
    "Map to",
    "Mean",
    "Identify",
  ],
  giveRiseTo: [
    "Give Rise",
    "Derive From",
    "Develop From",
    "Derive By",
    "Because",
    "Cause",
    "Cause By",
  ],
  relatedTo: [
    "Relate to",
    "Link",
    "Connect",
    "Part of",
    "Because",
    "Have",
    "Contain",
  ],
  by: ["By", "By this", "By that"],
  depend: ["Depend", "Related"],
  agree: ["Agree", "Match", "Related"],
  match: ["Match", "Relate", "Agree", "Go with", "Map"],
  have: ["Have", "Include", "Contain", "Part of", "Exits with", "Given with"],
  Interact: ["Interact", "Use"],
  Use: ["Use"],
  compare: ["Compare"],
  attach: ["Attach"],
  identify: ["Identify"],
  define: ["Define"],
  visuallyIdentify: ["Visually Identify"],
};

function drawGroupOfPeople(args) {
  let target = {offsetX: args.target.offsetX, offsetY: args.target.offsetY};
  let groupParent = drawShape(
    personData.find((a) => a.id === "communicationHolder")
  );
  groupParent.id = "groupOfPeople" + randomId();
  groupParent.addInfo[0].menuId = "groupPeople";
  groupParent.addInfo[0].title = "Group of People";
  groupParent.addInfo[0].toolTip = "Represents a Group of People";
  groupParent.annotations[0] = {
    content: "Group Name",
    verticalAlignment: "Bottom",
    offset: {
      x: 0.5,
      y: 1,
    },
    margin: {
      top: 20,
    },
  };
  let person1 = drawShape(personData.find((a) => a.id === "personNoframe"));
  person1.id += randomId();
  person1.ports = [];
  person1.annotations[0].content = "Person 1";
  person1.annotations.splice(1, 1);
  let person2 = drawShape(personData.find((a) => a.id === "personNoframe"));
  person2.ports = [];
  person2.id += randomId();
  person2.annotations[0].content = "Person 2";
  person2.annotations.splice(1, 1);
  let continuity = drawShape(
    personData.find((a) => a.id === "continuityPerson")
  );
  continuity.id += randomId();
  groupParent.width = person1.width + person2.width + continuity.width;
  let groupParentNode = diagram.add(groupParent);
  groupParentNode.height = groupParentNode.height + 70;
  groupParentNode.offsetX = target.offsetX;
  groupParentNode.offsetY = target.offsetY;
  diagram.dataBind();
  let person1Node = diagram.add(person1);
  person1Node.offsetX =
    groupParentNode.offsetX - groupParentNode.width / 2 + 50;
  person1Node.offsetY = groupParentNode.offsetY - 20;
  diagram.dataBind();
  let person2Node = diagram.add(person2);
  person2Node.offsetX = person1Node.offsetX + person1Node.width / 2 + 70;
  person2Node.offsetY = groupParentNode.offsetY - 20;
  diagram.dataBind();
  let continuityNode = diagram.add(continuity);
  continuityNode.offsetX = person2Node.offsetX + person2Node.width / 2 + 70;
  continuityNode.offsetY = groupParentNode.offsetY - 10;
  continuityNode.width = continuityNode.width * 0.7;
  continuityNode.height = continuityNode.height * 0.7;
  diagram.dataBind();
  diagram.select([groupParentNode, person1Node, person2Node, continuityNode]);
  diagram.group();
  if (groupParentNode.children && groupParentNode.children.length > 1) {
    // diagram.remove(diagram.nodes[diagram.nodes.length - 3]);
    groupParentNode.style.strokeColor = "black";
    groupParentNode.style.strokeWidth = 1;
  }
  return groupParentNode;
}

function onClickApplyGroupOfPeople(e) {
  let dialogGroupofPeopleOptions = $(`#dialogGroupofPeopleOptions`);
  let dialogGroupofPeopleFormat = $(`#dialogGroupofPeopleFormat`);
  let dialogGroupofPeopleStartNum = $(`#dialogGroupofPeopleStartNum`);
  let dialogGroupofPeopleGroupName = $(`#dialogGroupofPeopleGroupName`);
  let hasFrame = $("#dialogGroupofPeoplehasFrame").prop("checked");

  let groupNode = diagram.getObject(e?.parentId);
  // console.log(e, e, groupNode, dialogGroupofPeopleOptions.val(), dialogGroupofPeopleFormat.val(), dialogGroupofPeopleStartNum.val(), dialogGroupofPeopleGroupName.val())
  let personN = drawShape(personData.find((a) => a.id === "personNoframe"));
  personN.ports = [];
  personN.id += randomId();
  personN.annotations[0].content = dialogGroupofPeopleFormat.val();
  if (dialogGroupofPeopleFormat.val() === "P") {
    personN.annotations[1] = {
      id: "annotationgroupPeopleoN" + randomId(),
      content: `N`,
      verticalAlignment: "Bottom",
      offset: {
        x: 0.5,
        y: 1,
      },
      margin: {
        top: 26,
        left: 6,
      },
    };
  } else {
    personN.annotations[0].content += " N";
    personN.annotations.splice(1, 1);
  }
  if (!hasFrame) {
    e.shape.content = e.shape.content.replaceAll(
      'stroke-width="1"',
      'stroke-width="0"'
    );
  }
  diagram.dataBind();
  switch (dialogGroupofPeopleOptions.val()) {
    case "option1":
      e.width += personN.width;
      e.offsetX += personN.width - 10;
      diagram.dataBind();
      let personNNode = diagram.add(personN);
      personNNode.offsetX = groupNode.offsetX + groupNode.width / 2 - 50;
      personNNode.offsetY = groupNode.offsetY - 20;
      diagram.dataBind();
      diagram.addChildToGroup(groupNode, personNNode);
      groupNode.children
        .filter(
          (a) =>
            !a.startsWith("continuity") &&
            a !== personNNode.id &&
            !a.startsWith("groupOfPeople")
        )
        .forEach((id, index) => {
          let nodeFind = diagram.getObject(id);
          // console.log(nodeFind, index + +dialogGroupofPeopleStartNum.val())
          if (dialogGroupofPeopleFormat.val() === "P") {
            nodeFind.annotations[0].content = dialogGroupofPeopleFormat.val();
            diagram.dataBind();
            diagram.addLabels(nodeFind, [
              {
                id: "annotationgroupPeopleo" + randomId(),
                content: `${index + +dialogGroupofPeopleStartNum.val()}`,
                verticalAlignment: "Bottom",
                offset: {
                  x: 0.5,
                  y: 1,
                },
                margin: {
                  top: 26,
                  left: 6,
                },
              },
            ]);
            diagram.dataBind();
          } else {
            nodeFind.annotations[0].content =
              dialogGroupofPeopleFormat.val() +
              " " +
              (index + +dialogGroupofPeopleStartNum.val());
            diagram.dataBind();
          }
        });
      break;
    case "option2":
      let conti = diagram.getObject(
        groupNode.children.find((a) => a.startsWith("continuity"))
      );
      let person2 = diagram.getObject(
        groupNode.children.filter((a) => a.startsWith("personNoframe"))[1]
      );
      let offsetConti = conti.offsetX;
      let offsetPerson2 = person2.offsetX;
      conti.offsetX = offsetPerson2;
      person2.offsetX = offsetConti;
      if (dialogGroupofPeopleFormat.val() === "P") {
        person2.annotations[0].content = dialogGroupofPeopleFormat.val();
        diagram.dataBind();
        diagram.addLabels(person2, [
          {
            id: "annotationgroupPeopleo" + randomId(),
            content: `N`,
            verticalAlignment: "Bottom",
            offset: {
              x: 0.5,
              y: 1,
            },
            margin: {
              top: 26,
              left: 6,
            },
          },
        ]);
      } else {
        person2.annotations[0].content =
          dialogGroupofPeopleFormat.val() + " " + "N";
      }
      diagram.dataBind();
      groupNode.children
        .filter(
          (a) =>
            !a.startsWith("continuity") &&
            a !== person2.id &&
            !a.startsWith("groupOfPeople")
        )
        .forEach((id, index) => {
          let nodeFind = diagram.getObject(id);
          if (dialogGroupofPeopleFormat.val() === "P") {
            nodeFind.annotations[0].content = dialogGroupofPeopleFormat.val();
            diagram.dataBind();
            diagram.addLabels(nodeFind, [
              {
                id: "annotationgroupPeopleo" + randomId(),
                content: `${index + +dialogGroupofPeopleStartNum.val()}`,
                verticalAlignment: "Bottom",
                offset: {
                  x: 0.5,
                  y: 1,
                },
                margin: {
                  top: 26,
                  left: 6,
                },
              },
            ]);
            diagram.dataBind();
          } else {
            nodeFind.annotations[0].content =
              dialogGroupofPeopleFormat.val() +
              " " +
              (index + +dialogGroupofPeopleStartNum.val());
            diagram.dataBind();
          }
        });
      break;
    case "option4":
      let contiOp4 = diagram.getObject(
        groupNode.children.find((a) => a.startsWith("continuity"))
      );
      let person2Op4 = diagram.getObject(
        groupNode.children.filter((a) => a.startsWith("personNoframe"))[1]
      );
      let offsetContiOp4 = contiOp4.offsetX;
      let offsetPerson2Op4 = person2Op4.offsetX;
      contiOp4.offsetX = offsetPerson2Op4;
      person2Op4.offsetX = offsetContiOp4;
      if (dialogGroupofPeopleFormat.val() === "P") {
        person2Op4.annotations[0].content = dialogGroupofPeopleFormat.val();
        diagram.dataBind();
        diagram.addLabels(person2Op4, [
          {
            id: "annotationgroupPeopleo" + randomId(),
            content: `N`,
            verticalAlignment: "Bottom",
            offset: {
              x: 0.5,
              y: 1,
            },
            margin: {
              top: 26,
              left: 7,
            },
          },
        ]);
      } else {
        person2Op4.annotations[0].content =
          dialogGroupofPeopleFormat.val() + " " + "N";
      }
      diagram.dataBind();
      groupNode.children
        .filter(
          (a) =>
            !a.startsWith("continuity") &&
            a !== person2Op4.id &&
            !a.startsWith("groupOfPeople")
        )
        .forEach((id, index) => {
          let nodeFind = diagram.getObject(id);
          if (dialogGroupofPeopleFormat.val() === "P") {
            nodeFind.annotations[0].content = dialogGroupofPeopleFormat.val();
            diagram.dataBind();
            diagram.addLabels(nodeFind, [
              {
                id: "annotationgroupPeopleo" + randomId(),
                content: `${index + +dialogGroupofPeopleStartNum.val()}`,
                verticalAlignment: "Bottom",
                offset: {
                  x: 0.5,
                  y: 1,
                },
                margin: {
                  top: 26,
                  left: 6,
                },
              },
            ]);
            diagram.dataBind();
          } else {
            nodeFind.annotations[0].content =
              dialogGroupofPeopleFormat.val() +
              " " +
              (index + +dialogGroupofPeopleStartNum.val());
            diagram.dataBind();
          }
        });
      let oldWidth = groupNode.width;
      let baseCopy = groupNode.children.filter(
        (a) => !a.startsWith("groupOfPeople")
      );
      let parent = diagram.getObject(groupNode.children[0]);
      parent.width = parent.width * 2;
      parent.offsetX = diagram.getObject(baseCopy[1]).offsetX + 50;
      diagram.dataBind();
      baseCopy.forEach((a, i) => {
        let node = diagram.getObject(a);
        let newObject = ej.diagrams.cloneObject(node);
        newObject.id += randomId();
        newObject.offsetX += oldWidth;
        if (
          newObject.id.startsWith("personNoframe") &&
          i < 1 &&
          newObject.annotations[0]
        ) {
          if (dialogGroupofPeopleFormat.val() !== "P") {
            newObject.annotations[0].content =
              dialogGroupofPeopleFormat.val() + " " + "N+1";
          } else {
            newObject.annotations[0].content = dialogGroupofPeopleFormat.val();
            newObject.annotations[1].content = "N+1";
            newObject.annotations[1].verticalAlignment = "Bottom";
            newObject.annotations[1].offset = {
              x: 0.5,
              y: 1,
            };
            newObject.annotations[1].margin = {
              top: 26,
              left: 13,
            };
          }
        }
        if (
          newObject.id.startsWith("personNoframe") &&
          i === 1 &&
          newObject.annotations[0]
        ) {
          if (dialogGroupofPeopleFormat.val() !== "P") {
            newObject.annotations[0].content =
              dialogGroupofPeopleFormat.val() + " " + "M";
          } else {
            newObject.annotations[0].content = dialogGroupofPeopleFormat.val();
            newObject.annotations[1].content = "M";
            newObject.annotations[1].verticalAlignment = "Bottom";
            newObject.annotations[1].offset = {
              x: 0.5,
              y: 1,
            };
            newObject.annotations[1].margin = {
              top: 26,
              left: 10,
            };
          }
        }
        diagram.dataBind();
        // diagram.paste([newObject]);
        diagram.addChildToGroup(groupNode, newObject);
        // node.copy();
      });
      baseCopy = groupNode.children.filter(
        (a) => !a.startsWith("groupOfPeople")
      );
      let countedP = diagram.getObject(baseCopy[0]);
      if (dialogGroupofPeopleFormat.val() === "P") {
        countedP.annotations[0].content = dialogGroupofPeopleFormat.val();
        diagram.dataBind();
        diagram.addLabels(countedP, [
          {
            id: "annotationgroupPeopleo" + randomId(),
            content: `${+dialogGroupofPeopleStartNum.val()}`,
            verticalAlignment: "Bottom",
            offset: {
              x: 0.5,
              y: 1,
            },
            margin: {
              top: 26,
              left: 6,
            },
          },
        ]);
        diagram.dataBind();
      } else {
        countedP.annotations[0].content =
          dialogGroupofPeopleFormat.val() +
          " " +
          dialogGroupofPeopleStartNum.val();
      }
      break;
    case "option3":
      groupNode.children
        .filter((a) => a.startsWith("personNoframe"))
        .forEach((id, index) => {
          let nodeFind = diagram.getObject(id);
          // console.log(nodeFind, index + +dialogGroupofPeopleStartNum.val())
          if (dialogGroupofPeopleFormat.val() === "P") {
            nodeFind.annotations[0].content = dialogGroupofPeopleFormat.val();
            diagram.dataBind();
            diagram.addLabels(nodeFind, [
              {
                id: "annotationgroupPeopleo" + randomId(),
                content: `${index + +dialogGroupofPeopleStartNum.val()}`,
                verticalAlignment: "Bottom",
                offset: {
                  x: 0.5,
                  y: 1,
                },
                margin: {
                  top: 26,
                  left: 6,
                },
              },
            ]);
            diagram.dataBind();
          }
        });
      break;
  }
  e.annotations[0].content = dialogGroupofPeopleGroupName.val();
  // this = null;

  hiddenModal();
}

function onClickCommunicationMixtureCommunication() {
  const value = document.getElementById("input-numer-of-group").value;
  let selected = diagram.selectedItems.properties.nodes[0];
  let itemAdd = drawShape(
    communicationData.find((x) => x.id === "communicationMixtureCommunication2")
  );
  itemAdd.id += randomId();
  const item = diagram.add(itemAdd);
  const heightNew =
    selected.height + (selected.height / 3) * (Number(value) - 2);
  item.offsetX = selected.offsetX;
  item.offsetY = selected.offsetY - selected.height / 2 + heightNew / 2;
  item.height = heightNew;
  item.width = selected.width;
  diagram.remove(selected);
  diagram.dataBind();
  setTimeout(() => {
    hiddenModal();
  }, 100);
}

function onDrogContinuityPerson(args) {
  openModal(
    "Continuity Size",
    "dialogContinuityPerson",
    onClickApplyContinuityPerson
  );
}

function onClickApplyContinuityPerson() {
  let nodes = getNodesDiagramNodes([...diagram.nodes]);
  const value = document.getElementById("input-continuity-size").value;
  const node = nodes.find((x) => x.id === idElementActive);
  node.width = node.width * value;
  node.height = node.height * value;
  diagram.nodes = nodes;
  setTimeout(() => {
    hiddenModal();
  }, 100);
}

function onDrogNodeTableComm() {
  openModal(
    "Insert Node Table",
    "dialogNodeTableComm",
    onClickApplyNodeTableComm
  );
}

function onClickApplyNodeTableComm() {
  const nodes = getNodesDiagramNodes([...diagram.nodes]);
  let itemSub = {...getItembyIdCommOthers("nodeTableComm")};
  const value = document.getElementById("input-node-table-comm").value;
  itemSub.annotation.columnNo = Number(value);
  itemSub.annotation.content = [];
  for (let ix = 0; ix < Number(value); ix++) {
    if (ix === 0) {
      itemSub.annotation.content = itemSub.annotation.content.concat([
        "Node Number",
        "Information",
      ]);
    } else {
      itemSub.annotation.content = itemSub.annotation.content.concat([
        ix.toString(),
        "value" + ix,
      ]);
    }
  }
  let item = drawShape(itemSub);
  item.offsetX = nodes[0].offsetX;
  item.offsetY = nodes[0].offsetY;
  diagram.nodes = [item];
  hiddenModal();
}

//day la code tao hoc theo
function onDrogChangeAppComm() {
  openModal(
    "Change of Application Function Table",
    "dialogChangeAppComm",
    onClickApplyChangeAppComm
  );

}

function onClickApplyChangeAppComm() {
  const nodes = getNodesDiagramNodes([...diagram.nodes]);
  let itemSub = {...getItembyIdCommOthers("nodeTableComm")};

  let mangchua = [];
  let sdem = 0;

  if (document.getElementById("s1").checked == true) {
    mangchua[sdem] = "Communication";
    sdem++;
  }
  if (document.getElementById("s2").checked == true) {
    mangchua[sdem] = "Application Value";
    sdem++;
  }
  if (document.getElementById("s3").checked == true) {
    mangchua[sdem] = "Communication Function";
    sdem++;
  }
  if (document.getElementById("s4").checked == true) {
    mangchua[sdem] = "Communication Name";
    sdem++;
  }
  if (document.getElementById("s5").checked == true) {
    mangchua[sdem] = "Communication Subject";
    sdem++;
  }
  if (document.getElementById("s6").checked == true) {
    mangchua[sdem] = "Application Name";
    sdem++;
  }
  if (document.getElementById("s7").checked == true) {
    mangchua[sdem] = "Application";
    sdem++;
  }
  if (document.getElementById("s8").checked == true) {
    mangchua[sdem] = "Communication Date Time";
    sdem++;
  }
  if (document.getElementById("s9").checked == true) {
    mangchua[sdem] = "Communication Date";
    sdem++;
  }
  if (document.getElementById("s10").checked == true) {
    mangchua[sdem] = "Communication Time";
    sdem++;
  }
  if (document.getElementById("s11").checked == true) {
    mangchua[sdem] = "Communication Result";
    sdem++;
  }

  itemSub.annotation.columnNo = sdem;
  itemSub.annotation.content = [];
  for (let ix = 0; ix < sdem; ix++) {
    itemSub.annotation.content = itemSub.annotation.content.concat([
      mangchua[ix],
      "",
    ]);
  }

  let item = drawShape(itemSub);
  item.offsetX = nodes[0].offsetX;
  item.offsetY = nodes[0].offsetY;
  diagram.nodes = [item];
  hiddenModal();
}

//day la code tao hoc theo
function onDrogChangeAppComm1() {
  openModal(
    "Change of Communication Function Graph",
    "dialogChangeAppComm1",
    onClickApplyChangeAppComm1
  );

}

function onClickApplyChangeAppComm1() {
  let truyNode = diagram.getObject(diagram.nodes[diagram.nodes.length - 1].id);
  let segsum = "<g transform=\"translate(2, 2)\"><rect width=\"10\" height=\"10\" fill=\"transparent\" stroke=\"black\" stroke-width=\"0\"></rect><path vector-effect=\"non-scaling-stroke\" stroke=\"black\" stroke-width=\"1.5\" fill=\"transparent\" d=\"M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5\"></path></g>";
  truyNode.annotations[0].content = document.getElementById("s2").value;
  truyNode.annotations[1].content = document.getElementById("s1").value;
  truyNode.shape.content = segsum;
  truyNode.height = 600;
  truyNode.width = 600;

  diagram.dataBind();
  hiddenModal();
}

function onClickApplyGroupOrAddEntities() {
  const element = document.getElementById("dialogGroupOrAddEntities");
  element.style.display = "none";
  const nodes = getNodesDiagramNodes([...diagram.nodes]);
  const value = document.getElementById("input-group-or-add-entities").value;
  const find = nodes.find((x) => x.id === idElementActive);
  find.height = (find.height * value) / 2;
  find.offsetX = find.offsetX;
  find.offsetY = find.offsetY;
  diagram.nodes = [...nodes];
}

function onClickAllowCross() {
  diagram.constraints = 500 | (2 | 2048);
}

function onDrogMainArea(a) {
  let country = localStorage.getItem("location_country")
    ? JSON.parse(localStorage.getItem("location_country"))
    : [];
  // let stringRen = country.map(a => drawStringOptionsHtml(a.id, a.name)).join(' ')
  let dropDownListObject = new ej.dropdowns.MultiSelect({
    id: "dialogMainAreaValueSelectWrap",
    //set the data to dataSource property
    dataSource: country.map((a) => a.name),
    // set placeholder to DropDownList input element
    placeholder: "Select country",
  });
  openModal(
    "Main Area",
    "dialogMainArea",
    onClickApplyMainArea,
    dropDownListObject
  );
  setTimeout(() => {
    let dialogMainAreahouse = $(`#dialogMainAreahouse`);
    let dialogMainAreamap = $(`#dialogMainAreamap`);
    let dialogMainArearegular = $(`#dialogMainArearegular`);
    let dialogMainArearegularwithmap = $(`#dialogMainArearegularwithmap`);
    let dialogMainAreaValue = $("#dialogMainAreaValueWrap");
    let dialogMainAreaValueSelect = $("#dialogMainAreaValueSelect");
    // initialize DropDownList component

    // render initialized DropDownList
    dropDownListObject.appendTo("#dialogMainAreaValueSelect");
    $(".e-multiselect").hide();
    let dialogMainAreaValueSelect2 = $("#dialogMainArea346432");
    dialogMainAreaValueSelect2.addClass("d-none");
    dialogMainAreahouse.change(function () {
      if ($(this).prop("checked")) {
        dialogMainAreaValue.removeClass("d-none");
        dialogMainAreaValueSelect.hide();
        dialogMainAreaValueSelect2.addClass("d-none");
        $(".e-multiselect").hide();
      }
    });
    dialogMainAreamap.change(function () {
      if ($(this).prop("checked")) {
        dialogMainAreaValue.addClass("d-none");
        dialogMainAreaValueSelect.hide();
        dialogMainAreaValueSelect2.removeClass("d-none");
        $(".e-multiselect").show();
      }
    });
    dialogMainArearegular.change(function () {
      if ($(this).prop("checked")) {
        dialogMainAreaValue.removeClass("d-none");
        dialogMainAreaValueSelect.hide();
        dialogMainAreaValueSelect2.addClass("d-none");
        $(".e-multiselect").hide();
      }
    });
    dialogMainArearegularwithmap.change(function () {
      if ($(this).prop("checked")) {
        dialogMainAreaValue.addClass("d-none");
        dialogMainAreaValueSelect.hide();
        dialogMainAreaValueSelect2.removeClass("d-none");
        $(".e-multiselect").show();
      }
    });
  }, 100);
}

function onClickApplyMainArea() {
  let dialogMainAreahouse = $(`#dialogMainAreahouse`);
  let dialogMainAreamap = $(`#dialogMainAreamap`);
  let dialogMainArearegular = $(`#dialogMainArearegular`);
  let dialogMainArearegularwithmap = $(`#dialogMainArearegularwithmap`);
  let dialogMainAreaValue = $("#dialogMainAreaValue");
  let mainArea = areaData.find((a) => a.id === "mainArea");
  let selected = diagram.selectedItems.properties.nodes[0];
  selected.height = selected.height / 1.5;
  diagram.dataBind();
  mainArea.annotation.height = undefined;
  mainArea.annotation.width = undefined;
  let findItem = drawShape(mainArea);
  findItem.height = findItem.height * 2;
  let value = document.getElementById("dialogMainAreaValueSelect")
    .ej2_instances[0].value;
  if (dialogMainAreahouse.prop("checked")) {
    diagram.dataBind();
    for (let index = 1; index <= dialogMainAreaValue.val(); index++) {
      let house = drawShape(
        areaData.find((a) => a.id === "siteOfOperation" && a.type === "House")
      );
      house.id += randomId() + index;
      house.width = house.width / 2;
      house.height = house.height / 2;
      house.annotations[0].content = "House";
      let houseAdd = diagram.add(house);
      dropGrouped(houseAdd, selected, true);
    }
  } else if (dialogMainAreamap.prop("checked")) {
    value.forEach((v) => {
      let house = drawShape(
        areaData.find((a) => a.id === "locationOfOperation")
      );
      house.id += randomId();
      house.annotations[0].content = v;
      let houseAdd = diagram.add(house);
      // diagram.dataBind();
      dropGrouped(houseAdd, selected, true);
    });
  } else if (dialogMainArearegular.prop("checked")) {
    for (let index = 1; index <= dialogMainAreaValue.val(); index++) {
      let house = drawShape(
        areaData.find((a) => a.id === "locationOfOperation")
      );
      house.id += randomId() + index;
      // house.annotations[0].content = "House"
      let houseAdd = diagram.add(house);
      // diagram.dataBind();
      dropGrouped(houseAdd, selected, true);
    }
  } else if (dialogMainArearegularwithmap.prop("checked")) {
    value.forEach((v) => {
      let house = drawShape(
        areaData.find((a) => a.id === "locationOfOperation")
      );
      house.id += randomId();
      house.annotations[0].content = v;
      let houseAdd = diagram.add(house);
      // diagram.dataBind();
      dropGrouped(houseAdd, selected, true);
    });
  }
  hiddenModal();
  setTimeout(() => {
    diagram.refresh();
  }, 1);
}

idElementActive = "";

function getTextElement(text, color) {
  let findItem = drawShape(areaData.find((a) => a.id === "mainArea"));
  let textElement = new ej.diagrams.DiagramElement(findItem);
  textElement.id = randomId();
  textElement.width = 80;
  textElement.height = 35;
  textElement.offsetX = color;
  return textElement;
}

function checkDropAlert(group, source, n) {
  let checkedSource = source.addInfo[0].menuId;
  let checkedNode = n.addInfo[0].menuId;

  if (checkedSource === "principle" && checkedNode === "principle") {
    return "While a principle may have multiple parts, for now consider it as one entity.";
  }
  if (checkedNode === "principle" && checkedSource === "subSetofPrinciple") {
    return "Consider a principle as a single entity where a subset as multiple entities; a subset of principles includes multiple principles not the other way around";
  }
  if (checkedSource === "mainSetofPrinciple" && checkedNode === "principle") {
    return "The main set of principles includes multiple subsets of principles where each subset includes principle.  A single principle does not include the main set of principles.";
  }
  if (
    checkedSource === "subSetofPrinciple" &&
    checkedNode === "subSetofPrinciple"
  ) {
    return "A subset of principles includes multiple unique principle.  A subset of principles does not include other subsets of principles.";
  }
  if (
    checkedSource === "mainSetofPrinciple" &&
    checkedNode === "subSetofPrinciple"
  ) {
    return "The main set of principles includes all the subsets of principles.  A subset of principles does not include the main set of principles.";
  }
  if (
    checkedSource === "mainSetofPrinciple" &&
    checkedNode === "mainSetofPrinciple"
  ) {
    return "The main set of principles is unique and does not include another main set.  There is only one main set of principles.";
  }

  if (
    checkedSource === "subSetofPrinciple" && group.children.filter((a) => a.startsWith("principle2")).length >= 10
  ) {
    return "The number of subset identified in the main set is 10 subsets";
  }
  if (
    checkedNode === "constantCharacteristics" &&
    group.children.filter((a) => a.startsWith("constantCharacteristics"))
      .length >= 5
  ) {
    return "The number of constant characteristic identified is up to 5";
  }
  if (
    checkedNode === "theoryCharacteristic" &&
    group.children.filter((a) => a.startsWith("characteristics"))
      .length >= 16
  ) {
    return "The number of theory characteristic is fixed";
  }

  if (
    checkedNode === "fundamentalTheory" &&
    group.children.filter((a) => a.startsWith("fundamentalUtilizationTheory"))
      .length >= 10
  ) {
    return "fundamental of our utilization theory include the fundamental of all other theories and they cannot be duplicated";
  }

}

function dropGrouped(node, parentNode, ignoreCond) {

  let source = node.id ? node : node?.properties?.nodes[0];

  var bienx = false;
  var bieny = false;
  var bienz = false;
  var bientong = false;
  var bienkt = 0;
  if (diagram.nodes.length > 1) {
    var group = diagram.getObject(parentNode.parentId);
    try {
      let firstChild = diagram.getObject(group.children[0]);
      bienx = firstChild.id.startsWith("dictionary");
      bieny = firstChild.id.startsWith("collection");
      bienz = firstChild.id.startsWith("workingarea");
    } catch (ex) {
      bienx = false;
      bieny = false;
      bienz = false;
    }
  }

  if (node.id.startsWith("wordCommunication") && (parentNode.id.startsWith("dictionary") || bienx)) {
    bientong = true;
  }
  if (node.id.startsWith("entityCommunication") && (parentNode.id.startsWith("collection") || bieny)) {
    bientong = true;
  }
  if (node.id.startsWith("location") && (parentNode.id.startsWith("workingarea") || bienz)) {
    bientong = true;
    bienkt = 5;
  }
  if (!bientong) {
    setTimeout(() => {
      // Checking the nodes length greater than one or not
      if (diagram.nodes.length > 1) {
        if (!node.children && node.id !== parentNode.id && !node.parentId) {
          //Getting the group node by getObject method by passing parent ID
          if (
            (parentNode.parentId &&
              communicationDroppedElementChecker(node, parentNode)) ||
            (parentNode.parentId && ignoreCond)
          ) {
            var group = diagram.getObject(parentNode.parentId);
            //let firstChild = diagram.getObject(group.children[0]);
            let firstChild = parentNode;
            let alerted = checkDropAlert(group, node, firstChild);
            if (alerted) {
              return alert(alerted);
            }
            //Added the child into the group by using addChildToGroup
            diagram.addChildToGroup(group, node);

            let newNode = diagram.getObject(
              diagram.nodes[diagram.nodes.length - 1].id
            );
            let childNode = diagram.getObject(
              group.children[group.children.length - 2]
            );
            //Passing the first node to getObject method to set width and offset for the group node
            newNode.offsetX = childNode.offsetX + 100;
            newNode.offsetY = childNode.offsetY;
            diagram.dataBind();
            firstChild.offsetX = group.offsetX;
            firstChild.offsetY = group.offsetY;
            firstChild.annotations[0].offset = {x: 0.5, y: -0.1};
            group.width = group.width + source.width - 30;
            firstChild.width = group.width;
            diagram.dataBind();
            for (let i = 1; i < group.children.length; i++) {
              const childEl = diagram.getObject(group.children[i]);
              let annoContent = childEl.annotations[0].content;
              let previousChild = diagram.getObject(group.children[i - 1]);
              let previousAnnoContent = previousChild.annotations[0].content;
              childEl.offsetY = group.offsetY;
              if (i - 1 > 0) {
                childEl.offsetX =
                  previousChild.offsetX +
                  previousChild.width / 2 +
                  childEl.width / 2 +
                  25;
              } else {
                childEl.offsetX =
                  group.offsetX - group.width / 2 + childEl.width / 2 + 35;
              }
              if (
                previousAnnoContent.startsWith(annoContent) &&
                previousAnnoContent.length - annoContent.length < 3
              ) {
                childEl.annotations[0].content =
                  source.annotations[0].content + " " + i;
                source.annotations[0].content =
                  source.annotations[0].content + "" + (i + 1);
              }
            }
            diagram.dataBind();
            //diagram.refresh();
          } else {
            if (
              communicationDroppedElementChecker(source, parentNode) ||
              ignoreCond
            ) {
              diagram.select([parentNode, source]);
              diagram.group();
              let group = diagram.getObject(parentNode.parentId);
              let alerted = checkDropAlert(group, source, parentNode);
              if (alerted) {
                diagram.unGroup();
                return alert(alerted);
              }
              let newNode = diagram.getObject(source.id);
              parentNode.height = parentNode.height + 30;
              parentNode.width = parentNode.width + 100;
              parentNode.offsetX = parentNode.offsetX;
              parentNode.offsetY = parentNode.offsetY;
              parentNode.annotations[0].offset = {x: 0.5, y: -0.1};
              diagram.dataBind();
              newNode.offsetX = parentNode.offsetX;
              newNode.offsetY = parentNode.offsetY;
              diagram.dataBind();
              //diagram.refresh();
              if (parentNode.children && parentNode.children.length > 1) {
                //diagram.remove(diagram.nodes[diagram.nodes.length - 3]);
                parentNode.style.strokeColor = "black";
                parentNode.style.strokeWidth = 1;
              }
            }
          }
        }
      }
    }, 0);

  }


  if (bientong) {
    setTimeout(() => {
      // Checking the nodes length greater than one or not
      if (diagram.nodes.length > 1) {
        if (!node.children && node.id !== parentNode.id && !node.parentId) {
          //Getting the group node by getObject method by passing parent ID
          if (
            (parentNode.parentId &&
              communicationDroppedElementChecker(node, parentNode)) ||
            (parentNode.parentId && ignoreCond)
          ) {
            var group = diagram.getObject(parentNode.parentId);
            //let firstChild = diagram.getObject(group.children[0]);
            let firstChild = parentNode;
            let alerted = checkDropAlert(group, node, firstChild);
            if (alerted) {
              return alert(alerted);
            }
            //Added the child into the group by using addChildToGroup
            diagram.addChildToGroup(group, node);

            //let newNode = diagram.getObject(diagram.nodes[diagram.nodes.length - 1].id);
            //let childNode = diagram.getObject(group.children[group.children.length - 2]);

            //Passing the first node to getObject method to set width and offset for the group node

            //newNode.offsetX = group.offsetX + Math.cos(Math.PI-Math.PI*2/(group.children.length-1)*(group.children.length-2))*((group.children.length-1)*50+(group.children.length-2)*20)/(2*Math.PI);
            //newNode.offsetY = group.offsetY + Math.sin(Math.PI-Math.PI*2/(group.children.length-1)*(group.children.length-2))*((group.children.length-1)*50+(group.children.length-2)*20)/(2*Math.PI);
            //diagram.dataBind();
            firstChild.offsetX = group.offsetX;
            firstChild.offsetY = group.offsetY;
            firstChild.annotations[0].offset = {x: 0.5, y: -0.1};
            if (group.children.length > 6) {
              group.width = 2 * (((group.children.length - 1) * 50 + (group.children.length - 2) * 20) / (2 * Math.PI) + 40 + bienkt);
              group.height = group.width;
            }
            if (group.children.length == 6 || group.children.length == 5) {
              group.width = 2 * (60 + 40 + bienkt);
              group.height = group.width;
            }
            if (group.children.length == 4 || group.children.length == 3) {
              group.width = 2 * (60 + 15 + bienkt);
              group.height = group.width;
            }
            //firstChild.width=group.width;
            //firstChild.height=firstChild.width;
            diagram.dataBind();

            if (group.children.length > 6) {
              for (let i = 1; i < group.children.length; i++) {
                const childEl = diagram.getObject(group.children[i]);
                let annoContent = childEl.annotations[0].content;
                let previousChild = diagram.getObject(group.children[i - 1]);
                let previousAnnoContent = previousChild.annotations[0].content;

                if (i > 1) {
                  childEl.offsetX = group.offsetX + Math.cos(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (((group.children.length - 2) * 50 + (group.children.length - 3) * 20) / (2 * Math.PI) + bienkt);
                  childEl.offsetY = group.offsetY + Math.sin(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (((group.children.length - 2) * 50 + (group.children.length - 3) * 20) / (2 * Math.PI) + bienkt);
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }
                if (i == 1) {
                  childEl.offsetX = group.offsetX;
                  childEl.offsetY = group.offsetY;
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }

                if (
                  previousAnnoContent.startsWith(annoContent) &&
                  previousAnnoContent.length - annoContent.length < 3
                ) {
                  childEl.annotations[0].content =
                    source.annotations[0].content + " " + i;
                  source.annotations[0].content =
                    source.annotations[0].content + "" + (i + 1);
                }
              }
              diagram.dataBind();
            }

            if (group.children.length == 5 || group.children.length == 6) {
              for (let i = 1; i < group.children.length; i++) {
                const childEl = diagram.getObject(group.children[i]);
                let annoContent = childEl.annotations[0].content;
                let previousChild = diagram.getObject(group.children[i - 1]);
                let previousAnnoContent = previousChild.annotations[0].content;
                if (i > 1) {
                  childEl.offsetX = group.offsetX + Math.cos(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (60 + bienkt);
                  childEl.offsetY = group.offsetY + Math.sin(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (60 + bienkt);
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }
                if (i == 1) {
                  childEl.offsetX = group.offsetX;
                  childEl.offsetY = group.offsetY;
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }

                if (
                  previousAnnoContent.startsWith(annoContent) &&
                  previousAnnoContent.length - annoContent.length < 3
                ) {
                  childEl.annotations[0].content =
                    source.annotations[0].content + " " + i;
                  source.annotations[0].content =
                    source.annotations[0].content + "" + (i + 1);
                }
              }
              diagram.dataBind();
            }

            if (group.children.length == 3 || group.children.length == 4) {
              for (let i = 1; i < group.children.length; i++) {
                const childEl = diagram.getObject(group.children[i]);
                let annoContent = childEl.annotations[0].content;
                let previousChild = diagram.getObject(group.children[i - 1]);
                let previousAnnoContent = previousChild.annotations[0].content;

                childEl.offsetX = group.offsetX + Math.cos(Math.PI - Math.PI * 2 / (group.children.length - 1) * (i - 1)) * (35 + bienkt);
                childEl.offsetY = group.offsetY + Math.sin(Math.PI - Math.PI * 2 / (group.children.length - 1) * (i - 1)) * (35 + bienkt);
                childEl.width = 50 + bienkt;
                childEl.height = 50 + bienkt;

                if (
                  previousAnnoContent.startsWith(annoContent) &&
                  previousAnnoContent.length - annoContent.length < 3
                ) {
                  childEl.annotations[0].content =
                    source.annotations[0].content + " " + i;
                  source.annotations[0].content =
                    source.annotations[0].content + "" + (i + 1);
                }
              }
              diagram.dataBind();
            }


          } else {
            if (
              communicationDroppedElementChecker(source, parentNode) ||
              ignoreCond
            ) {
              diagram.select([parentNode, source]);
              diagram.group();
              let group = diagram.getObject(parentNode.parentId);
              let alerted = checkDropAlert(group, source, parentNode);
              if (alerted) {
                diagram.unGroup();
                return alert(alerted);
              }
              let newNode = diagram.getObject(source.id);
              parentNode.width = 150;
              parentNode.height = parentNode.width;
              parentNode.offsetX = parentNode.offsetX;
              parentNode.offsetY = parentNode.offsetY;
              parentNode.annotations[0].offset = {x: 0.5, y: -0.1};
              diagram.dataBind();
              newNode.offsetX = parentNode.offsetX;
              newNode.offsetY = parentNode.offsetY;
              diagram.dataBind();
              if (parentNode.children && parentNode.children.length > 1) {
                //diagram.remove(diagram.nodes[diagram.nodes.length - 3]);
                parentNode.style.strokeColor = "black";
                parentNode.style.strokeWidth = 1;
              }
            }
          }
        }
      }
    }, 0);
  }
  return group;
}

function communicationDroppedElementChecker(id, parentId) {
  let allowDropped = [];
  let childAllow = [];


  if (parentId.id.startsWith("personAspect")) {
    allowDropped = ["personAspect"];
    childAllow = ["personAspect"];
    if (!id.id.startsWith("personAspect")) alert("The Person Aspect Entity identified the aspect of a person.  Multiple aspects of a person can be combined to one.  The aspect of a person does not accept other entity.");
  }


  if (parentId.id.startsWith("application") || parentId.id.startsWith("a")) {
    allowDropped = ["application", "a"];
    childAllow = ["application"];
  }


  if (parentId.id.startsWith("communicationFunction") || parentId.id.startsWith("functionx") || parentId.id.startsWith("function0")) {
    allowDropped = ["communicationFunction", "functionx", "function0"];
    childAllow = ["communicationFunction", "functionx"];
  }


  if (
    parentId.id.startsWith("communicationEntity")
    || parentId.id.startsWith("communicationElement")
    || parentId.id.startsWith("information")
    || parentId.id.startsWith("question")
    || parentId.id.startsWith("answer")
  ) {
    allowDropped = ["communicationEntity", "communicationElement", "information", "question", "answer"];
    childAllow = [
      "communicationEntity",
      "x",
      "word",
      "sentence",
      "paragraph",
      "communicationElement",
      "question",
      "answer",
      "picture",
      "video",
      "audio",
      "text",
      "principle",
      "information",
    ];
    if (
      (!id.id.startsWith("communicationEntity"))
      && (!id.id.startsWith("x"))
      && (!id.id.startsWith("word"))
      && (!id.id.startsWith("sentence"))
      && (!id.id.startsWith("paragraph"))
      && (!id.id.startsWith("communicationElement"))
      && (!id.id.startsWith("question"))
      && (!id.id.startsWith("answer"))
      && (!id.id.startsWith("picture"))
      && (!id.id.startsWith("audio"))
      && (!id.id.startsWith("text"))
      && (!id.id.startsWith("principle"))
      && (!id.id.startsWith("information"))
    )
      alert("A communication or communication entity is viewed as an entity that contains communication elements such as word, paragraph, sentence, image, video etc.  Only such entities included in communication.");
  }

  if (parentId.id.startsWith("word")) {
    allowDropped = ["word"];
    childAllow = ["word"];
    if (!id.id.startsWith("word")) alert("A composite word is composed of multiple words.  The word entity only accepts other words to form composite word.");
  }

  if (parentId.id.startsWith("sentence")) {
    allowDropped = ["sentence"];
    childAllow = ["word", "sentence", "communicationElement", "principle"];
    if (
      (!id.id.startsWith("word"))
      && (!id.id.startsWith("sentence"))
      && (!id.id.startsWith("communicationElement"))
      && (!id.id.startsWith("principle"))
    )
      alert("The sentence entity accepts words, sentences and other communications elements like phrases, expressions, and so forth to form other sentence.");
  }
  if (
    parentId.id.startsWith("paragraph")
  ) {
    allowDropped = ["paragraph"];
    childAllow = [
      "word",
      "sentence",
      "communicationElement",
      "principle",
      "paragraph",
    ];
    if (
      (!id.id.startsWith("word"))
      && (!id.id.startsWith("sentence"))
      && (!id.id.startsWith("communicationElement"))
      && (!id.id.startsWith("principle"))
      && (!id.id.startsWith("paragraph"))
    )
      alert("The paragraph entity accepts words, sentences, paragraphs and other communications elements like phrases, expressions, and so forth to form other paragraph.");
  }
  if (parentId.id.startsWith("communicationFunction")) {
    allowDropped = ["communicationFunction", "function"];
    childAllow = ["function", "communicationFunction"];
    if (!id.id.startsWith("communicationFunction"))
      alert("A function can be viewed as a function that is made of other functions; the function entity only accepts function.");
  }
  if (parentId.id.startsWith("aspect")) {
    allowDropped = ["aspect"];
    childAllow = ["aspect"];
    if (!id.id.startsWith("aspect"))
      alert("Aspect entity can only takes aspect to form a group of aspects.");
  }
  if (parentId.id.startsWith("dictionary")) {
    allowDropped = ["dictionary"];
    childAllow = ["word"];
  }
  if (parentId.id.startsWith("collection")) {
    allowDropped = ["collection"];
    childAllow = ["entity"];
  }
  if (parentId.id.startsWith("communicationResult")) {
    allowDropped = ["communicationResult"];
    childAllow = ["communicationResult"];
  }
  if (parentId.id.startsWith("action")) {
    allowDropped = ["action"];
    childAllow = ["action"];
  }
  if (parentId.id.startsWith("reason")) {
    allowDropped = ["reason"];
    childAllow = ["reason"];
  }
  if (parentId.id.startsWith("principle2")) {
    allowDropped = ["principle2"];
    childAllow = ["principle"];
    if (id.addInfo[0].menuId === "principle") {
      alert("A subset of principle can only accept principle");
    }
  }
  if (parentId.id.startsWith("principle1")) {
    allowDropped = ["principle1"];
    childAllow = ["principle", "principle2"];
    if (
      id.addInfo[0].menuId !== "principle" &&
      id.addInfo[0].menuId !== "subSetofPrinciple"
    ) {
      alert(
        "the main set of principle can only accept principle and subset of principle"
      );
    }
  }
  if (parentId.id.startsWith("reference")) {
    allowDropped = ["reference"];
    childAllow = [
      "communicationEntity",
      "communicationElement",
      "word",
      "sentence",
      "paragraph",
      "question",
      "answer",
      "picture",
      "video",
      "audio",
      "text",
      "principle",
      "information",
    ];
  }
  if (
    parentId.id.startsWith("locationOfOperation") ||
    parentId.id.startsWith("siteOfOperation")
  ) {
    allowDropped = ["locationOfOperation", "siteOfOperation"];
    childAllow = ["locationOfOperation", "siteOfOperation"];
  }
  if (parentId.id.startsWith("mainArea")) {
    allowDropped = ["mainArea"];
    childAllow = ["locationOfOperation", "siteOfOperation"];
  }
  if (parentId.id.startsWith("workingareaAL")) {
    allowDropped = ["workingareaAL"];
    childAllow = ["locationAL", "locationOfOperation", "siteOfOperation"];
  }
  if (parentId.id.startsWith("constantCharacteristics")) {
    allowDropped = ["constantCharacteristics"];
    childAllow = ["constantCharacteristics"];
  }
  if (parentId.id.startsWith("theory")) {
    allowDropped = ["theory", "theorem"];
    childAllow = ["theory", "theorem"];
  }
  if (parentId.id.startsWith("utilizationTheory")) {
    allowDropped = ["utilizationTheory"];
    childAllow = ["theory", "theorem"];
  }
  if (parentId.id.startsWith("characteristics")) {
    allowDropped = ["characteristics"];
    childAllow = ["characteristics"];
  }
  if (parentId.id.startsWith("naturalElement")) {
    allowDropped = ["naturalElement"];
    childAllow = ["naturalElement"];
  }
  if (parentId.id.startsWith("inputElement")) {
    allowDropped = ["inputElement"];
    childAllow = ["inputElement"];
  }
  if (parentId.id.startsWith("functionSystem")) {
    allowDropped = ["functionSystem"];
    childAllow = ["functionSystem"];
  }
  if (parentId.id.startsWith("functionalSystem")) {
    allowDropped = ["functionalSystem"];
    childAllow = ["functionalSystem"];
  }
  if (parentId.id.startsWith("fundamentalUtilizationTheory")) {
    allowDropped = ["fundamentalUtilizationTheory"];
    childAllow = ["fundamentalUtilizationTheory"];
  }

  return (
    childAllow.some((a) => id.id.startsWith(a)) &&
    allowDropped.some((a) => parentId.id.startsWith(a))
  );
}

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/[^\w\s]/gi, "");
}

var mappedArrayContext = menuItems.reduce((arr, item) => {
  let listFilter = item.list.reduce((brr, b) => {
    if (b?.text) {
      brr.push({
        ...b,
        id: camelize(item.id + b.text),
        parentId: item.id,
      });
    }
    return brr;
  }, []);
  if (listFilter.length > 0) {
    arr.push(...listFilter);
  }
  return arr;
}, []);

var diagram = new ej.diagrams.Diagram({
  width: "2000px",
  height: "2000px",
  rulerSettings: {
    showRulers: true,
    horizontalRuler: {
      interval: 10,
      segmentWidth: 100,
      thickness: 20,
      tickAlignment: "RightOrBottom",
    },
    verticalRuler: {
      interval: 10,
      segmentWidth: 100,
      thickness: 20,
      tickAlignment: "RightOrBottom",
    },
  },
  propertyChange: function (e) {
    if (
      e?.oldValue?.shape?.source &&
      e?.oldValue?.shape?.source?.startsWith("blob:http") &&
      e?.oldValue?.shape?.source != e?.newValue?.shape?.source
    ) {
      URL.revokeObjectURL(e?.oldValue?.shape?.source);
    }
  },
  historyChange: function (e) {
    if (e.type === "CollectionChanged" && e["Remove"]?.length > 0) {
      document
        .querySelector(`#${e.id}_html_element`)
        .querySelector("audio")
        ?.pause();
      document
        .querySelector(`#${e.id}_html_element`)
        .querySelector("video")
        ?.pause();
    }
  },
  collectionChange: function (e) {
    if (
      e.type === "Removal" &&
      e?.element?.properties?.shape?.properties &&
      (e?.element?.properties?.shape?.properties?.source?.startsWith(
          "blob:http"
        ) ||
        e?.element?.properties?.shape?.properties?.content?.includes(
          "blob:http"
        ))
    ) {
      URL.revokeObjectURL(
        e.element?.properties?.shape?.properties?.source ||
        e.element?.properties?.shape?.properties?.content
          .split("src=")[1]
          ?.trim()
          ?.split('"')[1]
      );
    }
  },
  bridgeDirection: "Left",
  contextMenuSettings: {
    show: true,
    items: mappedArrayContext.concat(
      ...[
        {
          id: "baseCopy",
          onClick: "",
          text: "Copy",
          icon: "flaticon-copy",
        },
        {
          id: "basePaste",
          onClick: "",
          text: "Paste",
          icon: "flaticon-paste",
        },
        {
          id: "baseCut",
          onClick: "",
          text: "Cut",
          icon: "flaticon-scissors",
        },
        {
          id: "baseEdit",
          onClick: "",
          text: "Edit Text",
        },
        {
          id: "baseSelect",
          onClick: "",
          text: "Select All",
        },
      ]
    ),
    showCustomMenuOnly: true,
  },
  setNodeTemplate: (obj, diagram) => {
  },
  selectionChange: selectionChange,
  textEdit: textEdit,
  contextMenuClick: function (args) {

    currentItem = args.item.id;

    switch (args.item.properties.text) {

      case "Delete":
        diagram.remove(diagram.selectedItems.nodes[0]);
        return;
      case "Copy":
        diagram.copy(diagram.selectedItems.nodes[0]);
        return;
      case "Paste":
        diagram.paste();
        return;
      case "Cut":
        diagram.cut(diagram.selectedItems.nodes[0]);
        return;
      case "Edit Text":
        diagram.startTextEdit(
          diagram.selectedItems.nodes[0],
          diagram.selectedItems.nodes[0].annotations[0].id
        );
        return;
      case "Select All":
        diagram.selectAll();
        return;
    }
    switch (args.item.properties.text.toLowerCase()) {
      case "add input":
        let portss = {
          id: "LeftMiddle" + randomId(),
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "Circle",
          width: 2,
          height: 2,
          verticalAlignment: "Center",
          horizontalAlignment: "Center",
        };
        const selected = diagram.selectedItems.nodes[0];
        const heightNew = selected.height + 10;
        selected.offsetY =
          selected.offsetY - selected.height / 2 + heightNew / 2;
        selected.height = heightNew;
        diagram.dataBind();

        let bdem = diagram.selectedItems.nodes[0].ports.length - 3;
        diagram.selectedItems.nodes[0].ports.forEach((a) => {
          if (a.id.toLowerCase().startsWith("left")) {
            portss.offset = {
              x: a.offset.x,
              y: (diagram.selectedItems.nodes[0].ports.length - 3 + 1) / (diagram.selectedItems.nodes[0].ports.length - 3 + 2),
            };
            a.offset = {
              x: a.offset.x,
              y: bdem / (diagram.selectedItems.nodes[0].ports.length - 3 + 2),
            };
            bdem--;
            diagram.dataBind();
          }
        });
        diagram.addPorts(diagram.selectedItems.nodes[0], [portss]);
        return;
      case "remove input":
        // let portssRemove = {
        // id: "LeftMiddle" + randomId(),
        //   offset: {
        //    x: 0,
        //     y: 0.5,
        //   },
        //   visibility: 1,
        //   shape: "Circle",
        //   width: 2,
        //   height: 2,
        //   verticalAlignment: "Center",
        //   horizontalAlignment: "Center",
        // };
        const selectedRemove = diagram.selectedItems.nodes[0];
        const heightNewRemove = selectedRemove.height - 10;
        selectedRemove.offsetY =
          selectedRemove.offsetY -
          selectedRemove.height / 2 +
          heightNewRemove / 2;
        selectedRemove.height = heightNewRemove;
        diagram.dataBind();

        let bdem1 = diagram.selectedItems.nodes[0].ports.length - 3;
        let bcodinh = diagram.selectedItems.nodes[0].ports.length - 3;

        //tai sao ta khong huy cong, ma lai chuyen vi tri cong?
        //for (i=0;i<diagram.selectedItems.nodes[0].ports.length;i++) {
        diagram.selectedItems.nodes[0].ports.forEach((a) => {
          if (a.id.toLowerCase().startsWith("left")) {

            if (bdem1 == bcodinh) {
              //let bienb=a;
              //diagram.removePorts(diagram.selectedItems.nodes[0], [a]);
              bdem1--;
              //diagram.dataBind();
            }


            if (bdem1 != bcodinh) {
              a.offset = {
                x: a.offset.x,
                y: bdem1 / bcodinh,
              };


              bdem1--;
              //diagram.dataBind();
            }

            //if (bdem1 == 0)
            //{
            //let bienb=a;
            //diagram.removePorts(diagram.selectedItems.nodes[0], [a]);
            //bdem1--;
            //diagram.dataBind();
            //}
          }

        });

        //diagram.removePorts(diagram.selectedItems.nodes[0], [a]);
        diagram.dataBind();


        diagram.selectedItems.nodes[0].ports.forEach((a) => {
          if (a.id.toLowerCase().startsWith("left")) {

            if ((a.offset.x == 0) && (a.offset.y == 0)) {
              diagram.removePorts(diagram.selectedItems.nodes[0], [a]);
            }
          }

        });
        diagram.dataBind();


        //let truyNode = diagram.selectedItems.nodes[0];
        //diagram.removePorts(truyNode,truyNode.ports);
        //diagram.dataBind();

        return;
    }


    const listIdNotEvent = [
      "commfunctionreplacefunctionwithsketch",
      "applicationreplaceapplicationwithsketch",
    ];


    let idCheck = args.item.id.toLowerCase();


    if (listIdNotEvent.includes(idCheck)) {
      return;
    }
    if ((idCheck.includes("picture") && (!idCheck.includes("pointpicture"))) || idCheck.includes("image")) {
      $("#fileUploadToDiagrams").attr("accept", "image/*");
      $("#fileUploadToDiagrams").click();
    }
    if (idCheck.includes("video") && (!idCheck.includes("pointvideo"))) {
      $("#fileUploadToDiagrams").attr("accept", "video/*");
      $("#fileUploadToDiagrams").click();
    }
    if (idCheck.includes("audio") && (!idCheck.includes("pointaudio"))) {
      $("#fileUploadToDiagrams").attr("accept", "audio/*");
      $("#fileUploadToDiagrams").click();
    }
    if (idCheck.includes("sketch")) {


      let truyNode = diagram.selectedItems.nodes[0];

      sketchContextClick(truyNode.id);
    }
    if (idCheck.includes("text")) {
      addTextOnClick(idCheck);
    }
// nuoc co hay
// kiem tra, va rut gon lai doan ma dang sau dong nay, ok?
    if (idCheck.includes("tocollection") && idCheck.includes("point")) {
      pointNodeToEntity("pointTo", "collection", "Point To");
    }

    if (idCheck.includes("toword") && idCheck.includes("point")) {
      pointNodeToEntity("pointTo", "word", "Point To");
    }

    if (idCheck.includes("toanswer") && idCheck.includes("point")) {
      pointNodeToEntity("pointTo", "answer", "Point To");
    }

    if (idCheck.includes("toentity") && idCheck.includes("point") && idCheck.includes("word")) {
      pointNodeToEntity("pointTo", "word", "Point To");
    }

    if (idCheck.includes("toentity") && idCheck.includes("point") && (!idCheck.includes("word"))) {
      pointNodeToEntity("pointTo", "entity", "Point To");
    }

    if (idCheck.includes("byentity") && idCheck.includes("define") && idCheck.includes("word")) {
      pointNodeToEntity("define", "word", "Defined by");
    }

    if (idCheck.includes("byentity") && idCheck.includes("define") && (!idCheck.includes("word"))) {
      pointNodeToEntity("define", "entity", "Defined by");
    }

    if (idCheck.includes("identifyentity") && idCheck.includes("from") && idCheck.includes("word")) {
      pointNodeToEntity("define", "word", "Identifies");
    }

    if (idCheck.includes("identifyentity") && idCheck.includes("from") && (!idCheck.includes("word"))) {
      pointNodeToEntity("define", "entity", "Identifies");
    }

    if (idCheck.includes("identifywordinsentence")) {
      let item = drawShape(communicationData.find((a) => a.id === "word"));
      item.id += randomId();
      let entity = diagram.add(item);
      let selected = diagram.selectedItems.properties.nodes[0];
      if (selected.id.startsWith("group") && !selected.parentId) {
        selected = diagram.getObject(
          diagram.selectedItems.properties.nodes[0].children[0]
        );
      }
      setTimeout(() => {
        dropGrouped(entity, selected, true);
      });
    }

    if (idCheck.includes("identifypartofsentence")) {
      let item = drawShape(communicationData.find((a) => a.id === "word"));
      item.id += randomId();
      item.annotations[0].content = "Part";
      let entity = diagram.add(item);
      let selected = diagram.selectedItems.properties.nodes[0];
      if (selected.id.startsWith("group") && !selected.parentId) {
        selected = diagram.getObject(
          diagram.selectedItems.properties.nodes[0].children[0]
        );
      }
      setTimeout(() => {
        dropGrouped(entity, selected, true);
      });
    }

    if (idCheck.includes("information") && idCheck.includes("point")) {
      pointNodeToEntity("pointTo", "information", "Point To");
    }
    if (idCheck.includes("groupofentities") && idCheck.includes("point")) {
      pointNodeToEntity("pointTo", "entities", "Point To");
    }
    if (idCheck.includes("entityidentifyentitybyword")) {
      pointNodeToEntity("pointTo", "word", "Identified by");
    }
    if (idCheck.includes("entitydefinewordfromentity")) {
      pointNodeToEntity("define", "word", "Defined by");
    }
    if (idCheck.includes("addcommunicationholder")) {
      addCommHolderOnClick();
    }
    if (idCheck.includes("relate") || idCheck.includes("associate")) {
      relatePersonOperatingPrinciple(idCheck);
    }
    //if (
    // idCheck.includes("addword")
    // ) {
    //  funAddWordToDictionary(idCheck);
    // }
    // if (
    //   idCheck.includes("addentity")
    //) {
    //  funAddEntityToCollection(idCheck);
    // }

    if (
      checkIdHanleClickfunAddPartToApplication(idCheck) ||
      idCheck.includes("addpart")
    ) {
      funAddPartToApplication(idCheck);
    }

    if (idCheck === "functionxaddsubfunction") {
      funAddPartToApplication(idCheck);
    }
    if (idCheck === "commfunctionaddsubfunction") {
      funCommunicationFunctionSub();
    }
    console.log(idCheck);
    if (idCheck.includes("sendsignalred")) {
      sendSignal(args.item, "red");
    }
    if (idCheck.includes("sendsignalgreen")) {
      sendSignal(args.item, "green");
    }
    if (idCheck.includes("coverperson")) {
      coverPerson(args.item);
    }
    if (
      idCheck.includes("hidecover") ||
      idCheck.includes("showcover") ||
      idCheck.includes("showperson")
    ) {
      hideShowCover(idCheck);
    }
  },
  contextMenuOpen: function (args) {
    let bpmnShape =
      !diagram?.selectedItems?.nodes[0]?.addInfo &&
      diagram?.selectedItems?.nodes[0]?.children?.length > 0
        ? diagram.getObject(diagram.selectedItems.nodes[0].children[0])
        : diagram.selectedItems.nodes[0];
    // console.log(bpmnShape)
    if (diagram?.selectedItems?.nodes[0] && bpmnShape?.addInfo) {
      let menuId = bpmnShape?.addInfo[0];
      // if (bpmnShape.id.startsWith("addCommunication")) {
      //   addCommunicationFunction();
      // }
      args.hiddenItems = mappedArrayContext
        .reduce((arr, item) => {
          if (menuId && item.parentId !== menuId.menuId) {
            arr.push(item.id);
          }
          return arr;
        }, [])
        .concat("baseCopy", "basePaste", "baseCut", "baseEdit", "baseSelect");
      args.hiddenItems.forEach((a) => {
        if ($(`#${a}.e-menu-item`).length > 0) {
          $(`#${a}.e-menu-item`).addClass("e-menu-hide");
        }
      });
    } else {
      args.hiddenItems = mappedArrayContext.reduce((arr, item) => {
        return arr.concat(item.id);
      }, []);
      args.hiddenItems.forEach((a) => {
        if ($(`#${a}.e-menu-item`).length > 0) {
          $(`#${a}.e-menu-item`).addClass("e-menu-hide");
        }
      });
    }
  },
  created: function (args) {
    getModelData();
    openModelPage("main-project-model-comm");
  },
  //Sets the default values of a node
  getNodeDefaults: function (node) {
    var obj = {};
    if (!obj.children) {
      obj.constraints =
        ej.diagrams.NodeConstraints.Default |
        ej.diagrams.NodeConstraints.AllowDrop;
    }

    return obj;
  },
  drop: function (args) {


    idElementActive = args.element.id;

    if (idElementActive.startsWith("entityInclusionLineVertical")) {
      VerticalDialog();
    }
    if (idElementActive.startsWith("principleLineOthers")) {
      HorizontalDialog();
    }
    if (idElementActive.startsWith("entityInclusionLineHorizontal")) {
      HorizontalDialog();
    }
    if (idElementActive.startsWith("stabilityLine1")) {
      HorizontalDialog();
    }
    if (idElementActive.startsWith("group4")) {
      GroupOfItemDialog(0);
    }
    if (idElementActive.startsWith("group1")) {
      GroupOfItemDialog(0);
    }
    if (idElementActive.startsWith("groupCommunication")) {
      GroupOfItemDialog(0);
    }
    if (idElementActive.startsWith("groupSystem")) {
      GroupOfItemDialog(0);
    }
    if (idElementActive.startsWith("groupTheoryVertical")) {
      GroupOfItemDialog(0);
    }
    if (idElementActive.startsWith("groupFunctionTheory")) {
      GroupOfItemDialog(0);
    }
    if (idElementActive.startsWith("groupFundamental")) {
      GroupOfItemDialog(0);
    }

    if (idElementActive.startsWith("groupOfPeople")) {
      //onDrogGroupsOfPeopleNode(args);
      GroupOfPeopleDialog();
    }

    //if (idElementActive.startsWith("continuityPerson")) {
    // onDrogContinuityPerson(args);
    // }
    if (idElementActive.startsWith("continuity")) {
      onDrogContinuityPerson(args);
    }
    // if (idElementActive.startsWith("continuity1")) {
    //  onDrogContinuityPerson(args);
    // }
    // if (idElementActive.startsWith("continuityFunction")) {
    //   onDrogContinuityPerson(args);
    // }
    // if (idElementActive.startsWith("continuityStability")) {
    //   onDrogContinuityPerson(args);
    // }


    // if (idElementActive.startsWith("nodeTableComm")) {
    //  onDrogNodeTableComm();
    //}

    if (!idElementActive.startsWith("changeofApplication1") && idElementActive.startsWith("changeofApplication")) {
      onDrogChangeAppComm();
    }

    if (idElementActive.startsWith("changeofApplication1")) {
      onDrogChangeAppComm1();
    }


    if (idElementActive.startsWith("nodeTable")) {
      onDrogNodeTableComm();
    }

    if (idElementActive.startsWith("mainArea")) {
      onDrogMainArea(args);
    }

    if (onCheckOpenModalLabelText()) {
      labelProperty(args);
    }
    if (idElementActive.startsWith("communicationMixtureCommunication")) {
      //openModal(
      // "Group Property",
      //  "CommunicationMixtureCommunication",
      //  onClickCommunicationMixtureCommunication
      //);
      GroupOfItemDialog(1);
    }
    dropGrouped(args.element, args.target);

  },
});

function selectionChange(args) {

}

function textEdit(args) {
  console.log(args, 'args')
}

function onCheckOpenModalLabelText() {
  for (const i of Object.keys(listItem)) {
    if (idElementActive.startsWith(i)) return true;
  }
  return false;
}

const listIdClick = [
  "applicationaddsubtoapplication",
  "commresultaddsubapplicationresult",
];

function checkIdHanleClickfunAddPartToApplication(id) {
  return listIdClick.includes(id);
}

diagram.appendTo("#diagram");
const blankDiagram = diagram.saveDiagram();

function defineNodeToEntity() {
  let oldEdge = diagram.getObject(
    diagram.getObject(diagram.selectedItems.properties.nodes[0].outEdges[0])
      ?.targetWrapper?.nodeId
  );
  if (oldEdge) {
    diagram.remove(oldEdge);
  }
  let entity = drawShape(communicationData.find((a) => a.id === "entity"));
  let offsetXD = diagram.selectedItems.properties.nodes[0].properties.offsetX;
  let offsetYD = diagram.selectedItems.properties.nodes[0].properties.offsetY;
  entity.offsetX = offsetXD + 350;
  entity.offsetY = offsetYD;
  let entityGrouped = {...entity};
  entityGrouped.width = entity.width + 50;
  entityGrouped.height = entity.height + 50;
  entityGrouped.id += randomId();
  entity.id += randomId();
  let grouped = {
    id: randomId(),
    children: [entityGrouped.id, entity.id],
    style: {
      strokeColor: "#000000",
      strokeWidth: 1,
    },
  };
  diagram.add(entityGrouped);
  diagram.add(entity);
  diagram.getObject(entityGrouped.id).properties.annotations[0].offset = {
    x: 0.5,
    y: -0.1,
  };
  diagram.dataBind();
  diagram.getObject(entity.id).properties.annotations[0].content =
    entity.annotations[0].content + " 1";
  diagram.dataBind();
  let addItem = diagram.add(grouped);
  let connector = drawShape(commLabelData.find((a) => a.id === "pointTo"));
  connector.annotations[0].content = "Defined by";
  connector.id += randomId();
  connector.sourceID = diagram.selectedItems.properties.nodes[0].id;
  connector.targetID = addItem.id;
  diagram.add(connector);
}


function pointNodeToEntity(type, ent, textContent) {

  let oldEdge = diagram.getObject(
    diagram.getObject(diagram.selectedItems.properties.nodes[0].outEdges[0])
      ?.targetWrapper?.nodeId
  );

  let ktrahinhdang = diagram.selectedItems.properties.nodes[0].id;
  let entity;

  if (ktrahinhdang.includes("wordCommunication")) {
    entity = drawShape0(communicationData.find((a) => a.id === ent));
  }

  if (!ktrahinhdang.includes("wordCommunication")) {
    entity = drawShape(communicationData.find((a) => a.id === ent));
  }


  entity.id += randomId();
  const itemSelected = diagram.selectedItems.properties.nodes[0];
  let offsetXD = itemSelected.offsetX;
  let offsetYD = itemSelected.offsetY;
  let width = itemSelected.width < 250 ? 250 : itemSelected.width;
  entity.offsetX = offsetXD + width;
  entity.offsetY = offsetYD;
  let addItem = diagram.add(entity);
  if (ent == "word") {
    addItem.annotations[0].content = "Entity";
  }

  if (ent == "answer") {
    addItem.annotations[0].content = "Answer";
  }
  if (oldEdge && ent !== "entities") {
    dropGrouped(addItem, oldEdge, true);
    // diagram.dataBind();
    setTimeout(() => {
      if (
        oldEdge.parentId &&
        diagram.getObject(diagram.getObject(oldEdge?.parentId).children[0])
          .inEdges[0]
      ) {
        diagram.remove(
          diagram.getObject(
            diagram.getObject(diagram.getObject(oldEdge?.parentId).children[0])
              .inEdges[0]
          )
        );
      }
    });
  }

  if (oldEdge && ent === "entities") {
    oldEdge.offsetY += 250;
    diagram.dataBind();
  }
  let connector = drawShape(commLabelData.find((a) => a.id === type));
  connector.id += randomId();
  connector.annotations[0].content = textContent;
  connector.sourceID = diagram.selectedItems.properties.nodes[0].id;
  connector.targetID = addItem.id;
  let connectorAdd = diagram.add(connector);
}

function addTextOnClick(id) {
  let findItem = drawShape(otherData.find((a) => a.id === "callOut"));
  findItem.id += randomId();
  let addItem = diagram.add(findItem);
  const selectedItems = diagram.selectedItems.properties.nodes[0].properties;
  if (id === "communicationholderreplacecommunicationholderwithtext") {
    addItem.offsetX = selectedItems.offsetX - selectedItems.width / 2 + 175;
    addItem.offsetY = selectedItems.offsetY - selectedItems.height / 2 + 125;
    diagram.remove(diagram.selectedItems.properties.nodes[0]);
  } else {
    addItem.offsetX = selectedItems.offsetX + 250;
    addItem.offsetY = selectedItems.offsetY + 50;
  }
}

let countComm = 0;

function addCommunicationFunction(id, annotations) {
  countComm++;
  if (countComm > 10000) {
    countComm = 1;
  }
  let find = applicationRects.find((a) => a.id === id);
  find.annotation = annotations;
  let findItem = drawShape(find);
  findItem.id = findItem.id + countComm;
  let addItem = diagram.add(findItem);
  addItem.offsetX = addItem.offsetX + 250;
  addItem.offsetY = addItem.offsetY + 150;
}

function addCommHolderOnClick() {
  let findItem = drawShape(
    personData.find((a) => a.id === "communicationHolder")
  );
  findItem.id += randomId();
  let addItem = diagram.add(findItem);
  let offsetXD = diagram.selectedItems.properties.nodes[0].properties.offsetX;
  let offsetYD = diagram.selectedItems.properties.nodes[0].properties.offsetY;
  addItem.offsetX = offsetXD + 250;
  addItem.offsetY = offsetYD + 50;
}

function sketchContextClick(idCheck) {

  let data = [...personData, ...commLinkData, ...communicationData];
  let findItem;
  if (idCheck.includes("functionStatus")) {
    findItem = drawShape(
      data.find((a) => a.id === "functionStatus")
    );
  }
  if (idCheck.includes("entityUsage")) {
    findItem = drawShape(
      data.find((a) => a.id === "entityUsage")
    );
  }

  findItem.id += randomId();

  let offsetXD = diagram.selectedItems.properties.nodes[0].properties.offsetX;
  let offsetYD = diagram.selectedItems.properties.nodes[0].properties.offsetY;
  diagram.remove(diagram.selectedItems.properties.nodes[0]);

  let addItem = diagram.add(findItem);
  addItem.offsetX = offsetXD;
  addItem.offsetY = offsetYD;

}

let canvasSymbols = document.querySelectorAll(".e-symbol-draggable > canvas");
for (let i = 0; i < canvasSymbols.length; i++) {
  // Get Canvas
  let parent = canvasSymbols[i].parentElement;
  let cWidth = canvasSymbols[i].width;
  let cHeight = canvasSymbols[i].height;
  let ctx = canvasSymbols[i].getContext("2d");
  let cData = ctx.getImageData(
    (6 * cWidth) / 14,
    0,
    (8 * cWidth) / 14,
    cHeight - 55
  );
  ctx.clearRect(0, 0, cWidth, cHeight);
  canvasSymbols[i].setAttribute("height", cHeight - 55);
  canvasSymbols[i].setAttribute("width", (2 * cWidth) / 14);
  ctx.putImageData(cData, 0, 0);

  // Insert title
  let title = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
  title.setAttribute("x", "0");
  title.setAttribute("y", "0");
  title.style.fontWeight = "Bold";
  title.innerHTML = getTitleById(canvasSymbols[i].id);

  // Initializing the SVG element
  let svgAttributes = document.querySelector(
    ".e-symbol-draggable svg"
  ).attributes;
  let svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  for (let j = 0; j < svgAttributes.length; j++) {
    svgElement.setAttribute(svgAttributes[j].name, svgAttributes[j].value);
  }
  svgElement.setAttribute("id", canvasSymbols[i].id);
  let groupElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  let nativeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  nativeGroup.setAttribute("transform", "translate(0,0) scale(1,1)");

  // Initializing Text Element for symbol
  let textElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  let textAttributes = document.querySelector(
    ".e-symbol-draggable text"
  ).attributes;
  for (let j = 0; j < textAttributes.length; j++) {
    textElement.setAttribute(textAttributes[j].name, textAttributes[j].value);
  }
  textElement.appendChild(title);
  groupElement.appendChild(textElement);
  let shapeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("height", cHeight - 55);
  rect.setAttribute("width", (2 * cWidth) / 14);
  rect.setAttribute("vector-effect", "non-scaling-stroke");
  rect.setAttribute("fill", "transparent");
  rect.setAttribute("stroke-width", "0");
  shapeGroup.appendChild(rect);
  let canvas = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "foreignObject"
  );
  canvas.setAttribute("height", cHeight - 55);
  canvas.setAttribute("width", cHeight - 55);
  canvas.setAttribute("vector-effect", "non-scaling-stroke");
  parent.removeChild(canvasSymbols[i]);
  canvas.appendChild(canvasSymbols[i]);
  shapeGroup.appendChild(canvas);
  nativeGroup.appendChild(shapeGroup);
  groupElement.appendChild(nativeGroup);
  svgElement.appendChild(groupElement);
  parent.appendChild(svgElement);
}

function getTitleById(id) {
  let shape = allShapes.find((x) => x.id === id);
  if (shape !== undefined) {
    return shape.addInfo[0].title;
  } else {
    return "";
  }
}

function getItemById(id) {
  let shape = allShapes.find((x) => x.id === id);
  if (shape !== undefined) {
    return shape;
  }
}

function getNodesDiagramNodes(data) {
  return data.map((x) => {
    return {
      id: x.properties.id,
      offsetX: x.properties.offsetX,
      offsetY: x.properties.offsetY,
      addInfo: x.properties.addInfo,
      shape: x.properties.shape,
      height: x.properties.height,
      width: x.properties.width,
      annotations: x.properties.annotations,
      style: x.properties.style,
      children: x.properties.id.includes("groupofpeople")
        ? x.properties.id.split("-").filter((x) => x !== "groupofpeople")
        : undefined,
    };
  });
}

function randomId() {
  return (Math.random() + 1).toString(36).substring(7);
}

var symbolPalleteSymbols = document.querySelectorAll(
  ".e-symbol-draggable > svg"
);
for (let i = 0; i < symbolPalleteSymbols.length; i++) {
  let titleText = symbolPalleteSymbols[i].querySelector(":scope > g > text");
  let toolTip = symbolPalleteSymbols[i].parentElement.getAttribute("title");
  let native_element = symbolPalleteSymbols[i].querySelector(":scope > g > g");

  // Resizing the elements to fit
  let sizeRect = native_element.querySelector("rect");
  let x = parseInt(sizeRect.getAttribute("width"));
  let y = parseInt(sizeRect.getAttribute("height"));
  let ratio = x / y;
  let _x, _y;

  if (x >= y) {
    _x = 55;
    _y = 55 / ratio;
  } else {
    _y = 55;
    _x = 55 * ratio;
  }

  let sx = _x / x;
  let sy = _y / y;

  let tx = -sx * 2 + 2;
  let ty = -sy * 2 + 5;

  let transform = native_element.getAttribute("transform");
  let arr = transform.split(" ");
  transform = "";
  for (let j = 0; j < arr.length; j++) {
    if (!arr[j].includes("translate") && !arr[j].includes("scale")) {
      transform += arr[j] + " ";
    }
  }
  transform += `translate(${tx}, ${ty}) scale(${sx}, ${sy})`;
  native_element.setAttribute("transform", transform);

  // Translating Text
  let textSpan = titleText.querySelector("tspan");
  let text = textSpan.innerHTML;
  let foreignElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "foreignObject"
  );
  foreignElement.setAttribute("x", "70");
  foreignElement.setAttribute("y", "5");
  foreignElement.setAttribute("height", "26px");
  foreignElement.setAttribute("width", "200px");

  let titleDiv = document.createElement("div");
  titleDiv.style.height = "26px";
  titleDiv.style.width = "200px";
  titleDiv.style.fontSize = "12px";
  titleDiv.style.fontWeight = "bold";
  titleDiv.style.lineHeight = "13px";
  titleDiv.innerHTML = text;
  foreignElement.appendChild(titleDiv);

  let toolTipElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "foreignObject"
  );
  toolTipElement.setAttribute("x", "70");
  toolTipElement.setAttribute("y", "35");
  toolTipElement.setAttribute("width", "200px");
  toolTipElement.setAttribute("height", "40px");
  let toolTipDiv = document.createElement("div");
  toolTipDiv.style.height = "40px";
  toolTipDiv.style.width = "200px";
  toolTipDiv.style.fontSize = "12px";
  toolTipDiv.style.lineHeight = "13px";
  toolTipDiv.innerHTML = toolTip;
  toolTipElement.appendChild(toolTipDiv);
  titleText.parentElement.appendChild(foreignElement);
  titleText.parentElement.appendChild(toolTipElement);
  titleText.remove();
}

let allText = document.querySelectorAll("#left-section .symbol-text-container");
for (let i = 0; i < allText.length; i++) {
  allText[i].setAttribute("visibility", "visible");
}

function setCursor(cursor) {
  document.getElementById("left-section").style.cursor = cursor;
  document.getElementById("right-section").style.cursor = cursor;
  document.getElementById("middle-section").style.cursor = cursor;
}

let vcheck = 0;

function Check() {
  vcheck = 1;
}

function Check1() {
  vcheck = 2;
}

function startLeftDrag() {
  isLeftDrag = true;
  vcheck = 1;
}

function startRightDrag() {
  isRightDrag = true;
  vcheck = 1;
}

function onDrag(e) {
  // if (isRightDrag || isLeftDrag) {
  //   setCursor("ew-resize");
  //   let container = document.getElementById("container");
  //   let leftSection = document.getElementById("left-section");
  //   let rightSection = document.getElementById("right-section");
  //
  //   let leftWidth = isLeftDrag ? e.clientX : leftSection.offsetWidth;
  //   let rightWidth = isRightDrag
  //     ? container.clientWidth - e.clientX
  //     : rightSection.offsetWidth;
  //   let cols = [
  //     leftWidth,
  //     5,
  //     container.clientWidth - 10 - leftWidth - rightWidth - 4,
  //     5,
  //     rightWidth,
  //   ];
  //   let colDef = cols.map((c) => c + "px").join(" ");
  //   container.style.gridTemplateColumns = colDef;
  //   e.preventDefault();
  // }
}

function endDrag() {
  isLeftDrag = false;
  isRightDrag = false;
  setCursor("auto");
  // const mfe = new MathfieldElement();
  // mfe.value = '\\frac{\\pi}{2}';
  // diagram.selectedItems.nodes[0].annotations[0].properties.content = mfe
//if (vcheck === 2){
//if (diagram.selectedItems.nodes.length){

  //if ((diagram.selectedItems.nodes[0].properties.id).startsWith("entityInclusionLineVertical")) {
  //VerticalDialog();

  //document.getElementById('diagram').ej2_instances[0].clearSelection();

  //}
  //if ((diagram.selectedItems.nodes[0].properties.id).startsWith("group4")) {
  //GroupOfItemDialog();

  //document.getElementById('diagram').ej2_instances[0].clearSelection();

  //}

  //if (diagram.selectedItems.nodes[0].properties.addInfo[0].menuId === "empty") {
  //ContinuitySizeDialog();
  //document.getElementById('diagram').ej2_instances[0].isLoading = true;
  //document.getElementById('diagram').ej2_instances[0].clearSelection();
  //document.getElementById('diagram').ej2_instances[0].isLoading = false;
  //}

//}
//vcheck=1;
//}
}

const loadDiagram = (data) => {
  const prevTool = diagram.tool;
  diagram.loadDiagram(data);
  diagram.tool = prevTool;
  diagram.dataBind();
};

let confirmDialogObjSub;

function openModal(textHeader, id, functionApply, node) {
  const content = onGetHtmlDialog(id);
  var confirmDialogObj = new ej.popups.Dialog({
    header: textHeader,
    content: content,
    showCloseIcon: true,
    closeOnEscape: false,
    width: "350px",
    allowDragging: true,
    isModal: true,
    animationSettings: {effect: "None"},
    close: function () {
      $("#confirmDialog").html("");
    },
    buttons: [
      {
        click: (e) => functionApply(node),
        buttonModel: {content: "Apply"},
      },
      {
        click: hiddenModal.bind(node),
        buttonModel: {content: "Cancel"},
      },
    ],
  });
  confirmDialogObj.appendTo("#confirmDialog");
  confirmDialogObjSub = confirmDialogObj;
}

function drawStringOptionsHtml(value, name) {
  return `
    <option value="${value}">${name}</option>
  `;
}

function onGetHtmlDialog(id) {
  if (id === "dialogContinuityPerson") {
    return `<div id="dialogContinuityPerson" class="dialog-group-of-people">
    <div class="dialog-group-of-people-content">
      <div class="d-flex m-b-8">
        <img src="image/optionmix.png" alt="" />
        <div>Continuity Property</div>
      </div>
      <div class="d-flex m-t-8">
        <div class="w-112px">Continuity Size</div>
        <input
          type="number"
          class="w-200px"
          value="0.5"
          id="input-continuity-size"
        />
      </div>
    </div>
  </div>`;
  }
  if (id === "dialogNodeTableComm") {
    return `<div id="dialogNodeTableComm" class="dialog-group-of-people">
    <div class="d-flex m-b-8">
      <img src="image/table.png" alt="" />
      <div>Table Information</div>
    </div>
    <div class="dialog-group-of-people-content m-t-8">
      <div class="d-flex">
        <div class="line-height-20">Number of Column</div>
        <div class="flex-1">
          <input type="text" class="w-100" value="2" id="input-node-table-comm" />
        </div>
      </div>
    </div>
  </div>
  `;
  }
  if (id === "dialogChangeAppComm") {
    return `<div id="dialogNodeTableComm" class="dialog-group-of-people">
    <div class="d-flex m-b-8">
      <img src="image/table.png" alt="" />
      <div><i>Change of Application Realted to Communication</i></div>
    </div>
    <div class="dialog-group-of-people-content m-t-8">
      <div class="d-flex">
        <div class="line-height-20"></div>
        <div class="flex-1">
	Select Columns For Show:<br>
        Communication          <input type="checkbox" id="s1"><br>
	Application Value      <input type="checkbox" id="s2"><br>
	Communication Function <input type="checkbox" id="s3"><br>
	Communication Name     <input type="checkbox" id="s4"><br>
	Communication Subject  <input type="checkbox" id="s5"><br>
	Application Name       <input type="checkbox" id="s6"><br>
	Application            <input type="checkbox" id="s7"><br>
	Communication Date Time<input type="checkbox" id="s8"><br>
	Communication Date     <input type="checkbox" id="s9"><br>
	Communication Time     <input type="checkbox" id="s10"><br>
	Communication Result   <input type="checkbox" id="s11"><br>



        </div>
      </div>
    </div>
  </div>
  `;
  }
  if (id === "dialogChangeAppComm1") {
    return `<div id="dialogNodeTableComm" class="dialog-group-of-people">
    <div class="d-flex m-b-8">
      <img src="image/ft.png" alt="" />
      <div><i>Change of Application Realted to Communication</i></div>
    </div>
    <div class="dialog-group-of-people-content m-t-8">
      <div class="d-flex">
        <div class="line-height-20"></div>
        <div class="flex-1">
	About Y-Axis<br>Name Of Y-Axis
	<select id="s1">
<option value="Communication Function">Communication Function</option>
<option value="Communication Executed Function">Communication Executed Function</option>
<option value="Communication Result">Communication Result</option>
<option value="Application Executed Function">Application Executed Function</option>
<option value="Application Result">Application Result</option>
</select><br>
	About X-Axis<br>Name Of X-Axis
	<select id="s2">
<option value="Communication">Communication</option>
<option value="Communication Name">Communication Name</option>
<option value="Communication Order">Communication Order</option>
<option value="Communication Date And Time">Communication Date And Time</option>
<option value="Application Result">Application Result</option>
</select>

        </div>
      </div>
    </div>
  </div>
  `;
  }
  if (id === "dialogMainArea") {
    return `
      <div id="dialogMainArea" class="dialog-group-of-people">
        <div class="dialog-main-area">
          <div class="m-b-20">Types</div>
          <div class="d-flex justify-content-space-between m-b-20">
            <div class="d-flex">
              <input type="radio" name="colors" id="dialogMainAreahouse" checked="checked" class="m-r-4" />
              <div>House</div>
            </div>
            <div class="d-flex">
              <input type="radio" name="colors" id="dialogMainAreamap" class="m-r-4" />
              <div>Map</div>
            </div>
            <div class="d-flex">
              <input type="radio" name="colors" id="dialogMainArearegular" class="m-r-4" />
              <div>Rectangle</div>
            </div>
            <div class="d-flex">
              <input type="radio" name="colors" id="dialogMainArearegularwithmap" class="m-r-4" />
              <div>Rectangle With Map</div>
            </div>
          </div>
          <div class="d-flex"  id="dialogMainAreaValueWrap">
            <div style="margin-right: 5px">Numbers</div>
            <input class="w-100" type="number" id="dialogMainAreaValue" value="1"/>
          </div>
          <div class="d-flex" id="dialogMainArea346432">
            <div style="margin-right: 5px">Locations</div>
            <div id="dialogMainAreaValueSelect"></div>
          </div>
        </div>
      </div>
    `;
  }
  if (id === "dialogGroupofPeople") {
    return `<div id="dialogGroupofPeople" class="dialog-group-of-people">
    <div class="dialog-group-of-people-content">
      <div class="d-flex m-b-8 line-height-20">
        <div class="w-112px">Options</div>
        <select class="w-200px" id="dialogGroupofPeopleOptions">
          <option id="option1" selected value="option1">Option 1</option>
          <option id="option2" value="option2">Option 2</option>
          <option id="option3" value="option3">Option 3</option>
          <option id="option4" value="option4">Option 4</option>
        </select>
      </div>
      <div class="d-flex m-b-8 line-height-20">
        <div class="w-112px">Format</div>
        <select class="w-200px" id="dialogGroupofPeopleFormat">
          <option id="formatPerson"  value="Person" selected>Person</option>
          <option id="formatP"  value="P">P</option>
        </select>
      </div>
      <div class="d-flex m-b-8 line-height-20">
        <div class="w-112px">Start Number</div>
        <input type="number" class="w-200px" value="1"  id="dialogGroupofPeopleStartNum"/>
      </div>
      <div class="d-flex m-b-8 line-height-20">
        <div class="w-112px">Group Name</div>
        <input type="text" class="w-200px" value="Group Name" id="dialogGroupofPeopleGroupName"/>
      </div>
      <div class="d-flex m-b-8 line-height-20">
        <input type="checkbox" id="dialogGroupofPeoplehasFrame" name="dialogGroupofPeoplehasFrame">
        <label class="m-l-8" for="dialogGroupofPeoplehasFrame"> Has frame</label>
      </div>
    </div>
  </div>`;
  }
  if (id === "labeltocover") {
    return `<div id="dialogLabel" class="dialog-group-of-people">
    <div class="dialog-group-of-people-content">
      <div class="d-flex m-t-8 m-b-8">
        <div class="w-112px">Label Text</div>
        <select class="w-200px" id="selected-label-text1">
        </select>
      </div>
      <div class="d-flex m-t-8 m-b-8">
        <div class="w-112px">Label Text</div>
        <select class="w-200px" id="selected-label-text2">
        </select>
      </div>
      <div class="d-flex m-b-8 line-height-20" id="checked-negate-text">
        <input
          type="checkbox"
          id="negateText"
          name="negateText"
        />
        <label class="m-l-8">Negate Text</label>
      </div>
      <div class="d-flex m-b-8 line-height-20" id="checked-not-negate-text">
        <input
          type="checkbox"
          id="notNegateText"
          name="notNegateText"
        />
        <label class="m-l-8">Not Negate Text</label>
      </div>
    </div>
  </div>`;
  }
  if (id === "CommunicationMixtureCommunication") {
    return `<div id="dialogNodeTableComm" class="dialog-group-of-people">
    <div class="d-flex m-b-8">
      <img src="image/optionmix.png" alt="" />
      <div>Input Property</div>
    </div>
    <div class="dialog-group-of-people-content m-t-8">
      <div class="d-flex">
        <div class="line-height-20">Number of input</div>
        <div class="flex-1">
          <input type="number" class="w-100" value="2" id="input-numer-of-group" />
        </div>
      </div>
    </div>
  </div>
  `;
  }
}

function hiddenModal() {
  confirmDialogObjSub.hide();
}

/*
  Only trigger the highlighter after document fully loaded.  This is
  necessary for cases where page load takes a significant length
  of time to fully load.
*/

function initDomain() {
  /*
    The short pause allows any required callback functions
    to execute before actually highlighting, and allows
    the JQuery $(document).ready wrapper to finish.
   */
  setTimeout(function() {
    switchToTheory();
  }, 300);
}

if (document.readyState == 'complete') {
  initDomain()
} else {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      initDomain()
    }
  }
}

$("#open-project-btn").on("click", () => {
  Helpers.selectFile(".json").then((file) => {
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (event) {
        loadDiagram(event.target.result);
      };
    }
  });
});
$("#save-project-btn").on("click", () => {
  const saveData = diagram.saveDiagram();
  Helpers.downloadFile(saveData);
});
$("#new-project-btn").on("click", () => {
  loadDiagram(blankDiagram);
});
$("#export-png-btn").on("click", () => {
  var node = document.getElementById("diagram_nativeLayer");
  node.classList.add("bg-white");
  htmlToImage.toPng(node).then((data) => {
    Helpers.downloadFile(data, "SPL_Export.png");
    node.classList.remove("bg-white");
  });
});
$("#export-jpg-btn").on("click", () => {
  var node = document.getElementById("diagram_diagramLayer_div");
  node.classList.add("bg-white");
  htmlToImage.toJpeg(node).then((data) => {
    Helpers.downloadFile(data, "SPL_Export.jpeg");
    node.classList.remove("bg-white");
  });
});
$("#export-bmp-btn").on("click", () => {
  var node = document.getElementById("diagram_diagramLayer_div");
  node.classList.add("bg-white");
  htmlToImage.toPng(node).then((data) => {
    Helpers.downloadFile(data, "SPL_Export.bmp");
    node.classList.remove("bg-white");
  });
});
$("#export-svg-btn").on("click", () => {
  const options = {
    mode: "Download",
    fileName: "SPL_Export",
    format: "SVG",
  };
  diagram.exportDiagram(options);
});
$("#export-pdf-btn").on("click", () => {
  const doc = new PDFDocument();
  const source = document.getElementById("diagram_diagramLayer_div");
  doc.fromHTML(source, {
    callback(doc) {
      doc.save("SPL_Export.pdf");
    },
  });
});