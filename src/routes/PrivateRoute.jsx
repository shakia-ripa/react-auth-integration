import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    console.log(loading);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;