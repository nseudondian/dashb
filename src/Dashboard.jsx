import React, { Component } from 'react';
import './index.css'

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navback">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">EMIFOODLOVERS</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-lg-auto">
                    <a className="nav-item nav-link" href="#"></a>
                    </div>
                </div>
                </nav>
                <div>
                    <ul>                     
                        <li>POS</li>
                        <li>PRODUCT</li>
                        <li>REPORT</li>
                        <li>INVENTORY</li>
                        <li>CONFIGURATION</li>
                    </ul>                        
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-8">
                                <h6>Dashboard</h6>
                            </div>
                            <div className="col col-sm-2">
                                <p className="total">TOTAL SALES FOR THIS MONTH</p>
                                <p className="ntotal">N0.00  ......</p>
                            </div>
                            <div className="col col-sm-2">
                                <p className="total">TOTAL SALES FOR LAST MONTH</p>
                                <p className="ntotal">N0.00 ......</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h5 className="card-title">SALES OVERVIEW</h5>
                                        <h5 className="card-title">N0.00</h5>
                                        <p className="compare">+0.00% lighter than yesterday</p>
                                        <p className="today">Total Sales for today</p>                                                    
                                    </div>
                                    <div className="col-sm-4">
                                        <i className="fas fa-wallet text-white"></i>
                                    </div>
                                </div>                  
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body2">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h5 className="card-title">PROFIT/LOSS SUMMARY</h5>                                
                                        <h5 className="card-title">N0.00</h5> 
                                        <p className="compare">+0.00% lighter than yesterday</p> 
                                        <p className="today">Profit on Sales for today</p> 
                                    </div>  
                                    <div className="col-sm-4">
                                        <i className="fas fa-chart-line text-white"></i>
                                    </div>             
                                </div>              
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body3">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h5 className="card-title">INVENTORY SUMMARY</h5>                                
                                        <h5 className="card-title">N10,900.00</h5> 
                                        <p className="compare">For 100 items in stock</p> 
                                        <p className="today">Total Value of Inventory Stock</p> 
                                    </div>
                                    <div className="col-sm-4">
                                        <i className="fas fa-dolly-flatbed text-white"></i>
                                    </div>    
                                </div>                                                             
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card shadow p-3 mb-5 bg-white rounded">
                                    <div className="card-body">
                                    <h5 className="card-title2">LOW STOCK</h5>
                                        <div className="row">                                        
                                            <div className="col-sm-4">
                                                <p className="para">SKU</p>
                                                <p className="para">DRBV-COKE-SL-950</p>
                                                <p className="para">209B3</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="para">Product Name</p>
                                                <p className="para">Coke Solo</p>
                                                <p className="para">Now Variation</p>
                                            </div>
                                            <div className="col-sm-2">
                                                <p className="para">Threshold</p>
                                                <p className="para">100</p>
                                                <p className="para">50</p>
                                            </div>
                                            <div className="col-sm-2">
                                                <p className="para">Availbale</p>
                                                <p className="para">30</p>
                                                <p className="para">10</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card shadow p-3 mb-5 bg-white rounded">
                                    <div className="card-body"> 
                                    <h5 className="card-title2">EXPIRED PRODUCTS</h5>                                   
                                        <div className="row">
                                            <div className="col-sm-5">                                                
                                                <p className="para">Product Name</p>
                                                <p className="para">Coke BiggerBoy</p>
                                                <p className="para">Coke Solo</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="para">Expiry Date</p>
                                                <p className="para">2 Apr 2020</p>
                                                <p className="para">31 Jul 2019</p>
                                            </div>
                                            <div className="col-sm-3">
                                                <p className="para">Quantity</p>
                                                <p className="para">60</p>
                                                <p className="para">10</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
         );
    }
}
 
export default Dashboard;