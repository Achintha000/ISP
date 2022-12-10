import styled from "styled-components";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import { request } from "malicious-link-detector";
import FormRow from "../components/FormRow";
import Navbar from "../components/Navbar";
import Jobs from "../components/Jobs";

// import {util} from 'util';
// import {client} from 'shodan-client';

function Dashboard() {
  const [state, setState] = useState();
  const [values, setValues] = useState({ company: state });
  const [malicious, setMalicious] = useState();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { isLoading, showAlert, fetchJobs, createJob } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { company } = values;
    if (company) {
      setState(values);
    }
  };

  // console.log(state)
  console.log(values.URL);

  const fetchPWD = () => {
    request(values.URL).then((res) => {
      console.log(res);
      setMalicious(res);
    });
  };

  const check = () => {
    if (malicious === "Safe") {
      return <div className="safe">{malicious}</div>;
    }
    if (malicious === "Dangerous") {
      return <div className="danger">{malicious}</div>;
    }
    if (malicious === "Too many contents") {
      return <div className="content">{malicious}</div>;
    }
    if (malicious === "Invalid") {
      return <div className="invalid">{malicious}</div>;
    }
    if (malicious === "Suspicious") {
      return <div className="suspicious">{malicious}</div>;
    } else {
      return <div></div>;
    }
  };

  return (
    <>
      <Navbar />

      <Wrapper className="page">
        {showAlert && (
          <div className="alert alert-danger">
            there was an error, please try again
          </div>
        )}
        <form className="job-form" onSubmit={handleSubmit}>
          {/* position */}
          <FormRow
            type="name"
            name="URL"
            value={values.company}
            handleChange={handleChange}
            horizontal
            placeholder="URL"
          />
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onClick={fetchPWD}
          >
            {isLoading ? "Adding New Job..." : "Check URL"}
          </button>
        </form>
        <div className="url">
          <u>
            <b>
              <i>{values.URL ? "URL Found" : "No URL Found"}</i>
            </b>
          </u>
        </div>
        <br />
        {check()}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  padding: 3rem 0;
  text-align: center;
  .url {
    padding: 3rem 2rem;
    font-family: system-ui;
    font-size: 1.2rem;
    color: black;
    background: #8360c3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2ebf91,
      #8360c3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2ebf91,
      #8360c3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    font-family: cursive;
  }
  .safe {
    background: #1f4037; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #99f2c8,
      #1f4037
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #99f2c8,
      #1f4037
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: 3rem 3rem;
    font-size: 2rem;
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    font-family: cursive;
  }
  .danger {
    background: #d31027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ea384d,
      #d31027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ea384d,
      #d31027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: 3rem 3rem;
    font-size: 2rem;
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    font-family: cursive;
  }
  .content {
    background: #ede574; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e1f5c4,
      #ede574
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e1f5c4,
      #ede574
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: 3rem 3rem;
    font-size: 2rem;
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    font-family: cursive;
  }
  .suspicious {
    background: #c31432; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #240b36,
      #c31432
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #240b36,
      #c31432
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 3rem 3rem;
    font-size: 2rem;
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    font-family: cursive;
  }
  .invalid {
    background: #ffe259; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffa751,
      #ffe259
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffa751,
      #ffe259
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 3rem 3rem;
    font-size: 2rem;
    text-align: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    font-family: cursive;
  }

  .job-form {
    background: var(--white);
    display: grid;
    row-gap: 1rem;
    column-gap: 0.5rem;
    align-items: center;
    margin-bottom: 3rem;
    border-radius: var(--borderRadius);
    padding: 1.5rem;
    .form-input {
      padding: 0.75rem;
    }

    .form-input:focus {
      outline: 1px solid var(--primary-500);
      border-radius: 20px;
    }
    .form-row {
      margin-bottom: 0;
    }
    .btn {
      padding: 0.75rem;
      border-radius: 20px;
    }
    @media (min-width: 776px) {
      grid-template-columns: 1fr 1fr auto;
      .btn {
        height: 100%;
        padding: 0 2rem;
      }
      column-gap: 2rem;
    }
  }
  .alert {
    max-width: var(--max-width);
    margin-bottom: 1rem;
  }
`;

export default Dashboard;
