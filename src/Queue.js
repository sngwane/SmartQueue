import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Queue = () => {
  const history = useHistory();

  const [ticketNo, setTicketNo] = useState(0);
  const [counterNo, setCounterNo] = useState(0);
  const [tickets, setTickets] = useState([
    { no: 1058, service: "accounts" },
    { no: 2548, service: "accounts" },
    { no: 3659, service: "banking" },
    { no: 5284, service: "accounts" },
    { no: 6392, service: "accounts" },
    { no: 4478, service: "accounts" },
    { no: 5520, service: "accounts" }
  ]);

  let counters = [];
  [1, 2, 3, 4, 5].forEach((element) => {
    counters.push({
      no: element,
      busy: false
      //service: ["accounts", "banking"]
    });
  });

  const handleClick = () => {
    history.push("/welcome");
  };

  const handleCounterCall = (counter) => {
    if (!counter.busy) {
      if (tickets.length > 0) {
        const random = Math.floor(Math.random() * tickets.length);
        const ticket = tickets[random];
        setTicketNo(ticket.no);

        //remove ticket from list
        setTickets(tickets.filter((x) => x.no !== ticket.no));

        counter.busy = true;

        setCounterNo(counter.no);
      } else {
        setTicketNo(0);
      }
    }
  };

  const QueuePanel = () => {
    return (
      <div className="d-flex flex-column">
        <div className="p-2">TICKET#</div>
        <div className="p-2 queue-no">{ticketNo}</div>
        <div className="p-2">PROCEED TO COUNTER</div>
        <div className="p-2 queue-no">{counterNo}</div>
      </div>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-3 queue-list">
          <table className="table">
            <thead>
              <tr>
                <th>Ticket #</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.no}>
                  <td>{ticket.no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="queue">
          <div className="d-inline p-2 ">
            {tickets.length > 0 && ticketNo !== 0 ? (
              <QueuePanel />
            ) : (
              <div>We are glad to help.. Stay blessed.</div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <br />
          <button className="btn-primary" onClick={handleClick}>
            Back to login
          </button>
          <br />
          <br />
          {counters.map((counter) => (
            <button
              key={counter.no}
              className="btn-secondary"
              onClick={(x) => handleCounterCall(counter)}
            >
              Counter {counter.no}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
