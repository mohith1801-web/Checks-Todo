import Header from "../components/header.jsx"
import Card from "../components/blocks.jsx"
import Todoactt from "../components/todoact.jsx"
import { useLocation,} from "react-router-dom";

function Landing() {
    const data = useLocation();
    return (
        <div className="bg-black p-16">

            <div className="bg-white rounded-lg shadow-md p-10">

                <Header name={data.state.user} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                    <Card
                        title={23}
                        description="Chennai"
                        color="bg-orange-400" />
                    <Card
                        title="September"
                        description="15:54:56"
                        color="bg-yellow-400" />
                    <Card
                        title="Built By"
                        description="React"
                        color="bg-blue-500" />
                </div>

             <div>
                <Todoactt />
             </div>

            </div>
        </div>
    );
}
export default Landing;