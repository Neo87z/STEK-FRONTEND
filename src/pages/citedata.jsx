import React, { Component } from "react";
import { Link } from 'react-router-dom';

import axios from 'axios';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { PronounciationURL,EssayURL } from '../constants'


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
      window.location = `/citation-results`
    })



  };
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }




  render() {
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

                  <div class=" active step">
                    <i class="keyboard  icon"></i>
                    <div class="content">
                      <div class="title">Input</div>
                      <div class="description">Enter The Citation Topic Required </div>
                    </div>
                  </div>
                  <div class=" disabled step">
                    <i class="filter icon"></i>
                    <div class="content">
                      <div class="title">Output</div>
                      <div class="description">  </div>
                    </div>
                  </div>


                </div>
                <br></br><br></br>
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                  <h3 className="h3">Enter The The Title You Want To Check.</h3>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">


                  <form onSubmit={this.onSubmit}>

                    <div className="flex flex-wrap -mx-9 mb-4">
                      <div className="w-full px-3">

                        <input
                          value={this.state.Sentence}
                          onChange={this.onChnageAccountNumber}


                          id="password" style={{ width: '700px', marginLeft: '-45%' }} type="text" className="form-input w-full text-gray-300" placeholder="Enter The Title" required />
                      </div>
                    </div>


                    <div className="flex flex-wrap -mx-3 mt-2">
                      <div className="w-full px-3">
                        <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" href="/citation-results">Generate Citations</button>
                      </div>
                    </div>
                  </form>

                </div>
                <br></br><br></br>
                <div className="max-w-6xl mx-auto px-4 sm:px-1">

                  <div className="py-12 md:py-20 border-t border-gray-800">

                    <div className="max-w-1xl mx-auto text-center pb-1 md:pb-1">

             
                      <p className="text-xl text-red-400">*Make Sure That the Sentence Entered Is Gramatically Correct</p>
                      
                      <p className="text-xl text-red-400">*Example :- Mental Health.</p>
                    </div>
                  </div></div>
              </div>
            </div>
          </section>

        </main>

      </div>
    );
  }
}
