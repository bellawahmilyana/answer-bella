import React, {useState, useEffect} from 'react';
import axios from "axios";

const Quest1 = () => {

    const url = "https://screening.moduit.id/frontend/web/question/one";

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get(
                `${url}`
            )
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>

            {/* <div className="container "> */}
              <div className="row quest">

                <div className="col roww">
                {/* <Col className="roww"> */}
                    {/* <h5>Question 1</h5> */}
                    <nav className="navbar navbar-light navnav">
                        <div className="container-fluid">
                            <a className="navbar-brand">Question 1</a>
                        </div>
                    </nav>

                    <div className="card cardd">
                        
                        <div className="card-body">
                            
                        <table class="table">
                            <thead>
                                <tr>
                                <th className="the" scope="col">Product Name</th>
                                <th className="the" scope="col">Product Code</th>
                                <th className="the" scope="col">Category</th>
                                <th className="the" scope="col">Description</th>
                                <th className="the" scope="col">Tags</th>
                                </tr>
                            </thead>
                            <tbody>

                                {products.length !== 0 ? (products.map((product) => (

                                <tr key={product.id}>
                                <th className="the" scope="row">{product.title}</th>
                                    <td className="the">{product.id}</td>
                                    <td className="the">{product.category}</td>
                                    <td className="the">{product.description}</td>
                                    <td className="the">{product.tags}</td>
                                </tr>

                                ))): <p>loading...</p>}   
                                
                            </tbody>
                        </table>
                            
                        </div>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination pagination-sm">
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <p className="footer">Copyright &copy; 2019 <span>PT Moduit Digital Indonesia.</span> All rights reserved</p>
                    {/* </Col> */}
                </div>

              </div>
            {/* </div> */}

        </div>
    )
}

export default Quest1
