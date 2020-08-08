import React, {useState, useRef} from 'react'

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
		max: { femaleness: 20, maleness: 100 }
	},
	femme: {
		min: { femaleness: 80, maleness: 0 },
		max: { femaleness: 100, maleness: 20 }
	},
	androgynous: {
		min: { femaleness: 40, maleness: 40 },
		max: { femaleness: 70, maleness: 70 }
	},
	nonbinary: {
		min: { femaleness: 10, maleness: 10 },
		max: { femaleness: 90, maleness: 90 }
    },
    genderfluid: {
		min: { femaleness: 0, maleness: 0 },
		max: { femaleness: 100, maleness: 100 }
    },
    agender: {
		min: { femaleness: 0, maleness: 0 },
		max: { femaleness: 20, maleness: 20 }
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
		const matchingExpressions = Object.keys(genderIdentityMatrix).filter((key) => {
			key = genderIdentityMatrix[key];
			console.log("coords:", f, m, key);
			return (
				f >= key.min.femaleness &&
				f <= key.max.femaleness &&
				m >= key.min.maleness &&
				m <= key.max.maleness
			);
        });
        console.log(matchingExpressions);
		setGenderId(matchingExpressions);
	};

    //HANDLERS
    const handleGenderId1 = e => {
        computeVal();
    }
    const handleGenderId2 = e => {
        computeVal();
    }

    /*
    // Logic of Sliders:
    - Create data structure to throw terms we want to focus on
    - Think of it like the dimensions of a crane game (matrix)
    - Some things occupy the same space (like having a squirtle under a pikachu)
    - Matrixes can have overlapping values

    */

    return (
        <div>
			<h2>Gender Identity</h2>
			<div className="genderId1">
				Femaleness
				<input
					onChange={handleGenderId1}
					ref={genderId1Ref}
					type="range"
					min="0"
					max="100"
					defaultValue="50"
					step="0.1"
					className="slider"
					label="Female Identity Slider"
				/>
			</div>
			<div className="genderId2">
				Maleness
				<input
					onChange={handleGenderId2}
					ref={genderId2Ref}
					type="range"
					min="0"
					max="100"
					defaultValue="50"
					step="0.1"
					className="slider"
					label="Male Identity Slider"
				/>
			</div>
            <div>
                {genderId.map((gender) => (
                    <li>{gender}</li>
                ))}
            </div>
		</div>
    )
}

export default GenderIdentitySlider
