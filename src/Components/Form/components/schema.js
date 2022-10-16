import * as yup from 'yup';

export const schema = yup.object({
	name: yup.string()
		.required('Enter please your name')
		.min(2, 'Type your name correctly')
		.max(99, 'Type your name correctly'),
	email: yup.string().email().required('Enter please your email'),
	message: yup.string().min(15, 'Your message should has min 15 characters').max(180, 'It should be max 180 characters').required('Enter please your message')
}).required();
