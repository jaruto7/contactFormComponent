var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className = { 'contactForm' } >
                <input className = { 'contactLabel' } type = { 'text' } placeholder = { 'Imię' } value = { this.props.contact.firstName } ></input>
                <input className = { 'contactLabel' } type = { 'text' } placeholder = { 'Nazwisko' } value = { this.props.contact.lastName } ></input>
                <input className = { 'contactLabel' } type = { 'email' } placeholder = { 'email' } value = { this.props.contact.email } ></input>
                <button className = { 'button' } type = { 'submit' } value = { 'Dodaj kontakt' } ></button>
            </form>
        )
    },
});

// React.createElement( 'form', { className: 'contactForm' },
//                 React.createElement( 'input', {
//                     type: 'text',
//                     placeholder: 'Imię',
//                     value: this.props.contact.firstName,
//                 }),
//                 React.createElement( 'input', {
//                     type: 'text',
//                     placeholder: 'Nazwisko',
//                     value: this.props.contact.lastName,
//                 }),
//                 React.createElement( 'input', {
//                     type: 'email',
//                     placeholder: 'email',
//                     value: this.props.contact.email,
//                 }),
//                 React.createElement( 'button', { type: 'submit' }, 'Dodaj kontakt')
//             )