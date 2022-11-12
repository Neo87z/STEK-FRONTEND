import { Link } from 'react-router-dom';


import React, { useState } from 'react';
import { PronounciationURL } from '../constants'

import axios from 'axios';
import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';
import FeatImage03 from '../images/features-03-image-03.png';
import ReactWaves from '@dschoon/react-waves';
import { generateSlug } from "random-word-slugs";
import storage from "../firebaseConfig.js"
import vmsg from "vmsg";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import africa from "../../src/s1.mp3";
const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"

});


export default class FormSubmission extends React.Component {

  constructor(props) {
    super(props);

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
      FinalDoneXX: false,
      word1: 'test',
      word2: 'test',
      word3: 'test',
      word4: 'test',
      word5: 'test',
      WordData: "Sehaen",

      Word1Readl: 'Word 1',
      Word2Readl: 'Word 2',
      Word3Readl: 'Word 3',
      Word4Readl: 'Word 4',
      Word5Readl: 'Word 5',

    };
  }


  async componentDidMount() {


    //this.ChangeWordTwo()

    //this.ChangeWordThree()
    //this.ChangeWordFour()
    //this.ChjnageWordFive()
    this.ChangeWordOne()
    if (this.state.RecordingOne == false) {
      this.state.finish = true
    }
    let BaseURl = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    console.log(BaseURl)
    //   const StorageRef=ref(firebase,'/files/test');
    const slug = generateSlug(1, { format: "title" });
    this.setState({
      Sentence: slug,
    });
    return




  }

  GenNewSentece = e => {
    const slug = generateSlug(1, { format: "title" });
    this.setState({
      Sentence: slug,
    });

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


  }


  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  EnablePLay = e => {
    e.preventDefault();
    const Word = {
      Word1: this.state.word1,
      Word2: this.state.word2,
      Word3: this.state.word3,
      Word4: this.state.word4,
      Word5: this.state.word5
    }
    let BaseURL=PronounciationURL+"/SaveWordData"
    axios.post(BaseURL, Word)
      .then();

    this.sleep(2000).then(r => {
      window.location = `/speech-evaluvate`
    })






  }

  async handleUpload() {

    const firebase = firebase.getFirebase();
    const storage = firebase.storage();
    const storageRef = storage.ref("images");
    const uploadedFile = this.state.recordings[this.state.count - 1]
    try {
      await storageRef.child('uploadedFile.name').put(uploadedFile);
      alert("Successfully uploaded picture!");
    } catch (error) {
      console.log("error", error);
    }



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

      if (this.state.RecordingCount == 0) {
        this.state.RecordingOne = true
        this.state.finish = false
        const storageRef = ref(storage, `/SentenceRecording0`)
        uploadBytes(storageRef, blob).then((snapshot) => {
          console.log(snapshot)

        });

        this.state.Word1Readl = this.state.Sentence
        this.state.word1 = this.state.Sentence
        console.log(this.state.WordData)



      } else {
        if (this.state.RecordingCount == 1) {
          this.state.RecordingTwo = true
          this.state.finish = false
          const storageRef = ref(storage, `/SentenceRecording1`)
          uploadBytes(storageRef, blob).then((snapshot) => {
            console.log(snapshot)

          });

          this.state.Word2Readl = this.state.Sentence
          this.state.word2 = this.state.Sentence


        } else {
          if (this.state.RecordingCount == 2) {
            this.state.RercordingThree = true
            this.state.finish = false
            const storageRef = ref(storage, `/SentenceRecording2`)
            uploadBytes(storageRef, blob).then((snapshot) => {
              console.log(snapshot)

            });
            this.state.Word3Readl = this.state.Sentence
            this.state.word3 = this.state.Sentence

          } else {
            if (this.state.RecordingCount == 3) {
              this.state.RecordingFour = true
              this.state.finish = false
              const storageRef = ref(storage, `/SentenceRecording3`)
              uploadBytes(storageRef, blob).then((snapshot) => {
                console.log(snapshot)

              });
              this.state.Word4Readl = this.state.Sentence
              this.state.word4 = this.state.Sentence
            } else {
              this.state.RecordingFive = true
              this.state.finish = true
              this.state.eavluvate = true
              this.ChjnageWordFive()
              this.ChnageFinal()
              const storageRef = ref(storage, `/SentenceRecording4`)
              uploadBytes(storageRef, blob).then((snapshot) => {
                console.log(snapshot)

              });
              this.state.Word5Readl = this.state.Sentence
              this.state.word5 = this.state.Sentence


            }
          }
        }
      }


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





  ChnageWOrd1 = e => {
    this.setState({ WordData: "please" });
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

  ChnageFinal = e => {
    this.setState({ FinalDoneXX: !this.state.FinalDoneXX });
  }

  onSubmit(e) {
    e.preventDefault();


    const User = {

      BetName: this.state.WordData


    };
    console.log(User);



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
    const xx = this.state.WordOneStatus;
    const y = this.state.WordTwoStatus;
    const z = this.state.WordThreeStatus;
    const k = this.state.WordFourStatus;
    const m = this.state.WordFiveStatus;

    const finalX = this.state.FinalDoneXX;


    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    const x = this.state.hasRecords;
    const { isLoading, isRecording, recordings } = this.state;

    return (

      <section>
        <br></br>   <br></br>   <br></br>   <br></br>
        <div className="max-w-6xl mx-auto px-4 sm:px-1">
          <div className="py-1 md:py-1 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-6xl mx-auto text-center pb-1 md:pb-1">
              <div class="ui steps" style={{ marginTop: '10vh' }}>
                <div class="disabled step">
                  <i class="    info icon"></i>
                  <div class="content">
                    <div class="title">Introduction</div>
                    <div class="description">Introduction To The Speech Recognition</div>
                  </div>
                </div>
                <div class=" active step">
                  <i class="microphone  icon"></i>
                  <div class="content">
                    <div class="title">Record</div>
                    <div class="description">Record The Given Words </div>
                  </div>
                </div>
                <div class=" disabled step">
                  <i class="filter icon"></i>
                  <div class="content">
                    <div class="title">Evaluvate</div>
                    <div class="description">Results Of The Recorded Words</div>
                  </div>
                </div>


              </div>
              <h1 className="h2 mb-4">Record Speech</h1>

            </div>

            <div class="ui segment">
              <div class="ui two column very relaxed grid">
                <div class="column">

                  <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image */}

                    {/* Content */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                      <div className="md:pr-4 lg:pr-12 xl:pr-16">

                        <h3 className="h4 mb-3">

                          {
                            xx && (
                              <div class="ui mini vertical steps" >
                                <div class="active mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word1Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word2Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word3Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word4Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word5Readl}</div>
                                  </div>
                                </div>
                              </div>


                            )


                          }



                          {
                            y && (
                              <div class="ui mini vertical steps" >
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word1Readl}</div>
                                  </div>
                                </div>
                                <div class="active mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word2Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word3Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word4Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word5Readl}</div>
                                  </div>
                                </div>
                              </div>


                            )


                          }



                          {
                            z && (
                              <div class="ui mini vertical steps" >
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word1Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word2Readl}</div>
                                  </div>
                                </div>
                                <div class="active mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word3Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word4Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word5Readl}</div>
                                  </div>
                                </div>
                              </div>


                            )


                          }


                          {
                            k && (
                              <div class="ui mini vertical steps" >
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word1Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word2Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word3Readl}</div>
                                  </div>
                                </div>
                                <div class="active mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word4Readl}</div>
                                  </div>
                                </div>
                                <div class="disabled mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word5Readl}</div>
                                  </div>
                                </div>
                              </div>


                            )


                          }


                          {
                            m && (
                              <div class="ui mini vertical steps" >
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word1Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word2Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word3Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word4Readl}</div>
                                  </div>
                                </div>
                                <div class="active mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word5Readl}</div>
                                  </div>
                                </div>
                              </div>


                            )


                          }

                          {
                            finalX && (
                              <div class="ui mini vertical steps" >
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word1Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word2Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word3Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone   icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word4Readl}</div>
                                  </div>
                                </div>
                                <div class="completed mini step">
                                  <i class="mini microphone slash  icon"></i>
                                  <div class="content">
                                    <div class="title">{this.state.Word5Readl}</div>
                                  </div>
                                </div>
                              </div>


                            )


                          }  </h3>






                        <div style={{ marginLeft: '150%', marginTop: '-90%' }} className=" text-center pb-1 md:pb-10">

                          <p className="text-xl text-red-400">{this.state.Sentence}</p>


                        </div>


                      </div>
                      <center> <button style={{ marginTop: '41%', marginLeft: '107%' }} className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" disabled={this.state.finish} onClick={this.GenNewSentece}>
                        <i class="pencil alternate icon"></i>
                        Next
                      </button></center>
                    </div>
                  </div>

                </div>
                <div class="column">

                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                    <ReactWaves
                      audioFile={recordings[this.state.count - 1]}
                      className='react-waves'
                      options={{
                        barHeight: 2,
                        cursorWidth: 0,
                        height: 200,
                        hideScrollbar: true,
                        progressColor: '#EC407A',
                        responsive: true,
                        waveColor: '#D1D6DA',
                      }}
                      volume={1}
                      zoom={1}
                      playing={this.state.playing}
                      pos={this.state.pos}
                      onPosChange={this.onPosChange}
                      onSeek={this.onSeek}
                    />

                    <React.Fragment>


                      <center> <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" disabled={isLoading} onClick={this.record}>
                        <i class="pencil alternate icon"></i>
                        {isRecording ? "Stop" : "Record"}
                      </button></center>
                      <div >

                        <br></br>

                        {
                          x && (<div style={{ marginLeft: '3%' }}
                            onClick={() => { this.setState({ playing: !this.state.playing }) }}

                          >
                            {!this.state.playing ? <center><button class="ui  button">
                              <i class="play icon"></i>
                              Play
                            </button>  </center> : <button style={{ marginLeft: '39%' }} class="ui button">
                              <i class="pause icon"></i>
                              Pause
                            </button>}
                          </div>)


                        }

                      </div>





                    </React.Fragment>
                  </div>

                </div>
              </div>
              <div class="ui vertical divider">
             
              </div>
            </div>

            {/* Items */}
            <div className="grid gap-20" style={{ backgroundColor: 'white' }}>

              {/* 1st item */}




            </div>

          </div>




          <div className="max-w-1xl mx-auto text-center pb-2 md:pb-10">

            <form class="ui form" onSubmit={this.EnablePLay}>
              <button class="ui right labeled icon button" disabled={!this.state.eavluvate}>
                <i class="right arrow icon"></i>
                Evaluvate

              </button>

            </form>

          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-1">

            <div className="py-12 md:py-20 border-t border-gray-800">

              <div className="max-w-1xl mx-auto text-center pb-1 md:pb-10">

                <p className="text-xl text-red-400">*For Best Results Speak With Clear Voice.</p>
                <p className="text-xl text-red-400">*The Score Will Be Affected By  Background Noise. Please Recored In A Suitable Place</p>
                <p className="text-xl text-red-400">*Complete All The Five Recording For The Most Accurate Results.</p>
                <p className="text-xl text-red-400">*Make SUre You Click Next When After You Record The Word Sucessfully.</p>
              </div>
            </div></div>

        </div>
      </section >
    );
  }
}