function TodolistAct(pro) {

    const ActivityArr = pro.ActivityArr;
    const setActivityArr = pro.setActivityArr;

    function handleDel(delid) {
        const tempArr = ActivityArr.filter(function (item) {
            return item.id !== delid;
        });

        setActivityArr(tempArr);
    }

    return (
        <div className="flex justify-between mt-2">

            <p>
                {pro.index + 1}. {pro.item.activity}
            </p>

            <button
                className="text-red-500"
                onClick={() => handleDel(pro.id)}
            >
                Delete
            </button>

        </div>
    );
}

export default TodolistAct;