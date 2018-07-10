import AppBar from '@material-ui/core/AppBar';
import { StyleRules, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = (theme: Theme): StyleRules => ({
    root: {
        flexGrow: 1,
    },
});

interface IHeaderProps {
    classes?: any
}

class Header extends React.Component<IHeaderProps & WithStyles<keyof typeof styles>> {
    public render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <AppBar position="sticky" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="headline">
                            社長の子育てブログ
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)<IHeaderProps>(Header)
