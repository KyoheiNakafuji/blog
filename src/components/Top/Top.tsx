import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react'
import { IBlog } from '../../interfaces/IBlog';

const styles = {
};

type ClassNames = keyof typeof styles;

interface ITopProps {
    latestBlogs: IBlog[],
    getLatestBlogs: () => void
}

class Top extends React.Component<ITopProps & WithStyles<ClassNames>, {}> {
    public componentWillMount() {
        this.props.getLatestBlogs();
    }

    public render() {
        return (
            <div>
                {this.props.latestBlogs.map(
                    (latestBlog) => {
                        return <div key={latestBlog.id}>{latestBlog.name}</div>;
                    })
                }
            </div>
        );
    }
}

export default withStyles(styles)<ITopProps>(Top);
