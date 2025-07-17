import { useState } from "react"
import QRCode from "react-qr-code";
import "./QrCode.css"

export default function QrCodeGenerator(){
    const [qrCode,setQrCode]=useState("");
    const [input,setInput]=useState("");

    function handleQrCode(){
        setQrCode(input);
        setInput("")
    }

    return(
        <>
        <div className="container">
        <div className="heading">Qr Code Generator</div>
            <div className="inputBox">
                <input type="text" name="qr-code" value={input} 
                onChange={(e)=>setInput(e.target.value)}
                />
          
                <button
                onClick={handleQrCode}
                >
                    Generate
                </button>
            </div>

            <div className="codeQR">
                <QRCode value={qrCode} size={400}/>
            </div>
        </div>


        </>
    )
}
