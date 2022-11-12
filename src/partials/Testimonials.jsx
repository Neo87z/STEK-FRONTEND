
import React, { Component, useEffect } from "react";


import vmsg from "vmsg";
import { PronounciationURL } from '../constants'
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import storage from "../firebaseConfig.js"

import Modal from '@mui/material/Modal';
import ReactWaves from '@dschoon/react-waves';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import Box from '@mui/material/Box';

const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"

});

export default class LoginPage extends Component {


  constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);
    this.state = {
      SuplierName: "",
      SuplierAddress: "",
      SuplierContactNumber: "",
      SuplierAccountNumber: "",
      ContactNumber: "",
      submitted: false,
      isLoading: false,
      isRecording: false,
      recordings: [],
      recordings2: [],
      recordings3: [],
      recordings4: [],
      recordings5: [],
      isLoading: false,

      isRecording: false,
      recordings: [],
      hasRecords: false,
      count: 0,
      Sentence: '',
      dataXX: [],
      RecordingCount: 0,
      finish: false,
      RecordingOne: false,
      RecordingTwo: false,
      RercordingThree: false,
      RecordingFour: false,
      RecordingFive: false,
      eavluvate: false,


      WordOneStatus: false,
      WordTwoStatus: false,
      WordThreeStatus: false,
      WordFourStatus: false,
      WordFiveStatus: false,
      MainLoader: true,
      FinalDoneXX: false,
      modal1Open: false,
      modal2Open: false,
      modal3Open: false,
      modal4Open: false,
      modal5Open: false,

      word1: "Test",
      word2: "Test",
      word3: "Test",
      word4: "Test",
      word5: "Test",


      ProgressColor1: "success",
      ProgressColor2: "success",
      ProgressColor3: "success",
      ProgressColor4: "success",
      ProgressColor4: "success",
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,

      Confidence: "0",
      Accuracy: "0",
      Clarity: "0",
      OverAllScore: "0",


      recordingsPractice: [],



      Confidence: "0",
      Accuracy: "0",
      Clarity: "0",
      OverAllScore: "0",
      Score1: "100",
      Score2: "20",
      Score3: "60",
      Score4: "30",
      Score5: "75",
      IPA1: "0",
      IPA2: "0",
      IPA3: "0",
      IPA4: "0",
      IPA5: "0",
      IPA1Real: "0",
      IPA2Real: "0",
      IPA3Real: "0",
      IPA4Real: "0",
      IPA5Real: "0",
      SimilarWords: "0",
      SimilarWords2: "0",
      SimilarWords3: "0",
      SimilarWords4: "0",
      SimilarWords5: "0"





    };
  }
  onDataChange(items) {
    let tutorials = [];
    console.log(items + "here")
    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      console.log(data)
      if (this.state.word1 == "Test") {
        this.setState({
          word1: data,
        });

      } else if (this.state.word2 == "Test") {
        this.setState({
          word2: data,
        });

      } else if (this.state.word3 == "Test") {
        this.setState({
          word3: data,
        });

      } else if (this.state.word4 == "Test") {
        this.setState({
          word4: data,
        });

      } else if (this.state.word5 == "Test") {
        this.setState({
          word5: data,
        });

      }
    });


  }



  async componentDidMount() {






    let BaseURL = PronounciationURL + "/GetFinalScore"




    axios.get(BaseURL)
      .then(res => {
        const data = res.data;
        console.log(res)
        console.log(res["data"])
        console.log(res["data"]["Accuracy"])

        this.setState({
          Accuracy: res["data"]["Accuracy"],
        });

        this.setState({
          Confidence: res["data"]["Confidence"],
        });

        this.setState({
          Clarity: res["data"]["Clarity"],
        });


        this.setState({
          OverAllScore: res["data"]["OverAllScore"],
        });


        this.setState({
          Score1: res["data"]["Score1"],
        });


        this.setState({
          Score2: res["data"]["Score2"],
        });

        this.setState({
          Score3: res["data"]["Score3"],
        });

        this.setState({
          Score4: res["data"]["Score4"],
        });

        this.setState({
          Score5: res["data"]["Score5"],
        });

        this.setState({
          IPA1: res["data"]["IPA1"],
        });

        this.setState({
          IPA2: res["data"]["IPA2"],
        });

        this.setState({
          IPA3: res["data"]["IPA3"],
        });

        this.setState({
          IPA4: res["data"]["IPA4"],
        });
        this.setState({
          IPA5: res["data"]["IPA5"],
        });

        this.setState({
          word1: res["data"]["Word1"],
        });
        this.setState({
          word2: res["data"]["Word2"],
        });
        this.setState({
          word3: res["data"]["Word3"],
        });
        this.setState({
          word4: res["data"]["Word4"],
        });
        this.setState({
          word5: res["data"]["Word6"],
        });




        this.setState({
          IPA1Real: res["data"]["IPA1Real"],
        });

        this.setState({
          IPA2Real: res["data"]["IPA2Real"],
        });

        this.setState({
          IPA3Real: res["data"]["IPA3Real"],
        });

        this.setState({
          IPA4Real: res["data"]["IPA4Real"],
        });
        this.setState({
          IPA5Real: res["data"]["IPA5Real"],
        });
        this.setState({
          MainLoader: false,
        });

        this.SetProgressColor()










      })


    setTimeout(() => {

      console.log("World!");
      this.SetProgressColor();

    }, 12000);



    this.SetProgressColor()


  }

  SetProgressColor = e => {
    if (parseInt(this.state.Score1) < 30) {
      this.state.ProgressColor1 = "danger"
    } else if (parseInt(this.state.Score1) < 55) {
      this.state.ProgressColor1 = "warning"
    } else if (parseInt(this.state.Score1) < 75) {
      this.state.ProgressColor1 = "info"
    } else {
      this.state.ProgressColor1 = "success"
    }


    if (parseInt(this.state.Score2) < 30) {
      this.state.ProgressColor2 = "danger"
    } else if (parseInt(this.state.Score2) < 55) {
      this.state.ProgressColor2 = "warning"
    } else if (parseInt(this.state.Score2) < 75) {
      this.state.ProgressColor2 = "info"
    } else {
      this.state.ProgressColor2 = "success"
    }


    if (parseInt(this.state.Score3) < 30) {
      this.state.ProgressColor3 = "danger"
    } else if (parseInt(this.state.Score3) < 55) {
      this.state.ProgressColor3 = "warning"
    } else if (parseInt(this.state.Score3) < 75) {
      this.state.ProgressColor3 = "info"
    } else {
      this.state.ProgressColor3 = "success"
    }

    if (parseInt(this.state.Score4) < 30) {
      this.state.ProgressColor4 = "danger"
    } else if (parseInt(this.state.Score4) < 55) {
      this.state.ProgressColor4 = "warning"
    } else if (parseInt(this.state.Score4) < 75) {
      this.state.ProgressColor4 = "info"
    } else {
      this.state.ProgressColor4 = "success"
    }

    if (parseInt(this.state.Score1) < 30) {
      this.state.ProgressColor5 = "danger"
    } else if (parseInt(this.state.Score5) < 55) {
      this.state.ProgressColor5 = "warning"
    } else if (parseInt(this.state.Score5) < 75) {
      this.state.ProgressColor5 = "info"
    } else {
      this.state.ProgressColor5 = "success"
    }
  }

  GenNewSentece = e => {


    this.state.finish = true
    if (this.state.RecordingOne == false) {
      this.state.finish = true
    }

    if (this.state.RecordingCount == 4) {
      this.state.finish = true

    }









    if (this.state.WordOneStatus) {
      this.ChangeWordOne()
      this.ChangeWordTwo()
    } else {
      if (this.state.WordTwoStatus) {
        this.ChangeWordTwo()
        this.ChangeWordThree()
      } else {
        if (this.state.WordThreeStatus) {
          this.ChangeWordThree()
          this.ChangeWordFour()

        } else {
          if (this.state.WordFourStatus) {
            this.ChangeWordFour()
            this.ChjnageWordFive()

          }
        }
      }
    }


    this.state.RecordingCount = this.state.RecordingCount + 1
    let dataQuotes = this.state.dataXX;
    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    console.log(randomQuote)
    this.setState({
      Sentence: randomWords()
    });

  }



  EnablePLay = e => {
    e.preventDefault();
    window.location = `/speech-recognition`



  }


  UploadButton = e => {
    this.setState({ hasRecords: !this.state.hasRecords });
  }

  record = async () => {


    this.setState({ isLoading: true });

    let x = this.state.count
    x = x + 1

    if (this.state.isRecording) {
      const blob = await recorder.stopRecording();
      // const file = e.target.files[0];

      this.setState({
        isLoading: false,
        isRecording: false,
        recordings: this.state.recordings.concat(URL.createObjectURL(blob))
      });
      this.setState({ hasRecords: true });
      this.setState({ count: x });

    } else {
      try {

        await recorder.initAudio();
        await recorder.initWorker();

        recorder.startRecording();

        this.setState({ isLoading: false, isRecording: true });
      } catch (e) {
        console.error(e);
        this.setState({ isLoading: false });
      }
    }
  };


  async onSubmit(e) {

    e.preventDefault();

    window.location = `/speech-Rec`



  }

  ChangeWordOne = e => {
    this.setState({ WordOneStatus: !this.state.WordOneStatus });
  }

  ChangeWordTwo = e => {
    this.setState({ WordTwoStatus: !this.state.WordTwoStatus });
  }

  ChangeWordThree = e => {
    this.setState({ WordThreeStatus: !this.state.WordThreeStatus });
  }
  ChangeWordFour = e => {
    this.setState({ WordFourStatus: !this.state.WordFourStatus });
  }
  ChjnageWordFive = e => {
    this.setState({ WordFiveStatus: !this.state.WordFiveStatus });
  }

  ChangeMainLoader = e => {
    this.setState({ MainLoader: !this.state.MainLoader });
  }

  ChnageFinal = e => {
    this.setState({ FinalDoneXX: !this.state.FinalDoneXX });
  }

  OpenModal1 = e => {
    this.setState({ modal1Open: !this.state.modal1Open });
  }

  CloseModal2 = e => {
    this.setState({ modal2Open: !this.state.modal2Open });
  }

  CloseModal3 = e => {
    this.setState({ modal3Open: !this.state.modal3Open });
  }

  CloseModal4 = e => {
    this.setState({ modal4Open: !this.state.modal4Open });
  }

  CloseModal5 = e => {
    this.setState({ modal5Open: !this.state.modal5Open });
  }



  onChange = (e) => {

    console.log(this.state.recordings[0])

    const file = e.target.files[0];
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child("Test")
    fileRef.put(this.state.recordings[0]).then(() => {
      console.log("Uploaded a file")
    })
  }




  render() {

    const data = [
      {
        src: 'http://audio-cdn/Shawn Mendes - Señorita.mp3',
        artist: 'Señorita',
        name: 'Shawn Mendes',
        img: 'http://audio-avatar-cdn/Señorita.jpg',
        id: '66575568423123',
      },
      {
        src: 'http://audio-cdn/MIKA - Lollipop.mp3',
        artist: 'Mika',
        name: 'Lollipop',
        img: 'http://audio-avatar-cdn/mika.jpg',
        id: '66575568425354321',
      },
    ]

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-42%, -39%)',
      width: 900,
      height: 630,


      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const xx = this.state.WordOneStatus;
    const y = this.state.WordTwoStatus;
    const z = this.state.WordThreeStatus;
    const k = this.state.WordFourStatus;
    const m = this.state.WordFiveStatus;
    const MainLoader = this.state.MainLoader;

    const finalX = this.state.FinalDoneXX;


    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    const x = this.state.hasRecords;
    const { isLoading, isRecording, recordings, recordings1, recordings2, recordings3, recordings4, recordings5 } = this.state;
    return (
      <section>

        <br></br> <br></br> <br></br> <br></br>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
              <div class="ui steps" >
                <div class="disabled step">
                  <i class="    info icon"></i>
                  <div class="content">
                    <div class="title">Introduction</div>
                    <div class="description">Introduction To The Speech Recognition</div>
                  </div>
                </div>
                <div class=" disabled step">
                  <i class="microphone  icon"></i>
                  <div class="content">
                    <div class="title">Record</div>
                    <div class="description">Record The Given Words </div>
                  </div>
                </div>
                <div class=" active step">
                  <i class="filter icon"></i>
                  <div class="content">
                    <div class="title">Evaluvate</div>
                    <div class="description">Results Of The Recorded Words</div>
                  </div>
                </div>

              </div>
              <div class="ui segment">
                {

                  MainLoader && (
                    <div class="ui active inverted dimmer" style={{ background: 'white' }}>
                      <div class="ui text loader">Please Wait While STEK Generate Your Results    </div>
                    </div>

                  )

                }

                <div class="ui four statistics">
                  <div class="red statistic">
                    <div class="value">
                      {this.state.Confidence}%
                    </div>
                    <div class="label">
                      Confidence
                    </div>
                  </div>
                  <div class="  red statistic">
                    <div class="value">
                      {this.state.Accuracy}%
                    </div>
                    <div class="label">
                      Accuracy
                    </div>
                  </div>

                  <div class="red statistic">
                    <div class="value">
                      <i class="undo icon"></i>  {this.state.Clarity}%
                    </div>
                    <div class="label">
                      Clarity
                    </div>
                  </div>
                  <div class="red statistic">
                    <div class="value">
                      <i class="undo icon"></i> {this.state.OverAllScore}%
                    </div>
                    <div class="label">
                      Overall Score
                    </div>
                  </div>
                </div>


                <div class="ui  segment">

                  <div class="ui three column very relaxed  grid">

                    <div class="middle aligned column" >

                      <b><h3 style={{ transform: 'translateY(-520%)', color: 'black' }}>Word</h3></b>


                      <h5 style={{ transform: 'translateY(-84px)', color: 'black' }}>{this.state.word1}</h5>
                      <h5 style={{ transform: 'translateY(-50px)', color: 'black' }}>{this.state.word2}</h5>
                      <h5 style={{ transform: 'translateY(-9px)', color: 'black' }}>{this.state.word3}</h5>
                      <h5 style={{ transform: 'translateY(30px)', color: 'black' }} >{this.state.word4}</h5>
                      <h5 style={{ transform: 'translateY(71px)', color: 'black' }}>{this.state.word5}</h5>


                    </div><br></br>
                    <div class="middle aligned column" >
                      <h3 style={{ color: 'black' }}>Score</h3>


                      <ProgressBar style={{ height: '36px' }} now={this.state.Score1} variant={this.state.ProgressColor1} label={`${this.state.Score1}%`} /><br></br>
                      <ProgressBar style={{ height: '36px' }} now={this.state.Score2} variant={this.state.ProgressColor2} label={`${this.state.Score2}%`} /><br></br>
                      <ProgressBar style={{ height: '36px' }} now={this.state.Score3} variant={this.state.ProgressColor3} label={`${this.state.Score3}%`} /><br></br>
                      <ProgressBar style={{ height: '36px' }} now={this.state.Score4} variant={this.state.ProgressColor4} label={`${this.state.Score4}%`} /><br></br>
                      <ProgressBar style={{ height: '36px' }} now={this.state.Score5} variant={this.state.ProgressColor5} label={`${this.state.Score5}%`} /><br></br>


                    </div>
                    <div class="middle aligned column" style={{ marginTop: '-23px' }}>
                      <h3 style={{ color: 'black' }}>Listen</h3>
                      <div onClick={this.OpenModal1} class="ui labeled button" tabindex="0">
                        <div class="ui blue button">
                          <i class="heart icon"></i> Listen
                        </div>
                        <a class="ui basic blue left pointing label">
                          More Info
                        </a>
                      </div><br></br><br></br>
                      <div onClick={this.CloseModal2} class="ui labeled button" tabindex="0">
                        <div class="ui blue button">
                          <i class="heart icon"></i> Listen
                        </div>
                        <a class="ui basic blue left pointing label">
                          More Info
                        </a>
                      </div><br></br><br></br>
                      <div onClick={this.CloseModal3} class="ui labeled button" tabindex="0">
                        <div class="ui blue button">
                          <i class="heart icon"></i> Listen
                        </div>
                        <a class="ui basic blue left pointing label">
                          More Info
                        </a>
                      </div><br></br><br></br>
                      <div onClick={this.CloseModal4} class="ui labeled button" tabindex="0">
                        <div class="ui blue button">
                          <i class="heart icon"></i> Listen
                        </div>
                        <a class="ui basic blue left pointing label">
                          More Info
                        </a>
                      </div><br></br><br></br>
                      <div onClick={this.CloseModal5} class="ui labeled button" tabindex="0">
                        <div class="ui blue button">
                          <i class="heart icon"></i> Listen
                        </div>
                        <a class="ui basic blue left pointing label">
                          More Info
                        </a>
                      </div>



                    </div>

                  </div>
                </div>


              </div>


            </div>
            <div className="max-w-1xl mx-auto text-center pb-2 md:pb-1">

              <form class="ui form" onSubmit={this.EnablePLay}>
                <button class="ui right labeled icon button" >
                  <i class="right arrow icon"></i>
                  Start Again

                </button>

              </form>

            </div>


            {/* Testimonials */}

          </div>
        </div>
      </section>
    );
  }
}
