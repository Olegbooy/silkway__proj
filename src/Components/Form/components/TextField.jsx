import React, { memo, useEffect } from 'react';
import classes from "../style.module.scss";

const TextField = ({ description, className, placeholder, typeInput, errors, exrtaProps, input, textArea }) => {
	useEffect(() => {}, [exrtaProps]);
	return (
		<div>
			{
				input && (
					<div className={classes.socket}>
						<p className={classes.description}>
							{ description }
						</p>
						<input className={className} type={typeInput} placeholder={placeholder} />
						<p style={{ color: 'red' }}>
							{ errors[exrtaProps.name] && errors[exrtaProps.name].message }
						</p>
					</div>
				)
			}
			{
				textArea && (
					<div className={classes.socket}>
						<p className={classes.description}>
							{ description }
						</p>
						<textarea className={className} type={typeInput} placeholder={placeholder} />
						<p style={{ color: 'red' }}>
							{ errors[exrtaProps.name] && errors[exrtaProps.name].message }
						</p>
					</div>
				)
			}
		</div>
	);
};

export default memo(TextField);
