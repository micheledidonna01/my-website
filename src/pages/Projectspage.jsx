import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Projectspage = () => {
    return (
        <div className='p-3 projects'>
            <h1>Projects Page</h1>
            <p>
                This is the projects page where you can find various projects.
                <br />
                You can download this projects
            </p>
            <div className="row gap-3">
                <div className='d-flex justify-content-between p-3 border rounded gap-2'>
                    <div className='col-4'>
                        <img src="../../public/react-1.svg" alt="react app" className='w-100' />
                    </div>
                    <div className='col-8 text-right position-relative card-dwml'> 

                        <h5>React Web App</h5>
                        <p>description project</p>
                        <a href="../../files/webapp-react.zip" className="text-decoration-none position-absolute end-0 bottom-0 pe-3" download>
                            <i className="bi bi-download fs-1"></i>
                        </a>
                    </div>
                </div>
                <div className='d-flex justify-content-between p-3 border rounded gap-2'>
                    <div className='col-4'>
                        <img src="../../public/react-1.svg" alt="react app" className='w-100' />
                    </div>
                    <div className='col-8 text-right position-relative card-dwml'> 

                        <h5>React Web App</h5>
                        <p>description project</p>
                        <a href="../../files/webapp-react.zip" className="text-decoration-none position-absolute end-0 bottom-0 pe-3" download>
                            <i className="bi bi-download fs-1"></i>
                        </a>
                    </div>
                </div>
                <div className='d-flex justify-content-between p-3 border rounded gap-2'>
                    <div className='col-4'>
                        <img src="../../public/react-1.svg" alt="react app" className='w-100' />
                    </div>
                    <div className='col-8 text-right position-relative card-dwml'> 

                        <h5>React Web App</h5>
                        <p>description project</p>
                        <a href="../../files/webapp-react.zip" className="text-decoration-none position-absolute end-0 bottom-0 pe-3" download>
                            <i className="bi bi-download fs-1"></i>
                        </a>
                    </div>
                </div>
                <div className='d-flex justify-content-between p-3 border rounded gap-2'>
                    <div className='col-4'>
                        <img src="../../public/react-1.svg" alt="react app" className='w-100' />
                    </div>
                    <div className='col-8 text-right position-relative card-dwml'> 

                        <h5>React Web App</h5>
                        <p>description project</p>
                        <a href="../../files/webapp-react.zip" className="text-decoration-none position-absolute end-0 bottom-0 pe-3" download>
                            <i className="bi bi-download fs-1"></i>
                        </a>
                    </div>
                </div>

            </div>
        


        </div>
       
    );
}

export default Projectspage;