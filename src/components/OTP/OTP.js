import { useState } from "react";
import CountDownAnimation from "./CountDownAnimation";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss"
const OTP = () => {
    const [otpParent, setOtpParent] = useState("");
    console.log("<<<otp parent", otpParent);
    const [inputOTPParent, setInputOTPParent] = useState("");
    console.log("<<<otp initput", inputOTPParent)
    const [isDisableBtn, setIsDisableBtn] = useState(false);
    const handleSubmitOTP = () => {
        if (!otpParent) {
            alert("Please generate an OTP...")
            return;
        }
        if (!inputOTPParent) {
            alert("Please input an OTP...")
            return;

        }
        if (+otpParent === +inputOTPParent) {
            alert("CORRECT OTP ^^...")


        } else {
            alert("Wrong OTP...")

        }
    }
    return (
        <div className="otp-parent-container">
            {/* <CountDownAnimation /> */}
            <GenerateOTP setOtpParent={setOtpParent} />
            <InputOTP
                setInputOTPParent={setInputOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}

            />

        </div>
    )
}
export default OTP;