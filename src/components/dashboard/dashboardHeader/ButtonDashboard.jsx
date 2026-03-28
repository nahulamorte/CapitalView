    import "./buttonDashboard.css";

    export function ButtonDashboard({icon, text}){
        return (
            <button className="btn-dashboard"> 
                {text}
                <img className="icon-button" src={icon} alt="icon" /> 
            </button>
        );
    }