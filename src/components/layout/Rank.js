import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='rank'>
              {`${name}, your current rank is...`}
            </div>
            <div className='current-rank'>
              {entries}
            </div>
        </div>
    );
}

export default Rank;