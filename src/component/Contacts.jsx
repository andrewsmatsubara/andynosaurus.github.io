import { contacts } from "../util/util";

export default function Contacts() {
  return <div className="contacts" id="contacts">
    <h1>Contato</h1>
    <div className="contacts-card">
      {contacts()}
    </div>
  </div>
}
