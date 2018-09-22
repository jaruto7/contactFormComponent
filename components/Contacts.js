var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function() {
        var contacts = this.props.items.map( function( contact ) {
            return <Contact item = { contact } key = { contact.id } ></Contact>
        });

        return (
            <ul className = { 'contactsList' } >
                { contacts }
            </ul> 
            
        );
    }
});

// First return
// return React.createElement( Contact, {item: contact, key: contact.id } );

// Second return
// React.createElement( 'ul', { className: 'contactsList' }, contacts)