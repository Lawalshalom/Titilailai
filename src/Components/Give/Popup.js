import React, { useEffect } from 'react';

const Popup = () => {
    useEffect(() => {
        const giveBtn = document.querySelector("#giveBtn");
        const giveText = document.querySelector(".give-text");
        window.onclick = e => {
            if (e.target !== giveText){
                giveBtn.style.display = "block";
                giveText.style.display = "none";
            };
            if (e.target === giveBtn){
                giveBtn.style.display = "none";
                giveText.style.display = "block";
            };
        };
    }, []);
    return (
        <>
        <div className="give-popup">
            <button id="giveBtn">Give</button>
            <div className="give-text">
            <p>You can make your donations to the account below:
            <br/><strong>Polaris Bank</strong> <em>(formerly Skye Bank)</em> – <strong>4090746902</strong>
            <br/><strong>Account Name:</strong> Student Christian Movement</p>
            <p>Or give to the alumni fellowship via:
            <br/><strong>GT Bank</strong> – <strong>0177494854</strong>
            <br/><strong>Account Name:</strong> SCM UI Alumni</p>
            </div>
        </div>
        <div className="serviceWorkerPopup"></div>
        </>
    )
};
export default Popup;