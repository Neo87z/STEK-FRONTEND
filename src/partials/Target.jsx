
import React, { Component, useEffect } from "react";


import vmsg from "vmsg";
import ErrorImage from '../images/errorimage.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import storage from "../firebaseConfig.js"
import { PronounciationURL, EssayURL, GrammarURl } from '../constants'

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
      SimilarWords5: "0",
      NotStek: false,
      YesSTEK: false,
      Error1: false,
      Error1: false,
      Error2: false,
      Error3: false,
      Error4: false,
      Error5: false,
      Error6: false,


      NOTError1: false,
      NOTError1: false,
      NOTError2: false,
      NOTError3: false,
      NOTError4: false,
      NOTError5: false,
      NOTError6: false,

      NotOptimizedNumberOfMistakeS: '',
      NotOptimizedConexxt: '',
      NotOptimizedErrorCate: '',
      NotOptimizedMistake: '',
      NotOptimizedRuleType: '',
      NotOptimizedPossibleRepalcepent: '',

      NotOptimizedConexxt2: '',
      NotOptimizedErrorCate2: '',
      NotOptimizedMistake2: '',
      NotOptimizedRuleType2: '',
      NotOptimizedPossibleRepalcepent2: '',

      NotOptimizedConexxt3: '',
      NotOptimizedErrorCate3: '',
      NotOptimizedMistake3: '',
      NotOptimizedRuleType3: '',
      NotOptimizedPossibleRepalcepent3: '',

      NotOptimizedConexxt4: '',
      NotOptimizedErrorCate4: '',
      NotOptimizedMistake4: '',
      NotOptimizedRuleType4: '',
      NotOptimizedPossibleRepalcepent4: '',

      NotOptimizedConexxt5: '',
      NotOptimizedErrorCate5: '',
      NotOptimizedMistake5: '',
      NotOptimizedRuleType5: '',
      NotOptimizedPossibleRepalcepent5: '',

      NotOptimizedConexxt6: '',
      NotOptimizedErrorCate6: '',
      NotOptimizedMistake6: '',
      NotOptimizedRuleType6: '',
      NotOptimizedPossibleRepalcepent6: '',






      OptiNotOptimizedNumberOfMistakeS: '',
      OptiNotOptimizedConexxt: '',
      OptiNotOptimizedErrorCate: '',
      OptiNotOptimizedMistake: '',
      OptiNotOptimizedRuleType: '',
      OptiNotOptimizedPossibleRepalcepent: '',

      OptiNotOptimizedConexxt2: '',
      OptiNotOptimizedErrorCate2: '',
      OptiNotOptimizedMistake2: '',
      OptiNotOptimizedRuleType2: '',
      OptiNotOptimizedPossibleRepalcepent2: '',

      OptiNotOptimizedConexxt3: '',
      OptiNotOptimizedErrorCate3: '',
      OptiNotOptimizedMistake3: '',
      OptiNotOptimizedRuleType3: '',
      OptiNotOptimizedPossibleRepalcepent3: '',

      OptiNotOptimizedConexxt4: '',
      OptiNotOptimizedErrorCate4: '',
      OptiNotOptimizedMistake4: '',
      OptiNotOptimizedRuleType4: '',
      OptiNotOptimizedPossibleRepalcepent4: '',

      OptiNotOptimizedConexxt5: '',
      OptiNotOptimizedErrorCate5: '',
      OptiNotOptimizedMistake5: '',
      OptiNotOptimizedRuleType5: '',
      OptiNotOptimizedPossibleRepalcepent5: '',

      OptiNotOptimizedConexxt6: '',
      OptiNotOptimizedErrorCate6: '',
      OptiNotOptimizedMistake6: '',
      OptiNotOptimizedRuleType6: '',
      OptiNotOptimizedPossibleRepalcepent6: '',


      OptiFound1: false,
      OptiFound2: false,
      OptiFound3: false,
      OptiFound4: false,

      NotOptiFound1: false,
      NotOptiFound2: false,
      NotOptiFound3: false,
      NotOptiFound4: false,












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
          MainLoader: false,
        });
        const Word = {
          EssaYdata: res["data"]["Original"],

        } 
        console.log("heree")

        this.sleep(3000).then(r => {
          console.log(this.state.NotOptimized)



          let BaseURlX2 = GrammarURl + "/GetGrammarMistakes"
          axios.post(BaseURlX2, Word)
            .then(res => {
              const data = res.data;

              console.log(res["data"]['NumberOfMistakes'])



              let x = parseInt(res["data"]['NumberOfMistakes'])




              if (x == 1) {

                this.setState({
                  NotOptiFound1: true,
                });
                this.setState({
                  NotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                });

                this.setState({
                  NotOptimizedConexxt: res["data"]["ContextData"][0],
                });
                this.setState({
                  NotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                });
                this.setState({
                  NotOptimizedMistake: res["data"]["MistakeMessage"][0],
                });
                this.setState({
                  NotOptimizedRuleType: res["data"]["RuleType"][0],
                });
                try {
                  this.setState({
                    NotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                  });
                } catch (err) {

                }



              } else {
                if (x == 2) {
                  this.setState({
                    NotOptiFound1: true,
                  });
                  this.setState({
                    NotOptiFound2: true,
                  });
                  this.setState({
                    NotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                  });

                  this.setState({
                    NotOptimizedConexxt: res["data"]["ContextData"][0],
                  });
                  this.setState({
                    NotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                  });
                  this.setState({
                    NotOptimizedMistake: res["data"]["MistakeMessage"][0],
                  });
                  this.setState({
                    NotOptimizedRuleType: res["data"]["RuleType"][0],
                  });
                  try {
                    this.setState({
                      NotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                    });
                  } catch (err) {

                  }




                  this.setState({
                    NotOptimizedConexxt2: res["data"]["ContextData"][1],
                  });
                  this.setState({
                    NotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                  });
                  this.setState({
                    NotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                  });
                  this.setState({
                    NotOptimizedRuleType2: res["data"]["RuleType"][1],
                  });
                  try {

                  } catch (err) {
                    this.setState({
                      NotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                    });
                  }


                } else {
                  if (x == 3) {
                    this.setState({
                      NotOptiFound1: true,
                    });
                    this.setState({
                      NotOptiFound2: true,
                    });
                    this.setState({
                      NotOptiFound3: true,
                    });
                    this.setState({
                      NotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                    });

                    this.setState({
                      NotOptimizedConexxt: res["data"]["ContextData"][0],
                    });
                    this.setState({
                      NotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                    });
                    this.setState({
                      NotOptimizedMistake: res["data"]["MistakeMessage"][0],
                    });
                    this.setState({
                      NotOptimizedRuleType: res["data"]["RuleType"][0],
                    });
                    try {
                      this.setState({
                        NotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                      });
                    } catch (err) {

                    }



                    this.setState({
                      NotOptimizedConexxt2: res["data"]["ContextData"][1],
                    });
                    this.setState({
                      NotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                    });
                    this.setState({
                      NotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                    });
                    this.setState({
                      NotOptimizedRuleType2: res["data"]["RuleType"][1],
                    });

                    try {
                      this.setState({
                        NotOptimizedPossibleRepalcepen2: res["data"]["PossibleReplacemEnts"][1][0],
                      });
                    } catch (err) {

                    }


                    this.setState({
                      NotOptimizedConexxt3: res["data"]["ContextData"][2],
                    });
                    this.setState({
                      NotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                    });
                    this.setState({
                      NotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                    });
                    this.setState({
                      NotOptimizedRuleType3: res["data"]["RuleType"][2],
                    });
                    try {

                    } catch (err) {
                      this.setState({
                        NotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                      });
                    }


                  } else {

                    if (x == 4) {
                      this.setState({
                        NotOptiFound1: true,
                      });
                      this.setState({
                        NotOptiFound2: true,
                      });
                      this.setState({
                        NotOptiFound3: true,
                      });
                      this.setState({
                        NotOptiFound4: true,
                      });
                      try {
                        this.setState({
                          NotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                        });
                      } catch (err) {

                      }


                      this.setState({
                        NotOptimizedConexxt: res["data"]["ContextData"][0],
                      });
                      this.setState({
                        NotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                      });
                      this.setState({
                        NotOptimizedMistake: res["data"]["MistakeMessage"][0],
                      });
                      this.setState({
                        NotOptimizedRuleType: res["data"]["RuleType"][0],
                      });
                      try {
                        this.setState({
                          NotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                        });
                      } catch (err) {

                      }



                      this.setState({
                        NotOptimizedConexxt2: res["data"]["ContextData"][1],
                      });
                      this.setState({
                        NotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                      });
                      this.setState({
                        NotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                      });
                      this.setState({
                        NotOptimizedRuleType2: res["data"]["RuleType"][1],
                      });
                      try {
                        this.setState({
                          NotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                        });
                      } catch (err) {

                      }


                      this.setState({
                        NotOptimizedConexxt3: res["data"]["ContextData"][2],
                      });
                      this.setState({
                        NotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                      });
                      this.setState({
                        NotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                      });
                      this.setState({
                        NotOptimizedRuleType3: res["data"]["RuleType"][2],
                      });

                      try {
                        this.setState({
                          NotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                        });
                      } catch (err) {

                      }


                      this.setState({
                        NotOptimizedConexxt4: res["data"]["ContextData"][4],
                      });
                      this.setState({
                        NotOptimizedErrorCate4: res["data"]["ErrorCaterygy"][4],
                      });
                      this.setState({
                        NotOptimizedMistake4: res["data"]["MistakeMessage"][4],
                      });
                      this.setState({
                        NotOptimizedRuleType4: res["data"]["RuleType"][4],
                      });
                      try {
                        this.setState({
                          NotOptimizedPossibleRepalcepent4: res["data"]["PossibleReplacemEnts"][3][0],
                        });
                      } catch (err) {

                      }



                    } else {
                      if (x == 5) {
                        this.setState({
                          NotOptiFound1: true,
                        });
                        this.setState({
                          NotOptiFound2: true,
                        });
                        this.setState({
                          NotOptiFound3: true,
                        });
                        this.setState({
                          NotOptiFound4: true,
                        });
                        this.setState({
                          NotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                        });

                        this.setState({
                          NotOptimizedConexxt: res["data"]["ContextData"][0],
                        });
                        this.setState({
                          NotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                        });
                        this.setState({
                          NotOptimizedMistake: res["data"]["MistakeMessage"][0],
                        });
                        this.setState({
                          NotOptimizedRuleType: res["data"]["RuleType"][0],
                        });

                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                          });
                        } catch (err) {

                        }



                        this.setState({
                          NotOptimizedConexxt2: res["data"]["ContextData"][1],
                        });
                        this.setState({
                          NotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                        });
                        this.setState({
                          NotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                        });
                        this.setState({
                          NotOptimizedRuleType2: res["data"]["RuleType"][1],
                        });

                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                          });
                        } catch (err) {

                        }


                        this.setState({
                          NotOptimizedConexxt3: res["data"]["ContextData"][2],
                        });
                        this.setState({
                          NotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                        });
                        this.setState({
                          NotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                        });
                        this.setState({
                          NotOptimizedRuleType3: res["data"]["RuleType"][2],
                        });

                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                          });
                        } catch (err) {

                        }


                        this.setState({
                          NotOptimizedConexxt4: res["data"]["ContextData"][4],
                        });
                        this.setState({
                          NotOptimizedErrorCate4: res["data"]["ErrorCaterygy"][4],
                        });
                        this.setState({
                          NotOptimizedMistake4: res["data"]["MistakeMessage"][4],
                        });
                        this.setState({
                          NotOptimizedRuleType4: res["data"]["RuleType"][4],
                        });

                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent4: res["data"]["PossibleReplacemEnts"][3][0],
                          });
                        } catch (err) {

                        }



                        this.setState({
                          NotOptimizedConexxt5: res["data"]["ContextData"][5],
                        });
                        this.setState({
                          NotOptimizedErrorCate5: res["data"]["ErrorCaterygy"][5],
                        });
                        this.setState({
                          NotOptimizedMistake5: res["data"]["MistakeMessage"][5],
                        });
                        this.setState({
                          NotOptimizedRuleType5: res["data"]["RuleType"][5],
                        });

                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent5: res["data"]["PossibleReplacemEnts"][4][0],
                          });

                        } catch (err) {

                        }


                      } else {
                        this.setState({
                          NotOptiFound1: true,
                        });
                        this.setState({
                          NotOptiFound2: true,
                        });
                        this.setState({
                          NotOptiFound3: true,
                        });
                        this.setState({
                          NotOptiFound4: true,
                        });

                        this.setState({
                          NotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                        });

                        this.setState({
                          NotOptimizedConexxt: res["data"]["ContextData"][0],
                        });
                        this.setState({
                          NotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                        });
                        this.setState({
                          NotOptimizedMistake: res["data"]["MistakeMessage"][0],
                        });
                        this.setState({
                          NotOptimizedRuleType: res["data"]["RuleType"][0],
                        });

                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                          });

                        } catch (err) {

                        }


                        this.setState({
                          NotOptimizedConexxt2: res["data"]["ContextData"][1],
                        });
                        this.setState({
                          NotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                        });
                        this.setState({
                          NotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                        });
                        this.setState({
                          NotOptimizedRuleType2: res["data"]["RuleType"][1],
                        });

                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                          });

                        } catch (err) {

                        }

                        this.setState({
                          NotOptimizedConexxt3: res["data"]["ContextData"][2],
                        });
                        this.setState({
                          NotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                        });
                        this.setState({
                          NotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                        });
                        this.setState({
                          NotOptimizedRuleType3: res["data"]["RuleType"][2],
                        });


                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                          });

                        } catch (er) {

                        }

                        this.setState({
                          NotOptimizedConexxt4: res["data"]["ContextData"][4],
                        });
                        this.setState({
                          NotOptimizedErrorCate4: res["data"]["ErrorCaterygy"][4],
                        });
                        this.setState({
                          NotOptimizedMistake4: res["data"]["MistakeMessage"][4],
                        });
                        this.setState({
                          NotOptimizedRuleType4: res["data"]["RuleType"][4],
                        });
                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepent4: res["data"]["PossibleReplacemEnts"][3][0],
                          });
                        } catch (err) {

                        }



                        this.setState({
                          NotOptimizedConexxt5: res["data"]["ContextData"][5],
                        });
                        this.setState({
                          NotOptimizedErrorCate5: res["data"]["ErrorCaterygy"][5],
                        });
                        this.setState({
                          NotOptimizedMistake5: res["data"]["MistakeMessage"][5],
                        });
                        this.setState({
                          NotOptimizedRuleType5: res["data"]["RuleType"][5],
                        });
                        try {
                          this.setState({
                            NotOptimizedPossibleRepalcepen5: res["data"]["PossibleReplacemEnts"][4][0],
                          });
                        } catch (err) {

                        }




                      }
                    }
                  }
                }
              }
              console.log(this.state.NotOptimizedNumberOfMistakeS, "Finally JHeree")
              console.log(this.state.NotOptimizedConexxt2, "Finally JHeree")
              console.log(this.state.NotOptimizedConexxt, "Finally JHeree")
              const Word2 = {
                EssaYdata: this.state.Optimized,

              }





              let BaseURlX22 = GrammarURl + "/GetGrammarMistakes"
              axios.post(BaseURlX22, Word2)
                .then(res => {
                  const data = res.data;

                  console.log(res["data"]['NumberOfMistakes'])


                  let x = parseInt(res["data"]['NumberOfMistakes'])



                  if (x == 1) {
                    this.setState({
                      OptiFound1: true,
                    });
                    this.setState({
                      OptiNotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                    });

                    this.setState({
                      OptiNotOptimizedConexxt: res["data"]["ContextData"][0],
                    });
                    this.setState({
                      OptiNotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                    });
                    this.setState({
                      OptiNotOptimizedMistake: res["data"]["MistakeMessage"][0],
                    });
                    this.setState({
                      OptiNotOptimizedRuleType: res["data"]["RuleType"][0],
                    });
                    try {
                      this.setState({
                        OptiNotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                      });
                    } catch (err) {

                    }



                  } else {
                    if (x == 2) {
                      this.setState({
                        OptiFound1: true,
                      });
                      this.setState({
                        OptiFound2: true,
                      });
                      this.setState({
                        OptiNotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                      });

                      this.setState({
                        OptiNotOptimizedConexxt: res["data"]["ContextData"][0],
                      });
                      this.setState({
                        OptiNotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                      });
                      this.setState({
                        OptiNotOptimizedMistake: res["data"]["MistakeMessage"][0],
                      });
                      this.setState({
                        OptiNotOptimizedRuleType: res["data"]["RuleType"][0],
                      });

                      try {
                        this.setState({
                          OptiNotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                        });

                      } catch (err) {

                      }



                      this.setState({
                        OptiNotOptimizedConexxt2: res["data"]["ContextData"][1],
                      });
                      this.setState({
                        OptiNotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                      });
                      this.setState({
                        OptiNotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                      });
                      this.setState({
                        OptiNotOptimizedRuleType2: res["data"]["RuleType"][1],
                      });

                      try {
                        this.setState({
                          OptiNotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                        });
                      } catch (err) {

                      }


                    } else {
                      if (x == 3) {
                        this.setState({
                          OptiFound1: true,
                        });
                        this.setState({
                          OptiFound2: true,
                        });
                        this.setState({
                          OptiFound3: true,
                        });

                        this.setState({
                          OptiNotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                        });

                        this.setState({
                          OptiNotOptimizedConexxt: res["data"]["ContextData"][0],
                        });
                        this.setState({
                          OptiNotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                        });
                        this.setState({
                          OptiNotOptimizedMistake: res["data"]["MistakeMessage"][0],
                        });
                        this.setState({
                          OptiNotOptimizedRuleType: res["data"]["RuleType"][0],
                        });
                        try {
                          this.setState({
                            OptiNotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                          });
                        } catch (err) {

                        }



                        this.setState({
                          OptiNotOptimizedConexxt2: res["data"]["ContextData"][1],
                        });
                        this.setState({
                          OptiNotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                        });
                        this.setState({
                          OptiNotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                        });
                        this.setState({
                          OptiNotOptimizedRuleType2: res["data"]["RuleType"][1],
                        });

                        try {

                        } catch (err) {
                          this.setState({
                            OptiNotOptimizedPossibleRepalcepen2: res["data"]["PossibleReplacemEnts"][1][0],
                          });
                        }


                        this.setState({
                          OptiNotOptimizedConexxt3: res["data"]["ContextData"][2],
                        });
                        this.setState({
                          OptiNotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                        });
                        this.setState({
                          OptiNotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                        });
                        this.setState({
                          OptiNotOptimizedRuleType3: res["data"]["RuleType"][2],
                        });

                        try {
                          this.setState({
                            OptiNotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                          });

                        } catch (err) {

                        }

                      } else {
                        if (x == 4) {
                          this.setState({
                            OptiFound1: true,
                          });
                          this.setState({
                            OptiFound2: true,
                          });
                          this.setState({
                            OptiFound3: true,
                          });
                          this.setState({
                            OptiFound4: true,
                          });
                          this.setState({
                            OptiNotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                          });

                          this.setState({
                            OptiNotOptimizedConexxt: res["data"]["ContextData"][0],
                          });
                          this.setState({
                            OptiNotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                          });
                          this.setState({
                            OptiNotOptimizedMistake: res["data"]["MistakeMessage"][0],
                          });
                          this.setState({
                            OptiNotOptimizedRuleType: res["data"]["RuleType"][0],
                          });

                          try {
                            this.setState({
                              OptiNotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                            });
                          } catch (err) {

                          }



                          this.setState({
                            OptiNotOptimizedConexxt2: res["data"]["ContextData"][1],
                          });
                          this.setState({
                            OptiNotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                          });
                          this.setState({
                            OptiNotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                          });
                          this.setState({
                            OptiNotOptimizedRuleType2: res["data"]["RuleType"][1],
                          });
                          try {
                            this.setState({
                              OptiNotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                            });

                          } catch (err) {

                          }

                          this.setState({
                            OptiNotOptimizedConexxt3: res["data"]["ContextData"][2],
                          });
                          this.setState({
                            OptiNotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                          });
                          this.setState({
                            OptiNotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                          });
                          this.setState({
                            OptiNotOptimizedRuleType3: res["data"]["RuleType"][2],
                          });

                          try {
                            this.setState({
                              OptiNotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                            });
                          } catch (err) {

                          }


                          this.setState({
                            OptiNotOptimizedConexxt4: res["data"]["ContextData"][4],
                          });
                          this.setState({
                            NotOptimizedErrorCate4: res["data"]["ErrorCaterygy"][4],
                          });
                          this.setState({
                            OptiNotOptimizedMistake4: res["data"]["MistakeMessage"][4],
                          });
                          this.setState({
                            OptiNotOptimizedRuleType4: res["data"]["RuleType"][4],
                          });

                          try {
                            this.setState({
                              OptiNotOptimizedPossibleRepalcepent4: res["data"]["PossibleReplacemEnts"][3][0],
                            });
                          } catch (err) {

                          }



                        } else {
                          if (x == 5) {
                            this.setState({
                              OptiFound1: true,
                            });
                            this.setState({
                              OptiFound2: true,
                            });
                            this.setState({
                              OptiFound3: true,
                            });
                            this.setState({
                              OptiFound4: true,
                            });
                            this.setState({
                              OptiNotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                            });

                            this.setState({
                              OptiNotOptimizedConexxt: res["data"]["ContextData"][0],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                            });
                            this.setState({
                              OptiNotOptimizedMistake: res["data"]["MistakeMessage"][0],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType: res["data"]["RuleType"][0],
                            });

                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                              });

                            } catch (err) {

                            }


                            this.setState({
                              OptiNotOptimizedConexxt2: res["data"]["ContextData"][1],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                            });
                            this.setState({
                              OptiNotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType2: res["data"]["RuleType"][1],
                            });

                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                              });
                            } catch (err) {

                            }


                            this.setState({
                              OptiNotOptimizedConexxt3: res["data"]["ContextData"][2],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                            });
                            this.setState({
                              OptiNotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType3: res["data"]["RuleType"][2],
                            });

                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                              });
                            } catch (err) {

                            }


                            this.setState({
                              OptiNotOptimizedConexxt4: res["data"]["ContextData"][4],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate4: res["data"]["ErrorCaterygy"][4],
                            });
                            this.setState({
                              OptiNotOptimizedMistake4: res["data"]["MistakeMessage"][4],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType4: res["data"]["RuleType"][4],
                            });

                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent4: res["data"]["PossibleReplacemEnts"][3][0],
                              });
                            } catch (err) {

                            }



                            this.setState({
                              OptiNotOptimizedConexxt5: res["data"]["ContextData"][5],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate5: res["data"]["ErrorCaterygy"][5],
                            });
                            this.setState({
                              OptiNotOptimizedMistake5: res["data"]["MistakeMessage"][5],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType5: res["data"]["RuleType"][5],
                            });

                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent5: res["data"]["PossibleReplacemEnts"][4][0],
                              });
                            } catch (err) {

                            }



                          } else {
                            this.setState({
                              OptiFound1: true,
                            });
                            this.setState({
                              OptiFound2: true,
                            });
                            this.setState({
                              OptiFound3: true,
                            });
                            this.setState({
                              OptiFound4: true,
                            });

                            this.setState({
                              OptiNotOptimizedNumberOfMistakeS: res["data"]["NumberOfMistakes"],
                            });

                            this.setState({
                              OptiNotOptimizedConexxt: res["data"]["ContextData"][0],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate: res["data"]["ErrorCaterygy"][0],
                            });
                            this.setState({
                              OptiNotOptimizedMistake: res["data"]["MistakeMessage"][0],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType: res["data"]["RuleType"][0],
                            });
                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent: res["data"]["PossibleReplacemEnts"][0][0],
                              });
                            } catch (err) {

                            }



                            this.setState({
                              OptiNotOptimizedConexxt2: res["data"]["ContextData"][1],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate2: res["data"]["ErrorCaterygy"][1],
                            });
                            this.setState({
                              OptiNotOptimizedMistake2: res["data"]["MistakeMessage"][1],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType2: res["data"]["RuleType"][1],
                            });

                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent2: res["data"]["PossibleReplacemEnts"][1][0],
                              });
                            } catch (er) {

                            }


                            this.setState({
                              OptiNotOptimizedConexxt3: res["data"]["ContextData"][2],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate3: res["data"]["ErrorCaterygy"][2],
                            });
                            this.setState({
                              OptiNotOptimizedMistake3: res["data"]["MistakeMessage"][2],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType3: res["data"]["RuleType"][2],
                            });

                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent3: res["data"]["PossibleReplacemEnts"][2][0],
                              });
                            } catch (err) {

                            }


                            this.setState({
                              OptiNotOptimizedConexxt4: res["data"]["ContextData"][4],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate4: res["data"]["ErrorCaterygy"][4],
                            });
                            this.setState({
                              OptiNotOptimizedMistake4: res["data"]["MistakeMessage"][4],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType4: res["data"]["RuleType"][4],
                            });
                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepent4: res["data"]["PossibleReplacemEnts"][3][0],
                              });
                            } catch (err) {

                            }



                            this.setState({
                              OptiNotOptimizedConexxt5: res["data"]["ContextData"][5],
                            });
                            this.setState({
                              OptiNotOptimizedErrorCate5: res["data"]["ErrorCaterygy"][5],
                            });
                            this.setState({
                              OptiNotOptimizedMistake5: res["data"]["MistakeMessage"][5],
                            });
                            this.setState({
                              OptiNotOptimizedRuleType5: res["data"]["RuleType"][5],
                            });
                            try {
                              this.setState({
                                OptiNotOptimizedPossibleRepalcepen5: res["data"]["PossibleReplacemEnts"][4][0],
                              });
                            } catch (err) {

                            }


                          }
                        }
                      }
                    }
                  }
                  console.log(this.state.OptiNotOptimizedNumberOfMistakeS, "Finally JHeree")
                  console.log(this.state.OptiNotOptimizedConexxt, "Finally JHeree")
                  console.log(this.state.OptiNotOptimizedConexxt2, "Finally JHeree")










                })

            })
        })


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

  OpenNotOptimized = e => {
    this.setState({ NotStek: !this.state.NotStek });
  }
  OptimizedErrorMEssages = e => {
    this.setState({ YesSTEK: !this.state.YesSTEK });
  }
  OpenError1 = e => {
    this.setState({ Error1: !this.state.Error1 });
  }
  OpenError2 = e => {
    this.setState({ Error2: !this.state.Error2 });
  }
  OpenError3 = e => {
    this.setState({ Error3: !this.state.Error3 });
  }
  OpenError4 = e => {
    this.setState({ Error4: !this.state.Error4 });
  }
  OpenError5 = e => {
    this.setState({ Error5: !this.state.Error5 });
  }
  OpenError6 = e => {
    this.setState({ Error6: !this.state.Error6 });
  }



  NOTOpenError1 = e => {
    this.setState({ NOTError1: !this.state.NOTError1 });
  }
  NOTOpenError2 = e => {
    this.setState({ NOTError2: !this.state.NOTError2 });
  }
  NOTOpenError3 = e => {
    this.setState({ NOTError3: !this.state.NOTError3 });
  }
  NOTOpenError4 = e => {
    this.setState({ NOTError4: !this.state.NOTError4 });
  }
  NOTOpenError5 = e => {
    this.setState({ NOTError5: !this.state.NOTError5 });
  }
  NOTOpenError6 = e => {
    this.setState({ NOTError6: !this.state.NOTError6 });
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
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
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
      left: '47%',
      transform: 'translate(-42%, -39%)',
      width: 700,
      height: 430,

      background: 'white',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const style2 = {
      position: 'absolute',
      top: '50%',
      left: '47%',
      transform: 'translate(-42%, -39%)',
      width: 500,
      height: 400,

      background: 'white',
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
                <i class="keyboard  icon"></i>
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
            <div style={{ marginLeft: '20px' }} class="ui segment">



              {

                MainLoader && (
                  <div class="ui active inverted dimmer" style={{ background: 'white' }}>
                    <div class="ui text loader">Please wait while STEK generate your results    </div>
                  </div>

                )

              }


              <Modal
                open={this.state.NotStek}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OpenNotOptimized} class="close black icon"></i>
                    <div class="ui  three statistics">
                      <div class="red statistic">
                        <div class="value">
                          {this.state.NotOptimizedNumberOfMistakeS}
                        </div>
                        <div class="label">
                          Grammar Mistakes
                        </div>
                      </div>
                      <div class="  red statistic">
                        <div class="value">
                          {this.state.Accuracy}%
                        </div>
                        <div class="label">
                          Essay Score
                        </div>
                      </div>

                      <div class="red statistic">
                        <div class="value">
                          {this.state.Clarity}%
                        </div>
                        <div class="label">
                          OverAll Score
                        </div>
                      </div>

                    </div>
                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <h1 style={{ color: 'black' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes</h1>
                      <div data-aos="fade-up" className="ui max-w-3xl mx-auto text-left pb-12 md:pb-1 divided selection list">

                        {
                          this.state.NotOptiFound1 && (

                            <a class="item">
                              <div onClick={this.OpenError1} style={{ color: 'black' }} class="ui red horizontal label">1 -</div>
                              <x style={{ color: 'black' }}> {this.state.NotOptimizedConexxt}</x>
                            </a>


                          )
                        }
                        {
                          this.state.NotOptiFound1 && (

                            <a class="item">
                              <div onClick={this.OpenError2} style={{ color: 'black' }} class="ui red horizontal label">2 -</div>
                              <x style={{ color: 'black' }}> {this.state.NotOptimizedConexxt2}</x>
                            </a>


                          )
                        }
                        {
                          this.state.NotOptiFound1 && (

                            <a class="item">
                              <div onClick={this.OpenError3} style={{ color: 'black' }} class="ui red horizontal label">3 -</div>
                              <x style={{ color: 'black' }}> {this.state.NotOptimizedConexxt3}</x>
                            </a>


                          )
                        }
                        {
                          this.state.NotOptiFound1 && (

                            <a class="item">
                              <div onClick={this.OpenError4} style={{ color: 'black' }} class="ui red horizontal label">4 -</div>
                              <x style={{ color: 'black' }}> {this.state.NotOptimizedConexxt4}</x>
                            </a>


                          )
                        }







                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>




              <Modal
                open={this.state.Error1}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OpenError1} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedPossibleRepalcepent}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.Error2}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OpenError2} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes2</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedPossibleRepalcepent2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType2}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.Error3}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OpenError3} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes3</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedPossibleRepalcepent3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType3}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.Error4}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OpenError4} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes4</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedPossibleRepalcepent4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType4}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>


              <Modal
                open={this.state.Error5}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OpenError5} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes5</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedPossibleRepalcepent5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType5}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.Error6}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OpenError6} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes6</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType6}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>













              <Modal
                open={this.state.YesSTEK}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.OptimizedErrorMEssages} class="close black icon"></i>
                    <div class="ui  three statistics">
                      <div class="red statistic">
                        <div class="value">
                          {this.state.OptiNotOptimizedNumberOfMistakeS}
                        </div>
                        <div class="label">
                          Grammar Mistakes
                        </div>
                      </div>
                      <div class="  red statistic">
                        <div class="value">
                          {this.state.Accuracy}%
                        </div>
                        <div class="label">
                          Essay Score
                        </div>
                      </div>

                      <div class="red statistic">
                        <div class="value">
                          {this.state.Clarity}%
                        </div>
                        <div class="label">
                          OverAll Score
                        </div>
                      </div>

                    </div>
                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <h1 style={{ color: 'black' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes</h1>
                      <div data-aos="fade-up" className="ui max-w-3xl mx-auto text-left pb-12 md:pb-1 divided selection list">

                        {
                          this.state.OptiFound1 && (

                            <a class="item">
                              <div onClick={this.NOTOpenError1} style={{ color: 'black' }} class="ui red horizontal label">1 -</div>
                              <x style={{ color: 'black' }}> {this.state.OptiNotOptimizedConexxt}</x>
                            </a>


                          )
                        }


                        {
                          this.state.OptiFound2 && (

                            <a class="item">
                              <div onClick={this.NOTOpenError2} style={{ color: 'black' }} class="ui red horizontal label">2 -</div>
                              <x style={{ color: 'black' }}> {this.state.OptiNotOptimizedConexxt2}</x>
                            </a>


                          )
                        }

                        {
                          this.state.OptiFound3 && (

                            <a class="item">
                              <div onClick={this.NOTOpenError3} style={{ color: 'black' }} class="ui red horizontal label">3 -</div>
                              <x style={{ color: 'black' }}> {this.state.OptiNotOptimizedConexxt3}</x>
                            </a>


                          )
                        }

                        {
                          this.state.OptiFound4 && (

                            <a class="item">
                              <div onClick={this.NOTOpenError4} style={{ color: 'black' }} class="ui red horizontal label">4 -</div>
                              <x style={{ color: 'black' }}> {this.state.OptiNotOptimizedConexxt4}</x>
                            </a>


                          )
                        }








                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>


              <Modal
                open={this.state.NOTError1}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.NOTOpenError1} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedConexxt}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedMistake}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedPossibleRepalcepent}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedErrorCate}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedRuleType}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.NOTError2}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.NOTOpenError2} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes2</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedConexxt2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedMistake2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedPossibleRepalcepent2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedErrorCate2}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedRuleType2}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.NOTError3}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.NOTOpenError3} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes3</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedConexxt3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedMistake3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedPossibleRepalcepent3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedErrorCate3}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedRuleType3}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.NOTError4}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.NOTOpenError4} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes4</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedConexxt4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedMistake4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedPossibleRepalcepent4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedErrorCate4}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.OptiNotOptimizedRuleType4}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>


              <Modal
                open={this.state.NOTError5}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.NOTOpenError5} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes5</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedPossibleRepalcepent5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate5}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType5}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>

              <Modal
                open={this.state.NOTError6}


                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2}>

                  <div data-aos="fade-left" class="ui basic">
                    <i onClick={this.NOTOpenError6} class="close black icon"></i>

                    <br></br>
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-1">
                      <center><h1 style={{ color: 'black', marginTop: '-50px' }} className="h4 mb-4" data-aos="fade-up">Recognized grammar mistakes6</h1></center>
                      <div class="ui comments">
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>

                          </a>
                          <div class="content">
                            <a class="author">Context</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Mistake</a>
                            <div class="text">
                              {this.state.NotOptimizedMistake6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Possible Replacements</a>
                            <div class="text">
                              {this.state.NotOptimizedConexxt6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Error Category</a>
                            <div class="text">
                              {this.state.NotOptimizedErrorCate6}
                            </div>

                          </div>
                        </div>
                        <div class="comment">
                          <a class="avatar">
                            <img src={ErrorImage}></img>
                          </a>
                          <div class="content">
                            <a class="author">Rule</a>
                            <div class="text">
                              {this.state.NotOptimizedRuleType6}
                            </div>

                          </div>
                        </div>




                      </div>


                    </div>



                  </div>
                </Box>

              </Modal>




















              {/* Section header */}
              {/* Items */}
              <div className="grid gap-20" data-aos-id-target>

                {/* Item */}
                <div style={{ marginLeft: '-50px' }} className="md:grid md:grid-cols-12 ">


                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">

                      <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                        <b> <center><h4 style={{ color: 'black' }} className="h4 mb-2"><span className="text-purple-600">.</span> Optimized With STEK</h4></center></b>
                        <center> <p style={{ color: 'black' }} className="text-lg text-gray-400">{this.state.Optimized}</p>
                          {

                            !this.state.OptiFound1 && (
                              <div className="flex flex-wrap -mx-3 mt-2">
                                <div className="w-full px-3">
                                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" >Calculating The Score</button>
                                </div>
                              </div>

                            )

                          }
                          {

                            this.state.OptiFound1 && (
                              <div className="flex flex-wrap -mx-3 mt-2">
                                <div className="w-full px-3">
                                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={this.OptimizedErrorMEssages}>Check Mistakes</button>
                                </div>
                              </div>

                            )

                          }

                        </center> </div>

                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">

                      <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                        <b> <center> <h4 style={{ color: 'black' }} className="h4 mb-2"><span className="text-purple-600">.</span> Without Optimization</h4></center></b>
                        <center><p style={{ color: 'black' }} className="text-lg text-gray-400">{this.state.NotOptimized}</p>

                          {

                            !this.state.NotOptiFound1 && (
                              <div className="flex flex-wrap -mx-3 mt-2">
                                <div className="w-full px-3">
                                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" >Calculating The Score</button>
                                </div>
                              </div>

                            )

                          }

                          {

                            this.state.NotOptiFound1 && (
                              <div className="flex flex-wrap -mx-3 mt-2">
                                <div className="w-full px-3">
                                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={this.OpenNotOptimized}>Check Mistakes</button>
                                </div>
                              </div>

                            )

                          }

                        </center> </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}
