function previousDate(year,month,day){
    const theDayBefore = day -1
    const previousDate = new Date( year,month-1,theDayBefore)
    let date = previousDate.getDate()
   //date = date<10?"0"+date:date;
    let month1 = previousDate.getUTCMonth()
   // month1 = month1<10?"0"+month1:month1;
    let year1 = previousDate.getFullYear()
    //year1 = year1<10?"0"+year1:year1;

    console.log(`${year1}-${month1+1}-${date}`);
}
previousDate(2016, 9, 30)