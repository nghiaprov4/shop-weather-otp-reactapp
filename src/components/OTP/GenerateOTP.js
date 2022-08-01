import { useState } from "react";

const GenerateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("");

    const handleClickBtn = () => {
        let otp = Math.floor(100000 + Math.random() * 900000);
        setOrgOTP(otp)
        props.setOtpParent(otp)

    }
    return (
        <div className="generateOTP-container">
            <button onClick={() => handleClickBtn(setOrgOTP)}>Generate OTP</button>
            <div className="title">Your OTP is: {orgOTP}</div>
        </div>
    )
}
export default GenerateOTP;