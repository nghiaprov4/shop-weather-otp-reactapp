import { useState, useRef } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
import CountDownAnimation from './CountDownAnimation';

const InputOTP = (props) => {
    const [otp, setOtp] = useState("");
    const childRef = useRef();

    const handleChange = (otp1) => {
        setOtp(otp1);
        props.setInputOTPParent(otp1);
    }
    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
    }
    const handleClear = () => {
        childRef.current.restTimer()
    }
    return (
        <div className='OtpInput-container'>
            <div className="title">Enter verification code

            </div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"inputStyle"}
            />
            {/* <CountDown setIsDisableBtn={props.setIsDisableBtn} /> */}
            <CountDownAnimation setIsDisableBtn={props.setIsDisableBtn} ref={childRef} />
            <div className="action">
                <button

                    onClick={() => handleClear()}
                    disabled={!props.isDisableBtn}


                >Clear</button>
                <button
                    disabled={props.isDisableBtn}
                    onClick={() => {
                        handleConfirmOTP()
                    }}

                >Confirm</button>


            </div>
        </div>

    )
}
export default InputOTP;
