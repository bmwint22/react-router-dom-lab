import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            <h2>Mailboxes</h2>
            <div>
                {mailboxes.map((mailbox) => (
                    <div key={mailbox._id} className="mail-box">
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            <p>Box #{mailbox._id}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MailboxList;
