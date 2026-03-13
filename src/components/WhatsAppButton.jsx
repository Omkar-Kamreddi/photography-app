import "../styles/whatsapp.css";

function WhatsAppButton() {

  const phoneNumber = "919876543210"; // replace with your number

  const message = "Hello, I want to book a photography session.";

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;