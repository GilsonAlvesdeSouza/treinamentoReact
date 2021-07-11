import Pai from "../../components/direta/Pai";
import Filho from "../../components/direta/filho";

export default function direta() {
    return (
        <div>
            <Pai nome={"Wilson"}>
                <Filho nome={"Gilson"} familia={"Alves"}></Filho>
                <Filho nome={"Vivian"} familia={"Alves"}></Filho>
            </Pai>
            <Pai nome={"João"}>
                <Filho nome={"Franciele"} familia={"Franca"}></Filho>
                <Filho nome={"Ana Paula"} familia={"Franca"}></Filho>
            </Pai>
        </div>
    )
}