var gTaxPaid, gNetSlry; 

function Calculate() {
    var taxBracket;
    var prsnlAllowance = 11000;
    var netSlry;
    var taxPaid;

    var grossSlry = parseInt(document.getElementById("inputSlry").value);
    document.getElementById("grossSlry").textContent = grossSlry;   
    
    document.getElementById("prsnlAllowance").textContent = prsnlAllowance;
    
    
    if (grossSlry <= 11000) {
        netSlry = grossSlry;
        document.getElementById("taxPaid").textContent = 0;
        document.getElementById("taxBracket").textContent = "0%";
        document.getElementById("netSlry").textContent = netSlry;
    }
    else if ((grossSlry > 11000) && (grossSlry <= 43000)) {
        taxBracket = 0.2;
        taxPaid = (grossSlry-prsnlAllowance) * taxBracket;
        netSlry = grossSlry - taxPaid;
        document.getElementById("taxPaid").textContent = Math.round(taxPaid);
        document.getElementById("taxBracket").textContent = "20%";
        document.getElementById("netSlry").textContent = Math.round(netSlry);
    }
    else if ((grossSlry > 43000) && (grossSlry <= 150000)) {
        taxBracket = 0.4;
        taxPaid = (grossSlry-prsnlAllowance) * taxBracket;
        netSlry = grossSlry - taxPaid;
        document.getElementById("taxPaid").textContent = Math.round(taxPaid);
        document.getElementById("taxBracket").textContent = "40%";
        document.getElementById("netSlry").textContent = Math.round(netSlry);
    }
    else if (grossSlry > 150000) {
        taxBracket = 0.45;
        taxPaid = (grossSlry-prsnlAllowance) * taxBracket;
        netSlry = grossSlry - taxPaid;
        document.getElementById("taxPaid").textContent = Math.round(taxPaid);
        document.getElementById("taxBracket").textContent = "45%";
        document.getElementById("netSlry").textContent = Math.round(netSlry);
    }
    
    gTaxPaid = taxPaid;
    gNetSlry = netSlry;
    
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme2",//theme1
        title:{
        text: "Table Values in CanvasJS Chart"              
        },
               animationEnabled: true,   // change to true
               data: [              
                   {
                       // Change type to "bar", "area", "spline", "pie",etc.
                               type: "pie",
                               dataPoints: [
                                  //{ label: "Gross Slry",  y: grossSlry  },
                                 // { label: "Personal Allowance", y: prsnlAllowance  },
                                 //{ label: "Tax Bracket", y: taxBracket  },
                                  { label: "Tax Paid",  y: taxPaid  },
                                 { label: "Net Salary",  y: netSlry  }
                                                    ]
                   }
               ]
                   });
                    chart.render();
}

function Update() {
    var userTheme = document.getElementById("themeSelect").value;
    console.log(userTheme);
    var userType = document.getElementById("typeSelect").value;
    console.log(userType);
    var userTitle = document.getElementById("titleSelect").value;
    console.log(userTitle);
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: userTheme,//theme1
        title:{
        text: userTitle              
        },
               animationEnabled: true,   // change to true
               data: [              
                   {
                       // Change type to "bar", "area", "spline", "pie",etc.
                               type: userType,
                               dataPoints: [
                                  //{ label: "Gross Slry",  y: grossSlry  },
                                 // { label: "Personal Allowance", y: prsnlAllowance  },
                                 //{ label: "Tax Bracket", y: taxBracket  },
                                  { label: "Tax Paid",  y: gTaxPaid  },
                                 { label: "Net Salary",  y: gNetSlry  }
                                                    ]
                   }
               ]
                   });
                    chart.render();
    
}

document.getElementById("button1").addEventListener('click',Calculate,false);
document.getElementById("button2").addEventListener('click',Update,false);
