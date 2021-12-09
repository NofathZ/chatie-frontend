import './MessageField.scss';

const MessageField = () => {
    const Input = ({ setMessage, sendMessage, message }) => {

    }
    return(
        <>
            <div className="message-field-container">
                <div className="messages">
                    <div className="sender-message">
                        <p>Message Message Message Message Message Message Message Message Message Message Message Message Message Message </p>
                    </div>
                    <div className="recipient-message">
                        <p>Message Message Message Message Message Message Message Message Message Message Message Message Message Message </p>
                    </div>
                </div>
                <form className="input-message">
                    <input type="text" />
                    <label>
                        <input type="submit" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                        </svg>
                    </label>
                </form>
            </div>
        </>
    )
}

export default MessageField