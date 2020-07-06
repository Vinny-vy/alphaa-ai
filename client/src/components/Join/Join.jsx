import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () =>{

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return(
        <div>
            <div className="name">
                <h1># f.r.i.e.n.d.s </h1>
            </div>
        <div className="joinOuterContainer ">

            <div className="joinInnerContainer boxEffect">
                <h1 className="header boxEffect">Join</h1>
                <div><input placeholder="Name" className="joinInput inputEffect " type="text" onChange={(event)=> setName(event.target.value)}/></div>
                <div><input placeholder="Room" className="joinInput inputEffect  mt-20" type="text" onChange={(event)=> setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() :  null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20 " type="submit">Submit</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Join