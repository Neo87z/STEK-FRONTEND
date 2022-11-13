
import React, { Component, useEffect } from "react";


import vmsg from "vmsg";

import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import storage from "../firebaseConfig.js"
import { PronounciationURL,EssayURL } from '../constants'

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
      Optimized: "",
      NotOptimized: "",


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





    let BaseURlX = EssayURL + "/GetEssay"


    axios.post(BaseURlX)
      .then(res => {
        const data = res.data;
        console.log(res)
        console.log(res["data"])



        this.setState({
          Optimized: res["data"]["FinalChoiceData"],
        });
        this.setState({
          NotOptimized: res["data"]["Original"],
        });
        this.setState({
          MainLoader: false ,
        });
      










      })


  




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
    // firebase = getFirebase();
    // const ref = useRef(undefined);



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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">

            <div class="ui steps" >
              <div class=" disabled step">
                <i class="info icon"></i>
                <div class="content">
                  <div class="title">Introduction</div>
                  <div class="description">Introduction To The Essay Generator  </div>
                </div>
              </div>

              <div class=" disabled step">
                <i class="microphone  icon"></i>
                <div class="content">
                  <div class="title">Input</div>
                  <div class="description">Enter The Essay Topic Required </div>
                </div>
              </div>
              <div class=" active step">
                <i class="filter icon"></i>
                <div class="content">
                  <div class="title">Output</div>
                  <div class="description">  </div>
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




              {/* Section header */}
              {/* Items */}
              <div className="grid gap-20" data-aos-id-target>

                {/* Item */}
                <div style={{ marginLeft: '-50px' }} className="md:grid md:grid-cols-12 ">


                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">

                      <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                       <b> <center><h4 style={{color:'black'}}className="h4 mb-2"><span className="text-purple-600">.</span> Optimized With STEK</h4></center></b>
                        <center> <p style={{color:'black'}} className="text-lg text-gray-400">{this.state.Optimized}</p>
                        </center> </div>

                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">

                      <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                       <b> <center> <h4 style={{color:'black'}} className="h4 mb-2"><span className="text-purple-600">.</span> Without Optimization</h4></center></b>
                        <center><p style={{color:'black'}} className="text-lg text-gray-400">{this.state.NotOptimized}</p>
                        </center> </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
    </div>
      </section>
    );
  }
}
