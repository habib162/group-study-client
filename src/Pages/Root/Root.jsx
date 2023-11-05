import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-green-50">
            <Outlet></Outlet>
        </div>
    );
}

export default Root;