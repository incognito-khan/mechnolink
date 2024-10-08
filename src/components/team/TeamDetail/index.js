import PropTypes from 'prop-types';
import classes from './index.module.scss';

function TeamDetail ({ teamItems }) {
    const name = teamItems?.teamTitle.replace(/<br>|<br\/>/g, '');
    return (
        <div className={classes.area}>
            <div className={classes.teamDetail}>
                <div className={classes.headings}>
                    <h1 className={classes.title}>{name}</h1>
                    <p className={classes.occupation}>{teamItems.teamOccupation}</p>
                </div>
                <div className={classes.content}>
                    <div>
                        <p className={classes.content_text}>{teamItems.textOne}</p>
                    </div>
                    <div>
                        <p className={classes.content_text}>{teamItems?.textTwo}</p>
                    </div>
                    <div>
                        <p className={classes.content_text}>{teamItems?.textThree}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

TeamDetail.propTypes = {
    teamItems: PropTypes.instanceOf(Object).isRequired,
};

export default TeamDetail;