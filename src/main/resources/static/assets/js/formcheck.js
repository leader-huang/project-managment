function checkRegForm(){
    var nametip = checkUserName();
    var passtip = checkPassword();
    var conpasstip = ConfirmPassword();
    var phonetip = checkPhone();
    var emailip = checkEmail();
    return nametip && passtip && conpasstip && phonetip && emailip;
}

function checkUpdateMyself(){
    var nametip = checkUserName();
    var phonetip = checkPhone();
    return nametip && phonetip;
}

function checkEditPwdForm(){
    var passtip = checkPassword();
    var passtip2 = ConfirmPassword();
    return passtip && passtip2;
}

function checkAddUserForm(){
    var nametip = checkUserName();
    var passtip = checkPassword();
    var phonetip = checkPhone();
    var emailip = checkEmail();
    return nametip && passtip && phonetip && emailip;
}

function checkEditUserForm(){
    var nametip = checkEditName();
    var phonetip = checkEditPhone();
    var emailip = checkEditEmail();
    return nametip && phonetip && emailip;
}

function checkAddProjectForm(){
    var nametip = checkProjectName();
    var idtip = checkChargeUserId();
    var typetip = checkFunctionPoints();
    return nametip && idtip && typetip;
}

function checkEditProjectForm(){
    var nametip = checkEditProjectName();
    var useridtip = checkEditChargeUserId();
    var pointip = checkEditFunctionPoints();
    var cpointip = checkEditComFunctionPoints();
    return nametip && useridtip && pointip &&cpointip;
}

//验证用户名
function checkUserName(){
    var username = document.getElementById('addName');
    var errname = document.getElementById('nameErr');
    var pattern = /^\w{4,}$/;  //用户名格式正则表达式：用户名要至少4位
    if(username.value.length == 0){
        errname.innerHTML="用户名不能为空"
        errname.className="error"
        return false;
    }
    if(!pattern.test(username.value)){
        errname.innerHTML="用户名不合规范"
        errname.className="error"
        return false;
    }
    else{
        errname.innerHTML="OK"
        errname.className="success";
        return true;
    }
}
//验证用户名2
function checkEditName() {
    var username = document.getElementById('editName');
    var errname = document.getElementById('nameError');
    var pattern = /^\w{4,}$/;  //用户名格式正则表达式：用户名要至少4位
    if (username.value.length == 0) {
        errname.innerHTML = "用户名不能为空"
        errname.className = "error"
        return false;
    }
    if (!pattern.test(username.value)) {
        errname.innerHTML = "用户名不合规范"
        errname.className = "error"
        return false;
    } else {
        errname.innerHTML = "OK"
        errname.className = "success";
        return true;
    }
}

//验证密码
function checkPassword(){
    var userpasswd = document.getElementById('addPassword');
    var errPasswd = document.getElementById('passwordErr');
    var pattern =/^\w{4,}$/; //密码要在4位以上
    if (userpasswd.value.length == 0) {
        errPasswd.innerHTML = "密码不能为空"
        errPasswd.className = "error"
        return false;
    }
    if(!pattern.test(userpasswd.value)){
        errPasswd.innerHTML="密码不合规范,密码要在4位以上!"
        errPasswd.className="error"
        return false;
    }
    else{
        errPasswd.innerHTML="OK"
        errPasswd.className="success";
        return true;
    }
}
//确认密码
function ConfirmPassword(){
    var userpasswd = document.getElementById('password');
    var userConPassword = document.getElementById('cfmpassword');
    var errConPasswd = document.getElementById('conPasswordErr');
    if((userpasswd.value)!=(userConPassword.value) || userConPassword.value.length == 0){
        errConPasswd.innerHTML="两次密码不一致"
        errConPasswd.className="error"
        return false;
    }
    else{
        errConPasswd.innerHTML="OK"
        errConPasswd.className="success";
        return true;
    }
}
//验证邮箱
function checkEmail(){
    var useremail = document.getElementById('addEmail');
    var emailErr = document.getElementById('emailErr');
    var pattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/; //验证邮箱正则表达式
    if (useremail.value.length == 0) {
        emailErr.innerHTML = "邮箱不能为空"
        emailErr.className = "error"
        return false;
    }
    if(!pattern.test(useremail.value)){
        emailErr.innerHTML="邮箱不合规范"
        emailErr.className="error"
        return false;
    }
    else{
        emailErr.innerHTML="OK"
        emailErr.className="success";
        return true;
    }
}
//验证邮箱2
function checkEditEmail() {
    var useremail = document.getElementById('editEmail');
    var emailErr = document.getElementById('emailError');
    var pattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/; //验证邮箱正则表达式
    if (useremail.value.length == 0) {
        emailErr.innerHTML = "邮箱不能为空"
        emailErr.className = "error"
        return false;
    }
    if (!pattern.test(useremail.value)) {
        emailErr.innerHTML = "邮箱不合规范"
        emailErr.className = "error"
        return false;
    } else {
        emailErr.innerHTML = "OK"
        emailErr.className = "success";
        return true;
    }
}
//验证手机号
function checkPhone(){
    var userphone = document.getElementById('addPhone');
    var phonrErr = document.getElementById('phoneErr');
    var pattern = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; //验证手机号正则表达式
    if (userphone.value.length == 0) {
        phonrErr.innerHTML = "手机号不能为空"
        phonrErr.className = "error"
        return false;
    }
    if(!pattern.test(userphone.value)){
        phonrErr.innerHTML="手机号码不合规范"
        phonrErr.className="error"
        return false;
    }
    else{
        phonrErr.innerHTML="OK"
        phonrErr.className="success";
        return true;
    }
}
//验证手机号2
function checkEditPhone(){
    var userphone = document.getElementById('editPhone');
    var phonrErr = document.getElementById('phoneError');
    var pattern = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; //验证手机号正则表达式
    if(!pattern.test(userphone.value)){
        phonrErr.innerHTML="手机号码不合规范"
        phonrErr.className="error"
        return false;
    }
    else{
        phonrErr.innerHTML="OK"
        phonrErr.className="success";
        return true;
    }
}

//Project
//项目名
function checkProjectName(){
    var projectName = document.getElementById('addName');
    var nameErr = document.getElementById('pnameErr');
    if (projectName.value.length == 0) {
        nameErr.innerHTML = "项目名不能为空"
        nameErr.className = "error"
        return false;
    }
    else{
        nameErr.innerHTML="OK"
        nameErr.className="success"
        return true;
    }
}

function checkEditProjectName(){
    var projectName = document.getElementById('editName');
    var nameErr = document.getElementById('editNameErr');
    if (projectName.value.length == 0) {
        nameErr.innerHTML = "项目名不能为空"
        nameErr.className = "error"
        return false;
    }
    else{
        nameErr.innerHTML="OK"
        nameErr.className="success"
        return true;
    }
}

function checkChargeUserId() {
    var projectUserId = document.getElementById('addChargeUserId');
    var userIdErr = document.getElementById('pchargeUserIdErr');
    if (projectUserId.value.length == 0) {
        userIdErr.innerHTML = "项目负责人不能为空"
        userIdErr.className = "error"
        return false;
    } else {
        userIdErr.innerHTML = "OK"
        userIdErr.className = "success"
        return true;
    }
}

function checkEditChargeUserId() {
    var projectUserId = document.getElementById('editChargeUserId');
    var userIdErr = document.getElementById('editUserIdErr');
    if (projectUserId.value.length == 0) {
        userIdErr.innerHTML = "项目负责人不能为空"
        userIdErr.className = "error"
        return false;
    } else {
        userIdErr.innerHTML = "OK"
        userIdErr.className = "success"
        return true;
    }
}

function checkFunctionPoints() {
    var projectType = document.getElementById('addFunctionPoints');
    var typeErr = document.getElementById('pfunctionPointsErr');
    if (projectType.value.length == 0) {
        typeErr.innerHTML = "功能点不能为空"
        typeErr.className = "error"
        return false;
    } else {
        typeErr.innerHTML = "OK"
        typeErr.className = "success"
        return true;
    }
}

function checkEditFunctionPoints() {
    var projectType = document.getElementById('editFunctionPoints');
    var typeErr = document.getElementById('editFunctionPointsErr');
    if (projectType.value.length == 0) {
        typeErr.innerHTML = "功能点不能为空"
        typeErr.className = "error"
        return false;
    } else {
        typeErr.innerHTML = "OK"
        typeErr.className = "success"
        return true;
    }
}

function checkEditComFunctionPoints() {
    var projectType = document.getElementById('editCompletedFunctionPoints');
    var typeErr = document.getElementById('editCompletedFunctionPointsErr');
    if (projectType.value.length == 0) {
        typeErr.innerHTML = "功能点不能为空"
        typeErr.className = "error"
        return false;
    } else {
        typeErr.innerHTML = "OK"
        typeErr.className = "success"
        return true;
    }
}