import { useState, useEffect } from "react";
import Sidebar from '../components/Sidebar';
import MessageField from '../components/MessageField';
import MessageFieldNoSelect from '../components/MessageFieldNoSelect';
import UsersAPI from '../api/UsersAPI';
import queryString from 'query-string';
import io from "socket.io-client";

const ENDPOINT = "localhost:5000"
let socket;

function Chat({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    console.log(location)
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    
        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
        console.log(socket);
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return(
        <>
            <Sidebar />
            {/* <MessageFieldNoSelect /> */}
            <MessageField />
        </>
    )
}

export default Chat;