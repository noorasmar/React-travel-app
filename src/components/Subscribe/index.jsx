import './style.css'

function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-8 col-sm-12">
                        <h3>Subscribe<br/>Newsletter</h3>
                        <h4>The Travel</h4>
                        <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                        <div className="sub-btn">
                            <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="./assets/imgs/sub/emojione-v1_open-mailbox-with-lowered-flag.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;