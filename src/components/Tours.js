import Card from "./card";
function Tours({tours} , {removeTour}){
    return (
        <div>
            <div>
            <h2>Plan with Love</h2>
            <div>
                {
                    tours.map( (tour) =>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Tours;