const sf203 = () => {
  
  let reportBorder = document.createElement('div');
  reportBorder.setAttribute('class', 'reportFrame');
  document.body.append(reportBorder);
  

  for (let i =0; i < 3; i++) {
    let reportSections = document.createElement('div');
    reportSections.setAttribute('class', 'reportSec');

    document.getElementsByClassName('reportFrame')[0].appendChild(reportSections)[i]

  };

  let documentTitle = document.createElement('textbox');
  documentTitle.innerText = ('INSPECTION REPORT SF. 203');
  document.getElementsByClassName('reportSec')[0].appendChild(documentTitle);

  for (let i =0; i < 12; i++) {
    let coEmployerInfo = document.createElement('input');

    document.getElementsByClassName('reportSec')[1].appendChild(coEmployerInfo)[i];

  }; 


  for (let i =0; i < 22; i++) {
    let observations = document.createElement('input');
    observations.setAttribute('class', 'observations');
  
    document.getElementsByClassName('reportSec')[2].appendChild(observations)[i]
  }; 

  let myInputs1 = document.getElementsByClassName('reportSec')[1].querySelectorAll('input');

  myInputs1.forEach((input,i) => {
    if ((i % 2) > 0 ){
    input.setAttribute('class', 'employerDetails');

    } else

    input.setAttribute('class', 'coDetails');

    }

  );

  myInputs1[0].setAttribute('value', ` Date of Inspection:  `);
  myInputs1[2].setAttribute('value', `Compliance Officer's Name: `);
  myInputs1[4].setAttribute('value', 'Employer Name:');
  myInputs1[6].setAttribute('value', 'Employer Number: ');
  myInputs1[8].setAttribute('value', 'Responsible Person Designation::');
  myInputs1[10].setAttribute('value', 'Responsible Person Name:');

  myInputs1[1].setAttribute('value', '');
  myInputs1[3].setAttribute('value', 'Kevin Egessa');
  myInputs1[5].setAttribute('value', '');
  myInputs1[7].setAttribute('value', '');
  myInputs1[9].setAttribute('value', '');
  myInputs1[11].setAttribute('value', '' );

  let myInputs2 = document.getElementsByClassName('reportSec')[2].querySelectorAll('input');
  
  myInputs2.forEach((input,i) => {
    if ((i % 2) > 0 ){
    input.setAttribute('class', 'answers');

    } else

    input.setAttribute('class', 'questions');

    }
  );

  myInputs2[0].setAttribute('value', 'Does the employer maintain proper records? If yes, check box.');

  myInputs2[2].setAttribute('value', 'Were contributions arrears assessed? If yes, check box.');
  myInputs2[4].setAttribute('value', 'Enter period covered by assessment :');
  myInputs2[4].setAttribute("style", "width: 240px");
  myInputs2[6].setAttribute('value', 'Are there outstanding penalties in SSPAS? If yes, enter amount.');
  myInputs2[8].setAttribute('value', 'Were all employees on the payroll registered? If yes, check box.');
  myInputs2[10].setAttribute('value', 'Employer P.O.Box:');
  myInputs2[12].setAttribute('value', 'Post Code:');
  myInputs2[14].setAttribute('value', 'Location:');
  myInputs2[16].setAttribute('value', 'Phone Contact:');
  myInputs2[18].setAttribute('value', 'e-Mail Address:');
  myInputs2[20].setAttribute('value', 'Inspection Report Reference Folio:');

  myInputs2[1].setAttribute('type' ,'checkbox');
  myInputs2[1].setAttribute('value', 'recordsCheck');
  myInputs2[1].setAttribute('id', 'recordsCheck');

  myInputs2[3].setAttribute('type','checkbox');
  myInputs2[3].setAttribute('id','assesmentCheck');

  myInputs2[5].setAttribute('type', 'text');
  myInputs2[5].setAttribute("style", "width: 338px");
  myInputs2[5].setAttribute("value", "");
  myInputs2[5].setAttribute("id", "debtPeriod");

  myInputs2[7].setAttribute('type','integer');
  // myInputs2[7].setAttribute('value',90000);
  
  myInputs2[9].setAttribute('type','checkbox');
  myInputs2[9].setAttribute('type','checkbox');
  myInputs2[9].setAttribute('id','registrationCheck');

  myInputs2[11].setAttribute('value', '');
  myInputs2[13].setAttribute('value', '');
  myInputs2[15].setAttribute('value', '');
  myInputs2[17].setAttribute('value', '');
  myInputs2[19].setAttribute('value', '');
  // myInputs2[21].setAttribute('value', 6);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkBoxes() {
  let targetField = document.getElementsByClassName('answers');
  let targetField2 = document.getElementsByClassName('questions');
  let targetLine = document.getElementById('inspectionReportLetter').querySelectorAll('span');
  let figureSheet = document.getElementById('scheduleSheet');
  // targetField[3].setAttribute('required','');

  switch (targetField[0].checked) {
    case true:
      targetLine[26].style.display = 'none';
      targetLine[27].style.display = 'none';
      break;

    case false:
      alert (`You did not indicate if employer had proper records. Employer will be informed to maintain proper records in report.`);
      // figureSheet.style.display = 'none';
     break;
  }

  switch (targetField[1].checked) {
    case true:
      targetLine[28].style.display = 'none';
      targetLine[29].style.display = 'none';
      targetLine[30].style.display = 'none';
      targetLine[31].style.display = 'none';
      break;

      case false:
      break;
  }

  switch (targetField[4].checked) {
    case true:
      targetLine[24].style.display = 'none';
      targetLine[25].style.display = 'none';
      break;

      case false:
        alert (`You did not indicate if all employees were registered. There will be no comment on registration in the report.`);
        break;
  }


  switch (targetField[3].value == null || targetField[3].value == '' ) {
    case true:
      alert (`Please check for any outstanding penalties in SSPAS.`);

      break;
  }

  // else if (document.getElementById("recordsCheck").checked){
  //   document.getElementById("records").style.display = "display";
  // }

  // else if (document.getElementById("recordsCheck1").checked){
  //   document.getElementById("records").style.display = "initial";
  // }

  // else{
  //   alert("Please indicate if records are proper");
  // }
  
  // if (document.getElementById("registrationCheck").checked && document.getElementById("registrationCheck1").checked){
  //   alert("You cannot check both yes and no");
  // }

  // else if (document.getElementById("registrationCheck").checked){
  //   document.getElementById("registration").style.display = "none";
  // }
  // else if (document.getElementById("registrationCheck1").checked){
  //   document.getElementById("registration").style.display = "initial";
  // }
  // else{
  //   alert("Please indicate if all workers are registered");
  // }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//The scheduleGenerator function creates the table that captures assessed contributions for the employer

function scheduleGenerator() {

  let schedule = document.createElement('table');
  schedule.id = 'contributions_schedule';


  if (document.getElementById('contributions_schedule')) { return; };

  let scheduleHead = document.createElement('thead');
  let scheduleBody = document.createElement('tbody');
  let titleRow = document.createElement('tr'); // creates the <tr> that holds the schedule title
  let columnLableRow = document.createElement('tr'); /*Creates a <tr> to hold the Year, Months and Total headings. NB. the Loop
    for attaching column headings does not work if this variable is declared inside the for loop.*/

  let totalsRow = document.createElement('tr');
  let scheduleColumn = document.createElement('td'); //creates the <td> that holds the words "Schedule of Contributions Not Paid"

  const headings = ['YEAR', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'TOTAL'];

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Creates a table header and inserts two rows. The first containing the document description. The second containing column labels.
  scheduleColumn.innerHTML = "ASSESSMENT OF DEBT OWED BY EMPLOYER";
  scheduleColumn.setAttribute("colspan", 14);
  scheduleColumn.setAttribute("style", "text-align:center; font-weight:bold; text-decoration: underline");

  titleRow.appendChild(scheduleColumn); // Will attatch a <td> into the <tr> of the title row of the schedule

  scheduleHead.appendChild(titleRow); // will attach the <tr> containing a <td> into a <thead>


  for (let columnIndex = 0; columnIndex < 14; columnIndex++) {

    let columnLabel = document.createElement('td'); //creates the <td>s that hold column heading lables.

    columnLableRow.appendChild(columnLabel)[columnIndex];
    columnLableRow.setAttribute("style", "text-align:center; font-weight:bold; text-decoration: underline");

    columnLabel.innerText = headings[columnIndex]; //inserts the strings of the array headings into the <td>s of the <thead> second row

    columnLabel[columnIndex];

    scheduleHead.appendChild(columnLableRow);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Creates a table body and inserts table rows with columns containing input fields for capturing assessed contributions figures.
  for (let yearRowIndex = 0; yearRowIndex < 1; yearRowIndex++) {

    let yearRow = document.createElement('tr');
    yearRow.setAttribute('class', 'schedulerows');


    for (let columnIndex = 0; columnIndex < 14; columnIndex++) {

      let yearColumn = document.createElement('td');

      let dataCollector = document.createElement('input');

      yearColumn.appendChild(dataCollector);

      yearRow.appendChild(yearColumn)[columnIndex];

      yearColumn[columnIndex];

      scheduleBody.appendChild(yearRow)[yearRowIndex];
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Creates a table footer and inserts a row with columns containing output fields that display schedule column totals.
  let scheduleFooter = document.createElement('tfoot');
  scheduleFooter.setAttribute('class', 'schedulefoot');


  for (let totColumnIndex = 0; totColumnIndex < 11; totColumnIndex++) {

    let totalsField = document.createElement('input');
    totalsField.setAttribute('class', 'lastrow');

    let totalsColumn = document.createElement('td');

    totalsColumn.appendChild(totalsField)[totColumnIndex];

    totalsRow.appendChild(totalsColumn)[totColumnIndex];

    scheduleFooter.appendChild(totalsRow);

    scheduleFooter.querySelectorAll('input')[0].setAttribute('type', 'button');
    scheduleFooter.querySelectorAll('input')[0].setAttribute('value', '+ Row');
    scheduleFooter.querySelectorAll('td')[0].setAttribute("colspan", "1");
    scheduleFooter.querySelectorAll('input')[0].setAttribute("style", "padding: 0px; width: 55px; color: lightgreen");
    scheduleFooter.querySelectorAll('input')[0].setAttribute('onclick', 'addRow()');
    // scheduleFooter.querySelectorAll('input')[0].setAttribute('background-color', 'green');


    if (scheduleFooter.querySelectorAll('input')[1]) {

      scheduleFooter.querySelectorAll('input')[1].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[1].setAttribute('value', '- Row');
      scheduleFooter.querySelectorAll('td')[1].setAttribute("colspan", "1");
      scheduleFooter.querySelectorAll('input')[1].setAttribute("style", "padding: 0px; width: 55px; color: red");
      scheduleFooter.querySelectorAll('input')[1].setAttribute('onclick', 'deleteRow()');
      // scheduleFooter.querySelectorAll('input')[1].setAttribute('background-color', 'red');

    }
    if (scheduleFooter.querySelectorAll('input')[2]) {

      scheduleFooter.querySelectorAll('input')[2].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[2].setAttribute('value', 'Clear');
      scheduleFooter.querySelectorAll('input')[2].setAttribute("style", "padding: 0px; width: 55px");
      scheduleFooter.querySelectorAll('input')[2].setAttribute('onclick', 'reset()');

    }
    if (scheduleFooter.querySelectorAll('input')[3]) {

      scheduleFooter.querySelectorAll('input')[3].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[3].setAttribute('value', 'SSPAS Penalties:');
      scheduleFooter.querySelectorAll('td')[3].setAttribute("colspan", "2");
      scheduleFooter.querySelectorAll('input')[3].setAttribute("style", "padding: 0px; width: 112px");
    }

    if (scheduleFooter.querySelectorAll('input')[5]) {

      scheduleFooter.querySelectorAll('input')[5].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[5].setAttribute('value', 'Accrued Penalty:');
      scheduleFooter.querySelectorAll('td')[5].setAttribute("colspan", "2");
      scheduleFooter.querySelectorAll('input')[5].setAttribute("style", "padding: 0px; width: 112px");
    }


    if (scheduleFooter.querySelectorAll('input')[7]) {

      scheduleFooter.querySelectorAll('input')[7].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[7].setAttribute('value', 'Total Debt:');
      scheduleFooter.querySelectorAll('td')[7].setAttribute("colspan", "2");
      scheduleFooter.querySelectorAll('input')[7].setAttribute("style", "padding: 0px; width: 112px");
    }

  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  schedule.appendChild(scheduleHead); // will attach a <thead> containing a <tr> with a <td> as the 1st element of the table 
  schedule.appendChild(scheduleBody);
  schedule.appendChild(scheduleFooter);

  document.getElementById('scheduleSheet').appendChild(schedule);

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The function below adds one extra row to the schedule whenever the add row button is clicked
const  addRow = () => {

let scheduleBody = document.querySelector('tbody');
    
let getRows = scheduleBody.querySelectorAll ('tr')

let yearRow1 = document.createElement ('tr');
    yearRow1.setAttribute('class', 'schedulerows' )

let yearRowIndex = getRows.length +1;

for (let columnIndex = 0; columnIndex <14; columnIndex++) {

  let yearColumn = document.createElement('td');
 
  let dataCollector = document.createElement('input');

  yearColumn.appendChild(dataCollector);
    
  yearRow1.appendChild(yearColumn)[columnIndex];
    
  yearColumn[columnIndex];

  scheduleBody.appendChild(yearRow1)[yearRowIndex];

  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//A function that calculates the number of months a particular unpaid contribution has delayed
const monthsDelayed = (year,monthIndex) => {

  let d1 = Date.parse(new Date()); //convert current date to milliseconds

  let d2 = Date.parse((`${year} / ${monthIndex}`)); // convert contributions month entered in schedule to milliseconds

  let d3 = d1 - d2; // obvoius bro

  let lateMonths = Math.floor((d3 / 86400000) / 30.5 -1) ; //Remember why 30.5 -1. 
  // math.floor equally important. Do not Math.round, doesnt give accurate figures. Took a lot of Gin to get us here
  if (lateMonths > 0) {
    return lateMonths;
  } else {
    return 0;
  }
}// Such a short code, took us months to get it rigt. Take note bro.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//The fetchData2 function calculates contribution arrears totals accrued penalties plus grand totals and displays them.

let contributionsArrayHolder = [];
let penaltiesArrayHolder = [];
let scheduleFoot = document.getElementsByClassName ('schedulefoot');
let schedule2Foot = document.getElementsByClassName ('schedule2foot');
let pentot;
// console.log(scheduleFoot[3])

const fetchData2 = () => {
  checkBoxes();
  let penalties;
  let tableRow = document.getElementsByClassName ('schedulerows');
  let grandTotal;
  let rowIndex = 0;
  let totalsArray = [];
  let penaltiesArray = [];

  if (document.getElementById('summary')) {
    contributionsArrayHolder = [];
    penaltiesArrayHolder = [];
  }
  
  // document.getElementsByClassName('lastrow')[3].value = document.getElementsByClassName('answers')[2].value*1;
      do {
      let contributionData = [];

      let tableData = tableRow[rowIndex].querySelectorAll('input');
        
        tableData.forEach ((input,inputIndex) => {

          if (inputIndex > 0 && inputIndex < 13 ){

            contributionData.push(input.value*1); //Sends contribution amount in schedule to the contributionsData array


            totalContributions =  contributionData.reduce((accumulator,currentvalue) => {return accumulator += currentvalue ;}) //Adds up the contributions
            
          } 
        } );


        penalties = contributionData.map ((amount,index) =>{ // Creates an array of penalty figures for each contribution in the contributionsData array

        return (amount * 0.05 * monthsDelayed(tableData[0].value,index+1));
      
      });


     let totalPenalties = penalties.reduce((accumulator,currentvalue) => { return accumulator += currentvalue; }); //Adds up the penalties
     
     tableData[13].value = totalContributions.toLocaleString();

     contributionData.unshift(tableData[0].value*1); // Sends the year in that row from the schedule to the contributionsData array

     contributionData.push(totalContributions); // Sends the sum of contributions for the year to the contributionsData array

     console.log(contributionData); //The complete array to work with for display

     penalties.unshift(tableData[0].value*1); // Sends the year in the row from the schedule to the penalties array

     penalties.push(totalPenalties); // Sends the sum of penalties for the year to the penalties array

     console.log(penalties);  // The complete array to work with for display
  
     totalsArray.push(totalContributions); // Sends the contribution total for the year to the totalsArray

     console.log(totalsArray);

     penaltiesArray.push(totalPenalties); // Sends the penalties total for the year to the totalsArray

     contributionsArrayHolder.push(contributionData);
     penaltiesArrayHolder.push(penalties);

     console.log(contributionsArrayHolder);
     console.log(penaltiesArrayHolder);


  grandTotal = totalsArray.reduce ((accumulator,rowTotal) => { return accumulator += rowTotal });

  let accruedPenalties = penaltiesArray.reduce((accumulator,pentotal) => { return accumulator += pentotal; });


  scheduleFoot[0].querySelectorAll('input')[10].value = grandTotal.toLocaleString();
  pentot = scheduleFoot[0].querySelectorAll('input')[6].value = accruedPenalties.toLocaleString();
  scheduleFoot[0].querySelectorAll('input')[8].value = 
 ((grandTotal + accruedPenalties + document.getElementsByClassName('answers')[3].value*1)).toLocaleString();

  rowIndex++;
  scheduleFoot[0].querySelectorAll('input')[4].value = (document.getElementsByClassName('answers')[3].value*1).toLocaleString();
  } 
  
  while (rowIndex < tableRow.length);


  // debtTableBuilder  ();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//debtSummaryTable function creates the table to hold the summary of contributions and penalties figures

const debtSummaryTable = () => {

if (document.getElementById('summary')) {
  let myOutputDiv = document.getElementById('output');
  let myTable = document.getElementById('summary');
  
  let deletedTable = myOutputDiv.removeChild(myTable);
  console.log (`I ${deletedTable} WAS EVICTED.`)
}

  let schedule2 = document.createElement('table');
  schedule2.setAttribute('id', 'summary');


  let schedule2Head = document.createElement('thead');
  let schedule2Body = document.createElement('tbody');
        let titleRow2 = document.createElement('tr');// creates the <tr> that holds the schedule2 title
  let columnLableRow2 = document.createElement('tr'); /*Creates a <tr> to hold the Year, Months and Total headings. NB. the Loop 
  for attaching column headings does not work if this variable is declared inside the for loop.*/ 
  let schedule2Column = document.createElement('td');//creates the <td> that holds the words "schedule2 of Contributions Not Paid"

  const headings = ['YEAR','MONTH','MONTHS LATE','CONTRIBUTIONS DUE','ACCRUED PENALTY']
  let employerName = document.getElementsByClassName('reportSec')[1].querySelectorAll('input');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Creates a table header and inserts two rows. The first containing the document description. The second containing column labels.
  
  schedule2Column.innerHTML = `${(employerName[5].value).toLocaleUpperCase()}, 
                                EMPLOYER NUMBER: ${(employerName[7].value).toLocaleUpperCase()} <br>
                                SUMMARY OF OUTSTANDING CONTRIBUTIONS AND PENALTIES <br>
                                AS AT ${myCustomDate()}`;
  schedule2Column.setAttribute("colspan", 5);
  // schedule2Column.setAttribute("style", "text-align:center; font-size:12px; font-weight:bold; text-decoration: underline");
  schedule2Column.setAttribute("id", "debtTableHeader");

  titleRow2.appendChild(schedule2Column);// Will attatch a <td> into the <tr> of the title row of the schedule2

  schedule2Head.appendChild(titleRow2);// will attach the <tr> containing a <td> into a <thead>



  for (let columnIndex = 0; columnIndex < 5; columnIndex++) {

    let columnLabel2 = document.createElement('td');//creates the <td>s that hold column heading lables.

    columnLableRow2.appendChild(columnLabel2)[columnIndex];
    // columnLableRow2.setAttribute("style", "text-align:center;font-size:12px; font-weight:bold; text-decoration: underline");
    columnLableRow2.setAttribute("id", "debtTableMonths");

    columnLabel2.innerText = headings[columnIndex];//inserts the strings of the array headings into the <td>s of the <thead> second row

    columnLabel2 [columnIndex];

    schedule2Head.appendChild(columnLableRow2);
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Creates a table body and inserts table rows with columns containing input fields for capturing assessed contributions figures.

  for (let yearRowIndex = 0; yearRowIndex < 1; yearRowIndex++) {

    let yearRow2 = document.createElement('tr');
    yearRow2.setAttribute('class', 'schedule2rows' )


    for (let columnIndex = 0; columnIndex <5; columnIndex++) {

      let yearColumn2 = document.createElement('td');
     
      let dataCollector2 = document.createElement('output');
            dataCollector2.setAttribute('type', 'text' );
          
      yearColumn2.appendChild(dataCollector2);
        
      yearRow2.appendChild(yearColumn2)[columnIndex];
        
      yearColumn2[columnIndex];

      schedule2Body.appendChild(yearRow2)[yearRowIndex];
    }
} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Creates a table footer and inserts a row with columns containing output fields that display schedule2 column totals.

    var schedule2Footer = document.createElement('tfoot');
    
    for (i = 0; i < 2; i++){
      let totalsRow2 = document.createElement('tr');
      
    
    for (let totColumnIndex = 0; totColumnIndex < 5; totColumnIndex++) {
      // let totalsRow = document.createElement('tr');
      let totalsField2 = document.createElement('output');
          // totalsField2.setAttribute('type', 'text');
          totalsField2.setAttribute('class', 'schedule2foot');

          
      let totalsColumn2 = document.createElement('td');

      totalsColumn2.setAttribute('class', 'footercells');

      totalsColumn2.appendChild(totalsField2)[totColumnIndex];

      totalsRow2.appendChild(totalsColumn2)[totColumnIndex];

      schedule2Footer.appendChild(totalsRow2);
    }
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      schedule2.appendChild(schedule2Head);// will attach a <thead> containing a <tr> with a <td> as the 1st element of the table 

      schedule2.appendChild(schedule2Body);

      schedule2.appendChild(schedule2Footer);
      
      document.getElementById('output').appendChild(schedule2);

 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The function below adds one extra row to the output page

const  addRow2 = () => {
  
  let scheduleBody = document.getElementById('output').querySelector('tbody');

  let getRows = document.getElementsByClassName ('schedule2rows')
  let yearRow1 = document.createElement ('tr');
      yearRow1.setAttribute('class', 'schedule2rows' )

  let yearRowIndex = getRows.length ;

  for (let columnIndex = 0; columnIndex < 5; columnIndex++) {

    let yearColumn = document.createElement('td');
   
    let dataCollector = document.createElement('output');
        dataCollector.setAttribute('type', 'text')

    yearColumn.appendChild(dataCollector);
      
    yearRow1.appendChild(yearColumn)[columnIndex];
      
    yearColumn[columnIndex];

    scheduleBody.appendChild(yearRow1)[yearRowIndex];

  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*The dubtTableBuilder function creates a table summarising outstanding contributions, months delayed and accrued penalties using 
data picked from the schedule of contributions*/

const debtTableBuilder = () => {

  const headings = ['YEAR','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC','TOTAL'];

  let tableRows2 = document.getElementsByClassName ('schedule2rows');

   let rowIndex2 = 0;

   contributionsArrayHolder.forEach (yearArray => {

      for (let x =1; x < yearArray.length-1; x++) {

      let outputFields = tableRows2[rowIndex2].querySelectorAll('output');
      
      if (yearArray[x] > 0) {

        outputFields[0].value = yearArray[0];

        outputFields[1].value = headings[x];

        outputFields[3].value = (yearArray[x]).toLocaleString();

        outputFields[2].value = monthsDelayed(yearArray[0], x);
      
        outputFields[4].value = (yearArray[x] * monthsDelayed(yearArray[0], x) * 0.05).toLocaleString();

        addRow2();

        rowIndex2++;

        tableRows2[rowIndex2].querySelectorAll('output')[2].value = 'Sub Totals:';

        tableRows2[rowIndex2].querySelectorAll('output')[3].value = scheduleFoot[0].querySelectorAll('input')[10].value;

        schedule2Foot[3].value = `Outstanding Penalty for previous late payments:`;

        schedule2Foot[4].value = `${(document.getElementsByClassName('answers')[3].value*1).toLocaleString()}`;

        tableRows2[rowIndex2].querySelectorAll('output')[4].value = pentot;

        schedule2Foot[8].value = 'GRAND TOTAL:'; 

        schedule2Foot[9].value = `Kes.${scheduleFoot[0].querySelectorAll('input')[8].value}`; 
      }

    }
      
  });

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//The skipped demand function populates the demand letter with relevant data from the schedule of contributions and inspection report
schedulefoot = document.getElementsByClassName('schedulefoot');

const skippedDemand = () => {
  let headings = ['YEAR','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC','TOTAL'];
  let documentReference = document.getElementsByClassName('answers')[10].value;
  let responsiblePerson = document.getElementsByClassName('employerDetails')[4].value;
  let employerName = document.getElementsByClassName('employerDetails')[2].value;
  let employerNumber = document.getElementsByClassName('employerDetails')[3].value;
  let postAddress = document.getElementsByClassName('answers')[5].value;
  let postalCode = document.getElementsByClassName('answers')[6].value;
  let postLocation = document.getElementsByClassName('answers')[7].value;
  let salutation = 'Dear Sir / Madam,';
  let documentTitle = '<b> <u> RE: INSPECTION REPORT </u> </b> ';

  let paragraph1a = `An inspection carried out on `;

  let paragraph1b = document.getElementsByClassName('employerDetails')[0].value;;

  let paragraph1c = ` revealed the following.`;
  
  let observation1 = '<b><u><b><u>Contributions<u><b>';
  let obs1statement = `Your contributions payments are not up to date. An assessment revealed unpaid contributions for the period `;
  let skippedPeriodStart = document.getElementsByClassName('answers')[2].value;;
  // document.getElementsByClassName('schedulerows2').querySelectorAll('input')[1].value;
  let skippedPeriodEnd = ``;
  let obs1statementB = `amounting to Kes.`
  let unpaidContributions = scheduleFoot[0].querySelectorAll('input')[10].value; 
  let observation2 = '<b><u>Penalties<u><b> <br>';
  let obs2statementA = `The above unpaid contributions have accrued penalties amounting to Kes.`;
  let accruedPenalties = `${pentot}`;
  let obs2statementB = `as at the`;
  let accPenaltyDate = myCustomDate();

  if (accruedPenalties < 1) {
    obs2statementA = ``;
    accruedPenalties = ``;
    obs2statementB = ``;
    accPenaltyDate = ``;
  }

  let sspasPenalties = `${(document.getElementsByClassName('answers')[3].value*1).toLocaleString()}`;

  var obs2statementC = `You further have outstanding penalties of Kes.${sspasPenalties}`;
  var obs2statementD = `arising from previous late payments of contributions <b>(See Appendix for breakdown of figures)</b>. <br> <br>`;

  if (sspasPenalties < 1) {
   obs2statementC = `It was observed that you had no outstanding penalties for previous late payments. 
   You are encouraged to always pay contributions on time to avoid penalties for late payment` ;

   obs2statementD = `<br> <br>`;

   accPenaltyDate = ``;
}
else if (sspasPenalties > 1 && accruedPenalties < 1) {
  obs2statementC = `It was observed that you have outstanding penalties of Kes.${sspasPenalties}`;
  obs2statementD = `arising from previous late payments of contributions <b>(See attached document for breakdown of figures)</b>. <br> <br>`;

}
else if (sspasPenalties > 1 ) {
  obs2statementC = `It was observed that you have outstanding penalties of Kes.${sspasPenalties}`;
  obs2statementD = `arising from previous late payments of contributions <b>(See attached document for breakdown of figures)</b>. <br> <br>`;

}


  let observation3 = '<b><u><b><u>Registration<u><b> <br>';
  let obs3statement = `It was noted that some of your employees were not registered.
  Kindly facilitate their immediate registration to enable proper submission of returns. <br> <br>`;

  let observation4 = '<b><u><b><u>Records<u><b> <br>';
  let obs4statement = `It was observed that you do not maintain proper employee records. 
  Please note that you are required to maintain and update a record (muster roll / Payroll) of your 
  employee wages clearly showing monthly N.S.S.F. deductions, and avail them for inspection when 
  requested. <br> <br>`;



  let returns = '<b><u><b><u>Returns<u><b> <br>';
  
  let returnsStatementA = `Kindly provide returns for the period `;

  let returnsPeriod =  document.getElementsByClassName('answers')[2].value;

  let returnsStatementB = ` to enable us update the missing contributions in your employee's accounts. <br> <br>`;

  let officer = `Thank you for your cooperation during the inspection, <br> <br> <br> <br>
  ${(document.getElementsByClassName('employerDetails')[1].value).toLocaleUpperCase()} <br> 
  FOR:BRANCH MANAGER  <br>  <b><u> KITENGELA </u> </b> <br> <br>`;

  let wadosi = `c.c. <br> Manager, Registration & Collections <br> Regional Manager, Coast & NE <br> <br>`; 


  let targetSpan = document.getElementById('inspectionReportLetter').querySelectorAll('span');
  

  let docReference = targetSpan[0].innerHTML = `Ref:NSSF/UKN/6/1/${employerNumber}(${documentReference})`;
  let documentDate = targetSpan[1].innerHTML =`Date: ${myCustomDate()}`;
  let resPerson = targetSpan[2].innerHTML = `The ${responsiblePerson}`;
  let empName = targetSpan[3].innerHTML = employerName;
  let postAddr = targetSpan[4].innerHTML = `P.O. Box ${postAddress}-${postalCode}`;
  let postLoc = targetSpan[5].innerHTML = `<b><u>${postLocation}<u><b>`;
  let salut = targetSpan[6].innerHTML = salutation;
  let docTitle = targetSpan[7].innerHTML = documentTitle;
  let para1a = targetSpan[8].innerHTML = paragraph1a; 
  let para1b = targetSpan[9].innerHTML = paragraph1b;
  let para1c = targetSpan[10].innerHTML = paragraph1c;
  let obs1 = targetSpan[11].innerHTML = observation1;
  let obs1state = targetSpan[12].innerHTML = obs1statement;
  let skippedMonthsStart = targetSpan[13].innerHTML = skippedPeriodStart;
  let skippedMonthsEnd = targetSpan[14].innerHTML = skippedPeriodEnd;
  let obs1B = targetSpan[15].innerHTML = `${obs1statementB}${unpaidContributions}.`;
  let obs2 = targetSpan[16].innerHTML = observation2;
  let obs2stateA = targetSpan[17].innerHTML = obs2statementA;
  let accPenalties = targetSpan[18].innerHTML = accruedPenalties;
  let obs2stateB = targetSpan[19].innerHTML = obs2statementB;
  if (accruedPenalties < 1) { let penaltyDate= ``} else {

  penaltyDate = targetSpan[20].innerHTML =`${myCustomDate()}.`;}

  let obs2stateC = targetSpan[21].innerHTML = obs2statementC;
  // let sspasPen = targetSpan[22].innerHTML = `${sspasPenalties}`;
  let obs2stateD = targetSpan[23].innerHTML = obs2statementD;
  let obs3stateD = targetSpan[24].innerHTML = observation3;
  let obs4stateD = targetSpan[25].innerHTML = obs3statement;
  let obs5stateD = targetSpan[26].innerHTML = observation4;
  let obs6stateD = targetSpan[27].innerHTML = obs4statement;

  let returns1 = targetSpan[28].innerHTML = returns;
  let returnsStatementA1 = targetSpan[29].innerHTML = returnsStatementA;
  let returnsPeriod1 = targetSpan[30].innerHTML = returnsPeriod;
  let returnsStatementB1 = targetSpan[31].innerHTML = returnsStatementB;

  let signer = targetSpan[33].innerHTML = officer;
  let wakubwa = targetSpan[34].innerHTML = wadosi;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Demand Notice Code Starts Here*/
let targetSpan2 = document.getElementById('demandNotice').querySelectorAll('span');

targetSpan2[0].innerHTML =`Ref:NSSF/UKN/6/1/${employerNumber}(${(documentReference*1)+1})`
targetSpan2[1].innerHTML =`Date: ${myCustomDate()}`;
targetSpan2[2].innerHTML = `The ${responsiblePerson}`;
targetSpan2[3].innerHTML = employerName;
targetSpan2[4].innerHTML = `P.O. Box ${postAddress}-${postalCode}`;
targetSpan2[5].innerHTML = `<b><u>${postLocation}<u><b>`;
targetSpan2[6].innerHTML = salutation;
targetSpan2[7].innerHTML = `<b><u> DEMAND NOTICE FOR UNPAID CONTRIBUTIONS AND PENALTIES </u></b> <br> <br>`;
targetSpan2[8].innerHTML = `Kindly refer to our inspection report document`;
targetSpan2[9].innerHTML = `${docReference}.<br> <br`;

targetSpan2[10].innerHTML = `It was observed that you are in arrears of workers’ contributions amounting to 
                             Kes.${unpaidContributions}`;

if (accPenalties < 1) {
targetSpan2[11].innerHTML = ``;
} 
else if (accPenalties < 1 && sspasPenalties < 1) {
  targetSpan2[11].innerHTML = ``;
  targetSpan2[10].innerHTML =``;
  targetSpan2[12].innerHTML =``;

}
else 
{
targetSpan2[11].innerHTML = `, with accrued penalties of Kes.${accruedPenalties} `;

}


targetSpan2[12].innerHTML = `and outstanding penalties for previous late payments amounting to Kes.`;
targetSpan2[13].innerHTML = `${sspasPenalties}. <br> <br>`;
targetSpan2[14].innerHTML = //`Your attention is drawn to section 55(a) (i) of the NSSF Act, No. 45 of 2013, Laws of Kenya which 
//stipulates that it is an offence to fail to remit contributions. Furthermore, failure to pay contributions is denying your workers 
//their right to social security under Article 43(1-e) of the constitution. <br> <br> 

`Please note that contributions are due by the 9th day of the month following the contribution period. 
<b> All late payments attract a penalty of 5% per month for such period that the contributions amount due remains unpaid.</b> <br> <br>`;

targetSpan2[15].innerHTML = `You are therefore advised to clear the total outstanding contributions plus penalties amounting to `;
targetSpan2[16].innerHTML = `<b> <u>Kes.${scheduleFoot[0].querySelectorAll('input')[8].value} </u> </b> 
                              within <b> Fourteen (14) days </b> of this notice.<br> <br>`;

targetSpan2[17].innerHTML = `Yours Faithfully, <br> <br> <br> <br>
${(document.getElementsByClassName('employerDetails')[1].value).toLocaleUpperCase()} <br> 
FOR:BRANCH MANAGER  <br>  <b><u> KITENGELA </u> </b> <br> <br>`;

targetSpan2[18].innerHTML = `${wadosi} <br>`;

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reset() {

  document.body.querySelector('tbody').querySelectorAll('input').forEach(inputField => inputField.value = "");
  document.body.querySelector('tfoot').querySelectorAll('input')[4].value = "";
  document.body.querySelector('tfoot').querySelectorAll('input')[6].value = "";
  document.body.querySelector('tfoot').querySelectorAll('input')[8].value = "";
  document.body.querySelector('tfoot').querySelectorAll('input')[10].value = "";

}

const deleteRow = () => {
  let targetElement = document.getElementById('scheduleSheet').querySelectorAll('tr');
  targetElement[targetElement.length -2].remove();
}

const printLetters = () => {

  let letters = document.getElementById('barua');
  let appendix1 = document.getElementById('output');
  let targetSpan = document.getElementById('inspectionReportLetter').querySelectorAll('span');
 
  let opt = {
    margin:       [1.3,0.8,0.45,0.8],
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    // pageBreak: {mode: ['css']},
    pagebreak: { after: ['#inspectionReportLetter','#demandNotice', /*'#output',*/ '#scheduleSheet'] },

    putOnlyUsedFonts:true,
  };

  let opt2 = {
    margin:       [0.45,0.8,0.45,0.8],
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    // pageBreak: {mode: ['css']},
    // pagebreak: { after: ['#inspectionReportLetter','#demandNotice', '#output', '#scheduleSheet'] },

    putOnlyUsedFonts:true,
  };

  html2pdf().set(opt).from(letters).save(`${targetSpan[3].innerHTML} Inspection Report`);
  // html2pdf().set(opt2).from(appendix1).save(`${targetSpan[3].innerHTML} Appendix1`);

}

const printSchedule = () => {
  let debtTable = document.getElementById('scheduleSheet');

  let opt = {
    margin:       [0.3,0.3,0.3,0.3],
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' },
    putOnlyUsedFonts:true,

  };

  html2pdf().set(opt).from(debtTable).save('contributions schedule')
  
}

const printPenalty = () => {
  let penaltySummary = document.getElementById('output');

  let opt = {
    margin:       [0.45,0.8,0.45,0.8],
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    // pagebreak:{ mode:['avoid-all', 'css', 'legacy'] },
    pagebreak:{ avoid:['tr'] },

    putOnlyUsedFonts:true,

  };

  html2pdf().set(opt).from(penaltySummary).save(`${document.getElementsByClassName('employerDetails')[2].value}-Penalty Summary`)

  };

  const myCustomDate = ()=> {
    let ext;
    let month;
    switch (new Date().getUTCDate()) {
      case 1:
        ext = `<sup>st</sup>`;
        break;
      case 31:
        ext = `<sup>st</sup>`;
        break;

      case 21:
        ext = `<sup>st</sup>`;
        break;
      
      case 2:
         ext = `<sup>nd</sup>`;
        break;
      case 22:
        ext = `<sup>nd</sup>`;
        break;
      case 3:
        ext = `<sup>rd</sup>`;
        break;
      case 23:
        ext = `<sup>rd</sup>`;
        break;
      default:
        ext = `<sup>th</sup>`;
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