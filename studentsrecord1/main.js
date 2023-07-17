
function loadData(){
    if(localStorage.length== 0){
        console.log("storage is empty");

        
        var students1={
            "venu@gmail.com":{
                "firstName":"Venugopal",
                "lastName":"Rao",
                "mobile":"9988995566",
                "age":"25",
                "city":"Hyderabad"
            },
            "abhi@gmail.com":{
                "firstName":"Abhiram",
                "lastName":"Reddy",
                "mobile":"9988443322",
                "age":"33",
                "city":"Delhi"
            },
              
              "gnanesh@gmail.com":{
                 "firstName":"Gnaneshwar",
                "lastName":"Naidu",
                 "mobile":"9876123450",
                 "age":"32",
                   "city":"Bangalore"
            },
              "prakash@gamil.com":{
                 "firstName":"Prakash",
                 "lastName":"Reddy",
                 "mobile":"7865676754",
                "age":"22",
                 "city":"Pune"
             },
             "vinay@gmail.com":{
               "firstName":"Vinay",
               "lastName":"Kumar",
                "mobile":"9876534218",
               "age":"23",
            "city":"Kolkata"
        },
        "akhil@gmail.com" :{
        "firstName":"Akhil",
        "lastName":"Kumar",
        "mobile":"7654321890",
        "age":"32",
        "city":"Mysore"
        },
        "vamshi@gmail.com":{
        "firstName":"Vamshi",
        "lastName":"Krishna",
        "mobile":"7890654321",
        "age":"28",
        "city":"Hyderabad"
        },
        "mukesh@gmail.com":{
        "firstName":"Mukesh",
        "lastName":"Rajput",
        "mobile":"9856467378",
        "age":"33",
        "city":"Pune"
        },
        "hari@gmail.com":{
        "firstName":"Harinath",
        "lastName":"Kumar",
        "mobile":"8765439021",
        "age":"26",
        "city":"Hyderabad"
        },
        "kiran@gmail.com":{
        "firstName":"Kiran",
        "lastName":"Kumar",
        "mobile":"9876543021",
        "age":"29",
        "city":"Mysore"
        },
        "aakash@gmail.com":{
        "firstName":"Aakash",
        "lastName":"Kumar",
        "mobile":"96324680157",
        "age":"27",
        "city":"Delhi"
        },
        "krishna@gmail.com":{
        "firstName":"Krishna",
        "lastName":"Varma",
        "mobile":"9876542413",
        "age":"25",
        "city":"Chennai"
        },
        "swathi@gmail.com":{
        "firstName":"Swathi",
        "lastName":"Reddy",
        "mobile":"8765432891",
        "age":"23",
        "city":"Bangalore"
        },
        "amar@gmail.com":{
        "firstName":"Amar",
        "lastName":"Rathod",
        "mobile":"9876534218",
        "age":"28",
        "city":"Hyderabad"
        },
        "divya@gmail.com":{
        "firstName":"Divya",
        "lastName":"Reddy",
        "mobile":"9945673890",
        "age":"43",
        "city":"Pune"
        },
        "abhi76783@gmail.com":{
        "firstName":"Abhishek",
        "lastName":"Reddy",
        "mobile":"9876543210",
        "age":"25",
        "city":"Delhi"
        },
        "deepak@gamil.com":{
        "firstName":"Deepak",
        "lastName":"Reddy",
        "mobile":"4563715432",
        "age":"32",
        "city":"Pune"
        },
        "aravind@gmail.com":{
        "firstName":"Aravind",
        "lastName":"Nayak",
        "mobile":"9846287348",
        "age":"24",
        "city":"Hyderabad"
        },
        "nataraj@gmail.com":{
        "firstName":"Nataraj",
        "lastName":"Addagatla",
        "mobile":"9876534218",
        "age":"23",
        "city":"Hyderabad"
        },
        
        "sai@gmail.com":{
        "firstName":"Sai",
        "lastName":"Kumar",
        "mobile":"9874563210",
        "age":"33",
        "city":"Chennai"
        },
        "shinde@gmail.com":{
        "firstName":"Shinde",
        "lastName":"Rathod",
        "mobile":"786767676",
        "age":"36",
        "city":"Mysore"
        },
        "saketh@gmail.com":{
        "firstName":"Saketh",
        "lastName":"sai",
        "mobile":"8678367849",
        "age":"31",
        "city":"Pune"
        },
        "chethan@gmail.com":{
        "firstName":"sai",
        "lastName":"chethan",
        "mobile":"4748484893",
        "age":"26",
        "city":"Delhi"
        },
        "lal@gmail.com":{
        "firstName":"lal",
        "lastName":"Bahadur",
        "mobile":"6547893627",
        "age":"45",
        "city":"Kolkata"
        },
        "pandey@gmail.com":{
        "firstName":"Sujith",
        "lastName":"Pandey",
        "mobile":"6784536728",
        "age":"24",
        "city":"Hyderabad"
        }
        
        
        }
    
     var studString=JSON.stringify(students);
     localStorage.setItem('std',studString);
       

    }
       

    data=localStorage.getItem('std');
    dataObj=JSON.parse(data);

    let dataTable=document.querySelector('#data');
    let outputData="";
    for(var studd in dataObj){
        let idx=dataObj[studd];
        
        outputData+=`
        <div class="table_row" id="data">

        <span class="item">${idx.firstName} ${idx.lastName}</span>
        <span class="item">${idx.age}</span>
        <span class="item">${idx.mobile}</span>
        <span class="item">${studd}</span>
        <span class="item">${idx.city}</span>

        </div>
        `
         ;

}
    dataTable.innerHTML=outputData;


}

