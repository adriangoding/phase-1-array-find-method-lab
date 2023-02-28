// code your solution here
const record = []

function superbowlWin(record) {
    const win = record.find(entry => entry.result === 'W');
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
  }