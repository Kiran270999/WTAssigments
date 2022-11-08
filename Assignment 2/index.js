function passvalue(){
    var firstName = document.getElementById('firstName').value;
    localStorage.setItem("firstname",firstName);

    var lastName = document.getElementById('lastName').value;
    localStorage.setItem("lastName",lastName);

    

    var fatherName = document.getElementById('fatherName').value;
    localStorage.setItem("fatherName",fatherName);

    var address = document.getElementById('address').value;
    localStorage.setItem("address",address);
    
    var phnnumber = document.getElementById('phnnumber').value;
    localStorage.setItem("phnnumber",phnnumber);

    var gender = displayRadioValue();
    localStorage.setItem("gender", gender);

    var state = document.getElementById('state').value;
    localStorage.setItem('state',state);

    var city = document.getElementById('city').value;
    localStorage.setItem('city',city);

    var dob = document.getElementById('dob').value;
    localStorage.setItem('dob',dob)

    var pincode = document.getElementById('pinCode').value;
    localStorage.setItem('pincode',pincode);

    var emailid = document.getElementById('emailid').value;
    localStorage.setItem('emailid',emailid);

    var course = document.getElementById('course').value;
    localStorage.setItem('course',course);

    window.location.replace('dashboard.html')
    return false
}
function displayRadioValue() {
    var ele = document.getElementsByName('namegender');
      
    for(i = 0; i <= ele.length; i++) {
        if(ele[i].checked){
            var gender = ele[i].value;
        }
    console.log(gender)
    return gender
    
    }
}