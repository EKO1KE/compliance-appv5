// const { myCustomDate } = require('./sharedFunctions');

const accruedPenaltiesForm = () => {
  
  let reportBorder = document.createElement('div');
  reportBorder.setAttribute('class', 'reportFrame');
  document.body.append(reportBorder);
  

  for (let i =0; i < 2; i++) {
    let reportSections = document.createElement('div');
    reportSections.setAttribute('class', 'reportSec');

    document.getElementsByClassName('reportFrame')[0].appendChild(reportSections)[i]

  };

  let documentTitle = document.createElement('textbox');
  documentTitle.innerText = ('ACCRUED PENALTIES FORM');
  document.getElementsByClassName('reportSec')[0].appendChild(documentTitle);

  for (let i =0; i < 8; i++) {

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

  myInputs1[0].setAttribute('value', 'Emoloyer Name:');
  myInputs1[2].setAttribute('value', 'Employer Number:');
  myInputs1[4].setAttribute('value', 'Compliance Officer:');
  myInputs1[6].setAttribute('value', 'Branch:');
  // myInputs1[8].setAttribute('value', 'KITENGELA');
  // myInputs1[10].setAttribute('value', 'Date of Inspection:');
  // myInputs1[12].setAttribute('value', 'Penalty Amount:');
  // myInputs1[14].setAttribute('value', 'Demand Notice Folio:');
  // myInputs1[16].setAttribute('value', 'P.O. Box:');
  // myInputs1[18].setAttribute('value', 'Post Code:');
  // myInputs1[20].setAttribute('value', 'Post Office:');

  //myInputs1[1].setAttribute('value', 'SOL SURENO RESTAURANT');
  //myInputs1[3].setAttribute('value', '00328022');
  myInputs1[5].setAttribute('value', 'Kevin Egessa');
  myInputs1[7].setAttribute('value', 'KITENGELA');
  // myInputs1[9].setAttribute('value', 'General Manager');
  // myInputs1[11].setAttribute('value', new Date());
  // myInputs1[13].setAttribute('value', '50000');
  // myInputs1[15].setAttribute('value', '222');
  // myInputs1[17].setAttribute('value', '28742');
  // myInputs1[19].setAttribute('value', '00200');
  // myInputs1[21].setAttribute('value', 'NAIROBI');

}

function scheduleGenerator() {

  let schedule = document.createElement('table');
  schedule.setAttribute('id', 'contributions_schedule');

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

  for (let totColumnIndex = 0; totColumnIndex < 9; totColumnIndex++) {

    let totalsField = document.createElement('input');
    totalsField.setAttribute('class', 'lastrow');

    let totalsColumn = document.createElement('td');

    totalsColumn.appendChild(totalsField)[totColumnIndex];

    totalsRow.appendChild(totalsColumn)[totColumnIndex];

    scheduleFooter.appendChild(totalsRow);

    scheduleFooter.querySelectorAll('input')[0].setAttribute('type', 'button');
    scheduleFooter.querySelectorAll('input')[0].setAttribute('value', '+ Row');
    scheduleFooter.querySelectorAll('td')[0].setAttribute("colspan", "2");
    scheduleFooter.querySelectorAll('input')[0].setAttribute("style", "padding: 0px; width: 112px; color: limegreen");
    scheduleFooter.querySelectorAll('input')[0].setAttribute('onclick', 'addRow()');
    scheduleFooter.querySelectorAll('input')[0].setAttribute('enterkeyhint', 'next');

    if (scheduleFooter.querySelectorAll('input')[1]) {

      scheduleFooter.querySelectorAll('input')[1].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[1].setAttribute('value', '- Row');
      scheduleFooter.querySelectorAll('td')[1].setAttribute("colspan", "1");
      scheduleFooter.querySelectorAll('input')[1].setAttribute("style", "padding: 0px; width: 112px; color:red");
      scheduleFooter.querySelectorAll('input')[1].setAttribute('onclick', 'fetchData2(); debtSummaryTable(); debtTableBuilder()');

    }

    if (scheduleFooter.querySelectorAll('input')[2]) {

      scheduleFooter.querySelectorAll('input')[2].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[2].setAttribute('value', 'Get Totals');
      scheduleFooter.querySelectorAll('td')[2].setAttribute("colspan", "2");
      scheduleFooter.querySelectorAll('input')[2].setAttribute("style", "padding: 0px; width: 112px");
      scheduleFooter.querySelectorAll('input')[2].setAttribute('onclick', 'fetchData2(); debtSummaryTable(); debtTableBuilder()');

    }

    if (scheduleFooter.querySelectorAll('input')[3]) {

      scheduleFooter.querySelectorAll('input')[3].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[3].setAttribute("style", "background-color: red");
      scheduleFooter.querySelectorAll('input')[3].setAttribute('value', 'Print Penalty');
      scheduleFooter.querySelectorAll('td')[3].setAttribute("colspan", "2");
      scheduleFooter.querySelectorAll('td')[3].setAttribute("style", "background-color: grey");
      scheduleFooter.querySelectorAll('input')[3].setAttribute("style", "padding: 0px; width: 112px");
      scheduleFooter.querySelectorAll('input')[3].setAttribute('onclick', 'fetchData2(); debtSummaryTable(); debtTableBuilder(); printPenalty()');
    }

    if (scheduleFooter.querySelectorAll('input')[4]) {

      // scheduleFooter.querySelectorAll('input')[4].setAttribute('type', 'button');
      scheduleFooter.querySelectorAll('input')[4].setAttribute('value', 'Accrued Penalty:');
      scheduleFooter.querySelectorAll('td')[4].setAttribute("colspan", "2");
      scheduleFooter.querySelectorAll('input')[4].setAttribute("style", "padding: 0px; width: 112px");
      // scheduleFooter.querySelectorAll('input')[4].setAttribute('onclick', 'fetchData()');
    }


    if (scheduleFooter.querySelectorAll('input')[6]) {

      scheduleFooter.querySelectorAll('input')[6].setAttribute('value', 'Total Debt:');
      scheduleFooter.querySelectorAll('td')[6].setAttribute("colspan", "2");
      scheduleFooter.querySelectorAll('input')[6].setAttribute("style", "padding: 0px; width: 112px");
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

  let lateMonths = Math.floor((d3 / 86400000) / 30.5-1) ; //Remember why 30.5 -1 bro. Took a lot of Gin to get us here
  // math.floor equally important. Do not Math.round, doesnt give accurate figures.
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

      do {
        console.log('Can you see me?')

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


  scheduleFoot[0].querySelectorAll('input')[8].value = grandTotal.toLocaleString();
  pentot = scheduleFoot[0].querySelectorAll('input')[5].value = accruedPenalties.toLocaleString();
  scheduleFoot[0].querySelectorAll('input')[7].value = (grandTotal + accruedPenalties).toLocaleString();

  rowIndex++;
  } 
  
  while (rowIndex < tableRow.length);


  // debtTableBuilder  ();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//debtSummaryTable function creates the table to hold the summarry of contributions and penalties figures

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
  let totalsRow2 = document.createElement('tr');
  let schedule2Column = document.createElement('td');//creates the <td> that holds the words "schedule2 of Contributions Not Paid"
  let targetInput = document.getElementsByTagName('input');
  const headings = ['YEAR','MONTH','MONTHS LATE','CONTRIBUTIONS DUE','ACCRUED PENALTY']

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creates a table header and inserts two rows. The first containing the document description. The second containing column labels.
  
  schedule2Column.innerHTML =
   `<u> SUMMARY OF OUTSTANDING CONTRIBUTIONS AND PENALTIES <br> ${targetInput[1].value} <br> 
   EMPLOYER NUMBER: ${targetInput[3].value}, AS AT THE ${myCustomDate()} </u>`;
   schedule2Column.setAttribute("colspan", 5);
   schedule2Column.setAttribute("id", "debtTableHeader");
  schedule2Column.setAttribute("style", "text-align:center; font-weight:bold");

  titleRow2.appendChild(schedule2Column);// Will attatch a <td> into the <tr> of the title row of the schedule2

  schedule2Head.appendChild(titleRow2);// will attach the <tr> containing a <td> into a <thead>


  for (let columnIndex = 0; columnIndex < 5; columnIndex++) {

    let columnLabel2 = document.createElement('td');//creates the <td>s that hold column heading lables.

    columnLableRow2.appendChild(columnLabel2)[columnIndex];
    columnLableRow2.setAttribute("id", "debtTableMonths");
    columnLableRow2.setAttribute("style", "text-align:center; font-weight:bold; text-decoration: underline");

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
        

    for (let totColumnIndex = 0; totColumnIndex < 5; totColumnIndex++) {
      let totalsRow = document.createElement('tr');
      let totalsField2 = document.createElement('output');
          totalsField2.setAttribute('type', 'text');
          totalsField2.setAttribute('class', 'schedule2foot');

          
      let totalsColumn2 = document.createElement('td');

      totalsColumn2.setAttribute('class', 'footercells');
      totalsColumn2.setAttribute('font-weight', 'bold');

      totalsColumn2.appendChild(totalsField2)[totColumnIndex];

      totalsRow2.appendChild(totalsColumn2)[totColumnIndex];

      schedule2Footer.appendChild(totalsRow2);
      
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      schedule2.appendChild(schedule2Head);// will attach a <thead> containing a <tr> with a <td> as the 1st element of the table 
      schedule2.appendChild(schedule2Body)
      schedule2.appendChild(schedule2Footer)
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

   let debtTable = document.getElementById('summary');

   

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

        tableRows2[rowIndex2].querySelectorAll('output')[3].value = scheduleFoot[0].querySelectorAll('input')[8].value;
        tableRows2[rowIndex2].querySelectorAll('output')[4].value = pentot;
        schedule2Foot[3].value = 'GRAND TOTAL:'; 
        schedule2Foot[4].value = (scheduleFoot[0].querySelectorAll('input')[7]).value; 
      }

    }
      
  });

}

const printPenalty = () => {
  let penaltySummary = document.getElementById('penaltyDemandLetter');

  let opt = {
    margin:       [0.45,0.8,0.45,0.8],
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak:{ mode:['avoid-all', 'css', 'legacy'] },
    putOnlyUsedFonts:true,

  };
  
  let disclaimer = document.getElementById ('disclaimer');
  let myInputs3 = document.getElementsByClassName('reportSec')[1].querySelectorAll('input');
  disclaimer.innerHTML = `NB: Unpaid contributions will continue to accrue penalties at the rate of 5% per month for such 
  period that the amount due remains unpaid. <br> <br>
                           Prepared by:<br>
                          ${myInputs3[5].value}`

  html2pdf().set(opt).from(penaltySummary).save('Penalty Summary')

  };

  const myCustomDate = (ext,month)=> {
  
    switch (new Date().getUTCDate()) {
      case 1:
        ext = `<sup> st </sup>`;
        break;
      case 21:
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
        ext = `<sup> th </sup>`;
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