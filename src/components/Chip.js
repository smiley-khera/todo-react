import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const ChipsArray = ({items, onDelete, todoId, canDelete}) => {
    const classes = useStyles();
    const chipData = items.map((item) => {
        const itemHash = {};
        itemHash['key'] = item.id;
        itemHash['label'] = item.name;
        return itemHash
    });
    return (
        <div className={classes.root}>
            {chipData.map(data => {
                const chip = canDelete ?
                    (<Chip
                        key={data.key}
                        label={data.label}
                        onDelete={() => onDelete(todoId, data.key)}
                        className={classes.chip}
                    />) :
                    (<Chip
                        key={data.key}
                        label={data.label}
                        className={classes.chip}
                    />);
                return chip;
            })}
        </div>
    );
};
export default ChipsArray