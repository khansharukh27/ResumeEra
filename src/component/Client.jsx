    
    
    
    const clientiImages = [
    { src1: 'https://namratauniversal.com/img/client-1.jpg' },
    { src2: 'https://namratauniversal.com/img/client-2.jpg' },
    { src3: 'https://namratauniversal.com/img/client-3.jpg' },
    { src4: 'https://namratauniversal.com/img/client-4.jpg' },
    { src5: 'https://namratauniversal.com/img/client-12.png' },
    { src6: 'https://namratauniversal.com/img/client-21.png' },
    { src7: 'https://namratauniversal.com/img/client-23.png' },
    { src8: 'https://namratauniversal.com/img/client-15.png' },
    { src9: 'https://namratauniversal.com/img/client-16.png' },
    { src10: 'https://namratauniversal.com/img/client-5.jpg' },
    { src11: 'https://namratauniversal.com/img/client-6.jpg' },
    { src12: 'https://namratauniversal.com/img/client-7.jpg' },
    { src13: 'https://namratauniversal.com/img/client-8.jpg' },
    { src14: 'https://namratauniversal.com/img/client-9.png' },
    { src15: 'https://namratauniversal.com/img/client-10.png' },
    { src16: 'https://namratauniversal.com/img/client-14.png' },
    { src17: 'https://namratauniversal.com/img/client-13.png' },
    { src18: 'https://namratauniversal.com/img/client-18.png' },
    { src19: 'https://namratauniversal.com/img/client-18.png' },
    { src20: 'https://namratauniversal.com/img/client-18.png' },
]




function Client() {
    return (
      <div>
        <h1>Our Client</h1>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-aos-ride="carousel" data-aos-duration="2000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              
              <img src="https://namratauniversal.com/img/client-18.png" className="d-block w-100" alt="Client 4"/>
            </div>
            <div className="carousel-item ">
            <img src='https://namratauniversal.com/img/client-1.jpg' className="d-block w-100" alt="Client 2"/>
            </div>
            <div>
            <img src="https://namratauniversal.com/img/client-18.png" className="d-block w-100" alt="Client 3"/>
            </div>
            {/* Add more carousel items with actual image URLs */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
  export default Client;