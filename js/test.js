


var fs = require("fs");


// Appending the file

var appendFile1='/csv/India2011.csv';
var appendFile2='/csv/IndiaSC2011.csv';
var appendFile3= '/csv/IndiaST2011.csv';
var file= 'merged2.csv';

function appendCSV(file,appendFile1,appendFile2,appendFile3)
{
  fs.readFile(appendFile1, function(err,data)
            {
            if (err) throw err;
            console.log("File was read");
            fs.appendFile(file,data,function(err)
            {
            if(err) throw err;
            console.log("File1 Appended");
            fs.readFile(appendFile2, function(err,data)
            {
                  if (err) throw err;
                  console.log("File was read");
                  fs.appendFile(file,data,function(err)
                  {
                  if(err) throw err;
                  console.log("File2 Appended");
                  fs.readFile(appendFile3, function(err,data)
                    {
                      if (err) throw err;
                      console.log("File was read");
                      fs.appendFile(file,data,function(err)
                      {
                      if(err) throw err;
                            console.log("File2 Appended");
                      }); });
                    });
          });
        });
      });
}

//appendCSV(file,appendFile1,appendFile2,appendFile3);
//Method 1
//
// //Create a readable stream
//  var readerStream = fs.createReadStream('test2.csv');
//
//  //Handle stream events
//
//  readerStream.on('data', function(chunk)
//  {
//    data += chunk;
//  });
//
//  readerStream.on('end', function(){
//   console.log(data);
//  });
//
//  console.log("File reading done");


//Method 2

var content;

fs.readFile('csv/merged.csv', function(err, data) {
    if (err) {
        console.log(err)
    }
    content = data.toString();
    var conv = content.replace(/"[^"]+"/g, function (match) {
    return match.replace(/,/g,"");
}).split(",");



    var lines=conv.toString().split("\r\n");
   var headers=lines[0].split(",");// for headers
    var result1= [];
   var count1=0;var count2=0;var count3=0;var count4=0;var count5=0;var count6=0;var count7=0;var count8=0;var count9=0;var count10=0;
   var count11=0;var count12=0;var count13=0;var count14=0;var count15=0;var count16=0;var count17=0;var count18=0;var count19=0;var count20=0;
   var count21=0;var count22=0;var count23=0;var count24=0;var count25=0;var count26=0;var count27=0;var count28=0;var count29=0;

     var result2= [];
     var totalLiteracyRateByAgeGroup1=0; var totalLiteracyRateByAgeGroup2=0; var totalLiteracyRateByAgeGroup3=0;
      var totalLiteracyRateByAgeGroup4=0; var totalLiteracyRateByAgeGroup5=0; var totalLiteracyRateByAgeGroup6=0
       var totalLiteracyRateByAgeGroup11=0; var totalLiteracyRateByAgeGroup10=0; var totalLiteracyRateByAgeGroup9=0;;
      var totalLiteracyRateByAgeGroup7=0; var totalLiteracyRateByAgeGroup12=0; var totalLiteracyRateByAgeGroup14=0;
       var totalLiteracyRateByAgeGroup15=0; var totalLiteracyRateByAgeGroup16=0; var totalLiteracyRateByAgeGroup17=0;
        var totalLiteracyRateByAgeGroup18=0; var totalLiteracyRateByAgeGroup19=0; var totalLiteracyRateByAgeGroup20=0;
         var totalLiteracyRateByAgeGroup21=0; var totalLiteracyRateByAgeGroup22=0; var totalLiteracyRateByAgeGroup23=0;
          var totalLiteracyRateByAgeGroup24=0; var totalLiteracyRateByAgeGroup25=0; var totalLiteracyRateByAgeGroup26=0;
           var totalLiteracyRateByAgeGroup27=0; var totalLiteracyRateByAgeGroup28=0; var totalLiteracyRateByAgeGroup8=0;
          var totalLiteracyRateByAgeGroup13=0;

     var mainObjToPush={};
     var ageGroup1=0;var ageGroup2=0;var ageGroup3=0; var ageGroup4=0; var ageGroup5=0;var ageGroup6=0;
     var ageGroup7=0;var ageGroup8=0;var ageGroup9=0;var ageGroup10=0;var ageGroup11=0;var ageGroup12=0;
     var ageGroup13=0;var ageGroup14=0;var ageGroup15=0;var ageGroup16=0; var ageGroup17=0;var ageGroup18=0;
     var ageGroup19=0;var ageGroup20=0;var ageGroup21=0;var ageGroup22=0;var ageGroup23=0;var ageGroup24=0;
     var ageGroup25=0;var ageGroup26=0;var ageGroup27=0;var ageGroup28=0;var ageGroup29=0;var ageGroup30=0;


     var literacyRateForGroup1=0;var literacyRateForGroup2=0;var literacyRateForGroup3=0;var literacyRateForGroup4=0;
     var literacyRateForGroup5=0;var literacyRateForGroup6=0;var literacyRateForGroup7=0;var literacyRateForGroup8=0;
     var literacyRateForGroup9=0;var literacyRateForGroup10=0;var literacyRateForGroup11=0;var literacyRateForGroup12=0;
     var literacyRateForGroup13=0;var literacyRateForGroup14=0;var literacyRateForGroup15=0;var literacyRateForGroup16=0;
     var literacyRateForGroup14=0;var literacyRateForGroup15=0;var literacyRateForGroup16=0;var literacyRateForGroup17=0;
     var literacyRateForGroup18=0;var literacyRateForGroup19=0;var literacyRateForGroup20=0;var literacyRateForGroup21=0;
     var literacyRateForGroup22=0;var literacyRateForGroup23=0;var literacyRateForGroup24=0;var literacyRateForGroup25=0;
     var literacyRateForGroup26=0;var literacyRateForGroup27=0;var literacyRateForGroup28=0;var literacyRateForGroup29=0;
//for age-wise litercy rate
 for(var i=1;i<lines.length-1;i++){

   var objFor0To6 = {};var objFor7 = {}; var objFor8 = {}; var objFor9 = {}; var objFor10 = {}; var objFor11 = {};
   var objFor12 = {}; var objFor13 = {}; var objFor14 = {}; var objFor15 = {}; var objFor16 = {}; var objFor17 = {}; var objFor18 = {};
   var objFor19 = {};
   var objFor20To24 = {};  var objFor25To29 = {}; var objFor30To34 = {};  var objFor35To39 = {};
   var objFor40To44 = {};  var objFor45To49 = {}; var objFor50to54 = {};  var objFor55To59 = {};
   var objFor60To64 = {}; var objFor65To69 = {}; var objFor70To74 = {}; var objFor75To79 = {};
   var objFor80Plus = {}; var objForAgeNotStated = {};



   var currentLine=lines[i].split(",");
   for(var j=0;j<headers.length;j++){

      if(headers[j]==='Age-group' || headers[j]==='Literate - Persons'){

        var headerName= headers[j];
        var headerValue=currentLine[j];

          //For 0-6 Age-group

        if(headerValue === "0-6"){
            if(count1==0)
            {

                   ageGroup1=headers[j];

                  count1++;
            }
            //console.log("Total occurences" +count);
          for(var z=0; z<headers.length;z++){
            if(headers[z]==='Literate - Persons')
            {
              totalLiteracyRateByAgeGroup1 += Number(currentLine[z]);
              literacyRateForGroup1=headers[z];

          }
        }

      }

      // For Age-7
      if(headerValue === "7"){
          if(count2==0)
          {

                 ageGroup2=headers[j];

                count2++;
          }

        for(var z=0; z<headers.length;z++){
          if(headers[z]==='Literate - Persons')
          {
            totalLiteracyRateByAgeGroup2 += Number(currentLine[z]);
            literacyRateForGroup2=headers[z];

        }
      }

    }


    // For Age-8
    if(headerValue === "8"){
        if(count3==0)
        {

               ageGroup3=headers[j];

              count3++;
        }

      for(var z=0; z<headers.length;z++){
        if(headers[z]==='Literate - Persons')
        {
          totalLiteracyRateByAgeGroup3 += Number(currentLine[z]);
          literacyRateForGroup3=headers[z];

      }
    }

  }

  // For Age-9
  if(headerValue === "9"){
      if(count4==0)
      {

             ageGroup4=headers[j];

            count4++;
      }

    for(var z=0; z<headers.length;z++){
      if(headers[z]==='Literate - Persons')
      {
        totalLiteracyRateByAgeGroup4 += Number(currentLine[z]);
        literacyRateForGroup4=headers[z];

    }
  }

}


// For Age-10
if(headerValue === "10"){
    if(count5==0)
    {

           ageGroup5=headers[j];

          count5++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup5 += Number(currentLine[z]);
      literacyRateForGroup5=headers[z];

  }
}

}


// For Age-11
if(headerValue === "11"){
    if(count6==0)
    {

           ageGroup6=headers[j];

          count6++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup6 += Number(currentLine[z]);
      literacyRateForGroup6=headers[z];

  }
}

}


// For Age-12
if(headerValue === "12"){
    if(count7==0)
    {

           ageGroup7=headers[j];

          count7++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup7 += Number(currentLine[z]);
      literacyRateForGroup7=headers[z];

  }
}

}

// For Age-12
if(headerValue === "13"){
    if(count8==0)
    {

           ageGroup8=headers[j];

          count8++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup8 += Number(currentLine[z]);
      literacyRateForGroup8=headers[z];

  }
}

}


// For Age-14
if(headerValue === "14"){
    if(count9==0)
    {

           ageGroup9=headers[j];

          count9++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup9 += Number(currentLine[z]);
      literacyRateForGroup9=headers[z];

  }
}

}

// For Age-15
if(headerValue === "15"){
    if(count10==0)
    {

           ageGroup10=headers[j];

          count10++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup10 += Number(currentLine[z]);
      literacyRateForGroup10=headers[z];

  }
}

}

// For Age-16
if(headerValue === "16"){
    if(count11==0)
    {

           ageGroup11=headers[j];

          count11++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup11 += Number(currentLine[z]);
      literacyRateForGroup11=headers[z];

  }
}

}


// For Age-17
if(headerValue === "17"){
    if(count12==0)
    {

           ageGroup12=headers[j];

          count12++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup12 += Number(currentLine[z]);
      literacyRateForGroup12=headers[z];

  }
}

}


// For Age-18
if(headerValue === "18"){
    if(count13==0)
    {

           ageGroup13=headers[j];

          count13++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup13 += Number(currentLine[z]);
      literacyRateForGroup13=headers[z];

  }
}

}


// For Age-19
if(headerValue === "19"){
    if(count14==0)
    {

           ageGroup14=headers[j];

          count14++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup14 += Number(currentLine[z]);
      literacyRateForGroup14=headers[z];

  }
}

}

// For Age-20-24
if(headerValue === "20-24"){
    if(count15==0)
    {

           ageGroup15=headers[j];

          count15++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup15 += Number(currentLine[z]);
      literacyRateForGroup15=headers[z];

  }
}

}


// For Age-25-29
if(headerValue === "25-29"){
    if(count16==0)
    {

           ageGroup16=headers[j];

          count16++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup16 += Number(currentLine[z]);
      literacyRateForGroup16=headers[z];

  }
}

}

// For Age-30-34
if(headerValue === "30-34"){
    if(count17==0)
    {

           ageGroup17=headers[j];

          count17++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup17 += Number(currentLine[z]);
      literacyRateForGroup17=headers[z];

  }
}

}


// For Age-35-39
if(headerValue === "35-39"){
    if(count18==0)
    {

           ageGroup18=headers[j];

          count18++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup18 += Number(currentLine[z]);
      literacyRateForGroup18=headers[z];

  }
}

}

// For Age-40-44
if(headerValue === "40-44"){
    if(count19==0)
    {

           ageGroup19=headers[j];

          count19++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup19 += Number(currentLine[z]);
      literacyRateForGroup19=headers[z];

  }
}

}

// For Age-45-49
if(headerValue === "45-49"){
    if(count20==0)
    {

           ageGroup20=headers[j];

          count20++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup20 += Number(currentLine[z]);
      literacyRateForGroup20=headers[z];

  }
}

}

// For Age-50-54
if(headerValue === "50-54"){
    if(count21==0)
    {

           ageGroup21=headers[j];

          count21++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup21 += Number(currentLine[z]);
      literacyRateForGroup21=headers[z];

  }
}

}


// For Age-55-59
if(headerValue === "55-59"){
    if(count22==0)
    {

           ageGroup22=headers[j];

          count22++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup22 += Number(currentLine[z]);
      literacyRateForGroup22=headers[z];

  }
}

}


// For Age-60-64
if(headerValue === "60-64"){
    if(count23==0)
    {

           ageGroup23=headers[j];

          count23++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup23 += Number(currentLine[z]);
      literacyRateForGroup23=headers[z];

  }
}

}

// For Age-65-69
if(headerValue === "65-69"){
    if(count24==0)
    {

           ageGroup24=headers[j];

          count24++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup24 += Number(currentLine[z]);
      literacyRateForGroup24=headers[z];

  }
}

}


// For Age-70-74
if(headerValue === "70-74"){
    if(count25==0)
    {

           ageGroup25=headers[j];

          count25++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup25 += Number(currentLine[z]);
      literacyRateForGroup25=headers[z];

  }
}

}


// For Age-75-79
if(headerValue === "75-79"){
    if(count26==0)
    {

           ageGroup26=headers[j];

          count26++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup26 += Number(currentLine[z]);
      literacyRateForGroup26=headers[z];

  }
}

}

// For Age-80+
if(headerValue === "80+"){
    if(count27==0)
    {

           ageGroup27=headers[j];

          count27++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup27 += Number(currentLine[z]);
      literacyRateForGroup27=headers[z];

  }
}

}

// For Age not stated
if(headerValue === "Age not stated"){
    if(count28==0)
    {

           ageGroup28=headers[j];

          count28++;
    }

  for(var z=0; z<headers.length;z++){
    if(headers[z]==='Literate - Persons')
    {
      totalLiteracyRateByAgeGroup28 += Number(currentLine[z]);
      literacyRateForGroup28=headers[z];

  }
}

}










    }
  };

  if(i==(lines.length-2))
{
      objFor0To6[ageGroup1]="0-6";
      objFor0To6[literacyRateForGroup1]=totalLiteracyRateByAgeGroup1;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup1);

      objFor7[ageGroup2]="7";
      objFor7[literacyRateForGroup2]=totalLiteracyRateByAgeGroup2;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup2);

      objFor8[ageGroup3]="8";
      objFor8[literacyRateForGroup3]=totalLiteracyRateByAgeGroup3;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup3);

      objFor9[ageGroup4]="9";
      objFor9[literacyRateForGroup4]=totalLiteracyRateByAgeGroup4;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup4);

      objFor10[ageGroup5]="10";
      objFor10[literacyRateForGroup5]=totalLiteracyRateByAgeGroup5;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup5);

      objFor11[ageGroup6]="11";
      objFor11[literacyRateForGroup6]=totalLiteracyRateByAgeGroup6;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup6);

      objFor12[ageGroup7]="12";
      objFor12[literacyRateForGroup7]=totalLiteracyRateByAgeGroup7;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup7);

      objFor13[ageGroup8]="13";
      objFor13[literacyRateForGroup8]=totalLiteracyRateByAgeGroup8;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup8);

      objFor14[ageGroup9]="14";
      objFor14[literacyRateForGroup9]=totalLiteracyRateByAgeGroup9;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup9);

      objFor15[ageGroup10]="15";
      objFor15[literacyRateForGroup10]=totalLiteracyRateByAgeGroup10;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup10);

      objFor16[ageGroup11]="16";
      objFor16[literacyRateForGroup11]=totalLiteracyRateByAgeGroup11;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup11);

      objFor17[ageGroup12]="17";
      objFor17[literacyRateForGroup12]=totalLiteracyRateByAgeGroup12;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup12);

      objFor18[ageGroup13]="18";
      objFor18[literacyRateForGroup13]=totalLiteracyRateByAgeGroup13;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup13);

      objFor19[ageGroup14]="19";
      objFor19[literacyRateForGroup14]=totalLiteracyRateByAgeGroup14;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup14);

      objFor20To24[ageGroup15]="20-24";
      objFor20To24[literacyRateForGroup15]=totalLiteracyRateByAgeGroup15;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup15);

      objFor25To29[ageGroup16]="25-29";
      objFor25To29[literacyRateForGroup16]=totalLiteracyRateByAgeGroup16;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup16);

      objFor30To34[ageGroup17]="30-34";
      objFor30To34[literacyRateForGroup17]=totalLiteracyRateByAgeGroup17;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup17);

      objFor35To39[ageGroup18]="35-39";
      objFor35To39[literacyRateForGroup18]=totalLiteracyRateByAgeGroup18;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup18);

      objFor40To44[ageGroup19]="40-44";
      objFor40To44[literacyRateForGroup19]=totalLiteracyRateByAgeGroup19;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup19);

      objFor45To49[ageGroup20]="45-49";
      objFor45To49[literacyRateForGroup20]=totalLiteracyRateByAgeGroup20;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup20);

      objFor50to54[ageGroup21]="50-54";
      objFor50to54[literacyRateForGroup21]=totalLiteracyRateByAgeGroup21;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup21);

      objFor55To59[ageGroup22]="55-59";
      objFor55To59[literacyRateForGroup22]=totalLiteracyRateByAgeGroup22;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup22);

      objFor60To64[ageGroup23]="60-64";
      objFor60To64[literacyRateForGroup23]=totalLiteracyRateByAgeGroup23;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup23);

      objFor65To69[ageGroup24]="65-69";
      objFor65To69[literacyRateForGroup24]=totalLiteracyRateByAgeGroup24;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup24);

      objFor70To74[ageGroup25]="70-74";
      objFor70To74[literacyRateForGroup25]=totalLiteracyRateByAgeGroup25;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup25);

      objFor75To79[ageGroup26]="75-79";
      objFor75To79[literacyRateForGroup26]=totalLiteracyRateByAgeGroup26;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup26);

      objFor80Plus[ageGroup27]="80+";
      objFor80Plus[literacyRateForGroup27]=totalLiteracyRateByAgeGroup27;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup27);

      objForAgeNotStated[ageGroup28]="Age not stated";
      objForAgeNotStated[literacyRateForGroup28]=totalLiteracyRateByAgeGroup28;
      console.log("Total literacy rate"+ totalLiteracyRateByAgeGroup28);



      result1.push(objFor0To6);
      result1.push(objFor7);
      result1.push(objFor8);
      result1.push(objFor9);
      result1.push(objFor10);
      result1.push(objFor11);
      result1.push(objFor12);
      result1.push(objFor13);
      result1.push(objFor14);
      result1.push(objFor15);
      result1.push(objFor16);
      result1.push(objFor17);
      result1.push(objFor18);
      result1.push(objFor19);
      result1.push(objFor20To24);
      result1.push(objFor25To29);
      result1.push(objFor30To34);
      result1.push(objFor35To39);
      result1.push(objFor40To44);
      result1.push(objFor45To49);
      result1.push(objFor50to54);
      result1.push(objFor55To59);
      result1.push(objFor60To64);
      result1.push(objFor65To69);
      result1.push(objFor70To74);
      result1.push(objFor75To79);
      result1.push(objFor80Plus);
      result1.push(objForAgeNotStated);


    ;





}
   }






    //writing the json object ot the file

    fs.writeFile(process.cwd() + "/JSON/piechart.json", JSON.stringify(result1, undefined, 4),function(err)
    {
    if(err)
    {
    console.log(err);
}

    console.log('File saved as json');


    });

// For education-category-wise


var educationArray=["Without Education","Below Primary","Primary","Middle","Matric","HSC","Non-Technical Diploma","Technical Diploma","Graduate","Unclassified"];
var objSecond=[{}];
var column=15;
var key=0;
for(var k=0;k<educationArray.length;k++)
{
      var literarcy=0;
      for(var i=1;i<lines.length;i++)
      {
           var currentLine=lines[i].split(",");
if(currentLine[4]=="Total" && currentLine[5]=="All ages")
           {
            literarcy=parseInt(literarcy)+ parseInt(currentLine[column]);
            }
      }literarcy=literarcy/1000000;
       literarcy=literarcy.toFixed();
      key=educationArray[k];
      objSecond={'Education_Level':key,'Literate_Persons':literarcy};
      result2.push(objSecond);column+=3;
}
fs.writeFile(process.cwd() + "/JSON/bargraph.json", JSON.stringify(result2, undefined, 4),function(err)
{
if(err)
{
console.log(err);
}

console.log('Second File saved as json');


});
});



//     for(var i=1;i<lines.length-1;i++){
//
//       var obj = {};
//
//       var currentLine=lines[i].split(",");
//       for(var j=15;j<headers.length;j++){
//
//
//           //  console.log(headers[j]);
//
//         //   console.log("Header name : " +headers[j]+ " Header Value " +currentLine[j])
//          obj[headers[j]] = currentLine[j] ;
//
//     }
//   //  console.log(obj);
//       result2.push(obj);
//
//     }
//        //writing the json object ot the file
//
//        fs.writeFile(process.cwd() + "/JSON/test7.json", JSON.stringify(result2, undefined, 4),function(err)
//        {
//        if(err)
//        {
//        console.log(err);
//
// }
//        console.log('Second File saved as json');
//
//
//        });
