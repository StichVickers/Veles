import React, { useState } from 'react';
import './radio.css'
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
};
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic for handling form submission, e.g., sending data to server
    console.log(`Имя: ${name}, Почта: ${email}, Сообщение: ${message}, Передано на сервер`);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');


    if (!agreeTerms) {
      toast.error("Пожалуйста, согласитесь с условиями и политикой конфиденциальности");
      return;
  }
  };

  return (
    <form onSubmit={handleSubmit} id='form_radio'>
      <div id='div_radio'>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Сообщение:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="termsCheckbox"
                        checked={agreeTerms}
                        onChange={handleCheckboxChange}
                    />
                    <br/>
                    <label htmlFor="termsCheckbox">
                        <span>Я соглашаюсь с <a href="/privacy" target="_blank">политикой конфиденциальности</a></span>
                    </label>
                </div>
      <button type="submit" id='radio_but'>Отправить</button>
    </form>
  );
};

export default FeedbackForm;