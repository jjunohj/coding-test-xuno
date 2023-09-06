function solution(n, lost, reserve) {
    var answer = 0;
    
    // 0 ~ n-1 
    let students = Array(n).fill(1);
    
    // 잃어버린 놈들은 0벌로
    lost.map((lostStudent) => {students[lostStudent - 1] = 0});

    // 두 벌 가져온 놈들은 +1벌
    reserve.map((reserveStudent) => {students[reserveStudent - 1] += 1});
    
    for (let i = 0; i < n; i++) {
        if (students[i] === 0 && students[i - 1] === 2) {
            students[i] = 1;
            students[i - 1] = 1;
        } else if (students[i] === 0 && students[i + 1] === 2) {
            students[i] = 1;
            students[i + 1] = 1;
        }
    }

    students.forEach((stu) => {
        if (stu > 0) answer += 1;
    })

    return answer;
}