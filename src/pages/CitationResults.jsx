import React, { Component } from "react";
import { Link } from 'react-router-dom';

import axios from 'axios';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { PronounciationURL, EssayURL } from '../constants'


export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SuplierName: "",
      SuplierAddress: "",
      SuplierContactNumber: "",
      SuplierAccountNumber: "",
      ContactNumber: "",
      Sentence: "",
      submitted: false,
      options: [],
      Code: '',
      Ammount: '',
      name: '',
      size: '',
      categories: [],
      Status: '',
      bgColor: '#DDDDDD',
      bgColorSP: '#DDDDDD',

      bgFuture: '#DDDDDD',

      bgCpPast: '#DDDDDD',
      bgCPpresent: '#DDDDDD',
      bgCPFuture: '#DDDDDD',

      ContinoudPast: false,
      ContinoudPresent: false,
      ContinoudFuture: false,

      targetbgColorSP: '#DDDDDD',

      targetbgFuture: '#DDDDDD',

      targetbgCpPast: '#DDDDDD',
      targetbgCPpresent: '#DDDDDD',
      targetbgCPFuture: '#DDDDDD',

      targetContinoudPast: false,
      targetContinoudPresent: false,
      targetContinoudFuture: false,

      targetsimplePast: false,
      targetsimplePresent: false,
      targetsimpleFuture: false,

      EssayData: "Invalid",
      divcontainer: false,

      OptimizedLoadingStatus: true,
      WithoutOptimzation: true,
      Loader: false,
      EssayData2: "Invalid",

      show: false,
      loader: false,
    };
  }


  onChnageAccountNumber = (e) => {

    this.setState({

      Sentence: e.target.value

    });
  };

  onSubmit = (e) => {



    e.preventDefault();
    const Word = {
      SentenceData: this.state.Sentence,

    }

    let BaseURlX = EssayURL + "/SaveSentnece"
    axios.post(BaseURlX, Word)
      .then();

    this.sleep(2000).then(r => {
      window.location = `/essay-results`
    })



  };
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }




  render() {

    const x = this.state.divcontainer;
    const xy = this.state.OptimizedLoadingStatus;

    const z = this.state.Loader
    const zy = this.state.WithoutOptimzation

    const rows = this.state.results_title;

    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          <section className="relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div class="ui steps" >
                  <div class=" disabled step">
                    <i class="info icon"></i>
                    <div class="content">
                      <div class="title">Introduction</div>
                      <div class="description">Introduction To The Citation Generator  </div>
                    </div>
                  </div>

                  <div class=" disabled step">
                    <i class="keyboard  icon"></i>
                    <div class="content">
                      <div class="title">Input</div>
                      <div class="description">Enter The Citation Topic Required </div>
                    </div>
                  </div>
                  <div class=" active  step">
                    <i class="filter icon"></i>
                    <div class="content">
                      <div class="title">Output</div>
                      <div class="description">  </div>
                    </div>
                  </div>


                </div>
                <br></br><br></br>
                {/* Page header */}
               

                {/* Form */}
                <div className="max-w-sm mx-auto">


                  <div class="ui segment" style={{color:'black',width:'220%',left:'-50%'}}>
                    <table style={{color:'black'}}id="results_tabel">
                      <thead>
                        <tr>
                          <th style={{width:'25%'}}>Title</th>
                          <th style={{width:'25%'}}>Link</th>
                          <th style={{width:'25%'}}>Similarity Percentage</th>
                          <th style={{width:'25%',marginLeft:'10%'}}>Content</th>

                        </tr>
                      </thead>
                      <tbody>


                        <tr>
                          <td>asd</td>
                          <td>asdasdasdas</td>
                          <td>asdasd</td>
                          <td>asdasd</td>

                        </tr>

                      </tbody>
                    </table>
                  </div>

                </div>
                <br></br><br></br>

              </div>
            </div>
          </section>

        </main>

      </div>
    );
  }
}
