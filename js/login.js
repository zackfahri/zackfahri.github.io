function masuk(){
    username = form.user.value;
    pass = form.sandi.value;

    if (username == "ZackFahri"){
        if (pass == "Tifacantik"){
            alert("Selamat datang Zaky!");
            return true;
            //window.location.assign("home.html");
        }else{
            alert("Password yang dimasukkan salah!");
            return false;
        }
    }else if (username == "Fahri"){
        if (pass == "Zaky"){
            alert("Selamat datang Fahri!");
            return true;
            //window.location.assign("home.html");
        }else{
            alert("Password yang dimasukkan salah!");
            return false;
        }
    }else if(username == "" || pass == ""){
        alert("Input tidak boleh kosong!");
        return false;
    }else{
        alert("Username tidak terdaftar di website ini");
        return false;
    }
} 