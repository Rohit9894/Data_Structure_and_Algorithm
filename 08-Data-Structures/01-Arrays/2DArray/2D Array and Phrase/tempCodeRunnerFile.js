    if (j < m - 3 && i < n - 3) {
      line =
        matrix[i + 3][j] +
        matrix[i + 2][j + 1] +
        matrix[i + 1][j + 2] +
        matrix[i][j + 3];
      if (line == "saba") {
        count += 1;
      }
    }