import React, { Component } from 'react';
import InputGroup from './InputGroup';

export default function HostCreateQueue(props){
    return (
        <div style = {{
            width: "50%",
            height: "50%"
        }}className="getinline-card container bg-light  mt-4 p-4">
                <div className="text-center">
                    <h2>Create New Queue</h2>
                </div>
                <div style={{paddingTop: "5%"}}className="card-body">
                    <InputGroup text="Name" type="text"/>
                    <InputGroup text="Select Location" type="text"/>  
                    <InputGroup text="Estimated Waiting Time per Person" type="number" min={0}/>                     
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="text-center">
                                <button style = {{
                                    marginRight: "50px"
                                }} type="submit" class="btn btn-danger mr-5">Delete Queue</button>
                                <button style = {{
                                    marginLeft: "50px"
                                }} type="submit" class="btn btn-primary mr-5">Create Queue</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </div>
    )
}