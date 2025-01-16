export function isLucky(ticket) {
  if (ticket.length !== 6) {
    return false;
  }
  if (
    Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2]) ===
    Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5])
  ) {
    return true;
  } else {
    return false;
  }
}
