import NavigationBar from "./navigation-bar";
function BookLove() {
    return(
        <div>
            <div className="row">
                <div className = "col-2">
                    <NavigationBar/>
                </div>
                <div className = "col-7">
                    <h1>BookLove</h1>
                </div>
                <div className="col-3">
                    <h1>Suggested</h1>
                </div>
            </div>
            
        </div>
    );
}
export default BookLove;