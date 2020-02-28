
/*
  시간복잡도 O(n^2)을 목표로..
*/

/*
  1. 현재 블록을 채운다.
  2. 다음 블록의 위치 값과 상태 값을 확인한다.
  3. 위치 값이 범위를 벗어나면 방향을 바꾼다.
  4. 상태 값이 존재하면 방향을 바꾼다.
  5. 방향에 따라 현재 위치 값을 변경한다.
  
*/

/*
  n=4

  [0,0] [0,1] [0,2] [0,3] [0,n]
  [1,0] [1,1] [1,2] [1,3]
  [2,0] [2,1] [2,2] [2,3]
  [3,0] [3,1] [3,2] [3,3]
                    [4,3]
*/
function snail(n){
  const DIRECTION = ['RIGHT', 'DOWN', 'LEFT', 'UP'];
  let DIR = DIRECTION[0]; // 방향 값

  //Array 생성
  const arr = [];
  for(let i = 0; i < n; i++){
    arr.push(new Array(n).fill(0));
  }

  let cnt = 1;

  let ROW= 0, COL = 0;  // 다음 포지션
  let row = 0, col = 0; // 현재 포지션

  while(cnt <= n*n){
    arr[row][col] = cnt;
    cnt++;
    // 다음 위치값 변경
    if(DIR === 'RIGHT'){
      COL++;
    }
    if(DIR === 'LEFT'){
      COL--;
    }
    if(DIR === 'DOWN'){
      ROW++;
    }
    if(DIR === 'UP'){
      ROW--;
    }
    if( (ROW === 0 && COL=== 0) || (ROW === 0 && COL === n) || (ROW === n && COL === n-1) || (ROW === n-1 && COL === -1) || arr[ROW][COL] ){
      DIRECTION.push(DIRECTION.shift());
      DIR = DIRECTION[0];
      if(DIR === 'RIGHT'){
        col++;
      }
      if(DIR === 'LEFT' ){
        col--;
      }
      if(DIR === 'DOWN' ){
        row++;
      }
      if(DIR === 'UP' ){
        row--;
      }
      ROW = row;
      COL = col;
    }else{
      row = ROW;
      col = COL;
    }
  
  }
  console.log(arr);
};

snail(4);
snail(5);
snail(6);
