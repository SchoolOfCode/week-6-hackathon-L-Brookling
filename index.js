export function isLucky(ticket) {
  if (!ticket) {
    return "Ticket not provided";
  }
  if (ticket.length === 6) {
    if (
      Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2]) ===
      Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5])
    ) {
      return true;
    }
  }
  return false;
}

// if (typeof ticket === "number") {
//   return "Ticket must be of type string";
// }
