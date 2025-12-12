function cekLogin() {
    
    const userBenar = "eka123";
    const passBenar = "12345";

   
    let userInput = document.getElementById("username").value;
    let passInput = document.getElementById("password").value;

   
    if (userInput === userBenar && passInput === passBenar) {
        alert("Login Sukses!");
        window.location.href = "sukses.html"; 
        return false; 
    } else {
        alert("Login Gagal! Username atau Password salah.");
        return false; 
    }
}
