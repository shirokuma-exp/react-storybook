<script lang="ts" setup>
const tetrominos = [
  [
    // 0: blank
    [0],
  ],
  [
    // 1: I-tetromino(lightBlue)
    [1, 1, 1, 1],
  ],
  [
    // 2: O-tetromino(yellow)
    [2, 2],
    [2, 2],
  ],
  [
    // 3: S-tetromino(green)
    [0, 3, 3],
    [3, 3, 0],
  ],
  [
    // 4: Z-tetromino(red)
    [4, 4, 0],
    [0, 4, 4],
  ],
  [
    // 5: J-tetromino(blue)
    [0, 0, 5],
    [5, 5, 5],
  ],
  [
    // 6: L-tetromino(orange)
    [6, 0, 0],
    [6, 6, 6],
  ],
  [
    // 7: T-tetrimino(purple)
    [0, 7, 0],
    [7, 7, 7],
  ]
];


// 縦20行
const row = 20;
// 縦20行のデータを保持する配列を作成
const field = new Array(row);

// 横10列
const column = 10;
// 行 (row) の数だけ繰り返し縦10列のデータを作成
for (let i = 0;i < row;i++) {
  // 横10列のデータを保持する配列
  // fill関数を利用してすべての要素に0を設定
  const fieldColumn = new Array(column).fill(0);

  // 横10列のデータを保持する配列を行ごとに保持（二次元配列）
  field[i] = fieldColumn;
}

console.log("field", field);

// 画面最上部の左端に縦のI-tetromino を配置
field[0][0] = 1;
field[1][0] = 1;
field[2][0] = 1;
field[3][0] = 1;

</script>

<template>
  <div>
    <h1>プレイ画面</h1>
    <h2>ユーザ名： {{ $route.query.name }}</h2>

    <div class="container">
      <table class="field">
        <tr
          v-for="(row, yIndex) in field"
          :key="yIndex"
        >
          <td
            class="block"
            v-for="(column, xIndex) in row"
            :key="() => `${xIndex}${yIndex}`"
          >
            {{ column }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.field {
  border-collapse: collapse;
  border: ridge 0.4em #2c3e50;
  border-top: none;
}
.block {
  width: 1em;
  height: 1em;
  border: 0.1em solid #95a5a6;
}
</style>
