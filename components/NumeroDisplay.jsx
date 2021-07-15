export default function NumeroDisplay(props){
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#188038",
            color: "#fff",
            fontSize: "1.5rem",
            margin: "20px"
        }}>
            {props.numero}
        </div>
    )
}