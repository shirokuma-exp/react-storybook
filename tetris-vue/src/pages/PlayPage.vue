<script lang="ts" setup>


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

const classBlockColor = (xIndex: number, yIndex: number): string => {
  const type = field[yIndex][xIndex];
  if (type > 0) {
    switch (type) {
      case 1:
        return "block-i";
      case 2:
        return "block-o";
      case 3:
        return "block-s";
      case 4:
        return "block-z";
      case 5:
        return "block-j";
      case 6:
        return "block-l";
      case 7:
        return "block-t";
      default:
        return "";
    }
  }
}

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
            v-bind:class="classBlockColor(xIndex, yIndex)"
          >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  &-i {
    background-color: #3498db;
  }
  &-o {
    background-color: #f1c40f;
  }
  &-t {
    background-color: #9b59b6;
  }
  &-j {
    background-color: #1e3799;
  }
  &-l {
    background-color: #e67e22;
  }
  &-s {
    background-color: #2ecc71;
  }
  &-z {
    background-color: #e74c3c;
  }
}
</style>
