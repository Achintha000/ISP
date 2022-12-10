import styled from "styled-components";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import { request } from "malicious-link-detector";
import FormRow from "../components/FormRow";
import Navbar from "../components/Navbar";
import Jobs from "../components/Jobs";
import background from "../assets/background.jpg";
import logo from "../assets/logo1.png";
import axios from "axios";
import "../axios";

function Dashboard() {
  const [state, setState] = useState();
  const [values, setValues] = useState({ url: state });
  const [malicious, setMalicious] = useState();
  const { isLoading, showAlert, fetchJobs, createJob, details } =
    useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { url } = values;
    if (url) {
      createJob(values);
      console.log(values);
      setState(values);
    }
  };

  // console.log(state)
  // console.log(values.url);
  // const checkIp = async (userInput) => {

  //   try {
  //     const { data } = await axios.post(`/ip`)
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   checkIp();
  // })

  const fetchPWD = () => {
    request(values.url).then((res) => {
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
      return (
        <div className="content">
          <h1>{malicious}</h1>
          <p>this is specific url puk</p>
        </div>
      );
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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let data = null;
  data = localStorage.getItem("details");
  const value = JSON.parse(data);
  console.log(value.data.r.city);

  // console.log(JSON.parse(localStorage.getItem('details')).data.r);

  // const hello = () => {
  //   window.localStorage.removeItem("details");
  // };

  // console.log(ip)

  // setInterval(() => {
  //   hello()
  // },1000);

  return (
    <>
      <Wrapper>
        <br />
        <img src={background} alt="background" className="puk" />
        <div className="centered">
          <img src={logo} alt="puk" className="hui" />
          <h1>FREE URL CHECKER</h1>
          <p>
            URL checker is a free tool to detect malicious URLs including
            malware, scam and phishing links. Safe link checker scan URLs for
            malware, viruses, scam and phishing links. Website checker verifies
            whether or not a website is legit, phishing or a scam.
          </p>
        </div>
        <form className="job-form" onSubmit={handleSubmit}>
          {/* position */}
          <FormRow
            type="name"
            name="url"
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
        
        
        <br /><br /><br />

        <div class="achi">
          <table class="rwd-table">
            <tbody>
              <tr>
                <th>Ip</th>
                <th>City</th>
                <th>Country Code</th>
                <th>Country Name</th>
                <th>Zip</th>
                <th>ISP</th>
              </tr>
              <tr>
                <td data-th="Supplier Code">{value.data.result.ip}</td>
                <td data-th="Supplier Name">{value.data.r.city}</td>
                <td data-th="Invoice Number">{value.data.r.countryCode}</td>
                <td data-th="Invoice Date">{value.data.r.countryName}</td>
                <td data-th="Due Date">{value.data.r.zip}</td>
                <td data-th="Net Amount">{value.data.r.internetProvider}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <br />
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">FAQ</h1>
          </div>
        </div>

        <br />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div
                class="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is URL checker?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div class="panel-body">
                      URL Checker uses advanced artificial intelligence (AI) and
                      machine learning techniques to quickly detect scam
                      websites and determine whether a website is legit.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are the benefits of using URL legit checker?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="panel-body">
                      Often, you want to visit a website for various reasons,
                      but you are unsure whether to trust the website. You are
                      asking yourself questions such as “is this website legit?”
                      or “is it a scam website?” or “is this a safe website?” or
                      “is this site real?” and so many similar questions. URL
                      checker is an intelligent scam detector which analyses
                      website link characteristics and allows finding out
                      proactively and swiftly whether by clicking on the link
                      you will land on an unsafe website or a website that is
                      safe. It helps with website credibility check and
                      verifying whether a company is legit.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to use URL checker?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="panel-body">
                      Using URL checker for fraudulent websites check or to
                      check whether a website is safe is very easy. Go to the
                      URL checker webpage at https://www.Email
                      Veritas.com/url-checker; enter the link in the search box
                      and click the Search icon. URL checker will check the
                      website link and quickly displays its results as whether
                      this is a scam website or a safe website.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .puk {
    width: 100%;
    height: auto;
  }
  .hui {
    width: 100px;
    height: 100px;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
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
    align-item: center;
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
    padding: 3rem 1rem 2rem 1rem;
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

  .panel-title > a:before {
    float: right !important;
    font-family: FontAwesome;
    content: "\f068";
    padding-right: 5px;
  }
  body {
    background-color: #f5f5f5;
  }
  .panel-title > a.collapsed:before {
    float: right !important;
    content: "\f067";
  }
  .panel-title > a:hover,
  .panel-title > a:active,
  .panel-title > a:focus {
    text-decoration: none;
  }
  .panel-heading {
    padding: 20px 15px;
    border-bottom: 1px solid transparent;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
  .panel {
    margin-bottom: 20px !important;
    background-color: #ffffff;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    box-shadow: 15px 16px 13px 8px rgb(4 4 4 / 5%);
  }
  .jumbotron {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    color: inherit;
    background-color: #00bcd4;
    text-align: center;
    color: #fff;
  }
  
  .achi{
    text-align: center;
    align-items: center;
    align-self: center;
    width: 100%;
    padding-left: 30rem;
  }

  rwd-table {
  margin: auto;
  min-width: 300px;
  max-width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  background: #428bca;
  color: #fff;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: #ebf3f9;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:first-child {
  margin-top: .5em;
}

.rwd-table td:last-child {
  margin-bottom: .5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

.rwd-table {
  color: #333;
  border-radius: .4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: .5em 1em;
}
@media screen and (max-width: 601px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
}
@media screen and (min-width: 600px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: .25em .5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}

`;

export default Dashboard;
