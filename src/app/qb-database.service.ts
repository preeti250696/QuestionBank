import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QbDatabaseService {
  ClassList: any = {
   "09":{
      ID:"09",
      Text: '9th'
    },
   "10":{
     ID:"10",
     Text:"10th"
   }
  }
  SubjectList: any = {
    "physics": {
      ID: "physics",
      Text: "Physics"
    },
    "chemistry": {
      ID: "chemistry",
      Text: "Chemistry"
    },
    "Maths":{
      ID: "maths",
      Text: "Maths"
    }
  }
  ChapterList: any = {
    "09||physics||Motion": {
      ID: "09||physics||Motion",
      Text: "Motion",
      Topics: "Movement of a Body is Called Motion ; Distance Travelled and Displacement ; Uniform Motion and Non-Uniform Motion ; Speed ; Average Speed and Uniform Speed ; Velocity ; Uniform Velocity ; Speed and Velocity are Not Always Equal in Magnitude ; Acceleration ; Uniform Acceleration and Non-Uniform Acceleration ; Retardation ; Average Velocity ; Equations of Uniformly Accelerated Motion : Three Equations of Motion ; Distance-Time Graphs ; Speed-Time Graphs ; Derivation of Equations of Motion by Graphical Method ; Uniform Circular Motion ; Examples of Uniform Circular Motion ; Calculate the Speed of a Body Moving in Uniform Circular Motion"
    },
    "09||physics||ForceAndLawsOFMotion": {
      ID: "09||physics||ForceAndLawsOFMotion",
      Text: "Force and Laws of Motion",
      Topics: "A Push or Pull on a Body is Called Force ; Effects of Force ; Balanced Forces and Unbalanced Forces ; Newton’s First Law of Motion and Inertia of Bodies (or Objects) ; Momentum ; Newton’s Second Law of Motion ; Applications of Newton’s Second Law of Motion ; Newton’s Third Law of Motion ; Some Examples to Illustrate Newton’s Third Law of Motion : How Do We Walk, Why the Gun Recoils, The Flying of Jet Aeroplanes and Rockets, The Case of a Boat and the Ship, The Case of Hose Pipe, The Case of Horse Pulling a Cart ; Conservation of Momentum ; Law of Conservation of Momentum ; Applications of the Law of Conservation of Momentum"
    },
    "09||physics||Gravitation": {
      ID: "09||physics||Gravitation",
      Text: "Gravitation",
      Topics: "Every Object in the Universe Attracts Every Other Object ; Universal Law of Gravitation ; Kepler’s Laws of Planetary Motion ; How Did Newton Guess the Inverse Square Law ; Newton’s Third Law of Motion and Gravitation ; Free Fall and Freely Falling Bodies ; Acceleration Due to Gravity Calculation and Variation ; Equations of Motion For Freely Falling Bodies ; Mass and Weight ; Weight of an Object on the Moon ; Thrust and Pressure ; Application of Pressure ; Pressure in Fluids (Liquids and Gases) ; Buoyant Force and Its Cause ; Factors Affecting Buoyant Force ; Archimedes’ Principle and Applications ; Flotation ; The Density of Floating Objects ; Why Ships Float ; Density and Relative Density"
    },
    "09||physics||WorkAndEnergy": {
      ID: "09||physics||WorkAndEnergy",
      Text: "Work and Energy",
      Topics: "Work is Done When a Force Produces Motion ; Work Done Against Gravity ; Work Done by a Force Acting at an Angle ; Positive Work, Negative Work and Zero Work ; Energy and Its Forms ; Kinetic Energy ; Potential Energy ; Gravitational Potential Energy and Elastic Potential Energy ; Power ; Commercial Unit of Energy ; Transformation of Energy ; Using Energy Converters ; Law of Conservation of Energy ; Conservation of Energy During the Free Fall of a Body; Conservation of Energy in a Simple Pendulum"
    },
    "09||physics||Sound": {
      ID: "09||physics||Sound",
      Text: "Sound"
    },

    "09||chemistry||MatterInOurSurrounding": {
      ID: "09||chemistry||MatterInOurSurrounding",
      Text: "Matter In Our Surrounding"
    },
    "09||chemistry||IsMatterAroundUsPure": {
      ID: "09||chemistry||IsMatterAroundUsPure",
      Text: "Is Matter Around Us Pure"
    },
    "09||chemistry||AtomsAndMolecules": {
      ID: "09||chemistry||AtomsAndMolecules",
      Text: "Atoms and Molecules"
    },
    "09||chemistry||StructureOfTheAtom": {
      ID: "09||chemistry||StructureOfTheAtom",
      Text: "Structure of The Atom"
    },

    "10||physics||LightReflectionAndRefraction": {
      ID: "10||physics||LightReflectionAndRefraction",
      Text: "Light - Reflection and Refraction"
    },
    "10||physics||TheHumanEyeAndTheColourfulWorld": {
      ID: "10||physics||TheHumanEyeAndTheColourfulWorld",
      Text: "The Human Eye and The Colourful World"
    },
    "10||physics||Electricity": {
      ID: "10||physics||Electricity",
      Text: "Electricity"
    },
    "10||physics||MagneticEffectsOfElectricCurrent": {
      ID: "10||physics||MagneticEffectsOfElectricCurrent",
      Text: "Magnetic Effects of Electric Current"
    },
    "10||physics||SourcesOfEnergy": {
      ID: "10||physics||SourcesOfEnergy",
      Text: "Sources of Energy"
    },

    "10||chemistry||ChemicalReactionsAndEquations": {
      ID: "09||chemistry||ChemicalReactionsAndEquations",
      Text: "Chemical Reactions And Equations"
    },
    "10||chemistry||AcidsBasesAndSalts": {
      ID: "09||chemistry||AcidsBasesAndSalts",
      Text: "Acids, Bases and Salts"
    },
    "10||chemistry||MetalsAndNonMetals": {
      ID: "09||chemistry||MetalsAndNonMetals",
      Text: "Metals and Non-Metals"
    },
    "10||chemistry||CarbonAndItsCompounds": {
      ID: "09||chemistry||CarbonAndItsCompounds",
      Text: "Carbon and Its Compounds"
    },
    "10||chemistry||PeriodicClassificationOfElements": {
      ID: "09||chemistry||PeriodicClassificationOfElements",
      Text: "Periodic Classification of Elements"
    }

  }
  Categories: any = ['Objective', 'Subjective'];
  ModuleList: any = {
    'M1' : {
      ID: "M1",
      Text: "Module 1"
    },
    'M2' : {
      ID: "M2",
      Text: "Module 2"
    },
    'M3' : {
      ID: "M3",
      Text: "Module 3"
    }
  }
  constructor(private http:HttpClient) { }
  getTopicList(id: string){
    if(this.ChapterList[id]['Topics']){
      let topic = this.ChapterList[id]['Topics'];
      let topics = topic.split(';');
      return topics;
    }
  }
  getChapterList(classId: string, subID: string){
    let searchKey = classId + '||' + subID;
    let chapters = [];
    for(let i in this.ChapterList){
      if(i.startsWith(searchKey)){
         chapters.push(this.ChapterList[i]);
      }
    }
    return chapters;
  }
  addQuestion(questionData){
    console.log(questionData);
    let question = {
      classId: questionData.classId,
      subjectId: questionData.subjectId,
      chapterId: questionData.chapterId,
      topicId: questionData.topicId,
      typeId: questionData.typeId,
      catId: questionData.catId,
      moduleId: questionData.moduleId,
      questionText: questionData.questionText
    }
    this.http.post<{name:string}>('https://question-bank-40d55-default-rtdb.firebaseio.com/question.json',{question, id: questionData.questionId});
  }
}
