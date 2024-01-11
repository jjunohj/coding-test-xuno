const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
let stats = [[],[],[],[],[],[],[],[],[],[],[]];
let list = [];
let numbers = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let answer = [];
let check = [];
rl.on('line', function (line) {
  input.push(line);
})
  .on('close', async function () {
  // 답안 작성
  const n = input.shift()*1;
  let tmp = input[0].split('');  
  check = new Array(22).fill(false);  
  for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
      stats[i][j] = tmp.shift();      
    }
  }
  re(0, 21, n);
  console.log(answer.join(''));
  process.exit();
});

let check_result = function(array,n){
  
  let result = true;
  let sum = 0;
  let check;
  for(let i=n;i>=0;i--){
    sum += array[i]*1;
    if(sum<0)check='-';
    else if(sum>0)check='+';
    else check='0';
    if(check == stats[i][n])continue;
    else{
      result = false;
      break;
    }
  }
  return result;
}

let re = function(cnt,numbers_length,n){    
  if(cnt===n){            
    answer.push(list.join(' '));    
    return ;
  }
  for(let i=0;i<numbers_length;i++){   
    if(answer.length>0)return;
    list[cnt] = numbers[i];    
    if(check_result(list,cnt)){      
      re(cnt+1,numbers_length,n);
    }
  }
  return ;
}