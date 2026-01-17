const demandFormGenerator = () => {
  
  let reportBorder = document.createElement('div');
  reportBorder.setAttribute('class', 'reportFrame');
  document.body.append(reportBorder);
  

  for (let i =0; i < 2; i++) {
    let reportSections = document.createElement('div');
    reportSections.setAttribute('class', 'reportSec');

    document.getElementsByClassName('reportFrame')[0].appendChild(reportSections)[i]

  };

  let documentTitle = document.createElement('textbox');
  documentTitle.innerText = ('DEFAULTERS DEMAND NOTICE FORM');
  document.getElementsByClassName('reportSec')[0].appendChild(documentTitle);

  for (let i =0; i < 19; i++) {
    let coEmployerInfo = document.createElement('input');

    document.getElementsByClassName('reportSec')[1].appendChild(coEmployerInfo)[i];

  }; 



  let myInputs1 = document.getElementsByClassName('reportSec')[1].querySelectorAll('input');

  myInputs1.forEach((input,i) => {
    if ((i % 2) > 0 ){
    input.setAttribute('class', 'employerDetails');

    } else

    input.setAttribute('class', 'coDetails');

    }

  );

  myInputs1[0].setAttribute('value', 'EMPLOYER NAME');
  myInputs1[2].setAttribute('value', 'EMPLOYER NUMBER');
  myInputs1[4].setAttribute('value', 'P.O. BOX :');
  myInputs1[6].setAttribute('value', 'POST CODE :');
  myInputs1[8].setAttribute('value', 'POST OFFICE :');
  myInputs1[10].setAttribute('value', 'EMPLOYER TITLE:');
  myInputs1[12].setAttribute('value', 'DEFAULT PERIOD :');
  myInputs1[14].setAttribute('value', 'NOTICE FOLIO :');
  myInputs1[16].setAttribute('value', 'COMPLIANCE OFFICER :');
  myInputs1[18].setAttribute('value', 'PRINT DEMAND NOTICE');
  myInputs1[18].setAttribute('type', 'button');
  myInputs1[18].setAttribute("onclick", "createPenaltyNotice(); printLetters()");
  myInputs1[18].setAttribute("style", "padding: 3px; width: 180px; height: 23px;background-color: green");

  //  myInputs1[1].setAttribute('value', 'Kwale International Sugar Company');
  // myInputs1[3].setAttribute('value', '00328022');
  // myInputs1[5].setAttribute('value', '28742');
  // myInputs1[7].setAttribute('value', '00200');
  // myInputs1[9].setAttribute('value', 'NAIROBI');
  myInputs1[11].setAttribute('value', 'Manager');
  // myInputs1[13].setAttribute('value', 'January 2020 to October 2021');
  // myInputs1[15].setAttribute('value', '245');
  myInputs1[17].setAttribute('value', 'Kevin Egessa');

  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start of code that populates the demand notice.
const createPenaltyNotice = () => {
  
  let targetInput = document.getElementsByTagName('input');

  let targetSpan = document.getElementById('skippedDemand').querySelectorAll('span');

  let penPara1A = `Records held in this office indicate that you have not paid contributions for your employees 
                   for the period <b> ${targetInput[13].value}(See attached document for breakdown of outstanding amount)</b>. <br> <br> 
                   
                   Your attention is drawn to section 55(a) (i) of the NSSF Act, No. 45 of 2013, Laws of Kenya which stipulates that 
                   it is an offence to fail to remit contributions in time. Furthermore, failing to pay contributions is denying your 
                   workers their right to social security under Article 43(1-e) of the constitution.<br> <br>
                   
                   Please note that contributions are due by the 9th day of the month following the contribution period. <b>All late 
                   payments attract a penalty of 5% per month for such period that the contributions due remain unpaid</b>. <br> <br>

                   You are therefore advised to clear the total outstanding arrears in contributions to this office within
                   <b> <u>fourteen (14)</u> </b> days of this notice. <br><br> Should you need any clarification, kindly contact the 
                   undersigned at NSSF KITENGELA OFFICE or call MOBILE No. 0786222358. <br> <br> 
                   
                   Yours faithfully, <br> <br> <br> <br>`;

  let signOff = `${(targetInput[17].value).toLocaleUpperCase()} <br> 
  FOR:BRANCH MANAGER  <br>  <b><u> KITENGELA </u> </b> <br> <br>`; 

  let copyList = `c.c. <br> Manager, Registration & Collections <br> Regional Manager, Coast & NE`;


  targetSpan[0].innerHTML = `Ref:NSSF/UKN/6/1/${targetInput[3].value}(${targetInput[15].value})`;
  targetSpan[1].innerHTML =`Date: ${myCustomDate()}`;
  targetSpan[2].innerHTML = `The ${targetInput[11].value}`;
  targetSpan[3].innerHTML = targetInput[1].value;
  targetSpan[4].innerHTML = `P.O. Box ${targetInput[5].value}-${targetInput[7].value}`;
  targetSpan[5].innerHTML = `<b><u>${targetInput[9].value}<u><b>`;
  targetSpan[6].innerHTML = 'Dear Sir / Madam,';
  targetSpan[7].innerHTML = `<b><u>RE: DEMAND NOTICE FOR UNPAID CONTRIBUTIONS</u></b> <br> <br>`;

  targetSpan[8].innerHTML = penPara1A;
  targetSpan[9].innerHTML = signOff;
  targetSpan[10].innerHTML = copyList;

}

const printLetters = () => {

  let letters = document.getElementById('barua');

  let opt = {
    margin:       [1.3,0.8,0.45,0.8],
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    pageBreak: {mode: ['css']},
    pagebreak: { after: ['#inspectionReportLetter','#demandNotice', '#output', '#scheduleSheet'] },

    putOnlyUsedFonts:true,
  };

  html2pdf().set(opt).from(letters).save('Inspection Report')
}

const myCustomDate = ()=> {
  let ext;
  let month;
  switch (new Date().getUTCDate()) {
    case 1:
      ext = `<sup> st </sup>`;
      break;
    case 31:
      ext = `<sup> st </sup>`;
      break;
    case 2:
       ext = `<sup> nd </sup>`;
      break;
    case 22:
      ext = `<sup> nd </sup>`;
      break;
    case 3:
      ext = `<sup> rd </sup>`;
      break;
    case 23:
      ext = `<sup> rd </sup>`;
      break;
    default:
      ext = `th`;
    }

  switch (new Date().getUTCMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
       month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "OCTOBER";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      }
 return( `${new Date().getUTCDate()}${ext} ${month}, ${new Date().getUTCFullYear()}`);

}