import React from 'react';
import { withStyles, Card, CardContent, CardActions, Modal, Button, TextField } from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

const styles = theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalCard: {
        width: '90%',
        maxWidth: 500,
    },

    modalCardComponent:  {
        display: 'flex',
        flexDirection: 'column',
    },

    maginTop: {
        marginTop: theme.spacing(2),
    }
})

const BookEditor = ({ classes, post, onSave, history }) => {
  return (
    <Form initialValues={post} onSubmit={onSave}>
        {({ handleSubmit }) => (
            <Modal
                className={classes.modal}
                onClose={()=> history.goBack()}
                open
            >
                
            </Modal>    
        )}
    </Form>
  )
};


export default BookEditor;