/**
 * 22. Generate Parentheses
 */
var generateParenthesis = function (n) {
  let results = [];
  backtrack(n, n, "", results);
  return results;
};

function backtrack(open, close, curr, results) {
  if (open === 0 && close === 0) {
    results.push(curr);
    return;
  } else if (open === 0) {
    curr += ")".repeat(close);
    results.push(curr);
    return;
  }
  if (open <= close) {
    backtrack(open - 1, close, curr + "(", results);
  }
  if (open < close) {
    backtrack(open, close - 1, curr + ")", results);
  }
}

/**
 * 79. Word Search
 */
var exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;
  let visited = new Array(rows);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(cols).fill(false);
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (search(board, word, r, c, 0, rows, cols, visited)) {
        return true;
      }
    }
  }
  return false;
};

function search(board, word, r, c, idx, rows, cols, visited) {
  if (idx === word.length) return true;
  if (
    r < 0 ||
    c < 0 ||
    r >= rows ||
    c >= cols ||
    board[r][c] !== word[idx] ||
    visited[r][c]
  )
    return false;
  visited[r][c] = true;
  let result =
    search(board, word, r + 1, c, idx + 1, rows, cols, visited) ||
    search(board, word, r, c + 1, idx + 1, rows, cols, visited) ||
    search(board, word, r - 1, c, idx + 1, rows, cols, visited) ||
    search(board, word, r, c - 1, idx + 1, rows, cols, visited);
  visited[r][c] = false;
  return result;
}
