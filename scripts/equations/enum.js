var EQUATIONS_DATA = {
  "AngleBar": "\\left\\langle\\right\\vert",
  "BarAngle": "\\left\\vert\\right\\rangle",
  "BottomCurlyBracket": "\\underbrace{x}_{y}",
  "BottomSquareBracket": "",
  "Ceiling": "\\left\\lceil\\right\\rceil",
  "CurlyBracket": "\\left\\{\\right\\}",
  "DoubleArrowBarBracket": "\\left\\langle|\\right\\rangle",
  "DoubleBar": "\\left\\|\\right\\|",
  "Floor": "\\left\\lfloor\\right\\rfloor ",
  "LeftAngle": "\\langle",
  "LeftBar": "\\left|",
  "LeftCurlyBracket": "\\left\\{",
  "LeftDoubleBar": "||",
  "LeftLeftSquareBracket": "[x[",
  "LeftParenthesis": "(",
  "LeftSquareBar": "⟦",
  "LeftSquareBracket": "[",
  "Parentheses": "(x)",
  "ParenthesisSquare": "(x]",
  "PointingAngles": "\\left\\langle\\right\\rangle",
  "RightAngle": "\\rangle",
  "RightBar": "|",
  "RightCurlyBracket": "}",
  "RightDoubleBar": "||",
  "RightLeftSquareBracket": "]x[",
  "RightParenthesis": ")",
  "RightRightSquareBracket": "]x]",
  "RightSquareBar": "⟧",
  "RightSquareBracket": "]",
  "SingleBar": "\\left|\\right|",
  "SquareBar": "⟦x⟧",
  "SquareBracket": "[x]",
  "SquareParenthesesBracket": "[(x])",
  "SquareParenthesis": "[x)",
  "TopCurlyBracket": "\\overbrace{x}^{y}",
  // "TopSquareBracket": "", \overbracket{abc}
  "TopSquareBracket": "",
  "ArrowDoubleBottom": "\\overleftrightarrow{x}",
  "ArrowDoubleBottomTop": "\\xleftrightarrow[y]{x}",
  "ArrowDoubleTop": "\\underleftrightarrow{x}",
  "LeftBottom": "\\overleftarrow{x}",
  "LeftBottomTop": "\\xleftarrow[x]{y}",
  "LeftTop": "\\underleftarrow{x} ",
  "RightBottom": "\\overrightarrow{x}",
  "RightBottomTop": "\\xrightarrow[x]{y}",
  "RightLeftBottom": "\\xtofrom[x]{}",
  "RightLeftBottomTop": "\\xtofrom[x]{y}",
  "RightLeftHarpBottom": "\\xrightleftharpoons[x]{}",
  "RightLeftHarpBottomTop": "\\xrightleftharpoons[x]{y}",
  "RightLeftHarpTop": "\\xrightleftharpoons[]{y}",
  "RightLeftTop": "\\xtofrom[]{y}",
  "RightSmallLeftBottom": "",
  "RightSmallLeftBottomTop": "",
  "RightSmallLeftHarpBottom": "\\xrightequilibrium[x]{}",
  "RightSmallLeftHarpBottomTop": "\\xrightequilibrium[x]{y}",
  "RightSmallLeftHarpTop": "\\xrightequilibrium[]{y}",
  "RightSmallLeftTop": "",
  "RightTop": "",
  "SmallRightLeftBottomTop": "",
  "SmallRightLeftHarpBottom": "\\xleftequilibrium[x]{}",
  "SmallRightLeftHarpBottomTop": "\\xleftequilibrium[x]{y}",
  "SmallRightLeftHarpTop": "\\xleftequilibrium[]{y}",
  "SmallRightLeftTop": "",
  "coProduct": "\\coprod{x}",
  "coProductBottom": "\\coprod_{x}{y}",
  "coProductBottomTop": "\\coprod_{x}^{y}{z}",
  "coProductSub": "\\coprod\\limits_{x}{y}",
  "coProductSubSuper": "\\coprod\\limits_{x}^{y}{z}",
  "intersection": "\\bigcap{x}",
  "intersectionBottom": "\\bigcap_{x}{y}",
  "intersectionBottomTop": "\\bigcap_{x}^{y}{z}",
  "intersectionSub": "\\bigcap\\limits_{x}{y}",
  "intersectionSubSuper": "\\bigcap\\limits_{x}^{y}{z}",
  "product": "\\prod{x}",
  "productBottom": "\\prod_{x}{y}",
  "productBottomTop": "\\prod_{x}^{y}{z}",
  "productSub": "\\prod\\limits_{x}{y}",
  "productSubSuper": "\\prod\\limits_{x}^{y}{z}",
  "sum": "\\sum{x}",
  "sumBottom": "\\sum_{x}{y}",
  "sumBottomTop": "\\sum_{x}^{y}{z}",
  "sumSub": "\\sum\\limits_{x}{y}",
  "sumSubSuper": "\\sum\\limits_{x}^{y}{z}",
  "union": "\\bigcup{x}",
  "unionBottom": "\\bigcup_{x}{y}",
  "unionBottomTop": "\\bigcup_{x}^{y}{z}",
  "unionSub": "\\bigcup\\limits_{x}{y}",
  "unionSubSuper": "\\bigcup\\limits_{x}^{y}{z}",
  "SingleBottom": "\\int\\limits_{x}{z}",
  "SingleBottomTop": "\\int\\limits_{x}^{y}{z}",
  "SingleSimple": "\\int{z}",
  "SingleSub": "\\int_{x}{z}",
  "SingleSubSuper": "\\int_{x}^{y}{z}",
  "DoubleBottom": "\\iint\\limits_{x}{z}",
  "DoubleBottomTop": "\\iint\\limits_{x}^{y}{z}",
  "DoubleSimple": "\\iint{z}",
  "DoubleSub": "\\iint_{x}{z}",
  "DoubleSubSuper": "\\iint_{x}^{y}{z}",
  "TripleBottom": "\\iiint\\limits_{x}{z}",
  "TripleBottomTop": "\\iiint\\limits_{x}^{y}{z}",
  "TripleSimple": "\\iiint{z}",
  "TripleSub": "\\iiint_{x}{z}",
  "TripleSubSuper": "\\iiint_{x}^{y}{z}",
  "ClockBottom": "\\oint\\limits_{x}{z}",
  "ClockBottomTop": "\\oint\\limits_{x}^{y}{z}",
  "ClockSimple": "\\oint{z}",
  "ClockSub": "\\oint_{x}{z}",
  "ClockSubSuper": "\\oint_{x}^{y}{z}",
  "SurfaceBottom": "\\oiint\\limits_{x}{z}",
  "SurfaceBottomTop": "\\oiint\\limits_{x}^{y}{z}",
  "SurfaceSimple": "\\oiint{z}",
  "SurfaceSub": "\\oiint_{x}{z}",
  "SurfaceSubSuper": "\\oiint_{x}^{y}{z}",
  "VolumeBottom": "\\oiiint\\limits_{x}{z}",
  "VolumeBottomTop": "\\oiiint\\limits_{x}^{y}{z}",
  "VolumeSimple": "\\oiiint{z}",
  "VolumeSub": "\\oiiint_{x}{z}",
  "VolumeSubSuper": "\\oiiint_{x}^{y}{z}",
  "Sub": "{y}_{x}",
  "SubLeft": "",
  "SubSuper": "{x}_{y}^{z}",
  "SubSuperLeft": "",
  "Super": "{x}^{y}",
  "SuperLeft": "",
  "BigBottom": "",
  "BigBottomTop": "",
  "BigSub": "",
  "BigSubSuper": "",
  "BigSuper": "",
  "BigTop": "",
  "CompositeBottom": "",
  "CompositeBottomTop": "",
  "CompositeTop": "",
  "Div": "\\frac{x}{y}",
  "DivDoubleBar": "\\xlongequal[x]{y}",
  "DivHoriz": "{x}/{y}",
  "DivMath": "",
  "DivMathInverted": "",
  "DivMathInvertedWithBottom": "",
  "DivMathWithTop": "",
  "DivSlant": "",
  "DivTriangleExpanding": "",
  "DivTriangleFixed": "",
  "DivTripleBar": "",
  "nRoot": "\\sqrt[x]{y}",
  "SmallDiv": "",
  "SmallDivHoriz": "",
  "SmallDivSlant": "",
  "SqRoot": "\\sqrt{x} ",
  "2cellColumn": "\\begin{matrix} a_{11} \\\\ a_{21} \\end{matrix}",
  "2cellRow": "\\begin{matrix} a_{11} & a_{12} \\end{matrix}",
  "2Square": "\\begin{matrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{matrix}",
  "3cellColumn": "\\begin{matrix} a_{11} \\\\ a_{21} \\\\ a_{31} \\end{matrix} ",
  "3cellRow": "\\begin{matrix} a_{11} & a_{12} & a_{13}\\end{matrix}",
  "3Square": "\\begin{matrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{matrix}",
  "column": "\\begin{pmatrix} a_1 \\\\ \\vdots \\\\ a_n \\end{pmatrix}",
  "custom": "\\begin{pmatrix} a_{11} & \\ldots & a_{1c} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{r1} & \\ldots & a_{rc} \\end{pmatrix}",
  "row": "\\begin{pmatrix} a_1 & \\ldots & a_n \\end{pmatrix}",
  "BoxAll": "\\boxed{x}",
  "BoxLeftBottom": "",
  "BoxLeftTop": "",
  "BoxRightBottom": "",
  "BoxRightTop": "",
  "bottomBar": "\\underset{-}{x}",
  "bottomDoubleArrow": "\\underleftrightarrow{x}",
  "bottomDoubleBar": "\\underset{\\large{=}}{x}",
  "bottomLeftArrow": "\\underleftarrow{x}",
  "bottomLeftHalfArrow": "\\underset{\\large{\\leftharpoondown}}{x}",
  "bottomRightArrow": "\\underrightarrow{x}",
  "bottomRightHalfArrow": "\\underset{\\large{\\rightharpoondown}}{x}",
  "cross": "\\xcancel{x}",
  "hat": "\\hat{x}",
  "leftCross": "\\bcancel{x}",
  "parenthesis": "\\overset{\\frown}{x}",
  "rightCross": "\\cancel{x}",
  "strikeThrough": "",
  "tilde": "\\tilde{a}",
  "topBar": "\\overset{-}{x}",
  "topDoubleArrow": "\\overleftrightarrow{x}",
  "topDoubleBar": "\\overset{\\large{=}}{x}",
  "topLeftArrow": "\\overleftarrow{x}",
  "topLeftHalfArrow": "\\overset{\\large{\\leftharpoondown}}{x}",
  "topRightArrow": "\\overrightarrow{x}",
  "topRightHalfArrow": "\\overset{\\large{\\rightharpoondown}}{x}",
  "tortoise": "\\overgroup{x}",
  "CharacterAcuteAccent": "",
  "CharacterBottomBar": "",
  "CharacterBottomBreve": "",
  "CharacterBottomDDot": "",
  "CharacterBottomDot": "",
  "CharacterBottomDoubleArrow": "",
  "CharacterBottomFourDot": "",
  "CharacterBottomInvertedBreve": "",
  "CharacterBottomLeftArrow": "",
  "CharacterBottomLeftHarpoon": "",
  "CharacterBottomRightArrow": "",
  "CharacterBottomRightHarpoon": "",
  "CharacterBottomTDot": "",
  "CharacterBottomTilde": "",
  "CharacterCross": "",
  "CharacterDoublePrime": "",
  "CharacterDoubleStrikeThrough": "",
  "CharacterGraveAccent": "",
  "CharacterLeftCross": "",
  "CharacterLeftUprightCross": "",
  "CharacterNone": "",
  "CharacterPrime": "",
  "CharacterReverseDoublePrime": "",
  "CharacterReversePrime": "",
  "CharacterRightCross": "",
  "CharacterRightUprightCross": "",
  "CharacterStrikeThrough": "",
  "CharacterTopBar": "",
  "CharacterTopBreve": "",
  "CharacterTopCaron": "",
  "CharacterTopCircumflex": "",
  "CharacterTopDDot": "",
  "CharacterTopDot": "",
  "CharacterTopDoubleArrow": "",
  "CharacterTopFourDot": "",
  "CharacterTopInvertedBreve": "",
  "CharacterTopLeftArrow": "",
  "CharacterTopLeftHarpoon": "",
  "CharacterTopRightArrow": "",
  "CharacterTopRightHarpoon": "",
  "CharacterTopRightRing": "",
  "CharacterTopRing": "",
  "CharacterTopTDot": "",
  "CharacterTopTilde": "",
  "CharacterTriplePrime": "",
  "CharacterVDoubleStrikeThrough": "",
  "CharacterVStrikeThrough": "",
  "Application_1": "A",
  "Application_2": "A_{x}",
  "Application_3": "\\hat{A}",
  "Application_4": "\\bar{A}",
  "Application_5": "\\hat{A}_{x}",
  "Application_6": "\\bar{A}_{x}",
  "function_1": "x",
  "function_2": "f({}})",
  "function_3": "\\bar{x}",
  "function_4": "f(\\bar{x})",
  "function_5": "f_{x}(\\bar{y})",
  "function_6": "P_{x}",
  "function_7": "G_{x}",
  "function_8": "G_{x}(x)",
  "function_9": "f(x)",
  "function_10": "ECF(x)",
  "function_11": "ECF({})",
  "function_12": "f_{x}(\\bar{y}_{z})",
  "function_13": "x_{z}",
  "function_14": "f_{x}(y)",
  "Relationship_1": "\\sim",
  "Relationship_2": "\\alpha",
  "Relationship_3": "\\Rightarrow",
  "Relationship_4": "\\Leftarrow",
  "Relationship_5": "\\Leftrightarrow",
  "Relationship_6": "\\geq",
  "Relationship_7": "\\gt",
  "Relationship_8": "\\lt",
  "Relationship_9": "=",
  "Relationship_10": "\\leq",
  "word_1": "W",
  "word_2": "W_{x}",
  "word_3": "\\hat{W}",
  "word_4": "\\hat{W}_{x}",
  "word_5": "\\bar{W}",
  "word_6": "S(w)",
  "word_7": "S_{x}(w)",
  "word_8": "G(w)",
  "word_9": "D(w)",
  "word_10": "D(\\hat{w})",
  "word_11": "G_{x}(w)",
  "word_12": "S(\\bar{w})",
  "word_13": "G(\\bar{w})",
  "Theory_1": "K_T",
  "Theory_2": "i_T",
  "Theory_3": "I_T",
  "Theory_4": "E_T",
  "Theory_5": "P_T",
  "Theory_6": "M_T",
  "Theory_7": "E_{S_{T}}",
  "Theory_8": "W_T",
  "Theory_9": "G_T",
  "Theory_10": "X_T",
  "Theory_11": "U_T",
  "Theory_Dropdown_1": "T_1",
  "Theory_Dropdown_2": "T_2",
  "Theory_Dropdown_3": "T_3",
  "Theory_Dropdown_4": "T_4",
  "Theory_Dropdown_5": "T_5",
  "Theory_Dropdown_6": "T_6",
  "Theory_Dropdown_7": "T_7",
  "Theory_Dropdown_8": "T_8",
  "Theory_Dropdown_9": "T_9",
  "Theory_Dropdown_10": "T_10",
  "Theory_Dropdown_11": "T",
  "Theory_Dropdown_12": "T_{x}",
  "Theory_Dropdown_13": "A",
  "Theory_Dropdown_14": "A'",
  "Theory_Dropdown_15": "A'|_{t_{x}}",
  "Theory_Dropdown_16": "A'_{x}",
  "Fundamental_1": "f_{K_{T}}",
  "Fundamental_2": "f_{i_{T}}",
  "Fundamental_3": "f_{I_{T}}",
  "Fundamental_4": "f_{E_{T}}",
  "Fundamental_5": "f_{P_{T}}",
  "Fundamental_6": "f_{M_{T}",
  "Fundamental_7": "f_{E_{S_{T}}}",
  "Fundamental_8": "f_{W_{T}}",
  "Fundamental_9": "f_{G_{T}}",
  "Fundamental_10": "f_{X_{T}}",
  "Fundamental_11": "f_{U_{T}}",
  "Fundamental_Dropdown_1": "f_{T_{1}}}",
  "Fundamental_Dropdown_2": "f_{T_{2}}",
  "Fundamental_Dropdown_3": "f_{T_{3}}",
  "Fundamental_Dropdown_4": "f_{T_{4}}",
  "Fundamental_Dropdown_5": "f_{T_{5}}",
  "Fundamental_Dropdown_6": "f_{T_{6}}",
  "Fundamental_Dropdown_7": "f_{T_{7}}",
  "Fundamental_Dropdown_8": "f_{T_{8}}",
  "Fundamental_Dropdown_9": "f_{T_{9}}",
  "Fundamental_Dropdown_10": "f_{T_{10}}",
  "Fundamental_Dropdown_11": "f_{T}",
  "Fundamental_Dropdown_12": "f_{T_{x}}",
  "Fundamental_Dropdown_13": "f_{A}",
  "Fundamental_Dropdown_14": "f_{A'}",
  "Dropdown_Function_1": "\\mathcal{L(t)}",
  "Dropdown_Function_2": "h(_{t})",
  "Dropdown_Function_3": "u({t})",
  "Dropdown_Function_4": "h(_{t})+u({t})",
  "Dropdown_Function_5": "\\sum\\limits_{n=1}^{\\infty }{h_{n}(t)}",
  "Dropdown_Function_6": "\\sum\\limits_{m=0}^{M }{u_{m}(t)}",
  "Dropdown_Function_7": "Int\\left\\{{x}\\right\\}",
  "Dropdown_Function_8": "\\bar{u}(t)",
  "Dropdown_Function_9": "\\bar{u}_{x}(t)",
  "Dropdown_Function_10": "h_{x}(t)",
  "Dropdown_Time_1": "t_{0}",
  "Dropdown_Time_2": "t_{0+}",
  "Dropdown_Time_3": "t_{0++}",
  "Dropdown_Time_4": "t_{1}",
  "Dropdown_Time_5": "t_{1}+{x}",
  "Dropdown_Time_6": "t_{2}",
  "Dropdown_Time_7": "t_{2}+{x}",
  "Dropdown_Time_8": "t_{3}",
  "Dropdown_Time_9": "t_{3}+{x}",
  "Dropdown_Time_10": "t_{4}",
  "Dropdown_Time_11": "t_{4}+{x}",
  "Dropdown_Time_12": "t'",
  "Derivative_1": "\\frac{d{}}{dx}",
  "Derivative_2": "\\frac{dI}{dT}",
  "Derivative_3": "\\frac{dM}{dT}",
  "Derivative_4": "NE",
  "Derivative_5": "IE",
  "Instrument_1": "I",
  "Instrument_2": "M",
  "Instrument_3": "Tr\\left\\{{T}\\right\\}",
  "Instrument_4": "Tr\\left\\{{x}\\right\\}",
  "Instrument_5": "I[u(t)]",
  "Instrument_6": "M[u(t)]",
  "Instrument_7": "I[u_{x}(t)]",
  "Instrument_8": "M[u_{x}(t)]",
  "Stability_1": "k",
  "Stability_2": "x",
  "Stability_3": "y",
  "Stability_4": "x_{x}",
  "Stability_5": "y_{x}",
  "Stability_6": "xy",
  "Stability_7": "x_{x}y_{y}",
  "Stability_8": "S",
  "Stability_9": "S_{x}",
  "Stability_10": "\\Delta{x}",
  "Stability_11": "\\bar{T}",
  "Stability_12": "L",
  "Stability_13": "G",
  "Stability_14": "\\Delta{L}",
  "Stability_15": "L_{x}",
  "Stability_16": "G_{x}",
  "Stability_17": "L|_{t_{x}}",
  "Stability_18": "G|_{t_{x}}",
  "Stability_19": "\\Delta{G}",
  "Stability_20": "\\Delta{t}",
  "Stability_21": "\\frac{\\Delta{L}}{\\Delta{t}}",
  "Stability_22": "\\frac{\\Delta{G}}{\\Delta{t}} ",
  "Stability_23": "Q",
  "Stability_24": "q",
  "Stability_25": "Q|_{t_{x}}",
  "Stability_26": "d",
  "Stability_27": "d_{x}",
  "Stability_28": "\\Delta{t}",
  "Stability_29": "\\Delta{t}_{u}",
  "Stability_30": "\\Delta{t}_{d}",
  "Stability_31": "\\Delta{t}_{x}",
  "Theorem_Dropdown_1": "Th",
  "Theorem_Dropdown_2": "K_{Th}",
  "Theorem_Dropdown_3": "i_{Th}",
  "Theorem_Dropdown_4": "I_{Th}",
  "Theorem_Dropdown_5": "M_{Th}",
  "Theorem_Dropdown_6": "E_{S_{Th}}",
  "Theorem_Dropdown_7": "W_{Th}",
  "Theorem_Dropdown_8": "G_{Th}",
  "Theorem_Dropdown_9": "Th_{n}",
  "Theorem_Dropdown_10": "K_{Th_{x}}",
  "Theorem_Dropdown_11": "i_{Th_{x}}",
  "Theorem_Dropdown_12": "I_{Th_{x}}",
  "Theorem_Dropdown_13": "M_{Th_{x}}",
  "Theorem_Dropdown_14": "E_{S_{Th_{x}}}",
  "Theorem_Dropdown_15": "W_{Th_{x}}",
  "Theorem_Dropdown_16": "G_{Th_{x}}",
  "Theorem_Dropdown_17": "Th",
  "Theorem_Dropdown_18": "Th_{x}",
  "Theorem_Dropdown_19": "Th|_{t_{x}}",
  "Theorem_Dropdown_20": "Th_{g}",
  "Theorem_Dropdown_21": "Th_{g}|_{t_{x}}",
}

var OPERATOR = ["\u00d7", "\u002D", "\u2013", "\u2012", "\u2014", "\u00b7", "\u00f7", "\u00b1",
  "\u00bd", "\u00bc", "\u00be", "\u2200", "\u2202", "\u2203", "\u2204",
  "\u2205", "\u2208", "\u2209", "\u220B", "\u220C", "\u220F", "\u2210",
  "\u2211", "\u2217", "\u221A", "\u221D", "\u221E", "\u2227", "\u2228",
  "\u2229", "\u222A", "\u2234", "\u2235", "\u2237", "\u2238", "\u2264",
  "\u2265", "\u226e", "\u226f", "\u25B3", "\u25B7", "\u25BD", "\u25c8",
  "\u25C9", "\u25CE", "\u25E0", "\u25E1", "\u25EC", "\u211d", "\u2124",
  "\u2102", "\ud835\udd46", "\u2115"]

var GREEKCAPTITAL = ["\u0391", "\u0392", "\u0393", "\u0394", "\u0395", "\u0396", "\u0397",
  "\u0398", "\u0399", "\u039A", "\u039B", "\u039C", "\u039D", "\u039E",
  "\u039F", "\u03A0", "\u03A1", "\u03A3", "\u03A4", "\u03A5", "\u03A6",
  "\u03A7", "\u03A8", "\u03A9"]

var GREEKSMALL = ["\u03B1", "\u03B2", "\u03B3", "\u03B4", "\u03B5", "\u03B6", "\u03B7",
  "\u03B8", "\u03B9", "\u03BA", "\u03BB", "\u03BC", "\u03BD", "\u03BE",
  "\u03BF", "\u03C0", "\u03C1", "\u03C2", "\u03C3", "\u03C4", "\u03C5",
  "\u03C6", "\u03C7", "\u03C8", "\u03C9"]

var ARROW = ["\u2190", "\u2191", "\u2192", "\u2193", "\u2194", "\u2195", "\u2196",
  "\u2197", "\u2198", "\u2199", "\u219A", "\u219B", "\u219C", "\u219D",
  "\u219E", "\u219F", "\u21A0", "\u21A1", "\u21A2", "\u21A3", "\u21A4",
  "\u21A5", "\u21A6", "\u21A7", "\u21A8", "\u21A9", "\u21AA", "\u21AB",
  "\u21AC", "\u21AD", "\u21AE", "\u21AF", "\u21B0", "\u21B1", "\u21B2",
  "\u21B3", "\u21B4", "\u21B5", "\u21B6", "\u21B7", "\u21B8", "\u21B9",
  "\u21BA", "\u21BB", "\u21BC", "\u21BD", "\u21BE", "\u21BF", "\u21C0",
  "\u21C1", "\u21C2", "\u21C3", "\u21C4", "\u21C5", "\u21C6", "\u21C7",
  "\u21C8", "\u21C9", "\u21CA", "\u21CB", "\u21CC", "\u21CD", "\u21CE",
  "\u21CF", "\u21D0", "\u21D1", "\u21D2", "\u21D3", "\u21D4", "\u21D5",
  "\u21D6", "\u21D7", "\u21D8", "\u21D8", "\u21D9", "\u21DA", "\u21DB",
  "\u21DC"]

var OPERATOR_WRAPPER = document.getElementById("listSubMenuEuqationsOperator").querySelector(".list-sub-menu-equations")
var GREEKCAPTITAL_WRAPPER = document.getElementById("listSubMenuEuqationsGreekCaptital").querySelector(".list-sub-menu-equations")
var GREEKSMALL_WRAPPER = document.getElementById("listSubMenuEuqationsGreekSmall").querySelector(".list-sub-menu-equations")
var ARROW_WRAPPER = document.getElementById("listSubMenuEuqationsArrow").querySelector(".list-sub-menu-equations")
OPERATOR.forEach(item => {
  let el = document.createElement('div')
  el.className = "d-flex align-items-start"
  el.textContent = item
  el.addEventListener("click", () => {
    handleEquation(item)
  })
  OPERATOR_WRAPPER.appendChild(el)
})

GREEKCAPTITAL.forEach(item => {
  let el = document.createElement('div')
  el.className = "d-flex align-items-start"
  el.textContent = item
  el.addEventListener("click", () => {
    handleEquation(item)
  })
  GREEKCAPTITAL_WRAPPER.appendChild(el)
})
GREEKSMALL.forEach(item => {
  let el = document.createElement('div')
  el.className = "d-flex align-items-start"
  el.textContent = item
  el.addEventListener("click", () => {
    handleEquation(item)
  })
  GREEKSMALL_WRAPPER.appendChild(el)
})
ARROW.forEach(item => {
  let el = document.createElement('div')
  el.className = "d-flex align-items-start"
  el.textContent = item
  el.addEventListener("click", () => {
    handleEquation(item)
  })
  ARROW_WRAPPER.appendChild(el)
})