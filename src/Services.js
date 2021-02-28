import { Service } from "./Service";

export const Services = () => {
  let services = [
    { name: "Accounts" },
    { name: "Advancing of Loans" },
    { name: "Overdraft" },
    { name: "Discounting of Bills of Exchange" },
    { name: "Check/Cheque Payment" },
    { name: "Collection and Payment Of Credit Instruments" },
    { name: "Foreign Currency Exchange" },
    { name: "Consultancy" },
    { name: "Bank Guarantee" },
    { name: "Remittance of Funds" },
    { name: "Credit cards" },
    { name: "ATMs Services" },
    { name: "Debit cards" },
    { name: "Home banking" },
    { name: "Online banking" },
    { name: "Mobile Banking" },
    { name: "Accepting Deposit" },
    { name: "Priority banking" },
    { name: "Private banking" }
  ];

  return (
    <ul className="list-group">
      {services.map((service) => (
        <Service key={service.name} service={service} />
      ))}
    </ul>
  );
};
