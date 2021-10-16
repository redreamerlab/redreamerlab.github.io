window.onload = function(){
    
    document.getElementById("contact").onclick = () => {
        window.location = "mailto:redreamer.nft@gmail.com";
        fetch('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x2af743179e9d464c9bd687e90bc18f5ea146950f&fbclid=IwAR2lXDMbNuKieMsRBEFjP4VPNSJ5_fQMjlm-RFjvRt7GiuxHfQj0aMHHcxk',{})
            .then(jsonData=>{console.log(jsonData)});
        window.alert("Coming Soon....\n We are almost ready, you can ping us via \n \n redreamer.nft@gmail.com")
    };
}