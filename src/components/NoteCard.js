import React from 'react';

class NoteCard extends React.Component {
    render() {
        const { note, getNote } = this.props;

        return (
            <div className='note-card-container'>
                <div className='note-card-title'>
                    {note.title}
                </div>
                <div className='note-card-content'>
                    {note.content}
                </div>
                <div className='note-card-icons'>
                    <div className='note-card-delete'>
                        <i className='material-icons'>close</i>
                    </div>
                    <div className='note-card-edit' onClick={() => getNote()}>
                        <i className='material-icons'>edit</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteCard;