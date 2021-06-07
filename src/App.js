import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [companyName, setCompanyName] = useState("Gelecek Varlık");

  const handleChange = (item) => {
    setCompanyName(item);
  };

  return (
    <div className="App">
      <fieldset>
        <legend>App</legend>
        <h1>{`${companyName} Ailesine Hoş Geldiniz`}</h1>
        <Parent data={companyName} onChange={handleChange} />
      </fieldset>
    </div>
  );
};

const Parent = (props) => {
  const { data, onChange } = props;
  const [companyName, setCompanyName] = useState("");

  const handleChange = (item) => {
    onChange(item);
  };

  useEffect(() => {
    setCompanyName(data);
  }, [data]);

  return (
    <div>
      <fieldset>
        <legend>Parent</legend>
        <p>{`${companyName} Adresi: Kağıthane`}</p>
        <Child1 data={companyName} />
        <Child2 data={companyName} onChange={handleChange} />
      </fieldset>
    </div>
  );
};

const Child1 = (props) => {
  const { data } = props;
  const [companyName, setCompanyName] = useState(data);

  useEffect(() => {
    setCompanyName(data);
  }, [data]);

  return (
    <div>
      <fieldset>
        <legend>Child1</legend>
        <div>{`${companyName} Telefon Numarası: 02124444444`}</div>
      </fieldset>
    </div>
  );
};

const Child2 = (props) => {
  const { data, onChange } = props;
  const [state] = useState({
    name1: "Gelecek Varlık",
    name2: "Güven Varlık"
  });

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend>Child2</legend>
        <div>
          <label>{state.name1}: </label>
          <input
            type="radio"
            value={state.name1}
            onChange={handleChange}
            checked={data === state.name1}
          />
        </div>
        <div>
          <label>{state.name2}: </label>
          <input
            type="radio"
            value={state.name2}
            onChange={handleChange}
            checked={data === state.name2}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default App;
