import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <div class="product-navbar">
        <div class="product-navbar-centered">
          <ul>
            <li>
              <a href="#" class="">
                <span>LINK</span>
              </a>
            </li>
            <li>
              <a href="#" class="">
                LINK
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header class="navbar hero" role="banner">
        <div class="container">
          <div class="navbar-header">
            <a href="#" class="navbar-brand">
              <p>
                <img src="https://apimatic-io-cdn.azureedge.net/img/theme/ApimaticLogo.svg" />
                APIMATIC
              </p>
            </a>
          </div>
        </div>
      </header>

      <div id="about-main">
        <div class="jumbotron">
          <div class="jumbotron-inner">
            <div class="top-box">
              <div class="content-box">
                <h1>About APIMATIC</h1>
                <p>
                  APIMatic is a developer experience platform for web APIs.{" "}
                  <br /> Our mission is to make developers productive through
                  automatic code generation.
                </p>
              </div>
            </div>
          </div>
          <div class="img-layer-container">
            <div class="team-image" id="team-image">
              <img src="https://apimatic.io/img/theme/aboutUs/images-1.png" />
            </div>

            <div class="circles-container">
              <div class="img-1">
                <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />
              </div>
              <div class="img-2">
                <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="story-container">
          <div class="need-for-dx-container">
            <h3 class="text-center">Need for DX</h3>
            <p>
              Application Programming Interfaces (APIs) have taken the world by
              storm and are now the de facto standard of software communication.
              Almost every software product nowadays consumes APIs. The business
              model of numerous companies around the world relies upon the
              consumption of their APIs. API providers, therefore, strive to
              increase API adoption rates by spending millions of dollars every
              year to improve developer experience. This is usually done by
              providing Software Development Kits (SDKs) and API documentation
              to developer consuming their API(s). Developing SDKs and writing
              documentation, however, are arduous, monotonous and error-prone
              tasks. It is a slow process and costs a lot of time and money.
            </p>
            <div class="img-container">
              <img
                src="https://apimatic.io/img/theme/aboutUs/dxFlow.svg"
                alt="apimatic developer experience process"
                class="img-responsive"
              />
            </div>
          </div>
          <div class="container-divider"></div>
          <div class="our-tech-container">
            <h3 class="text-center">Our Technology</h3>
            <p>
              Our code generation engine enables API providers to generate SDKs
              for their APIs within minutes and at a fraction of the cost. We
              provide tools like our API editor and API transformer to further
              aid API providers in minimizing the time required to ship
              excellent quality SDKs to the developers using their APIs. Our
              code generation engine is also capable of generating succinct and
              error-free documentation for APIs and SDKs, both. The
              documentation for the SDKs includes dynamic screenshots detailing
              usage instructions tailored to the provider's specific API and
              also code snippets showing example usage. As the cherry on the
              cake, we provide beautifully designed DX portals to encapsulate
              this documentation.
            </p>
            <div class="img-container">
              <img
                src="https://apimatic.io/img/theme/cgaasIcons/cgaasProcess.gif"
                alt="apimatic code generation engine"
                class="img-responsive"
              />
            </div>
          </div>
          <div class="container-divider"></div>
          <div class="origin-story-container">
            <h3 class="text-center">Origin Story</h3>
            <p>
              While doing research work for their PhDs from the University of
              Auckland in 2014, our founders came across one of the API
              industry's pain points: SDKs. They realized that API providers who
              spent hundreds of thousands of dollars every year on improving
              developer experience, by providing SDKs and user-friendly
              documentation were able to reach a wider developer audience for
              their APIs compared to API providers who weren't able to do so.
            </p>
            <p>
              It was so clear that even though writing SDKs and documentation
              was a difficult and expensive task, it followed repeatable
              patterns which could be defined as logic blocks in a code
              generation engine. So, as a research project, they started working
              on a code generation engine which dynamically generated SDKs using
              API description as input.
            </p>
            <p>
              After a rigorous journey, this research project was selected as a
              candidate for commercialization by Return on Science (a NZ
              national research commercialization program focused on bringing
              new academic research to market) and the concept was transformed
              into a product i.e. APIMatic.
            </p>
          </div>
          <div class="container-divider"></div>
          <div class="today-container">
            <h3 class="text-center">Flash Forward Today</h3>
            <p>
              APIMatic has come a long way since its inception 3 years ago.
              Having started with only generating SDKs, APIMatic now provides
              solutions in other areas of developer experience as well.
              Presently, APIMatic is used by numerous organizations around the
              world to:
            </p>
            <ul>
              <li>Create and store definitions of their APIs</li>
              <li>Generate SDKs for their APIs for 10 platforms</li>
              <li>Keep these SDKs in sync with API updates</li>
              <li>
                Convert API descriptions into multiple formats (Swagger, API
                Blueprint, RAML etc.)
              </li>
              <li>Generate beautiful documentation for their APIs and SDKs</li>
              <li>Generate complete Developer Experience API Portals</li>
            </ul>
          </div>
          <div class="container-divider"></div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,400italic);

  $blue: #09518f;
  $bgDark: #171b23;
  $blueBorder: #1074cb;
  $jumbotronBlue: #2a313a;
  $gray: #5d5d5d;
  $base-gray: #f4f4f4;
  $mediumGray: #e3e4e6;
  $jumbotronGray: #6a6a6a;
  $border-gray: #d9dee5;
  $jumbotron-text-gray: #6f7782;
  $jumbotron-text-white: white;
  $textDarkColor: #676a6c;
  $textLightColor: #a0a5a8;
  $progress-green: #49d560;
  $light-blue: #00acee;
  $red: #eb4d5c;
  $about-section-heading-blue: #074e8c;

  // BASE STYLES (not specific to this page)
  .product-navbar {
    height: 40px;
    width: 100%;
    background: #090b0f;
    border-bottom: 1px solid #090b0f;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;

    .product-navbar-centered {
      max-width: 90vw;
      height: 20px;
      margin: 0 5vw;

      ul {
        margin: 0;
        padding: 0;

        li {
          float: left;
          list-style: none;
          margin-right: 30px;
          padding-top: 9px;

          a {
            color: #6f7782;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
            text-shadow: none !important;
          }
        }
      }
    }
  }

  .hero {
    background: $bgDark;
    padding-left: 0;
    padding-right: 0;

    .container {
      margin: 0 5vw;
      padding: 0 0vw;
      max-width: 90vw;
    }

    .navbar-brand {
      color: #fff;

      img {
        margin-right: 7px;
        margin-top: -7px;
      }
    }
  }

  // BASE STYLES END

  // PAGE SPECIFIC STYLES
  #about-main {
    font-family: "Open Sans", sans-serif;
    margin: 0 auto;

    .row {
      margin-left: 0;
      margin-right: 0;
    }

    .jumbotron {
      width: 100%;
      height: 530px;
      background: $bgDark;
      position: relative;
      margin: 0;
      z-index: 3;
      border-radius: 0px;

      .img-layer-container {
        position: relative;
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        img {
          max-width: 95vw;
        }

        .team-image {
          position: absolute;

          img {
            position: relative;
            z-index: 3;
          }
        }

        .circles-container {
          position: absolute;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: center;

          .img-1 {
            position: absolute;
            z-index: 2;
          }

          .img-2 {
            position: absolute;
            z-index: 5;
          }
        }
      }

      .jumbotron-inner {
        max-width: 1350px;
        margin: 0 auto;

        a {
          text-decoration: none;
        }

        .top-box {
          max-width: 950px;
          margin: 0 auto;

          .content-box {
            margin: 0 50px 35px;

            h1 {
              text-align: center;
              color: #fff;
              font-size: 40px;
              font-weight: bold;
              margin-bottom: 20px;
            }

            p {
              text-align: center;
              color: #6f7782;
              font-size: 18px;
              font-weight: 500;
              margin: 0;
              margin-bottom: 15px;
            }
          }
          //.content-box ENDS
        }
      }

      @media (max-width: 1401px) {
        height: 595px !important;

        .jumbotron-inner {
          max-width: 900px;

          .top-box {
            max-width: 900px;

            .content-box {
              margin-top: 30px;
              margin-bottom: 50px;

              h3 {
                font-size: 35px;
                margin: 5px 0px 20px 0px;
                color: #6f7782;
                font-weight: 300;
              }
            }
            //.content-box ENDS
          }
        }
      }

      @media (max-width: 1000px) {
        .img-layer-container {
          width: 100%;
        }
      }

      @media (max-width: 815px) {
        .jumbotron-inner {
          max-width: 600px;
        }
      }

      @media (max-width: 640px) {
        height: 400px !important;

        .jumbotron-inner {
          max-width: 550px;
          padding: 0 20px;
        }

        .img-1,
        .img-2,
        .team-image {
          display: none;
        }
      }

      @media (max-width: 420px) {
        .jumbotron-inner {
          max-width: 600px;
          padding: 0 20px;
        }
      }

      @media (max-width: 400px) {
        .jumbotron-inner {
          .top-box {
            .content-box {
              margin: 30px 0;

              h1 {
                font-size: 35px;
              }

              p {
                font-size: 16px;
              }
            }
            //.content-box ENDS
          }
        }
      }
    }

    .story-container {
      height: 100%;
      width: 100%;
      margin-top: 150px;

      @media (max-width: 640px) {
        margin-top: 80px;
      }

      .container-divider {
        margin-top: 100px;

        @media (max-width: 640px) {
          margin-top: 50px;
        }
      }

      .need-for-dx-container,
      .our-tech-container,
      .origin-story-container,
      .today-container {
        max-width: 950px;
        margin: 0 auto;
        padding: 0 20px;

        @media (max-width: 815px) {
          width: 100%;
        }

        .img-container {
          width: 100%;
          display: flex;
          justify-content: center;

          img {
            margin: 50px auto;
          }
        }

        h3 {
          color: $about-section-heading-blue;
        }

        p {
          font-size: 15px;
          margin-top: 20px;
          color: $textDarkColor;

          @media (max-width: 640px) {
            font-size: 13px;
          }
        }

        ul {
          margin-top: 30px;
          list-style-image: url("https://apimatic.io/img/theme/aboutUs/bullet.svg");

          li {
            line-height: 25px;
            padding-left: 5px;
            color: $textDarkColor;
          }
        }
      }
    }
  }
`;

export default About;
