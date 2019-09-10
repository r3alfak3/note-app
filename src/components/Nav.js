import React from 'react';

class Nav extends React.Component {
    render() {
        const { toggleNote, showNote } = this.props;
        
        return (
            <div className='nav-container'>
                <div className='nav-logo'>Icky Stickies</div>
                <div className='nav-button' onClick={() => toggleNote()}>
                    { showNote ? 'x Cancel' : '+ Note' }
                </div>
            </div>
        )
    }
}

export default Nav;