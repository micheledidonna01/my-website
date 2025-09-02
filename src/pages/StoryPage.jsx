import { useRef } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
export default function StoryPage() {

    const descRef = useRef();
    const scrollToDesc = () => {
        descRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='page p-5'>
            <h1 className="bg-warning border-3 p-3 rounded">
                Hy My name is Michele Didonna, and this is the story of my life from a school and work point of view.
                <button className=" btn btn-danger border-3 p-3 rounded my-3" onClick={() => scrollToDesc()}>Ok, now click me andscroll to see all the stages</button>
            </h1>

            <div className="bg-secondary border-3 p-3 rounded">

                <div className="d-flex border-3 rounded align-items-stretch gap-1">
                    <p className="col-3 bg-success border-3 p-3 rounded">Per Prima cosa mi presento:</p>
                    <p className="col-9 bg-info border-3 p-3 rounded">Descrizione Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus consequatur, nihil in cum fugit ad officia at odit voluptatum magni!</p>
                </div>

                <div className="position-relative">

                    <img src="../../public/school.jpg" alt="myimage" className="col-12 my-3" />
                    <p className="position-absolute bg-light border-3 p-3 rounded-bottom start-0 end-0 bottom-0">This is my funny image that I now I am</p>
                </div>

            </div>

            <div className="my-4 bg-body-secondary border-3 p-1 rounded">
                <h2 className="bg-warning border-3 p-3 rounded">The point:</h2>
                <div className="d-flex justify-content-between mb-4" ref={descRef}>
                    <Link to='/story/school' className="schoolbg d-flex justify-content-center align-items-center">School</Link>
                    <Link to='/story/work' className="workbg d-flex justify-content-center align-items-center">Work</Link>
                </div>
            </div>
        </div>
    )
}