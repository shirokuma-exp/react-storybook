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

const TETROMINO_TYPE = {
I: 1,
O: 2,
S: 3,
Z: 4,
J: 5,
L: 6,
T: 7,
} as const;
// 定数群の値をユニオン型のメンバとして宣言(1,2,3,...,7)
export type TETROMINO_TYPE = typeof TETROMINO_TYPE[keyof typeof TETROMINO_TYPE];

// プログラム上でテトロミノを扱うためのクラス定義
export class Tetromino {
  // クラス変数でテトロミノの種類を持つ
  private type: TETROMINO_TYPE

  // constructor の引数にはテトロミノの種類を指定
  constructor (type: TETROMINO_TYPE) {
    this.type = type;
  }

  // 各テトロミノに対応した CSS のクラス名(識別子)を取得する関数
  static id(type: TETROMINO_TYPE): string {
    switch(type) {
      case TETROMINO_TYPE.I:
        return "block-i";
      case TETROMINO_TYPE.O:
        return "block-o";
      case TETROMINO_TYPE.S:
        return "block-s";
      case TETROMINO_TYPE.Z:
        return "block-z";
      case TETROMINO_TYPE.J:
        return "block-j";
      case TETROMINO_TYPE.L:
        return "block-l";
      case TETROMINO_TYPE.T:
        return "block-t";
      default:
        return "";
    }
  }

  // 自身のテトロミノの二次元配列を取得
  get data(): number[][] {
    return tetrominos[this.type];
  }

  // ランダムな種類のテトロミノを取得
  static random(): Tetromino {
    // 1 - 7までの数値を取得(空白以外のテトロミノの種類を取得)
    const tetrominoTypeLength = tetrominos.length - 1;
    const randomSelectedType = Math.floor(Math.random() * tetrominoTypeLength) + 1;

    // randomSelectedType の数値を TETROMINO_TYPE として扱う
    return new Tetromino(randomSelectedType as TETROMINO_TYPE);
  }
}


