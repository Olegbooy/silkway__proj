import React, { memo } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import classes from './style.module.scss';
import TextField from "./components/TextField";
import { schema } from "./components/schema";


const Form = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data) => console.log(data);
	console.log(errors);
	return (
		<form
			className={classes.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* <div className={classes.socket}> */}
			{/*	<p className={classes.description}> */}
			{/*		Your email */}
			{/*	</p> */}
			{/*	<input className={classes.input} type="email" placeholder="mail@example.com" required /> */}
			{/* </div> */}
			<TextField
				input
				className={classes.input}
				placeholder="mail@example.com"
				description="Your email"
				typeInput="email"
				errors={errors}
				exrtaProps={register('email')}
			/>
			{/* <div className={classes.socket}> */}
			{/*	<p className={classes.description}> */}
			{/*		Your Name */}
			{/*	</p> */}
			{/*	<input className={classes.input} type="text" placeholder="John Smith" /> */}
			{/* </div> */}
			<TextField
				input
				className={classes.input}
				placeholder="John Smith"
				description="Your Name"
				typeInput="text"
				errors={errors}
				exrtaProps={register('name')}
			/>
			{/* <div className={classes.socket}> */}
			{/*	<p className={classes.description}> */}
			{/*		Text */}
			{/*	</p> */}
			{/*	<textarea className={classes.input} type="text" placeholder="Your comments" /> */}
			{/* </div> */}
			<TextField
				textArea
				className={classes.input}
				placeholder="Your comments"
				description="Text"
				typeInput="text"
				errors={errors}
				exrtaProps={register('message')}
			/>
			<button type="submit">
				Send
			</button>
		</form>
	);
};

export default memo(Form);
