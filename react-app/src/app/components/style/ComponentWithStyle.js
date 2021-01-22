/**
*  Styles
*  @see: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
* 
*  - '.module' extension make create-react-app use CSS Module (scoped CSS)
*  - '.scss' extension enable post-processing
*/
import style from './ComponentWithStyle.module.scss';
import React from 'react';
import classNames from 'classnames/bind';

const classes = classNames.bind(style);

function ComponentWithStyle() {
  const [active, setActive] = React.useState(false);
  const buttonClass = classes({
    'Button': true,
    'Button--active': active,
    'Button--inactive': !active
  });
  
  const toggleActive = () => {
    setActive(!active);
  }

  return (
    <div className="ComponentWithStyle">
      <div className={ buttonClass } onClick={ toggleActive }>{ active ? 'Active': 'Inactive' }</div>
      <div className={ style.ComponentWithStyle }>ComponentWithStyle</div>
    </div>
  );
}

export default ComponentWithStyle;
  