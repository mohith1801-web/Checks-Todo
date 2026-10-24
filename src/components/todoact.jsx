import { useState } from "react";
import TodolistAct from "./todolistact";
import TodoAddAct from "./todoAddAct";

function Todoactt() {

    const [ActivityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Wake Up @ 5 AM"
        },
        {
            id: 2,
            activity: "Take A Bath"
        },
        {
            id: 3,
            activity: "Have yr BreakFast"
        },
        {
            id: 4,
            activity: "Go To College"
        }
    ]);

    return (
        <div className="flex flex-col md:flex-row gap-4 mt-7">

            {/* Add Activity */}
            <div>
                <TodoAddAct
                    ActivityArr={ActivityArr}
                    setActivityArr={setActivityArr}
                />
            </div>

            {/* Activity List */}
            <div className="bg-slate-500 p-4 border rounded-md flex-grow">

                <h1>Todays Activities?</h1>

                {ActivityArr.length === 0 ? (
                    <p>You Didn't Add Any Activity Yet</p>
                ) : (
                    ActivityArr.map(function (item, index) {
                        return (
                            <TodolistAct
                                key={item.id}
                                id={item.id}
                                item={item}
                                index={index}
                                ActivityArr={ActivityArr}
                                setActivityArr={setActivityArr}
                            />
                        );
                    })
                )}

            </div>

        </div>
    );
}

export default Todoactt;