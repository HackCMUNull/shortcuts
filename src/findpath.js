export const nodeMap = {}
export const roomMap = {}

export class Node {
  constructor(id, name, rooms, links, building, floor, x, y) {
    this.id = id
    this.name = name || ""
    this.links = links || []
    this.rooms = rooms || []
    this.rooms.forEach((room) => { roomMap[room] = this })
    nodeMap[id] = this
    this.building = building || 0 // 1: Doherty; 2: Wean
    this.floor = floor || 0  // floor number
    this.x = x || 0
    this.y = y || 0
  }

  isRoom (room) {
    return this.rooms.some((element) => element === room)
  }
}

export class Graph {
  constructor(nodes) {
    this.nodes = nodes || []
  }

  addNode(node) {
    this.nodes.push(node)
  }

  addPath(index1, index2) {
    this.nodes[index1].links.push(this.nodes[index2])
    this.nodes[index2].links.push(this.nodes[index1])
  }

  getDpath(start, target) {
    const seq = []
    const get = this.Dijkstra(start)
    const dist = get[0]
    const prev = get[1]
    let nodeU = target
    while (prev[nodeU.id] !== null) {
      seq.unshift(nodeU)
      console.log('dpath', nodeU)
      console.log(prev[nodeU.id])
      nodeU = nodeMap[prev[nodeU.id]]
    }
    seq.unshift(nodeU)
    return seq
  }

  Dijkstra(start) {
    let vertexQ = []
    const dist = {}
    const prev = {}

    let nodeU = null

    this.nodes.forEach((node) => {
      dist[node.id] = Infinity
      prev[node.id] = null
      vertexQ.push(node.id)
    })
    dist[start.id] = 0
    console.log(dist)

    while (vertexQ.length > 0) {
      let sorted_dist = Object.keys(dist).map((key) => {
        return {
          key,
          value: dist[key]
        }
      }).sort((a, b) => {
        return a.value - b.value
      }) // sorted(dist.items(), key = operator.itemgetter(1))

      // console.log(sorted_dist)
      nodeU = sorted_dist
        .map((tuple) => tuple.key)
        .find((element) => vertexQ.indexOf(element) > -1)
      console.log('nodeU', nodeU)
      vertexQ = vertexQ.filter((element) => element !== nodeU)
      nodeMap[nodeU].links.forEach((neighbor) => {
        const alt = dist[nodeU] + 1
        console.log(nodeU, alt)
        if (alt < dist[neighbor]) {
          dist[neighbor] = alt
          prev[neighbor] = nodeU
        }
      })
    }

    return [dist, prev]
  }
}

export const nodes = [
  // DH Floor 1 Section 1
  new Node(
    "D62BD21F-DF61-4A23-894B-9238A3DAEE8C",
    "DH Entrance",
    ["1100", "1101", "1102", "1105", "1107", "1106", "1103", "1104", "1108", "1109", "1110", "1111", "1142"],
    ["7D7A2050-7146-4AAA-B9DA-F0C41810E471", "9B108D46-9CB0-4937-ADAA-4DF6B15780B6"], // DH H 1, St 2105
    1,
    1,
  ),
  new Node(
    "7D7A2050-7146-4AAA-B9DA-F0C41810E471",
    "DH Hallway 1",
    ["1112", "1117"],
    ["D62BD21F-DF61-4A23-894B-9238A3DAEE8C", "3228C385-DB74-411E-A579-626CFF03879E"], // DH E, DH H 2
    1,
    1,
  ),
  new Node(
    "3228C385-DB74-411E-A579-626CFF03879E",
    "DH Hallway 2",
    ["1206", "1207", "1208", "1205"],
    ["7D7A2050-7146-4AAA-B9DA-F0C41810E471",
      "ED514616-FEA3-495F-93AD-105DBA42BE53",
      "F8A8643A-9326-414B-B8EB-667F0866AFFD"], // DH H 1, DH H 3, DH H 2A
    1,
    1,
  ),
  new Node(
    "ED514616-FEA3-495F-93AD-105DBA42BE53",
    "DH Hallway 3",
    ["1201", "1202"],
    ["3228C385-DB74-411E-A579-626CFF03879E", "86BA098D-9C5F-404B-A503-C77709398463"], // DH H 2, St 1235
    1,
    1,
  ),
  new Node(
    "86BA098D-9C5F-404B-A503-C77709398463",
    "Stair 1235",
    ["1200", "1232", "1210"],
    ["ED514616-FEA3-495F-93AD-105DBA42BE53",
      "9291563E-844D-4045-9B88-18770E4AEC5F",
      "EA5A8F8A-C60B-4980-84D6-74A008B338C3"], // DH H 3, Hw 1230, St 2251
    1,
    1,
    278,
    300,
  ),
  new Node(
    "9291563E-844D-4045-9B88-18770E4AEC5F",
    "Hallway 1230",
    ["1217", "1211", "1212"],
    ["86BA098D-9C5F-404B-A503-C77709398463"], // St 1235
    1,
    1,
    306,
    300,
  ),
  new Node(
    "F8A8643A-9326-414B-B8EB-667F0866AFFD",
    "DH Hallway 2A",
    ["1271", "1203"],
    ["3228C385-DB74-411E-A579-626CFF03879E"], // DH H 2, St 1275
    1,
    1,
  ),
  new Node(
    "04C654E5-B831-4312-AE81-6AA03834DA9D",
    "Stair 1275",
    ["1273", "1274"],
    ["3228C385-DB74-411E-A579-626CFF03879E", "57E066E5-80E4-4740-9B2E-33D671EDEBFB"], // DH H 2A, St 2275
    1,
    1,
  ),
  // DH Floor 1 Section 2
  new Node(
    "B31DD3DB-608C-444E-BF2A-7DF38C7403AE",
    "Stair 1302",
    ["1302"],
    ["64D50147-3DFC-4DCA-B11D-C930A32C1DDD"], // 1302A
    1,
    1,
  ),
  new Node(
    "64D50147-3DFC-4DCA-B11D-C930A32C1DDD",
    "1302A",
    [],
    ["B31DD3DB-608C-444E-BF2A-7DF38C7403AE", "CCB6CBB8-920C-4F53-A83C-3B75B6A1315D"], //St 1302, 1302B
    1,
    1,
  ),
  new Node(
    "CCB6CBB8-920C-4F53-A83C-3B75B6A1315D",
    "1302B",
    [],
    ["64D50147-3DFC-4DCA-B11D-C930A32C1DDD", "22A2B792-A37D-46ED-B3CC-37F03FBF70B3"], // 1302A, H 1350
    1,
    1,
  ),
  new Node(
    "22A2B792-A37D-46ED-B3CC-37F03FBF70B3",
    "Hallway 1350",
    ["1315", "1316", "1317"],
    ["CCB6CBB8-920C-4F53-A83C-3B75B6A1315D", "AF3D6C31-ECA8-49F9-B5D3-191A885D9552"], // 1302B, St 1353
    1,
    1,
  ),
  new Node(
    "AF3D6C31-ECA8-49F9-B5D3-191A885D9552",
    "Stair 1353",
    ["1314", "1318", "1319", "1350", "1300", "1355", "1356"],
    ["22A2B792-A37D-46ED-B3CC-37F03FBF70B3",
      "D2CA8705-D0B2-4FE9-BA32-9CBEEDFAC821",
      "D8A16C7A-DA6A-49E5-9E0B-DA6769A04CEC",
      "E2A466DF-50E1-4273-A811-35F67E4BF0B1"], // H 1350, H 1354, DW, St 2351
    1,
    1,
    278,
    513,
  ),
  new Node(
    "D2CA8705-D0B2-4FE9-BA32-9CBEEDFAC821",
    "Hallway 1354",
    ["1319", "1320", "1321", "1322", "1323", "1324", "1325"],
    ["AF3D6C31-ECA8-49F9-B5D3-191A885D9552"], // St 1353
    1,
    1,
    306,
    513,
  ),
  new Node(
    "D8A16C7A-DA6A-49E5-9E0B-DA6769A04CEC",
    "Doherty-Wean Bridge",
    [],
    ["AF3D6C31-ECA8-49F9-B5D3-191A885D9552"], // St 1353
    1,
    1,
  ),
  // DH Floor 2
  new Node(
    "9B108D46-9CB0-4937-ADAA-4DF6B15780B6",
    "Stair 2105",
    [],
    ["D62BD21F-DF61-4A23-894B-9238A3DAEE8C", "339D69F8-C85A-4A6D-B436-174F765EEDB3"], // DH E, H 2150
    1,
    2,
  ),
  new Node(
    "339D69F8-C85A-4A6D-B436-174F765EEDB3",
    "Hallway 2150",
    ["2103", "2100", "2101", "2104", "2108", "2110", "2111", "2112", "2113", "2114", "2115", "2116", "2132", "2120"],
    ["9B108D46-9CB0-4937-ADAA-4DF6B15780B6", "34334498-08CC-4673-AC88-FCF358E044AF"], // St 2105, H 2150A
    1,
    2,
  ),
  new Node(
    "34334498-08CC-4673-AC88-FCF358E044AF",
    "Hallway 2150A",
    ["2105", "2122"],
    ["339D69F8-C85A-4A6D-B436-174F765EEDB3", "9C72A296-006A-426F-9B45-AC592229C393"], // H 2150, H 2150B
    1,
    2,
  ),
  new Node(
    "9C72A296-006A-426F-9B45-AC592229C393",
    "Hallway 2150B",
    ["2208"],
    ["34334498-08CC-4673-AC88-FCF358E044AF",
      "DA4CA8E9-FC24-4353-B9C1-281027DF7EB8",
      "EA5A8F8A-C60B-4980-84D6-74A008B338C3"], // H 2150A, H 2270, St 2251
    1,
    2,
  ),
  new Node(
    "DA4CA8E9-FC24-4353-B9C1-281027DF7EB8",
    "Hallway 2270",
    ["2271", "2207", "2202", "2203", "2204"],
    ["9C72A296-006A-426F-9B45-AC592229C393", "57E066E5-80E4-4740-9B2E-33D671EDEBFB"], // H 2150B, St 2275
    1,
    2,
  ),
  new Node(
    "57E066E5-80E4-4740-9B2E-33D671EDEBFB",
    "Stair 2275",
    ["2276", "2273", "2274", "2206"],
    ["DA4CA8E9-FC24-4353-B9C1-281027DF7EB8", "04C654E5-B831-4312-AE81-6AA03834DA9D"], // H 2270, St 1275
    1,
    2,
  ),
  new Node(
    "EA5A8F8A-C60B-4980-84D6-74A008B338C3",
    "Stair 2251",
    ["2210", "2224", "2252", "2200", "2201"],
    ["9C72A296-006A-426F-9B45-AC592229C393",
      "86BA098D-9C5F-404B-A503-C77709398463",
      "5249000E-2C8E-4CA4-90D7-E15FEAC21107"], // H 2150B, St 1235, H 2350
    1,
    2,
    246,
    292,
  ),
  new Node(
    "5249000E-2C8E-4CA4-90D7-E15FEAC21107",
    "Hallway 2350",
    ["2311", "2312", "2303"],
    ["EA5A8F8A-C60B-4980-84D6-74A008B338C3", "CF0F2B75-DB08-4D77-A23D-29856C242BC5"], // St 2251, H 2350A
    1,
    2,
    246,
    351,
  ),
  new Node(
    "CF0F2B75-DB08-4D77-A23D-29856C242BC5",
    "Hallway 2350A",
    ["2302", "2313"],
    ["5249000E-2C8E-4CA4-90D7-E15FEAC21107", "E2A466DF-50E1-4273-A811-35F67E4BF0B1"], // H 2350, St 2351
    1,
    2,
    246,
    423,
  ),
  new Node(
    "E2A466DF-50E1-4273-A811-35F67E4BF0B1",
    "Stair 2351",
    ["2300", "2301", "2315"],
    ["CF0F2B75-DB08-4D77-A23D-29856C242BC5",
      "AF3D6C31-ECA8-49F9-B5D3-191A885D9552",
      "7807CCB2-7D56-458F-86FC-D2255ACF554F"], // H 2350A, St 1353, DW 2
    1,
    2,
    246,
    502,
  ),
  new Node(
    "7807CCB2-7D56-458F-86FC-D2255ACF554F",
    "Doherty-Wean Bridge 2",
    [],
    ["E2A466DF-50E1-4273-A811-35F67E4BF0B1"], // St 2351
    1,
    2,
  )
].map((node) => {
  if (node['x'] && node['y']) {
    node.x = node.x / 414
    node.y = node.y / 608
  }
  return node
})

export const graph = new Graph(nodes)
