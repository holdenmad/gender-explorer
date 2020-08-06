import React, {useState, useRef} from 'react'

const GenderExpMatrix = {
    "top-right-quadrant": {"from":{"x":50,"y":50},"to":{"x":100,"y":100}},
    "bottom-right-quadrant": {"from":{"x":50,"y":0},"to":{"x":100,"y":50}},
    "top-left-quadrant": {"from":{"x":0,"y":50},"to":{"x":50,"y":100}},
    "bottom-left-quadrant": {"from":{"x":0,"y":0},"to":{"x":50,"y":50}}
}

const GenderExpressionSlider = () => {
    //REFS
    const genderexp1Ref = useRef();
    const genderexp2Ref = useRef();

    //STATE
    const [genderExp, setGenderExp] = useState();

    const computeVal = (val)=> {
        let val1 = parseInt(genderexp1Ref.current.value);
        let val2 = parseInt(genderexp2Ref.current.value);
        setGenderExp(val1 + val2);
        console.log(val1 + ':' + val2);
    }

    //HANDLERS
    const handleGenderExp1 = e => {
        computeVal();
    }
    const handleGenderExp2 = e => {
        computeVal();
    }

    // const computeGenderExp = e => {
    //     return genderExp
    // }

    /*

    // Logic of Sliders:
    - Create data structure to throw terms we want to focus on
    - Think of it like the dimensions of a crane game (matrix)
    - Some things occupy the same space (like having a squirtle under a pikachu)
    - Matrixes can have overlapping values
    - 

    // Target Ranges
    - Could have a Limit Table with a Lower and Upper Limit to define the range of possibilities
    - Then have the actual value of the 

    // Possible Solution
    - Have one slider by negative numbers, and the other slider be positive numbers
    - Then when you add them together, you get number that is in between -10 and 10
    Ex: 
    Maleness = -8 (very male)
    Femaleness = 8 (very female)
    = 
    0 (genderless, gender neutral, agender, etc.


        Gender Expressions to Test:
        - butch
        - femme
        - androgynous
        - 



    */

    return (
        <div>
            <h2>Gender Expression</h2>
            <div className="genderexp1">
            
                <input onChange={handleGenderExp1} ref={genderexp1Ref} type="range" min="-100" max="0" defaultValue="-50" step="1" className="slider reverse-range" label="Feminine Expression Slider"/>
            </div>
            <div className="genderexp2">
                <input onChange={handleGenderExp2} ref={genderexp2Ref} type="range" min="0" max="100" defaultValue="50" step="1" className="slider" label="Masculine Expression Slider"/>
            </div>
            <div>
            {genderExp}
            </div>
            <button>Submit Yo Gender</button>
            <div>
                
            </div>
        
        </div>
    )
}

export default GenderExpressionSlider
