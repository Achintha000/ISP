import styled from "styled-components";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import FormRow from "../components/FormRow";
import Navbar from "../components/Navbar";
import Jobs from "../components/Jobs";

function Dashboard() {
  const [state, setState] = useState();
  const [values, setValues] = useState({ company: state });
  const [malicious, setMalicious] = useState(false);
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
    if (values.URL === "http") {
      setMalicious(true);
    } else if (values.URL === "https") {
      setMalicious(false);
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

          <button type="submit" className="btn" disabled={isLoading} onClick={fetchPWD}>
            {isLoading ? "Adding New Job..." : "Submit"}
          </button>
        </form>
        {values.URL ? "URL Found" : "No URL Found"}
        <br />

        {malicious ? "NOT Secure URL" : "Secure URL"}

        <Jobs />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  padding: 3rem 0;

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
    }
    .form-row {
      margin-bottom: 0;
    }
    .btn {
      padding: 0.75rem;
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
