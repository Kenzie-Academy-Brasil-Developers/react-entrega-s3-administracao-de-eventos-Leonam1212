import ListaDeBebidas from "../../Components/Card"
import Navbar from "../../Components/NavBar/index"
import Subheader from "../../Components/SubHeader"
const Catalogo = () => {

    return(
        <>
        <Navbar />
        <Subheader />
        <ListaDeBebidas tipo= "bebidas" />
        </>
    )
}
export default Catalogo