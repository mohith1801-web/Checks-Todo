function Card({ title, description, color }) {
  return (
    <div className={`${color} p-5 rounded-lg shadow`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;