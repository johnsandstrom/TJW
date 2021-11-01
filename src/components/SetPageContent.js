import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButton from 'react-toggle-button'

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './SetPageContent.css'
import "bootstrap/dist/css/bootstrap.min.css";



function SetPageContent(props) {

    const [willAttend, setWillAttend] = useState(true);
    const [willStay, setWillStay] = useState(true);

    function handleAttendance() {
        setWillAttend(!willAttend)
        console.log(willAttend);
    }

    function handleWillStay() {
        setWillStay(!willStay);
        console.log(willStay);
    }

    if (props.id === "home") {
        return (<div>
            <p><br />Odensvi kyrka 16:00 <br />
            Adress ...</p>

            <p>
                <br /> Festen kommer att hållas på{" "}
                <a href="http://www.xn--tngstagrd-v2ar.se/">Tängsta gård</a>
            </p>

            <p><br />Sovplats finns i begränsat antal ( först till kvarn! ) </p>

            <p><br />Klädsel: TBD</p>

            <br />
            <p>Kontaktuppgifter<br />Tia<br />Tel: 0761614922, Email: tia.kennerberg@gmail.com
            <br />
            John<br />Tel: 0722495171, Email: john.sandstrom@hotmail.se<br /><br /></p>
        </div>);
    }
    else if (props.id === "rsvp") {
        return (<div>
            <p><br />Jag kommer: {"  "}
                
                <ToggleButton
                    className="toggle-button"
                    activeLabel={"Ja"}
                    inactiveLabel={"Nej"}
                    value={ willAttend || false }
                    onToggle={handleAttendance} value={willAttend}
                />

            </p>
            <div className="rsvpInfo">
                {willAttend ?
                    <p>
                        <label for="rsvpName">Namn</label>
                        <input type="text" id="rsvpName" /><br />
                        <label for="allergies"> Allergier</label>
                        <input type="text" id="allergies" /><br />
                        <br /><label>Vill sova kvar</label><br />
                        <ToggleButton
                            className="toggle-button"
                            activeLabel={"Ja"}
                            inactiveLabel={"Nej"}
                            value={ willStay || false }
                            onToggle={handleWillStay} value={willStay}
                        />

                    </p> :
                    <p> <label for="rsvpName">Namn</label>
                    <input type="text" id="rsvpName" /><br /></p>}
                    <Button>Skicka</Button>
                <br /><br />
            </div>
        </div>);
    }
    else if (props.id === "sleeping") {
        return (
            <div>
                <p>
                    Sovplats kostar 350:- för en natt & 500:- för två nätter.
                    <br /><br />
                        Det finns ett begränsat antal sovplatser i festlokalen och behöver därför förbokas.
                        Det är först till kvarn som gäller. <br /><br /> Hotell finns ca. 15 minuter
                        bilresa bort (bokas på egen hand).<br /><br />
                </p>
            </div>);
    }
    else if (props.id === "speech") {
        return (
            <div>
                <p>
                    Vill du hålla tal under festen så ser vi gärna att du meddelar oss här nedan.<br />
                    <br />Fyll i ditt namn och klicka på skicka så kommer vi att meddelas
                             om detta.<br /><br />
                    <label for="speechName">Namn</label><br />
                    <input type="text" id="speechName" />{"  "}<Button>Skicka</Button><br /><br />
                    <h2> (OBS! Detta skickas separat utöver OSA) </h2><br />
                </p>
            </div>);
    }
    else if (props.id === "gifts") {
        return (
            <div>
                <p>
                    Vi önskar pengar i bröllopsgåva för att finansiera den kommande bröllopsresan,
                    då vi redan har mer prylar till vårat hem än vad vi behöver.<br /><br />
                    Vi uppskattar även att ni donerar pengar i vårat namn till valfri välgörenhet.<br />
                </p><br />
            </div>);
    }
    else if(props.id === "error") {
        return (
            <div>
                <p>
                    <a>Nu har du kommit fel, här finns det ingen information.</a>
                    <br />
                    <br />
                </p>
            </div>);
    }
}

export default SetPageContent;