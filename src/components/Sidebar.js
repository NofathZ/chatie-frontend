import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  const [contactList, setContactList] = React.useState(["Nofath", "Zukhrufi", "Haideal", "Nofath", "Zukhrufi", "Haideal", "Nofath", "Zukhrufi", "Haideal", "Nofath", "Zukhrufi", "Haideal", "Nofath", "Zukhrufi", "Haideal",])
  const joinRoomChat = () => {
    let ruangan = prompt("Masukkan nomor room")
    while (isNaN(ruangan)) {
      alert("Masukkan angka saja bogoks")
      ruangan = prompt("Masukkan nomor room")
    }
  }

  return (
    <div className="sidebar-container">
      <div className="header-bar">
        <div className="profile">
          <div className="profile-pict"></div>
        </div>
        <div className="new-chat">
          <svg onClick={() => joinRoomChat()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </div>
        <div className="menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>
      <div className="search-bar">
        <input type="text"></input>
      </div>
      <div className="contact-list">
        {
          contactList.map(contact => (
            <div className="contact">
              <div className="profile-pict"></div>
              <h3 className="header-text">{contact}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar;