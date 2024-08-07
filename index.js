function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 방향 벡터 (상, 하, 좌, 우)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // BFS를 위한 큐와 시작 지점 설정
  const queue = [[0, 0, 1]]; // [행, 열, 현재까지의 거리]
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  console.log(visited);
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    // 도착 지점에 도달하면 거리 반환
    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    // 네 방향으로 이동
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 맵 범위 내에 있고, 벽이 아니며, 방문하지 않은 지점이라면 큐에 추가
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }

  // 도착 지점에 도달할 수 없을 경우 -1 반환
  return -1;
}

// 예제 테스트
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]); // 출력: 11
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);
// 출력: -1
