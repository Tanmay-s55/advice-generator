import '../Index.css';
function AdviceSlip({ adviceID, advice }){
    return <div className="adviceContainer">
        <h4>ADVICE #{adviceID}</h4>
        <h2>"{advice}"</h2>
    </div>;
}
export default AdviceSlip;