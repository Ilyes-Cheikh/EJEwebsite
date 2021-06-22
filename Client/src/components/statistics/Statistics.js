import React from 'react';
import FunfactItem from "./funfactItem";
import './funfact.css'

import { MdDoneAll, MdTrendingUp, MdSupervisorAccount, MdLocalAtm } from "react-icons/md";


function Statistics() {
    const Funfacts = [
        {
            id: 1,
            counterNumber: 133700,
            counterText: "Total Revenue",
            counterIcon: <MdLocalAtm />,
        },
        {
            id: 2,
            counterNumber: 19,
            counterText: "Projects completed",
            counterIcon: <MdDoneAll />,
        },
        {
            id: 3,
            counterNumber: 9,
            counterText: "Partnership",
            counterIcon: <MdSupervisorAccount />,
        },
        {
            id: 4,
            counterNumber: 15,
            counterText: "Years of experience",
            counterIcon: <MdTrendingUp />,
        }
    ]
    return (
        <div className="fun-fact-area sm-top parallax">
            <div className="container">
                    <div className="row mtn-40">
                        {

                            Funfacts.map(funfact => (
                                <FunfactItem key={funfact.id} counterNumber={funfact.counterNumber} counterText={funfact.counterText} counterId={funfact.id} />
                            ))

                        }
                    </div>

            </div>
        </div>
    );
}

export default Statistics;