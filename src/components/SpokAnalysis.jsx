export function getSentencePattern(words, table) {
  let hasS = false;
  let hasP = false;
  let hasO = false;
  let hasK = false;

  for (let i = 0; i < words.length; i++) {
    if (table[i][i]?.includes("FN")) {
      hasS = true;
      break;
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (
      table[i][i]?.includes("KK") ||
      table[i][i]?.includes("FV") ||
      table[i][i]?.includes("FA")
    ) {
      hasP = true;
      break;
    }
  }

  for (let i = 1; i < words.length; i++) {
    if (
      table[i - 1][i - 1]?.includes("KK") &&
      table[i][i]?.includes("FN")
    ) {
      hasO = true;
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (
      table[i][i]?.includes("KD") &&
      table[i + 1][i + 1]?.includes("FN")
    ) {
      hasK = true;
    }
  }

  if (hasS && hasK && !hasP) return "S–K";

  let pattern = "S";
  if (hasP) pattern += "–P";
  if (hasO) pattern += "–O";
  if (hasK) pattern += "–K";

  return pattern;
}
