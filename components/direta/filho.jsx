export default  function Filho(props){
    return (
        <div style={{
            display: "flex",
        }}>
            <h3 style={{paddingRight: 5}}>{props.nome}</h3>
            <h3>{props.familia}</h3>
        </div>
    )
}