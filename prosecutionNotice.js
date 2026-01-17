const prosecutionFormGenerator = () => {
  
  let reportBorder = document.createElement('div');
  reportBorder.setAttribute('class', 'reportFrame');
  document.body.append(reportBorder);
  

  for (let i =0; i < 2; i++) {
    let reportSections = document.createElement('div');
    reportSections.setAttribute('class', 'reportSec');

    document.getElementsByClassName('reportFrame')[0].appendChild(reportSections)[i]

  };

  let documentTitle = document.createElement('textbox');
  documentTitle.innerText = ('NOTICE OF INTENDED PROSECUTION FORM');
  document.getElementsByClassName('reportSec')[0].appendChild(documentTitle);

  for (let i =0; i < 25; i++) {
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

  myInputs1[0].setAttribute('value', 'COMPLIANCE OFFICER :');
  myInputs1[2].setAttribute('value', 'EMPLOYER TO VISIT :');
  myInputs1[4].setAttribute('value', 'EMPLOYER NUMBER :');
  myInputs1[6].setAttribute('value', 'RESPONSIBLE PERSON :');
  myInputs1[8].setAttribute('value', 'P.O. BOX :');
  myInputs1[10].setAttribute('value', 'POST CODE :');
  myInputs1[12].setAttribute('value', 'POST OFFICE :');
  myInputs1[14].setAttribute('value', 'DEMAND NOTICE FOLIO :');
  myInputs1[16].setAttribute('value', 'AMOUNT DEMANDED:');
  myInputs1[18].setAttribute('value', 'NOTICE FOLIO :');
  // myInputs1[20].setAttribute('value', '');
  // myInputs1[22].setAttribute('value', '');
  myInputs1[24].setAttribute('type', 'button');
  myInputs1[24].setAttribute("onclick", "createProsecutionNotice(); printLetters()");
  myInputs1[24].setAttribute("style", "padding: 3px; width: 200px; background-color: green");

  myInputs1[1].setAttribute('value', 'Kevin Egessa');
  myInputs1[3].setAttribute('value', 'Kwale International Sugar Company');
  myInputs1[5].setAttribute('value', '00328022');
  myInputs1[7].setAttribute('value', 'Director');
  myInputs1[9].setAttribute('value', '1076');
  myInputs1[11].setAttribute('value', '80400');
  myInputs1[13].setAttribute('value', 'KITENGELA');
  myInputs1[15].setAttribute('value','222');
  myInputs1[17].setAttribute('value', '50000');
  myInputs1[19].setAttribute('value', '225');
  // myInputs1[21].setAttribute('value', '015');
  myInputs1[24].setAttribute('value', 'Click to Print Notice');

  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start of code that populates the demand notice.
const createProsecutionNotice = () => {
  
  let targetInput = document.getElementsByTagName('input');

  let targetSpan = document.getElementById('penaltyDemandLetter').querySelectorAll('span');

  let penPara1A = `Kindly refer to our Demand Notice Ref: SF/20501/${targetInput[5].value}/${targetInput[15].value}
                   for Kes.${(targetInput[17].value*1).toLocaleString()} in unpaid contributions and penalties. <br><br>`;

  let penPara1B =`It is regretted that the debt has not been paid to date and no commitment to pay has been received from you
                  by this office.<br><br>
                  
                  Your attention is drawn to section 55(a) (i) of the NSSF Act, No. 45 of 2013, Laws of Kenya which stipulates 
                  that it is an offence to fail to remit contributions. Furthermore, failing to pay contributions is denying your 
                  workers their right to social security under Article 43(1-e) of the constitution. Contributions are due by the 
                  9th day of the month following the contribution period. All late payments attract a penalty of 5% per month for 
                  such period that the amount due remains unpaid.<br> <br>`;

  let penPara2 = `Please note that if the total demanded amount of <b> Kes.${(targetInput[17].value*1).toLocaleString()} and any 
                  other outstanding amount is not paid in full within 7 days of this letter, legal action will be taken against you 
                  for recovery of the debt without further notice.</b> <br> <br>`

  let penPara3A = `Your cooperation in this matter will be highly appreciated.`

  let sspasPenalty = (targetInput[13].value*1).toLocaleString();

  let penPara3B = ``

  let signOff = `<br> <br> ${(targetInput[1].value).toLocaleUpperCase()} <br> 
  FOR:BRANCH MANAGER  <br>  <b><u> KITENGELA </u> </b> <br> <br>`;

  let copyList = `c.c. <br> Manager, Registration & Collections <br> Regional Manager, Coast & NE`;


  targetSpan[0].innerHTML = `Ref:SF/20501/${targetInput[5].value}/${targetInput[19].value}`;
  targetSpan[1].innerHTML =`Date: ${myCustomDate()}`;
  targetSpan[2].innerHTML = `The ${targetInput[7].value}`;
  targetSpan[3].innerHTML = targetInput[3].value;
  targetSpan[4].innerHTML = `P.O. Box ${targetInput[9].value}-${targetInput[11].value}`;
  targetSpan[5].innerHTML = `<b><u>${targetInput[13].value}<u><b>`;
  targetSpan[6].innerHTML = 'Dear Sir / Madam,';
  targetSpan[7].innerHTML = `<b><u>RE: NOTICE OF INTENTION TO PROSECUTE FOR: <br> I.FAILING TO PAY CONTRIBUTIONS
                             AND PENALTIES </u></b> <br> <br>`;

  targetSpan[8].innerHTML = penPara1A;
  targetSpan[9].innerHTML 
  targetSpan[10].innerHTML = penPara1B;
  targetSpan[11].innerHTML = ``;

  targetSpan[12].innerHTML = penPara2;

  targetSpan[13].innerHTML = penPara3A;
  targetSpan[14].innerHTML ;
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

  html2pdf().set(opt).from(letters).save('Prosecution Notice')
}

const myCustomDate = (ext,month)=> {
  
  switch (new Date().getUTCDate()) {
    case 1:
      ext = "st";
      break;
    case 31:
      ext = "st";
      break;
    case 2:
       ext = "nd";
      break;
    case 22:
      ext = "nd";
      break;
    case 3:
      ext = "rd";
      break;
    case 23:
      ext = "rd";
      break;
    default:
      ext = "th";
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
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      }
 return( `${new Date().getUTCDate()}${ext} ${month} ${new Date().getUTCFullYear()}`);

}