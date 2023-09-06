function solution(name) {
    const moves = {
      'A' : 0,
      'B' : 1,
      'C' : 2,
      'D' : 3,
      'E' : 4,
      'F' : 5,
      'G' : 6,
      'H' : 7,
      'I' : 8,
      'J' : 9,
      'K' : 10,
      'L' : 11,
      'M' : 12,
      'N' : 13,
      'O' : 12,
      'P' : 11,
      'Q' : 10,
      'R' : 9,
      'S' : 8,
      'T' : 7,
      'U' : 6,
      'V' : 5,
      'W' : 4,
      'X' : 3,
      'Y' : 2,
      'Z' : 1
    }
    
    let defaultArr = new Array(name.length).fill('A');
    let answer = 0;
    
    let nums = name.split('').map((letter) => {
        for (const [alphabet, move] of Object.entries(moves)) {
            if (letter === alphabet) {
                return move;
            }
        }
    });
    
    // 가장 먼 거리를 Default로
    let minMove = nums.length - 1;
    
    nums.forEach((num, idx) => {
        answer += num;
        // 다음 커서
        let cursor = idx + 1; 
        // 처음부터 끝까지 0이 아닌 수 탐색
        while(cursor < nums.length && nums[cursor] === 0) cursor++;
        
        minMove = Math.min(minMove, 
// 해당 인덱스까지 정방향으로 갔다가 뒤돌아서 문자열 뒤로 돌아가서 나머지까지 채우기
                          (idx * 2) + nums.length - cursor,
// 해당 인덱스까지 후방향으로 갔다가 다시 앞으로 가서 처음부터 채우기 
                          idx + 2 * (nums.length - cursor));
    })
    
    return answer + minMove;
}