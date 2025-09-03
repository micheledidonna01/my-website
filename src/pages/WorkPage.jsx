import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
const WorkPage = () => {

    const imgArr = [
        {
            id: 1,
            url: "../../public/workM.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae"
        },
        {
            id: 2,
            url: "../../public/workM2.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae"
        },
        {
            id: 3,
            url: "../../public/workM4.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae"
        },
        
    ];

    const descriptionRef = useRef([]);


    function toogleDescription(i) {
        descriptionRef.current[i].classList.remove("d-none");
    }

    function removeDescription(i) {
        descriptionRef.current[i].classList.add("d-none");
    }

    return <>
        <h3 className="work ps-3">Qui ci sono le mie esperienze lavorative:</h3>
        <div className="p-3  justify-content-center d-flex flex-wrap">
            <div className="border rounded p-3 bg-body-secondary row gap-3 d-flex col-md-6 col-sm-12 ">
                <h4>Magazzino Coniglio s.r.l.</h4>
                <p className="bg-danger border rounded text-white fw-light p-3">Magazzino che si occupa della raccolta e distribuzione di prodotti alimentari, in particolare uva, ciliege, cavolo ecc...</p>
                <div className="bg-success border rounded text-white fw-light p-3 d-inline-block">
                    <h5>Mansioni:</h5>
                    {imgArr.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div className="w-100 d-flex flex-wrap" key={item.id} onMouseEnter={() => toogleDescription(index)} onMouseLeave={() => removeDescription(index)}>
                                    <div className="bg-warning col-6  border rounded-start align-content-center p-3 text-center" >
                                        <p className="text-white d-none desc" ref={(el) => (descriptionRef.current[index] = el)} >{item.description}</p>
                                    </div>
                                    <div className="col-6">
                                        <img src={item.url} alt="magazzino" className="w-100 work-img" />
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className="w-100 d-flex flex-wrap" key={item.id} onMouseEnter={() => toogleDescription(index)} onMouseLeave={() => removeDescription(index)}>
                                <div className="col-6">
                                    <img src={item.url} alt="magazzino" className="w-100 work-img" />
                                </div>
                                <div className="bg-warning col-6  border rounded-end align-content-center p-3 text-center" >
                                    <p className="text-white d-none desc" ref={(el) => (descriptionRef.current[index] = el)} >{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="border rounded p-3 bg-body-secondary row gap-3 d-flex col-md-6 col-sm-12">
                <h4>Magazzino Coniglio s.r.l.</h4>
                <p className="bg-danger border rounded text-white fw-light p-3">Magazzino che si occupa della raccolta e distribuzione di prodotti alimentari, in particolare uva, ciliege, cavolo ecc...</p>
                <div className="bg-success border rounded text-white fw-light p-3 d-inline-block">
                    <h5>Mansioni:</h5>
                    {imgArr.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div className="w-100 d-flex flex-wrap" key={item.id} onMouseEnter={() => toogleDescription(index)} onMouseLeave={() => removeDescription(index)}>
                                    <div className="bg-warning col-6  border rounded-start align-content-center p-3 text-center" >
                                        <p className="text-white d-none desc" ref={(el) => (descriptionRef.current[index] = el)} >{item.description}</p>
                                    </div>
                                    <div className="col-6">
                                        <img src={item.url} alt="magazzino" className="w-100 work-img" />
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className="w-100 d-flex flex-wrap" key={item.id} onMouseEnter={() => toogleDescription(index)} onMouseLeave={() => removeDescription(index)}>
                                <div className="col-6">
                                    <img src={item.url} alt="magazzino" className="w-100 work-img" />
                                </div>
                                <div className="bg-warning col-6  border rounded-end align-content-center p-3 text-center" >
                                    <p className="text-white d-none desc" ref={(el) => (descriptionRef.current[index] = el)} >{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            

        </div>
    </>
}

export default WorkPage;