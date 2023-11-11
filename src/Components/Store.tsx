import { useSearchParams } from 'react-router-dom';
import { DEFAULT_ITEMS } from '../assets/utils/DATA.json';

type tSearchParams = {
	q: string;
	onlyComputerItems: string;
};

export function Store() {
	const [searchParams, setSearchParams] = useSearchParams({
		q: '',
		onlyComputerItems: 'false',
	});
	const q = searchParams.get('q');
	const onlyComputerItems = searchParams.get('onlyComputerItems') === 'true';

	//filter function
	const items = DEFAULT_ITEMS.filter((item) => {
		return (
			item.toLowerCase().includes(q.toLowerCase()) &&
			(!onlyComputerItems || (onlyComputerItems && (item === 'Computer' || item === 'Keyboard')))
		);
	});

	return (
		<main>
			<h1>STORE</h1>

			<div className='inputWrapper'>
				<label htmlFor='q'>Title</label>
				<input
					type='text'
					id='q'
					value={q}
					onChange={(e) =>
						setSearchParams(
							(prev) => {
								prev.set('q', e.target.value);
								return prev;
							},
							{ replace: true }
						)
					}
				/>
			</div>

			<div className='inputWrapper'>
				<label htmlFor='onlyComputerItems'>Only Computer Items</label>
				<input
					type='checkbox'
					id='onlyComputerItems'
					checked={onlyComputerItems}
					onChange={(e) =>
						setSearchParams(
							(prev) => {
								prev.set('onlyComputerItems', e.target.checked);
								return prev;
							},
							{ replace: true }
						)
					}
				/>
			</div>

			<div>
				<ul>
					{items.map((item, idx) => (
						<li key={`${item}-${idx}`}>{item}</li>
					))}
				</ul>
			</div>
		</main>
	);
}
