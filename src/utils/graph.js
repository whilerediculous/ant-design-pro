/*
Copyright (c) 2019 Tencent Inc.
Author: admondfang <admondfang@tencent.com>
Desc: class Graph
*/

class AdjvexNode {
  constructor(node) {
    this.node = node; // always node name
    this.next = null;
    this.in = -1;
    this.out = -1;
  }
}

function getNamedLinksContainTailEdge(links) {
  const fullLinks = Object.assign([], ...links);
  const allFrom = [];
  const allTo = [];
  fullLinks.forEach(item => {
    allFrom.push(item.from);
    if (item.to) {
      allTo.push(item.to);
    }
  });
  const trailToList = allTo.filter(item => allFrom.indexOf(item) < 0);
  trailToList.forEach(item => {
    fullLinks.push({ from: item, to: null });
  });
  return fullLinks;
}

function getUniqueNodes(edges) {
  const elements = [];

  edges.forEach(edge => {
    if (edge.from !== null && elements.indexOf(edge.from) < 0) {
      elements.push(edge.from);
    }
    if (edge.to !== null && elements.indexOf(edge.to) < 0) {
      elements.push(edge.to);
    }
  });
  return elements;
}

function getNodeIndegreeFromAdjlist(nodeName, adjList) {
  let degree = 0;

  Object.keys().forEach(key => {
    let node = adjList[key].next;
    while (node) {
      if (node.node === nodeName) {
        degree += 1;
        break;
      }
      node = node.next;
    }
  });
  return degree;
}

function getNamedLinks(edges, deployments) {
  const links = [];
  edges.forEach(item => {
    const edge = { from: null, to: null };
    deployments.forEach(deploy => {
      if (item.from && item.from === deploy.id) {
        edge.from = deploy.name;
      }
      if (item.to && item.to === deploy.id) {
        edge.to = deploy.name;
      }
    });
    links.push(edge);
  });
  return links;
}

/*
 return [{source: xx, target: xx},]
*/
function getValidLinks(vedge) {
  const links = [];
  vedge.forEach(edge => {
    if (edge.from && edge.to) {
      links.push({ source: edge.from, target: edge.to });
    }
  });
  return links;
}

function getEdgeIndex(edges, fromKey) {
  return edges.findIndex(index => edges[index].from && edges[index].from === fromKey);
}

// get_graph_data(route_list,deploy_info,['version', 'address', 'message'], ['color'])
function getDeepVec(routeList, deployInfos) {
  const deepVec = [];
  const namedEdges = getNamedLinks(routeList, deployInfos);
  let edgeList = Object.assign([], { ...namedEdges });
  while (1) {
    const stack = [];
    const adjList = [];
    const uniqueNodes = getUniqueNodes(edgeList);
    uniqueNodes.forEach(item => {
      adjList[item] = new AdjvexNode(item);
    });
    edgeList.forEach(edge => {
      if (edge.to) {
        const node = new AdjvexNode(edge.to);
        node.next = adjList[edge.from].next;
        adjList[edge.from].next = node;
      }
    });

    const inDegree = [];
    Object.keys(adjList).forEach(key => {
      const degree = getNodeIndegreeFromAdjlist(key, adjList);
      inDegree[key] = degree;
    });
    const deleteIndexs = [];
    // eslint-disable-next-line no-loop-func
    Object.keys(inDegree).forEach(key => {
      if (inDegree[key] === 0) {
        stack.push(key);
        const index = getEdgeIndex(edgeList, key);
        deleteIndexs.push(index);
      }
    });

    edgeList = edgeList.filter(index => deleteIndexs.indexOf(index) < 0);
    if (stack.length === 0) {
      return deepVec;
    }
    deepVec.push(stack);
  }
}

/**
 * @construct param elemnets_info [{name:'',color:'',version:'',address:'',message:''},...]
 * @construct param vedge edge array
 */

function getObjValueByKey(indexKey, field, obj) {
  let value = '';
  obj.forEach(item => {
    if (item.name === indexKey) {
      value = item[field];
    }
  });
  return value;
}

/*
@in_vec  graph in degree vector
@elemnets_info   [{}],gerneral node atrribute
@tip_keys  [] keys part of  elemnets_info and need show in tip
@style_keys  current value ‘color’
*/
function getGraphData(routes, elementsInfos, tipKeys, styleKeys) {
  const vedge = getNamedLinks(routes, elementsInfos);
  const links = getValidLinks(vedge);
  const inDegreeVec = getDeepVec(vedge);
  const data = [];
  inDegreeVec.forEach((item, inDegree) => {
    item.forEach((node, rowIndex) => {
      const values = [];
      const styles = {};
      tipKeys.forEach(tipName => {
        const tipValue = getObjValueByKey(node, tipName, elementsInfos);
        if (tipValue) {
          values.push({ name: tipName, value: tipValue });
        }
      });
      styleKeys.forEach(styleKey => {
        const styleValue = getObjValueByKey(node, styleKey, elementsInfos);
        if (styleValue) {
          styles[styleKey] = styleValue;
        }
      });
      data.push({
        name: node,
        x: 70 * (inDegree + 1),
        y: (rowIndex + 1) * 70,
        value: values,
        itemStyle: styles,
      });
    });
  });
  return { data, links };
}
export { getDeepVec, getGraphData };
