import React from 'react';
import { Form } from 'semantic-ui-react';

export const SemanticFormikInputField = props => {
	const {
		field: {
			// provided by Formik Field
			name
		},
		form: {
			// also provided by Formik Field
			setFieldValue
		},
		label // our own label prop
	} = props;

	return (
		<Form.Field>
			<label>{label}</label>
			<input
				type="text"
				onChange={event => {
					setFieldValue(name, event.target.value);
				}}
			/>
		</Form.Field>
	);
};
