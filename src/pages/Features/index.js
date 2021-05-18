import React from 'react';
import './style.css';

function Features() {
    return (
        <div id='features'>
            <h1>Features</h1>
            <p>
                Some of the features and advantages that we provide for those of you
                who store data in this Data Warehouse.
            </p>
            <div >
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
            </div>
        </div>
    )
}

const FeatureItem = () => (
    <div className='feature__item'>
        <h2>Search Data</h2>
        <p>
            Don’t worry if your data is very large, the Data Warehoue provides a search engine,
            which is useful for making it easier to find data effectively saving time.
        </p>
    </div>
)

export default Features;