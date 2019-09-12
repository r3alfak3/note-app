import React from 'react';

class Nav extends React.Component {
    render() {
        const { toggleNote, showNote } = this.props;
        
        return (
            <div className='nav-container'>
                <div className='nav-logo'><img src='sticky-logo.png' height='64' width='224' /></div>
                <div className='nav-button' onClick={() => toggleNote()}>
                    { showNote ? 'x Cancel' : '+ Note' }
                </div>
            </div>
        )
    }
}

export default Nav;