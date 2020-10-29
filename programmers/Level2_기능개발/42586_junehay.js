/*
	Date : 2020-10-06
*/

function solution(progresses, speeds) {
  let answer = [];
  let day = 0;
  while (progresses.length > 0) {
    while (progresses[0] < 100) {
        progresses[0] += speeds[0];
        day++; 
    }
    let count = 0;
    while (progresses[0] + (speeds[0] * day) >= 100) {
        progresses.shift();
        speeds.shift();
        count++;
    }
    if (progresses.length > 0) {
        progresses[0] += (speeds[0] * day);
    }
    answer.push(count);
  }
  return answer;
}

// test
solution([93, 30, 55], [1, 30, 5]); // return [2, 1]