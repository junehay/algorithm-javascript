// data
const vertexs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const arcs = [
  ['a', 'b'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'd'],
  ['d', 'e'],
  ['d', 'h'],
  ['e', 'f'],
  ['f', 'g']
];

// graph
const graph = new Map();

function addvertex(vertex) {
  graph.set(vertex, []);
}

function addarc(origin, target) {
  graph.get(origin).push(target);
  graph.get(target).push(origin); // undirected graph
}

vertexs.forEach(addvertex);
arcs.forEach((arc) => addarc(...arc));

// console.log(graph);

// bfs
function bfs(start) {
  const visited = new Set();
  visited.add(start);
  const queue = [start];

  while (queue.length > 0) {
    const vertex = queue.shift();
    const targets = graph.get(vertex);

    for (const target of targets) {
      if (target === 'g') {
        console.log(`found : ${target}`);
        return target;
      }

      if (!visited.has(target)) {
        visited.add(target);
        queue.push(target);
        console.log(target);
      }
    }
  }
}

// console.log(bfs('a'))

// dfs
function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  const targets = graph.get(start);

  for (const target of targets) {
    if (target === 'g') {
      console.log(`found : ${target}`);
      break;
    }

    if (!visited.has(target)) {
      dfs(target, visited);
    }
  }
}

// console.log(dfs('a'))