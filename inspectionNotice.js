const inspNoticeFormGenerator = () => {
  
  let reportBorder = document.createElement('div');
  reportBorder.setAttribute('class', 'reportFrame');
  document.body.append(reportBorder);
  

  for (let i =0; i < 3; i++) {
    let reportSections = document.createElement('div');
    reportSections.setAttribute('class', 'reportSec');

    document.getElementsByClassName('reportFrame')[0].appendChild(reportSections)[i]

  };

  let documentTitle = document.createElement('textbox');
  documentTitle.innerText = ('NOTICE OF INSPECTION FORM');
  document.getElementsByClassName('reportSec')[0].appendChild(documentTitle);

  for (let i =0; i < 25; i++) {
    let coEmployerInfo = document.createElement('input');

    document.getElementsByClassName('reportSec')[1].appendChild(coEmployerInfo)[i];

  }; 

  for (let i =0; i < 11; i++) {
    let recordsInfo = document.createElement('input');

    document.getElementsByClassName('reportSec')[2].appendChild(recordsInfo)[i];

  };

  let myInputs1 = document.getElementsByClassName('reportSec')[1].querySelectorAll('input');

  myInputs1.forEach((input,i) => {
    if ((i % 2) > 0 ){
    input.setAttribute('class', 'employerDetails');

    } else

    input.setAttribute('class', 'coDetails');

    }
    
  );

  let myInputs3 = document.getElementsByClassName('reportSec')[2].querySelectorAll('input');

  myInputs3.forEach((input,i) => {
    if ((i % 2) > 0 ){
    input.setAttribute('class', 'recordCheckers');
    input.setAttribute('type', 'checkbox');


    } else

    input.setAttribute('class', 'recordDetails');
    myInputs3[0].setAttribute('value', 'PAYROLL RECORDS');
    myInputs3[2].setAttribute('value', 'NSSF PAYMENT RECEIPTS (SF50)');
    myInputs3[4].setAttribute('value', 'MONTHLY RETURNS (SF24)');
    myInputs3[6].setAttribute('value', 'GENERAL LEDGERS');
    myInputs3[8].setAttribute('value', 'LIST OF SUB CONTRACTORS');

    myInputs3[10].setAttribute('type', 'button');
    myInputs3[10].setAttribute('value', 'Click to Print Notice');
    myInputs3[10].setAttribute("style", "padding: 3px; width: 112px; background-color:grey");
    myInputs3[10].setAttribute("onclick", "createInspectionNotice(); printLetters()");


    }
    
  );

  myInputs1[0].setAttribute('value', 'COMPLIANCE OFFICER :');
  myInputs1[2].setAttribute('value', 'SUPPORTING OFFICER :');
  myInputs1[4].setAttribute('value', 'EMPLOYER TO VISIT :');
  myInputs1[6].setAttribute('value', 'EMPLOYER NUMBER :');
  myInputs1[8].setAttribute('value', 'RESPONSIBLE PERSON :');
  myInputs1[10].setAttribute('value', 'P.O. BOX :');
  myInputs1[12].setAttribute('value', 'POST CODE :');
  myInputs1[14].setAttribute('value', 'POST OFFICE :');
  myInputs1[16].setAttribute('value', 'INSPECTION DATE :');
  myInputs1[18].setAttribute('value', 'INSPECTION TIME:');
  myInputs1[20].setAttribute('value', 'INSPECTION PERIOD :');
  myInputs1[20].setAttribute('value', 'INSPECTION PERIOD :');
  myInputs1[22].setAttribute('value', 'NOTICE FOLIO :');
  myInputs1[24].setAttribute('type', 'button');
  myInputs1[24].setAttribute("value", "Please select required records from the list below.");
  myInputs1[24].setAttribute("style", "padding: 3px; width: 600px;");

  myInputs1[1].setAttribute('value','Kevin Egessa');
  // myInputs1[3].setAttribute('value', '');
  myInputs1[5].setAttribute('value', 'Kwale International Sugar Company');
  myInputs1[7].setAttribute('value', '00328022');
  myInputs1[9].setAttribute('value', 'Director');
  myInputs1[11].setAttribute('value', '1076');
  myInputs1[13].setAttribute('value', '80400');
  myInputs1[15].setAttribute('value', 'KITENGELA');
  myInputs1[17].setAttribute('value','1st November 2021');
  myInputs1[19].setAttribute('value', '2.00 p.m.');
  myInputs1[21].setAttribute('value', 'January 2020 to October 2021');
  myInputs1[23].setAttribute('value', '015');
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start of code that populates the demand notice.
const createInspectionNotice = () => {
  
  let targetInput = document.getElementsByTagName('input');

  let targetSpan = document.getElementById('penaltyDemandLetter').querySelectorAll('span');

  let co1 = targetInput[1].value;

  let co2 = targetInput[3].value;

  let inspectionPeriod = targetInput[21].value

  let inspNoticePara1 = `I have the honour to inform you that ${co1}`;

  let inspNoticePara1a =',';

  let inspNoticePara1b = `a Compliance Officer of the National Social Security Fund, has arranged to 
                   inspect your records on ${(targetInput[17].value)} at ${targetInput[19].value} for the purpose 
                   of ensuring that the provisions of the NSSF Act No.45, 2013 are observed. <br> <br>`;

  if (document.getElementsByClassName('employerDetails')[1].value) {

       inspNoticePara1a = `and ${document.getElementsByClassName('employerDetails')[1].value}`;

       inspNoticePara1b = `, Compliance Officers of the National Social Security Fund, have arranged to 
                   inspect your records on ${(targetInput[17].value)} at ${targetInput[19].value} for the purpose 
                   of ensuring that the provisions of the NSSF Act No.45, 2013 are observed. <br> <br>`;
      };

  let inspNoticePara2A =`Please arrange for the following to be made available during the inspection:- <br> <br>`;

  let inspNoticePara2B = `-	Payroll records (Permanent, Contract and Casual staff) for the period ${inspectionPeriod}. <br> <br>`

  let inspNoticePara2C = `-	National Social Security Fund payment receipts for the period ${inspectionPeriod}. <br> <br>`

  let inspNoticePara2D = `-	Monthly returns for the period ${inspectionPeriod}.<br> <br>`

  let inspNoticePara2E = `-	General ledgers for the period ${inspectionPeriod}.<br> <br>`

  let inspNoticePara2F = `-	Detailed list of all sub-contractors and their employees.<br> <br>`

  let signOff = `Yours faithfully, <br> <br> <br> <br> JOSEPHINE KITHOME<br> 
  BRANCH MANAGER  <br>  <b><u> KITENGELA </u> </b> <br>`;

  let copyList = `c.c. <br> Manager, Registration & Collections <br> Regional Manager, Coast & NE`;
  let listChecker = document.getElementsByClassName('recordCheckers');

  targetSpan[0].innerHTML = `Ref:SF/20501/${targetInput[7].value}/${targetInput[23].value}`;
  targetSpan[1].innerHTML =`Date: ${myCustomDate()}`;
  targetSpan[2].innerHTML = `The ${targetInput[9].value}`;
  targetSpan[3].innerHTML = targetInput[5].value;
  targetSpan[4].innerHTML = `P.O. Box ${targetInput[11].value}-${targetInput[13].value}`;
  targetSpan[5].innerHTML = `<b><u>${targetInput[15].value}<u><b>`;
  targetSpan[6].innerHTML = 'Dear Sir / Madam,';
  targetSpan[7].innerHTML = `<b>RE:<u>NOTICE OF INSPECTION</u></b> <br> <br>`;
  
  if (targetInput[17].value = false) {inspNoticePara1a=''};

  targetSpan[8].innerHTML = inspNoticePara1;
  targetSpan[9].innerHTML = inspNoticePara1a;
  targetSpan[10].innerHTML = inspNoticePara1b;
  targetSpan[11].innerHTML = inspNoticePara2A;

if (listChecker[0].checked) {
    targetSpan[12].innerHTML = inspNoticePara2B;
} else {targetSpan[12].innerHTML = ''};

if (listChecker[1].checked) {
  targetSpan[13].innerHTML = inspNoticePara2C;
}else {targetSpan[13].innerHTML = ''};

if (listChecker[2].checked) {
  targetSpan[14].innerHTML = inspNoticePara2D;
}else {targetSpan[14].innerHTML = ''};

if (listChecker[3].checked) {
  targetSpan[15].innerHTML = inspNoticePara2E;
}else {targetSpan[15].innerHTML = ''};

if (listChecker[4].checked) {
  targetSpan[16].innerHTML = inspNoticePara2F;
}else {targetSpan[16].innerHTML = ''};

  targetSpan[17].innerHTML = signOff;
  targetSpan[18].innerHTML = copyList;

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

  html2pdf().set(opt).from(letters).save(`Inspection Notice-${document.getElementsByTagName('input')[5].value}`)
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
       ext = `<sup>${'nd'}</sup>`;
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
 return( `${new Date().getUTCDate()}${ext} ${month}, ${new Date().getUTCFullYear()}`);

}