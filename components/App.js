var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com'
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com'
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com' 
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function() {
        return (
            <div className = { 'app' } > 
                <ContactForm contact = { contactForm } ></ContactForm>
                <Contacts items = { contacts } ></Contacts>
            </div>
        );
    }
});

// That is the code inside return in App class above

// React.createElement( 'div', { className: 'app' },
//                 React.createElement( ContactForm, { contact: contactForm }),
//                 React.createElement( Contacts, { items: contacts }, {})
//             )