(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_parsons_js_timedparsons_js"],{

/***/ 44098:
/*!*******************************************!*\
  !*** ./runestone/parsons/css/parsons.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 99786:
/*!********************************************!*\
  !*** ./runestone/parsons/css/prettify.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 12732:
/*!*******************************************!*\
  !*** ./runestone/parsons/js/dagGrader.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DAGGrader)
/* harmony export */ });
/* harmony import */ var _lineGrader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineGrader */ 21417);
/* harmony import */ var _dagHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dagHelpers */ 17341);



function graphToNX(answerLines) {
  var graph = new _dagHelpers__WEBPACK_IMPORTED_MODULE_1__.DiGraph();
  for (let line1 of answerLines) {
    graph.addNode(line1.tag);
    for (let line2tag of line1.depends) {
      // the depends graph lists the *incoming* edges of a node
      graph.addEdge(line2tag, line1.tag);
    }
  }
  return graph;
}

function isVertexCover(graph, vertexCover) {
  for (let edge of graph.edges()) {
    if (!(vertexCover.has(edge[0]) || vertexCover.has(edge[1]))) {
      return false;
    }
  }
  return true;
}

// Find all subsets of the set using the correspondence of subsets of
// a set to binary string whose length are the size of the set
function allSubsets(arr) {
  let subsets = {};
  for (let i = 0; i <= arr.length; i++) {
    subsets[i] = [];
  }
  for (let i = 0; i < Math.pow(2, arr.length); i++) {
    let bin = i.toString(2);
    while (bin.length < arr.length) {
      bin = "0" + bin;
    }
    let subset = new Set();
    for (let j = 0; j < bin.length; j++) {
      if (bin[j] == "1") {
        subset.add(arr[j]);
      }
    }
    subsets[subset.size].push(subset);
  }
  return subsets;
}

class DAGGrader extends _lineGrader__WEBPACK_IMPORTED_MODULE_0__["default"] {
  inverseLISIndices(arr, inSolution) {
    // For more details and a proof of the correctness of the algorithm, see the paper: https://arxiv.org/abs/2204.04196

    var solution = this.problem.solution;
    var answerLines = inSolution.map((block) => block.lines[0]); // assume NOT adaptive for DAG grading (for now)

    let graph = graphToNX(solution);

    let seen = new Set();
    let problematicSubgraph = new _dagHelpers__WEBPACK_IMPORTED_MODULE_1__.DiGraph();
    for (let line1 of answerLines) {
      for (let line2 of seen) {
        let problematic = (0,_dagHelpers__WEBPACK_IMPORTED_MODULE_1__.hasPath)(graph, {
          source: line1.tag,
          target: line2.tag,
        });
        if (problematic) {
          problematicSubgraph.addEdge(line1.tag, line2.tag);
        }
      }

      seen.add(line1);
    }

    let mvc = null;
    let subsets = allSubsets(problematicSubgraph.nodes());
    for (let i = 0; i <= problematicSubgraph.numberOfNodes(); i++) {
      for (let subset of subsets[i]) {
        if (isVertexCover(problematicSubgraph, subset)) {
          mvc = subset;
          break;
        }
      }
      if (mvc != null) {
        break;
      }
    }

    let indices = [...mvc].map((tag) => {
      for (let i = 0; i < answerLines.length; i++) {
        if (answerLines[i].tag === tag) return i;
      }
    });
    return indices;
  }

  checkCorrectIndentation(solutionLines, answerLines) {
      this.indentLeft = [];
      this.indentRight = [];

      let indentationByTag = {};
      for (let i = 0; i < solutionLines.length; i++) {
        const line = solutionLines[i];
        indentationByTag[line.tag] = line.indent;
      }

      let loopLimit = Math.min(solutionLines.length, answerLines.length);
      for (let i = 0; i < loopLimit; i++) {
          let solutionIndent = indentationByTag[answerLines[i].tag];
          if (answerLines[i].viewIndent() < solutionIndent) {
              this.indentRight.push(answerLines[i]);
          } else if (answerLines[i].viewIndent() > solutionIndent) {
              this.indentLeft.push(answerLines[i]);
          }
      }
      this.incorrectIndents =
          this.indentLeft.length + this.indentRight.length;

      return this.incorrectIndents == 0;
  }

  checkCorrectOrdering(solutionLines, answerLines) {
    if (!(0,_dagHelpers__WEBPACK_IMPORTED_MODULE_1__.isDirectedAcyclicGraph)(graphToNX(solutionLines))) {
      throw "Dependency between blocks does not form a Directed Acyclic Graph; Problem unsolvable.";
    }

    let seen = new Set();
    let isCorrectOrder = true;
    this.correctLines = 0;
    this.solutionLength = solutionLines.length;
    let loopLimit = Math.min(solutionLines.length, answerLines.length);
    for (let i = 0; i < loopLimit; i++) {
      let line = answerLines[i];
      if (line.distractor) {
        isCorrectOrder = false;
      } else {
        for (let j = 0; j < line.depends.length; j++) {
          if (!seen.has(line.depends[j])) {
            isCorrectOrder = false;
          }
        }
      }
      if (isCorrectOrder) {
        this.correctLines += 1;
      }
      seen.add(line.tag);
    }
    return isCorrectOrder;
  }
}


/***/ }),

/***/ 17341:
/*!********************************************!*\
  !*** ./runestone/parsons/js/dagHelpers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasPath": () => (/* binding */ hasPath),
/* harmony export */   "isDirectedAcyclicGraph": () => (/* binding */ isDirectedAcyclicGraph),
/* harmony export */   "DiGraph": () => (/* binding */ DiGraph)
/* harmony export */ });

/**
 * This file adapted from JSNetworkX: https://github.com/fkling/JSNetworkX
 * Copyright (C) 2012 Felix Kling <felix.kling@gmx.net>
 * JSNetworkX is distributed with the BSD license
 */

function hasPath(G, { source, target }) {
  try {
    bidirectionalShortestPath(G, source, target);
  } catch (error) {
    if (error instanceof JSNetworkXNoPath) {
      return false;
    }
    throw error;
  }
  return true;
}

function nodesAreEqual(a, b) {
  return a === b || (typeof a === "object" && a.toString() === b.toString());
}

function bidirectionalShortestPath(G, source, target) {
  // call helper to do the real work
  var [pred, succ, w] = bidirectionalPredSucc(G, source, target);

  // build path from pred+w+succ
  var path = [];
  // from source to w
  while (w != null) {
    path.push(w);
    w = pred.get(w);
  }
  w = succ.get(path[0]);
  path.reverse();
  // from w to target
  while (w != null) {
    path.push(w);
    w = succ.get(w);
  }
  return path;
}

function bidirectionalPredSucc(G, source, target) {
  // does BFS from both source and target and meets in the middle
  if (nodesAreEqual(source, target)) {
    return [new Map([[source, null]]), new Map([[target, null]]), source];
  }

  // handle either directed or undirected
  var gpred, gsucc;
  gpred = G.predecessorsIter.bind(G);
  gsucc = G.successorsIter.bind(G);

  // predecesssor and successors in search
  var pred = new Map([[source, null]]);
  var succ = new Map([[target, null]]);
  //
  // initialize fringes, start with forward
  var forwardFringe = [source];
  var reverseFringe = [target];
  var thisLevel;

  /*jshint newcap:false*/
  while (forwardFringe.length > 0 && reverseFringe.length > 0) {
    if (forwardFringe.length <= reverseFringe.length) {
      thisLevel = forwardFringe;
      forwardFringe = [];
      for (let v of thisLevel) {
        for (let w of gsucc(v)) {
          if (!pred.has(w)) {
            forwardFringe.push(w);
            pred.set(w, v);
          }
          if (succ.has(w)) {
            return [pred, succ, w]; // found path
          }
        }
      }
    } else {
      thisLevel = reverseFringe;
      reverseFringe = [];
      for (let v of thisLevel) {
        for (let w of gpred(v)) {
          if (!succ.has(w)) {
            reverseFringe.push(w);
            succ.set(w, v);
          }
          if (pred.has(w)) {
            return [pred, succ, w]; // found path
          }
        }
      }
    }
  }
  throw new JSNetworkXNoPath(
    "No path between " + source.toString() + " and " + target.toString() + "."
  );
}

function topologicalSort(G, optNbunch) {
  // nonrecursive version
  var seen = new Set();
  var orderExplored = []; // provide order and
  // fast search without more general priorityDictionary
  var explored = new Set();

  if (optNbunch == null) {
    optNbunch = G.nodesIter();
  }

  for (let v of optNbunch) {
    // process all vertices in G
    if (explored.has(v)) {
      return; // continue
    }

    var fringe = [v]; // nodes yet to look at
    while (fringe.length > 0) {
      var w = fringe[fringe.length - 1]; // depth first search
      if (explored.has(w)) {
        // already looked down this branch
        fringe.pop();
        continue;
      }
      seen.add(w); // mark as seen
      // Check successors for cycles for new nodes
      var newNodes = [];
      /*eslint-disable no-loop-func*/
      G.get(w).forEach(function (_, n) {
        if (!explored.has(n)) {
          if (seen.has(n)) {
            // CYCLE !!
            throw new JSNetworkXUnfeasible("Graph contains a cycle.");
          }
          newNodes.push(n);
        }
      });
      /*eslint-enable no-loop-func*/
      if (newNodes.length > 0) {
        // add new nodes to fringe
        fringe.push.apply(fringe, newNodes);
      } else {
        explored.add(w);
        orderExplored.unshift(w);
      }
    }
  }

  return orderExplored;
}

function isDirectedAcyclicGraph(G) {
  try {
    topologicalSort(G);
    return true;
  } catch (ex) {
    if (ex instanceof JSNetworkXUnfeasible) {
      return false;
    }
    throw ex;
  }
}

class DiGraph {
  constructor() {
    this.graph = {}; // dictionary for graph attributes
    this.node = new Map(); // dictionary for node attributes
    // We store two adjacency lists:
    // the predecessors of node n are stored in the dict self.pred
    // the successors of node n are stored in the dict self.succ=self.adj
    this.adj = new Map(); // empty adjacency dictionary
    this.pred = new Map(); // predecessor
    this.succ = this.adj; // successor

    this.edge = this.adj;
  }

  addNode(n) {
    if (!this.succ.has(n)) {
      this.succ.set(n, new Map());
      this.pred.set(n, new Map());
      this.node.set(n);
    }
  }

  addEdge(u, v) {
    // add nodes
    if (!this.succ.has(u)) {
      this.succ.set(u, new Map());
      this.pred.set(u, new Map());
      this.node.set(u, {});
    }

    if (!this.succ.has(v)) {
      this.succ.set(v, new Map());
      this.pred.set(v, new Map());
      this.node.set(v, {});
    }

    // add the edge
    var datadict = this.adj.get(u).get(v) || {};
    this.succ.get(u).set(v, datadict);
    this.pred.get(v).set(u, datadict);
  }

  nodes(optData = false) {
    return Array.from(optData ? this.node.entries() : this.node.keys());
  }

  edges(optNbunch, optData = false) {
    return Array.from(this.edgesIter(optNbunch, optData));
  }

  nodesIter(optData = false) {
    if (optData) {
      return toIterator(this.node);
    }
    return this.node.keys();
  }

  get(n) {
    var value = this.adj.get(n);
    if (typeof value === "undefined") {
      throw new KeyError("Graph does not contain node " + n + ".");
    }
    return value;
  }

  numberOfNodes() {
    return this.node.size;
  }

  *nbunchIter(optNbunch) {
    if (optNbunch == null) {
      // include all nodes
      /*jshint expr:true*/
      yield* this.adj.keys();
    } else if (this.hasNode(optNbunch)) {
      // if nbunch is a single node
      yield optNbunch;
    } else {
      // if nbunch is a sequence of nodes
      var adj = this.adj;

      try {
        for (var n of toIterator(optNbunch)) {
          if (adj.has(n)) {
            yield n;
          }
        }
      } catch (ex) {
        if (ex instanceof TypeError) {
          throw new JSNetworkXError(
            "nbunch is not a node or a sequence of nodes"
          );
        }
      }
    }
  }

  *edgesIter(optNbunch, optData = false) {
    // handle calls with opt_data being the only argument
    if (isBoolean(optNbunch)) {
      optData = optNbunch;
      optNbunch = undefined;
    }

    var nodesNbrs;

    if (optNbunch === undefined) {
      nodesNbrs = this.adj;
    } else {
      nodesNbrs = mapIterator(this.nbunchIter(optNbunch), (n) =>
        tuple2(n, this.adj.get(n))
      );
    }

    for (var nodeNbrs of nodesNbrs) {
      for (var nbrData of nodeNbrs[1]) {
        var result = [nodeNbrs[0], nbrData[0]];
        if (optData) {
          result[2] = nbrData[1];
        }
        yield result;
      }
    }
  }

  reverse(optCopy = true) {
    var H;
    if (optCopy) {
      H = new this.constructor(null, {
        name: "Reverse of (" + this.name + ")",
      });
      H.addNodesFrom(this);
      H.addEdgesFrom(
        mapIterator(this.edgesIter(null, true), (edge) =>
          tuple3c(edge[1], edge[0], deepcopy(edge[2]), edge)
        )
      );
      H.graph = deepcopy(this.graph);
      H.node = deepcopy(this.node);
    } else {
      var thisPred = this.pred;
      var thisSucc = this.succ;

      this.succ = thisPred;
      this.pred = thisSucc;
      this.adj = this.succ;
      H = this;
    }
    return H;
  }

  successorsIter(n) {
    var nbrs = this.succ.get(n);
    if (nbrs !== undefined) {
      return nbrs.keys();
    }
    throw new JSNetworkXError(
      sprintf('The node "%j" is not in the digraph.', n)
    );
  }

  predecessorsIter(n) {
    var nbrs = this.pred.get(n);
    if (nbrs !== undefined) {
      return nbrs.keys();
    }
    throw new JSNetworkXError(
      sprintf('The node "%j" is not in the digraph.', n)
    );
  }

  successors(n) {
    return Array.from(this.successorsIter(n));
  }

  predecessors(n) {
    return Array.from(this.predecessorsIter(n));
  }
}

class JSNetworkXException {
  constructor(message) {
    this.name = "JSNetworkXException";
    this.message = message;
  }
}

class JSNetworkXAlgorithmError extends JSNetworkXException {
  constructor(message) {
    super(message);
    this.name = "JSNetworkXAlgorithmError";
  }
}

class JSNetworkXError extends JSNetworkXException {
  constructor(message) {
    super(message);
    this.name = "JSNetworkXError";
  }
}

class JSNetworkXUnfeasible extends JSNetworkXAlgorithmError {
  constructor(message) {
    super(message);
    this.name = "JSNetworkXUnfeasible";
  }
}

class JSNetworkXNoPath extends JSNetworkXUnfeasible {
  constructor(message) {
    super(message);
    this.name = "JSNetworkXNoPath";
  }
}

// function from LoDash, needed by functions from JSNetworkX
function isObjectLike(value) {
  return !!value && typeof value == "object";
}

// function from LoDash, needed by functions from JSNetworkX
function isBoolean(value) {
  var boolTag = "[object Boolean]";
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && Object.prototype.toString.call(value) == boolTag)
  );
}


/***/ }),

/***/ 97430:
/*!********************************************!*\
  !*** ./runestone/parsons/js/hammer.min.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return ha}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/***/ }),

/***/ 21417:
/*!********************************************!*\
  !*** ./runestone/parsons/js/lineGrader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineBasedGrader)
/* harmony export */ });
class LineBasedGrader {
    constructor(problem) {
        this.problem = problem;
    }
    // Use a LIS (Longest Increasing Subsequence) algorithm to return the indexes
    // that are not part of that subsequence.
    inverseLISIndices(arr) {
        // Get all subsequences
        var allSubsequences = [];
        for (var i = 0; i < arr.length; i++) {
            var subsequenceForCurrent = [arr[i]],
                current = arr[i],
                lastElementAdded = -1;
            for (var j = i; j < arr.length; j++) {
                var subsequent = arr[j];
                if (subsequent > current && lastElementAdded < subsequent) {
                    subsequenceForCurrent.push(subsequent);
                    lastElementAdded = subsequent;
                }
            }
            allSubsequences.push(subsequenceForCurrent);
        }
        // Figure out the longest one
        var longestSubsequenceLength = -1;
        var longestSubsequence;
        for (let i in allSubsequences) {
            var subs = allSubsequences[i];
            if (subs.length > longestSubsequenceLength) {
                longestSubsequenceLength = subs.length;
                longestSubsequence = subs;
            }
        }
        // Create the inverse indexes
        var indexes = [];
        var lIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (lIndex > longestSubsequence.length) {
                indexes.push(i);
            } else {
                if (arr[i] == longestSubsequence[lIndex]) {
                    lIndex += 1;
                } else {
                    indexes.push(i);
                }
            }
        }
        return indexes;
    }
    // grade that element, returning the state
    grade() {
        var problem = this.problem;
        problem.clearFeedback();
        this.correctLines = 0;
        this.percentLines = 0;
        this.incorrectIndents = 0;
        var solutionLines = problem.solution;
        var answerLines = problem.answerLines();
        var i;
        var state;
        this.percentLines =
            Math.min(answerLines.length, solutionLines.length) /
            Math.max(answerLines.length, solutionLines.length);
        if (answerLines.length < solutionLines.length) {
            state = "incorrectTooShort";
            this.correctLength = false;
        } else if (answerLines.length == solutionLines.length) {
            this.correctLength = true;
        } else {
            this.correctLength = false;
        }

        // Determine whether the code **that is there** is in the correct order
        // If there is too much or too little code this only matters for
        // calculating a percentage score.
        let isCorrectOrder = this.checkCorrectOrdering(solutionLines, answerLines)

        // Determine whether blocks are indented correctly
        let isCorrectIndents = this.checkCorrectIndentation(solutionLines, answerLines);

        if (
            isCorrectIndents &&
            isCorrectOrder &&
            this.correctLength
        ) {
            // Perfect
            state = "correct";
        } else if (this.correctLength && isCorrectOrder) {
            state = "incorrectIndent";
        } else if (!isCorrectOrder && state != "incorrectTooShort") {
            state = "incorrectMoveBlocks";
        }
        this.calculatePercent();
        this.graderState = state;

        return state;
    }

    checkCorrectIndentation(solutionLines, answerLines) {
        this.indentLeft = [];
        this.indentRight = [];
        let loopLimit = Math.min(solutionLines.length, answerLines.length);
        for (let i = 0; i < loopLimit; i++) {
            if (answerLines[i].viewIndent() < answerLines[i].indent) {
                this.indentRight.push(answerLines[i]);
            } else if (answerLines[i].viewIndent() > solutionLines[i].indent) {
                this.indentLeft.push(answerLines[i]);
            }
        }
        this.incorrectIndents =
            this.indentLeft.length + this.indentRight.length;

        return this.incorrectIndents == 0;
    }

    checkCorrectOrdering(solutionLines, answerLines) {
        let isCorrectOrder = true;
        this.correctLines = 0;
        this.solutionLength = solutionLines.length;
        let loopLimit = Math.min(solutionLines.length, answerLines.length);
        for (let i = 0; i < loopLimit; i++) {
            if (answerLines[i].text !== solutionLines[i].text) {
                isCorrectOrder = false;
            } else {
                this.correctLines += 1;
            }
        }
        return isCorrectOrder
    }

    calculatePercent() {
        let numLines = this.percentLines * 0.2;
        let lines = this.problem.answerLines().length;
        let numCorrectBlocks = (this.correctLines / lines) * 0.4;
        let numCorrectIndents =
            ((this.correctLines - this.incorrectIndents) / lines) * 0.4;

        this.problem.percent = numLines + numCorrectBlocks + numCorrectIndents;
    }
}


/***/ }),

/***/ 59164:
/*!*************************************************!*\
  !*** ./runestone/parsons/js/parsons-i18n.en.js ***!
  \*************************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_parson_check_me: "Check",
        msg_parson_reset: "Reset",
        msg_parson_help: "Help me",
        msg_parson_too_short: "Your answer is too short. Add more blocks.",
        msg_parson_drag_from_here: "Drag from here",
        msg_parson_drag_to_here: "Drop blocks here",
        msg_parson_correct_first_try:
            "Perfect!  It took you only one try to solve this.  Great job!",
        msg_parson_correct:
            "Perfect!  It took you $1 tries to solve this.  Click Reset to try to solve it in one attempt.",
        msg_parson_wrong_indent:
            "This block is not indented correctly. Either indent it more by dragging it right or reduce the indention by dragging it left.",
        msg_parson_wrong_indents:
            "These blocks are not indented correctly. To indent a block more, drag it to the right. To reduce the indention, drag it to the left.",
        msg_parson_wrong_order:
            "Highlighted blocks in your answer are wrong or are in the wrong order. This can be fixed by moving, removing, or replacing highlighted blocks.",
        msg_parson_arrow_navigate:
            "Arrow keys to navigate. Space to select / deselect block to move.",
        msg_parson_help_info:
            "Click on the Help Me button if you want to make the problem easier",
        msg_parson_not_solution:
            "Disabled an unneeded code block (one that is not part of the solution).",
        msg_parson_provided_indent: "Provided the indentation.",
        msg_parson_combined_blocks: "Combined two code blocks into one.",
        msg_parson_remove_incorrect:
            "Will remove an incorrect code block from answer area",
        msg_parson_will_combine: "Will combine two blocks",
        msg_parson_atleast_three_attempts:
            "You must make at least three distinct full attempts at a solution before you can get help",
        msg_parson_three_blocks_left:
            "There are only 3 correct blocks left.  You should be able to put them in order",
        msg_parson_will_provide_indent: "Will provide indentation",
    },
});


/***/ }),

/***/ 16432:
/*!****************************************************!*\
  !*** ./runestone/parsons/js/parsons-i18n.pt-br.js ***!
  \****************************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_parson_check_me: "Verificar",
        msg_parson_reset: "Resetar",
        msg_parson_help:"Ajuda",
        msg_parson_too_short: "Seu programa é muito curto. Adicione mais blocos.",
        msg_parson_drag_from_here: "Arraste daqui",
        msg_parson_drag_to_here: "Largue os blocos aqui",
        msg_parson_correct_first_try:
            "Perfeito! Você levou apenas uma tentativa para resolver. Bom trabalho!",
        msg_parson_correct:
            "Perfeito! Você levou $1 tentativas para resolver. Clique em Resetar para tentar resolver em uma tentativa." ,
        msg_parson_wrong_indent:
            "Este bloco não está indentado corretamente. Indente mais arrastando-o para a direita ou reduza a indentação arrastando para a esquerda.",
        msg_parson_wrong_indents:
            "Estes blocos não estão indentados corretamente. Para indentar mais, arraste o bloco para a direita. Para reduzir a indentação, arraste para a esquerda.",
        msg_parson_wrong_order:
            "Blocos destacados no seu programa estão errados ou estão na ordem errada. Isso pode ser resolvido movendo, excluindo ou substituindo os blocos destacados.",
        msg_parson_arrow_navigate:
            "Use as teclas de setas para navegar. Espaço para selecionar/ desmarcar blocos para mover.",
        msg_parson_help_info:
            "Clique no botão Ajuda se você quiser facilitar o problema",
        msg_parson_not_solution:
            "Foi desabilitado um bloco de código desnecessário (que não faz parte da solução).",
        msg_parson_provided_indent:"Foi fornecida a indentação.",
        msg_parson_combined_blocks:"Dois blocos de códigos foram combinados em um.",
        msg_parson_remove_incorrect:
            "Será removido um bloco de código incorreto da área de resposta",
        msg_parson_will_combine:"Serão combinados dois blocos",
        msg_parson_atleast_three_attempts:
            "Você deve tentar pelo menos três vezes antes de pedir ajuda",
        msg_parson_three_blocks_left:
            "Restam apenas 3 blocos corretos. Você deve colocá-los em ordem",
        msg_parson_will_provide_indent: "Será fornecida a indentação"
    },
});


/***/ }),

/***/ 35718:
/*!*****************************************!*\
  !*** ./runestone/parsons/js/parsons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prsList": () => (/* binding */ prsList),
/* harmony export */   "default": () => (/* binding */ Parsons)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsons-i18n.en.js */ 59164);
/* harmony import */ var _parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsons-i18n.pt-br.js */ 16432);
/* harmony import */ var _parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prettify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prettify.js */ 87904);
/* harmony import */ var _prettify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prettify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_parsons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/parsons.css */ 44098);
/* harmony import */ var _css_prettify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/prettify.css */ 99786);
/* harmony import */ var _lineGrader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lineGrader */ 21417);
/* harmony import */ var _dagGrader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dagGrader */ 12732);
/* harmony import */ var _parsonsLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsonsLine */ 18423);
/* harmony import */ var _parsonsBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsonsBlock */ 404);
/* =====================================================================
==== Parsons Runestone Directive Javascript ============================
======== Renders a Parsons problem based on the HTML created by the
======== parsons.py script and the RST file.
==== CONTRIBUTORS ======================================================
======== Isaiah Mayerchak
======== Jeff Rick
======== Barbara Ericson
======== Cole Bowers
==== Adapted form the original JS Parsons by ===========================
======== Ville Karavirta
======== Petri Ihantola
======== Juha Helminen
======== Mike Hewner
===================================================================== */
/* =====================================================================
==== LineBasedGrader Object ============================================
======== Used for grading a Parsons problem.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
===================================================================== */













/* =====================================================================
==== Parsons Object ====================================================
======== The model and view of a Parsons problem based on what is
======== specified in the HTML, which is based on what is specified
======== in the RST file
==== PROPERTIES ========================================================
======== options: options largely specified from the HTML
======== grader: a LineGrader for grading the problem
======== lines: an array of all ParsonsLine as specified in the problem
======== solution: an array of ParsonsLine in the solution
======== blocks: the current blocks
======== sourceArea: the element that contains the source blocks
======== answerArea: the element that contains the answer blocks
===================================================================== */

/* =====================================================================
==== INITIALIZATION ====================================================
===================================================================== */

var prsList = {}; // Parsons dictionary
class Parsons extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <pre> element that will be replaced by new HTML
        this.containerDiv = orig;
        this.origElem = $(orig).find("pre.parsonsblocks")[0];
        // Find the question text and store it in .question
        this.question = $(orig).find(`.parsons_question`)[0];
        this.useRunestoneServices = opts.useRunestoneServices;
        this.divid = opts.orig.id;
        // Set the storageId (key for storing data)
        var storageId = super.localStorageKey();
        this.storageId = storageId;
        this.children = this.origElem.childNodes; // this contains all of the child elements of the entire tag...
        this.contentArray = [];
        Parsons.counter++; //    Unique identifier
        this.counterId = "parsons-" + Parsons.counter;

        // for (var i = 0; i < this.children.length; i++) {
        //     if ($(this.children[i]).is("[data-question]")) {
        //         this.question = this.children[i];
        //         break;
        //     }
        // }
        this.initializeOptions();
        this.grader =
            this.options.grader === "dag"
                ? new _dagGrader__WEBPACK_IMPORTED_MODULE_7__["default"](this)
                : new _lineGrader__WEBPACK_IMPORTED_MODULE_6__["default"](this);
        this.grader.showfeedback = this.showfeedback;
        var fulltext = $(this.origElem).html();
        this.blockIndex = 0;
        this.checkCount = 0;
        this.numDistinct = 0;
        this.hasSolved = false;
        this.initializeLines(fulltext.trim());
        this.initializeView();
        this.caption = "Parsons";
        this.addCaption("runestone");
        // Check the server for an answer to complete things
        this.checkServer("parsons", true);
    }
    // Based on the data-fields in the original HTML, initialize options
    initializeOptions() {
        var options = {
            pixelsPerIndent: 30,
        };
        // add maxdist and order if present
        var maxdist = $(this.origElem).data("maxdist");
        var order = $(this.origElem).data("order");
        var noindent = $(this.origElem).data("noindent");
        var adaptive = $(this.origElem).data("adaptive");
        var numbered = $(this.origElem).data("numbered");
        var grader = $(this.origElem).data("grader");
        options["numbered"] = numbered;
        options["grader"] = grader;
        if (maxdist !== undefined) {
            options["maxdist"] = maxdist;
        }
        if (order !== undefined) {
            // convert order string to array of numbers
            order = order.match(/\d+/g);
            for (var i = 0; i < order.length; i++) {
                order[i] = parseInt(order[i]);
            }
            options["order"] = order;
        }
        if (noindent == undefined) {
            noindent = false;
        }
        options["noindent"] = noindent;
        this.noindent = noindent;
        if (adaptive == undefined) {
            adaptive = false;
        } else if (adaptive) {
            this.initializeAdaptive();
        }
        options["adaptive"] = adaptive;
        // add locale and language
        var locale = eBookConfig.locale;
        if (locale == undefined) {
            locale = "en";
        }
        options["locale"] = locale;
        var language = $(this.origElem).data("language");
        if (language == undefined) {
            language = eBookConfig.language;
            if (language == undefined) {
                language = "python";
            }
        }
        options["language"] = language;
        var prettifyLanguage = {
            python: "prettyprint lang-py",
            java: "prettyprint lang-java",
            javascript: "prettyprint lang-js",
            html: "prettyprint lang-html",
            c: "prettyprint lang-c",
            "c++": "prettyprint lang-cpp",
            ruby: "prettyprint lang-rb",
        }[language];
        if (prettifyLanguage == undefined) {
            prettifyLanguage = "";
        }
        options["prettifyLanguage"] = prettifyLanguage;
        this.options = options;
    }
    // Based on what is specified in the original HTML, create the HTML view
    initializeView() {
        this.outerDiv = document.createElement("div");
        $(this.outerDiv).addClass("parsons");
        this.outerDiv.id = this.counterId;
        this.parsTextDiv = document.createElement("div");
        $(this.parsTextDiv).addClass("parsons-text");
        this.keyboardTip = document.createElement("div");
        $(this.keyboardTip).attr("role", "tooltip");
        this.keyboardTip.id = this.counterId + "-tip";
        this.keyboardTip.innerHTML = $.i18n("msg_parson_arrow_navigate");
        this.outerDiv.appendChild(this.keyboardTip);
        $(this.keyboardTip).hide();
        this.sortContainerDiv = document.createElement("div");
        $(this.sortContainerDiv).addClass("sortable-code-container");
        $(this.sortContainerDiv).attr(
            "aria-describedby",
            this.counterId + "-tip"
        );
        this.outerDiv.appendChild(this.sortContainerDiv);
        this.sourceRegionDiv = document.createElement("div");
        this.sourceRegionDiv.id = this.counterId + "-sourceRegion";
        $(this.sourceRegionDiv).addClass("sortable-code");
        this.sourceLabel = document.createElement("div");
        $(this.sourceLabel).attr("role", "tooltip");
        this.sourceLabel.id = this.counterId + "-sourceTip";
        this.sourceLabel.innerHTML = $.i18n("msg_parson_drag_from_here");
        this.sourceRegionDiv.appendChild(this.sourceLabel);
        this.sortContainerDiv.appendChild(this.sourceRegionDiv);
        this.sourceArea = document.createElement("div");
        this.sourceArea.id = this.counterId + "-source";
        $(this.sourceArea).addClass("source");
        $(this.sourceArea).attr(
            "aria-describedby",
            this.counterId + "-sourceTip"
        );
        this.sourceRegionDiv.appendChild(this.sourceArea);
        this.answerRegionDiv = document.createElement("div");
        this.answerRegionDiv.id = this.counterId + "-answerRegion";
        $(this.answerRegionDiv).addClass("sortable-code");
        this.answerLabel = document.createElement("div");
        $(this.answerLabel).attr("role", "tooltip");
        this.answerLabel.id = this.counterId + "-answerTip";
        this.answerLabel.innerHTML = $.i18n("msg_parson_drag_to_here");
        this.answerRegionDiv.appendChild(this.answerLabel);
        this.sortContainerDiv.appendChild(this.answerRegionDiv);
        this.answerArea = document.createElement("div");
        this.answerArea.id = this.counterId + "-answer";
        $(this.answerArea).attr(
            "aria-describedby",
            this.counterId + "-answerTip"
        );
        this.answerRegionDiv.appendChild(this.answerArea);
        this.parsonsControlDiv = document.createElement("div");
        $(this.parsonsControlDiv).addClass("parsons-controls");
        this.outerDiv.appendChild(this.parsonsControlDiv);
        var that = this;
        this.checkButton = document.createElement("button");
        $(this.checkButton).attr("class", "btn btn-success");
        this.checkButton.textContent = $.i18n("msg_parson_check_me");
        this.checkButton.id = this.counterId + "-check";
        this.parsonsControlDiv.appendChild(this.checkButton);
        this.checkButton.type = "button";
        this.checkButton.addEventListener("click", function (event) {
            event.preventDefault();
            that.checkCurrentAnswer();
            that.logCurrentAnswer();
            that.renderFeedback();
        });
        this.resetButton = document.createElement("button");
        $(this.resetButton).attr("class", "btn btn-default");
        this.resetButton.textContent = $.i18n("msg_parson_reset");
        this.resetButton.id = this.counterId + "-reset";
        this.resetButton.type = "button";
        this.parsonsControlDiv.appendChild(this.resetButton);
        this.resetButton.addEventListener("click", function (event) {
            event.preventDefault();
            that.clearFeedback();
            $(that.checkButton).prop("disabled", false);
            that.resetView();
            that.checkCount = 0;
            that.logMove("reset");
            that.setLocalStorage();
        });
        if (this.options.adaptive) {
            this.helpButton = document.createElement("button");
            $(this.helpButton).attr("class", "btn btn-primary");
            this.helpButton.textContent = $.i18n("msg_parson_help");
            this.helpButton.id = this.counterId + "-help";
            this.helpButton.disabled = false; // bje
            this.parsonsControlDiv.appendChild(this.helpButton);
            this.helpButton.addEventListener("click", function (event) {
                event.preventDefault();
                that.helpMe();
            });
        }
        this.messageDiv = document.createElement("div");
        this.messageDiv.id = this.counterId + "-message";
        this.parsonsControlDiv.appendChild(this.messageDiv);
        $(this.messageDiv).hide();
        $(this.origElem).replaceWith(this.outerDiv);
        $(this.outerDiv).closest(".sqcontainer").css("max-width", "none");
        if (this.outerDiv) {
            if ($(this.question).html().match(/^\s+$/)) {
                $(this.question).remove();
            } else {
                $(this.outerDiv).prepend(this.question);
            }
        }
    }
    // Initialize lines and solution properties
    initializeLines(text) {
        this.lines = [];
        // Create the initial blocks
        var textBlocks = text.split("---");
        if (textBlocks.length === 1) {
            // If there are no ---, then every line is its own block
            textBlocks = text.split("\n");
        }
        var solution = [];
        var indents = [];
        for (var i = 0; i < textBlocks.length; i++) {
            var textBlock = textBlocks[i];
            // Figure out options based on the #option
            // Remove the options from the code
            // only options are #paired or #distractor
            var options = {};
            var distractIndex;
            var distractHelptext = "";
            var tagIndex;
            var tag;
            var dependsIndex;
            var depends = [];
            if (textBlock.includes("#paired:")) {
                distractIndex = textBlock.indexOf("#paired:");
                distractHelptext = textBlock
                    .substring(distractIndex + 8, textBlock.length)
                    .trim();
                textBlock = textBlock.substring(0, distractIndex + 7);
            } else if (textBlock.includes("#distractor:")) {
                distractIndex = textBlock.indexOf("#distractor:");
                distractHelptext = textBlock
                    .substring(distractIndex + 12, textBlock.length)
                    .trim();
                textBlock = textBlock.substring(0, distractIndex + 11);
            } else if (textBlock.includes("#tag:")) {
                textBlock = textBlock.replace(/#tag:.*;.*;/, (s) =>
                    s.replace(/\s+/g, "")
                ); // remove whitespace in tag and depends list
                tagIndex = textBlock.indexOf("#tag:");
                tag = textBlock.substring(
                    tagIndex + 5,
                    textBlock.indexOf(";", tagIndex + 5)
                );
                if (tag == "")
                    tag = "block-" + i;
                dependsIndex = textBlock.indexOf(";depends:");
                let dependsString = textBlock.substring(
                    dependsIndex + 9,
                    textBlock.indexOf(";", dependsIndex + 9)
                );
                depends =
                    dependsString.length > 0 ? dependsString.split(",") : [];
            }
            textBlock = textBlock.replace(
                /#(paired|distractor|tag:.*;.*;)/,
                function (mystring, arg1) {
                    options[arg1] = true;
                    return "";
                }
            );
            // Create lines
            var lines = [];
            var split = textBlock.split("\n");
            for (var j = 0; j < split.length; j++) {
                var code = split[j];
                // discard blank rows
                if (!/^\s*$/.test(code)) {
                    var line = new _parsonsLine__WEBPACK_IMPORTED_MODULE_8__["default"](this, code);
                    lines.push(line);
                    if (options["paired"]) {
                        line.distractor = true;
                        line.paired = true;
                        line.distractHelptext = distractHelptext;
                    } else if (options["distractor"]) {
                        line.distractor = true;
                        line.paired = false;
                        line.distractHelptext = distractHelptext;
                    } else {
                        line.distractor = false;
                        line.paired = false;
                        if (this.options.grader === "dag") {
                            line.tag = tag;
                            line.depends = depends;
                        }
                        solution.push(line);
                    }
                    if ($.inArray(line.indent, indents) == -1) {
                        indents.push(line.indent);
                    }
                }
            }
            if (lines.length > 0) {
                // Add groupWithNext
                for (j = 0; j < lines.length - 1; j++) {
                    lines[j].groupWithNext = true;
                }
                lines[lines.length - 1].groupWithNext = false;
            }
        }
        // Normalize the indents
        indents = indents.sort(function (a, b) {
            return a - b;
        });
        for (i = 0; i < this.lines.length; i++) {
            line = this.lines[i];
            line.indent = indents.indexOf(line.indent);
        }
        this.solution = solution;
    }
    // Based on the blocks, create the source and answer areas
    initializeAreas(sourceBlocks, answerBlocks, options) {
        // Create blocks property as the sum of the two
        var blocks = [];
        var i, block;
        for (i = 0; i < sourceBlocks.length; i++) {
            block = sourceBlocks[i];
            blocks.push(block);
            this.sourceArea.appendChild(block.view);
        }
        for (i = 0; i < answerBlocks.length; i++) {
            block = answerBlocks[i];
            blocks.push(block);
            this.answerArea.appendChild(block.view);
        }
        this.blocks = blocks;
        // If present, disable some blocks
        var disabled = options.disabled;
        if (disabled !== undefined) {
            for (i = 0; i < blocks.length; i++) {
                block = blocks[i];
                if (disabled.includes(block.lines[0].index)) {
                    $(block.view).addClass("disabled");
                }
            }
        }
        // Determine how much indent should be possible in the answer area
        var indent = 0;
        if (!this.noindent) {
            if (this.options.language == "natural") {
                indent = this.solutionIndent();
            } else {
                indent = Math.max(0, this.solutionIndent());
            }
        }
        this.indent = indent;
        // For rendering, place in an onscreen position
        var isHidden = this.outerDiv.offsetParent == null;
        var replaceElement;
        if (isHidden) {
            replaceElement = document.createElement("div");
            $(this.outerDiv).replaceWith(replaceElement);
            document.body.appendChild(this.outerDiv);
        }
        if (this.options.prettifyLanguage !== "") {
            prettyPrint();
        }
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].initializeWidth();
        }
        // Layout the areas
        var areaWidth, areaHeight;
        // Establish the width and height of the droppable areas
        var item, maxFunction;
        areaHeight = 6;
        var height_add = 0;
        if (this.options.numbered != undefined) {
            height_add = 1;
        }
        if (
            this.options.language == "natural" ||
            this.options.language == "math"
        ) {
            areaWidth = 300;
            maxFunction = function (item) {
                item.width(areaWidth - 22);
                var addition = 3.8;
                if (item.outerHeight(true) != 38)
                    addition = (2.1 * (item.outerHeight(true) - 38)) / 21;
                areaHeight += item.outerHeight(true) + height_add * addition;
            };
        } else {
            areaWidth = 300;
            // This maxFunction is how Parsons areas width and height were being calculated previously,
            // but at some point .outerHeight and .outerWidth stopped returning correct values
            // causing lines to overflow and display awkwardly. - Vincent Qiu (September 2020)
            // maxFunction = function (item) {
            //     var addition = 3.8;
            //     if (item.outerHeight(true) != 38) addition = 2.1;
            //     areaHeight += item.outerHeight(true) + height_add * addition;
            //     areaWidth = Math.max(areaWidth, item.outerWidth(true));
            // };

            // This new maxFunction is how Parsons areas width and height are being calculated now manually - Vincent Qiu (September 2020)
            maxFunction = function (item) {
                var addition = 3.8;

                // Determine which index within the Parsons block JavaScript object contains the text lines and consequently the passed through data - Vincent Qiu (September 2020)
                var linesIndex;
                var linesItem = item[0].children;
                for (
                    linesIndex = 0;
                    linesIndex < item[0].children.length;
                    linesIndex++
                ) {
                    if (
                        item[0].children[linesIndex].className.includes("lines")
                    ) {
                        break;
                    }
                }

                // Create a canvas and set the passed through fontSize and fontFamily in order to measure text width - Vincent Qiu (September 2020)
                var fontSize = linesItem[linesIndex].children[0].fontSize;
                var fontFamily = linesItem[linesIndex].children[0].fontFamily;
                var tempCanvas = document.createElement("canvas");
                var tempCanvasCtx = tempCanvas.getContext("2d");
                tempCanvasCtx.font = fontSize + " " + fontFamily;

                // Increment Parsons area height based on number of lines of text in the current Parsons block - Vincent Qiu (September 2020)
                var singleHeight = 40;
                var additionalHeight = 20;
                areaHeight += Math.ceil(
                    // For future more accurate height display, this calculation should also be conditionally based on fontFamily
                    singleHeight +
                        (linesItem[linesIndex].children.length - 1) *
                            additionalHeight +
                        height_add * addition
                );

                // Determine the longest text line in the current Parsons block and calculate its width - Vincent Qiu (September 2020)
                var itemLength;
                var pixelsPerIndent;
                var indent;
                var maxInnerText;
                var maxInnerLength = 0;
                var i;
                var widthLimit = 475;
                var longCount = 0;
                for (i = 0; i < linesItem[linesIndex].children.length; i++) {
                    pixelsPerIndent =
                        linesItem[linesIndex].children[i].pixelsPerIndent;
                    indent = linesItem[linesIndex].children[i].indent;
                    itemLength = Math.ceil(
                        pixelsPerIndent * indent +
                            tempCanvasCtx.measureText(
                                linesItem[linesIndex].children[i].innerText
                            ).width
                    );
                    longCount += Math.floor(itemLength / (widthLimit - 29));
                    if (itemLength > maxInnerLength) {
                        maxInnerText =
                            linesItem[linesIndex].children[i].innerText;
                        maxInnerLength = itemLength;
                    }
                }
                areaWidth = Math.max(areaWidth, maxInnerLength + 40);
                // Set width limit and determine how much additional height is needed to accommodate the forced text overflow - Vincent Qiu (September 2020)
                if (areaWidth > widthLimit) {
                    areaWidth = widthLimit;
                    areaHeight += longCount * additionalHeight;
                }
            };
        }
        for (i = 0; i < blocks.length; i++) {
            maxFunction($(blocks[i].view));
        }
        this.areaWidth = areaWidth;
        if (this.options.numbered != undefined) {
            this.areaWidth += 25;
            //areaHeight += (blocks.length);
        }
        // + 40 to areaHeight to provide some additional buffer in case any text overflow still happens - Vincent Qiu (September 2020)
        this.areaHeight = areaHeight + 40;
        $(this.sourceArea).css({
            width: this.areaWidth + 2,
            height: areaHeight,
        });
        $(this.answerArea).css({
            width: this.options.pixelsPerIndent * indent + this.areaWidth + 2,
            height: areaHeight,
        });
        if (indent > 0 && indent <= 4) {
            $(this.answerArea).addClass("answer" + indent);
        } else {
            $(this.answerArea).addClass("answer");
        }
        // Initialize paired distractor decoration
        var bins = [];
        var bin = [];
        for (i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            if (line.block() == undefined) {
                if (bin.length > 0) {
                    bins.push(bin);
                    bin = [];
                }
            } else {
                bin.push(line);
                if (!line.groupWithNext) {
                    bins.push(bin);
                    bin = [];
                }
            }
        }
        var pairedBins = [];
        var lineNumbers = [];
        var pairedDivs = [];
        var j;
        if (this.pairDistractors || !this.options.adaptive) {
            for (i = bins.length - 1; i > -1; i--) {
                bin = bins[i];
                if (bin[0].paired) {
                    // Add all in bin to line numbers
                    for (j = bin.length - 1; j > -1; j--) {
                        lineNumbers.unshift(bin[j].index);
                    }
                } else {
                    if (lineNumbers.length > 0) {
                        // Add all in bin to line numbers
                        for (j = bin.length - 1; j > -1; j--) {
                            lineNumbers.unshift(bin[j].index);
                        }
                        pairedBins.unshift(lineNumbers);
                        lineNumbers = [];
                    }
                }
            }
            for (i = 0; i < pairedBins.length; i++) {
                var pairedDiv = document.createElement("div");
                $(pairedDiv).addClass("paired");
                $(pairedDiv).html(
                    "<span id= 'st' style = 'vertical-align: middle; font-weight: bold'>or{</span>"
                );
                pairedDivs.push(pairedDiv);
                this.sourceArea.appendChild(pairedDiv);
            }
        } else {
            pairedBins = [];
        }
        this.pairedBins = pairedBins;
        this.pairedDivs = pairedDivs;
        if (this.options.numbered != undefined) {
            this.addBlockLabels(sourceBlocks.concat(answerBlocks));
        }
        // Update the view
        this.state = undefined; // needs to be here for loading from storage
        this.updateView();
        // Put back into the offscreen position
        if (isHidden) {
            $(replaceElement).replaceWith(this.outerDiv);
        }
    }
    // Make blocks interactive (both drag-and-drop and keyboard)
    initializeInteractivity() {
        for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].initializeInteractivity();
        }
        this.initializeTabIndex();
        if (
            this.options.language == "natural" ||
            this.options.language == "math"
        ) {
            if (typeof MathJax !== "undefined") {
                this.queueMathJax(this.outerDiv);
            }
        }
    }
    // Make one block be keyboard accessible
    initializeTabIndex() {
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.enabled()) {
                block.makeTabIndex();
                return this;
            }
        }
    }
    /* =====================================================================
    ==== SERVER COMMUNICATION ==============================================
    ===================================================================== */
    // Return the argument that is newer based on the timestamp
    newerData(dataA, dataB) {
        var dateA = dataA.timestamp;
        var dateB = dataB.timestamp;
        if (dateA == undefined) {
            return dataB;
        }
        if (dateB == undefined) {
            return dataA;
        }
        dateA = this.dateFromTimestamp(dateA);
        dateB = this.dateFromTimestamp(dateB);
        if (dateA > dateB) {
            return dataA;
        } else {
            return dataB;
        }
    }
    // Based on the data, load
    loadData(data) {
        var sourceHash = data.source;
        if (sourceHash == undefined) {
            // maintain backwards compatibility
            sourceHash = data.trash;
        }
        var answerHash = data.answer;
        var adaptiveHash = data.adaptive;
        var options;
        if (adaptiveHash == undefined) {
            options = {};
        } else {
            options = this.optionsFromHash(adaptiveHash);
        }
        if (options.noindent !== undefined) {
            this.noindent = true;
        }
        if (options.checkCount !== undefined) {
            this.checkCount = options.checkCount;
        }
        if (options.hasSolved !== undefined) {
            this.hasSolved = options.hasSolved;
        }
        if (
            sourceHash == undefined ||
            answerHash == undefined ||
            answerHash.length == 1
        ) {
            this.initializeAreas(this.blocksFromSource(), [], options);
        } else {
            this.initializeAreas(
                this.blocksFromHash(sourceHash),
                this.blocksFromHash(answerHash),
                options
            );
            this.grade = this.grader.grade();
            this.correct = this.grade;
        }
        // Start the interface
        if (this.needsReinitialization !== true) {
            this.initializeInteractivity();
        }
    }
    // Return what is stored in local storage
    localData() {
        var data = localStorage.getItem(this.storageId);
        if (data !== null) {
            if (data.charAt(0) == "{") {
                data = JSON.parse(data);
            } else {
                data = {};
            }
        } else {
            data = {};
        }
        return data;
    }
    // RunestoneBase: Sent when the server has data
    restoreAnswers(serverData) {
        this.loadData(serverData);
    }
    // RunestoneBase: Load what is in local storage
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        this.loadData(this.localData());
    }
    // RunestoneBase: Set the state of the problem in local storage
    setLocalStorage(data) {
        var toStore;
        if (data == undefined) {
            toStore = {
                source: this.sourceHash(),
                answer: this.answerHash(),
                timestamp: new Date(),
            };
            var adaptiveHash = this.adaptiveHash();
            if (adaptiveHash.length > 0) {
                toStore.adaptive = adaptiveHash;
            }
        } else {
            toStore = data;
        }
        localStorage.setItem(this.storageId, JSON.stringify(toStore));
    }
    /* =====================================================================
    ==== LOGGING ===========================================================
    ===================================================================== */
    // Log the interaction with the problem to the server:
    //   start: the user started interacting with this problem
    //   move: the user moved a block to a new position
    //   reset: the reset button was pressed
    //   removeDistractor: "Help Me" removed a distractor
    //   removeIndentation: "Help Me" removed indentation
    //   combineBlocks: "Help Me" combined blocks
    logMove(activity) {
        var event = {
            event: "parsonsMove",
            div_id: this.divid,
            storageid: super.localStorageKey(),
        };
        var act = activity + "|" + this.sourceHash() + "|" + this.answerHash();
        var adaptiveHash = this.adaptiveHash();
        if (adaptiveHash !== "") {
            act = act + "|" + adaptiveHash;
        }
        event.act = act;
        this.logBookEvent(event);
    }
    // Log the answer to the problem
    //   correct: The answer given matches the solution
    //   incorrect*: The answer is wrong for various reasons
    async logCurrentAnswer(sid) {
        var event = {
            event: "parsons",
            div_id: this.divid,
        };
        var answerHash = this.answerHash();
        event.answer = answerHash;
        var sourceHash = this.sourceHash();
        event.source = sourceHash;
        var act = sourceHash + "|" + answerHash;
        var adaptiveHash = this.adaptiveHash();
        if (adaptiveHash !== "") {
            event.adaptive = adaptiveHash;
            act = act + "|" + adaptiveHash;
        }
        if (this.grade == "correct") {
            act = "correct|" + act;
            event.correct = "T";
        } else {
            act = "incorrect|" + act;
            event.correct = "F";
        }
        event.act = act;

        if (typeof sid !== "undefined") {
            event.sid = sid;
        }

        await this.logBookEvent(event);
    }
    /* =====================================================================
    ==== ACCESSING =========================================================
    ===================================================================== */
    // Answer the hash of the adaptive state
    adaptiveHash() {
        if (!this.options.adaptive) {
            return "";
        }
        var hash = [];
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (!block.enabled()) {
                hash.push("d" + block.lines[0].index);
            }
        }
        if (this.noindent !== this.options.noindent) {
            hash.push("i");
        }
        hash.push("c" + this.checkCount);
        if (this.hasSolved) {
            hash.push("s");
        }
        return hash.join("-");
    }
    // Create options for creating blocks based on a hash
    optionsFromHash(hash) {
        var split;
        if (hash === "-" || hash === "" || hash === null) {
            split = [];
        } else {
            split = hash.split("-");
        }
        var options = {};
        var disabled = [];
        for (var i = 0; i < split.length; i++) {
            var key = split[i];
            if (key[0] == "i") {
                options.noindent = true;
            } else if (key[0] == "d") {
                disabled.push(parseInt(key.slice(1)));
            } else if (key[0] == "s") {
                options.hasSolved = true;
            } else if (key[0] == "c") {
                options.checkCount = parseInt(key.slice(1));
            }
        }
        if (disabled.length > 0) {
            options.disabled = disabled;
        }
        return options;
    }
    // Answer the hash of the answer area
    answerHash() {
        var hash = [];
        var blocks = this.answerBlocks();
        for (var i = 0; i < blocks.length; i++) {
            hash.push(blocks[i].hash());
        }
        if (hash.length === 0) {
            return "-";
        } else {
            return hash.join("-");
        }
    }
    // Answer the hash of the source area
    sourceHash() {
        var hash = [];
        var blocks = this.sourceBlocks();
        for (var i = 0; i < blocks.length; i++) {
            hash.push(blocks[i].hash());
        }
        if (hash.length === 0) {
            return "-";
        } else {
            return hash.join("-");
        }
    }
    // Inter-problem adaptive changes
    // Based on the recentAttempts, remove distractors, add indent, combine blocks
    adaptBlocks(input) {
        var blocks = [];
        var distractors = [];
        var block;
        for (var i = 0; i < input.length; i++) {
            block = input[i];
            if (block.isDistractor()) {
                distractors.push(block);
            } else {
                blocks.push(block);
            }
        }
        this.recentAttempts = localStorage.getItem(
            this.adaptiveId + "recentAttempts"
        );
        if (this.recentAttempts == undefined || this.recentAttempts == "NaN") {
            this.recentAttempts = 3;
        }
        var lastestAttemptCount = this.recentAttempts;
        var nBlocks = blocks.length;
        var nBlocksToCombine = 0;
        var nDistractors = distractors.length;
        var nToRemove = 0;
        this.pairDistractors = true;
        var giveIndentation = false;
        if (lastestAttemptCount < 2) {
            // 1 Try
            this.pairDistractors = false;
            this.limitDistractors = false;
        } else if (lastestAttemptCount < 4) {
            // 2-3 Tries
            // Do nothing they are doing normal
            this.pairDistractors = true;
        } else if (lastestAttemptCount < 6) {
            // 4-5 Tries
            // pair distractors
            this.pairDistractors = true;
        } else if (lastestAttemptCount < 8) {
            // 6-7 Tries
            // Remove 50% of distractors
            nToRemove = 0.5 * nDistractors;
            this.pairDistractors = true;
        } else {
            // 8+ Tries
            // Remove all of distractors
            nToRemove = nDistractors;
            this.pairDistractors = true;
        }
        /*
        else if(lastestAttemptCount < 12) { //10-11
            // Remove all distractors and give indentation
            nToRemove = nDistractors;
            giveIndentation = true;
            this.pairDistractors = true;
        } else if(lastestAttemptCount < 14) { // 12-13 Tries
            // Remove all of distractors
            // give indentation
            // reduce problem to 3/4 size
            giveIndentation = true;
            nToRemove = nDistractors;
            nBlocksToCombine = .25 * nBlocks;
            this.pairDistractors = true;
        } else { // >= 14 Tries
            // Remove all of distractors
            // give indentation
            // reduce problem to 1/2 size
            giveIndentation = true;
            nToRemove = nDistractors;
            nBlocksToCombine = .5 * nBlocks;
            this.pairDistractors = true;
        }
        */
        nBlocksToCombine = Math.min(nBlocksToCombine, nBlocks - 3);
        // Never combine so where there are less than three blocks left
        // Remove distractors
        distractors = this.shuffled(distractors);
        distractors = distractors.slice(0, nToRemove);
        var output = [];
        for (i = 0; i < input.length; i++) {
            block = input[i];
            if (!block.isDistractor()) {
                output.push(block);
            } else if ($.inArray(block, distractors) == -1) {
                output.push(block);
            }
        }
        //var output = input;
        if (giveIndentation) {
            for (let i = 0; i < output.length; i++) {
                output[i].addIndent();
            }
            this.indent = 0;
            this.noindent = true;
        }
        // combine blocks
        var solution = [];
        for (i = 0; i < this.lines.length; i++) {
            for (var j = 0; j < output.length; j++) {
                if (output[j].lines[0].index == i) {
                    solution.push(output[j]);
                }
            }
        }
        for (let i = 0; i < nBlocksToCombine; i++) {
            // combine one set of blocks
            var best = -10;
            var combineIndex = -10;
            for (j = 0; j < solution.length - 1; j++) {
                block = solution[j];
                var next = solution[j + 1];
                var rating = 10 - block.lines.length - next.lines.length;
                var blockIndent = block.minimumLineIndent();
                var nextIndent = next.minimumLineIndent();
                if (blockIndent == nextIndent) {
                    rating += 2;
                } else if (blockIndent > nextIndent) {
                    rating -= 1;
                }
                if (
                    block.lines[block.lines.length - 1].indent ==
                    next.lines[0].indent
                ) {
                    rating += 1;
                }
                if (rating >= best) {
                    best = rating;
                    combineIndex = j;
                }
            }
            block = solution[combineIndex];
            next = solution[combineIndex + 1];
            for (j = 0; j < next.lines.length; j++) {
                block.addLine(next.lines[j]);
            }
            var newSolution = [];
            for (j = 0; j < solution.length; j++) {
                if (j !== combineIndex + 1) {
                    newSolution.push(solution[j]);
                }
            }
            var solution = newSolution;
        }
        // reorder
        var combinedOutput = [];
        for (i = 0; i < output.length; i++) {
            for (j = 0; j < solution.length; j++) {
                if (output[i].lines[0].index == solution[j].lines[0].index) {
                    combinedOutput.push(solution[j]);
                }
            }
        }
        return combinedOutput;
    }
    // Return an array of code blocks based on what is specified in the problem
    blocksFromSource() {
        var unorderedBlocks = [];
        var originalBlocks = [];
        var blocks = [];
        var lines = [];
        var block, line, i;
        for (i = 0; i < this.lines.length; i++) {
            line = this.lines[i];
            lines.push(line);
            if (!line.groupWithNext) {
                unorderedBlocks.push(new _parsonsBlock__WEBPACK_IMPORTED_MODULE_9__["default"](this, lines));
                lines = [];
            }
        }
        originalBlocks = unorderedBlocks;
        // Trim the distractors
        var removedBlocks = [];
        if (this.options.maxdist !== undefined) {
            var maxdist = this.options.maxdist;
            var distractors = [];
            for (i = 0; i < unorderedBlocks.length; i++) {
                block = unorderedBlocks[i];
                if (block.lines[0].distractor) {
                    distractors.push(block);
                }
            }
            if (maxdist < distractors.length) {
                distractors = this.shuffled(distractors);
                distractors = distractors.slice(0, maxdist);
                for (i = 0; i < unorderedBlocks.length; i++) {
                    block = unorderedBlocks[i];
                    if (block.lines[0].distractor) {
                        if ($.inArray(block, distractors) > -1) {
                            blocks.push(block);
                        } else {
                            removedBlocks.push(i);
                        }
                    } else {
                        blocks.push(block);
                    }
                }
                unorderedBlocks = blocks;
                blocks = [];
            }
        }

        // This is necessary, set the pairDistractors value before blocks get shuffled - William Li (August 2020)
        if (this.recentAttempts < 2) {
            // 1 Try
            this.pairDistractors = false;
        } else {
            this.pairDistractors = true;
        }

        if (this.options.order === undefined) {
            // Shuffle, respecting paired distractors
            var chunks = [],
                chunk = [];
            for (i = 0; i < unorderedBlocks.length; i++) {
                block = unorderedBlocks[i];
                if (block.lines[0].paired && this.pairDistractors) {
                    // William Li (August 2020)
                    chunk.push(block);
                } else {
                    chunk = [];
                    chunk.push(block);
                    chunks.push(chunk);
                }
            }
            chunks = this.shuffled(chunks);
            for (i = 0; i < chunks.length; i++) {
                chunk = chunks[i];
                if (chunk.length > 1) {
                    // shuffle paired distractors
                    chunk = this.shuffled(chunk);
                    for (j = 0; j < chunk.length; j++) {
                        blocks.push(chunk[j]);
                    }
                } else {
                    blocks.push(chunk[0]);
                }
            }
        } else {
            // Order according to order specified
            for (i = 0; i < this.options.order.length; i++) {
                block = originalBlocks[this.options.order[i]];
                if (
                    block !== undefined &&
                    $.inArray(this.options.order[i], removedBlocks) < 0
                ) {
                    blocks.push(block);
                }
            }
        }
        this.pairDistractors = true;
        if (this.options.adaptive) {
            this.limitDistractors = true;
            blocks = this.adaptBlocks(blocks);
            if (!this.limitDistractors) {
                for (i = 0; i < removedBlocks.length; i++) {
                    var index =
                        this.options.order == undefined
                            ? Math.random(0, blocks.length)
                            : $.inArray(removedBlocks[i], this.options.order);
                    blocks.splice(index, 0, originalBlocks[removedBlocks[i]]);
                }
            }
        }
        if (this.pairDistractors && this.options.order != undefined) {
            //move pairs together
            //Go through array looking for ditractor and its pair
            for (i = 1; i < originalBlocks.length; i++) {
                if (
                    originalBlocks[i].lines[0].paired &&
                    $.inArray(originalBlocks[i], blocks) >= 0
                ) {
                    var j = i;
                    while ($.inArray(originalBlocks[j - 1], blocks) < 0) {
                        // find the paired distractor or solution block it will be next to
                        j--;
                    }
                    var indexTo = $.inArray(originalBlocks[j - 1], blocks);
                    var indexFrom = $.inArray(originalBlocks[i], blocks);
                    blocks.splice(indexFrom, 1);
                    blocks.splice(indexTo, 0, originalBlocks[i]);
                }
            }
        }
        return blocks;
    }
    // Return a codeblock that corresponds to the hash
    blockFromHash(hash) {
        var split = hash.split("_");
        var lines = [];
        for (var i = 0; i < split.length - 1; i++) {
            lines.push(this.lines[split[i]]);
        }
        var block = new _parsonsBlock__WEBPACK_IMPORTED_MODULE_9__["default"](this, lines);
        if (this.noindent) {
            block.indent = 0;
        } else {
            block.indent = Number(split[split.length - 1]);
        }
        return block;
    }
    // Return an array of codeblocks that corresponds to the hash
    blocksFromHash(hash) {
        var split;
        if (hash === "-" || hash === "" || hash === null) {
            split = [];
        } else {
            split = hash.split("-");
        }
        var blocks = [];
        for (var i = 0; i < split.length; i++) {
            blocks.push(this.blockFromHash(split[i]));
        }
        if (this.options.adaptive) {
            return this.adaptBlocks(blocks);
        } else {
            return blocks;
        }
    }
    // Return a block object by the full id including id prefix
    getBlockById(id) {
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.view.id == id) {
                return block;
            }
        }
        return undefined;
    }
    // Return array of codeblocks that are the solution
    solutionBlocks() {
        var solutionBlocks = [];
        var solutionLines = [];
        for (var i = 0; i < this.lines.length; i++) {
            if (!this.lines[i].distractor) {
                solutionLines.push(this.lines[i]);
            }
        }
        var block = solutionLines[0].block();
        solutionBlocks.push(block);
        for (let i = 1; i < solutionLines.length; i++) {
            var nextBlock = solutionLines[i].block();
            if (block !== nextBlock) {
                block = nextBlock;
                solutionBlocks.push(block);
            }
        }
        return solutionBlocks;
    }
    // Return array of codeblocks based on what is in the source field
    sourceBlocks() {
        var sourceBlocks = [];
        var children = this.sourceArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if ($(child).hasClass("block")) {
                sourceBlocks.push(this.getBlockById(child.id));
            }
        }
        return sourceBlocks;
    }
    // Return array of enabled codeblocks based on what is in the source field
    enabledSourceBlocks() {
        var all = this.sourceBlocks();
        var enabled = [];
        for (var i = 0; i < all.length; i++) {
            var block = all[i];
            if (block.enabled()) {
                enabled.push(block);
            }
        }
        return enabled;
    }
    // Return array of codeblocks based on what is in the answer field
    answerBlocks() {
        var answerBlocks = [];
        var children = this.answerArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            var block = this.getBlockById(children[i].id);
            if (block !== undefined) {
                answerBlocks.push(block);
            }
        }
        return answerBlocks;
    }
    // Return array of enabled codeblocks based on what is in the answer field
    enabledAnswerBlocks() {
        var all = this.answerBlocks();
        var enabled = [];
        for (var i = 0; i < all.length; i++) {
            var block = all[i];
            if (block.enabled()) {
                enabled.push(block);
            }
        }
        return enabled;
    }
    // Return array of codelines based on what is in the answer field
    answerLines() {
        var answerLines = [];
        var blocks = this.answerBlocks();
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                answerLines.push(block.lines[j]);
            }
        }
        return answerLines;
    }
    // Go up the hierarchy until you get to a block; return that block element
    getBlockFor(element) {
        var check = element;
        while (!check.classList.contains("block")) {
            check = check.parentElement;
        }
        return check;
    }
    // Return the maximum indent for the solution
    solutionIndent() {
        var indent = 0;
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            indent = Math.max(indent, block.solutionIndent());
        }
        return indent;
    }
    /* =====================================================================
    ==== ACTION ============================================================
    ===================================================================== */
    // The "Check Me" button was pressed.
    checkCurrentAnswer() {
        if (!this.hasSolved) {
            this.checkCount++;
            this.clearFeedback();
            if (this.adaptiveId == undefined) {
                this.adaptiveId = this.storageId;
            }
            // TODO - rendering feedback is buried in the grader.grade method.
            // to disable feedback set this.grader.showfeedback boolean
            this.grader.showfeedback = false;
            this.grade = this.grader.grade();
            if (this.grade == "correct") {
                this.hasSolved = true;
                this.correct = true;
                $(this.checkButton).prop("disabled", true);
                localStorage.setItem(this.adaptiveId + "Solved", true);
                this.recentAttempts = this.checkCount;
                localStorage.setItem(
                    this.adaptiveId + "recentAttempts",
                    this.recentAttempts
                );
            }
            localStorage.setItem(
                this.adaptiveId + this.divid + "Count",
                this.checkCount
            );
            this.setLocalStorage();
            // if not solved and not too short then check if should provide help
            if (!this.hasSolved && this.grade !== "incorrectTooShort") {
                if (this.canHelp) {
                    // only count the attempt if the answer is different (to prevent gaming)
                    var answerHash = this.answerHash();
                    if (this.lastAnswerHash !== answerHash) {
                        this.numDistinct++;
                        this.lastAnswerHash = answerHash;
                    }
                    // if time to offer help
                    if (this.numDistinct == 3 && !this.gotHelp) {
                        alert($.i18n("msg_parson_help_info"));
                    } // end if
                } // end if can help
            } // end if not solved
        } // end outer if not solved
    }

    renderFeedback() {
        this.grader.showfeedback = true;
        this.grade = this.grader.graderState;
        var feedbackArea;
        var answerArea = $(this.answerArea);

        if (this.showfeedback === true) {
            feedbackArea = $(this.messageDiv);
        } else {
            feedbackArea = $("#doesnotexist");
        }

        if (this.grade === "correct") {
            answerArea.addClass("correct");
            feedbackArea.fadeIn(100);
            feedbackArea.attr("class", "alert alert-info");
            if (this.checkCount > 1) {
                feedbackArea.html(
                    $.i18n("msg_parson_correct", this.checkCount)
                );
            } else {
                feedbackArea.html($.i18n("msg_parson_correct_first_try"));
            }
        }

        if (this.grade === "incorrectTooShort") {
            // too little code
            answerArea.addClass("incorrect");
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            feedbackArea.html($.i18n("msg_parson_too_short"));
        }

        if (this.grade === "incorrectIndent") {
            var incorrectBlocks = [];
            for (let i = 0; i < this.grader.indentLeft.length; i++) {
                block = this.grader.indentLeft[i].block();
                if (incorrectBlocks.indexOf(block) == -1) {
                    incorrectBlocks.push(block);
                    $(block.view).addClass("indentLeft");
                }
            }
            for (let i = 0; i < this.grader.indentRight.length; i++) {
                block = this.grader.indentRight[i].block();
                if (incorrectBlocks.indexOf(block) == -1) {
                    incorrectBlocks.push(block);
                    $(block.view).addClass("indentRight");
                }
            }
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            if (incorrectBlocks.length == 1) {
                feedbackArea.html($.i18n("msg_parson_wrong_indent"));
            } else {
                feedbackArea.html($.i18n("msg_parson_wrong_indents"));
            }
        }

        if (this.grade === "incorrectMoveBlocks") {
            var answerBlocks = this.answerBlocks();
            var inSolution = [];
            var inSolutionIndexes = [];
            var notInSolution = [];
            for (let i = 0; i < answerBlocks.length; i++) {
                var block = answerBlocks[i];
                var index = this.solution.indexOf(block.lines[0]);
                if (index == -1) {
                    notInSolution.push(block);
                } else {
                    inSolution.push(block);
                    inSolutionIndexes.push(index);
                }
            }
            var lisIndexes = this.grader.inverseLISIndices(
                inSolutionIndexes,
                inSolution
            );
            for (let i = 0; i < lisIndexes.length; i++) {
                notInSolution.push(inSolution[lisIndexes[i]]);
            }
            answerArea.addClass("incorrect");
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            if (this.showfeedback === true) {
                for (let i = 0; i < notInSolution.length; i++) {
                    $(notInSolution[i].view).addClass("incorrectPosition");
                }
            }
            feedbackArea.html($.i18n("msg_parson_wrong_order"));
        }
    }

    /* =====================================================================
    ==== ADAPTIVE ==========================================================
    ===================================================================== */
    // Initialize this problem as adaptive
    //    helpCount = number of checks before help is given (negative)
    //    canHelp = boolean as to whether help can be provided
    //    checkCount = how many times it has been checked before correct
    //    userRating = 0..100 how good the person is at solving problems
    initializeAdaptive() {
        this.adaptiveId = super.localStorageKey();
        this.canHelp = true;
        //this.helpCount = -3; // Number of checks before help is offered
        this.checkCount = 0;
        this.numDistinct = 0; // number of distinct solution attempts (different from previous)
        this.gotHelp = false;
        // Initialize the userRating
        var storageProblem = localStorage.getItem(this.adaptiveId + "Problem");
        if (storageProblem == this.divid) {
            // Already in this problem
            this.checkCount = localStorage.getItem(
                this.adaptiveId + this.divid + "Count"
            );
            if (this.checkCount == undefined) {
                this.checkCount = 0;
            }
            return this;
        }
        var count = localStorage.getItem(
            this.adaptiveId + this.divid + "Count"
        );
        if (count == undefined || count == "NaN") {
            count = 0;
        }
        this.checkCount = count;
        this.recentAttempts = localStorage.getItem(
            this.adaptiveId + "recentAttempts"
        );
        if (this.recentAttempts == undefined || this.recentAttempts == "NaN") {
            this.recentAttempts = 3;
        }
        localStorage.setItem(
            this.adaptiveId + "recentAttempts",
            this.recentAttempts
        );
        localStorage.setItem(this.adaptiveId + "Problem", this.divid);
        localStorage.setItem(
            this.adaptiveId + this.divid + "Count",
            this.checkCount
        );
        localStorage.setItem(this.adaptiveId + "Solved", false);
    }
    // Return a boolean of whether the user must deal with indentation
    usesIndentation() {
        if (this.noindent || this.solutionIndent() == 0) {
            // was $(this.answerArea).hasClass("answer") - bje changed
            return false;
        } else {
            return true;
        }
    }
    // Find a distractor to remove to make the problem easier
    //  * try first in the answer area
    //  * if not, try the source area
    //  * if not, return undefined
    distractorToRemove() {
        var blocks = this.enabledAnswerBlocks();
        var block;
        for (let i = 0; i < blocks.length; i++) {
            block = blocks[i];
            if (block.isDistractor()) {
                return block;
            }
        }
        blocks = this.enabledSourceBlocks();
        for (let i = 0; i < blocks.length; i++) {
            block = blocks[i];
            if (block.isDistractor()) {
                return block;
            }
        }
        return undefined;
    }
    // Return the number of blocks that exist
    numberOfBlocks(fIncludeDistractors = true) {
        var numberOfBlocks = 0;
        for (var i = 0; i < this.blocks.length; i++) {
            if (
                this.blocks[i].enabled() &&
                (fIncludeDistractors || !this.blocks[i].isDistractor())
            ) {
                numberOfBlocks += 1;
            }
        }
        return numberOfBlocks;
    }
    // Remove this distractors to make the problem easier
    removeDistractor(block) {
        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_not_solution"));
        // Stop ability to select
        if (block.lines[0].distractHelptext) {
            block.view.setAttribute("data-toggle", "tooltip");
            block.view.setAttribute("title", block.lines[0].distractHelptext);
        }
        block.disable();
        // If in answer area, move to source area
        if (!block.inSourceArea()) {
            var sourceRect = this.sourceArea.getBoundingClientRect();
            var startX = block.pageXCenter() - 1;
            var startY = block.pageYCenter();
            var endX =
                sourceRect.left + window.pageXOffset + sourceRect.width / 2;
            var endY =
                sourceRect.top +
                window.pageYOffset +
                block.view.getBoundingClientRect().height / 2;
            var slideUnderBlock = block.slideUnderBlock();
            if (slideUnderBlock !== undefined) {
                endY +=
                    slideUnderBlock.view.getBoundingClientRect().height + 20;
                endY += parseInt($(slideUnderBlock.view).css("top"));
            }
            var that = this;
            $(block.view).css({
                "border-color": "#000",
                "background-color": "#fff",
            });
            $(block.view).animate(
                {
                    opacity: 1.0,
                },
                {
                    duration:
                        Math.sqrt(
                            Math.pow(endY - startY, 2) +
                                Math.pow(endX - startX, 2)
                        ) *
                            4 +
                        500,
                    start: function () {
                        that.moving = block;
                        that.movingX = startX;
                        that.movingY = startY;
                        that.updateView();
                    },
                    progress: function (a, p, c) {
                        that.movingX = startX * (1 - p) + endX * p;
                        that.movingY = startY * (1 - p) + endY * p;
                        that.updateView();
                    },
                    complete: function () {
                        delete that.moving;
                        delete that.movingX;
                        delete that.movingY;
                        that.updateView();
                        $(block.view).animate(
                            {
                                opacity: 0.3,
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block.view).css({
                                        opacity: "",
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                    $(block.view).addClass("disabled");
                                },
                            }
                        );
                    },
                }
            );
        } else {
            $(block.view).css({
                "border-color": "#000",
                "background-color": "#fff",
            });
            $(block.view).animate(
                {
                    opacity: 0.3,
                    "border-color": "#d3d3d3",
                    "background-color": "#efefef",
                },
                {
                    duration: 2000,
                    complete: function () {
                        $(block.view).css({
                            "border-color": "",
                            "background-color": "",
                        });
                    },
                }
            );
        }
    }
    // Give the user the indentation
    removeIndentation() {
        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_provided_indent"));
        // Move and resize blocks
        var blockWidth = 200;
        for (var i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            var expandedWidth =
                line.width + line.indent * this.options.pixelsPerIndent + 30;
            blockWidth = Math.max(blockWidth, expandedWidth);
        }
        if (this.options.numbered != undefined) {
            blockWidth += 25;
        }
        this.areaWidth = blockWidth + 22;
        var block, indent;
        var sourceBlocks = this.sourceBlocks();
        for (let i = 0; i < sourceBlocks.length; i++) {
            block = sourceBlocks[i];
            indent = block.solutionIndent();
            if (indent == 0) {
                $(block.view).animate(
                    {
                        width: blockWidth,
                    },
                    {
                        duration: 1000,
                    }
                );
            } else {
                $(block.view).animate(
                    {
                        width:
                            blockWidth - indent * this.options.pixelsPerIndent,
                        "padding-left":
                            indent * this.options.pixelsPerIndent + 10,
                    },
                    {
                        duration: 1000,
                    }
                );
            }
        }
        for (let i = 0; i < this.pairedDivs.length; i++) {
            $(this.pairedDivs[i]).animate(
                {
                    width: blockWidth + 34,
                },
                {
                    duration: 1000,
                }
            );
        }
        var answerBlocks = this.answerBlocks();
        for (let i = 0; i < answerBlocks.length; i++) {
            block = answerBlocks[i];
            indent = block.solutionIndent();
            if (indent == 0) {
                $(block.view).animate(
                    {
                        left: 0,
                        width: blockWidth,
                    },
                    {
                        duration: 1000,
                    }
                );
            } else {
                $(block.view).animate(
                    {
                        left: 0,
                        width:
                            blockWidth - indent * this.options.pixelsPerIndent,
                        "padding-left":
                            indent * this.options.pixelsPerIndent + 10,
                    },
                    {
                        duration: 1000,
                    }
                );
            }
        }
        // Resize answer and source area
        $(this.answerArea).removeClass("answer1 answer2 answer3 answer4");
        $(this.answerArea).addClass("answer");
        this.indent = 0;
        this.noindent = true;
        $(this.sourceArea).animate(
            {
                width: this.areaWidth + 2,
            },
            {
                duration: 1000,
            }
        );
        $(this.answerArea).animate(
            {
                width: this.areaWidth + 2,
            },
            {
                duration: 1000,
            }
        );
        // Change the model (with view)
        $(this.answerArea).animate(
            {
                opacity: 1.0,
            },
            {
                duration: 1100,
                complete: function () {
                    $(this.answerArea).css({
                        opacity: "",
                    });
                    // Update the model
                    for (let i = 0; i < sourceBlocks.length; i++) {
                        sourceBlocks[i].addIndent();
                    }
                    for (let i = 0; i < answerBlocks.length; i++) {
                        answerBlocks[i].addIndent();
                    }
                },
            }
        );
    }

    // first check if any solution blocks are in the source still (left side) and not
    // in the answer
    getSolutionBlockInSource() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var sourceBlocks = this.sourceBlocks();
        var solBlock = null;
        var currBlock = null;

        // loop through sourceBlocks and return a block if it is not in the solution
        for (var i = 0; i < sourceBlocks.length; i++) {
            // get the current block from the source
            currBlock = sourceBlocks[i];

            // if currBlock is in the solution and isn't the first block and isn't in the answer
            if (
                solutionBlocks.indexOf(currBlock) > 0 &&
                answerBlocks.indexOf(currBlock) < 0
            ) {
                return currBlock;
            }
        }
        // didn't find any block in the source that is in the solution
        return null;
    }

    // Find a block2 that is furthest from block1 in the answer
    // don't use the very first block in the solution as block2
    getFurthestBlock() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var maxDist = 0;
        var dist = 0;
        var maxBlock = null;
        var currBlock = null;
        var indexSol = 0;
        var prevBlock = null;
        var indexPrev = 0;

        // loop through the blocks in the answer
        for (var i = 0; i < answerBlocks.length; i++) {
            currBlock = answerBlocks[i];
            indexSol = solutionBlocks.indexOf(currBlock);
            if (indexSol > 0) {
                prevBlock = solutionBlocks[indexSol - 1];
                indexPrev = answerBlocks.indexOf(prevBlock);
                //alert("my index " + i + " index prev " + indexPrev);

                // calculate the distance in the answer
                dist = Math.abs(i - indexPrev);
                if (dist > maxDist) {
                    maxDist = dist;
                    maxBlock = currBlock;
                }
            }
        }
        return maxBlock;
    }

    // Combine blocks together
    combineBlocks() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var sourceBlocks = this.sourceBlocks();

        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_combined_blocks"));
        var block1 = null;
        var block2 = null;

        // get a solution block that is still in source (not answer), if any
        block2 = this.getSolutionBlockInSource();

        // if none in source get block that is furthest from block1
        if (block2 == null) {
            block2 = this.getFurthestBlock();
        }

        // get block1 (above block2) in solution
        var index = solutionBlocks.indexOf(block2);
        block1 = solutionBlocks[index - 1];

        // get index of each in answer
        var index1 = answerBlocks.indexOf(block1);
        var index2 = answerBlocks.indexOf(block2);
        var move = false;

        // if both in answer set move based on if directly above each other
        if (index1 >= 0 && index2 >= 0) {
            move = index1 + 1 !== index2;

            // else if both in source set move again based on if above each other
        } else if (index1 < 0 && index2 < 0) {
            index1 = sourceBlocks.indexOf(block1);
            index2 = sourceBlocks.indexOf(block2);
            move = index1 + 1 !== index2;

            // one in source and one in answer so must move
        } else {
            move = true;
            if (index1 < 0) {
                index1 = sourceBlocks.indexOf(block1);
            }
            if (index2 < 0) {
                index2 = sourceBlocks.indexOf(block2);
            }
        }

        var subtract = index2 < index1; // is block2 higher

        if (move) {
            // Move the block
            var startX = block2.pageXCenter() - 1;
            var startY = block2.pageYCenter();
            var endX = block1.pageXCenter() - 1;
            var endY =
                block1.pageYCenter() +
                block1.view.getBoundingClientRect().height / 2 +
                5;
            if (subtract) {
                endY -= block2.view.getBoundingClientRect().height / 2;
            } else {
                endY += block2.view.getBoundingClientRect().height / 2;
            }
            var that = this;
            $(block2.view).animate(
                {
                    opacity: 1,
                },
                {
                    duration: 1000, // 1 seccond
                    start: function () {
                        $(block1.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        $(block2.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        block2.lines[0].index += 1000;
                        that.moving = block2;
                        that.movingX = startX;
                        that.movingY = startY;
                        that.updateView();
                    },
                    progress: function (a, p, c) {
                        that.movingX = startX * (1 - p) + endX * p;
                        that.movingY = startY * (1 - p) + endY * p;
                        that.updateView();
                    },
                    complete: function () {
                        delete that.moving;
                        delete that.movingX;
                        delete that.movingY;
                        that.updateView();
                        block2.lines[0].index -= 1000;
                        block1.consumeBlock(block2);
                        $(block1.view).animate(
                            {
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block1.view).css({
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                },
                            }
                        );
                    },
                }
            );
        } else {
            $(block2.view).animate(
                {
                    opacity: 1,
                },
                {
                    duration: 1000,
                    start: function () {
                        $(block1.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        $(block2.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                    },
                    complete: function () {
                        block1.consumeBlock(block2);
                        $(block1.view).animate(
                            {
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block1.view).css({
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                },
                            }
                        );
                    },
                }
            );
        }
    }
    // Adapt the problem to be easier
    //  * remove a distractor until none are present
    //  * combine blocks until 3 are left
    makeEasier() {
        var distractorToRemove = this.distractorToRemove();
        if (
            distractorToRemove !== undefined &&
            !distractorToRemove.inSourceArea()
        ) {
            alert($.i18n("msg_parson_remove_incorrect"));
            this.removeDistractor(distractorToRemove);
            this.logMove("removedDistractor-" + distractorToRemove.hash());
        } else {
            var numberOfBlocks = this.numberOfBlocks(false);
            if (numberOfBlocks > 3) {
                alert($.i18n("msg_parson_will_combine"));
                this.combineBlocks();
                this.logMove("combinedBlocks");
            } /*else if(this.numberOfBlocks(true) > 3 && distractorToRemove !==  undefined) {
                alert("Will remove an incorrect code block from source area");
                this.removeDistractor(distractorToRemove);
                this.logMove("removedDistractor-" + distractorToRemove.hash());
            } */ else {
                alert($.i18n("msg_parson_three_blocks_left"));
                this.canHelp = false;
            }
            //if (numberOfBlocks < 5) {
            //	this.canHelp = false;
            //	this.helpButton.disabled = true;
            //}
        }
    }
    // The "Help Me" button was pressed and the problem should be simplified
    helpMe() {
        this.clearFeedback();
        //this.helpCount = -1; // amount to allow for multiple helps in a row
        //if (this.helpCount < 0) {
        //	this.helpCount = Math.max(this.helpCount, -1); // min 1 attempt before more help
        //this.helpButton.disabled = true;
        //}
        // if less than 3 attempts
        if (this.numDistinct < 3) {
            alert($.i18n("msg_parson_atleast_three_attempts"));
        }
        // otherwise give help
        else {
            this.gotHelp = true;
            this.makeEasier();
        }
    }
    /* =====================================================================
    ==== UTILITY ===========================================================
    ===================================================================== */
    // Return a date from a timestamp (either mySQL or JS format)
    dateFromTimestamp(timestamp) {
        var date = new Date(timestamp);
        if (isNaN(date.getTime())) {
            var t = timestamp.split(/[- :]/);
            date = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
        }
        return date;
    }
    // A function for returning a shuffled version of an array
    shuffled(array) {
        var currentIndex = array.length;
        var returnArray = array.slice();
        var temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = returnArray[currentIndex];
            returnArray[currentIndex] = returnArray[randomIndex];
            returnArray[randomIndex] = temporaryValue;
        }
        return returnArray;
    }
    /* =====================================================================
    ==== KEYBOARD INTERACTION ==============================================
    ===================================================================== */
    // When the user has entered the Parsons problem via keyboard mode
    enterKeyboardMode() {
        $(this.keyboardTip).show();
        $(this.sourceLabel).hide();
        $(this.answerLabel).hide();
        this.clearFeedback();
    }
    // When the user leaves the Parsons problem via keyboard mode
    exitKeyboardMode() {
        $(this.keyboardTip).hide();
        $(this.sourceLabel).show();
        $(this.answerLabel).show();
    }
    /* =====================================================================
    ==== VIEW ==============================================================
    ===================================================================== */
    // Clear any feedback from the answer area
    clearFeedback() {
        $(this.answerArea).removeClass("incorrect correct");
        var children = this.answerArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            $(children[i]).removeClass(
                "correctPosition incorrectPosition indentLeft indentRight"
            );
        }
        $(this.messageDiv).hide();
    }
    // Disable the interface
    async disableInteraction() {
        // Disable blocks
        await this.checkServerComplete;
        console.log("disabling blocks");
        if (this.blocks !== undefined) {
            for (var i = 0; i < this.blocks.length; i++) {
                var block = this.blocks[i];
                block.disable();
            }
        }
        // Hide buttons
        $(this.checkButton).hide();
        $(this.resetButton).hide();
    }
    // Based on the moving element, etc., establish the moving state
    //   rest: not moving
    //   source: moving inside source area
    //   answer: moving inside answer area
    //   moving: moving outside areas
    movingState() {
        if (this.moving == undefined) {
            return "rest";
        }
        var x = this.movingX - window.pageXOffset;
        var y = this.movingY - window.pageYOffset;
        // Check if in answer area
        var bounds = this.answerArea.getBoundingClientRect();
        if (
            x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom
        ) {
            return "answer";
        }
        // Check if in source area
        bounds = this.sourceArea.getBoundingClientRect();
        if (
            x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom
        ) {
            return "source";
        }
        return "moving";
    }
    // Update the Parsons view
    // This gets called when dragging a block
    updateView() {
        // Based on the new and the old state, figure out what to update
        var state = this.state;
        var newState = this.movingState();
        var updateSource = true;
        var updateAnswer = true;
        var updateMoving = newState == "moving";
        if (state == newState) {
            if (newState == "rest") {
                updateSource = false;
                updateAnswer = false;
            } else if (newState == "source") {
                updateAnswer = false;
            } else if (newState == "answer") {
                updateSource = false;
            } else if (newState == "moving") {
                updateAnswer = false;
                updateSource = false;
            }
        }
        var movingHeight;
        if (this.moving !== undefined) {
            // Must get height here as detached items don't have height
            movingHeight = $(this.moving.view).outerHeight(true);
            $(this.moving.view).detach();
        }
        var positionTop, width;
        var baseWidth = this.areaWidth - 22;
        // Update the Source Area
        if (updateSource) {
            positionTop = 0;
            var blocks = this.sourceBlocks();
            if (newState == "source") {
                var hasInserted = false;
                var movingBin = this.moving.pairedBin();
                var binForBlock = [];
                for (i = 0; i < blocks.length; i++) {
                    binForBlock.push(blocks[i].pairedBin());
                }
                if (!binForBlock.includes(movingBin)) {
                    movingBin = -1;
                }
                var insertPositions = [];
                if (binForBlock.length == 0) {
                    insertPositions.push(0);
                } else {
                    if (movingBin == -1) {
                        insertPositions.push(0);
                    } else if (binForBlock[0] == movingBin) {
                        insertPositions.push(0);
                    }
                    for (i = 1; i < blocks.length; i++) {
                        if (binForBlock[i - 1] == movingBin) {
                            insertPositions.push(i);
                        } else if (binForBlock[i] == movingBin) {
                            insertPositions.push(i);
                        } else if (
                            movingBin == -1 &&
                            binForBlock[i - 1] != binForBlock[i]
                        ) {
                            insertPositions.push(i);
                        }
                    }
                    if (movingBin == -1) {
                        insertPositions.push(binForBlock.length);
                    } else if (
                        binForBlock[binForBlock.length - 1] == movingBin
                    ) {
                        insertPositions.push(binForBlock.length);
                    }
                }
                var x =
                    this.movingX -
                    this.sourceArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    baseWidth / 2 -
                    11;
                var y =
                    this.movingY -
                    this.sourceArea.getBoundingClientRect().top -
                    window.pageYOffset;
                for (i = 0; i < blocks.length; i++) {
                    var item = blocks[i];
                    var j;
                    if (!hasInserted && insertPositions.includes(i)) {
                        var testHeight = $(item.view).outerHeight(true);
                        for (j = i + 1; j < blocks.length; j++) {
                            if (insertPositions.includes(j)) {
                                break;
                            }
                            testHeight += $(blocks[j].view).outerHeight(true);
                        }
                        if (
                            y - positionTop < movingHeight + testHeight / 2 ||
                            i == insertPositions[insertPositions.length - 1]
                        ) {
                            hasInserted = true;
                            this.sourceArea.insertBefore(
                                this.moving.view,
                                item.view
                            );
                            $(this.moving.view).css({
                                left: x,
                                top: y - movingHeight / 2,
                                width: baseWidth,
                                "z-index": 3,
                            });
                            positionTop = positionTop + movingHeight;
                        }
                    }
                    $(item.view).css({
                        left: 0,
                        top: positionTop,
                        width: baseWidth,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(item.view).outerHeight(true);
                }
                if (!hasInserted) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-source"
                    );
                    $(this.moving.view).css({
                        left: x,
                        top: y - $(this.moving.view).outerHeight(true) / 2,
                        width: baseWidth,
                        "z-index": 3,
                    });
                }
            } else {
                for (var i = 0; i < blocks.length; i++) {
                    item = blocks[i];
                    $(item.view).css({
                        left: 0,
                        top: positionTop,
                        width: baseWidth,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(item.view).outerHeight(true);
                }
            }
            // Update the Paired Distractor Indicators
            for (i = 0; i < this.pairedBins.length; i++) {
                var bin = this.pairedBins[i];
                var matching = [];
                for (j = 0; j < blocks.length; j++) {
                    block = blocks[j];
                    if (block.matchesBin(bin)) {
                        matching.push(block);
                    }
                }
                var div = this.pairedDivs[i];
                if (matching.length == 0) {
                    $(div).hide();
                } else {
                    $(div).show();
                    var height = -5;
                    height += parseInt(
                        $(matching[matching.length - 1].view).css("top")
                    );
                    height -= parseInt($(matching[0].view).css("top"));
                    height += $(matching[matching.length - 1].view).outerHeight(
                        true
                    );
                    $(div).css({
                        left: -6,
                        top: $(matching[0].view).css("top"),
                        width: baseWidth + 34,
                        height: height,
                        "z-index": 1,
                        "text-indent": -30,
                        "padding-top": (height - 70) / 2,
                        overflow: "visible",
                        "font-size": 43,
                        "vertical-align": "middle",
                        color: "#7e7ee7",
                    });
                    $(div).html(
                        "<span id= 'st' style = 'vertical-align: middle; font-weight: bold; font-size: 15px'>or</span>{"
                    );
                }
                if (matching.length == 1) {
                    $(div).html("");
                }
            }
        }
        // Update the Answer Area
        if (updateAnswer) {
            var block, indent;
            positionTop = 0;
            width =
                this.areaWidth +
                this.indent * this.options.pixelsPerIndent -
                22;
            var blocks = this.answerBlocks();
            if (newState == "answer") {
                var hasInserted = false;
                var x =
                    this.movingX -
                    this.answerArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    baseWidth / 2 -
                    11;
                var movingIndent = Math.round(x / this.options.pixelsPerIndent);
                if (movingIndent < 0) {
                    movingIndent = 0;
                } else if (movingIndent > this.indent) {
                    movingIndent = this.indent;
                } else {
                    x = movingIndent * this.options.pixelsPerIndent;
                }
                var y =
                    this.movingY -
                    this.answerArea.getBoundingClientRect().top -
                    window.pageYOffset;
                this.moving.indent = movingIndent;
                for (i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    if (!hasInserted) {
                        if (
                            y - positionTop <
                            (movingHeight + $(block.view).outerHeight(true)) / 2
                        ) {
                            hasInserted = true;
                            this.answerArea.insertBefore(
                                this.moving.view,
                                block.view
                            );
                            $(this.moving.view).css({
                                left: x,
                                top: y - movingHeight / 2,
                                width: baseWidth,
                                "z-index": 3,
                            });
                            positionTop = positionTop + movingHeight;
                        }
                    }
                    indent = block.indent * this.options.pixelsPerIndent;
                    $(block.view).css({
                        left: indent,
                        top: positionTop,
                        width: width - indent,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(block.view).outerHeight(true);
                }
                if (!hasInserted) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-answer"
                    );
                    $(this.moving.view).css({
                        left: x,
                        top: y - $(this.moving.view).outerHeight(true) / 2,
                        width: baseWidth,
                        "z-index": 3,
                    });
                }
            } else {
                for (let i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    indent = block.indent * this.options.pixelsPerIndent;
                    $(block.view).css({
                        left: indent,
                        top: positionTop,
                        width: width - indent,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(block.view).outerHeight(true);
                }
            }
        }
        // Update the Moving Area
        if (updateMoving) {
            // Add it to the lowest place in the source area
            movingBin = this.moving.pairedBin();
            if (movingBin == -1) {
                $(this.moving.view).appendTo("#" + this.counterId + "-source");
            } else {
                var before;
                blocks = this.sourceBlocks;
                for (i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    if (block.pairedBin() == movingBin) {
                        before = i + 1;
                    }
                }
                if (before == undefined || before == blocks.length) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-source"
                    );
                } else {
                    this.sourceArea.insertBefore(
                        this.moving.view,
                        blocks[before].view
                    );
                }
            }
            // Place in the middle of the mouse cursor
            $(this.moving.view).css({
                left:
                    this.movingX -
                    this.sourceArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    $(this.moving.view).outerWidth(true) / 2,
                top:
                    this.movingY -
                    this.sourceArea.getBoundingClientRect().top -
                    window.pageYOffset -
                    movingHeight / 2,
                width: baseWidth,
                "z-index": 3,
            });
        }
        state = newState;
        this.state = state;
    }
    addBlockLabels(blocks) {
        var bin = -1;
        var binCount = 0;
        var binChildren = 0;
        var blocksNotInBins = 0;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].pairedBin() == -1) {
                blocksNotInBins++;
            }
        }
        for (let i = 0; i < blocks.length; i++) {
            var currentBin = blocks[i].pairedBin();
            if (currentBin == -1 || currentBin != bin) {
                bin = currentBin;
                binChildren = 0;
                binCount++;
            }
            var label =
                "" +
                binCount +
                (currentBin != -1
                    ? String.fromCharCode(97 + binChildren)
                    : " ");
            if (
                binCount < 10 &&
                blocksNotInBins + this.pairedBins.length >= 10
            ) {
                label += " ";
            }
            blocks[i].addLabel(label, 0);
            binChildren++;
        }
        if (blocksNotInBins + this.pairedBins.length >= 10) {
            this.areaWidth += 5;
            $(this.sourceArea).css({
                width: $(this.sourceArea).width() + 5,
            });
            $(this.answerArea).css({
                width: $(this.answerArea).width() + 5,
            });
        }
    }
    // Put all the blocks back into the source area, reshuffling as necessary
    resetView() {
        // Clear everything
        this.clearFeedback();
        var scrollTop = document.body.scrollTop;
        var block;
        for (let i = 0; i < this.blocks.length; i++) {
            block = this.blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                var children = $(block.lines[j].view).find(".block-label");
                for (var c = 0; c < children.length; c++) {
                    children[c].remove();
                }
            }
            block.destroy();
            $(this.blocks[i].view).detach();
        }
        delete this.blocks;
        this.blockIndex = 0;
        for (let i = 0; i < this.pairedDivs.length; i++) {
            $(this.pairedDivs[i]).detach();
        }
        $(this.sourceArea).attr("style", "");
        $(this.answerArea).removeClass();
        $(this.answerArea).attr("style", "");
        this.noindent = this.options.noindent;
        // Reinitialize
        if (this.hasSolved) {
            this.checkCount = 0;
            this.numDistinct = 0;
            this.hasSolved = false;
            if (this.options.adaptive) {
                this.canHelp = true;
            }
            //this.helpCount = -3; // enable after 3 failed attempts
            //this.helpButton.disabled = true;
            localStorage.setItem(this.adaptiveId + "Problem", this.divid);
            localStorage.setItem(
                this.adaptiveId + this.divid + "Count",
                this.checkCount
            );
            localStorage.setItem(this.adaptiveId + "Solved", false);
        }
        this.initializeAreas(this.blocksFromSource(), [], {});
        this.initializeInteractivity();
        document.body.scrollTop = scrollTop;
    }
}

Parsons.counter = 0;

$(document).on("runestone:login-complete", function () {
    $("[data-component=parsons]").each(function (index) {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            try {
                prsList[this.id] = new Parsons({
                    orig: this,
                    useRunestoneServices: eBookConfig.useRunestoneServices,
                });
            } catch (err) {
                console.log(`Error rendering Parsons Problem ${this.id}
                             Details: ${err}`);
                console.log(err.stack);
            }
        }
    });
});


/***/ }),

/***/ 404:
/*!**********************************************!*\
  !*** ./runestone/parsons/js/parsonsBlock.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParsonsBlock)
/* harmony export */ });
/* harmony import */ var _hammer_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hammer.min.js */ 97430);
/* harmony import */ var _hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hammer_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* =====================================================================
==== ParsonsBlock Object ===============================================
======== The model and view of a code block.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
======== lines: an array of ParsonsLine in this block
======== indent: indent based on movement
======== view: an element for viewing this object
======== labels: [label, line] the labels numbering the block and the lines they go on
======== hammer: the controller based on hammer.js
===================================================================== */



// Initialize based on the problem and the lines
class ParsonsBlock {
    constructor(problem, lines) {
        this.problem = problem;
        this.lines = lines;
        this.indent = 0;
        this.labels = [];
        // Create view, adding view of lines and updating indent
        var view = document.createElement("div");
        view.id = problem.counterId + "-block-" + problem.blockIndex;
        problem.blockIndex += 1;
        $(view).addClass("block");
        var sharedIndent = lines[0].indent;
        for (let i = 1; i < lines.length; i++) {
            sharedIndent = Math.min(sharedIndent, lines[i].indent);
        }
        var lineDiv = document.createElement("div");
        $(lineDiv).addClass("lines");
        $(view).append(lineDiv);
        for (let i = 0; i < lines.length; i++) {
            var line = lines[i];
            var lineIndent;
            if (problem.noindent) {
                lineIndent = line.indent;
            } else {
                lineIndent = line.indent - sharedIndent;
            }
            $(line.view).removeClass("indent1 indent2 indent3 indent4");
            if (lineIndent > 0) {
                $(line.view).addClass("indent" + lineIndent);
            }
            lineDiv.appendChild(line.view);
        }
        var labelDiv = document.createElement("div");
        $(labelDiv).addClass("labels");
        if (this.problem.options.numbered == "left") {
            $(lineDiv).addClass("border_left");
            $(view).prepend(labelDiv);
            $(view).css({
                "justify-content": "flex-start",
            });
        } else if (this.problem.options.numbered == "right") {
            $(labelDiv).addClass("border_left");
            $(labelDiv).css({
                float: "right",
            });
            $(view).css({
                "justify-content": "space-between",
            });
            $(view).append(labelDiv);
        }
        this.view = view;
    }
    // Add a line (from another block) to this block
    addLine(line) {
        $(line.view).removeClass("indent1 indent2 indent3 indent4");
        if (this.problem.noindent) {
            if (line.indent > 0) {
                $(line.view).addClass("indent" + line.indent);
            }
        } else {
            var lines = this.lines;
            var sharedIndent = lines[0].indent;
            for (let i = 1; i < lines.length; i++) {
                sharedIndent = Math.min(sharedIndent, lines[i].indent);
            }
            if (sharedIndent < line.indent) {
                $(line.view).addClass("indent" + (line.indent - sharedIndent));
            } else if (sharedIndent > line.indent) {
                for (let i = 0; i < lines.length; i++) {
                    $(lines[i].view).removeClass(
                        "indent1 indent2 indent3 indent4"
                    );
                    $(lines[i].view).addClass(
                        "indent" + (lines[i].indent - line.indent)
                    );
                }
            }
        }
        this.lines.push(line);
        $(this.view).children(".lines")[0].appendChild(line.view);
    }
    // Add the contents of that block to myself and then delete that block
    consumeBlock(block) {
        for (let i = 0; i < block.lines.length; i++) {
            this.addLine(block.lines[i]);
        }
        if ($(block.view).attr("tabindex") == "0") {
            this.makeTabIndex();
        }
        $(block.view).detach();
        var newBlocks = [];
        for (let i = 0; i < this.problem.blocks.length; i++) {
            if (this.problem.blocks[i] !== block) {
                newBlocks.push(this.problem.blocks[i]);
            }
        }
        for (let i = 0; i < block.labels.length; i++) {
            this.addLabel(
                block.labels[i][0],
                this.lines.length - block.lines.length + block.labels[i][1]
            );
        }
        this.problem.blocks = newBlocks;
        this.problem.state = undefined;
        this.problem.updateView();
    }
    // Update the model and view when block is converted to contain indent
    addIndent() {
        // Update the lines model / view
        for (let i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            if (line.indent > 0) {
                $(line.view).removeClass("indent1 indent2 indent3 indent4");
                $(line.view).addClass("indent" + line.indent);
            }
        }
        // Update the block model / view
        this.indent = 0;
        $(this.view).css({
            "padding-left": "",
            width: this.problem.areaWidth - 22,
        });
    }
    // Add a label to block and update its view
    addLabel(label, line) {
        var div = document.createElement("div");
        $(div).addClass("block-label");
        if (this.problem.options.numbered == "right") {
            $(div).addClass("right-label");
        }
        if (this.problem.options.numbered == "left") {
            $(div).addClass("left-label");
        }
        $(div).append(document.createTextNode(label));
        $(this.view).children(".labels")[0].append(div);
        if (this.labels.length != 0) {
            $(div).css(
                "margin-top",
                (line - this.labels[this.labels.length - 1][1] - 1) *
                    this.lines[line].view.offsetHeight
            );
        }
        this.labels.push([label, line]);
    }
    // Initialize Interactivity
    initializeInteractivity() {
        if ($(this.view).hasClass("disabled")) {
            return this;
        }
        $(this.view).attr("tabindex", "-1");
        this.hammer = new (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().Manager)(this.view, {
            recognizers: [
                [
                    (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().Pan),
                    {
                        direction: (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().DIRECTION_ALL),
                        threshold: 0,
                        pointers: 1,
                    },
                ],
            ],
        });
        var that = this;
        this.hammer.on("panstart", function (event) {
            that.panStart(event);
        });
        this.hammer.on("panend", function (event) {
            that.panEnd(event);
        });
        this.hammer.on("panmove", function (event) {
            that.panMove(event);
        });
    }
    // Return a boolean as to whether this block is able to be selected
    enabled() {
        return $(this.view).attr("tabindex") !== undefined;
    }
    // Return a boolean as to whether this block is a distractor
    isDistractor() {
        return this.lines[0].distractor;
    }
    // Return a boolean as to whether this block is in the source area
    inSourceArea() {
        var children = this.problem.sourceArea.childNodes;
        for (let i = 0; i < children.length; i++) {
            var item = children[i];
            if (item.id == this.view.id) {
                return true;
            }
        }
        return false;
    }
    // Return the page X position of the center of the view
    pageXCenter() {
        var boundingRect = this.view.getBoundingClientRect();
        var pageXCenter =
            window.pageXOffset + boundingRect.left + boundingRect.width / 2;
        return pageXCenter;
    }
    // Return the page Y position of the center of the view
    pageYCenter() {
        var boundingRect = this.view.getBoundingClientRect();
        var pageYCenter =
            window.pageYOffset + boundingRect.top + boundingRect.height / 2;
        return pageYCenter;
    }
    // Of all the line indents, return the minimum value
    minimumLineIndent() {
        var minimumLineIndent = this.lines[0].indent;
        for (let i = 1; i < this.lines.length; i++) {
            minimumLineIndent = Math.min(
                this.lines[i].indent,
                minimumLineIndent
            );
        }
        return minimumLineIndent;
    }
    // Return the last block in the source area that matches the paired bin it is in
    slideUnderBlock() {
        var sourceBlocks = this.problem.sourceBlocks();
        if (sourceBlocks.length == 0) {
            return undefined;
        }
        var pairedBin = this.pairedBin();
        if (pairedBin == -1) {
            return sourceBlocks[sourceBlocks.length - 1];
        }
        for (let i = sourceBlocks.length - 1; i >= 0; i--) {
            var block = sourceBlocks[i];
            if (block.pairedBin() == pairedBin) {
                return block;
            }
        }
        return sourceBlocks[sourceBlocks.length - 1];
    }
    // Return which paired bin it is in (-1) if not
    pairedBin() {
        var pairedBins = this.problem.pairedBins;
        for (var i = 0; i < pairedBins.length; i++) {
            if (this.matchesBin(pairedBins[i])) {
                return i;
            }
        }
        return -1;
    }
    // Return true if all lines are in that bin
    matchesBin(bin) {
        for (var i = 0; i < this.lines.length; i++) {
            var test = this.lines[i].index;
            if (bin.indexOf(test) == -1) {
                return false;
            }
        }
        return true;
    }
    // Return a list of indexes where this block could be inserted before
    validSourceIndexes() {
        var blocks = this.problem.sourceBlocks();
        var indexes = [];
        var pairedBin = this.pairedBin();
        var i, lastBin;
        if (pairedBin >= 0) {
            for (i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if (block.view.id !== this.view.id) {
                    var blockBin = block.pairedBin();
                    if (blockBin == pairedBin) {
                        indexes.push(i);
                    } else if (lastBin == pairedBin) {
                        indexes.push(i);
                    }
                    lastBin = blockBin;
                }
            }
            if (lastBin == pairedBin) {
                indexes.push(blocks.length);
            }
            if (indexes.length > 0) {
                return indexes;
            }
        }
        for (i = 0; i < blocks.length; i++) {
            let block = blocks[i];
            if (block.view.id !== this.view.id) {
                let blockBin = block.pairedBin();
                if (blockBin !== lastBin) {
                    indexes.push(i);
                } else if (blockBin == -1) {
                    indexes.push(i);
                }
                lastBin = blockBin;
            }
        }
        indexes.push(blocks.length);
        return indexes;
    }
    // A measure of how far the middle of this block is vertically positioned
    verticalOffset() {
        var verticalOffset;
        if (this.inSourceArea()) {
            verticalOffset = this.problem.sourceArea.getBoundingClientRect()
                .top;
        } else {
            verticalOffset = this.problem.answerArea.getBoundingClientRect()
                .top;
        }
        verticalOffset =
            this.view.getBoundingClientRect().top +
            this.view.getBoundingClientRect().bottom -
            verticalOffset * 2;
        return verticalOffset;
    }
    // This block just gained textual focus
    newFocus() {
        if (this.problem.textFocus == undefined) {
            this.problem.enterKeyboardMode();
            this.problem.textFocus = this;
            this.problem.textMove = false;
            $(this.view).addClass("down");
        } else if (this.problem.textFocus == this) {
            if (this.problem.textMove) {
                $(this.view).addClass("up");
            } else {
                $(this.view).addClass("down");
            }
        } else {
            // already in keyboard mode
            this.problem.textFocus = this;
            this.problem.textMove = false;
            $(this.view).addClass("down");
        }
        this.problem.textMoving = false;
    }
    // This block just lost textual focus
    releaseFocus() {
        $(this.view).removeClass("down up");
        if (this.problem.textFocus == this) {
            if (!this.problem.textMoving) {
                // exit out of problem but stay way into problem
                this.problem.textFocus = undefined;
                if (this.problem.textMove) {
                    this.problem.logMove("kmove");
                    this.problem.textMove = false;
                }
                this.problem.exitKeyboardMode();
            }
        } else {
            // become selectable, but not active
            $(this.view).attr("tabindex", "-1");
            $(this.view).unbind("focus");
            $(this.view).unbind("blur");
            $(this.view).unbind("keydown");
        }
    }
    // Make this block into the keyboard entry point
    makeTabIndex() {
        $(this.view).attr("tabindex", "0");
        var that = this;
        $(this.view).focus(function () {
            that.newFocus();
        });
        $(this.view).blur(function () {
            that.releaseFocus();
        });
        $(this.view).keydown(function (event) {
            that.keyDown(event);
        });
    }
    // Called to disable interaction for the future
    disable() {
        if (this.hammer !== undefined) {
            this.hammer.set({ enable: false });
        }
        if ($(this.view).attr("tabindex") == "0") {
            this.releaseFocus();
            $(this.view).removeAttr("tabindex");
            this.problem.initializeTabIndex();
        } else {
            $(this.view).removeAttr("tabindex");
        }
    }
    // Enable functionality after reset button has been pressed
    resetView() {
        if (this.hammer !== undefined) {
            this.hammer.set({ enable: true });
        }
        if (!$(this.view)[0].hasAttribute("tabindex")) {
            $(this.view).attr("tabindex", "-1");
        }
        $(this.view).css({ opacity: "" });
    }
    // Called to destroy interaction for the future
    destroy() {
        if (this.hammer !== undefined) {
            this.hammer.destroy();
            delete this.hammer;
        }
        if ($(this.view).attr("tabindex") == "0") {
            this.releaseFocus();
        }
        $(this.view).removeAttr("tabindex");
    }
    // Called when a block is picked up
    panStart(event) {
        this.problem.clearFeedback();
        if (this.problem.started == undefined) {
            // log the first time that something gets moved
            this.problem.started = true;
            this.problem.logMove("start");
        }
        if (this.problem.textFocus !== undefined) {
            // stop text focus when dragging
            this.problem.textFocus.releaseFocus();
        }
        this.problem.moving = this;
        // Update the view
        this.problem.movingX = event.srcEvent.pageX;
        this.problem.movingY = event.srcEvent.pageY;
        this.problem.updateView();
    }
    // Called when a block is dropped
    panEnd(event) {
        this.problem.isAnswered = true;
        delete this.problem.moving;
        delete this.problem.movingX;
        delete this.problem.movingY;
        this.problem.updateView();
        this.problem.logMove("move");
    }
    // Called when a block is moved
    panMove(event) {
        // Update the view
        this.problem.movingX = event.srcEvent.pageX;
        this.problem.movingY = event.srcEvent.pageY;
        this.problem.updateView();
    }
    // Handle a keypress event when in focus
    keyDown(event) {
        if (this.problem.started == undefined) {
            // log the first time that something gets moved
            this.problem.started = true;
            this.problem.logMove("kstart");
        }
        switch (event.keyCode) {
            case 37: // left
                if (this.problem.textMove) {
                    this.moveLeft();
                } else {
                    this.selectLeft();
                }
                break;
            case 38: // up
                if (this.problem.textMove) {
                    this.moveUp();
                } else {
                    this.selectUp();
                }
                event.preventDefault();
                break;
            case 39: // right
                if (this.problem.textMove) {
                    this.moveRight();
                } else {
                    this.selectRight();
                }
                event.preventDefault();
                break;
            case 40: // down
                if (this.problem.textMove) {
                    this.moveDown();
                } else {
                    this.selectDown();
                }
                event.preventDefault();
                break;
            case 32: // space
                this.toggleMove();
                event.preventDefault();
                break;
            case 13: // enter
                this.toggleMove();
                event.preventDefault();
                break;
        }
    }
    // Move block left
    moveLeft() {
        var index, block;
        if (!this.inSourceArea()) {
            if (this.indent == 0) {
                // move to source area
                var blocks = this.problem.sourceBlocks();
                var offset = this.verticalOffset();
                var validSourceIndexes = this.validSourceIndexes();
                for (var i = 0; i < validSourceIndexes.length; i++) {
                    index = validSourceIndexes[i];
                    if (index == blocks.length) {
                        this.problem.textMoving = true;
                        this.problem.sourceArea.appendChild(this.view);
                        $(this.view).focus();
                        this.problem.state = undefined;
                        this.problem.updateView();
                        return this;
                    } else {
                        block = blocks[index];
                        if (block.verticalOffset() >= offset) {
                            break;
                        }
                    }
                }
                this.problem.textMoving = true;
                this.problem.sourceArea.insertBefore(this.view, block.view);
                $(this.view).focus();
            } else {
                // reduce indent
                this.indent = this.indent - 1;
            }
            this.problem.state = undefined;
            this.problem.updateView();
        }
    }
    // Move block up
    moveUp() {
        if (this.inSourceArea()) {
            let blocks = this.problem.sourceBlocks();
            var offset = this.verticalOffset();
            var validSourceIndexes = this.validSourceIndexes();
            for (let i = 0; i < validSourceIndexes.length; i++) {
                var index =
                    validSourceIndexes[validSourceIndexes.length - 1 - i];
                if (index < blocks.length) {
                    var block = blocks[index];
                    if (block.verticalOffset() < offset) {
                        this.problem.textMoving = true;
                        this.problem.sourceArea.insertBefore(
                            this.view,
                            block.view
                        );
                        $(this.view).focus();
                        this.problem.state = undefined;
                        this.problem.updateView();
                        return this;
                    }
                }
            }
        } else {
            let blocks = this.problem.answerBlocks();
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    if (i == 0) {
                        return this;
                    }
                    this.problem.textMoving = true;
                    this.problem.answerArea.insertBefore(
                        this.view,
                        blocks[i - 1].view
                    );
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                }
            }
        }
    }
    // Move block right
    moveRight() {
        if (this.inSourceArea()) {
            // move to answer area
            this.indent = 0;
            var offset = this.verticalOffset();
            var answerBlocks = this.problem.answerBlocks();
            for (var i = 0; i < answerBlocks.length; i++) {
                var item = answerBlocks[i];
                var itemOffset = item.verticalOffset();
                if (itemOffset >= offset) {
                    this.problem.textMoving = true;
                    this.problem.answerArea.insertBefore(this.view, item.view);
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                }
            }
            this.problem.textMoving = true;
            this.problem.answerArea.appendChild(this.view);
            $(this.view).focus();
            this.problem.state = undefined;
            this.problem.updateView();
        } else {
            // in answer area: increase the indent
            if (this.indent !== this.problem.indent) {
                this.indent = this.indent + 1;
                this.problem.state = undefined;
                this.problem.updateView();
            }
        }
    }
    // Move block down
    moveDown() {
        if (this.inSourceArea()) {
            let blocks = this.problem.sourceBlocks();
            var validSourceIndexes = this.validSourceIndexes();
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    var myIndex = i;
                }
            }
            for (let i = 0; i < validSourceIndexes.length; i++) {
                var index = validSourceIndexes[i];
                if (index == blocks.length) {
                    this.problem.textMoving = true;
                    this.problem.sourceArea.appendChild(this.view);
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                } else if (index - myIndex > 1) {
                    this.problem.textMoving = true;
                    this.problem.sourceArea.insertBefore(
                        this.view,
                        blocks[index].view
                    );
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                }
            }
        } else {
            let blocks = this.problem.answerBlocks();
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    if (i == blocks.length - 1) {
                        return this;
                    } else if (i == blocks.length - 2) {
                        this.problem.textMoving = true;
                        this.problem.answerArea.appendChild(this.view);
                    } else {
                        this.problem.textMoving = true;
                        this.problem.answerArea.insertBefore(
                            this.view,
                            blocks[i + 2].view
                        );
                    }
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                }
            }
        }
    }
    // Move selection left
    selectLeft() {
        if (!this.inSourceArea()) {
            var offset = this.verticalOffset();
            var sourceBlocks = this.problem.enabledSourceBlocks();
            if (sourceBlocks.length == 0) {
                return this;
            }
            var chooseNext = sourceBlocks[0];
            var chooseOffset = chooseNext.verticalOffset() - offset;
            for (var i = 1; i < sourceBlocks.length; i++) {
                var item = sourceBlocks[i];
                var itemOffset = item.verticalOffset() - offset;
                if (Math.abs(itemOffset) < Math.abs(chooseOffset)) {
                    chooseNext = item;
                    chooseOffset = itemOffset;
                }
            }
            this.problem.textFocus = chooseNext;
            chooseNext.makeTabIndex();
            $(chooseNext.view).focus();
        }
    }
    // Move selection up
    selectUp() {
        var chooseNext = false;
        var blocks;
        if (this.inSourceArea()) {
            blocks = this.problem.enabledSourceBlocks();
        } else {
            blocks = this.problem.enabledAnswerBlocks();
        }
        for (var i = blocks.length - 1; i >= 0; i--) {
            var item = blocks[i];
            if (chooseNext) {
                this.problem.textFocus = item;
                item.makeTabIndex();
                $(item.view).focus();
                return this;
            } else {
                if (item.view.id == this.view.id) {
                    chooseNext = true;
                }
            }
        }
    }
    // Move selection right
    selectRight() {
        if (this.inSourceArea()) {
            var offset = this.verticalOffset();
            var blocks = this.problem.enabledAnswerBlocks();
            if (blocks.length == 0) {
                return this;
            }
            var chooseNext = blocks[0];
            var chooseOffset = chooseNext.verticalOffset() - offset;
            for (var i = 1; i < blocks.length; i++) {
                var item = blocks[i];
                var itemOffset = item.verticalOffset() - offset;
                if (Math.abs(itemOffset) < Math.abs(chooseOffset)) {
                    chooseNext = item;
                    chooseOffset = itemOffset;
                }
            }
            this.problem.textFocus = chooseNext;
            chooseNext.makeTabIndex();
            $(chooseNext.view).focus();
        }
    }
    // Move selection down
    selectDown() {
        var chooseNext = false;
        var blocks;
        if (this.inSourceArea()) {
            blocks = this.problem.enabledSourceBlocks();
        } else {
            blocks = this.problem.enabledAnswerBlocks();
        }
        for (var i = 0; i < blocks.length; i++) {
            var item = blocks[i];
            if (chooseNext) {
                this.problem.textFocus = item;
                item.makeTabIndex();
                $(item.view).focus();
                return this;
            } else {
                if (item.view.id == this.view.id) {
                    chooseNext = true;
                }
            }
        }
    }
    // Toggle whether to move this block
    toggleMove() {
        if (this.problem.textMove) {
            $(this.view).removeClass("up");
            $(this.view).addClass("down");
            this.problem.textMove = false;
            this.problem.logMove("kmove");
        } else {
            $(this.view).removeClass("down");
            $(this.view).addClass("up");
            this.problem.textMove = true;
        }
    }
    // Answer a string that represents this codeblock for saving
    hash() {
        var hash = "";
        for (var i = 0; i < this.lines.length; i++) {
            hash += this.lines[i].index + "_";
        }
        hash += this.indent;
        return hash;
    }
    // Answer what the indent should be for the solution
    solutionIndent() {
        var sharedIndent = this.lines[0].indent;
        for (var i = 1; i < this.lines.length; i++) {
            sharedIndent = Math.min(sharedIndent, this.lines[i].indent);
        }
        return sharedIndent;
    }
}


/***/ }),

/***/ 18423:
/*!*********************************************!*\
  !*** ./runestone/parsons/js/parsonsLine.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParsonsLine)
/* harmony export */ });
/* =====================================================================
==== ParsonsLine Object ================================================
======== The model and view of a line of code.
======== Based on what is specified in the problem.
======== ParsonBlock objects have one or more of these.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
======== index: the index of the line in the problem
======== text: the text of the code line
======== indent: the indent level
======== view: an element for viewing this object
======== distractor: whether it is a distractor
======== paired: whether it is a paired distractor
======== groupWithNext: whether it is grouped with the following line
======== width: the pixel width when rendered
============ in the initial grouping
===================================================================== */
// Initialize from codestring

class ParsonsLine {
    constructor(problem, codestring) {
        this.problem = problem;
        this.index = problem.lines.length;
        var trimmed = codestring.replace(/\s*$/, "");
        this.text = trimmed.replace(/^\s*/, "");
        this.indent = trimmed.length - this.text.length;
        // Create the View
        var view;
        if (problem.options.language == "natural" || problem.options.language == "math") {
            view = document.createElement("p");
        } else {
            view = document.createElement("code");
            $(view).addClass(problem.options.prettifyLanguage);
        }
        view.id = problem.counterId + "-line-" + this.index;
        view.innerHTML += this.text;
        this.view = view;
        problem.lines.push(this);
    }
    // Initialize what width the line would naturally have (without indent)
    initializeWidth() {
        // this.width does not appear to be used anywhere later
        // since changing the value of this.width appears to have no effect. - Vincent Qiu (September 2020)
        this.width =
            $(this.view).outerWidth(true) -
            this.problem.options.pixelsPerIndent * this.indent;

        // Pass this information on to be used in class Parsons function initializeAreas
        // to manually determine appropriate widths - Vincent Qiu (September 2020)
        this.view.fontSize = window
            .getComputedStyle(this.view, null)
            .getPropertyValue("font-size");
        this.view.pixelsPerIndent = this.problem.options.pixelsPerIndent;
        this.view.indent = this.indent;

        // Figure out which typeface will be rendered by comparing text widths to browser default - Vincent Qiu (September 2020)
        var tempCanvas = document.createElement("canvas");
        var tempCanvasCtx = tempCanvas.getContext("2d");
        var possibleFonts = window
            .getComputedStyle(this.view, null)
            .getPropertyValue("font-family")
            .split(", ");
        var fillerText = "abcdefghijklmnopqrstuvwxyz0123456789,./!@#$%^&*-+";
        tempCanvasCtx.font = this.view.fontSize + " serif";
        var serifWidth = tempCanvasCtx.measureText(fillerText).width;
        for (let i = 0; i < possibleFonts.length; i++) {
            if (possibleFonts[i].includes('"')) {
                possibleFonts[i] = possibleFonts[i].replaceAll('"', "");
            }
            if (possibleFonts[i].includes("'")) {
                possibleFonts[i] = possibleFonts[i].replaceAll("'", "");
            }
            tempCanvasCtx.font = this.view.fontSize + " " + possibleFonts[i];
            if (tempCanvasCtx.measureText(fillerText).width !== serifWidth) {
                this.view.fontFamily = possibleFonts[i];
                break;
            }
        }
    }
    // Answer the block that this line is currently in
    block() {
        for (let i = 0; i < this.problem.blocks.length; i++) {
            var block = this.problem.blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                if (block.lines[j] === this) {
                    return block;
                }
            }
        }
        return undefined;
    }
    // Answer the indent based on the view
    viewIndent() {
        if (this.problem.noindent) {
            return this.indent;
        } else {
            var block = this.block();
            return this.indent - block.solutionIndent() + block.indent;
        }
    }
}


/***/ }),

/***/ 87904:
/*!******************************************!*\
  !*** ./runestone/parsons/js/prettify.js ***!
  \******************************************/
/***/ (() => {

function H() {
    var x =
        navigator &&
        navigator.userAgent &&
        /\bMSIE 6\./.test(navigator.userAgent);
    H = function() {
        return x;
    };
    return x;
}
(function() {
    function x(b) {
        b = b.split(/ /g);
        var a = {};
        for (var c = b.length; --c >= 0; ) {
            var d = b[c];
            if (d) a[d] = null;
        }
        return a;
    }
    var y = "break continue do else for if return while ",
        U =
            y +
            "auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile ",
        D =
            U +
            "catch class delete false import new operator private protected public this throw true try ",
        I =
            D +
            "alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename typeof using virtual wchar_t where ",
        J =
            D +
            "boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",
        V =
            J +
            "as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
        K =
            D +
            "debugger eval export function get null set undefined var with Infinity NaN ",
        L =
            "caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
        M =
            y +
            "and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",
        N =
            y +
            "alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",
        O = y + "case done elif esac eval fi function in local set then until ",
        W = I + V + K + L + M + N + O;
    function X(b) {
        return (b >= "a" && b <= "z") || (b >= "A" && b <= "Z");
    }
    function u(b, a, c, d) {
        b.unshift(c, d || 0);
        try {
            a.splice.apply(a, b);
        } finally {
            b.splice(0, 2);
        }
    }
    var Y = (function() {
            var b = [
                    "!",
                    "!=",
                    "!==",
                    "#",
                    "%",
                    "%=",
                    "&",
                    "&&",
                    "&&=",
                    "&=",
                    "(",
                    "*",
                    "*=",
                    "+=",
                    ",",
                    "-=",
                    "->",
                    "/",
                    "/=",
                    ":",
                    "::",
                    ";",
                    "<",
                    "<<",
                    "<<=",
                    "<=",
                    "=",
                    "==",
                    "===",
                    ">",
                    ">=",
                    ">>",
                    ">>=",
                    ">>>",
                    ">>>=",
                    "?",
                    "@",
                    "[",
                    "^",
                    "^=",
                    "^^",
                    "^^=",
                    "{",
                    "|",
                    "|=",
                    "||",
                    "||=",
                    "~",
                    "break",
                    "case",
                    "continue",
                    "delete",
                    "do",
                    "else",
                    "finally",
                    "instanceof",
                    "return",
                    "throw",
                    "try",
                    "typeof"
                ],
                a =
                    "(?:(?:(?:^|[^0-9.])\\.{1,3})|(?:(?:^|[^\\+])\\+)|(?:(?:^|[^\\-])-)";
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                a += X(d.charAt(0))
                    ? "|\\b" + d
                    : "|" + d.replace(/([^=<>:&])/g, "\\$1");
            }
            a += "|^)\\s*$";
            return new RegExp(a);
        })(),
        P = /&/g,
        Q = /</g,
        R = />/g,
        Z = /\"/g;
    function $(b) {
        return b
            .replace(P, "&amp;")
            .replace(Q, "&lt;")
            .replace(R, "&gt;")
            .replace(Z, "&quot;");
    }
    function E(b) {
        return b
            .replace(P, "&amp;")
            .replace(Q, "&lt;")
            .replace(R, "&gt;");
    }
    var aa = /&lt;/g,
        ba = /&gt;/g,
        ca = /&apos;/g,
        da = /&quot;/g,
        ea = /&amp;/g,
        fa = /&nbsp;/g;
    function ga(b) {
        var a = b.indexOf("&");
        if (a < 0) return b;
        for (--a; (a = b.indexOf("&#", a + 1)) >= 0; ) {
            var c = b.indexOf(";", a);
            if (c >= 0) {
                var d = b.substring(a + 3, c),
                    g = 10;
                if (d && d.charAt(0) === "x") {
                    d = d.substring(1);
                    g = 16;
                }
                var e = parseInt(d, g);
                if (!isNaN(e))
                    b =
                        b.substring(0, a) +
                        String.fromCharCode(e) +
                        b.substring(c + 1);
            }
        }
        return b
            .replace(aa, "<")
            .replace(ba, ">")
            .replace(ca, "'")
            .replace(da, '"')
            .replace(ea, "&")
            .replace(fa, " ");
    }
    function S(b) {
        return "XMP" === b.tagName;
    }
    function z(b, a) {
        switch (b.nodeType) {
            case 1:
                var c = b.tagName.toLowerCase();
                a.push("<", c);
                for (var d = 0; d < b.attributes.length; ++d) {
                    var g = b.attributes[d];
                    if (!g.specified) continue;
                    a.push(" ");
                    z(g, a);
                }
                a.push(">");
                for (var e = b.firstChild; e; e = e.nextSibling) z(e, a);
                if (b.firstChild || !/^(?:br|link|img)$/.test(c))
                    a.push("</", c, ">");
                break;
            case 2:
                a.push(b.name.toLowerCase(), '="', $(b.value), '"');
                break;
            case 3:
            case 4:
                a.push(E(b.nodeValue));
                break;
        }
    }
    var F = null;
    function ha(b) {
        if (null === F) {
            var a = document.createElement("PRE");
            a.appendChild(
                document.createTextNode(
                    '<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'
                )
            );
            F = !/</.test(a.innerHTML);
        }
        if (F) {
            var c = b.innerHTML;
            if (S(b)) c = E(c);
            return c;
        }
        var d = [];
        for (var g = b.firstChild; g; g = g.nextSibling) z(g, d);
        return d.join("");
    }
    function ia(b) {
        var a = 0;
        return function(c) {
            var d = null,
                g = 0;
            for (var e = 0, h = c.length; e < h; ++e) {
                var f = c.charAt(e);
                switch (f) {
                    case "\t":
                        if (!d) d = [];
                        d.push(c.substring(g, e));
                        var i = b - (a % b);
                        a += i;
                        for (; i >= 0; i -= "                ".length)
                            d.push("                ".substring(0, i));
                        g = e + 1;
                        break;
                    case "\n":
                        a = 0;
                        break;
                    default:
                        ++a;
                }
            }
            if (!d) return c;
            d.push(c.substring(g));
            return d.join("");
        };
    }
    var ja = /(?:[^<]+|<!--[\s\S]*?--\>|<!\[CDATA\[([\s\S]*?)\]\]>|<\/?[a-zA-Z][^>]*>|<)/g,
        ka = /^<!--/,
        la = /^<\[CDATA\[/,
        ma = /^<br\b/i;
    function na(b) {
        var a = b.match(ja),
            c = [],
            d = 0,
            g = [];
        if (a)
            for (var e = 0, h = a.length; e < h; ++e) {
                var f = a[e];
                if (f.length > 1 && f.charAt(0) === "<") {
                    if (ka.test(f)) continue;
                    if (la.test(f)) {
                        c.push(f.substring(9, f.length - 3));
                        d += f.length - 12;
                    } else if (ma.test(f)) {
                        c.push("\n");
                        ++d;
                    } else g.push(d, f);
                } else {
                    var i = ga(f);
                    c.push(i);
                    d += i.length;
                }
            }
        return {
            source: c.join(""),
            tags: g
        };
    }
    function v(b, a) {
        var c = {};
        (function() {
            var g = b.concat(a);
            for (var e = g.length; --e >= 0; ) {
                var h = g[e],
                    f = h[3];
                if (f) for (var i = f.length; --i >= 0; ) c[f.charAt(i)] = h;
            }
        })();
        var d = a.length;
        return function(g, e) {
            e = e || 0;
            var h = [e, "pln"],
                f = "",
                i = 0,
                j = g;
            while (j.length) {
                var o,
                    m = null,
                    k,
                    l = c[j.charAt(0)];
                if (l) {
                    k = j.match(l[1]);
                    m = k[0];
                    o = l[0];
                } else {
                    for (var n = 0; n < d; ++n) {
                        l = a[n];
                        var p = l[2];
                        if (p && !p.test(f)) continue;
                        k = j.match(l[1]);
                        if (k) {
                            m = k[0];
                            o = l[0];
                            break;
                        }
                    }
                    if (!m) {
                        o = "pln";
                        m = j.substring(0, 1);
                    }
                }
                h.push(e + i, o);
                i += m.length;
                j = j.substring(m.length);
                if (o !== "com" && /\S/.test(m)) f = m;
            }
            return h;
        };
    }
    var oa = v(
        [],
        [
            ["pln", /^[^<]+/, null],
            ["dec", /^<!\w[^>]*(?:>|$)/, null],
            ["com", /^<!--[\s\S]*?(?:--\>|$)/, null],
            ["src", /^<\?[\s\S]*?(?:\?>|$)/, null],
            ["src", /^<%[\s\S]*?(?:%>|$)/, null],
            ["src", /^<(script|style|xmp)\b[^>]*>[\s\S]*?<\/\1\b[^>]*>/i, null],
            ["tag", /^<\/?\w[^<>]*>/, null]
        ]
    );
    function pa(b) {
        var a = oa(b);
        for (var c = 0; c < a.length; c += 2)
            if (a[c + 1] === "src") {
                var d, g;
                d = a[c];
                g = c + 2 < a.length ? a[c + 2] : b.length;
                var e = b.substring(d, g),
                    h = e.match(/^(<[^>]*>)([\s\S]*)(<\/[^>]*>)$/);
                if (h)
                    a.splice(
                        c,
                        2,
                        d,
                        "tag",
                        d + h[1].length,
                        "src",
                        d + h[1].length + (h[2] || "").length,
                        "tag"
                    );
            }
        return a;
    }
    var qa = v(
        [
            ["atv", /^\'[^\']*(?:\'|$)/, null, "'"],
            ["atv", /^\"[^\"]*(?:\"|$)/, null, '"'],
            ["pun", /^[<>\/=]+/, null, "<>/="]
        ],
        [
            ["tag", /^[\w:\-]+/, /^</],
            ["atv", /^[\w\-]+/, /^=/],
            ["atn", /^[\w:\-]+/, null],
            ["pln", /^\s+/, null, " \t\r\n"]
        ]
    );
    function ra(b, a) {
        for (var c = 0; c < a.length; c += 2) {
            var d = a[c + 1];
            if (d === "tag") {
                var g, e;
                g = a[c];
                e = c + 2 < a.length ? a[c + 2] : b.length;
                var h = b.substring(g, e),
                    f = qa(h, g);
                u(f, a, c, 2);
                c += f.length - 2;
            }
        }
        return a;
    }
    function r(b) {
        var a = [],
            c = [];
        if (b.tripleQuotedStrings)
            a.push([
                "str",
                /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
                null,
                "'\""
            ]);
        else if (b.multiLineStrings)
            a.push([
                "str",
                /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
                null,
                "'\"`"
            ]);
        else
            a.push([
                "str",
                /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
                null,
                "\"'"
            ]);
        c.push(["pln", /^(?:[^\'\"\`\/\#]+)/, null, " \r\n"]);
        if (b.hashComments) a.push(["com", /^#[^\r\n]*/, null, "#"]);
        if (b.cStyleComments) c.push(["com", /^\/\/[^\r\n]*/, null]);
        if (b.regexLiterals)
            c.push([
                "str",
                /^\/(?:[^\\\*\/\[]|\\[\s\S]|\[(?:[^\]\\]|\\.)*(?:\]|$))+(?:\/|$)/,
                Y
            ]);
        if (b.cStyleComments) c.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
        var d = x(b.keywords);
        b = null;
        var g = v(a, c),
            e = v(
                [],
                [
                    ["pln", /^\s+/, null, " \r\n"],
                    ["pln", /^[a-z_$@][a-z_$@0-9]*/i, null],
                    ["lit", /^0x[a-f0-9]+[a-z]/i, null],
                    [
                        "lit",
                        /^(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?[a-z]*/i,
                        null,
                        "123456789"
                    ],
                    ["pun", /^[^\s\w\.$@]+/, null]
                ]
            );
        function h(f, i) {
            for (var j = 0; j < i.length; j += 2) {
                var o = i[j + 1];
                if (o === "pln") {
                    var m, k, l, n;
                    m = i[j];
                    k = j + 2 < i.length ? i[j + 2] : f.length;
                    l = f.substring(m, k);
                    n = e(l, m);
                    for (var p = 0, t = n.length; p < t; p += 2) {
                        var w = n[p + 1];
                        if (w === "pln") {
                            var A = n[p],
                                B = p + 2 < t ? n[p + 2] : l.length,
                                s = f.substring(A, B);
                            if (s === ".") n[p + 1] = "pun";
                            else if (s in d) n[p + 1] = "kwd";
                            else if (/^@?[A-Z][A-Z$]*[a-z][A-Za-z$]*$/.test(s))
                                n[p + 1] = s.charAt(0) === "@" ? "lit" : "typ";
                        }
                    }
                    u(n, i, j, 2);
                    j += n.length - 2;
                }
            }
            return i;
        }
        return function(f) {
            var i = g(f);
            i = h(f, i);
            return i;
        };
    }
    var G = r({
        keywords: W,
        hashComments: true,
        cStyleComments: true,
        multiLineStrings: true,
        regexLiterals: true
    });
    function sa(b, a) {
        for (var c = 0; c < a.length; c += 2) {
            var d = a[c + 1];
            if (d === "src") {
                var g, e;
                g = a[c];
                e = c + 2 < a.length ? a[c + 2] : b.length;
                var h = G(b.substring(g, e));
                for (var f = 0, i = h.length; f < i; f += 2) h[f] += g;
                u(h, a, c, 2);
                c += h.length - 2;
            }
        }
        return a;
    }
    function ta(b, a) {
        var c = false;
        for (var d = 0; d < a.length; d += 2) {
            var g = a[d + 1],
                e,
                h;
            if (g === "atn") {
                e = a[d];
                h = d + 2 < a.length ? a[d + 2] : b.length;
                c = /^on|^style$/i.test(b.substring(e, h));
            } else if (g === "atv") {
                if (c) {
                    e = a[d];
                    h = d + 2 < a.length ? a[d + 2] : b.length;
                    var f = b.substring(e, h),
                        i = f.length,
                        j =
                            i >= 2 &&
                            /^[\"\']/.test(f) &&
                            f.charAt(0) === f.charAt(i - 1),
                        o,
                        m,
                        k;
                    if (j) {
                        m = e + 1;
                        k = h - 1;
                        o = f;
                    } else {
                        m = e + 1;
                        k = h - 1;
                        o = f.substring(1, f.length - 1);
                    }
                    var l = G(o);
                    for (var n = 0, p = l.length; n < p; n += 2) l[n] += m;
                    if (j) {
                        l.push(k, "atv");
                        u(l, a, d + 2, 0);
                    } else u(l, a, d, 2);
                }
                c = false;
            }
        }
        return a;
    }
    function ua(b) {
        var a = pa(b);
        a = ra(b, a);
        a = sa(b, a);
        a = ta(b, a);
        return a;
    }
    function va(b, a, c) {
        var d = [],
            g = 0,
            e = null,
            h = null,
            f = 0,
            i = 0,
            j = ia(8);
        function o(k) {
            if (k > g) {
                if (e && e !== h) {
                    d.push("</span>");
                    e = null;
                }
                if (!e && h) {
                    e = h;
                    d.push('<span class="', e, '">');
                }
                var l = E(j(b.substring(g, k)))
                    .replace(/(\r\n?|\n| ) /g, "$1&nbsp;")
                    .replace(/\r\n?|\n/g, "<br />");
                d.push(l);
                g = k;
            }
        }
        while (true) {
            var m;
            m = f < a.length ? (i < c.length ? a[f] <= c[i] : true) : false;
            if (m) {
                o(a[f]);
                if (e) {
                    d.push("</span>");
                    e = null;
                }
                d.push(a[f + 1]);
                f += 2;
            } else if (i < c.length) {
                o(c[i]);
                h = c[i + 1];
                i += 2;
            } else break;
        }
        o(b.length);
        if (e) d.push("</span>");
        return d.join("");
    }
    var C = {};
    function q(b, a) {
        for (var c = a.length; --c >= 0; ) {
            var d = a[c];
            if (!C.hasOwnProperty(d)) C[d] = b;
            else if ("console" in window)
                console.log("cannot override language handler %s", d);
        }
    }
    q(G, ["default-code"]);
    q(ua, ["default-markup", "html", "htm", "xhtml", "xml", "xsl"]);
    q(
        r({
            keywords: I,
            hashComments: true,
            cStyleComments: true
        }),
        ["c", "cc", "cpp", "cs", "cxx", "cyc"]
    );
    q(
        r({
            keywords: J,
            cStyleComments: true
        }),
        ["java"]
    );
    q(
        r({
            keywords: O,
            hashComments: true,
            multiLineStrings: true
        }),
        ["bsh", "csh", "sh"]
    );
    q(
        r({
            keywords: M,
            hashComments: true,
            multiLineStrings: true,
            tripleQuotedStrings: true
        }),
        ["cv", "py"]
    );
    q(
        r({
            keywords: L,
            hashComments: true,
            multiLineStrings: true,
            regexLiterals: true
        }),
        ["perl", "pl", "pm"]
    );
    q(
        r({
            keywords: N,
            hashComments: true,
            multiLineStrings: true,
            regexLiterals: true
        }),
        ["rb"]
    );
    q(
        r({
            keywords: K,
            cStyleComments: true,
            regexLiterals: true
        }),
        ["js"]
    );
    function T(b, a) {
        try {
            var c = na(b),
                d = c.source,
                g = c.tags;
            if (!C.hasOwnProperty(a))
                a = /^\s*</.test(d) ? "default-markup" : "default-code";
            var e = C[a].call({}, d);
            return va(d, g, e);
        } catch (h) {
            if ("console" in window) {
                console.log(h);
                console.trace();
            }
            return b;
        }
    }
    function wa(b) {
        var a = H(),
            c = [
                document.getElementsByTagName("pre"),
                document.getElementsByTagName("code"),
                document.getElementsByTagName("li"),
                document.getElementsByTagName("xmp")
            ],
            d = [];
        for (var g = 0; g < c.length; ++g)
            for (var e = 0; e < c[g].length; ++e) d.push(c[g][e]);
        c = null;
        var h = 0;
        function f() {
            var i = new Date().getTime() + 250;
            for (; h < d.length && new Date().getTime() < i; h++) {
                var j = d[h];
                if (j.className && j.className.indexOf("prettyprint") >= 0) {
                    var o = j.className.match(/\blang-(\w+)\b/);
                    if (o) o = o[1];
                    var m = false;
                    for (var k = j.parentNode; k; k = k.parentNode)
                        if (
                            (k.tagName === "pre" ||
                                k.tagName === "code" ||
                                k.tagName === "xmp") &&
                            k.className &&
                            k.className.indexOf("prettyprint") >= 0
                        ) {
                            m = true;
                            break;
                        }
                    if (!m) {
                        var l = ha(j);
                        l = l.replace(/(?:\r\n?|\n)$/, "");
                        var n = T(l, o);
                        if (!S(j)) j.innerHTML = n;
                        else {
                            var p = document.createElement("PRE");
                            for (var t = 0; t < j.attributes.length; ++t) {
                                var w = j.attributes[t];
                                if (w.specified)
                                    p.setAttribute(w.name, w.value);
                            }
                            p.innerHTML = n;
                            j.parentNode.replaceChild(p, j);
                            p = j;
                        }
                        if (a && j.tagName === "PRE") {
                            var A = j.getElementsByTagName("br");
                            for (var B = A.length; --B >= 0; ) {
                                var s = A[B];
                                s.parentNode.replaceChild(
                                    document.createTextNode("\r\n"),
                                    s
                                );
                            }
                        }
                    }
                }
            }
            if (h < d.length) setTimeout(f, 250);
            else if (b) b();
        }
        f();
    }
    window.PR_normalizedHtml = z;
    window.prettyPrintOne = T;
    window.prettyPrint = wa;
    window.PR = {
        createSimpleLexer: v,
        registerLangHandler: q,
        sourceDecorator: r,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    };
})();


/***/ }),

/***/ 79661:
/*!**********************************************!*\
  !*** ./runestone/parsons/js/timedparsons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedParsons)
/* harmony export */ });
/* harmony import */ var _parsons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsons */ 35718);


class TimedParsons extends _parsons__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        // todo -- make this configurable
        if (opts.timedfeedback) {
            this.showfeedback = true;
        } else {
            this.showfeedback = false;
        }
        this.grader.showfeedback = this.showfeedback;
        this.hideFeedback();
        $(this.checkButton).hide();
        $(this.helpButton).hide();
        $(this.resetButton).hide();
    }
    checkCorrectTimed() {
        return this.correct ? "T" : "F";
    }
    hideFeedback() {
        $(this.messageDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory["parsons"] = function (opts) {
    if (opts.timed) {
        return new TimedParsons(opts);
    }
    return new _parsons__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3BhcnNvbnNfanNfdGltZWRwYXJzb25zX2pzLmUyOTU5NGRiMzlkNDRhZjMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDNkI7O0FBRXhFO0FBQ0Esa0JBQWtCLGdEQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdCQUF3QixtREFBZTtBQUN0RDtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFOztBQUVqRTs7QUFFQTtBQUNBLGtDQUFrQyxnREFBTztBQUN6QztBQUNBO0FBQ0EsMEJBQTBCLG9EQUFPO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVMsbUVBQXNCO0FBQy9CLCtFQUEr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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDbkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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d0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsY0FBYztBQUNkLGdDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHlFQUF5RSxtQkFBbUIsMkJBQTJCO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxjQUFjO0FBQ2QsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCwrREFBK0Q7QUFDL0Qsd0NBQXdDLElBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9oRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUM7O0FBRXJDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0NBQWdDLGtCQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrREFBYztBQUN4QztBQUNBO0FBQ0Esb0JBQW9CLDJEQUFVO0FBQzlCO0FBQ0EsbUNBQW1DLHFFQUFvQjtBQUN2RDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3B4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxJQUFJO0FBQ2hELDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QjtBQUNBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQ0FBbUM7QUFDckQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEdBQUc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVTtBQUM3QztBQUNBO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUkscURBQXFELElBQUk7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0Qyw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEdBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx5QkFBeUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsVUFBVTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoeEIrQjs7QUFFakIsMkJBQTJCLGdEQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnREFBTztBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9jc3MvcGFyc29ucy5jc3M/ZjhiYyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvY3NzL3ByZXR0aWZ5LmNzcz8wZTVjIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9kYWdHcmFkZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL2RhZ0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL2hhbW1lci5taW4uanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL2xpbmVHcmFkZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL3BhcnNvbnMtaTE4bi5lbi5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvcGFyc29ucy1pMThuLnB0LWJyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9wYXJzb25zLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9wYXJzb25zQmxvY2suanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL3BhcnNvbnNMaW5lLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9wcmV0dGlmeS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvdGltZWRwYXJzb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBMaW5lQmFzZWRHcmFkZXIgZnJvbSBcIi4vbGluZUdyYWRlclwiO1xuaW1wb3J0IHsgRGlHcmFwaCwgaGFzUGF0aCwgaXNEaXJlY3RlZEFjeWNsaWNHcmFwaCB9IGZyb20gXCIuL2RhZ0hlbHBlcnNcIjtcblxuZnVuY3Rpb24gZ3JhcGhUb05YKGFuc3dlckxpbmVzKSB7XG4gIHZhciBncmFwaCA9IG5ldyBEaUdyYXBoKCk7XG4gIGZvciAobGV0IGxpbmUxIG9mIGFuc3dlckxpbmVzKSB7XG4gICAgZ3JhcGguYWRkTm9kZShsaW5lMS50YWcpO1xuICAgIGZvciAobGV0IGxpbmUydGFnIG9mIGxpbmUxLmRlcGVuZHMpIHtcbiAgICAgIC8vIHRoZSBkZXBlbmRzIGdyYXBoIGxpc3RzIHRoZSAqaW5jb21pbmcqIGVkZ2VzIG9mIGEgbm9kZVxuICAgICAgZ3JhcGguYWRkRWRnZShsaW5lMnRhZywgbGluZTEudGFnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBpc1ZlcnRleENvdmVyKGdyYXBoLCB2ZXJ0ZXhDb3Zlcikge1xuICBmb3IgKGxldCBlZGdlIG9mIGdyYXBoLmVkZ2VzKCkpIHtcbiAgICBpZiAoISh2ZXJ0ZXhDb3Zlci5oYXMoZWRnZVswXSkgfHwgdmVydGV4Q292ZXIuaGFzKGVkZ2VbMV0pKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRmluZCBhbGwgc3Vic2V0cyBvZiB0aGUgc2V0IHVzaW5nIHRoZSBjb3JyZXNwb25kZW5jZSBvZiBzdWJzZXRzIG9mXG4vLyBhIHNldCB0byBiaW5hcnkgc3RyaW5nIHdob3NlIGxlbmd0aCBhcmUgdGhlIHNpemUgb2YgdGhlIHNldFxuZnVuY3Rpb24gYWxsU3Vic2V0cyhhcnIpIHtcbiAgbGV0IHN1YnNldHMgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgc3Vic2V0c1tpXSA9IFtdO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coMiwgYXJyLmxlbmd0aCk7IGkrKykge1xuICAgIGxldCBiaW4gPSBpLnRvU3RyaW5nKDIpO1xuICAgIHdoaWxlIChiaW4ubGVuZ3RoIDwgYXJyLmxlbmd0aCkge1xuICAgICAgYmluID0gXCIwXCIgKyBiaW47XG4gICAgfVxuICAgIGxldCBzdWJzZXQgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBiaW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChiaW5bal0gPT0gXCIxXCIpIHtcbiAgICAgICAgc3Vic2V0LmFkZChhcnJbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzdWJzZXRzW3N1YnNldC5zaXplXS5wdXNoKHN1YnNldCk7XG4gIH1cbiAgcmV0dXJuIHN1YnNldHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERBR0dyYWRlciBleHRlbmRzIExpbmVCYXNlZEdyYWRlciB7XG4gIGludmVyc2VMSVNJbmRpY2VzKGFyciwgaW5Tb2x1dGlvbikge1xuICAgIC8vIEZvciBtb3JlIGRldGFpbHMgYW5kIGEgcHJvb2Ygb2YgdGhlIGNvcnJlY3RuZXNzIG9mIHRoZSBhbGdvcml0aG0sIHNlZSB0aGUgcGFwZXI6IGh0dHBzOi8vYXJ4aXYub3JnL2Ficy8yMjA0LjA0MTk2XG5cbiAgICB2YXIgc29sdXRpb24gPSB0aGlzLnByb2JsZW0uc29sdXRpb247XG4gICAgdmFyIGFuc3dlckxpbmVzID0gaW5Tb2x1dGlvbi5tYXAoKGJsb2NrKSA9PiBibG9jay5saW5lc1swXSk7IC8vIGFzc3VtZSBOT1QgYWRhcHRpdmUgZm9yIERBRyBncmFkaW5nIChmb3Igbm93KVxuXG4gICAgbGV0IGdyYXBoID0gZ3JhcGhUb05YKHNvbHV0aW9uKTtcblxuICAgIGxldCBzZWVuID0gbmV3IFNldCgpO1xuICAgIGxldCBwcm9ibGVtYXRpY1N1YmdyYXBoID0gbmV3IERpR3JhcGgoKTtcbiAgICBmb3IgKGxldCBsaW5lMSBvZiBhbnN3ZXJMaW5lcykge1xuICAgICAgZm9yIChsZXQgbGluZTIgb2Ygc2Vlbikge1xuICAgICAgICBsZXQgcHJvYmxlbWF0aWMgPSBoYXNQYXRoKGdyYXBoLCB7XG4gICAgICAgICAgc291cmNlOiBsaW5lMS50YWcsXG4gICAgICAgICAgdGFyZ2V0OiBsaW5lMi50YWcsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocHJvYmxlbWF0aWMpIHtcbiAgICAgICAgICBwcm9ibGVtYXRpY1N1YmdyYXBoLmFkZEVkZ2UobGluZTEudGFnLCBsaW5lMi50YWcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlZW4uYWRkKGxpbmUxKTtcbiAgICB9XG5cbiAgICBsZXQgbXZjID0gbnVsbDtcbiAgICBsZXQgc3Vic2V0cyA9IGFsbFN1YnNldHMocHJvYmxlbWF0aWNTdWJncmFwaC5ub2RlcygpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBwcm9ibGVtYXRpY1N1YmdyYXBoLm51bWJlck9mTm9kZXMoKTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBzdWJzZXQgb2Ygc3Vic2V0c1tpXSkge1xuICAgICAgICBpZiAoaXNWZXJ0ZXhDb3Zlcihwcm9ibGVtYXRpY1N1YmdyYXBoLCBzdWJzZXQpKSB7XG4gICAgICAgICAgbXZjID0gc3Vic2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobXZjICE9IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGluZGljZXMgPSBbLi4ubXZjXS5tYXAoKHRhZykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYW5zd2VyTGluZXNbaV0udGFnID09PSB0YWcpIHJldHVybiBpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbmRpY2VzO1xuICB9XG5cbiAgY2hlY2tDb3JyZWN0SW5kZW50YXRpb24oc29sdXRpb25MaW5lcywgYW5zd2VyTGluZXMpIHtcbiAgICAgIHRoaXMuaW5kZW50TGVmdCA9IFtdO1xuICAgICAgdGhpcy5pbmRlbnRSaWdodCA9IFtdO1xuXG4gICAgICBsZXQgaW5kZW50YXRpb25CeVRhZyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb2x1dGlvbkxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBzb2x1dGlvbkxpbmVzW2ldO1xuICAgICAgICBpbmRlbnRhdGlvbkJ5VGFnW2xpbmUudGFnXSA9IGxpbmUuaW5kZW50O1xuICAgICAgfVxuXG4gICAgICBsZXQgbG9vcExpbWl0ID0gTWF0aC5taW4oc29sdXRpb25MaW5lcy5sZW5ndGgsIGFuc3dlckxpbmVzLmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BMaW1pdDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHNvbHV0aW9uSW5kZW50ID0gaW5kZW50YXRpb25CeVRhZ1thbnN3ZXJMaW5lc1tpXS50YWddO1xuICAgICAgICAgIGlmIChhbnN3ZXJMaW5lc1tpXS52aWV3SW5kZW50KCkgPCBzb2x1dGlvbkluZGVudCkge1xuICAgICAgICAgICAgICB0aGlzLmluZGVudFJpZ2h0LnB1c2goYW5zd2VyTGluZXNbaV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyTGluZXNbaV0udmlld0luZGVudCgpID4gc29sdXRpb25JbmRlbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbmRlbnRMZWZ0LnB1c2goYW5zd2VyTGluZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuaW5jb3JyZWN0SW5kZW50cyA9XG4gICAgICAgICAgdGhpcy5pbmRlbnRMZWZ0Lmxlbmd0aCArIHRoaXMuaW5kZW50UmlnaHQubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gdGhpcy5pbmNvcnJlY3RJbmRlbnRzID09IDA7XG4gIH1cblxuICBjaGVja0NvcnJlY3RPcmRlcmluZyhzb2x1dGlvbkxpbmVzLCBhbnN3ZXJMaW5lcykge1xuICAgIGlmICghaXNEaXJlY3RlZEFjeWNsaWNHcmFwaChncmFwaFRvTlgoc29sdXRpb25MaW5lcykpKSB7XG4gICAgICB0aHJvdyBcIkRlcGVuZGVuY3kgYmV0d2VlbiBibG9ja3MgZG9lcyBub3QgZm9ybSBhIERpcmVjdGVkIEFjeWNsaWMgR3JhcGg7IFByb2JsZW0gdW5zb2x2YWJsZS5cIjtcbiAgICB9XG5cbiAgICBsZXQgc2VlbiA9IG5ldyBTZXQoKTtcbiAgICBsZXQgaXNDb3JyZWN0T3JkZXIgPSB0cnVlO1xuICAgIHRoaXMuY29ycmVjdExpbmVzID0gMDtcbiAgICB0aGlzLnNvbHV0aW9uTGVuZ3RoID0gc29sdXRpb25MaW5lcy5sZW5ndGg7XG4gICAgbGV0IGxvb3BMaW1pdCA9IE1hdGgubWluKHNvbHV0aW9uTGluZXMubGVuZ3RoLCBhbnN3ZXJMaW5lcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcExpbWl0OyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gYW5zd2VyTGluZXNbaV07XG4gICAgICBpZiAobGluZS5kaXN0cmFjdG9yKSB7XG4gICAgICAgIGlzQ29ycmVjdE9yZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmUuZGVwZW5kcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICghc2Vlbi5oYXMobGluZS5kZXBlbmRzW2pdKSkge1xuICAgICAgICAgICAgaXNDb3JyZWN0T3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0NvcnJlY3RPcmRlcikge1xuICAgICAgICB0aGlzLmNvcnJlY3RMaW5lcyArPSAxO1xuICAgICAgfVxuICAgICAgc2Vlbi5hZGQobGluZS50YWcpO1xuICAgIH1cbiAgICByZXR1cm4gaXNDb3JyZWN0T3JkZXI7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBUaGlzIGZpbGUgYWRhcHRlZCBmcm9tIEpTTmV0d29ya1g6IGh0dHBzOi8vZ2l0aHViLmNvbS9ma2xpbmcvSlNOZXR3b3JrWFxuICogQ29weXJpZ2h0IChDKSAyMDEyIEZlbGl4IEtsaW5nIDxmZWxpeC5rbGluZ0BnbXgubmV0PlxuICogSlNOZXR3b3JrWCBpcyBkaXN0cmlidXRlZCB3aXRoIHRoZSBCU0QgbGljZW5zZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNQYXRoKEcsIHsgc291cmNlLCB0YXJnZXQgfSkge1xuICB0cnkge1xuICAgIGJpZGlyZWN0aW9uYWxTaG9ydGVzdFBhdGgoRywgc291cmNlLCB0YXJnZXQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEpTTmV0d29ya1hOb1BhdGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG5vZGVzQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYiB8fCAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsU2hvcnRlc3RQYXRoKEcsIHNvdXJjZSwgdGFyZ2V0KSB7XG4gIC8vIGNhbGwgaGVscGVyIHRvIGRvIHRoZSByZWFsIHdvcmtcbiAgdmFyIFtwcmVkLCBzdWNjLCB3XSA9IGJpZGlyZWN0aW9uYWxQcmVkU3VjYyhHLCBzb3VyY2UsIHRhcmdldCk7XG5cbiAgLy8gYnVpbGQgcGF0aCBmcm9tIHByZWQrdytzdWNjXG4gIHZhciBwYXRoID0gW107XG4gIC8vIGZyb20gc291cmNlIHRvIHdcbiAgd2hpbGUgKHcgIT0gbnVsbCkge1xuICAgIHBhdGgucHVzaCh3KTtcbiAgICB3ID0gcHJlZC5nZXQodyk7XG4gIH1cbiAgdyA9IHN1Y2MuZ2V0KHBhdGhbMF0pO1xuICBwYXRoLnJldmVyc2UoKTtcbiAgLy8gZnJvbSB3IHRvIHRhcmdldFxuICB3aGlsZSAodyAhPSBudWxsKSB7XG4gICAgcGF0aC5wdXNoKHcpO1xuICAgIHcgPSBzdWNjLmdldCh3KTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbFByZWRTdWNjKEcsIHNvdXJjZSwgdGFyZ2V0KSB7XG4gIC8vIGRvZXMgQkZTIGZyb20gYm90aCBzb3VyY2UgYW5kIHRhcmdldCBhbmQgbWVldHMgaW4gdGhlIG1pZGRsZVxuICBpZiAobm9kZXNBcmVFcXVhbChzb3VyY2UsIHRhcmdldCkpIHtcbiAgICByZXR1cm4gW25ldyBNYXAoW1tzb3VyY2UsIG51bGxdXSksIG5ldyBNYXAoW1t0YXJnZXQsIG51bGxdXSksIHNvdXJjZV07XG4gIH1cblxuICAvLyBoYW5kbGUgZWl0aGVyIGRpcmVjdGVkIG9yIHVuZGlyZWN0ZWRcbiAgdmFyIGdwcmVkLCBnc3VjYztcbiAgZ3ByZWQgPSBHLnByZWRlY2Vzc29yc0l0ZXIuYmluZChHKTtcbiAgZ3N1Y2MgPSBHLnN1Y2Nlc3NvcnNJdGVyLmJpbmQoRyk7XG5cbiAgLy8gcHJlZGVjZXNzc29yIGFuZCBzdWNjZXNzb3JzIGluIHNlYXJjaFxuICB2YXIgcHJlZCA9IG5ldyBNYXAoW1tzb3VyY2UsIG51bGxdXSk7XG4gIHZhciBzdWNjID0gbmV3IE1hcChbW3RhcmdldCwgbnVsbF1dKTtcbiAgLy9cbiAgLy8gaW5pdGlhbGl6ZSBmcmluZ2VzLCBzdGFydCB3aXRoIGZvcndhcmRcbiAgdmFyIGZvcndhcmRGcmluZ2UgPSBbc291cmNlXTtcbiAgdmFyIHJldmVyc2VGcmluZ2UgPSBbdGFyZ2V0XTtcbiAgdmFyIHRoaXNMZXZlbDtcblxuICAvKmpzaGludCBuZXdjYXA6ZmFsc2UqL1xuICB3aGlsZSAoZm9yd2FyZEZyaW5nZS5sZW5ndGggPiAwICYmIHJldmVyc2VGcmluZ2UubGVuZ3RoID4gMCkge1xuICAgIGlmIChmb3J3YXJkRnJpbmdlLmxlbmd0aCA8PSByZXZlcnNlRnJpbmdlLmxlbmd0aCkge1xuICAgICAgdGhpc0xldmVsID0gZm9yd2FyZEZyaW5nZTtcbiAgICAgIGZvcndhcmRGcmluZ2UgPSBbXTtcbiAgICAgIGZvciAobGV0IHYgb2YgdGhpc0xldmVsKSB7XG4gICAgICAgIGZvciAobGV0IHcgb2YgZ3N1Y2ModikpIHtcbiAgICAgICAgICBpZiAoIXByZWQuaGFzKHcpKSB7XG4gICAgICAgICAgICBmb3J3YXJkRnJpbmdlLnB1c2godyk7XG4gICAgICAgICAgICBwcmVkLnNldCh3LCB2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1Y2MuaGFzKHcpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3ByZWQsIHN1Y2MsIHddOyAvLyBmb3VuZCBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNMZXZlbCA9IHJldmVyc2VGcmluZ2U7XG4gICAgICByZXZlcnNlRnJpbmdlID0gW107XG4gICAgICBmb3IgKGxldCB2IG9mIHRoaXNMZXZlbCkge1xuICAgICAgICBmb3IgKGxldCB3IG9mIGdwcmVkKHYpKSB7XG4gICAgICAgICAgaWYgKCFzdWNjLmhhcyh3KSkge1xuICAgICAgICAgICAgcmV2ZXJzZUZyaW5nZS5wdXNoKHcpO1xuICAgICAgICAgICAgc3VjYy5zZXQodywgdik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwcmVkLmhhcyh3KSkge1xuICAgICAgICAgICAgcmV0dXJuIFtwcmVkLCBzdWNjLCB3XTsgLy8gZm91bmQgcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgSlNOZXR3b3JrWE5vUGF0aChcbiAgICBcIk5vIHBhdGggYmV0d2VlbiBcIiArIHNvdXJjZS50b1N0cmluZygpICsgXCIgYW5kIFwiICsgdGFyZ2V0LnRvU3RyaW5nKCkgKyBcIi5cIlxuICApO1xufVxuXG5mdW5jdGlvbiB0b3BvbG9naWNhbFNvcnQoRywgb3B0TmJ1bmNoKSB7XG4gIC8vIG5vbnJlY3Vyc2l2ZSB2ZXJzaW9uXG4gIHZhciBzZWVuID0gbmV3IFNldCgpO1xuICB2YXIgb3JkZXJFeHBsb3JlZCA9IFtdOyAvLyBwcm92aWRlIG9yZGVyIGFuZFxuICAvLyBmYXN0IHNlYXJjaCB3aXRob3V0IG1vcmUgZ2VuZXJhbCBwcmlvcml0eURpY3Rpb25hcnlcbiAgdmFyIGV4cGxvcmVkID0gbmV3IFNldCgpO1xuXG4gIGlmIChvcHROYnVuY2ggPT0gbnVsbCkge1xuICAgIG9wdE5idW5jaCA9IEcubm9kZXNJdGVyKCk7XG4gIH1cblxuICBmb3IgKGxldCB2IG9mIG9wdE5idW5jaCkge1xuICAgIC8vIHByb2Nlc3MgYWxsIHZlcnRpY2VzIGluIEdcbiAgICBpZiAoZXhwbG9yZWQuaGFzKHYpKSB7XG4gICAgICByZXR1cm47IC8vIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIGZyaW5nZSA9IFt2XTsgLy8gbm9kZXMgeWV0IHRvIGxvb2sgYXRcbiAgICB3aGlsZSAoZnJpbmdlLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciB3ID0gZnJpbmdlW2ZyaW5nZS5sZW5ndGggLSAxXTsgLy8gZGVwdGggZmlyc3Qgc2VhcmNoXG4gICAgICBpZiAoZXhwbG9yZWQuaGFzKHcpKSB7XG4gICAgICAgIC8vIGFscmVhZHkgbG9va2VkIGRvd24gdGhpcyBicmFuY2hcbiAgICAgICAgZnJpbmdlLnBvcCgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHNlZW4uYWRkKHcpOyAvLyBtYXJrIGFzIHNlZW5cbiAgICAgIC8vIENoZWNrIHN1Y2Nlc3NvcnMgZm9yIGN5Y2xlcyBmb3IgbmV3IG5vZGVzXG4gICAgICB2YXIgbmV3Tm9kZXMgPSBbXTtcbiAgICAgIC8qZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jKi9cbiAgICAgIEcuZ2V0KHcpLmZvckVhY2goZnVuY3Rpb24gKF8sIG4pIHtcbiAgICAgICAgaWYgKCFleHBsb3JlZC5oYXMobikpIHtcbiAgICAgICAgICBpZiAoc2Vlbi5oYXMobikpIHtcbiAgICAgICAgICAgIC8vIENZQ0xFICEhXG4gICAgICAgICAgICB0aHJvdyBuZXcgSlNOZXR3b3JrWFVuZmVhc2libGUoXCJHcmFwaCBjb250YWlucyBhIGN5Y2xlLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3Tm9kZXMucHVzaChuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvKmVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jKi9cbiAgICAgIGlmIChuZXdOb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGFkZCBuZXcgbm9kZXMgdG8gZnJpbmdlXG4gICAgICAgIGZyaW5nZS5wdXNoLmFwcGx5KGZyaW5nZSwgbmV3Tm9kZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwbG9yZWQuYWRkKHcpO1xuICAgICAgICBvcmRlckV4cGxvcmVkLnVuc2hpZnQodyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9yZGVyRXhwbG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdGVkQWN5Y2xpY0dyYXBoKEcpIHtcbiAgdHJ5IHtcbiAgICB0b3BvbG9naWNhbFNvcnQoRyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgaWYgKGV4IGluc3RhbmNlb2YgSlNOZXR3b3JrWFVuZmVhc2libGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhyb3cgZXg7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpR3JhcGgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdyYXBoID0ge307IC8vIGRpY3Rpb25hcnkgZm9yIGdyYXBoIGF0dHJpYnV0ZXNcbiAgICB0aGlzLm5vZGUgPSBuZXcgTWFwKCk7IC8vIGRpY3Rpb25hcnkgZm9yIG5vZGUgYXR0cmlidXRlc1xuICAgIC8vIFdlIHN0b3JlIHR3byBhZGphY2VuY3kgbGlzdHM6XG4gICAgLy8gdGhlIHByZWRlY2Vzc29ycyBvZiBub2RlIG4gYXJlIHN0b3JlZCBpbiB0aGUgZGljdCBzZWxmLnByZWRcbiAgICAvLyB0aGUgc3VjY2Vzc29ycyBvZiBub2RlIG4gYXJlIHN0b3JlZCBpbiB0aGUgZGljdCBzZWxmLnN1Y2M9c2VsZi5hZGpcbiAgICB0aGlzLmFkaiA9IG5ldyBNYXAoKTsgLy8gZW1wdHkgYWRqYWNlbmN5IGRpY3Rpb25hcnlcbiAgICB0aGlzLnByZWQgPSBuZXcgTWFwKCk7IC8vIHByZWRlY2Vzc29yXG4gICAgdGhpcy5zdWNjID0gdGhpcy5hZGo7IC8vIHN1Y2Nlc3NvclxuXG4gICAgdGhpcy5lZGdlID0gdGhpcy5hZGo7XG4gIH1cblxuICBhZGROb2RlKG4pIHtcbiAgICBpZiAoIXRoaXMuc3VjYy5oYXMobikpIHtcbiAgICAgIHRoaXMuc3VjYy5zZXQobiwgbmV3IE1hcCgpKTtcbiAgICAgIHRoaXMucHJlZC5zZXQobiwgbmV3IE1hcCgpKTtcbiAgICAgIHRoaXMubm9kZS5zZXQobik7XG4gICAgfVxuICB9XG5cbiAgYWRkRWRnZSh1LCB2KSB7XG4gICAgLy8gYWRkIG5vZGVzXG4gICAgaWYgKCF0aGlzLnN1Y2MuaGFzKHUpKSB7XG4gICAgICB0aGlzLnN1Y2Muc2V0KHUsIG5ldyBNYXAoKSk7XG4gICAgICB0aGlzLnByZWQuc2V0KHUsIG5ldyBNYXAoKSk7XG4gICAgICB0aGlzLm5vZGUuc2V0KHUsIHt9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3VjYy5oYXModikpIHtcbiAgICAgIHRoaXMuc3VjYy5zZXQodiwgbmV3IE1hcCgpKTtcbiAgICAgIHRoaXMucHJlZC5zZXQodiwgbmV3IE1hcCgpKTtcbiAgICAgIHRoaXMubm9kZS5zZXQodiwge30pO1xuICAgIH1cblxuICAgIC8vIGFkZCB0aGUgZWRnZVxuICAgIHZhciBkYXRhZGljdCA9IHRoaXMuYWRqLmdldCh1KS5nZXQodikgfHwge307XG4gICAgdGhpcy5zdWNjLmdldCh1KS5zZXQodiwgZGF0YWRpY3QpO1xuICAgIHRoaXMucHJlZC5nZXQodikuc2V0KHUsIGRhdGFkaWN0KTtcbiAgfVxuXG4gIG5vZGVzKG9wdERhdGEgPSBmYWxzZSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG9wdERhdGEgPyB0aGlzLm5vZGUuZW50cmllcygpIDogdGhpcy5ub2RlLmtleXMoKSk7XG4gIH1cblxuICBlZGdlcyhvcHROYnVuY2gsIG9wdERhdGEgPSBmYWxzZSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWRnZXNJdGVyKG9wdE5idW5jaCwgb3B0RGF0YSkpO1xuICB9XG5cbiAgbm9kZXNJdGVyKG9wdERhdGEgPSBmYWxzZSkge1xuICAgIGlmIChvcHREYXRhKSB7XG4gICAgICByZXR1cm4gdG9JdGVyYXRvcih0aGlzLm5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub2RlLmtleXMoKTtcbiAgfVxuXG4gIGdldChuKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5hZGouZ2V0KG4pO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBLZXlFcnJvcihcIkdyYXBoIGRvZXMgbm90IGNvbnRhaW4gbm9kZSBcIiArIG4gKyBcIi5cIik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG51bWJlck9mTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5zaXplO1xuICB9XG5cbiAgKm5idW5jaEl0ZXIob3B0TmJ1bmNoKSB7XG4gICAgaWYgKG9wdE5idW5jaCA9PSBudWxsKSB7XG4gICAgICAvLyBpbmNsdWRlIGFsbCBub2Rlc1xuICAgICAgLypqc2hpbnQgZXhwcjp0cnVlKi9cbiAgICAgIHlpZWxkKiB0aGlzLmFkai5rZXlzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc05vZGUob3B0TmJ1bmNoKSkge1xuICAgICAgLy8gaWYgbmJ1bmNoIGlzIGEgc2luZ2xlIG5vZGVcbiAgICAgIHlpZWxkIG9wdE5idW5jaDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgbmJ1bmNoIGlzIGEgc2VxdWVuY2Ugb2Ygbm9kZXNcbiAgICAgIHZhciBhZGogPSB0aGlzLmFkajtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbiBvZiB0b0l0ZXJhdG9yKG9wdE5idW5jaCkpIHtcbiAgICAgICAgICBpZiAoYWRqLmhhcyhuKSkge1xuICAgICAgICAgICAgeWllbGQgbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGlmIChleCBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBKU05ldHdvcmtYRXJyb3IoXG4gICAgICAgICAgICBcIm5idW5jaCBpcyBub3QgYSBub2RlIG9yIGEgc2VxdWVuY2Ugb2Ygbm9kZXNcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAqZWRnZXNJdGVyKG9wdE5idW5jaCwgb3B0RGF0YSA9IGZhbHNlKSB7XG4gICAgLy8gaGFuZGxlIGNhbGxzIHdpdGggb3B0X2RhdGEgYmVpbmcgdGhlIG9ubHkgYXJndW1lbnRcbiAgICBpZiAoaXNCb29sZWFuKG9wdE5idW5jaCkpIHtcbiAgICAgIG9wdERhdGEgPSBvcHROYnVuY2g7XG4gICAgICBvcHROYnVuY2ggPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVzTmJycztcblxuICAgIGlmIChvcHROYnVuY2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZXNOYnJzID0gdGhpcy5hZGo7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzTmJycyA9IG1hcEl0ZXJhdG9yKHRoaXMubmJ1bmNoSXRlcihvcHROYnVuY2gpLCAobikgPT5cbiAgICAgICAgdHVwbGUyKG4sIHRoaXMuYWRqLmdldChuKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgbm9kZU5icnMgb2Ygbm9kZXNOYnJzKSB7XG4gICAgICBmb3IgKHZhciBuYnJEYXRhIG9mIG5vZGVOYnJzWzFdKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbbm9kZU5icnNbMF0sIG5ickRhdGFbMF1dO1xuICAgICAgICBpZiAob3B0RGF0YSkge1xuICAgICAgICAgIHJlc3VsdFsyXSA9IG5ickRhdGFbMV07XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldmVyc2Uob3B0Q29weSA9IHRydWUpIHtcbiAgICB2YXIgSDtcbiAgICBpZiAob3B0Q29weSkge1xuICAgICAgSCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG51bGwsIHtcbiAgICAgICAgbmFtZTogXCJSZXZlcnNlIG9mIChcIiArIHRoaXMubmFtZSArIFwiKVwiLFxuICAgICAgfSk7XG4gICAgICBILmFkZE5vZGVzRnJvbSh0aGlzKTtcbiAgICAgIEguYWRkRWRnZXNGcm9tKFxuICAgICAgICBtYXBJdGVyYXRvcih0aGlzLmVkZ2VzSXRlcihudWxsLCB0cnVlKSwgKGVkZ2UpID0+XG4gICAgICAgICAgdHVwbGUzYyhlZGdlWzFdLCBlZGdlWzBdLCBkZWVwY29weShlZGdlWzJdKSwgZWRnZSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIEguZ3JhcGggPSBkZWVwY29weSh0aGlzLmdyYXBoKTtcbiAgICAgIEgubm9kZSA9IGRlZXBjb3B5KHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0aGlzUHJlZCA9IHRoaXMucHJlZDtcbiAgICAgIHZhciB0aGlzU3VjYyA9IHRoaXMuc3VjYztcblxuICAgICAgdGhpcy5zdWNjID0gdGhpc1ByZWQ7XG4gICAgICB0aGlzLnByZWQgPSB0aGlzU3VjYztcbiAgICAgIHRoaXMuYWRqID0gdGhpcy5zdWNjO1xuICAgICAgSCA9IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBIO1xuICB9XG5cbiAgc3VjY2Vzc29yc0l0ZXIobikge1xuICAgIHZhciBuYnJzID0gdGhpcy5zdWNjLmdldChuKTtcbiAgICBpZiAobmJycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmJycy5rZXlzKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBKU05ldHdvcmtYRXJyb3IoXG4gICAgICBzcHJpbnRmKCdUaGUgbm9kZSBcIiVqXCIgaXMgbm90IGluIHRoZSBkaWdyYXBoLicsIG4pXG4gICAgKTtcbiAgfVxuXG4gIHByZWRlY2Vzc29yc0l0ZXIobikge1xuICAgIHZhciBuYnJzID0gdGhpcy5wcmVkLmdldChuKTtcbiAgICBpZiAobmJycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmJycy5rZXlzKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBKU05ldHdvcmtYRXJyb3IoXG4gICAgICBzcHJpbnRmKCdUaGUgbm9kZSBcIiVqXCIgaXMgbm90IGluIHRoZSBkaWdyYXBoLicsIG4pXG4gICAgKTtcbiAgfVxuXG4gIHN1Y2Nlc3NvcnMobikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3VjY2Vzc29yc0l0ZXIobikpO1xuICB9XG5cbiAgcHJlZGVjZXNzb3JzKG4pIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnByZWRlY2Vzc29yc0l0ZXIobikpO1xuICB9XG59XG5cbmNsYXNzIEpTTmV0d29ya1hFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gXCJKU05ldHdvcmtYRXhjZXB0aW9uXCI7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxufVxuXG5jbGFzcyBKU05ldHdvcmtYQWxnb3JpdGhtRXJyb3IgZXh0ZW5kcyBKU05ldHdvcmtYRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiSlNOZXR3b3JrWEFsZ29yaXRobUVycm9yXCI7XG4gIH1cbn1cblxuY2xhc3MgSlNOZXR3b3JrWEVycm9yIGV4dGVuZHMgSlNOZXR3b3JrWEV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkpTTmV0d29ya1hFcnJvclwiO1xuICB9XG59XG5cbmNsYXNzIEpTTmV0d29ya1hVbmZlYXNpYmxlIGV4dGVuZHMgSlNOZXR3b3JrWEFsZ29yaXRobUVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiSlNOZXR3b3JrWFVuZmVhc2libGVcIjtcbiAgfVxufVxuXG5jbGFzcyBKU05ldHdvcmtYTm9QYXRoIGV4dGVuZHMgSlNOZXR3b3JrWFVuZmVhc2libGUge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gXCJKU05ldHdvcmtYTm9QYXRoXCI7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gZnJvbSBMb0Rhc2gsIG5lZWRlZCBieSBmdW5jdGlvbnMgZnJvbSBKU05ldHdvcmtYXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCI7XG59XG5cbi8vIGZ1bmN0aW9uIGZyb20gTG9EYXNoLCBuZWVkZWQgYnkgZnVuY3Rpb25zIGZyb20gSlNOZXR3b3JrWFxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHZhciBib29sVGFnID0gXCJbb2JqZWN0IEJvb2xlYW5dXCI7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPT09IHRydWUgfHxcbiAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09IGJvb2xUYWcpXG4gICk7XG59XG4iLCIvKiEgSGFtbWVyLkpTIC0gdjIuMC44IC0gMjAxNi0wNC0yM1xuICogaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgSm9yaWsgVGFuZ2VsZGVyO1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlICovXG4hZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShhLGIsYyl7cmV0dXJuIHNldFRpbWVvdXQoaihhLGMpLGIpfWZ1bmN0aW9uIGYoYSxiLGMpe3JldHVybiBBcnJheS5pc0FycmF5KGEpPyhnKGEsY1tiXSxjKSwhMCk6ITF9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gaChiLGMsZCl7dmFyIGU9XCJERVBSRUNBVEVEIE1FVEhPRDogXCIrYytcIlxcblwiK2QrXCIgQVQgXFxuXCI7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9bmV3IEVycm9yKFwiZ2V0LXN0YWNrLXRyYWNlXCIpLGQ9YyYmYy5zdGFjaz9jLnN0YWNrLnJlcGxhY2UoL15bXlxcKF0rP1tcXG4kXS9nbSxcIlwiKS5yZXBsYWNlKC9eXFxzK2F0XFxzKy9nbSxcIlwiKS5yZXBsYWNlKC9eT2JqZWN0Ljxhbm9ueW1vdXM+XFxzKlxcKC9nbSxcInthbm9ueW1vdXN9KClAXCIpOlwiVW5rbm93biBTdGFjayBUcmFjZVwiLGY9YS5jb25zb2xlJiYoYS5jb25zb2xlLndhcm58fGEuY29uc29sZS5sb2cpO3JldHVybiBmJiZmLmNhbGwoYS5jb25zb2xlLGUsZCksYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkoYSxiLGMpe3ZhciBkLGU9Yi5wcm90b3R5cGU7ZD1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUpLGQuY29uc3RydWN0b3I9YSxkLl9zdXBlcj1lLGMmJmxhKGQsYyl9ZnVuY3Rpb24gaihhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gayhhLGIpe3JldHVybiB0eXBlb2YgYT09b2E/YS5hcHBseShiP2JbMF18fGQ6ZCxiKTphfWZ1bmN0aW9uIGwoYSxiKXtyZXR1cm4gYT09PWQ/YjphfWZ1bmN0aW9uIG0oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG4oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG8oYSxiKXtmb3IoO2E7KXtpZihhPT1iKXJldHVybiEwO2E9YS5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIHAoYSxiKXtyZXR1cm4gYS5pbmRleE9mKGIpPi0xfWZ1bmN0aW9uIHEoYSl7cmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpfWZ1bmN0aW9uIHIoYSxiLGMpe2lmKGEuaW5kZXhPZiYmIWMpcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoOyl7aWYoYyYmYVtkXVtjXT09Ynx8IWMmJmFbZF09PT1iKXJldHVybiBkO2QrK31yZXR1cm4tMX1mdW5jdGlvbiBzKGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLDApfWZ1bmN0aW9uIHQoYSxiLGMpe2Zvcih2YXIgZD1bXSxlPVtdLGY9MDtmPGEubGVuZ3RoOyl7dmFyIGc9Yj9hW2ZdW2JdOmFbZl07cihlLGcpPDAmJmQucHVzaChhW2ZdKSxlW2ZdPWcsZisrfXJldHVybiBjJiYoZD1iP2Quc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBhW2JdPmNbYl19KTpkLnNvcnQoKSksZH1mdW5jdGlvbiB1KGEsYil7Zm9yKHZhciBjLGUsZj1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxnPTA7ZzxtYS5sZW5ndGg7KXtpZihjPW1hW2ddLGU9Yz9jK2Y6YixlIGluIGEpcmV0dXJuIGU7ZysrfXJldHVybiBkfWZ1bmN0aW9uIHYoKXtyZXR1cm4gdWErK31mdW5jdGlvbiB3KGIpe3ZhciBjPWIub3duZXJEb2N1bWVudHx8YjtyZXR1cm4gYy5kZWZhdWx0Vmlld3x8Yy5wYXJlbnRXaW5kb3d8fGF9ZnVuY3Rpb24geChhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtrKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiB5KGEpe3ZhciBiLGM9YS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIG5ldyhiPWM/Yzp4YT9NOnlhP1A6d2E/UjpMKShhLHopfWZ1bmN0aW9uIHooYSxiLGMpe3ZhciBkPWMucG9pbnRlcnMubGVuZ3RoLGU9Yy5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoLGY9YiZFYSYmZC1lPT09MCxnPWImKEdhfEhhKSYmZC1lPT09MDtjLmlzRmlyc3Q9ISFmLGMuaXNGaW5hbD0hIWcsZiYmKGEuc2Vzc2lvbj17fSksYy5ldmVudFR5cGU9YixBKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIEEoYSxiKXt2YXIgYz1hLnNlc3Npb24sZD1iLnBvaW50ZXJzLGU9ZC5sZW5ndGg7Yy5maXJzdElucHV0fHwoYy5maXJzdElucHV0PUQoYikpLGU+MSYmIWMuZmlyc3RNdWx0aXBsZT9jLmZpcnN0TXVsdGlwbGU9RChiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPUUoZCk7Yi50aW1lU3RhbXA9cmEoKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPUkoaCxpKSxiLmRpc3RhbmNlPUgoaCxpKSxCKGMsYiksYi5vZmZzZXREaXJlY3Rpb249RyhiLmRlbHRhWCxiLmRlbHRhWSk7dmFyIGo9RihiLmRlbHRhVGltZSxiLmRlbHRhWCxiLmRlbHRhWSk7Yi5vdmVyYWxsVmVsb2NpdHlYPWoueCxiLm92ZXJhbGxWZWxvY2l0eVk9ai55LGIub3ZlcmFsbFZlbG9jaXR5PXFhKGoueCk+cWEoai55KT9qLng6ai55LGIuc2NhbGU9Zz9LKGcucG9pbnRlcnMsZCk6MSxiLnJvdGF0aW9uPWc/SihnLnBvaW50ZXJzLGQpOjAsYi5tYXhQb2ludGVycz1jLnByZXZJbnB1dD9iLnBvaW50ZXJzLmxlbmd0aD5jLnByZXZJbnB1dC5tYXhQb2ludGVycz9iLnBvaW50ZXJzLmxlbmd0aDpjLnByZXZJbnB1dC5tYXhQb2ludGVyczpiLnBvaW50ZXJzLmxlbmd0aCxDKGMsYik7dmFyIGs9YS5lbGVtZW50O28oYi5zcmNFdmVudC50YXJnZXQsaykmJihrPWIuc3JjRXZlbnQudGFyZ2V0KSxiLnRhcmdldD1rfWZ1bmN0aW9uIEIoYSxiKXt2YXIgYz1iLmNlbnRlcixkPWEub2Zmc2V0RGVsdGF8fHt9LGU9YS5wcmV2RGVsdGF8fHt9LGY9YS5wcmV2SW5wdXR8fHt9O2IuZXZlbnRUeXBlIT09RWEmJmYuZXZlbnRUeXBlIT09R2F8fChlPWEucHJldkRlbHRhPXt4OmYuZGVsdGFYfHwwLHk6Zi5kZWx0YVl8fDB9LGQ9YS5vZmZzZXREZWx0YT17eDpjLngseTpjLnl9KSxiLmRlbHRhWD1lLngrKGMueC1kLngpLGIuZGVsdGFZPWUueSsoYy55LWQueSl9ZnVuY3Rpb24gQyhhLGIpe3ZhciBjLGUsZixnLGg9YS5sYXN0SW50ZXJ2YWx8fGIsaT1iLnRpbWVTdGFtcC1oLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9SGEmJihpPkRhfHxoLnZlbG9jaXR5PT09ZCkpe3ZhciBqPWIuZGVsdGFYLWguZGVsdGFYLGs9Yi5kZWx0YVktaC5kZWx0YVksbD1GKGksaixrKTtlPWwueCxmPWwueSxjPXFhKGwueCk+cWEobC55KT9sLng6bC55LGc9RyhqLGspLGEubGFzdEludGVydmFsPWJ9ZWxzZSBjPWgudmVsb2NpdHksZT1oLnZlbG9jaXR5WCxmPWgudmVsb2NpdHlZLGc9aC5kaXJlY3Rpb247Yi52ZWxvY2l0eT1jLGIudmVsb2NpdHlYPWUsYi52ZWxvY2l0eVk9ZixiLmRpcmVjdGlvbj1nfWZ1bmN0aW9uIEQoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucG9pbnRlcnMubGVuZ3RoOyliW2NdPXtjbGllbnRYOnBhKGEucG9pbnRlcnNbY10uY2xpZW50WCksY2xpZW50WTpwYShhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpyYSgpLHBvaW50ZXJzOmIsY2VudGVyOkUoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gRShhKXt2YXIgYj1hLmxlbmd0aDtpZigxPT09YilyZXR1cm57eDpwYShhWzBdLmNsaWVudFgpLHk6cGEoYVswXS5jbGllbnRZKX07Zm9yKHZhciBjPTAsZD0wLGU9MDtiPmU7KWMrPWFbZV0uY2xpZW50WCxkKz1hW2VdLmNsaWVudFksZSsrO3JldHVybnt4OnBhKGMvYikseTpwYShkL2IpfX1mdW5jdGlvbiBGKGEsYixjKXtyZXR1cm57eDpiL2F8fDAseTpjL2F8fDB9fWZ1bmN0aW9uIEcoYSxiKXtyZXR1cm4gYT09PWI/SWE6cWEoYSk+PXFhKGIpPzA+YT9KYTpLYTowPmI/TGE6TWF9ZnVuY3Rpb24gSChhLGIsYyl7Y3x8KGM9UWEpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQqZCtlKmUpfWZ1bmN0aW9uIEkoYSxiLGMpe2N8fChjPVFhKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIDE4MCpNYXRoLmF0YW4yKGUsZCkvTWF0aC5QSX1mdW5jdGlvbiBKKGEsYil7cmV0dXJuIEkoYlsxXSxiWzBdLFJhKStJKGFbMV0sYVswXSxSYSl9ZnVuY3Rpb24gSyhhLGIpe3JldHVybiBIKGJbMF0sYlsxXSxSYSkvSChhWzBdLGFbMV0sUmEpfWZ1bmN0aW9uIEwoKXt0aGlzLmV2RWw9VGEsdGhpcy5ldldpbj1VYSx0aGlzLnByZXNzZWQ9ITEseC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTSgpe3RoaXMuZXZFbD1YYSx0aGlzLmV2V2luPVlhLHguYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBOKCl7dGhpcy5ldlRhcmdldD0kYSx0aGlzLmV2V2luPV9hLHRoaXMuc3RhcnRlZD0hMSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBPKGEsYil7dmFyIGM9cyhhLnRvdWNoZXMpLGQ9cyhhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoR2F8SGEpJiYoYz10KGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gUCgpe3RoaXMuZXZUYXJnZXQ9YmIsdGhpcy50YXJnZXRJZHM9e30seC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUShhLGIpe3ZhciBjPXMoYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKEVhfEZhKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXMoYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG8oYS50YXJnZXQsaSl9KSxiPT09RWEpZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoR2F8SGEpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W3QoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBSKCl7eC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9aih0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgUCh0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgTCh0aGlzLm1hbmFnZXIsYSksdGhpcy5wcmltYXJ5VG91Y2g9bnVsbCx0aGlzLmxhc3RUb3VjaGVzPVtdfWZ1bmN0aW9uIFMoYSxiKXthJkVhPyh0aGlzLnByaW1hcnlUb3VjaD1iLmNoYW5nZWRQb2ludGVyc1swXS5pZGVudGlmaWVyLFQuY2FsbCh0aGlzLGIpKTphJihHYXxIYSkmJlQuY2FsbCh0aGlzLGIpfWZ1bmN0aW9uIFQoYSl7dmFyIGI9YS5jaGFuZ2VkUG9pbnRlcnNbMF07aWYoYi5pZGVudGlmaWVyPT09dGhpcy5wcmltYXJ5VG91Y2gpe3ZhciBjPXt4OmIuY2xpZW50WCx5OmIuY2xpZW50WX07dGhpcy5sYXN0VG91Y2hlcy5wdXNoKGMpO3ZhciBkPXRoaXMubGFzdFRvdWNoZXMsZT1mdW5jdGlvbigpe3ZhciBhPWQuaW5kZXhPZihjKTthPi0xJiZkLnNwbGljZShhLDEpfTtzZXRUaW1lb3V0KGUsY2IpfX1mdW5jdGlvbiBVKGEpe2Zvcih2YXIgYj1hLnNyY0V2ZW50LmNsaWVudFgsYz1hLnNyY0V2ZW50LmNsaWVudFksZD0wO2Q8dGhpcy5sYXN0VG91Y2hlcy5sZW5ndGg7ZCsrKXt2YXIgZT10aGlzLmxhc3RUb3VjaGVzW2RdLGY9TWF0aC5hYnMoYi1lLngpLGc9TWF0aC5hYnMoYy1lLnkpO2lmKGRiPj1mJiZkYj49ZylyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBWKGEsYil7dGhpcy5tYW5hZ2VyPWEsdGhpcy5zZXQoYil9ZnVuY3Rpb24gVyhhKXtpZihwKGEsamIpKXJldHVybiBqYjt2YXIgYj1wKGEsa2IpLGM9cChhLGxiKTtyZXR1cm4gYiYmYz9qYjpifHxjP2I/a2I6bGI6cChhLGliKT9pYjpoYn1mdW5jdGlvbiBYKCl7aWYoIWZiKXJldHVybiExO3ZhciBiPXt9LGM9YS5DU1MmJmEuQ1NTLnN1cHBvcnRzO3JldHVybltcImF1dG9cIixcIm1hbmlwdWxhdGlvblwiLFwicGFuLXlcIixcInBhbi14XCIsXCJwYW4teCBwYW4teVwiLFwibm9uZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGQpe2JbZF09Yz9hLkNTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLGQpOiEwfSksYn1mdW5jdGlvbiBZKGEpe3RoaXMub3B0aW9ucz1sYSh7fSx0aGlzLmRlZmF1bHRzLGF8fHt9KSx0aGlzLmlkPXYoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnMuZW5hYmxlPWwodGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1uYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFooYSl7cmV0dXJuIGEmc2I/XCJjYW5jZWxcIjphJnFiP1wiZW5kXCI6YSZwYj9cIm1vdmVcIjphJm9iP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uICQoYSl7cmV0dXJuIGE9PU1hP1wiZG93blwiOmE9PUxhP1widXBcIjphPT1KYT9cImxlZnRcIjphPT1LYT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBfKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gYWEoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBiYSgpe2FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIGNhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsfWZ1bmN0aW9uIGVhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGZhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGdhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wVGltZT0hMSx0aGlzLnBDZW50ZXI9ITEsdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsLHRoaXMuY291bnQ9MH1mdW5jdGlvbiBoYShhLGIpe3JldHVybiBiPWJ8fHt9LGIucmVjb2duaXplcnM9bChiLnJlY29nbml6ZXJzLGhhLmRlZmF1bHRzLnByZXNldCksbmV3IGlhKGEsYil9ZnVuY3Rpb24gaWEoYSxiKXt0aGlzLm9wdGlvbnM9bGEoe30saGEuZGVmYXVsdHMsYnx8e30pLHRoaXMub3B0aW9ucy5pbnB1dFRhcmdldD10aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXR8fGEsdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5yZWNvZ25pemVycz1bXSx0aGlzLm9sZENzc1Byb3BzPXt9LHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9eSh0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBWKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxqYSh0aGlzLCEwKSxnKHRoaXMub3B0aW9ucy5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5lbGVtZW50O2lmKGMuc3R5bGUpe3ZhciBkO2coYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGUsZil7ZD11KGMuc3R5bGUsZiksYj8oYS5vbGRDc3NQcm9wc1tkXT1jLnN0eWxlW2RdLGMuc3R5bGVbZF09ZSk6Yy5zdHlsZVtkXT1hLm9sZENzc1Byb3BzW2RdfHxcIlwifSksYnx8KGEub2xkQ3NzUHJvcHM9e30pfX1mdW5jdGlvbiBrYShhLGMpe3ZhciBkPWIuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtkLmluaXRFdmVudChhLCEwLCEwKSxkLmdlc3R1cmU9YyxjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpfXZhciBsYSxtYT1bXCJcIixcIndlYmtpdFwiLFwiTW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0sbmE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG9hPVwiZnVuY3Rpb25cIixwYT1NYXRoLnJvdW5kLHFhPU1hdGguYWJzLHJhPURhdGUubm93O2xhPVwiZnVuY3Rpb25cIiE9dHlwZW9mIE9iamVjdC5hc3NpZ24/ZnVuY3Rpb24oYSl7aWYoYT09PWR8fG51bGw9PT1hKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7Zm9yKHZhciBiPU9iamVjdChhKSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyl7dmFyIGU9YXJndW1lbnRzW2NdO2lmKGUhPT1kJiZudWxsIT09ZSlmb3IodmFyIGYgaW4gZSllLmhhc093blByb3BlcnR5KGYpJiYoYltmXT1lW2ZdKX1yZXR1cm4gYn06T2JqZWN0LmFzc2lnbjt2YXIgc2E9aChmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfSxcImV4dGVuZFwiLFwiVXNlIGBhc3NpZ25gLlwiKSx0YT1oKGZ1bmN0aW9uKGEsYil7cmV0dXJuIHNhKGEsYiwhMCl9LFwibWVyZ2VcIixcIlVzZSBgYXNzaWduYC5cIiksdWE9MSx2YT0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksd2E9XCJvbnRvdWNoc3RhcnRcImluIGEseGE9dShhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCx5YT13YSYmdmEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx6YT1cInRvdWNoXCIsQWE9XCJwZW5cIixCYT1cIm1vdXNlXCIsQ2E9XCJraW5lY3RcIixEYT0yNSxFYT0xLEZhPTIsR2E9NCxIYT04LElhPTEsSmE9MixLYT00LExhPTgsTWE9MTYsTmE9SmF8S2EsT2E9TGF8TWEsUGE9TmF8T2EsUWE9W1wieFwiLFwieVwiXSxSYT1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO3gucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZtKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZtKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZtKHcodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm4odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm4odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm4odyh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBTYT17bW91c2Vkb3duOkVhLG1vdXNlbW92ZTpGYSxtb3VzZXVwOkdhfSxUYT1cIm1vdXNlZG93blwiLFVhPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtpKEwseCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1TYVthLnR5cGVdO2ImRWEmJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZGYSYmMSE9PWEud2hpY2gmJihiPUdhKSx0aGlzLnByZXNzZWQmJihiJkdhJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpCYSxzcmNFdmVudDphfSkpfX0pO3ZhciBWYT17cG9pbnRlcmRvd246RWEscG9pbnRlcm1vdmU6RmEscG9pbnRlcnVwOkdhLHBvaW50ZXJjYW5jZWw6SGEscG9pbnRlcm91dDpIYX0sV2E9ezI6emEsMzpBYSw0OkJhLDU6Q2F9LFhhPVwicG9pbnRlcmRvd25cIixZYT1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmIWEuUG9pbnRlckV2ZW50JiYoWGE9XCJNU1BvaW50ZXJEb3duXCIsWWE9XCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSxpKE0seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0b3JlLGM9ITEsZD1hLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIixcIlwiKSxlPVZhW2RdLGY9V2FbYS5wb2ludGVyVHlwZV18fGEucG9pbnRlclR5cGUsZz1mPT16YSxoPXIoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJkVhJiYoMD09PWEuYnV0dG9ufHxnKT8wPmgmJihiLnB1c2goYSksaD1iLmxlbmd0aC0xKTplJihHYXxIYSkmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciBaYT17dG91Y2hzdGFydDpFYSx0b3VjaG1vdmU6RmEsdG91Y2hlbmQ6R2EsdG91Y2hjYW5jZWw6SGF9LCRhPVwidG91Y2hzdGFydFwiLF9hPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtpKE4seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1aYVthLnR5cGVdO2lmKGI9PT1FYSYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1PLmNhbGwodGhpcyxhLGIpO2ImKEdhfEhhKSYmY1swXS5sZW5ndGgtY1sxXS5sZW5ndGg9PT0wJiYodGhpcy5zdGFydGVkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnphLHNyY0V2ZW50OmF9KX19fSk7dmFyIGFiPXt0b3VjaHN0YXJ0OkVhLHRvdWNobW92ZTpGYSx0b3VjaGVuZDpHYSx0b3VjaGNhbmNlbDpIYX0sYmI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2koUCx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPWFiW2EudHlwZV0sYz1RLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6emEsc3JjRXZlbnQ6YX0pfX0pO3ZhciBjYj0yNTAwLGRiPTI1O2koUix4LHtoYW5kbGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJUeXBlPT16YSxlPWMucG9pbnRlclR5cGU9PUJhO2lmKCEoZSYmYy5zb3VyY2VDYXBhYmlsaXRpZXMmJmMuc291cmNlQ2FwYWJpbGl0aWVzLmZpcmVzVG91Y2hFdmVudHMpKXtpZihkKVMuY2FsbCh0aGlzLGIsYyk7ZWxzZSBpZihlJiZVLmNhbGwodGhpcyxjKSlyZXR1cm47dGhpcy5jYWxsYmFjayhhLGIsYyl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy50b3VjaC5kZXN0cm95KCksdGhpcy5tb3VzZS5kZXN0cm95KCl9fSk7dmFyIGViPXUobmEuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxmYj1lYiE9PWQsZ2I9XCJjb21wdXRlXCIsaGI9XCJhdXRvXCIsaWI9XCJtYW5pcHVsYXRpb25cIixqYj1cIm5vbmVcIixrYj1cInBhbi14XCIsbGI9XCJwYW4teVwiLG1iPVgoKTtWLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PWdiJiYoYT10aGlzLmNvbXB1dGUoKSksZmImJnRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlJiZtYlthXSYmKHRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlW2ViXT1hKSx0aGlzLmFjdGlvbnM9YS50b0xvd2VyQ2FzZSgpLnRyaW0oKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zZXQodGhpcy5tYW5hZ2VyLm9wdGlvbnMudG91Y2hBY3Rpb24pfSxjb21wdXRlOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIGcodGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGIpe2soYi5vcHRpb25zLmVuYWJsZSxbYl0pJiYoYT1hLmNvbmNhdChiLmdldFRvdWNoQWN0aW9uKCkpKX0pLFcoYS5qb2luKFwiIFwiKSl9LHByZXZlbnREZWZhdWx0czpmdW5jdGlvbihhKXt2YXIgYj1hLnNyY0V2ZW50LGM9YS5vZmZzZXREaXJlY3Rpb247aWYodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKXJldHVybiB2b2lkIGIucHJldmVudERlZmF1bHQoKTt2YXIgZD10aGlzLmFjdGlvbnMsZT1wKGQsamIpJiYhbWJbamJdLGY9cChkLGxiKSYmIW1iW2xiXSxnPXAoZCxrYikmJiFtYltrYl07aWYoZSl7dmFyIGg9MT09PWEucG9pbnRlcnMubGVuZ3RoLGk9YS5kaXN0YW5jZTwyLGo9YS5kZWx0YVRpbWU8MjUwO2lmKGgmJmkmJmopcmV0dXJufXJldHVybiBnJiZmP3ZvaWQgMDplfHxmJiZjJk5hfHxnJiZjJk9hP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9LHByZXZlbnRTcmM6ZnVuY3Rpb24oYSl7dGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkPSEwLGEucHJldmVudERlZmF1bHQoKX19O3ZhciBuYj0xLG9iPTIscGI9NCxxYj04LHJiPXFiLHNiPTE2LHRiPTMyO1kucHJvdG90eXBlPXtkZWZhdWx0czp7fSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGxhKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1fKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBmKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9XyhhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPV8oYSx0aGlzKSwtMT09PXIoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1fKGEsdGhpcyk7dmFyIGI9cih0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtjLm1hbmFnZXIuZW1pdChiLGEpfXZhciBjPXRoaXMsZD10aGlzLnN0YXRlO3FiPmQmJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpLGIoYy5vcHRpb25zLmV2ZW50KSxhLmFkZGl0aW9uYWxFdmVudCYmYihhLmFkZGl0aW9uYWxFdmVudCksZD49cWImJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6dm9pZCh0aGlzLnN0YXRlPXRiKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKHRifG5iKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9bGEoe30sYSk7cmV0dXJuIGsodGhpcy5vcHRpb25zLmVuYWJsZSxbdGhpcyxiXSk/KHRoaXMuc3RhdGUmKHJifHNifHRiKSYmKHRoaXMuc3RhdGU9bmIpLHRoaXMuc3RhdGU9dGhpcy5wcm9jZXNzKGIpLHZvaWQodGhpcy5zdGF0ZSYob2J8cGJ8cWJ8c2IpJiZ0aGlzLnRyeUVtaXQoYikpKToodGhpcy5yZXNldCgpLHZvaWQodGhpcy5zdGF0ZT10YikpfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0saShhYSxZLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKG9ifHBiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJkhhfHwhZSk/YnxzYjpkfHxlP2MmR2E/YnxxYjpiJm9iP2J8cGI6b2I6dGJ9fSksaShiYSxhYSx7ZGVmYXVsdHM6e2V2ZW50OlwicGFuXCIsdGhyZXNob2xkOjEwLHBvaW50ZXJzOjEsZGlyZWN0aW9uOlBhfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5kaXJlY3Rpb24sYj1bXTtyZXR1cm4gYSZOYSYmYi5wdXNoKGxiKSxhJk9hJiZiLnB1c2goa2IpLGJ9LGRpcmVjdGlvblRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9ITAsZD1hLmRpc3RhbmNlLGU9YS5kaXJlY3Rpb24sZj1hLmRlbHRhWCxnPWEuZGVsdGFZO3JldHVybiBlJmIuZGlyZWN0aW9ufHwoYi5kaXJlY3Rpb24mTmE/KGU9MD09PWY/SWE6MD5mP0phOkthLGM9ZiE9dGhpcy5wWCxkPU1hdGguYWJzKGEuZGVsdGFYKSk6KGU9MD09PWc/SWE6MD5nP0xhOk1hLGM9ZyE9dGhpcy5wWSxkPU1hdGguYWJzKGEuZGVsdGFZKSkpLGEuZGlyZWN0aW9uPWUsYyYmZD5iLnRocmVzaG9sZCYmZSZiLmRpcmVjdGlvbn0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGFhLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJm9ifHwhKHRoaXMuc3RhdGUmb2IpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj0kKGEuZGlyZWN0aW9uKTtiJiYoYS5hZGRpdGlvbmFsRXZlbnQ9dGhpcy5vcHRpb25zLmV2ZW50K2IpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoY2EsYWEse2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bamJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJm9iKX0sZW1pdDpmdW5jdGlvbihhKXtpZigxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO2EuYWRkaXRpb25hbEV2ZW50PXRoaXMub3B0aW9ucy5ldmVudCtifXRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoZGEsWSx7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6MjUxLHRocmVzaG9sZDo5fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltoYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKEdhfEhhKSYmIWYpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmRWEpdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXJiLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZHYSlyZXR1cm4gcmI7cmV0dXJuIHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PXJiJiYoYSYmYS5ldmVudFR5cGUmR2E/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPXJhKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLGkoZWEsYWEse2RlZmF1bHRzOntldmVudDpcInJvdGF0ZVwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2piXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEucm90YXRpb24pPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmb2IpfX0pLGkoZmEsYWEse2RlZmF1bHRzOntldmVudDpcInN3aXBlXCIsdGhyZXNob2xkOjEwLHZlbG9jaXR5Oi4zLGRpcmVjdGlvbjpOYXxPYSxwb2ludGVyczoxfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybiBiYS5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBjJihOYXxPYSk/Yj1hLm92ZXJhbGxWZWxvY2l0eTpjJk5hP2I9YS5vdmVyYWxsVmVsb2NpdHlYOmMmT2EmJihiPWEub3ZlcmFsbFZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZjJmEub2Zmc2V0RGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJmEubWF4UG9pbnRlcnM9PXRoaXMub3B0aW9ucy5wb2ludGVycyYmcWEoYik+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZHYX0sZW1pdDpmdW5jdGlvbihhKXt2YXIgYj0kKGEub2Zmc2V0RGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSksaShnYSxZLHtkZWZhdWx0czp7ZXZlbnQ6XCJ0YXBcIixwb2ludGVyczoxLHRhcHM6MSxpbnRlcnZhbDozMDAsdGltZToyNTAsdGhyZXNob2xkOjkscG9zVGhyZXNob2xkOjEwfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltpYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPGIudGltZTtpZih0aGlzLnJlc2V0KCksYS5ldmVudFR5cGUmRWEmJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZiYmYyl7aWYoYS5ldmVudFR5cGUhPUdhKXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGc9dGhpcy5wVGltZT9hLnRpbWVTdGFtcC10aGlzLnBUaW1lPGIuaW50ZXJ2YWw6ITAsaD0hdGhpcy5wQ2VudGVyfHxIKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsaCYmZz90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBpPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1pKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1yYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxvYik6cmJ9cmV0dXJuIHRifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT10Yn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1yYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksaGEuVkVSU0lPTj1cIjIuMC44XCIsaGEuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjpnYixlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbZWEse2VuYWJsZTohMX1dLFtjYSx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtmYSx7ZGlyZWN0aW9uOk5hfV0sW2JhLHtkaXJlY3Rpb246TmF9LFtcInN3aXBlXCJdXSxbZ2FdLFtnYSx7ZXZlbnQ6XCJkb3VibGV0YXBcIix0YXBzOjJ9LFtcInRhcFwiXV0sW2RhXV0sY3NzUHJvcHM6e3VzZXJTZWxlY3Q6XCJub25lXCIsdG91Y2hTZWxlY3Q6XCJub25lXCIsdG91Y2hDYWxsb3V0Olwibm9uZVwiLGNvbnRlbnRab29taW5nOlwibm9uZVwiLHVzZXJEcmFnOlwibm9uZVwiLHRhcEhpZ2hsaWdodENvbG9yOlwicmdiYSgwLDAsMCwwKVwifX07dmFyIHViPTEsdmI9MjtpYS5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXtyZXR1cm4gbGEodGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT92Yjp1Yn0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJnJiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT12Ynx8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKG9ifHBifHFiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgWSlyZXR1cm4gYTtmb3IodmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS5vcHRpb25zLmV2ZW50PT1hKXJldHVybiBiW2NdO3JldHVybiBudWxsfSxhZGQ6ZnVuY3Rpb24oYSl7aWYoZihhLFwiYWRkXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiYmdGhpcy5yZW1vdmUoYiksdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLGEubWFuYWdlcj10aGlzLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlbW92ZVwiLHRoaXMpKXJldHVybiB0aGlzO2lmKGE9dGhpcy5nZXQoYSkpe3ZhciBiPXRoaXMucmVjb2duaXplcnMsYz1yKGIsYSk7LTEhPT1jJiYoYi5zcGxpY2UoYywxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpKX1yZXR1cm4gdGhpc30sb246ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCYmYiE9PWQpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIGcocShhKSxmdW5jdGlvbihhKXtjW2FdPWNbYV18fFtdLGNbYV0ucHVzaChiKX0pLHRoaXN9fSxvZmY6ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCl7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhxKGEpLGZ1bmN0aW9uKGEpe2I/Y1thXSYmY1thXS5zcGxpY2UocihjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc319LGVtaXQ6ZnVuY3Rpb24oYSxiKXt0aGlzLm9wdGlvbnMuZG9tRXZlbnRzJiZrYShhLGIpO3ZhciBjPXRoaXMuaGFuZGxlcnNbYV0mJnRoaXMuaGFuZGxlcnNbYV0uc2xpY2UoKTtpZihjJiZjLmxlbmd0aCl7Yi50eXBlPWEsYi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2Iuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKX07Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDspY1tkXShiKSxkKyt9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50JiZqYSh0aGlzLCExKSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmVsZW1lbnQ9bnVsbH19LGxhKGhhLHtJTlBVVF9TVEFSVDpFYSxJTlBVVF9NT1ZFOkZhLElOUFVUX0VORDpHYSxJTlBVVF9DQU5DRUw6SGEsU1RBVEVfUE9TU0lCTEU6bmIsU1RBVEVfQkVHQU46b2IsU1RBVEVfQ0hBTkdFRDpwYixTVEFURV9FTkRFRDpxYixTVEFURV9SRUNPR05JWkVEOnJiLFNUQVRFX0NBTkNFTExFRDpzYixTVEFURV9GQUlMRUQ6dGIsRElSRUNUSU9OX05PTkU6SWEsRElSRUNUSU9OX0xFRlQ6SmEsRElSRUNUSU9OX1JJR0hUOkthLERJUkVDVElPTl9VUDpMYSxESVJFQ1RJT05fRE9XTjpNYSxESVJFQ1RJT05fSE9SSVpPTlRBTDpOYSxESVJFQ1RJT05fVkVSVElDQUw6T2EsRElSRUNUSU9OX0FMTDpQYSxNYW5hZ2VyOmlhLElucHV0OngsVG91Y2hBY3Rpb246VixUb3VjaElucHV0OlAsTW91c2VJbnB1dDpMLFBvaW50ZXJFdmVudElucHV0Ok0sVG91Y2hNb3VzZUlucHV0OlIsU2luZ2xlVG91Y2hJbnB1dDpOLFJlY29nbml6ZXI6WSxBdHRyUmVjb2duaXplcjphYSxUYXA6Z2EsUGFuOmJhLFN3aXBlOmZhLFBpbmNoOmNhLFJvdGF0ZTplYSxQcmVzczpkYSxvbjptLG9mZjpuLGVhY2g6ZyxtZXJnZTp0YSxleHRlbmQ6c2EsYXNzaWduOmxhLGluaGVyaXQ6aSxiaW5kRm46aixwcmVmaXhlZDp1fSk7dmFyIHdiPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhP2E6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTt3Yi5IYW1tZXI9aGEsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBoYX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWhhOmFbY109aGF9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhbW1lci5taW4uanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUJhc2VkR3JhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9ibGVtKSB7XG4gICAgICAgIHRoaXMucHJvYmxlbSA9IHByb2JsZW07XG4gICAgfVxuICAgIC8vIFVzZSBhIExJUyAoTG9uZ2VzdCBJbmNyZWFzaW5nIFN1YnNlcXVlbmNlKSBhbGdvcml0aG0gdG8gcmV0dXJuIHRoZSBpbmRleGVzXG4gICAgLy8gdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhhdCBzdWJzZXF1ZW5jZS5cbiAgICBpbnZlcnNlTElTSW5kaWNlcyhhcnIpIHtcbiAgICAgICAgLy8gR2V0IGFsbCBzdWJzZXF1ZW5jZXNcbiAgICAgICAgdmFyIGFsbFN1YnNlcXVlbmNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHN1YnNlcXVlbmNlRm9yQ3VycmVudCA9IFthcnJbaV1dLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBhcnJbaV0sXG4gICAgICAgICAgICAgICAgbGFzdEVsZW1lbnRBZGRlZCA9IC0xO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGk7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3Vic2VxdWVudCA9IGFycltqXTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2VxdWVudCA+IGN1cnJlbnQgJiYgbGFzdEVsZW1lbnRBZGRlZCA8IHN1YnNlcXVlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2VxdWVuY2VGb3JDdXJyZW50LnB1c2goc3Vic2VxdWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50QWRkZWQgPSBzdWJzZXF1ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbFN1YnNlcXVlbmNlcy5wdXNoKHN1YnNlcXVlbmNlRm9yQ3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlndXJlIG91dCB0aGUgbG9uZ2VzdCBvbmVcbiAgICAgICAgdmFyIGxvbmdlc3RTdWJzZXF1ZW5jZUxlbmd0aCA9IC0xO1xuICAgICAgICB2YXIgbG9uZ2VzdFN1YnNlcXVlbmNlO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFsbFN1YnNlcXVlbmNlcykge1xuICAgICAgICAgICAgdmFyIHN1YnMgPSBhbGxTdWJzZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBpZiAoc3Vicy5sZW5ndGggPiBsb25nZXN0U3Vic2VxdWVuY2VMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb25nZXN0U3Vic2VxdWVuY2VMZW5ndGggPSBzdWJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBsb25nZXN0U3Vic2VxdWVuY2UgPSBzdWJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW52ZXJzZSBpbmRleGVzXG4gICAgICAgIHZhciBpbmRleGVzID0gW107XG4gICAgICAgIHZhciBsSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxJbmRleCA+IGxvbmdlc3RTdWJzZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhcnJbaV0gPT0gbG9uZ2VzdFN1YnNlcXVlbmNlW2xJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICB9XG4gICAgLy8gZ3JhZGUgdGhhdCBlbGVtZW50LCByZXR1cm5pbmcgdGhlIHN0YXRlXG4gICAgZ3JhZGUoKSB7XG4gICAgICAgIHZhciBwcm9ibGVtID0gdGhpcy5wcm9ibGVtO1xuICAgICAgICBwcm9ibGVtLmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgdGhpcy5jb3JyZWN0TGluZXMgPSAwO1xuICAgICAgICB0aGlzLnBlcmNlbnRMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0SW5kZW50cyA9IDA7XG4gICAgICAgIHZhciBzb2x1dGlvbkxpbmVzID0gcHJvYmxlbS5zb2x1dGlvbjtcbiAgICAgICAgdmFyIGFuc3dlckxpbmVzID0gcHJvYmxlbS5hbnN3ZXJMaW5lcygpO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHN0YXRlO1xuICAgICAgICB0aGlzLnBlcmNlbnRMaW5lcyA9XG4gICAgICAgICAgICBNYXRoLm1pbihhbnN3ZXJMaW5lcy5sZW5ndGgsIHNvbHV0aW9uTGluZXMubGVuZ3RoKSAvXG4gICAgICAgICAgICBNYXRoLm1heChhbnN3ZXJMaW5lcy5sZW5ndGgsIHNvbHV0aW9uTGluZXMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGFuc3dlckxpbmVzLmxlbmd0aCA8IHNvbHV0aW9uTGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IFwiaW5jb3JyZWN0VG9vU2hvcnRcIjtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdExlbmd0aCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlckxpbmVzLmxlbmd0aCA9PSBzb2x1dGlvbkxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGVuZ3RoID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdExlbmd0aCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGNvZGUgKip0aGF0IGlzIHRoZXJlKiogaXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgdG9vIG11Y2ggb3IgdG9vIGxpdHRsZSBjb2RlIHRoaXMgb25seSBtYXR0ZXJzIGZvclxuICAgICAgICAvLyBjYWxjdWxhdGluZyBhIHBlcmNlbnRhZ2Ugc2NvcmUuXG4gICAgICAgIGxldCBpc0NvcnJlY3RPcmRlciA9IHRoaXMuY2hlY2tDb3JyZWN0T3JkZXJpbmcoc29sdXRpb25MaW5lcywgYW5zd2VyTGluZXMpXG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYmxvY2tzIGFyZSBpbmRlbnRlZCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IGlzQ29ycmVjdEluZGVudHMgPSB0aGlzLmNoZWNrQ29ycmVjdEluZGVudGF0aW9uKHNvbHV0aW9uTGluZXMsIGFuc3dlckxpbmVzKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc0NvcnJlY3RJbmRlbnRzICYmXG4gICAgICAgICAgICBpc0NvcnJlY3RPcmRlciAmJlxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8gUGVyZmVjdFxuICAgICAgICAgICAgc3RhdGUgPSBcImNvcnJlY3RcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcnJlY3RMZW5ndGggJiYgaXNDb3JyZWN0T3JkZXIpIHtcbiAgICAgICAgICAgIHN0YXRlID0gXCJpbmNvcnJlY3RJbmRlbnRcIjtcbiAgICAgICAgfSBlbHNlIGlmICghaXNDb3JyZWN0T3JkZXIgJiYgc3RhdGUgIT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IFwiaW5jb3JyZWN0TW92ZUJsb2Nrc1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudCgpO1xuICAgICAgICB0aGlzLmdyYWRlclN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNoZWNrQ29ycmVjdEluZGVudGF0aW9uKHNvbHV0aW9uTGluZXMsIGFuc3dlckxpbmVzKSB7XG4gICAgICAgIHRoaXMuaW5kZW50TGVmdCA9IFtdO1xuICAgICAgICB0aGlzLmluZGVudFJpZ2h0ID0gW107XG4gICAgICAgIGxldCBsb29wTGltaXQgPSBNYXRoLm1pbihzb2x1dGlvbkxpbmVzLmxlbmd0aCwgYW5zd2VyTGluZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wTGltaXQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFuc3dlckxpbmVzW2ldLnZpZXdJbmRlbnQoKSA8IGFuc3dlckxpbmVzW2ldLmluZGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZW50UmlnaHQucHVzaChhbnN3ZXJMaW5lc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuc3dlckxpbmVzW2ldLnZpZXdJbmRlbnQoKSA+IHNvbHV0aW9uTGluZXNbaV0uaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnRMZWZ0LnB1c2goYW5zd2VyTGluZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0SW5kZW50cyA9XG4gICAgICAgICAgICB0aGlzLmluZGVudExlZnQubGVuZ3RoICsgdGhpcy5pbmRlbnRSaWdodC5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5jb3JyZWN0SW5kZW50cyA9PSAwO1xuICAgIH1cblxuICAgIGNoZWNrQ29ycmVjdE9yZGVyaW5nKHNvbHV0aW9uTGluZXMsIGFuc3dlckxpbmVzKSB7XG4gICAgICAgIGxldCBpc0NvcnJlY3RPcmRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuY29ycmVjdExpbmVzID0gMDtcbiAgICAgICAgdGhpcy5zb2x1dGlvbkxlbmd0aCA9IHNvbHV0aW9uTGluZXMubGVuZ3RoO1xuICAgICAgICBsZXQgbG9vcExpbWl0ID0gTWF0aC5taW4oc29sdXRpb25MaW5lcy5sZW5ndGgsIGFuc3dlckxpbmVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcExpbWl0OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhbnN3ZXJMaW5lc1tpXS50ZXh0ICE9PSBzb2x1dGlvbkxpbmVzW2ldLnRleHQpIHtcbiAgICAgICAgICAgICAgICBpc0NvcnJlY3RPcmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RMaW5lcyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0NvcnJlY3RPcmRlclxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBlcmNlbnQoKSB7XG4gICAgICAgIGxldCBudW1MaW5lcyA9IHRoaXMucGVyY2VudExpbmVzICogMC4yO1xuICAgICAgICBsZXQgbGluZXMgPSB0aGlzLnByb2JsZW0uYW5zd2VyTGluZXMoKS5sZW5ndGg7XG4gICAgICAgIGxldCBudW1Db3JyZWN0QmxvY2tzID0gKHRoaXMuY29ycmVjdExpbmVzIC8gbGluZXMpICogMC40O1xuICAgICAgICBsZXQgbnVtQ29ycmVjdEluZGVudHMgPVxuICAgICAgICAgICAgKCh0aGlzLmNvcnJlY3RMaW5lcyAtIHRoaXMuaW5jb3JyZWN0SW5kZW50cykgLyBsaW5lcykgKiAwLjQ7XG5cbiAgICAgICAgdGhpcy5wcm9ibGVtLnBlcmNlbnQgPSBudW1MaW5lcyArIG51bUNvcnJlY3RCbG9ja3MgKyBudW1Db3JyZWN0SW5kZW50cztcbiAgICB9XG59XG4iLCIkLmkxOG4oKS5sb2FkKHtcbiAgICBlbjoge1xuICAgICAgICBtc2dfcGFyc29uX2NoZWNrX21lOiBcIkNoZWNrXCIsXG4gICAgICAgIG1zZ19wYXJzb25fcmVzZXQ6IFwiUmVzZXRcIixcbiAgICAgICAgbXNnX3BhcnNvbl9oZWxwOiBcIkhlbHAgbWVcIixcbiAgICAgICAgbXNnX3BhcnNvbl90b29fc2hvcnQ6IFwiWW91ciBhbnN3ZXIgaXMgdG9vIHNob3J0LiBBZGQgbW9yZSBibG9ja3MuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fZHJhZ19mcm9tX2hlcmU6IFwiRHJhZyBmcm9tIGhlcmVcIixcbiAgICAgICAgbXNnX3BhcnNvbl9kcmFnX3RvX2hlcmU6IFwiRHJvcCBibG9ja3MgaGVyZVwiLFxuICAgICAgICBtc2dfcGFyc29uX2NvcnJlY3RfZmlyc3RfdHJ5OlxuICAgICAgICAgICAgXCJQZXJmZWN0ISAgSXQgdG9vayB5b3Ugb25seSBvbmUgdHJ5IHRvIHNvbHZlIHRoaXMuICBHcmVhdCBqb2IhXCIsXG4gICAgICAgIG1zZ19wYXJzb25fY29ycmVjdDpcbiAgICAgICAgICAgIFwiUGVyZmVjdCEgIEl0IHRvb2sgeW91ICQxIHRyaWVzIHRvIHNvbHZlIHRoaXMuICBDbGljayBSZXNldCB0byB0cnkgdG8gc29sdmUgaXQgaW4gb25lIGF0dGVtcHQuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd3JvbmdfaW5kZW50OlxuICAgICAgICAgICAgXCJUaGlzIGJsb2NrIGlzIG5vdCBpbmRlbnRlZCBjb3JyZWN0bHkuIEVpdGhlciBpbmRlbnQgaXQgbW9yZSBieSBkcmFnZ2luZyBpdCByaWdodCBvciByZWR1Y2UgdGhlIGluZGVudGlvbiBieSBkcmFnZ2luZyBpdCBsZWZ0LlwiLFxuICAgICAgICBtc2dfcGFyc29uX3dyb25nX2luZGVudHM6XG4gICAgICAgICAgICBcIlRoZXNlIGJsb2NrcyBhcmUgbm90IGluZGVudGVkIGNvcnJlY3RseS4gVG8gaW5kZW50IGEgYmxvY2sgbW9yZSwgZHJhZyBpdCB0byB0aGUgcmlnaHQuIFRvIHJlZHVjZSB0aGUgaW5kZW50aW9uLCBkcmFnIGl0IHRvIHRoZSBsZWZ0LlwiLFxuICAgICAgICBtc2dfcGFyc29uX3dyb25nX29yZGVyOlxuICAgICAgICAgICAgXCJIaWdobGlnaHRlZCBibG9ja3MgaW4geW91ciBhbnN3ZXIgYXJlIHdyb25nIG9yIGFyZSBpbiB0aGUgd3Jvbmcgb3JkZXIuIFRoaXMgY2FuIGJlIGZpeGVkIGJ5IG1vdmluZywgcmVtb3ZpbmcsIG9yIHJlcGxhY2luZyBoaWdobGlnaHRlZCBibG9ja3MuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fYXJyb3dfbmF2aWdhdGU6XG4gICAgICAgICAgICBcIkFycm93IGtleXMgdG8gbmF2aWdhdGUuIFNwYWNlIHRvIHNlbGVjdCAvIGRlc2VsZWN0IGJsb2NrIHRvIG1vdmUuXCIsXG4gICAgICAgIG1zZ19wYXJzb25faGVscF9pbmZvOlxuICAgICAgICAgICAgXCJDbGljayBvbiB0aGUgSGVscCBNZSBidXR0b24gaWYgeW91IHdhbnQgdG8gbWFrZSB0aGUgcHJvYmxlbSBlYXNpZXJcIixcbiAgICAgICAgbXNnX3BhcnNvbl9ub3Rfc29sdXRpb246XG4gICAgICAgICAgICBcIkRpc2FibGVkIGFuIHVubmVlZGVkIGNvZGUgYmxvY2sgKG9uZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIHRoZSBzb2x1dGlvbikuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fcHJvdmlkZWRfaW5kZW50OiBcIlByb3ZpZGVkIHRoZSBpbmRlbnRhdGlvbi5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9jb21iaW5lZF9ibG9ja3M6IFwiQ29tYmluZWQgdHdvIGNvZGUgYmxvY2tzIGludG8gb25lLlwiLFxuICAgICAgICBtc2dfcGFyc29uX3JlbW92ZV9pbmNvcnJlY3Q6XG4gICAgICAgICAgICBcIldpbGwgcmVtb3ZlIGFuIGluY29ycmVjdCBjb2RlIGJsb2NrIGZyb20gYW5zd2VyIGFyZWFcIixcbiAgICAgICAgbXNnX3BhcnNvbl93aWxsX2NvbWJpbmU6IFwiV2lsbCBjb21iaW5lIHR3byBibG9ja3NcIixcbiAgICAgICAgbXNnX3BhcnNvbl9hdGxlYXN0X3RocmVlX2F0dGVtcHRzOlxuICAgICAgICAgICAgXCJZb3UgbXVzdCBtYWtlIGF0IGxlYXN0IHRocmVlIGRpc3RpbmN0IGZ1bGwgYXR0ZW1wdHMgYXQgYSBzb2x1dGlvbiBiZWZvcmUgeW91IGNhbiBnZXQgaGVscFwiLFxuICAgICAgICBtc2dfcGFyc29uX3RocmVlX2Jsb2Nrc19sZWZ0OlxuICAgICAgICAgICAgXCJUaGVyZSBhcmUgb25seSAzIGNvcnJlY3QgYmxvY2tzIGxlZnQuICBZb3Ugc2hvdWxkIGJlIGFibGUgdG8gcHV0IHRoZW0gaW4gb3JkZXJcIixcbiAgICAgICAgbXNnX3BhcnNvbl93aWxsX3Byb3ZpZGVfaW5kZW50OiBcIldpbGwgcHJvdmlkZSBpbmRlbnRhdGlvblwiLFxuICAgIH0sXG59KTtcbiIsIiQuaTE4bigpLmxvYWQoe1xuICAgIFwicHQtYnJcIjoge1xuICAgICAgICBtc2dfcGFyc29uX2NoZWNrX21lOiBcIlZlcmlmaWNhclwiLFxuICAgICAgICBtc2dfcGFyc29uX3Jlc2V0OiBcIlJlc2V0YXJcIixcbiAgICAgICAgbXNnX3BhcnNvbl9oZWxwOlwiQWp1ZGFcIixcbiAgICAgICAgbXNnX3BhcnNvbl90b29fc2hvcnQ6IFwiU2V1IHByb2dyYW1hIMOpIG11aXRvIGN1cnRvLiBBZGljaW9uZSBtYWlzIGJsb2Nvcy5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9kcmFnX2Zyb21faGVyZTogXCJBcnJhc3RlIGRhcXVpXCIsXG4gICAgICAgIG1zZ19wYXJzb25fZHJhZ190b19oZXJlOiBcIkxhcmd1ZSBvcyBibG9jb3MgYXF1aVwiLFxuICAgICAgICBtc2dfcGFyc29uX2NvcnJlY3RfZmlyc3RfdHJ5OlxuICAgICAgICAgICAgXCJQZXJmZWl0byEgVm9jw6ogbGV2b3UgYXBlbmFzIHVtYSB0ZW50YXRpdmEgcGFyYSByZXNvbHZlci4gQm9tIHRyYWJhbGhvIVwiLFxuICAgICAgICBtc2dfcGFyc29uX2NvcnJlY3Q6XG4gICAgICAgICAgICBcIlBlcmZlaXRvISBWb2PDqiBsZXZvdSAkMSB0ZW50YXRpdmFzIHBhcmEgcmVzb2x2ZXIuIENsaXF1ZSBlbSBSZXNldGFyIHBhcmEgdGVudGFyIHJlc29sdmVyIGVtIHVtYSB0ZW50YXRpdmEuXCIgLFxuICAgICAgICBtc2dfcGFyc29uX3dyb25nX2luZGVudDpcbiAgICAgICAgICAgIFwiRXN0ZSBibG9jbyBuw6NvIGVzdMOhIGluZGVudGFkbyBjb3JyZXRhbWVudGUuIEluZGVudGUgbWFpcyBhcnJhc3RhbmRvLW8gcGFyYSBhIGRpcmVpdGEgb3UgcmVkdXphIGEgaW5kZW50YcOnw6NvIGFycmFzdGFuZG8gcGFyYSBhIGVzcXVlcmRhLlwiLFxuICAgICAgICBtc2dfcGFyc29uX3dyb25nX2luZGVudHM6XG4gICAgICAgICAgICBcIkVzdGVzIGJsb2NvcyBuw6NvIGVzdMOjbyBpbmRlbnRhZG9zIGNvcnJldGFtZW50ZS4gUGFyYSBpbmRlbnRhciBtYWlzLCBhcnJhc3RlIG8gYmxvY28gcGFyYSBhIGRpcmVpdGEuIFBhcmEgcmVkdXppciBhIGluZGVudGHDp8OjbywgYXJyYXN0ZSBwYXJhIGEgZXNxdWVyZGEuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd3Jvbmdfb3JkZXI6XG4gICAgICAgICAgICBcIkJsb2NvcyBkZXN0YWNhZG9zIG5vIHNldSBwcm9ncmFtYSBlc3TDo28gZXJyYWRvcyBvdSBlc3TDo28gbmEgb3JkZW0gZXJyYWRhLiBJc3NvIHBvZGUgc2VyIHJlc29sdmlkbyBtb3ZlbmRvLCBleGNsdWluZG8gb3Ugc3Vic3RpdHVpbmRvIG9zIGJsb2NvcyBkZXN0YWNhZG9zLlwiLFxuICAgICAgICBtc2dfcGFyc29uX2Fycm93X25hdmlnYXRlOlxuICAgICAgICAgICAgXCJVc2UgYXMgdGVjbGFzIGRlIHNldGFzIHBhcmEgbmF2ZWdhci4gRXNwYcOnbyBwYXJhIHNlbGVjaW9uYXIvIGRlc21hcmNhciBibG9jb3MgcGFyYSBtb3Zlci5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9oZWxwX2luZm86XG4gICAgICAgICAgICBcIkNsaXF1ZSBubyBib3TDo28gQWp1ZGEgc2Ugdm9jw6ogcXVpc2VyIGZhY2lsaXRhciBvIHByb2JsZW1hXCIsXG4gICAgICAgIG1zZ19wYXJzb25fbm90X3NvbHV0aW9uOlxuICAgICAgICAgICAgXCJGb2kgZGVzYWJpbGl0YWRvIHVtIGJsb2NvIGRlIGPDs2RpZ28gZGVzbmVjZXNzw6FyaW8gKHF1ZSBuw6NvIGZheiBwYXJ0ZSBkYSBzb2x1w6fDo28pLlwiLFxuICAgICAgICBtc2dfcGFyc29uX3Byb3ZpZGVkX2luZGVudDpcIkZvaSBmb3JuZWNpZGEgYSBpbmRlbnRhw6fDo28uXCIsXG4gICAgICAgIG1zZ19wYXJzb25fY29tYmluZWRfYmxvY2tzOlwiRG9pcyBibG9jb3MgZGUgY8OzZGlnb3MgZm9yYW0gY29tYmluYWRvcyBlbSB1bS5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9yZW1vdmVfaW5jb3JyZWN0OlxuICAgICAgICAgICAgXCJTZXLDoSByZW1vdmlkbyB1bSBibG9jbyBkZSBjw7NkaWdvIGluY29ycmV0byBkYSDDoXJlYSBkZSByZXNwb3N0YVwiLFxuICAgICAgICBtc2dfcGFyc29uX3dpbGxfY29tYmluZTpcIlNlcsOjbyBjb21iaW5hZG9zIGRvaXMgYmxvY29zXCIsXG4gICAgICAgIG1zZ19wYXJzb25fYXRsZWFzdF90aHJlZV9hdHRlbXB0czpcbiAgICAgICAgICAgIFwiVm9jw6ogZGV2ZSB0ZW50YXIgcGVsbyBtZW5vcyB0csOqcyB2ZXplcyBhbnRlcyBkZSBwZWRpciBhanVkYVwiLFxuICAgICAgICBtc2dfcGFyc29uX3RocmVlX2Jsb2Nrc19sZWZ0OlxuICAgICAgICAgICAgXCJSZXN0YW0gYXBlbmFzIDMgYmxvY29zIGNvcnJldG9zLiBWb2PDqiBkZXZlIGNvbG9jw6EtbG9zIGVtIG9yZGVtXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd2lsbF9wcm92aWRlX2luZGVudDogXCJTZXLDoSBmb3JuZWNpZGEgYSBpbmRlbnRhw6fDo29cIlxuICAgIH0sXG59KTtcbiIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PSBQYXJzb25zIFJ1bmVzdG9uZSBEaXJlY3RpdmUgSmF2YXNjcmlwdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBSZW5kZXJzIGEgUGFyc29ucyBwcm9ibGVtIGJhc2VkIG9uIHRoZSBIVE1MIGNyZWF0ZWQgYnkgdGhlXG49PT09PT09PSBwYXJzb25zLnB5IHNjcmlwdCBhbmQgdGhlIFJTVCBmaWxlLlxuPT09PSBDT05UUklCVVRPUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBJc2FpYWggTWF5ZXJjaGFrXG49PT09PT09PSBKZWZmIFJpY2tcbj09PT09PT09IEJhcmJhcmEgRXJpY3NvblxuPT09PT09PT0gQ29sZSBCb3dlcnNcbj09PT0gQWRhcHRlZCBmb3JtIHRoZSBvcmlnaW5hbCBKUyBQYXJzb25zIGJ5ID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gVmlsbGUgS2FyYXZpcnRhXG49PT09PT09PSBQZXRyaSBJaGFudG9sYVxuPT09PT09PT0gSnVoYSBIZWxtaW5lblxuPT09PT09PT0gTWlrZSBIZXduZXJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IExpbmVCYXNlZEdyYWRlciBPYmplY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFVzZWQgZm9yIGdyYWRpbmcgYSBQYXJzb25zIHByb2JsZW0uXG49PT09IFBST1BFUlRJRVMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IHByb2JsZW06IHRoZSBQYXJzb25zIHByb2JsZW1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi9wYXJzb25zLWkxOG4uZW4uanNcIjtcbmltcG9ydCBcIi4vcGFyc29ucy1pMThuLnB0LWJyLmpzXCI7XG5pbXBvcnQgXCIuL3ByZXR0aWZ5LmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvcGFyc29ucy5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9wcmV0dGlmeS5jc3NcIjtcbmltcG9ydCBMaW5lQmFzZWRHcmFkZXIgZnJvbSBcIi4vbGluZUdyYWRlclwiO1xuaW1wb3J0IERBR0dyYWRlciBmcm9tIFwiLi9kYWdHcmFkZXJcIjtcbmltcG9ydCBQYXJzb25zTGluZSBmcm9tIFwiLi9wYXJzb25zTGluZVwiO1xuaW1wb3J0IFBhcnNvbnNCbG9jayBmcm9tIFwiLi9wYXJzb25zQmxvY2tcIjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IFBhcnNvbnMgT2JqZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFRoZSBtb2RlbCBhbmQgdmlldyBvZiBhIFBhcnNvbnMgcHJvYmxlbSBiYXNlZCBvbiB3aGF0IGlzXG49PT09PT09PSBzcGVjaWZpZWQgaW4gdGhlIEhUTUwsIHdoaWNoIGlzIGJhc2VkIG9uIHdoYXQgaXMgc3BlY2lmaWVkXG49PT09PT09PSBpbiB0aGUgUlNUIGZpbGVcbj09PT0gUFJPUEVSVElFUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gb3B0aW9uczogb3B0aW9ucyBsYXJnZWx5IHNwZWNpZmllZCBmcm9tIHRoZSBIVE1MXG49PT09PT09PSBncmFkZXI6IGEgTGluZUdyYWRlciBmb3IgZ3JhZGluZyB0aGUgcHJvYmxlbVxuPT09PT09PT0gbGluZXM6IGFuIGFycmF5IG9mIGFsbCBQYXJzb25zTGluZSBhcyBzcGVjaWZpZWQgaW4gdGhlIHByb2JsZW1cbj09PT09PT09IHNvbHV0aW9uOiBhbiBhcnJheSBvZiBQYXJzb25zTGluZSBpbiB0aGUgc29sdXRpb25cbj09PT09PT09IGJsb2NrczogdGhlIGN1cnJlbnQgYmxvY2tzXG49PT09PT09PSBzb3VyY2VBcmVhOiB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBzb3VyY2UgYmxvY2tzXG49PT09PT09PSBhbnN3ZXJBcmVhOiB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBhbnN3ZXIgYmxvY2tzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IElOSVRJQUxJWkFUSU9OID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5leHBvcnQgdmFyIHByc0xpc3QgPSB7fTsgLy8gUGFyc29ucyBkaWN0aW9uYXJ5XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzb25zIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8cHJlPiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IG9yaWc7XG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSAkKG9yaWcpLmZpbmQoXCJwcmUucGFyc29uc2Jsb2Nrc1wiKVswXTtcbiAgICAgICAgLy8gRmluZCB0aGUgcXVlc3Rpb24gdGV4dCBhbmQgc3RvcmUgaXQgaW4gLnF1ZXN0aW9uXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSAkKG9yaWcpLmZpbmQoYC5wYXJzb25zX3F1ZXN0aW9uYClbMF07XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICB0aGlzLmRpdmlkID0gb3B0cy5vcmlnLmlkO1xuICAgICAgICAvLyBTZXQgdGhlIHN0b3JhZ2VJZCAoa2V5IGZvciBzdG9yaW5nIGRhdGEpXG4gICAgICAgIHZhciBzdG9yYWdlSWQgPSBzdXBlci5sb2NhbFN0b3JhZ2VLZXkoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlSWQgPSBzdG9yYWdlSWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXM7IC8vIHRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgZW50aXJlIHRhZy4uLlxuICAgICAgICB0aGlzLmNvbnRlbnRBcnJheSA9IFtdO1xuICAgICAgICBQYXJzb25zLmNvdW50ZXIrKzsgLy8gICAgVW5pcXVlIGlkZW50aWZpZXJcbiAgICAgICAgdGhpcy5jb3VudGVySWQgPSBcInBhcnNvbnMtXCIgKyBQYXJzb25zLmNvdW50ZXI7XG5cbiAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBpZiAoJCh0aGlzLmNoaWxkcmVuW2ldKS5pcyhcIltkYXRhLXF1ZXN0aW9uXVwiKSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ncmFkZXIgPVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmdyYWRlciA9PT0gXCJkYWdcIlxuICAgICAgICAgICAgICAgID8gbmV3IERBR0dyYWRlcih0aGlzKVxuICAgICAgICAgICAgICAgIDogbmV3IExpbmVCYXNlZEdyYWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5ncmFkZXIuc2hvd2ZlZWRiYWNrID0gdGhpcy5zaG93ZmVlZGJhY2s7XG4gICAgICAgIHZhciBmdWxsdGV4dCA9ICQodGhpcy5vcmlnRWxlbSkuaHRtbCgpO1xuICAgICAgICB0aGlzLmJsb2NrSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLm51bURpc3RpbmN0ID0gMDtcbiAgICAgICAgdGhpcy5oYXNTb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTGluZXMoZnVsbHRleHQudHJpbSgpKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVmlldygpO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIlBhcnNvbnNcIjtcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xuICAgICAgICAvLyBDaGVjayB0aGUgc2VydmVyIGZvciBhbiBhbnN3ZXIgdG8gY29tcGxldGUgdGhpbmdzXG4gICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXIoXCJwYXJzb25zXCIsIHRydWUpO1xuICAgIH1cbiAgICAvLyBCYXNlZCBvbiB0aGUgZGF0YS1maWVsZHMgaW4gdGhlIG9yaWdpbmFsIEhUTUwsIGluaXRpYWxpemUgb3B0aW9uc1xuICAgIGluaXRpYWxpemVPcHRpb25zKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBpeGVsc1BlckluZGVudDogMzAsXG4gICAgICAgIH07XG4gICAgICAgIC8vIGFkZCBtYXhkaXN0IGFuZCBvcmRlciBpZiBwcmVzZW50XG4gICAgICAgIHZhciBtYXhkaXN0ID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwibWF4ZGlzdFwiKTtcbiAgICAgICAgdmFyIG9yZGVyID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwib3JkZXJcIik7XG4gICAgICAgIHZhciBub2luZGVudCA9ICQodGhpcy5vcmlnRWxlbSkuZGF0YShcIm5vaW5kZW50XCIpO1xuICAgICAgICB2YXIgYWRhcHRpdmUgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJhZGFwdGl2ZVwiKTtcbiAgICAgICAgdmFyIG51bWJlcmVkID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwibnVtYmVyZWRcIik7XG4gICAgICAgIHZhciBncmFkZXIgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJncmFkZXJcIik7XG4gICAgICAgIG9wdGlvbnNbXCJudW1iZXJlZFwiXSA9IG51bWJlcmVkO1xuICAgICAgICBvcHRpb25zW1wiZ3JhZGVyXCJdID0gZ3JhZGVyO1xuICAgICAgICBpZiAobWF4ZGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW1wibWF4ZGlzdFwiXSA9IG1heGRpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgb3JkZXIgc3RyaW5nIHRvIGFycmF5IG9mIG51bWJlcnNcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIubWF0Y2goL1xcZCsvZyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJbaV0gPSBwYXJzZUludChvcmRlcltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zW1wib3JkZXJcIl0gPSBvcmRlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9pbmRlbnQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub2luZGVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnNbXCJub2luZGVudFwiXSA9IG5vaW5kZW50O1xuICAgICAgICB0aGlzLm5vaW5kZW50ID0gbm9pbmRlbnQ7XG4gICAgICAgIGlmIChhZGFwdGl2ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkYXB0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYWRhcHRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUFkYXB0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uc1tcImFkYXB0aXZlXCJdID0gYWRhcHRpdmU7XG4gICAgICAgIC8vIGFkZCBsb2NhbGUgYW5kIGxhbmd1YWdlXG4gICAgICAgIHZhciBsb2NhbGUgPSBlQm9va0NvbmZpZy5sb2NhbGU7XG4gICAgICAgIGlmIChsb2NhbGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2NhbGUgPSBcImVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uc1tcImxvY2FsZVwiXSA9IGxvY2FsZTtcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwibGFuZ3VhZ2VcIik7XG4gICAgICAgIGlmIChsYW5ndWFnZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhbmd1YWdlID0gZUJvb2tDb25maWcubGFuZ3VhZ2U7XG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBcInB5dGhvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnNbXCJsYW5ndWFnZVwiXSA9IGxhbmd1YWdlO1xuICAgICAgICB2YXIgcHJldHRpZnlMYW5ndWFnZSA9IHtcbiAgICAgICAgICAgIHB5dGhvbjogXCJwcmV0dHlwcmludCBsYW5nLXB5XCIsXG4gICAgICAgICAgICBqYXZhOiBcInByZXR0eXByaW50IGxhbmctamF2YVwiLFxuICAgICAgICAgICAgamF2YXNjcmlwdDogXCJwcmV0dHlwcmludCBsYW5nLWpzXCIsXG4gICAgICAgICAgICBodG1sOiBcInByZXR0eXByaW50IGxhbmctaHRtbFwiLFxuICAgICAgICAgICAgYzogXCJwcmV0dHlwcmludCBsYW5nLWNcIixcbiAgICAgICAgICAgIFwiYysrXCI6IFwicHJldHR5cHJpbnQgbGFuZy1jcHBcIixcbiAgICAgICAgICAgIHJ1Ynk6IFwicHJldHR5cHJpbnQgbGFuZy1yYlwiLFxuICAgICAgICB9W2xhbmd1YWdlXTtcbiAgICAgICAgaWYgKHByZXR0aWZ5TGFuZ3VhZ2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcmV0dGlmeUxhbmd1YWdlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zW1wicHJldHRpZnlMYW5ndWFnZVwiXSA9IHByZXR0aWZ5TGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIC8vIEJhc2VkIG9uIHdoYXQgaXMgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbCBIVE1MLCBjcmVhdGUgdGhlIEhUTUwgdmlld1xuICAgIGluaXRpYWxpemVWaWV3KCkge1xuICAgICAgICB0aGlzLm91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5hZGRDbGFzcyhcInBhcnNvbnNcIik7XG4gICAgICAgIHRoaXMub3V0ZXJEaXYuaWQgPSB0aGlzLmNvdW50ZXJJZDtcbiAgICAgICAgdGhpcy5wYXJzVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5wYXJzVGV4dERpdikuYWRkQ2xhc3MoXCJwYXJzb25zLXRleHRcIik7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMua2V5Ym9hcmRUaXApLmF0dHIoXCJyb2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZFRpcC5pZCA9IHRoaXMuY291bnRlcklkICsgXCItdGlwXCI7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRUaXAuaW5uZXJIVE1MID0gJC5pMThuKFwibXNnX3BhcnNvbl9hcnJvd19uYXZpZ2F0ZVwiKTtcbiAgICAgICAgdGhpcy5vdXRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLmtleWJvYXJkVGlwKTtcbiAgICAgICAgJCh0aGlzLmtleWJvYXJkVGlwKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuc29ydENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5zb3J0Q29udGFpbmVyRGl2KS5hZGRDbGFzcyhcInNvcnRhYmxlLWNvZGUtY29udGFpbmVyXCIpO1xuICAgICAgICAkKHRoaXMuc29ydENvbnRhaW5lckRpdikuYXR0cihcbiAgICAgICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiLFxuICAgICAgICAgICAgdGhpcy5jb3VudGVySWQgKyBcIi10aXBcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLm91dGVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc29ydENvbnRhaW5lckRpdik7XG4gICAgICAgIHRoaXMuc291cmNlUmVnaW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWdpb25EaXYuaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVJlZ2lvblwiO1xuICAgICAgICAkKHRoaXMuc291cmNlUmVnaW9uRGl2KS5hZGRDbGFzcyhcInNvcnRhYmxlLWNvZGVcIik7XG4gICAgICAgIHRoaXMuc291cmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuc291cmNlTGFiZWwpLmF0dHIoXCJyb2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgICAgICAgdGhpcy5zb3VyY2VMYWJlbC5pZCA9IHRoaXMuY291bnRlcklkICsgXCItc291cmNlVGlwXCI7XG4gICAgICAgIHRoaXMuc291cmNlTGFiZWwuaW5uZXJIVE1MID0gJC5pMThuKFwibXNnX3BhcnNvbl9kcmFnX2Zyb21faGVyZVwiKTtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWdpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy5zb3VyY2VMYWJlbCk7XG4gICAgICAgIHRoaXMuc29ydENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnNvdXJjZVJlZ2lvbkRpdik7XG4gICAgICAgIHRoaXMuc291cmNlQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc291cmNlQXJlYS5pZCA9IHRoaXMuY291bnRlcklkICsgXCItc291cmNlXCI7XG4gICAgICAgICQodGhpcy5zb3VyY2VBcmVhKS5hZGRDbGFzcyhcInNvdXJjZVwiKTtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUFyZWEpLmF0dHIoXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIixcbiAgICAgICAgICAgIHRoaXMuY291bnRlcklkICsgXCItc291cmNlVGlwXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWdpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy5zb3VyY2VBcmVhKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJSZWdpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmFuc3dlclJlZ2lvbkRpdi5pZCA9IHRoaXMuY291bnRlcklkICsgXCItYW5zd2VyUmVnaW9uXCI7XG4gICAgICAgICQodGhpcy5hbnN3ZXJSZWdpb25EaXYpLmFkZENsYXNzKFwic29ydGFibGUtY29kZVwiKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5hbnN3ZXJMYWJlbCkuYXR0cihcInJvbGVcIiwgXCJ0b29sdGlwXCIpO1xuICAgICAgICB0aGlzLmFuc3dlckxhYmVsLmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1hbnN3ZXJUaXBcIjtcbiAgICAgICAgdGhpcy5hbnN3ZXJMYWJlbC5pbm5lckhUTUwgPSAkLmkxOG4oXCJtc2dfcGFyc29uX2RyYWdfdG9faGVyZVwiKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJSZWdpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy5hbnN3ZXJMYWJlbCk7XG4gICAgICAgIHRoaXMuc29ydENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmFuc3dlclJlZ2lvbkRpdik7XG4gICAgICAgIHRoaXMuYW5zd2VyQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuYW5zd2VyQXJlYS5pZCA9IHRoaXMuY291bnRlcklkICsgXCItYW5zd2VyXCI7XG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hdHRyKFxuICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJJZCArIFwiLWFuc3dlclRpcFwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYW5zd2VyUmVnaW9uRGl2LmFwcGVuZENoaWxkKHRoaXMuYW5zd2VyQXJlYSk7XG4gICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMucGFyc29uc0NvbnRyb2xEaXYpLmFkZENsYXNzKFwicGFyc29ucy1jb250cm9sc1wiKTtcbiAgICAgICAgdGhpcy5vdXRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLnBhcnNvbnNDb250cm9sRGl2KTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLmNoZWNrQnV0dG9uKS5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnRuLXN1Y2Nlc3NcIik7XG4gICAgICAgIHRoaXMuY2hlY2tCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfcGFyc29uX2NoZWNrX21lXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1jaGVja1wiO1xuICAgICAgICB0aGlzLnBhcnNvbnNDb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMuY2hlY2tCdXR0b24pO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGF0LmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgdGhhdC5sb2dDdXJyZW50QW5zd2VyKCk7XG4gICAgICAgICAgICB0aGF0LnJlbmRlckZlZWRiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLnJlc2V0QnV0dG9uKS5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRlZmF1bHRcIik7XG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfcGFyc29uX3Jlc2V0XCIpO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1yZXNldFwiO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICB0aGlzLnBhcnNvbnNDb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMucmVzZXRCdXR0b24pO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGF0LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgICQodGhhdC5jaGVja0J1dHRvbikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoYXQucmVzZXRWaWV3KCk7XG4gICAgICAgICAgICB0aGF0LmNoZWNrQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhhdC5sb2dNb3ZlKFwicmVzZXRcIik7XG4gICAgICAgICAgICB0aGF0LnNldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5oZWxwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICQodGhpcy5oZWxwQnV0dG9uKS5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIik7XG4gICAgICAgICAgICB0aGlzLmhlbHBCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfcGFyc29uX2hlbHBcIik7XG4gICAgICAgICAgICB0aGlzLmhlbHBCdXR0b24uaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLWhlbHBcIjtcbiAgICAgICAgICAgIHRoaXMuaGVscEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlOyAvLyBiamVcbiAgICAgICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5oZWxwQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMuaGVscEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LmhlbHBNZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlRGl2LmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1tZXNzYWdlXCI7XG4gICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlRGl2KTtcbiAgICAgICAgJCh0aGlzLm1lc3NhZ2VEaXYpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLm91dGVyRGl2KTtcbiAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5jbG9zZXN0KFwiLnNxY29udGFpbmVyXCIpLmNzcyhcIm1heC13aWR0aFwiLCBcIm5vbmVcIik7XG4gICAgICAgIGlmICh0aGlzLm91dGVyRGl2KSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLnF1ZXN0aW9uKS5odG1sKCkubWF0Y2goL15cXHMrJC8pKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnF1ZXN0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5wcmVwZW5kKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgbGluZXMgYW5kIHNvbHV0aW9uIHByb3BlcnRpZXNcbiAgICBpbml0aWFsaXplTGluZXModGV4dCkge1xuICAgICAgICB0aGlzLmxpbmVzID0gW107XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5pdGlhbCBibG9ja3NcbiAgICAgICAgdmFyIHRleHRCbG9ja3MgPSB0ZXh0LnNwbGl0KFwiLS0tXCIpO1xuICAgICAgICBpZiAodGV4dEJsb2Nrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyAtLS0sIHRoZW4gZXZlcnkgbGluZSBpcyBpdHMgb3duIGJsb2NrXG4gICAgICAgICAgICB0ZXh0QmxvY2tzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc29sdXRpb24gPSBbXTtcbiAgICAgICAgdmFyIGluZGVudHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGV4dEJsb2NrID0gdGV4dEJsb2Nrc1tpXTtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgb3B0aW9ucyBiYXNlZCBvbiB0aGUgI29wdGlvblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvcHRpb25zIGZyb20gdGhlIGNvZGVcbiAgICAgICAgICAgIC8vIG9ubHkgb3B0aW9ucyBhcmUgI3BhaXJlZCBvciAjZGlzdHJhY3RvclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHZhciBkaXN0cmFjdEluZGV4O1xuICAgICAgICAgICAgdmFyIGRpc3RyYWN0SGVscHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHRhZ0luZGV4O1xuICAgICAgICAgICAgdmFyIHRhZztcbiAgICAgICAgICAgIHZhciBkZXBlbmRzSW5kZXg7XG4gICAgICAgICAgICB2YXIgZGVwZW5kcyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRleHRCbG9jay5pbmNsdWRlcyhcIiNwYWlyZWQ6XCIpKSB7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RJbmRleCA9IHRleHRCbG9jay5pbmRleE9mKFwiI3BhaXJlZDpcIik7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RIZWxwdGV4dCA9IHRleHRCbG9ja1xuICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKGRpc3RyYWN0SW5kZXggKyA4LCB0ZXh0QmxvY2subGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICAgICAgICAgIHRleHRCbG9jayA9IHRleHRCbG9jay5zdWJzdHJpbmcoMCwgZGlzdHJhY3RJbmRleCArIDcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXh0QmxvY2suaW5jbHVkZXMoXCIjZGlzdHJhY3RvcjpcIikpIHtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdEluZGV4ID0gdGV4dEJsb2NrLmluZGV4T2YoXCIjZGlzdHJhY3RvcjpcIik7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RIZWxwdGV4dCA9IHRleHRCbG9ja1xuICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKGRpc3RyYWN0SW5kZXggKyAxMiwgdGV4dEJsb2NrLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0ZXh0QmxvY2sgPSB0ZXh0QmxvY2suc3Vic3RyaW5nKDAsIGRpc3RyYWN0SW5kZXggKyAxMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRleHRCbG9jay5pbmNsdWRlcyhcIiN0YWc6XCIpKSB7XG4gICAgICAgICAgICAgICAgdGV4dEJsb2NrID0gdGV4dEJsb2NrLnJlcGxhY2UoLyN0YWc6Lio7Lio7LywgKHMpID0+XG4gICAgICAgICAgICAgICAgICAgIHMucmVwbGFjZSgvXFxzKy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICk7IC8vIHJlbW92ZSB3aGl0ZXNwYWNlIGluIHRhZyBhbmQgZGVwZW5kcyBsaXN0XG4gICAgICAgICAgICAgICAgdGFnSW5kZXggPSB0ZXh0QmxvY2suaW5kZXhPZihcIiN0YWc6XCIpO1xuICAgICAgICAgICAgICAgIHRhZyA9IHRleHRCbG9jay5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgIHRhZ0luZGV4ICsgNSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJsb2NrLmluZGV4T2YoXCI7XCIsIHRhZ0luZGV4ICsgNSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICh0YWcgPT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gXCJibG9jay1cIiArIGk7XG4gICAgICAgICAgICAgICAgZGVwZW5kc0luZGV4ID0gdGV4dEJsb2NrLmluZGV4T2YoXCI7ZGVwZW5kczpcIik7XG4gICAgICAgICAgICAgICAgbGV0IGRlcGVuZHNTdHJpbmcgPSB0ZXh0QmxvY2suc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICBkZXBlbmRzSW5kZXggKyA5LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QmxvY2suaW5kZXhPZihcIjtcIiwgZGVwZW5kc0luZGV4ICsgOSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlcGVuZHMgPVxuICAgICAgICAgICAgICAgICAgICBkZXBlbmRzU3RyaW5nLmxlbmd0aCA+IDAgPyBkZXBlbmRzU3RyaW5nLnNwbGl0KFwiLFwiKSA6IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dEJsb2NrID0gdGV4dEJsb2NrLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgLyMocGFpcmVkfGRpc3RyYWN0b3J8dGFnOi4qOy4qOykvLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChteXN0cmluZywgYXJnMSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2FyZzFdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBsaW5lc1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSB0ZXh0QmxvY2suc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNwbGl0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzcGxpdFtqXTtcbiAgICAgICAgICAgICAgICAvLyBkaXNjYXJkIGJsYW5rIHJvd3NcbiAgICAgICAgICAgICAgICBpZiAoIS9eXFxzKiQvLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBuZXcgUGFyc29uc0xpbmUodGhpcywgY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zW1wicGFpcmVkXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmRpc3RyYWN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5wYWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdEhlbHB0ZXh0ID0gZGlzdHJhY3RIZWxwdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zW1wiZGlzdHJhY3RvclwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUucGFpcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmRpc3RyYWN0SGVscHRleHQgPSBkaXN0cmFjdEhlbHB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLnBhaXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncmFkZXIgPT09IFwiZGFnXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLnRhZyA9IHRhZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmRlcGVuZHMgPSBkZXBlbmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb24ucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGxpbmUuaW5kZW50LCBpbmRlbnRzKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50cy5wdXNoKGxpbmUuaW5kZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGdyb3VwV2l0aE5leHRcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGluZXMubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzW2pdLmdyb3VwV2l0aE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5ncm91cFdpdGhOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBpbmRlbnRzXG4gICAgICAgIGluZGVudHMgPSBpbmRlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGxpbmUuaW5kZW50ID0gaW5kZW50cy5pbmRleE9mKGxpbmUuaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvbHV0aW9uID0gc29sdXRpb247XG4gICAgfVxuICAgIC8vIEJhc2VkIG9uIHRoZSBibG9ja3MsIGNyZWF0ZSB0aGUgc291cmNlIGFuZCBhbnN3ZXIgYXJlYXNcbiAgICBpbml0aWFsaXplQXJlYXMoc291cmNlQmxvY2tzLCBhbnN3ZXJCbG9ja3MsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGJsb2NrcyBwcm9wZXJ0eSBhcyB0aGUgc3VtIG9mIHRoZSB0d29cbiAgICAgICAgdmFyIGJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgaSwgYmxvY2s7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gc291cmNlQmxvY2tzW2ldO1xuICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmFwcGVuZENoaWxkKGJsb2NrLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbnN3ZXJCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJBcmVhLmFwcGVuZENoaWxkKGJsb2NrLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tzID0gYmxvY2tzO1xuICAgICAgICAvLyBJZiBwcmVzZW50LCBkaXNhYmxlIHNvbWUgYmxvY2tzXG4gICAgICAgIHZhciBkaXNhYmxlZCA9IG9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIGlmIChkaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGRpc2FibGVkLmluY2x1ZGVzKGJsb2NrLmxpbmVzWzBdLmluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERldGVybWluZSBob3cgbXVjaCBpbmRlbnQgc2hvdWxkIGJlIHBvc3NpYmxlIGluIHRoZSBhbnN3ZXIgYXJlYVxuICAgICAgICB2YXIgaW5kZW50ID0gMDtcbiAgICAgICAgaWYgKCF0aGlzLm5vaW5kZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50ID0gdGhpcy5zb2x1dGlvbkluZGVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRlbnQgPSBNYXRoLm1heCgwLCB0aGlzLnNvbHV0aW9uSW5kZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZW50ID0gaW5kZW50O1xuICAgICAgICAvLyBGb3IgcmVuZGVyaW5nLCBwbGFjZSBpbiBhbiBvbnNjcmVlbiBwb3NpdGlvblxuICAgICAgICB2YXIgaXNIaWRkZW4gPSB0aGlzLm91dGVyRGl2Lm9mZnNldFBhcmVudCA9PSBudWxsO1xuICAgICAgICB2YXIgcmVwbGFjZUVsZW1lbnQ7XG4gICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5yZXBsYWNlV2l0aChyZXBsYWNlRWxlbWVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3V0ZXJEaXYpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldHRpZnlMYW5ndWFnZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNbaV0uaW5pdGlhbGl6ZVdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGF5b3V0IHRoZSBhcmVhc1xuICAgICAgICB2YXIgYXJlYVdpZHRoLCBhcmVhSGVpZ2h0O1xuICAgICAgICAvLyBFc3RhYmxpc2ggdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGRyb3BwYWJsZSBhcmVhc1xuICAgICAgICB2YXIgaXRlbSwgbWF4RnVuY3Rpb247XG4gICAgICAgIGFyZWFIZWlnaHQgPSA2O1xuICAgICAgICB2YXIgaGVpZ2h0X2FkZCA9IDA7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWlnaHRfYWRkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UgPT0gXCJuYXR1cmFsXCIgfHxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sYW5ndWFnZSA9PSBcIm1hdGhcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGFyZWFXaWR0aCA9IDMwMDtcbiAgICAgICAgICAgIG1heEZ1bmN0aW9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLndpZHRoKGFyZWFXaWR0aCAtIDIyKTtcbiAgICAgICAgICAgICAgICB2YXIgYWRkaXRpb24gPSAzLjg7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgIT0gMzgpXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uID0gKDIuMSAqIChpdGVtLm91dGVySGVpZ2h0KHRydWUpIC0gMzgpKSAvIDIxO1xuICAgICAgICAgICAgICAgIGFyZWFIZWlnaHQgKz0gaXRlbS5vdXRlckhlaWdodCh0cnVlKSArIGhlaWdodF9hZGQgKiBhZGRpdGlvbjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmVhV2lkdGggPSAzMDA7XG4gICAgICAgICAgICAvLyBUaGlzIG1heEZ1bmN0aW9uIGlzIGhvdyBQYXJzb25zIGFyZWFzIHdpZHRoIGFuZCBoZWlnaHQgd2VyZSBiZWluZyBjYWxjdWxhdGVkIHByZXZpb3VzbHksXG4gICAgICAgICAgICAvLyBidXQgYXQgc29tZSBwb2ludCAub3V0ZXJIZWlnaHQgYW5kIC5vdXRlcldpZHRoIHN0b3BwZWQgcmV0dXJuaW5nIGNvcnJlY3QgdmFsdWVzXG4gICAgICAgICAgICAvLyBjYXVzaW5nIGxpbmVzIHRvIG92ZXJmbG93IGFuZCBkaXNwbGF5IGF3a3dhcmRseS4gLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgICAgICAvLyBtYXhGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGFkZGl0aW9uID0gMy44O1xuICAgICAgICAgICAgLy8gICAgIGlmIChpdGVtLm91dGVySGVpZ2h0KHRydWUpICE9IDM4KSBhZGRpdGlvbiA9IDIuMTtcbiAgICAgICAgICAgIC8vICAgICBhcmVhSGVpZ2h0ICs9IGl0ZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgKyBoZWlnaHRfYWRkICogYWRkaXRpb247XG4gICAgICAgICAgICAvLyAgICAgYXJlYVdpZHRoID0gTWF0aC5tYXgoYXJlYVdpZHRoLCBpdGVtLm91dGVyV2lkdGgodHJ1ZSkpO1xuICAgICAgICAgICAgLy8gfTtcblxuICAgICAgICAgICAgLy8gVGhpcyBuZXcgbWF4RnVuY3Rpb24gaXMgaG93IFBhcnNvbnMgYXJlYXMgd2lkdGggYW5kIGhlaWdodCBhcmUgYmVpbmcgY2FsY3VsYXRlZCBub3cgbWFudWFsbHkgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgICAgICBtYXhGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFkZGl0aW9uID0gMy44O1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGluZGV4IHdpdGhpbiB0aGUgUGFyc29ucyBibG9jayBKYXZhU2NyaXB0IG9iamVjdCBjb250YWlucyB0aGUgdGV4dCBsaW5lcyBhbmQgY29uc2VxdWVudGx5IHRoZSBwYXNzZWQgdGhyb3VnaCBkYXRhIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIHZhciBsaW5lc0luZGV4O1xuICAgICAgICAgICAgICAgIHZhciBsaW5lc0l0ZW0gPSBpdGVtWzBdLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lc0luZGV4IDwgaXRlbVswXS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzSW5kZXgrK1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWzBdLmNoaWxkcmVuW2xpbmVzSW5kZXhdLmNsYXNzTmFtZS5pbmNsdWRlcyhcImxpbmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBjYW52YXMgYW5kIHNldCB0aGUgcGFzc2VkIHRocm91Z2ggZm9udFNpemUgYW5kIGZvbnRGYW1pbHkgaW4gb3JkZXIgdG8gbWVhc3VyZSB0ZXh0IHdpZHRoIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlblswXS5mb250U2l6ZTtcbiAgICAgICAgICAgICAgICB2YXIgZm9udEZhbWlseSA9IGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlblswXS5mb250RmFtaWx5O1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcENhbnZhc0N0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgIHRlbXBDYW52YXNDdHguZm9udCA9IGZvbnRTaXplICsgXCIgXCIgKyBmb250RmFtaWx5O1xuXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IFBhcnNvbnMgYXJlYSBoZWlnaHQgYmFzZWQgb24gbnVtYmVyIG9mIGxpbmVzIG9mIHRleHQgaW4gdGhlIGN1cnJlbnQgUGFyc29ucyBibG9jayAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgICAgICAgICB2YXIgc2luZ2xlSGVpZ2h0ID0gNDA7XG4gICAgICAgICAgICAgICAgdmFyIGFkZGl0aW9uYWxIZWlnaHQgPSAyMDtcbiAgICAgICAgICAgICAgICBhcmVhSGVpZ2h0ICs9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGZ1dHVyZSBtb3JlIGFjY3VyYXRlIGhlaWdodCBkaXNwbGF5LCB0aGlzIGNhbGN1bGF0aW9uIHNob3VsZCBhbHNvIGJlIGNvbmRpdGlvbmFsbHkgYmFzZWQgb24gZm9udEZhbWlseVxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVIZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlbi5sZW5ndGggLSAxKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbEhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHRfYWRkICogYWRkaXRpb25cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBsb25nZXN0IHRleHQgbGluZSBpbiB0aGUgY3VycmVudCBQYXJzb25zIGJsb2NrIGFuZCBjYWxjdWxhdGUgaXRzIHdpZHRoIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIHZhciBpdGVtTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBwaXhlbHNQZXJJbmRlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZGVudDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4SW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIHZhciBtYXhJbm5lckxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoTGltaXQgPSA0NzU7XG4gICAgICAgICAgICAgICAgdmFyIGxvbmdDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwaXhlbHNQZXJJbmRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuW2ldLnBpeGVsc1BlckluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ID0gbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuW2ldLmluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxlbmd0aCA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsc1BlckluZGVudCAqIGluZGVudCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcENhbnZhc0N0eC5tZWFzdXJlVGV4dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuW2ldLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbG9uZ0NvdW50ICs9IE1hdGguZmxvb3IoaXRlbUxlbmd0aCAvICh3aWR0aExpbWl0IC0gMjkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1MZW5ndGggPiBtYXhJbm5lckxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SW5uZXJUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lc0l0ZW1bbGluZXNJbmRleF0uY2hpbGRyZW5baV0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SW5uZXJMZW5ndGggPSBpdGVtTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZWFXaWR0aCA9IE1hdGgubWF4KGFyZWFXaWR0aCwgbWF4SW5uZXJMZW5ndGggKyA0MCk7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHdpZHRoIGxpbWl0IGFuZCBkZXRlcm1pbmUgaG93IG11Y2ggYWRkaXRpb25hbCBoZWlnaHQgaXMgbmVlZGVkIHRvIGFjY29tbW9kYXRlIHRoZSBmb3JjZWQgdGV4dCBvdmVyZmxvdyAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgICAgICAgICBpZiAoYXJlYVdpZHRoID4gd2lkdGhMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBhcmVhV2lkdGggPSB3aWR0aExpbWl0O1xuICAgICAgICAgICAgICAgICAgICBhcmVhSGVpZ2h0ICs9IGxvbmdDb3VudCAqIGFkZGl0aW9uYWxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXhGdW5jdGlvbigkKGJsb2Nrc1tpXS52aWV3KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcmVhV2lkdGggPSBhcmVhV2lkdGg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFyZWFXaWR0aCArPSAyNTtcbiAgICAgICAgICAgIC8vYXJlYUhlaWdodCArPSAoYmxvY2tzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gKyA0MCB0byBhcmVhSGVpZ2h0IHRvIHByb3ZpZGUgc29tZSBhZGRpdGlvbmFsIGJ1ZmZlciBpbiBjYXNlIGFueSB0ZXh0IG92ZXJmbG93IHN0aWxsIGhhcHBlbnMgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgIHRoaXMuYXJlYUhlaWdodCA9IGFyZWFIZWlnaHQgKyA0MDtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUFyZWEpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5hcmVhV2lkdGggKyAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBhcmVhSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCAqIGluZGVudCArIHRoaXMuYXJlYVdpZHRoICsgMixcbiAgICAgICAgICAgIGhlaWdodDogYXJlYUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRlbnQgPiAwICYmIGluZGVudCA8PSA0KSB7XG4gICAgICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYWRkQ2xhc3MoXCJhbnN3ZXJcIiArIGluZGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYWRkQ2xhc3MoXCJhbnN3ZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwYWlyZWQgZGlzdHJhY3RvciBkZWNvcmF0aW9uXG4gICAgICAgIHZhciBiaW5zID0gW107XG4gICAgICAgIHZhciBiaW4gPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGlmIChsaW5lLmJsb2NrKCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbnMucHVzaChiaW4pO1xuICAgICAgICAgICAgICAgICAgICBiaW4gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbi5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZS5ncm91cFdpdGhOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbnMucHVzaChiaW4pO1xuICAgICAgICAgICAgICAgICAgICBiaW4gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhaXJlZEJpbnMgPSBbXTtcbiAgICAgICAgdmFyIGxpbmVOdW1iZXJzID0gW107XG4gICAgICAgIHZhciBwYWlyZWREaXZzID0gW107XG4gICAgICAgIHZhciBqO1xuICAgICAgICBpZiAodGhpcy5wYWlyRGlzdHJhY3RvcnMgfHwgIXRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgZm9yIChpID0gYmlucy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgICAgIGJpbiA9IGJpbnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGJpblswXS5wYWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFsbCBpbiBiaW4gdG8gbGluZSBudW1iZXJzXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJpbi5sZW5ndGggLSAxOyBqID4gLTE7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcnMudW5zaGlmdChiaW5bal0uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVOdW1iZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhbGwgaW4gYmluIHRvIGxpbmUgbnVtYmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYmluLmxlbmd0aCAtIDE7IGogPiAtMTsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcnMudW5zaGlmdChiaW5bal0uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFpcmVkQmlucy51bnNoaWZ0KGxpbmVOdW1iZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcmVkQmlucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICQocGFpcmVkRGl2KS5hZGRDbGFzcyhcInBhaXJlZFwiKTtcbiAgICAgICAgICAgICAgICAkKHBhaXJlZERpdikuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBpZD0gJ3N0JyBzdHlsZSA9ICd2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmb250LXdlaWdodDogYm9sZCc+b3J7PC9zcGFuPlwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBwYWlyZWREaXZzLnB1c2gocGFpcmVkRGl2KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuYXBwZW5kQ2hpbGQocGFpcmVkRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhaXJlZEJpbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaXJlZEJpbnMgPSBwYWlyZWRCaW5zO1xuICAgICAgICB0aGlzLnBhaXJlZERpdnMgPSBwYWlyZWREaXZzO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm51bWJlcmVkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRCbG9ja0xhYmVscyhzb3VyY2VCbG9ja3MuY29uY2F0KGFuc3dlckJsb2NrcykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmlld1xuICAgICAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLyBuZWVkcyB0byBiZSBoZXJlIGZvciBsb2FkaW5nIGZyb20gc3RvcmFnZVxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgLy8gUHV0IGJhY2sgaW50byB0aGUgb2Zmc2NyZWVuIHBvc2l0aW9uXG4gICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgJChyZXBsYWNlRWxlbWVudCkucmVwbGFjZVdpdGgodGhpcy5vdXRlckRpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTWFrZSBibG9ja3MgaW50ZXJhY3RpdmUgKGJvdGggZHJhZy1hbmQtZHJvcCBhbmQga2V5Ym9hcmQpXG4gICAgaW5pdGlhbGl6ZUludGVyYWN0aXZpdHkoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2ldLmluaXRpYWxpemVJbnRlcmFjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFiSW5kZXgoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiIHx8XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UgPT0gXCJtYXRoXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hdGhKYXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlTWF0aEpheCh0aGlzLm91dGVyRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNYWtlIG9uZSBibG9jayBiZSBrZXlib2FyZCBhY2Nlc3NpYmxlXG4gICAgaW5pdGlhbGl6ZVRhYkluZGV4KCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5lbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBibG9jay5tYWtlVGFiSW5kZXgoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IFNFUlZFUiBDT01NVU5JQ0FUSU9OID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBSZXR1cm4gdGhlIGFyZ3VtZW50IHRoYXQgaXMgbmV3ZXIgYmFzZWQgb24gdGhlIHRpbWVzdGFtcFxuICAgIG5ld2VyRGF0YShkYXRhQSwgZGF0YUIpIHtcbiAgICAgICAgdmFyIGRhdGVBID0gZGF0YUEudGltZXN0YW1wO1xuICAgICAgICB2YXIgZGF0ZUIgPSBkYXRhQi50aW1lc3RhbXA7XG4gICAgICAgIGlmIChkYXRlQSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YUE7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZUEgPSB0aGlzLmRhdGVGcm9tVGltZXN0YW1wKGRhdGVBKTtcbiAgICAgICAgZGF0ZUIgPSB0aGlzLmRhdGVGcm9tVGltZXN0YW1wKGRhdGVCKTtcbiAgICAgICAgaWYgKGRhdGVBID4gZGF0ZUIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCYXNlZCBvbiB0aGUgZGF0YSwgbG9hZFxuICAgIGxvYWREYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIHNvdXJjZUhhc2ggPSBkYXRhLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZUhhc2ggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBtYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICAgICAgc291cmNlSGFzaCA9IGRhdGEudHJhc2g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFuc3dlckhhc2ggPSBkYXRhLmFuc3dlcjtcbiAgICAgICAgdmFyIGFkYXB0aXZlSGFzaCA9IGRhdGEuYWRhcHRpdmU7XG4gICAgICAgIHZhciBvcHRpb25zO1xuICAgICAgICBpZiAoYWRhcHRpdmVIYXNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9uc0Zyb21IYXNoKGFkYXB0aXZlSGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubm9pbmRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub2luZGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hlY2tDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSBvcHRpb25zLmNoZWNrQ291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzU29sdmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzU29sdmVkID0gb3B0aW9ucy5oYXNTb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc291cmNlSGFzaCA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGFuc3dlckhhc2ggPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBhbnN3ZXJIYXNoLmxlbmd0aCA9PSAxXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQXJlYXModGhpcy5ibG9ja3NGcm9tU291cmNlKCksIFtdLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUFyZWFzKFxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tzRnJvbUhhc2goc291cmNlSGFzaCksXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja3NGcm9tSGFzaChhbnN3ZXJIYXNoKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ncmFkZSA9IHRoaXMuZ3JhZGVyLmdyYWRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSB0aGlzLmdyYWRlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0YXJ0IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgaWYgKHRoaXMubmVlZHNSZWluaXRpYWxpemF0aW9uICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVJbnRlcmFjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIHdoYXQgaXMgc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbERhdGEoKSB7XG4gICAgICAgIHZhciBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlSWQpO1xuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGRhdGEuY2hhckF0KDApID09IFwie1wiKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgLy8gUnVuZXN0b25lQmFzZTogU2VudCB3aGVuIHRoZSBzZXJ2ZXIgaGFzIGRhdGFcbiAgICByZXN0b3JlQW5zd2VycyhzZXJ2ZXJEYXRhKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoc2VydmVyRGF0YSk7XG4gICAgfVxuICAgIC8vIFJ1bmVzdG9uZUJhc2U6IExvYWQgd2hhdCBpcyBpbiBsb2NhbCBzdG9yYWdlXG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZERhdGEodGhpcy5sb2NhbERhdGEoKSk7XG4gICAgfVxuICAgIC8vIFJ1bmVzdG9uZUJhc2U6IFNldCB0aGUgc3RhdGUgb2YgdGhlIHByb2JsZW0gaW4gbG9jYWwgc3RvcmFnZVxuICAgIHNldExvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgICAgIHZhciB0b1N0b3JlO1xuICAgICAgICBpZiAoZGF0YSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvU3RvcmUgPSB7XG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZUhhc2goKSxcbiAgICAgICAgICAgICAgICBhbnN3ZXI6IHRoaXMuYW5zd2VySGFzaCgpLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWRhcHRpdmVIYXNoID0gdGhpcy5hZGFwdGl2ZUhhc2goKTtcbiAgICAgICAgICAgIGlmIChhZGFwdGl2ZUhhc2gubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvU3RvcmUuYWRhcHRpdmUgPSBhZGFwdGl2ZUhhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b1N0b3JlID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VJZCwgSlNPTi5zdHJpbmdpZnkodG9TdG9yZSkpO1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IExPR0dJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBMb2cgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIHByb2JsZW0gdG8gdGhlIHNlcnZlcjpcbiAgICAvLyAgIHN0YXJ0OiB0aGUgdXNlciBzdGFydGVkIGludGVyYWN0aW5nIHdpdGggdGhpcyBwcm9ibGVtXG4gICAgLy8gICBtb3ZlOiB0aGUgdXNlciBtb3ZlZCBhIGJsb2NrIHRvIGEgbmV3IHBvc2l0aW9uXG4gICAgLy8gICByZXNldDogdGhlIHJlc2V0IGJ1dHRvbiB3YXMgcHJlc3NlZFxuICAgIC8vICAgcmVtb3ZlRGlzdHJhY3RvcjogXCJIZWxwIE1lXCIgcmVtb3ZlZCBhIGRpc3RyYWN0b3JcbiAgICAvLyAgIHJlbW92ZUluZGVudGF0aW9uOiBcIkhlbHAgTWVcIiByZW1vdmVkIGluZGVudGF0aW9uXG4gICAgLy8gICBjb21iaW5lQmxvY2tzOiBcIkhlbHAgTWVcIiBjb21iaW5lZCBibG9ja3NcbiAgICBsb2dNb3ZlKGFjdGl2aXR5KSB7XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcInBhcnNvbnNNb3ZlXCIsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICBzdG9yYWdlaWQ6IHN1cGVyLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYWN0ID0gYWN0aXZpdHkgKyBcInxcIiArIHRoaXMuc291cmNlSGFzaCgpICsgXCJ8XCIgKyB0aGlzLmFuc3dlckhhc2goKTtcbiAgICAgICAgdmFyIGFkYXB0aXZlSGFzaCA9IHRoaXMuYWRhcHRpdmVIYXNoKCk7XG4gICAgICAgIGlmIChhZGFwdGl2ZUhhc2ggIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFjdCA9IGFjdCArIFwifFwiICsgYWRhcHRpdmVIYXNoO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmFjdCA9IGFjdDtcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvLyBMb2cgdGhlIGFuc3dlciB0byB0aGUgcHJvYmxlbVxuICAgIC8vICAgY29ycmVjdDogVGhlIGFuc3dlciBnaXZlbiBtYXRjaGVzIHRoZSBzb2x1dGlvblxuICAgIC8vICAgaW5jb3JyZWN0KjogVGhlIGFuc3dlciBpcyB3cm9uZyBmb3IgdmFyaW91cyByZWFzb25zXG4gICAgYXN5bmMgbG9nQ3VycmVudEFuc3dlcihzaWQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgZXZlbnQ6IFwicGFyc29uc1wiLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYW5zd2VySGFzaCA9IHRoaXMuYW5zd2VySGFzaCgpO1xuICAgICAgICBldmVudC5hbnN3ZXIgPSBhbnN3ZXJIYXNoO1xuICAgICAgICB2YXIgc291cmNlSGFzaCA9IHRoaXMuc291cmNlSGFzaCgpO1xuICAgICAgICBldmVudC5zb3VyY2UgPSBzb3VyY2VIYXNoO1xuICAgICAgICB2YXIgYWN0ID0gc291cmNlSGFzaCArIFwifFwiICsgYW5zd2VySGFzaDtcbiAgICAgICAgdmFyIGFkYXB0aXZlSGFzaCA9IHRoaXMuYWRhcHRpdmVIYXNoKCk7XG4gICAgICAgIGlmIChhZGFwdGl2ZUhhc2ggIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LmFkYXB0aXZlID0gYWRhcHRpdmVIYXNoO1xuICAgICAgICAgICAgYWN0ID0gYWN0ICsgXCJ8XCIgKyBhZGFwdGl2ZUhhc2g7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JhZGUgPT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgICAgICAgIGFjdCA9IFwiY29ycmVjdHxcIiArIGFjdDtcbiAgICAgICAgICAgIGV2ZW50LmNvcnJlY3QgPSBcIlRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdCA9IFwiaW5jb3JyZWN0fFwiICsgYWN0O1xuICAgICAgICAgICAgZXZlbnQuY29ycmVjdCA9IFwiRlwiO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmFjdCA9IGFjdDtcblxuICAgICAgICBpZiAodHlwZW9mIHNpZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXZlbnQuc2lkID0gc2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5sb2dCb29rRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IEFDQ0VTU0lORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBBbnN3ZXIgdGhlIGhhc2ggb2YgdGhlIGFkYXB0aXZlIHN0YXRlXG4gICAgYWRhcHRpdmVIYXNoKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc2ggPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoIWJsb2NrLmVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIGhhc2gucHVzaChcImRcIiArIGJsb2NrLmxpbmVzWzBdLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2luZGVudCAhPT0gdGhpcy5vcHRpb25zLm5vaW5kZW50KSB7XG4gICAgICAgICAgICBoYXNoLnB1c2goXCJpXCIpO1xuICAgICAgICB9XG4gICAgICAgIGhhc2gucHVzaChcImNcIiArIHRoaXMuY2hlY2tDb3VudCk7XG4gICAgICAgIGlmICh0aGlzLmhhc1NvbHZlZCkge1xuICAgICAgICAgICAgaGFzaC5wdXNoKFwic1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzaC5qb2luKFwiLVwiKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIG9wdGlvbnMgZm9yIGNyZWF0aW5nIGJsb2NrcyBiYXNlZCBvbiBhIGhhc2hcbiAgICBvcHRpb25zRnJvbUhhc2goaGFzaCkge1xuICAgICAgICB2YXIgc3BsaXQ7XG4gICAgICAgIGlmIChoYXNoID09PSBcIi1cIiB8fCBoYXNoID09PSBcIlwiIHx8IGhhc2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNwbGl0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGxpdCA9IGhhc2guc3BsaXQoXCItXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gc3BsaXRbaV07XG4gICAgICAgICAgICBpZiAoa2V5WzBdID09IFwiaVwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5ub2luZGVudCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVswXSA9PSBcImRcIikge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkLnB1c2gocGFyc2VJbnQoa2V5LnNsaWNlKDEpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVswXSA9PSBcInNcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGFzU29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5WzBdID09IFwiY1wiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jaGVja0NvdW50ID0gcGFyc2VJbnQoa2V5LnNsaWNlKDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlzYWJsZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBBbnN3ZXIgdGhlIGhhc2ggb2YgdGhlIGFuc3dlciBhcmVhXG4gICAgYW5zd2VySGFzaCgpIHtcbiAgICAgICAgdmFyIGhhc2ggPSBbXTtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoLnB1c2goYmxvY2tzW2ldLmhhc2goKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzaC5qb2luKFwiLVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBbnN3ZXIgdGhlIGhhc2ggb2YgdGhlIHNvdXJjZSBhcmVhXG4gICAgc291cmNlSGFzaCgpIHtcbiAgICAgICAgdmFyIGhhc2ggPSBbXTtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuc291cmNlQmxvY2tzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoLnB1c2goYmxvY2tzW2ldLmhhc2goKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzaC5qb2luKFwiLVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJbnRlci1wcm9ibGVtIGFkYXB0aXZlIGNoYW5nZXNcbiAgICAvLyBCYXNlZCBvbiB0aGUgcmVjZW50QXR0ZW1wdHMsIHJlbW92ZSBkaXN0cmFjdG9ycywgYWRkIGluZGVudCwgY29tYmluZSBibG9ja3NcbiAgICBhZGFwdEJsb2NrcyhpbnB1dCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gW107XG4gICAgICAgIHZhciBkaXN0cmFjdG9ycyA9IFtdO1xuICAgICAgICB2YXIgYmxvY2s7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gaW5wdXRbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suaXNEaXN0cmFjdG9yKCkpIHtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdG9ycy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIFwicmVjZW50QXR0ZW1wdHNcIlxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5yZWNlbnRBdHRlbXB0cyA9PSB1bmRlZmluZWQgfHwgdGhpcy5yZWNlbnRBdHRlbXB0cyA9PSBcIk5hTlwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdGVzdEF0dGVtcHRDb3VudCA9IHRoaXMucmVjZW50QXR0ZW1wdHM7XG4gICAgICAgIHZhciBuQmxvY2tzID0gYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgdmFyIG5CbG9ja3NUb0NvbWJpbmUgPSAwO1xuICAgICAgICB2YXIgbkRpc3RyYWN0b3JzID0gZGlzdHJhY3RvcnMubGVuZ3RoO1xuICAgICAgICB2YXIgblRvUmVtb3ZlID0gMDtcbiAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB2YXIgZ2l2ZUluZGVudGF0aW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChsYXN0ZXN0QXR0ZW1wdENvdW50IDwgMikge1xuICAgICAgICAgICAgLy8gMSBUcnlcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpbWl0RGlzdHJhY3RvcnMgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0ZXN0QXR0ZW1wdENvdW50IDwgNCkge1xuICAgICAgICAgICAgLy8gMi0zIFRyaWVzXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIHRoZXkgYXJlIGRvaW5nIG5vcm1hbFxuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3Rlc3RBdHRlbXB0Q291bnQgPCA2KSB7XG4gICAgICAgICAgICAvLyA0LTUgVHJpZXNcbiAgICAgICAgICAgIC8vIHBhaXIgZGlzdHJhY3RvcnNcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0ZXN0QXR0ZW1wdENvdW50IDwgOCkge1xuICAgICAgICAgICAgLy8gNi03IFRyaWVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgNTAlIG9mIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICBuVG9SZW1vdmUgPSAwLjUgKiBuRGlzdHJhY3RvcnM7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA4KyBUcmllc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBvZiBkaXN0cmFjdG9yc1xuICAgICAgICAgICAgblRvUmVtb3ZlID0gbkRpc3RyYWN0b3JzO1xuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIGVsc2UgaWYobGFzdGVzdEF0dGVtcHRDb3VudCA8IDEyKSB7IC8vMTAtMTFcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgZGlzdHJhY3RvcnMgYW5kIGdpdmUgaW5kZW50YXRpb25cbiAgICAgICAgICAgIG5Ub1JlbW92ZSA9IG5EaXN0cmFjdG9ycztcbiAgICAgICAgICAgIGdpdmVJbmRlbnRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZihsYXN0ZXN0QXR0ZW1wdENvdW50IDwgMTQpIHsgLy8gMTItMTMgVHJpZXNcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgb2YgZGlzdHJhY3RvcnNcbiAgICAgICAgICAgIC8vIGdpdmUgaW5kZW50YXRpb25cbiAgICAgICAgICAgIC8vIHJlZHVjZSBwcm9ibGVtIHRvIDMvNCBzaXplXG4gICAgICAgICAgICBnaXZlSW5kZW50YXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgblRvUmVtb3ZlID0gbkRpc3RyYWN0b3JzO1xuICAgICAgICAgICAgbkJsb2Nrc1RvQ29tYmluZSA9IC4yNSAqIG5CbG9ja3M7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7IC8vID49IDE0IFRyaWVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIG9mIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICAvLyBnaXZlIGluZGVudGF0aW9uXG4gICAgICAgICAgICAvLyByZWR1Y2UgcHJvYmxlbSB0byAxLzIgc2l6ZVxuICAgICAgICAgICAgZ2l2ZUluZGVudGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIG5Ub1JlbW92ZSA9IG5EaXN0cmFjdG9ycztcbiAgICAgICAgICAgIG5CbG9ja3NUb0NvbWJpbmUgPSAuNSAqIG5CbG9ja3M7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgbkJsb2Nrc1RvQ29tYmluZSA9IE1hdGgubWluKG5CbG9ja3NUb0NvbWJpbmUsIG5CbG9ja3MgLSAzKTtcbiAgICAgICAgLy8gTmV2ZXIgY29tYmluZSBzbyB3aGVyZSB0aGVyZSBhcmUgbGVzcyB0aGFuIHRocmVlIGJsb2NrcyBsZWZ0XG4gICAgICAgIC8vIFJlbW92ZSBkaXN0cmFjdG9yc1xuICAgICAgICBkaXN0cmFjdG9ycyA9IHRoaXMuc2h1ZmZsZWQoZGlzdHJhY3RvcnMpO1xuICAgICAgICBkaXN0cmFjdG9ycyA9IGRpc3RyYWN0b3JzLnNsaWNlKDAsIG5Ub1JlbW92ZSk7XG4gICAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IGlucHV0W2ldO1xuICAgICAgICAgICAgaWYgKCFibG9jay5pc0Rpc3RyYWN0b3IoKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5pbkFycmF5KGJsb2NrLCBkaXN0cmFjdG9ycykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy92YXIgb3V0cHV0ID0gaW5wdXQ7XG4gICAgICAgIGlmIChnaXZlSW5kZW50YXRpb24pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W2ldLmFkZEluZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRlbnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5ub2luZGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29tYmluZSBibG9ja3NcbiAgICAgICAgdmFyIHNvbHV0aW9uID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG91dHB1dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChvdXRwdXRbal0ubGluZXNbMF0uaW5kZXggPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbi5wdXNoKG91dHB1dFtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbkJsb2Nrc1RvQ29tYmluZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb21iaW5lIG9uZSBzZXQgb2YgYmxvY2tzXG4gICAgICAgICAgICB2YXIgYmVzdCA9IC0xMDtcbiAgICAgICAgICAgIHZhciBjb21iaW5lSW5kZXggPSAtMTA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc29sdXRpb24ubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBzb2x1dGlvbltqXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IHNvbHV0aW9uW2ogKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgcmF0aW5nID0gMTAgLSBibG9jay5saW5lcy5sZW5ndGggLSBuZXh0LmxpbmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tJbmRlbnQgPSBibG9jay5taW5pbXVtTGluZUluZGVudCgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5kZW50ID0gbmV4dC5taW5pbXVtTGluZUluZGVudCgpO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0luZGVudCA9PSBuZXh0SW5kZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZyArPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2tJbmRlbnQgPiBuZXh0SW5kZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZyAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmxpbmVzW2Jsb2NrLmxpbmVzLmxlbmd0aCAtIDFdLmluZGVudCA9PVxuICAgICAgICAgICAgICAgICAgICBuZXh0LmxpbmVzWzBdLmluZGVudFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJhdGluZyA+PSBiZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3QgPSByYXRpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2sgPSBzb2x1dGlvbltjb21iaW5lSW5kZXhdO1xuICAgICAgICAgICAgbmV4dCA9IHNvbHV0aW9uW2NvbWJpbmVJbmRleCArIDFdO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5leHQubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBibG9jay5hZGRMaW5lKG5leHQubGluZXNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1NvbHV0aW9uID0gW107XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc29sdXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPT0gY29tYmluZUluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTb2x1dGlvbi5wdXNoKHNvbHV0aW9uW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc29sdXRpb24gPSBuZXdTb2x1dGlvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW9yZGVyXG4gICAgICAgIHZhciBjb21iaW5lZE91dHB1dCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc29sdXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0W2ldLmxpbmVzWzBdLmluZGV4ID09IHNvbHV0aW9uW2pdLmxpbmVzWzBdLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkT3V0cHV0LnB1c2goc29sdXRpb25bal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tYmluZWRPdXRwdXQ7XG4gICAgfVxuICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBjb2RlIGJsb2NrcyBiYXNlZCBvbiB3aGF0IGlzIHNwZWNpZmllZCBpbiB0aGUgcHJvYmxlbVxuICAgIGJsb2Nrc0Zyb21Tb3VyY2UoKSB7XG4gICAgICAgIHZhciB1bm9yZGVyZWRCbG9ja3MgPSBbXTtcbiAgICAgICAgdmFyIG9yaWdpbmFsQmxvY2tzID0gW107XG4gICAgICAgIHZhciBibG9ja3MgPSBbXTtcbiAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgIHZhciBibG9jaywgbGluZSwgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmUgPSB0aGlzLmxpbmVzW2ldO1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgIGlmICghbGluZS5ncm91cFdpdGhOZXh0KSB7XG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkQmxvY2tzLnB1c2gobmV3IFBhcnNvbnNCbG9jayh0aGlzLCBsaW5lcykpO1xuICAgICAgICAgICAgICAgIGxpbmVzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxCbG9ja3MgPSB1bm9yZGVyZWRCbG9ja3M7XG4gICAgICAgIC8vIFRyaW0gdGhlIGRpc3RyYWN0b3JzXG4gICAgICAgIHZhciByZW1vdmVkQmxvY2tzID0gW107XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4ZGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgbWF4ZGlzdCA9IHRoaXMub3B0aW9ucy5tYXhkaXN0O1xuICAgICAgICAgICAgdmFyIGRpc3RyYWN0b3JzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdW5vcmRlcmVkQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSB1bm9yZGVyZWRCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxpbmVzWzBdLmRpc3RyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJhY3RvcnMucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heGRpc3QgPCBkaXN0cmFjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdG9ycyA9IHRoaXMuc2h1ZmZsZWQoZGlzdHJhY3RvcnMpO1xuICAgICAgICAgICAgICAgIGRpc3RyYWN0b3JzID0gZGlzdHJhY3RvcnMuc2xpY2UoMCwgbWF4ZGlzdCk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVub3JkZXJlZEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IHVub3JkZXJlZEJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxpbmVzWzBdLmRpc3RyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoYmxvY2ssIGRpc3RyYWN0b3JzKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkQmxvY2tzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3MucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkQmxvY2tzID0gYmxvY2tzO1xuICAgICAgICAgICAgICAgIGJsb2NrcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnksIHNldCB0aGUgcGFpckRpc3RyYWN0b3JzIHZhbHVlIGJlZm9yZSBibG9ja3MgZ2V0IHNodWZmbGVkIC0gV2lsbGlhbSBMaSAoQXVndXN0IDIwMjApXG4gICAgICAgIGlmICh0aGlzLnJlY2VudEF0dGVtcHRzIDwgMikge1xuICAgICAgICAgICAgLy8gMSBUcnlcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9yZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFNodWZmbGUsIHJlc3BlY3RpbmcgcGFpcmVkIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICB2YXIgY2h1bmtzID0gW10sXG4gICAgICAgICAgICAgICAgY2h1bmsgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1bm9yZGVyZWRCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBibG9jayA9IHVub3JkZXJlZEJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2subGluZXNbMF0ucGFpcmVkICYmIHRoaXMucGFpckRpc3RyYWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdpbGxpYW0gTGkgKEF1Z3VzdCAyMDIwKVxuICAgICAgICAgICAgICAgICAgICBjaHVuay5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjaHVuay5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNodW5rcyA9IHRoaXMuc2h1ZmZsZWQoY2h1bmtzKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaHVuayA9IGNodW5rc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmsubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaHVmZmxlIHBhaXJlZCBkaXN0cmFjdG9yc1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IHRoaXMuc2h1ZmZsZWQoY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2h1bmsubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGNodW5rW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGNodW5rWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPcmRlciBhY2NvcmRpbmcgdG8gb3JkZXIgc3BlY2lmaWVkXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLm9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBvcmlnaW5hbEJsb2Nrc1t0aGlzLm9wdGlvbnMub3JkZXJbaV1dO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAkLmluQXJyYXkodGhpcy5vcHRpb25zLm9yZGVyW2ldLCByZW1vdmVkQmxvY2tzKSA8IDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWRhcHRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubGltaXREaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgICAgICBibG9ja3MgPSB0aGlzLmFkYXB0QmxvY2tzKGJsb2Nrcyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGltaXREaXN0cmFjdG9ycykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByZW1vdmVkQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JkZXIgPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLnJhbmRvbSgwLCBibG9ja3MubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJC5pbkFycmF5KHJlbW92ZWRCbG9ja3NbaV0sIHRoaXMub3B0aW9ucy5vcmRlcik7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5zcGxpY2UoaW5kZXgsIDAsIG9yaWdpbmFsQmxvY2tzW3JlbW92ZWRCbG9ja3NbaV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFpckRpc3RyYWN0b3JzICYmIHRoaXMub3B0aW9ucy5vcmRlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vbW92ZSBwYWlycyB0b2dldGhlclxuICAgICAgICAgICAgLy9HbyB0aHJvdWdoIGFycmF5IGxvb2tpbmcgZm9yIGRpdHJhY3RvciBhbmQgaXRzIHBhaXJcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBvcmlnaW5hbEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxCbG9ja3NbaV0ubGluZXNbMF0ucGFpcmVkICYmXG4gICAgICAgICAgICAgICAgICAgICQuaW5BcnJheShvcmlnaW5hbEJsb2Nrc1tpXSwgYmxvY2tzKSA+PSAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqID0gaTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCQuaW5BcnJheShvcmlnaW5hbEJsb2Nrc1tqIC0gMV0sIGJsb2NrcykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBwYWlyZWQgZGlzdHJhY3RvciBvciBzb2x1dGlvbiBibG9jayBpdCB3aWxsIGJlIG5leHQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhUbyA9ICQuaW5BcnJheShvcmlnaW5hbEJsb2Nrc1tqIC0gMV0sIGJsb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleEZyb20gPSAkLmluQXJyYXkob3JpZ2luYWxCbG9ja3NbaV0sIGJsb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5zcGxpY2UoaW5kZXhGcm9tLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzLnNwbGljZShpbmRleFRvLCAwLCBvcmlnaW5hbEJsb2Nrc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9ja3M7XG4gICAgfVxuICAgIC8vIFJldHVybiBhIGNvZGVibG9jayB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBoYXNoXG4gICAgYmxvY2tGcm9tSGFzaChoYXNoKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGhhc2guc3BsaXQoXCJfXCIpO1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2godGhpcy5saW5lc1tzcGxpdFtpXV0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBibG9jayA9IG5ldyBQYXJzb25zQmxvY2sodGhpcywgbGluZXMpO1xuICAgICAgICBpZiAodGhpcy5ub2luZGVudCkge1xuICAgICAgICAgICAgYmxvY2suaW5kZW50ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrLmluZGVudCA9IE51bWJlcihzcGxpdFtzcGxpdC5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgY29kZWJsb2NrcyB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBoYXNoXG4gICAgYmxvY2tzRnJvbUhhc2goaGFzaCkge1xuICAgICAgICB2YXIgc3BsaXQ7XG4gICAgICAgIGlmIChoYXNoID09PSBcIi1cIiB8fCBoYXNoID09PSBcIlwiIHx8IGhhc2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNwbGl0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGxpdCA9IGhhc2guc3BsaXQoXCItXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBibG9ja3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2tzLnB1c2godGhpcy5ibG9ja0Zyb21IYXNoKHNwbGl0W2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRCbG9ja3MoYmxvY2tzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBibG9ja3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgYmxvY2sgb2JqZWN0IGJ5IHRoZSBmdWxsIGlkIGluY2x1ZGluZyBpZCBwcmVmaXhcbiAgICBnZXRCbG9ja0J5SWQoaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2sudmlldy5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXJyYXkgb2YgY29kZWJsb2NrcyB0aGF0IGFyZSB0aGUgc29sdXRpb25cbiAgICBzb2x1dGlvbkJsb2NrcygpIHtcbiAgICAgICAgdmFyIHNvbHV0aW9uQmxvY2tzID0gW107XG4gICAgICAgIHZhciBzb2x1dGlvbkxpbmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpbmVzW2ldLmRpc3RyYWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkxpbmVzLnB1c2godGhpcy5saW5lc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJsb2NrID0gc29sdXRpb25MaW5lc1swXS5ibG9jaygpO1xuICAgICAgICBzb2x1dGlvbkJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb2x1dGlvbkxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dEJsb2NrID0gc29sdXRpb25MaW5lc1tpXS5ibG9jaygpO1xuICAgICAgICAgICAgaWYgKGJsb2NrICE9PSBuZXh0QmxvY2spIHtcbiAgICAgICAgICAgICAgICBibG9jayA9IG5leHRCbG9jaztcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29sdXRpb25CbG9ja3M7XG4gICAgfVxuICAgIC8vIFJldHVybiBhcnJheSBvZiBjb2RlYmxvY2tzIGJhc2VkIG9uIHdoYXQgaXMgaW4gdGhlIHNvdXJjZSBmaWVsZFxuICAgIHNvdXJjZUJsb2NrcygpIHtcbiAgICAgICAgdmFyIHNvdXJjZUJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnNvdXJjZUFyZWEuY2hpbGROb2RlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoJChjaGlsZCkuaGFzQ2xhc3MoXCJibG9ja1wiKSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZUJsb2Nrcy5wdXNoKHRoaXMuZ2V0QmxvY2tCeUlkKGNoaWxkLmlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZUJsb2NrcztcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIGVuYWJsZWQgY29kZWJsb2NrcyBiYXNlZCBvbiB3aGF0IGlzIGluIHRoZSBzb3VyY2UgZmllbGRcbiAgICBlbmFibGVkU291cmNlQmxvY2tzKCkge1xuICAgICAgICB2YXIgYWxsID0gdGhpcy5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgdmFyIGVuYWJsZWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IGFsbFtpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5lbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBlbmFibGVkLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXJyYXkgb2YgY29kZWJsb2NrcyBiYXNlZCBvbiB3aGF0IGlzIGluIHRoZSBhbnN3ZXIgZmllbGRcbiAgICBhbnN3ZXJCbG9ja3MoKSB7XG4gICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSBbXTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5hbnN3ZXJBcmVhLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZ2V0QmxvY2tCeUlkKGNoaWxkcmVuW2ldLmlkKTtcbiAgICAgICAgICAgIGlmIChibG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyQmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbnN3ZXJCbG9ja3M7XG4gICAgfVxuICAgIC8vIFJldHVybiBhcnJheSBvZiBlbmFibGVkIGNvZGVibG9ja3MgYmFzZWQgb24gd2hhdCBpcyBpbiB0aGUgYW5zd2VyIGZpZWxkXG4gICAgZW5hYmxlZEFuc3dlckJsb2NrcygpIHtcbiAgICAgICAgdmFyIGFsbCA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIHZhciBlbmFibGVkID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBhbGxbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suZW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZC5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIGNvZGVsaW5lcyBiYXNlZCBvbiB3aGF0IGlzIGluIHRoZSBhbnN3ZXIgZmllbGRcbiAgICBhbnN3ZXJMaW5lcygpIHtcbiAgICAgICAgdmFyIGFuc3dlckxpbmVzID0gW107XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9jay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGFuc3dlckxpbmVzLnB1c2goYmxvY2subGluZXNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbnN3ZXJMaW5lcztcbiAgICB9XG4gICAgLy8gR28gdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCB5b3UgZ2V0IHRvIGEgYmxvY2s7IHJldHVybiB0aGF0IGJsb2NrIGVsZW1lbnRcbiAgICBnZXRCbG9ja0ZvcihlbGVtZW50KSB7XG4gICAgICAgIHZhciBjaGVjayA9IGVsZW1lbnQ7XG4gICAgICAgIHdoaWxlICghY2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvY2tcIikpIHtcbiAgICAgICAgICAgIGNoZWNrID0gY2hlY2sucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgbWF4aW11bSBpbmRlbnQgZm9yIHRoZSBzb2x1dGlvblxuICAgIHNvbHV0aW9uSW5kZW50KCkge1xuICAgICAgICB2YXIgaW5kZW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBpbmRlbnQgPSBNYXRoLm1heChpbmRlbnQsIGJsb2NrLnNvbHV0aW9uSW5kZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRlbnQ7XG4gICAgfVxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT0gQUNUSU9OID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIFRoZSBcIkNoZWNrIE1lXCIgYnV0dG9uIHdhcyBwcmVzc2VkLlxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1NvbHZlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0NvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0aXZlSWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGl2ZUlkID0gdGhpcy5zdG9yYWdlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUT0RPIC0gcmVuZGVyaW5nIGZlZWRiYWNrIGlzIGJ1cmllZCBpbiB0aGUgZ3JhZGVyLmdyYWRlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIHRvIGRpc2FibGUgZmVlZGJhY2sgc2V0IHRoaXMuZ3JhZGVyLnNob3dmZWVkYmFjayBib29sZWFuXG4gICAgICAgICAgICB0aGlzLmdyYWRlci5zaG93ZmVlZGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ3JhZGUgPSB0aGlzLmdyYWRlci5ncmFkZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JhZGUgPT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1NvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMuY2hlY2tCdXR0b24pLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmFkYXB0aXZlSWQgKyBcIlNvbHZlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gdGhpcy5jaGVja0NvdW50O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyBcInJlY2VudEF0dGVtcHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGl2ZUlkICsgdGhpcy5kaXZpZCArIFwiQ291bnRcIixcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ291bnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgLy8gaWYgbm90IHNvbHZlZCBhbmQgbm90IHRvbyBzaG9ydCB0aGVuIGNoZWNrIGlmIHNob3VsZCBwcm92aWRlIGhlbHBcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNTb2x2ZWQgJiYgdGhpcy5ncmFkZSAhPT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuSGVscCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGNvdW50IHRoZSBhdHRlbXB0IGlmIHRoZSBhbnN3ZXIgaXMgZGlmZmVyZW50ICh0byBwcmV2ZW50IGdhbWluZylcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuc3dlckhhc2ggPSB0aGlzLmFuc3dlckhhc2goKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdEFuc3dlckhhc2ggIT09IGFuc3dlckhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtRGlzdGluY3QrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEFuc3dlckhhc2ggPSBhbnN3ZXJIYXNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRpbWUgdG8gb2ZmZXIgaGVscFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5udW1EaXN0aW5jdCA9PSAzICYmICF0aGlzLmdvdEhlbHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCQuaTE4bihcIm1zZ19wYXJzb25faGVscF9pbmZvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBlbmQgaWZcbiAgICAgICAgICAgICAgICB9IC8vIGVuZCBpZiBjYW4gaGVscFxuICAgICAgICAgICAgfSAvLyBlbmQgaWYgbm90IHNvbHZlZFxuICAgICAgICB9IC8vIGVuZCBvdXRlciBpZiBub3Qgc29sdmVkXG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIHRoaXMuZ3JhZGVyLnNob3dmZWVkYmFjayA9IHRydWU7XG4gICAgICAgIHRoaXMuZ3JhZGUgPSB0aGlzLmdyYWRlci5ncmFkZXJTdGF0ZTtcbiAgICAgICAgdmFyIGZlZWRiYWNrQXJlYTtcbiAgICAgICAgdmFyIGFuc3dlckFyZWEgPSAkKHRoaXMuYW5zd2VyQXJlYSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd2ZlZWRiYWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEgPSAkKHRoaXMubWVzc2FnZURpdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEgPSAkKFwiI2RvZXNub3RleGlzdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyYWRlID09PSBcImNvcnJlY3RcIikge1xuICAgICAgICAgICAgYW5zd2VyQXJlYS5hZGRDbGFzcyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDEwMCk7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICQuaTE4bihcIm1zZ19wYXJzb25fY29ycmVjdFwiLCB0aGlzLmNoZWNrQ291bnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl9jb3JyZWN0X2ZpcnN0X3RyeVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmFkZSA9PT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICAvLyB0b28gbGl0dGxlIGNvZGVcbiAgICAgICAgICAgIGFuc3dlckFyZWEuYWRkQ2xhc3MoXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDUwMCk7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl90b29fc2hvcnRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JhZGUgPT09IFwiaW5jb3JyZWN0SW5kZW50XCIpIHtcbiAgICAgICAgICAgIHZhciBpbmNvcnJlY3RCbG9ja3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmFkZXIuaW5kZW50TGVmdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJsb2NrID0gdGhpcy5ncmFkZXIuaW5kZW50TGVmdFtpXS5ibG9jaygpO1xuICAgICAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MuaW5kZXhPZihibG9jaykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb3JyZWN0QmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50TGVmdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JhZGVyLmluZGVudFJpZ2h0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSB0aGlzLmdyYWRlci5pbmRlbnRSaWdodFtpXS5ibG9jaygpO1xuICAgICAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MuaW5kZXhPZihibG9jaykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb3JyZWN0QmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50UmlnaHRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmZhZGVJbig1MDApO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX3dyb25nX2luZGVudFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrQXJlYS5odG1sKCQuaTE4bihcIm1zZ19wYXJzb25fd3JvbmdfaW5kZW50c1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmFkZSA9PT0gXCJpbmNvcnJlY3RNb3ZlQmxvY2tzXCIpIHtcbiAgICAgICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGluU29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgIHZhciBpblNvbHV0aW9uSW5kZXhlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vdEluU29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc29sdXRpb24uaW5kZXhPZihibG9jay5saW5lc1swXSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdEluU29sdXRpb24ucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5Tb2x1dGlvbi5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgaW5Tb2x1dGlvbkluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpc0luZGV4ZXMgPSB0aGlzLmdyYWRlci5pbnZlcnNlTElTSW5kaWNlcyhcbiAgICAgICAgICAgICAgICBpblNvbHV0aW9uSW5kZXhlcyxcbiAgICAgICAgICAgICAgICBpblNvbHV0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXNJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbm90SW5Tb2x1dGlvbi5wdXNoKGluU29sdXRpb25bbGlzSW5kZXhlc1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5zd2VyQXJlYS5hZGRDbGFzcyhcImluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIGZlZWRiYWNrQXJlYS5mYWRlSW4oNTAwKTtcbiAgICAgICAgICAgIGZlZWRiYWNrQXJlYS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93ZmVlZGJhY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdEluU29sdXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgJChub3RJblNvbHV0aW9uW2ldLnZpZXcpLmFkZENsYXNzKFwiaW5jb3JyZWN0UG9zaXRpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl93cm9uZ19vcmRlclwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IEFEQVBUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBJbml0aWFsaXplIHRoaXMgcHJvYmxlbSBhcyBhZGFwdGl2ZVxuICAgIC8vICAgIGhlbHBDb3VudCA9IG51bWJlciBvZiBjaGVja3MgYmVmb3JlIGhlbHAgaXMgZ2l2ZW4gKG5lZ2F0aXZlKVxuICAgIC8vICAgIGNhbkhlbHAgPSBib29sZWFuIGFzIHRvIHdoZXRoZXIgaGVscCBjYW4gYmUgcHJvdmlkZWRcbiAgICAvLyAgICBjaGVja0NvdW50ID0gaG93IG1hbnkgdGltZXMgaXQgaGFzIGJlZW4gY2hlY2tlZCBiZWZvcmUgY29ycmVjdFxuICAgIC8vICAgIHVzZXJSYXRpbmcgPSAwLi4xMDAgaG93IGdvb2QgdGhlIHBlcnNvbiBpcyBhdCBzb2x2aW5nIHByb2JsZW1zXG4gICAgaW5pdGlhbGl6ZUFkYXB0aXZlKCkge1xuICAgICAgICB0aGlzLmFkYXB0aXZlSWQgPSBzdXBlci5sb2NhbFN0b3JhZ2VLZXkoKTtcbiAgICAgICAgdGhpcy5jYW5IZWxwID0gdHJ1ZTtcbiAgICAgICAgLy90aGlzLmhlbHBDb3VudCA9IC0zOyAvLyBOdW1iZXIgb2YgY2hlY2tzIGJlZm9yZSBoZWxwIGlzIG9mZmVyZWRcbiAgICAgICAgdGhpcy5jaGVja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5udW1EaXN0aW5jdCA9IDA7IC8vIG51bWJlciBvZiBkaXN0aW5jdCBzb2x1dGlvbiBhdHRlbXB0cyAoZGlmZmVyZW50IGZyb20gcHJldmlvdXMpXG4gICAgICAgIHRoaXMuZ290SGVscCA9IGZhbHNlO1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSB1c2VyUmF0aW5nXG4gICAgICAgIHZhciBzdG9yYWdlUHJvYmxlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuYWRhcHRpdmVJZCArIFwiUHJvYmxlbVwiKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VQcm9ibGVtID09IHRoaXMuZGl2aWQpIHtcbiAgICAgICAgICAgIC8vIEFscmVhZHkgaW4gdGhpcyBwcm9ibGVtXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyB0aGlzLmRpdmlkICsgXCJDb3VudFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb3VudCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyB0aGlzLmRpdmlkICsgXCJDb3VudFwiXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb3VudCA9PSB1bmRlZmluZWQgfHwgY291bnQgPT0gXCJOYU5cIikge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tDb3VudCA9IGNvdW50O1xuICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyBcInJlY2VudEF0dGVtcHRzXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMucmVjZW50QXR0ZW1wdHMgPT0gdW5kZWZpbmVkIHx8IHRoaXMucmVjZW50QXR0ZW1wdHMgPT0gXCJOYU5cIikge1xuICAgICAgICAgICAgdGhpcy5yZWNlbnRBdHRlbXB0cyA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyBcInJlY2VudEF0dGVtcHRzXCIsXG4gICAgICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzXG4gICAgICAgICk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuYWRhcHRpdmVJZCArIFwiUHJvYmxlbVwiLCB0aGlzLmRpdmlkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyB0aGlzLmRpdmlkICsgXCJDb3VudFwiLFxuICAgICAgICAgICAgdGhpcy5jaGVja0NvdW50XG4gICAgICAgICk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuYWRhcHRpdmVJZCArIFwiU29sdmVkXCIsIGZhbHNlKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgYm9vbGVhbiBvZiB3aGV0aGVyIHRoZSB1c2VyIG11c3QgZGVhbCB3aXRoIGluZGVudGF0aW9uXG4gICAgdXNlc0luZGVudGF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ub2luZGVudCB8fCB0aGlzLnNvbHV0aW9uSW5kZW50KCkgPT0gMCkge1xuICAgICAgICAgICAgLy8gd2FzICQodGhpcy5hbnN3ZXJBcmVhKS5oYXNDbGFzcyhcImFuc3dlclwiKSAtIGJqZSBjaGFuZ2VkXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGaW5kIGEgZGlzdHJhY3RvciB0byByZW1vdmUgdG8gbWFrZSB0aGUgcHJvYmxlbSBlYXNpZXJcbiAgICAvLyAgKiB0cnkgZmlyc3QgaW4gdGhlIGFuc3dlciBhcmVhXG4gICAgLy8gICogaWYgbm90LCB0cnkgdGhlIHNvdXJjZSBhcmVhXG4gICAgLy8gICogaWYgbm90LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgZGlzdHJhY3RvclRvUmVtb3ZlKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5lbmFibGVkQW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIHZhciBibG9jaztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgaWYgKGJsb2NrLmlzRGlzdHJhY3RvcigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJsb2NrcyA9IHRoaXMuZW5hYmxlZFNvdXJjZUJsb2NrcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suaXNEaXN0cmFjdG9yKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgZXhpc3RcbiAgICBudW1iZXJPZkJsb2NrcyhmSW5jbHVkZURpc3RyYWN0b3JzID0gdHJ1ZSkge1xuICAgICAgICB2YXIgbnVtYmVyT2ZCbG9ja3MgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja3NbaV0uZW5hYmxlZCgpICYmXG4gICAgICAgICAgICAgICAgKGZJbmNsdWRlRGlzdHJhY3RvcnMgfHwgIXRoaXMuYmxvY2tzW2ldLmlzRGlzdHJhY3RvcigpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbG9ja3MgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtYmVyT2ZCbG9ja3M7XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGlzIGRpc3RyYWN0b3JzIHRvIG1ha2UgdGhlIHByb2JsZW0gZWFzaWVyXG4gICAgcmVtb3ZlRGlzdHJhY3RvcihibG9jaykge1xuICAgICAgICAvLyBBbGVydCB0aGUgdXNlciB0byB3aGF0IGlzIGhhcHBlbmluZ1xuICAgICAgICB2YXIgZmVlZGJhY2tBcmVhID0gJCh0aGlzLm1lc3NhZ2VEaXYpO1xuICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDUwMCk7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpO1xuICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX25vdF9zb2x1dGlvblwiKSk7XG4gICAgICAgIC8vIFN0b3AgYWJpbGl0eSB0byBzZWxlY3RcbiAgICAgICAgaWYgKGJsb2NrLmxpbmVzWzBdLmRpc3RyYWN0SGVscHRleHQpIHtcbiAgICAgICAgICAgIGJsb2NrLnZpZXcuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJ0b29sdGlwXCIpO1xuICAgICAgICAgICAgYmxvY2sudmlldy5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBibG9jay5saW5lc1swXS5kaXN0cmFjdEhlbHB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5kaXNhYmxlKCk7XG4gICAgICAgIC8vIElmIGluIGFuc3dlciBhcmVhLCBtb3ZlIHRvIHNvdXJjZSBhcmVhXG4gICAgICAgIGlmICghYmxvY2suaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VSZWN0ID0gdGhpcy5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0WCA9IGJsb2NrLnBhZ2VYQ2VudGVyKCkgLSAxO1xuICAgICAgICAgICAgdmFyIHN0YXJ0WSA9IGJsb2NrLnBhZ2VZQ2VudGVyKCk7XG4gICAgICAgICAgICB2YXIgZW5kWCA9XG4gICAgICAgICAgICAgICAgc291cmNlUmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgc291cmNlUmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICB2YXIgZW5kWSA9XG4gICAgICAgICAgICAgICAgc291cmNlUmVjdC50b3AgK1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCArXG4gICAgICAgICAgICAgICAgYmxvY2sudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgdmFyIHNsaWRlVW5kZXJCbG9jayA9IGJsb2NrLnNsaWRlVW5kZXJCbG9jaygpO1xuICAgICAgICAgICAgaWYgKHNsaWRlVW5kZXJCbG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZW5kWSArPVxuICAgICAgICAgICAgICAgICAgICBzbGlkZVVuZGVyQmxvY2sudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAyMDtcbiAgICAgICAgICAgICAgICBlbmRZICs9IHBhcnNlSW50KCQoc2xpZGVVbmRlckJsb2NrLnZpZXcpLmNzcyhcInRvcFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLjAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KGVuZFkgLSBzdGFydFksIDIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coZW5kWCAtIHN0YXJ0WCwgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmcgPSBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWCA9IHN0YXJ0WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWSA9IHN0YXJ0WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGEsIHAsIGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWCA9IHN0YXJ0WCAqICgxIC0gcCkgKyBlbmRYICogcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nWSA9IHN0YXJ0WSAqICgxIC0gcCkgKyBlbmRZICogcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQubW92aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQubW92aW5nWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0Lm1vdmluZ1k7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjZDNkM2QzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNlZmVmZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChibG9jay52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChibG9jay52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiNkM2QzZDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2VmZWZlZlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBHaXZlIHRoZSB1c2VyIHRoZSBpbmRlbnRhdGlvblxuICAgIHJlbW92ZUluZGVudGF0aW9uKCkge1xuICAgICAgICAvLyBBbGVydCB0aGUgdXNlciB0byB3aGF0IGlzIGhhcHBlbmluZ1xuICAgICAgICB2YXIgZmVlZGJhY2tBcmVhID0gJCh0aGlzLm1lc3NhZ2VEaXYpO1xuICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDUwMCk7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpO1xuICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX3Byb3ZpZGVkX2luZGVudFwiKSk7XG4gICAgICAgIC8vIE1vdmUgYW5kIHJlc2l6ZSBibG9ja3NcbiAgICAgICAgdmFyIGJsb2NrV2lkdGggPSAyMDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSB0aGlzLmxpbmVzW2ldO1xuICAgICAgICAgICAgdmFyIGV4cGFuZGVkV2lkdGggPVxuICAgICAgICAgICAgICAgIGxpbmUud2lkdGggKyBsaW5lLmluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQgKyAzMDtcbiAgICAgICAgICAgIGJsb2NrV2lkdGggPSBNYXRoLm1heChibG9ja1dpZHRoLCBleHBhbmRlZFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm51bWJlcmVkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYmxvY2tXaWR0aCArPSAyNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFyZWFXaWR0aCA9IGJsb2NrV2lkdGggKyAyMjtcbiAgICAgICAgdmFyIGJsb2NrLCBpbmRlbnQ7XG4gICAgICAgIHZhciBzb3VyY2VCbG9ja3MgPSB0aGlzLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2sgPSBzb3VyY2VCbG9ja3NbaV07XG4gICAgICAgICAgICBpbmRlbnQgPSBibG9jay5zb2x1dGlvbkluZGVudCgpO1xuICAgICAgICAgICAgaWYgKGluZGVudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmxvY2tXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrV2lkdGggLSBpbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50ICsgMTAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFpcmVkRGl2cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzLnBhaXJlZERpdnNbaV0pLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmxvY2tXaWR0aCArIDM0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlckJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2sgPSBhbnN3ZXJCbG9ja3NbaV07XG4gICAgICAgICAgICBpbmRlbnQgPSBibG9jay5zb2x1dGlvbkluZGVudCgpO1xuICAgICAgICAgICAgaWYgKGluZGVudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJsb2NrV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tXaWR0aCAtIGluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQgKyAxMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2l6ZSBhbnN3ZXIgYW5kIHNvdXJjZSBhcmVhXG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5yZW1vdmVDbGFzcyhcImFuc3dlcjEgYW5zd2VyMiBhbnN3ZXIzIGFuc3dlcjRcIik7XG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hZGRDbGFzcyhcImFuc3dlclwiKTtcbiAgICAgICAgdGhpcy5pbmRlbnQgPSAwO1xuICAgICAgICB0aGlzLm5vaW5kZW50ID0gdHJ1ZTtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUFyZWEpLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuYXJlYVdpZHRoICsgMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hbmltYXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmFyZWFXaWR0aCArIDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAvLyBDaGFuZ2UgdGhlIG1vZGVsICh3aXRoIHZpZXcpXG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hbmltYXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEuMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDExMDAsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQmxvY2tzW2ldLmFkZEluZGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJCbG9ja3NbaV0uYWRkSW5kZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IGNoZWNrIGlmIGFueSBzb2x1dGlvbiBibG9ja3MgYXJlIGluIHRoZSBzb3VyY2Ugc3RpbGwgKGxlZnQgc2lkZSkgYW5kIG5vdFxuICAgIC8vIGluIHRoZSBhbnN3ZXJcbiAgICBnZXRTb2x1dGlvbkJsb2NrSW5Tb3VyY2UoKSB7XG4gICAgICAgIHZhciBzb2x1dGlvbkJsb2NrcyA9IHRoaXMuc29sdXRpb25CbG9ja3MoKTtcbiAgICAgICAgdmFyIGFuc3dlckJsb2NrcyA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIHZhciBzb3VyY2VCbG9ja3MgPSB0aGlzLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICB2YXIgc29sQmxvY2sgPSBudWxsO1xuICAgICAgICB2YXIgY3VyckJsb2NrID0gbnVsbDtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggc291cmNlQmxvY2tzIGFuZCByZXR1cm4gYSBibG9jayBpZiBpdCBpcyBub3QgaW4gdGhlIHNvbHV0aW9uXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgYmxvY2sgZnJvbSB0aGUgc291cmNlXG4gICAgICAgICAgICBjdXJyQmxvY2sgPSBzb3VyY2VCbG9ja3NbaV07XG5cbiAgICAgICAgICAgIC8vIGlmIGN1cnJCbG9jayBpcyBpbiB0aGUgc29sdXRpb24gYW5kIGlzbid0IHRoZSBmaXJzdCBibG9jayBhbmQgaXNuJ3QgaW4gdGhlIGFuc3dlclxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNvbHV0aW9uQmxvY2tzLmluZGV4T2YoY3VyckJsb2NrKSA+IDAgJiZcbiAgICAgICAgICAgICAgICBhbnN3ZXJCbG9ja3MuaW5kZXhPZihjdXJyQmxvY2spIDwgMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJCbG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkaWRuJ3QgZmluZCBhbnkgYmxvY2sgaW4gdGhlIHNvdXJjZSB0aGF0IGlzIGluIHRoZSBzb2x1dGlvblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGEgYmxvY2syIHRoYXQgaXMgZnVydGhlc3QgZnJvbSBibG9jazEgaW4gdGhlIGFuc3dlclxuICAgIC8vIGRvbid0IHVzZSB0aGUgdmVyeSBmaXJzdCBibG9jayBpbiB0aGUgc29sdXRpb24gYXMgYmxvY2syXG4gICAgZ2V0RnVydGhlc3RCbG9jaygpIHtcbiAgICAgICAgdmFyIHNvbHV0aW9uQmxvY2tzID0gdGhpcy5zb2x1dGlvbkJsb2NrcygpO1xuICAgICAgICB2YXIgYW5zd2VyQmxvY2tzID0gdGhpcy5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgdmFyIG1heERpc3QgPSAwO1xuICAgICAgICB2YXIgZGlzdCA9IDA7XG4gICAgICAgIHZhciBtYXhCbG9jayA9IG51bGw7XG4gICAgICAgIHZhciBjdXJyQmxvY2sgPSBudWxsO1xuICAgICAgICB2YXIgaW5kZXhTb2wgPSAwO1xuICAgICAgICB2YXIgcHJldkJsb2NrID0gbnVsbDtcbiAgICAgICAgdmFyIGluZGV4UHJldiA9IDA7XG5cbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBibG9ja3MgaW4gdGhlIGFuc3dlclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuc3dlckJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3VyckJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgaW5kZXhTb2wgPSBzb2x1dGlvbkJsb2Nrcy5pbmRleE9mKGN1cnJCbG9jayk7XG4gICAgICAgICAgICBpZiAoaW5kZXhTb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJldkJsb2NrID0gc29sdXRpb25CbG9ja3NbaW5kZXhTb2wgLSAxXTtcbiAgICAgICAgICAgICAgICBpbmRleFByZXYgPSBhbnN3ZXJCbG9ja3MuaW5kZXhPZihwcmV2QmxvY2spO1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJteSBpbmRleCBcIiArIGkgKyBcIiBpbmRleCBwcmV2IFwiICsgaW5kZXhQcmV2KTtcblxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgaW4gdGhlIGFuc3dlclxuICAgICAgICAgICAgICAgIGRpc3QgPSBNYXRoLmFicyhpIC0gaW5kZXhQcmV2KTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdCA+IG1heERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4RGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgIG1heEJsb2NrID0gY3VyckJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4QmxvY2s7XG4gICAgfVxuXG4gICAgLy8gQ29tYmluZSBibG9ja3MgdG9nZXRoZXJcbiAgICBjb21iaW5lQmxvY2tzKCkge1xuICAgICAgICB2YXIgc29sdXRpb25CbG9ja3MgPSB0aGlzLnNvbHV0aW9uQmxvY2tzKCk7XG4gICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICB2YXIgc291cmNlQmxvY2tzID0gdGhpcy5zb3VyY2VCbG9ja3MoKTtcblxuICAgICAgICAvLyBBbGVydCB0aGUgdXNlciB0byB3aGF0IGlzIGhhcHBlbmluZ1xuICAgICAgICB2YXIgZmVlZGJhY2tBcmVhID0gJCh0aGlzLm1lc3NhZ2VEaXYpO1xuICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDUwMCk7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpO1xuICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX2NvbWJpbmVkX2Jsb2Nrc1wiKSk7XG4gICAgICAgIHZhciBibG9jazEgPSBudWxsO1xuICAgICAgICB2YXIgYmxvY2syID0gbnVsbDtcblxuICAgICAgICAvLyBnZXQgYSBzb2x1dGlvbiBibG9jayB0aGF0IGlzIHN0aWxsIGluIHNvdXJjZSAobm90IGFuc3dlciksIGlmIGFueVxuICAgICAgICBibG9jazIgPSB0aGlzLmdldFNvbHV0aW9uQmxvY2tJblNvdXJjZSgpO1xuXG4gICAgICAgIC8vIGlmIG5vbmUgaW4gc291cmNlIGdldCBibG9jayB0aGF0IGlzIGZ1cnRoZXN0IGZyb20gYmxvY2sxXG4gICAgICAgIGlmIChibG9jazIgPT0gbnVsbCkge1xuICAgICAgICAgICAgYmxvY2syID0gdGhpcy5nZXRGdXJ0aGVzdEJsb2NrKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgYmxvY2sxIChhYm92ZSBibG9jazIpIGluIHNvbHV0aW9uXG4gICAgICAgIHZhciBpbmRleCA9IHNvbHV0aW9uQmxvY2tzLmluZGV4T2YoYmxvY2syKTtcbiAgICAgICAgYmxvY2sxID0gc29sdXRpb25CbG9ja3NbaW5kZXggLSAxXTtcblxuICAgICAgICAvLyBnZXQgaW5kZXggb2YgZWFjaCBpbiBhbnN3ZXJcbiAgICAgICAgdmFyIGluZGV4MSA9IGFuc3dlckJsb2Nrcy5pbmRleE9mKGJsb2NrMSk7XG4gICAgICAgIHZhciBpbmRleDIgPSBhbnN3ZXJCbG9ja3MuaW5kZXhPZihibG9jazIpO1xuICAgICAgICB2YXIgbW92ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGlmIGJvdGggaW4gYW5zd2VyIHNldCBtb3ZlIGJhc2VkIG9uIGlmIGRpcmVjdGx5IGFib3ZlIGVhY2ggb3RoZXJcbiAgICAgICAgaWYgKGluZGV4MSA+PSAwICYmIGluZGV4MiA+PSAwKSB7XG4gICAgICAgICAgICBtb3ZlID0gaW5kZXgxICsgMSAhPT0gaW5kZXgyO1xuXG4gICAgICAgICAgICAvLyBlbHNlIGlmIGJvdGggaW4gc291cmNlIHNldCBtb3ZlIGFnYWluIGJhc2VkIG9uIGlmIGFib3ZlIGVhY2ggb3RoZXJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleDEgPCAwICYmIGluZGV4MiA8IDApIHtcbiAgICAgICAgICAgIGluZGV4MSA9IHNvdXJjZUJsb2Nrcy5pbmRleE9mKGJsb2NrMSk7XG4gICAgICAgICAgICBpbmRleDIgPSBzb3VyY2VCbG9ja3MuaW5kZXhPZihibG9jazIpO1xuICAgICAgICAgICAgbW92ZSA9IGluZGV4MSArIDEgIT09IGluZGV4MjtcblxuICAgICAgICAgICAgLy8gb25lIGluIHNvdXJjZSBhbmQgb25lIGluIGFuc3dlciBzbyBtdXN0IG1vdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGluZGV4MSA8IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleDEgPSBzb3VyY2VCbG9ja3MuaW5kZXhPZihibG9jazEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4MiA8IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleDIgPSBzb3VyY2VCbG9ja3MuaW5kZXhPZihibG9jazIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN1YnRyYWN0ID0gaW5kZXgyIDwgaW5kZXgxOyAvLyBpcyBibG9jazIgaGlnaGVyXG5cbiAgICAgICAgaWYgKG1vdmUpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGJsb2NrXG4gICAgICAgICAgICB2YXIgc3RhcnRYID0gYmxvY2syLnBhZ2VYQ2VudGVyKCkgLSAxO1xuICAgICAgICAgICAgdmFyIHN0YXJ0WSA9IGJsb2NrMi5wYWdlWUNlbnRlcigpO1xuICAgICAgICAgICAgdmFyIGVuZFggPSBibG9jazEucGFnZVhDZW50ZXIoKSAtIDE7XG4gICAgICAgICAgICB2YXIgZW5kWSA9XG4gICAgICAgICAgICAgICAgYmxvY2sxLnBhZ2VZQ2VudGVyKCkgK1xuICAgICAgICAgICAgICAgIGJsb2NrMS52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDIgK1xuICAgICAgICAgICAgICAgIDU7XG4gICAgICAgICAgICBpZiAoc3VidHJhY3QpIHtcbiAgICAgICAgICAgICAgICBlbmRZIC09IGJsb2NrMi52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZFkgKz0gYmxvY2syLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICQoYmxvY2syLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCwgLy8gMSBzZWNjb25kXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMS52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazIudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrMi5saW5lc1swXS5pbmRleCArPSAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmcgPSBibG9jazI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1ggPSBzdGFydFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1kgPSBzdGFydFk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChhLCBwLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1ggPSBzdGFydFggKiAoMSAtIHApICsgZW5kWCAqIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1kgPSBzdGFydFkgKiAoMSAtIHApICsgZW5kWSAqIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0Lm1vdmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0Lm1vdmluZ1g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhhdC5tb3ZpbmdZO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jazIubGluZXNbMF0uaW5kZXggLT0gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrMS5jb25zdW1lQmxvY2soYmxvY2syKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sxLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiNkM2QzZDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2VmZWZlZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sxLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoYmxvY2syLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sxLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMi52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sxLmNvbnN1bWVCbG9jayhibG9jazIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazEudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiI2QzZDNkM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZWZlZmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazEudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkYXB0IHRoZSBwcm9ibGVtIHRvIGJlIGVhc2llclxuICAgIC8vICAqIHJlbW92ZSBhIGRpc3RyYWN0b3IgdW50aWwgbm9uZSBhcmUgcHJlc2VudFxuICAgIC8vICAqIGNvbWJpbmUgYmxvY2tzIHVudGlsIDMgYXJlIGxlZnRcbiAgICBtYWtlRWFzaWVyKCkge1xuICAgICAgICB2YXIgZGlzdHJhY3RvclRvUmVtb3ZlID0gdGhpcy5kaXN0cmFjdG9yVG9SZW1vdmUoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGlzdHJhY3RvclRvUmVtb3ZlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICFkaXN0cmFjdG9yVG9SZW1vdmUuaW5Tb3VyY2VBcmVhKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBhbGVydCgkLmkxOG4oXCJtc2dfcGFyc29uX3JlbW92ZV9pbmNvcnJlY3RcIikpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVEaXN0cmFjdG9yKGRpc3RyYWN0b3JUb1JlbW92ZSk7XG4gICAgICAgICAgICB0aGlzLmxvZ01vdmUoXCJyZW1vdmVkRGlzdHJhY3Rvci1cIiArIGRpc3RyYWN0b3JUb1JlbW92ZS5oYXNoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG51bWJlck9mQmxvY2tzID0gdGhpcy5udW1iZXJPZkJsb2NrcyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZCbG9ja3MgPiAzKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJC5pMThuKFwibXNnX3BhcnNvbl93aWxsX2NvbWJpbmVcIikpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYmluZUJsb2NrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nTW92ZShcImNvbWJpbmVkQmxvY2tzXCIpO1xuICAgICAgICAgICAgfSAvKmVsc2UgaWYodGhpcy5udW1iZXJPZkJsb2Nrcyh0cnVlKSA+IDMgJiYgZGlzdHJhY3RvclRvUmVtb3ZlICE9PSAgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJXaWxsIHJlbW92ZSBhbiBpbmNvcnJlY3QgY29kZSBibG9jayBmcm9tIHNvdXJjZSBhcmVhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRGlzdHJhY3RvcihkaXN0cmFjdG9yVG9SZW1vdmUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nTW92ZShcInJlbW92ZWREaXN0cmFjdG9yLVwiICsgZGlzdHJhY3RvclRvUmVtb3ZlLmhhc2goKSk7XG4gICAgICAgICAgICB9ICovIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCQuaTE4bihcIm1zZ19wYXJzb25fdGhyZWVfYmxvY2tzX2xlZnRcIikpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuSGVscCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiAobnVtYmVyT2ZCbG9ja3MgPCA1KSB7XG4gICAgICAgICAgICAvL1x0dGhpcy5jYW5IZWxwID0gZmFsc2U7XG4gICAgICAgICAgICAvL1x0dGhpcy5oZWxwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRoZSBcIkhlbHAgTWVcIiBidXR0b24gd2FzIHByZXNzZWQgYW5kIHRoZSBwcm9ibGVtIHNob3VsZCBiZSBzaW1wbGlmaWVkXG4gICAgaGVscE1lKCkge1xuICAgICAgICB0aGlzLmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgLy90aGlzLmhlbHBDb3VudCA9IC0xOyAvLyBhbW91bnQgdG8gYWxsb3cgZm9yIG11bHRpcGxlIGhlbHBzIGluIGEgcm93XG4gICAgICAgIC8vaWYgKHRoaXMuaGVscENvdW50IDwgMCkge1xuICAgICAgICAvL1x0dGhpcy5oZWxwQ291bnQgPSBNYXRoLm1heCh0aGlzLmhlbHBDb3VudCwgLTEpOyAvLyBtaW4gMSBhdHRlbXB0IGJlZm9yZSBtb3JlIGhlbHBcbiAgICAgICAgLy90aGlzLmhlbHBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAvL31cbiAgICAgICAgLy8gaWYgbGVzcyB0aGFuIDMgYXR0ZW1wdHNcbiAgICAgICAgaWYgKHRoaXMubnVtRGlzdGluY3QgPCAzKSB7XG4gICAgICAgICAgICBhbGVydCgkLmkxOG4oXCJtc2dfcGFyc29uX2F0bGVhc3RfdGhyZWVfYXR0ZW1wdHNcIikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBnaXZlIGhlbHBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdvdEhlbHAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tYWtlRWFzaWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSBVVElMSVRZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8gUmV0dXJuIGEgZGF0ZSBmcm9tIGEgdGltZXN0YW1wIChlaXRoZXIgbXlTUUwgb3IgSlMgZm9ybWF0KVxuICAgIGRhdGVGcm9tVGltZXN0YW1wKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gICAgICAgIGlmIChpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGltZXN0YW1wLnNwbGl0KC9bLSA6XS8pO1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHRbMF0sIHRbMV0gLSAxLCB0WzJdLCB0WzNdLCB0WzRdLCB0WzVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gICAgLy8gQSBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIGEgc2h1ZmZsZWQgdmVyc2lvbiBvZiBhbiBhcnJheVxuICAgIHNodWZmbGVkKGFycmF5KSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IGFycmF5LnNsaWNlKCk7XG4gICAgICAgIHZhciB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHJldHVybkFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICByZXR1cm5BcnJheVtjdXJyZW50SW5kZXhdID0gcmV0dXJuQXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuQXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IEtFWUJPQVJEIElOVEVSQUNUSU9OID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGhhcyBlbnRlcmVkIHRoZSBQYXJzb25zIHByb2JsZW0gdmlhIGtleWJvYXJkIG1vZGVcbiAgICBlbnRlcktleWJvYXJkTW9kZSgpIHtcbiAgICAgICAgJCh0aGlzLmtleWJvYXJkVGlwKS5zaG93KCk7XG4gICAgICAgICQodGhpcy5zb3VyY2VMYWJlbCkuaGlkZSgpO1xuICAgICAgICAkKHRoaXMuYW5zd2VyTGFiZWwpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5jbGVhckZlZWRiYWNrKCk7XG4gICAgfVxuICAgIC8vIFdoZW4gdGhlIHVzZXIgbGVhdmVzIHRoZSBQYXJzb25zIHByb2JsZW0gdmlhIGtleWJvYXJkIG1vZGVcbiAgICBleGl0S2V5Ym9hcmRNb2RlKCkge1xuICAgICAgICAkKHRoaXMua2V5Ym9hcmRUaXApLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUxhYmVsKS5zaG93KCk7XG4gICAgICAgICQodGhpcy5hbnN3ZXJMYWJlbCkuc2hvdygpO1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IFZJRVcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBDbGVhciBhbnkgZmVlZGJhY2sgZnJvbSB0aGUgYW5zd2VyIGFyZWFcbiAgICBjbGVhckZlZWRiYWNrKCkge1xuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkucmVtb3ZlQ2xhc3MoXCJpbmNvcnJlY3QgY29ycmVjdFwiKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5hbnN3ZXJBcmVhLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICQoY2hpbGRyZW5baV0pLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgIFwiY29ycmVjdFBvc2l0aW9uIGluY29ycmVjdFBvc2l0aW9uIGluZGVudExlZnQgaW5kZW50UmlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMubWVzc2FnZURpdikuaGlkZSgpO1xuICAgIH1cbiAgICAvLyBEaXNhYmxlIHRoZSBpbnRlcmZhY2VcbiAgICBhc3luYyBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XG4gICAgICAgIC8vIERpc2FibGUgYmxvY2tzXG4gICAgICAgIGF3YWl0IHRoaXMuY2hlY2tTZXJ2ZXJDb21wbGV0ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXNhYmxpbmcgYmxvY2tzXCIpO1xuICAgICAgICBpZiAodGhpcy5ibG9ja3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgIGJsb2NrLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIaWRlIGJ1dHRvbnNcbiAgICAgICAgJCh0aGlzLmNoZWNrQnV0dG9uKS5oaWRlKCk7XG4gICAgICAgICQodGhpcy5yZXNldEJ1dHRvbikuaGlkZSgpO1xuICAgIH1cbiAgICAvLyBCYXNlZCBvbiB0aGUgbW92aW5nIGVsZW1lbnQsIGV0Yy4sIGVzdGFibGlzaCB0aGUgbW92aW5nIHN0YXRlXG4gICAgLy8gICByZXN0OiBub3QgbW92aW5nXG4gICAgLy8gICBzb3VyY2U6IG1vdmluZyBpbnNpZGUgc291cmNlIGFyZWFcbiAgICAvLyAgIGFuc3dlcjogbW92aW5nIGluc2lkZSBhbnN3ZXIgYXJlYVxuICAgIC8vICAgbW92aW5nOiBtb3Zpbmcgb3V0c2lkZSBhcmVhc1xuICAgIG1vdmluZ1N0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5tb3ZpbmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSB0aGlzLm1vdmluZ1ggLSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIHZhciB5ID0gdGhpcy5tb3ZpbmdZIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAvLyBDaGVjayBpZiBpbiBhbnN3ZXIgYXJlYVxuICAgICAgICB2YXIgYm91bmRzID0gdGhpcy5hbnN3ZXJBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB4ID49IGJvdW5kcy5sZWZ0ICYmXG4gICAgICAgICAgICB4IDw9IGJvdW5kcy5yaWdodCAmJlxuICAgICAgICAgICAgeSA+PSBib3VuZHMudG9wICYmXG4gICAgICAgICAgICB5IDw9IGJvdW5kcy5ib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJhbnN3ZXJcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBpbiBzb3VyY2UgYXJlYVxuICAgICAgICBib3VuZHMgPSB0aGlzLnNvdXJjZUFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHggPj0gYm91bmRzLmxlZnQgJiZcbiAgICAgICAgICAgIHggPD0gYm91bmRzLnJpZ2h0ICYmXG4gICAgICAgICAgICB5ID49IGJvdW5kcy50b3AgJiZcbiAgICAgICAgICAgIHkgPD0gYm91bmRzLmJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBcInNvdXJjZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIm1vdmluZ1wiO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIFBhcnNvbnMgdmlld1xuICAgIC8vIFRoaXMgZ2V0cyBjYWxsZWQgd2hlbiBkcmFnZ2luZyBhIGJsb2NrXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgLy8gQmFzZWQgb24gdGhlIG5ldyBhbmQgdGhlIG9sZCBzdGF0ZSwgZmlndXJlIG91dCB3aGF0IHRvIHVwZGF0ZVxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLm1vdmluZ1N0YXRlKCk7XG4gICAgICAgIHZhciB1cGRhdGVTb3VyY2UgPSB0cnVlO1xuICAgICAgICB2YXIgdXBkYXRlQW5zd2VyID0gdHJ1ZTtcbiAgICAgICAgdmFyIHVwZGF0ZU1vdmluZyA9IG5ld1N0YXRlID09IFwibW92aW5nXCI7XG4gICAgICAgIGlmIChzdGF0ZSA9PSBuZXdTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlID09IFwicmVzdFwiKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlU291cmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdXBkYXRlQW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXRlID09IFwic291cmNlXCIpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT0gXCJhbnN3ZXJcIikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNvdXJjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZSA9PSBcIm1vdmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdXBkYXRlU291cmNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vdmluZ0hlaWdodDtcbiAgICAgICAgaWYgKHRoaXMubW92aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIE11c3QgZ2V0IGhlaWdodCBoZXJlIGFzIGRldGFjaGVkIGl0ZW1zIGRvbid0IGhhdmUgaGVpZ2h0XG4gICAgICAgICAgICBtb3ZpbmdIZWlnaHQgPSAkKHRoaXMubW92aW5nLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5kZXRhY2goKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9zaXRpb25Ub3AsIHdpZHRoO1xuICAgICAgICB2YXIgYmFzZVdpZHRoID0gdGhpcy5hcmVhV2lkdGggLSAyMjtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBTb3VyY2UgQXJlYVxuICAgICAgICBpZiAodXBkYXRlU291cmNlKSB7XG4gICAgICAgICAgICBwb3NpdGlvblRvcCA9IDA7XG4gICAgICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PSBcInNvdXJjZVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0luc2VydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIG1vdmluZ0JpbiA9IHRoaXMubW92aW5nLnBhaXJlZEJpbigpO1xuICAgICAgICAgICAgICAgIHZhciBiaW5Gb3JCbG9jayA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYmluRm9yQmxvY2sucHVzaChibG9ja3NbaV0ucGFpcmVkQmluKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWJpbkZvckJsb2NrLmluY2x1ZGVzKG1vdmluZ0JpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQmluID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpbnNlcnRQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoYmluRm9yQmxvY2subGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmluZ0JpbiA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmluRm9yQmxvY2tbMF0gPT0gbW92aW5nQmluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmluRm9yQmxvY2tbaSAtIDFdID09IG1vdmluZ0Jpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiaW5Gb3JCbG9ja1tpXSA9PSBtb3ZpbmdCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aW5nQmluID09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluRm9yQmxvY2tbaSAtIDFdICE9IGJpbkZvckJsb2NrW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobW92aW5nQmluID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaChiaW5Gb3JCbG9jay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmluRm9yQmxvY2tbYmluRm9yQmxvY2subGVuZ3RoIC0gMV0gPT0gbW92aW5nQmluXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goYmluRm9yQmxvY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgeCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nWCAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgYmFzZVdpZHRoIC8gMiAtXG4gICAgICAgICAgICAgICAgICAgIDExO1xuICAgICAgICAgICAgICAgIHZhciB5ID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdZIC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgajtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNJbnNlcnRlZCAmJiBpbnNlcnRQb3NpdGlvbnMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0SGVpZ2h0ID0gJChpdGVtLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBibG9ja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0UG9zaXRpb25zLmluY2x1ZGVzKGopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0SGVpZ2h0ICs9ICQoYmxvY2tzW2pdLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgLSBwb3NpdGlvblRvcCA8IG1vdmluZ0hlaWdodCArIHRlc3RIZWlnaHQgLyAyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PSBpbnNlcnRQb3NpdGlvbnNbaW5zZXJ0UG9zaXRpb25zLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNJbnNlcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogeSAtIG1vdmluZ0hlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gcG9zaXRpb25Ub3AgKyBtb3ZpbmdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJChpdGVtLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvblRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gcG9zaXRpb25Ub3AgKyAkKGl0ZW0udmlldykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaGFzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5hcHBlbmRUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI1wiICsgdGhpcy5jb3VudGVySWQgKyBcIi1zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB5IC0gJCh0aGlzLm1vdmluZy52aWV3KS5vdXRlckhlaWdodCh0cnVlKSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvblRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gcG9zaXRpb25Ub3AgKyAkKGl0ZW0udmlldykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBQYWlyZWQgRGlzdHJhY3RvciBJbmRpY2F0b3JzXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wYWlyZWRCaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJpbiA9IHRoaXMucGFpcmVkQmluc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hpbmcgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgYmxvY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYmxvY2tzW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2subWF0Y2hlc0JpbihiaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gdGhpcy5wYWlyZWREaXZzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKGRpdikuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoZGl2KS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSAtNTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJChtYXRjaGluZ1ttYXRjaGluZy5sZW5ndGggLSAxXS52aWV3KS5jc3MoXCJ0b3BcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC09IHBhcnNlSW50KCQobWF0Y2hpbmdbMF0udmlldykuY3NzKFwidG9wXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICs9ICQobWF0Y2hpbmdbbWF0Y2hpbmcubGVuZ3RoIC0gMV0udmlldykub3V0ZXJIZWlnaHQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQoZGl2KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTYsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICQobWF0Y2hpbmdbMF0udmlldykuY3NzKFwidG9wXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCArIDM0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1pbmRlbnRcIjogLTMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiAoaGVpZ2h0IC0gNzApIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcInZpc2libGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDQzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzdlN2VlN1wiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJChkaXYpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGlkPSAnc3QnIHN0eWxlID0gJ3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE1cHgnPm9yPC9zcGFuPntcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmcubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJChkaXYpLmh0bWwoXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgQW5zd2VyIEFyZWFcbiAgICAgICAgaWYgKHVwZGF0ZUFuc3dlcikge1xuICAgICAgICAgICAgdmFyIGJsb2NrLCBpbmRlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvblRvcCA9IDA7XG4gICAgICAgICAgICB3aWR0aCA9XG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhV2lkdGggK1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCAtXG4gICAgICAgICAgICAgICAgMjI7XG4gICAgICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PSBcImFuc3dlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0luc2VydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIHggPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1ggLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgIGJhc2VXaWR0aCAvIDIgLVxuICAgICAgICAgICAgICAgICAgICAxMTtcbiAgICAgICAgICAgICAgICB2YXIgbW92aW5nSW5kZW50ID0gTWF0aC5yb3VuZCh4IC8gdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdmluZ0luZGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nSW5kZW50ID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vdmluZ0luZGVudCA+IHRoaXMuaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0luZGVudCA9IHRoaXMuaW5kZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBtb3ZpbmdJbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgeSA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nWSAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcuaW5kZW50ID0gbW92aW5nSW5kZW50O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5IC0gcG9zaXRpb25Ub3AgPFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtb3ZpbmdIZWlnaHQgKyAkKGJsb2NrLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpKSAvIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0luc2VydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay52aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogeSAtIG1vdmluZ0hlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gcG9zaXRpb25Ub3AgKyBtb3ZpbmdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ID0gYmxvY2suaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogaW5kZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvblRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAtIGluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSBwb3NpdGlvblRvcCArICQoYmxvY2sudmlldykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaGFzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5hcHBlbmRUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI1wiICsgdGhpcy5jb3VudGVySWQgKyBcIi1hbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB5IC0gJCh0aGlzLm1vdmluZy52aWV3KS5vdXRlckhlaWdodCh0cnVlKSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGluZGVudCA9IGJsb2NrLmluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb25Ub3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggLSBpbmRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gcG9zaXRpb25Ub3AgKyAkKGJsb2NrLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgdGhlIE1vdmluZyBBcmVhXG4gICAgICAgIGlmICh1cGRhdGVNb3ZpbmcpIHtcbiAgICAgICAgICAgIC8vIEFkZCBpdCB0byB0aGUgbG93ZXN0IHBsYWNlIGluIHRoZSBzb3VyY2UgYXJlYVxuICAgICAgICAgICAgbW92aW5nQmluID0gdGhpcy5tb3ZpbmcucGFpcmVkQmluKCk7XG4gICAgICAgICAgICBpZiAobW92aW5nQmluID09IC0xKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5hcHBlbmRUbyhcIiNcIiArIHRoaXMuY291bnRlcklkICsgXCItc291cmNlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgYmVmb3JlO1xuICAgICAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMuc291cmNlQmxvY2tzO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jay5wYWlyZWRCaW4oKSA9PSBtb3ZpbmdCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChiZWZvcmUgPT0gdW5kZWZpbmVkIHx8IGJlZm9yZSA9PSBibG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuYXBwZW5kVG8oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNcIiArIHRoaXMuY291bnRlcklkICsgXCItc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1tiZWZvcmVdLnZpZXdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQbGFjZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBtb3VzZSBjdXJzb3JcbiAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1ggLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3Zpbmcudmlldykub3V0ZXJXaWR0aCh0cnVlKSAvIDIsXG4gICAgICAgICAgICAgICAgdG9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1kgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgbW92aW5nSGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoLFxuICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cbiAgICBhZGRCbG9ja0xhYmVscyhibG9ja3MpIHtcbiAgICAgICAgdmFyIGJpbiA9IC0xO1xuICAgICAgICB2YXIgYmluQ291bnQgPSAwO1xuICAgICAgICB2YXIgYmluQ2hpbGRyZW4gPSAwO1xuICAgICAgICB2YXIgYmxvY2tzTm90SW5CaW5zID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChibG9ja3NbaV0ucGFpcmVkQmluKCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBibG9ja3NOb3RJbkJpbnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRCaW4gPSBibG9ja3NbaV0ucGFpcmVkQmluKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudEJpbiA9PSAtMSB8fCBjdXJyZW50QmluICE9IGJpbikge1xuICAgICAgICAgICAgICAgIGJpbiA9IGN1cnJlbnRCaW47XG4gICAgICAgICAgICAgICAgYmluQ2hpbGRyZW4gPSAwO1xuICAgICAgICAgICAgICAgIGJpbkNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGFiZWwgPVxuICAgICAgICAgICAgICAgIFwiXCIgK1xuICAgICAgICAgICAgICAgIGJpbkNvdW50ICtcbiAgICAgICAgICAgICAgICAoY3VycmVudEJpbiAhPSAtMVxuICAgICAgICAgICAgICAgICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBiaW5DaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgOiBcIiBcIik7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYmluQ291bnQgPCAxMCAmJlxuICAgICAgICAgICAgICAgIGJsb2Nrc05vdEluQmlucyArIHRoaXMucGFpcmVkQmlucy5sZW5ndGggPj0gMTBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGxhYmVsICs9IFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2tzW2ldLmFkZExhYmVsKGxhYmVsLCAwKTtcbiAgICAgICAgICAgIGJpbkNoaWxkcmVuKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2Nrc05vdEluQmlucyArIHRoaXMucGFpcmVkQmlucy5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIHRoaXMuYXJlYVdpZHRoICs9IDU7XG4gICAgICAgICAgICAkKHRoaXMuc291cmNlQXJlYSkuY3NzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzLnNvdXJjZUFyZWEpLndpZHRoKCkgKyA1LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuY3NzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzLmFuc3dlckFyZWEpLndpZHRoKCkgKyA1LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUHV0IGFsbCB0aGUgYmxvY2tzIGJhY2sgaW50byB0aGUgc291cmNlIGFyZWEsIHJlc2h1ZmZsaW5nIGFzIG5lY2Vzc2FyeVxuICAgIHJlc2V0VmlldygpIHtcbiAgICAgICAgLy8gQ2xlYXIgZXZlcnl0aGluZ1xuICAgICAgICB0aGlzLmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgYmxvY2s7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJsb2NrLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gJChibG9jay5saW5lc1tqXS52aWV3KS5maW5kKFwiLmJsb2NrLWxhYmVsXCIpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgY2hpbGRyZW4ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY10ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suZGVzdHJveSgpO1xuICAgICAgICAgICAgJCh0aGlzLmJsb2Nrc1tpXS52aWV3KS5kZXRhY2goKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5ibG9ja3M7XG4gICAgICAgIHRoaXMuYmxvY2tJbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWlyZWREaXZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkKHRoaXMucGFpcmVkRGl2c1tpXSkuZGV0YWNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLnNvdXJjZUFyZWEpLmF0dHIoXCJzdHlsZVwiLCBcIlwiKTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLnJlbW92ZUNsYXNzKCk7XG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hdHRyKFwic3R5bGVcIiwgXCJcIik7XG4gICAgICAgIHRoaXMubm9pbmRlbnQgPSB0aGlzLm9wdGlvbnMubm9pbmRlbnQ7XG4gICAgICAgIC8vIFJlaW5pdGlhbGl6ZVxuICAgICAgICBpZiAodGhpcy5oYXNTb2x2ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLm51bURpc3RpbmN0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuaGFzU29sdmVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFkYXB0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5IZWxwID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5oZWxwQ291bnQgPSAtMzsgLy8gZW5hYmxlIGFmdGVyIDMgZmFpbGVkIGF0dGVtcHRzXG4gICAgICAgICAgICAvL3RoaXMuaGVscEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmFkYXB0aXZlSWQgKyBcIlByb2JsZW1cIiwgdGhpcy5kaXZpZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyB0aGlzLmRpdmlkICsgXCJDb3VudFwiLFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuYWRhcHRpdmVJZCArIFwiU29sdmVkXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemVBcmVhcyh0aGlzLmJsb2Nrc0Zyb21Tb3VyY2UoKSwgW10sIHt9KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplSW50ZXJhY3Rpdml0eSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICB9XG59XG5cblBhcnNvbnMuY291bnRlciA9IDA7XG5cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXBhcnNvbnNdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwcnNMaXN0W3RoaXMuaWRdID0gbmV3IFBhcnNvbnMoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIFBhcnNvbnMgUHJvYmxlbSAke3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IFBhcnNvbnNCbG9jayBPYmplY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFRoZSBtb2RlbCBhbmQgdmlldyBvZiBhIGNvZGUgYmxvY2suXG49PT09IFBST1BFUlRJRVMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IHByb2JsZW06IHRoZSBQYXJzb25zIHByb2JsZW1cbj09PT09PT09IGxpbmVzOiBhbiBhcnJheSBvZiBQYXJzb25zTGluZSBpbiB0aGlzIGJsb2NrXG49PT09PT09PSBpbmRlbnQ6IGluZGVudCBiYXNlZCBvbiBtb3ZlbWVudFxuPT09PT09PT0gdmlldzogYW4gZWxlbWVudCBmb3Igdmlld2luZyB0aGlzIG9iamVjdFxuPT09PT09PT0gbGFiZWxzOiBbbGFiZWwsIGxpbmVdIHRoZSBsYWJlbHMgbnVtYmVyaW5nIHRoZSBibG9jayBhbmQgdGhlIGxpbmVzIHRoZXkgZ28gb25cbj09PT09PT09IGhhbW1lcjogdGhlIGNvbnRyb2xsZXIgYmFzZWQgb24gaGFtbWVyLmpzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuaW1wb3J0IEhhbW1lciBmcm9tIFwiLi9oYW1tZXIubWluLmpzXCI7XG5cbi8vIEluaXRpYWxpemUgYmFzZWQgb24gdGhlIHByb2JsZW0gYW5kIHRoZSBsaW5lc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc29uc0Jsb2NrIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9ibGVtLCBsaW5lcykge1xuICAgICAgICB0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gICAgICAgIHRoaXMuaW5kZW50ID0gMDtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBbXTtcbiAgICAgICAgLy8gQ3JlYXRlIHZpZXcsIGFkZGluZyB2aWV3IG9mIGxpbmVzIGFuZCB1cGRhdGluZyBpbmRlbnRcbiAgICAgICAgdmFyIHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2aWV3LmlkID0gcHJvYmxlbS5jb3VudGVySWQgKyBcIi1ibG9jay1cIiArIHByb2JsZW0uYmxvY2tJbmRleDtcbiAgICAgICAgcHJvYmxlbS5ibG9ja0luZGV4ICs9IDE7XG4gICAgICAgICQodmlldykuYWRkQ2xhc3MoXCJibG9ja1wiKTtcbiAgICAgICAgdmFyIHNoYXJlZEluZGVudCA9IGxpbmVzWzBdLmluZGVudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hhcmVkSW5kZW50ID0gTWF0aC5taW4oc2hhcmVkSW5kZW50LCBsaW5lc1tpXS5pbmRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJChsaW5lRGl2KS5hZGRDbGFzcyhcImxpbmVzXCIpO1xuICAgICAgICAkKHZpZXcpLmFwcGVuZChsaW5lRGl2KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIHZhciBsaW5lSW5kZW50O1xuICAgICAgICAgICAgaWYgKHByb2JsZW0ubm9pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICBsaW5lSW5kZW50ID0gbGluZS5pbmRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmVJbmRlbnQgPSBsaW5lLmluZGVudCAtIHNoYXJlZEluZGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQobGluZS52aWV3KS5yZW1vdmVDbGFzcyhcImluZGVudDEgaW5kZW50MiBpbmRlbnQzIGluZGVudDRcIik7XG4gICAgICAgICAgICBpZiAobGluZUluZGVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKGxpbmUudmlldykuYWRkQ2xhc3MoXCJpbmRlbnRcIiArIGxpbmVJbmRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZURpdi5hcHBlbmRDaGlsZChsaW5lLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQobGFiZWxEaXYpLmFkZENsYXNzKFwibGFiZWxzXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLm9wdGlvbnMubnVtYmVyZWQgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICQobGluZURpdikuYWRkQ2xhc3MoXCJib3JkZXJfbGVmdFwiKTtcbiAgICAgICAgICAgICQodmlldykucHJlcGVuZChsYWJlbERpdik7XG4gICAgICAgICAgICAkKHZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb2JsZW0ub3B0aW9ucy5udW1iZXJlZCA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICQobGFiZWxEaXYpLmFkZENsYXNzKFwiYm9yZGVyX2xlZnRcIik7XG4gICAgICAgICAgICAkKGxhYmVsRGl2KS5jc3Moe1xuICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCh2aWV3KS5hcHBlbmQobGFiZWxEaXYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuICAgIC8vIEFkZCBhIGxpbmUgKGZyb20gYW5vdGhlciBibG9jaykgdG8gdGhpcyBibG9ja1xuICAgIGFkZExpbmUobGluZSkge1xuICAgICAgICAkKGxpbmUudmlldykucmVtb3ZlQ2xhc3MoXCJpbmRlbnQxIGluZGVudDIgaW5kZW50MyBpbmRlbnQ0XCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLm5vaW5kZW50KSB7XG4gICAgICAgICAgICBpZiAobGluZS5pbmRlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgJChsaW5lLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50XCIgKyBsaW5lLmluZGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzO1xuICAgICAgICAgICAgdmFyIHNoYXJlZEluZGVudCA9IGxpbmVzWzBdLmluZGVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRJbmRlbnQgPSBNYXRoLm1pbihzaGFyZWRJbmRlbnQsIGxpbmVzW2ldLmluZGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hhcmVkSW5kZW50IDwgbGluZS5pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICAkKGxpbmUudmlldykuYWRkQ2xhc3MoXCJpbmRlbnRcIiArIChsaW5lLmluZGVudCAtIHNoYXJlZEluZGVudCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFyZWRJbmRlbnQgPiBsaW5lLmluZGVudCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgJChsaW5lc1tpXS52aWV3KS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5kZW50MSBpbmRlbnQyIGluZGVudDMgaW5kZW50NFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQobGluZXNbaV0udmlldykuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluZGVudFwiICsgKGxpbmVzW2ldLmluZGVudCAtIGxpbmUuaW5kZW50KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICQodGhpcy52aWV3KS5jaGlsZHJlbihcIi5saW5lc1wiKVswXS5hcHBlbmRDaGlsZChsaW5lLnZpZXcpO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGNvbnRlbnRzIG9mIHRoYXQgYmxvY2sgdG8gbXlzZWxmIGFuZCB0aGVuIGRlbGV0ZSB0aGF0IGJsb2NrXG4gICAgY29uc3VtZUJsb2NrKGJsb2NrKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2subGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZShibG9jay5saW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQoYmxvY2sudmlldykuYXR0cihcInRhYmluZGV4XCIpID09IFwiMFwiKSB7XG4gICAgICAgICAgICB0aGlzLm1ha2VUYWJJbmRleCgpO1xuICAgICAgICB9XG4gICAgICAgICQoYmxvY2sudmlldykuZGV0YWNoKCk7XG4gICAgICAgIHZhciBuZXdCbG9ja3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2JsZW0uYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLmJsb2Nrc1tpXSAhPT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICBuZXdCbG9ja3MucHVzaCh0aGlzLnByb2JsZW0uYmxvY2tzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrLmxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGRMYWJlbChcbiAgICAgICAgICAgICAgICBibG9jay5sYWJlbHNbaV1bMF0sXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lcy5sZW5ndGggLSBibG9jay5saW5lcy5sZW5ndGggKyBibG9jay5sYWJlbHNbaV1bMV1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ibGVtLmJsb2NrcyA9IG5ld0Jsb2NrcztcbiAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIG1vZGVsIGFuZCB2aWV3IHdoZW4gYmxvY2sgaXMgY29udmVydGVkIHRvIGNvbnRhaW4gaW5kZW50XG4gICAgYWRkSW5kZW50KCkge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGxpbmVzIG1vZGVsIC8gdmlld1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGlmIChsaW5lLmluZGVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKGxpbmUudmlldykucmVtb3ZlQ2xhc3MoXCJpbmRlbnQxIGluZGVudDIgaW5kZW50MyBpbmRlbnQ0XCIpO1xuICAgICAgICAgICAgICAgICQobGluZS52aWV3KS5hZGRDbGFzcyhcImluZGVudFwiICsgbGluZS5pbmRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYmxvY2sgbW9kZWwgLyB2aWV3XG4gICAgICAgIHRoaXMuaW5kZW50ID0gMDtcbiAgICAgICAgJCh0aGlzLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICBcInBhZGRpbmctbGVmdFwiOiBcIlwiLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvYmxlbS5hcmVhV2lkdGggLSAyMixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFkZCBhIGxhYmVsIHRvIGJsb2NrIGFuZCB1cGRhdGUgaXRzIHZpZXdcbiAgICBhZGRMYWJlbChsYWJlbCwgbGluZSkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJChkaXYpLmFkZENsYXNzKFwiYmxvY2stbGFiZWxcIik7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0ub3B0aW9ucy5udW1iZXJlZCA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICQoZGl2KS5hZGRDbGFzcyhcInJpZ2h0LWxhYmVsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0ub3B0aW9ucy5udW1iZXJlZCA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgJChkaXYpLmFkZENsYXNzKFwibGVmdC1sYWJlbFwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKGRpdikuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhYmVsKSk7XG4gICAgICAgICQodGhpcy52aWV3KS5jaGlsZHJlbihcIi5sYWJlbHNcIilbMF0uYXBwZW5kKGRpdik7XG4gICAgICAgIGlmICh0aGlzLmxhYmVscy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgJChkaXYpLmNzcyhcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIixcbiAgICAgICAgICAgICAgICAobGluZSAtIHRoaXMubGFiZWxzW3RoaXMubGFiZWxzLmxlbmd0aCAtIDFdWzFdIC0gMSkgKlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVzW2xpbmVdLnZpZXcub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiZWxzLnB1c2goW2xhYmVsLCBsaW5lXSk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgSW50ZXJhY3Rpdml0eVxuICAgIGluaXRpYWxpemVJbnRlcmFjdGl2aXR5KCkge1xuICAgICAgICBpZiAoJCh0aGlzLnZpZXcpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICAgICAgdGhpcy5oYW1tZXIgPSBuZXcgSGFtbWVyLk1hbmFnZXIodGhpcy52aWV3LCB7XG4gICAgICAgICAgICByZWNvZ25pemVyczogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgSGFtbWVyLlBhbixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJzOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmhhbW1lci5vbihcInBhbnN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhhdC5wYW5TdGFydChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbW1lci5vbihcInBhbmVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoYXQucGFuRW5kKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFtbWVyLm9uKFwicGFubW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoYXQucGFuTW92ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYSBib29sZWFuIGFzIHRvIHdoZXRoZXIgdGhpcyBibG9jayBpcyBhYmxlIHRvIGJlIHNlbGVjdGVkXG4gICAgZW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIikgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgYm9vbGVhbiBhcyB0byB3aGV0aGVyIHRoaXMgYmxvY2sgaXMgYSBkaXN0cmFjdG9yXG4gICAgaXNEaXN0cmFjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lc1swXS5kaXN0cmFjdG9yO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYSBib29sZWFuIGFzIHRvIHdoZXRoZXIgdGhpcyBibG9jayBpcyBpbiB0aGUgc291cmNlIGFyZWFcbiAgICBpblNvdXJjZUFyZWEoKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvYmxlbS5zb3VyY2VBcmVhLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSB0aGlzLnZpZXcuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgcGFnZSBYIHBvc2l0aW9uIG9mIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdcbiAgICBwYWdlWENlbnRlcigpIHtcbiAgICAgICAgdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHBhZ2VYQ2VudGVyID1cbiAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCArIGJvdW5kaW5nUmVjdC5sZWZ0ICsgYm91bmRpbmdSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgcmV0dXJuIHBhZ2VYQ2VudGVyO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHBhZ2UgWSBwb3NpdGlvbiBvZiB0aGUgY2VudGVyIG9mIHRoZSB2aWV3XG4gICAgcGFnZVlDZW50ZXIoKSB7XG4gICAgICAgIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBwYWdlWUNlbnRlciA9XG4gICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgKyBib3VuZGluZ1JlY3QudG9wICsgYm91bmRpbmdSZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIHJldHVybiBwYWdlWUNlbnRlcjtcbiAgICB9XG4gICAgLy8gT2YgYWxsIHRoZSBsaW5lIGluZGVudHMsIHJldHVybiB0aGUgbWluaW11bSB2YWx1ZVxuICAgIG1pbmltdW1MaW5lSW5kZW50KCkge1xuICAgICAgICB2YXIgbWluaW11bUxpbmVJbmRlbnQgPSB0aGlzLmxpbmVzWzBdLmluZGVudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtaW5pbXVtTGluZUluZGVudCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIHRoaXMubGluZXNbaV0uaW5kZW50LFxuICAgICAgICAgICAgICAgIG1pbmltdW1MaW5lSW5kZW50XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW5pbXVtTGluZUluZGVudDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBsYXN0IGJsb2NrIGluIHRoZSBzb3VyY2UgYXJlYSB0aGF0IG1hdGNoZXMgdGhlIHBhaXJlZCBiaW4gaXQgaXMgaW5cbiAgICBzbGlkZVVuZGVyQmxvY2soKSB7XG4gICAgICAgIHZhciBzb3VyY2VCbG9ja3MgPSB0aGlzLnByb2JsZW0uc291cmNlQmxvY2tzKCk7XG4gICAgICAgIGlmIChzb3VyY2VCbG9ja3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhaXJlZEJpbiA9IHRoaXMucGFpcmVkQmluKCk7XG4gICAgICAgIGlmIChwYWlyZWRCaW4gPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VCbG9ja3Nbc291cmNlQmxvY2tzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBzb3VyY2VCbG9ja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHNvdXJjZUJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5wYWlyZWRCaW4oKSA9PSBwYWlyZWRCaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZUJsb2Nrc1tzb3VyY2VCbG9ja3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIC8vIFJldHVybiB3aGljaCBwYWlyZWQgYmluIGl0IGlzIGluICgtMSkgaWYgbm90XG4gICAgcGFpcmVkQmluKCkge1xuICAgICAgICB2YXIgcGFpcmVkQmlucyA9IHRoaXMucHJvYmxlbS5wYWlyZWRCaW5zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJlZEJpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoZXNCaW4ocGFpcmVkQmluc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIC8vIFJldHVybiB0cnVlIGlmIGFsbCBsaW5lcyBhcmUgaW4gdGhhdCBiaW5cbiAgICBtYXRjaGVzQmluKGJpbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ZXN0ID0gdGhpcy5saW5lc1tpXS5pbmRleDtcbiAgICAgICAgICAgIGlmIChiaW4uaW5kZXhPZih0ZXN0KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgbGlzdCBvZiBpbmRleGVzIHdoZXJlIHRoaXMgYmxvY2sgY291bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlXG4gICAgdmFsaWRTb3VyY2VJbmRleGVzKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5wcm9ibGVtLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICB2YXIgaW5kZXhlcyA9IFtdO1xuICAgICAgICB2YXIgcGFpcmVkQmluID0gdGhpcy5wYWlyZWRCaW4oKTtcbiAgICAgICAgdmFyIGksIGxhc3RCaW47XG4gICAgICAgIGlmIChwYWlyZWRCaW4gPj0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2sudmlldy5pZCAhPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBibG9ja0JpbiA9IGJsb2NrLnBhaXJlZEJpbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tCaW4gPT0gcGFpcmVkQmluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEJpbiA9PSBwYWlyZWRCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0QmluID0gYmxvY2tCaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3RCaW4gPT0gcGFpcmVkQmluKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJsb2Nrcy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay52aWV3LmlkICE9PSB0aGlzLnZpZXcuaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tCaW4gPSBibG9jay5wYWlyZWRCaW4oKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tCaW4gIT09IGxhc3RCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2tCaW4gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0QmluID0gYmxvY2tCaW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXhlcy5wdXNoKGJsb2Nrcy5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICB9XG4gICAgLy8gQSBtZWFzdXJlIG9mIGhvdyBmYXIgdGhlIG1pZGRsZSBvZiB0aGlzIGJsb2NrIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZFxuICAgIHZlcnRpY2FsT2Zmc2V0KCkge1xuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIGlmICh0aGlzLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IHRoaXMucHJvYmxlbS5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAgICAgLnRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgICAgICAudG9wO1xuICAgICAgICB9XG4gICAgICAgIHZlcnRpY2FsT2Zmc2V0ID1cbiAgICAgICAgICAgIHRoaXMudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgICAgICAgdGhpcy52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCAqIDI7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNhbE9mZnNldDtcbiAgICB9XG4gICAgLy8gVGhpcyBibG9jayBqdXN0IGdhaW5lZCB0ZXh0dWFsIGZvY3VzXG4gICAgbmV3Rm9jdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dEZvY3VzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmVudGVyS2V5Ym9hcmRNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmFkZENsYXNzKFwiZG93blwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb2JsZW0udGV4dEZvY3VzID09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dE1vdmUpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuYWRkQ2xhc3MoXCJ1cFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmFkZENsYXNzKFwiZG93blwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFscmVhZHkgaW4ga2V5Ym9hcmQgbW9kZVxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRGb2N1cyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5hZGRDbGFzcyhcImRvd25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVGhpcyBibG9jayBqdXN0IGxvc3QgdGV4dHVhbCBmb2N1c1xuICAgIHJlbGVhc2VGb2N1cygpIHtcbiAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUNsYXNzKFwiZG93biB1cFwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2JsZW0udGV4dE1vdmluZykge1xuICAgICAgICAgICAgICAgIC8vIGV4aXQgb3V0IG9mIHByb2JsZW0gYnV0IHN0YXkgd2F5IGludG8gcHJvYmxlbVxuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcImttb3ZlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmV4aXRLZXlib2FyZE1vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJlY29tZSBzZWxlY3RhYmxlLCBidXQgbm90IGFjdGl2ZVxuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnVuYmluZChcImZvY3VzXCIpO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnVuYmluZChcImJsdXJcIik7XG4gICAgICAgICAgICAkKHRoaXMudmlldykudW5iaW5kKFwia2V5ZG93blwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNYWtlIHRoaXMgYmxvY2sgaW50byB0aGUga2V5Ym9hcmQgZW50cnkgcG9pbnRcbiAgICBtYWtlVGFiSW5kZXgoKSB7XG4gICAgICAgICQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICQodGhpcy52aWV3KS5mb2N1cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm5ld0ZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMudmlldykuYmx1cihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LnJlbGVhc2VGb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLnZpZXcpLmtleWRvd24oZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGF0LmtleURvd24oZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIHRvIGRpc2FibGUgaW50ZXJhY3Rpb24gZm9yIHRoZSBmdXR1cmVcbiAgICBkaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5oYW1tZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW1tZXIuc2V0KHsgZW5hYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJCh0aGlzLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiKSA9PSBcIjBcIikge1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIik7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0uaW5pdGlhbGl6ZVRhYkluZGV4KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMudmlldykucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEVuYWJsZSBmdW5jdGlvbmFsaXR5IGFmdGVyIHJlc2V0IGJ1dHRvbiBoYXMgYmVlbiBwcmVzc2VkXG4gICAgcmVzZXRWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5oYW1tZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW1tZXIuc2V0KHsgZW5hYmxlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghJCh0aGlzLnZpZXcpWzBdLmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpKSB7XG4gICAgICAgICAgICAkKHRoaXMudmlldykuYXR0cihcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLnZpZXcpLmNzcyh7IG9wYWNpdHk6IFwiXCIgfSk7XG4gICAgfVxuICAgIC8vIENhbGxlZCB0byBkZXN0cm95IGludGVyYWN0aW9uIGZvciB0aGUgZnV0dXJlXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFtbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFtbWVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmhhbW1lcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJCh0aGlzLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiKSA9PSBcIjBcIikge1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMudmlldykucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpO1xuICAgIH1cbiAgICAvLyBDYWxsZWQgd2hlbiBhIGJsb2NrIGlzIHBpY2tlZCB1cFxuICAgIHBhblN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvYmxlbS5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0uc3RhcnRlZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGxvZyB0aGUgZmlyc3QgdGltZSB0aGF0IHNvbWV0aGluZyBnZXRzIG1vdmVkXG4gICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcInN0YXJ0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dEZvY3VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIHN0b3AgdGV4dCBmb2N1cyB3aGVuIGRyYWdnaW5nXG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzLnJlbGVhc2VGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvYmxlbS5tb3ZpbmcgPSB0aGlzO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHZpZXdcbiAgICAgICAgdGhpcy5wcm9ibGVtLm1vdmluZ1ggPSBldmVudC5zcmNFdmVudC5wYWdlWDtcbiAgICAgICAgdGhpcy5wcm9ibGVtLm1vdmluZ1kgPSBldmVudC5zcmNFdmVudC5wYWdlWTtcbiAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIHdoZW4gYSBibG9jayBpcyBkcm9wcGVkXG4gICAgcGFuRW5kKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvYmxlbS5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvYmxlbS5tb3Zpbmc7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2JsZW0ubW92aW5nWDtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvYmxlbS5tb3ZpbmdZO1xuICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcIm1vdmVcIik7XG4gICAgfVxuICAgIC8vIENhbGxlZCB3aGVuIGEgYmxvY2sgaXMgbW92ZWRcbiAgICBwYW5Nb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmlld1xuICAgICAgICB0aGlzLnByb2JsZW0ubW92aW5nWCA9IGV2ZW50LnNyY0V2ZW50LnBhZ2VYO1xuICAgICAgICB0aGlzLnByb2JsZW0ubW92aW5nWSA9IGV2ZW50LnNyY0V2ZW50LnBhZ2VZO1xuICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgYSBrZXlwcmVzcyBldmVudCB3aGVuIGluIGZvY3VzXG4gICAga2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnN0YXJ0ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBsb2cgdGhlIGZpcnN0IHRpbWUgdGhhdCBzb21ldGhpbmcgZ2V0cyBtb3ZlZFxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmxvZ01vdmUoXCJrc3RhcnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RMZWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVVwKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTogLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RSaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDogLy8gZG93blxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RG93bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzMjogLy8gc3BhY2VcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vdmUoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMzogLy8gZW50ZXJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vdmUoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgYmxvY2sgbGVmdFxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB2YXIgaW5kZXgsIGJsb2NrO1xuICAgICAgICBpZiAoIXRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGVudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSB0byBzb3VyY2UgYXJlYVxuICAgICAgICAgICAgICAgIHZhciBibG9ja3MgPSB0aGlzLnByb2JsZW0uc291cmNlQmxvY2tzKCk7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudmVydGljYWxPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRTb3VyY2VJbmRleGVzID0gdGhpcy52YWxpZFNvdXJjZUluZGV4ZXMoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbGlkU291cmNlSW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbGlkU291cmNlSW5kZXhlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zb3VyY2VBcmVhLmFwcGVuZENoaWxkKHRoaXMudmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYmxvY2tzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9jay52ZXJ0aWNhbE9mZnNldCgpID49IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5pbnNlcnRCZWZvcmUodGhpcy52aWV3LCBibG9jay52aWV3KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmVkdWNlIGluZGVudFxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZW50ID0gdGhpcy5pbmRlbnQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIGJsb2NrIHVwXG4gICAgbW92ZVVwKCkge1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucHJvYmxlbS5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgdmFsaWRTb3VyY2VJbmRleGVzID0gdGhpcy52YWxpZFNvdXJjZUluZGV4ZXMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRTb3VyY2VJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRTb3VyY2VJbmRleGVzW3ZhbGlkU291cmNlSW5kZXhlcy5sZW5ndGggLSAxIC0gaV07XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgYmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2sudmVydGljYWxPZmZzZXQoKSA8IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnNvdXJjZUFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay52aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYmxvY2tzID0gdGhpcy5wcm9ibGVtLmFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tzW2ldLnZpZXcuaWQgPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2kgLSAxXS52aWV3XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgYmxvY2sgcmlnaHRcbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIHRvIGFuc3dlciBhcmVhXG4gICAgICAgICAgICB0aGlzLmluZGVudCA9IDA7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbE9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIGFuc3dlckJsb2NrcyA9IHRoaXMucHJvYmxlbS5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbnN3ZXJCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1PZmZzZXQgPSBpdGVtLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1PZmZzZXQgPj0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuaW5zZXJ0QmVmb3JlKHRoaXMudmlldywgaXRlbS52aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluIGFuc3dlciBhcmVhOiBpbmNyZWFzZSB0aGUgaW5kZW50XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRlbnQgIT09IHRoaXMucHJvYmxlbS5pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuaW5kZW50ICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIGJsb2NrIGRvd25cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnByb2JsZW0uc291cmNlQmxvY2tzKCk7XG4gICAgICAgICAgICB2YXIgdmFsaWRTb3VyY2VJbmRleGVzID0gdGhpcy52YWxpZFNvdXJjZUluZGV4ZXMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2Nrc1tpXS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXlJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZFNvdXJjZUluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB2YWxpZFNvdXJjZUluZGV4ZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IC0gbXlJbmRleCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NbaW5kZXhdLnZpZXdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucHJvYmxlbS5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2Nrc1tpXS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSBibG9ja3MubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5hbnN3ZXJBcmVhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2kgKyAyXS52aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgc2VsZWN0aW9uIGxlZnRcbiAgICBzZWxlY3RMZWZ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgc291cmNlQmxvY2tzID0gdGhpcy5wcm9ibGVtLmVuYWJsZWRTb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VCbG9ja3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaG9vc2VOZXh0ID0gc291cmNlQmxvY2tzWzBdO1xuICAgICAgICAgICAgdmFyIGNob29zZU9mZnNldCA9IGNob29zZU5leHQudmVydGljYWxPZmZzZXQoKSAtIG9mZnNldDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc291cmNlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBzb3VyY2VCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1PZmZzZXQgPSBpdGVtLnZlcnRpY2FsT2Zmc2V0KCkgLSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGl0ZW1PZmZzZXQpIDwgTWF0aC5hYnMoY2hvb3NlT2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VOZXh0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlT2Zmc2V0ID0gaXRlbU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gY2hvb3NlTmV4dDtcbiAgICAgICAgICAgIGNob29zZU5leHQubWFrZVRhYkluZGV4KCk7XG4gICAgICAgICAgICAkKGNob29zZU5leHQudmlldykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIHNlbGVjdGlvbiB1cFxuICAgIHNlbGVjdFVwKCkge1xuICAgICAgICB2YXIgY2hvb3NlTmV4dCA9IGZhbHNlO1xuICAgICAgICB2YXIgYmxvY2tzO1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgYmxvY2tzID0gdGhpcy5wcm9ibGVtLmVuYWJsZWRTb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMucHJvYmxlbS5lbmFibGVkQW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IGJsb2Nrcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoY2hvb3NlTmV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPSBpdGVtO1xuICAgICAgICAgICAgICAgIGl0ZW0ubWFrZVRhYkluZGV4KCk7XG4gICAgICAgICAgICAgICAgJChpdGVtLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZpZXcuaWQgPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNob29zZU5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIHNlbGVjdGlvbiByaWdodFxuICAgIHNlbGVjdFJpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudmVydGljYWxPZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBibG9ja3MgPSB0aGlzLnByb2JsZW0uZW5hYmxlZEFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgaWYgKGJsb2Nrcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNob29zZU5leHQgPSBibG9ja3NbMF07XG4gICAgICAgICAgICB2YXIgY2hvb3NlT2Zmc2V0ID0gY2hvb3NlTmV4dC52ZXJ0aWNhbE9mZnNldCgpIC0gb2Zmc2V0O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbU9mZnNldCA9IGl0ZW0udmVydGljYWxPZmZzZXQoKSAtIG9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoaXRlbU9mZnNldCkgPCBNYXRoLmFicyhjaG9vc2VPZmZzZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNob29zZU5leHQgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VPZmZzZXQgPSBpdGVtT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPSBjaG9vc2VOZXh0O1xuICAgICAgICAgICAgY2hvb3NlTmV4dC5tYWtlVGFiSW5kZXgoKTtcbiAgICAgICAgICAgICQoY2hvb3NlTmV4dC52aWV3KS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgc2VsZWN0aW9uIGRvd25cbiAgICBzZWxlY3REb3duKCkge1xuICAgICAgICB2YXIgY2hvb3NlTmV4dCA9IGZhbHNlO1xuICAgICAgICB2YXIgYmxvY2tzO1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgYmxvY2tzID0gdGhpcy5wcm9ibGVtLmVuYWJsZWRTb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMucHJvYmxlbS5lbmFibGVkQW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgaWYgKGNob29zZU5leHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpdGVtLm1ha2VUYWJJbmRleCgpO1xuICAgICAgICAgICAgICAgICQoaXRlbS52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVG9nZ2xlIHdoZXRoZXIgdG8gbW92ZSB0aGlzIGJsb2NrXG4gICAgdG9nZ2xlTW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUNsYXNzKFwidXBcIik7XG4gICAgICAgICAgICAkKHRoaXMudmlldykuYWRkQ2xhc3MoXCJkb3duXCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcImttb3ZlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUNsYXNzKFwiZG93blwiKTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5hZGRDbGFzcyhcInVwXCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBbnN3ZXIgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoaXMgY29kZWJsb2NrIGZvciBzYXZpbmdcbiAgICBoYXNoKCkge1xuICAgICAgICB2YXIgaGFzaCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaCArPSB0aGlzLmxpbmVzW2ldLmluZGV4ICsgXCJfXCI7XG4gICAgICAgIH1cbiAgICAgICAgaGFzaCArPSB0aGlzLmluZGVudDtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIC8vIEFuc3dlciB3aGF0IHRoZSBpbmRlbnQgc2hvdWxkIGJlIGZvciB0aGUgc29sdXRpb25cbiAgICBzb2x1dGlvbkluZGVudCgpIHtcbiAgICAgICAgdmFyIHNoYXJlZEluZGVudCA9IHRoaXMubGluZXNbMF0uaW5kZW50O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNoYXJlZEluZGVudCA9IE1hdGgubWluKHNoYXJlZEluZGVudCwgdGhpcy5saW5lc1tpXS5pbmRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFyZWRJbmRlbnQ7XG4gICAgfVxufVxuIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IFBhcnNvbnNMaW5lIE9iamVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFRoZSBtb2RlbCBhbmQgdmlldyBvZiBhIGxpbmUgb2YgY29kZS5cbj09PT09PT09IEJhc2VkIG9uIHdoYXQgaXMgc3BlY2lmaWVkIGluIHRoZSBwcm9ibGVtLlxuPT09PT09PT0gUGFyc29uQmxvY2sgb2JqZWN0cyBoYXZlIG9uZSBvciBtb3JlIG9mIHRoZXNlLlxuPT09PSBQUk9QRVJUSUVTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBwcm9ibGVtOiB0aGUgUGFyc29ucyBwcm9ibGVtXG49PT09PT09PSBpbmRleDogdGhlIGluZGV4IG9mIHRoZSBsaW5lIGluIHRoZSBwcm9ibGVtXG49PT09PT09PSB0ZXh0OiB0aGUgdGV4dCBvZiB0aGUgY29kZSBsaW5lXG49PT09PT09PSBpbmRlbnQ6IHRoZSBpbmRlbnQgbGV2ZWxcbj09PT09PT09IHZpZXc6IGFuIGVsZW1lbnQgZm9yIHZpZXdpbmcgdGhpcyBvYmplY3Rcbj09PT09PT09IGRpc3RyYWN0b3I6IHdoZXRoZXIgaXQgaXMgYSBkaXN0cmFjdG9yXG49PT09PT09PSBwYWlyZWQ6IHdoZXRoZXIgaXQgaXMgYSBwYWlyZWQgZGlzdHJhY3RvclxuPT09PT09PT0gZ3JvdXBXaXRoTmV4dDogd2hldGhlciBpdCBpcyBncm91cGVkIHdpdGggdGhlIGZvbGxvd2luZyBsaW5lXG49PT09PT09PSB3aWR0aDogdGhlIHBpeGVsIHdpZHRoIHdoZW4gcmVuZGVyZWRcbj09PT09PT09PT09PSBpbiB0aGUgaW5pdGlhbCBncm91cGluZ1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vLyBJbml0aWFsaXplIGZyb20gY29kZXN0cmluZ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzb25zTGluZSB7XG4gICAgY29uc3RydWN0b3IocHJvYmxlbSwgY29kZXN0cmluZykge1xuICAgICAgICB0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuICAgICAgICB0aGlzLmluZGV4ID0gcHJvYmxlbS5saW5lcy5sZW5ndGg7XG4gICAgICAgIHZhciB0cmltbWVkID0gY29kZXN0cmluZy5yZXBsYWNlKC9cXHMqJC8sIFwiXCIpO1xuICAgICAgICB0aGlzLnRleHQgPSB0cmltbWVkLnJlcGxhY2UoL15cXHMqLywgXCJcIik7XG4gICAgICAgIHRoaXMuaW5kZW50ID0gdHJpbW1lZC5sZW5ndGggLSB0aGlzLnRleHQubGVuZ3RoO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIFZpZXdcbiAgICAgICAgdmFyIHZpZXc7XG4gICAgICAgIGlmIChwcm9ibGVtLm9wdGlvbnMubGFuZ3VhZ2UgPT0gXCJuYXR1cmFsXCIgfHwgcHJvYmxlbS5vcHRpb25zLmxhbmd1YWdlID09IFwibWF0aFwiKSB7XG4gICAgICAgICAgICB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgICAgICAgICAkKHZpZXcpLmFkZENsYXNzKHByb2JsZW0ub3B0aW9ucy5wcmV0dGlmeUxhbmd1YWdlKTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3LmlkID0gcHJvYmxlbS5jb3VudGVySWQgKyBcIi1saW5lLVwiICsgdGhpcy5pbmRleDtcbiAgICAgICAgdmlldy5pbm5lckhUTUwgKz0gdGhpcy50ZXh0O1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICBwcm9ibGVtLmxpbmVzLnB1c2godGhpcyk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgd2hhdCB3aWR0aCB0aGUgbGluZSB3b3VsZCBuYXR1cmFsbHkgaGF2ZSAod2l0aG91dCBpbmRlbnQpXG4gICAgaW5pdGlhbGl6ZVdpZHRoKCkge1xuICAgICAgICAvLyB0aGlzLndpZHRoIGRvZXMgbm90IGFwcGVhciB0byBiZSB1c2VkIGFueXdoZXJlIGxhdGVyXG4gICAgICAgIC8vIHNpbmNlIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGlzLndpZHRoIGFwcGVhcnMgdG8gaGF2ZSBubyBlZmZlY3QuIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICB0aGlzLndpZHRoID1cbiAgICAgICAgICAgICQodGhpcy52aWV3KS5vdXRlcldpZHRoKHRydWUpIC1cbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5vcHRpb25zLnBpeGVsc1BlckluZGVudCAqIHRoaXMuaW5kZW50O1xuXG4gICAgICAgIC8vIFBhc3MgdGhpcyBpbmZvcm1hdGlvbiBvbiB0byBiZSB1c2VkIGluIGNsYXNzIFBhcnNvbnMgZnVuY3Rpb24gaW5pdGlhbGl6ZUFyZWFzXG4gICAgICAgIC8vIHRvIG1hbnVhbGx5IGRldGVybWluZSBhcHByb3ByaWF0ZSB3aWR0aHMgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgIHRoaXMudmlldy5mb250U2l6ZSA9IHdpbmRvd1xuICAgICAgICAgICAgLmdldENvbXB1dGVkU3R5bGUodGhpcy52aWV3LCBudWxsKVxuICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIik7XG4gICAgICAgIHRoaXMudmlldy5waXhlbHNQZXJJbmRlbnQgPSB0aGlzLnByb2JsZW0ub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQ7XG4gICAgICAgIHRoaXMudmlldy5pbmRlbnQgPSB0aGlzLmluZGVudDtcblxuICAgICAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHR5cGVmYWNlIHdpbGwgYmUgcmVuZGVyZWQgYnkgY29tcGFyaW5nIHRleHQgd2lkdGhzIHRvIGJyb3dzZXIgZGVmYXVsdCAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgdmFyIHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB2YXIgdGVtcENhbnZhc0N0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB2YXIgcG9zc2libGVGb250cyA9IHdpbmRvd1xuICAgICAgICAgICAgLmdldENvbXB1dGVkU3R5bGUodGhpcy52aWV3LCBudWxsKVxuICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKVxuICAgICAgICAgICAgLnNwbGl0KFwiLCBcIik7XG4gICAgICAgIHZhciBmaWxsZXJUZXh0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODksLi8hQCMkJV4mKi0rXCI7XG4gICAgICAgIHRlbXBDYW52YXNDdHguZm9udCA9IHRoaXMudmlldy5mb250U2l6ZSArIFwiIHNlcmlmXCI7XG4gICAgICAgIHZhciBzZXJpZldpZHRoID0gdGVtcENhbnZhc0N0eC5tZWFzdXJlVGV4dChmaWxsZXJUZXh0KS53aWR0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZUZvbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocG9zc2libGVGb250c1tpXS5pbmNsdWRlcygnXCInKSkge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlRm9udHNbaV0gPSBwb3NzaWJsZUZvbnRzW2ldLnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zc2libGVGb250c1tpXS5pbmNsdWRlcyhcIidcIikpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUZvbnRzW2ldID0gcG9zc2libGVGb250c1tpXS5yZXBsYWNlQWxsKFwiJ1wiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBDYW52YXNDdHguZm9udCA9IHRoaXMudmlldy5mb250U2l6ZSArIFwiIFwiICsgcG9zc2libGVGb250c1tpXTtcbiAgICAgICAgICAgIGlmICh0ZW1wQ2FudmFzQ3R4Lm1lYXN1cmVUZXh0KGZpbGxlclRleHQpLndpZHRoICE9PSBzZXJpZldpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvbnRGYW1pbHkgPSBwb3NzaWJsZUZvbnRzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFuc3dlciB0aGUgYmxvY2sgdGhhdCB0aGlzIGxpbmUgaXMgY3VycmVudGx5IGluXG4gICAgYmxvY2soKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9ibGVtLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5wcm9ibGVtLmJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2subGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2subGluZXNbal0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBBbnN3ZXIgdGhlIGluZGVudCBiYXNlZCBvbiB0aGUgdmlld1xuICAgIHZpZXdJbmRlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0ubm9pbmRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGVudCAtIGJsb2NrLnNvbHV0aW9uSW5kZW50KCkgKyBibG9jay5pbmRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJmdW5jdGlvbiBIKCkge1xuICAgIHZhciB4ID1cbiAgICAgICAgbmF2aWdhdG9yICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQgJiZcbiAgICAgICAgL1xcYk1TSUUgNlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBIID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH07XG4gICAgcmV0dXJuIHg7XG59XG4oZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24geChiKSB7XG4gICAgICAgIGIgPSBiLnNwbGl0KC8gL2cpO1xuICAgICAgICB2YXIgYSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBjID0gYi5sZW5ndGg7IC0tYyA+PSAwOyApIHtcbiAgICAgICAgICAgIHZhciBkID0gYltjXTtcbiAgICAgICAgICAgIGlmIChkKSBhW2RdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgdmFyIHkgPSBcImJyZWFrIGNvbnRpbnVlIGRvIGVsc2UgZm9yIGlmIHJldHVybiB3aGlsZSBcIixcbiAgICAgICAgVSA9XG4gICAgICAgICAgICB5ICtcbiAgICAgICAgICAgIFwiYXV0byBjYXNlIGNoYXIgY29uc3QgZGVmYXVsdCBkb3VibGUgZW51bSBleHRlcm4gZmxvYXQgZ290byBpbnQgbG9uZyByZWdpc3RlciBzaG9ydCBzaWduZWQgc2l6ZW9mIHN0YXRpYyBzdHJ1Y3Qgc3dpdGNoIHR5cGVkZWYgdW5pb24gdW5zaWduZWQgdm9pZCB2b2xhdGlsZSBcIixcbiAgICAgICAgRCA9XG4gICAgICAgICAgICBVICtcbiAgICAgICAgICAgIFwiY2F0Y2ggY2xhc3MgZGVsZXRlIGZhbHNlIGltcG9ydCBuZXcgb3BlcmF0b3IgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHRoaXMgdGhyb3cgdHJ1ZSB0cnkgXCIsXG4gICAgICAgIEkgPVxuICAgICAgICAgICAgRCArXG4gICAgICAgICAgICBcImFsaWdub2YgYWxpZ25fdW5pb24gYXNtIGF4aW9tIGJvb2wgY29uY2VwdCBjb25jZXB0X21hcCBjb25zdF9jYXN0IGNvbnN0ZXhwciBkZWNsdHlwZSBkeW5hbWljX2Nhc3QgZXhwbGljaXQgZXhwb3J0IGZyaWVuZCBpbmxpbmUgbGF0ZV9jaGVjayBtdXRhYmxlIG5hbWVzcGFjZSBudWxscHRyIHJlaW50ZXJwcmV0X2Nhc3Qgc3RhdGljX2Fzc2VydCBzdGF0aWNfY2FzdCB0ZW1wbGF0ZSB0eXBlaWQgdHlwZW5hbWUgdHlwZW9mIHVzaW5nIHZpcnR1YWwgd2NoYXJfdCB3aGVyZSBcIixcbiAgICAgICAgSiA9XG4gICAgICAgICAgICBEICtcbiAgICAgICAgICAgIFwiYm9vbGVhbiBieXRlIGV4dGVuZHMgZmluYWwgZmluYWxseSBpbXBsZW1lbnRzIGltcG9ydCBpbnN0YW5jZW9mIG51bGwgbmF0aXZlIHBhY2thZ2Ugc3RyaWN0ZnAgc3VwZXIgc3luY2hyb25pemVkIHRocm93cyB0cmFuc2llbnQgXCIsXG4gICAgICAgIFYgPVxuICAgICAgICAgICAgSiArXG4gICAgICAgICAgICBcImFzIGJhc2UgYnkgY2hlY2tlZCBkZWNpbWFsIGRlbGVnYXRlIGRlc2NlbmRpbmcgZXZlbnQgZml4ZWQgZm9yZWFjaCBmcm9tIGdyb3VwIGltcGxpY2l0IGluIGludGVyZmFjZSBpbnRlcm5hbCBpbnRvIGlzIGxvY2sgb2JqZWN0IG91dCBvdmVycmlkZSBvcmRlcmJ5IHBhcmFtcyByZWFkb25seSByZWYgc2J5dGUgc2VhbGVkIHN0YWNrYWxsb2Mgc3RyaW5nIHNlbGVjdCB1aW50IHVsb25nIHVuY2hlY2tlZCB1bnNhZmUgdXNob3J0IHZhciBcIixcbiAgICAgICAgSyA9XG4gICAgICAgICAgICBEICtcbiAgICAgICAgICAgIFwiZGVidWdnZXIgZXZhbCBleHBvcnQgZnVuY3Rpb24gZ2V0IG51bGwgc2V0IHVuZGVmaW5lZCB2YXIgd2l0aCBJbmZpbml0eSBOYU4gXCIsXG4gICAgICAgIEwgPVxuICAgICAgICAgICAgXCJjYWxsZXIgZGVsZXRlIGRpZSBkbyBkdW1wIGVsc2lmIGV2YWwgZXhpdCBmb3JlYWNoIGZvciBnb3RvIGlmIGltcG9ydCBsYXN0IGxvY2FsIG15IG5leHQgbm8gb3VyIHByaW50IHBhY2thZ2UgcmVkbyByZXF1aXJlIHN1YiB1bmRlZiB1bmxlc3MgdW50aWwgdXNlIHdhbnRhcnJheSB3aGlsZSBCRUdJTiBFTkQgXCIsXG4gICAgICAgIE0gPVxuICAgICAgICAgICAgeSArXG4gICAgICAgICAgICBcImFuZCBhcyBhc3NlcnQgY2xhc3MgZGVmIGRlbCBlbGlmIGV4Y2VwdCBleGVjIGZpbmFsbHkgZnJvbSBnbG9iYWwgaW1wb3J0IGluIGlzIGxhbWJkYSBub25sb2NhbCBub3Qgb3IgcGFzcyBwcmludCByYWlzZSB0cnkgd2l0aCB5aWVsZCBGYWxzZSBUcnVlIE5vbmUgXCIsXG4gICAgICAgIE4gPVxuICAgICAgICAgICAgeSArXG4gICAgICAgICAgICBcImFsaWFzIGFuZCBiZWdpbiBjYXNlIGNsYXNzIGRlZiBkZWZpbmVkIGVsc2lmIGVuZCBlbnN1cmUgZmFsc2UgaW4gbW9kdWxlIG5leHQgbmlsIG5vdCBvciByZWRvIHJlc2N1ZSByZXRyeSBzZWxmIHN1cGVyIHRoZW4gdHJ1ZSB1bmRlZiB1bmxlc3MgdW50aWwgd2hlbiB5aWVsZCBCRUdJTiBFTkQgXCIsXG4gICAgICAgIE8gPSB5ICsgXCJjYXNlIGRvbmUgZWxpZiBlc2FjIGV2YWwgZmkgZnVuY3Rpb24gaW4gbG9jYWwgc2V0IHRoZW4gdW50aWwgXCIsXG4gICAgICAgIFcgPSBJICsgViArIEsgKyBMICsgTSArIE4gKyBPO1xuICAgIGZ1bmN0aW9uIFgoYikge1xuICAgICAgICByZXR1cm4gKGIgPj0gXCJhXCIgJiYgYiA8PSBcInpcIikgfHwgKGIgPj0gXCJBXCIgJiYgYiA8PSBcIlpcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHUoYiwgYSwgYywgZCkge1xuICAgICAgICBiLnVuc2hpZnQoYywgZCB8fCAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGEuc3BsaWNlLmFwcGx5KGEsIGIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgYi5zcGxpY2UoMCwgMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIFkgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYiA9IFtcbiAgICAgICAgICAgICAgICAgICAgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIhPT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiU9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJlwiLFxuICAgICAgICAgICAgICAgICAgICBcIiYmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJiY9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJj1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiKlwiLFxuICAgICAgICAgICAgICAgICAgICBcIio9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiKz1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCItPlwiLFxuICAgICAgICAgICAgICAgICAgICBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCIvPVwiLFxuICAgICAgICAgICAgICAgICAgICBcIjpcIixcbiAgICAgICAgICAgICAgICAgICAgXCI6OlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCI8XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPDxcIixcbiAgICAgICAgICAgICAgICAgICAgXCI8PD1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI8PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI9PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj09PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj5cIixcbiAgICAgICAgICAgICAgICAgICAgXCI+PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj4+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPj49XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPj4+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPj4+PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJAXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiW1wiLFxuICAgICAgICAgICAgICAgICAgICBcIl5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJePVwiLFxuICAgICAgICAgICAgICAgICAgICBcIl5eXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiXl49XCIsXG4gICAgICAgICAgICAgICAgICAgIFwie1wiLFxuICAgICAgICAgICAgICAgICAgICBcInxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ8PVwiLFxuICAgICAgICAgICAgICAgICAgICBcInx8XCIsXG4gICAgICAgICAgICAgICAgICAgIFwifHw9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiflwiLFxuICAgICAgICAgICAgICAgICAgICBcImJyZWFrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRpbnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZG9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmluYWxseVwiLFxuICAgICAgICAgICAgICAgICAgICBcImluc3RhbmNlb2ZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHJvd1wiLFxuICAgICAgICAgICAgICAgICAgICBcInRyeVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVvZlwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhID1cbiAgICAgICAgICAgICAgICAgICAgXCIoPzooPzooPzpefFteMC05Ll0pXFxcXC57MSwzfSl8KD86KD86XnxbXlxcXFwrXSlcXFxcKyl8KD86KD86XnxbXlxcXFwtXSktKVwiO1xuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBiLmxlbmd0aDsgKytjKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBiW2NdO1xuICAgICAgICAgICAgICAgIGEgKz0gWChkLmNoYXJBdCgwKSlcbiAgICAgICAgICAgICAgICAgICAgPyBcInxcXFxcYlwiICsgZFxuICAgICAgICAgICAgICAgICAgICA6IFwifFwiICsgZC5yZXBsYWNlKC8oW149PD46Jl0pL2csIFwiXFxcXCQxXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSArPSBcInxeKVxcXFxzKiRcIjtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGEpO1xuICAgICAgICB9KSgpLFxuICAgICAgICBQID0gLyYvZyxcbiAgICAgICAgUSA9IC88L2csXG4gICAgICAgIFIgPSAvPi9nLFxuICAgICAgICBaID0gL1xcXCIvZztcbiAgICBmdW5jdGlvbiAkKGIpIHtcbiAgICAgICAgcmV0dXJuIGJcbiAgICAgICAgICAgIC5yZXBsYWNlKFAsIFwiJmFtcDtcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFEsIFwiJmx0O1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoUiwgXCImZ3Q7XCIpXG4gICAgICAgICAgICAucmVwbGFjZShaLCBcIiZxdW90O1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gRShiKSB7XG4gICAgICAgIHJldHVybiBiXG4gICAgICAgICAgICAucmVwbGFjZShQLCBcIiZhbXA7XCIpXG4gICAgICAgICAgICAucmVwbGFjZShRLCBcIiZsdDtcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFIsIFwiJmd0O1wiKTtcbiAgICB9XG4gICAgdmFyIGFhID0gLyZsdDsvZyxcbiAgICAgICAgYmEgPSAvJmd0Oy9nLFxuICAgICAgICBjYSA9IC8mYXBvczsvZyxcbiAgICAgICAgZGEgPSAvJnF1b3Q7L2csXG4gICAgICAgIGVhID0gLyZhbXA7L2csXG4gICAgICAgIGZhID0gLyZuYnNwOy9nO1xuICAgIGZ1bmN0aW9uIGdhKGIpIHtcbiAgICAgICAgdmFyIGEgPSBiLmluZGV4T2YoXCImXCIpO1xuICAgICAgICBpZiAoYSA8IDApIHJldHVybiBiO1xuICAgICAgICBmb3IgKC0tYTsgKGEgPSBiLmluZGV4T2YoXCImI1wiLCBhICsgMSkpID49IDA7ICkge1xuICAgICAgICAgICAgdmFyIGMgPSBiLmluZGV4T2YoXCI7XCIsIGEpO1xuICAgICAgICAgICAgaWYgKGMgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gYi5zdWJzdHJpbmcoYSArIDMsIGMpLFxuICAgICAgICAgICAgICAgICAgICBnID0gMTA7XG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZC5jaGFyQXQoMCkgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBkLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICAgICAgZyA9IDE2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHBhcnNlSW50KGQsIGcpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZSkpXG4gICAgICAgICAgICAgICAgICAgIGIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdWJzdHJpbmcoMCwgYSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnN1YnN0cmluZyhjICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJcbiAgICAgICAgICAgIC5yZXBsYWNlKGFhLCBcIjxcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKGJhLCBcIj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKGNhLCBcIidcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKGRhLCAnXCInKVxuICAgICAgICAgICAgLnJlcGxhY2UoZWEsIFwiJlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoZmEsIFwiIFwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUyhiKSB7XG4gICAgICAgIHJldHVybiBcIlhNUFwiID09PSBiLnRhZ05hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHooYiwgYSkge1xuICAgICAgICBzd2l0Y2ggKGIubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGIudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGEucHVzaChcIjxcIiwgYyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBiLmF0dHJpYnV0ZXMubGVuZ3RoOyArK2QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBiLmF0dHJpYnV0ZXNbZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZy5zcGVjaWZpZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBhLnB1c2goXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICB6KGcsIGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhLnB1c2goXCI+XCIpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSBiLmZpcnN0Q2hpbGQ7IGU7IGUgPSBlLm5leHRTaWJsaW5nKSB6KGUsIGEpO1xuICAgICAgICAgICAgICAgIGlmIChiLmZpcnN0Q2hpbGQgfHwgIS9eKD86YnJ8bGlua3xpbWcpJC8udGVzdChjKSlcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKFwiPC9cIiwgYywgXCI+XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGEucHVzaChiLm5hbWUudG9Mb3dlckNhc2UoKSwgJz1cIicsICQoYi52YWx1ZSksICdcIicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGEucHVzaChFKGIubm9kZVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIEYgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGhhKGIpIHtcbiAgICAgICAgaWYgKG51bGwgPT09IEYpIHtcbiAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBSRVwiKTtcbiAgICAgICAgICAgIGEuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICc8IURPQ1RZUEUgZm9vIFBVQkxJQyBcImZvbyBiYXJcIj5cXG48Zm9vIC8+J1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBGID0gIS88Ly50ZXN0KGEuaW5uZXJIVE1MKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRikge1xuICAgICAgICAgICAgdmFyIGMgPSBiLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChTKGIpKSBjID0gRShjKTtcbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkID0gW107XG4gICAgICAgIGZvciAodmFyIGcgPSBiLmZpcnN0Q2hpbGQ7IGc7IGcgPSBnLm5leHRTaWJsaW5nKSB6KGcsIGQpO1xuICAgICAgICByZXR1cm4gZC5qb2luKFwiXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpYShiKSB7XG4gICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHZhciBkID0gbnVsbCxcbiAgICAgICAgICAgICAgICBnID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwLCBoID0gYy5sZW5ndGg7IGUgPCBoOyArK2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGMuY2hhckF0KGUpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFx0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWQpIGQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQucHVzaChjLnN1YnN0cmluZyhnLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGIgLSAoYSAlIGIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPj0gMDsgaSAtPSBcIiAgICAgICAgICAgICAgICBcIi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wdXNoKFwiICAgICAgICAgICAgICAgIFwiLnN1YnN0cmluZygwLCBpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gZSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICsrYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWQpIHJldHVybiBjO1xuICAgICAgICAgICAgZC5wdXNoKGMuc3Vic3RyaW5nKGcpKTtcbiAgICAgICAgICAgIHJldHVybiBkLmpvaW4oXCJcIik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBqYSA9IC8oPzpbXjxdK3w8IS0tW1xcc1xcU10qPy0tXFw+fDwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPylcXF1cXF0+fDxcXC8/W2EtekEtWl1bXj5dKj58PCkvZyxcbiAgICAgICAga2EgPSAvXjwhLS0vLFxuICAgICAgICBsYSA9IC9ePFxcW0NEQVRBXFxbLyxcbiAgICAgICAgbWEgPSAvXjxiclxcYi9pO1xuICAgIGZ1bmN0aW9uIG5hKGIpIHtcbiAgICAgICAgdmFyIGEgPSBiLm1hdGNoKGphKSxcbiAgICAgICAgICAgIGMgPSBbXSxcbiAgICAgICAgICAgIGQgPSAwLFxuICAgICAgICAgICAgZyA9IFtdO1xuICAgICAgICBpZiAoYSlcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwLCBoID0gYS5sZW5ndGg7IGUgPCBoOyArK2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGFbZV07XG4gICAgICAgICAgICAgICAgaWYgKGYubGVuZ3RoID4gMSAmJiBmLmNoYXJBdCgwKSA9PT0gXCI8XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGthLnRlc3QoZikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGEudGVzdChmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKGYuc3Vic3RyaW5nKDksIGYubGVuZ3RoIC0gMykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZCArPSBmLmxlbmd0aCAtIDEyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hLnRlc3QoZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucHVzaChcIlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGcucHVzaChkLCBmKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGdhKGYpO1xuICAgICAgICAgICAgICAgICAgICBjLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGQgKz0gaS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlOiBjLmpvaW4oXCJcIiksXG4gICAgICAgICAgICB0YWdzOiBnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHYoYiwgYSkge1xuICAgICAgICB2YXIgYyA9IHt9O1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZyA9IGIuY29uY2F0KGEpO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IGcubGVuZ3RoOyAtLWUgPj0gMDsgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBnW2VdLFxuICAgICAgICAgICAgICAgICAgICBmID0gaFszXTtcbiAgICAgICAgICAgICAgICBpZiAoZikgZm9yICh2YXIgaSA9IGYubGVuZ3RoOyAtLWkgPj0gMDsgKSBjW2YuY2hhckF0KGkpXSA9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHZhciBkID0gYS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihnLCBlKSB7XG4gICAgICAgICAgICBlID0gZSB8fCAwO1xuICAgICAgICAgICAgdmFyIGggPSBbZSwgXCJwbG5cIl0sXG4gICAgICAgICAgICAgICAgZiA9IFwiXCIsXG4gICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgaiA9IGc7XG4gICAgICAgICAgICB3aGlsZSAoai5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgICAgICAgICAgbSA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGssXG4gICAgICAgICAgICAgICAgICAgIGwgPSBjW2ouY2hhckF0KDApXTtcbiAgICAgICAgICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgICAgICAgICBrID0gai5tYXRjaChsWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IGtbMF07XG4gICAgICAgICAgICAgICAgICAgIG8gPSBsWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZDsgKytuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gYVtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gbFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwICYmICFwLnRlc3QoZikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IGoubWF0Y2gobFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBrWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBsWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwicGxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gai5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaC5wdXNoKGUgKyBpLCBvKTtcbiAgICAgICAgICAgICAgICBpICs9IG0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGogPSBqLnN1YnN0cmluZyhtLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKG8gIT09IFwiY29tXCIgJiYgL1xcUy8udGVzdChtKSkgZiA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG9hID0gdihcbiAgICAgICAgW10sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcInBsblwiLCAvXltePF0rLywgbnVsbF0sXG4gICAgICAgICAgICBbXCJkZWNcIiwgL148IVxcd1tePl0qKD86PnwkKS8sIG51bGxdLFxuICAgICAgICAgICAgW1wiY29tXCIsIC9ePCEtLVtcXHNcXFNdKj8oPzotLVxcPnwkKS8sIG51bGxdLFxuICAgICAgICAgICAgW1wic3JjXCIsIC9ePFxcP1tcXHNcXFNdKj8oPzpcXD8+fCQpLywgbnVsbF0sXG4gICAgICAgICAgICBbXCJzcmNcIiwgL148JVtcXHNcXFNdKj8oPzolPnwkKS8sIG51bGxdLFxuICAgICAgICAgICAgW1wic3JjXCIsIC9ePChzY3JpcHR8c3R5bGV8eG1wKVxcYltePl0qPltcXHNcXFNdKj88XFwvXFwxXFxiW14+XSo+L2ksIG51bGxdLFxuICAgICAgICAgICAgW1widGFnXCIsIC9ePFxcLz9cXHdbXjw+XSo+LywgbnVsbF1cbiAgICAgICAgXVxuICAgICk7XG4gICAgZnVuY3Rpb24gcGEoYikge1xuICAgICAgICB2YXIgYSA9IG9hKGIpO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGEubGVuZ3RoOyBjICs9IDIpXG4gICAgICAgICAgICBpZiAoYVtjICsgMV0gPT09IFwic3JjXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZCwgZztcbiAgICAgICAgICAgICAgICBkID0gYVtjXTtcbiAgICAgICAgICAgICAgICBnID0gYyArIDIgPCBhLmxlbmd0aCA/IGFbYyArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBiLnN1YnN0cmluZyhkLCBnKSxcbiAgICAgICAgICAgICAgICAgICAgaCA9IGUubWF0Y2goL14oPFtePl0qPikoW1xcc1xcU10qKSg8XFwvW14+XSo+KSQvKTtcbiAgICAgICAgICAgICAgICBpZiAoaClcbiAgICAgICAgICAgICAgICAgICAgYS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZCArIGhbMV0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgKyBoWzFdLmxlbmd0aCArIChoWzJdIHx8IFwiXCIpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFnXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHZhciBxYSA9IHYoXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcImF0dlwiLCAvXlxcJ1teXFwnXSooPzpcXCd8JCkvLCBudWxsLCBcIidcIl0sXG4gICAgICAgICAgICBbXCJhdHZcIiwgL15cXFwiW15cXFwiXSooPzpcXFwifCQpLywgbnVsbCwgJ1wiJ10sXG4gICAgICAgICAgICBbXCJwdW5cIiwgL15bPD5cXC89XSsvLCBudWxsLCBcIjw+Lz1cIl1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgW1widGFnXCIsIC9eW1xcdzpcXC1dKy8sIC9ePC9dLFxuICAgICAgICAgICAgW1wiYXR2XCIsIC9eW1xcd1xcLV0rLywgL149L10sXG4gICAgICAgICAgICBbXCJhdG5cIiwgL15bXFx3OlxcLV0rLywgbnVsbF0sXG4gICAgICAgICAgICBbXCJwbG5cIiwgL15cXHMrLywgbnVsbCwgXCIgXFx0XFxyXFxuXCJdXG4gICAgICAgIF1cbiAgICApO1xuICAgIGZ1bmN0aW9uIHJhKGIsIGEpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYyArPSAyKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGFbYyArIDFdO1xuICAgICAgICAgICAgaWYgKGQgPT09IFwidGFnXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZywgZTtcbiAgICAgICAgICAgICAgICBnID0gYVtjXTtcbiAgICAgICAgICAgICAgICBlID0gYyArIDIgPCBhLmxlbmd0aCA/IGFbYyArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBiLnN1YnN0cmluZyhnLCBlKSxcbiAgICAgICAgICAgICAgICAgICAgZiA9IHFhKGgsIGcpO1xuICAgICAgICAgICAgICAgIHUoZiwgYSwgYywgMik7XG4gICAgICAgICAgICAgICAgYyArPSBmLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHIoYikge1xuICAgICAgICB2YXIgYSA9IFtdLFxuICAgICAgICAgICAgYyA9IFtdO1xuICAgICAgICBpZiAoYi50cmlwbGVRdW90ZWRTdHJpbmdzKVxuICAgICAgICAgICAgYS5wdXNoKFtcbiAgICAgICAgICAgICAgICBcInN0clwiLFxuICAgICAgICAgICAgICAgIC9eKD86XFwnXFwnXFwnKD86W15cXCdcXFxcXXxcXFxcW1xcc1xcU118XFwnezEsMn0oPz1bXlxcJ10pKSooPzpcXCdcXCdcXCd8JCl8XFxcIlxcXCJcXFwiKD86W15cXFwiXFxcXF18XFxcXFtcXHNcXFNdfFxcXCJ7MSwyfSg/PVteXFxcIl0pKSooPzpcXFwiXFxcIlxcXCJ8JCl8XFwnKD86W15cXFxcXFwnXXxcXFxcW1xcc1xcU10pKig/OlxcJ3wkKXxcXFwiKD86W15cXFxcXFxcIl18XFxcXFtcXHNcXFNdKSooPzpcXFwifCQpKS8sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIidcXFwiXCJcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBlbHNlIGlmIChiLm11bHRpTGluZVN0cmluZ3MpXG4gICAgICAgICAgICBhLnB1c2goW1xuICAgICAgICAgICAgICAgIFwic3RyXCIsXG4gICAgICAgICAgICAgICAgL14oPzpcXCcoPzpbXlxcXFxcXCddfFxcXFxbXFxzXFxTXSkqKD86XFwnfCQpfFxcXCIoPzpbXlxcXFxcXFwiXXxcXFxcW1xcc1xcU10pKig/OlxcXCJ8JCl8XFxgKD86W15cXFxcXFxgXXxcXFxcW1xcc1xcU10pKig/OlxcYHwkKSkvLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCInXFxcImBcIlxuICAgICAgICAgICAgXSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGEucHVzaChbXG4gICAgICAgICAgICAgICAgXCJzdHJcIixcbiAgICAgICAgICAgICAgICAvXig/OlxcJyg/OlteXFxcXFxcJ1xcclxcbl18XFxcXC4pKig/OlxcJ3wkKXxcXFwiKD86W15cXFxcXFxcIlxcclxcbl18XFxcXC4pKig/OlxcXCJ8JCkpLyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFwiXFxcIidcIlxuICAgICAgICAgICAgXSk7XG4gICAgICAgIGMucHVzaChbXCJwbG5cIiwgL14oPzpbXlxcJ1xcXCJcXGBcXC9cXCNdKykvLCBudWxsLCBcIiBcXHJcXG5cIl0pO1xuICAgICAgICBpZiAoYi5oYXNoQ29tbWVudHMpIGEucHVzaChbXCJjb21cIiwgL14jW15cXHJcXG5dKi8sIG51bGwsIFwiI1wiXSk7XG4gICAgICAgIGlmIChiLmNTdHlsZUNvbW1lbnRzKSBjLnB1c2goW1wiY29tXCIsIC9eXFwvXFwvW15cXHJcXG5dKi8sIG51bGxdKTtcbiAgICAgICAgaWYgKGIucmVnZXhMaXRlcmFscylcbiAgICAgICAgICAgIGMucHVzaChbXG4gICAgICAgICAgICAgICAgXCJzdHJcIixcbiAgICAgICAgICAgICAgICAvXlxcLyg/OlteXFxcXFxcKlxcL1xcW118XFxcXFtcXHNcXFNdfFxcWyg/OlteXFxdXFxcXF18XFxcXC4pKig/OlxcXXwkKSkrKD86XFwvfCQpLyxcbiAgICAgICAgICAgICAgICBZXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgaWYgKGIuY1N0eWxlQ29tbWVudHMpIGMucHVzaChbXCJjb21cIiwgL15cXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLywgbnVsbF0pO1xuICAgICAgICB2YXIgZCA9IHgoYi5rZXl3b3Jkcyk7XG4gICAgICAgIGIgPSBudWxsO1xuICAgICAgICB2YXIgZyA9IHYoYSwgYyksXG4gICAgICAgICAgICBlID0gdihcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcInBsblwiLCAvXlxccysvLCBudWxsLCBcIiBcXHJcXG5cIl0sXG4gICAgICAgICAgICAgICAgICAgIFtcInBsblwiLCAvXlthLXpfJEBdW2Etel8kQDAtOV0qL2ksIG51bGxdLFxuICAgICAgICAgICAgICAgICAgICBbXCJsaXRcIiwgL14weFthLWYwLTldK1thLXpdL2ksIG51bGxdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgL14oPzpcXGQoPzpfXFxkKykqXFxkKig/OlxcLlxcZCopP3xcXC5cXGQrKSg/OmVbK1xcLV0/XFxkKyk/W2Etel0qL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMjM0NTY3ODlcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXCJwdW5cIiwgL15bXlxcc1xcd1xcLiRAXSsvLCBudWxsXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIGZ1bmN0aW9uIGgoZiwgaSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpLmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBpW2ogKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAobyA9PT0gXCJwbG5cIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSwgaywgbCwgbjtcbiAgICAgICAgICAgICAgICAgICAgbSA9IGlbal07XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqICsgMiA8IGkubGVuZ3RoID8gaVtqICsgMl0gOiBmLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGYuc3Vic3RyaW5nKG0sIGspO1xuICAgICAgICAgICAgICAgICAgICBuID0gZShsLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IDAsIHQgPSBuLmxlbmd0aDsgcCA8IHQ7IHAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBuW3AgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ID09PSBcInBsblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSBuW3BdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCID0gcCArIDIgPCB0ID8gbltwICsgMl0gOiBsLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGYuc3Vic3RyaW5nKEEsIEIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID09PSBcIi5cIikgbltwICsgMV0gPSBcInB1blwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMgaW4gZCkgbltwICsgMV0gPSBcImt3ZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9eQD9bQS1aXVtBLVokXSpbYS16XVtBLVphLXokXSokLy50ZXN0KHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuW3AgKyAxXSA9IHMuY2hhckF0KDApID09PSBcIkBcIiA/IFwibGl0XCIgOiBcInR5cFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHUobiwgaSwgaiwgMik7XG4gICAgICAgICAgICAgICAgICAgIGogKz0gbi5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGcoZik7XG4gICAgICAgICAgICBpID0gaChmLCBpKTtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgRyA9IHIoe1xuICAgICAgICBrZXl3b3JkczogVyxcbiAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICBjU3R5bGVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgbXVsdGlMaW5lU3RyaW5nczogdHJ1ZSxcbiAgICAgICAgcmVnZXhMaXRlcmFsczogdHJ1ZVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHNhKGIsIGEpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYyArPSAyKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGFbYyArIDFdO1xuICAgICAgICAgICAgaWYgKGQgPT09IFwic3JjXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZywgZTtcbiAgICAgICAgICAgICAgICBnID0gYVtjXTtcbiAgICAgICAgICAgICAgICBlID0gYyArIDIgPCBhLmxlbmd0aCA/IGFbYyArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBHKGIuc3Vic3RyaW5nKGcsIGUpKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgaSA9IGgubGVuZ3RoOyBmIDwgaTsgZiArPSAyKSBoW2ZdICs9IGc7XG4gICAgICAgICAgICAgICAgdShoLCBhLCBjLCAyKTtcbiAgICAgICAgICAgICAgICBjICs9IGgubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGEoYiwgYSkge1xuICAgICAgICB2YXIgYyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGEubGVuZ3RoOyBkICs9IDIpIHtcbiAgICAgICAgICAgIHZhciBnID0gYVtkICsgMV0sXG4gICAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgICAgICBoO1xuICAgICAgICAgICAgaWYgKGcgPT09IFwiYXRuXCIpIHtcbiAgICAgICAgICAgICAgICBlID0gYVtkXTtcbiAgICAgICAgICAgICAgICBoID0gZCArIDIgPCBhLmxlbmd0aCA/IGFbZCArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYyA9IC9eb258XnN0eWxlJC9pLnRlc3QoYi5zdWJzdHJpbmcoZSwgaCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnID09PSBcImF0dlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IGFbZF07XG4gICAgICAgICAgICAgICAgICAgIGggPSBkICsgMiA8IGEubGVuZ3RoID8gYVtkICsgMl0gOiBiLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBiLnN1YnN0cmluZyhlLCBoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBmLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPj0gMiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9eW1xcXCJcXCddLy50ZXN0KGYpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5jaGFyQXQoMCkgPT09IGYuY2hhckF0KGkgLSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBtLFxuICAgICAgICAgICAgICAgICAgICAgICAgaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBlICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBmO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IGUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGYuc3Vic3RyaW5nKDEsIGYubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBHKG8pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMCwgcCA9IGwubGVuZ3RoOyBuIDwgcDsgbiArPSAyKSBsW25dICs9IG07XG4gICAgICAgICAgICAgICAgICAgIGlmIChqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsLnB1c2goaywgXCJhdHZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1KGwsIGEsIGQgKyAyLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHUobCwgYSwgZCwgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdWEoYikge1xuICAgICAgICB2YXIgYSA9IHBhKGIpO1xuICAgICAgICBhID0gcmEoYiwgYSk7XG4gICAgICAgIGEgPSBzYShiLCBhKTtcbiAgICAgICAgYSA9IHRhKGIsIGEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmEoYiwgYSwgYykge1xuICAgICAgICB2YXIgZCA9IFtdLFxuICAgICAgICAgICAgZyA9IDAsXG4gICAgICAgICAgICBlID0gbnVsbCxcbiAgICAgICAgICAgIGggPSBudWxsLFxuICAgICAgICAgICAgZiA9IDAsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGogPSBpYSg4KTtcbiAgICAgICAgZnVuY3Rpb24gbyhrKSB7XG4gICAgICAgICAgICBpZiAoayA+IGcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSAmJiBlICE9PSBoKSB7XG4gICAgICAgICAgICAgICAgICAgIGQucHVzaChcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWUgJiYgaCkge1xuICAgICAgICAgICAgICAgICAgICBlID0gaDtcbiAgICAgICAgICAgICAgICAgICAgZC5wdXNoKCc8c3BhbiBjbGFzcz1cIicsIGUsICdcIj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBFKGooYi5zdWJzdHJpbmcoZywgaykpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcclxcbj98XFxufCApIC9nLCBcIiQxJm5ic3A7XCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHJcXG4/fFxcbi9nLCBcIjxiciAvPlwiKTtcbiAgICAgICAgICAgICAgICBkLnB1c2gobCk7XG4gICAgICAgICAgICAgICAgZyA9IGs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgbSA9IGYgPCBhLmxlbmd0aCA/IChpIDwgYy5sZW5ndGggPyBhW2ZdIDw9IGNbaV0gOiB0cnVlKSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICBvKGFbZl0pO1xuICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGQucHVzaChcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkLnB1c2goYVtmICsgMV0pO1xuICAgICAgICAgICAgICAgIGYgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IGMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbyhjW2ldKTtcbiAgICAgICAgICAgICAgICBoID0gY1tpICsgMV07XG4gICAgICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG8oYi5sZW5ndGgpO1xuICAgICAgICBpZiAoZSkgZC5wdXNoKFwiPC9zcGFuPlwiKTtcbiAgICAgICAgcmV0dXJuIGQuam9pbihcIlwiKTtcbiAgICB9XG4gICAgdmFyIEMgPSB7fTtcbiAgICBmdW5jdGlvbiBxKGIsIGEpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IGEubGVuZ3RoOyAtLWMgPj0gMDsgKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGFbY107XG4gICAgICAgICAgICBpZiAoIUMuaGFzT3duUHJvcGVydHkoZCkpIENbZF0gPSBiO1xuICAgICAgICAgICAgZWxzZSBpZiAoXCJjb25zb2xlXCIgaW4gd2luZG93KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IG92ZXJyaWRlIGxhbmd1YWdlIGhhbmRsZXIgJXNcIiwgZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcShHLCBbXCJkZWZhdWx0LWNvZGVcIl0pO1xuICAgIHEodWEsIFtcImRlZmF1bHQtbWFya3VwXCIsIFwiaHRtbFwiLCBcImh0bVwiLCBcInhodG1sXCIsIFwieG1sXCIsIFwieHNsXCJdKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBJLFxuICAgICAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgY1N0eWxlQ29tbWVudHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcImNcIiwgXCJjY1wiLCBcImNwcFwiLCBcImNzXCIsIFwiY3h4XCIsIFwiY3ljXCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBKLFxuICAgICAgICAgICAgY1N0eWxlQ29tbWVudHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcImphdmFcIl1cbiAgICApO1xuICAgIHEoXG4gICAgICAgIHIoe1xuICAgICAgICAgICAga2V5d29yZHM6IE8sXG4gICAgICAgICAgICBoYXNoQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgICBtdWx0aUxpbmVTdHJpbmdzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJic2hcIiwgXCJjc2hcIiwgXCJzaFwiXVxuICAgICk7XG4gICAgcShcbiAgICAgICAgcih7XG4gICAgICAgICAgICBrZXl3b3JkczogTSxcbiAgICAgICAgICAgIGhhc2hDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICAgIG11bHRpTGluZVN0cmluZ3M6IHRydWUsXG4gICAgICAgICAgICB0cmlwbGVRdW90ZWRTdHJpbmdzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJjdlwiLCBcInB5XCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBMLFxuICAgICAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgbXVsdGlMaW5lU3RyaW5nczogdHJ1ZSxcbiAgICAgICAgICAgIHJlZ2V4TGl0ZXJhbHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcInBlcmxcIiwgXCJwbFwiLCBcInBtXCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBOLFxuICAgICAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgbXVsdGlMaW5lU3RyaW5nczogdHJ1ZSxcbiAgICAgICAgICAgIHJlZ2V4TGl0ZXJhbHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcInJiXCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBLLFxuICAgICAgICAgICAgY1N0eWxlQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgICByZWdleExpdGVyYWxzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJqc1wiXVxuICAgICk7XG4gICAgZnVuY3Rpb24gVChiLCBhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYyA9IG5hKGIpLFxuICAgICAgICAgICAgICAgIGQgPSBjLnNvdXJjZSxcbiAgICAgICAgICAgICAgICBnID0gYy50YWdzO1xuICAgICAgICAgICAgaWYgKCFDLmhhc093blByb3BlcnR5KGEpKVxuICAgICAgICAgICAgICAgIGEgPSAvXlxccyo8Ly50ZXN0KGQpID8gXCJkZWZhdWx0LW1hcmt1cFwiIDogXCJkZWZhdWx0LWNvZGVcIjtcbiAgICAgICAgICAgIHZhciBlID0gQ1thXS5jYWxsKHt9LCBkKTtcbiAgICAgICAgICAgIHJldHVybiB2YShkLCBnLCBlKTtcbiAgICAgICAgfSBjYXRjaCAoaCkge1xuICAgICAgICAgICAgaWYgKFwiY29uc29sZVwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhKGIpIHtcbiAgICAgICAgdmFyIGEgPSBIKCksXG4gICAgICAgICAgICBjID0gW1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJlXCIpLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29kZVwiKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwieG1wXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBnID0gMDsgZyA8IGMubGVuZ3RoOyArK2cpXG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IGNbZ10ubGVuZ3RoOyArK2UpIGQucHVzaChjW2ddW2VdKTtcbiAgICAgICAgYyA9IG51bGw7XG4gICAgICAgIHZhciBoID0gMDtcbiAgICAgICAgZnVuY3Rpb24gZigpIHtcbiAgICAgICAgICAgIHZhciBpID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNTA7XG4gICAgICAgICAgICBmb3IgKDsgaCA8IGQubGVuZ3RoICYmIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgaTsgaCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGogPSBkW2hdO1xuICAgICAgICAgICAgICAgIGlmIChqLmNsYXNzTmFtZSAmJiBqLmNsYXNzTmFtZS5pbmRleE9mKFwicHJldHR5cHJpbnRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGouY2xhc3NOYW1lLm1hdGNoKC9cXGJsYW5nLShcXHcrKVxcYi8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobykgbyA9IG9bMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBqLnBhcmVudE5vZGU7IGs7IGsgPSBrLnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGsudGFnTmFtZSA9PT0gXCJwcmVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLnRhZ05hbWUgPT09IFwiY29kZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsudGFnTmFtZSA9PT0gXCJ4bXBcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLmNsYXNzTmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsuY2xhc3NOYW1lLmluZGV4T2YoXCJwcmV0dHlwcmludFwiKSA+PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGhhKGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IGwucmVwbGFjZSgvKD86XFxyXFxuP3xcXG4pJC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBUKGwsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTKGopKSBqLmlubmVySFRNTCA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQUkVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBqLmF0dHJpYnV0ZXMubGVuZ3RoOyArK3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBqLmF0dHJpYnV0ZXNbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3LnNwZWNpZmllZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKHcubmFtZSwgdy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHAsIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgai50YWdOYW1lID09PSBcIlBSRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSBqLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgQiA9IEEubGVuZ3RoOyAtLUIgPj0gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gQVtCXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoIDwgZC5sZW5ndGgpIHNldFRpbWVvdXQoZiwgMjUwKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGIpIGIoKTtcbiAgICAgICAgfVxuICAgICAgICBmKCk7XG4gICAgfVxuICAgIHdpbmRvdy5QUl9ub3JtYWxpemVkSHRtbCA9IHo7XG4gICAgd2luZG93LnByZXR0eVByaW50T25lID0gVDtcbiAgICB3aW5kb3cucHJldHR5UHJpbnQgPSB3YTtcbiAgICB3aW5kb3cuUFIgPSB7XG4gICAgICAgIGNyZWF0ZVNpbXBsZUxleGVyOiB2LFxuICAgICAgICByZWdpc3RlckxhbmdIYW5kbGVyOiBxLFxuICAgICAgICBzb3VyY2VEZWNvcmF0b3I6IHIsXG4gICAgICAgIFBSX0FUVFJJQl9OQU1FOiBcImF0blwiLFxuICAgICAgICBQUl9BVFRSSUJfVkFMVUU6IFwiYXR2XCIsXG4gICAgICAgIFBSX0NPTU1FTlQ6IFwiY29tXCIsXG4gICAgICAgIFBSX0RFQ0xBUkFUSU9OOiBcImRlY1wiLFxuICAgICAgICBQUl9LRVlXT1JEOiBcImt3ZFwiLFxuICAgICAgICBQUl9MSVRFUkFMOiBcImxpdFwiLFxuICAgICAgICBQUl9QTEFJTjogXCJwbG5cIixcbiAgICAgICAgUFJfUFVOQ1RVQVRJT046IFwicHVuXCIsXG4gICAgICAgIFBSX1NPVVJDRTogXCJzcmNcIixcbiAgICAgICAgUFJfU1RSSU5HOiBcInN0clwiLFxuICAgICAgICBQUl9UQUc6IFwidGFnXCIsXG4gICAgICAgIFBSX1RZUEU6IFwidHlwXCJcbiAgICB9O1xufSkoKTtcbiIsImltcG9ydCBQYXJzb25zIGZyb20gXCIuL3BhcnNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWRQYXJzb25zIGV4dGVuZHMgUGFyc29ucyB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgLy8gdG9kbyAtLSBtYWtlIHRoaXMgY29uZmlndXJhYmxlXG4gICAgICAgIGlmIChvcHRzLnRpbWVkZmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd2ZlZWRiYWNrID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd2ZlZWRiYWNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFkZXIuc2hvd2ZlZWRiYWNrID0gdGhpcy5zaG93ZmVlZGJhY2s7XG4gICAgICAgIHRoaXMuaGlkZUZlZWRiYWNrKCk7XG4gICAgICAgICQodGhpcy5jaGVja0J1dHRvbikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMuaGVscEJ1dHRvbikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMucmVzZXRCdXR0b24pLmhpZGUoKTtcbiAgICB9XG4gICAgY2hlY2tDb3JyZWN0VGltZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcnJlY3QgPyBcIlRcIiA6IFwiRlwiO1xuICAgIH1cbiAgICBoaWRlRmVlZGJhY2soKSB7XG4gICAgICAgICQodGhpcy5tZXNzYWdlRGl2KS5oaWRlKCk7XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5W1wicGFyc29uc1wiXSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgaWYgKG9wdHMudGltZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZFBhcnNvbnMob3B0cyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc29ucyhvcHRzKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=