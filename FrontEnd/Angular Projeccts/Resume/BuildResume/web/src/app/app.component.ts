import { jsPDF } from "jspdf";
import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER, I } from '@angular/cdk/keycodes';
import { Resume } from "./resume.model";
import { Subscription } from 'rxjs';
// import { CountService } from 'src/service/count-service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import ts from "src/app/type";
import { DetailsService } from "./details.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("skillsArray") skillsArray: any;
  @ViewChild("projectsArray") projectsArray: any;
  @ViewChild("certificationsArray") certificationsArray: any;
  @ViewChild("areasOfIntrestArray") areasOfIntrestArray: any;
  @ViewChild("languagesKnownArray") languagesKnownArray: any;

  printArray: Array<any> = [];
  candidates: Array<any> = [];
  final_array: Array<any> = [];
  personal_details: Array<any> = [];
  academic_details: Array<any> = [];
  profiles: Array<object> = [];
  career_objective: Array<any> = [];
  countItem: Subscription = new Subscription;
  title = 'BuildResume';
  constructor(private _formBuilder: FormBuilder, private fetch: DetailsService, private route: Router) { }
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  ngOnInit() {
    // this.countService.currentValue.subscribe(value => {
    //   this.count = value;
    // })
  }
  
  personalDetails = this._formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    mobile_no: ['', Validators.required],
    address: ['', Validators.required],
    profilePicture: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    tenth_school_name: ['', Validators.required],
    sslc_percent: ['', Validators.required],
    tenth_start_year: ['', Validators.required],
    tenth_end_year: ['', Validators.required],
    twelfth_school_name: ['', Validators.required],
    hsc_percent: ['', Validators.required],
    twelfth_start_year: ['', Validators.required],
    twelfth_end_year: ['', Validators.required],
    college: ['', Validators.required],
    college_degree: ['', Validators.required],
    college_branch: ['', Validators.required],
    college_percent: ['', Validators.required],
    college_start_year: ['', Validators.required],
    college_end_year: ['', Validators.required],
  });

  skillsDetails = this._formBuilder.group({
    skill: [null, Validators.required]
  });

  areasOfIntrest = this._formBuilder.group({
    intrest: [null, Validators.required]
  });

  languagesKnown = this._formBuilder.group({
    language: [null, Validators.required]
  });
  projectDetails = this._formBuilder.group({
    project: [null, Validators.required]
  });
  certificationDetails = this._formBuilder.group({
    certification: [null, Validators.required]
  });
  profileDetails = this._formBuilder.group({
    linkedIn_profile: ['', Validators.required],
    hackerRank_profile: ['', Validators.required],
    gitHub_profile: ['', Validators.required]
  });
  careerObjective = this._formBuilder.group({
    career_objective: ['', Validators.required]
  });
  isLinear = false;



  setDetails() {

    this.detailService.first_name = this.personalDetails.value.first_name;
    this.detailService.last_name = this.personalDetails.value.last_name;
    this.detailService.mobile_no = this.personalDetails.value.mobile_no;
    this.detailService.email = this.personalDetails.value.email;
    this.detailService.address = this.personalDetails.value.address;
    this.detailService.profile_picture = this.personalDetails.value.profilePicture;

    // const temp = this.personalDetails.value.birthday;
    // const bday: Date = new Date(this.personalDetails.value.birthday);
    // console.log(bday);

    this.detailService.tenth_school_name = this.secondFormGroup.value.tenth_school_name;
    this.detailService.sslc_percent = this.secondFormGroup.value.sslc_percent;
    this.detailService.tenth_start_year = this.secondFormGroup.value.tenth_start_year;
    this.detailService.tenth_end_year = this.secondFormGroup.value.tenth_end_year;

    this.detailService.twelfth_school_name = this.secondFormGroup.value.twelfth_school_name;
    this.detailService.hsc_percent = this.secondFormGroup.value.hsc_percent;
    this.detailService.twelfth_start_year = this.secondFormGroup.value.twelfth_start_year;
    this.detailService.twelfth_end_year = this.secondFormGroup.value.twelfth_end_year;

    this.detailService.college = this.secondFormGroup.value.college;
    this.detailService.college_percent = this.secondFormGroup.value.college_percent;
    this.detailService.college_branch = this.secondFormGroup.value.college_branch;
    this.detailService.college_degree = this.secondFormGroup.value.college_degree;
    this.detailService.college_start_year = this.secondFormGroup.value.college_start_year;
    this.detailService.college_end_year = this.secondFormGroup.value.college_end_year;

    this.detailService.skills = this.skillsArr;
    this.detailService.areas_of_interest = this.areasOfIntrestArr;
    this.detailService.languages_known = this.languagesKnownArr;
    this.detailService.projects = this.projectsArr;
    this.detailService.certifications = this.certificationsArr;

    this.detailService.linkedIn_profile = this.profileDetails.value.linkedIn_profile;
    this.detailService.gitHub_profile = this.profileDetails.value.gitHub_profile;
    this.detailService.hackerRank_profile = this.profileDetails.value.hackerRank_profile;
    this.detailService.career_objective = this.careerObjective.value.career_objective;
    this.fetch.onCreate(this.detailService).subscribe();
    this.fetchingData();
  }


  count: number = 0;

  resumeDetails: ts = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_no: '',
    address: '',
    tenth_school_name: '',
    tenth_start_year: '',
    tenth_end_year: '',
    sslc_percent: '',
    twelfth_school_name: '',
    twelfth_start_year: '',
    twelfth_end_year: '',
    hsc_percent: '',
    college: '',
    college_degree: '',
    college_branch: '',
    college_start_year: '',
    college_end_year: '',
    college_percent: '',
    skills: [],
    areas_of_interest: [],
    languages_known: [],
    projects: [],
    certifications: [],
    linkedIn_profile: '',
    hackerRank_profile: '',
    gitHub_profile: '',
    career_objective: '',
    profile_picture: null
  }

  detailService: ts = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_no: '',
    address: '',
    tenth_school_name: '',
    tenth_start_year: '',
    tenth_end_year: '',
    sslc_percent: '',
    twelfth_school_name: '',
    twelfth_start_year: '',
    twelfth_end_year: '',
    hsc_percent: '',
    college: '',
    college_degree: '',
    college_branch: '',
    college_start_year: '',
    college_end_year: '',
    college_percent: '',
    skills: [],
    areas_of_interest: [],
    languages_known: [],
    projects: [],
    certifications: [],
    linkedIn_profile: '',
    hackerRank_profile: '',
    gitHub_profile: '',
    career_objective: '',
    profile_picture: null
  }

  sendPersonal(data: any) {
    this.personal_details.push(data);
    console.log(this.personal_details);
  }
  sendAcademic(data: any) {
    this.academic_details.push(data);
  }
  sendProfile(data: any) {
    this.profiles.push(data);
  }

  sendCareer(data: any) {
    this.career_objective.push(data);
  }


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skillsArr: string[] = [];
  projectsArr: string[] = [];
  certificationsArr: string[] = [];
  areasOfIntrestArr: string[] = [];
  languagesKnownArr: string[] = [];
  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    let found = this.skillsArr.some(ele => ele === value);
    if (value !== '' && !found) {
      this.skillsArr.push(value);
    }
    event.chipInput!.clear();
    console.log(this.skillsArr);

  }

  removeSkill(skill: string): void {
    const index = this.skillsArr.indexOf(skill);

    if (index >= 0) {
      this.skillsArr.splice(index, 1);
    }
  }

  addIntrest(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    let found = this.areasOfIntrestArr.some(ele => ele === value);
    if (value !== '' && !found) {
      this.areasOfIntrestArr.push(value);
    }
    event.chipInput!.clear();
    console.log(this.areasOfIntrestArr);

  }

  removeIntrest(intrest: string): void {
    const index = this.areasOfIntrestArr.indexOf(intrest);

    if (index >= 0) {
      this.areasOfIntrestArr.splice(index, 1);
    }
  }

  addLanguage(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    let found = this.languagesKnownArr.some(ele => ele === value);
    if (value !== '' && !found) {
      this.languagesKnownArr.push(value);
    }
    event.chipInput!.clear();
    console.log(this.languagesKnownArr);

  }

  removeLanguage(language: string): void {
    const index = this.languagesKnownArr.indexOf(language);

    if (index >= 0) {
      this.languagesKnownArr.splice(index, 1);
    }
  }

  addProject(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    let found = this.projectsArr.some(ele => ele === value);
    if (value !== '' && !found) {
      this.projectsArr.push(value);
    }

    event.chipInput!.clear();
  }

  removeProject(project: string): void {
    const index = this.projectsArr.indexOf(project);

    if (index >= 0) {
      this.projectsArr.splice(index, 1);
    }
  }

  addCertification(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    let found = this.certificationsArr.some(ele => ele === value);
    if (value !== '' && !found) {
      this.certificationsArr.push(value);
    }

    event.chipInput!.clear();
  }

  removeCertification(certification: string): void {
    const index = this.certificationsArr.indexOf(certification);

    if (index >= 0) {
      this.certificationsArr.splice(index, 1);
    }
  }



  fetchingData() {

    this.fetch.fetchData().subscribe(response => {
      this.resumeDetails = response;
      console.log(this.resumeDetails);
    })

  }

  imageUrl: string | null | ArrayBuffer | undefined = '';

  load(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onloadend = (event) => {
        if (event.target) {
          this.imageUrl = event.target.result;
        }
        console.log(this.imageUrl);
      }
      console.log(this.imageUrl);
    }
  }
  generatePDF() {
    let doc = new jsPDF();
    let left = 22;
    let bottom = 35;
    let fullName = `${this.resumeDetails.first_name}` + ` ${this.resumeDetails.last_name}`;
    fullName = fullName.toUpperCase();
    doc.setFillColor(203, 202, 203);
    doc.rect(0, 0, 500, 500, 'F');
    doc.setFillColor(255, 255, 255);
    doc.rect(10, 10, 90, 280, 'F');
    // doc.rect(10, 10, 150, 160, "F");
    doc.setFont("times");
    // doc.setFontType("bold");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    let nameSpace = left;
    let nameBtmSpace = bottom + 50;
    doc.text(fullName, nameSpace, nameBtmSpace + 5);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    if (this.imageUrl && typeof this.imageUrl === 'string') {
      doc.addImage(this.imageUrl, 'JPEG', 20, 20, 70, 60);
    }
    let borderStartLeft = 0;
    let borderStartBottom = 100;
    let borderEndLeft = 93;
    let borderEndBottom = 12;
    doc.rect(borderStartLeft, borderStartBottom, borderEndLeft, borderEndBottom, 'F');
    doc.text("Contact Details", borderStartLeft + 10, borderEndLeft + 15);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`Mobile No: ${this.resumeDetails.mobile_no}`, borderStartLeft + 20, borderEndLeft + 30);
    doc.text(`Email: ${this.resumeDetails.email}`, borderStartLeft + 20, borderEndLeft + 40);
    doc.text(`Address: ${this.resumeDetails.address}`, borderStartLeft + 20, borderEndLeft + 50);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft, borderStartBottom + 50, borderEndLeft, borderEndBottom, 'F');
    doc.text("Skills", borderStartLeft + 10, borderEndLeft + 65);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    if (this.resumeDetails.skills.length > 0) {
      let skillEnd = 0;
      let skillEndRight = 0;
      for (let i = 0; i < this.resumeDetails.skills.length; i++) {
        if (i < 3) {
          doc.text(`\u2022 ${this.resumeDetails.skills[i]}`, borderStartLeft + 20, borderEndLeft + skillEnd + 80);
          skillEnd += 10;
        }
        else {
          doc.text(`\u2022 ${this.resumeDetails.skills[i]}`, borderStartLeft + 60, borderEndLeft + skillEndRight + 80);
          skillEndRight += 10;
        }
      }
    }
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft, borderStartBottom + 100, borderEndLeft, borderEndBottom, 'F');
    doc.text("Areas of Interest", borderStartLeft + 10, borderEndLeft + 115);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    if (this.resumeDetails.areas_of_interest.length > 0) {
      let intrestEnd = 0;
      let intrestEndRight = 0;
      for (let i = 0; i < this.resumeDetails.areas_of_interest.length; i++) {
        if (i < 3) {
          doc.text(`\u2022 ${this.resumeDetails.areas_of_interest[i]}`, borderStartLeft + 20, borderEndLeft + intrestEnd + 130);
          intrestEnd += 10;
        }
        else {
          doc.text(`\u2022 ${this.resumeDetails.areas_of_interest[i]}`, borderStartLeft + 60, borderEndLeft + intrestEndRight + 130);
          intrestEndRight += 10;
        }
      }
    }
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft, borderStartBottom + 150, borderEndLeft, borderEndBottom, 'F');
    doc.text("Languages Known", borderStartLeft + 10, borderEndLeft + 165);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    if (this.resumeDetails.languages_known.length > 0) {
      let intrestEnd = 0;
      let intrestEndRight = 0;
      for (let i = 0; i < this.resumeDetails.languages_known.length; i++) {
        if (i < 2) {
          doc.text(`\u2022 ${this.resumeDetails.languages_known[i]}`, borderStartLeft + 20, borderEndLeft + intrestEnd + 180);
          intrestEnd += 10;
        }
        else {
          doc.text(`\u2022 ${this.resumeDetails.languages_known[i]}`, borderStartLeft + 60, borderEndLeft + intrestEndRight + 180);
          intrestEndRight += 10;
        }
      }
    }
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft + 103, borderStartBottom - 90, borderEndLeft + 25, borderEndBottom, 'F');
    doc.text("Career Objective", borderStartLeft + 108, borderEndLeft - 75);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    if (this.resumeDetails.career_objective != undefined && this.resumeDetails.career_objective != null) {
      if (this.resumeDetails.career_objective) {
        doc.setTextColor(38, 41, 40).setFont('Time-Italic', 'normal').setFontSize(12);
        let summary = doc.splitTextToSize(this.resumeDetails.career_objective, 100);
        doc.text(summary, borderStartLeft + 105, borderEndLeft - 63);
      }
    }
    doc.setTextColor(255, 255, 255).setFont('Time-Italic', 'normal');
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft + 103, borderStartBottom - 40, borderEndLeft + 25, borderEndBottom, 'F');
    doc.text("Academic Background", borderStartLeft + 108, borderEndLeft - 25);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`${this.resumeDetails.college}`.toUpperCase(), borderStartLeft + 108, borderEndLeft - 15);
    doc.setFontSize(10);
    doc.text(`${this.resumeDetails.college_branch}| ${this.resumeDetails.college_start_year}-${this.resumeDetails.college_end_year}`, borderStartLeft + 115, borderEndLeft - 10);
    doc.setFontSize(10);
    doc.text(`${this.resumeDetails.college_degree}`, borderStartLeft + 115, borderEndLeft - 5);
    doc.setFontSize(10);
    doc.text(`CGPA - ${this.resumeDetails.college_percent}`, borderStartLeft + 115, borderEndLeft)
    doc.setFontSize(12);
    doc.text(`${this.resumeDetails.twelfth_school_name}`.toUpperCase(), borderStartLeft + 108, borderEndLeft + 7);
    doc.setFontSize(10);
    doc.text(`HSC | ${this.resumeDetails.twelfth_start_year}-${this.resumeDetails.twelfth_end_year}`, borderStartLeft + 115, borderEndLeft + 12);
    doc.text(`Percentage - ${this.resumeDetails.hsc_percent}`, borderStartLeft + 150, borderEndLeft + 12)
    doc.setFontSize(12);
    doc.text(`${this.resumeDetails.tenth_school_name}`.toUpperCase(), borderStartLeft + 108, borderEndLeft + 20);
    doc.setFontSize(10);
    doc.text(`SSLC | ${this.resumeDetails.tenth_start_year}-${this.resumeDetails.tenth_end_year}`, borderStartLeft + 115, borderEndLeft + 27);
    doc.text(`Percentage - ${this.resumeDetails.sslc_percent}`, borderStartLeft + 150, borderEndLeft + 27)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft + 103, borderStartBottom + 25, borderEndLeft + 25, borderEndBottom, 'F');
    doc.text("Certifications", borderStartLeft + 108, borderEndLeft + 40);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    if (this.resumeDetails.certifications.length > 0) {
      let skillEnd = 0;
      let skillEndRight = 0;
      for (let i = 0; i < this.resumeDetails.certifications.length; i++) {
        if (i < 3) {
          doc.text(`\u2022 ${this.resumeDetails.certifications[i]}`, borderStartLeft + 113, borderEndLeft + skillEnd + 55);
          skillEnd += 10;
        }
        else {
          doc.text(`\u2022 ${this.resumeDetails.certifications[i]}`, borderStartLeft + 160, borderEndLeft + skillEndRight + 55);
          skillEndRight += 10;
        }
      }
    }
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft + 103, borderStartBottom + 75, borderEndLeft + 25, borderEndBottom, 'F');
    doc.text("Projects", borderStartLeft + 108, borderEndLeft + 90);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    if (this.resumeDetails.projects.length > 0) {
      let skillEnd = 0;
      let skillEndRight = 0;
      for (let i = 0; i < this.resumeDetails.projects.length; i++) {
        if (i < 3) {
          doc.text(`\u2022 ${this.resumeDetails.projects[i]}`, borderStartLeft + 113, borderEndLeft + skillEnd + 105);
          skillEnd += 10;
        }
        else {
          doc.text(`\u2022 ${this.resumeDetails.projects[i]}`, borderStartLeft + 160, borderEndLeft + skillEndRight + 105);
          skillEndRight += 10;
        }
      }
    }
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFillColor(71, 71, 71);
    doc.rect(borderStartLeft + 103, borderStartBottom + 125, borderEndLeft + 25, borderEndBottom, 'F');
    doc.text("Profiles", borderStartLeft + 108, borderEndLeft + 140);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`LinkedIn: ${this.resumeDetails.linkedIn_profile}`, borderStartLeft + 113, borderEndLeft + 155);
    doc.text(`HackerRank: ${this.resumeDetails.hackerRank_profile}`, borderStartLeft + 113, borderEndLeft + 165);
    doc.text(`GitHub: ${this.resumeDetails.gitHub_profile}`, borderStartLeft + 113, borderEndLeft + 175);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let x = dd + '/' + mm + '/' + yyyy;
    // document.write(x);
    doc.text(`Date: ${x}`, borderStartLeft + 108, borderEndLeft + 195);
    doc.text(`Place: ${this.resumeDetails.address}`, borderStartLeft + 148, borderEndLeft + 195);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.save(fullName);
  }

}