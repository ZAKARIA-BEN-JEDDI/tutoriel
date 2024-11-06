import { useReducer, useRef, useState } from "react";

export default function useReducerHook() {
  const NameValue = useRef("");
  const EmailValue = useRef("");
  const MessageValue = useRef("");

  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "NameInput":
        return { ...state, name: action.value };
      case "EmailInput":
        return { ...state, email: action.value };
      case "MessageInput":
        return { ...state, message: action.value };
      default:
        return state;
    }
  };

  const [formValues, dispatch] = useReducer(formReducer, initialFormState);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "NameInput", value: NameValue.current.value });
    dispatch({ type: "EmailInput", value: EmailValue.current.value });
    dispatch({ type: "MessageInput", value: MessageValue.current.value });
    validateInput();
  };

  const handleChange = () => {
    validateInput();
  };

  const validateInput = () => {
    const newErrors = [];

    if (MessageValue.current.value.trim().length < 10) {
      newErrors.push("Le message doit contenir plus de 10 caractères !");
    }
    if (!NameValue.current.value.trim().match(/^[a-zA-Zàâäéèêëïîôöùûüç]+$/)) {
      newErrors.push("Veuillez saisir un nom valide.");
    }
    if (
      !EmailValue.current.value
        .trim()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      newErrors.push("Adresse e-mail non valide.");
    }

    setErrors(newErrors);
  };

  return (
    <div className="container mt-5">
      {errors.length > 0 && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          ref={NameValue}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Entrez votre nom.</small>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          ref={EmailValue}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Votre adresse e-mail.</small>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          ref={MessageValue}
          onChange={handleChange}
        ></textarea>
        <small className="form-text text-muted">Votre message (min. 10 caractères).</small>
      </div>

      <div className="row mb-3">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Envoyer
        </button>
      </div>
    </div>
  );
}
