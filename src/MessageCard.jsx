
function MessageCard({ name, message, time, image }) {
  return (
    <div className="message-card">

      <img src={image} alt={name} />

      <div className="message-content">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>

      <div className="message-right">
        <span>{time}</span>
        <span className="star">★</span>
      </div>

    </div>
  );
}

export default MessageCard;

