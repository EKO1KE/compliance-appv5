const penaltyFormGenerator = () => {
  
  let reportBorder = document.createElement('div');
  reportBorder.setAttribute('class', 'reportFrame');
  document.body.append(reportBorder);
  

  for (let i =0; i < 2; i++) {
    let reportSections = document.createElement('div');
    reportSections.setAttribute('class', 'reportSec');

    document.getElementsByClassName('reportFrame')[0].appendChild(reportSections)[i]

  };

  let documentTitle = document.createElement('textbox');
  documentTitle.innerText = ('PENALTY DEMAND NOTICE FORM');
  document.getElementsByClassName('reportSec')[0].appendChild(documentTitle);

  for (let i =0; i < 23; i++) {
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

  myInputs1[0].setAttribute('value', 'Compliance Officers Name:');
  myInputs1[2].setAttribute('value', 'EMPLOYER NUMBER:');
  myInputs1[4].setAttribute('value', 'EMPLOYER NAME:');
  myInputs1[6].setAttribute('value', 'RESPONSIBLE PERSON:');
  myInputs1[8].setAttribute('value', 'RESPONSIBLE PERSON TITLE:');
  myInputs1[10].setAttribute('value', 'Date of Inspection:');
  myInputs1[12].setAttribute('value', 'Penalty Amount:');
  myInputs1[14].setAttribute('value', 'Demand Notice Folio:');
  myInputs1[16].setAttribute('value', 'P.O. Box:');
  myInputs1[18].setAttribute('value', 'Post Code:');
  myInputs1[20].setAttribute('value', 'Post Office:');
  myInputs1[22].setAttribute('value', 'PRINT PENALTY NOTICE');
  myInputs1[22].setAttribute('type', 'button');
  myInputs1[22].setAttribute("onclick", "createPenaltyNotice(); printLetters()");
  myInputs1[22].setAttribute("style", "padding: 3px; width: 180px; background-color: grey");






  // myInputs1[1].setAttribute('value', 'EMPLOYER DETAILS');
  // myInputs1[3].setAttribute('value', '00328022');
  // myInputs1[5].setAttribute('value', 'Kwale International Sugar Company');
  // myInputs1[7].setAttribute('value', 'Peter Murithi:');
  // myInputs1[9].setAttribute('value', 'General Manager');
  // myInputs1[11].setAttribute('value', new Date());
  // myInputs1[13].setAttribute('value', '50000');
  // myInputs1[15].setAttribute('value', '222');
  // myInputs1[17].setAttribute('value', '28742');
  // myInputs1[19].setAttribute('value', '00200');
  // myInputs1[21].setAttribute('value', 'NAIROBI');

  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start of code that populates the demand notice.
const createPenaltyNotice = () => {
  
  let targetInput = document.getElementsByTagName('input');

  let targetSpan = document.getElementById('penaltyDemandLetter').querySelectorAll('span');

  let penPara1A = `The contributions payment record for`;

  let penPara1B =`shows that some contributions were submitted past the due date resulting in penalties amounting to`;

  let penPara2 = `Please note that contributions are due by the 9th day of the month following the contribution period. 
              <b>All late payments attract a penalty of 5% per month for such period that the amount due remains unpaid.<b> <br> <br>`

  let penPara3A = `You are therefore required to pay the total of outstanding penalties amounting to`

  let sspasPenalty = (targetInput[13].value*1).toLocaleString();

  let penPara3B = `to this office within <b><u>14 days</u></b> of this notice.`

  let signOff = `<br> <br> ${(document.getElementsByClassName('employerDetails')[0].value).toUpperCase()}<br> 
  FOR:BRANCH MANAGER  <br>  <b><u> KITENGELA </u> </b> <br> <br>`;

  let copyList = `c.c. <br> Manager, Registration & Collections <br> Regional Manager, Coast & NE`;


  targetSpan[0].innerHTML = `Ref:NSSF/UKN/6/1/${targetInput[3].value}(${targetInput[15].value})`;
  targetSpan[1].innerHTML =`Date: ${myCustomDate()}`;
  targetSpan[2].innerHTML = `The ${targetInput[9].value}`;
  targetSpan[3].innerHTML = targetInput[5].value;
  targetSpan[4].innerHTML = `P.O. Box ${targetInput[17].value}-${targetInput[19].value}`;
  targetSpan[5].innerHTML = `<b><u>${targetInput[21].value}<u><b>`;
  targetSpan[6].innerHTML = 'Dear Sir / Madam,';
  targetSpan[7].innerHTML = `<b><u>DEMAND NOTICE FOR OUTSTANDING PENALTIES</u></b> <br> <br>`;

  targetSpan[8].innerHTML = penPara1A;
  targetSpan[9].innerHTML = targetInput[5].value;
  targetSpan[10].innerHTML = penPara1B;
  targetSpan[11].innerHTML = `Kes.${sspasPenalty} <b>(See attached appendix for the summary of penalties)</b>.<br> <br>`;

  targetSpan[12].innerHTML = penPara2;

  targetSpan[13].innerHTML = penPara3A;
  targetSpan[14].innerHTML = `Kes.${sspasPenalty} `;
  targetSpan[15].innerHTML = penPara3B;

  targetSpan[16].innerHTML = signOff;
  targetSpan[17].innerHTML = copyList;

}

const printLetters = () => {

  let letters = document.getElementById('barua');

  let opt = {
    margin:       [1.3,0.8,0.8,0.8],
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    pageBreak: {mode: ['css']},
    pagebreak: { after: ['#inspectionReportLetter','#demandNotice', '#output', '#scheduleSheet'] },

    putOnlyUsedFonts:true,
  };

  html2pdf().set(opt).from(letters).save(`${document.getElementsByClassName('employerDetails')[2].value}-Penalty Demand`)
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