import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

 import { createRGB} from '../../utils/createRGB';


export const Statistics = (props) => {
  
     const { title, stats } = props;
//    Upload stats
     console.log(props);
    // console.log(title);
    
  
    return (

        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.list}>
                {stats.map((item) => (
                    <li style={{backgroundColor: createRGB()}} className={css.item} key={item.id} >
                    
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}%</span>
                    </li>
                ))}
                 {/* <li class="item">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>  */}
            </ul> 
        </section>
    );
};
  

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired

}






