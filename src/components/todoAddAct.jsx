import { useState } from "react";
function TodoAddAct(pro) {

    const ActivityArr = pro.ActivityArr;
    const setActivityArr = pro.setActivityArr;
    const [newdata,setnewdata] = useState("");
    function handleip(event)
    {
      setnewdata(event.target.value)
    }
    function handleAdd ()
    {
       setActivityArr([...ActivityArr,{id:ActivityArr.length+1,activity:newdata}])
       setnewdata("")
    }
    return (
        <div className="mt-5">

            <h1>Manage Activities</h1>

            <input
                type="text"
                placeholder="Add Activities"
                className="bg-purple-200 border-black border rounded-md p-2"
                onChange={handleip}
                value={newdata}
            />

            <button className="bg-black p-2 text-white"
                     onClick={handleAdd}>
                Add
            </button>

        </div>
    );
}

export default TodoAddAct;