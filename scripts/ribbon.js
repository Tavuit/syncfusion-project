var fontFamily = [
  "Segoe UI",
  "Times New Roman",
  "Arial",
  "Times New Roman",
  "Tahoma",
  "Helvetica",
];
var fontSize = ["1pt", "2pt", "3pt", "4pt", "5pt"];
var tabs = [
  {
    id: 'home',
    text: 'Home',
    groups: [
      {
        text: 'Clipboard',
        alignType: ej.Ribbon.AlignType.Rows,
        content: [
          {
            groups: [
              {
                id: 'copy',
                toolTip: 'Copy',
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: 'icon-40 flaticon-copy',
                  text: 'Copy',
                }
              },
              {
                id: 'paste',
                toolTip: 'Paste',
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: 'icon-40 flaticon-paste',
                  text: 'Paste',
                }
              },
              {
                id: 'cut',
                toolTip: 'Cut',
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: 'icon-40 flaticon-scissors',
                  text: 'Cut',
                }
              },
              {
                id: 'delete',
                toolTip: 'Delete',
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: 'icon-40 flaticon-delete',
                  text: 'Delete',
                }
              },
              {
                id: 'export',
                toolTip: 'Export',
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: 'icon-40 flaticon-share',
                  text: 'Export',
                }
              }
            ]
          }
        ],
        enableGroupExpander: false,
      }, {
        text: "Undo Action",
        alignType: ej.Ribbon.AlignType.Columns,
        content: [
          {
            groups: [
              {
                id: "undo",
                toolTip: "Undo",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-redo-arrow1",
                  text: "Undo",
                },
              },
            ],
          },
        ],
        enableGroupExpander: false,
      },
      {
        text: "Format",
        alignType: ej.Ribbon.AlignType.Rows,
        content: [
          {
            groups: [
              {
                id: "leftalign",
                toolTip: "Left align",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "icon-40 flaticon-left-align",
                },
              },
              {
                id: "centeralign",
                toolTip: "Center align",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "icon-40 flaticon-center-align",
                },
              },
              {
                id: "rightalign",
                toolTip: "Right align",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "icon-40 flaticon-right-align",
                },
              },
              // {
              //   id: "fullalign",
              //   toolTip: "Full align",
              //   buttonSettings: {
              //     contentType: ej.ContentType.ImageOnly,
              //     prefixIcon: "icon-40 flaticon-full-align",
              //   },
              // },
            ],
          },
          {
            groups: [
              {
                id: "fontFamily",
                toolTip: "Font",
                dropdownSettings: {
                  enableAnimation: true,
                  dataSource: fontFamily,
                  text: "Segoe UI",
                  width: 100,
                },
              },
              {
                id: "fontSize",
                toolTip: "FontSize",
                dropdownSettings: {
                  enableAnimation: true,
                  dataSource: fontSize,
                  text: "1pt",
                  width: 60,
                },
              },
            ],
            defaults: {
              type: ej.Ribbon.type.dropDownList,
              height: 28,
            },
          },
          {
            groups: [
              {
                id: "bold",
                toolTip: "Bold",
                type: ej.Ribbon.type.toggleButton,
                toggleButtonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  defaultText: "Bold",
                  activeText: "Bold",
                  defaultPrefixIcon: "icon-40 flaticon-bold",
                  activePrefixIcon: "icon-40 flaticon-bold",
                },
              },
              {
                id: "italics",
                toolTip: "Italics",
                type: ej.Ribbon.type.toggleButton,
                toggleButtonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  defaultText: "Italics",
                  activeText: "Italics",
                  defaultPrefixIcon: "icon-40 flaticon-italic",
                  activePrefixIcon: "icon-40 flaticon-italic",
                },
              },
              {
                id: "underLine",
                toolTip: "Underline",
                type: ej.Ribbon.type.toggleButton,
                toggleButtonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  defaultText: "Underline",
                  activeText: "Underline",
                  defaultPrefixIcon: "icon-40 flaticon-underlined-text",
                  activePrefixIcon: "icon-40 flaticon-underlined-text",
                },
              },
            ],
          },
        ],
        enableGroupExpander: false,
      },
      {
        text: "Style",
        alignType: ej.Ribbon.AlignType.Rows,
        content: [
          {
            groups: [
              {
                id: "fill",
                text: "Fill",
                toolTip: "Fill",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 fill-menu",
                },
              },
              {
                id: "line",
                text: "Line",
                toolTip: "Line",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 line-menu",
                },
              },
              {
                id: "text",
                text: "Text",
                toolTip: "Text",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 text-menu",
                },
              },
              {
                id: "start",
                text: "Start",
                toolTip: "Start",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 start-menu",
                },
              },
              {
                id: "end",
                text: "End",
                toolTip: "End",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 end-menu",
                },
              },
            ],
          },
        ],
        enableGroupExpander: false,
      },
      {
        text: "Annotation",
        alignType: ej.Ribbon.AlignType.Columns,
        content: [
          {
            groups: [
              {
                id: "pointer",
                text: "Pointer",
                toolTip: "Pointer",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 point-menu",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "textBox",
                text: "Text",
                toolTip: "Text Box",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 text-menu2",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "line",
                text: "Line",
                toolTip: "Line",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 line-menu2",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "rectangle",
                text: "Rectangle",
                toolTip: "Rectangle",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-rectangular-shape-outline",
                },
              },
              {
                id: "arc",
                text: "Arc",
                toolTip: "Arc",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-curved-line",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "ellipse",
                text: "Ellipse",
                toolTip: "Ellipse",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-ellipse-outline-shape-variant",
                },
              },
              {
                id: "polyline",
                text: "Polyline",
                toolTip: "Polyline",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-business-ascendant-graphic-line",
                },
              },
            ],
          },
        ],
        enableGroupExpander: false,
      },
      {
        text: "Communication Link",
        alignType: ej.Ribbon.AlignType.Columns,
        content: [
          {
            groups: [
              {
                id: "AutoConnector",
                text: "Auto Connector",
                toolTip: "AutoConnector",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 autoconnector",
                },
              },
            ],
          },
        ],
        enableGroupExpander: false,
      },
      {
        text: "Node Item",
        content: [
          {
            groups: [
              {
                id: "node",
                text: "Node",
                toolTip: "Node",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                width: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 node-menu-home-list",
                  targetID: "node-menu-home-list",
                },
              },
            ],
          },
        ],
        enableGroupExpander: false,
      },
    ],
  },
  {
    id: "insert",
    text: "Insert",
    groups: [
      {
        text: "Diagram Parts",
        content: [
          {
            groups: [
              {
                id: "container",
                text: "Container",
                toolTip: "Container",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 container-menu-insert",
                  targetID: "listSubMenucontainerInsert",
                },
              },
              {
                id: "list",
                text: "List",
                toolTip: "List",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 list-menu-insert",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "picture",
                text: "Picture",
                toolTip: "Picture",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 picture-menu-insert",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "fromclipboard",
                text: "From Clipboard",
                toolTip: "From Clipboard",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-copy",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Container",
        content: [
          {
            groups: [
              {
                id: "function",
                text: "Function",
                toolTip: "Function",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-copy",
                },
              },
              {
                id: "application",
                text: "Application",
                toolTip: "Application",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-paste",
                },
              },
              {
                id: "Result",
                text: "Result",
                toolTip: "Result",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-paste",
                },
              },
              {
                id: "Collection",
                text: "Collection",
                toolTip: "Collection",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-copy",
                },
              },
              {
                id: "Dictionary",
                text: "Dictionary",
                toolTip: "Dictionary",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-paste",
                },
              },
              {
                id: "mainarea",
                text: "Main Area",
                toolTip: "Main Area",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-paste",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Speak Logic",
        content: [
          {
            groups: [
              {
                id: "Function",
                text: "Function",
                toolTip: "Function",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Function_Icon",
                  targetID: "listSubMenuSpeakLogicFunction",
                },
              },
              {
                id: "Word",
                text: "Word",
                toolTip: "Word",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Word_Icon",
                  targetID: "listSubMenuSpeakLogicWord",
                },
              },
              {
                id: "Application",
                text: "Application",
                toolTip: "Application",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Application_Icon",
                  targetID: "listSubMenuSpeakLogicApplication",
                },
              },
              {
                id: "Relationship",
                text: "Relationship",
                toolTip: "Relationship",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Relationship_Icon",
                  targetID: "listSubMenuSpeakLogicRelationship",
                },
              },
              {
                id: "Derivative",
                text: "Derivative",
                toolTip: "Derivative",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Derivative_Icon",
                  targetID: "listSubMenuSpeakLogicDerivative",
                },
              },
              {
                id: "Function2",
                text: "Function2",
                toolTip: "Function2",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Function2_Icon",
                  targetID: "listSubMenuSpeakLogicFunction",
                },
              },
              {
                id: "Fundamental1",
                text: "Fundamental1",
                toolTip: "Fundamental1",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Fundamental1_Icon",
                  targetID: "listSubMenuSpeakLogicFundamental1",
                },
              },
              {
                id: "Fundamental2",
                text: "Fundamental2",
                toolTip: "Fundamental2",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Fundamental2_Icon",
                  targetID: "listSubMenuSpeakLogicFundamental1",
                },
              },
              {
                id: "Instrusment",
                text: "Instrusment",
                toolTip: "Instrusment",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Instrusment_Icon",
                  targetID: "listSubMenuSpeakLogicInstrusment",
                },
              },
              {
                id: "Stability",
                text: "Stability",
                toolTip: "Stability",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Stability_Icon",
                  targetID: "listSubMenuSpeakLogicStability",
                },
              },
              {
                id: "Theorem",
                text: "Theorem",
                toolTip: "Theorem",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Theorem_Icon",
                  targetID: "listSubMenuSpeakLogicTheorem",
                },
              },
              {
                id: "Theory1",
                text: "Theory1",
                toolTip: "Theory1",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Theory1_Icon",
                  targetID: "listSubMenuSpeakLogicTheory1",
                },
              },
              {
                id: "Theory2",
                text: "Theory2",
                toolTip: "Theory2",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Theory2_Icon",
                  targetID: "listSubMenuSpeakLogicTheory2",
                },
              },
              {
                id: "Time",
                text: "Time",
                toolTip: "Time",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 speak-logic-menu-Time_Icon",
                  targetID: "listSubMenuSpeakLogicTime",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "equations",
    text: "Equations",
    groups: [
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "Bracket",
                text: "Bracket",
                toolTip: "Bracket",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-brackets",
                  targetID: "listSubMenuEuqationsBrackets",
                },
              },
              {
                id: "Decorator",
                text: "Decorator",
                toolTip: "Decorator",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-decoratedEquation",
                  targetID: "listSubMenuEuqationsDecorator",
                },
              },
              {
                id: "Sum & Products",
                text: "Sum & Products",
                toolTip: "Sum & Products",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-sumproduct",
                  targetID: "listSubMenuEuqationsSumProducts",
                },
              },
              {
                id: "Intergral",
                text: "Intergral",
                toolTip: "Intergral",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-integrals",
                  targetID: "listSubMenuEuqationsIntergral",
                },
              },
              {
                id: "Script",
                text: "Script",
                toolTip: "Script",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-script",
                  targetID: "listSubMenuEuqationsScript",
                },
              },
              {
                id: "Fraction & Radical",
                text: "Fraction & Radical",
                toolTip: "Fraction & Radical",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-divroot",
                  targetID: "listSubMenuEuqationsFractionRadical",
                },
              },
              {
                id: "Labeled Arrow",
                text: "Labeled Arrow",
                toolTip: "Labeled Arrow",
                height: "auto",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-arrowEquation",
                },
              },
              {
                id: "Underbar & Overbar",
                text: "Underbar & Overbar",
                toolTip: "Underbar & Overbar",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-underbar",
                  targetID: "listSubMenuEuqationsUnderbarOverbar",
                },
              },
              {
                id: "Accent & Prime",
                text: "Accent & Prime",
                toolTip: "Accent & Prime",
                height: "auto",
                buttonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-decoratedCharacter",
                },
              },
              {
                id: "Matrix",
                text: "Matrix",
                toolTip: "Matrix",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-matrix",
                  targetID: "listSubMenuEuqationsMatrix",
                },
              },
              {
                id: "Boxes",
                text: "Boxes",
                toolTip: "Boxes",
                type: ej.Ribbon.type.splitButton,
                height: "70px",
                splitButtonSettings: {
                  buttonMode: ej.ButtonMode.Dropdown,
                  arrowPosition: ej.ArrowPosition.Bottom,
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-boxes",
                  targetID: "listSubMenuEuqationsBoxs",
                },
              },
              {
                id: "Operator",
                text: "Operator",
                toolTip: "Operator",
                height: "auto",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-symbols",
                },
              },
              {
                id: "Greek Captital",
                text: "Greek Captital",
                toolTip: "Greek Captital",
                height: "auto",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-greekcapital",
                },
              },
              {
                id: "Greek Small",
                text: "Greek Small",
                toolTip: "Greek Small",
                height: "auto",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-greeksmall",
                },
              },
              {
                id: "Arrow",
                text: "Arrow",
                toolTip: "Arrow",
                height: "auto",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 equation-menu-arrows",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "edit",
    text: "Edit",
    groups: [
      {
        text: "Entity",
        content: [
          {
            groups: [
              {
                id: "selectedEntity",
                text: "Selected Entity",
                toolTip: "Selected Entity",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 selectedentityedit",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Undo Action",
        content: [
          {
            groups: [
              {
                id: "undoLastAction1",
                text: "Undo Last Action",
                toolTip: "Undo Last Action",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 flaticon-redo-arrow-large",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "project",
    text: "Project",
    groups: [
      {
        text: "Start",
        content: [
          {
            groups: [
              {
                id: "startAProject",
                text: "Start a Project",
                toolTip: "Start a Project",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 startproject",
                },
              },
              {
                id: "configureWarningMessage",
                text: "Configure Warning Message",
                toolTip: "Configure Warning Message",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 error",
                },
              },
              {
                id: "applicationsetting",
                text: "Application Setting",
                toolTip: "Application Setting",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 optionmix",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Video & Image",
        content: [
          {
            groups: [
              {
                id: "captureimage",
                text: "Capture Image",
                toolTip: "Capture Image",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 captureimageproject",
                },
              },
              {
                id: "reOpenProject",
                text: "Reopen Project",
                toolTip: "Reopen Project",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 editimageproject",
                },
              },
              {
                id: "reconrdvideoproject",
                text: "Record Video",
                toolTip: "Record Video",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 reconrdvideoproject",
                },
              },
              {
                id: "editvideoproject",
                text: "Edit Video",
                toolTip: "Edit Video",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 editvideoproject",
                },
              },
              {
                id: "recordaudioproject",
                text: "Record Audio",
                toolTip: "Record Audio",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 recordaudioproject",
                },
              },
              {
                id: "settingproject",
                text: "Settings",
                toolTip: "Settings",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 settingproject",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Simalation",
        height: "70px",
        content: [
          {
            groups: [
              {
                id: "simulate",
                text: "Simulate",
                toolTip: "Simulate",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "debug",
                text: "Debug",
                toolTip: "Debug",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Step Into",
                text: "Step Into",
                toolTip: "Step Into",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Abort",
                text: "Abort",
                toolTip: "Abort",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Stop",
                text: "Stop",
                toolTip: "Stop",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Simulation Setting",
                text: "Simulation Setting",
                toolTip: "Simulation Setting",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 settingproject1",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Finish",
        height: "70px",
        content: [
          {
            groups: [
              {
                id: "Close Project",
                text: "Close Project",
                toolTip: "Close Project",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 closeproject",
                },
              },
              {
                id: "Open Project",
                text: "Open Project",
                toolTip: "Open Project",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 openproject",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "view",
    text: "View",
    groups: [
      {
        text: "Open",
        content: [
          {
            groups: [
              {
                id: "Sub Funciton",
                text: "Sub Funciton",
                toolTip: "Sub Funciton",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 subfunction",
                },
              },
              {
                id: "Sub Application",
                text: "Sub Application",
                toolTip: "Sub Application",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 subapplication",
                },
              },
              {
                id: "sub Result",
                text: "sub Result",
                toolTip: "sub Result",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 subresult",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Zoom",
        content: [
          {
            groups: [
              {
                id: "Fit to Window",
                text: "Fit to Window",
                toolTip: "Fit to Window",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-20 fittowindownview",
                },
              },
              {
                id: "PageWidth",
                text: "Page Width",
                toolTip: "Page Width",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-20 pagewidthview",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Show",
        content: [
          {
            groups: [
              {
                id: "Show Tooltip",
                text: "Show Tooltip",
                toolTip: "Show Tooltip",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-view",
                },
              },
              {
                id: "Ruler",
                text: "Ruler",
                toolTip: "Ruler",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Allow Cross",
                text: "Allow Cross",
                toolTip: "Allow Cross",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Grid",
                text: "Grid",
                toolTip: "Grid",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Image Width Frama",
                text: "Image Width Frama",
                toolTip: "Image Width Frama",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Page Breaks",
                text: "Page Breaks",
                toolTip: "Page Breaks",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Show Entities",
        content: [
          {
            groups: [
              {
                id: "Entity Library",
                text: "Entity Library",
                toolTip: "Entity Library",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 entityview",
                },
              },
              {
                id: "Pan & zoom",
                text: "Pan & zoom",
                toolTip: "Pan & zoom",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 panzoomview",
                },
              },
              {
                id: "Model View",
                text: "Model View",
                toolTip: "Model View",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 modelview",
                },
              },
              {
                id: "View List",
                text: "View List",
                toolTip: "View List",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 tasklistview",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "Show & Hide Models",
                text: "Show & Hide Models",
                toolTip: "Show & Hide Models",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 showhidemodelsview",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "Show & Hide Connection Points",
                text: "Show & Hide Connection Points",
                toolTip: "Show & Hide Connection Points",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "layout",
    text: "Layout",
    groups: [
      {
        text: "Nudge and Pan",
        alignType: ej.Ribbon.AlignType.Columns,
        height: "70px",
        content: [
          {
            groups: [
              {
                id: "panTool",
                text: "Pan Tool",
                toolTip: "Pan Tool",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-select",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "nudegeLeft",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-left-arrow",
                },
              },
              {
                id: "nudegeUp",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-up-arrow",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "nudgeRight",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-left-arrow",
                },
              },
              {
                id: "nudgeDown",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-down-arrow",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Align",
        height: "70px",
        content: [
          {
            groups: [
              {
                id: "alignLeft",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align-left",
                },
              },
              {
                id: "align Center",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align-center",
                },
              },
              {
                id: "align Right",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align-left",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "alignBottom",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-sort",
                },
              },
              {
                id: "alignMiddle",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align",
                },
              },
              {
                id: "alignTop",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-top-alignment",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Size",
        height: "70px",
        content: [
          {
            groups: [
              {
                id: "equalhorizontalspace",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
              {
                id: "increaseHorizontal",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
              {
                id: "decreaseHorizontal",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "equalVerticalSpace",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
              {
                id: "increaseVertical",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
              {
                id: "decreaseVertical",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        alignType: ej.Ribbon.AlignType.Columns,
        height: "70px",
        content: [
          {
            groups: [
              {
                id: "sameWidth",
                text: "Same Width",
                toolTip: "Same Width",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
              {
                id: "sameheight",
                text: "Same Height",
                toolTip: "Same Height",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
            ]
          },
          {
            groups: [
              {
                id: "sameSize",
                text: "Same Size",
                toolTip: "Same Size",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  prefixIcon: "e-icon flaticon-size-square",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Snap",
        content: [
          {
            groups: [
              {
                id: "snapToGrid",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-grid",
                },
              },
              {
                id: "snapToRuler",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-scale",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "snapToGuidelines",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-axis",
                },
              },
              {
                id: "snapRotation",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-redo-arrow",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Center",
        content: [
          {
            groups: [
              {
                id: "modelHorizontal",
                text: "Model Horizontal",
                toolTip: "Model Horizontal",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-left-alignment",
                },
              },
              {
                id: "modelVertical",
                text: "Model Vertical",
                toolTip: "Model Vertical",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-top-alignment-large",
                },
              },
              {
                id: "sizeToWindow",
                text: "Size To Window",
                toolTip: "Size To Window",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-website",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "domain",
    text: "Domain",
    groups: [
      {
        text: "Identification",
        content: [
          {
            groups: [
              {
                id: "communication",
                text: "Communication",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 communicationdomain",
                  click: "switchToComm",
                },
              },
              {
                id: "toTheoryDomain",
                text: "Theory ",
                height: "70px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 theorydomain",
                  click: "switchToTheory",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

$(function () {
  $("#Ribbon").ejRibbon({
    height: 170,
    // expandPinSettings: {
    //   toolTip: "Collapse the Ribbon",
    // },
    allowResizing: false,
    applicationTab: {
      type: ej.Ribbon.applicationTabType.menu,
      menuItemID: "ribbon",
      menuSettings: {
        openOnClick: true,
      },
    },
    tabs: tabs,
    // groupExpand: function (args) {
    //   alert("Expanded");
    // },
  });
  $("#Ribbon_function").on("click", () => {
    addCommunicationFunction("communicationFunctionGrouped", [
      "Communication Function",
      "Communication Function",
      "Communication Function",
    ]);
  });
  $("#Ribbon_application").on("click", () => {
    addCommunicationFunction("communicationFunctionGrouped", [
      "Application 1",
      "Application 2",
      "Application",
    ]);
  });
  $("#Ribbon_Result").on("click", () => {
    addCommunicationFunction("communicationFunctionGrouped", [
      "Communication Result 1",
      "Communication Result 2",
      "Communication Result",
    ]);
  });
  // $("#Ribbon_toCommunicationDomain span:first-child").addClass(
  //   "disabled-button"
  // );
  // $("#Ribbon_node span:first-child").addClass("flaticon-node-menu-home-list");
  // $("#listSubMenuEuqationsDecoratorArrow").on("click", () => {
  //   $("#listSubMenuEuqationsDecoratorArrow").addClass("item-active-tab-menu");
  //   $("#listSubMenuEuqationsDecoratorEquation").removeClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#listSubMenuEuqationsDecoratorCharacter").removeClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#list-sub-menu-equations-Arrow").removeClass("d-none");
  //   $("#list-sub-menu-equations-Character").addClass("d-none");
  //   $("#list-sub-menu-equations-Equation").addClass("d-none");
  // });
  // $("#listSubMenuEuqationsDecoratorCharacter").on("click", () => {
  //   $("#listSubMenuEuqationsDecoratorArrow").removeClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#listSubMenuEuqationsDecoratorEquation").removeClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#listSubMenuEuqationsDecoratorCharacter").addClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#list-sub-menu-equations-Arrow").addClass("d-none");
  //   $("#list-sub-menu-equations-Character").removeClass("d-none");
  //   $("#list-sub-menu-equations-Equation").addClass("d-none");
  // });
  // $("#listSubMenuEuqationsDecoratorEquation").on("click", () => {
  //   $("#listSubMenuEuqationsDecoratorArrow").removeClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#listSubMenuEuqationsDecoratorCharacter").removeClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#listSubMenuEuqationsDecoratorEquation").addClass(
  //     "item-active-tab-menu"
  //   );
  //   $("#list-sub-menu-equations-Arrow").addClass("d-none");
  //   $("#list-sub-menu-equations-Character").addClass("d-none");
  //   $("#list-sub-menu-equations-Equation").removeClass("d-none");
  // });
});
