function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-GB", { month: "short" });
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className="text">{day}</div>
      <div className="text">{month}</div>
      <div className="text">{year}</div>
    </div>
  );
}

export default ExpenseDate;
