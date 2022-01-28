import React from 'react';
import { 
    withStyles, 
    Card, 
    CardContent, 
    CardActions, 
    Modal, 
    Button, 
    TextField, 
    InputAdornment, 
    InputLabel, 
    MenuItem,
    Select
} from '@material-ui/core';
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
                <Card className={classes.modalCard}>
                    <form onSubmit={handleSubmit}>
                        <CardContent className={classes.modalCardContent}>
                            <Field name="book_name">
                                {({ input }) =><TextField label="Book Name" autoFocus {...input} />}
                            </Field>
                            <Field name="book_publisher">
                                {({ input }) =><TextField label="Book Publisher" autoFocus {...input} />}
                            </Field>
                            <InputLabel id="category">Book Category</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                value={category}
                                onChange={handleChange}
                            >
                                <MenuItem value={children}>Children</MenuItem>
                                <MenuItem value={novels}>Novels</MenuItem>
                                <MenuItem value={selfhelp}>Selfhelp</MenuItem>
                            </Select>
                            <Field name="price">
                                {({ input }) =><InputAdornment label="Book Price" autoFocus {...input} />}
                            </Field>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" type="submit">Save Book</Button>
                            <Button size="small" color="danger" onClick={()=>history.goBack()}>Cancel</Button>
                        </CardActions>
                    </form>
                </Card>                
            </Modal>    
        )}
    </Form>
  )
};


export default compose(
    withRouter,
    withStyles(styles),
)(BookEditor);