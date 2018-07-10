import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp, WithWidthProps } from '@material-ui/core/withWidth';
import InfoIcon from '@material-ui/icons/Info';
import * as React from 'react';
import { compose } from 'recompose';
import { IBlog } from '../../interfaces/IBlog';

const styles = {
    gridList: {
        width: "100%",
    },

    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
};

type ClassNames = keyof typeof styles;

interface ITopProps {
    latestBlogs: IBlog[],
    getLatestBlogs: () => void
}

class Top extends React.Component<ITopProps & WithStyles<ClassNames> & WithWidthProps, {}> {
    public componentWillMount() {
        this.props.getLatestBlogs();
    }

    public render() {
        const { classes, latestBlogs } = this.props;
        let cols = 1;

        if (isWidthUp('xl', this.props.width)) {
            cols = 5;
        } else if (isWidthUp('lg', this.props.width)) {
            cols = 4;
        } else if (isWidthUp('md', this.props.width)) {
            cols = 3;
        } else if (isWidthUp('sm', this.props.width)) {
            cols = 2;
        }

        return (
            <div>
                <GridList cellHeight={180} className={classes.gridList} cols={cols}>
                    <GridListTile key="Subheader" cols={cols} style={{ height: 'auto' }}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>
                    {latestBlogs.map(blog => (
                        <GridListTile key={blog.id} cols={1}>
                            <img src={blog.img} alt={blog.title} />
                            <GridListTileBar
                                title={blog.title}
                                subtitle={
                                    <span>
                                        {blog.description}
                                    </span>
                                }
                                actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
                {this.props.latestBlogs.map(
                    (latestBlog) => {
                        return <div key={latestBlog.id}>{latestBlog.title}</div>;
                    })
                }
            </div>
        );
    }
}

export default compose(
    withWidth(),
    withStyles(styles)
  )(Top);
