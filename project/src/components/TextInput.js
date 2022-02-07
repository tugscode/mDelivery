import { Form, InputGroup } from "react-bootstrap";
import "../css/textfield.css";
import hide from "../icons/hide-pass.png";
import show from "../icons/show-pass.png";
import { useState, useEffect } from "react";

const TextInput = (props) => {
  let name = props.name;
  let type = props.type;
  let id = props.id;

  const toggleShow = <img type="button" src={show} alt="toggle show"></img>;
  const toggleHide = <img type="button" src={hide} alt="toggle hide"></img>;

  const [isHidden, setToggle] = useState(true);
  const [current, setCurrent] = useState(toggleShow);
  const [defaultType, setType] = useState(type);

  const toggleHandler = () => {
    setToggle(!isHidden);
  };
  
  useEffect(() => {
    if (isHidden) {
      setType(type)
      setCurrent(toggleShow);
      
    } else {
      setType('text')
      setCurrent(toggleHide)
    }
  }, [isHidden]);

  // const checkValue = (data) => {
  //   console.log(data)
  // }

  let defInput = (
    <div className="input-container d-flex">
      <Form.Control
        className="input-field"
        type={type}
        placeholder={"И-мэйл хаягаа оруулна уу."}
      />
    </div>
  );
  if (type === "password")
    defInput = (
      <div className="input-container d-flex">
        <Form.Control
          className="input-field"
          type={defaultType}
          placeholder="Нууц үгээ оруулна уу. "
          // onChange={checkValue(event.target.value)}
        />
        <span
          type="button"
          className="passToggle"
          onClick={() => toggleHandler()}
        >
          {current}
        </span>
      </div>
    );
  if (type === "text")
    defInput = (
      <div className="input-container d-flex">
        <Form.Control
          className="input-field"
          placeholder="Нэрээ оруулна уу"
        />
      </div>
    )
  if (type === "tel")
    defInput = (
      <div className="input-container d-flex">
        <Form.Control
          className="input-field"
          placeholder="Утасны дугаараа оруулна уу"
        />
      </div>
    )

  if (type === "textField")
    defInput = (
      <div className="input-container d-flex">
        <Form.Control
          className="input-field textarea"
          as="textarea"
          aria-label="With textarea"
        />
      </div>
    );

  return (
    <Form.Group className="form mb-3" controlId={id} value=''>
      <Form.Label className="input-label">
        {name[0].toUpperCase() + name.substring(1)}
      </Form.Label>
      {defInput}
    </Form.Group>
  );
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
