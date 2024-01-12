import 'bootstrap-icons/font/bootstrap-icons.css';


function CallToAction() {
    return (
        <div style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center', fontSize: '35px', fontWeight: '700', letterSpacing: '6px', marginBottom: '50px', padding: '50px' }} className="">
            <div className="container p-5" data-aos = 'flip-right' data-aos-duration = '3000'><h1>Call To Action</h1>
                <p>Please contact us to Any Query</p>
            </div>


            <div className="d-flex justify-content-center mb-5" style={{ padding: '50px' }}>
                <div className="tel p-3 m-2 mb-5" style={{ backgroundColor: 'grey', borderRadius: '25px' }}> CALL @ 8506922777</div>
                <div className="tel p-3 m-2 mb-5" style={{ backgroundColor: 'grey', borderRadius: '25px' }}> CALL @ 8506944777</div>
                <div className="tel p-3 m-2 mb-5" style={{ backgroundColor: 'grey', borderRadius: '25px' }}> CALL @ 01203174973</div>
            </div>
            <div className="d-flex justify-content-around">
                <div>
                <i class="bi bi-person-fill "></i>
                    <h2 className='m-4'>56</h2>
                    <p>Our Staff</p>
                </div>
                <div>
                    <i class="bi bi-people-fill"></i>
                    <h2 className='m-4'>5200</h2>
                    <p>Our Client</p>
                </div>
                <div>
                    <i class="bi bi-check-lg"></i>
                    <h2 className='m-4'>3811</h2>
                    <p>Complete Project</p>
                </div>
                <div>
                    <i class="bi bi-graph-up-arrow"></i>
                    <h2 className='m-4'>24*7</h2>
                    <p>Support</p>
                </div>
            </div>

        </div>
    )
}
export default CallToAction;