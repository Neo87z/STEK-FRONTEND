import React, { Component } from "react";
import { Link } from 'react-router-dom';

import axios from 'axios';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';


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
      CurrentTense: "Please Input A Complete Sentence ",
      SimplePresentEntered: false,
      PresentConmtinousEntered: false,
      PresentPerfectEntered: false,
      PresentPerfectContinousEntered: false,
      PastContinousEntered: false,
      PastPerfectContinousEntered: false,
      SimpleFuturweEntered: false,
      FutureContinousEntered: false,
      FuturePerfectEntered: false,
      FuturePErfectCOntouesEntered: false,
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      Output: false,
      OutputData: "None",
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',


      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false,
      FinalChecker: 'None',
      FinalChecker2: 'None',


    };
  }

  SimplePresentToSimplePast = (e) => {


    console.log('assss')

    this.setState({
      FinalChecker: 'SimplePresent',
      FinalChecker2: 'SimplePast',
      bgColor: 'orange',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: true,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }


  SimplePresentToFuture = (e) => {



    this.setState({
      FinalChecker: 'SimplePresent',
      FinalChecker2: 'SimpleFuture',
      bgColor: '#1C7FCA',
      bgColorFuture: 'orange',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: true,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }

  PresentContinousToPastContinous = (e) => {



    this.setState({

      FinalChecker: 'PresentContinous',
      FinalChecker2: 'PastContinous',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: 'orange',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: true,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }

  PresentContinousTOFuturContinous = (e) => {



    this.setState({


      FinalChecker: 'PresentContinous',
      FinalChecker2: 'FutureContinous',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: 'orange',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: true,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }

  PresentPerfectToPastPerfect = (e) => {



    this.setState({

      FinalChecker: 'PresentPerfect',
      FinalChecker2: 'PastPerfect',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: 'orange',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: true,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }


  PresentPerfectToFuturePerfect = (e) => {



    this.setState({



      FinalChecker: 'PresentPerfect',
      FinalChecker2: 'FuturePerfect',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: 'orange',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: true,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }

  PresentPerfectContonousToFuturePerfectContinpus = (e) => {



    this.setState({


      FinalChecker: 'PresentPerfectContinous',
      FinalChecker2: 'FuturePerfectContois',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: 'orange',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: true,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }

  PresentPerfectContinousToPastPerfectContinous = (e) => {



    this.setState({
      FinalChecker: 'PresentPerfectContinous',
      FinalChecker2: 'PastPerfectContinous',

      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: 'orange',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: true,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }


  PastContinousToPresentContioys = (e) => {



    this.setState({


      FinalChecker: 'PastPerfectContinous',
      FinalChecker2: 'PresentPerfectContinous',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: 'orange',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',

      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: true,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }


  PastPerfectToPresentPerfect = (e) => {



    this.setState({


      FinalChecker: 'PastPerfect',
      FinalChecker2: 'PresentPerfect',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: 'orange',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',

      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: true,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }

  PastPerfectContinousToPresentPerfectContinous = (e) => {




    this.setState({
      FinalChecker: 'PastPerfectContinous',
      FinalChecker2: 'PresentPerfectContinous',

      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: 'orange',
      SimpleFutureTOSimplePresentbgColor: '#1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',

      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: true,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }


  SimpleFutureTOSimplePresent = (e) => {



    this.setState({


      FinalChecker: 'PastPerfectContinous',
      FinalChecker2: 'PresentPerfectContinous',

      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: 'orange',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: true,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }


  FutureContinousTOPresentContinous = (e) => {



    this.setState({

      FinalChecker: 'PastPerfectContinous',
      FinalChecker2: 'PresentPerfectContinous',

      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '1C7FCA',
      FutureContinousTOPresentContinousbgColor: 'orange',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: true,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }


  FuturePerfectToPresentPerfect = (e) => {



    this.setState({


      FinalChecker: 'PastPerfectContinous',
      FinalChecker2: 'PresentPerfectContinous',
      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: 'orange',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',

      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: true,
      FutyrePerfectContinousToPresentPerfectContinous: false

    });
  }

  SubmitDat = (e) => {



    e.preventDefault();
    const Word = {
      Sentence: this.state.Sentence,
      Data1: this.state.FinalChecker,
      Data2: this.state.FinalChecker2,

    }

    axios.post('http://a8cc-35-237-188-75.ngrok.io/TrasnfomerSentence', Word)
      .then(res => {
        this.setState({
          OutputData: res["data"]["Sentence"],
        }),
          this.setState({
            Output: true,
          })
      }


      );





  };
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  FutyrePerfectContinousToPresentPerfectContinous = (e) => {



    this.setState({
      FinalChecker: 'PastPerfectContinous',
      FinalChecker2: 'PresentPerfectContinous',

      bgColor: '#1C7FCA',
      bgColorFuture: '#1C7FCA',
      PresentContinousToPastContinousbgColor: '#1C7FCA',
      PresentContinousTOFuturContinousbgColor: '#1C7FCA',
      PresentPerfectToPastPerfectbgColor: '#1C7FCA',
      PresentPerfectToFuturePerfectbgColor: '#1C7FCA',
      PresentPerfectContonousToFuturePerfectContinpusbgColor: '#1C7FCA',
      PresentPerfectContinousToPastPerfectContinousbgColor: '#1C7FCA',
      PastContinousToPresentContioysbgColor: '#1C7FCA',
      PastPerfectToPresentPerfectbgColor: '#1C7FCA',
      PastPerfectContinousToPresentPerfectContinousbgColor: '#1C7FCA',
      SimpleFutureTOSimplePresentbgColor: '1C7FCA',
      FutureContinousTOPresentContinousbgColor: '#1C7FCA',
      FuturePerfectToPresentPerfectbgColor: '#1C7FCA',
      FutyrePerfectContinousToPresentPerfectContinousbgColor: '#orange',
      SimplePresentToSimplePast: false,
      SimplePresentToFuture: false,
      PresentContinousToPastContinous: false,
      PresentContinousTOFuturContinous: false,
      PresentPerfectToPastPerfect: false,
      PresentPerfectToFuturePerfect: false,
      PresentPerfectContonousToFuturePerfectContinpus: false,
      PresentPerfectContinousToPastPerfectContinous: false,
      PastContinousToPresentContioys: false,
      PastPerfectToPresentPerfect: false,
      PastPerfectContinousToPresentPerfectContinous: false,
      SimpleFutureTOSimplePresent: false,
      FutureContinousTOPresentContinous: false,
      FuturePerfectToPresentPerfect: false,
      FutyrePerfectContinousToPresentPerfectContinous: true

    });
  }


  onChnageAccountNumber = (e) => {



    this.setState({

      Sentence: e.target.value

    });


    const myArray = this.state.Sentence.split(" ");

    let SimplePresnet = false;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] == 'am' || myArray[i] == 'is' || myArray[i] == 'are' || myArray[i] == 'have' || myArray[i] == 'has' || myArray[i] == 'was' || myArray[i] == 'were' || myArray[i] == 'had' || myArray[i] == 'will') {

        SimplePresnet = true;
        break;
      } else {
        SimplePresnet = false;

      }

    }


    let PresentContinous = false;
    if (SimplePresnet == false) {
      this.setState({

        SimplePresentEntered: true,
        PresentConmtinousEntered: false,
        PresentPerfectEntered: false,
        PresentPerfectContinousEntered: false,
        PastContinousEntered: false,
        PastPerfectContinousEntered: false,
        SimpleFuturweEntered: false,
        FutureContinousEntered: false,
        FuturePerfectEntered: false,
        FuturePErfectCOntouesEntered: false,


      });

      this.setState({

        CurrentTense: "Entered Sentence Is In Simple Present Tense"

      });
    } else {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 'am' || myArray[i] == 'is' || myArray[i] == 'are') {

          PresentContinous = true;
          break;
        } else {
          PresentContinous = false;

        }

      }
    }
    let PresentPerfect = false;
    let PresentperfectContinous = false;
    if (PresentContinous == true) {
      this.setState({

        CurrentTense: "Entered Sentence Is In Present Continous Tense"

      });
      this.setState({

        PresentConmtinousEntered: true,
        SimplePresentEntered: false,
        PresentPerfectEntered: false,
        PresentPerfectContinousEntered: false,
        PastContinousEntered: false,
        PastPerfectContinousEntered: false,
        SimpleFuturweEntered: false,
        FutureContinousEntered: false,
        FuturePerfectEntered: false,
        FuturePErfectCOntouesEntered: false,

      });

    } else {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 'have' || myArray[i] == 'has') {

          for (let x = 0; x < myArray.length; x++) {
            if (myArray[x] == 'been') {

              PresentperfectContinous = true;
              break;
            } else {
              PresentperfectContinous = false;

            }

          }
          if (PresentperfectContinous != true) {
            PresentPerfect = true;
          }

          break;
        } else {
          PresentPerfect = false;

        }

      }

    }


    let PastContinous = false;
    if (PresentPerfect == true) {
      this.setState({

        CurrentTense: "Entered Sentence Is In Present Perfect Tense"

      });
      this.setState({

        PresentPerfectEntered: true,
        SimplePresentEntered: false,
        PresentConmtinousEntered: false,
        PresentPerfectContinousEntered: false,
        PastContinousEntered: false,
        PastPerfectContinousEntered: false,
        SimpleFuturweEntered: false,
        FutureContinousEntered: false,
        FuturePerfectEntered: false,
        FuturePErfectCOntouesEntered: false,

      });

    } else {
      if (PresentperfectContinous == true) {
        this.setState({

          CurrentTense: "Entered Sentence Is Present Perfect Continous Tense"

        });
        this.setState({

          PresentPerfectContinousEntered: true,
          SimplePresentEntered: false,
          PresentConmtinousEntered: false,
          PresentPerfectEntered: false,
          PastContinousEntered: false,
          PastPerfectContinousEntered: false,
          SimpleFuturweEntered: false,
          FutureContinousEntered: false,
          FuturePerfectEntered: false,
          FuturePErfectCOntouesEntered: false,


        });

      } else {
        for (let i = 0; i < myArray.length; i++) {
          if (myArray[i] == 'was' || myArray[i] == 'were') {

            PastContinous = true;
            break;
          } else {
            PastContinous = false;

          }

        }

      }
    }

    let pastPerfecContinous = false;
    if (PastContinous == true) {
      this.setState({

        CurrentTense: "Entered Sentence Is In Past Continous Tense"

      });
      this.setState({

        PastContinousEntered: true,
        SimplePresentEntered: false,
        PresentConmtinousEntered: false,
        PresentPerfectEntered: false,
        PresentPerfectContinousEntered: false,
        PastPerfectContinousEntered: false,
        SimpleFuturweEntered: false,
        FutureContinousEntered: false,
        FuturePerfectEntered: false,
        FuturePErfectCOntouesEntered: false,

      });

    } else {

      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 'had') {
          if (myArray[i + 1] == 'been') {
            pastPerfecContinous = true;
            break;

          }




        } else {
          pastPerfecContinous = false;


        }

      }

    }

    let SimpleFture = false;
    let FutureContinous = false;
    let FuturePerfect = false;
    let FutirePerfectContinous = false;
    if (pastPerfecContinous == true) {
      this.setState({

        CurrentTense: "Entered Sentence Is In Past Perfect Continous Tense"

      });

      this.setState({

        PastPerfectContinousEntered: true,
        SimplePresentEntered: false,
        PresentConmtinousEntered: false,
        PresentPerfectEntered: false,
        PresentPerfectContinousEntered: false,
        PastContinousEntered: false,
        SimpleFuturweEntered: false,
        FutureContinousEntered: false,
        FuturePerfectEntered: false,
        FuturePErfectCOntouesEntered: false,

      });

    } else {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 'will') {

          if (myArray[i + 1] == 'be') {
            FutureContinous = true;
            break;

          } else {
            if (myArray[i + 1] == 'have') {

              if (myArray[i + 2] == 'been') {
                FutirePerfectContinous = true;
              } else {
                FuturePerfect = true;
              }

              break;

            } else {
              SimpleFture = true;
            }
          }





          break;
        } else {
          SimpleFture = false;

        }

      }

    }

    if (SimpleFture == true) {
      this.setState({

        CurrentTense: "Entered Sentence Is In Simple Future Tense"

      });
      this.setState({

        SimpleFuturweEntered: true,
        SimplePresentEntered: false,
        PresentConmtinousEntered: false,
        PresentPerfectEntered: false,
        PresentPerfectContinousEntered: false,
        PastContinousEntered: false,
        PastPerfectContinousEntered: false,
        FutureContinousEntered: false,
        FuturePerfectEntered: false,
        FuturePErfectCOntouesEntered: false,

      });

    } else {
      if (FutureContinous == true) {
        this.setState({

          CurrentTense: "Entered Sentence Is In Future Continous Tense"

        });
        this.setState({

          FutureContinousEntered: true,
          SimplePresentEntered: false,
          PresentConmtinousEntered: false,
          PresentPerfectEntered: false,
          PresentPerfectContinousEntered: false,
          PastContinousEntered: false,
          PastPerfectContinousEntered: false,
          SimpleFuturweEntered: false,
          FuturePerfectEntered: false,
          FuturePErfectCOntouesEntered: false,

        });

      } else {
        if (FuturePerfect == true) {
          this.setState({

            CurrentTense: "Entered Sentence Is In  Future Perfect Tense"

          });
          this.setState({

            FuturePerfectEntered: true,
            SimplePresentEntered: false,
            PresentConmtinousEntered: false,
            PresentPerfectEntered: false,
            PresentPerfectContinousEntered: false,
            PastContinousEntered: false,
            PastPerfectContinousEntered: false,
            SimpleFuturweEntered: false,
            FutureContinousEntered: false,
            FuturePErfectCOntouesEntered: false,

          });

        } else {
          if (FutirePerfectContinous == true) {
            this.setState({

              CurrentTense: "Entered Sentence Is In Future Perfect Continous Tense"

            });
            this.setState({

              FuturePErfectCOntouesEntered: true,
              SimplePresentEntered: false,
              PresentConmtinousEntered: false,
              PresentPerfectEntered: false,
              PresentPerfectContinousEntered: false,
              PastContinousEntered: false,
              PastPerfectContinousEntered: false,
              SimpleFuturweEntered: false,
              FutureContinousEntered: false,
              FuturePerfectEntered: false,

            });
          }
        }
      }
    }








  };

  onSubmit = (e) => {



    e.preventDefault();
    const Word = {
      SentenceData: this.state.Sentence,

    }

    axios.post('http://4fdce7f64a3c.ngrok.io/SaveSentnece', Word)
      .then();

    this.sleep(2000).then(r => {
      window.location = `/essay-results`
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
                      <div class="description">Introduction To The Verb Transformer </div>
                    </div>
                  </div>

                  <div class=" active step">
                    <i class="pencil   icon"></i>
                    <div class="content">
                      <div class="title">Input</div>
                      <div class="description">Enter The Sentence Required </div>
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
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-1">
                  <h3 className="h3">Enter The Sentence That You Need Converted.</h3>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">




                </div>
                <br></br>
                <div class="ui  segment">
                  <div class="ui two column  center aligned grid">
                    <div class="ui vertical divider"> To</div>
                    <div class="middle aligned row">
                      <div class="column">

                        <div class="field">
                          <div class="ui search">
                            <div class="ui icon input">
                              <input

                                value={this.state.Sentence}
                                onChange={this.onChnageAccountNumber}

                                style={{ width: '350px' }} class="prompt" type="text" placeholder="Enter The Sentence "></input>

                            </div>
                            <div class="results"></div>
                          </div>
                          <br></br>

                          <div class="ui primary button">
                            {this.state.CurrentTense}
                          </div>
                        </div>
                      </div>
                      <div class="column">
                        <div class="ui icon header">

                          Available Convertions
                        </div>
                        <br></br>


                        {
                          this.state.SimplePresentEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.bgColor, color: 'white' }} onClick={this.SimplePresentToSimplePast} class="ui  button">
                                Simple Past
                              </div>
                              <div style={{ backgroundColor: this.state.bgColorFuture, color: 'white' }} onClick={this.SimplePresentToFuture} class="ui  button">
                                Simple Future
                              </div>
                            </div>
                          )
                        }

                        {
                          this.state.PresentConmtinousEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.PresentContinousToPastContinousbgColor, color: 'white' }} onClick={this.PresentContinousToPastContinous} class="ui primary button">
                                Past Continous
                              </div>
                              <div style={{ backgroundColor: this.state.PresentContinousTOFuturContinousbgColor, color: 'white' }} onClick={this.PresentContinousTOFuturContinous} class="ui primary button">
                                Future Continous
                              </div>
                            </div>
                          )
                        }



                        {
                          this.state.PresentPerfectEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.PresentPerfectToPastPerfectbgColor, color: 'white' }} onClick={this.PresentPerfectToPastPerfect} class="ui primary button">
                                Past Perfect
                              </div>
                              <div style={{ backgroundColor: this.state.PresentPerfectToFuturePerfectbgColor, color: 'white' }} onClick={this.PresentPerfectToFuturePerfect} class="ui primary button">
                                Future Perfect
                              </div>
                            </div>
                          )
                        }

                        ,
                        {
                          this.state.PresentPerfectContinousEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.PastContinousToPresentContioysbgColor, color: 'white' }} onClick={this.PastContinousToPresentContioys} class="ui primary button">
                                Past Perfect Continous
                              </div>

                              <div style={{ backgroundColor: this.state.PastPerfectToPresentPerfectbgColor, color: 'white' }} onClick={this.PastPerfectToPresentPerfect} class="ui primary button">
                                Future Perfect Continous
                              </div>
                            </div>
                          )
                        }



                        {
                          this.state.PastContinousEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.PastContinousToPresentContioysbgColor, color: 'white' }} onClick={this.PastContinousToPresentContioys} class="ui primary button">
                                Present Continous
                              </div>

                            </div>
                          )
                        }



                        {
                          this.state.PastPerfectContinousEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.PastPerfectToPresentPerfectbgColor, color: 'white' }} onClick={this.PastPerfectToPresentPerfect} class="ui primary button">
                                Present Perfect Continous
                              </div>

                            </div>
                          )
                        }




                        {
                          this.state.SimpleFuturweEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.SimpleFutureTOSimplePresentbgColor, color: 'white' }} onClick={this.SimpleFutureTOSimplePresent} class="ui primary button">
                                Simple Present
                              </div>

                            </div>
                          )
                        }
                        {
                          this.state.FutureContinousEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.FutureContinousTOPresentContinousbgColor, color: 'white' }} onClick={this.FutureContinousTOPresentContinous} class="ui primary button">
                                Present Continous
                              </div>

                            </div>
                          )
                        }
                        {
                          this.state.FuturePerfectEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.FuturePerfectToPresentPerfectbgColor, color: 'white' }} onClick={this.FuturePerfectToPresentPerfect} class="ui primary button">
                                Present Perfect
                              </div>

                            </div>
                          )
                        }
                        {
                          this.state.FuturePErfectCOntouesEntered && (
                            <div>
                              <div style={{ backgroundColor: this.state.FutyrePerfectContinousToPresentPerfectContinousbgColor, color: 'white' }} onClick={this.FutyrePerfectContinousToPresentPerfectContinous} class="ui primary button">
                                Present Perfect Continous
                              </div>

                            </div>
                          )
                        }

                      </div>
                    </div>
                  </div>
                </div>
                {
                  this.state.Output && (
                    <center>Result <div class="ui  segment">
                     
                      <div class="ui icon header">

                        {this.state.OutputData}
                      </div>

                    </div></center>
                  )
                }

                <br></br>

                <div className="flex flex-wrap -mx-3 mt-2">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={this.SubmitDat}>Convert Sentence</button>
                  </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-1">

                  <div className="py-12 md:py-20 border-t border-gray-800">

                    <div className="max-w-1xl mx-auto text-center pb-1 md:pb-1">


                      <p className="text-xl text-red-400">*Make Sure That the Sentence Entered Is Gramatically Correct</p>
                      <p className="text-xl text-red-400">*The Output And The Acuracy Of The Sentence Will Be Based On The Sentence Provided.</p>

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
