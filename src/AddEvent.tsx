import { useState } from 'react';
import { ModalElementAdd } from './ModalElementAdd';


export const AddEvent = () => {
	const [showAdd, setShowAdd] = useState(false);

	return (
		<>
			<button
				type="button"
				className="btn-add"
				onClick={() => setShowAdd(true)}
			>
				Add
			</button>
			<ModalElementAdd show={showAdd} setShow={setShowAdd} />
		</>
	)
}