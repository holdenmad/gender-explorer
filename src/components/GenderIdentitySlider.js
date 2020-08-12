import React, {useState, useRef} from 'react'
import {Heading, Box, RangeInput} from 'grommet'

const genderIdentityMatrix = {
	// "top-right-quadrant": {
	// 	min: { femaleness: 50, maleness: 50 },
	// 	max: { femaleness: 100, maleness: 100 }
	// },
	// "bottom-right-quadrant": {
	// 	min: { femaleness: 50, maleness: 0 },
	// 	max: { x: 100, maleness: 50 }
	// },
	// "top-left-quadrant": {
	// 	min: { femaleness: 0, maleness: 50 },
	// 	max: { femaleness: 50, maleness: 100 }
	// },
	// "bottom-left-quadrant": {
	// 	min: { femaleness: 0, maleness: 0 },
	// 	max: { femaleness: 50, maleness: 50 }
	// },

	butch: {
		min: { femaleness: 0, maleness: 80 },
		max: { femaleness: 20, maleness: 100 },
		description: 'Description of Butch'

	},
	femme: {
		min: { femaleness: 80, maleness: 0 },
		max: { femaleness: 100, maleness: 20 },
		description: 'Description of Butch'


	},
	androgynous: {
		min: { femaleness: 40, maleness: 40 },
		max: { femaleness: 70, maleness: 70 },
		description: 'Description of Butch'

	},
	nonbinary: {
		min: { femaleness: 10, maleness: 10 },
		max: { femaleness: 90, maleness: 90 },
		description: 'Description of Butch'

    },
    genderfluid: {
		min: { femaleness: 0, maleness: 0 },
		max: { femaleness: 100, maleness: 100 },
		description: 'Description of Butch'

    },
    agender: {
		min: { femaleness: 0, maleness: 0 },
		max: { femaleness: 20, maleness: 20 },
		description: 'Description of Butch'

    }

};


const GenderIdentitySlider = () => {
	//REFS
	const genderId1Ref = useRef();
	const genderId2Ref = useRef();

	//STATE
	const [genderId, setGenderId] = useState([]);

	const computeVal = () => {
		const f = genderId1Ref.current.value;
		const m = genderId2Ref.current.value;
		const matchingIdentities = Object.entries(genderIdentityMatrix).filter(key => {
			key = genderIdentityMatrix[key[0]];
			// console.log('coords:', f, m, key);
			return (
				f >= key.min.femaleness &&
				f <= key.max.femaleness &&
				m >= key.min.maleness &&
				m <= key.max.maleness
			);
		});
		setGenderId(matchingIdentities);
	};

	//HANDLERS
	const handleGenderId1 = e => {
		computeVal();
	};
	const handleGenderId2 = e => {
		computeVal();
	};

	/*
    // Logic of Sliders:
    - Create data structure to throw terms we want to focus on
    - Think of it like the dimensions of a crane game (matrix)
    - Some things occupy the same space (like having a squirtle under a pikachu)
    - Matrixes can have overlapping values

    */

	return (
		<Box align="center">
			<Heading level="2">Gender Identity</Heading>
			<Box width="medium" className="genderId1">
				Feminine
				<RangeInput
					onChange={handleGenderId1}
					ref={genderId1Ref}
					type="range"
					min="0"
					max="100"
					defaultValue="50"
					step={1}
					className="slider"
					label="Feminine Identity Slider"
				/>
			</Box>
			<Box width="medium" className="genderId2">
				Masculine
				<RangeInput
					onChange={handleGenderId2}
					ref={genderId2Ref}
					type="range"
					min="0"
					max="100"
					defaultValue="50"
					step={1}
					className="slider"
					label="Masculine Identity Slider"
				/>
			</Box>
			<Box>
				{' '}
				{genderId.map(gender => (
					<Box
						key={gender[0]}
						margin="small"
						pad="small"
						border={{ size: 'small', color: 'accent-1' }}
					>
						{`${gender[0]}: ${gender[1].description}`}
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default GenderIdentitySlider;