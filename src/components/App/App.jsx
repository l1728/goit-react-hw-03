import './App.css';
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  // Стан для зберігання контактів та пошукового запиту
  const [contacts, setContacts] = useState(initialContacts);
  const [searchQuery, setSearchQuery] = useState('');

  // Функція для додавання нового контакту
  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  // Функція для оновлення пошукового запиту
  const handleSearch = query => {
    setSearchQuery(query);
  };

  // Фільтрація контактів на основі пошукового запиту
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchQuery={searchQuery} handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};
export default App;
